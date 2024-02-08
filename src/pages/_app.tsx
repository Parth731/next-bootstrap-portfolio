import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import "boxicons/css/boxicons.min.css";
// import "react-image-lightbox/style.css";
import "yet-another-react-lightbox/styles.css";
import Footer from "@/components/Footer";
// import "waypoints/lib/noframework.waypoints.min";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
