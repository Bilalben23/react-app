import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ReactTyped } from "react-typed";
import Card from "./Card";
import cardData from "../data";
import Search from "./Search";
import Logo from "./Logo";
import { ChevronLeft, ChevronRight } from "lucide-react";


function Hero() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  // Get all unique tags
  const allTags = [...new Set(cardData.flatMap((card) => card.tags))];

  // Handle input change from Search component
  const handleSearchChange = (value) => {
    setSearch(value); // update input value
    setSelectedTag(null); // clear any tag filter when user types
  };

  // Filter cards by title, subtitle, description, or tags and selectedTag
  const filteredCards = cardData.filter((card) => {
    const text = search.toLowerCase();

    const matchesSearch =
      card.title.toLowerCase().includes(text) ||
      (card.subtitle && card.subtitle.toLowerCase().includes(text)) ||
      card.description.toLowerCase().includes(text) ||
      card.tags.some((tag) => tag.toLowerCase().includes(text));

    const matchesTag = selectedTag ? card.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  })


  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4">
        <Logo />
        <Search
          value={search}
          onSearchChange={handleSearchChange}
        />
      </div>

      {/* Hero Section */}
      <div className="space-y-12">

        <div className="flex flex-col items-center">
          <img
            src="/webDevelopment.gif"
            alt="img-hero"
          />
          <h3 className="text-xl font-bold text-center sm:text-2xl md:text-3xl text-sky-800 ">
            Explore Our
            <ReactTyped
              strings={[
                "<span class='text-secondary'> Top Services</span>",
                "<span class='text-secondary'> Creative Solutions</span>",
                "<span class='text-secondary'> Best Offers</span>",
              ]}
              typeSpeed={90}
              backSpeed={80}
              loop
              smartBackspace
              showCursor
            />
          </h3>
        </div>



        {/* Cards */}
        {filteredCards.length > 0 ? (
          <div className="space-y-6">
            {selectedTag && (
              <div className="flex ms-16 animate-fade-in-up">
                <button
                  onClick={() => {
                    setSelectedTag(null);
                    setSearch(""); // clear search input
                  }}
                  className="px-4 py-2 text-sm transition-all duration-300 bg-transparent border rounded-full shadow-md text-secondary100 border-secondary100 hover:bg-secondary100 hover:text-white"
                >
                  Show All
                </button>
              </div>
            )}

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={false}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next"
              }}

              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="!p-3 relative container mx-auto"
            >
              {filteredCards.map((card, index) => (
                <SwiperSlide key={index}>
                  <Card
                    title={card.title}
                    subtitle={card.subtitle}
                    tags={card.tags}
                    description={card.description}
                  />
                </SwiperSlide>
              ))}
              <div className="absolute top-0 right-0 w-5 h-full pointer-events-none bg-gradient-to-l from-black/5 -z-1 to-transparent rounded-r-2xl" />
              <div className="absolute top-0 left-0 w-5 h-full pointer-events-none bg-gradient-to-r from-black/5 -z-1 to-transparent rounded-l-2xl" />
              <button
                type="button"
                className="absolute z-10 size-10  -translate-y-1/2 rounded-full shadow-lg hover:shadow-none left-1 bg-sky-900 swiper-prev top-1/2 flex items-center justify-center hover:scale-[0.97] transition-all hover:opacity-90"
              >
                <ChevronLeft size={25} className="text-white" />
              </button>
              <button
                type="button"
                className="absolute z-10 size-10  -translate-y-1/2 rounded-full shadow-lg hover:shadow-none right-1 bg-sky-900 swiper-next top-1/2 flex items-center justify-center hover:scale-[0.97] transition-all hover:opacity-90"
              >
                <ChevronRight className="text-white" />
              </button>
            </Swiper>

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-4 space-y-4 animate-fade-in-up">
            <p className="text-lg text-center text-gray-500">
              Hmm... we couldn’t find{" "}
              <span className="text-secondary">{search}</span>
            </p>
            <p className="text-gray-500">Try one of these tags 👇</p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearch(""); // clear search input first
                    setTimeout(() => setSelectedTag(tag), 50); // set tag filter
                  }}
                  className={`px-3 py-1 border border-secondary100 rounded-full text-secondary100 
                    hover:bg-secondary100 hover:text-white transition-all duration-300 text-sm
                    ${selectedTag === tag ? "bg-secondary100 text-white" : ""}`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
