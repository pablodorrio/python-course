import '../../Course.css'
import { useLocation } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import CodeDisplay from '../../../../components/CodeDisplay/CodeDisplay';
import { useEffect } from 'react';
import { useLocalStorage } from '../../../../useLocalStorage';

function Module2_lesson3() {
    const path = useLocation();
    const prevPath = path.pathname.replace('lesson3', 'lesson2');
    const nextPath = path.pathname.replace('lesson3', 'lesson4');

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
        def x(self, x):
            self.__x = x

        @property
        def y(self):
            return self.__y

        @y.setter
        def y(self, y):
            self.__y = y
        
        def distancia(self):
            """Devuelve la distancia desde el origen hasta este punto """
            return ((self.x**2)+(self.y**2))**.5

        def __str__(self):
            return "({0:.2f},{1:.2f})".format(self.x,self.y)
        
    class Linea:
        def __init__(self,x1,y1,x2,y2):
            self.__p1 = Punto(x1,y1)
            self.__p2 = Punto(x2,y2)

        @property
        def p1(self):
            return self.__p1
        
        @property
        def p2(self):
            return self.__p2
        
        def __str__(self):
            return "({0},{1})".format(self.p1,self.p2)

    a = linea(1,3,2,4)
    print(a)
    `;

    const codeString2 = `
    class Persona:
        def __init__(self, nombre, edad):
            self.__nombre = nombre
            self.__edad = edad
        
        @property
        def nombre(self):
            return self.__nombre
        
        @property
        def edad(self):
            return self.__edad
  
        def __str__(self):
            return self.nombre + " (" + str( self.edad ) + ")"

    class Empleado(Persona):
        def __init__(self, nombre, edad, empresa, email):
          super().__init__(nombre, edad)
            self.__empresa = empresa
            self.__email = email
        
        @property
        def empresa(self):
            return self.__empresa
        
        @property
        def email(self):
            return self.__email
        
        def __str__(self):
            toret = super().__str__()
            toret += " en " + self.empresa
            toret += ": " + self.email
            return toret

        print(Persona("Pablo", 20))
        print(Empleado("Pablo", 20, "UvigoMotorsport", "pablo.dorrio.vazquez@uvigomotorsport.com"))
    `;

    useEffect(() => {
        setLesson(3);
        setLessonTitle('Polimorfismo');
        setLessonPath(path);
    }, []);

    return (
        <div className='course' overflow=''>
            <h1>{`${lessonTitle}`}</h1>
            <p>El polimorfismo, que proviene del griego {'"polys"'} (muchos) y {'"morphē"'} (forma), es uno de los cuatro pilares fundamentales de la programación orientada a objetos. Es la capacidad de tratar objetos de diferentes clases como si fueran objetos de una misma clase. En esencia, el polimorfismo permite que diferentes clases tengan métodos con el mismo nombre, pero comportamientos distintos.</p>

            <h2>Composición</h2>
            <p>Después de aprender a crear e iniciar objetos, podemos usar clases más básicas para formar objetos de mayor complejidad.</p>
            <CodeDisplay codeString={codeString1} />

            <h2>Herencia</h2>
            <p>El polimorfismo es especialmente útil cuando se combina con la herencia. Una clase base puede definir un método, y las clases derivadas pueden sobrescribir este método para proporcionar una implementación específica.</p>
            <p>Python soporta herencia múltiple. Esto significa que una subclase puede tener varias superclases.</p>
            <CodeDisplay codeString={codeString2} />

            <Button next={false} path={prevPath} />
            <Button next={true} path={nextPath} />
        </div>
    );
}

export default Module2_lesson3;