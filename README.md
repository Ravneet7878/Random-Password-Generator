# **Password Generator**

This is a simple **Password Generator** built with **React**, which allows the user to generate a secure random password. The application provides options to adjust the length of the password, and include numbers and special characters for added complexity.

## **Features:**
- **Adjustable Password Length**: Use the range slider to adjust the length of the generated password between 8 and 20 characters.
- **Include Numbers**: You can enable or disable the inclusion of numbers in the generated password.
- **Include Special Characters**: You can choose whether to include special characters like `!@#$%^&*()` in the generated password.
- **Copy to Clipboard**: The generated password can be copied to the clipboard for easy use.

## **Hooks Used in the Project:**

### **1. useState:**
`useState` is a React hook that allows you to add state to your function components. It returns an array with the state value and a function to update that value.

**Usage in this project:**
- `length`: Stores the current length of the generated password.
- `number`: A boolean value that determines whether numbers should be included in the generated password.
- `character`: A boolean value that determines whether special characters should be included.
- `password`: Stores the generated password.

**Benefits:**
- Allows functional components to have state without needing a class-based component.
- State updates trigger re-renders when values change.

### **2. useCallback:**
`useCallback` is a hook that returns a memoized version of a function, which will only change if one of its dependencies has changed. This helps prevent unnecessary re-creations of functions during re-renders, thus improving performance.

**Usage in this project:**
- `copy_password_to_clipboard`: A function that copies the generated password to the clipboard. It only needs to be re-created if the password state changes.
- `password_generator`: A function that generates the password. It depends on `length`, `number`, `character`, and `set_password`.

**Benefits:**
- Helps optimize performance by ensuring that functions aren't re-created unnecessarily on every re-render.
- Prevents unnecessary side effects or function calls if dependencies haven't changed.

### **3. useEffect:**
`useEffect` is a hook that runs a side effect after the render is committed to the screen. It can be used for various purposes like fetching data, subscribing to events, or updating the DOM.

**Usage in this project:**
- `password_generator`: The password generation function is triggered whenever the `length`, `number`, or `character` state changes. This ensures that the password is updated whenever any of these values change.

**Benefits:**
- Enables you to perform side effects in functional components.
- Handles the effect of changing values (like generating a new password) without interfering with the main render logic.
- By passing the correct dependencies, it only runs when necessary, avoiding unnecessary updates.

### **4. useRef:**
`useRef` is a hook that returns a mutable object called `ref`, which persists across re-renders. It's often used to access DOM elements or store values that don’t trigger a re-render.

**Usage in this project:**
- `password_reference`: A reference to the password input field, used to select the text in the input when the "Copy" button is clicked.

**Benefits:**
- Useful for accessing DOM elements directly (e.g., focusing an input or selecting text).
- Persists values across re-renders without triggering a re-render, unlike `useState`.

# **Technologies Used:**
- **React**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for building modern, responsive designs.

# **React + Vite**
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
