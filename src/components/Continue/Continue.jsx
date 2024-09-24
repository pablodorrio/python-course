import './Continue.css';
import { useLocalStorage } from '../../useLocalStorage';
import { Link } from 'react-router-dom';

function Continue() {
    const [module] = useLocalStorage('module', 0);
    const [moduleTitle] = useLocalStorage('moduleTitle', 'Module');
    const [lesson] = useLocalStorage('lesson', 0);
    const [lessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath] = useLocalStorage('lessonPath', '/');

    let totalChapters = 0;

    switch (module) {
        case 1:
            totalChapters = 9;
            break;
        case 2:
            totalChapters = 8;
            break;
        case 3:
            totalChapters = 7;
            break;
        default:
            totalChapters = 0;
    }

    // Calcular el porcentaje de progreso
    const progressPercentage = totalChapters > 0 ? (lesson / totalChapters) * 100 : 0;

    return (
        <div className={`continue-course-container ${module === 0 ? 'd-none' : ''}`}>
            <div className='continue-course'>
                <div className='continue-course-preview'>
                    <h6>Módulo</h6>
                    <h2>{moduleTitle}</h2>
                    {/* <Link to={lessonPath}>View all chapters<i className='fas fa-chevron-right'></i></Link> */}
                </div>
                <div className='continue-course-info'>
                    <div className='progress-container'>
                        <div className='progress'>
                            <div 
                                className='progress-filled' 
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                        <span className='progress-text'>
                            {lesson} / {totalChapters} Capítulos
                        </span>
                    </div>
                    <h6>Capítulo {lesson} de {totalChapters}</h6>
                    <h2>{lessonTitle}</h2>
                    <Link to={lessonPath} className='btn'>Continuar</Link>
                </div>
            </div>
        </div>
    )
}

export default Continue;
