import styles from './Header.module.scss';
import LogoBetano from '../../../assets/img/logos/logo_betano_30.webp';
import LogoAdidas from '../../../assets/img/logos/logo-adidas.webp';
import LogoMenuMd from '../../../assets/img/logos/logo-regagtas.png';
import TopMenu from '../menu/top/TopMenu.jsx';
import { useTheme } from 'styled-components';

const Header = () => {
    const theme = useTheme();

    return <header>
                <div className={styles.headerRed} style={{
                    backgroundColor: theme.primaryColor
                }}>
                    <div className="container">
                        <div className="row">
                            <nav className={styles.linksDesktop}>
                                <div className={styles.links__seja_socio}>
                                    <a href="#" className={styles.links__texto}>Seja Sócio-Torcedor</a>
                                </div>
                                <div className={styles.links__nacao}>
                                    <a href="#" className={styles.links__texto}>Nação na ONU</a>
                                </div>
                                <div className={styles.links__third_part}>
                                    <a href="#" className={styles.links__betano}>
                                        <img src={LogoBetano} alt=""/>
                                    </a>
                                    <a href="#" className={styles.links__adidas}>
                                        <img src={LogoAdidas} alt=""/>
                                    </a>
                                    <ul className={styles.socialLinks}>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-solid fa-camera"/>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-facebook-f"/>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-x-twitter"/>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-youtube"/>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-tiktok"/>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-solid fa-magnifying-glass"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <nav className={styles.linksMobile}>
                                <div className={styles.links__third_part}>
                                    <ul className={styles.socialLinks}>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-solid fa-camera"></i>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-brands fa-tiktok"></i>
                                            </a>
                                        </li>
                                        <li className={styles.socialLinks__item}>
                                            <a href="">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className={styles.links__group__logos_partners}>
                                        <a href="#" className={styles.links__betano}>
                                            <img src={LogoBetano} alt=""/>
                                        </a>
                                        <a href="#" className={styles.links__adidas}>
                                            <img src={LogoAdidas} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.links__texto_group}>
                                    <div className={styles.links__seja_socio}>
                                        <a href="#" className={styles.links__texto}>Seja Sócio-Torcedor</a>
                                    </div>
                                    <div className={styles.links__nacao}>
                                        <a href="#" className={styles.links__texto}>Nação na ONU</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={styles.headerBlack}>
                    <div className="container">
                        <div className="row">
                            <a href="/index.html" className={styles.logo}>
                                <img className={styles.logo__image} src={LogoMenuMd} alt=""/>
                            </a>
                            <TopMenu
                                items={[
                                    { label: 'Futebol',  url: '#' },
                                    { label: 'Ingressos',  url: '#' },
                                    { label: 'Sócio-Torcedor',  url: '#' },
                                    { label: 'Olímpicos',  url: '#' },
                                    { label: 'Fla Prêmios',  url: '#' },
                                    { label: 'Loja',  url: '#' }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </header>
} 

export default Header;