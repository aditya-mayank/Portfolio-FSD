import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import './Home.css';

const TYPED_STRINGS = [
  'a CS Student @ NIT Warangal',
  'a Full-Stack MERN Developer',
  'a LeetCode Knight (Top 2%)',
  'a Musician & Sketch Artist',
];


function Home() {
  const [isLoading, setIsLoading]   = useState(() => !sessionStorage.getItem('portfolio-loaded'));
  const [typedText, setTypedText]   = useState('');
  const [strIndex, setStrIndex]     = useState(0);
  const [charIndex, setCharIndex]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Simulate a loading delay on initial mount
  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('portfolio-loaded', 'true');
    }, 1000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  // Typing animation effect
  useEffect(() => {
    if (isLoading) return; // don't start while loading

    const currentStr = TYPED_STRINGS[strIndex];
    const typeSpeed = isDeleting ? 40 : 70;
    const pauseDelay = !isDeleting && charIndex === currentStr.length ? 1200 : typeSpeed;

    const interval = setInterval(() => {
      if (!isDeleting) {
        if (charIndex < currentStr.length) {
          setTypedText(currentStr.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          // Pause then start deleting
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentStr.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setStrIndex(prev => (prev + 1) % TYPED_STRINGS.length);
        }
      }
    }, pauseDelay);

    return () => clearInterval(interval);
  }, [isLoading, charIndex, isDeleting, strIndex]);

  if (isLoading) return <Loader />;

  return (
    <section className="home-section page-section" id="home" aria-labelledby="home-heading">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h1 id="home-heading" className="home-intro">
              Hello, my name is{' '}
              <span className="name-highlight">Aditya Mayank</span>
            </h1>

            <h2 className="home-profession">
              I&apos;m <span className="typing-text">{typedText}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </h2>

            <p className="home-bio">
              Computer Science &amp; Engineering student at NIT Warangal, LeetCode Knight
              (Top 2% globally), full-stack MERN developer, and AI systems enthusiast with a
              passion for competitive coding, real-time web engines, music, and pencil
              sketching.
            </p>

            <div className="home-actions">
              <a
                href="/CV/AdityaMayank_InternshalaResume.pdf"
                className="btn download-cv"
                download
                aria-label="Download Aditya Mayank's resume"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="home-img padd-15">
            <div className="home-img-inner">
              <img
                src="/images/hero2.jpg"
                alt="Aditya Mayank — Computer Science student at NIT Warangal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
