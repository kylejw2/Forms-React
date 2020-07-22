1. What techniques can you use to help you translate raw HTML into React? 
    Perhaps the most straight forward technique to translate raw HTML into React, or JSX, is by returning/rendering it through a React component.
2. In what way can you think about the HTML building blocks that will help you build React forms? 
    I think about the HTML building blocks as nodes on a tree. Applying this to React forms, this allows me to build a structured React form.
3. What resources are shared between HTML and React? 
    All of the HMTL tags are shared between HTML and React but not all React tags are HTML tags. This is because JSX is a type of XML, which allows us to create our own unique tags.

1. What is State Management? 
    State, in terms of React, refers to the modifiable data that is likely unique to a component. For example, in the App component, the App's state refers to a boolean value represented by "loginSuccess" and an array represented by "data". These variables are modifiable, which is what makes them different from component properties. State Management therefore refers to how we modify/manage our component's state.
2. In what way can you think React leverages good State Management principles? 
    React doesn't permit the change of a component's state outside of said component. In other words, a component's state variable is private. We also can't modify state directly. We need to use the "setState()" function to modify current state.
3. What is the difference between React and JavaScript? What is the same? 
    React is a JavaScript library, so it relies on JavaScript but brings more to the table, like JSX (JavaScript XML).