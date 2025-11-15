import { useState } from 'react';
import './TopMenu.scss';

const TopMenu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return  <>
                <button type="button" className="menu__button" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </button>
                <nav className={`menu ${menuOpen ? 'menu--open' : 'menu--close'}`}>
                    <ul className="menu__list">
                        {
                            props.items && props.items.map((item, index) => {
                                return <li className={`menu__item ${index == 0 ? 'menu__item--active' : ''}`}><a href={item.url}>{item.label}</a></li>;
                            })
                        }
                    </ul>
                </nav>
            </>
} 

export default TopMenu;