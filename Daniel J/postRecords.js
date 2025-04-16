function postTemplate(query)
{
    const url = 'http://localhost:3000/api/addTemplate'
    const data = query;
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


// Post Function for Post User
function postRecords(query)
{
    const url = 'http://localhost:3000/api/addRecord'
    const data = query;
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
  async function getRecords()
  {
    const url = 'http://localhost:3000/api/getRecords'
    const customHeaders = {
        "Content-Type": "application/json",
    }

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: customHeaders
        });
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Allow the caller to handle errors
    }

}


  // Post Function for Post User
function postUser(query)
{
    const url = 'http://localhost:3000/api/addUser'
    const data = query;
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

  async function deleteUsers() {
    const url = 'http://localhost:3000/api/deleteAllUsers';
    const customHeaders = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: customHeaders
        });
        const data = await response.json();
        console.log(data); // You can still log it for debugging
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Allow the caller to handle errors
    }
}

  // Get method example to get ALL Records from a specific table
  async function getUsers() {
    const url = 'http://localhost:3000/api/getUsers';
    const customHeaders = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: customHeaders
        });
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Allow the caller to handle errors
    }
}

// Get method example to get ALL Records from a specific table
async function getTemplates() {
    const url = 'http://localhost:3000/api/getTemplates';
    const customHeaders = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: customHeaders
        });
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Allow the caller to handle errors
    }
}

async function loginUser(username, password) {
    const url = 'http://localhost:3000/api/loginUser';
    const data = {
        "username": username,
        "password": password
    };

    const customHeaders = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: customHeaders,
            body: JSON.stringify(data),
        });

        const responseData = await response.json(); // Wait for the response data

        return responseData;
    } catch (error) {
        console.error("Error logging in:", error);
        return -1; // Return -1 in case of an error
    }
}

async function getUserByID(id) {
    const url = 'http://localhost:3000/api/getUserByID';
    const data = {
        "id": id
    };

    const customHeaders = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: customHeaders,
            body: JSON.stringify(data),
        });
        const responseData = await response.json(); // Wait for the response data
        return responseData;
    } catch (error) {
        console.error("Error logging in:", error);
        return -1; // Return -1 in case of an error
    }
}

async function updateUserPermissions(id, permissions) {
    const url = 'http://localhost:3000/api/updateUserPermissions';
    const data = {
        "userId": id,
        "permissions": permissions
    };

    const customHeaders = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: customHeaders,
            body: JSON.stringify(data),
        });
        const responseData = await response.json(); // Wait for the response data
        return responseData;
    } catch (error) {
        console.error("Error logging in:", error);
        return -1; // Return -1 in case of an error
    }
}

async function a(){
console.log(await getRecords());
//console.log(await getUserByID(1));
};

//Uncomment these lines to test them
// deleteUsers();
// console.log(loginUser("danjon03", "Password"));

//postUser(query);

//deleteUsers();
//postUser(query);
let x = {
    Brand: "Dell",
    MobileorLaptop: "Laptop",
    OS: "Windows",
    template: "Device",
    timestamp: "4/15/2025, 7:15:35 PM",
    userId: 0
  };
//postRecords(x)
//postTemplate(x);
a();

//getRecords();
//postRecords("Fake Data");