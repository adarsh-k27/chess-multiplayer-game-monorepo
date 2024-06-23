
module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Check if the function name was starting with small case letter or not"
        },
        fixable: "code",
        schema: []
    },
    create(context) {
        function checkFunctionDeclaration(node){
            
            if (node.id && /^[a-z][a-zA-Z0-9]*$/.test(node.id.name) === false) {
                context.report({
                    node,
                    message: 'Function name "{{ name }}" should be in camelCase.',
                    data: {
                        name: node.id.name
                    }
                });
            }
        }

        function checkArrowFunctionDeclaration(node){
            if (node.init && node.init.type === "ArrowFunctionExpression" && /^[a-z][a-zA-Z0-9]*$/.test(node.id.name) === false) {
                context.report({
                    node,
                    message: 'Function name "{{ name }}" should be in camelCase.',
                    data: {
                        name: node.id.name
                    }
                });
            }

        }
        return {
            VariableDeclaration :checkArrowFunctionDeclaration,
            FunctionDeclaration:checkFunctionDeclaration
        };
    }
};





