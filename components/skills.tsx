"use client"

import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5)

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section 
      ref={ref}
      id="skills" 
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 text-white dark:text-black"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800
                     p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1
                     transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-800 dark:text-white font-medium text-lg">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}