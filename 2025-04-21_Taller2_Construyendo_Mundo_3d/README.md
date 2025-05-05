# 🧪 Construyendo el Mundo 3D: Vértices, Aristas y Caras

## 📅 Fecha
2025-05-05 – Fecha de entrega

---

## 🎯 Objetivo del Taller

Explorar y visualizar la estructura básica de modelos 3D mediante vértices, aristas y caras utilizando herramientas interactivas tanto en Python como en Three.js. El objetivo es analizar el contenido geométrico de archivos `.OBJ` y permitir su inspección desde diferentes modos de representación.

---

## 🧠 Conceptos Aprendidos

- Vértices, aristas y caras como componentes esenciales de modelos 3D.
- Transformaciones geométricas (escala, rotación, traslación).
- Visualización interactiva con bibliotecas gráficas.
- Manejo de archivos `.OBJ` en entornos de programación.

---

## 🔧 Herramientas y Entornos

- Python (`trimesh`, `matplotlib`, `numpy`).
- Three.js / React Three Fiber.
- Google Colab para el entorno de Python.
- Vite + React para el entorno de Three.js.

---

## 🧪 Implementación en Python

### 🔹 Etapas realizadas

1. Carga del modelo `.OBJ` utilizando `trimesh`.
2. Cálculo de la cantidad de vértices, caras y aristas del modelo.
3. Visualización del modelo 3D con `matplotlib` usando diferentes colores para las caras.

### 🔹 Código relevante

```python
# Visualización estructural con matplotlib y trimesh
for mesh in mallas:
    verts = mesh.vertices
    faces = mesh.faces
    all_points.extend(verts)

    # Dibujar vértices
    ax.scatter(verts[:, 0], verts[:, 1], verts[:, 2],
               color='cyan', s=3, alpha=0.5)

    # Dibujar caras
    triangulos = [[verts[i] for i in cara] for cara in faces]
    coleccion = Poly3DCollection(triangulos, alpha=0.3, facecolor=color_aleatorio(), edgecolor='gray')
    ax.add_collection3d(coleccion)

```

---

## 🧪 Implementación en Three.js

### 🔹 Etapas realizadas
1. Carga del modelo `.OBJ` utilizando el `OBJLoader` en Three.js.
2. Implementación de diferentes modos de visualización (normal, wireframe, aristas y vértices).
3. Cálculo de vértices, caras y aristas al cargar el modelo y mostrar esta información en la interfaz.

### 🔹 Código relevante

```jsx
// Visualización en React Three Fiber con modos personalizados
//ModelViewer.jsx
      obj.traverse((child) => {
        if (child.isMesh) {
          const geometry = child.geometry
          verticesCount += geometry.attributes.position.count
          facesCount += geometry.index ? geometry.index.count / 3 : geometry.attributes.position.count / 3
          edgesCount += facesCount * 3 / 2 // Approximation for a closed manifold
        }
      })
```

---

## 📊 Resultados Visuales

> ![Python](2025-04-21_Taller2_Construyendo_Mundo_3d/Python/ImagenMundo3DPython.png)
> ![ThreeJs](2025-04-21_Taller2_Construyendo_Mundo_3d/ThreeJs/GifMundo3DThreeJs.gif)

---

## 🧩 Prompts Usados

- Estoy desarrollando un taller educativo para visualizar la estructura de modelos 3D (.OBJ) enfocándome en sus vértices, aristas y caras. Necesito una guía para implementar este taller usando Python (con trimesh y matplotlib) para análisis básico y visualización estática, y también en Three.js con React Three Fiber para una visualización interactiva con modos como wireframe, vértices y bordes. ¿Podrías ayudarme a estructurar este desarrollo, incluyendo qué pasos seguir, cómo organizar los componentes y qué funciones clave debo implementar en ambos entornos?

---

## 💬 Reflexión Final

Este taller fue fundamental para entender cómo están compuestos internamente los modelos tridimensionales y cómo se pueden analizar sus componentes básicos: vértices, caras y aristas. Trabajar tanto en Python como en Three.js permitió comparar enfoques estáticos y dinámicos de visualización, cada uno con sus ventajas.

Lo más desafiante fue lograr que el modelo `.OBJ` se representara de forma coherente en distintos modos de vista, especialmente al manejar geometrías complejas o con múltiples mallas. En futuras versiones, se podría agregar la posibilidad de seleccionar modelos dinámicamente o integrar más información semántica de los objetos.

---
