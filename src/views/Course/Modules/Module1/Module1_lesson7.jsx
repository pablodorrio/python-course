import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module1_lesson7() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson7', 'lesson6');
    const nextPath = path.pathname.replace('lesson7', 'lesson8');

    const [lesson, setLesson] = useLocalStorage('lesson', 1);
    const [lessonTitle, setLessonTitle] = useLocalStorage('lessonTitle', 'Lesson');
    const [lessonPath, setLessonPath] = useLocalStorage('lessonPath', '/');

    const codeString1 = `
    class Triangle:
        def __init__(self, base, altura):
            self.base = base
            self.altura = altura

        def area(self):
            return 0.5 * self.base * self.altura

    
    triangle = Triangle(10, 5)
    print(triangle.area())
    `;

    const codeString2 = `
    class Triangulo:
        def __init__(self, base, altura):
            self.__base = base
            self.__altura = altura

        @property
        def base(self):
            return self.__base

        @base.setter
        def base(self, value):
            self.__base = value

        @property
        def altura(self):
            return self.__altura

        @altura.setter
        def altura(self, value):
            self.__altura = value

        def area(self):
            return 0.5 * self.__base * self.__altura
        
    triangulo = Triangulo(10, 5)
    print(triangulo.area())
    `;

    useEffect(() => {
        setLesson(7);
        setLessonTitle('Clases y objetos');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>
               En el contexto de la programación orientada a objetos (OOP), las clases son plantillas para crear objetos (instancias de clases). Los objetos representan entidades con estado (atributos) y comportamientos (métodos).
               <br />
               Python, siendo un lenguaje multiparadigma, soporta OOP, permitiendo a los desarrolladores definir y trabajar con clases y objetos.
            </p>

            <p>Python tiene un modelo basado en objetos donde todo es un objeto (¡incluso las propias clases!). Esas estructuras de datos y clases están vivas y son manipulables en tiempo de ejecución.</p>
            
            <h2>Definición de una clase</h2>
            <p>
                El concepto de encapsulación en Python se logra a través de métodos dentro de una clase. En este lenguaje, es esencial que cualquier método definido dentro de una clase incluya explícitamente el parámetro <b>self</b>, que actúa como una referencia al objeto instanciado de la clase.
                <br />
                El método constructor de la clase se denomina <b>__init__(self)</b>. Si se requieren parámetros adicionales en un método, se colocarán después del parámetro <b>self</b>. 
                <br />
                Los atributos de la clase se establecen al ser utilizados por primera vez, y se acceden o se definen a través de <b>self</b>, ya sea dentro del constructor o la primera vez que se emplean en un método.
            </p>
            <CodeDisplay codeString={codeString1} />

            <h2>Visibilidad</h2>
            <p>
                En Python, a diferencia de otros lenguajes, no se establece una distinción estricta entre atributos públicos y privados. Sin embargo, se puede simular la privacidad de un atributo utilizando un prefijo de doble guion bajo (__), lo que dificulta su acceso directo desde fuera de la clase.
                <br />
                Para abordar cuestiones relacionadas con la visibilidad y el acceso a los atributos, Python introduce el concepto de propiedades. Estas propiedades se definen utilizando el decorador <b>@property</b> y son preferibles a la utilización tradicional de métodos getters y setters. Es importante destacar que una propiedad no necesariamente debe permitir operaciones de lectura y escritura; puede ser configurada solo para una de estas acciones.
            </p>
            {/* <CodeDisplay codeString={codeString2} /> */}

            <div className='exercise'>
                <h2>Ejercicio: clases</h2>
                <p>Privatiza los atributos de la clase Triangle y crea mediante propiedades los métodos getters y setters para acceder a ellos.</p>
            </div>
            
            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module1_lesson7;