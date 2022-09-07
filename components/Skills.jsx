import React from 'react'
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <>
      <div className={ styles.skills }>
        <h1>Skills</h1>
        <div className={ styles.skillsContainer } >
          <div>
            <h3>PHP</h3>
            <p>個人開発に使用<br/>MVCモデルのMPAアプリ作りました</p>
          </div>
          <div>
            <h3>React</h3>
            <p>個人開発に使用</p>
          </div>
          <div>
            <h3>Next.js</h3>
            <p>個人開発に使用<br/>このポートフォリオサイトの制作に使用しました</p>
          </div>
          <div>
            <h3>Python</h3>
            <p>ゼミでの研究で使用</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills