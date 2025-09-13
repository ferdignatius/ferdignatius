import React from "react";

import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline"

export default function TimelineCard(){
    return(
      <Timeline>
        <TimelineItem status={"done"}>
          <TimelineHeading className="font-semibold">High School Strada St. Thomas Aquino</TimelineHeading>
          <TimelineDot status={"done"}/>
          <TimelineLine done/>
          <TimelineContent className="text-sm text-neutral-500">2023</TimelineContent>
        </TimelineItem>
        <TimelineItem status={"done"}>
          <TimelineHeading className="font-semibold">Binus University</TimelineHeading>
          <TimelineDot status={"done"}/>
          <TimelineLine done/>
          <TimelineContent className="text-sm text-neutral-500">2027 - Computer Science</TimelineContent>
        </TimelineItem>
        <TimelineItem status={"done"}>
          <TimelineHeading className="font-semibold">ASAH Dicoding</TimelineHeading>
          <TimelineDot status={"done"}/>
          <TimelineLine done/>
          <TimelineContent className="text-sm text-neutral-500">2025 - React JS + AI</TimelineContent>
        </TimelineItem>
        
      </Timeline>
    )
}