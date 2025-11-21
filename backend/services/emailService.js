import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

class EmailService {
  /**
   * Send notification email to company when new quote request is submitted
   */
  static async sendQuoteNotification(quoteData) {
    try {
      const emailHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Quote Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0A86C4 0%, #065A8A 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center;">New Quote Request</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none;">
            <h2 style="color: #0A86C4; border-bottom: 2px solid #0A86C4; padding-bottom: 10px;">Contact Information</h2>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0;"><strong>Name:</strong></td>
                <td style="padding: 8px 0;">${quoteData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;"><a href="mailto:${quoteData.email}" style="color: #0A86C4;">${quoteData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0;"><a href="tel:${quoteData.phone}" style="color: #0A86C4;">${quoteData.formattedPhone || quoteData.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Address:</strong></td>
                <td style="padding: 8px 0;">${quoteData.address}</td>
              </tr>
            </table>

            <h2 style="color: #0A86C4; border-bottom: 2px solid #0A86C4; padding-bottom: 10px;">Project Details</h2>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0;"><strong>Project Type:</strong></td>
                <td style="padding: 8px 0;">${quoteData.projectType}</td>
              </tr>
              ${quoteData.budget ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Budget:</strong></td>
                <td style="padding: 8px 0;">${quoteData.budget}</td>
              </tr>
              ` : ''}
              ${quoteData.timeline ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Timeline:</strong></td>
                <td style="padding: 8px 0;">${quoteData.timeline}</td>
              </tr>
              ` : ''}
              ${quoteData.howHeard ? `
              <tr>
                <td style="padding: 8px 0;"><strong>How They Heard About Us:</strong></td>
                <td style="padding: 8px 0;">${quoteData.howHeard}</td>
              </tr>
              ` : ''}
            </table>

            <h3 style="color: #0A86C4;">Project Description:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #0A86C4; margin-bottom: 20px;">
              ${quoteData.projectDetails.replace(/\n/g, '<br>')}
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #e8f4f8; border-radius: 5px; text-align: center;">
              <p style="margin: 0 0 15px 0;"><strong>Submitted:</strong> ${new Date(quoteData.createdAt).toLocaleString('en-US', {
                timeZone: 'America/New_York',
                dateStyle: 'full',
                timeStyle: 'short'
              })}</p>
              <a href="tel:${quoteData.phone}" style="display: inline-block; padding: 12px 30px; background: #0A86C4; color: white; text-decoration: none; border-radius: 5px; margin: 5px;">Call Customer</a>
              <a href="mailto:${quoteData.email}" style="display: inline-block; padding: 12px 30px; background: #065A8A; color: white; text-decoration: none; border-radius: 5px; margin: 5px;">Email Customer</a>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>This is an automated notification from your website's quote request form.</p>
          </div>
        </body>
        </html>
      `;

      const emailText = `
New Quote Request

CONTACT INFORMATION
Name: ${quoteData.fullName}
Email: ${quoteData.email}
Phone: ${quoteData.formattedPhone || quoteData.phone}
Address: ${quoteData.address}

PROJECT DETAILS
Project Type: ${quoteData.projectType}
${quoteData.budget ? `Budget: ${quoteData.budget}` : ''}
${quoteData.timeline ? `Timeline: ${quoteData.timeline}` : ''}
${quoteData.howHeard ? `How They Heard About Us: ${quoteData.howHeard}` : ''}

Project Description:
${quoteData.projectDetails}

Submitted: ${new Date(quoteData.createdAt).toLocaleString('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'full',
        timeStyle: 'short'
      })}
      `;

      const result = await resend.emails.send({
        from: process.env.NOTIFICATION_EMAIL_FROM || 'Jax Pavers <info@jaxoutdoorspaces.com>',
        to: process.env.NOTIFICATION_EMAIL_TO || 'info@jaxoutdoorspaces.com',
        subject: `New Quote Request from ${quoteData.fullName}`,
        html: emailHtml,
        text: emailText,
        replyTo: quoteData.email
      });

      return { success: true, data: result };
    } catch (error) {
      console.error('Error sending quote notification email:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Send confirmation email to customer
   */
  static async sendCustomerConfirmation(quoteData) {
    try {
      const emailHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Quote Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0A86C4 0%, #065A8A 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You for Your Interest!</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none;">
            <p style="font-size: 16px;">Hi ${quoteData.fullName},</p>

            <p>Thank you for requesting a quote from Jax Pavers. We've received your project details and are excited about the opportunity to transform your outdoor space!</p>

            <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0A86C4;">
              <h3 style="color: #0A86C4; margin-top: 0;">What Happens Next?</h3>
              <ol style="padding-left: 20px;">
                <li style="margin-bottom: 10px;"><strong>Review:</strong> Our team will review your project requirements within 24 hours.</li>
                <li style="margin-bottom: 10px;"><strong>Contact:</strong> We'll reach out to schedule a convenient time for a consultation.</li>
                <li style="margin-bottom: 10px;"><strong>Site Visit:</strong> We'll visit your property to assess the project and take measurements.</li>
                <li style="margin-bottom: 10px;"><strong>Custom Quote:</strong> You'll receive a detailed, transparent quote with no hidden fees.</li>
              </ol>
            </div>

            <h3 style="color: #0A86C4;">Your Submitted Information:</h3>
            <div style="background: #e8f4f8; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 5px 0;"><strong>Project Type:</strong> ${quoteData.projectType}</p>
              <p style="margin: 5px 0;"><strong>Location:</strong> ${quoteData.address}</p>
              ${quoteData.timeline ? `<p style="margin: 5px 0;"><strong>Timeline:</strong> ${quoteData.timeline}</p>` : ''}
            </div>

            <p>If you have any immediate questions, feel free to:</p>
            <ul>
              <li>Call us at <a href="tel:19044451261" style="color: #0A86C4;">(904) 445-1261</a></li>
              <li>Email us at <a href="mailto:info@jaxoutdoorspaces.com" style="color: #0A86C4;">info@jaxoutdoorspaces.com</a></li>
            </ul>

            <div style="margin-top: 30px; padding: 20px; background: #065A8A; border-radius: 5px; text-align: center;">
              <p style="color: white; margin: 0; font-size: 18px;">We look forward to creating your dream outdoor space!</p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>Jax Pavers<br>
            Jacksonville, FL<br>
            <a href="https://www.jaxoutdoorspaces.com" style="color: #0A86C4;">www.jaxoutdoorspaces.com</a></p>
          </div>
        </body>
        </html>
      `;

      const result = await resend.emails.send({
        from: process.env.NOTIFICATION_EMAIL_FROM || 'Jax Pavers <info@jaxoutdoorspaces.com>',
        to: quoteData.email,
        subject: 'Thank You for Your Quote Request - Jax Pavers',
        html: emailHtml,
        replyTo: 'info@jaxoutdoorspaces.com'
      });

      return { success: true, data: result };
    } catch (error) {
      console.error('Error sending customer confirmation email:', error);
      return { success: false, error: error.message };
    }
  }
}

export default EmailService;