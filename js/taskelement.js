class Task extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Create a new div element
      const customElement = document.createElement('div');
  
      // Get the title attribute value
      const title = this.getAttribute('title') || 'New Task';
  
      // Create a checkbox element
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      // Append the checkbox and text to the custom element
      customElement.appendChild(checkbox);
      customElement.appendChild(document.createTextNode(` ${title}`));
  
      // Append the custom element to the shadow DOM
      shadow.appendChild(customElement);
    }
  }
  
  // Define the custom element
  customElements.define('taskitem', Task);
  