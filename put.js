if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "PUT") {
    // get the id from url

    const id = req.url.split("/")[3];
    const todo = todos.find(t => t.id === parseInt(id));
    if (!todo){
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end('No Todo with id present')
    }
    else{
        let todo_data = await getReqData(req);
        todos.push(JSON.parse(todo_data))
        res.push(JSON.parse(todo_data))
        res.writeHead(404, {"Content-Type" : "Application/json"});
        res.end(JSON.stringify(todo_data));
    }
}