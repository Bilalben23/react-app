function Footer() {
  return (
    <div className="relative p-5">
      {/* Video Background */}
      <video
        className="absolute inset-0 object-cover w-full"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" /> 

      {/* Footer Content */}
      <div className="relative flex items-center justify-center z-1">
        <p className="text-sm text-gray-300 md:text-base">&copy;2025 logo — Tous Droits Réservés</p>
        <img
          src="/Cute-astronaut-flying-in-space_animation.gif"
          alt="Astronaut Man"
          className="size-10 md:size-12"
        />
      </div>
    </div>
  );
}

export default Footer;
