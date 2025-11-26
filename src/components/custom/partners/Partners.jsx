import styles from './Partners.module.scss';

import betanoImg from '../../../assets/img/patrocinadores/betano.png';
import adidasImg from '../../../assets/img/patrocinadores/adidas.webp';
import nacaoImg from '../../../assets/img/patrocinadores/nacao.webp';
import brbImg from '../../../assets/img/patrocinadores/brb.webp';
import Partner from './item/Partner';

const Partners = () => {
    const partnersImage = [
        [betanoImg],
        [adidasImg, nacaoImg],
        [brbImg],
    ]


    return  partnersImage.map( (images, index) => {
                return  <div key={`partner_${index}`} className={`col col-xs-12 col-md-4 ${styles.partners__item}`}>
                            {
                                images.map( (image, imgIndex) => {
                                    return <Partner key={`partner_${index}_${imgIndex}`} image={image} />
                                })
                            }
                        </div>
            })
} 

export default Partners;