import { Lock } from "lucide-react";
import { useMemo, useState } from "react";

import backdropImage from "../../assets/backdrop-image.png";

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

    if (customAmount.trim() && !Number.isNaN(custom) && custom > 0) {
      return custom;
    }

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
      {/* Page 1 only */}
      <section className="relative min-h-[100vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={backdropImage}
            alt="Girl banner"
            className="
              w-full
              h-full
              object-cover
              object-[50%_center]
              sm:object-[52%_center]
              md:object-[54%_center]
              lg:object-[56%_center]
              xl:object-[58%_center]
            "
          />

          <div className="absolute inset-0 bg-black/25" />

          {/* Hide unwanted left-side 'i' with matching fade color */}
          <div className="absolute left-0 top-0 z-[2] h-full w-[46px] bg-gradient-to-r from-[#cfd6d5] via-[#cfd6d5] to-transparent" />
        </div>

        <div className="relative z-10 w-full pl-6 pr-4 sm:pl-8 sm:pr-6 lg:pl-10 lg:pr-8 py-10 md:py-16">
          <div className="min-h-[calc(100vh-110px)] flex items-center">
            <div className="w-full grid lg:grid-cols-[520px_1fr] gap-8 items-center">
              {/* Left white donate panel */}
              <div className="bg-white rounded-sm shadow-2xl p-5 md:p-6 max-w-[520px]">
                <h1 className="text-[40px] md:text-[48px] leading-[1.12] font-bold text-[#13233B] tracking-[-0.8px]">
                  Your Support Can
                  <br />
                  Transform Lives
                  <br />
                  with Dignity.
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
                      customAmount
                        ? "bg-[#1f5fbf] text-white"
                        : "bg-white text-[#13233B]"
                    }`}
                  >
                    OTHER
                  </button>
                </div>

                <div className="mt-5 text-center text-[20px] md:text-[22px] font-bold text-[#13233B]">
                  ₹ {finalAmount} PER{" "}
                  {donationType === "monthly" ? "MONTH" : "DONATION"}
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
                  Stay connected with to see the impact of your generosity,
                  inspiring success stories, and new opportunities to support
                  inclusion, dignity, and empowerment.
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

              {/* Right empty space for girl image */}
              <div className="hidden lg:block min-h-[680px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}