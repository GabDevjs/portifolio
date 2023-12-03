import Link from "next/link";

interface ItemsNavbarProps {
  items?: any;
  isMobile?: boolean;
}
export const NavItems = (props: ItemsNavbarProps) => {
  const { items, isMobile } = props;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  return (
    <>
      {items &&
        items.map((item: any, index: any) => isMobile ? (
          <span
            key={index}
            className="flex justify-center items-center h-full w-full py-2 px-3 relative"
          >
            <Link href={item.href} onClick={handleScroll} className="text-3xl gap-3 text-zinc-100  leading-relaxed hover:text-primary-orange hover:scale-110 transition-all flex justify-between items-center cursor-pointer uppercase font-bold z-10" >
              {item.name}
            </Link >
            <div className="absolute inset-0 flex justify-center items-center" >
              <div className="bg-gray-300/10 h-px w-full z-0"></div>
            </div>
          </span >
        ) : (
          <span
            key={index}
            className="flex justify-center items-center h-full w-full py-2 px-3"
          >
            <Link href={item.href} onClick={handleScroll} className="text-sm xl:text-base gap-3 text-zinc-100 font-normal leading-relaxed hover:text-primary-orange hover:scale-110 transition-all flex justify-between items-center cursor-pointer" >
              {item.name}
            </Link >
          </span >
        ))}
    </>
  );
};