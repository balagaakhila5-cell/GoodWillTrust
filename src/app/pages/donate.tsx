import { Heart, CreditCard, Building, Smartphone, CheckCircle2, Users, GraduationCap, BookOpen, Target, Shield, Award, TrendingUp, Calendar, MapPin, Lock, FileText, ChevronRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const donationCards = [
    { amount: 5000, impact: "Help 10 children continue education", children: 10 },
    { amount: 10000, impact: "Support learning materials for a month", children: 20 },
    { amount: 15000, impact: "Fund academic support classes", children: 30 },
    { amount: 25000, impact: "Sponsor a community learning program", children: 50 },
  ];

  const handleDonate = () => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 5000);
  };

  const progressPercent = ((selectedAmount || parseInt(customAmount) || 0) / 25000) * 100;

  return (
    <div>
      {/* Hero Section with Emotional Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771340591864-32f2e4027226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlsZHJlbiUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9uJTIwaGFwcHl8ZW58MXx8fHwxNzQxMjEzNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Children Learning"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={16} className="text-yellow-300" />
              <span className="text-sm font-semibold">Make a Difference Today</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Help Children Stay in School<br />& Build Their Future
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Education is the foundation of empowerment. Your support helps underprivileged children access quality education, breaking the cycle of poverty and building brighter futures.
            </p>

            {/* Animated Statistics Counter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                  <AnimatedCounter end={2263} />+
                </div>
                <div className="text-xs sm:text-sm text-white/80">Children Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                  <AnimatedCounter end={95} />%
                </div>
                <div className="text-xs sm:text-sm text-white/80">School Enrollment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                  <AnimatedCounter end={98} />%
                </div>
                <div className="text-xs sm:text-sm text-white/80">Protected from Malnutrition</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                  <AnimatedCounter end={85} />%
                </div>
                <div className="text-xs sm:text-sm text-white/80">Protected from Labor</div>
              </div>
            </motion.div>

            {/* Quick Donate Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <a 
                href="#donate-form"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Heart size={24} className="fill-primary" />
                Donate Now
                <ChevronRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Donate - Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <BookOpen size={16} />
                <span className="text-sm font-semibold">Our Impact Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Your Support Matters
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                The COVID-19 pandemic created an unprecedented education crisis. Millions of children from underserved communities lost access to learning, widening the education gap significantly.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Academic Support Gap</h4>
                    <p className="text-sm text-muted-foreground">Many children lack access to tutoring and supplementary learning resources</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Digital Divide</h4>
                    <p className="text-sm text-muted-foreground">Limited technology access prevents modern learning opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Financial Barriers</h4>
                    <p className="text-sm text-muted-foreground">Families struggle to afford books, uniforms, and educational materials</p>
                  </div>
                </div>
              </div>

              {/* Success Story Quote */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-foreground italic mb-3">
                  "Thanks to Good Will Trust, my daughter Anjali received tutoring support and is now excelling in her studies. She dreams of becoming a teacher to help other children like her."
                </p>
                <p className="text-sm font-semibold text-primary">— Sunita, Parent of Beneficiary</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719154717749-0d05f61a0588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlsZHJlbiUyMHN0dWR5aW5nJTIwYm9va3MlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NDEyMTM3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Children Studying"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary">
                        <AnimatedCounter end={99} />%
                      </div>
                      <div className="text-sm text-muted-foreground">Girls Protected from Child Marriage</div>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section id="donate-form" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Heart size={16} className="fill-primary" />
              <span className="text-sm font-semibold">Choose Your Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Select Donation Amount</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every contribution creates real change. Choose an amount that works for you.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Give Once / Give Monthly Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex bg-white rounded-xl p-1.5 shadow-lg">
                <button
                  onClick={() => setDonationType("once")}
                  className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all ${
                    donationType === "once"
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Give Once
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all ${
                    donationType === "monthly"
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Give Monthly
                </button>
              </div>
            </motion.div>

            {/* Donation Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
              {donationCards.map((card, index) => (
                <motion.button
                  key={card.amount}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => {
                    setSelectedAmount(card.amount);
                    setCustomAmount("");
                  }}
                  className={`relative p-6 rounded-2xl border-2 transition-all text-left overflow-hidden group ${
                    selectedAmount === card.amount
                      ? "border-primary bg-gradient-to-br from-primary to-secondary text-white shadow-2xl"
                      : "border-border bg-white hover:border-primary/50 hover:shadow-xl"
                  }`}
                >
                  {/* Selected Badge */}
                  {selectedAmount === card.amount && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                        <CheckCircle2 size={20} className="text-white" />
                      </div>
                    </div>
                  )}

                  {/* Amount */}
                  <div className="text-3xl font-bold mb-3">
                    ₹{card.amount.toLocaleString()}
                  </div>

                  {/* Impact */}
                  <p className={`text-sm mb-4 ${
                    selectedAmount === card.amount ? "text-white/90" : "text-muted-foreground"
                  }`}>
                    {card.impact}
                  </p>

                  {/* Children Count */}
                  <div className={`flex items-center gap-2 text-sm font-semibold ${
                    selectedAmount === card.amount ? "text-white" : "text-primary"
                  }`}>
                    <Users size={16} />
                    {card.children} children
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </motion.button>
              ))}
            </div>

            {/* Custom Amount */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-dashed border-border hover:border-primary/50 transition-all"
            >
              <label className="block text-sm font-semibold text-foreground mb-3">
                Or Enter Custom Amount (₹)
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="w-full px-6 py-4 text-2xl font-bold rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </motion.div>

            {/* Progress Bar - Donation Impact */}
            {(selectedAmount || customAmount) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-2 border-green-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">Your Impact Today</span>
                  <span className="text-sm font-bold text-primary">
                    {Math.min(Math.round(progressPercent), 100)}%
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-3 overflow-hidden mb-4 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progressPercent, 100)}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  ></motion.div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your ₹{(selectedAmount || parseInt(customAmount) || 0).toLocaleString()} donation can help approximately{" "}
                  <span className="font-bold text-primary">
                    {Math.floor((selectedAmount || parseInt(customAmount) || 0) / 500)} children
                  </span>{" "}
                  access quality education this month!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Target size={16} />
              <span className="text-sm font-semibold">Making an Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How Your Donation Helps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your contribution directly funds these impactful programs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: BookOpen,
                title: "Interactive Learning Classes",
                description: "Engaging educational sessions with trained educators using modern teaching methods",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Sparkles,
                title: "Creative Activities",
                description: "Storytelling, dance, art and music programs that nurture creativity and confidence",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Users,
                title: "Community Awareness",
                description: "Programs that engage parents and communities to support children's education",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Target,
                title: "Children's Empowerment",
                description: "Building leadership skills and creating supportive peer collectives",
                color: "from-orange-500 to-orange-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 text-green-800 p-6 rounded-2xl flex items-start gap-4 shadow-lg"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-xl mb-1">Thank You for Your Generosity! 🎉</p>
                <p className="text-sm">Your donation will make a real difference in children's lives. We'll send you a receipt shortly.</p>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-2 border-gray-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Complete Your Donation</h3>
              <p className="text-muted-foreground">Secure and encrypted payment process</p>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    currentStep >= step
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "bg-gray-200 text-gray-500"
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`hidden sm:block w-12 md:w-20 h-1 rounded-full transition-all ${
                      currentStep > step ? "bg-primary" : "bg-gray-200"
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Personal Information</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="px-4 py-3 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    required
                  />
                  <input
                    type="date"
                    placeholder="Date of Birth *"
                    className="px-4 py-3 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="px-4 py-3 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  className="px-4 py-3 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <input
                  type="text"
                  placeholder="Address *"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all mb-4"
                  required
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Pincode *"
                    className="px-4 py-3 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                  <input
                    type="text"
                    placeholder="PAN Number (for 80G receipt)"
                    className="px-4 py-3 rounded-xl border-2 border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Payment Method</label>
                <div className="grid sm:grid-cols-3 gap-3">
                  <button className="flex items-center gap-3 p-4 border-2 border-primary bg-primary/5 rounded-xl hover:bg-primary/10 transition-all">
                    <CreditCard className="text-primary" size={24} />
                    <span className="font-semibold text-sm">Card</span>
                  </button>
                  <button className="flex items-center gap-3 p-4 border-2 border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all">
                    <Smartphone className="text-primary" size={24} />
                    <span className="font-semibold text-sm">UPI</span>
                  </button>
                  <button className="flex items-center gap-3 p-4 border-2 border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all">
                    <Building className="text-primary" size={24} />
                    <span className="font-semibold text-sm">Bank</span>
                  </button>
                </div>
              </div>

              {/* 80G Tax Exemption Notice */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">80G Tax Exemption Benefit</h4>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Your donation is eligible for tax deduction under Section 80G of the Income Tax Act. You will receive an official receipt via email for tax filing purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield size={24} className="text-green-600" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground">Secure Payment</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Lock size={24} className="text-blue-600" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground">Encrypted</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award size={24} className="text-purple-600" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground">Transparent</p>
                </div>
              </div>

              {/* Donate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDonate}
                className="w-full bg-gradient-to-r from-primary via-secondary to-primary text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 bg-[length:200%_100%] hover:bg-[position:100%_0] animate-gradient"
              >
                <Heart size={24} className="fill-white" />
                Complete Donation of ₹{(selectedAmount || parseInt(customAmount) || 0).toLocaleString()}
                <ChevronRight size={24} />
              </motion.button>

              <p className="text-center text-xs text-muted-foreground">
                <Lock size={12} className="inline mr-1" />
                Secured by 256-bit SSL encryption
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collective Impact</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Together with donors like you, we've achieved remarkable milestones
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              { number: 2263435, suffix: "+", label: "Children Impacted", icon: Users },
              { number: 95, suffix: "%", label: "School Enrollment", icon: GraduationCap },
              { number: 98, suffix: "%", label: "Protected from Undernourishment", icon: Heart },
              { number: 99, suffix: "%", label: "Girls Protected from Child Marriage", icon: Shield },
              { number: 85, suffix: "%", label: "Protected from Child Labour", icon: Target }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.number > 1000 ? (
                    <>
                      <AnimatedCounter end={Math.floor(stat.number / 1000)} />
                      ,
                      <AnimatedCounter end={stat.number % 1000} />
                    </>
                  ) : (
                    <AnimatedCounter end={stat.number} />
                  )}
                  {stat.suffix}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Heart size={16} className="fill-primary" />
              <span className="text-sm font-semibold">Donor Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Donors Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of compassionate individuals making a difference
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Rajesh Mehta",
                role: "Monthly Donor since 2022",
                image: "https://images.unsplash.com/photo-1667563692030-6aea832f195c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBjb25maWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI5ODg5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
                quote: "Supporting Good Will Trust has been the most fulfilling decision. Knowing that my monthly contribution helps children access education fills me with joy. The transparency reports keep me informed about the real impact."
              },
              {
                name: "Priya Sharma",
                role: "One-time Donor",
                image: "https://images.unsplash.com/photo-1622632405663-f43782a098b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHZvbHVudGVlciUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI5ODg5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
                quote: "I donated for my daughter's birthday, and it was amazing to see how my contribution helped 10 children continue their education. The detailed impact report made me realize the power of giving."
              },
              {
                name: "Amit Patel",
                role: "Corporate Donor",
                image: "https://images.unsplash.com/photo-1765496956261-0ebaad79e6b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc0MTIxMzcyNnww&ixlib=rb-4.1.0&q=80&w=1080",
                quote: "Our company has partnered with Good Will Trust for CSR activities. Their professional approach and measurable outcomes make them an ideal partner. Highly recommend supporting their cause."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Commitment to Transparency
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every rupee is tracked and reported. We maintain the highest standards of accountability.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { percentage: "85%", label: "Directly to Programs", icon: Target, color: "from-green-500 to-green-600" },
              { percentage: "10%", label: "Administrative Costs", icon: Building, color: "from-blue-500 to-blue-600" },
              { percentage: "5%", label: "Fundraising", icon: TrendingUp, color: "from-purple-500 to-purple-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center border-2 border-gray-100"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <item.icon size={36} className="text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.percentage}</div>
                <p className="text-muted-foreground font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10">
            <h3 className="text-xl font-bold text-center text-primary mb-8">Recognized & Certified</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: "80G Certified" },
                { icon: Lock, label: "Secure Payments" },
                { icon: Award, label: "NGO Excellence Award" },
                { icon: FileText, label: "Annual Reports" }
              ].map((badge, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <badge.icon size={28} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}