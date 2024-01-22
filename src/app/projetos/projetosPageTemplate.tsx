"use client";
import Particles from "../components/particles";
import { useEffect, useState } from "react";
import { Particles3d } from "../components/particles3d";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Projects } from "@/data/projects";
import { IProject } from "@/data/data";
import { ProjectCard } from "../components/projectCard";
import { FaPaperPlane } from "react-icons/fa6";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { Card } from "../components/card";
import { createErrorToast } from "@/util/ToatsNotification";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const ProjetosPageTemplate = () => {

  const { register, handleSubmit, setValue, reset } = useForm();
  const [isMobile, setIsMobile] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleClearValues = () => {
    reset();
    setValue("name", "");
    setValue("email", "");
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const handleSubmitContact = async (data: any) => {
    setIsLoading(true);
    data = {
      body: {
        name: data.name,
        email: data.email,
      }
    };

    await axios.post("/api/email", data).then(() => {
      handleClearValues();
      router.push("/obrigado");
    }).catch((err) => {
      console.log(err);
      createErrorToast("Erro ao enviar a mensagem, tente novamente mais tarde!");
    }).finally(() => {
      setIsLoading(false);
    })
  };


  useEffect(() => {
    if (window.innerWidth < 1280) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="flex flex-col relative top-0 inset-x-0 gap-x-15 items-center justify-center w-full overflow-x-hidden px-2"
    >
      <Navigation />
      <section id="projetos" aria-label="projetos" className="flex flex-col items-center w-full justify-center pt-20 my-12">
        <div className="flex justify-between items-center flex-col w-full max-w-7xl">
          <h2 className="text-4xl font-display text-center text-transparent text-edge-outline cursor-default sm:text-5xl 2xl:whitespace-nowrap xl:text-6xl text-ellipsis bg-clip-text mb-2 font-bold ">
            Portfólio - Projetos
          </h2>
          <div className="flex mt-10 justify-between items-center flex-col w-full max-w-7xl">
            {!isMobile ? Projects.slice(0, 1).map((feature, featureIdx) => (
              <Card
                key={feature.title}
                className="flex w-full flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 group p-2 md:px-5"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:col-span-6 lg:row-start-1 lg:mt-0 xl:col-span-4'
                  )}
                >
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl  font-semibold text-gray-100">{feature.title}</h3>
                  <div className="flex items-center my-3 mb-4 gap-2 flex-wrap lg:flex-row">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-gray-100 bg-gray-200/10 rounded-full border border-gray-100/20">
                      {feature.year.toString()}
                    </span>
                    <span className="text-gray-100/60">
                      •
                    </span>
                    {feature.tags.length > 0 && feature.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-gray-100 bg-gray-200/10 rounded-full border border-gray-100/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-sm lg:text-base text-gray-300">{feature.description}</p>
                  <div className="flex mt-10 items-center flex-wrap gap-3 px-1 text-sm">
                    <Link href={feature.link}
                      className="relative py-1.5 px-6 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 whitespace-nowrap "
                      target="_blank"
                    >
                      <FaPaperPlane className="h-4 w-4" aria-hidden="true" />
                      <span>Ir para o site</span>
                    </Link>
                    {
                      feature.otherLinks && feature.otherLinks.length > 0 && feature.otherLinks.map((link, index) => (
                        <Link key={index} href={link.link}
                          className="relative w-10 h-10 text-black inline-flex gap-2 items-center justify-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 whitespace-nowrap "
                          target="_blank"
                        >
                          {
                            link.name === "Github" ? (
                              <BsGithub className="h-5 w-5" aria-hidden="true" />
                            ) : link.name === "Linkedin" ? (
                              <BsLinkedin className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <FaPaperPlane className="h-5 w-5" aria-hidden="true" />
                            )
                          }
                        </Link>
                      ))
                    }
                  </div>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                  )}
                >
                  <Link href={feature.mainImage}>
                    <div
                      className={classNames(
                        `aspect-h-1 aspect-w-5 rounded-lg bg-gray-100 relative `,
                      )}>
                      <div className="overflow-hidden aspect-h-1 aspect-w-5 rounded-lg ">
                        <Image src={feature.mainImage} alt={feature.title} className="object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                      </div>

                      <Image quality={20} src={feature.mainImage} alt={feature.title} className="object-cover absolute -z-10 inset-0 blur-3xl opacity-40 rounded-3xl object-center group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </Link>
                </div>
              </Card>
            )) : null}
          </div>
          <div className="grid lg:grid-cols-2  gap-y-10 gap-x-5 pt-10 pb-6">
            {isMobile ? Projects.map((item: IProject, index) => (
              <ProjectCard item={item} key={index} />
            )) : Projects.slice(1,).map((item: IProject, index) => (
              <ProjectCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="CTA-orcamentos" aria-label="sobre" className="flex items-center justify-center w-full ">
        <div className="flex justify-center items-center w-full max-w-7xl py-5 md:py-8 xl:py-10">
          <Card className="w-full rounded-3xl relative">
            <svg
              className="absolute inset-0  -z-10 h-full w-full stroke-gray-200/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={180}
                  height={180}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>

              <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <div className="py-20 md:py-28 xl:py-36 px-2 md:px-5 flex flex-col gap-10 w-full">
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold text-gray-100 text-center">
                Vamos criar algo incrível juntos?
              </h2>
              <div className="flex justify-center items-center flex-col gap-4 pt-5">
                <Link href="/contato">
                  <button
                    type="button"
                    className="relative  py-2 px-8 text-black inline-flex gap-2 items-center font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
                  >
                    <span>Começar agora!</span>
                  </button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section >

      <section id="contato" aria-label="contato" className="flex max-w-7xl flex-col items-center justify-center w-full mt-10">
        <Card className=" w-full rounded-3xl ">
          <form id="form" onSubmit={handleSubmit(handleSubmitContact)}
            className="grid grid-cols-2 gap-y-10 gap-x-5 py-10 px-2 md:px-5">
            <div className="py-2 md:py-3 col-span-2 px-4 ">
              <h2 className="text-4xl md:text-6xl xl:text-7xl font-semibold text-gray-100">
                Tem uma ideia incrível? <br /> Vamos dar vida a isso.
              </h2>
            </div>
            <div className="py-3 px-2 col-span-2 md:col-span-1 group">
              <label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 group-focus:translate-x-0 group-focus:translate-y-0">
                Nome
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  id="name"
                  className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
                  placeholder=""
                  alt="Input de nome"
                  {...register("name")}
                />
                <div
                  className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="py-3 px-2 col-span-2 md:col-span-1">
              <label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 peer-focus:translate-x-0 peer-focus:translate-y-0">
                E-mail
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  id="email"
                  className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
                  placeholder=""
                  alt="Input de email"
                  {...register("email")}
                />
                <div
                  className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="py-3  col-span-2 flex justify-start px-4 ">
              <button
                type="submit"
                className="w-32 h-32 relative border border-gray-200 py-2 px-8 text-white inline-flex gap-2 items-center font-bold uppercase rounded-full overflow-hidden bg-transparent transition-all duration-400 ease-in-out shadow-md hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0  justify-center"
              >
                {isLoading ?
                  <span>
                    <ClipLoader color="#ffffff" loading={isLoading} size={30} />
                  </span>
                  :
                  <span>Enviar</span>}
              </button>
            </div>
          </form>
        </Card>
      </section >
      <Footer />
    </div>
  );
}