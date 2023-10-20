import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module2_lesson2() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson2', 'lesson1');
    const nextPath = path.pathname.replace('lesson2', 'lesson3');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    class Punto:
        @staticmethod
        def get_org():
            return Punto(0, 0)

        def __init__(self, x, y):
            self.x = x
            self.y = y

        @property
        def x(self):
            return self.__x

        @x.setter
        def x(self, v):
            self.__x = v

        @property
        def y(self):
            return self.__y

        @y.setter
        def y(self, v):
            self.__y = v

    p1 = Punto(5, 6)
    `;

    useEffect(() => {
        setLesson(2);
        setLessonTitle('Métodos estáticos y especiales');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <h2>Método estáticos</h2>
            <p>Los métodos estáticos son aquellos que pertenecen a la clase, y por lo tanto no llevan el parámetro self. Se utiliza el decorador <b>@staticmethod</b>.</p>
            <CodeDisplay codeString={codeString1} language='python' />

            <h2>Métodos especiales</h2>
            <p>Existen ciertas funciones en python que el intérprete llamará cuando esté utilizando algunos operadores. Por ejemplo, el método <b>__str__()</b> será el método que se utilice para convertir el objeto a texto mediante la función str().</p>

            <table>
                <thead>
                    <tr>
                        <th>Funcion</th>
                        <th>Operador</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>__gt__(self,otro)</td>
                        <td>&gt;</td>
                    </tr>
                    <tr>
                        <td>__ge__(self,otro)</td>
                        <td>&gt;=</td>
                    </tr>
                    <tr>
                        <td>__lt__(self,otro)</td>
                        <td>&lt;</td>
                    </tr>
                    <tr>
                        <td>__le__(self,otro)</td>
                        <td>&lt;=</td>
                    </tr>
                    <tr>
                        <td>__eq__(self,otro)</td>
                        <td>==</td>
                    </tr>
                    <tr>
                        <td>__neq__(self,otro)</td>
                        <td>!=</td>
                    </tr>
                    <tr>
                        <td>__add__(self,otro)</td>
                        <td>+</td>
                    </tr>
                    <tr>
                        <td>__sub__(self,otro)</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>__mul__(self,otro)</td>
                        <td>*</td>
                    </tr>
                    <tr>
                        <td>__truediv__(self,otro)</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>__floordiv__(self,otro)</td>
                        <td>//</td>
                    </tr>
                    <tr>
                        <td>__mod__(self,otro)</td>
                        <td>%</td>
                    </tr>
                </tbody>
            </table>


            <div className='exercise'>
                <h2>Ejercicio: metodos especiales</h2>
                <p>
                    Crea una clase llamada <b>Calculadora</b> que reciba dos números enteros como parámetros en su constructor. Esta clase debe tener los siguientes métodos:
                </p>
                <ul>
                    <li>Suma</li>
                    <li>Resta</li>
                    <li>Multiplicación</li>
                    <li>División</li>
                    <li>Comparación</li>
                </ul>

                <p>Recuerda manejar las excepciones.</p>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module2_lesson2;