const express = require("express"); 
const app=express(); 
//Define a route  
app.get('/',(req,res)=> { 
  res.send("Hello, World!"); 
});

//Start the Server
// const PORT=3000;
// app.listen(PORT, ()=> {
//   console.log('Server is running on http://localhost:${PORT}');
// });

// app.get("/greet/:name", (req,res) => {
//   const name = req.params.name;
//   res.send(`Hello, ${name}! Welcome to our server:`);
// });

// FOR JSON RESPONSES
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello, World!", status: "success" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
