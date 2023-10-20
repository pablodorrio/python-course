import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module2_lesson5() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson5', 'lesson4');
    const nextPath = path.pathname.replace('lesson5', 'lesson6');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    useEffect(() => {
        setLesson(5);
        setLessonTitle('Módulos y pip');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <br />

            <h2>Importar módulos</h2>
            <p>
                En Python, utilizas la palabra clave <b>import</b> para hacer que el código de un módulo
                esté disponible en otro. Las importaciones en Python son importantes para estructurar tu código
                de manera efectiva.
                <br />
                Usar las importaciones correctamente te hará más productivo, permitiéndote reutilizar
                código mientras mantienes tus proyectos fácilmente mantenibles.
            </p>
            <p>Además para usar una librería previamente instalada, también necesitas importarla.</p>

            <h2>Instalación de librerías</h2>
            <p>
                Para instalar una librería que no esté instalada en Python por defecto,
                se utiliza el instalador de PIP, asociado directamente al lenguaje.
                <br />
                Para comprobar si PIP está contenido en la instalación de Python, se
                utiliza el comando <b>python -m pip</b> en la consola.
                <br />
                Para instalar paquetes se utiliza el comando <b>python -m pip install {'<package>'}</b>,
                susituyendo {'<package>'} por el nombre del paquete que se quiere instalar.
            </p>

            <div className='exercise'>
                <h2>Para saber más...</h2>
                <p>
                    Ahora que ya sabes acerca de programación orientada a objetos
                    e importar librerías, investiga acerca del módulo ABC.
                </p>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module2_lesson5;