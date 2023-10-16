import { Link } from 'react-router-dom'
import './Modules.css'
import { useLocalStorage } from '../../useLocalStorage'

function Modules() {
    const [module] = useLocalStorage('module', 0);

    return (
        <div className={`modules-container ${module === 0 ? 'continue-hidden' : ''}`}>
            <h1 className="modules-container-heading">Módulos</h1>
            <div className="cards">
                <div className="cards-inner">
                    <div className="card">
                        <h3 className="card-heading">Basic</h3>
                        <h2 className="card-price">Python Basics</h2>
                        <ul role="list" className="card-bullets flow">
                            <li>Variables y tipos de datos</li>
                            <li>Operadores</li>
                            <li>Condicionales</li>
                            <li>Bucles</li>
                            <li>Funciones</li>
                            <li>Clases y objetos</li>
                        </ul>
                        <Link to="/module1/lesson1" className="cta">{module === 1 ? 'Continue' : 'Start'}</Link>
                    </div>

                    <div className="card">
                        <h3 className="card-heading">Intermediate</h3>
                        <h2 className="card-price">Python Intermediate</h2>
                        <ul role="list" className="card-bullets flow">
                            <li>Próximamente...</li>
                        </ul>
                        <Link /* to="/module2/lesson1" */ className="cta">{module === 2 ? 'Continue' : 'Próximamente'}</Link>
                    </div>

                    <div className="card">
                        <h3 className="card-heading">Advanced</h3>
                        <h2 className="card-price">Computational Mathematics with Python</h2>
                        <ul role="list" className="card-bullets flow">
                            <li>Próximamente...</li>
                        </ul>
                        <Link /* to="/module3/lesson1" */ className="cta">{module === 3 ? 'Continue' : 'Próximamente'}</Link>
                    </div>
                </div>

                <div className="overlay cards-inner"></div>
            </div>
        </div>
    )
}

export default Modules;