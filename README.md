# Frontend  Web Component

### Tech Stack
I have written the project with the help of **Webpack**, **Babel** and **Web-Components**.

### Architecture
Somehow I have followed the approach of the well-known JS frameworks and libs like Vue and React.
* We have an entry point which is `src/index.js`. Here we inject the code into dom  > **index.html**.
* `index.html` will be rendered on the screen.
* I used the atomic design for the reusable components.
* There are some polyfills to support older browser, and they are placed in `src/scripts`
* Configuration of Webpack can be found in here: src/config/webpack (both prod & dev) 

### App Execution
Environment should support these tools: 
```json
 "npm" : ">=8.0.0",
 "node" : ">=16.0.0"
```
