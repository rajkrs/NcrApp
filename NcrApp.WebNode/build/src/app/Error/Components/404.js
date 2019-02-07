"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var Error404 = function () { return (React.createElement("div", null,
    React.createElement(semantic_ui_react_1.Message, { error: true, header: '404', list: [
            'We all know 404 defines, required resource not found',
            'Meanwhile you may explore our Home page',
        ] }),
    React.createElement("div", { className: "alert alert-danger" },
        React.createElement("h4", null, "We all know 404 defines, required resource not found"),
        React.createElement("a", { href: "/login" }, "Meanwhile you may explore our Home page 1.")))); };
exports.default = Error404;
//# sourceMappingURL=404.js.map