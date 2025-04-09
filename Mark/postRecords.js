// Post Function for Post Records
function postRecords(query)
{
    const url = 'http://localhost:3000/api/addRecord'
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

   // Get method example to get ALL Records from a specific table
 function getRecords()
 {
   const url = 'http://localhost:3000/api/getRecords'
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
// getRecords();
// postRecords("Fake Data");