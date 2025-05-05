/// <reference types="cypress" />
import RegisterPages from "../pages/register_pages";

const registerPage = new RegisterPages


Given(/^acesso a página de cadastro$/, () => {
    registerPage.visitPage()
});

Given(/^inserir nosso Nome "([^"]*)" e Sobrenome "([^"]*)"$/, (name, surname) => {
    registerPage.fillNameAndSurname(name, surname)

});

Given(/^informamos nossos dados de contato "([^"]*)", "([^"]*)", "([^"]*)"$/, (adress, email, phone) => {
    registerPage.fillContacts(adress, email, phone)

});

Given(/^informamos nosso gênero como "([^"]*)" e hobbies "([^"]*)"$/, (gender, hobbie) => {
    registerPage.selectRadioGender(gender)
    registerPage.selectCheckHobbie(hobbie)

});

Given(/^informamos nossas skills "([^"]*)" e nosso país "([^"]*)"$/, (skill, country) => {
    registerPage.selectSkills(skill)
    registerPage.selectCountry(country)


});

When(/^eu selecionar meu nascimento "([^"]*)", "([^"]*)", "([^"]*)"$/, (year, month, day) => {
    registerPage.selectBirthDay(year, month, day)

});

When(/^inserir minha senha "([^"]*)", e "([^"]*)"$/, (pass, confirm_pass) => {
    registerPage.inputPassword(pass, confirm_pass)

    registerPage.selectFile()

});

When(/^clico no botão cadastrar$/, () => {
    registerPage.btnSubmit()
});

Then(/^Tenho meu cadastro realizad com sucesso$/, () => {

});
