import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module3_lesson2() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson2', 'lesson1');
    const nextPath = path.pathname.replace('lesson2', 'lesson3');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    list_ = [0, 1, 2, 3, 4, 5]
    sublist = list_[:3]
    # Resultado: [0, 1, 2]
    `;

    const codeString2 = `
    sublist = list_[::2]
    # Resultado: [0, 2, 4]
    `;

    const codeString3 = `
    inverted = list_[::-1]
    # Resultado: [5, 4, 3, 2, 1, 0]
    `;


    useEffect(() => {
        setLesson(2);
        setLessonTitle('Slicing de listas');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <p>
                El {'"slicing"'} es una característica de Python que permite
                obtener subconjuntos de una lista. Es especialmente útil para
                acceder a segmentos específicos de datos de manera eficiente.
            </p>

            <h2>Sintaxis básica</h2>
            <p>
                La sintaxis general para el slicing de listas es <b>lista[inicio:final:pasos]</b>, donde:
            </p>
            <ul>
                <li><b>inicio</b>: Es el índice del primer elemento que deseamos en nuestra sublista.</li>
                <li><b>final</b>: Es el índice del elemento hasta el cual deseamos llegar (sin incluirlo).</li>
                <li><b>pasos:</b> Indica cada cuántos elementos queremos seleccionar un valor.</li>
                <p>Consideraciones:</p>
                <li>Si se omite el valor de <b>inicio</b> o <b>final</b>, se asume que es el inicio o el final de la lista, respectivamente.</li>
                <li>Si se omite <b>pasos</b>, se asume un paso de 1.</li>
                <li>Se pueden usar índices negativos para contar desde el final de la lista.</li>
            </ul>

            <h2>Ejemplos</h2>
            <p>Para obtener los primeros tres elementos de una lista:</p>
            <CodeDisplay codeString={codeString1} />

            <p>Para obtener elementos con un paso de 2:</p>
            <CodeDisplay codeString={codeString2} />

            <p>Para invertir una lista:</p>
            <CodeDisplay codeString={codeString3} />

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module3_lesson2;