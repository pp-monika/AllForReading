module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
  ],
  "plugins": ["syntax-class-properties", "transform-class-properties"]
};
