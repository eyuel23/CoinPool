import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project 53</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="font-Montserrat">
        <Navigation />
      </section>
    </div>
  );
}
