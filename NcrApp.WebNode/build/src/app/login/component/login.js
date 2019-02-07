'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var LoginForm = function () { return (React.createElement("div", { className: 'login-form' },
    React.createElement(semantic_ui_react_1.Grid, { textAlign: 'center', style: { height: '100%' }, verticalAlign: 'middle' },
        React.createElement(semantic_ui_react_1.Grid.Column, { style: { maxWidth: 450 } },
            React.createElement(semantic_ui_react_1.Header, { as: 'h2', color: 'teal', textAlign: 'center' }, "Log-in to your account"),
            React.createElement(semantic_ui_react_1.Form, { size: 'large' },
                React.createElement(semantic_ui_react_1.Segment, { stacked: true },
                    React.createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: 'user', iconPosition: 'left', placeholder: 'E-mail address' }),
                    React.createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: 'lock', iconPosition: 'left', placeholder: 'Password', type: 'password' }),
                    React.createElement(semantic_ui_react_1.Button, { color: 'teal', fluid: true, size: 'large' }, "Login"))),
            React.createElement(semantic_ui_react_1.Message, null,
                "New to us? ",
                React.createElement("a", { href: '#' }, "Sign Up")))))); };
exports.default = LoginForm;
//# sourceMappingURL=Login.js.map