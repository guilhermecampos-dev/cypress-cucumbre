Feature: Cadastro de Usuários
Cadastro de usuário no sistema

Scenario Outline: "<caso_teste>"
    Given acesso a página de cadastro
    And inserir nosso Nome "<name>" e Sobrenome "<surname>"
    And informamos nossos dados de contato "<adress>", "<email>", "<phone>"
    And informamos nosso gênero como "<gender>" e hobbies "<hobbie>"
    And informamos nossas skills "<skill>" e nosso país "<country>"
    When eu selecionar meu nascimento "<year>", "<month>", "<day>"
    And inserir minha senha "<pass>", e "<confirm_pass>"
    And clico no botão cadastrar
    Then Tenho meu cadastro realizad com sucesso 

Examples:
|caso_teste          | name     | surname| adress| email        | phone       |gender| hobbie| skill    | country    | year| month    | day| pass    | confirm_pass|
|cadastro com sucesso| Guilherme| Campos | CSB 06| gui@gmail.com| 61998829290 | Male | Hockey| HTML     | India      | 1989| September| 15 | 123@456 | 123@456     |