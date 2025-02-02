module.exports = {
  env: {
    es6: true,
		jest: true,
		browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y', 'prettier', 'react-hooks' ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],
		'import/prefer-default-export': 'off',

		'no-unused-vars': ['error', { argsIgnorePattern: '^_' } ],
		'react/jsx-one-expression-per-line': 'off',
		'global-require': 'off',
		'react-native/no-raw-text': 'off',
		'no-param-reassign': 'off',
		'no-underscore-dangle': 'off',
		camelcase: 'off',
		'no-console': ['error', { allow: ['tron'] }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',

    'react/state-in-constructor': [1, 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-props-no-spreading': 'off',

    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],

  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }

    }
  }
};
