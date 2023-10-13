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
    const [moduleTitle, setModuleTitle] = useLocalStorage('moduleTitle', 'Module');
    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    useEffect(() => {
        setModule(1);
        setModuleTitle('Python Basics');
        setLesson(1);
        setLessonTitle('Lesson 1');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <h2>1.1 Esto es el ejemplo</h2>

            <CodeDisplay />

            <Button next={false} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson1;