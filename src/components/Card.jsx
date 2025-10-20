
function Card({ title, subtitle, tags, description }) {
  const shortDescription = description.length > 55 ? description.substring(0, 55) + "..." : description;
  return (
    <div className="relative w-80 min-h-44 max-h-52 rounded-3xl border
         shadow-2xl cursor-pointer overflow-hidden hover:scale-105">
        <div className="px-4 py-4 space-y-2">
          <div className="">
            <h2 className="text-gray-700 font-bold wrap-anywhere">{title}</h2>
            <p className="text-gray-800 wrap-anywhere">{subtitle ? subtitle : shortDescription}</p>
          </div>
          <p className="text-gray-700 text-opacity-80 text-sm wrap-anywhere">{subtitle ? shortDescription : null}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex text-center">
          <div className="border-t-2 border-r-2 text-opacity-90 py-1 px-2 w-1/2 rounded text-sm hover:bg-sky-800/90 bg-sky-800 text-white">{tags[0]}</div>
          <div className="border-t-2 text-opacity-90 py-1 px-2 w-1/2 rounded text-sm hover:bg-secondary/90 bg-secondary text-white">{tags[1]}</div>
        </div>
    </div> 
  );
}

export default Card;