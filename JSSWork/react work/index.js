console.log("hello");
const parent=document.getElementById('root');
console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h1=React.createElement("h1",{style:{color:'cyan'}},"ABES ENGINEERING COLLEGE");
// const l1=React.createElement("li",{},"orange");
// const l2=React.createElement("li",{},"apple");
// const ul=React.createElement("ul",{style:{backgroundColor:'yellow'}},"l1,l2");
const element = <h1>CSE-AIML</h1>;
const l1=<li>orange</li>
const l2=<li>apple</li>
const ul=<ul>{l1}{l2}</ul>
const container=(
    <div style={{backgroundColor:'cyan'}}>
        
        <div>{element}</div>
        <div>{ul}</div>
        
        </div>

)
root.render(container);