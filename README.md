# backend-challenge

## Story:
You’re a sports and activities junkie! You belong to two or more teams. You want to build a profile page to show people which teams you’re a part of and which sports you love. 

## Details:
* Build an API that provides the necessary endpoints for a profile page with the following functionality:  
  * shows a list of sports the user is interested in
  * list items should have an icon and the name of the sport
  * shows a list of teams the user is a member of
  * shows profile information about the user – first & last name, email, height, weight
  * provides forms where the user can enter and edit profile information, and select one or more sports they’re interested in
* API should be written in Ruby on Rails
* We’d prefer the frontend to be an SPA (we use Angular 5 but you can use whatever you’re comfortable with)
* Data should be stored in an RDBMS (MySQL, PostgreSQL, SQLite, etc)
* Design is up to you, but should have a header, body and footer sections
* We value testing and would love to see tests for the API (bonus points for frontend tests)

## Work:
* Since it's a small project, committing to master is fine, but if you'd rather develop on a branch and open a PR, that's acceptable too.
* Please don't hesitate to reach out if you need clarification about the requirements or run into an issue along the way.

## Delivery
* Please deploy your application (e.g. AWS, Heroku, etc.)
* When your challenge is complete, please:
  * complete the Notes section below
  * let us know by sending an email to kevin@upmetrics.com  
  
## Candidate Notes

URL: https://sleepy-fjord-28068.herokuapp.com/

### Instructions For Running the App Locally
1. Clone the repo
2. [Install Yarn](https://yarnpkg.com/en/docs/install#mac-stable), if it's not already.
3. [Install Foreman](https://github.com/ddollar/foreman)
3. Run following commands:

    ```
    yarn Install
    bundle Install
    rake db:create db:migrate db:seed
    foreman start -f Procfile.dev -p 3000
    ```

### Notes
- Setting up the frontend test framework with enzyme and jest was unreasonably cumbersome. Seemed like an easier approach, with far less configuration and added packages, should have worked. Decided to go ahead with what did work, in order to get some tests written. Will revist this section if time permits. I think the test environment can be cleaned up and simplified.
