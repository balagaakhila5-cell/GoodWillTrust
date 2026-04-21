import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, BookOpen, Heart, Users } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "8309337196";

    const text = `Hello Good Will Trust,

Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);

    window.open(whatsappURL, "_blank");

    setTimeout(() => setSubmitted(false), 5000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695891835439-7b14f9356b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwY29tbXVuaWNhdGlvbiUyMG1lc3NhZ2UlMjBjb25uZWN0JTIwcmVhY2h8ZW58MXx8fHwxNzcyOTkwOTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              We'd love to hear from you. Reach out with questions, suggestions, or to learn more about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2 space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 md:mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-6 md:mb-8">
                  Have questions or want to get involved? We're here to help. Contact us through any of the following channels.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Address</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      16-1-17/17<br />
                      Poosala Basti<br />
                      Saidabad, Hyderabad
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Phone</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      +91 8309337196
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      goodwilltrust01@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Office Hours</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              {submitted && (
                <div className="mb-6 md:mb-8 bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                  <p className="font-semibold text-sm sm:text-base">
                    Thank you! Redirecting to WhatsApp...
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">Send us a Message</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donation Information</option>
                      <option value="programs">Program Information</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Department Contacts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For specific inquiries, you can reach out directly to our departments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10">
              <div className="bg-gradient-to-br from-primary to-secondary text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen size={28} />
              </div>
              <h3 className="font-semibold text-primary mb-3 text-center text-base">Programs</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                For information about our programs and how to access our services
              </p>
              <p className="text-sm font-semibold text-primary">goodwilltrust01@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10">
              <div className="bg-gradient-to-br from-primary to-secondary text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Heart size={28} />
              </div>
              <h3 className="font-semibold text-primary mb-3 text-center text-base">Donations</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                For donation inquiries and fundraising partnerships
              </p>
              <p className="text-sm font-semibold text-primary">goodwilltrust01@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10">
              <div className="bg-gradient-to-br from-primary to-secondary text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users size={28} />
              </div>
              <h3 className="font-semibold text-primary mb-3 text-center text-base">Volunteer</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                For volunteer opportunities and community engagement
              </p>
              <p className="text-sm font-semibold text-primary">goodwilltrust01@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl text-white/90 mb-8">
            Follow us on social media to stay updated on our programs, events, and impact stories
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/share/18ee63o6Yv/"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/goodwilltrusts?igsh=Z2ZzN3JtdXJ1MnAz"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/goodwilltrusts?igsh=Z2ZzN3JtdXJ1MnAz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/goodwilltrust"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}