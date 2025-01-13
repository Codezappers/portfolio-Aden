"use client";

import React, { FormEvent } from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5)

  return (
    <motion.section 
    id='contact'
    ref={ref} 
    className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 text-white dark:text-black'
    initial={{ opacity: 0
    }}
    whileInView={{ opacity: 1
    }}
    transition={{ duration: 1, ease: 'easeOut' 
    }}
    viewport={{
        once: true,
    }}
    >
        <SectionHeading>Contact Me</SectionHeading>
                <p className='text-lg text-white dark:text-white'>
            Please contact me directly at{" "} 
            <a className='underline' href='mailto:johnaden007@gmail.com'>
                johnaden007@gmail.com
            </a>{" "}
            or through this form.
        </p>
        
        <form className='mt-10 flex flex-col' action={async formData => {
            await sendEmail(formData);
        }}
        >
            <input
                type='email'
                name='SenderEmail'
                required
                maxLength={500}
                placeholder='Your email'
                className='w-full p-2 mb-4 rounded-lg'
            />
            <textarea
                name='message'
                required
                placeholder='Your message'
                maxLength={500}
                className='w-full p-2 mb-4 rounded-lg min-h-[8rem]'
            />
            <button  
                type="submit" 
                className='w-full p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2'
            >
                Submit <FaPaperPlane className='text-sm'/>{''}
            </button>
        </form>
    </motion.section>
  );
}
