# JetBrains Internship Application - Tracing CSS back to Source
### Cascading Style Sheets Demo
This project is a small demo of how CSS works and its cascading, overwriting nature.

## 🚀 Setup & Run Instructions

To get the project running locally:

1. **Install Dependencies:**
   ```bash
   npm install

2. **Start development Server:**
   ```bash
   npm run start
   
3. **View in Browser:**
   ```bash
   http://localhost:4200/

## Angular CSS Transformation
In Angular, the written CSS is strongly transformed before being sent to the browser.
Angular uses View Encapsulation, which adds unique attributes to the component’s HTML elements and CSS selectors. 
Because of that, styles don't affect other components or elements, which they are not supposed to. 
The resulting CSS is then usually injected into the page inside a style-tag.
   
## CSS Location: 
The best way to view the source maps and generated css is to build the project.
1. **Build:**
   ```bash
   npm run build

2. **Find files:**
the build files will be output inside dist/css-task/browser/