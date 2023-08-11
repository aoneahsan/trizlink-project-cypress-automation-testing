Feature: Z-Link Website Sign up Page

    Scenario: Sign Up using credentials

        Given I access the Z-Link Website
        When click on the signup button at home menu
         And  then enter the username apple
        And  then enter the email apple@zaions.com
        And enter the password 123!@#
        And enter the same password 123!@#
        And click on the signup button
        Then I should be presented with the following message Login successfully.

    Scenario: Login using invalid credentials

        Given I access the Z-Link Website
        When I click on the login button at home menu
        And  I enter the email ahsanmehmood@zaions.com
        And I enter the password asd123!@#
        And I click on the Login button
        Then I will be presented with following message No User found with this email.

        