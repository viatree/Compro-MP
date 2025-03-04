import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/globals.module.scss';

const Header = () => {
  const router = useRouter(); // Untuk mengetahui halaman yang sedang aktif

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="Mega Putra" width={290} height={40} priority />
        </Link>

        {/* Navigasi */}
        <nav className={styles.nav}>
  <ul>
    {["home", "company", "solutions", "projects", "resources", "careers", "contact"].map((item) => (
      <li key={item} className={router.pathname === `/${item === "home" ? "" : item}` ? styles.active : ""}>
        <Link href={`/${item === "home" ? "" : item}`}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      </li>
    ))}
  </ul>
</nav>


        {/* Tombol Bahasa */}
        <div className={styles.langSwitch}>
          <button className={styles.active}>EN</button>
          <button>ID</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
