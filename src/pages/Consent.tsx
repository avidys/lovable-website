import { useEffect, useState } from "react";
import "./Consent.css";

export default function Consent() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Consent to Receive SMS Notifications";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Consent form for receiving SMS notifications from Avidys LLC."
      );
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!phoneNumber.trim() || !consentGiven) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="consent-page">
        <section className="consent-card" aria-labelledby="consent-title">
          <h1 id="consent-title">Consent to Receive SMS Notifications</h1>

          <p>
            By checking the box below and clicking "Submit," I explicitly
            consent to receive text messages (SMS) from Avidys LLC regarding
            reminders of daily quiz and other related notifications.
          </p>

          <h2>Required Disclosures</h2>
          <ul className="disclosures">
            <li>
              <strong>Frequency:</strong> Message frequency will vary. You may
              receive up to 2 messages per day.
            </li>
            <li>
              <strong>Costs:</strong> Message and data rates may apply according
              to your mobile service provider's terms.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may unsubscribe or stop receiving
              messages at any time by replying STOP to any text message.
            </li>
            <li>
              <strong>Support:</strong> For help, reply HELP or contact
              <a href="mailto:contact@avidys.com"> contact@avidys.com</a>.
            </li>
            <li>
              <strong>Privacy:</strong> Your consent is not a condition of
              purchase. For details on how we handle your data, please review
              our
              <a
                href="/Privacy-Policy.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Authentication:</strong> You represent that you are the
              owner or authorized user of the mobile phone number provided
              below.
            </li>
          </ul>

          <form className="consent-form" onSubmit={handleSubmit}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="Enter your mobile phone number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <label className="checkbox-row" htmlFor="sms-consent">
              <input
                id="sms-consent"
                type="checkbox"
                name="sms-consent"
                required
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
              />
              <span>
                I agree to the terms above and consent to receive SMS messages
                from Avidys LLC.
              </span>
            </label>

            <button className="primary" type="submit">
              Agree and Submit
            </button>
          </form>

          {submitted && (
            <div className="confirmation" role="status">
              <h2>Thank you</h2>
              <p>
                Thanks for signing up! You've opted in to receive texts from
                Avidys LLC. Reply YES to confirm. Msg & data rates may apply.
                Reply STOP to cancel.
              </p>
            </div>
          )}
        </section>
    </div>
  );
}
