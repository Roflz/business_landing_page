'use client'

import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Cloud, Palette, Settings } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 60 },
        { name: 'Mobile UI/UX', level: 80 },
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 80 },
        { name: 'Nginx', level: 70 },
      ]
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'Adobe XD', level: 70 },
        { name: 'Photoshop', level: 65 },
        { name: 'Sketch', level: 60 },
        { name: 'UI/UX Design', level: 80 },
      ]
    },
    {
      icon: Settings,
      title: 'Other Skills',
      skills: [
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Project Management', level: 75 },
        { name: 'Technical Writing', level: 80 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Leadership', level: 75 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon size={24} className="text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-dark-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 card"
        >
          <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6 text-center">
            Additional Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'GraphQL', 'Redux', 'Vue.js', 'Angular', 'Sass', 'Webpack',
              'Jest', 'Cypress', 'Firebase', 'Redis', 'Elasticsearch', 'Kubernetes',
              'Terraform', 'Jenkins', 'GitHub Actions', 'Vercel', 'Netlify', 'Heroku'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.05) }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-dark-700 rounded-lg px-4 py-2 text-center"
              >
                <span className="text-sm font-medium text-dark-900 dark:text-white">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 