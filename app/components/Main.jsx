// import modules
var React = require("react");

// main component definition
var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <h1>Main component</h1>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

// exports Main component
module.exports = Main;