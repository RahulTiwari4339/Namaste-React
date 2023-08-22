const parrent = React.createElement("div", {id:'parrent'},
[React.createElement("div",
{id: 'child'} ,
   React.createElement("h1", {id:'heading'}, ("Hello india!")),
   React.createElement("h2", {id:'heading'}, ("Hello world!")),
),
React.createElement("div",
{id: 'child2'} ,
React.createElement("h1", {id:'heading'}, ("Hello india!")),
React.createElement("h2", {id:'heading'}, ("Hello world!")),
    )]
    
)

console.log(parrent); //object

// create root using createRoot

const root = ReactDOM.createRoot(document.getElementById("root"))

// passing react element inside root
root.render(parrent)
