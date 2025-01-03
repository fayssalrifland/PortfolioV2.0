import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiOutlineGithub } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: {
      site: "#",
      github: "#",
    },
    price: 15,
  },
  {
    img: project2,
    title: "Project #2",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "#",
      github: "#",
    },
    price: 20,
  },
  {
    img: project4,
    title: "Project #3",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
    price: 50,
  },
  {
    img: project5,
    title: "Project #4",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
    price: 70,
  },
  {
    img: project6,
    title: "Project #5",
    description: "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
    price: 120,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visiblePayPal, setVisiblePayPal] = useState(null); // New state for PayPal visibility

  const closeModal = () => setSelectedProject(null);

  return (
    <PayPalScriptProvider options={{ "client-id": "ATS8KXQWex0lmaDq-P1x410B-5NqARXsZi4EYc5_fWgTTXAikE1SuOIjQKPW-X0YMikXc5XediMDEWBT" }}>
      <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} mb-12`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <motion.a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ boxShadow: "0px 4px 15px rgba(109, 40, 217, 0.4)", y: -2 }}
                  transition={{ duration: 0.1 }}
                  className="px-4 py-2 bg-purple-700/10 backdrop-blur-lg border border-purple-500 text-white rounded-lg uppercase font-medium hover:bg-purple-700/10 transition duration-300"
                >
                  View Site
                </motion.a>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent modal from opening
                    setVisiblePayPal(visiblePayPal === index ? null : index); // Toggle PayPal visibility
                  }}
                  whileHover={{ boxShadow: "0px 4px 15px rgba(109, 40, 217, 0.4)", y: -2 }}
                  transition={{ duration: 0.1 }}
                  className="px-4 py-2 bg-purple-700/10 backdrop-blur-lg border border-purple-500 text-white rounded-lg uppercase font-medium hover:bg-purple-700/10 transition duration-300"
                >
                  {project.price}$
                </motion.button>
              </div>
              {visiblePayPal === index && ( // Conditionally render PayPal buttons
                <div className="mt-4">
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: project.price.toString(),
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then(() => {
                        alert(`Payment for ${project.title} successful!`);
                      });
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-purple-900 text-white rounded-[15px] w-[90%] md:w-[800px] p-6 relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-tl-[15px] rounded-tr-[15px]"
                />
                <div className="mt-4">
                  <h3 className="text-3xl mb-2">{selectedProject.title}</h3>
                  <p className="mb-4">{selectedProject.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.links.site}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      View Site
                    </a>
                    <a
                      href={selectedProject.links.github}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      <AiOutlineGithub />
                    </a>
                  </div>
                </div>
                <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PayPalScriptProvider>
  );
};

export default Portfolio;
