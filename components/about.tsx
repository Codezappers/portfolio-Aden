"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        className="grid lg:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              After graduating with a degree in{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                Accounting
              </span>
              , I decided to pursue my passion for programming. I enrolled in a coding 
              bootcamp and learned{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                full-stack web development
              </span>
              .
            </p>

            <p>
              My tech stack includes{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                React, Next.js, Node.js, and MongoDB
              </span>
              . I am also familiar with TypeScript and Prisma. I am currently seeking a{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                full-time position
              </span>{" "}
              as a software developer.
            </p>

            <p>
              <span className="italic">When I'm not coding</span>, I enjoy playing
              video games, watching movies, and playing with my dog. I'm passionate about{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                learning new things
              </span>
              , currently exploring{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                history, philosophy
              </span>
              {" "}and learning to play guitar.
            </p>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies I Work With
              </h2>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"].map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 
                             text-gray-900 dark:text-white hover:bg-gray-200 
                             dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="relative w-full aspect-square max-w-[400px] mx-auto lg:ml-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Add your image here */}
          <Image
                src="/coding.avif"
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
        </motion.div>
      </motion.div>
    </section>
  );
}