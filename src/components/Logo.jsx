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
      <h3 className="text-2xl font-semibold text-primary">
        <span className="text-3xl font-bold text-secondary">l</span>
        ogo
      </h3>
    </motion.div>
  )
}

export default Logo;
