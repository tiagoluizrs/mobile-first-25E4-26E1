import './Header.scss';
import LogoBetano from '../../../assets/img/logos/logo_betano_30.webp';
import LogoAdidas from '../../../assets/img/logos/logo-adidas.webp';
import LogoMenuMd from '../../../assets/img/logos/logo-menu-md.webp';
import { MenuTop } from '../..';

const Header = () => {
    return <header>
                <div className="header--red">
                    <div className="container">
                        <div className="row">
                            <nav className="links links--desktop">
                                <div className="links__seja_socio">
                                    <a href="#" className="links__texto">Seja Sócio-Torcedor</a>
                                </div>
                                <div className="links__nacao">
                                    <a href="#" className="links__texto">Nação na ONU</a>
                                </div>
                                <div className="links__third_part">
                                    <a href="#" className="links__betano">
                                        <img src={LogoBetano} alt=""/>
                                    </a>
                                    <a href="#" className="links__adidas">
                                        <img src={LogoAdidas} alt=""/>
                                    </a>
                                    <ul className="social-links">
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-solid fa-camera"/>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-facebook-f"/>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-x-twitter"/>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-youtube"/>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-tiktok"/>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-solid fa-magnifying-glass"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <nav className="links links--mobile">
                                <div className="links__third_part">
                                    <ul className="social-links">
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-solid fa-camera"></i>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-brands fa-tiktok"></i>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="links__group__logos_partners">
                                        <a href="#" className="links__betano">
                                            <img src={LogoBetano} alt=""/>
                                        </a>
                                        <a href="#" className="links__adidas">
                                            <img src={LogoAdidas} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="links__texto_group">
                                    <div className="links__seja_socio">
                                        <a href="#" className="links__texto">Seja Sócio-Torcedor</a>
                                    </div>
                                    <div className="links__nacao">
                                        <a href="#" className="links__texto">Nação na ONU</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="header--black">
                    <div className="container">
                        <div className="row">
                            <a href="/index.html" className="logo">
                                <img className="logo__image" src={LogoMenuMd} alt=""/>
                            </a>
                            <MenuTop
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