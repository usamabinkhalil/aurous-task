import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={`bg-slate-200 bg-no-repeat ${styles.bgBanner}`}>
        <Header />
        <div className="mx-auto max-w-7xl px-12">
          <h1 className="hidden text-5xl md:flex justify-center mt-12 font-semibold">
            Pure organic goodness,
          </h1>
          <h1 className="hidden text-5xl md:flex justify-center mt-2 font-semibold">
            delivered right to your door
          </h1>
        </div>
        <div className="mx-auto max-w-7xl bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5 p-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
