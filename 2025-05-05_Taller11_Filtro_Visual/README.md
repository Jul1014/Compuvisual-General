# 📷 Taller - Filtro Visual: Convoluciones Personalizadas

## 📅 Fecha

2025-05-05

---
## 🎯 Objetivo del Taller

Este taller tiene como objetivo explorar y comprender el concepto de convolución 2D para el procesamiento de imágenes, implementando manualmente filtros personalizados y comparándolos con las implementaciones de OpenCV. Se busca entender cómo diferentes kernels pueden modificar bordes, difuminar o realzar detalles en imágenes digitales.

---
## 🧠 Conceptos Aprendidos

- Implementación manual de una convolución 2D usando NumPy
- Diseño y aplicación de kernels personalizados (nitidez, desenfoque, detección de bordes)
- Comparación entre implementaciones manuales y las funciones optimizadas de OpenCV
- Visualización comparativa de resultados de procesamiento de imágenes
- Creación de interfaces interactivas para experimentar con parámetros de kernel
- Manipulación de imágenes usando operaciones matemáticas matriciales
- Entendimiento del padding reflectante y gestión de bordes en convoluciones

---
## 🔧 Herramientas y Entornos

- Python (Google Colab/Jupyter Notebook)
- NumPy
- OpenCV (cv2)
- Matplotlib
- ipywidgets (para interactividad)
- urllib (para descarga de imágenes)
- Google Colab (entorno de ejecución)

---
## 🧪 Implementación en python

### 🔹 Etapas realizadas

1.Preparación y carga de imágenes
2.Implementación manual de convolución 2D
3.Diseño de filtros predefinidos
4.Comparación visual con OpenCV
5.Creación de interfaz interactiva

## 🔹 Código relevante

```python
# Explorador de filtros personalizados en Colab
def interfaz_interactiva(imagen):
    def filtrar(d=10, c=50):
        clear_output(wait=True)
        base = (-d / 10) * np.ones((3, 3))
        base[1, 1] = c / 10

        resultado = cv2.filter2D(imagen, -1, base)

        plt.figure(figsize=(5, 5))
        plt.imshow(resultado, cmap='gray')
        plt.title(f'Centro: {c/10:.1f}, Alred: {-d/10:.1f}')
        plt.axis('off')
        plt.show()

        print("Kernel aplicado:")
        print(np.round(base, 2))

    print("Configura tu kernel personalizado:")
    interact(filtrar,
             c=IntSlider(min=0, max=100, value=50, description="Centro"),
             d=IntSlider(min=0, max=100, value=10, description="Alred."))
```
---
## 📊 Resultados Visuales

Aquí se presentan las imagenes con los filtros aplicados:
> ![Muestra del funcionamiento en Python](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-05_Taller11_Filtro_Visual/Python/ImagenFiltroVisual.png)

## 🧩 Prompts Usados

- Desarolla una forma de visualizar en python diferentes convoluciones y comparalas con las que pueden encontrarse en OpenCV, este codigo debe permitir visualizar las diferentes imagenes filtradas a la vez y tambien con un slider.

## 💬 Reflexión Final

Este taller me permitió comprender a fondo cómo funcionan las convoluciones 2D en el procesamiento de imágenes digitales. La implementación manual de la convolución reveló el proceso matemático subyacente, mientras que la comparación con OpenCV demostró la eficiencia de las bibliotecas optimizadas.

