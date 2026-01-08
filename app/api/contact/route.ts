import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration - works with cPanel hosting
function createTransporter() {
  // Use environment variables with fallback to hardcoded values for cPanel
  const emailHost = process.env.EMAIL_HOST || 'ultra.webfastdns.com';
  const emailPort = Number(process.env.EMAIL_PORT) || 465;
  const emailUser = process.env.EMAIL_USER || 'contact@modernsoftinnovations.com';
  const emailPass = process.env.EMAIL_PASS || 'sadmanceo@';

  console.log('Email config:', {
    host: emailHost,
    port: emailPort,
    user: emailUser,
    passSet: !!emailPass
  });

  return nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: true, // true for 465, false for other ports
    auth: {
      user: emailUser,
      pass: emailPass
    },
    tls: {
      rejectUnauthorized: false // Don't fail on invalid certs (common in cPanel)
    },
    debug: process.env.NODE_ENV === 'development',
    logger: process.env.NODE_ENV === 'development'
  });
}

export async function POST(req: Request) {
  try {
    console.log('Contact form submission received');

    // Parse form data
    const data = await req.json();
    const { fullName, email, phone, company, service, budget, projectBrief } = data;

    // Validate required fields
    if (!fullName || !email || !service || !projectBrief) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Determine recipient email (use EMAIL_TO if set, otherwise use EMAIL_USER)
    const recipientEmail = process.env.EMAIL_TO || process.env.EMAIL_USER || 'contact@modernsoftinnovations.com';

    // Format email content
    const emailContent = `
New Contact Form Submission

Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Service Interested In: ${service}
Project Budget: ${budget || 'Not provided'}

Project Brief:
${projectBrief}
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Form Submission</h2>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Interested In:</strong> ${service}</p>
          <p><strong>Project Budget:</strong> ${budget || 'Not provided'}</p>
        </div>
        <div style="background: #fff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Project Brief:</h3>
          <p style="white-space: pre-wrap; color: #666;">${projectBrief}</p>
        </div>
      </div>
    `;

    // Send email to admin
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER || 'contact@modernsoftinnovations.com',
      to: recipientEmail,
      subject: `New Contact Form Submission from ${fullName}`,
      text: emailContent,
      html: htmlContent,
      replyTo: email
    });

    console.log('Email sent successfully:', info.messageId);

    // Send auto-reply to user (optional, don't fail if this fails)
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER || 'contact@modernsoftinnovations.com',
        to: email,
        subject: 'Thank you for contacting Modernsoft Innovations',
        text: `Dear ${fullName},

Thank you for reaching out to Modernsoft Innovations. We have received your message and will get back to you within 2 business hours.

Best regards,
The Modernsoft Innovations Team`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">Thank you for contacting us!</h2>
            <p>Dear ${fullName},</p>
            <p>Thank you for reaching out to Modernsoft Innovations. We have received your message and will get back to you within 2 business hours.</p>
            <p>Best regards,<br>The Modernsoft Innovations Team</p>
          </div>
        `
      });
      console.log('Auto-reply sent successfully');
    } catch (autoReplyError) {
      console.error('Failed to send auto-reply (non-critical):', autoReplyError);
      // Don't fail the request if auto-reply fails
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.'
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Return user-friendly error message
    const errorMessage = process.env.NODE_ENV === 'development'
      ? `Failed to send email: ${error.message}`
      : 'Failed to send email. Please try again later or contact us directly.';

    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}

