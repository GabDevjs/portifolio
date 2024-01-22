import { Logo } from './../app/components/logo';
import { IExperiencia } from "./data";
import logoWorkana from "../../public/logo/workana_logo.jpeg";
import logoMaisVoip from "../../public/logo/maisvoip_logo.jpeg";
import logoSistemaVanguard from "../../public/logo/sistema_vanguard_logo.jpeg";


export const experiencias: IExperiencia[] = [
  {
    title: "Desenvolvedor full stack",
    subtitle: "Sistema Vanguard · Tempo integral",
    description: "Trabalhando como desenvolvedor full-stack, venho contribuindo significativamente, construindo uma variedade de sistemas para otimizar processos tanto dentro do ecossistema interno da empresa quanto para nossos clientes privados de telefonia. Meu trabalho reflete não apenas habilidades técnicas, mas também um compromisso em impulsionar a eficiência e a inovação no ambiente de telecomunicações.",
    linkedin: "https://www.linkedin.com/company/sistema-vanguard/",
    dateInit: "dez de 2023",
    dateEnd: "atual",
    atual: true,
    totalTime: "2 anos e 2 meses",
    logo: logoSistemaVanguard
  },
  {
    title: "Desenvolvedor full stack",
    subtitle: "MaisVoip Serviços de Telecomunicações · Tempo integral",
    description: "Iniciei minha jornada na Mais Voip no início de 2022, uma empresa comprometida com tecnologia de ponta e inovação constante no mercado de telecomunicações. No papel de desenvolvedor full-stack, venho contribuindo significativamente, construindo uma variedade de sistemas para otimizar processos tanto dentro do ecossistema interno da empresa quanto para nossos clientes privados de telefonia. Meu trabalho reflete não apenas habilidades técnicas, mas também um compromisso em impulsionar a eficiência e a inovação no ambiente de telecomunicações.",
    linkedin: "https://www.linkedin.com/company/maisvoip/",
    dateInit: "jun de 2022",
    dateEnd: "dez de 2023",
    totalTime: "1 ano e 7 meses",
    logo: logoMaisVoip,
    atual: false
  }
]