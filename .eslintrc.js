module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@babel'
  ],
  'rules': {
    'max-len': [1, 140, 4],
    'indent': [1, 2, {'SwitchCase': 1, 'ignoredNodes': ['TemplateLiteral']}],
    'require-jsdoc': 0,
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    'semi': ['error', 'always'],
    'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
    'comma-dangle': ['warn', 'never'],
    'no-var': 'error',
    'no-trailing-spaces': 'warn', // warn instead of showing error
    'spaced-comment': [
      'error',
      'always',
      {
        'line': {
          'markers': ['/'] // allow Triple-Slash Directives
        }
      }
    ],
    'new-cap': 0, // replaced by @babel/new-cap because it doesn't work with decorators
    '@babel/new-cap': 'error', // better than default new-cap rule
    'no-invalid-this': 0, // it has false positives
    '@babel/no-invalid-this': 'error' // better than default no-invalid-this
  }
};
