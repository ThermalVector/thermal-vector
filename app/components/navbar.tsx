'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.header}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='https://www.thermeyetec.com/upload/image/20230518/8fe2d604b75f068077ceef08f2d6bfd4.png'
              alt='Logo 1'
              width={120} // Specify a width
              height={32} // Specify a height
              className={styles.logoImg}
            />
          </Link>
        </div>
        <div className={styles.fr}>
          <ul className={styles.ul1}>
            <li className={styles.product}>
              <div>
                <Link href='/catalog' className={styles.link}>
                  Каталог
                </Link>
              </div>
            </li>
            <li className={styles.product}>
              <div>
                <Link href='/about' className={styles.link}>
                  О нас
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
