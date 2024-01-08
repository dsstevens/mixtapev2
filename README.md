# MixTape v2

<!-- ![Deployed Site]() -->

# :computer: Tech Stack
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=fff&style=for-the-badge)

# :brain: Contributors
[Deanna Stevens](https://github.com/dsstevens)
[Erica Hagle](https://github.com/ericahagle)
[Zen McMillan](https://github.com/zenmcmillan)
[Bobby Steckline](https://github.com/rjsturing)

# :thought_balloon: Abstract
Mixtape is a project that uses a collection of albums from the 80s to create a nostalgic "mixtape" of your favorite songs from the decade. A user can choose the year to see specifically the curation of best albums from that time period and see a refined selection. From there, the user can choose a specific album to see its track list and select a song to add to the playlist on the main page. We focused our efforts on creating an easy-to-use and accessible web app for the user while integrating newly self-taught TypeScript. Responsive design, Cypress testing, React Router and the Discogs API with an OAuth were utilized in the creation of this application. We collaboratively designed the final concept, the user stories of UI/UX, the wireframe for the structure of the React app and aesthetic design choices. Sharing resources for self-teaching on TypeScript was vital to our progress with this application and we benefited from tutorials, youtube videos, github TypeScript resources 


# :memo: Context
1 week sprint, 4 collaborators, using the [Discogs API](https://www.discogs.com/developers)

# :frame_with_picture: Preview
<!--  ![MixTape](https://github.com/) -->

# :wrench: Installation Instructions
1. Click the green code button.
2. Copy SSH to your clipboard.
3. Open up the terminal.
4. Change into the directory you wish to clone the app into with the cd command.
5. Use the git clone command followed by pasting the copied SSH key.
6. Change into the cloned directory with the cd command.
7. Install dependencies by typing npm install into the terminal
8. Type npm install into the terminal
9. Type npm start into the terminal
10. Copy the link it provides. It will look like similiar to this: http://localhost:3000/
11. Paste it into your web browser of choice
12. Enjoy!

# :bulb: Learning Goals
- TypeScript was the main learning objective for this project, as it was the opted choice of self-taught "Stretch Tech" in mod 3 of Turing's front end program. 
- Creating an app from concept, designing iterations and user stories
- Integrating a new tech into a React application with Cypress end to end testing, error handling, responsive design, and React Router for page navigation 
- Ditch using PropTypes for Typescript (yay!)
- Understand the fundamentals of TypeScript within a React app to type check for props and allow for types, aliases and interfaces to be used across the whole application


# :construction: Challenges 
- Working with Typescript for the first time on a collaborative project.
- Choosing a music API was more difficult than we imagined and we landed on one with an OAuth for its network requests which had a learning curve especially to integrate within the IDE.
- Discogs API required OAuth to fetch album images which we were still unable to do after reading documentation and troubleshooting for many hours.
- Utilizing .env variables to obfuscate the key and signature and adding the dotenv dependency created issues with TypeScript.
- Initally 'cold-rolling' the app led to inconsistencies with dependency versions across mutliple environments so we last minute created v2 with the TS template.
- Pagination of multiple pages of API calls led to difficulties with Cypress stubbing in the testing process.
- 

# :star2: Wins
- Practicing group standups everyday that we met with detailed notes.
- Integrating TypeScript into our application and type checking for data prevented possible errors working with different data types across four workspaces.
- Utilizing the API in our app to fetch albums in our Discogs collection and having the track names render on an individual album view.
- Functionality to add a track name to the final playlist on the home page.
- Lots of troubleshooting solidified workflow knowledge.
- Had fun planning and getting more experience with Figma.
- Understanding the importance of maintaining the state of the application in the parent component.