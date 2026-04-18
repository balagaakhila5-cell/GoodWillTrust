import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-6">
            <span className="text-6xl font-bold text-primary">404</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Page Not Found
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <Home size={20} />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 transition-all hover:shadow-lg inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-muted-foreground mb-4">
            Looking for something specific? Try these pages:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/about" className="text-primary hover:underline">About Us</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/activities" className="text-primary hover:underline">Activities</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/donate" className="text-primary hover:underline">Donate</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/gallery" className="text-primary hover:underline">Gallery</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/contact" className="text-primary hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
