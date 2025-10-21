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
    <div className="fixed z-30 flex flex-col text-white gap-y-1 top-1/4 right-4 animate-fade-in-right">
      {/* Phone icon with tooltip */}
      <div
        onClick={() => handleCopy("+212665225044 +212582258570", "phone")}
        className="relative flex items-center justify-center p-2.5 transition-colors duration-300 ease-in-out rounded-t-lg cursor-pointer group bg-secondary100 hover:bg-secondary animate-bounce-slow"
      >
        <BiPhoneCall size={23} />
        <div className="absolute px-3 py-1 mr-2 text-sm transition-opacity duration-300 rounded opacity-0 bg-secondary group-hover:opacity-100 right-full whitespace-nowrap">
         <span>+212 (0) 665 225 044</span> 
          <br />
          <span>+212 (0) 582 258 570</span>
        </div>
        {copied === "phone" && (
          <span className="absolute px-4 py-2 text-xs bg-black rounded-lg right-16 animate-fade-in">
            Copied!
          </span>
        )}
      </div>

      {/* Email icon with tooltip */}
      <div
        onClick={() => handleCopy("contact@gmail.com", "email")}
        className="relative flex items-center justify-center w-full h-full p-2.5 duration-300 ease-in-out transition-colors rounded-b-lg shadow-xl cursor-pointer group bg-secondary100 hover:bg-secondary shadow-gray-600 animate-bounce-slow"
      >
        <MdOutlineMarkEmailUnread size={23} />
        <div className="absolute flex items-center justify-center w-40 h-full px-3 py-1 mr-2 text-sm transition-opacity duration-300 rounded opacity-0 right-full bg-secondary group-hover:opacity-100">
          contact@gmail.com
        </div>
        {copied === "email" && (
          <span className="absolute px-4 py-2 text-xs text-white bg-black rounded-lg right-16 animate-fade-in">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}

export default Contact;
