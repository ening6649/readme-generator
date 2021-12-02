// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const promptQuestions = ()=> {
 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the tile of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of the project (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test intructions (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                  return true;
                } else {
                  return false;
                }
            }
        }
      ])
}
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// const writeFile = data => {
//     return new Promise((resolve, reject) => {
//       fs.writeFile('README.md', generatemarkdown(data), err => {
//         // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//         if (err) {
//           reject(err);
//           // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//           return;
//         }
  
//         // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//         resolve({
//           ok: true,
//           message: 'File created!'
//         });
//       });
//     });
//   };
// promptQuestions()
//   .then(writeFile=> {
//     console.log(data);
//     return writeFile(data)
//     })
// promptQuestions()
//     .then(writeFile = data => {
//             return new Promise((resolve, reject) => {
//               fs.writeFile('README.md', JSON.stringify(generateMarkdown(data),null,'\t'), err => {
//                 // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//                 if (err) {
//                   reject(err);
//                   // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//                   return;
//                 }
          
//                 // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//                 resolve({
//                   ok: true,
//                   message: 'File created!'
//                 });
//               });
//             });
//           })
 
// promptQuestions()
// .then(answers => {
//   console.log(answers);
//   fs.writeFile("output.txt", JSON.stringify(answers, null, '\t'),(err)=>{
//       if (err) {
//           console.log(err);
//       } else {
//           console.log("success")
//       }
//   })
// })


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();