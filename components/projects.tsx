"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { FaGithubSquare } from "react-icons/fa";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
            <SectionHeading>
                My projects{" "}
                {/* <a
                    className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                    href='https://github.com/vai195'
                    target='_blank'>
                    <FaGithubSquare />
                </a> */}
            </SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
            <div className='text-center mt-3 text-sm'>
                All project code and deployment links on Github!
            </div>
        </section>
    );
}
