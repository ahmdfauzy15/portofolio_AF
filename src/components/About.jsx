import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';
import Tech from './Tech';
import profilePic from '../assets/af.jpg'; // Pastikan gambar ada di folder assets
import cvPDF from '../assets/cv.pdf'; // Import CV PDF

const About = () => {
  return (
    <div id='about' className='mt-32'>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* Content Wrapper */}
      <div className='flex flex-col md:flex-row items-center gap-10 mt-6'>
        
        {/* Foto Profil */}
        <motion.div 
          variants={fadeIn('', '', 0.2, 1)}
          className="w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg border-4 border-secondary"
        >
          <img 
            src={profilePic} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Deskripsi */}
        <motion.div 
          className='flex flex-col items-center md:items-start'
          variants={fadeIn('', '', 0.3, 1)}
        >
          <p className='text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I am an active student at Trisakti University, majoring in Information Technology. 
            I have a keen interest in frontend development, Android development, and data analysis. 
            My passion has been demonstrated through official projects and courses in these fields. 
            For more details, please explore this website.
          </p>

          {/* Tombol Download CV */}
          <motion.a 
            href={cvPDF} 
            download="Fauzy_CV.pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-5 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg font-semibold hover:opacity-80 transition"
          >
            Download CV
          </motion.a>
        </motion.div>
        
      </div>

      {/* Tech Stack */}
      <div className='mt-10 flex flex-wrap gap-10'>
        <Tech />
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
