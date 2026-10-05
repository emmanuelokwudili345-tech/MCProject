import '../styles/Pages.css';

export function PrivacyPolicyPage() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <span className="section-kicker">Privacy Policy</span>
          <h1>How your information is handled.</h1>
          <p className="page-subtitle">
            We collect only the details needed to respond to your event enquiry and to provide a professional booking experience.
          </p>
        </header>

        <div className="split-layout split-layout-wide">
          <div className="copy-panel">
            <h3>Information we collect</h3>
            <p>
              When you enquire about booking Sammy K for an event, we may collect your name, email address, event type, event date, venue details, guest count, and the message you share about your event.
            </p>
            <p>
              This information is used to understand your event brief, confirm suitability, discuss availability, and follow up with the next steps for booking.
            </p>

            <h3>How we use it</h3>
            <p>
              We use your information only to respond to your enquiry, assess the event request, communicate availability and next steps, and maintain a record of the conversation for planning purposes.
            </p>

            <h3>Third-party services</h3>
            <p>
              Enquiries submitted through the booking form are processed through Formspree. This service may receive the submitted form data in order to deliver it to the relevant inbox for follow-up.
            </p>
          </div>

          <div className="stats-panel">
            <div className="mini-list">
              <p>Key points</p>
              <ul>
                <li>No unnecessary personal data is requested.</li>
                <li>We do not sell or rent client information.</li>
                <li>Information is only used for booking communication.</li>
                <li>We keep it only for as long as needed to handle the enquiry.</li>
              </ul>
            </div>

            <div className="mini-list">
              <p>Your rights</p>
              <ul>
                <li>You may request access to the information we hold.</li>
                <li>You may ask for a correction or deletion of your data.</li>
                <li>You may contact us to ask any privacy question.</li>
              </ul>
            </div>

            <div className="mini-list">
              <p>Contact</p>
              <ul>
                <li>Email: oduntandaniel6@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
