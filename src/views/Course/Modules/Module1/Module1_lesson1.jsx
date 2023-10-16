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
        setLessonTitle('Introducción a Python');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <p>Python es un lenguaje de programación de alto nivel que prioriza la claridad y legibilidad de su código.
                Es interpretado y dinámico (aunque también es posible añadir verificacadores estáticas de código).
                Además, es un lenguaje multiparadigma, que combina aspectos de la programación orientada a objetos, la programación imperativa y, en cierta medida, la programación funcional.</p>

            <h2>Usos</h2>

            <p>Por último, Python es un lenguaje multipropósito, es decir puedes usarlo en una gran variedad de campos como la programación web, IA, ciencia de datos, hacking...</p>

            <Button next={false} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson1;