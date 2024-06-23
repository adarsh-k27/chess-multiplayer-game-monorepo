module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow the use of window.alert, window.confirm, and window.prompt.",
            category: "Best Practices",
            recommended: true
        },
        schema: []
    },
    create(context) {
        return {
            CallExpression(node) {
                const callee = node.callee;
                const isWindowDialog = 
                    (callee.object && callee.object.name === 'window' && ['alert', 'confirm', 'prompt'].includes(callee.property.name)) ||
                    (!callee.object && ['alert', 'confirm', 'prompt'].includes(callee.name));
                
                if (isWindowDialog) {
                    context.report({
                        node,
                        message: 'Avoid using {{ name }}.',
                        data: {
                            name: callee.property ? `window.${callee.property.name}` : callee.name
                        }
                    });
                }
            }
        };
    }
};
