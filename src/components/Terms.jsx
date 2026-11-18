import { Link } from "react-router-dom";
import "./Terms.css"; // Make sure the path to your CSS is correct

export default function Terms() {
  return (
    <main className="terms">
      <div className="terms__inner">
        <Link to="/" className="terms__back">
          ← Back to home
        </Link>

        <header className="terms__head">
          <p className="terms__eyebrow">LEGAL</p>
          <h1 className="terms__title">Terms & Conditions</h1>
          <p className="terms__subtitle">
            Last updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
          </p>
        </header>

        <div className="terms__content">
          
          <section className="terms__section">
            <h2>1. Engagement & set-up</h2>
            <p>A one-time set-up fee of $1,200 + GST is payable before work begins. This covers consistent branding across your channels, onboarding and initial strategy. Additional customisation or content creation beyond the set-up scope is quoted separately.</p>
            <p>Plans run on a minimum initial term of 3 months, then continue month-to-month. We ask for three months because social media takes 90+ days to show meaningful change — a shorter window isn't a fair test of the work.</p>
          </section>

          <section className="terms__section">
            <h2>2. Pricing, billing & GST</h2>
            <p>All prices are in Australian Dollars (AUD) and exclude GST unless stated otherwise. Monthly fees are paid by credit card via Stripe and billed in advance. Late or failed payments may result in work being paused until the account is brought up to date.</p>
            <p>Ad spend (for paid social) is billed separately and paid directly to the platforms — we never mark it up. Management of paid campaigns is offered as a custom add-on, quoted and agreed before campaigns begin.</p>
          </section>

          <section className="terms__section">
            <h2>3. Included hours & additional work</h2>
            <p>Each plan includes a set scope of deliverables and hours per month. Work beyond your plan's scope — including additional hours — is charged at $165/hour, agreed in advance. Unused hours do not roll over to the following month.</p>
          </section>

          <section className="terms__section">
            <h2>4. Content & your responsibilities</h2>
            <p>This is the big one, and we're upfront about it: great results need a steady flow of great content.</p>
            <ul>
              <li>To work with us, you must either supply a library of quality photos and video, or book a content shoot with us so we can build that archive together. A strong archive of images and video is the foundation of social media that performs.</li>
              <li>You agree to provide all required materials, approvals and information in a timely manner.</li>
              <li>Delays in providing content or approvals may affect timelines and posting frequency, and may incur additional charges. We can't grow a feed with nothing to post.</li>
              <li>You confirm you own or have the rights to any materials you provide, and that they don't infringe third-party rights.</li>
            </ul>
          </section>

          <section className="terms__section">
            <h2>5. Content shoots, travel & revisions</h2>
            <p>Content shoots are available as monthly Create packages (Starter, Standard, Growth, Premium) or one-off Ad Hoc sessions, captured by our production team during efficient planned visits.</p>
            <ul>
              <li>Metropolitan travel is included. Travel outside the metro area is charged at $120/hour.</li>
              <li>Plans include up to two rounds of revisions per content piece. Additional revisions are billed at $165/hour.</li>
            </ul>
          </section>

          <section className="terms__section">
            <h2>6. Approvals</h2>
            <p>We send content for your approval before publishing. We ask that you review and sign off on copy and posts within 2 business days so we can keep your feed consistent. Once approved, you're responsible for the accuracy of that content.</p>
            <p>If approvals aren't received by the agreed time, we may schedule pre-approved or evergreen content to maintain consistency. Repeated delays may affect results and timelines — social media is a partnership, and it works best when we hear from you.</p>
          </section>

          <section className="terms__section">
            <h2>7. Intellectual property</h2>
            <ul>
              <li>Final content we produce for you becomes yours once your account is paid up to date.</li>
              <li>We retain the right to feature work we've created in our portfolio and marketing, unless you ask us in writing not to.</li>
              <li>You retain ownership of your brand assets, logos and any materials you provide to us.</li>
            </ul>
          </section>

          <section className="terms__section">
            <h2>8. Cancellation & pausing</h2>
            <p>After the initial 3-month minimum term, either party may end the engagement with 30 days' written notice. Cancellation within the first three months ends the plan at the conclusion of that minimum term.</p>
            <p>You may pause your plan with notice; we'll agree a restart date. Fees already paid for the current month are non-refundable. The set-up fee is non-refundable once onboarding has commenced.</p>
          </section>

          <section className="terms__section">
            <h2>9. Results</h2>
            <p>We work hard to grow your engagement, reach and results, and most clients see meaningful growth within 3–6 months. Social platforms and audiences are outside our control, so we can't guarantee specific metrics, follower counts or sales.</p>
          </section>

          <section className="terms__section">
            <h2>10. Confidentiality</h2>
            <p>Both parties agree to keep each other's confidential information private and to use it only for the purpose of delivering these services.</p>
          </section>

          <section className="terms__section">
            <h2>11. Liability</h2>
            <p>Nothing in these terms excludes rights you have under the Australian Consumer Law. To the extent permitted by law, our total liability arising from our services is limited to the fees you paid us in the three months before the relevant claim, and we are not liable for indirect or consequential loss.</p>
          </section>

          <section className="terms__section">
            <h2>12. Modification of terms</h2>
            <p>We may update these terms from time to time. Material changes will be communicated to you in writing and take effect from the date stated in that notice.</p>
          </section>

          <section className="terms__section">
            <h2>13. Governing law</h2>
            <p>These terms are governed by the laws of Western Australia, and the parties submit to the courts of that state.</p>
          </section>

          {/* 👈 14th Point Added Here */}
          <section className="terms__section">
            <h2>14. Data Sharing & Privacy</h2>
            <p>To ensure seamless service delivery, project management, and accurate reporting, both parties agree to securely share necessary business data (including but not limited to analytics access, ad account data, and customer insights).</p>
            <p>Any data shared between Marketative and the client is strictly confidential. Neither party will sell, distribute, or share this data with unauthorized third parties. All data will be handled in accordance with applicable privacy laws and will only be utilized to execute the agreed-upon marketing and development strategies.</p>
          </section>

        </div>
      </div>
    </main>
  );
}