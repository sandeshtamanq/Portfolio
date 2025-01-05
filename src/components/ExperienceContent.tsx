const ExperienceContent: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Developer [Sep 2021 - Oct 2022]",
      company: "Intelzy Softwares Pvt. Ltd.",
      period: "Sep 2021 - Oct 2022",
      responsibilities: [
        "Implemented state management using Redux , effectively managing complex application states and enhancing user interactions.",
        "Collaborated with cross-functional teams to integrate backend APIs, ensuring seamless data flow and optimal user experiences.",
        "Optimized application performance, reducing load times by 40%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Intopros Technologies Pvt. Ltd.",
      period: "May 2023 - Sep 2023",
      responsibilities: [
        "Developed RESTful APIs using Nestjs, providing a foundation for efficient data exchange between the frontend and the server.",
        "Collaborated with the design team to implement user-friendly interfaces",
        "Optimized database queries and schema design to enhance overall system performance and reduce response times.",
      ],
    },

    {
      title: "Full Stack Developer",
      company: "Justchek Pvt. Ltd.",
      period: "Jun 2023 - Sep 2024",
      responsibilities: [
        "Contributed to the development of a SaaS product by implementing key backend features, including data validation and error handling, ensuring a stable and reliable architecture.",
        "Implemented concurrency management in a project by leveraging database locking mechanisms and Redis-based distributed locks to ensure data consistency and prevent race conditions.",
        "Designed and implemented task scheduling and management features, including reminder functionality via cron scheduling.",
      ],
    },
  ];

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">My Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
