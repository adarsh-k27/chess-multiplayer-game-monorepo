module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow function names starting with 'test'.",
            category: "Best Practices",
            recommended: false
        },
        schema: [] // no options
    },
    create(context) {
        return {
            FunctionDeclaration(node) {
                if (node.id && /^test/.test(node.id.name)) {
                    context.report({
                        node,
                        message: 'Function name "{{ name }}" should not start with "test".',
                        data: {
                            name: node.id.name
                        }
                    });
                }
            }
        };
    }
};
