// Import necessary React hooks and libraries
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Import custom title header component
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  // Reference to the form element (used by EmailJS)
  const formRef = useRef(null);

  // State for loading spinner and form data
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input field changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // Update specific field
  };

  // Handle form submission using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true); // Start loading state

    try {
      // Send email using EmailJS service
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // EmailJS service ID
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // EmailJS template ID
        formRef.current, // Form reference
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Public API key
      );

      // Clear form fields after successful send
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Log or show user-friendly error
    } finally {
      setLoading(false); // Stop loading regardless of success/failure
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        {/* Section header */}
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        {/* Main layout wrapper for form and image */}
        <div className="md:flex w-full items-center md:justify-between justify-center mt-10">
          {/* Contact form container */}
          <div className="md:w-[60%] w-[90vw] mx-auto">
            <div className="flex-center card-border rounded-xl p-10">
              {/* Contact Form */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {/* Name input field */}
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                {/* Email input field */}
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                {/* Message textarea */}
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                {/* Submit button with loading state */}
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact image (decorative/illustrative) */}
          <div className="md:w-[35%] w-[90vw] mx-auto">
            <div className="rounded-3xl overflow-hidden">
              <img src="/images/contact.png" alt="Contact illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;