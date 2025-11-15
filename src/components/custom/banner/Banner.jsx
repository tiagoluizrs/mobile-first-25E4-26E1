import './Banner.scss';
import FutebolImg from '../../../assets/img/banners/futebol.webp';
import BasqueteImg from '../../../assets/img/banners/basquete.webp';
import BannerItem from './item/BannerItem';

const Banner = () => {
    const bannerItems = [
        {
            image: FutebolImg,
            title: 'Com emoção no fim, Flamengo vence o Santos e segue à caça da liderança do Brasileirão',
            description: 'Léo Pereira, Carrascal e Bruno Henrique balançaram as redes no Maracanã no triunfopor 3 a 2',
            category: 'Futebol'
        },
        {
            image: BasqueteImg,
            title: 'Com show de Gui Deodato, Flamengo vence Pato Basquete no retorno ao Maracanãzinho',
            description: 'Absoluto em quadra, Mais Querido chega a quarta pontuação centenária em oito jogos nesta edição do NBB: 101 a 63',
            category: 'Basquete'
        }
    ]

    return <div className="container-fluid banners">
                <div className="row">
                    {
                        bannerItems.map((item, index) => {
                            return <div className="col col-xs-12 col-md-6 banners__item">
                                        <BannerItem
                                            image={item.image}
                                            category={item.category}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </div>
                        })
                    }
                </div>
            </div>
} 

export default Banner;