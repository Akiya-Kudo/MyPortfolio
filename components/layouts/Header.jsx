import React from 'react'
import Link from "next/link"
import styles from './Header.module.scss';

export  const Header = () => {
    return (
      <>
        <header className={ styles.header }>
          <div className={ styles.inner }>
            <span className={ styles.logo }>
              <Link href="/">Icon</Link>
            </span>
            <nav className={ styles.nav }>
              <ul className={ styles.ul }>
                <li className={ styles.link }><Link href="/">アバウト</Link></li>
                <li className={ styles.link }><Link href="/">フォト</Link></li>
                <li className={ styles.link }><Link href="/">コンタクト</Link></li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    )
  }
