module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: '变量名建议小写'
        }
    },
    create(content) {
        return {
            VariableDeclaration(node){
                console.log(1);
                console.log(node);
                console.log(content);
            }
        }
    },
};