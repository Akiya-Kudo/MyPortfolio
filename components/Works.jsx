import Image from 'next/image';
import React from 'react'
import styles from './Works.module.scss';

const Works = () => {
    return (
        <>
            <div className={ styles.works }>
                <h1>Works</h1>
                <div>
                    <div>
                        <h3>DeKi Router</h3>
                        <Image src="" alt="" />
                        <p>目標管理アプリケーション<br />学習の一環で作成しました</p>
                        <p>PHP</p>
                    </div>
                    <div>
                        <h3>Pixabay Clone</h3>
                        <Image src="" alt="" />
                        <p>React</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Works