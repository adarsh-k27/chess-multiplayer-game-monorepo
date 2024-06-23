module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow the use of alert, confirm, and prompt.",
            category: "Best Practices",
            recommended: true
        },
        schema: [] // no options
    },
    create(context) {
        return {
            CallExpression(node) {
                const calleeName = node.callee.name;
                if (calleeName === 'alert' || calleeName === 'confirm' || calleeName === 'prompt') {
                    context.report({
                        node,
                        message: 'Avoid using {{ name }}.',
                        data: {
                            name: calleeName
                        }
                    });
                }
            }
        };
    }
};
