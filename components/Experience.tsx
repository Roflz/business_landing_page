'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on a major project',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using modern technologies. Collaborated with design and product teams to deliver high-quality solutions.',
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Docker'],
      achievements: [
        'Built 3 major features that increased user engagement by 25%',
        'Improved code quality by implementing automated testing',
        'Reduced bug reports by 30% through better error handling'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Los Angeles, CA',
      period: '2019 - 2020',
      description: 'Created responsive and interactive user interfaces for various client projects. Worked closely with designers to implement pixel-perfect designs.',
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Webpack'],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Improved website performance scores by 20%',
        'Received 100% client satisfaction rating'
      ]
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      description: 'Specialized in software engineering and artificial intelligence. Completed thesis on machine learning applications in web development.',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      description: 'Focused on software development and computer systems. Graduated with honors and completed multiple internships.',
      gpa: '3.9/4.0'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={24} className="text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card relative"
                >
                  {/* Timeline Line */}
                  {index < workExperience.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gray-200 dark:bg-dark-600" />
                  )}

                  <div className="flex gap-4">
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-primary-600 rounded-full mt-2 flex-shrink-0" />

                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-dark-900 dark:text-white">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <div className="flex items-center gap-1">
                            <Briefcase size={16} />
                            {job.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {job.period}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h5 className="font-medium text-dark-900 dark:text-white">Key Achievements:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={24} className="text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card relative"
                >
                  {/* Timeline Line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gray-200 dark:bg-dark-600" />
                  )}

                  <div className="flex gap-4">
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-primary-600 rounded-full mt-2 flex-shrink-0" />

                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-dark-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <div className="flex items-center gap-1">
                            <GraduationCap size={16} />
                            {edu.school}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {edu.period}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-dark-900 dark:text-white">GPA:</span>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                          {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 card"
            >
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                Certifications
              </h4>
              <div className="space-y-3">
                {[
                  'AWS Certified Solutions Architect',
                  'Google Cloud Professional Developer',
                  'Certified Scrum Master (CSM)',
                  'Microsoft Azure Developer Associate'
                ].map((cert, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                    <ExternalLink size={16} className="text-primary-600 dark:text-primary-400" />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience 