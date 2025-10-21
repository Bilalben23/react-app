import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      className="flex items-center gap-x-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src="/favicon.svg"
        alt="logo"
        className="size-7"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl text-primary">
        <span className="text-2xl font-bold sm:text-3xl md:text-4xl text-secondary">l</span>
        ogo
      </h2>
    </motion.div>
  )
}

export default Logo;
