import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module1_lesson3() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson3', 'lesson2');
    const nextPath = path.pathname.replace('lesson3', 'lesson4');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    var_1 = 10
    var_2 = 3

    print(var_1 + var_2)  # Salida: 13 
    print(var_1 - var_2)  # Salida: 7
    print(var_1 * var_2)  # Salida: 30
    print(var_1 / var_2)  # Salida: 3.3333333333333335
    print(var_1 // var_2) # Salida: 3.3333333333333335
    print(var_1 % var_2)  # Salida: 1
    print(var_1 ** var_2) # Salida: 1000
    `;

    const codeString2 = `
    x = 5
    y = 8

    print(x == y)  # Salida: False
    print(x != y)  # Salida: True
    print(x < y)   # Salida: True
    print(x > y)   # Salida: False
    `;

    const codeString3 = `
    x = True
    y = False

    print(x and y)  # Salida: False
    print(x or y)   # Salida: True
    print(not x)    # Salida: False
    `;

    const codeString4 = `
    var = 5
    var += 3  # Es equivalente a var = var + 3

    print(var)  # Salida: 8
    `;

    useEffect(() => {
        setLesson(3);
        setLessonTitle('Operadores');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>Los operadores son símbolos especiales en Python que llevan a cabo operaciones aritméticas o lógicas. Estos operadores se aplican sobre uno o más valores (conocidos como operandos) para producir un resultado.</p>

            <h2>Operadores Aritméticos</h2>
            <p>Estos operadores se utilizan para realizar operaciones matemáticas básicas:</p>
            <ul>
                <li><b>+</b> : Suma</li>
                <li><b>-</b> : Resta</li>
                <li><b>*</b> : Multiplicación</li>
                <li><b>/</b> : División</li>
                <li><b>//</b> : División entera</li>
                <li><b>%</b> : Módulo</li>
                <li><b>**</b> : Potencia</li>
            </ul>
            <CodeDisplay codeString={codeString1} />

            <h2>Operadores de Comparación</h2>
            <p>Estos operadores se utilizan para comparar dos valores:</p>
            <ul>
                <li><b>==</b> : Igual a</li>
                <li><b>!=</b> : Distinto de</li>
                <li><b>{'<'}</b> : Menor que</li>
                <li><b>{'>'}</b> : Mayor que</li>
                <li><b>{'<='}</b> : Menor o igual que</li>
                <li><b>{'>='}</b> : Mayor o igual que</li>
            </ul>
            <CodeDisplay codeString={codeString2} />

            <h2>Operadores Lógicos</h2>
            <p>Son utilizados para combinar condiciones:</p>
            <ul>
                <li><b>and</b> : Devuelve True si ambas condiciones son verdaderas</li>
                <li><b>or</b> : Devuelve True si al menos una de las condiciones es verdadera</li>
                <li><b>not</b> : Invierte el resultado, devuelve False si el resultado es verdadero</li>
            </ul>
            <CodeDisplay codeString={codeString3} />

            <h2>Operadores de Asignación</h2>
            <p>Estos operadores se utilizan para asignar valores a variables:</p>
            <ul>
                <li><b>=</b> : Asignación</li>
                <li><b>+=</b> : Suma y asignación</li>
                <li><b>-=</b> : Resta y asignación</li>
                <li><b>*=</b> : Multiplicación y asignación</li>
                <li><b>/=</b> : División y asignación</li>
                <li><b>//=</b> : División entera y asignación</li>
                <li><b>%=</b> : Módulo y asignación</li>
                <li><b>**=</b> : Potencia y asignación</li>
            </ul>
            <CodeDisplay codeString={codeString4} />

            <div className='exercise'>
                <h2>Ejercicio: operadores</h2>
                <p>Dadas las siguientes coordenadas que representan puntos, calcula el módulo del vector que forman (longitud del segmento).</p>
                <ul>
                    <b>point_1 = (0, 1)</b>
                    <br />
                    <b>point_2 = (1, 1)</b>
                </ul>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson3;