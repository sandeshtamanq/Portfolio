
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/placeholder.svg?height=300&width=300" alt="Your Name" className="rounded-full mx-auto" />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-4">
              Hello! I'm a passionate web developer with experience in creating responsive and user-friendly websites. 
              I specialize in front-end technologies like React and Next.js, and I'm always eager to learn new things.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying a good book on software design patterns.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

