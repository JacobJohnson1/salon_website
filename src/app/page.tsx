import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jewelery from "./components/Jewelery";

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Jewelery />
      <Footer/>
    </div>
  );
}
