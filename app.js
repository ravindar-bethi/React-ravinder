const heading  = React.createElement("div",{"id":"container"}, React.createElement("h1",{},"Hello World===="));
console.log(heading);
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);