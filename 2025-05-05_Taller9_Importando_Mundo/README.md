# 🧊 Importando el Mundo: Visualización y Conversión de Formatos 3D

## 📅 Fecha

2025-05-05 – Fecha de entrega

---
## 🎯 Objetivo del Taller

El objetivo de este taller es desarrollar herramientas para analizar, visualizar y comparar modelos 3D en diferentes formatos (OBJ, STL, GLTF), implementando soluciones tanto con Python para procesamiento de datos como con React/Three.js para visualización interactiva en la web.

---
## 🧠 Conceptos Aprendidos

- Diferencias entre formatos de archivo 3D (OBJ, STL, GLTF/GLB)
- Análisis de propiedades geométricas de modelos 3D
- Manipulación y procesamiento de mallas poligonales
- Visualización interactiva de modelos 3D en navegadores
- Exportación y conversión entre formatos 3D
- Análisis comparativo de métricas en modelos 3D

---
## 🔧 Herramientas y Entornos

- Python con Trimesh, NumPy y Matplotlib
- JavaScript con React y Three.js
- React Three Fiber para integración de Three.js con React
- Bibliotecas de componentes: react-three/drei
- Tailwind CSS para estilizado
- Lucide React para iconografía

---
## 🧪 Implementación

### 🔹 Etapas realizadas en Python
1. Carga de modelos 3D usando la biblioteca Trimesh
2. Extracción y análisis de propiedades geométricas del modelo
3. Cálculo de métricas avanzadas (volumen, centro de masa)
4. Visualización básica del modelo usando Matplotlib
5. Exportación del modelo a diferentes formatos
6. Comparación de propiedades entre modelos

### 🔹 Etapas realizadas en React/Three.js
1. Creación de la interfaz de usuario responsiva con React y Tailwind
2. Implementación de visualizador 3D con React Three Fiber
3. Carga y renderizado de diferentes formatos de modelo (OBJ, STL, GLTF)
4. Desarrollo de controles interactivos para manipular la cámara
5. Extracción y visualización de información de vértices en tiempo real
6. Interfaz para comparación visual entre formatos

### 🔹 Código relevante (Python)

```python
class Model3DProcessor:
    """Clase para procesar y analizar modelos 3D"""

    def __init__(self, file_path):
        """Inicializa el procesador con la ruta del archivo"""
        self.file_path = file_path
        self.mesh = None
        self.properties = None
        self._load_model()

    def _analyze_properties(self):
        """Analiza y extrae las propiedades del modelo"""
        if self.mesh is None:
            raise ValueError("No hay un modelo cargado para analizar")

        self.properties = {
            "formato": Path(self.file_path).suffix,
            "num_vertices": len(self.mesh.vertices),
            "num_caras": len(self.mesh.faces),
            "tiene_normales": self.mesh.vertex_normals is not None,
            "tiene_texturas": hasattr(self.mesh.visual, 'uv') and self.mesh.visual.uv is not None,
            "tiene_materiales": hasattr(self.mesh.visual, 'material') and self.mesh.visual.material is not None,
            "vertices_duplicados": len(self.mesh.vertices) != len(np.unique(self.mesh.vertices, axis=0)),
            "volumen": float(self.mesh.volume) if hasattr(self.mesh, 'volume') else None,
            "centro_masa": self.mesh.center_mass.tolist() if hasattr(self.mesh, 'center_mass') else None,
        }
```

### 🔹 Código relevante (React/Three.js)

```javascript
// Componente principal de la escena
const Scene = ({ activeFormat, setVertexCount }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />

      <OBJModel url={SAMPLE_MODELS.obj} visible={activeFormat === 'obj'} onVertexCount={(v) => setVertexCount({ format: 'OBJ', count: v })} />
      <STLModel url={SAMPLE_MODELS.stl} visible={activeFormat === 'stl'} onVertexCount={(v) => setVertexCount({ format: 'STL', count: v })} />
      <GLTFModel url={SAMPLE_MODELS.gltf} visible={activeFormat === 'gltf'} onVertexCount={(v) => setVertexCount({ format: 'GLTF', count: v })} />

      <OrbitControls enableDamping dampingFactor={0.1} />
      <gridHelper args={[10, 10, '#888888', '#444444']} position={[0, -1.5, 0]} />
    </>
  );
};
```
---

## 📊 Resultados Visuales

Aquí se presenta la visualizacion del modelo subido en Python:
> ![Visualizador del modelo en python](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-05_Taller9_Importando_Mundo/Python/ImagenImportandoMundo.png)

Aqui se puede apreciar la comparacion de los modelos en Three.js:
> ![Visualizador de los modelos en Three.Js](https://github.com/Jul1014/Compuvisual-General/blob/master/2025-05-05_Taller9_Importando_Mundo/ThreeJs/GifImportandoMundo.gif)

----------
## 🧩 Prompts Usados

- Desarrolla herramientas para analizar y visualizar modelos 3D en diferentes formatos (OBJ, STL, GLTF). Implementa una solución en Python para análisis matemático y una aplicación web con Three.js para visualización interactiva.

----------
## 💬 Reflexión Final

Este taller me permitió profundizar en el fascinante mundo de la geometría 3D digital y sus representaciones. Trabajar simultáneamente con Python para el análisis matemático y con JavaScript/Three.js para la visualización interactiva me dio una comprensión más completa de los modelos 3D. Descubrí las diferencias técnicas entre formatos: OBJ es simple pero versátil, STL es perfecto para fabricación pero limitado en capacidades visuales, mientras que GLTF representa el estándar moderno con soporte para materiales y animaciones avanzadas.
