
"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IProject } from "@/data/projects.d"
import { Dialog, Transition } from "@headlessui/react"
import { Dispatch, Fragment, SetStateAction } from "react"


import Image from "next/image";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

interface IProjectCardProps {
  item: IProject
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ProjectViewMore = (props: IProjectCardProps) => {
  const { item, isOpen, setIsOpen } = props

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 pt-10 md:pt-16 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-full max-w-7xl transform overflow-hidden rounded-xl bg-neutral-800 p-6 text-left shadow-xl transition-all border border-gray-200/20 pt-8">
                <div
                  className="flex justify-between flex-wrap gap-y-2 items-end mb-2 "
                >
                  <h2 className="text-xl md:text-2xl leading-6 text-gray-100 font-semibold xl:text-3xl">
                    {item.title}
                  </h2>
                  <span className="inline-flex items-center justify-center px-3 py-1 text-lg font-bold leading-none text-gray-100 bg-gray-200/10 rounded-full border border-gray-100/20">
                    {item.year.toString()}
                  </span>
                </div>

                <div className="h-[40vh] md:h-[50vh] xl:h-[65vh] w-full pt-2">
                  <Swiper
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    navigation={{ nextEl: "#arrow-right", prevEl: "#arrow-left" }}
                    modules={[Autoplay, Navigation]}
                    className="w-full h-full rounded-xl overflow-hidden relative block border border-gray-100/20"
                  >
                    <SwiperSlide className='w-full  '>
                      {item.mainImage ? (
                        <Image
                          src={item.mainImage}
                          alt={`${item.title} - ${item.year.toString()}`}
                          priority
                          fill
                          className="object-cover object-center "
                        />
                      ) : (
                        <div className="w-full h-[200px] rounded-xl bg-gray-200/10 animate-fade-in" />
                      )}
                    </SwiperSlide>
                    {item.images && item.images.length > 0
                      ? item.images.map((img, index) => (
                        <SwiperSlide key={index} className='w-full'>
                          {img.src ? (
                            <Image
                              src={img.src}
                              alt={`${img.alt} - ${item.year.toString()}`}
                              priority
                              fill
                              className="object-cover object-center "
                            />
                          ) : (
                            <div className="w-full h-[200px] rounded-xl bg-gray-200/10 animate-fade-in" />
                          )}
                        </SwiperSlide>
                      ))
                      : null}
                  </Swiper>
                </div>
                <div className="flex items-center justify-between gap-8 pt-5">
                  <button
                    id="arrow-left"
                    name="Previous"
                    title="Previous"
                    arial-label="Previous"
                    className="flex h-14 w-14 items-center justify-center gap-2 whitespace-nowrap rounded-full border-[2px] border-p-gold bg-gray-100 text-2xl font-medium text-p-gold shadow-md transition-all ease-in-out hover:cursor-pointer focus:outline-none  focus:ring-2"
                  >
                    <BiSolidLeftArrow className="mr-1 inline" />
                  </button>
                  <button
                    name="Next"
                    arial-label="Next"
                    title="Next"
                    id="arrow-right"
                    className="flex h-14 w-14 items-center justify-center gap-2 whitespace-nowrap rounded-full border-[2px] border-p-gold bg-gray-100 text-2xl font-medium text-p-gold shadow-md transition-all ease-in-out hover:cursor-pointer focus:outline-none  focus:ring-2"
                  >
                    <BiSolidRightArrow className="ml-1 inline" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}