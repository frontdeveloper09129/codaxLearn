# problem
1.    pushing secret data in resporitory and get exposed or acces by eveyone, we dont have to exposed our secret to everyone.
    # solution: 
        -   we have to put our secret data in our .env so our git commit ignore that.
2.    return or send a response data to the browser so hacker or user can change that data.
    # solution:
        -    we dont have to send to our browser our sensitive data or expose it.

3.    | High | Authentication check only tests whether a cookie exists.
    # solution:
        -   Modify the CheckCookies function to query the sessions table in the database using the sessionId.
        -   Return a 401 Unauthorized response stating the session is invalid if the cookie is missing, expired, or forged.
4.  | server.js | PORT| we using the intire value of .env file in our app.listen,  we have to target the specific value which is (PORT)
    # SOLUTION:
        -   GET THE SPECIFIC PORT FROM .ENV FILE
        -   const PORT = .env.PORT || 5000
    | server.js | using htpp://localhost:5000 |
        -   we have to determine if our system is production or development 
                -   in that way we can determine if we are going to use http://localhost:5000 or https://codaxLearn.com