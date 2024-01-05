"use client";
import Particles from "../components/particles";
import { useEffect, useState } from "react";
import { Particles3d } from "../components/particles3d";
import { Navigation } from "../components/nav";
import { Footer, navigation } from "../components/footer";
import { Services } from "@/data/services";
import { Card } from "../components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Astronauta from "/public/menino_lindo.jpeg";
import Image from "next/image";

export const SobrePageTemplate = () => {
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


      <section id="sobre" aria-label="sobre" className="flex items-center justify-center w-full ">
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-x-10 py-20 w-full max-w-7xl md:px-4">
          <div className="flex w-full justify-center flex-1 items-center py-10 ">
            <div className=" h-[40vh] md:h-[26rem] xl:h-[33rem] w-full rounded-xl border-8 border-transparent ring-1 ring-gray-500/50 overflow-hidden relative ">
              <Image
                src={Astronauta}
                alt="Astronauta"
                className="object-cover drop-shadow-2xl rounded-lg"
                fill
              />
            </div>
          </div>
          <div className="flex justify-center flex-col flex-1 py-10 max-w-4xl ">
            <h3 className="text-2xl font-display  text-transparent duration-1000 text-edge-outline cursor-default sm:text-3xl xl:text-4xl font-semibold text-ellipsis bg-clip-text mb-2 ">
              Sobre Mim
            </h3>
            <h2 className="text-3xl font-display font-bold cursor-default sm:text-4xl md:text-5xl mb-2 text-gray-200 ">
              Transformando Códigos em Experiências Inovadoras
            </h2>
            <p className="text-sm xl:text-base  text-gray-300/70 ">
              Há mais de dois anos, iniciei minha jornada na programação e desde então, a paixão por desenvolvimento só cresceu. Sou um profissional dedicado, especializado como desenvolvedor full-stack e webdesign. Com um ano de experiência, já desenvolvi uma variedade de projetos, desde sites institucionais e Landing Pages até sistemas empresariais complexos.
              <br />
              <br />
              Minha missão é otimizar a experiência do usuário em cada aplicativo, sempre buscando a máxima qualidade e inovação. Estou pronto para contribuir, criar e inovar no mundo digital.
            </p>
            <div className="flex items-center flex-wrap w-full gap-6 pt-5 ">
              {navigation.social.map((item, index) => (
                <div key={index}>
                  <Link href={item.href}
                    className="bg-gray-200/10 p-2.5 hover:scale-125 rounded-full group shadow-xl flex justify-center flex-col border-2 border-gray-500 border-opacity-40 transition-all duration-300 cursor-pointer text-gray-100"
                    target="_blank"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>
              ))}
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

      <Footer />
    </div>
  );
}