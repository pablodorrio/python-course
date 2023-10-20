import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module3_lesson5() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson5', 'lesson4');
    const nextPath = path.pathname.replace('lesson5', 'lesson6');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    import numpy as np
    import matplotlib.pyplot as plt
    from scipy.interpolate import interp1d
    from random import randrange

    # Valores x e y originales:

    x_values = np.arange(0, 20)
    y_values = [randrange(0, 10) for x in x_values]  # Randomly generated y values.

    # Función de interpolación:

    interpolation_function = interp1d(x_values, y_values)

    # Nuevos valores x (más precisos) y valores e interpolados:

    x_values_interp = np.arange(0, 19, .25)
    y_values_interp = interpolation_function(x_values_interp)

    plt.plot(x_values_interp, y_values_interp, '.-', color="darkorange", label="Datos interpolados")
    plt.plot(x_values, y_values, '.', color="red", label="Raw data")

    plt.title("Datos interpolados vs Datos originales")
    plt.legend()
    plt.grid(True)

    plt.show()
    `;

    const codeString2 = `
    from scipy import misc
    import matplotlib.pyplot as plt

    img = misc.face() # Imagen para pruebas que ofrece SciPy
    print("Tipo de dato:", type(img)) # Tipo de dato: <class 'numpy.ndarray'>
    print("Número de dimensiones:", img.ndim) # Número de dimensiones: 3
    print("Tamaño de la imagen:", img.shape) # Tamaño de la imagen: (768, 1024, 3)

    plt.imshow(img)

    plt.show()
    `;

    useEffect(() => {
        setLesson(5);
        setLessonTitle('SciPy');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>

            <p>
                <b>SciPy</b> es una biblioteca de Python que se utiliza para operaciones matemáticas de alto nivel.
                Se construye sobre el paquete NumPy y proporciona un gran número de algoritmos y herramientas
                matriciales que hacen que los cálculos sean más eficientes. La biblioteca se ha diseñado
                específicamente para tareas como optimización, integración, interpolación, autovalores,
                estadísticas y muchas otras aplicaciones en ciencia y ingeniería.
            </p>

            <h2>Ejemplo de uso de SciPy</h2>
            <CodeDisplay codeString={codeString1} language='python' />

            <h2>Procesamiento de imágenes</h2>
            <p>
                Una imagen es un grupo de píxeles en una matriz, así que se podría suponer que la imagen
                tendría 2 dimensiones. Pero si consultamos el atributo <b>ndim</b> vemos que tiene 3, esto viene
                porque es una imagen de tres canales donde para cada píxel se guarda una tupla con los
                componentes azul, verde y rojo.
            </p>
            <CodeDisplay codeString={codeString2} language='python' />

            <div className='exercise'>
                <h2>Ejercicio: Procesamiento de imagen</h2>
                <p>
                    Sabiendo que la imagen del ejemplo anterior tiene 3 canales de color,
                    mostrar tres descomposiciones de la misma en pantalla. En cada una de
                    ellas deben verse solo los canales rojo, verde y azul, respectivamente.
                </p>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module3_lesson5;