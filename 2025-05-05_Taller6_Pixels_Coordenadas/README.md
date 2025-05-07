# 🧮 De Pixels a Coordenadas: Explorando la Imagen como Matriz

## 📅 Fecha
2025-05-05 – Fecha de entrega

---

## 🎯 Objetivo del Taller

Comprender la estructura interna de una imagen digital como una matriz de píxeles, separando sus componentes por canales de color, manipulando regiones específicas y modificando propiedades como el brillo y el contraste. Además, se busca visualizar estos cambios mediante histogramas y funciones interactivas.

---

## 🧠 Conceptos Aprendidos

- Representación matricial de una imagen.
- Separación de canales RGB y HSV.
- Manipulación directa de regiones específicas dentro de una imagen.
- Conversión entre espacios de color.
- Modificación de brillo y contraste usando sliders interactivos.
- Cálculo e interpretación de histogramas de color.

---

## 🔧 Herramientas y Entornos

- Python (Google Colab o Jupyter)
- OpenCV (cv2)
- NumPy
- Matplotlib
- ipywidgets (interactividad)

---

## 🧪 Implementación en Python

### 🔹 Etapas realizadas

1. Cargar una imagen desde una URL y convertirla a formato RGB.
2. Separar y visualizar los canales de color (RGB y HSV).
3. Colorear una región específica mediante indexación directa.
4. Ajustar brillo y contraste de la imagen usando sliders.
5. Visualizar histogramas de intensidad por canal para analizar cambios.

### 🔹 Código relevante

```python
#Codigo para el Histograma, pieza clave en la visualizacion de la imagen y que permite ver los componentes de cada color
def mostrar_histograma(imagen_rgb):
    colores = ('r', 'g', 'b')
    plt.figure(figsize=(8, 4))
    plt.title("Histograma de colores")
    for i, color in enumerate(colores):
        hist = cv2.calcHist([imagen_rgb], [i], None, [256], [0, 256])
        plt.plot(hist, color=color)
    plt.xlabel('Intensidad')
    plt.ylabel('Frecuencia')
    plt.show()
```

---
## 📊 Resultados Visuales

Aqui se presentan el histograma y algunas de las imagenes generadas, las demas pueden verse en el archivo .ipynb:
> ![Muestra del funcionamiento en Python](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-05_Taller6_Pixels_Coordenadas/Python/ImagenPixelsCoordenadas.png)

----------

## 🧩 Prompts Usados

- Quiero hacer un taller donde se vea que una imagen es una matriz. Se deben mostrar los canales RGB y HSV, colorear una región manualmente, modificar brillo y contraste con sliders, y visualizar el histograma de color.

----------


## 💬 Reflexión Final

Este taller permitió consolidar la comprensión de la imagen digital como estructura de datos, fortaleciendo la capacidad de intervenir píxeles de forma precisa. Gracias a la interactividad y las visualizaciones, se hizo tangible el vínculo entre código, matemáticas y percepción visual.

