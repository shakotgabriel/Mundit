import emailjs from '@emailjs/browser';

export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

export const initEmailJs = () => {
  if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
    console.error('EmailJS configuration missing:', {
      serviceId: !!emailConfig.serviceId,
      templateId: !!emailConfig.templateId,
      publicKey: !!emailConfig.publicKey,
    });
    throw new Error('EmailJS configuration is incomplete');
  }
  emailjs.init(emailConfig.publicKey);
};

export interface EmailParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  subject?: string;
  inquiry_type?: string;
  to_name: string;
  reply_to: string;
}

export const sendEmail = async (params: EmailParams) => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId!,
      emailConfig.templateId!,
      params,
      emailConfig.publicKey!
    );
    return { success: true, status: response.status };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
};