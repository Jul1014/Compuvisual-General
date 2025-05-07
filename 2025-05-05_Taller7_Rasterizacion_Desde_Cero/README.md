# 📊 Rasterización desde Cero: Dibujando con Algoritmos Clásicos

## 📅 Fecha

2025-05-05 – Fecha de entrega

---
## 🎯 Objetivo del Taller

El objetivo de este taller es implementar y comprender los algoritmos fundamentales de gráficos por computadora, específicamente el algoritmo de Bresenham para dibujar líneas, el algoritmo del Punto Medio para círculos y el método de relleno por escaneo para triángulos.

---
## 🧠 Conceptos Aprendidos

- Técnicas de relleno de polígonos mediante escaneo
- Manipulación de matrices como representación de imágenes
- Transformación de coordenadas matemáticas a píxeles discretos
- Manejo de lienzos digitales con NumPy

---
## 🔧 Herramientas y Entornos

- Python 
- NumPy para manipulación eficiente de matrices
- Matplotlib para visualización de resultados
- Colab

---
## 🧪 Implementación en Python

### 🔹 Etapas realizadas

1. Creación de un lienzo digital utilizando matrices NumPy
2. Implementación del algoritmo de Bresenham para dibujar líneas
3. Implementación del algoritmo del Punto Medio para círculos
4. Desarrollo del algoritmo de relleno por escaneo para triángulos
5. Combinación de las tres primitivas gráficas en una sola imagen
6. Visualización de resultados con Matplotlib

### 🔹 Código relevante

```python
# Círculo usando Algoritmo del Punto Medio, la forma más compleja a mi parecer
def circulo_punto_medio(canvas, x0, y0, r, color=(0, 0, 255)):
    x = r
    y = 0
    p = 1 - r
    while x >= y:
        for dx, dy in [(x, y), (y, x), (-x, y), (-y, x),
                       (-x, -y), (-y, -x), (x, -y), (y, -x)]:
            px, py = x0 + dx, y0 + dy
            if 0 <= px < width and 0 <= py < height:
                canvas[py, px] = color
        y += 1
        if p <= 0:
            p += 2 * y + 1
        else:
            x -= 1
            p += 2 * y - 2 * x + 1
    return canvas
```
---
## 📊 Resultados Visuales

Aqui se presentan las 3 imagenes generadas con algoritmos y la imagen completa al unir las 3:
> ![Muestra del funcionamiento en Python](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-05_Taller7_Rasterizacion_Desde_Cero/Python/ImagenRasterizacionDesdeCero.png)

----------
## 🧩 Prompts Usados

- Implementa los algoritmos básicos de gráficos por computadora (Bresenham para líneas, Punto Medio para círculos y relleno de triángulos) utilizando Python y NumPy. Visualiza los resultados con Matplotlib.

----------
## 💬 Reflexión Final

Este taller me permitió profundizar en los fundamentos de los gráficos por computadora, comprendiendo cómo se generan las primitivas gráficas a nivel de píxel. Fue fascinante descubrir cómo algoritmos desarrollados hace décadas siguen siendo relevantes en la era moderna de la computación gráfica.



