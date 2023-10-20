import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module2_lesson4() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson4', 'lesson3');
    const nextPath = path.pathname.replace('lesson4', 'lesson5');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    fruits = ["manzana", "plátano", "cereza", "uva"]

    for i, fruit in enumerate(frutas):
        print(f"Índice {i}: {fruit}")
    `;

    const codeString2 = `
    students = ["Pedro", "María", "Juan", "Ana"]
    grades = [3, 10, 8, 5]

    # Tu código aquí
    `;

    const codeString3 = `
    l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        
    print([x for x in l if x % 2 == 0])
    print([float(x) for x in l if x % 3 == 0])
    `;

    useEffect(() => {
        setLesson(4);
        setLessonTitle('Bucles avanzados');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <h2>Enumerate</h2>
            <p>Cuando dentro de un bucle <b>for</b> utilizamos la funcion <b>range()</b>,
                en verdad estamos recorriendo una lista de elementos.
                El bucle <b>for</b> siempre toma como control una lista. En
                ciertos contextos es necesario conocer el índice de la
                lista que se está recorriendo en el bucle. Esto se puede
                hacer mediante la funcion <b>enumerate()</b>
            </p>
            <CodeDisplay codeString={codeString1} language='python' />

            <div className='exercise'>
                <h2>Ejercicio: enumerate</h2>
                <p>Tienes una lista de estudiantes y sus calificaciones correspondientes.
                    Tu tarea es imprimir el nombre de cada estudiante junto con su
                    posición en la lista y su calificación usando la funcion <b>enumerate()</b>.
                </p>
                <CodeDisplay codeString={codeString2} language='python' />
            </div>
            <br /> <br />

            <h2>Compresión de listas</h2>
            <p>
                La compresión de listas es una forma de construir una nueva lista aplicando
                una expresión a cada elemento de una secuencia (o secuencias), filtrando
                los resultados según ciertas condiciones.
                Las funcinonalidades principales de la comprensión son la conversión y el filtrado.
            </p>
            <p>
                Tiene la ventaja de que suelen ser ligeramente más rápidas que los bucles equivalentes, ya que están optimizadas en Python.
            </p>
            <CodeDisplay codeString={codeString3} language='python' />


            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module2_lesson4;