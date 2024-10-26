import '../styles/Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';  // Add this import

const Contact = () => {
  return (
    <>
      <Header userName="User" />
      <div className="contact-container">
        <h1>Contact Us</h1>

        <div className="company-info">
          <h2>Company Information</h2>
          <p>Home Rentals Inc.</p>
          <p>Phone: +123-456-7890</p>
          <p>Email: contact@homerentals.com</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />  {/* Add this line */}
    </>
  );
};

export default Contact;
