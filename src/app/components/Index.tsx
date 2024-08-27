import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { motion } from "framer-motion";
import { ChevronDown, Code, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Component() {
  const [activeSection, setActiveSection] = useState("home");
  const [skillsVisible, setSkillsVisible] = useState(false);

  const sections = ["home", "about", "skills", "projects", "contact"];

  const handleScroll = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skillsets = [
    {
      name: "Frontend",
      skills: {
        HTML: 90,
        CSS: 85,
        JavaScript: 80,
        React: 75,
        "UI/UX": 70,
      },
    },
    {
      name: "Backend",
      skills: {
        "Node.js": 80,
        "Express.js": 75,
        "Database Design": 70,
        "API Development": 85,
        "Server Management": 65,
      },
    },
    {
      name: "DevOps",
      skills: {
        Git: 85,
        Docker: 70,
        "CI/CD": 75,
        "Cloud Services": 80,
        Monitoring: 65,
      },
    },
  ];

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 p-4 flex items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mr-4"
        >
          <Code size={24} className="text-blue-400" />
        </motion.div>
        <ul className="flex justify-center space-x-6 flex-grow">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => handleScroll(section)}
                className={`text-lg font-semibold ${
                  activeSection === section
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">Yuma Endo</h1>
          <motion.div
            className="w-32 h-32 mx-auto my-4"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [100, 180, 360],
            }}
            transition={{
              duration: 0,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path
                d="M50 10 L90 90 L10 90 Z"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="4"
                animate={{
                  d: [
                    "M50 10 L90 90 L10 90 Z",
                    "M10 10 L90 10 L50 90 Z",
                    "M50 10 L90 90 L10 90 Z",
                  ],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }}
              />
            </svg>
          </motion.div>
          <p className="text-2xl mb-8">Web Developer & Designer</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => handleScroll("about")}
          >
            Learn More
          </motion.button>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center p-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">About Area.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </motion.div>
      </section>

      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center p-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: skillsVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsets.map((skillset) => (
              <div
                key={skillset.name}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {skillset.name}
                </h3>
                <div className="w-full h-64">
                  <Radar
                    data={{
                      labels: Object.keys(skillset.skills),
                      datasets: [
                        {
                          data: Object.values(skillset.skills),
                          backgroundColor: "rgba(62, 152, 199, 0.2)",
                          borderColor: "rgba(62, 152, 199, 1)",
                          borderWidth: 2,
                        },
                      ],
                    }}
                    options={chartOptions}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center p-8"
      >
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">Project {project}</h3>
              <p className="mb-4">Projects Area.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                View Project
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center p-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8">thank you.</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white"
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white"
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white"
            >
              <Mail size={32} />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
