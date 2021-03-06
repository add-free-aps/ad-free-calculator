module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": "*",
    }
  },
  /**
    * 0 = off,
    * 1 = warning,
    * 2 = error
    */
  "rules": {
    "semi": [2, "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": [2, { "allowAfterThis": true }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-autofocus": "off",
    "react/no-danger": "off",
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/require-extension": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "react/sort-comp": [2, { "order": [ 'static-methods', 'lifecycle', 'everything-else', 'render'], }]
  },
  "env": {
    "browser": true
  }
};
