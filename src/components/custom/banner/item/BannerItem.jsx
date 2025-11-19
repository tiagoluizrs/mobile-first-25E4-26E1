const BannerItem = (props) => {
    return <a href="#" className={props.styles.banners__banner}>
                <figure className={props.styles.banners__figure}>
                    <img className={props.styles.banners__image} src={props.image} alt=""/>
                    <figcaption className={props.styles.banners__caption}>
                        <div>
                            <span>{props.category}</span>
                            <h3>{props.title}</h3>
                            <p>{props.description}</p>
                        </div>
                    </figcaption>
                </figure>
            </a>
}

export default BannerItem;