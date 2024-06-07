import React from 'react'
import ReactDom from 'react-dom/client' // Allows us to hook are React application to our index.html file
import App from './App'
import './index.css'


const root = ReactDom.createRoot(document.getElementById("root")) // Get the div element from index.html

// Render the App component inside the root div located at the index.html file
root.render(
    <App/>
)