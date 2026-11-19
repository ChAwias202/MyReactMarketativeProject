import { useState } from "react";
import "./Contact.css";

// 1. Your details (change these)
const INFO = {
  description: "We turn ambitious businesses into unforgettable brands through powerful digital marketing.",
  loc1: {
    address: "5 Kingston Heath Ct, Craigieburn VIC 3064, Australia",
    phone: "+61 040 7531966",
  },
  loc2: {
    address: "Islamabad, Pakistan", // 👈 Add your 2nd address here
    phone: "+92 314 0950434", // 👈 Add your 2nd phone here
  },
  email: "marketative@gmail.com",
};

// 2. Where the form sends messages. Create a free form at formspree.io,
//    then paste your form link here.
const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbyypLzWrK1RiVvOYinRtZPNzjv51D0JZucw3t6kVlSPm3n-yATnMGI0tMACS1hLg1hpEA/exec";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");
  try {
    await fetch(FORM_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", email: "", message: "" });
    setStatus("sent");
  } catch {
    setStatus("error");
  }
};

  return (
    <section className="contact" id="contact">
      <div className="contact__wrap">
        {/* Left: details */}
        <div className="contact__info">
          <h2 className="contact__title">CONTACT</h2>
          <p className="contact__desc">{INFO.description}</p>

          {/* 👈 Location Heading */}
          <h3 className="contact__label">Location</h3>
          
          <div className="contact__location-row">
            <strong className="contact__loc-name">Loc1</strong>
            <p className="contact__text">{INFO.loc1.address}</p>
          </div>
          
          <div className="contact__location-row">
            <strong className="contact__loc-name">Loc2</strong>
            <p className="contact__text">{INFO.loc2.address}</p>
          </div>

          {/* 👈 Number Heading */}
          <h3 className="contact__label">Number</h3>
          
          <p className="contact__text">
            <a href={`tel:${INFO.loc1.phone.replace(/\s/g, "")}`}>{INFO.loc1.phone}</a>
          </p>
          <p className="contact__text">
            <a href={`tel:${INFO.loc2.phone.replace(/\s/g, "")}`}>{INFO.loc2.phone}</a>
          </p>

          <h3 className="contact__label">Email</h3>
          <p className="contact__text">
            <a href={`mailto:${INFO.email}`}>{INFO.email}</a>
          </p>

          <ul className="contact__social">
            <li>
              <a href="https://www.facebook.com/share/1EEVMpb9t6/?mibextid=wwXIfr" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3c-3 0-4.5 1.8-4.5 4.4V8H7v3.5h2.5V22H14V11.5h2.8L17.3 8H14z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/market.ative?rpxt=MTdwYms2bmN5b2p1MA%3D%3D&utm_source=qr" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abdul-moiz-sajjad-3a54b43a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Right: form card */}
        <form className="contact__card" onSubmit={handleSubmit}>
          <h2 className="contact__title">CONTACT US</h2>

          <label className="sr-only" htmlFor="c-name">Your name</label>
          <input
            id="c-name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label className="sr-only" htmlFor="c-email">Your email</label>
          <input
            id="c-email"
            name="email"
            type="email"
            placeholder="Your Mail"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label className="sr-only" htmlFor="c-message">Your message</label>
          <textarea
            id="c-message"
            name="message"
            rows="3"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          <p className="contact__status" role="status">
            {status === "sent" && "Thank you! Your message has been sent."}
            {status === "error" && "Something went wrong. Please try again."}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;