import Image from "next/image";
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
  dark?: boolean;
}

const ProjectPreview = ({
  name = "Block name",
  description = "Block description",
  image = "https://picsum.photos/id/10/200/300",
  websiteLink = "#",
  sourceLink = "#",
  bgColor = "#ffffff",
  dark = false,
}: Props) => {
  return (
    <main
      className={`h-[17rem] rounded-3xl overflow-hidden shadow-xl ${
        dark ? "dark" : ""
      }`}
      style={{ background: `${bgColor}` }}
    >
      <div
        className="h-full w-full px-10 py-3 duration-500 transition-all ease-in-out hover:scale-105 bg-cover bg-no-repeat bg-center group"
        style={{ backgroundImage: `url(${image})`}}
      >
      
        <div className="flex justify-between">
          <div>
            <h2 className="font-semibold text-lg dark:text-white">{name}</h2>
            <p className="text-sm text-gray-500 dark:text-zinc-300">
              {description}
            </p>
          </div>


          <div className="flex gap-3 justify-center items-center">
            <Link
              className="h-8 w-8 bg-white rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 transition-all"
              href={websiteLink}>
              <MdOutlineArrowOutward />
            </Link>
            <Link
              className="h-8 w-8 bg-white rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 transition-all"
              href={sourceLink}>
              <FaGithub />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default ProjectPreview;
