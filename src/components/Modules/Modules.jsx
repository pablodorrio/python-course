import './Modules.css'

function Modules() {
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
                    <a href="#basic" className="cta">Start</a>
                </div>

                <div className="card">
                    <h3 className="card-heading">Intermediate</h3>
                    <h2 className="card-price">Advanced Python</h2>
                    <ul role="list" className="card-bullets flow">
                    <li>Por definir</li>
                    <li>Por definir</li>
                    </ul>
                    <a href="#pro" className="cta">Start</a>
                </div>

                <div className="card">
                    <h3 className="card-heading">Advanced</h3>
                    <h2 className="card-price">Computational Mathematics with Python</h2>
                    <ul role="list" className="card-bullets flow">
                    <li>Por definir</li>
                    <li>Por definir</li>
                    </ul>
                    <a href="#ultimate" className="cta">Start</a>
                </div>
                </div>
                
                <div className="overlay cards-inner"></div>
            </div>
        </div>
    )
}

export default Modules