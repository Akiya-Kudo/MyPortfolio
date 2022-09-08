import React from 'react';
import temps from './Content.module.scss';

const About = () => {
  return (
    <>
      <div className={ temps.topic }>
        <h1 className={ temps.title }>History</h1>
        <div className={ temps.container }>
          <ul>
            <li><span>2017</span>　埼玉県和光国際高校＿入学</li>
            <li><span>2020</span>　青山学院大学 国際政治経済学部 国際経済学科＿入学</li>
            <li><span>2020</span>　埼玉から練馬の光が丘に越す</li>
            <li><span>2022</span>　世田谷の明大前に越す</li>
            <li><span>2022</span>　中川ゼミ（統計/データサイエンス）入ゼミ</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About