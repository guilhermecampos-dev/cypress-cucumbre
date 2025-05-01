/// <reference types="cypress" />
import LoginPage from "../pages/login_pages";
const loginPage = new LoginPage


Given(/^eu acesse a página da aplicação$/, () => {
	loginPage.acessHomePage()

});

When(/^eu inserir meu email "([^"]*)" e minha senha "([^"]*)"$/, (email, password) => {
	console.log(email, password);
	loginPage.acessLoginPage()

	loginPage.fillLoginInfo(email, password)
});

When(/^clicar no botão entrar$/, () => {
	loginPage.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (message) => {
	console.log(message);
	cy.contains('Dashboard')
});
