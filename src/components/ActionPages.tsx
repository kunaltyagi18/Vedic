import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Heart,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

function Field({ label, placeholder, type = 'text', required = false }: { label: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <label className="action-field">
      <span>{label}{required && <b>*</b>}</span>
      <input type={type} placeholder={placeholder} required={required} />
    </label>
  );
}

function FormSection({ number, icon: Icon, title, description, children }: { number: string; icon: typeof UserRound; title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="form-section">
      <div className="form-section-heading">
        <span className="form-section-number">{number}</span>
        <div>
          <h2><Icon size={15} />{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="form-fields">{children}</div>
    </section>
  );
}

export function RegisterPage() {
  return (
    <section className="action-page register-page">
      <div className="action-backdrop" style={{ backgroundImage: "url('/images/community-education.jpg')" }} />
      <div className="action-backdrop-shade" />
      <div className="site-container action-container">
        <div className="action-heading">
          <p className="action-breadcrumb">Home <span>/</span> Registration</p>
          <h1>Become part of the VGF family card network</h1>
          <p>Share a few identity and contact details so our onboarding team can reach you. Your registration will be reviewed and you&apos;ll be notified once approved.</p>
        </div>

        <div className="register-layout">
          <aside className="registration-checklist">
            <p className="checklist-kicker">Before you begin</p>
            <h2>Registration checklist</h2>
            <p>Collect the following before you begin. Accurate details help us verify your identity quickly and understand how the trust can support your family.</p>
            <ul>
              <li><CheckCircle2 size={14} />Keep names exactly as they appear on your government ID.</li>
              <li><CheckCircle2 size={14} />Use a working phone number and email so we can reach you.</li>
              <li><CheckCircle2 size={14} />Upload valid Aadhaar and PAN details when the window opens.</li>
              <li><CheckCircle2 size={14} />Share complete address information to help us map your region.</li>
            </ul>
            <div className="checklist-help">
              <strong>Need help?</strong>
              <span>Write to vgfctrust2023@gmail.com or call +91 9050940609.</span>
            </div>
          </aside>

          <form className="action-form register-form">
            <FormSection number="01" icon={UserRound} title="Personal information" description="These fields should match your official identity proof.">
              <Field label="First name" placeholder="Enter your first name" required />
              <Field label="Last name" placeholder="Use the name on your ID" required />
              <Field label="Father&apos;s name" placeholder="Enter father&apos;s full name" required />
              <Field label="Mother&apos;s name" placeholder="Enter mother&apos;s full name" required />
              <Field label="Date of birth" placeholder="dd / mm / yyyy" type="date" required />
              <label className="action-field"><span>Gender<b>*</b></span><select required defaultValue=""><option value="" disabled>Select gender</option><option>Female</option><option>Male</option><option>Prefer not to say</option></select></label>
              <label className="action-field"><span>Occupation</span><select defaultValue=""><option value="">Select occupation</option><option>Student</option><option>Self-employed</option><option>Employed</option><option>Homemaker</option><option>Other</option></select></label>
            </FormSection>

            <FormSection number="02" icon={Phone} title="Contact details" description="We will use these channels for status updates and support.">
              <Field label="Primary phone number" placeholder="+91 90000 00000" type="tel" required />
              <Field label="WhatsApp number" placeholder="+91 90000 00000" type="tel" />
              <Field label="Email address" placeholder="you@email.com" type="email" required />
            </FormSection>

            <FormSection number="03" icon={MapPin} title="Present address" description="Provide the location where you currently reside or operate from.">
              <Field label="Address" placeholder="Street address, building, locality / village" required />
              <Field label="City / Block" placeholder="City / Town / Block" required />
              <label className="action-field"><span>State / Union Territory<b>*</b></span><select required defaultValue=""><option value="" disabled>Select state</option><option>Haryana</option><option>Punjab</option><option>Delhi</option><option>Other</option></select></label>
              <Field label="District" placeholder="Enter district" required />
              <Field label="Country" placeholder="India" required />
              <Field label="Pincode / ZIP" placeholder="6 digit postal code" required />
            </FormSection>

            <FormSection number="04" icon={ShieldCheck} title="Legal verification" description="These numbers are encrypted and are only used for compliance.">
              <Field label="Aadhaar number" placeholder="Enter 12 digit Aadhaar number" required />
              <label className="check-row"><input type="checkbox" required /> <span>I have read and accept the <a href="/terms">VGF Family Card terms and conditions</a>.</span></label>
              <label className="check-row"><input type="checkbox" /> <span>We would like to receive communications from Vedic Global Foundation Charitable Trust via SMS and email.</span></label>
            </FormSection>

            <div className="form-submit-row">
              <p>Registrations for VGF FAMILY CARD are currently closed. Registration will be open soon.</p>
              <button type="submit" disabled>Registration will open soon <ArrowRight size={17} /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function DonatePage() {
  return (
    <section className="action-page donate-page">
      <div className="action-backdrop" style={{ backgroundImage: "url('/images/community-healthcare.jpg')" }} />
      <div className="action-backdrop-shade" />
      <div className="site-container donate-layout">
        <div className="donate-copy">
          <p className="donate-kicker"><Heart size={21} />Donate</p>
          <h1>Join the movement<br />of giving</h1>
          <p>Your contribution helps bring education, healthcare, nutrition and dignity closer to the communities we serve.</p>
          <span className="donate-note"><ShieldCheck size={16} />Secure and purpose-led support</span>
        </div>

        <form className="action-form donate-form">
          <h2>Donate &amp; Make an Impact</h2>
          <label className="action-field full-field"><span>Donation amount (₹)<b>*</b></span><div className="rupee-input"><IndianRupee size={16} /><input type="number" min="1" placeholder="Enter amount" required /></div></label>
          <div className="amount-presets">
            {[500, 1000, 2500, 5000, 10000].map(amount => <button type="button" key={amount}>₹{amount.toLocaleString('en-IN')}</button>)}
          </div>
          <div className="form-fields donation-fields">
            <Field label="Full name" placeholder="Your name" required />
            <Field label="Email" placeholder="your@email.com" type="email" required />
            <Field label="Phone number" placeholder="10-digit mobile number" type="tel" required />
            <label className="action-field full-field"><span>Message <em>(Optional)</em></span><textarea placeholder="Your message..." maxLength={500} /></label>
          </div>
          <label className="check-row donation-check"><input type="checkbox" required /> <span>I have read and accept the <a href="/terms">Terms and Conditions</a>.</span></label>
          <button className="donate-submit" type="submit"><Heart size={18} />Donate Now</button>
        </form>
      </div>
    </section>
  );
}
