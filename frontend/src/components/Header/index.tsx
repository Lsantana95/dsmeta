import logo from '../../assets/img/logo.svg' 
import './styles.css' 

function Header() {

    return (
        <> 
            <header>
                <div className="dsmeta-logo-container">
                    <img src= {logo} alt="logo DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por 
                        <a href="https://github.com/Lsantana95" target="_blank">Lsantana95</a>
                    </p>
                </div>
            </header>
        </>   
    )
}

export default Header