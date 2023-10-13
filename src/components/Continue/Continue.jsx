import './Continue.css'
import { useLocalStorage } from '../../useLocalStorage'

function Continue() {
    const [module] = useLocalStorage('module', 0);

    return (
        <div className={`continue-course-container ${module === 0 ? 'd-none' : ''}`}>
            <div className='continue-course'>
                <div className='continue-course-preview'>
                    <h6>Course</h6>
                    <h2>Python Basics</h2>
                    <a href='#'>View all chapters <i className='fas fa-chevron-right'></i></a>
                </div>
                <div className='continue-course-info'>
                    <div className='progress-container'>
                        <div className='progress'></div>
                        <span className='progress-text'>
                            6/9 Challenges
                        </span>
                    </div>
                    <h6>Chapter 4</h6>
                    <h2>Callbacks & Closures</h2>
                    <button className='btn'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Continue;