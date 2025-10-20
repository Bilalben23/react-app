import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import "./style/App.css";
import Card from "./components/Card";
import Search from "./components/Search";
import Logo from "./components/Logo";
import cardData from "./data";

function App() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = cardData.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="space-y-20 h-screen">
      <div className="grid grid-cols-3 gap-4 p-4">
        <Logo />
        <Search />
      </div>
      <div className="grid grid-cols-4 gap-4 w-full h-60 space-x-2 px-4">
        {currentCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            tags={card.tags}
            description={card.description}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination
          count={Math.ceil(cardData.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
      <div className="w-full h-12 fixed bottom-0">
        <video
          className="absolute bottom-0 left-0 w-full h-full object-cover"
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Footer content */}
        <div className="relative z-10 flex items-center justify-center text-gray-300 h-full">
          <p>©2025 Jway Services — Tous Droits Réservés</p>
        </div>
      </div>
    </div>
  );
}

export default App;