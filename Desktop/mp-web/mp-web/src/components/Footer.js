import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/globals.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Logo Footer */}
                <div className={styles.logo}>
                    <Image src="/images/footer.png" alt="Mega Putra" width={140} height={40} priority />
                </div>

                {/* Informasi Kontak */}
                <div className={styles.contact}>
                    <h4>Contact Us</h4>
                    <p>📞 021-29662288</p>
                    <p>📧 marketing@megaputra.com</p>
                </div>

                {/* Alamat */}
                <div className={styles.address}>
                    <h4>Address</h4>
                    <p>Jl. Raya Puspiptek No.18, RT.7, RW.2, Kota Tangerang Selatan, Banten 15315</p>
                </div>

                {/* Quick Links */}
                <div className={styles.quickLinks}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/company">Company</Link></li>
                        <li><Link href="/solutions">Solutions</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/resources">Resources</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className={styles.socialMedia}>
                    <h4>Follow Us</h4>
                    <div className={styles.icons}>
                        <Link href="#"><Image src="/icons/facebook.svg" width={24} height={24} alt="Facebook" /></Link>
                        <Link href="#"><Image src="/icons/twitter.svg" width={24} height={24} alt="Twitter" /></Link>
                        <Link href="#"><Image src="/icons/instagram.svg" width={24} height={24} alt="Instagram" /></Link>
                        <Link href="#"><Image src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn" /></Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <p>Copyright © Mega Putra. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
