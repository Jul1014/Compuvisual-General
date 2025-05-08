# 🎨 Escenas Paramétricas: Creación y Visualización de Objetos 3D desde Datos

## 📅 Fecha

2025-05-05 – Fecha de entrega

---
## 🎯 Objetivo del Taller

El objetivo principal de este taller es explorar y aplicar técnicas para la generación de escenas tridimensionales complejas a partir de datos estructurados; se busca comprender el flujo de trabajo desde la concepción de un modelo basado en datos hasta su representación visual e interactiva.

---
## 🧠 Conceptos Aprendidos

* Generación paramétrica de geometrías 3D utilizando Python.
* Manipulación de librerías como NumPy, Vedo, Trimesh y Open3D para la creación y procesamiento de mallas.
* Exportación de modelos 3D en formatos estándar (e.g., OBJ).
* Creación de componentes React para la representación de datos como objetos 3D.

---
## 🔧 Herramientas y Entornos

- Python con Trimesh, NumPy y Matplotlib
- JavaScript con React y Three.js
- React Three Fiber para integración de Three.js con React
- Bibliotecas de componentes: react-three/drei
- Leva para GUI

---
## 🧪 Implementación

### 🔹 Etapas realizadas en Python

1.  Generación de coordenadas
2.  Creación de objetos 3D
3.  Generación de CSV de ejemplo
4.  Carga desde CSV

### 🔹 Etapas realizadas en React/Three.js

1.  Animación de rotación
2.  Renderizado condicional de geometría
3.  Creación del componente `SceneDataRenderer`
4.  Cálculo de la posición
5.  Escalado basado en datos
6.  Mapeo de datos a objetos

### 🔹 Código relevante (Python)

```python
def crear_objetos(self):
        """
        Crea objetos 3D (primitivas) basados en los puntos generados

        Returns:
            Lista de objetos vedo generados
        """
        if self.puntos is None:
            print("Error: Primero debe generar coordenadas")
            return []

        print("Creando objetos 3D...")
        objetos = []
        colores = vedo.colors.cmaps_names

        for i, punto in enumerate(self.puntos):
            tipo_objeto = i % 3  # Determina el tipo de objeto
            color = random.choice(colores)

            if tipo_objeto == 0:  # Esferas
                radio = 0.2 + (i * 0.05)  # Radio variable
                esfera = vedo.Sphere(pos=punto, r=radio, c=color)
                objetos.append(esfera)

            elif tipo_objeto == 1:  # Cubos
                lado = 0.3 + (i * 0.04)  # Tamaño variable
                cubo = vedo.Cube(pos=punto, side=lado, c=color)
                objetos.append(cubo)

            else:  # Cilindros
                radio = 0.15 + (i * 0.03)
                altura = 0.5 + (i * 0.1)
                # Orientación aleatoria para el cilindro
                punto_final = punto + np.array([
                    random.uniform(-1, 1),
                    random.uniform(-1, 1),
                    altura
                ])
                cilindro = vedo.Cylinder(pos=[punto, punto_final], r=radio, c=color)
                objetos.append(cilindro)

        self.objetos = objetos
        print(f"Objetos creados: {len(self.objetos)}")
        return self.objetos
```

### 🔹 Código relevante (React/Three.js)

```javascript
// Determinar el tipo de geometría según el tipo de visualización o mezcla
  const renderGeometry = () => {
    if (visualizationType === 'mixed') {
      // Para mixed, alterna entre cubo y esfera según el índice
      return index % 2 === 0 ? <boxGeometry /> : <sphereGeometry args={[0.7, 32, 32]} />;
    } else if (visualizationType === 'spheres') {
      return <sphereGeometry args={[0.7, 32, 32]} />;
    } else { // default: cubes
      return <boxGeometry />;
    }
  };
```
---

## 📊 Resultados Visuales

Una de las escenas que se puede generar con datos aleatorios:
> ![Visualizador del modelo en python](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-05_Taller10_Escenas_Parametricas/Python/ImagenEscenasParametricas.png)

Visualizacion del movimiento y la manipulacion de los objetos generados:
> ![Visualizador de los modelos en Three.Js](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-05_Taller10_Escenas_Parametricas/ThreeJs/GifEscenasParametricas.gif)

----------
## 🧩 Prompts Usados

- Necesito que a partir de datos o coordenadas, generes objetos en 3d mediante codigo; luego necesito que exportes dichas escenas y que se pueda trabajar con ellas y visualizarlas

----------
## 💬 Reflexión Final

Este taller representa una exploración integral del proceso de creación de visualizaciones 3D basadas en datos. Al combinar la potencia de Python para la generación y manipulación de modelos con la flexibilidad de React y Three.js para la visualización interactiva en la web, se abre un amplio abanico de posibilidades para la representación de información compleja de manera intuitiva y atractiva.