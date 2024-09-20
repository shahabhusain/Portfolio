import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University of Agriculture Peshawar"
            date="2023 — 2027"
            description="MERN Stack Developer and Computer Science Student at Agriculture University of Peshawar."
          />
          <TimelineItem
            title="ITSAWK Academy"
            date="2023 — 2024"
            description="Practical training from Itswak Academy."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Frontend"
            date="2023 — 2024"
            description="Front-End Developer with a Passion for Creating Engaging User Experiences.Skilled in building responsive and dynamic interfaces using HTML, CSS, and JavaScript frameworks like React."
          />
          <TimelineItem
            title="Backend"
            date="1-month"
            description="Recently started Backend"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="html" value={100} />
          <SkillItem title="css" value={90} />
          <SkillItem title="Javascript" value={70} />
          <SkillItem title="React" value={80} />
          <SkillItem title="Tailwind css" value={90} />
          <SkillItem title="Boostrap" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
