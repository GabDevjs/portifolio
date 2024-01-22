import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaVuejs, FaWordpress } from "react-icons/fa6";
import { SkillsType } from "./data";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdonisjs, SiDocker, SiMongodb, SiNestjs, SiNextdotjs, SiPostgresql, SiRabbitmq, SiTypescript } from "react-icons/si";

export const skils: SkillsType[] = [
  {
    tec: "WordPress",
    icon: FaWordpress
  },
  {
    tec: "HTML",
    icon: FaHtml5
  },
  {
    tec: "CSS",
    icon: FaCss3
  },
  {
    tec: "JavaScript",
    icon: IoLogoJavascript
  },
  {
    tec: "TypeScript",
    icon: SiTypescript
  },
  {
    tec: "React",
    icon: FaReact
  },
  {
    tec: "Vue",
    icon: FaVuejs
  },
  {
    tec: "Next.js",
    icon: SiNextdotjs
  },
  {
    tec: "Node.js",
    icon: FaNodeJs
  },
  {
    tec: "Nest.js",
    icon: SiNestjs
  },
  {
    tec: "Adonis.js",
    icon: SiAdonisjs
  },
  {
    tec: "RabbitMQ",
    icon: SiRabbitmq
  },
  {
    tec: "Docker",
    icon: SiDocker
  },
  {
    tec: "PostgreSQL",
    icon: SiPostgresql
  },
  {
    tec: "MongoDB",
    icon: SiMongodb
  },
]