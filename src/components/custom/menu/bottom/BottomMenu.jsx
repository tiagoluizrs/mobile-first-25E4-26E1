import './BottomMenu.scss';

const BottomMenu = (props) => {
    return  <ul>
                {
                    props.items && props.items.map((item) => {
                        return <li>{item.label}</li>
                    })
                }
            </ul>
} 

export default BottomMenu;