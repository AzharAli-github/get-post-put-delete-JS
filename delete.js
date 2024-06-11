if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "DELETE") {
    // get the id from url

    const id = req.url.split("/")[3];
    const todo = todos.find(t => t.id === parseInt(id));
    if (!todo){
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end('No Todo with id present')
    }
    else{
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
        res.writeHead(404, {"Content-Type" : "application/json"});
        res.end('Delete');
    }
}