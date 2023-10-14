import './Congratulations.css'

function Congratulations({ moduleTitle }) {
    return (
        <div className="congratulations-container">
            <h1>{moduleTitle}</h1>
            <h3 className='span loader'>
                <span>M</span>
                <span>Ó</span>
                <span>D</span>
                <span>U</span>
                <span>L</span>
                <span>O</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>I</span>
                <span>N</span>
                <span>A</span>
                <span>L</span>
                <span>I</span>
                <span>Z</span>
                <span>A</span>
                <span>D</span>
                <span>O</span>
            </h3>
            <img src='/medal.svg' alt="medal" />
        </div>
    )
}

export default Congratulations;