const requireIndex = require("requireindex");

module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
    recommended: {
        plugins: ["custom-rules"],
        rules: {
            "custom-rules/no-window-dialogs": "error",
            "custom-rules/function-camelcase": "error",
            "custom-rules/no-test-prefix": "error",
            "custom-rules/camelcase-variable":"error"
        }
    },
    all: {
        plugins: ["custom-rules"],
        rules: {
            "custom-rules/no-window-dialogs": "error",
            "custom-rules/function-camelcase": "error",
            "custom-rules/no-test-prefix": "error",
            "custom-rules/require-jsdoc": "warn"
        }
    }
};

