function Footer() {
  return (
    <div className="w-full fixed bottom-0 left-0 h-14 md:h-16 flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute bottom-0 left-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Footer Content */}
      <div className="relative z-10 flex items-center justify-center text-gray-300 text-sm md:text-base">
        <p>©2025 logo — Tous Droits Réservés</p>
        <img
          src="/Cute-astronaut-flying-in-space_animation.gif"
          alt="img-footer"
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </div>
    </div>
  );
}

export default Footer;
