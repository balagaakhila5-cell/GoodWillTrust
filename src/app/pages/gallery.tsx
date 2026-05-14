import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import logoLaunch from "../../assets/logo-launch.jpeg";
import websiteLaunch from "../../assets/website-launch.jpeg";

import gallery1 from "../../assets/gal1.jpeg";
import gallery2 from "../../assets/gal2.jpeg";
import gallery3 from "../../assets/gal3.jpeg";
import gallery4 from "../../assets/gal4.jpeg";
import gallery5 from "../../assets/gal5.jpeg";
import gallery8 from "../../assets/gal8.jpeg";
import gallery9 from "../../assets/gal9.jpeg";

import gallery10Nellore from "../../assets/gal10-nellore.jpeg";
import gallery11Nellore from "../../assets/gal11-nellore.jpeg";
import gallery12Nellore from "../../assets/gal12-nellore.jpeg";
import gallery13Nellore from "../../assets/gal13-nellore.jpeg";

import gallery14 from "../../assets/gal14.jpeg";

export function Gallery() {
  const galleryImages = [
    { src: logoLaunch, city: "Logo Launch", position: "center 72%" },
    { src: websiteLaunch, city: "Website Launch", position: "center center" },

    // 3rd image moved UP
    {
      src: gallery1,
      city: "Vijayawada",
      position: "top center",
      imageClass: "h-[108%] -translate-y-10",
    },

    { src: gallery2, city: "Tirupati", position: "top center" },

    { src: gallery3,
     city: "Guntur",
      position: "top center" },
      
    { src: gallery4, 
      city: "Vijayawada", 
      position: "center 92%" },

    // 7th image moved LITTLE DOWN
    {
      src: gallery5,
      city: "Tirupati",
      position: "center 30%",
      imageClass: "h-[108%] translate-y-0",
    },

    { src: gallery8, city: "Guntur", position: "top center" },
    { src: gallery9, city: "Vijayawada", position: "top center" },

    { src: gallery10Nellore, city: "Nellore", position: "top center" },
    { src: gallery11Nellore, city: "Nellore", position: "top center" },
    { src: gallery12Nellore, city: "Nellore", position: "top center" },
    { src: gallery13Nellore, city: "Nellore", position: "top center" },

    { src: gallery14, city: "Tirupati", position: "top center" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1614447413359-5f87a652a269"
            alt="Gallery"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Moments captured from our programs, events, and the lives
            we&apos;ve touched
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Our Gallery
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beautiful moments from Vijayawada, Nellore, Tirupati and Guntur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
            {galleryImages.map((item, index) => (
              <div key={index} className="group">
                <h3 className="mb-4 text-center text-[24px] md:text-[30px] font-extrabold tracking-wide bg-gradient-to-r from-[#2563EB] to-[#EC4899] bg-clip-text text-transparent">
                  {item.city}
                </h3>

                <div className="relative w-full h-[380px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-slate-100">
                  <ImageWithFallback
                    src={item.src}
                    alt={`${item.city} gallery image ${index + 1}`}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                      item.imageClass ? item.imageClass : "h-full"
                    }`}
                    style={{
                      objectPosition: item.position,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Video Highlights
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our impact stories and program highlights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <p className="font-semibold">Impact Stories 2025</p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Our Year in Review
                </h3>

                <p className="text-muted-foreground">
                  A compilation of achievements and transformative moments from
                  the past year
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white">
                <p className="font-semibold">Beneficiary Testimonials</p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Voices of Change
                </h3>

                <p className="text-muted-foreground">
                  Hear directly from individuals whose lives have been
                  transformed by our programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Journey in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Events Organized" },
              { value: "5,000+", label: "Lives Touched" },
              { value: "200+", label: "Volunteers" },
              { value: "25+", label: "Communities" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>

                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}