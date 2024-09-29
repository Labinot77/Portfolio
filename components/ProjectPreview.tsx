import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

interface Props {
  name: string;
  description: string;
  image: string;
  websiteLink: string;
  sourceLink: string;
  bgColor: string;
  dark: boolean;
}

const ProjectPreview = ({
  name,
  description, 
  image,
  websiteLink,
  sourceLink,
  bgColor, 
  dark,
}: Props) => {
  return (
    <main
      className={`h-[17rem] rounded-3xl shadow-xl relative ${
        dark ? "dark" : ""
      }`}
      style={{ background: `${bgColor}` }}
    >
      <div className="testing2" />
      <div
        className="h-full w-full px-10 py-3 duration-500 transition-all ease-in-out hover:scale-105 bg-cover bg-no-repeat bg-center group"
        style={{ backgroundImage: `url(${image})`}}
      >
      
        <div className="flex justify-between">
          <div>
            <h2 className="font-semibold text-lg text-black dark:text-white">{name}</h2>
            <p className="text-sm text-gray-500 dark:text-zinc-300">
              {description}
            </p>
          </div>


          <div className={`flex gap-3 justify-center items-center ${dark ? "dark" : ""}`}>
            <Link
              className="h-8 w-8 bg-black dark:bg-white rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 transition-all"
              href={websiteLink}>
              <MdOutlineArrowOutward className="text-black dark:text-black" />
            </Link>
            <Link
              className="h-8 w-8 bg-white dark:bg-white rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 transition-all"
              href={sourceLink}>
              <FaGithub className="text-white dark:text-black" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPreview;
