import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module1_lesson4() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson4', 'lesson3');
    const nextPath = path.pathname.replace('lesson4', 'lesson5');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    variable = 4
    
    if variable < 0:
      print("El numero es negativo")
    
    elif variable % 2 == 0:
      print("El numero es par") 

    else:
        print("El numero es impar")
    `;

    useEffect(() => {
        setLesson(4);
        setLessonTitle('Condicionales');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>Los condicionales permiten a los programas tomar decisiones y ejecutar diferentes secuencias de instrucciones según ciertas condiciones. En Python, las estructuras condicionales se representan principalmente a través de las palabras clave <b>if</b>, <b>elif</b> y <b>else</b>.</p>

            <h2>Uso de los condicionales</h2>
            <p>A diferencia de lenguajes como C, donde es necesario delimitar la condición de una sentencia de decisión entre paréntesis (<b>{'if (condicion) { ... }'}</b>), en Python no es necesario usar paréntesis para la condición. Además, tampoco se utilizan llaves { } para delimitar el bloque de código que se debe ejecutar. En su lugar, se emplea la indentación, precedida por dos puntos <b>:</b></p>
            <p>Esta característica de Python enfatiza la legibilidad del código y la importancia de mantener una estructura coherente.</p>
            <CodeDisplay codeString={codeString1} />

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson4;