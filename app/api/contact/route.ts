import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '../../../utils/emailSender'

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Input validation function
function validateInput(data: any) {
  const { name, email, subject, message } = data
  
  if (!name?.trim()) {
    return { isValid: false, error: 'Name is required' }
  }
  
  if (!email?.trim()) {
    return { isValid: false, error: 'Email is required' }
  }
  
  if (!isValidEmail(email)) {
    return { isValid: false, error: 'Please enter a valid email address' }
  }
  
  if (!subject?.trim()) {
    return { isValid: false, error: 'Subject is required' }
  }
  
  if (!message?.trim()) {
    return { isValid: false, error: 'Message is required' }
  }
  
  if (message.length > 2000) {
    return { isValid: false, error: 'Message is too long (max 2000 characters)' }
  }
  
  return { isValid: true }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validation = validateInput(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = body

    // Log the contact form submission
    const timestamp = new Date().toISOString()
    const contactData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    }

    console.log('📧 New Contact Form Submission:', {
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
      timestamp: contactData.timestamp
    })
      console.log('💬 Message:', contactData.message)

    // Try to send email
    try {
      const emailSent = await sendContactEmail({
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message
      })

      if (emailSent) {
        console.log('✅ Email sent successfully to aziz.jrad@esen.tn')
      } else {
        console.log('⚠️ Email not sent - credentials not configured, but form submission logged')
      }
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError)
    }

    // Always return success to user (email failure shouldn't block user feedback)
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Contact form error:', error)
    
    return NextResponse.json(
      { 
        error: 'Sorry, there was an issue sending your message. Please try again later or contact me directly.' 
      },
      { status: 500 }
    )
  }
}
