"use client";

import {useRef} from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { senderEmail } from '@/actions/sendEmail';
import { toast } from 'react-toastify';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section 
    id='contact' 
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
        
        <form
        ref = {formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
            const response = await senderEmail(formData);
        
            if (response?.error) {
                toast.error((response.error as { message: string }).message || "An error occurred");
                return;
            }
        
            formRef.current?.reset();
            toast.success("Email sent successfully!");
        }}
        >
            <input
                type='email'
                name='senderEmail'
                required
                maxLength={500}
                placeholder='Your email'
                className='h-14 px-4 rounded-lg borderBlack'
            />
            <textarea
                name='message'
                required
                placeholder='Your message'
                maxLength={5000}
                className='h-52 my-3 rounded-lg borderBlack p-4'
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
