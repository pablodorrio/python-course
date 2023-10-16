import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module1_lesson6() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson6', 'lesson5');
    const nextPath = path.pathname.replace('lesson6', 'lesson7');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    def greet(nombre):
        print(f"Hola, {nombre}!")

    greet('Juan')
    `;

    const codeString2 = `
    def operations(var_1, var_2):
        return var_1 + var_2, var_1 - var_2

    num_1, num_2 = operations(5, 3)
    `;

    const codeString3 = `
    def funcion(param_1, param_2 = 100, *args):
        print(param_1)
        print(param_2)
        print(args)

    funcion(1, 2, 3, 4, 5)
    `;

    useEffect(() => {
        setLesson(6);
        setLessonTitle('Funciones');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>Las funciones son bloques de código reutilizables que realizan una tarea específica. Las funciones se definen usando la palabra clave <b>def</b> seguido por el nombre de la función y entre paréntesis la lista de parámetros. Finalmente se escriben los dos puntos y a continuación va el bloque de código tabulado.</p>
            <p>Se llaman por su nombre seguido de paréntesis</p>
            <CodeDisplay codeString={codeString1} />

            <h2>Retorno de Valores</h2>
            <p>Las funciones pueden devolver valores utilizando la palabra clave <b>return</b>. Estas pueden devolver múltiples valores separados por comas.</p>
            <CodeDisplay codeString={codeString2} />
            <p>Las funciones siempre devuelven un valor, incluso si no tienen sentencia <b>return</b>, el valor sería <b>None</b>.</p>

            <h2>Parámetros</h2>
            <p>Los parámetros son variables que se pasan a la función.</p>
            <p>Si no sabemos el número de argumentos con los que se va a llamar a la función, podemos utilizar el operador <b>*</b> para indicar que se pasan como argumentos todos los que se quieran.</p>
            <p>Podemos declarar una función con valores por defecto para los parámetros con el operador <b>=</b></p>
            <CodeDisplay codeString={codeString3} />
            <li>En Python todos los parámetros son pasados por referencia, en el sentido de que todas las variables son referencias (punteros), lo que pasa es que al pasarlas como parámetros se crea una copia de la referencia. Esto no significa que por el hecho de estar {'"apuntando"'} al mismo objeto, si se modifica uno se modifique el otro, esto solo ocurre con los tipos mutables.</li>
            <br /> <br /> <br />

            <div className='exercise'>
                <h2>Ejercicio: funciones</h2>
                <p>Crea una función que defina una multiplicación con únicamente el operador de suma</p>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson6;