import React, { ReactNode } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin/>,
    path: "https://www.linkedin.com/in/jahana-sireen-3aa3b8205/",
  },
]

interface Props {
  containerStyles?: string,
  iconStyles?: string,
}

export default function Socials({containerStyles, iconStyles}: Props) {

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  );
}