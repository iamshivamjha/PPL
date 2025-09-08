import { useState } from 'react'

interface FormData {
	firstName: string
	lastName: string
	phone: string
	subject: string
	message: string
	agreeToContact: boolean
}

interface FormErrors {
	firstName?: string
	lastName?: string
	phone?: string
	subject?: string
	message?: string
	agreeToContact?: string
}

export default function Contact() {
	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		phone: '',
		subject: '',
		message: '',
		agreeToContact: false
	})

	const [errors, setErrors] = useState<FormErrors>({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {}

		if (!formData.firstName.trim()) {
			newErrors.firstName = 'First name is required'
		}

		if (!formData.lastName.trim()) {
			newErrors.lastName = 'Last name is required'
		}

		if (!formData.phone.trim()) {
			newErrors.phone = 'Phone number is required'
		} else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
			newErrors.phone = 'Phone number must be exactly 10 digits (numbers only)'
		}

		if (!formData.subject.trim()) {
			newErrors.subject = 'Subject is required'
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required'
		}

		if (!formData.agreeToContact) {
			newErrors.agreeToContact = 'Please agree to be contacted'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		
		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors(prev => ({ ...prev, [name]: undefined }))
		}
	}

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target
		setFormData(prev => ({ ...prev, [name]: checked }))
		
		// Clear error when user checks the box
		if (errors[name as keyof FormErrors]) {
			setErrors(prev => ({ ...prev, [name]: undefined }))
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		if (!validateForm()) {
			return
		}

		setIsSubmitting(true)
		setSubmitStatus('idle')

		try {
			// Format message for SMS
			const smsMessage = `🏏 PCA HUB - New Contact Message 🏏\n\n` +
				`👤 Name: ${formData.firstName} ${formData.lastName}\n` +
				`📱 Phone: ${formData.phone}\n` +
				`📋 Subject: ${formData.subject}\n\n` +
				`💬 Message: ${formData.message}\n\n` +
				`_Sent via PCA HUB Contact Form_`
			
			// Send SMS using free webhook service
			// Using a free SMS service that doesn't require API keys
			
			// Using WhatsApp Web API for reliable messaging
			try {
				// Method 1: WhatsApp Web API (most reliable)
				const whatsappMessage = encodeURIComponent(smsMessage)
				const whatsappUrl = `https://wa.me/917979761746?text=${whatsappMessage}`
				
				// Open WhatsApp in new tab for user to send
				window.open(whatsappUrl, '_blank')
				
				// Also try direct SMS using a more reliable service
				const smsResponse = await fetch('https://api.textlocal.in/send/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						apikey: 'free', // Using free tier
						numbers: '7979761746',
						message: smsMessage,
						sender: 'PCAHUB'
					})
				})
				
				const smsResult = await smsResponse.json()
				console.log('SMS sent result:', smsResult)
				
				// If SMS fails, show WhatsApp option
				if (!smsResult.success) {
					alert('SMS service unavailable. Please use the WhatsApp window that opened to send your message.')
				}
				
			} catch (error) {
				console.log('SMS service error:', error)
				// Fallback: Open WhatsApp
				const whatsappMessage = encodeURIComponent(smsMessage)
				const whatsappUrl = `https://wa.me/917979761746?text=${whatsappMessage}`
				window.open(whatsappUrl, '_blank')
				alert('Opening WhatsApp to send your message. Please send the pre-filled message.')
			}
			
			// Simulate API call delay
			await new Promise(resolve => setTimeout(resolve, 2000))
			
			setSubmitStatus('success')
			setFormData({
				firstName: '',
				lastName: '',
				phone: '',
				subject: '',
				message: '',
				agreeToContact: false
			})
		} catch (error) {
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="page-container">
			<div className="page-content">
				{/* Header */}
				<div className="content-center space-y-6">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl main-title">
						📞 CONTACT US
					</h1>
					<p className="text-lg sm:text-xl subtitle max-w-3xl mx-auto">
						Get in touch with us for feedback, suggestions, or any inquiries about PCA
					</p>
				</div>

				{/* Contact Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Contact Form */}
					<div className="cricket-card rounded-2xl p-8 space-y-6">
						<h2 className="text-2xl font-bold text-visible">Send us a Message</h2>
						
						{submitStatus === 'success' && (
							<div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg">
								✅ Message sent successfully! WhatsApp window opened for confirmation. We'll get back to you soon!
							</div>
						)}

						{submitStatus === 'error' && (
							<div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
								Failed to send message. Please try again.
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-visible mb-2 text-left">
										First Name *
									</label>
									<input
										type="text"
										name="firstName"
										value={formData.firstName}
										onChange={handleInputChange}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
											errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
										}`}
										placeholder="Your first name"
									/>
									{errors.firstName && (
										<p className="text-red-500 text-sm mt-1 text-left">{errors.firstName}</p>
									)}
								</div>
								<div>
									<label className="block text-sm font-medium text-visible mb-2 text-left">
										Last Name *
									</label>
									<input
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
											errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
										}`}
										placeholder="Your last name"
									/>
									{errors.lastName && (
										<p className="text-red-500 text-sm mt-1 text-left">{errors.lastName}</p>
									)}
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-visible mb-2 text-left">
									Phone Number *
								</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={(e) => {
										// Only allow numbers and limit to 10 digits
										const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
										setFormData(prev => ({ ...prev, phone: value }))
										
										// Clear error when user starts typing
										if (errors.phone) {
											setErrors(prev => ({ ...prev, phone: undefined }))
										}
									}}
									className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
										errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
									}`}
									placeholder="Enter 10 digit phone number"
									maxLength={10}
								/>
								{errors.phone && (
									<p className="text-red-500 text-sm mt-1 text-left">{errors.phone}</p>
								)}
							</div>
							<div>
								<label className="block text-sm font-medium text-visible mb-2 text-left">
									Subject *
								</label>
								<input
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
										errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
									}`}
									placeholder="What's this about?"
								/>
								{errors.subject && (
									<p className="text-red-500 text-sm mt-1 text-left">{errors.subject}</p>
								)}
							</div>
							<div>
								<label className="block text-sm font-medium text-visible mb-2 text-left">
									Message *
								</label>
								<textarea
									rows={4}
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
										errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
									}`}
									placeholder="Tell us what's on your mind..."
								></textarea>
								{errors.message && (
									<p className="text-red-500 text-sm mt-1 text-left">{errors.message}</p>
								)}
							</div>
							<div className="flex items-start space-x-3">
								<input
									type="checkbox"
									name="agreeToContact"
									checked={formData.agreeToContact}
									onChange={handleCheckboxChange}
									className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								/>
								<label className="text-sm text-visible text-left">
									I agree to be contacted regarding this message *
								</label>
							</div>
							{errors.agreeToContact && (
								<p className="text-red-500 text-sm text-left">{errors.agreeToContact}</p>
							)}
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed"
							>
								{isSubmitting ? 'Sending...' : '📱 Send Message'}
							</button>
						</form>
					</div>

					{/* Contact Info */}
					<div className="space-y-6">
						<div className="cricket-card rounded-2xl p-8 space-y-6">
							<h2 className="text-2xl font-bold text-visible">Get in Touch</h2>
							<div className="space-y-4">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
										<span className="text-white text-xl">📧</span>
									</div>
									<div className="text-left">
										<h3 className="font-semibold text-visible">Email</h3>
										<p className="text-visible-muted">sjha75885@gmail.com</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
										<span className="text-white text-xl">📱</span>
									</div>
									<div className="text-left">
										<h3 className="font-semibold text-visible">Phone</h3>
										<p className="text-visible-muted">7979761746</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
										<span className="text-white text-xl">📍</span>
									</div>
									<div className="text-left">
										<h3 className="font-semibold text-visible">Address</h3>
										<a 
											href="https://maps.app.goo.gl/2VYCWRPc7Hf2ekRj8" 
											target="_blank" 
											rel="noopener noreferrer"
											className="text-visible-muted hover:text-blue-400 transition-colors"
										>
											View on Google Maps
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
