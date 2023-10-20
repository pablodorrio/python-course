import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module1_lesson8() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson7', 'lesson6');
    const nextPath = path.pathname.replace('lesson7', 'end');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    useEffect(() => {
        setLesson(7);
        setLessonTitle('Ejercicio Final');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <div className='exercise'>
                <p>
                    Con tus nuevos conocimietos utiliza todos los elementos que creas necesarios
                    para mejorar la clase Quaternions del ejercicio final del módulo anterior del curso.
                </p>

                <p>
                    Obligatoriamente debes usar al menos un método especial (sin incluir el constructor) 
                    y anotaciones de tipo.
                </p>
                <p>Por último debes llamar a esta clase en un módulo distinto.</p>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson8;