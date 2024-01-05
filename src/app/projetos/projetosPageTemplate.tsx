"use client";
import Particles from "../components/particles";
import { useEffect, useState } from "react";
import { Particles3d } from "../components/particles3d";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Projects } from "@/data/projects";
import { IProject } from "@/data/data";
import { ProjectCard } from "../components/projectCard";

export const ProjetosPageTemplate = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="flex flex-col relative top-0 inset-x-0 gap-x-15 items-center justify-center w-full overflow-x-hidden px-2"
    >
      <div className="absolute h-screen inset-0 -z-10 animate-fade-in ">
        {!isMobile ? (
          <>
            <Particles quantity={80} className="w-screen h-screen" />
          </>
        ) : (
          <Particles3d />
        )}
      </div>
      <Navigation />

      <section id="projetos" aria-label="projetos" className="flex flex-col items-center w-full justify-center pt-32 mb-12">
        <div className="flex justify-between items-center flex-col w-full max-w-7xl">
          <h2 className="text-5xl font-display text-center text-transparent text-edge-outline cursor-default sm:text-6xl 2xl:whitespace-nowrap xl:text-8xl text-ellipsis bg-clip-text mb-2 font-bold ">
            Projetos
          </h2>
          <div className="grid lg:grid-cols-2 gap-y-10 gap-x-5 pt-10 pb-6">
            {Projects.map((item: IProject, index) => (
              <ProjectCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}