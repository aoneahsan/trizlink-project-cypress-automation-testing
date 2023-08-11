Feature: Z-Link Website Login Page

    # Scenario: Login using valid credentials

    #     Given I access the Z-Link Website
    #     When I click on the login button at home menu
    #     And  I enter the email ahsan@zaions.com
    #     And I enter the password asd123!@#
    #     And I click on the Login button
    #     Then I should be presented with the following message Login successfully.

    # Scenario: Login using invalid credentials

    #     Given I access the Z-Link Website
    #     When I click on the login button at home menu
    #     And  I enter the email ahsanmehmood@zaions.com
    #     And I enter the password asd123!@#
    #     And I click on the Login button
    #     Then I will be presented with following message No User found with this email.

    Scenario Outline: login via z-link home page
        Given I access the Z-Link Website
        When I click on the login button at home menu
        And  I enter the email <email>
        And I enter the password <password>
        And I click on the Login button
        Examples:
            | email                   | password  |
            | ahsan@zaions.com        | asd123!@# | 
            | ahsanmehmood@zaions.com | asd123!@# |


