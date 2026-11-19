import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Contact.css";

const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbyypLzWrK1RiVvOYinRtZPNzjv51D0JZucw3t6kVlSPm3n-yATnMGI0tMACS1hLg1hpEA/exec";

function PricingEnquiryForm() {
    const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    package: "",
    message: "",
  });

  useEffect(() => {
    // Look for "?package=Standard%202D" in the URL
    const params = new URLSearchParams(location.search);
    const packageParam = params.get("package");
    
    if (packageParam) {
      setForm((prev) => ({ ...prev, package: packageParam }));
    }
  }, [location]);

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors", // 👈 Added no-cors here
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          formType: "quote",
          fullName: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          designation: form.designation,
          package: form.package,
          requirements: form.message,
        }),
      });

      // Note: with 'no-cors', the response is opaque. 
      // response.ok will be false, so we just check if the fetch didn't throw an error.
      if (!response) throw new Error("Submission failed");

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        designation: "",
        package: "",
        message: "",
      });

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="pricing-enquiry">
      <div className="contact__wrap">

        {/* LEFT SIDE - COMPANY INFORMATION */}
        <div className="contact__info">
          <h2 className="contact__title">CONTACT</h2>

          <p className="contact__desc">
            We turn ambitious businesses into unforgettable brands
            through powerful digital marketing.
          </p>

          <h3 className="contact__label">Location</h3>

          <div className="contact__locations">
            <div className="contact__location-row">
              <strong>Loc 1:</strong>
              <p className="contact__text">
                5 Kingston Heath Ct, Craigieburn VIC 3064, Australia
              </p>
            </div>

            <div className="contact__location-row">
              <strong>Loc 2:</strong>
              <p className="contact__text">
                Islamabad, Pakistan
              </p>
            </div>
          </div>

          <h3 className="contact__label">Number</h3>
          <p className="contact__text">
            <a href="tel:+610407531966">
              +61 040 7531966
            </a><br />
            <a href="tel:+610407531966">
              +92 314 0950434
            </a>
          </p>

          <h3 className="contact__label">Email</h3>
          <p className="contact__text">
            <a href="mailto:marketative@gmail.com">
              marketative@gmail.com
            </a>
          </p>

          <ul className="contact__social">
            <li>
              <a
                href="https://www.facebook.com/share/1EEVMpb9t6/?mibextid=wwXIfr"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3c-3 0-4.5 1.8-4.5 4.4V8H7v3.5h2.5V22H14V11.5h2.8L17.3 8H14z"/>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/market.ative?rpxt=MTdwYms2bmN5b2p1MA%3D%3D&utm_source=qr"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/abdul-moiz-sajjad-3a54b43a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE - PRICING ENQUIRY FORM */}
        <form className="contact__card pricing-enquiry__card"
          onSubmit={handleSubmit}
        >
          <h2 className="contact__title">CONTACT US</h2>

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            name="company"
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            required
          />

          <input
            name="designation"
            type="text"
            placeholder="Your Designation / Job Title"
            value={form.designation}
            onChange={handleChange}
            required
          />

          <select
            name="package"
            value={form.package}
            onChange={handleChange}
            required
            className="pricing-select"
          >
            <option value="">Select a Package or Add-on</option>
            
            <optgroup label="Main Packages">
              <option value="Starter Package">Starter Package</option>
              <option value="Growth Package">Growth Package</option>
              <option value="Performance Package">Performance Package</option>
            </optgroup>

            <optgroup label="Marketing Add-ons">
              <option value="Meta, Google & TikTok Ads Management">Meta, Google & TikTok Ads Management (A$799)</option>
              <option value="AI Video Ads">AI Video Ads (4 Videos) (A$499)</option>
              <option value="Social Media Audit & Strategy">Social Media Audit & Strategy (A$399)</option>
              <option value="Meta Pixel & Conversion API Setup">Meta Pixel & Conversion API Setup (A$399)</option>
            </optgroup>

            <option value="Not Sure">Not Sure Yet / Custom</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your requirements..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          <p className="contact__status" role="status">
            {status === "sent" &&
              "Thank you! Your enquiry has been submitted successfully."}

            {status === "error" &&
              "Something went wrong. Please try again."}
          </p>
        </form>

      </div>
    </section>
  );
}

export default PricingEnquiryForm;