module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Enforce camelCase naming for variables.",
            category: "Stylistic Issues",
            recommended: true
        },
        schema: [] // no options
    },
    create(context) {
        return {
            VariableDeclarator(node) {
                if (node.id && node.init.type =="Literal" && /^[a-z][a-zA-Z0-9]*$/.test(node.id.name) === false) {
                    context.report({
                        node,
                        message: 'Variable name "{{ variableName }}" should be in camelCase.',
                        data: {
                            variableName: node.id.name
                        }
                    });
                }
            }
        };
    }
};
