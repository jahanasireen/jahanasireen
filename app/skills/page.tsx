"use client";

import { title } from "process";
import { 
  D5,
  Enscape,
  LumionLogo,
  Max3DS,
  VRay
} from "@/components/custom_icons";

import {
  SiAutocad,
  SiSketchup,
  SiAdobephotoshop,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
} from "react-icons/si";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About Me",
  description: 
  "I think that making a space well designed can make peoples lives better, that is why every new project is like a personal challenge for me, and I always try to create the best I can do.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jahana Sireen N"
    },
    {
      fieldName: "Phone",
      fieldValue: "+966-597497186"
    },
    {
      fieldName: "Email",
      fieldValue: "jahanasireen@gmail.com"
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "+91-7593071290"
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam, Tamil"
    },
  ]
}
const experience = {
  icon: "assets/resume/badge.svg",
  title: "Junior Architect",
  description: 
    "Junior architect looking for roles that challenges my skills and ability",
  items: [
    {
      company: "ArchiArt Architectural Concepts, Kerala, India",
      position: "Junior Architect",
      duration: "Jan 2023 - June 2023",
    },
    {
      company: "MM Architects, Kerala, India",
      position: "Intern Architect",
      duration: "Feb 2021 - July 2021",
    },
    {
      company: "University of Calicaut",
      position: "Bachelor of Architecture",
      duration: "Aug 2017 - Aug 2022",
    },
  ]
}

const skills = {
  title: "Skills",
  description: "",
  skillList: [
    {
      icon: <SiAutocad />,
      name: "AutoCad",
    },
    {
      icon: <SiSketchup />,
      name: "SketchUp",
    },
    {
      icon: <LumionLogo />,
      name: "Lumion",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
    {
      icon: <VRay />,
      name: "V-Ray",
    },
    {
      icon: <Max3DS />,
      name: "3ds Max",
    },
    {
      icon: <D5 />,
      name: "D5",
    },
    {
      icon: <Enscape />,
      name: "Enscape",
    },
    {
      icon: <SiMicrosoftword />,
      name: "MS sWord",
    },
    {
      icon: <SiMicrosoftexcel />,
      name: "MS Excel",
    },
    {
      icon: <SiMicrosoftpowerpoint />,
      name: "PowerPoint",
    },
  ]
}

export default function Skills() {

  return (
    <div className="container mx-auto">
      <Tabs defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="about"
                       className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0" >
                {about.info.map((item, index) => {
                  return (
                    <li key={index}
                        className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="texg-white/60">{item.fieldName}</span>
                          <span className="texg-xl">{item.fieldValue}</span>
                        </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
