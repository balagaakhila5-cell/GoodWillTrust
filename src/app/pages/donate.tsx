import { Heart, ShieldCheck, Lock, CheckCircle2, HandHeart, Handshake, BadgeDollarSign } from "lucide-react";
import { useMemo, useState } from "react";

import communityImage from "../../assets/commuity_image.jpg";
import unicefRingImage from "../../assets/unicef_ring.jpg";
import girlImage from "../../assets/girl-image.jpg";

const DONATE_URL =
  "https://india.unicef.org/promisetochildren-community-t?utm_source=facebook&utm_medium=paid_social&utm_campaign=fb_prrg_conv_advs_mt_allan_18022026_pros_dlv&utm_term=pros_open_advs_allan_all__na_na_18022026_dlv&utm_content=Digital-PTC-Influencer-Video-Saru-Rehash_vd_advs_eng_18022026_24s_dlv&utm_source_platform=fb&utm_creative_format=vd&utm_marketing_tactic=pros&utm_id=120240728527310600";

export function Donate() {
  const [donationType, setDonationType] = useState<"monthly" | "once">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState("");
  const [title, setTitle] = useState("Mr.");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const donationAmounts = [1000, 1500, 2000];

  const finalAmount = useMemo(() => {
    const custom = Number(customAmount);
    if (customAmount.trim() && !Number.isNaN(custom) && custom > 0) return custom;
    return selectedAmount;
  }, [customAmount, selectedAmount]);

  const handleDonate = () => {
    if (!firstName.trim()) {
      setError("Please enter first name");
      return;
    }
    if (!lastName.trim()) {
      setError("Please enter last name");
      return;
    }
    if (!mobile.trim()) {
      setError("Please enter mobile number");
      return;
    }
    if (!email.trim()) {
      setError("Please enter email address");
      return;
    }
    if (!agree) {
      setError("Please accept the consent checkbox");
      return;
    }

    setError("");
    window.open(DONATE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white">
      {/* Page 1 */}
      <section className="relative min-h-[100vh] overflow-hidden">
        <div className="absolute inset-0">
  <img
  src="https://storage.googleapis.com/landing_pages_content/digital_paid/promise_to_children/images/section-1-banner-promise-ring-child.webp"
  alt="Girl banner"
  className="w-full h-full object-cover object-[58%_center] md:object-[62%_center] lg:object-[66%_center]"
/>
                    <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 bg-[#27A8DF]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-5">
            <div className="text-white text-[28px] md:text-[42px] font-light tracking-tight">
              <span className="font-semibold">unicef</span> for every child
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="min-h-[calc(100vh-110px)] flex items-center">
            <div className="w-full grid lg:grid-cols-[520px_1fr] gap-8 items-center">
              {/* Left white donate panel */}
              <div className="bg-white rounded-sm shadow-2xl p-5 md:p-6 max-w-[520px]">
                <h1 className="text-[34px] md:text-[44px] leading-[1.08] font-bold text-[#13233B]">
                  Your PROMISE can
                  <br />
                  protect childhoods.
                  <br />
                  <span className="text-[#1f5fbf]">DONATE NOW.</span>
                </h1>

                <div className="mt-6 grid grid-cols-4 border border-[#1f5fbf] overflow-hidden">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`h-12 text-[18px] font-medium border-r last:border-r-0 border-[#1f5fbf] ${
                        !customAmount && selectedAmount === amount
                          ? "bg-[#1f5fbf] text-white"
                          : "bg-white text-[#13233B]"
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedAmount(0)}
                    className={`h-12 text-[18px] font-medium ${
                      customAmount ? "bg-[#1f5fbf] text-white" : "bg-white text-[#13233B]"
                    }`}
                  >
                    OTHER
                  </button>
                </div>

                <div className="mt-5 text-center text-[20px] md:text-[22px] font-bold text-[#13233B]">
                  ₹ {finalAmount} PER {donationType === "monthly" ? "MONTH" : "DONATION"}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="grid grid-cols-[88px_1fr] gap-3">
                    <select
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="h-12 border border-slate-300 rounded-md px-3 text-[18px] outline-none"
                    >
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                      <option>Dr.</option>
                      <option>Prof.</option>
                    </select>

                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="h-12 border border-slate-300 rounded-md px-4 text-[18px] outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-12 border border-slate-300 rounded-md px-4 text-[18px] outline-none"
                  />

                  <input
                    type="tel"
                    placeholder="+91 10-digit mobile number without prefixes"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full h-12 border border-slate-300 rounded-md px-4 text-[18px] outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 border border-slate-300 rounded-md px-4 text-[18px] outline-none"
                  />

                  <input
                    type="number"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full h-12 border border-slate-300 rounded-md px-4 text-[18px] outline-none"
                  />
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 h-11 rounded-md font-semibold ${
                      donationType === "monthly"
                        ? "bg-[#1f5fbf] text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType("once")}
                    className={`flex-1 h-11 rounded-md font-semibold ${
                      donationType === "once"
                        ? "bg-[#1f5fbf] text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    One Time
                  </button>
                </div>

                <div className="mt-5 text-[14px] text-slate-600 leading-6">
                  We&apos;d like to keep you up to date on UNICEF&apos;s work for children, the difference
                  you&apos;re making and how else you can support us.
                </div>

                <label className="mt-3 flex items-start gap-3 cursor-pointer text-[14px] text-slate-700">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1"
                  />
                  <span>Yes, keep me updated by email / phone.</span>
                </label>

                {error && (
                  <div className="mt-4 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleDonate}
                  className="mt-5 w-full h-12 bg-[#F06414] hover:bg-[#e95a08] text-white text-[22px] font-bold rounded-md transition-all"
                >
                  Donate Now
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-600">
                  <Lock size={16} className="text-[#1f5fbf]" />
                  Secure donation flow
                </div>
              </div>

              {/* Right spacer so image shows clearly */}
              <div className="hidden lg:block min-h-[680px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Page 2 - keep good */}
      <section className="bg-[#f7f7f7] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-[#1f5fbf] uppercase tracking-wide mb-12">
            As a valued donor you receive:
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[24px] shadow-lg border border-slate-200 p-6 text-center">
              <div className="w-full flex justify-center mb-6">
                <img src={girlImage} alt="Exclusive impact stories" className="h-[170px] object-contain" />
              </div>
              <h3 className="text-[#1ea0e6] text-2xl font-extrabold uppercase leading-snug">
                Exclusive Impact Stories
              </h3>
              <p className="mt-5 text-[18px] leading-8 text-slate-700">
                See how your regular donation is helping children in need across India.
              </p>
            </div>

            <div className="bg-white rounded-[24px] shadow-lg border border-slate-200 p-6 text-center">
              <div className="w-full flex justify-center mb-6">
                <img src={unicefRingImage} alt="UNICEF Promise Ring" className="h-[170px] object-contain" />
              </div>
              <h3 className="text-[#1ea0e6] text-2xl font-extrabold uppercase leading-snug">
                UNICEF Promise Ring
              </h3>
              <p className="mt-5 text-[18px] leading-8 text-slate-700">
                A wearable symbol of your commitment for children.
              </p>
            </div>

            <div className="bg-white rounded-[24px] shadow-lg border border-slate-200 p-6 text-center">
              <div className="w-full flex justify-center mb-6">
                <img src={communityImage} alt="Special community" className="h-[170px] object-contain" />
              </div>
              <h3 className="text-[#1ea0e6] text-2xl font-extrabold uppercase leading-snug">
                Special Community
              </h3>
              <p className="mt-5 text-[18px] leading-8 text-slate-700">
                A family of changemakers committed to transforming children&apos;s lives.
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <p className="text-2xl md:text-3xl text-slate-800">
              Keep childhoods safe. <span className="font-bold">Start your monthly giving today.</span>
            </p>

            <button
              type="button"
              onClick={handleDonate}
              className="mt-8 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-2xl px-10 py-4 rounded-lg shadow-md transition-all"
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </section>

      {/* Page 3 */}
      <section className="bg-[#f7f7f7] py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-5xl font-medium text-[#1f5fbf] uppercase mb-12">
            Why your promise matters?
          </h2>

          <div className="bg-white rounded-[20px] shadow-lg border border-slate-200 p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8 md:gap-0">
              <div className="text-center px-4 md:px-8">
                <div className="flex justify-center mb-5">
                  <HandHeart size={48} className="text-[#27A8DF]" strokeWidth={1.8} />
                </div>
                <p className="text-[18px] md:text-[20px] leading-9 text-[#222]">
                  UNICEF&apos;s work in India solely relies on donations from individuals and businesses.
                  Your support helps the team at UNICEF India continue its vital work for children.
                </p>
              </div>

              <div className="text-center px-4 md:px-8 md:border-l md:border-r border-slate-300">
                <div className="flex justify-center mb-5">
                  <Handshake size={48} className="text-[#27A8DF]" strokeWidth={1.8} />
                </div>
                <p className="text-[18px] md:text-[20px] leading-9 text-[#222]">
                  Your donation to UNICEF empowers teams at the grassroot level for improving
                  access to healthcare, education, clean water, sanitation, and a safe environment.
                </p>
              </div>

              <div className="text-center px-4 md:px-8">
                <div className="flex justify-center mb-5">
                  <BadgeDollarSign size={48} className="text-[#27A8DF]" strokeWidth={1.8} />
                </div>
                <p className="text-[18px] md:text-[20px] leading-9 text-[#222]">
                  Your monthly donations help us plan more effectively, so that every child,
                  especially the most marginalized, has the chance to thrive. Donate online today.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={handleDonate}
              className="bg-[#F06414] hover:bg-[#e95a08] text-white font-bold text-[20px] md:text-[22px] px-10 py-4 rounded-md transition-all"
            >
              START YOUR IMPACT
            </button>
          </div>
        </div>
      </section>

      {/* Page 4 */}
     {/* Page 4 */}
<section className="bg-[#f7f7f7] py-10 md:py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-[18px] shadow-lg overflow-hidden border border-slate-200">
        <div className="bg-[#27A8DF] text-white text-center text-[20px] md:text-[22px] py-3 px-4">
          6000+ members...
        </div>
        <div className="p-2">
          <img
            src="https://storage.googleapis.com/landing_pages_content/digital_paid/promise_to_children/images/section-4-banner-1-comms.webp"
            alt="Members collage"
            className="w-full h-[210px] object-cover rounded-b-[14px]"
          />
        </div>
      </div>

      <div className="bg-white rounded-[18px] shadow-lg overflow-hidden border border-slate-200">
        <div className="bg-[#27A8DF] text-white text-center text-[20px] md:text-[22px] py-3 px-4">
          from 130+ cities in India...
        </div>
        <div className="p-2">
          <img
            src="https://storage.googleapis.com/landing_pages_content/digital_paid/promise_to_children/images/section-4-banner-2-comms.webp"
            alt="Cities collage"
            className="w-full h-[210px] object-cover rounded-b-[14px]"
          />
        </div>
      </div>
    </div>

    <div className="text-center mt-10">
      <button
        type="button"
        onClick={handleDonate}
        className="bg-[#F06414] hover:bg-[#e95a08] text-white font-bold text-[20px] md:text-[22px] px-10 py-4 rounded-md transition-all"
      >
        JOIN THE COMMUNITY
      </button>
    </div>

    <div className="flex justify-end mt-8">
      <button
        type="button"
        className="bg-[#F06414] hover:bg-[#e95a08] text-white font-bold text-[18px] md:text-[20px] px-8 py-4 rounded-md transition-all"
      >
        CLICK HERE FOR FAQs
      </button>
    </div>
  </div>
</section>
    </div>
  );
}