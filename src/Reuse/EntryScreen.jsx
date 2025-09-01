// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../src/asset/Logos/Aachi-logo.png";

export default function EntryScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="w-40 h-28"
        initial={{ y: -100, scale: 0, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, duration: 1 }}
      />
      <motion.h1
      style={{ color: "#dc2626" }}
        className="mt-4 text-4xl font-bold"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Aachi Group
      </motion.h1>
    </motion.div>
  );
}
