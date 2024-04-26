# Modules Intégré

require() importer des fonctionnalités d'autres modules dans le module en cours
const myModule = require('./Mymodule');

module.exports : exporte des fonctionnalités depuis un module, les rend accessible pour d'autre modules.

const myFunction = () =>{ //fonctionnalité a exporter};
module.exports = myfunction; 

# Exemple`

Supposons que nous avons deux fichiers, `math.js` et
`app.js`.

- **`math.js` (Module à Exporter) :**
    
    ```jsx
    // math.js
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    
    module.exports = {
      add,  subtract
    };
    ```
    
- **`app.js` (Module à Importer) :**
    
    ```jsx
    // app.js
    const mathModule = require('./math');
    console.log(mathModule.add(5, 3));      
    // Output: 8console.log(mathModule.subtract(8, 3)); // Output: 5
    `

 # Nouvelle syntaxe

 ```jsx
 export const myVariable = "hello";
 export function myFunction(){
    console.log('this is a function');
 }
 ou 
 export default myVariable;
 _________________________________

 import {myVariable, myFunction} from './myModule';
 console.log(myVariable) // affiche hello
 myFunction(); // affiche this in a function 
 ```

 