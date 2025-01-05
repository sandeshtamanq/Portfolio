const CVContent: React.FC = () => {
  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">My CV</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold">Education</h3>
          <p>
            Bachelor of Computer Science and Information Technology in Computer
            Science, Tribhuwan University, 2018-2022
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Skills</h3>
          <ul className="list-disc list-inside">
            <li>JavaScript, TypeScript, C#, Java, Go</li>
            <li>Node.js, Express, Springboot, Asp.net, Nestjs,</li>
            <li>ReactJs, Nextjs, React Native</li>
            <li>Docker, Kafka, Redis, Socket</li>
            <li>HTML, CSS, Tailwind CSS</li>
            <li>Git, GitHub, CI/CD</li>
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Languages</h3>
          <ul className="list-disc list-inside">
            <li>Nepali (Fluent)</li>
            <li>English (Intermediate)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CVContent;
