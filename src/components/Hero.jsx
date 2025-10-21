import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ReactTyped } from "react-typed";
import Card from "./Card";
import cardData from "../data";
import Search from "./Search";
import Logo from "./Logo";
import Contact from "./Contact";

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
  });



  
  return (
    <div className="flex-1 mb-2 border-2 border-red-500">
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 p-4">
        <Logo />
        <Search value={search} onSearchChange={handleSearchChange} />
        <Contact />
      </div>

      {/* Hero Section */} 
      <div className="space-y-12">
        <div className="flex flex-col items-center">
          <img src="/WebDevelopment.gif" alt="img-hero" />
          <h2 className="text-3xl font-bold text-center text-sky-800">
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
          </h2>
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
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              className="h-48"
            >
              {filteredCards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="transition-transform duration-300 transform hover:scale-105 ms-14">
                    <Card
                      title={card.title}
                      subtitle={card.subtitle}
                      tags={card.tags}
                      description={card.description}
                    />
                  </div>
                </SwiperSlide>
              ))}
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
