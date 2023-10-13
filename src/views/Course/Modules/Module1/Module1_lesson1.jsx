import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';


function Module1_lesson1() {
    const path = useLocation();
    const nextPath = path.pathname.replace('lesson1', 'lesson2');

    const [module, setModule] = useLocalStorage('module', 0);
    const [lesson, setLesson] = useLocalStorage('lesson', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('path', '/');

    useEffect(() => {
        setModule(1);
        setLesson('Lesson 1');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lesson}`}</h1>

            <h2>1.1 Esto es el ejemplo</h2>

            <CodeDisplay />

            <Button next={false} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson1;