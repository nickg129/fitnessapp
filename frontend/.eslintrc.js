module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "settings" : {
        'react' : {
          pragma : 'React',
          version : '15.0',
        },
        'import/resolver' : {
          webpack : {
            config : path.join(__dirname, 'hack/config/webpack.config.dev.js'),
          },
        },
        'import/ignore' : [
          /node_modules/,
          /\.(scss|css)$/,
        ],
      },

    "extends": "airbnb",
    
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};