import Image from 'next/image';
import React from 'react';
import temps from './Content.module.scss';

const Works = () => {
    return (
        <>
            <div className={ temps.topic }>
                <h1 className={ temps.title }>Works</h1>
                <div className={ temps.container }>
                    <ul className={ temps.works }>
                        <li className={ temps.li }>
                            <h3>DeKi Router</h3>
                            <Image src="" alt="" />
                            <p>目標管理アプリケーション<br />学習の一環で作成しました</p>
                            <p>PHP</p>
                        </li>
                        <li className={ temps.li }>
                            <h3>Pixabay Clone</h3>
                            <Image src="" alt="" />
                            <p>React</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
  )
}

export default Works