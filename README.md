## Project Name
- 🛒 React Shopping Cart
- This is a simple React application that demonstrates how to add items to a shopping cart and calculate the total price.

## 🚀 Features
- Add items to the cart
- Prevent duplicate items
- Display cart items using React Modal
- Calculate total cart price

## 🧱 Technologies Used
- React JS (Functional Components)
- JavaScript
- useState Hook
- useEffect Hook
- Tailwind Css

## How It Works
- A list of available products is rendered using fetch data. Each product have a title, price, and an "Add to Cart" button.
-  When a user clicks "Add to Cart", the product is added to the cartItems state using React's `useState` hook.  
   - If the item already exists in the cart, an alert is shown to avoid duplication.
- Before adding an item, checks if the item already exists in the cart using `.find()`.
-  Display added cart items using a React modal. 
- The total price is dynamically calculated using JavaScript's `.reduce()` 

## My Code 
## HTML
- All components are rendered into the DOM through a single index.html file.

## Tailwind Css
- Tailwind CSS can be installed in a Vite project using the official setup steps.
- Used for styling the shopping cart.

## React Hook 
- useState is used to manage the state of the cart items.
- The `useEffect` hook is used to handle side effects in the application, such as: API calling .

## Deployed Link
- https://reshoppingcart.netlify.app/