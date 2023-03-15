# Resume Creator React App

The Resume creator is my first application using React. This app was first created to use class constructors, but now it has been refactored to use both hooks and class constructors.

## Project: CV Application

The project is from The Odin Project [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-cv-application). Or see the Assignment Below.

A **live preview** of the project is [here](https://lucasstinson.github.io/resume-creator/).

### Overview

#### **Features:**

- You add all identifying information such as name, phone number, email, location and github.
- You can add and delete your work experience.
- Your experience includes the company you work for, the title of your position, the date you started, the date you ended work there and a description about what the position entails.
- You can add and delete your education.
- Your education includes where you attended school, degree you received, the time you started school and when you finished.

#### **Tools:**

<p align="left"> 
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="50" height="50"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="50" height="50"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="50" height="50"/> </a>
</p>

#### **Areas of Improvement:**

- ~~There is an issue with how the states are being set upon the deletion. This causes the displayed Resume to be different from the input on the form.While the delete works, it is best to delete from the bottom (work experience that occured the longest ago) until this is updated.~~ This issue was a result of how the form rendered the values in the input boxes and has been corrected with refactoring.
- There should be an ability to download the user's resume into a PDF.
- The Resume app rather basic. There could be more customization such as styling the font, adjusting font size, and adding colors among others.

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Create a new project using `npx create-react-app cv-project`. If you need a reminder on how it works, check out the previous lessons. Don't forget to setup a GitHub repository for your project, to push your progress.
1. Remove the boilerplate code created by `create-react-app`.
1. You should use class components for this project. You're going to find a lot of code written using class components and this practical experience will help you understand it when encountered. You'll also revisit this project in a later lesson to replace the class components with functional ones.
1. Think about how to structure your application into components. Your application should include:
1. A section to add general information like name, email, phone number.
1. A section to add your educational experience (school name, title of study, date of study)
1. A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
1. Be sure to include an edit and submit button for each section or for the whole CV, your preference. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You're going to make heavy use of state and props, so make sure you understood those concepts.
1. Create a `components` folder in your `src` directory and add your components.
1. Include a `styles` folder in your `src` directory for your CSS files. You'll need to import these in the component files to use them.
1. Don't forget to push your solution to GitHub. You should be proud of your work and show it off to the world!

</div>
