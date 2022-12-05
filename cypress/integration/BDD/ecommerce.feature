Feature: End to End Ecommerce validation
    
    application Rgression
    
    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to cart
    And validate the total prices
    Then select the country submit and verify Thankyou


















    # Scenario: Filling the form to shop
    # Given I open Ecommerce Page
    # When I fill the form details
    # |name|gender|
    # |bobz|Male|

    # Then validate the forms behavior
    # And select the shop Page