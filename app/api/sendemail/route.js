// app/api/sendemail/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();

  const serviceID = process.env.SERVICE_ID;
  const templateID = process.env.TEMPLATE_ID;
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;

  const templateParams = {
    name,
    email,
    message,
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      accessToken: privateKey, 
      template_params: templateParams,
    }),
  });

  if (response.ok) {
    return NextResponse.json({ success: true });
  } else {
    const errorText = await response.text();
    return NextResponse.json({ success: false, error: errorText }, { status: 500 });
  }
}
