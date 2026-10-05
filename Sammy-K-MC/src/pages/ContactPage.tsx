import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Pages.css';

const initialFormState = {
  name: '',
  email: '',
  eventType: '',
  customEventType: '',
  eventDate: '',
  venue: '',
  guestCount: '',
  message: ''
};

export function ContactPage() {
  const location = useLocation();
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() as string | undefined;
  const [form, setForm] = useState(initialFormState);
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (location.hash === '#booking') {
      const target = document.getElementById('booking');
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitState('loading');
    setFeedback('');

    if (form.eventType === 'other' && !form.customEventType.trim()) {
      setSubmitState('error');
      setFeedback('Please tell us the type of event so we can prepare the right brief.');
      return;
    }

    if (!formEndpoint) {
      setSubmitState('error');
      setFeedback('The enquiry form is temporarily unavailable. Please email oduntandaniel6@gmail.com directly.');
      return;
    }

    const resolvedEventType = form.eventType === 'other'
      ? form.customEventType.trim() || 'Other / Not listed'
      : form.eventType;

    const payload = {
      ...form,
      eventType: resolvedEventType,
      _subject: `Booking enquiry from ${form.name}`
    };

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitState('success');
      setFeedback('Your enquiry has been sent successfully. The MC will be in touch soon.');
      setForm(initialFormState);
      return;
    } catch {
      setSubmitState('error');
      setFeedback('The form could not be sent right now. Please email oduntandaniel6@gmail.com directly or try again in a moment.');
      return;
    }
  };

  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <span className="section-kicker">Contact</span>
          <h1>Book a polished live experience.</h1>
          <p className="page-subtitle">
            Share your event brief and we will follow up with availability, fit, and next steps.
          </p>
        </header>

        <div className="contact-grid" id="booking">
          <div className="info-card contact-card">
            <h3>Direct enquiry</h3>
            <ul className="contact-list">
              <li>Email: oduntandaniel6@gmail.com</li>
              <li>Location: Nigeria • Ogun State • Ijebu Ode</li>
              <li>Availability: Open for new opportunities</li>
            </ul>
          </div>

          <form className="form-panel" onSubmit={handleSubmit}>
            <div className="field-row">
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
            </div>

            <div className="field-row">
              <label>
                Event Type
                <select name="eventType" value={form.eventType} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Corporate Gala">Corporate Gala</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Awards Night">Awards Night</option>
                  <option value="Private Celebration">Private Celebration</option>
                  <option value="other">Other / Not listed</option>
                </select>
              </label>
              <label>
                Event Date
                <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} required />
              </label>
            </div>

            {form.eventType === 'other' && (
              <label>
                Event Type Details
                <input
                  name="customEventType"
                  value={form.customEventType}
                  onChange={handleChange}
                  placeholder="Tell us the type of event"
                  required
                />
              </label>
            )}

            <div className="field-row">
              <label>
                Venue / City
                <input name="venue" value={form.venue} onChange={handleChange} />
              </label>
              <label>
                Approximate Guest Count
                <input name="guestCount" value={form.guestCount} onChange={handleChange} />
              </label>
            </div>

            <label>
              Event Brief
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your audience, tone, and goals for the event."
                required
              />
            </label>

            {feedback && (
              <p className={`form-status ${submitState}`}>
                {feedback}
              </p>
            )}

            <button type="submit" className="btn btn-primary" disabled={submitState === 'loading'}>
              {submitState === 'loading' ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
