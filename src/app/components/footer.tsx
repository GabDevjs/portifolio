import Link from "next/link";
import { BsBehance, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export const navigation = {
  social: [
    {
      name: "Github",
      href: "https://github.com/GabDevjs",
      icon: BsGithub,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/flavio-gabriel77/",
      icon: BsLinkedin,
    },
    {
      name: "Behance",
      href: "https://www.behance.net/flaviogabriel?tracking_source=search_projects_recommended%7CLanding%20page%20-%20pizzaria",
      icon: BsBehance,
    },
    {
      name: "Whatsapp",
      href: "https://wa.me/5511981154749",
      icon: BsWhatsapp,
    },
  ],
};

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto py-14 px-6 lg:py-24 lg:px-8">
        <div className="flex justify-between items-center flex-wrap w-full gap-6 ">
          {navigation.social.map((item, index) => (
            <div key={index}>
              <div className="bg-gray-200/10 p-4 hover:scale-125 rounded-full group shadow-xl flex justify-center flex-col border-2 border-gray-500 border-opacity-40 transition-all duration-300 cursor-pointer">
                <Link href={item.href}
                  className="text-gray-200
                    group-hover:text-primary-orange"
                  target="_blank"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-7 w-7" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 flex justify-center items-center">
          <p className="text-xs sm:text-sm text-center text-gray-50 xl:text-center" >
            &copy; Flavio Gabriel , Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
