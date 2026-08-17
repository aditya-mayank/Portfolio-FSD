import { Link } from 'react-router-dom';
import SkillBar from '../components/SkillBar';
import './About.css';

/**
 * Prop drilling demonstration (About page):
 *   About (receives skills via const) → renders SkillList inline →
 *   maps over skills → passes { name, percent } to SkillBar
 *
 *   Level 1: About has skills array
 *   Level 2: About passes skillItem to SkillBar (via map)
 *   (SkillBar is the grandchild in context of the full tree:
 *    App → About → SkillBar)
 */

const skills = [
  { name: 'C++ & DSA',               percent: 95 },
  { name: 'MERN & React',             percent: 90 },
  { name: 'Node.js & Socket.IO',      percent: 85 },
  { name: 'Python & Automation',      percent: 85 },
  { name: 'Databases (MongoDB/SQL)',   percent: 80 },
  { name: 'AI APIs & OAuth',          percent: 80 },
];

const education = [
  {
    id: 'nitw',
    date: '2024 – 2028',
    title: 'BTech, Computer Science and Engineering',
    text: 'National Institute of Technology (NIT), Warangal | CGPA: 8.34. Coursework: Data Structures & Algorithms, OOP (Java), DBMS, Operating Systems, Software Engineering.',
  },
  {
    id: 'sr-school',
    date: '2024',
    title: 'Higher Secondary Education (CBSE XII)',
    text: 'S.R. Public Senior Secondary School | CBSE XII: 89.8%. Strong foundation in Science, Mathematics, and Computer Science.',
  },
  {
    id: 'dav',
    date: '2022',
    title: 'Secondary Education (SEE Grade X)',
    text: 'D.A.V. Sushil Kedia Vishwa Bharati, Kathmandu | GPA: 3.9 / 4.0. Recognized for academic excellence across core disciplines.',
  },
];

const achievements = [
  {
    id: 'lc-knight',
    date: '2026',
    title: 'LeetCode Knight — Top 2% Globally',
    text: 'Ranked in the top 2% of coders worldwide on LeetCode. Adept in advanced data structures, graph algorithms, and dynamic programming.',
  },
  {
    id: 'compex',
    date: '2025',
    title: 'Nepal COMPEX Scholarship Recipient',
    text: 'Awarded the prestigious COMPEX Scholarship by the Embassy of India for academic excellence to pursue B.Tech in CS at NIT Warangal.',
  },
  {
    id: 'melodyy',
    date: 'Nov 2024 – Present',
    title: 'Co-Founder, Melodyy Mitra (College Music Group)',
    text: 'Co-founded and scaled a campus music group at NIT Warangal; organized and performed live instrumental music at large-scale cultural events.',
  },
  {
    id: 'cses',
    date: 'Dec 2024 – Aug 2025',
    title: 'Executive Member, CSES NIT Warangal',
    text: 'Contributed to technical projects and managed outreach across the Web Development and Public Relations teams in the CS Engineering Society.',
  },
  {
    id: 'solo-inst',
    date: '2026',
    title: '1st Place, Solo Instrumental Competition',
    text: 'Secured 1st place in the flagship Solo Instrumental Competition at Spring Spree Cultural Fest, NIT Warangal.',
  },
  {
    id: 'noobathon',
    date: '2024',
    title: 'Runner-up, Noobathon Hackathon',
    text: (
      <>
        Runner-up at Noobathon Hackathon, NIT Warangal, for designing{' '}
        <a href="https://aditya-mayank.github.io/Dal-velopers/index.html" target="_blank" rel="noopener noreferrer">
          Central Perk
        </a>{' '}
        café platform under a 24-hour deadline.
      </>
    ),
  },
];

function About() {
  return (
    <section className="about-section page-section" id="about" aria-labelledby="about-heading">
      <div className="container">
        {/* Section heading */}
        <div className="row">
          <div className="section-title">
            <h2 id="about-heading">About Me</h2>
          </div>
        </div>

        {/* Bio paragraphs */}
        <div className="row">
          <div className="about-text-block">
            <p>
              I am currently pursuing my B.Tech in Computer Science and Engineering at NIT Warangal
              (CGPA: 8.34). My technical expertise spans full-stack web development with the MERN
              stack, real-time multiplayer engines via Socket.IO, custom NLP matching algorithms, and
              automated background scraping agents integrated with AI APIs.
            </p>
            <p>
              As a <strong>LeetCode Knight (Top 2% globally)</strong>, I have a deep foundation in
              Data Structures, Algorithms, and System Design. I regularly solve complex algorithmic
              problems across LeetCode, Codeforces, and CodeChef, combining strong logic with clean,
              efficient code.
            </p>
            <p>
              Beyond software engineering, I am the Co-Founder of <strong>Melodyy Mitra</strong> (NIT
              Warangal&apos;s campus music group), a guitarist, flutist, and pencil sketch artist. I
              thrive at the intersection of analytical problem-solving, rapid development, and creative
              collaboration.
            </p>
          </div>
        </div>

        {/* Personal info + Skills */}
        <div className="row">
          {/* Personal Info */}
          <div className="personal-info-col">
            <div className="info-grid">
              {[
                ['Degree',     'B.Tech CSE @ NIT Warangal'],
                ['CGPA',       '8.34 / 10.0'],
                ['CP Rating',  'LeetCode Knight (Top 2%)'],
                ['Scholarship','Nepal COMPEX Recipient'],
                ['Languages',  'English, Hindi, Nepali, Marwadi'],
                ['Email',      'adityamayank11@gmail.com'],
                ['Residence',  'Kathmandu / Warangal'],
                ['Freelance',  'Available'],
              ].map(([label, value]) => (
                <div key={label} className="info-item">
                  <p>{label} : <span>{value}</span></p>
                </div>
              ))}
            </div>
            <div className="info-actions">
              <Link to="/contact" className="btn hire-me">Hire Me</Link>
            </div>
          </div>

          {/* Skills column */}
          <div className="skills-col">
            <div className="skills-col-inner">
              <h3>Technical Skills</h3>
              <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>

                {skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timelines */}
        <div className="row timeline-row">
          {/* Education */}
          <div className="timeline-col">
            <h3 className="title">Education</h3>
            <div className="timeline-box shadow-dark">
              {education.map(item => (
                <article key={item.id} className="timeline-item">
                  <div className="circle-dot" aria-hidden="true" />
                  <h3 className="timeline-date">
                    <i className="fa fa-calendar" aria-hidden="true" /> {item.date}
                  </h3>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="timeline-col">
            <h3 className="title">Positions &amp; Achievements</h3>
            <div className="timeline-box shadow-dark">
              {achievements.map(item => (
                <article key={item.id} className="timeline-item">
                  <div className="circle-dot" aria-hidden="true" />
                  <h3 className="timeline-date">
                    <i className="fa fa-calendar" aria-hidden="true" /> {item.date}
                  </h3>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
