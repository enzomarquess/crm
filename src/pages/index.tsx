import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Pagina } from "./nova-pagina";
import { Corposite } from "./nova_merda";
import { Menuzin } from "./menunessaporra";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return(
    <main>
      <Pagina></Pagina>
      <div className="envelope">
        <Corposite></Corposite>
        <Menuzin></Menuzin>
      </div>
    </main>
  );
}
