import { Resend } from 'resend';

const resend = new Resend("re_Znsxmt6o_FKxRLj8UiATUfp6HZkHQGCux:");

export const sendEmail = async (email: string, content: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Hello world',
      html: `<h1>${content}</h1>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
