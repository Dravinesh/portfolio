import { useState } from "react";
import { Github, Linkedin, Mail, Moon, Sun, FileDown } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 shadow-md dark:shadow-gray-700">
          <h1 className="text-2xl font-bold">N. Dravinesh</h1>
          <div className="flex gap-4">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center py-20 px-6">
          <h2 className="text-4xl font-extrabold mb-4">Aspiring AI Engineer</h2>
          <p className="max-w-xl mb-6">
            Passionate about Artificial Intelligence, Machine Learning, and Cloud
            Computing. Skilled in Python, TensorFlow, and Web Development.
            Eager to solve real-world problems with AI-powered solutions.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110"><Github /></a>
            <a href="https://linkedin.com/" target="_blank" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110"><Linkedin /></a>
            <a href="mailto:dravineshdravi692@gmail.com" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110"><Mail /></a>
            <a href="/resume.pdf" download className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110"><FileDown /></a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p>
            I’m N. Dravinesh, a final-year AI Engineering student with a GPA of 8.7.
            I enjoy solving problems using AI/ML and creating impactful projects
            such as anomaly detection systems and health-related applications.
            My goal is to become a skilled AI Engineer and contribute to innovative
            solutions that align with UN Sustainable Development Goals.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-2xl font-bold mb-8 text-center">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Python", "Java", "C++, C",
              "TensorFlow", "PyTorch", "Scikit-learn",
              "CNN, RNN, LSTM", "OpenCV", "FastAPI",
              "MySQL", "React, Node.js", "Git, Docker",
              "Azure", "Google Cloud"
            ].map((skill) => (
              <div key={skill} className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-700 text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 px-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-2">AI CCTV Anomaly Detection</h4>
              <p>Detects fights, theft, accidents, and unusual activities using deep learning (LSTM, pretrained models). Integrated with a frontend for demo purposes.</p>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-2">Child Malnutrition Detection (Final Year Project)</h4>
              <p>Detects malnutrition levels in children using facial images. Project aligns with UN Sustainable Development Goals.</p>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-2">AI Desktop Personal Assistant</h4>
              <p>A Python-based desktop assistant that automates everyday tasks like reminders, information search, and basic AI-driven interactions.</p>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-2">Telecom Chatbot (IBM Watson)</h4>
              <p>Designed and developed a 24/7 AI-powered chatbot for telecom customer service operations, enabling real-time NLU-driven conversations.</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-2">Intern – 8Queens Software Solutions (Jul–Sep 2024)</h4>
              <p>Worked as a Junior Full Stack Developer. Designed interactive websites using HTML, CSS, Tailwind. Learned teamwork and gained practical industry experience.</p>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-2">Virtual AI Intern – Vaidsys Technologies (Jul–Aug 2025)</h4>
              <p>Designed and developed an AI Assistant, a telecom chatbot for automating customer service. Implemented real-time NLU-driven conversations with dynamic responses and interactive UI.</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-2xl font-bold mb-8 text-center">Achievements & Certifications</h3>
          <ul className="list-disc pl-6 max-w-3xl mx-auto space-y-2">
            <li>NPTEL: Machine Learning (IIT KGP), Soft Computing (IIT KGP, 80%)</li>
            <li>IBM Certificates: Python, Java, Cloud App Dev, AI, Generative AI</li>
            <li>Microsoft Certificates: Azure Security, Cybersecurity Architect, SOC Analyst</li>
            <li>Other: Big Data with Hadoop, Quantum Computing, Google Cloud Gen AI, Deloitte Data Analytics Simulation</li>
            <li>Hackathon Participation: Hack the Cosmos (SRM IST), Samsung Galaxy AI Treasure Hunt, Google Agentic AI Day (Hack2Skill)</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 px-6 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p>📞 7397331101</p>
          <p>📧 dravineshdravi692@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
          <p>GitHub: github.com/yourusername</p>
        </section>

        <footer className="py-6 text-center text-sm bg-gray-200 dark:bg-gray-900 dark:text-gray-400">
          © {new Date().getFullYear()} N. Dravinesh | Portfolio
        </footer>
      </div>
    </div>
  );
}
