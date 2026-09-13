# 🚀 Dev Stack Builder

Dev Stack Builder is a modern and interactive web application that helps developers build and manage their personal technology stack. Users can explore different technologies, check their difficulty and rating, and add or remove technologies from their stack.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons

## ✨ Features

### 1. 🔍 Explore Technologies
Browse different technologies based on categories such as Frontend, Backend, Database, Language, Styling, and DevOps.

### 2. ➕ Build Your Stack
Add your favorite technologies to your personal stack and easily see how many technologies you have selected.

### 3. ❌ Manage Your Stack
Remove technologies from your stack whenever you want. Removed technologies become available for selection again.

## 👨‍💻 Project

This project was built to practice React, TypeScript, and modern UI development.

-----------------------------------------------
Answer React question--
1. JSX is a syntax used in react that allow us to write HTML-like code inside Javascript.
This is for easy to write UI, we can use javascript variables and expessions inside JSX.

2. 
=> Props are passed from parent to child cocmponent from other side State is managed inside a component. 
=> Props are used to pass data between component from other side State used to manage changing data.

3. useState is a react hook used to create and changing data inside a functional component. In my Technology Stack project, I used useState to manage selected technologies and their count.

4. useEffect is a react hook used to perform side effects in a component, such as fetching data, calling an API or working with external resources.
In my project, the technology information was stored in a JSON file. we useEffect to fetch that JSON data when the component loads.

5. In react the key prop helps react indentify each item in a list. When the list changes such as adding, removing, or updating an update only the necessary part of the UI.

6. Conditional rendering means showing different UI elements based on a condition. In my project, I used conditional rendering in the "Your Stack" section. if selectedTechnologies.length === 0, it shows "No technologies selected yet." Otherwise, it shows the number of selected technologies using technologiesCount.

7. We pass data from parent to child using props. To send data or trigger an update back to the parent, the parent passes a function as a props, and the child calls that function. In my project, i passed setTechnologiesCount to the child so the child could update technology count.