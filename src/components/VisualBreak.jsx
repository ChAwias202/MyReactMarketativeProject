import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion"; 
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./VisualBreak.css";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The team did a great job promoting our restaurant online. Their creative posts and marketing approach helped present our food and brand in an appealing way. Communication was smooth, and we appreciated their professionalism.",
    name: "American Steak House",
    role: "Restaurant Manager",
    avatar: review1,
  },
  {
    id: 2,
    quote: "We appreciate the effort put into improving our digital presence. The marketing content was professional, communication was clear, and the team understood how to present our services to the right audience.",
    name: "SR Insulation",
    role: "Business Owner",  
    avatar: review2,
  },
  {
    id: 3,
    quote: "I was honestly looking for a team that actually 'got' my business and could help us stand out online. Their creative ideas and marketing approach made the whole process feel effortless. It was a huge relief.",
    name: "Mark Julio",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    quote: "Their social media strategy and content ideas were exactly what we needed. The team was supportive, responsive, and professional throughout.",
    name: "Sarah Jenkins",
    role: "Small Business Owner",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 5,
    quote: "They understood our goals and helped us build a more professional brand image online.",
    name: "David Chen",
    role: "Founder, StartUp Co",
    avatar: "https://i.pravatar.cc/150?img=14",
  }
];

export default function VisualBreak() {
  return (
    <section className="visual-break">
      {/* Abstract animated background shapes */}
      <div className="visual-break__glow visual-break__glow--1" />
      <div className="visual-break__glow visual-break__glow--2" />
      
      {/* Subtle grid pattern */}
      <div className="visual-break__grid" />

      <div className="visual-break__content">
        
        {/* Header */}
        <div className="visual-break__header">
          <div className="visual-break__eyebrow-wrapper">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="eyebrow-text">Testimonials</span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>
          
          <motion.h2 
            className="visual-break__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What our clients are saying
          </motion.h2>
          
          <motion.p 
            className="visual-break__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our digital marketing platform is transforming the way people manage their
            online presence. Here's what some of our users have to say about their experience.
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <motion.div 
          className="visual-break__slider-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            className="testimonial-swiper"
          >
            {TESTIMONIALS.map((review) => (
              <SwiperSlide key={review.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-card__quote-icon">❞</div>
                  <p className="testimonial-card__quote">"{review.quote}"</p>
                  
                  <div className="testimonial-card__author">
                    <img src={review.avatar} alt={review.name} className="testimonial-card__avatar" />
                    <div className="testimonial-card__info">
                      <strong>{review.name}</strong>
                      <span>{review.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}