import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style/App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden gap-y-2">
        {/* Hero Section */}
        <Hero />
        {/* Footer with Background Video */}
        <Footer />

        <Contact />
    </div>
  );
}

export default App;
