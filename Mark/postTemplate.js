// Post Function for Post Template
function postTemplate(query)
{
    const url = 'http://localhost:3000/api/addTemplate'
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

   // Get method example to get ALL Templates from a specific table
 function getTemplates()
 {
   const url = 'http://localhost:3000/api/getTemplates'
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
// getTemplates();
// postTemplate("Fake Data");