module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow variable names containing numbers.",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: [] // no options
    },
    create(context) {
        return {
            VariableDeclarator(node) {
                if (/\d/.test(node.id.name)) {
                    context.report({
                        node,
                        message: 'Variable name "{{ variableName }}" should not contain numbers.',
                        data: {
                            variableName: node.id.name
                        }
                    });
                }
            }
        };
    }
};
