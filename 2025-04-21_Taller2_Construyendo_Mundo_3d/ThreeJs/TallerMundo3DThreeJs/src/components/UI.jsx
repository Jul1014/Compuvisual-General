import React from 'react'

const UI = ({ viewMode, setViewMode, modelInfo }) => {
  const handleViewModeChange = (mode) => {
    setViewMode(mode)
  }

  return (
    <div className="ui-container">
      <div className="controls">
        <h3>Modo de visualización</h3>
        <div className="buttons">
          <button 
            className={viewMode === 'normal' ? 'active' : ''} 
            onClick={() => handleViewModeChange('normal')}
          >
            Normal
          </button>
          <button 
            className={viewMode === 'wireframe' ? 'active' : ''} 
            onClick={() => handleViewModeChange('wireframe')}
          >
            Wireframe
          </button>
          <button 
            className={viewMode === 'edges' ? 'active' : ''} 
            onClick={() => handleViewModeChange('edges')}
          >
            Edges
          </button>
          <button 
            className={viewMode === 'vertices' ? 'active' : ''} 
            onClick={() => handleViewModeChange('vertices')}
          >
            Vertices
          </button>
        </div>
      </div>
      
      <div className="model-info">
        <h3>Información del modelo</h3>
        <ul>
          <li>Vértices: {modelInfo.vertices}</li>
          <li>Caras: {modelInfo.faces}</li>
          <li>Aristas: {modelInfo.edges}</li>
        </ul>
      </div>
    </div>
  )
}

export default UI