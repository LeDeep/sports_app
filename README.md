## Details:
* shows a list of sports the user is interested in
* shows a list of teams the user is a member of
* shows profile information about the user – first & last name, email, height, weight
* provides forms where the user can enter and edit profile information, and select one or more sports they’re interested in
* API is written in Ruby on Rails
* Frontend is written in React


### Instructions For Running the App Locally
1. Clone the repo
2. [Install Yarn](https://yarnpkg.com/en/docs/install#mac-stable)
3. [Install Foreman](https://github.com/ddollar/foreman)
3. Run following commands:

    ```
    yarn Install
    bundle Install
    rake db:create db:migrate db:seed
    foreman start -f Procfile.dev -p 3000
    ```

### Working app on Heroku
URL: https://sleepy-fjord-28068.herokuapp.com/
