import Head from "next/head";
import { Header } from "../components/layouts/Header"
import styles from "../styles/Home.module.scss";

export default function Home() {

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet" />
      </Head>
      <Header />
      <div className={ styles.container }>
        <div className={ styles.top }>
          <div className={ styles.name }>
            <h1 className={ styles.wfnicomoji }>めいだいまえ no アオガクセイ</h1>
          </div>
        </div>
        <div className={ styles.about }>about</div>
        <div className={ styles.skills }>skills</div>
        <div className={ styles.works }>works</div>
      </div>
    </>
  )
}
