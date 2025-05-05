/// <reference types="cypress" />
import RegisterElements from "../elements/register_elements";
const registerElements = new RegisterElements

const url = 'https://demo.automationtesting.in/Register.html'

class RegisterPages{

    visitPage(){
        cy.visit(url)
    }

    fillNameAndSurname(name, surname){
        cy.get(registerElements.inputFirstName()).type(name)
        cy.get(registerElements.inputLastName()).type(surname)
    }

    fillContacts(adress, email, phone){
        cy.get(registerElements.inputAdress()).type(adress)
        cy.get(registerElements.inputAdressEmail()).type(email)
        cy.get(registerElements.inputPhone()).type(phone)   
    }

    selectRadioGender(gender){
        cy.get(registerElements.checkRadio()).check(gender)
    }

    selectCheckHobbie(hobbie){
        cy.get(registerElements.checkHobbie()).check(hobbie)
    }

    selectLanguage(){

    }

    selectSkills(skill){
        cy.get(registerElements.selectSkills()).select(skill)
    }

    selectCountry(country){
        cy.get(registerElements.seelctCountry()).select(country, {force: true})
    }

    selectBirthDay(year,month,day){
        cy.get(registerElements.selectYear()).select(year)
        cy.get(registerElements.selectMonth()).select(month)
        cy.get(registerElements.selectDay()).select(day)
    }

    inputPassword(pass, confirmPass){
        cy.get(registerElements.inputPass()).type(pass)
        cy.get(registerElements.inputConfirmPass()).type(confirmPass)
    }

    btnSubmit(){
        cy.get(registerElements.submitRegister()).click()
    }
    

    selectFile(){
        cy.get(registerElements.selectFile()). selectFile('cypress/src/images.jpeg')
    }
 

}export default RegisterPages;