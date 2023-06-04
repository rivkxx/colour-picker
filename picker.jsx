import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <div style={{ backgroundColor: color, width: '200px', height: '200px' }}></div>
    </div>
  );
}

export default App;
