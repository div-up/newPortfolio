import { useState } from 'react';
import emailjs from '@emailjs/browser';

import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SectionLabel from '../components/SectionLabel';

const INITIAL_FORM = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_3ht09wb',
        'template_cuy0a9e',
        event.currentTarget,
        'eWmklf22qweZEz2Zc'
      );

      setForm(INITIAL_FORM);
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <SectionLabel label="GET IN TOUCH" />

      <SectionHeading accent="SOMETHING GREAT">
        LET'S MAKE
      </SectionHeading>

      <div className="contact-grid">
        <Reveal delay={0.15}>
          <div className="contact-details">
            <div>
              <div className="contact-label">EMAIL</div>
              <a href="mailto:divyanshukr786@gmail.com">
                divyanshukr786@gmail.com
              </a>
            </div>

            <div>
              <div className="contact-label">LINKEDIN</div>
              <a
                href="https://linkedin.com/in/divyanshu-upadhyay-dev"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/divyanshu-upadhyay-dev
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              required
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>

            {submitStatus === 'success' && (
              <p className="form-status success">
                MESSAGE SENT SUCCESSFULLY.
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="form-status error">
                SOMETHING WENT WRONG. PLEASE TRY AGAIN.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}