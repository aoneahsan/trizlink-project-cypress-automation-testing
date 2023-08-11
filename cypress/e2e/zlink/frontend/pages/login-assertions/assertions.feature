Feature:  assertions of login page
    Scenario: check and validate all assertions of login page
        Given I access the Z-Link Website
        When I click on the login button at home menu
        And i enter the invalid email asd123
        And i click outside email box
        And assert enter a valid email
        And enter password below 8 digits 1212
        And click outside password box
        And assert password include special characrter
        Then login button is disabled