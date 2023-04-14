import Head from "next/head";
import Image from "next/image";
import { Rajdhani } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Base from "./templates/base";
import Header from "@/components/Header";

// const inter = Rajdhani({ weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <>
      <Base>
        <Header/>
      </Base>
    </>
  );
}
