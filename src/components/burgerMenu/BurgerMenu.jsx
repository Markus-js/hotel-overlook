import Style from './BurgerMenu.module.scss';

const BurgerMenu = (props) => {
    const menuActive = props.menuActive;
    const setMenuActive = props.setMenuActive;

    const handleClick = () => {
        setMenuActive(!menuActive)
    }

    return (
        <svg id="menu" viewBox="0 0 250 250" className={menuActive ? `${Style.burgerMenu} ${Style.active}` : Style.burgerMenu} onClick={(e) => { handleClick() }}>
            <line className={Style.burgerMenu_topLine} x1="62.5" y1="75" x2="187.5" y2="75"/>
            <line className={Style.burgerMenu_bottomLine} x1="187.5" y1="175" x2="62.5" y2="175"/>
            <line className={Style.burgerMenu_crossLine} x1="62.5" y1="75" x2="187.5" y2="175"/>
            <path className={Style.burgerMenu_longPath} d="M62.5,125h175A112.48,112.48,0,1,1,213,55h0L62.5,175"/>
        </svg>
    )
}

export default BurgerMenu;