module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-control-statements/recommended"
    ],
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-control-statements",
        "react-hooks"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React", // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {
                "property": "freeze",
                "object": "Object"
            },
            {
                "property": "myFavoriteWrapper"
            }
        ],
        "linkComponents": [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            {
                "name": "Link",
                "linkAttribute": "to"
            }
        ]
    },
    "globals": {
        "window": true,
        "URLSearchParams": true,
        "document": true,
        "NODE_ENV": true,
        "PORT": true,
        "console": true,
        "Promise": true,
        "RTCPeerConnection": true,
        "RTCSessionDescription": true,
        "RTCIceCandidate": true,
        "AudioContext": true,
        "Audio": true,
        "Uint8Array": true,
        "setTimeout": true,
        "clearTimeout": true,
        "navigator": true,
        "If": true,
        "process": true,
        "Image": true,
        "require": true,
        "fetch": true,
        "module": true,
        "FormData": true,
        "FileReader": true
    },
    "rules": {
        "no-console": "warn",
        "quotes": [
            "error",
            "single"
        ],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "semi": "error",
        "react/prop-types": "warn",
        "react/default-props-match-prop-types": "error",
        "react/require-default-props": "warn",
        "react/jsx-no-undef": [
            "error",
            {
                "allowGlobals": true
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
}
