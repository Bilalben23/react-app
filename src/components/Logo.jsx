import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src="/favicon.png"
        alt="logo"
        className="w-8 h-10 mr-2"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <h3 className="text-2xl text-primary font-semibold">
        <span className="text-3xl text-secondary font-bold">l</span>
        ogo
      </h3>
    </motion.div>
  );
}

export default Logo;
