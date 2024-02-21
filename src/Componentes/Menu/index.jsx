import React, { useState } from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    const [open, setOpen] = useState(false);

    function handleMenu() {
        setOpen(!open);
    }

    return (
        <nav>
            <ul className={open ? styles.hamburguerOpen : styles.menu}>
                <li className={open ? styles.itemOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/">Home</Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/sobre">Sobre</Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/comentarios">Comentários</Link>
                </li>
                <li className={open ? styles.itemOpen : styles.item}>
                    <Link className={open ? styles.linkOpen : styles.link} to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
