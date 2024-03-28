"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'>
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
                As an undergraduate student majoring in{" "}
                <b>Applied Computer Science </b>
                with a concentration in <b>Software Engineering </b> at{" "}
                <i>George Mason University </i>, I am deeply passionate about
                technology and committed to continuous learning. Serving as an
                <b> Undergraduate Teaching Assistant</b> teaching Python, I have
                had the privilege of guiding over 400 students, providing
                personalized support and fostering an engaging learning
                environment. With proficiency in languages such as Python, Java,
                and JavaScript, coupled with expertise in tools like React and
                MongoDB, I tackle complex software projects with confidence. My
                professional journey includes participation in esteemed programs
                like the AT&T Technology Academy, where I gained exposure to
                diverse technologies and honed my employability skills. Through
                projects like my Exercise Tracker MERN Stack Project and my
                Next.js Weather App, I have demonstrated my ability to learn new
                technologies to deliver innovative solutions with a focus on
                user experience and functionality. Driven by curiosity and a
                desire to make a positive impact, I am poised to embark on a
                successful career in software engineering, where I will continue
                to innovate and thrive in dynamic environments. Connect with me
                on LinkedIn or email to join me through my journey and
                accomplishments.
            </p>
        </motion.section>
    );
}
