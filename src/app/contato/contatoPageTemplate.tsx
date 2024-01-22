"use client";
import Particles from "../components/particles";
import { useEffect, useState } from "react";
import { Particles3d } from "../components/particles3d";
import { Navigation } from "../components/nav";
import { Footer, navigation } from "../components/footer";
import axios from "axios";
import { createErrorToast } from "@/util/ToatsNotification";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Card } from "../components/card";
import { PatternFormat } from "react-number-format";
import ClipLoader from "react-spinners/ClipLoader";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export const ContatoPageTemplate = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { register, handleSubmit, setValue, reset } = useForm();
  const [viewMore, setViewMore] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [phoneValue, setPhoneValue] = useState("");
  const router = useRouter();

  const handleClearValues = () => {
    reset();
    setValue("name", "");
    setValue("email", "");
    setValue("phone", "");
    setValue("mensagem", "");
    setPhoneValue("");
  }

  const handleSubmitContact = async (data: any) => {
    setIsLoading(true);
    data = {
      body: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        mensagem: data.mensagem,
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


      <section id="contato" aria-label="contato" className="flex max-w-7xl flex-col items-center justify-center w-full mt-32">
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
            <div className="py-3 px-2 col-span-2">
              <label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 peer-focus:translate-x-0 peer-focus:translate-y-0">
                Telefone
              </label>
              <div className="relative mt-2">
                <PatternFormat
                  name="phone"
                  type="tel"
                  format="(##) #####-####"
                  value={phoneValue || ""}
                  required
                  className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
                  onValueChange={({ value }: {
                    value: string
                  }) => {
                    setValue("phone", value);
                  }}
                  alt="Input de telefone"
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {
                    setPhoneValue(e.target.value);
                  }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="py-3 px-2 col-span-2 pt-10 md:col-span-2">
              <label htmlFor="name" className="block text-xl 2xl:text-2xl font-medium leading-6 text-gray-300 translate-x-2 translate-y-2 peer-focus:translate-x-0 peer-focus:translate-y-0">
                Mensagem
              </label>
              <div className="relative mt-2">
                <textarea
                  id="mensagem"
                  className="peer block w-full border-0 bg-transparent placeholder-gray-400 focus:outline-none px-2 py-2 text-gray-200 focus:ring-0 text-lg 2xl:text-xl  sm:leading-6"
                  placeholder=""
                  {...register("mensagem")}
                />
                <div
                  className="absolute inset-x-0 bottom-0 border-t border-gray-200 peer-focus:border-t-2 peer-focus:border-sky-500"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="py-3  col-span-2 flex justify-end px-4 md:px-[10vw]">
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

      <section aria-label="midias-socias" className="flex flex-col items-center w-full justify-center xl:pt-20 pb-20">
        <div className="flex justify-between items-center flex-col w-full max-w-7xl">
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16 pt-5 xl:pt-10">
            {!isMobile ? (
              navigation.social.map((item, index) => (
                <Card key={index} className="w-full  h-[50vh]">
                  <div className="py-20 px-4 flex flex-col h-full justify-center gap-4">
                    <Link href={item.href}
                      className="text-gray-200
                    group-hover:text-primary-orange text-center flex flex-col items-center justify-center gap-4"
                      target="_blank"
                    >

                      <item.icon className="text-xl md:text-3xl lg:text-5xl xl:text-7xl" aria-hidden="true" />
                      <span className=" text-xl ">{item.name}</span>
                    </Link>
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
                {navigation.social.map((item, index) => (
                  <SwiperSlide key={index} className="w-full flex justify-center items-center">
                    <Card className="w-full  h-[50vh]">
                      <div className="py-20 px-4 flex flex-col h-full justify-center gap-4">
                        <Link href={item.href}
                          className="text-gray-200
                    group-hover:text-primary-orange text-center flex flex-col items-center justify-center gap-4"
                          target="_blank"
                        >
                          <item.icon className="text-5xl xl:text-7xl" aria-hidden="true" />
                          <span className=" text-xl ">{item.name}</span>
                        </Link>
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