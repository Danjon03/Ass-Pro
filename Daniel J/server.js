// server.js
const Hapi = require('@hapi/hapi');
const MongoClient = require('mongodb').MongoClient;

// Initializes the Server
const init = async () => {
    const server = Hapi.server({ 
        port: 3000,
        host: 'localhost',
        "routes": {
            "cors": {
            "origin": ["*"],
            "headers": ["Accept", "Content-Type"], // proflipisclump
            "additionalHeaders": ["X-Requested-With"]
        }
}
    });

    // MongoDB connection setup
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    const db = client.db('Capstone');
 

    //Returns the user object from a given id
    //takes the app defined object id as a parameter.
    async function getUserByID(id)
    {
        //get everything from the users collection
        const users = await db.collection("Users").find().toArray(); // All the users in the database
                
                let returnUser = {response : "No User Found"};
                for (let i = 0; i < users.length; i++) {
                    const userData = users[i];
                    if(userData.id == id)
                    {
                        returnUser = {response : userData};
                        break;
                    }
                }
                return returnUser;
    }

    //Returns the _id attribute of a specific object
    //takes the app defined object id as a parameter
    async function getUserByIDReturnsObjectID(id)
    {
        const users = await db.collection("Users").find().toArray(); // All the users in the database
                
                let returnUser = {response : "No User Found"};
                for (let i = 0; i < users.length; i++) {
                    const userData = users[i];
                    //console.log(users[i]);
                    //console.log(userData.id + " : " + JSON.stringify(id));
                    if(userData.id == id)
                    {
                        returnUser = {response : users[i]._id};
                        break;
                    }
                }
                return returnUser;
    }

    //Get Users                                                                               //Get All Users
    server.route({
        method: 'GET',
        path: '/api/getUsers',
        handler: async (request, h) => {
            const items = await db.collection("Users").find({}).toArray();
            return items;
        }
    });
    //DeleteAll Users only used for testing
    server.route({
        method: 'GET',
        path: '/api/deleteAllUsers',
        handler: async (request, h) => {
             db.collection("Users").deleteMany({});
             return 200;
        }
    });
   
    // Get Templates
    server.route({
        method: 'GET',
        path: '/api/getTemplates',
        handler: async (request, h) => {
            const items = await db.collection("Templates").find({}).toArray();
            return items;
        }
    });

    // Get Records
    server.route({
        method: 'GET',
        path: '/api/getRecords',
        handler: async (request, h) => {
            const items = await db.collection("Records").find({}).toArray();
            return items;
        }
    });

    //Add User
    server.route({
        method: 'POST',
        path: '/api/addUser',
        handler: async (request, h) => {
            console.log(request.payload);
            const newItem = request.payload;
            const result = await db.collection("Users").insertOne(newItem);
            return result;
        }
    });

    //Add Template
        server.route({
        method: 'POST',
        path: '/api/addTemplate',
        handler: async (request, h) => {
            console.log(request.payload);
            const newItem = request.payload;
            const result = await db.collection("Templates").insertOne(newItem);
            return result;
        }
    });

    //Add Record
        server.route({
        method: 'POST',
        path: '/api/addRecord',
        handler: async (request, h) => {
            console.log(request.payload);
            const newItem = request.payload;
            const result = await db.collection("Records").insertOne(newItem);
            return result;
        }
    });
    // Login Stuff
        server.route({
        method: 'POST',
        path: '/api/loginUser',
        handler: async (request, h) => {
            try {
                const { username, password } = request.payload; // Extract username and password
                const users = await db.collection("Users").find().toArray();
                //console.log(users);
                let returnUserID = {"response" : 1000};

                for (let i = 0; i < users.length; i++) {
                    const userData = users[i];
                    //console.log(userData.username + " : " + userData.password);

                    if(userData.username == username && userData.password == password)
                    {
                        returnUserID = {"response" : userData.id};
                        break;
                    }
                    
                }
                //console.log(returnUserID.response);
                return returnUserID;
    
                // Return 1 for valid credentials, 0 for invalid credentials
            } catch (error) {
                console.error("Error handling login:", error);
                return h.response({ message: "Server error" }).code(500);
            }
        }
    });


    //get username by id. takes the integer value of the id you are looking for
    //Returns No User Found if there is no user with the matching ID in the dtabase
    //Returns the json object of that user if the user is found
    server.route({
        method: 'POST',
        path: '/api/getUserByID',
        handler: async (request, h) => {
            try {
                const {id} = request.payload; // this is the id that the user sent in
                return await getUserByID(id);

            } catch (error) {
                console.error("Error handling login:", error);
                return h.response({ message: "Server error" }).code(500);
            }
        }
    });

    //This route updates the user permissions for any given user
    //This takes the id of the user we are updating, and the permissions attributes
    server.route({
        method: 'POST',
        path: '/api/updateUserPermissions',
        handler: async (request, h) => {
            //console.log(request.payload);
            const {userId, permissions} = request.payload;
            console.log(userId + " : " + permissions);

            let x = await getUserByIDReturnsObjectID(userId);

            const filter = { _id: x.response };
            console.log(filter);
                    // Define the new permissions object
                    
            
                    // Update the record with the new permissions object
                    const update = { $set: { permissions: permissions } };
                    console.log(update);
                    const result = await db.collection("Users").updateOne(filter, update);
                    console.log(result);
                    return result;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();


