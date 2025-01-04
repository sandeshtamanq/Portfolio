/* eslint-disable @typescript-eslint/no-unused-vars */
const ExperienceContent: React.FC = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "Jan 2022 - Present",
      responsibilities: [
        "Lead a team of 5 developers in creating responsive web applications",
        "Implemented new features using React and Next.js, improving user engagement by 30%",
        "Optimized application performance, reducing load times by 40%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "Jun 2019 - Dec 2021",
      responsibilities: [
        "Developed and maintained multiple client websites using the MERN stack",
        "Collaborated with the design team to implement user-friendly interfaces",
        "Integrated third-party APIs to enhance application functionality",
      ],
    },
  ];

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">My Experience</h2>
      <div className="space-y-6">
        {/* {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">
              {exp.company} | {exp.period}
            </p>
            <ul className="list-disc list-inside mt-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ExperienceContent;
