"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css' 
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5)
  return (
    <section 
    id='experience'
    ref={ref} 
    className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 text-white dark:text-black'>
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor='rgb(33, 150, 243)'>
            {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                       contentStyle={{
                            background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
                            boxShadow: 'none',
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                       }}
                          contentArrowStyle={{ 
                            borderRight: '7px solid  #fda085' 
                        }}
                        date={item.date}
                        dateClassName='text-black dark:text-white'
                        icon={item.icon}
                        iconStyle={{
                            background: '#fda085',
                            color: '#000',
                            boxShadow: 'none',
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            fontSize: "1.5rem",
                            padding: "0.5rem",
                            borderRadius: "50%",
                        }}
                    >
                        <h3 className='font-semibold capitalize'>{item.title}</h3>
                        <p className='font-normal !mt-0'>{item.location}</p>
                        <p className='!mt-1 !font-normal text-gray-700'>{item.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
                ))}
        </VerticalTimeline>
    </section>
  );
}
