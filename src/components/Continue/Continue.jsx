import './Continue.css'
import { useLocalStorage } from '../../useLocalStorage'
import { Link } from 'react-router-dom';

function Continue() {
    const [module] = useLocalStorage('module', 0);
    const [moduleTitle] = useLocalStorage('moduleTitle', 'Module');
    const [lesson] = useLocalStorage('lesson', 0);
    const [lessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath] = useLocalStorage('lessonPath', '/');

    return (
        <div className={`continue-course-container ${module === 0 ? 'd-none' : ''}`}>
            <div className='continue-course'>
                <div className='continue-course-preview'>
                    <h6>Course</h6>
                    <h2>{moduleTitle}</h2>
                    {/* <Link to={lessonPath}>View all chapters<i className='fas fa-chevron-right'></i></Link> */}
                </div>
                <div className='continue-course-info'>
                    <div className='progress-container'>
                        <div className='progress'></div>
                        <span className='progress-text'>
                            6/9 Challenges
                        </span>
                    </div>
                    <h6>Chapter {lesson}</h6>
                    <h2>{lessonTitle}</h2>
                    <Link to={lessonPath} className='btn'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Continue;