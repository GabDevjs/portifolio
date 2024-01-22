"use client";
import { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Footer, navigation } from "../components/footer";
import { Services } from "@/data/services";
import { Card } from "../components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Astronauta from "/public/menino_lindo.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { createErrorToast } from "@/util/ToatsNotification";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import { ParallaxText } from "../components/paralaxText";

export const SobrePageTemplate = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { register, handleSubmit, setValue, reset } = useForm();
  const [viewMore, setViewMore] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleClearValues = () => {
    reset();
    setValue("name", "");
    setValue("email", "");
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


      <section id="sobre" aria-label="sobre" className="flex items-center justify-center w-full ">
        <div className="flex justify-between items-center h-full flex-col-reverse lg:flex-row gap-x-10 py-20 w-full max-w-7xl md:px-4">
          <div className="flex justify-center lg:justify-between h-full md:h-[26rem] xl:h-[80vh] flex-col flex-1 max-w-4xl ">
            <div>
              <h2 className="text-3xl font-display font-bold cursor-default sm:text-4xl md:text-5xl mb-2 text-gray-200 ">
                Transformando Códigos em Experiências Inovadoras
              </h2>
              <p className="text-sm xl:text-base  text-gray-300/70 ">
                Há mais de dois anos, iniciei minha jornada na programação e desde então, a paixão por desenvolvimento só cresceu. Sou um profissional dedicado, especializado como desenvolvedor full-stack e webdesign. Com um ano de experiência, já desenvolvi uma variedade de projetos, desde sites institucionais e Landing Pages até sistemas empresariais complexos.
                <br />
                <br />
                Minha missão é otimizar a experiência do usuário em cada aplicativo, sempre buscando a máxima qualidade e inovação. Estou pronto para contribuir, criar e inovar no mundo digital.
              </p>
            </div>
            <div className="flex items-center flex-wrap w-full gap-6 pt-5  overflow-x-hidden relative h-20">
              <ParallaxText baseVelocity={1} className="w-full text-gray-100 " />
            </div>
          </div>
          <div className="flex w-full justify-center flex-1 items-center  ">
            <div className=" h-[40vh] md:h-[26rem] xl:h-[80vh] w-full overflow-hidden relative ">
              <Image
                src={Astronauta}
                alt="Astronauta"
                className="object-cover drop-shadow-2xl rounded-lg"
                fill
              />
            </div>
          </div>
        </div >
      </section >

      <section aria-label="Serviços" className="flex flex-col items-center w-full justify-center xl:pt-20 pb-20">
        <div className="flex justify-between items-center flex-col w-full max-w-7xl">
          <h2 className="text-5xl font-display text-center text-transparent text-edge-outline cursor-default sm:text-6xl 2xl:whitespace-nowrap xl:text-8xl text-ellipsis bg-clip-text mb-2 font-bold ">
            Serviços
          </h2>
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16 pt-5 xl:pt-10">
            {!isMobile ? (
              Services.map((item, index) => (
                <Card className="" key={index}>
                  <div className="py-20 px-4 flex flex-col gap-4">
                    <h3 className="text-xl font-display text-center cursor-default lg:text-2xl mb-2 text-gray-100 ">
                      {item.title}
                    </h3>
                    <p className="text-sm text-center xl:text-base text-gray-300/70 ">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))) : (
              <Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  }
                }}
                pagination={{
                  clickable: true
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper flex justify-center items-center h-full"
              >
                {Services.map((item, index) => (
                  <SwiperSlide key={index} className="w-full flex justify-center items-center">
                    <Card className="w-full  h-[50vh]">
                      <div className="py-20 px-4 flex flex-col h-full justify-center gap-4">
                        <h3 className="text-xl font-display text-center cursor-default lg:text-2xl mb-2 text-gray-100 ">
                          {item.title}
                        </h3>
                        <p className="text-sm text-center xl:text-base text-gray-300/70 ">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
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