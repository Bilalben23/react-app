
function Card({ title, subtitle, tags, description }) {
  return (
    <div className="relative overflow-hidden border shadow-xl transition-transform duration-300 cursor-pointer rounded-3xl h-48 hover:scale-[1.05]">
      <div className="p-4 space-y-2">
        <div>
          <p className="font-bold text-gray-700 wrap-anywhere">{title}</p>
          <p className="text-gray-800 line-clamp-1 wrap-anywhere">{subtitle ? subtitle : description}</p>
        </div>
        {subtitle && <p className="text-sm text-gray-700 line-clamp-2 text-opacity-80 wrap-anywhere">{description}</p>
        }
      </div>

      <div className="absolute bottom-0 flex items-center justify-between w-full text-center">
        <div className="flex-1 px-2 py-1 text-sm text-white border-t-2 border-r-2 rounded text-opacity-90 hover:bg-sky-800/90 bg-sky-800">{tags[0]}</div>
        <div className="flex-1 px-2 py-1 text-sm text-white border-t-2 rounded text-opacity-90 hover:bg-secondary/90 bg-secondary">{tags[1]}</div>
      </div>
    </div>
  );
}

export default Card;