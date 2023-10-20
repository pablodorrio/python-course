import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module3_lesson3() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson3', 'lesson2');
    const nextPath = path.pathname.replace('lesson3', 'lesson4');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    import numpy as np
    `;

    const codeString2 = `
    import numpy as np

    a = np.array([1, 2, 3, 4])
    print(a)
    print(a.dtype)
    `;

    const codeString3 = `
    a = np.array([[1, 2, 3, 4], [6, 7, 8, 9]],dtype=float)
    print(a)
    `;

    const codeString4 = `
    import numpy as np

    arr = np.arange(0, 10, 2)
    print(arr)  # Salida: [0 2 4 6 8]
    `;

    const codeString5 = `
    print(np.eye(3))
    print(np.eye(3, 5))
    print(np.diag([1, 2, 3]))
    print(np.diag([1, 2, 3], 1))
    `;


    useEffect(() => {
        setLesson(3);
        setLessonTitle('Numpy');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <p>
                <b>NumPy</b> (Numerical Python) es la librería por excelencia para el manejo de datos númericos.
                Ofrece una amplia serie de herramientas para la creación y manejo de arrays numéricos
                multidimensionales.
                <br />
                Además permite hacer estas operaciones matemáticas muy rápido. Esto es debido a que está
                escrito en Python solo parcialmente, ya que la mayoría de las partes que requieren un
                cálculo rápido están escritas en C o C++
            </p>
            <CodeDisplay codeString={codeString1} language='python' />

            <h2>Creación de Arrays</h2>
            <p>
                Los arrays de numpy se crean a partir de listas de python. La función <b>np.array()</b> convierte
                una lista en un array de numpy. A diferencia de las listas, los arrays de numpy no pueden
                tener diferentes tipos de datos. Si la lista que se está convirtiendo tiene tanto enteros
                como flotantes, se convertiran todos los datos a flotantes.
            </p>
            <CodeDisplay codeString={codeString2} language='python' />

            <div className='exercise'>
                <h2>Ejercicio: creación de arrays</h2>
                <p>
                    Crea 3 arrays de numpy a partir de las siguientes listas y comprueba su tipo de dato:
                    <br />
                    <b>list1 = [1, 2, 3, 4, 5]</b>
                    <br />
                    <b>list2 = [1, 2, 3, 4, 5.0]</b>
                    <br />
                    <b>list3 = [1, 2, 3, 4, {"'a'"}]</b>
                </p>
            </div>
            <br /> <br />

            <h2>Arrays multidimensionales</h2>
            <p>
                Al declarar un array en NumPy, es posible especificar el tipo de dato de manera
                explícita utilizando el parámetro <b>dtype</b> en el constructor. NumPy está diseñado
                para manejar arrays multidimensionales; así que, si una lista que se convierte
                contiene sublistas, se generará un array de n dimensiones. Sin embargo, es crucial que
                todas las listas tengan una longitud consistente para que esto funcione adecuadamente.
            </p>
            <CodeDisplay codeString={codeString3} language='python' />

            <div className='exercise'>
                <h2>Ejercicio: arrays multidimensionales</h2>
                <p>
                    Por defecto los enteros en Python son de 32 bits.
                    Crea un array de dos dimensiones con 5 columnas y
                    3 filas de enteros de 16 bits.
                </p>
            </div>
            <br /> <br />

            <h2>Rangos</h2>
            <p>
                NumPy ofrece la función <b>arange()</b> para generar rangos de números. Esta función
                es muy similar a la función <b>range()</b> de Python, pero devuelve un array de numpy
                en lugar de una lista.
                <br />
                Además permite utilizar saltos de números decimales.
            </p>
            <CodeDisplay codeString={codeString4} language='python' />

            <h2>Arrays 2D</h2>
            <p>
                Para crear arrays 2D también existen una serie de funciones. <b>np.eye()</b>
                crea una matriz identidad de unas dimensiones determinadas. <b>np.diag()</b>
                crea una matriz cuadrada diagonal.
            </p>
            <CodeDisplay codeString={codeString5} language='python' />

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module3_lesson3;