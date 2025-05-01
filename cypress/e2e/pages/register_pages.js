/// <reference types="cypress" />
import RegisterElements from "../elements/register_elements";
const registerElements = new RegisterElements

class RegisterPages{

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

    selectHobbies(hobbies){
        cy.get(registerElements.checkHobbie()).check(hobbies)
    }

    selectLanguage(){

    }

    selectSkills(skill){
        cy.get(registerElements.selectSkills()).select(skill)
    }

    selectCountry(country){
        cy.get(registerElements.seelctCountry()).select(country)
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


}export default RegisterPages;