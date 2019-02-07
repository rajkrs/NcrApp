'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
require("semantic-ui/dist/semantic.min.css");
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var Login_1 = require("./src/app/login/component/Login");
var _404_1 = require("./src/app/Error/components/404");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", { className: "login-wrapperBlue" },
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: "/login", component: Login_1.default, exact: true }),
                React.createElement(react_router_dom_1.Route, { path: "/error/404", component: _404_1.default, exact: true }),
                React.createElement(react_router_dom_1.Redirect, { to: "/login" })))));
}
ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));
//# sourceMappingURL=app.js.map