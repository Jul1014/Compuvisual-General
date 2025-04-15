# Taller Transformaciones CompuVisual
 
---

## Python con Jupyter Notebook

**Descripcion**
Proyecto que genera la animacion de un cuadrado rotando, trasladandose en un circulo y cambiando de tamaño a lo largo de los 60 frames.

Este proyecto hace uso de *Matrices de transformacion* para rotar, trasladar y escalar el cuadrado.

![Demostracion de la animacion de Python](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-04-12_Taller1_Transformacion/Python/animacionCuadradoPython.gif)

**Ejecutar**

1. Instalar las librerias necesarias:

`pip install notebook matplotlib numpy imageio`

2. Ejecutar el Notebook:

`jupyter notebook Compuvisual-Square_animation.ipynb`

**Variables Modificables**

Para asegurar la correcta visualizacion de la animacion y las matrices, no se presentan variables modificables para este proyecto.

---

## Unity con C#

**Descripcion**
Proyecto que genera la animacion de un cubo rotando, trasladandose a una posicion aleatoria en un rango dado y cambiando de tamaño.

Este proyecto modifica el componente *Transform* del cubo con los metodos `.Translate, .Rotate y .localScale para trasladar, rotar y escalar el cubo; respectivamente.

![Demostracion de la animacion de Unity](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-04-12_Taller1_Transformacion/Unity/animacionCuboUnity.gif)

**Ejecutar**

1. Importar la escena en un proyecto de unity 3D y asignar el script de C# al cubo (si no está asignado).

2. Iniciar la escena en modo Game para visualizar correctamente la rotacion. 

**Variables Modificables**

En el archivo `ModifyTransform.cs` están separadas las variables que se pueden modificar para visualizar la simulacion de diferentes maneras:

<br>

```c#
float speed=4f; //Speed of the movement of the cube
float rotationSpeed = 70f; //Speed of the rotation of the cube
float range= 7f; //Range for the random movement of the cube
```

<br>

---

## Three.js con React Three Fiber

**Descripción**  
Proyecto que genera la animación de una esfera rotando, trasladandose en trayectoria circular y cambiando de tamaño oscilando; está dividida en dos mitades y se encuentra sobre un plano verde.

Este proyecto utiliza el hook *useFrame* de React Three Fiber para modificar las propiedades de la esfera usando el `sphereRef.current` de la esfera, aplicando cambios a su posición, rotación y escala. Además, se usa *OrbitControls* para permitir interacción con la cámara.

![Demostración de la animación de Three.js](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-04-12_Taller1_Transformacion/ThreeJs/animacionEsferaThreeJs.gif)

**Ejecutar**

1. Tener un entorno React configurado con `@react-three/fiber` y `@react-three/drei`.
2. Añadir el componente `App` al proyecto React.
3. Ejecutar la aplicación (`npm run dev` o `npm start`).
4. Para controlar la camara, la *rueda del mouse* permite hacer zoom, el *click derecho* permite trasladarla y el *click izquierdo* permite rotarla.

**Variables Modificables**

En el mismo archivo del componente se encuentran las variables que controlan el comportamiento de la animación. Estas pueden modificarse para lograr distintos efectos visuales:

<br>

```js
const rotSpeed = 5        // Speed of the rotation of the sphere
const movSpeed = 2        // Speed of the movement of the sphere
const scaleMultiplier = 0.2 // Size multiplier for the sphere
const sphereSize = 3      // Base size of the sphere
```
<br>

---

## Processing con Python

**Descripción**  
Proyecto que genera la animación de un cuadrado rotando, trasladándose sobre la trayectoria de una lemniscata (simbolo del infinito), y cambiando de tamaño de forma oscilatoria.

Este proyecto utiliza las funciones `translate`, `rotate` y `scale` para modificar la posición, rotación y escala del cubo, respectivamente. Además, se emplea una función `trayectory(t, ampl)` para calcular las coordenadas *(x, y)* de la ruta basada en funciones seno y coseno.

![Demostración de la animación en Processing](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-04-12_Taller1_Transformacion/Processing/animacionCuadradoProcessing.gif)

**Ejecutar**

1. Abrir el código en el entorno de Processing con el **modo Python** activado.
2. Ejecutar el sketch (`Ctrl+R` o botón de play).
3. Se visualizará un cuadrado naranja moviéndose a lo largo de una lemniscata mientras rota y cambia su tamaño.

**Variables Modificables**

Al principio del archivo se encuentran las variables que controlan los parámetros del movimiento y transformación del cubo:

<br>

```python
timeMult = 0.001   # Time multiplier (recomended to keep it small, even 0.005 makes it hard to see)
sizeMult = 0.5     # Size multiplier for the cube
sineMult = 4       # Frecuency multiplier for the sine function
amplMult = 300     # Amplitude multiplier for the trayectory
rotMult  = 2       # Speed multiplier of the rotation of the cube
```

<br>

---