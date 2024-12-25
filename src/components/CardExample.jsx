import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import project1 from "../assets/project1.png"
import { motion } from "framer-motion";

export const CardExample = () => {
  return (
    <motion.div
      className="w-[500px] flex flex-col justify-center items-center z-50 border border-purple-900  bg-purple-900/20 rounded-[15px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img 
        className="rounded-tl-[15px] rounded-tr-[15px]" 
        src={project1} 
        alt="Project 1" 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="mx-4">
        <motion.h2 
          className="card-title" 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Card title
        </motion.h2>

        <motion.p 
          className="card-text" 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </motion.p>
        <motion.a
          className="card-button"
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Go somewhere
        </motion.a>
      </div>
    </motion.div>
  );
};
