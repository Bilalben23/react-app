import { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function Contact() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000); // hide after 2s
  };

  return (
    <div className="flex flex-col w-14 h-24 fixed top-1/4 right-4 animate-fade-in-right z-50">
      {/* Phone icon with tooltip */}
      <div
        onClick={() => handleCopy("+212665225044 +212582258570", "phone")}
        className="group relative bg-secondary100 text-white flex justify-center items-center cursor-pointer hover:bg-secondary duration-300 ease-in-out rounded-t-lg w-full h-full animate-bounce-slow"
      >
        <BiPhoneCall size={20} />
        <span className="absolute w-40 h-full right-full mr-2 bg-secondary text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex flex-col justify-center items-center text-center">
          +212 (0) 665 225 044
          <br />
          +212 (0) 582 258 570
        </span>
        {copied === "phone" && (
          <span className="absolute right-16 bg-black text-white text-xs px-4 py-2 rounded-lg animate-fade-in">
            Copied!
          </span>
        )}
      </div>

      <div className="h-1 bg-white"></div>

      {/* Email icon with tooltip */}
      <div
        onClick={() => handleCopy("contact@gmail.com", "email")}
        className="group relative bg-secondary100 text-white flex justify-center items-center cursor-pointer hover:bg-secondary duration-300 ease-in-out rounded-b-lg w-full h-full shadow-xl shadow-orange-950 animate-bounce-slow delay-200"
      >
        <MdOutlineMarkEmailUnread size={20} />
        <span className="absolute w-40 h-full right-full mr-2 bg-secondary text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex justify-center items-center">
          contact@gmail.com
        </span>
        {copied === "email" && (
          <span className="absolute right-16 bg-black text-white text-xs px-4 py-2 rounded-lg animate-fade-in">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}

export default Contact;
