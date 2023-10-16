import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module1_lesson2() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson2', 'lesson1');
    const nextPath = path.pathname.replace('lesson2', 'lesson3');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    name = "John"
    age = 25
    is_student = True
    `;

    const codeString2 = `
    my_int = 10
    my_float = 3.14
    my_str = "Hola, mundo!"
    my_bool = False
    `;

    const codeString3 = `
    var = 10
    print(var)  # Salida: 10

    var = "Diez"
    print(var)  # Salida: Diez
    `;

    const codeString4 = `
    my_tuple = (1, 2, 3)
    my_list = [1, 2, 3]
    my_set = {'Manzana', 'Banana', 'Cereza'}
    my_dict = {'nombre': 'John', 'apellido': 'Doe', 'edad': 25}
    `;

    useEffect(() => {
        setLesson(2);
        setLessonTitle('Variables y tipos de datos');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>
                En programación, una variable es un espacio de memoria reservado para almacenar un valor o una referencia. Este espacio se asocia con un nombre simbólico, que es la manera en que nos referimos a dicho valor durante la ejecución del programa. En Python, las variables son dinámicas, lo que significa que no es necesario declarar un tipo de dato específico para ellas; el tipo de dato se determina en tiempo de ejecución según el valor que se le asigne.
            </p>

            <h2>Declaración y Asignación</h2>
            <p>
                En Python, declarar una variable es tan simple como escribir el nombre de la variable seguido de un signo igual (=) y el valor que deseas asignarle:
            </p>
            <CodeDisplay codeString={codeString1} />

            <h2>Tipos de datos básicos</h2>
            <p>Aunque Python es dinámico y no requiere la declaración explícita de tipos de datos, aquí hay algunos tipos de datos comunes:</p>
            <ul>
                <li><b>int</b> (inmutable): Números enteros.</li>
                <li><b>float</b> (inmutable): Números con decimales.</li>
                <li><b>str</b> (inmutable): Cadenas de texto.</li>
                <li><b>bool</b>(inmutable): Valores booleanos (True o False).</li>
            </ul>
            <CodeDisplay codeString={codeString2} />

            <h2>Reasignación de variables</h2>
            <p>Uno de los beneficios de las variables dinámicas es la capacidad de reasignar un valor de un tipo de dato diferente al que tenía originalmente:</p>
            <CodeDisplay codeString={codeString3} />

            <div className='exercise'>
                <h2>Ejercicio: tipo de datos simple</h2>
                <p>Crea una variable de un número complejo y muestra por pantalla el tipo de dato de la variable.</p>
            </div>

            <h2>Tipos de datos avanzados</h2>
            <p>Además de los tipos de datos básicos, Python también tiene tipos de datos avanzados:</p>
            <ul>
                <li><b>tuple</b> (inmutable): Colección ordenada de elementos.</li>
                <li><b>list</b> (mutable): Colección ordenada de elementos.</li>
                <li><b>set</b> (mutable): Colección no ordenada de elementos únicos.</li>
                <li><b>dict</b> (mutable): Colección no ordenada de pares clave-valor.</li>
            </ul>
            <CodeDisplay codeString={codeString4} />

            <h2>Convención de nombres</h2>
            <p>Al nombrar variables en Python, es recomendable seguir ciertas convenciones:</p>
            <ul>
                <li>Los nombres de variables deben ser descriptivos y es preferible que estén en inglés.</li>
                <li>Los nombres de variables deben estar en minúsculas (mayúscula para constantes).</li>
                <li>Los nombres de variables pueden contener letras, números y guiones bajos.</li>
                <li>Evitar uso de palabras reservadas</li>
                <li>Uso de snake_case <italic>(Snake case es la convención que compone las palabras separadas por barra baja (underscore) en vez de espacios y con la primera letra de cada palabra en minúscula. Ejemplo: this_is_a_variable.)</italic></li>
            </ul>
            <br /> <br />

            <div className='exercise'>
                <h2>Ejercicio: tipos de datos avanzados</h2>
                <p>Crea tres variables (nómbralas de una forma correcta) que contengan los siguientes datos:</p>
                <ul>
                    <li>Una tupla con un rango de números</li>
                    <li>Una lista con todos los datos básicos.</li>
                    <li>Un set con los booleanos True, True, False.</li>
                    <li>Un diccionario con 3 pares clave-valor cuyos valores sean tres tipos de datos avanzados diferentes.</li>
                </ul>
                <p>Imprime por pantalla los datos y razona el resultado.</p>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson2;