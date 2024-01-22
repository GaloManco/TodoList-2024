import styles from './Header.module.css';
import fogueteLogo from './assets/Layer 2.svg';




export function Header() {
  
    return (
        <>
            <header className={styles.header}>
                <div className={styles.boxLogo}>
                    <img src={fogueteLogo} alt="logo"/>
                    <strong>to<span>do</span></strong>
                </div>
            </header>


        
        </>
    )

}