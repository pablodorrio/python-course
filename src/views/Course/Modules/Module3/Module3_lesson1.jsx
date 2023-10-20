import '../../Course.css';
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module3_lesson1() {
    const path = useLocation();
    const nextPath = path.pathname.replace('lesson1', 'lesson2');

    const [module, setModule] = useLocalStorage('module', 0);
    const [moduleTitle, setModuleTitle] = useLocalStorage('moduleTitle', 'Module');
    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    file = open('mi_archivo.txt', 'r')  # 'r' indica modo lectura
    # Realizar operaciones sobre el archivo
    f.close()
    `;

    const codeString2 = `
    contenido = f.read()
    `;

    const codeString3 = `
    f = open('mi_archivo.txt', 'w')
    f.write("Hola, Mundo!")
    f.close()
    `;

    const codeString4 = `
    with open('mi_archivo.txt', 'r') as f:
        contenido = f.read()
    
    # Aquí, el archivo ya está cerrado
    `;

    useEffect(() => {
        setModule(3);
        setModuleTitle('Computational Mathematics with Python');
        setLesson(1);
        setLessonTitle('Archivos');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>El manejo de archivos es fundamental en cualquier lenguaje de programación,
                y Python ofrece herramientas integradas simples pero poderosas para leer y
                escribir archivos. A continuación, abordaremos las operaciones más comunes
                relacionadas con archivos en Python.
            </p>

            <h2>Abrir y cerrar un archivo</h2>
            <p>
                El primer paso para trabajar con un archivo es abrirlo. Esto se hace con
                la función integrada open(). La función open() devuelve un objeto de archivo,
                que tiene métodos y atributos para leer, escribir y manipular el archivo.
            </p>
            <p>
                Es muy importante cerrar el archivo cuando hayamos terminado con él ( método <b>close()</b> ).
                <br />
                Esto es esencial para asegurar la integridad de los datos ya que las
                operaciones de lectura y escritura se realizan primero en un búfer en
                memoria. Si no se cierra un archivo, los datos en el búfer pueden no
                sincronizarse con el almacenamiento, resultando en pérdida de datos.
            </p>
            <CodeDisplay codeString={codeString1} />

            <h2>Leer un archivo</h2>
            <p>Una vez abierto un archivo en modo lectura, hay varias formas de obtener su contenido:</p>
            <ul>
                <li><b>read()</b>: devuelve una cadena con el contenido completo del archivo.</li>
                <li><b>readline()</b>: devuelve la siguiente línea del archivo.</li>
                <li><b>readlines()</b>: devuelve una lista de las líneas del archivo.</li>
            </ul>
            <CodeDisplay codeString={codeString2} />

            <h2>Escribir en un archivo</h2>
            <p>
                Para escribir en un archivo, primero debes abrirlo en modo escritura ({"'w'"})
                o en modo añadir al final ({"'a'"}):
            </p>
            <CodeDisplay codeString={codeString3} />

            <p>
                Los modos disponibles son los siguientes: <b>t</b> (texto), <b>b</b> (binario),
                <b>r</b> (lectura), <b>w</b> (escritura), <b>a</b> (añadir al final).
            </p>

            <h2>Uso de with para manejar archivos</h2>
            <p>Una práctica recomendada es usar la declaración <b>with</b> al trabajar con archivos.</p>
            <p>
                La construcción <b>with</b> permite gestionar la apertura y cierre del archivo
                de forma automática. Esto evita que el programador tenga que utilizar la función
                <b>close()</b> y así se gestionen mejor los recursos del programa.
            </p>
            <CodeDisplay codeString={codeString4} />

            <div className='exercise'>
                <h2>Ejercicio: lectura y escritura de archivos</h2>
                <p>Elabora un programa como se indica en los siguientes pasos:</p>
                <ul className='num'>
                    <li>
                        Abre un archivo llamado output_exercise.txt en modo escritura e introduce dos líneas de texto: 
                        <br />
                        <italic>Esta es la primera línea</italic>
                        <br />
                        <italic>Esto es la segunda línea</italic>
                    </li>
                    <br />
                    <li>Abre el archivo en modo lectura e imprime sus contenidos en pantalla.</li>
                    <br />
                    <li>Abre el archivo en modo escritura sin reemplazar las líneas escritas anteriormente y escribe otra línea más (con lo que tú quieras poner).</li>
                    <br />
                    <li>Abre el archivo en modo lectura e imprime todos sus contenidos en pantalla.</li>
                </ul>
            </div>

            <Button next={false} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module3_lesson1;