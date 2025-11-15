const BannerItem = (props) => {
    return <a href="#" className="banners__banner">
                <figure className="banners__figure">
                    <img className="banners__image" src={props.image} alt=""/>
                    <figcaption className="banners__caption">
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