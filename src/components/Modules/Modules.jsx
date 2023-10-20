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
                            <li>Excepciones</li>
                            <li>Métodos estáticos y especiales</li>
                            <li>Polimorfismo</li>
                            <li>Bucles avanzados</li>
                            <li>Módulos y pip</li>
                            <li>Mantenibilidad del código</li>
                        </ul>
                        <Link to="/module2/lesson1" className="cta">{module === 2 ? 'Continue' : 'Start'}</Link>
                    </div>

                    <div className="card">
                        <h3 className="card-heading">Basic</h3>
                        <h2 className="card-price">Computational Mathematics with Python</h2>
                        <ul role="list" className="card-bullets flow">
                            <li>Archivos</li>
                            <li>Slicing de listas</li>
                            <li>Numpy</li>
                            <li>Matplotlib</li>
                            <li>SciPy</li>
                        </ul>
                        <Link to="/module3/lesson1" className="cta">{module === 3 ? 'Continue' : 'Start'}</Link>
                    </div>
                </div>

                <div className="overlay cards-inner"></div>
            </div>
        </div>
    )
}

export default Modules;