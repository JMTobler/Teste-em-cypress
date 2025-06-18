let email = 'admin@admin.com';
let senha = 'admin@123';
let emailFail = 'email@teste.com';
let senhaFail = 'teste123'
describe('Testes tela de login', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/login.html');
    });
    it('Clicar em entrar com os campos em Branco', () => {
        cy.get('#btn-entrar').should('be.enabled').click();

        cy.get('#mensagem').should('be.visible');

    });

    it('Clicar em entrar com apenas o campo de email preenchido', () => {
        cy.get('#email').type(email);

        cy.get('#btn-entrar').should('be.enabled').click();

        cy.get('#mensagem').should('be.visible');
    });

    it('Clicar em entrar com apenas o campo de senha preenchido', () => {
        cy.get('#senha').type(senha);

        cy.get('#btn-entrar').should('be.enabled').click();

        cy.get('#mensagem').should('be.visible');
    });

    it('Clicar em entrar preenchendo os campos com email e senha invalidos', () => {
        cy.get('#email').type(emailFail);
        cy.get('#senha').type(senhaFail);

        cy.get('#btn-entrar').should('be.enabled').click();

        cy.get('#mensagem').should('be.visible');
    });

    it('Clicar em entrar preenchendo apenas o campo email corretamente', () => {
        cy.get('#email').type(email);
        cy.get('#senha').type(senhaFail);

        cy.get('#btn-entrar').should('be.enabled').click();

        cy.get('#mensagem').should('be.visible');
    });

    it('Clicar em entrar preenchendo apenas o campo senha corretamente', () => {
        cy.get('#email').type(emailFail);
        cy.get('#senha').type(senha);

        cy.get('#btn-entrar').should('be.enabled').click();

        cy.get('#mensagem').should('be.visible');
    });

    it('Clicar em entrar preenchendo os campos corretamente', () => {
        cy.get('#email').type(email);
        cy.get('#senha').type(senha);

        cy.get('#btn-entrar').should('be.enabled').click();

        cy.get('.navbar-brand').contains('Controle de produtos').should('be.visible');
    });
});

describe.only('Testes tela de cadatro de produtos', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/login.html');

        cy.get('#email').type(email);
        cy.get('#senha').type(senha);

        cy.get('#btn-entrar').should('be.enabled').click();
    });

    it('Cadastrar um produto preenchendo todos os campos', () => {

        cy.window().then((win) => {
            win.$('#cadastro-produto').modal({ backdrop: 'static' });
        });

        cy.get('#cadastro-produto').should('have.class', 'show').and('be.visible');
        cy.get('.modal-title').should('contain', 'Produto');

        cy.get('#codigo').type('0001');
        cy.get('#nome').type('Produto 1');
        cy.get('#quantidade').type('1000');
        cy.get('#valor').type('100,00');
        cy.get('#data').type('2000-01-10');

        cy.get('#btn-salvar').click();

        cy.get('.modal-header > .close').click();

        cy.get('tbody > tr > :nth-child(2)').contains('Produto 1').should('be.visible');
    });

    it('Cadastrar um produto faltando o campo codigo', () => {

        cy.window().then((win) => {
            win.$('#cadastro-produto').modal({ backdrop: 'static' });
        });

        cy.get('#cadastro-produto').should('have.class', 'show').and('be.visible');
        cy.get('.modal-title').should('contain', 'Produto');

        cy.get('#nome').type('Produto 1');
        cy.get('#quantidade').type('1000');
        cy.get('#valor').type('100,00');
        cy.get('#data').type('2000-01-10');

        cy.get('#btn-salvar').click();

        cy.get('#mensagem').should('be.visible');
    });

    it('Cadastrar um produto faltando o campo nome', () => {

        cy.window().then((win) => {
            win.$('#cadastro-produto').modal({ backdrop: 'static' });
        });

        cy.get('#cadastro-produto').should('have.class', 'show').and('be.visible');
        cy.get('.modal-title').should('contain', 'Produto');

        cy.get('#codigo').type('0001');
        cy.get('#quantidade').type('1000');
        cy.get('#valor').type('100,00');
        cy.get('#data').type('2000-01-10');

        cy.get('#btn-salvar').click();

        cy.get('#mensagem').should('be.visible');
    });

    it('Cadastrar um produto faltando o campo quantidade', () => {

        cy.window().then((win) => {
            win.$('#cadastro-produto').modal({ backdrop: 'static' });
        });

        cy.get('#cadastro-produto').should('have.class', 'show').and('be.visible');
        cy.get('.modal-title').should('contain', 'Produto');

        cy.get('#codigo').type('0001');
        cy.get('#nome').type('Produto 1');
        cy.get('#valor').type('100,00');
        cy.get('#data').type('2000-01-10');

        cy.get('#btn-salvar').click();

        cy.get('#mensagem').should('be.visible');
    });

    it('Cadastrar um produto faltando o campo valor', () => {

        cy.window().then((win) => {
            win.$('#cadastro-produto').modal({ backdrop: 'static' });
        });

        cy.get('#cadastro-produto').should('have.class', 'show').and('be.visible');
        cy.get('.modal-title').should('contain', 'Produto');

        cy.get('#codigo').type('0001');
        cy.get('#nome').type('Produto 1');
        cy.get('#quantidade').type('1000');
        cy.get('#data').type('2000-01-10');

        cy.get('#btn-salvar').click();

        cy.get('#mensagem').should('be.visible');
    });

    it('Cadastrar um produto faltando o campo data', () => {

        cy.window().then((win) => {
            win.$('#cadastro-produto').modal({ backdrop: 'static' });
        });

        cy.get('#cadastro-produto').should('have.class', 'show').and('be.visible');
        cy.get('.modal-title').should('contain', 'Produto');

        cy.get('#codigo').type('0001');
        cy.get('#nome').type('Produto 1');
        cy.get('#quantidade').type('1000');
        cy.get('#valor').type('100,00');

        cy.get('#btn-salvar').click();

        cy.get('#mensagem').should('be.visible');
    });

});