import { useState } from 'react';
import styles from'./TopMenu.module.scss';

const TopMenu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return  <>
                <button type="button" className={styles.menu__button} onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </button>
                <nav className={`${styles.menu} ${menuOpen ? styles.menuOpen : styles.menuClose}`}>
                    <ul className={styles.menu__list}>
                        {
                            props.items && props.items.map((item, index) => {
                                return <li key={`menu_item_${index}`} className={`${styles.menu__item} ${index == 0 ? styles.menu__itemActive : ''}`}><a href={item.url}>{item.label}</a></li>;
                            })
                        }
                    </ul>
                </nav>
            </>
} 

export default TopMenu;