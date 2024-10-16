import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Map from "./components/Map";

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Map/>
      <Footer/>
    </div>
  );
}
