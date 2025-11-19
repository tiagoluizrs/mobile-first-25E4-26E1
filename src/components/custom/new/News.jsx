import New from './item/New';
import styles from './News.module.scss';
import futebolFemininoImg from '../../../assets/img/news/futebol-feminino.webp';
import basqueteImg from '../../../assets/img/news/basquete.webp';
import institucionalImg from '../../../assets/img/news/institucional.webp';
import voleiImg from '../../../assets/img/news/volei.webp';

const News = () => {
    const bannerItems = [
            {
                image: futebolFemininoImg,
                title: 'Flamengo bate o Fluminense de virada e conquista o pentacampeonato da Taça Guanabara Feminina',
                description: 'Leidiane e Valéria Cantuário saíram do banco para marcar os gols da vitória rubro-negra por 2 a 1, nas Laranjeiras.',
                category: 'Futebol feminino'
            },
            {
                image: basqueteImg,
                title: 'FlaBasquete deslancha no segundo tempo e vence o Fortaleza por 102 a 73, pelo NBB',
                description: 'Americano Dee Bost foi o destaque do duelo com 22 pontos marcados no Maracanãzinho. Orgulho da Nação segue com 100% de aproveitamento na competição',
                category: 'Basquete'
            },
            {
                image: institucionalImg,
                title: 'Flamengo divulga Demonstrações Financeiras do terceiro trimestre de 2025',
                description: 'Junto ao documento oficial, clube disponibiliza relatório econômico-financeiro em linguagem simplificada para facilitar o entendimento dos resultados',
                category: 'Institucional'
            },
            {
                image: voleiImg,
                title: 'Sesc RJ Flamengo vence o Paulistano Barueri na estreia na Superliga',
                description: 'Com uma defesa forte, equipe de Bernardinho empolga a torcida no Tijuca, faz 3 sets a 0 e garante os primeiros três pontos',
                category: 'Vôlei'
            }
        ]

    return <div className={`container-fluid ${styles.news}`}>
                <div className="row">
                    {
                        bannerItems.map((item, index) => {
                            return <div key={`new_${index}`} className={`col col-xs-12 col-md-6 ${styles.news__item}`}>
                                        <New
                                            styles={styles}
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

export default News;