import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import "./AboutUs.css"; 

// 👈 1. IMAGE IMPORTS
import LeadGeneration1 from "../assets/LeadGeneration1.jpeg"; 
import LeadGeneration2 from "../assets/LeadGeneration2.jpeg"; 
import proof1 from "../assets/proof1.jpeg";
import proof2 from "../assets/proof2.jpeg";
import proof3 from "../assets/proof3.jpeg";
import proof4 from "../assets/proof4.jpeg";
import proof5 from "../assets/proof5.jpeg";
import proof6 from "../assets/proof6.jpeg";
import proof7 from "../assets/proof7.jpeg";
import proof8 from "../assets/proof8.jpeg";

export default function AboutUs() {
  const [activeSlides, setActiveSlides] = useState([0, 0, 0, 0]);
  const swiperRefs = useRef([]); 

  // 👈 2. CASE STUDIES DATA (Stats moved inside slides)
  const CASE_STUDIES = [
    {
      id: 1,
      category: "Lead Generation",
      slides: [
        {
          image: LeadGeneration1,
          title: "Targeted Insulation Leads",
          desc: "We built a custom lead generation funnel targeting homeowners in specific Australian regions. The data is extracted, verified, and formatted automatically for immediate outreach.",
          stats: [
            { value: "10K+", label: "Leads Generated" },
            { value: "100%", label: "Data Accuracy" },
          ],
        },
        {
          image: LeadGeneration2,
          title: "High-Volume Melbourne Campaign",
          desc: "Scaling the campaign to a massive volume of verified leads in Melbourne. By isolating suburbs and validating phone numbers, we ensured a 100% clean and actionable dataset.",
          stats: [
            { value: "25K+", label: "Melbourne Leads" },
            { value: "98%", label: "Valid Numbers" },
          ],
        },
      ],
    },
    {
      id: 2,
      category: "Social Media Performance & Growth",
      slides: [
        {
          image: proof1,
          title: "Facebook & Instagram Marketing Insights",
          desc: "Showcasing our Facebook and Instagram marketing performance through real campaign insights, audience reach, views and engagement. Discover how our strategies help businesses expand their online visibility.",
          stats: [
            { value: "15.1K", label: "Page Views" },
            { value: "+131%", label: "Viewer Growth" },
          ],
        },
        {
          image: proof2,
          title: "Driving Growth Across Platforms",
          desc: "By implementing a robust tracking system, we bypassed browser restrictions and ensured 100% accurate data was being sent to the ad platforms, allowing us to scale effectively.",
          stats: [
            { value: "8.4K", label: "Instagram Views" },
            { value: "712%", label: "View Lift" },
          ],
        },
      ],
    },
    {
      id: 3,
      category: "Social Media Strategy",
      slides: [
        {
          image: proof3,
          title: "Explosive Organic Growth via Reels",
          desc: "Overview of views, engagement, clicks, and follower growth across both platforms. Our Reels strategy completely shifted the trajectory of the account.",
          stats: [
            { value: "22.1K", label: "Total Views" },
            { value: "+21,404%", label: "View Spike" },
          ],
        },
        {
          image: proof4,
          title: "Social Media Post Performance",
          desc: "Our ongoing strategy focused on community engagement, resulting in a massive boost in profile visits and shares across Instagram and Facebook.",
          stats: [
            { value: "48.9K", label: "Post Views" },
            { value: "57", label: "Interactions" },
          ],
        },
      ],
    },
    {
      id: 4,
      category: "Meta Ads Campaign Dashboard",
      slides: [
        {
          image: proof6, 
          title: "Advertising Campaign Insights & Results",
          desc: "Overview of campaign status, delivery, results, and cost per result across Meta Ads.",
          stats: [
            { value: "215", label: "Results" },
            { value: "$3.25", label: "Cost per Result" },
          ],
        },
        {
          image: proof7, 
          title: "Data-Driven Traffic Boosts",
          desc: "By analyzing the analytics, we identified weak points in the funnel and optimized the user journey to drive maximum traffic to the main website.",
          stats: [
            { value: "121", label: "Conversions" },
            { value: "$1.73", label: "Cost per Result" },
          ],
        },
        {
          image: proof5, 
          title: "Campaign Management & Tracking",
          desc: "Overview of campaign status, delivery, results, and cost per result across Meta Ads.",
          stats: [
            { value: "47.2K", label: "Impressions" },
            { value: "17.1K", label: "Reach" },
          ],
        },
        {
          image: proof8, 
          title: "Meta Advertising Results & Insights",
          desc: "By analyzing the analytics, we identified weak points in the funnel and optimized the user journey to drive maximum traffic to the main website.",
          stats: [
            { value: "34", label: "Interactions" },
            { value: "156", label: "Link Clicks" },
          ],
        },
      ],
    },
  ];

  const handleSlideChange = (caseIndex, swiper) => {
    setActiveSlides((prev) => {
      const newSlides = [...prev];
      newSlides[caseIndex] = swiper.activeIndex;
      return newSlides;
    });
  };

  return (
    <main className="cases">
      <div className="cases__inner">
        <header className="cases__head">
          <Link to="/" className="cases__back">
            ← Back to home
          </Link>
          <p className="cases__eyebrow">OUR WORK</p>
          <h1 className="cases__title">Proof is in the numbers.</h1>
          <p className="cases__subtitle">
            We don't just promise results — we track, measure, and show them. 
            Take a look at real dashboards from recent client campaigns.
          </p>
        </header>

        <div className="cases__list">
          {CASE_STUDIES.map((study, studyIndex) => {
            const currentSlide = study.slides[activeSlides[studyIndex]];
            const hasMultipleSlides = study.slides.length > 1;

            return (
              <motion.article 
                key={study.id} 
                className="case-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="case-card__content">
                  <span className="case-card__tag">{study.category}</span>
                  
                  {/* 👈 Framer Motion animates the text AND stats when slide changes */}
                  <motion.div
                    key={activeSlides[studyIndex]} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                  >
                    <h2 className="case-card__title">{currentSlide.title}</h2>
                    <p className="case-card__desc">{currentSlide.desc}</p>
                    
                    {/* Moved Stats inside the animated div */}
                    <div className="case-card__stats">
                      {currentSlide.stats.map((stat, i) => (
                        <div key={i} className="case-stat">
                          <span className="case-stat__val">{stat.value}</span>
                          <span className="case-stat__label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                </div>

                <div className="case-card__visual">
                  
                  {hasMultipleSlides && (
                    <button 
                      className="custom-arrow custom-arrow--prev" 
                      onClick={() => swiperRefs.current[studyIndex]?.slidePrev()}
                      aria-label="Previous image"
                    >
                      ❮
                    </button>
                  )}

                  <div className="browser-mockup">
                    <div className="browser-mockup__header">
                      <span className="browser-dot"></span>
                      <span className="browser-dot"></span>
                      <span className="browser-dot"></span>
                    </div>
                    
                    <div className="browser-mockup__body">
                      <Swiper
                        modules={[EffectFade]}
                        effect="fade" 
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={(swiper) => handleSlideChange(studyIndex, swiper)}
                        onSwiper={(swiper) => {
                          swiperRefs.current[studyIndex] = swiper;
                        }}
                        className="case-swiper"
                      >
                        {study.slides.map((slide, slideIndex) => (
                          <SwiperSlide key={slideIndex}>
                            <img src={slide.image} alt={slide.title} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>

                  {hasMultipleSlides && (
                    <button 
                      className="custom-arrow custom-arrow--next" 
                      onClick={() => swiperRefs.current[studyIndex]?.slideNext()}
                      aria-label="Next image"
                    >
                      ❯
                    </button>
                  )}

                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
  );
}