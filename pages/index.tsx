import Head from "next/head";
// import Image from "next/image";

import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The Fleece is an art collective from the UK."
        />
        <link rel="icon" href="/fleece-logo.svg" />
        <link rel="”mask-icon”" href="/fleece-logo.svg” color=”#000000" />
        <title>The Fleece</title>
      </Head>

      <main>
        <div className={styles.flexContainer}>
          <video
            autoPlay
            muted
            playsInline
            loop
            /*style="
          width: 700px;
          max-width: 100%;
          display: block;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
        "*/
          >
            <source src="fleece-holding.mp4" type="video/mp4" />
          </video>
        </div>
      </main>
    </div>
  );
}
