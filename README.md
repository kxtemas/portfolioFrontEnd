# Katie Dev
MEVN Technology Stack: MongoDB, React, Springboot, and Node

## Abstract
  Our team will be creating a Personal Portfolio Webpage utilizing what our team have learned as a Software Development major at Grand Canyon University. The project is meant to advertise our team to potential hiring companies with a unique “resume”. The webpage will include the courses our graduates have taken over the degree program with a description to each. A glimpse of projects our team have completed outside and inside the program with a description to each. A separate page that lists the skills and abilities that our team have possessed with an introduction to each member. A contact page will then be available with a contact from via email and links to social media such as LinkedIn. 
The task to this webpage is to create a pleasing visual webpage that informs user with our experience for each technology stack. The task to this project is to be able to organize and document proper methodologies that will be used in the workplace. The accomplishment to this webpage is to prove that our team is capable of utilizing their skills, abilities and ability to challenge themselves with a new technology stack. Our team will be working with different skills that our team have not felt comfortable with but willing to learn and challenge themselves with. 

 

## Design Introduction
The portfolio project will include supporting documentation to recreate a webpage that showcases a student’s portfolio with six different pages. The pages will be the Home Page, About Me Page, Course Page, Project page, Portfolio page and Contact Page. The application will be split into two different applications, spring boot and react to separate the front end design and back end design. The backend will create a REST API using Spring Boot to handle HTTP request. The front end will be designed in React to create a user interface and use an HTTP client to handle the data from the Spring Boot application.


## Detailed High Level Solution Design
The design of the portfolio application follows the Spring boot software to develop the backend and React for the front end. JavaScript ES6 will be used to code the backend which will follow with the MVC framework. This design will include separate packages for the model, business and data components. The front end will be developed using React v18.0 to create the pleasing user interface with easy navigation. The API will be deployed using AWS elastic beanstalk which is a free compatible hosting page. The webpage will be deployed using AWS amplify which is a free compatible hosting page. The team will create a portfolio webpage that will allow job employers to view a remarkable online resume made from one of the most in-demand frameworks being JavaScript, React and deployed onto one of the most popular hosting clouds, AWS. Proper documentation will include API documentation, UML diagrams, Component design and a Schema design. 
The React application will include components and use AXIOS as the HTTP Client to retrieve the HTTP request from the Spring Boot application. The backend will include the REST Service and a DAO connection to the Mongo Database to retrieve the course and project data. The non-relational database will include two different collections with the course name, description, projects, language, image and the second collection as the projects name, description, skills, framework and image. Mail Gun is implemented in the front end design to send emails to the portfolio email from the contact page. A PaAS cloud service, AWS will be used to deploy the application onto the web using Elastic Beanstalk EC2 T2. The overall project will document, develop and deploy the portfolio webpage onto the web. 


### Logical Diagram
There are three tiers to the logical solution being the browser, front end and backend. The design includes the React Components, Spring Boot MYC layers and MongoDB. The backend will create the REST API’s while the front end, React will use AXIOS to handle the HTTP Requests. The backend include the three layers, presentation, business and data layer to show how the Rest Service will be created with each file. 
![image](https://user-images.githubusercontent.com/71146102/235296931-a3681088-fc46-4992-ad95-24dfc1b38d32.png)


### Physical Diagram


The api will deploy onto AWS, using Elastic Beanstalk EC2 t2.mciro which is a free tier for one full year for new accounts. The t2.micro offers 1 vCPU, 1 GiB with a clock speed of 3 GHz. This is ideal for small projects which will handle a low to moderate network performance with 750 hours per month free. The application will deploy onto AWS amplify hosting. The React and Spring Boot project will both be separately deployed onto their own PaaS Cloud Server. The SpringBoot application and MongoDB will be deployed into the cloud first once it returns a successful result of a rest api. The React application will use the AWS domain from that cloud service as the root url to retrieve data from the rest service. Uptime Robot will be used to monitor any downtime and mailgun will be used in the front end to send emails.
![image](https://user-images.githubusercontent.com/71146102/235296955-28e3e072-d779-4447-9aba-573dc9d41ffb.png)


## Detailed Technical Design

### General Technical Approach
The general approach to create a portfolio webpage that will allow job employers to view a remarkable online resume made from one of the most in-demand frameworks being JavaScript and React. A portfolio webpage will include high level details about the candidate all in one website. This includes job experience, skills, abilities, connection completed courses and projects. The objective is to directly showcase the skills and abilities of the potential candidate. The approach to the design of the portfolio application follows a front end designed in React and a backend designed in Sprint Boot following the MVC framework. MailGun is implemented in the front end design to send emails to the portfolio email from the contact page. The application is to be deployed using AWS Elastic Beanstalk EC2 and AWS Amplify Hosting which also handle logging any troubleshooting issues. 


### Key Technical Design Decisions
This project will use Spring Boot version 2.7.1 as the development environment for the application. The front-end framework will use React version 18.2.0 to create the services and components into creating the overall templates for the user interface. The backend framework will follow the MVC structure with Java version 11 to create the business services, Rest service with a DAO package. MongoDB will be used as the non-relational database using version 5.0 to hold the course and project data for the Spring Boot application to grab data for the HTTP requests. In React, AXIOS will be used as the HTTP client to connect to the Spring Boot application to grab the passing JSON data from the HTTP request.
 The project will be deployed onto AWS using the Elastic Beanstalk EC2 and AWS Amplify Hosting. The Sprint Boot application will be deployed will the platform selected to Java and branch to Coretta 11 with the recommended version being 3.2.11. The database will be implemented into AWS with the environmental properties adjusted and security group roles selected to the EC2 Security Group-inbound. The React application will also be deployed using the AWS Amplify by a build pipeline with GitHub. The application will be configured with the package.json file set to the specified version used in development a server.js file created to serve up the React app.
Schema Design

Our team will be using MongoDB is create the collections in the database. This image was generated with DbSchema which auto-generated the database from the Mongo Compass DB.


 

## Service API Design:

Link: https://app.swaggerhub.com/apis-docs/kxtemas/SeniorCapstone/1#/View
Basic HTTP Auth will be used to bring security to the REST API’s implemented in sprint boot. This will be done by adding the required dependencies and configuring Spring Security to enable authentication and authorization support. Below is a UML diagram of the classes in the spring boot application.

 

## NFR’s (Security Design, etc.):

Availability is crucial to sustain when an application has been deployed onto the web. The webpage is to be accessible to a user at any time which also puts reliability and maintainability into play. Our standard to keep the webpage up and running at all times of the day with no downtime. To assure this, our team will have implemented Uptime Robot to connect to our domain to receive instant messages when the application is no longer available. Below is an example of a notification when the webpage is in downtime. By receiving these notifications instantly, out team will be able to resolve any issues and bugs by viewing the Logging console in the AWS CLI from the Log4J log provider.


