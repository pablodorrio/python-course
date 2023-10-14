import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module3_lesson2() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson2', 'lesson1');
    const nextPath = path.pathname.replace('lesson2', 'end');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    useEffect(() => {
        setLesson(2);
        setLessonTitle('Lesson 2');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <h2>1.1 Esto es el ejemplo</h2>

            <CodeDisplay />

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module3_lesson2;