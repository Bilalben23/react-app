import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style/App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Hero Section */}
        <Hero />
        {/* Footer with Background Video */}
        <Footer />
    </div>
  );
}

export default App;
