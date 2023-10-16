import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module1_lesson8() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson8', 'lesson7');
    const nextPath = path.pathname.replace('lesson8', 'end');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    useEffect(() => {
        setLesson(8);
        setLessonTitle('Ejercicio Final');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <div className='exercise'>
                <h2>Conversión de Cuaterniones a Ángulos de Euler con la Clase Quaternions</h2>
                <p>La representación de un cuaternión puede ser utilizada para describir una
                    rotación en el espacio tridimensional. Es común convertir entre cuaterniones
                    y ángulos de Euler (rotaciones alrededor de ejes individuales) en aplicaciones
                    como la robótica y gráficos por computadora.</p>
                <p>Esto se utiliza mucho al trabajar con orientaciones. Diseña una clase llamada
                    Quaternions que facilite la transformación y manipulación de orientaciones:</p>


                <h3>Métodos</h3>
                <ul>
                    <li>Constructor: Debe aceptar cuatro argumentos float (en el orden w, x, y, z) que representen los coeficientes del cuaternión.</li>
                    <li>Getters y Setters</li>
                    <li>Conversión de cuaternión a ángulos de Euler</li>
                </ul>
                <br /> <br />

                <h3>Conversión de cuaternión a ángulos de Euler</h3>
                <p>El método debe devolver: </p>
                <ul>
                    <li>value0: Roll value.</li>
                    <li>value1: Pitch value.</li>
                    <li>value2: Yaw value.</li>
                    {/* <li>radian: Whether the angle is in radian or degree. Default: True</li> */}
                </ul>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson8;