// Post Function for Post User
function postUser(query)
{
    const url = 'http://localhost:3000/api/addUser'
    const data = {
        "Template": query
    };
    //future change :: const data = query;

    const customHeaders = {
        "Content-Type": "application/json",
    }
    
    fetch(url, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
  }

   // Get method example to get ALL users from a specific table
 function getUsers()
 {
   const url = 'http://localhost:3000/api/getUsers'
   const customHeaders = {
       "Content-Type": "application/json",
   }

   fetch(url, {
       method: "GET",
       headers: customHeaders
   })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Error:', error));
 }

//Uncomment these lines to test them
// getUsers();
// postUser("Fake Data");