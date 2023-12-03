import { IProject } from "@/data/projects.d"
import Link from "next/link"
import Image from "next/image"
import { BsPlusLg } from "react-icons/bs"
import { FaPaperPlane } from "react-icons/fa";
import { ProjectViewMore } from "./projectViewMore";
import { useState } from "react";

interface IProjectCardProps {
  item: IProject
}



export const ProjectCard = (props: IProjectCardProps) => {
  const { item } = props
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-start p-2 pb-6 animate-fade-card-in overflow-hidden relative duration-200 border rounded-xl bg-zinc-800/40 hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-700/50 border-zinc-600">
        <Link
          href={item.link}
          target="_blank"
          className="w-full rounded-lg overflow-hidden relative h-[40vh]">
          {item.mainImage ? (
            <Image
              src={item.mainImage}
              alt={item.title}
              fill
              className="object-cover object-center "
            />
          ) : (
            <div className="w-full h-[200px] rounded-xl bg-gray-200/10 animate-fade-in" />
          )}
        </Link>
        <div className="flex pt-4 md:pt-0 flex-col h-[30vh]  justify-between gap-4">
          <div className=" justify-center items-center w-full">
            <div className="flex items-center mb-3 gap-2">
              <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-gray-100 bg-gray-200/10 rounded-full border border-gray-100/20">
                {item.year.toString()}
              </span>
              <span className="text-gray-100/60">
                •
              </span>
              {item.tags.length > 0 && item.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-gray-100 bg-gray-200/10 rounded-full border border-gray-100/20">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-display cursor-default sm:text-2xl mb-2 font-semibold text-gray-100 ">
              {item.title}
            </h3>
            <p className="text-sm 2xl:text-base text-gray-300/70 ">
              {item.description}
            </p>
          </div>
          <div className="flex items-center gap-4 px-1 text-sm">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative py-1.5 px-6 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
            >
              <BsPlusLg className="h-6 w-6" aria-hidden="true" />
              <span>Ver Mais</span>
            </button>
            <Link href={item.link}
              className="relative py-1.5 px-6 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
              target="_blank"
            >
              <FaPaperPlane className="h-4 w-4" aria-hidden="true" />
              <span>Ir para o site</span>
            </Link>
          </div>
        </div>
      </div>
      <ProjectViewMore item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}