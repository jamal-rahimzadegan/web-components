# Frontend  Challenge

Here is my challenge and I will explain some stuff about it.

### Notes Before you get to the game
* There are maybe some differences between the original design and the implemented one.
I believe this is a nice approach to have a hand and express your idea in the design a bit.

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
To run the project in `development` mode simply execute `npm run dev`.
For the production version run `npm run deploy`.

### SEO
Tried to follow common rules, but for further improvements we may add `robots.txt` `canonical-meta` etc. 


### Accessibility
There are some complains under Chrome's `lighthouse`, tried to change the colors but no luck, we need to ensure it during the design phase.

### Performance And Optimization
I have optimized assets but for better load time we can use `service-worker cache`, `code-splitting` etc.

### Security
In real world we need to take care of XSS and the other attacks.

### Final Word
I tend to express my ideas and approaches as much as I can, so based on this, some code structure and UI could be improved 
and I mentioned some as comments in their places.



