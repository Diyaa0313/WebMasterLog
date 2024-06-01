import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [dimension, setDimension] = useState(128);

  const handleTextChange = (e) => setText(e.target.value);
  const handleBgColorChange = (e) => setBgColor(e.target.value);
  const handleDimensionChange = (e) => setDimension(e.target.value);

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text to encode"
        value={text}
        onChange={handleTextChange}
      />
      <button className="green-button" onClick={() => {}}>
        Generate
      </button>
      <div>
        <label>Background Color:</label>
        <input type="color" value={bgColor} onChange={handleBgColorChange} />
      </div>

      <div>
        <label>Dimension:</label>
        <input
          type="range"
          min="64"
          max="512"
          value={dimension}
          onChange={handleDimensionChange}
        />
      </div>
      <QRCode
        value={text || " "}
        bgColor={bgColor}
        size={parseInt(dimension, 10)}
      />
    </div>
  );
};

export default QRCodeGenerator;
