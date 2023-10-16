import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module1_lesson5() {
const path = useLocation();
    const prevPath = path.pathname.replace('lesson5', 'lesson4');
    const nextPath = path.pathname.replace('lesson5', 'lesson6');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    for i in range(5):
        print(i)
    
    print('He salido del bucle!')
    `;

    const codeString2 = `
    i = 0

    while i < 5:
        print(i)
        i += 1

    print('He salido del bucle!')
    `;

    useEffect(() => {
        setLesson(5);
        setLessonTitle('Bucles');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>Los bucles permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición específica.</p>
            <p>Python ofrece dos tipos principales de bucles: <b>for</b> y <b>while</b>.</p>

            <h2>Bucle for</h2>
            <p>El bucle <b>for</b> es útil para iterar sobre una secuencia (como una lista, tupla, cadena o rango).</p>
            <CodeDisplay codeString={codeString1} />

            <h2>Bucle while</h2>
            <p>El bucle <b>while</b> comprueba una condición inicial y ejecuta el código dentro de su bloque mientras esta se cumpla.</p>
            <CodeDisplay codeString={codeString2} />

            <div className='exercise'>
                <h2>Ejercicio</h2>
                <p>Usando un bucle for imprime los números del 0 al 100 en saltos de 3 en 3.</p>
                <italic>Restricción: no puedes usar condicionales.</italic>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson5;