import { useState } from 'react';
import './ContactForm.css';

// Email regex for validation
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* ---------- validation ---------- */
  function validate(data) {
    const e = {};
    if (!data.name.trim()) e.name = 'Full name is required.';
    if (!data.email.trim()) {
      e.email = 'Email address is required.';
    } else if (!EMAIL_RE.test(data.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!data.subject.trim()) e.subject = 'Subject is required.';
    if (!data.message.trim()) {
      e.message = 'Message is required.';
    } else if (data.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters.';
    }
    return e;
  }

  const currentErrors = validate(formData);
  const isValid = Object.keys(currentErrors).length === 0;

  /* ---------- handlers ---------- */
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    // Show error on blur if field is invalid
    if (currentErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: currentErrors[name] }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate successful form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  }

  if (submitted) {
    return (
      <div className="contact-form-wrap">
        <p className="form-success-msg" role="status">
          ✅ Thanks, {formData.name || 'there'}! Your message has been received. I&apos;ll get back to you soon.
        </p>
        <div className="form-submit-row" style={{ marginTop: '16px' }}>
          <button
            id="send-another-btn"
            className="btn btn-outline"
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-wrap">
      <form
        id="contact-form"
        noValidate
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
        {/* Row 1: Name + Email */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name">
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              className={`form-control${errors.name ? ' error-input' : ''}`}
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="name"
              aria-required="true"
              aria-describedby={errors.name ? 'error-name' : undefined}
            />
            {errors.name && (
              <span id="error-name" className="field-error" role="alert">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              className={`form-control${errors.email ? ' error-input' : ''}`}
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
              aria-required="true"
              aria-describedby={errors.email ? 'error-email' : undefined}
            />
            {errors.email && (
              <span id="error-email" className="field-error" role="alert">{errors.email}</span>
            )}
          </div>
        </div>

        {/* Row 2: Subject */}
        <div className="form-row">
          <div className="form-group full">
            <label htmlFor="contact-subject">
              Subject <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              className={`form-control${errors.subject ? ' error-input' : ''}`}
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-describedby={errors.subject ? 'error-subject' : undefined}
            />
            {errors.subject && (
              <span id="error-subject" className="field-error" role="alert">{errors.subject}</span>
            )}
          </div>
        </div>

        {/* Row 3: Message */}
        <div className="form-row">
          <div className="form-group full">
            <label htmlFor="contact-message">
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              className={`form-control${errors.message ? ' error-input' : ''}`}
              placeholder="Write your message here…"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-describedby={errors.message ? 'error-message' : undefined}
            />
            {errors.message && (
              <span id="error-message" className="field-error" role="alert">{errors.message}</span>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="form-submit-row">
          <button
            id="submit-message-btn"
            type="submit"
            className="btn"
            disabled={!isValid}
            aria-disabled={!isValid}
            title={!isValid ? 'Please fill in all required fields' : 'Send your message'}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
