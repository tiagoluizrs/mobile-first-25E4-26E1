import BottomMenu from '../menu/bottom/BottomMenu';
import styles from './Footer.module.scss';

const Footer = () => {
    const { footerRed, footer__item } = styles;

    return <footer>
        <div className={footerRed}>
            <div className="container">
                <div className="row">
                    <div className={`col col-xs-12 col-md-6 ${footer__item}`}>
                        <div>
                            <h4>Sede Gávea</h4>
                            <BottomMenu 
                                items={[
                                    { label: 'Av. Borges de Medeiros, 997' },
                                    { label: 'Lagoa - Rio de Janeiro/RJ' },
                                    { label: 'CEP: 22430-041 - Tel:(21) 2159-0100' },
                                ]}
                            />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-md-6 ${footer__item}`}>
                        <div>
                            <h4>Sede Gávea</h4>
                            <BottomMenu 
                                items={[
                                    { label: 'CT George Helal' },
                                    { label: 'Vargem Grande - Rio de Janeiro/RJ' },
                                    { label: 'CEP: 22785-275' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
} 

export default Footer;