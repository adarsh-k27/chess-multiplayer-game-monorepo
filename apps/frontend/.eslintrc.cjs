module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    //'plugin:custom-rules/recommended'
    // we need to add a promise plugin
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','promise',"custom-rules"],
  rules: {
    'react-refresh/only-export-components': [
      'error',
      { allowConstantExport: true },
    ],
    'promise/catch-or-return':"error",
    '@typescript-eslint/no-explicit-any':"warn",
    'react-refresh/only-export-components':"off",
    
  },
}

// custom rules for Function 
// start a function name with lowercase letter 