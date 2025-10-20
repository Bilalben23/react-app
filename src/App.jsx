import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style/App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" h-screen relative overflow-hidden">
        {/* Hero Section */}
            <Hero />
        {/* Footer with Background Video */}
            <Footer />
    </div>
  );
}

export default App;
