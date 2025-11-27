import React, { useRef, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import '../../css/custom.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({});

    // Sanitize input to remove potentially harmful content
    const sanitizeInput = (input) => {
        return input
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
            .replace(/<[^>]*>/g, '') // Remove all HTML tags
            .replace(/javascript:/gi, '') // Remove javascript: protocols
            .replace(/on\w+=/gi, '') // Remove event handlers
            .trim();
    };

    // Validate email with stricter pattern
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    // Validate message content
    const validateMessage = (message) => {
        // Check for minimum length
        if (message.length < 10) return false;

        // Check for maximum length (prevent spam)
        if (message.length > 1000) return false;

        // Allow alphanumeric, spaces, and basic punctuation
        const allowedPattern = /^[a-zA-Z0-9\s.,!?;:()\-'"]+$/;
        return allowedPattern.test(message);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const formData = new FormData(event.target);
        const email = sanitizeInput(formData.get('email'));
        const message = sanitizeInput(formData.get('message'));

        const newErrors = {};

        // Enhanced validation
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please provide a valid email address';
        }

        if (!message) {
            newErrors.message = 'Message is required';
        } else if (!validateMessage(message)) {
            newErrors.message = 'Message contains invalid characters or is too long/short (10-1000 characters, letters, numbers, and basic punctuation only)';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setValidated(true);
            return;
        }

        // Clear errors and proceed
        setErrors({});

        // Update form values with sanitized data
        form.current.querySelector('[name="email"]').value = email;
        form.current.querySelector('[name="message"]').value = message;

        // Form is valid and sanitized, proceed with EmailJS
        try {
            emailjs
                .sendForm('service_llezuqd', 'template_qnlw3jm', form.current, {
                    publicKey: 'iNosmceV3Tq8GBufS',
                })
                .then(
                    () => {
                        alert('Message sent successfully!');
                        form.current.reset();
                        setValidated(false);
                        setErrors({});
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setErrors({ submit: 'Failed to send message. Please try again.' });
                    }
                );
        } catch (error) {
            console.error('EmailJS error:', error);
            setErrors({ submit: 'An error occurred. Please try again.' });
        }
    };

    return (
        <>
            {errors.submit && (
                <Alert variant="danger">{errors.submit}</Alert>
            )}

            <Form
                ref={form}
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
                validated={validated}
            >
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email || 'Please provide a valid email address.'}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Looks good!
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Your message here (letters, numbers, and basic punctuation only)"
                        name="message"
                        required
                        minLength={10}
                        maxLength={1000}
                        isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message || 'Please provide a message (10-1000 characters).'}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Looks good!
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <a href="https://x.com/seanpetersdev" target="_blank" rel="noreferrer">
                    <Image src="twit.png" alt="Twitter" className="socialIcon p-2" /></a>


                <a href="https://medium.com/@sean.r.ptrs" target="_blank" rel="noreferrer"><Image src="medium.png" alt="Medium" className="socialIcon p-2" /></a>
            </Form>

        </>
    );
};

export default Contact;