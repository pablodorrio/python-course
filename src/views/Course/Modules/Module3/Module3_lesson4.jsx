import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module3_lesson4() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson4', 'lesson3');
    const nextPath = path.pathname.replace('lesson4', 'lesson5');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    import matplotlib.pyplot as plt
    import numpy as np
    
    # Initial data:
    
    x_coordinates = np.array([1, 2, 3, 4, 5])
    y_coordinates = np.array([1, 4, 9, 16, 25])
    
    # Data plotting:
    
    plt.scatter(x_coordinates, y_coordinates)
    plt.plot(x_coordinates, y_coordinates)
    
    # Plot display:
    
    plt.show()
    `;

    const codeString2 = `
    import matplotlib.pyplot as plt

    x_coordinates = list(range(40))
    y_coordinates = [x ** .5 for x in x_coordinates]
    
    plt.plot(x_coordinates, y_coordinates, label="Curve 1", color="#ff0000")  # Añade una leyenda para la curva 1 y la representa en rojo.
    
    # Plot customization:
    
    plt.title(f"Square root of {len(x_coordinates)} coordinates")  # Añade título a la gráfica.
    plt.grid(True)  # Activa la cuadrícula.
    plt.xlabel("X axis")  # Añade etiqueta para el eje X.
    plt.ylabel("Y axis")  # Añade etiqueta para el eje Y.
    plt.legend()  # Activa la leyenda.
    
    plt.show()
    `;

    useEffect(() => {
        setLesson(4);
        setLessonTitle('Matplotlib');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>
                Matplotlib es una biblioteca de Python que se utiliza para la generación
                de gráficos a partir de datos contenidos en listas o arrays de NumPy. Ofrece una amplia
                variedad de gráficos, desde histogramas hasta gráficos de dispersión, y es
                una de las herramientas más populares y completas para visualizar datos en Python.
            </p>

            <h2>Ejemplo básico</h2>
            <p>
                El siguiente código muestra un ejemplo básico de cómo graficar datos con Matplotlib.
                <br />
                La función <b>scatter()</b> se utiliza para graficar puntos en un plano cartesiano.
                <br />
                La función <b>plot()</b> se utiliza para graficar una función en el mismo plano cartesiano.
                <br />
                La función <b>show()</b> se utiliza para mostrar el gráfico en una ventana emergente.
            </p>
            <CodeDisplay codeString={codeString1} />

            <div className='exercise'>
                <h2>Ejercicio: gráfica de una función seno</h2>
                <p>
                    Grafica la función seno en el intervalo [0, 2π] con una precisión de 0.1 (saltos de 0.1 en 0.1).
                </p>
                <italic>Nota: busca cómo importar la función seno de NumPy.</italic>
            </div>
            <br /> <br />

            <h2>Personalización de la gráfica</h2>
            <p>
                Matplotlib ofrece una gran cantidad de opciones para personalizar los gráficos.
                <br />
                A continuación, se muestran algunos ejemplos de personalización:
            </p>
            <CodeDisplay codeString={codeString2} />

            <div className='exercise'>
                <h2>Ejercicio: representaciones múltiples</h2>
                <p>
                    Representa las funciones seno, coseno y tangente en una misma gráfica
                    en un rango de valores de 0 a 10 con la precisión que desees.
                    Cada una de ellas deberá tener un nombre y color distintivos, mostrados
                    en la leyenda. La gráfica deberá tener un título descriptivo.
                </p>
            </div>

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module3_lesson4;