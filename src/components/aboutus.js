import React, { useEffect, useRef } from 'react';
import HouseImg from '../images/pngtree-the-keys-in-front-of-modern-house-with-sunset-light-style-image_16176177.jpg';
import ImageGallery from './ImageGallery.js'
import TeamSection from './TeamSection.js';
import { motion } from 'framer-motion';
import TeamImg from '../images/image0.jpg'
import Mission from '../images/158728567_34b7cafe-f88f-45de-8848-c8b796a9c23b.jpg'
import { VelocityScroll } from './ui/velo-scroll.tsx';

import '../styles/AboutUs.css';
import img1 from '../images/269369785_11088644.png'
import img2 from '../images/269369815_11088656.png'
import { Timeline } from './ui/timeline.tsx';  // ✅ Correct for named export.
import HeroSection from './HeroSection.js';
const AboutUs = () => {
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const timelineData = [
    {
        title: "April 2021",
        content: (
            <div>
<p className="text-[#c9a760] dark:text-[#b68319] text-xs md:text-sm font-normal mb-8">
Established in Fairfax, VA, with two agents.                </p>
                <div className="grid grid-cols-2 gap-4">
                    <ImageGallery />
                </div>
            </div>
        ),
    },
    {
        title: "2021",
        content: (
            <div>
<p className="text-[#c9a760] dark:text-[#b68319] text-xs md:text-sm font-normal mb-8">
Expanded into Washington, D.C., and Maryland, adding four more agents. Opened offices in Fairfax, VA, and Towson, MD.                 </p>
                <div className="grid grid-cols-2 gap-4">
                    <ImageGallery />
                </div>
            </div>
        ),
    },    {
      title: "2022",
      content: (
          <div>
<p className="text-[#c9a760] dark:text-[#b68319] text-xs md:text-sm font-normal mb-8">
Extended presence into New England, starting in Massachusetts, and recruited four additional agents.                 </p>
              <div className="grid grid-cols-2 gap-4">
                  <ImageGallery />
              </div>
          </div>
      ),
  },
  {
    title: "2023",
    content: (
        <div>
<p className="text-[#c9a760] dark:text-[#b68319] text-xs md:text-sm font-normal mb-8">
Further expansion into New Hampshire and Rhode Island.               </p>
            <div className="grid grid-cols-2 gap-4">
                <ImageGallery />
            </div>
        </div>
    ),
},   
{
  title: "2024",
  content: (
      <div>
<p className="text-[#c9a760] dark:text-[#b68319] text-xs md:text-sm font-normal mb-8">
Entered Connecticut and Pennsylvania markets.
               </p>
          <div className="grid grid-cols-2 gap-4">
              <ImageGallery />
          </div>
          <h3 className="text-[#c9a760] dark:text-[#b68319] text-xs md:text-sm font-normal mb-8">Currently, oNest Real Estate operates four offices and employs 30 agents, with plans for continued regional expansion.</h3>
      </div>
  ),
}, // Add more items...
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      if (firstImageRef.current) {
        const firstOffset = firstImageRef.current.offsetTop;
        const speed = 0.5;
        const yPos = -(scrolled - firstOffset) * speed;
        firstImageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      if (secondImageRef.current) {
        const secondOffset = secondImageRef.current.offsetTop;
        const speed = 0.3;
        const yPos = -(scrolled - secondOffset) * speed;
        secondImageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="aboutus-main">
      <section className="hero-section">
        <img
          src={HouseImg}
          alt="Real Estate Keys"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="text-container">
              <div className="main-text-container">
                <h1 className="main-heading first">Transforming lives<span className="italics"> <br /> Through</span></h1>
                <span className="main-heading second"> Real Estate  </span>
                <div className="line-animation"></div>
              </div>
              <div className="button-group">
                <button className="btn btn-primary">Learn more</button>
                <button className="btn btn-secondary">Explore options</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      

<section className="content-section">
  <div className="section-container flex flex-col md:flex-row gap-8">
    <div className="text-section w-full md:w-1/2">
      <div className="section-header">
        <h2>Our Mission & Vision</h2>
        <div className="gold-line"></div>
      </div>
      <p>
      Founded with a vision to enhance the real estate process through innovation and personalized service, ONEST is born to ensure that your real estate journey is as rewarding as it is exciting. We pride ourselves on our transparency, dedication, and deep connection to the Northern Virginia community. Whether you're a first-time buyer or a real handyman, we're dedicated to helping you make informed decisions and achieve your property goals.
      </p>
      <p>        Our mission is to redefine real estate by providing a seamless and personalized experience that puts your needs first. Whether you're buying, selling, or investing, our team of dedicated experts is here to guide you every step of the way. With cutting-edge technology, local expertise, and an unwavering commitment to our clients, we make the complex world of real estate simple and accessible.
      </p>
      <button className="btn btn-outline">Explore careers</button>
    </div>
    <div className="content-img-wrapper grid grid-cols-1 gap-4 w-full md:w-1/2">
      <div className="content-img parallax-img" style={{ backgroundImage: `url(${Mission})` }}></div>
    </div>
  </div>
</section>

      <Timeline data={timelineData}/>
      <HeroSection />
      <TeamSection />
      <section className="join-section">
      <motion.div 
        className="join-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="join-title">Join the Real Estate Revolution</h2>
        <p className="join-description">
        </p>
        <motion.button 
          className="explore-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore careers
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="join-image-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={TeamImg}
          alt="ONEST team members" 
          className="join-image"
        />
      </motion.div>
    </section>

    </main>
  );
};

export default AboutUs;