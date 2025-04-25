import React from "react";

const ColorTest = () => {
  const colors = [
    { name: "Text White", variable: "--color-text-white" },
    { name: "Text Off White", variable: "--color-text-off-white" },
    { name: "Text Tertiary", variable: "--color-text-tertiary" },
    { name: "Text Tertiary Light", variable: "--color-text-tertiary-light" },
    { name: "Text Purple", variable: "--color-text-purple" },
    { name: "Text Purple 2", variable: "--color-text-purple2" },
    { name: "Background Primary", variable: "--color-background-primary" },
    { name: "Linear Gradient 1", variable: "--color-linear-gradient1" },
    { name: "Linear Gradient 2", variable: "--color-linear-gradient2" },
    { name: "Linear Gradient 3", variable: "--color-linear-gradient3" },
    { name: "Linear Gradient 4", variable: "--color-linear-gradient4" },
    { name: "Active Button", variable: "--color-active-button" },
    { name: "Green", variable: "--color-green" },
    { name: "Red", variable: "--color-red" },
  ];

  const fontSizes = [
    { name: "H1", variable: "--text-h1" },
    { name: "H2", variable: "--text-h2" },
    { name: "H3", variable: "--text-h3" },
    { name: "H4", variable: "--text-h4" },
    { name: "H5", variable: "--text-h5" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Color and Font Size Test</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colors.map((color) => (
            <div
              key={color.variable}
              className="p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div className="flex-1">
                <span className="font-medium">{color.name}</span>
                <span className="text-sm opacity-75 block">
                  {color.variable}
                </span>
              </div>
              <div
                className="w-16 h-16 rounded-md ml-4"
                style={{ backgroundColor: `var(${color.variable})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Font Sizes</h2>
        <div className="space-y-4">
          {fontSizes.map((size) => (
            <div key={size.variable} className="p-4 rounded-lg border">
              <div className="flex items-center justify-between">
                <span style={{ fontSize: `var(${size.variable})` }}>
                  {size.name} Text
                </span>
                <span className="text-sm opacity-75">{size.variable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorTest;
