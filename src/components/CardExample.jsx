import project1 from "../assets/project1.png"
import { motion } from "framer-motion";

export const CardExample = () => {
  
  
  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(37, 99, 235, 0)"
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.3)"
    },
    tap: {
      scale: 0.95
    }
  }

  const textVariants = {
    initial: {
      y: 0
    },
    hover: {
      y: -2
    }
  }
  
  
  return (

    <div className="min-h-screen w-full flex items-center justify-center ">
    <motion.div 
      className="w-[1000px] h-[1000px] flex flex-col items-center z-50 border border-purple-900  bg-purple-900/20 rounded-[15px] "
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img 
        className="rounded-tl-[15px] rounded-tr-[15px] w-[1000px] h-[500px]" 
        src={project1} 
        alt="Project 1" 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="mx-12 mt-8 mb-8 text-white h-full relative">
        <motion.h2 
          className="text-4xl mb-3" 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Card title
        </motion.h2>

        <motion.p 
          className="text-wrap text-2xl" 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate inventore
          tempora dolores, maxime deserunt? Eveniet recusandae ipsa saepe. 
          Eligendi impedit et aspernatur perspiciatis eos molestiae ducimus laudantium minima amet.
          Similique, aut, tempora dolores recusandae quibusdam quas, neque error dolorum eaque non 
          in molestiae blanditiis modi numquam dolor laudantium minima asperiores quae. Nesciunt 
          eum culpa officia nam, ab magnam vel.
        </motion.p>
        <motion.button
          className="absolute rounded-[15px] border-2 border-blue-600 px-6 py-2 text-2xl text-blue-600 hover:bg-blue-600/10 bottom-0"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        >
          <motion.span
            variants={textVariants}
            transition={{
              type: "spring",
              stiffness: 500,
            }}
          >
            View site
          </motion.span>
        </motion.button>

        <motion.button
          className="absolute rounded-[15px] border-2 border-blue-600 px-6 py-2 text-2xl text-blue-600 hover:bg-blue-600/10 bottom-0 left-[170px]"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        >
          <motion.span
            variants={textVariants}
            transition={{
              type: "spring",
              stiffness: 500,
            }}
          >
            15$ BUY NOW
          </motion.span>
        </motion.button>

      </div>
    </motion.div>
    </div>
  );
};
