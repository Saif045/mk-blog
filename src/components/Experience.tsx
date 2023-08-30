"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/assets/data";
import useDarkSide from "@/utils/useDarkSide";
import { useWindowSize } from "usehooks-ts";

export default function Experience() {
  const [isDarkMode] = useDarkSide();
  const { height, width } = useWindowSize();

  return (
    <section className="scroll-mt-28 mb-8 sm:mb-12 overflow-x-hidden">
      <h1 className="text-4xl text-center font-semibold">My experience</h1>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: isDarkMode ? "#000" : "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: `1.3rem  ${width < 500 ? "0.4rem" : "2rem"} `,
              }}
              contentArrowStyle={{
                borderRight: isDarkMode
                  ? "0.4rem solid rgba(255, 255, 255, 0.5)"
                  : "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: isDarkMode ? "#28282B" : "white",
                fontSize: "1.5rem",
              }}>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
