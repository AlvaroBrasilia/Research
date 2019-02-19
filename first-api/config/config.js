export default {
    database: 'books',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'book.sqlite',
        operatorsAliases: false,
        freezeTableName: true,
        define: {
            underscored: true
        }
    }
}