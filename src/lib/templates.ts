export interface AppointmentData {
    name: string;
    email: string;
    phone: string;
    date: string;
    message: string;
}

/* ── 1. ADMIN ENQUIRY TEMPLATE ────────────────────────────── */
export function adminTemplate(data: AppointmentData) {
    const currentYear = new Date().getFullYear();

    const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 16px;font-size:13px;color:#64748b;font-weight:600;width:140px;border-bottom:1px solid #f1f5f9;">
        ${label}
      </td>
      <td style="padding:12px 16px;font-size:13px;color:#0f172a;border-bottom:1px solid #f1f5f9;">
        ${value}
      </td>
    </tr>
  `;

    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#B185DB 0%,#8b5ebd 100%);border-radius:16px 16px 0 0;padding:32px 36px;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.7);">Dr. Prachi's Dental Clinic</p>
          <h1 style="margin:0;font-size:22px;font-weight:800;color:#fff;letter-spacing:-.02em;">📅 New Appointment Request</h1>
          <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,.75);">A patient has requested an appointment from the website.</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#fff;padding:28px 36px 8px;">
          <p style="margin:0 0 20px;font-size:13px;color:#64748b;">Here are the submitted details:</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
            ${row("Name", data.name)}
            ${row("Phone", data.phone)}
            ${row("Email", data.email)}
            ${row("Appointment Date", data.date)}
            ${row("Message", data.message || "N/A")}
          </table>
        </td></tr>

        <!-- CTA -->
        <tr><td style="background:#fff;padding:24px 36px 32px;">
          <a href="tel:+91${data.phone}" style="display:inline-block;background:#B185DB;color:#fff;font-size:13px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:10px;">
            Call ${data.name} to Confirm
          </a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 36px;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:11px;color:#94a3b8;">© ${currentYear} Dr. Prachi's Dental Clinic · This is an automated website notification.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ── 2. USER ENQUIRY CONFIRMATION TEMPLATE ───────────────────── */
export function userTemplate(data: AppointmentData) {
    const currentYear = new Date().getFullYear();

    const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 16px;font-size:13px;color:#64748b;font-weight:600;width:120px;vertical-align:top;border-bottom:1px solid #f1f5f9;">${label}</td>
      <td style="padding:12px 16px;font-size:13px;color:#0f172a;border-bottom:1px solid #f1f5f9;line-height:1.5;">${value}</td>
    </tr>`;

    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#B185DB 0%,#8b5ebd 100%);border-radius:16px 16px 0 0;padding:36px 36px 32px;text-align:center;">
          <div style="width:56px;height:56px;background:rgba(255,255,255,.15);border-radius:16px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:28px;line-height:56px;">🦷</div>
          <h1 style="margin:0 0 6px;font-size:24px;font-weight:800;color:#fff;letter-spacing:-.02em;">Request Received!</h1>
          <p style="margin:0;font-size:14px;color:rgba(255,255,255,.8);">Dr. Prachi's Dental Clinic</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#fff;padding:36px 36px 8px;">
          <p style="margin:0 0 16px;font-size:16px;color:#0f172a;font-weight:700;">Hi ${data.name},</p>
          <p style="margin:0 0 20px;font-size:14px;color:#475569;line-height:1.7;">
            Thank you for reaching out to <strong style="color:#B185DB;">Dr. Prachi's Dental Clinic</strong>. We have successfully received your appointment request.
          </p>
          
          <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:.04em;">Your Details:</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:24px;">
            ${row('Full Name', `<span style="color:#B185DB;font-weight:700;">${data.name}</span>`)}
            ${row('Phone', `<span style="color:#B185DB;font-weight:700;">${data.phone}</span>`)}
            ${row('Requested Date', `<span style="color:#0f172a;">${data.date}</span>`)}
          </table>

          <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.7;">
            Our clinic coordinator will call you shortly on <strong>${data.phone}</strong> to confirm the exact time slot for your visit.
          </p>
        </td></tr>

        <!-- Divider -->
        <tr><td style="background:#fff;padding:24px 36px 0;">
          <div style="border-top:1px solid #f1f5f9;"></div>
        </td></tr>

        <!-- Contact strip -->
        <tr><td style="background:#fff;padding:20px 36px 32px;">
          <p style="margin:0 0 12px;font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;">Need immediate help?</p>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-right:20px;">
                <a href="tel:+918208698255" style="font-size:13px;font-weight:700;color:#B185DB;text-decoration:none;"><span style="font-size:13px;">📞</span> +91 82-086-98255</a>
              </td>  </tr>
              <tr>
              <td>
                <a href="mailto:drprachisdentalclinic@gmail.com" style="font-size:13px;font-weight:700;color:#B185DB;text-decoration:none;"><span style="font-size:16px;">✉</span> drprachisdentalclinic@gmail.com</a>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 36px;border-top:1px solid #e2e8f0;text-align:center;">
          <p style="margin:0 0 4px;font-size:11px;color:#94a3b8;">© ${currentYear} Dr. Prachi's Dental Clinic. All rights reserved.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}