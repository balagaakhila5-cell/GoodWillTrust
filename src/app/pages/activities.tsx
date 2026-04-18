import { GraduationCap, Briefcase, HandHeart, Accessibility, Brain, HeartPulse, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Activities() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769531125309-8c637af54b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwbGVhcm5pbmclMjBza2lsbHN8ZW58MXx8fHwxNzcyOTkwOTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Activities</h1>
            <p className="text-xl text-white/90">
              Comprehensive initiatives designed to empower and support individuals with disabilities
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Education Support */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl mb-6">
                  <GraduationCap size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Education Support</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We believe education is the foundation for empowerment. Our education support program provides accessible learning resources, scholarships, special educators, and assistive technology to ensure students with disabilities receive quality education.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Inclusive education advocacy in mainstream schools</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Scholarships and financial aid for students</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Special education resources and trained teachers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Assistive technology and learning aids</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3Mjk0MDU2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Education support program"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Skill Development */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-2xl mb-6">
                  <Briefcase size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Skill Development & Vocational Training</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our vocational training programs equip individuals with marketable skills, enhancing their employability and financial independence. We partner with industries to provide practical training and job placement support.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Computer literacy and IT skills training</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Crafts, tailoring, and artisan workshops</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Business and entrepreneurship development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Job placement and career counseling</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
              <div className="md:order-1 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3b3JraW5nJTIwc2tpbGxzJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzI5ODUyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Skill development training"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Community Empowerment */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl mb-6">
                  <HandHeart size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Community Empowerment</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Building inclusive communities through awareness programs, social integration activities, and family support services. We work to create environments where everyone belongs.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Disability awareness campaigns</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Community-based rehabilitation programs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Parent and family counseling support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Peer support groups and social activities</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764006145420-df3006edf060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVlbGNoYWlyJTIwYWNjZXNzaWJpbGl0eSUyMHN1cHBvcnQlMjBoZWxwaW5nfGVufDF8fHx8MTc3Mjk4NTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Community support activities"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized programs designed to address specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Accessibility size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Accessibility Solutions</h3>
              <p className="text-muted-foreground">
                Providing assistive devices, home modifications, and accessibility audits to ensure barrier-free living and mobility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-secondary to-primary text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Mental Health Support</h3>
              <p className="text-muted-foreground">
                Counseling services, therapy programs, and mental wellness initiatives for individuals and families.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <HeartPulse size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Healthcare Access</h3>
              <p className="text-muted-foreground">
                Facilitating access to medical care, health camps, and specialized treatments for people with disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Want to Learn More About Our Activities?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch with us to discover how our activities can help or how you can support our initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/donate"
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}