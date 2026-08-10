import ContactForm from '../components/ContactForm';
import './Contact.css';

const contactInfo = [
  { id: 'phone',     icon: 'fa fa-phone',           label: 'Call Me On',  value: '+91 8409411568',          link: null },
  { id: 'location',  icon: 'fa fa-map-marker-alt',  label: 'Location',    value: 'NIT Warangal, Telangana', link: null },
  { id: 'email',     icon: 'fa fa-envelope',         label: 'Email',       value: 'adityamayank11@gmail.com',link: 'mailto:adityamayank11@gmail.com' },
  { id: 'instagram', icon: 'fab fa-instagram',       label: 'Instagram',   value: 'aditya__mayank',          link: 'https://www.instagram.com/aditya__mayank/' },
];

function Contact() {
  return (
    <section
      className="contact-section page-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        {/* Section heading */}
        <div className="row">
          <div className="section-title">
            <h2 id="contact-heading">Contact Me</h2>
          </div>
        </div>

        <h3 className="contact-title">Have Any Questions?</h3>
        <h4 className="contact-sub-title">I&apos;m At Your Service</h4>

        {/* Contact info cards */}
        <div className="contact-info-grid">
          {contactInfo.map(({ id, icon, label, value, link }) => (
            <div key={id} className="contact-info-card">
              <div className="icon" aria-hidden="true">
                <i className={icon} />
              </div>
              <h4>{label}</h4>
              <p>
                {link ? (
                  <a href={link} target={link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </p>
            </div>
          ))}
        </div>

        <h3 className="contact-title">Send Me An Email</h3>
        <h4 className="contact-sub-title">I&apos;m Very Responsive To Messages</h4>

        {/* Controlled contact form component */}
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
