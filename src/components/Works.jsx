import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';

const ProjectCard = ({ index, name, description, tags, image, demo }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="w-full h-full"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl shadow-lg w-full max-w-[400px] mx-auto min-h-[420px] flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          <img className="w-full h-full object-cover rounded-2xl" src={image} alt={name} />
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(demo, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaLink className="text-white text-md" />
            </div>
          </div>
        </div>
        <div className="mt-5 flex-grow">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div id="work">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and demos. It reflects my ability 
          to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Grid Layout Responsive */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, '');
