// Sample MongoDB commands for learning
const commandsForLearning = {
  "Absolute Beginner": [
    {
      question: "How do you show all databases in MongoDB?",
      command: "show dbs",
      explanation:
        "The 'show dbs' command lists all databases on the MongoDB server. It's like getting a bird's-eye view of your data landscape.",
    },
    {
      question: "How to switch to a database named 'usersDB'?",
      command: "use usersDB",
      explanation:
        "The 'use usersDB' command switches the context to the 'usersDB' database, allowing you to perform operations within it.",
    },
    {
      question: "How to display all collections in the current database?",
      command: "show collections",
      explanation:
        "Executing 'show collections' displays all collections within the currently selected database. It helps you understand the structure of your data.",
    },
    {
      question: "How do you insert a document into a collection named 'books'?",
      command:
        "db.books.insertOne({title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'})",
      explanation:
        "The 'insertOne()' method adds a new document to the 'books' collection with specified key-value pairs, representing attributes of the book.",
    },
    {
      question: "How to find all documents in the 'customers' collection?",
      command: "db.customers.find()",
      explanation:
        "Executing 'find()' without any parameters retrieves all documents stored in the specified collection, allowing you to view all data.",
    },
    {
      question: "How to delete a database named 'testDB'?",
      command: "use testDB; db.dropDatabase()",
      explanation:
        "First, switch to the database you want to delete using 'use', then execute 'db.dropDatabase()' to remove the selected database permanently.",
    },
    {
      question: "How do you update a document in the 'inventory' collection?",
      command:
        "db.inventory.updateOne({name: 'Widget'}, {$set: {quantity: 100}})",
      explanation:
        "The 'updateOne()' method modifies the first document that matches the specified filter by setting a new value for the 'quantity' field.",
    },
    {
      question: "How to exit the MongoDB shell?",
      command: "quit() or exit",
      explanation:
        "Typing 'quit()' or 'exit' terminates the current MongoDB shell session, returning you to the command line interface.",
    },
    {
      question:
        "How to display the structure of a collection named 'products'?",
      command: "db.products.findOne()",
      explanation:
        "Executing 'findOne()' on a collection provides a representative document, revealing the structure and key-value pairs present in that collection.",
    },
    {
      question: "How do you connect to a MongoDB server running on localhost?",
      command: "mongo",
      explanation:
        "Simply typing 'mongo' connects to the default MongoDB instance running on localhost, enabling interaction with the server via the shell.",
    },
    {
      question: "How to drop a collection named 'logs'?",
      command: "db.logs.drop()",
      explanation:
        "Executing 'drop()' on a collection removes the entire collection and all associated documents from the database, freeing up space.",
    },
    {
      question:
        "How do you search for documents in the 'products' collection with 'price' less than 50?",
      command: "db.products.find({price: {$lt: 50}})",
      explanation:
        "The '$lt' operator selects documents where the 'price' field value is less than 50, helping to filter out products below a certain price threshold.",
    },
    {
      question:
        "How to display information about the current database connection?",
      command: "db",
      explanation:
        "Typing 'db' displays information about the current database connection, including the name of the selected database.",
    },
    {
      question:
        "How do you retrieve the first 5 documents from the 'orders' collection?",
      command: "db.orders.find().limit(5)",
      explanation:
        "Chaining 'limit(5)' to the 'find()' method restricts the query to retrieve only the first 5 documents from the specified collection.",
    },
    {
      question:
        "How to remove a document from the 'students' collection with 'name' equal to 'John'?",
      command: "db.students.deleteOne({name: 'John'})",
      explanation:
        "The 'deleteOne()' method removes the first document that matches the specified filter, in this case, the document with 'name' equal to 'John'.",
    },
    {
      question: "How to display the version of MongoDB server?",
      command: "db.version()",
      explanation:
        "Executing 'version()' returns the current version of the MongoDB server, providing insight into the software's capabilities and updates.",
    },
    {
      question:
        "How to sort documents in the 'products' collection by 'price' in ascending order?",
      command: "db.products.find().sort({price: 1})",
      explanation:
        "The 'sort()' method arranges documents in ascending order based on the specified field, allowing for organized presentation of data.",
    },
    {
      question:
        "How to count the number of documents in the 'students' collection?",
      command: "db.students.count()",
      explanation:
        "Executing 'count()' on a collection returns the total number of documents stored within that collection, aiding in data analysis.",
    },
    {
      question:
        "How to insert multiple documents into a collection named 'employees'?",
      command:
        "db.employees.insertMany([{name: 'Alice', age: 30}, {name: 'Bob', age: 35}])",
      explanation:
        "The 'insertMany()' method adds multiple documents to the specified collection in a single operation, enhancing efficiency when working with bulk data.",
    },
    {
      question: "How to display the list of users in the MongoDB instance?",
      command: "show users",
      explanation:
        "Typing 'show users' provides a list of users configured in the MongoDB instance, facilitating user management and access control.",
    },
    {
      question: "How do you authenticate against a MongoDB server?",
      command: "db.auth(username, password)",
      explanation:
        "The 'auth()' method authenticates the user against the MongoDB server using the provided username and password, enabling access to authorized resources.",
    },
  ],
  Medium: [
    {
      question:
        "How do you create an index on the 'email' field in the 'users' collection?",
      command: "db.users.createIndex({email: 1})",
      explanation:
        "Creating an index on the 'email' field improves query performance on the 'users' collection by making searches faster.",
    },
    {
      question:
        "How to find documents in the 'orders' collection with an amount greater than 100?",
      command: "db.orders.find({amount: {$gt: 100}})",
      explanation:
        "The '$gt' operator selects those documents where the 'amount' field value is greater than 100, helping to narrow down search results.",
    },
    // Placeholder for 23 more medium questions
  ],
  Pro: [
    {
      question:
        "How do you perform an aggregation to count the number of documents in the 'sales' collection by 'item' field?",
      command:
        "db.sales.aggregate([{$group: {_id: '$item', total: {$sum: 1}}}])",
      explanation:
        "This aggregation pipeline groups documents in the 'sales' collection by 'item' and sums up the count, providing a total for each item.",
    },
    {
      question: "How to start a transaction in MongoDB?",
      command:
        "const session = db.getMongo().startSession(); session.startTransaction();",
      explanation:
        "Transactions allow you to execute multiple operations in isolation and atomically. Starting a session and then a transaction ensures operations can be rolled back if needed.",
    },
    {
      question: "How to perform a full-text search in MongoDB?",
      command:
        "db.collection.createIndex({text_field: 'text'}); db.collection.find({$text: {$search: 'search_query'}})",
      explanation:
        "Creating a text index on a field enables full-text search functionality. Utilizing '$text' operator with '$search' allows searching for documents containing specified keywords.",
    },
    {
      question: "How to set up sharding in MongoDB?",
      command:
        "sh.enableSharding('database_name'); sh.shardCollection('database_name.collection_name', {sharding_key: 1})",
      explanation:
        "Enabling sharding on a database and sharding a collection distributes data across multiple shards, enhancing scalability and performance of MongoDB clusters.",
    },
    {
      question: "How do you create a capped collection in MongoDB?",
      command: "db.createCollection('log', {capped: true, size: 100000})",
      explanation:
        "Capped collections have a fixed size and automatically overwrite the oldest documents when the size limit is reached. Specifying 'capped' and 'size' options during collection creation ensures its capped behavior.",
    },
    {
      question: "How to configure MongoDB for authentication?",
      command:
        "mongod --auth; mongo -u username -p password --authenticationDatabase admin",
      explanation:
        "Enabling authentication in MongoDB server and connecting with valid username and password restricts unauthorized access to databases, ensuring data security.",
    },
    {
      question: "How do you perform a map-reduce operation in MongoDB?",
      command:
        "db.collection.mapReduce(map_function, reduce_function, {out: 'output_collection'})",
      explanation:
        "Map-reduce operations in MongoDB allow for complex data processing tasks by applying a 'map' function to each document and then reducing the results using a 'reduce' function.",
    },
    {
      question: "How to configure MongoDB for high availability?",
      command: "mongod --replSet replica_set_name",
      explanation:
        "Setting up a replica set with multiple MongoDB instances ensures high availability by providing automatic failover and data redundancy, improving system reliability.",
    },
    {
      question:
        "How to create a TTL (Time-To-Live) index on the 'expiry' field in the 'sessions' collection to automatically expire documents after 24 hours?",
      command:
        "db.sessions.createIndex({expiry: 1}, {expireAfterSeconds: 86400})",
      explanation:
        "By creating a TTL index on the 'expiry' field and specifying 'expireAfterSeconds' as 86400 (24 hours), documents in the 'sessions' collection automatically expire after the specified time.",
    },
    {
      question: "How to optimize MongoDB queries using covered queries?",
      command: "db.collection.find({},{_id:0, field1:1, field2:1})",
      explanation:
        "Covered queries retrieve data solely from indexes, avoiding document retrieval from disk. Specifying only the required fields in the projection ensures efficient query execution.",
    },
    {
      question: "How to implement data encryption in MongoDB?",
      command:
        "Enable encryption at rest and in transit using MongoDB Enterprise features; Utilize client-side encryption for end-to-end data protection.",
      explanation:
        "Enabling encryption at rest and in transit secures data stored in MongoDB by encrypting data files and network communication. Client-side encryption adds an additional layer of security by encrypting data before it's sent to the server.",
    },
    {
      question:
        "How to perform aggregation with the '$lookup' stage for cross-collection joins?",
      command:
        "db.orders.aggregate([{$lookup: {from: 'customers', localField: 'customerId', foreignField: '_id', as: 'customerInfo'}}])",
      explanation:
        "Using the '$lookup' stage allows performing cross-collection joins in MongoDB, combining data from multiple collections based on specified fields for comprehensive analysis.",
    },
    {
      question: "How to monitor and optimize MongoDB performance?",
      command:
        "Utilize MongoDB's built-in monitoring tools like mongostat and mongotop; Analyze query performance using explain() method and create appropriate indexes for efficient query execution.",
      explanation:
        "Monitoring MongoDB performance using tools like mongostat and mongotop helps identify bottlenecks. Analyzing query performance with explain() method aids in optimizing queries, while creating indexes enhances query execution speed.",
    },
    {
      question:
        "How to deploy MongoDB in a containerized environment using Docker?",
      command: "docker run --name mongodb-container -d mongo:latest",
      explanation:
        "Running MongoDB in a Docker container provides a lightweight and scalable deployment option. Utilizing the official MongoDB Docker image simplifies the setup process.",
    },
    {
      question: "How to configure MongoDB for horizontal scaling?",
      command:
        "Deploy MongoDB sharded cluster; Distribute data across shards based on sharding key; Monitor and rebalance shards as needed.",
      explanation:
        "Configuring MongoDB for horizontal scaling involves deploying a sharded cluster, distributing data across multiple shards based on a sharding key, and monitoring shard distribution to ensure balanced data distribution and optimal performance.",
    },
    {
      question: "How to implement schema validation in MongoDB?",
      command:
        "db.createCollection('collection_name', {validator: { $jsonSchema: { validation_schema }}})",
      explanation:
        "Schema validation ensures data integrity by enforcing a predefined schema on documents inserted into a collection. Defining a validation schema during collection creation imposes constraints on document structure and content.",
    },
  ],
};

export { commandsForLearning };