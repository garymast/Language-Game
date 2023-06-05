![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)
---
![amirepossive](assets/images/readMe_images/Am_I_Responsive.jpg)
# [LEARN GERMAN](https://garymast.github.io/Language-Game/) - An interactive learning game, helping beginners learn the basics of German before a visit there

---

# CONTENTS

* [USER EXPERIENCE](#USEREXPERIENCE)
    * [Initial Discussion](#Initialdiscussion)
    * [User Stories](#Userstories)
* [Design](#Design)
	* [Colour Scheme](#Colourscheme)
	* [Typography](#Typography)
	* [Imagery](#Imagery)
	* [Wireframes](#Wireframes)
* [Features](#Features)
* [Technolgy used ](#Technologyused)
* [Testing](#Testing)
    * [Code validation ](#Codevalidation)
    * [Future Iterations ](#Futureiterations)
    * [Lighthouse](#Lighthouse)
    * [Deployment](#Deployment)
* [Crediations and citataions](#Crediationsandcitataions)
    * [Code used](#Codeused)
* [Acknowledgments](#Acknowledgments)


---

# USER EXPERIENCE

## Initial Discussion
I have a potential future work opportunity in Switzerland, and as such will need to learn the German language. A good excuse as any to create a German Learning game!

## User Stories
Based on the target audience and their needs, the following user stories were identified:

* The site should be targeted towards beginners
* The color scheme should be consistent with German themes
* The user should be able to hear the German pronunciations of words
* The user should be able to keep track of their score.

## Design
The overall design is simple. It has a very basic layout, allowing the user to concentrate on learning German. The site is targeted at mobile users, and as such the quality of the UI decreases as the screen size increases.

## Colour Scheme
A German theme was required, so I used a Bavarian blue and white pattern as a background. The German colours of Black, Red and Yellow are also used.

## Typography
I used a very simple font from Google Fonts - "Voces"

## Imagery
There is only a background image in this site. I did not want images distracting the user from their goal

## Wireframes
I used Microsoft Word to create a basic Wireframe, which didn't change much throughout the project.
![wire frame](assets/images/readMe_images/Wireframe2.jpg)


## Features
1. Home/landing page

![Home landing page](assets/images/readMe_images/Landing_Page.jpg)

2. First Level Page

![Level select](assets/images/readMe_images/Game_Ready.jpg)

3. Stage 1 During Game

![During Stage 1](assets/images/readMe_images/Stage_One.jpg)

4. Stage 2 During Game

![During Stage 2](assets/images/readMe_images/Stage_Two.jpg)

# Technology Used
This project primarily relies on JavaScript (JS) to build a dynamic and interactive web application. While HTML and CSS are still utilized, the main focus and driving force behind this project is the extensive use of JavaScript. Here's an overview of how these technologies are employed:

## JavaScript (JS)
JavaScript is a powerful programming language that enables the creation of interactive and dynamic web applications. In this project, JS takes center stage and serves as the primary technology used for development. It allows you to handle user interactions, manipulate HTML elements, perform calculations, make HTTP requests, and dynamically update the content of the web page. JS plays a vital role in enhancing the user experience and adding functionality to the application.

## HTML (Hypertext Markup Language)
HTML is the standard markup language used for structuring the content of web pages. While the focus of this project is on JavaScript, HTML is still necessary to create the basic structure and layout of the web application. It defines the various elements such as headings, paragraphs, links, images, and forms that make up the user interface. HTML provides the foundation for organizing and presenting the content in a logical and hierarchical manner.

## CSS (Cascading Style Sheets)
CSS is a stylesheet language that is responsible for the presentation and styling of web pages. In this project, CSS is used to enhance the visual design and aesthetics of the web application. While the main emphasis lies on JavaScript, CSS still plays a significant role in customizing the appearance of the HTML elements. By applying CSS styles, you can create a visually appealing and consistent user interface.

While HTML and CSS are utilized in this project, the primary focus is on JavaScript. JavaScript enables the creation of a dynamic and interactive web application, allowing for enhanced user experiences and added functionality. By leveraging the power of JavaScript, you can build robust web applications that meet diverse requirements and cater to user needs.

# Testing
| User interaction | Does the function work as intended? (Yes/No) | Why? |
|:---:|:---:|---|
| User clicks anywhere to remove splash screen  | Yes | |
| User clicks the play button to start a game | Yes | |
| The home button returns to the splash screen | Yes | |
| The volume icon turns the volume on? off | Yes | |
| Countdown timer tracks remaining time | Yes | |
| The score is kept updated | Yes | |
| The next button takes the user to the next stage | Yes | |
| Final score is shown with correct message | Yes | |
| Selections turn green where correct | Yes | |

# js logic flow chart 
![jslogic flow chart](assets/images/readMe_images/JS_Logic_Flow.jpg)

## Code Validation

I used JSHint to check and validate my code throughout the project:

![JSHint](assets/images/readMe_images/JS_Hint.jpg)

My CSS was checked by W3C Validator along with my HTML:

![CSS check](add CSS image)
![HTML check](add html image)

## Future Iterations

1. The UI needs a huge overhaul. The styling is not that eye catching, paticularly on larger screens
2. In stage 2, there is no check to ensure that words aren't repeated. This will be introduced in future releases.
3. I initially hoped to have better animation to make the game a bit more fun, this will be introduced later
4. There will be additional levels later on, including learning full German phrases
5. There is nothing that states which level the user is on, or the theme of the level. For exmple - 'Numbers'. This will be introduced in a later release

## Lighthouse
![Lighthouse test](add lighthouse test screenshot)

## Deployment
1. Create a Repository: Start by creating a new repository on GitHub. Click on the "New" button on your GitHub profile page or navigate to your organization's repository page. Give your repository a name and make sure it's set to public.
2. Add Files to the Repository: Add your website files to the repository. You can either initialize the repository with a README file or manually upload your HTML, CSS, JavaScript, and other necessary files. Ensure that your main HTML file is named index.html.
3. Enable GitHub Pages: On your repository page, navigate to the "Settings" tab. Scroll down to the "GitHub Pages" section. Under "Source," select the branch you want to deploy. If your site is in the root directory, choose the main branch. If your site is in a specific folder, choose the main branch and specify the folder path. Click on the "Save" button.
4. Verify Deployment: After saving, GitHub Pages will provide you with a link to your deployed site. It might take a few minutes for the deployment to complete. Visit the provided link to verify that your site is deployed correctly.
5. Custom Domain (Optional): If you want to use a custom domain for your GitHub Pages site, you can set it up in the "Custom Domain" section of your repository's "Settings" tab. Follow the instructions provided by GitHub to configure your custom domain.
6. Update and Redeploy: Whenever you make changes to your website files, commit and push them to the repository. GitHub Pages will automatically redeploy the updated site. Ensure that your changes are pushed to the correct branch specified in the GitHub Pages settings.

# Credits and Citations
1. I watched this [Whac-a-Mole by Ania Kubow]("https://www.youtube.com/watch?v=rJU3tHLgb_c") tutorial on Youtube to achieve a moving 'mole' .
2. I used the Love Maths walkthrough to assist in general with event listeners etc.
3. Background image was sourced from [Image by svstudioart on Freepik]("https://www.freepik.com/free-vector/oktoberfest-blue-seamless-rhombus-background-vector-illustration_24450729.htm#query=bavaria%20pattern&position=0&from_view=keyword&track=ais").
4. I used this [Splash Screen Tutorial]("https://dev.to/saikatbishal/how-to-make-a-splash-screen-using-html-css-and-javascript-240m") tutorial to help with the splash screen.
5. I used this [Web Speech API Tutorial]("https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API") tutorial to help with the text to speech.
6. While I didn't ask any questions myself, the general conversation in the team Slack channel provided me with huge amount lot of hints and tips

## Code Used
All code is my own, with the exception of the citations above.

# Thank You!
