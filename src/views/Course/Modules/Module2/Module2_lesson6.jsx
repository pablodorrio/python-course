import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module2_lesson6() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson6', 'lesson5');
    const nextPath = path.pathname.replace('lesson6', 'lesson7');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    def suma(num1: int, num2: int) -> int:
        return num1 + num2
    `;

    const codeString2 = `
    def suma(num1: int, num2: int) -> int:
        """Suma dos números enteros y devuelve el resultado.

        Args:
            num1 (int): Primer número a sumar.
            num2 (int): Segundo número a sumar.

        Returns:
        """
            int: Resultado de la suma.
        return num1 + num2
    `;

    useEffect(() => {
        setLesson(6);
        setLessonTitle('Mantenibilidad del código');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <p>
                Al desarrollar en Python, la legibilidad y la documentación del código
                son esenciales para asegurar que sea comprensible, mantenible y colaborativo.
                Python tiene convenciones de estilo y herramientas de documentación
                específicas para ayudar a los programadores a lograr un código limpio
                y bien documentado.
            </p>

            <h2>Anotaciones de tipo</h2>
            <p>
                Con el tiempo, Python ha adoptado funcionalidades de tipado estático.
                Esto significa que, aunque Python sigue siendo un lenguaje de tipado
                dinámico, ahora puedes proporcionar pistas sobre los tipos que esperas
                que tus funciones manejen. Esta adición aporta claridad y ayuda a
                detectar errores potenciales más temprano en el proceso de desarrollo.
            </p>
            <CodeDisplay codeString={codeString1} language='python' />

            <h2>Docstrings</h2>
            <p>
                Los Docstrings son comentarios de varias línea que sirven para
                documentar módulos, clases, funciones y métodos. Son útiles no solo
                para quienes leen el código, sino también porque hay herramientas que
                pueden generar automáticamente documentación a partir de ellos.
            </p>
            <CodeDisplay codeString={codeString2} language='python' />

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module2_lesson6;