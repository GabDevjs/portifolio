import { IProject } from './data'
import travel from '../../public/projectsImgs/banner1.webp'
import pet from '../../public/projectsImgs/banner2.webp'
import pizzaria from '../../public/projectsImgs/banner3.webp'

export const Projects: IProject[] = [
  {
    title: "Site institucional - Pizzaria",
    description: "Esse é um site institucional construído com o foco de treinar minhas habilidades. esse site foi construído com Html5, css3 e Javascript vanila, simples porem moderno e bonito.",
    link: "/projects/pizzaria/index.html",
    mainImage: pizzaria,
    year: "2021",
    tags: ["html", "css", "javascript"],
    otherLinks: [
      {
        name: "Behance",
        link: "https://www.behance.net/gallery/134377753/Landing-page-Pizzaria",
      },
      {
        name: "Github",
        link: "https://github.com/GabDevjs/LandingPage-Pizzaria"
      }
    ],
    images: [
      {
        src: pizzaria,
        alt: "Pizzaria"
      }
    ]
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
        name: "Behance",
        link: "https://www.behance.net/gallery/134314129/Landing-page-PetShop-WebSite",
      },
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
        name: "Behance",
        link: "https://www.behance.net/gallery/134362077/Landing-Page-TravelWebsite",
      },
      {
        name: "Github",
        link: "https://github.com/GabDevjs/LandingPage-TravelWebsite"
      }
    ]
  }
]
