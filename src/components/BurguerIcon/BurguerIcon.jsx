import './BurguerIcon.css'

function BurguerIcon({ clicked, handleClick }) {
    return (
        <div onClick={handleClick} className={`icon nav-icon ${clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurguerIcon