# 📐 Análisis de Figuras Geométricas: Centroide, Área y Perímetro

## 📅 Fecha

2025-05-05 – Fecha de entrega

---
## 🎯 Objetivo del Taller

El objetivo de este taller es implementar un sistema de visión por computadora capaz de identificar y analizar figuras geométricas en imágenes, calculando sus propiedades fundamentales como centroide, área y perímetro, y clasificándolas según su forma.

---
## 🧠 Conceptos Aprendidos

- Procesamiento de imágenes binarias con OpenCV
- Detección y análisis de contornos en imágenes
- Cálculo de momentos geométricos para hallar centroides
- Aproximación poligonal para clasificación de formas
- Visualización de resultados con Matplotlib

---
## 🔧 Herramientas y Entornos

- Python
- OpenCV para procesamiento de imágenes
- NumPy para manipulación de matrices
- Matplotlib para visualización de resultados
- Colab

---
## 🧪 Implementación en Python

### 🔹 Etapas realizadas

1. Generación de una imagen de ejemplo con figuras geométricas básicas
2. Detección de contornos en la imagen binaria
3. Cálculo de propiedades geométricas (área, perímetro, centroide)
4. Clasificación de las formas según sus características
5. Visualización de los resultados con anotaciones
6. Generación de un resumen estadístico de las figuras encontradas

### 🔹 Código relevante

```python
#Analisis de contornos para hallar los limites de cada figura
def analizar_contornos(imagen_binaria):
    contornos, _ = cv2.findContours(imagen_binaria, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    objetos = []

    for i, contorno in enumerate(contornos):
        area = cv2.contourArea(contorno)
        perimetro = cv2.arcLength(contorno, True)
        approx = cv2.approxPolyDP(contorno, 0.04 * perimetro, True)
        M = cv2.moments(contorno)
        cx, cy = (int(M["m10"] / M["m00"]), int(M["m01"] / M["m00"])) if M["m00"] else (0, 0)
        bbox = cv2.boundingRect(contorno)
        forma = clasificar_forma(approx, bbox)

        objetos.append({
            "contorno": contorno,
            "centro": (cx, cy),
            "area": area,
            "perimetro": perimetro,
            "forma": forma,
            "bbox": bbox
        })

    return objetos
```
---
## 📊 Resultados Visuales

Aquí se presenta la imagen generada con todas las figuras detectadas, mostrando los centroides y cajas delimitadoras:
> ![Muestra del funcionamiento en Python](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-05_Taller8_Analisis_Figuras_Geometricas/Python/ImagenAnalisisFigurasGeometricas.png)

----------
## 🧩 Prompts Usados

- Desarrolla un sistema de análisis de figuras geométricas en imágenes utilizando OpenCV y Python. El sistema debe detectar contornos, calcular propiedades geométricas (área, perímetro, centroide) y clasificar las formas automáticamente.

----------
## 💬 Reflexión Final

Este taller me permitió profundizar en técnicas esenciales de visión por computadora para el análisis de figuras geométricas. Aprendí cómo utilizar los momentos geométricos para encontrar el centro de masa de un objeto, y cómo la aproximación poligonal puede ser una herramienta poderosa para la clasificación de formas. 
