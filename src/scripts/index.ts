/*
	*types
	
	any

	boolean

	number

	string

	array: type[] || Array<elemType>

*/

module ts_sanbox { 

	class Human {
		name: string;
		private id: number;
		
		constructor(name: string, public age: number) {
			this.name = name;
			this.age = age;
			this.id = Date.now();
		}

		sayHello() {
			return `hello, my name is ${ this.name }`;
		}
	}

	class Model {
		persons: {}[];

		constructor() {
			let jack = new Human('jack', 25);
			let ann = new Human('ann', 21);
	
			this.persons = [];
			this.persons.push(jack, ann);

		}
	}

	class View {
		body: any;
		model: {persons: {}[]};

		constructor(model) {
			this.body = document.querySelector('body');
			this.model = model;

			this.viewPersons();
		}

		viewPersons() {
			this.model.persons.map((person: {name: string, age: number, sayHello: () => string}) => {
				let wrapper = document.createElement('div');

				wrapper.className = 'wrapper';
				wrapper.innerText = person.sayHello();

				this.body.appendChild(wrapper);
			});

		}
	}

	class Controller {
		constructor(model, view) {}
	}



	window.onload = () => {
		let model: {} = new Model();
		let view: {} = new View(model);
		let ctrl: {} = new Controller(model, view);
	};

}
