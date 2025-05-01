Feature: Login
Funcioanlidade para realizar variados Logins no sistema PHPTravels

Scenario Outline: "<cenario>"
    Given eu acesse a página da aplicação
    When eu inserir meu email "<email>" e minha senha "<senha>"
    And clicar no botão entrar
    Then tenho meu acesso "<messagem>"

Examples:
    | cenario               | email                | senha         | messagem                  |
    | Login com sucesso     | user@phptravels.com   | demouser | Login Successfully      |