"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      {/* Add padding and background for better visibility */}
      <VerticalTimeline>
        {experiencesData && experiencesData.length > 0 ? (
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#2d3748", // Dark background for visibility
                  boxShadow: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #4a5568", // Darker arrow color
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "#4a5568", // Darker icon background
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize text-black">
                  {item.title}
                </h3>
                <p className="font-normal text-gray-900">{item.location}</p>
                <p className="mt-1 font-normal text-gray-600">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        ) : (
          <p className="text-black">No experiences available</p> // Show fallback message if there's no data
        )}
      </VerticalTimeline>
    </section>
  );
}
