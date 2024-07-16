module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "./src/.*\\.(test|spec)?\\.(ts|tsx)$",
  roots: ["<rootDir>/src"],
};
