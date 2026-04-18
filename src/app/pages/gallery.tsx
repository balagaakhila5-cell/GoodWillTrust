import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import gallery_2 from "../../assets/gallery_2.png";
import gallery_3 from "../../assets/gallery_3.png";
import gallery_4 from "../../assets/gallery_4.png";
import gallery_7 from "../../assets/gallery_7.png";
import gallery_8 from "../../assets/gallery_8.png";
import gallery_10 from "../../assets/gallery_10.png";
import gallery_11 from "../../assets/gallery_11.png";
import gallery_12 from "../../assets/gallery_12.png";
import gallery_13 from "../../assets/gallery_13.png";
import gallery_14 from "../../assets/gallery_14.png";

export function Gallery() {
  const galleryImages = [
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_7,
    // gallery_8, // removed 8th card (was 7th index, now 6th after removal above)
    gallery_10,
    gallery_11,
    gallery_12,
    gallery_13,
    gallery_14,
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Moments captured from our programs, events, and the lives we've touched
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group relative h-[294px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-fill"
                />
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
            {/* Video Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <p className="font-semibold">Impact Stories 2025</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Our Year in Review
                </h3>
                <p className="text-muted-foreground">
                  A compilation of achievements and transformative moments from the past year
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white">
                <p className="font-semibold">Beneficiary Testimonials</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Voices of Change
                </h3>
                <p className="text-muted-foreground">
                  Hear directly from individuals whose lives have been transformed by our programs
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