import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module1_lesson2() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson2', 'lesson1');

    const [lesson, setLesson] = useLocalStorage('lesson', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('path', '/');

    useEffect(() => {
        setLesson('Lesson 2');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lesson}`}</h1>

            <h2>1.1 Esto es el ejemplo</h2>

            <CodeDisplay />

            <Button next={false} path={prevPath} />
            <Button next={true} />
        </div>
    );
}

export default Module1_lesson2;