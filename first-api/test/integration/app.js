describe('Routes Book', () => {
    const Books = app.datasource.models.Books,
    defaultBook = {
        id: 1,
        name : 'Default Book'
    };

    beforeEach(done => {
        Books
            .destroy({where: {}})
            .then(() => Books.create(defaultBook))
            .then(() => {
                done()
            })
    })

    describe('Router GET /books', () => {
        it('should return a list of books', () => {
            request
                .get('/books')
                .end((err, res) => {
                    expect(res.body[0].id).to.be.eql(defaultBook.id);
                    expect(res.body[0].name).to.be.eql(defaultBook.name);

                    //done(err);
                }); 
        })
    })
})