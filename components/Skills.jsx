import React from 'react';
import temps from './Content.module.scss';
import LogoImage from './elements/LogoImage';

const Skills = () => {
  return (
    <>
      <div className={temps.topic}>
        <h1 className={ temps.title }>Skills</h1>
        <div className={ temps.container }>
          <ul className={ temps.skills }>
            <li className={ temps.li } id="PHP">
              <LogoImage lang="php" hei="100" wid="100" />
              <h3>PHP</h3>
              <p>個人開発に使用<br/>MVCモデルのMPAアプリ作りました</p>
            </li >
            <li className={ temps.li } id="React">
              <LogoImage lang="react" hei="100" wid="100" />
              <h3>React</h3>
              <p>個人開発に使用</p>
            </li>
            <li className={ temps.li } id="Next">
              <LogoImage lang="next" hei="100" wid="100" />
              <h3>Next.js</h3>
              <p>個人開発に使用<br/>このポートフォリオサイトの制作に使用しました</p>
            </li>
            <li className={ temps.li } id="Python">
              <LogoImage lang="python" hei="100" wid="100" />
              <h3>Python</h3>
              <p>ゼミでの研究で使用</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills