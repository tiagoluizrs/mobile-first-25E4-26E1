import styles from './BottomMenu.module.scss';

const BottomMenu = (props) => {
    return  <ul>
                {
                    props.items && props.items.map((item, index) => {
                        return <li className={styles.footer__item} key={`menu_footer_item_${index}`}>{item.label}</li>
                    })
                }
            </ul>
} 

export default BottomMenu;