import React from 'react';
import { motion } from 'framer-motion';
import '../styles/TeamSection.css';

const TeamSection = () => {
    const teamMembers = [
        {
          name: 'Anjana Budhathoki',
          role: 'Principal Broker',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Suresh Sapkota',
          role: 'Associate Broker',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Suman Mahara',
          role: 'Supervising Broker',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Prayash Bhusal',
          role: 'REALTOR®',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Tek Narayan Yadav',
          role: 'REALTOR®',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Deepak Sharma',
          role: 'REALTOR®',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Purna Shahi',
          role: 'REALTOR®',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Chiran Neupane',
          role: 'REALTOR®',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Sumit Sanjel',
          role: 'REALTOR®',
          image: '/api/placeholder/200/200'
        },
        {
          name: 'Abhaya Karki',
          role: 'REALTOR®',
          image: '/api/placeholder/200/200'
        },
        
        
      ];

  return (
    <div className="team-container">
      <div className="title-wrapper">
        <h2 className="team-title">Team oNest</h2>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="team-member-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="member-image-container">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </motion.div>
        ))}
      </div>
      <div className="see-more-button">
        <motion.button 
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See more
        </motion.button>
      </div>
    </div>
  );
};

export default TeamSection;