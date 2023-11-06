import Link from "next/link";

interface ItemsNavbarProps {
  items?: any;
}
export const NavItems = (props: ItemsNavbarProps) => {
  const { items } = props;

  return (
    <>
      {items &&
        items.map((item: any, index: any) => {
          return (
            <span
              key={index}
              className="flex justify-center items-center h-full w-full py-2 px-3"
            >
              <Link href={item.href} className="text-sm xl:text-base gap-3 text-zinc-800  dark:text-zinc-100 font-normal leading-relaxed hover:text-primary-orange hover:scale-110 transition-all flex justify-between items-center cursor-pointer" >
                {item.name}
              </Link>
            </span>
          );
        })}
    </>
  );
};