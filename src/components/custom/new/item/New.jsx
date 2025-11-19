const New = (props) => {
    return <>
                <span className={props.styles.news__header}>
                    <h2 className={props.styles.news__title}>{props.category}</h2>
                    <a href="#" className={props.styles.news__link}>Veja todas as notícias</a>
                </span>
                <a href="#" className={props.styles.news__banner}>
                    <figure className={props.styles.news__figure}>
                        <img className={props.styles.news__image} src={props.image} alt="" />
                        <figcaption className={props.styles.news__caption}>
                            <span className={props.styles.news__caption_span}>{props.category}</span>
                            <div className={props.styles.news__caption_div}>
                                <h3 className={props.styles.news__caption_h3}>Flamengo bate o Fluminense de virada e conquista o pentacampeonato da Taça Guanabara
                                    Feminina</h3>
                                <p className={props.styles.news__caption_p}>Leidiane e Valéria Cantuário saíram do banco para marcar os gols da vitória
                                    rubro-negra
                                    por 2 a 1, nas Laranjeiras.</p>
                            </div>
                        </figcaption>
                    </figure>
                </a>
            </>
} 

export default New;