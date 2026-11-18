import { useState } from "react";
import "./WorkSlider.css";

// Change the headings and content of the six cards here.
const ITEMS = [
  {
    heading: "Social Media Management",
    intro:
      "Manage the client's Facebook, Instagram or other social media pages to improve their online presence and customer engagement.",
    details:
      "Create monthly content calendars, prepare and publish posts, write SEO-friendly captions, schedule content, respond to basic comments and messages, and provide monthly performance reports.",
  },
  {
    heading: "Meta Ads Management",
    intro:
      "Run paid advertising campaigns on Facebook and Instagram to generate inquiries, website traffic and potential customers.",
    details:
      "Research audiences, create campaigns and ad sets, prepare ad copy, configure budgets, test creatives, monitor performance, optimise campaigns and report results. Advertising budget is separate.",
  },
  {
    heading: "Facebook & Instagram Lead Generation",
    intro:
      "Generate potential customer inquiries for businesses through targeted lead campaigns.",
    details:
      "Create instant forms, write conversion-focused ad copy, target relevant locations, add qualification questions, collect leads, connect lead delivery to the client and optimise lead quality.",
  },
  {
    heading: "Google Ads Management",
    intro:
      "Advertise businesses on Google when potential customers actively search for their services.",
    details:
      "Research high-intent keywords, create search campaigns, write advertisements, manage bidding and budgets, add negative keywords, configure conversion tracking and optimise cost per conversion.",
  },
  {
    heading: "TikTok Ads Management",
    intro:
      "Promote products and services using TikTok's short-form video advertising platform.",
    details:
      "Set up TikTok campaigns, research target audiences, write engaging hooks, test video ads, manage budgets, configure available tracking and optimise conversions.",
  },
  {
    heading: "AI Video Ads & Reels Creation",
    intro:
      "Produce AI-assisted advertising videos for businesses without requiring a physical production team.",
    details:
      "Write scripts, create storyboards, generate AI video scenes, add voiceovers, edit videos, incorporate branding and produce multiple advertising variations.",
  },
  {
  heading: "Social Media Audit & Marketing Strategy",
  intro: "Analyse a business's existing digital presence and identify opportunities to improve visibility, engagement and lead generation.",
  details: "Review social media profiles, assess competitors, identify content and advertising weaknesses, evaluate branding and calls to action, and prepare a practical improvement plan."
},
{
  heading: "Website Development (2D & 3D)",
  intro: "Design and develop professional websites that help businesses establish credibility, showcase their services and generate customer inquiries.",
  details: "For 2D websites: Build responsive pages, service sections, contact forms, WhatsApp/contact buttons, basic on-page SEO and analytics integration.\n\nFor 3D websites: Add interactive 3D elements, animations, dynamic transitions and immersive visual experiences, with mobile performance optimization."
},
{
  heading: "Meta Pixel & Conversion Tracking Setup",
  intro: "Help businesses measure customer actions and understand which advertising campaigns produce valuable results.",
  details: "Install Meta Pixel, configure standard events, connect conversion tracking, test event activity, troubleshoot tracking issues and set up Conversions API where supported."
},
];

function WorkSlider() {
  // Which card is open (the first one starts open)
  const [active, setActive] = useState(0);

  return (
    <section className="acc" id="products">
    <div className="acc__header">
      <h2>Services We Can Offer Without Hiring a Team</h2>
      <p>
        Everything your business needs to grow online, all under one roof.
      </p>
    </div>
      <ul className="acc__row">
        {ITEMS.map((item, i) => {
          const isActive = active === i;
          return (
            <li
              key={item.heading}
              className={`acc__item ${isActive ? "is-active" : ""}`}
            >
              {/* Clicking this opens the card */}
              <button
                type="button"
                className="acc__trigger"
                aria-expanded={isActive}
                aria-controls={`acc-panel-${i}`}
                onMouseEnter={() => setActive(i)}
              >
                <span className="acc__num">0{i + 1}</span>
                {/* Sideways heading (closed card) */}
                <span className="acc__vtitle">{item.heading}</span>
                {/* Normal heading (open card) */}
                <span className="acc__title">{item.heading}</span>
              </button>

              {/* Content (open card only) */}
              <div className="acc__panel" id={`acc-panel-${i}`}>
                <p className="acc__intro">{item.intro}</p>
                <p className="acc__label">What we will do</p>
                <p className="acc__details">{item.details}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default WorkSlider;
