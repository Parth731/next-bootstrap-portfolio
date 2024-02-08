import { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const navbarDetail = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About" },
    { url: "/resume", name: "Resume" },
    { url: "/services", name: "Services" },
    { url: "/portfolio", name: "Portfolio" },
    { url: "/contact", name: "Contact" },
  ];
  const [isNavbarMobile, setNavbarMobile] = useState<boolean>(false);
  const router = useRouter();

  const handleToggleClick = () => {
    setNavbarMobile(!isNavbarMobile);
  };

  console.log(router.pathname);
  return <></>;
}
