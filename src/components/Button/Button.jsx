import './Button.css';
import { Link } from 'react-router-dom';

function Button({ next, path = '/' }) {
    return (
        <div className={`svg-wrapper ${next ? 'right' : 'left'}`}>
            <svg height='40' width='150' xmlns='http://www.w3.org/2000/svg'>
                <rect id='shape' height='40' width='150' />
                <foreignObject x='0' y='0' width='150' height='40'>
                    <div xmlns='http://www.w3.org/1999/xhtml'>
                        <Link to={`${path}`} className='Link'><span className='spot'></span>
                            {next ? 'Next' : 'Back'}
                        </Link>
                    </div>
                </foreignObject>
            </svg>
        </div>
    )
}

export default Button;
