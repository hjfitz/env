module.exports = {
  extends: "airbnb",
  rules: {
    "no-console": 0,
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true }
    ],
    "import/extensions": 0,
    "arrow-parens": ["error", "as-needed"],
    "no-return-assign": 0,
  },
  env: {
    node: true,
    mocha: true,
  }
};