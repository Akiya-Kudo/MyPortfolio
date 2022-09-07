import React from 'react'
import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <div className={ styles.about }>
        <div className={ styles.history }>
          <ul className={ styles.ul }>
            <li className={ styles.list }>2017年：埼玉県和光国際高校＿入学</li>
            <li className={ styles.list }>2020年：青山学院大学 国際政治経済学部 国際経済学科＿入学</li>
            <li className={ styles.list }>2020年：埼玉から練馬の光が丘に越す</li>
            <li className={ styles.list }>2022年：世田谷の明大前に越す</li>
            <li className={ styles.list }>2022年：中川ゼミ（統計/データサイエンス）入ゼミ</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About