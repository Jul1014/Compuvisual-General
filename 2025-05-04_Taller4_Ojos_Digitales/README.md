# 👁️ Ojos Digitales: Introducción a la Visión Artificial

## 📅 Fecha
2025-05-05 – Fecha de entrega

---

## 🎯 Objetivo del Taller

Explorar los fundamentos del procesamiento digital de imágenes, comprendiendo cómo interpretar, transformar y extraer información útil de una imagen a través de diversas técnicas computacionales.

---

## 🧠 Conceptos Aprendidos

- Conversión de imágenes a escala de grises y manipulación de canales de color.
- Aplicación de desenfoques (promedio, gaussiano, mediana) y enfoques con filtros de convolución.
- Detección de bordes mediante Sobel, Laplaciano y Canny.
- Comparación visual entre métodos de realce y segmentación de bordes.
- Visualización de transformaciones usando Matplotlib.

---

## 🔧 Herramientas y Entornos

- Python
- OpenCV (cv2)
- NumPy
- Matplotlib

---

## 🧪 Implementación en Python

### 🔹 Flujo General
1. Descarga y carga de una imagen desde internet.
2. Conversión de la imagen a distintos espacios de color (RGB, escala de grises).
3. Aplicación de filtros de desenfoque: promedio, gaussiano y mediana.
4. Realce mediante convolución con filtro de enfoque.
5. Detección de bordes utilizando Sobel (X, Y, combinado), Laplaciano y Canny.
6. Visualización comparativa de resultados con Matplotlib.

### 🔹 Código relevante

```python
#Bordes Sobel X e Y, tambien combinados (es la visual mas interesante a mi punto de)
    def bordes_sobel(self):
        sx = cv2.Sobel(self.gris, cv2.CV_64F, 1, 0, ksize=3)
        sy = cv2.Sobel(self.gris, cv2.CV_64F, 0, 1, ksize=3)
        return {
            'Sobel X': cv2.convertScaleAbs(sx),
            'Sobel Y': cv2.convertScaleAbs(sy),
            'Sobel Combinado': cv2.addWeighted(
                cv2.convertScaleAbs(sx), 0.5, 
                cv2.convertScaleAbs(sy), 0.5, 0
            )
        }
```

---

## 📊 Resultados Visuales

El codigo de python permitie observar con claridad cómo distintos algoritmos afectan la percepción visual de una imagen:
> ![Muestra del funcionamiento en Python](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-04_Taller4_Ojos_Digitales/Python/ImagenOjosDigitalesPython.png)

**Nota:** Esta imagen solo muestra una porcion de los resultados, los demás se pueden visualizar directamente en el archivo .ipynb

---

## 🧩 Prompts Usados

- Necesito desarrollar un taller sobre procesamiento de imágenes usando Python y OpenCV. La imagen se carga desde internet, se convierte a escala de grises, se aplican varios filtros (blur, sharpening), y se detectan bordes con Sobel, Laplaciano y Canny. También debo mostrar las imágenes procesadas con matplotlib. ¿Podrías ayudarme a estructurarlo como un flujo completo y organizado además de visualizar correctamente cada imagen individual?

---

## 💬 Reflexión Final

A través de este taller, se pudo ver cómo una computador puede "ver", identificando patrones y estructuras en una imagen a través de operaciones matemáticas. Este primer acercamiento práctico a la visión artificial sienta las bases para aplicaciones más complejas como reconocimiento de objetos, segmentación y análisis de movimiento, entre otros.

---