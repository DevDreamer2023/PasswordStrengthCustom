# Overview

We offer a package designed for password strength detection. You can customize the strength by providing specific parameters. The package will then return an object with two keys: the first key, "valid," which will be a boolean value, and the second key is "feedback." 
## Installation
`npm i custom-pwd-strength`
## Usage
```javascript

const { pwdStrength } = require('custom-pwd-strength')
// OR
import { pwdStrength } from 'custom-pwd-strength'
```
## Function without strength customization
- syntax: pwStrength("password)
- the function accepts only the password as a string parameter for evaluation.
```javascript
console.log(pwdStrength('asdfasdf'))    // o/p: {"valid":false, feedback:"weak"}
// The output will be an object with two keys: "valid" (a boolean indicating password strength satisfaction) and "feedback" (additional information).

// Password strength will be check on following parameters.
// minLength = 8,
// requireUppercase = true,
// requireLowercase = true,
// requireDigits = true,
// requireSpecialChars = true
```
## Customizable strength function


- **syntax**: pwStrength(password, minLength, requireUppercase, requireLowercase, requireDigits, requireSpecialChars)
- Function accepts 6 parameter , first is **password** in string format.
- **minLength**: accepts integer, you can set desired length for the password. 
- **requireUppercase**: accepts boolean, if true, the function checks presence of uppercase letters in the password.
- **requireLowercase**: accepts boolean, if true, the function checks presence of lowercase letters in the password.
- **requireDigits**: accepts boolean, if true, the function checks presence of Digits in the password.
- **requireSpecialChars**: accepts boolean, if true, the function checks presence of specialChar in the password.

```javascript
console.log(pwdStrength("devDreamer@123",6,true,true,true,true))
// o/p: {valid:true, feedback:"strong"}
// "vaild" is true, because password satisfies the strength parameters.

console.log(pwdStrength("abcdefgh",5,true,false,false, false))
// o/p: {valid:false, feedback:"weak"}
// "valid" is false because "requiredUppercase" is true, but no uppercase letter is present in the password.
// Parameters set as false are optional, they won't affect the outcome if the password fulfills those conditions or not.
```

## Points to remember
- For a customizable function, include all parameters to avoid confusion or unexpected outcomes.

## License
**MIT**
