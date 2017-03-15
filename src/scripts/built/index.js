/*
    *types
    
    any

    boolean

    number

    string

    array: type[] || Array<elemType>

*/
var ts_sanbox;
(function (ts_sanbox) {
    var Human = (function () {
        function Human(name, age) {
            this.age = age;
            this.name = name;
            this.age = age;
            this.id = Date.now();
        }
        Human.prototype.sayHello = function () {
            return "hello, my name is " + this.name;
        };
        return Human;
    }());
    var Model = (function () {
        function Model() {
            var jack = new Human('jack', 25);
            var ann = new Human('ann', 21);
            this.persons = [];
            this.persons.push(jack, ann);
        }
        return Model;
    }());
    var View = (function () {
        function View(model) {
            this.body = document.querySelector('body');
            this.model = model;
            this.viewPersons();
        }
        View.prototype.viewPersons = function () {
            var _this = this;
            this.model.persons.map(function (person) {
                var wrapper = document.createElement('div');
                wrapper.className = 'wrapper';
                wrapper.innerText = person.sayHello();
                _this.body.appendChild(wrapper);
            });
        };
        return View;
    }());
    var Controller = (function () {
        function Controller(model, view) {
        }
        return Controller;
    }());
    window.onload = function () {
        var model = new Model();
        var view = new View(model);
        var ctrl = new Controller(model, view);
    };
})(ts_sanbox || (ts_sanbox = {}));
//# sourceMappingURL=index.js.map