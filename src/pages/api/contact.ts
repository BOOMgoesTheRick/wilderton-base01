import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const json = (msg: string, status = 200) =>
    new Response(JSON.stringify({ ok: status < 400, message: msg }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return json('invalid_body', 400);
  }

  const name    = (body.name    ?? '').trim();
  const org     = (body.org     ?? '').trim();
  const email   = (body.email   ?? '').trim();
  const subject = (body.subject ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !message) return json('missing_fields', 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json('invalid_email', 400);

  const user = process.env.ZOHO_USER;
  const pass = process.env.ZOHO_PASS;
  if (!user || !pass) return json('no_credentials', 500);

  const transporter = nodemailer.createTransport({
    host:   'smtp.zohocloud.ca',
    port:   465,
    secure: true,
    auth:   { user, pass },
  });

  const subjectLine = subject
    ? `Wilderton inquiry: ${subject} — ${name}`
    : `Wilderton inquiry from ${name} <${email}>`;

  const html = [
    `<p><strong>Name:</strong> ${name}</p>`,
    org ? `<p><strong>Organization:</strong> ${org}</p>` : '',
    `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>`,
    subject ? `<p><strong>Subject:</strong> ${subject}</p>` : '',
    `<hr/>`,
    `<p>${message.replace(/\n/g, '<br/>')}</p>`,
  ].join('');

  const text = [
    `Name: ${name}`,
    org ? `Organization: ${org}` : '',
    `Email: ${email}`,
    subject ? `Subject: ${subject}` : '',
    '',
    message,
  ].filter(Boolean).join('\n');

  try {
    await transporter.sendMail({
      from:    `"Wilderton Advisory" <${user}>`,
      to:      user,
      replyTo: email,
      subject: subjectLine,
      text,
      html,
    });
    return json('sent');
  } catch (err) {
    console.error('[contact] sendMail failed:', (err as Error).message);
    return json('send_failed', 500);
  }
};
