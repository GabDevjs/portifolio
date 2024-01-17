"use client";
import Particles from "../components/particles";
import { useEffect } from "react";

export const ObrigadoPageTemplate = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2500)
  }, [])

  return (
    <div className="w-screen h-screen ">
      <Particles className="w-screen h-screen" quantity={100
      } />
      <div className="absolute inset-0 flex justify-center flex-col items-center w-screen h-screen ">
        <h1 className="z-10 text-5xl text-transparent text-edge-outline cursor-default font-bold font-display sm:text-3xl xl:text-7xl 2xl:text-9xl max-w-7xl  text-center text-ellipsis bg-clip-text mb-2">
          Obrigado por entrar em contato!
        </h1>
        <p className="text-xl text-gray-300 cursor-default font-medium  sm:text-2xl 2xl:text-2xl text-center max-w-5xl mb-6">
          Você será redirecionando para a página inicial.
        </p>
      </div>
    </div >
  )
}