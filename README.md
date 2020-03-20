# React-Native-foodSearchApi

# One of the challenges was getting the search bars "Search term" to change in the state. It was a similar problem to his color screen rgb demo site where the change in the rbg(value) would update the `rba(255,70,125)`

# This we had the SearchScreen receive the "term" and update the screen. We created onTermChange that passes the newTerm prop to setTerm("newTerm") as the new state and update the value that equals that search "term".

# Refactored onChangedText={newTerm => onTermChange(newTerm)} TO onChangeText={onTermChange} since the argument is being passed and passing right to function we pass a reference to the function. By passing onChangeText={onTermChange} and NOT passing passing empty () IE: onchangeText={onTermChange()} for the function we are passing it by reference

# Once the user changed term we have to submit that updated state.

# Using Axios instead of the built in fetch() function because error handling is a bit weird and require to write a lot of wrapper code.

# Created a yelp.js api to create an instance of axios and preconfigure to use that yelp API with some preset options like baeURL and headers

# Update the content of the results we need to create a new const of results and setResults for the API aside you can call results with businesses or restaurant if you wanted.

# creating a helper function called searchApi we create an async (or a promise) to make a get request to yelp.get. Adding the second argument of params{obj} we set limit: 50 to make a query string. So we need to call our searchApi function any time we submit our search therm
