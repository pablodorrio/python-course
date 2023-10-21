import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module3_lesson6() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson6', 'lesson5');
    const nextPath = path.pathname.replace('lesson6', 'end');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    useEffect(() => {
        setLesson(6);
        setLessonTitle('Ejercicio Final');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <div className='exercise'>
                <p>
                    En este ejercicio se llevará a cabo la representación en dos dimensiones
                    del circuito de Nürburgring. La imagen en 2D adjunta en 
                    <Link to='https://www.racefans.net/wp-content/uploads/2020/10/07-Nurburgring-on-white-01.jpg' target='_blank'> este enlace </Link>
                    debería parecerse bastante a la producida en el programa. En dicha representación deberán
                    diseñarse dos líneas, una que represente la parte derecha de la pista y otra
                    que represente la parte izquierda. 
                    <br /> <br />
                    Se va a suponer que por dicho circuito tiene
                    que competir un coche autónomo, por ejemplo, el UM24. Para que esto sea posible,
                    es necesario que la línea de la derecha se represente por medio de conos
                    (o símbolos que se le parezcan) de color amarillo. La parte izquierda debe ser igual,
                    pero con conos azules. 
                    <br /> <br />
                    Dichos conos serán representados por coordenadas bidimensionales,
                    que deberán ser localizadas en dos arrays independientes para poder ser diferenciadas.
                    Asimismo, deberán ser nombradas como <b>Límite derecho</b> y <b>Límite izquierdo</b>. 
                    <br /> <br />
                    Posteriormente se deberán calcular las posiciones intermedias entre los conos, tomar una muestra de puntos
                    de las mismas y proceder al cálculo de una ruta que recorra el circuito sin salirse de los
                    límites del mismo (de la forma que se quiera, más o menos optimizada). 
                    <br /> <br />
                    La línea trazada deberá ser verde y continua (sin representación de puntos intermedios).
                    Deberá ser nombrada como <b>Trazada intermedia</b>.
                    <br /> <br />
                    El resultado final del ejercicio debe ser la representación en 2 dimensiones de las tres líneas, con sus respectivos nombres
                    mostrados en pantalla y un título que describa adecuado el proceso realizado.
                </p>
            </div>


            <br /> <br />
            <h3>Nota:</h3>
            <p>
                Teneis que entregar el código de los ejercicios finales  de los módulos 2 y 3 en dos carpetas comprimidas <b>.zip </b> 
                con la siguiente nomenclatura: <b>apellidos_nombre_ejercicio_final_2.zip</b> y <b>apellidos_nombre_ejercicio_final_3.zip</b>.
            </p>
            <p>Posteriormente teneis que entregarlo antes del domingo a las 23:59h al correo <b>pablo.dorrio.vazquez@uvigomotorsoport.com</b> </p>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module3_lesson6;