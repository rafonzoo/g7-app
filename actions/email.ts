'use server'

import { Routes } from '@/config/const'
import { redirect, RedirectType } from 'next/navigation'
import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL_FROM,
      pass: process.env.NODEMAILER_PW,
    },
  })

  const emailConfig = {
    from: 'No-reply RFZ Forwarder',
    to: process.env.NODEMAILER_EMAIL_TO ?? '',
    subject: ((formData.get('subject') as string) || null) ?? '',
    text: [
      `Nama: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Alamat: ${formData.get('address')}`,
      `Pesan: ${formData.get('message')}`,
    ].join('\n'),
  }

  const isEmailSent = await new Promise<boolean>((resolve, reject) => {
    transporter.sendMail(emailConfig, (error, info) => {
      if (error) throw reject(error)

      console.log('Message sent!')
      resolve(true)
    })
  })

  if (isEmailSent) {
    redirect(Routes.thankyou, RedirectType.replace)
  } else {
    redirect(Routes.contact + '/?ctx=error')
  }
}
