const wrapper = document.getElementById('wrapper');
const listOfClasses = ['a', 'b', 'c'];
const objOfAttributes = {
    id: 1, 
    width: '50%', 
    height: '40px',
};
const contentArray = ['One', 'Two', 'Three', 'Four'];

class HtmlElement {
    constructor(tagName, attributes, classes, parent) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.classes = classes;
        this.parent = parent;
    }

    render() {
        const element = document.createElement(this.tagName);

        for (const className of this.classes) {
            element.classList.add(className);
        };

        for (const item in this.attributes) {
            element.setAttribute(item, this.attributes[item]);
        }

        this.parent.appendChild(element);

        return element;
    }
}

class List extends HtmlElement {
    constructor(childrenContentArray, attributes, classes, parent) {
        super('ul', attributes, classes, parent);
        this.childrenContentArray = childrenContentArray;
    }

    render() {
        const element = super.render();
        for (const item of this.childrenContentArray) {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            element.appendChild(listItem);
        }
    }
}

const myList = new List(contentArray, objOfAttributes, listOfClasses, wrapper);
myList.render();