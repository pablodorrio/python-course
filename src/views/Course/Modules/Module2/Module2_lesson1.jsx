import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module2_lesson1() {
    const path = useLocation();
    const nextPath = path.pathname.replace('lesson1', 'lesson2');

    const [module, setModule] = useLocalStorage('module', 0);
    const [moduleTitle, setModuleTitle] = useLocalStorage('moduleTitle', 'Module');
    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    try:
        resultado = 10 / 0
    except ZeroDivisionError:
        print("No se puede dividir por cero.")
    except Exception as e:
        print("Error inesperado:", e)")
    `;

    const codeString2 = `
    try:
        archivo = open("archivo_inexistente.txt", "r")
    except FileNotFoundError:
        print("El archivo no fue encontrado.")
    finally:
        print("Este bloque se ejecuta siempre.")
    `;

    const codeString3 = `
    def validar_edad(edad):
        if edad < 0:
            raise ValueError("La edad no puede ser negativa.")

    try:
        validar_edad(-5)
    except ValueError as e:
        print(e)
    `;


    useEffect(() => {
        setModule(2);
        setModuleTitle('Python Intermediate');
        setLesson(1);
        setLessonTitle('Excepciones');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>En la programación, las excepciones son eventos inesperados que ocurren durante la ejecución de un programa, y que pueden interrumpir su flujo normal. Estos eventos pueden ser causados por errores en el código, entrada de datos inválida, problemas en tiempo de ejecución, entre otros. Python proporciona herramientas para manejar y controlar estas excepciones, permitiendo a los programadores responder adecuadamente a situaciones inesperadas y continuar con la ejecución del programa o terminarlo de manera controlada.</p>

            <h2>Manejo de Excepciones</h2>
            <p>La clave para manejar excepciones en Python es el uso de bloques <b>try</b> ... <b>except</b></p>
            <CodeDisplay codeString={codeString1} />

            <p>El bloque finally se ejecuta independientemente de si se lanzó una excepción o no.</p>
            <CodeDisplay codeString={codeString2} />

            <h2>Lanzamiento de Excepciones</h2>
            <p>Se puede lanzar una excepción con la palabra clave <b>raise</b> para posteriormente sea capturada.</p>
            <CodeDisplay codeString={codeString3} />

            <Button next={false} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module2_lesson1;