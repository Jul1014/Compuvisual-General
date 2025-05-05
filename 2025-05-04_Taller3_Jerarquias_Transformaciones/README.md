# 🌳 Jerarquías y Transformaciones: El Árbol del Movimiento

## 📅 Fecha
2025-05-05 – Fecha de entrega

---

## 🎯 Objetivo del Taller

Comprender y experimentar con jerarquías de objetos 3D mediante transformaciones encadenadas, explorando cómo los nodos padres afectan a sus hijos en un sistema estructurado. Se construyó una escena interactiva que demuestra relaciones padre-hijo-nieto usando rotaciones, traslaciones y escalado.

---

## 🧠 Conceptos Aprendidos

- Sistemas jerárquicos en gráficos 3D.
- Transformaciones acumulativas (rotación, escala, traslación).
- Representación de relaciones espaciales entre objetos.
- Uso de controladores interactivos (GUI) para modificar parámetros en tiempo real.

---

## 🔧 Herramientas y Entornos

- Three.js / React Three Fiber.
- Leva (controladores GUI).
- Vite + React para desarrollo web interactivo.

---

## 🧪 Implementación en Three.js

### 🔹 Etapas realizadas
1. Creación de una jerarquía con un nodo padre (cono), hijos (esferas) y nietos (octaedros).
2. Implementación de transformaciones jerárquicas que afectan descendientes en cascada.
3. Interfaz interactiva con Leva para controlar parámetros como rotación, escala y posición del nodo raíz.
4. Visualización con luces, ejes y grilla para mejor orientación espacial.

### 🔹 Código relevante

```jsx
// Rotación jerárquica del padre
return (
    <group ref={rootRef} position={[xShift, yShift, 0]} scale={sizeFactor}>
      <mesh>
        <coneGeometry args={[1.5, 3, 24]} />
        <meshStandardMaterial color="goldenrod" />
      </mesh>
      <Hijo origin={[0, 0, 3.5]} angle={Math.PI / 3} baseColor="coral" />
      <Hijo origin={[-3.5, 0, 0]} angle={-Math.PI / 3} baseColor="dodgerblue" />
    </group>
  )
```

---

## 📊 Resultados Visuales

Aqui demostramos como se usan los Sliders de Leva y la rotacion jerarquica:
> ![Demostracion funcionamiento en ThreeJs](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-04_Taller3_Jerarquias_Transformaciones/ThreeJs/GifJerarquiasYTransformaciones.gif)

---

## 🧩 Prompts Usados

- Estoy desarrollando un taller para aprender transformaciones jerárquicas en 3D utilizando React Three Fiber. Quiero mostrar cómo un nodo principal (padre) puede rotar y afectar a nodos hijos y nietos, visualizando la propagación de transformaciones. ¿Podrías ayudarme a estructurar esta escena y controlar dinámicamente los parámetros de rotación, posición y escala con Leva?

---

## 💬 Reflexión Final

Este taller permitió explorar una de las bases más importantes de la animación 3D: la jerarquía de transformaciones. Entender cómo un cambio en un nodo superior afecta a todos los nodos hijos facilitó la visualización de relaciones complejas de movimiento en sistemas 3D.

La implementación con React Three Fiber y Leva brindó una experiencia altamente interactiva. Para futuras mejoras, se podría agregar animación automatizada o control individual de cada nodo descendiente para reforzar el aprendizaje de la independencia y dependencia de transformaciones.

---