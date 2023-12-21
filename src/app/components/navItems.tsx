import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemsNavbarProps {
  items?: any;
  isMobile?: boolean;
}

export const NavItems = (props: ItemsNavbarProps) => {
  const { items, isMobile } = props;
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

  };

  return (
    <>
      {items &&
        items.map((item: any, index: any) => isMobile ? index == items.length - 1 ? (
          <span
            key={index}
            className="flex justify-center items-center h-full w-full py-2 px-3 relative"
          >
            <Link href={item.href} onClick={handleScroll} className="relative py-0.5 px-8 text-black inline-flex gap-2 items-center font-semibold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0" >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link >
          </span >
        ) : (
          <span
            key={index}
            className="flex justify-center items-center h-full w-full py-2 px-3 relative"
          >
            <Link href={item.href} onClick={handleScroll} className="text-3xl gap-3 text-zinc-100  leading-relaxed hover:text-primary-orange hover:scale-110 transition-all flex justify-between items-center cursor-pointer uppercase font-bold z-10" >
              <item.icon className="h-4 w-4" />

              {item.name}
            </Link >
            <div className="absolute inset-0 flex justify-center items-center" >
              <div className="bg-gray-300/10 h-px w-full z-0"></div>
            </div>
          </span >
        ) : index == items.length - 1 ? (
          <span
            key={index}
            className="flex justify-center items-center h-full w-full"
          >
            <Link href={item.href} onClick={handleScroll} className="relative py-0.5 px-4 text-black inline-flex gap-2 items-center font-semibold  rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0" >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link >
          </span >
        ) : (
          <span
            key={index}
            className="flex justify-center items-center h-full w-full py-2 px-3"
          >
            <Link href={item.href} onClick={handleScroll} className="text-sm xl:text-base gap-2 text-zinc-100 font-normal leading-relaxed hover:text-primary-orange hover:scale-105 transition-all flex justify-between items-center cursor-pointer" >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link >
          </span >
        ))}
    </>
  );
};