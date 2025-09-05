import { RevealOnScroll } from "../RevealOnScroll";
import { getImageUrl } from "../../utils/imageUtils";

export const About = () => {

    const frontendSkills = [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "React", 
        "Tailwind CSS", 
        "Git"
    ];

    const graphicDesignSkills = [
        "Adobe Photoshop",
        "Figma",
        "Sketch"
    ];

    const backendSkills = [
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
    ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">

                        <div className="mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                        <img 
                            src={getImageUrl('profile/SAVE_20230723_194513.jpg')}
                            alt="Profile photo" 
                            className="w-full h-full rounded-full object-cover border-2 border-cyan-300 p-1 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/25"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = getImageUrl('profile/default-avatar.png');
                                console.error('Failed to load profile image');
                            }}
                        />
                    </div>
                </div>

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a passionate graphic designer and web developer who loves turning ideas into visuals that connect.
              My journey in design and development has equipped me with a unique skill set that blends creativity with technical expertise, which is why my work balances creativity with functionality,
              making sure every project is not only beautiful but also purposeful.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mx-auto">
                <h3 className="text-xl font-bold mb-4"> Graphic Designs</h3>
                <div className="flex flex-wrap gap-2">
                  {graphicDesignSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.MLS </strong> - Imo State University, Nigeria
                  (2019-2025)
                </li>
                <li>
                  <strong> Diploma in Latin </strong> - Urban Pontifical University Of Rome (Online)
                  (2016)
                </li>
                <li>
                  Relevant Coursework/Training: Graphic Design Fundamentals, Web Development (self-taught & Online Courses)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Graphic Designer at Quazard Global Limited
                  </h4>
                  <p className="text-sm">February 2025 - Present</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                     Freelance Frontend Developer for Clients{" "}
                  </h4>
                  <p>
                   November 2024 - Present
                  </p>
                </div>

                                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Graphic Designer/ Digital Marketer at TopBites Bakeries & Foods
                  </h4>
                  <p className="text-sm">August 2024 - June 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};