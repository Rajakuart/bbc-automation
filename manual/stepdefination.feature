@manual
Feature: BBC Website Testing 
As a BBC user
  I want to navigate the site, sign in/out, and view sports content
  So that I can read articles and check whether commenting is available

  Background:
    Given I am on the BBC homepage

  @manual @nav
  Scenario: User can navigate to BBC Homepage
    When I view the main navigation menu
    Then I should see a welcome/banner message
    And I should see navigation links for News, Sport, Weather, and other sections

  @manual @auth
  Scenario: User can access Sign In
    When I click the "Sign in" button in the top navigation
    Then I should be redirected to the Sign In page
    And I should see fields for username and password input

  @manual @auth
  Scenario: User can sign out
    Given I am signed in to my BBC account
    When I click the "Sign out" option
    Then I should be signed out of my account
    And I should be redirected to the BBC homepage

    @manual @search
  Scenario: Search functionality on BBC homepage
    When I enter "cricket" in the search box
    And I submit the search
    Then I should see search results related to "cricket"
    And I should see results from News and Sport sections

  @manual @sport
  Scenario: User can open BBC Sport
    When I click the "Sport" link in the main navigation
    Then I should be redirected to the BBC Sport page
    And I should see the latest sports headlines
    And I should see navigation for different sports categories

  @manual @sport @comments
  Scenario: User can open a sports article and view comments section
    Given I am on a BBC Sport article page
    When I navigate to the article's comments section
    Then I should see the comments module (if available)
    And I should see the full article content
    And I should see article metadata such as publish date and author

  @manual @comments
  Scenario: User can scroll to comments section on any article
    Given I am viewing a BBC article
    When I scroll to the comments section
    Then I should see existing user comments (if enabled)
    And I should see options to sort comments by newest or highest rated

    @manual @comments
    Scenario: User cannot comment using foul language
      Given I am signed in to my BBC account
      And I am viewing a BBC article with comments enabled
      When I attempt to post a comment containing foul language
      Then I should see a message indicating that my comment violates community guidelines
      And my comment should not be posted

      @manual @comments
        Scenario: User can post post inappropriate emojis in comnets section
          Given I am signed in to my BBC account
          And I am viewing a BBC article with comments enabled
          When I attempt to post a comment containing inappropriate emojis
          Then I should see a message indicating that my comment violates community guidelines
          And my comment should not be posted

  
