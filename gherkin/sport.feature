@manual @regression
Feature: BBC Website Testing 
As a BBC user
  User want to navigate the site, sign in/out, and view sports content
  So that user can read articles and check whether commenting is available

  @nav
  Scenario: User can navigate to BBC Homepage
  Given user is on the BBC homepage
    When user loads the page
    Then user should see the BBC logo
    And user should see the main navigation menu
    When user views the main navigation menu
    Then user should see a welcome/banner message
    And user should see navigation links for News, Sport, Weather, and other sections

  @auth
  Scenario: User can access Sign In
    Given user is on the BBC homepage
    When user click the "Sign in" button in the top navigation
    Then user should be redirected to the Sign In page
    And user should see fields for username and password input

  @auth
  Scenario: User can sign out
    Given user is signed in to their BBC account
    When user click the "Sign out" option
    Then user should be signed out of their account
    And user should be redirected to the BBC homepage

  @search
  Scenario: Search functionality on BBC homepage
    Given user is on the BBC homepage
    When user enter "cricket" in the search box
    And user submit the search
    Then user should see search results related to "cricket"
    And user should see results from News and Sport sections

  @sport
  Scenario: User can open BBC Sport
    Given user is on the BBC homepage
    When user click the "Sport" link in the main navigation
    Then user should be redirected to the BBC Sport page
    And user should see the latest sports headlines
    And user should see navigation for different sports categories

  @sport @comments
  Scenario: User can open a sports article and view comments section
    Given user is on a BBC Sport article page
    When user navigates to the article's comments section
    Then user should see the comments module (if available)
    And user should see the full article content
    And user should see article metadata such as publish date and author

  @comments
  Scenario: User can scroll to comments section on any article
    Given user is viewing a BBC article
    When user scrolls to the comments section
    Then user should see existing user comments (if enabled)
    And user should see options to sort comments by newest or highest rated

    @comments
    Scenario: User cannot comment using foul language
      Given user is signed in to their BBC account
      And user is viewing a BBC article with comments enabled
      When user attempt to post a comment containing foul language
      Then user should see a message indicating that their comment violates community guidelines
      And their comment should not be posted

      @comments
        Scenario: User can post post inappropriate emojis in comments section
          Given user is signed in to their BBC account
          And user is viewing a BBC article with comments enabled
          When user attempt to post a comment containing inappropriate emojis
          Then user should see a message indicating that their comment violates community guidelines
          And their comment should not be posted

  
