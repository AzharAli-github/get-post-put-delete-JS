if (req.url === "/api/todos" && req.method === "GET"){
    // set the status code, and content-type
    
    resizeBy.writeHead(200, {"Content-Type" : "application.json"});

    //send the data

    resizeBy.end(JSON.stringify(todos));
}