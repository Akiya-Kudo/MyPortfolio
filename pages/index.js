import styles from "../styles/Home.module.scss";
import Top from "../components/Top";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";

export default function Home() {

  return (
    <>
      <div className={ styles.container }>
        <Top />
        <About />
        <Skills />
        <Works />
      </div>
    </>
  )
}
