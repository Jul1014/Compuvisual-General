# 🏁 Segmentando el Mundo: Binarización y Reconocimiento de Formas

## 📅 Fecha
2025-05-05 – Fecha de entrega

---

## 🎯 Objetivo del Taller

Aplicar técnicas de binarización y análisis de contornos para detectar, segmentar y cuantificar formas presentes en una imagen en escala de grises. El objetivo es mostrar cómo se puede estructurar la información visual para su análisis computacional.

---

## 🧠 Conceptos Aprendidos

- Binarización de imágenes: umbral fijo con Otsu y umbral adaptativo.
- Extracción de contornos y medición de propiedades geométricas.
- Cálculo de áreas, perímetros y centros de masa.
- Representación visual de resultados mediante superposición de datos.
- Uso de gráficos estadísticos para resumir información visual detectada.

---

## 🔧 Herramientas y Entornos

- Python (Google Colab)
- OpenCV (cv2)
- NumPy
- Matplotlib

---

## 🧪 Implementación en Python

### 🔹 Etapas realizadas

1. Cargar una imagen desde internet y convertirla a escala de grises.
2. Aplicar dos técnicas de binarización: umbral fijo (Otsu) y umbral adaptativo.
3. Detectar formas (contornos externos) en la imagen binarizada.
4. Calcular métricas clave como área, perímetro, centroide y cajas delimitadoras.
5. Dibujar sobre la imagen original los resultados obtenidos.
6. Visualizar comparaciones y gráficas de resumen con Matplotlib.

### 🔹 Código relevante

```python
#Resumen Estadistico de las formas encontradas en un diccionario
def extraer_info(formas):
    resumen = {
        "conteo": len(formas),
        "areas": [],
        "perimetros": [],
        "centros": [],
        "cajas": []
    }

    for f in formas:
        resumen["areas"].append(cv2.contourArea(f))
        resumen["perimetros"].append(cv2.arcLength(f, True))
        
        M = cv2.moments(f)
        cx = int(M["m10"] / M["m00"]) if M["m00"] else 0
        cy = int(M["m01"] / M["m00"]) if M["m00"] else 0
        resumen["centros"].append((cx, cy))
        
        resumen["cajas"].append(cv2.boundingRect(f))

    resumen["area_media"] = np.mean(resumen["areas"]) if resumen["areas"] else 0
    resumen["perimetro_medio"] = np.mean(resumen["perimetros"]) if resumen["perimetros"] else 0
    return resumen
```

---
## 📊 Resultados Visuales

El análisis mostró cómo la binarización permite detectar estructuras complejas en imágenes reales, permitiendo identificar las mismas:
> ![Muestra del funcionamiento en Python](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-04_Taller5_Binarizacion_Reconocimiento_Formas/Python/ImagenBinarizacionReconocimientoFormas.png)

----------

## 🧩 Prompts Usados

- Necesito entregar un taller práctico que muestre cómo segmentar una imagen en blanco y negro usando umbralización, extraer contornos y calcular métricas como área y perímetro. También quiero superponer los resultados sobre la imagen original y graficar los promedios. ¿Puedes estructurar el código y explicarmelo visualmente?

----------


## 💬 Reflexión Final

Este taller permitió explorar la manera en que una computadora puede separar objetos de un fondo, cuantificarlos y analizarlos de manera objetiva. A través de estas herramientas básicas, se abren las puertas hacia aplicaciones más complejas como el reconocimiento de objetos, seguimiento y clasificación visual.
