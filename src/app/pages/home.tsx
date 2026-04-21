import { Link } from "react-router";
import { Heart, Users, GraduationCap, Briefcase, ArrowRight, Target, Eye, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HeroSlider } from "../components/hero-slider";

import homepage1 from "../../assets/homepage1.jpeg";
import homepage2 from "../../assets/homepage2.jpeg";
import homepage3 from "../../assets/homepage3.jpeg";
import homepage4 from "../../assets/homepage4.jpeg";
import homepage5 from "../../assets/homepage5.jpeg";
import homepage6 from "../../assets/homepage6.jpeg";
import homepage7 from "../../assets/homepage7.jpeg";
import homepage8 from "../../assets/homepage8.jpeg";

import testimonialImage1 from "../../assets/484cc6ca38428c0b5e24d4393e738778faa0614b.png";
import testimonialImage2 from "../../assets/2f53c77a497cc1c5f0a3009a82e02245364f8fa6.png";

export function Home() {
  const sliderImages = [
    homepage1,
    homepage2,
    homepage3,
    homepage4,
    homepage5,
    homepage6,
    homepage7,
    homepage8
  ];

  return (
    <div>
      {/* Hero Section - Full Width Slider Only */}
   <section className="relative overflow-hidden">
  <div className="w-[100%] mx-auto h-[50vh] sm:h-[60vh] md:h-[69.58vh] rounded-xl overflow-hidden">
    <HeroSlider images={sliderImages} />
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <span className="font-semibold text-sm tracking-wide">WHO WE ARE</span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-in fade-in slide-in-from-top-6 duration-700"
              style={{ animationDelay: "200ms" }}
            >
              Our Mission & Vision
            </h2>

            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <Heart size={20} className="text-primary fill-primary animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-top-8 duration-700"
              style={{ animationDelay: "400ms" }}
            >
              We are dedicated to creating an inclusive society where everyone has equal opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="group animate-in fade-in slide-in-from-left-8 duration-700" style={{ animationDelay: "600ms" }}>
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-primary/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-100/60 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100/50 to-transparent rounded-tr-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-primary to-secondary text-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Target size={36} className="group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Our Mission
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg mb-6 group-hover:text-foreground transition-colors duration-300">
                    To empower individuals with disabilities by providing comprehensive support services, skill development programs, and advocacy initiatives that promote independence, dignity, and equal opportunities in all aspects of life.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex items-start gap-3 group/item">
                      <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        Comprehensive Support Services
                      </span>
                    </div>
                    <div className="flex items-start gap-3 group/item">
                      <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        Skill Development Programs
                      </span>
                    </div>
                    <div className="flex items-start gap-3 group/item">
                      <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        Advocacy & Equal Opportunities
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group animate-in fade-in slide-in-from-right-8 duration-700" style={{ animationDelay: "800ms" }}>
              <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-secondary/10 hover:border-secondary/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-secondary to-primary text-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                      <Eye size={36} className="group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      Our Vision
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-secondary/30 to-transparent"></div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg mb-6 group-hover:text-foreground transition-colors duration-300">
                    To build a barrier-free, inclusive society where people with disabilities are valued, respected, and have equal access to education, employment, healthcare, and social participation, enabling them to live with dignity and reach their full potential.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-secondary/10">
                    <div className="flex items-start gap-3 group/item">
                      <CheckCircle size={18} className="text-secondary mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        Barrier-Free Society
                      </span>
                    </div>
                    <div className="flex items-start gap-3 group/item">
                      <CheckCircle size={18} className="text-secondary mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        Equal Access to Services
                      </span>
                    </div>
                    <div className="flex items-start gap-3 group/item">
                      <CheckCircle size={18} className="text-secondary mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        Dignity & Full Potential
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "1000ms" }}>
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-primary/10">
              <div className="flex items-center gap-2">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                <p className="text-lg italic text-muted-foreground">
                  "Building bridges of opportunity, one life at a time"
                </p>
              </div>
              <Heart size={24} className="text-primary fill-primary/20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to empower and support individuals with disabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1660276419535-1b45f1085250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBidXNpbmVzcyUyMHN0YXJ0dXAlMjBkaXNhYmxlZCUyMHBlcnNvbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzczNjc0NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Entrepreneurship Development Program"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Entrepreneurship Development</h3>
                <p className="text-muted-foreground mb-4">
                  We provide training, guidance, and mentorship to persons with disabilities to help them start and manage their own businesses.
                </p>
                <Link to="/activities" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740205642946-72e75a92124b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2NhdGlvbmFsJTIwdHJhaW5pbmclMjBza2lsbCUyMHdvcmtzaG9wJTIwaGFuZHMlMjB3b3JraW5nfGVufDF8fHx8MTc3Mjk4ODcwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Skill Development Program"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Skill Development Programs</h3>
                <p className="text-muted-foreground mb-4">
                  We conduct workshops and training sessions that help individuals learn practical skills that can generate income and build self-confidence.
                </p>
                <Link to="/activities" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1704586371657-a3dec5d7f6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpZnQlMjBzdG9yZSUyMGdvb2R3aWxsJTIwcmVjeWNsaW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzczNjc0NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Goodwill Stores Initiative"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Goodwill Stores Initiative</h3>
                <p className="text-muted-foreground mb-4">
                  Creating stores where donated materials are recycled and converted into useful products, serving as employment hubs and entrepreneurial platforms.
                </p>
                <Link to="/activities" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Heart size={16} className="fill-primary" />
              <span className="font-semibold text-sm">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the lives we've touched and transformed through our programs
            </p>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Testimonial 1 */}
              <div className="relative flex flex-col items-center w-full bg-gradient-to-b from-primary/10 to-white rounded-3xl shadow-xl p-8 pt-32">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-primary/40 shadow-xl bg-white">
                    <ImageWithFallback
                      src={testimonialImage1}
                      alt="Sai Sudeeksha"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white rounded-full p-2 shadow-lg" style={{ zIndex: 2 }}>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <div className="mt-20 w-full flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-base leading-relaxed italic mb-6 text-center">
                    "Despite being a PWD woman, I faced a lot of discrimination from society. Every day was painful, and I slowly went into depression. At that difficult time, I contacted Goodwill Trust. Their support, guidance, and motivation completely changed my thinking. They helped me believe in myself again. With their encouragement, I rebuilt my confidence, learned new skills, and started focusing on my career. Today, I am happily working at Amazon, and I feel proud of myself. Goodwill Trust didn't just help me get a job — They helped me find my self-respect and happiness again."
                  </p>
                  <div className="h-1 w-16 bg-primary rounded-full mx-auto mb-4"></div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-primary">Sai Sudeeksha</div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Now Working At <span className="font-semibold text-primary">Amazon</span>
                    </div>
                    <div className="text-xs text-muted-foreground italic">Program Beneficiary</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative flex flex-col items-center w-full bg-gradient-to-b from-secondary/10 to-white rounded-3xl shadow-xl p-8 pt-32">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-secondary/40 shadow-xl bg-white">
                    <ImageWithFallback
                      src={testimonialImage2}
                      alt="Hari Krishna"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-white rounded-full p-2 shadow-lg" style={{ zIndex: 2 }}>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <div className="mt-20 w-full flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-base leading-relaxed italic mb-6 text-center">
                    "Because of Goodwill Trust, I received the right support, guidance, and career direction when I needed it the most. They believed in me when I was unsure about my future. With their help and motivation, I gained confidence, learned skills, and finally got a job at HSBC. This is not just a job… this is a new life, new hope, and new self-respect. Thank you Goodwill Trust for changing my journey. 🙏✨"
                  </p>
                  <div className="h-1 w-16 bg-secondary rounded-full mx-auto mb-4"></div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-primary">Hari Krishna</div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Now Working At <span className="font-semibold text-primary">HSBC</span>
                    </div>
                    <div className="text-xs text-muted-foreground italic">Program Beneficiary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-lg">
            <Heart size={36} className="text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Join Us in Making a Difference</h2>

          <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
            Your support can transform lives. Whether through donations, volunteering, or partnership, every contribution matters.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/donate"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <Heart size={20} />
              Make a Donation
            </Link>

            <Link
              to="/contact"
              className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 transition-all hover:shadow-lg inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}