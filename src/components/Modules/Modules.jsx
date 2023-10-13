import { Link } from 'react-router-dom'
import './Modules.css'
import { useLocalStorage } from '../../useLocalStorage'

function Modules() {
    const [module, setModule] = useLocalStorage('module', 0);

    return (
        <div className="modules-container">
            <h1 className="modules-container-heading">Módulos</h1>
            <div className="cards">
                <div className="cards-inner">
                    <div className="card">
                        <h3 className="card-heading">Basic</h3>
                        <h2 className="card-price">Python Basics</h2>
                        <ul role="list" className="card-bullets flow">
                            <li>Por definir</li>
                            <li>Por definir</li>
                        </ul>
                        <Link to="/module1/lesson1" className="cta" onClick={e => setModule(1)}>{module === 1 ? 'Continue' : 'Start'}</Link>
                    </div>

                    <div className="card">
                        <h3 className="card-heading">Intermediate</h3>
                        <h2 className="card-price">Advanced Python</h2>
                        <ul role="list" className="card-bullets flow">
                            <li>Por definir</li>
                            <li>Por definir</li>
                        </ul>
                        <Link to="/module2/lesson1" className="cta" onClick={e => setModule(2)}>{module === 2 ? 'Continue' : 'Start'}</Link>
                    </div>

                    <div className="card">
                        <h3 className="card-heading">Advanced</h3>
                        <h2 className="card-price">Computational Mathematics with Python</h2>
                        <ul role="list" className="card-bullets flow">
                            <li>Por definir</li>
                            <li>Por definir</li>
                        </ul>
                        <Link to="/module3/lesson1" className="cta" onClick={e => setModule(3)}>{module === 3 ? 'Continue' : 'Start'}</Link>
                    </div>
                </div>

                <div className="overlay cards-inner"></div>
            </div>
        </div>
    )
}

export default Modules;