import { IProject } from './data'
import travel from '../../public/projectsImgs/banner1.webp'
import pet from '../../public/projectsImgs/banner2.webp'
import pizzaria from '../../public/projectsImgs/banner3.webp'
import JfPromotora from '../../public/projectsImgs/JF_Promotora_Banner.png'
import Evence from '../../public/projectsImgs/Evence_Banner.png'
import Bromx from '../../public/projectsImgs/Bromx_Banner.png'
import MaiVoip from '../../public/projectsImgs/Maivoip_Banner.png'
import ProspectImoveis from '../../public/projectsImgs/Prospecta_Imoveis_Banner.png'

export const Projects: IProject[] = [
  {
    title: "Site Imobiliária - Prospecta Imóveis",
    description: "Projeto construído para a empresa Prospecta Imóveis, com o foco em captar clientes interessados em comprar ou alugar imóveis na regiao da grande sao paulo, o site foca é ensinar sobre a Prospecta Imóveis sendo um catálogo para seus imoveis. Projeto construído com o Next.js, tailwindcss, typescript e Node.js.",
    link: "https://www.prospectaimoveis.com.br/",
    mainImage: ProspectImoveis,
    tags: ["Next.js", "Tailwind css", "Typescript", "Node.js"],
    year: "2023",
    otherLinks: [
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/company/prospecta-imoveis/"
      }
    ]
  },
  {
    title: "Site institucional - Mais Voip",
    description: "Projeto construído para a empresa MaisVoip, com o foco em captar clientes interessados em modernizar a telefonia de suas empresas, o site foca é ensinar sobre a Evence Telecom mostrando seus serviços e como ela ajuda a sua empresa crescer cada vez mais. Projeto construído com o Next.js, tailwindcss, typescript e Node.js.",
    link: "https://maisvoip.vercel.app/",
    mainImage: MaiVoip,
    tags: ["Next.js", "Tailwind css", "Typescript", "Node.js"],
    year: "2023",
    otherLinks: [
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/company/maisvoip/"
      }
    ]
  },
  {
    title: "Landing page - Bromx",
    description: "Projeto construído para a empresa Bromx, com o foco em captar clientes interessados em consultoria politica te ajudando a subir na sua carreira na política brasileira, projeto construído com o HTML, Tailwind css, Javascript e Node.js.",
    link: "https://bromx.com.br/",
    mainImage: Bromx,
    tags: ["HTML", "Tailwind css", "Javascript", "Node.js"],
    year: "2023",
  },
  {
    title: "Site institucional - Evence Telecom",
    description: "Projeto construído para a empresa Evence Telecom, com o foco em captar clientes interessados em modernizar a telefonia de suas empresas, o site foca é ensinar sobre a Evence Telecom mostrando seus serviços e como ela ajuda a sua empresa crescer cada vez mais. Projeto construído com o Next.js, tailwindcss e typescript.",
    link: "https://www.evence.com.br/",
    mainImage: Evence,
    tags: ["Next.js", "Tailwind css", "Typescript", "Node.js"],
    year: "2023",
    otherLinks: [
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/company/evence-telecom/"
      }
    ]
  },
  {
    title: "Landing page - JF Promotora",
    description: "Projeto construído para a empresa JF Promotora, com o foca em captar clientes com interesse em crédito consignado, o projeto foi construído com Next.js e taiilwind css.",
    link: "https://js-promotora.vercel.app/",
    mainImage: JfPromotora,
    year: "2022",
    tags: ["Next.js", "Tailwind css", "Typescript"],
  },
  {
    title: "Site institucional - Pizzaria",
    description: "Esse é um site institucional construído com o foco de treinar minhas habilidades. esse site foi construído com Html5, css3 e Javascript vanila, simples porem moderno e bonito.",
    link: "/projects/pizzaria/index.html",
    mainImage: pizzaria,
    year: "2021",
    tags: ["html", "css", "javascript"],
    otherLinks: [
      {
        name: "Github",
        link: "https://github.com/GabDevjs/LandingPage-Pizzaria"
      }
    ],
  },
  {
    title: "Site institucional - PetShop",
    description: "Esse é uma landing page construída com Html5, Sass e javascript vanila feito na intenção de exercitar minhas habilidades.",
    link: "/projects/pet/index.html",
    mainImage: pet,
    year: "2021",
    tags: ["html", "sass", "javascript"],
    otherLinks: [
      {
        name: "Github",
        link: "https://github.com/GabDevjs/Landing-page---PetShop-WebSite"
      }
    ]
  },
  {
    title: "Site institucional - Travel",
    description: "esse é um site institucional construído com o fim de estudar e exercitar minhas habilidades, comstruido com Html, sass e javascript vanila.",
    link: "/projects/travel/index.html",
    mainImage: travel,
    year: "2021",
    tags: ["html", "sass", "javascript"],
    otherLinks: [
      {
        name: "Github",
        link: "https://github.com/GabDevjs/LandingPage-TravelWebsite"
      }
    ]
  }
]
