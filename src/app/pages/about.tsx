import bhanuPrakashImage from "../../assets/bhanu_prakash.png";
import tejaPhotoImage from "../../assets/teja_photo.png";
import amarImage from "../../assets/amar.png";
import verrabaddireddyImage from "../../assets/verrabaddireddy.png";
import raghuBabuImage from "../../assets/raghubabu.png";
import narasimhaNarenImage from "../../assets/narasimha_naren.png";
import { Users, Heart, Award, Lightbulb, Recycle, Store, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const teamMembers = [
    {
      name: "Teja Gadamsetty",
      role: "Founder & Director",
      image: tejaPhotoImage,
    },
    {
      name: "Amaranth",
      role: "Co-Founder",
      image: amarImage,
    },
    {
      name: "Verrabaddireddy",
      role: "Co-Founder",
      image: verrabaddireddyImage,
    },
    {
      name: "RaghuBabu",
      role: "Trustee Member",
      image: raghuBabuImage,
    },
    {
      name: "Narasimha Naren",
      role: "Trustee Member",
      image: narasimhaNarenImage,
    },
    {
      name: "Bhanu Prakash",
      role: "Trustee Member",
      image: bhanuPrakashImage,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1661238870576-bad5e6499390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBkaXNhYmlsaXRpZXMlMjBjb21tdW5pdHklMjBzdXBwb3J0JTIwY2FyaW5nfGVufDF8fHx8MTc3Mjk5MDk3NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Good Will Trust"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Goodwill Trust</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Goodwill Trust was founded with a simple yet powerful belief — every individual deserves dignity,
              opportunity, and the chance to build their own future.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-secondary to-primary text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Skill Development Programs</h3>
            <p className="text-muted-foreground leading-relaxed">
              We conduct workshops and training sessions that help individuals learn practical skills that can
              generate income and build self-confidence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Store size={32} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Goodwill Stores Initiative</h3>
            <p className="text-muted-foreground leading-relaxed">
              Inspired by global social enterprise models, we aim to create Goodwill Stores where donated or
              unused materials are collected, recycled, and converted into useful products. These stores will
              serve as both employment hubs and entrepreneurial platforms for persons with disabilities and women
              entrepreneurs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-secondary to-primary text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Recycle size={32} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Recycling for Social Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Through our recycling initiatives, unused materials are transformed into useful products, creating
              employment opportunities while also contributing to environmental sustainability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Community Support & Awareness</h3>
            <p className="text-muted-foreground leading-relaxed">
              We actively work to build awareness in society about the capabilities of persons with disabilities
              and encourage communities to support inclusive development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/90 backdrop-blur-sm w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg border-4 border-primary/20">
              <Lightbulb size={48} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Philosophy</h2>
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe that{" "}
                <span className="text-primary font-semibold">
                  true empowerment happens when people are given opportunity, not sympathy
                </span>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instead of offering temporary help, we focus on creating sustainable livelihoods that allow
                individuals to stand on their own feet and support their families with pride.
              </p>
              <p className="text-lg text-primary font-semibold leading-relaxed">
                Every person we support is not just a beneficiary — they are a partner in building a stronger and
                more inclusive society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Goodwill Trust */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Goodwill Trust?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Goodwill Trust is more than an organization. It is a{" "}
              <span className="text-primary font-semibold">movement of hope, dignity, and opportunity</span>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our approach combines{" "}
                <span className="text-primary font-semibold">
                  social impact, entrepreneurship, and community collaboration
                </span>{" "}
                to build long-term solutions for persons with disabilities.
              </p>
              <p className="text-xl text-primary font-semibold text-center py-4">
                We believe that when the right support system is created, talent can rise above every limitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Commitment</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-primary/10">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className="text-muted-foreground leading-relaxed">
                Empowering persons with disabilities through entrepreneurship
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-primary/10">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className="text-muted-foreground leading-relaxed">
                Creating sustainable employment opportunities
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-primary/10">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className="text-muted-foreground leading-relaxed">
                Promoting dignity, independence, and self-confidence
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-primary/10">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className="text-muted-foreground leading-relaxed">
                Building an inclusive ecosystem where everyone has equal opportunity to succeed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-[#f4b000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center gap-2 bg-white/40 text-black px-4 py-2 rounded-full mb-4">
              <Users size={16} />
              <span className="font-semibold text-sm">OUR TEAM</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Meet Our Leadership
            </h2>

            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Dedicated professionals committed to empowering individuals with disabilities and creating lasting
              social impact
            </p>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="bg-[#eeeeee] p-4 rounded-sm shadow-sm">
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-[20px] font-bold text-black mt-5 leading-tight min-h-[56px]">
              {member.name}
            </h3>

            <p className="text-black font-semibold mt-2 min-h-[40px] text-[14px]">
              {member.role}
            </p>
          </div>
          ))}
        </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/30 p-8 md:p-12 rounded-3xl border border-white/40">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                  <Heart size={32} className="text-[#f4b000]" />
                </div>
                <p className="text-xl md:text-2xl text-black font-semibold leading-relaxed italic mb-4">
                  "Together, we believe in the power of empowerment, dignity, and opportunity. Every individual we
                  serve is a testament to the incredible potential that exists when barriers are removed and
                  possibilities are embraced."
                </p>
                <p className="text-lg text-black/80 font-medium">— The Goodwill Trust Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}