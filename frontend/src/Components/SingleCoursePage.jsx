import { useEffect, useState } from 'react'
import SingleCourseExt from './SingleCourseExt';
// import { useParams } from 'react-router-dom';
let courses= [
    {
        "id": 1,
        "image": "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dy3h07a5tygirigsiv3y.png",
        "title": "React JS- Complete Guide for Frontend Web Development",
        "description": "Learn the fundamentals of React and build interactive user interfaces and Become an expert React JS Developer. Learn HTML, CSS, JavaScript, ES6, React JS and jQuery..",
        "instructor": "John Doe",
        "original_price": 2999,
        "discounted_price": 499,
        "rating": 4.8,
        "category": "React",
        "students": 25000,
        "hours": 20,
        "demovideo": "react-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/u6gSSpfsoOQ?si=hUV1cc2nTWifMDrn",
        "language": "English",
        "learnings": [
            "Understand the core concepts of React",
            "Build reusable components for web applications",
            "Manage state and props in React",
            "Create a complete React application from scratch",
            "Integrate with APIs and external data sources"
        ],
        "course_includes": [
            "20 hours on-demand video",
            "10 coding exercises",
            "30 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of HTML, CSS, and JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources and libraries"
        ]
    },
    {
        "id": 2,
        "image": "javascript-course.jpg",
        "title": "Modern JavaScript Mastery",
        "description": "Become a JavaScript expert and learn the latest features and best practices.",
        "instructor": "Jane Smith",
        "original_price": 179,
        "discounted_price": 39,
        "rating": 4.6,
        "category": "JavaScript",
        "students": 32000,
        "hours": 18,
        "demovideo": "js-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/jS4aFq5-91M?si=LZCY-cAfgGFEfmxM",
        "language": "English",
        "learnings": [
            "Master JavaScript's core concepts and features",
            "ES6 and modern JavaScript syntax",
            "Asynchronous programming with Promises and async/await",
            "Working with DOM and handling events",
            "Creating interactive web applications"
        ],
        "course_includes": [
            "18 hours on-demand video",
            "15 coding exercises",
            "25 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of HTML and CSS",
            "A modern web browser",
            "Access to a computer with an internet connection"
        ]
    },
    {
        "id": 3,
        "image": "angular-course.jpg",
        "title": "Angular Web Development",
        "description": "Build modern web applications with Angular and TypeScript.",
        "instructor": "Maria Rodriguez",
        "original_price": 229,
        "discounted_price": 59,
        "rating": 4.7,
        "category": "Angular",
        "students": 18000,
        "hours": 24,
        "demovideo": "angular-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/3qBXWUpoPHo?si=jaWO33YoH9mJ5IAj",
        "language": "English",
        "learnings": [
            "Master Angular's components, services, and modules",
            "Create reactive web applications with Angular",
            "Routing and navigation in Angular",
            "REST API integration and data retrieval",
            "Deployment and testing of Angular apps"
        ],
        "course_includes": [
            "24 hours on-demand video",
            "12 coding exercises",
            "40 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of HTML, CSS, and JavaScript",
            "A code editor like Visual Studio Code",
            "Node.js and npm installed on your computer"
        ]
    },
    {
        "id": 4,
        "image": "html-css-course.jpg",
        "title": "HTML and CSS Essentials",
        "description": "Learn the foundations of HTML and CSS for web development.",
        "instructor": "Chris Johnson",
        "original_price": 149,
        "discounted_price": 29,
        "rating": 4.5,
        "category": "HTML/CSS",
        "students": 15000,
        "hours": 15,
        "demovideo": "html-css-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/uDkjZ-UjgX0?si=C80Aa2TnMDtDTCjk",
        "language": "English",
        "learnings": [
            "Create structured and semantically correct HTML",
            "Design responsive and attractive web pages with CSS",
            "Understanding CSS layout techniques",
            "Building a complete website with HTML and CSS"
        ],
        "course_includes": [
            "15 hours on-demand video",
            "8 coding exercises",
            "20 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "No prior knowledge required",
            "A text editor for writing HTML and CSS code",
            "A computer with internet access"
        ]
    },
    {
        "id": 5,
        "image": "redux-course.jpg",
        "title": "Mastering Redux Framework",
        "description": "Become an expert in managing state with Redux and React.",
        "instructor": "Michael Brown",
        "original_price": 199,
        "discounted_price": 49,
        "rating": 4.8,
        "category": "Redux",
        "students": 12000,
        "hours": 20,
        "demovideo": "redux-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/poQXNp9ItL4?si=UjySh9AYuutL9nsl",
        "language": "English",
        "learnings": [
            "Understanding Redux architecture and principles",
            "Integrating Redux with React applications",
            "Managing complex application state with Redux",
            "Redux middleware and asynchronous actions",
            "Best practices for Redux development"
        ],
        "course_includes": [
            "20 hours on-demand video",
            "10 coding exercises",
            "30 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of React",
            "Familiarity with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 6,
        "image": "typescript-course.jpg",
        "title": "TypeScript Fundamentals",
        "description": "Learn TypeScript and build scalable and maintainable JavaScript applications.",
        "instructor": "Sophia Clark",
        "original_price": 179,
        "discounted_price": 39,
        "rating": 4.6,
        "category": "TypeScript",
        "students": 14000,
        "hours": 16,
        "demovideo": "typescript-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/30LWjhZzg50?si=h85AxzOx8ZD_-Sfy",
        "language": "English",
        "learnings": [
            "Introduction to TypeScript and its benefits",
            "TypeScript syntax and type annotations",
            "Working with TypeScript in JavaScript projects",
            "Building real-world applications with TypeScript"
        ],
        "course_includes": [
            "16 hours on-demand video",
            "8 coding exercises",
            "20 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript",
            "A code editor like Visual Studio Code",
            "Node.js and npm installed on your computer",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 7,
        "image": "asp-net-course.jpg",
        "title": "ASP.NET Core Web Development",
        "description": "Build modern web applications with ASP.NET Core and C#.",
        "instructor": "David Wilson",
        "original_price": 239,
        "discounted_price": 59,
        "rating": 4.7,
        "category": "ASP.NET Core",
        "students": 11000,
        "hours": 22,
        "demovideo": "asp-net-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/BfEjDD8mWYg?si=fY5YZA2HeF_fccYq",
        "language": "English",
        "learnings": [
            "Introduction to ASP.NET Core and its features",
            "Building RESTful APIs with ASP.NET Core",
            "Creating dynamic web applications with Razor Pages",
            "Authentication and authorization in ASP.NET Core",
            "Deployment and testing of ASP.NET Core apps"
        ],
        "course_includes": [
            "22 hours on-demand video",
            "12 coding exercises",
            "35 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of C# programming",
            "Visual Studio or Visual Studio Code installed",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 8,
        "image": "nodejs-course.jpg",
        "title": "Node.js for Beginners",
        "description": "Learn Node.js and build server-side applications with JavaScript.",
        "instructor": "Robert Taylor",
        "original_price": 159,
        "discounted_price": 29,
        "rating": 4.5,
        "category": "Node.js",
        "students": 18000,
        "hours": 18,
        "demovideo": "nodejs-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/Oe421EPjeBE?si=JaSjrayc7pOvv_8w",
        "language": "English",
        "learnings": [
            "Introduction to Node.js and its use cases",
            "Building a RESTful API with Express.js",
            "Working with databases using Node.js",
            "Asynchronous programming with Node.js",
            "Deploying Node.js applications"
        ],
        "course_includes": [
            "18 hours on-demand video",
            "10 coding exercises",
            "25 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript",
            "A code editor like Visual Studio Code",
            "Node.js and npm installed on your computer",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 9,
        "image": "redux-advanced-course.jpg",
        "title": "Advanced Redux Techniques",
        "description": "Master advanced state management with Redux and React.",
        "instructor": "Emily White",
        "original_price": 219,
        "discounted_price": 59,
        "rating": 4.9,
        "category": "Redux",
        "students": 9000,
        "hours": 22,
        "demovideo": "redux-advanced-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/poQXNp9ItL4?si=UjySh9AYuutL9nsl",
        "language": "English",
        "learnings": [
            "Asynchronous actions and Redux Thunk middleware",
            "Working with complex application state",
            "Testing and debugging Redux applications",
            "Implementing Redux in real-world projects",
            "Best practices for advanced Redux development"
        ],
        "course_includes": [
            "22 hours on-demand video",
            "15 coding exercises",
            "35 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Prior knowledge of Redux and React",
            "Experience with asynchronous JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 10,
        "image": "html5-course.jpg",
        "title": "HTML5 and CSS3 Masterclass",
        "description": "Explore the latest features and capabilities of HTML5 and CSS3.",
        "instructor": "Sophie Brown",
        "original_price": 189,
        "discounted_price": 49,
        "rating": 4.7,
        "category": "HTML/CSS",
        "students": 16000,
        "hours": 19,
        "demovideo": "html5-css3-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/uDkjZ-UjgX0?si=C80Aa2TnMDtDTCjk",
        "language": "English",
        "learnings": [
            "HTML5 semantic elements and multimedia",
            "CSS3 transitions, animations, and flexbox",
            "Responsive web design with media queries",
            "Building modern web layouts and templates"
        ],
        "course_includes": [
            "19 hours on-demand video",
            "12 coding exercises",
            "30 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of HTML and CSS",
            "A code editor like Visual Studio Code",
            "Access to a computer with an internet connection"
        ]
    },
    {
        "id": 11,
        "image": "asp-net-mvc-course.jpg",
        "title": "ASP.NET Core MVC Development",
        "description": "Build web applications with ASP.NET Core MVC and C#.",
        "instructor": "Peter Johnson",
        "original_price": 259,
        "discounted_price": 69,
        "rating": 4.8,
        "category": "ASP.NET Core",
        "students": 7500,
        "hours": 26,
        "demovideo": "asp-net-mvc-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/BfEjDD8mWYg?si=fY5YZA2HeF_fccYq",
        "language": "English",
        "learnings": [
            "Creating web applications with ASP.NET Core MVC",
            "Model-View-Controller (MVC) architecture",
            "Entity Framework Core and database integration",
            "Authentication and authorization in MVC",
            "Deploying ASP.NET Core MVC apps"
        ],
        "course_includes": [
            "26 hours on-demand video",
            "14 coding exercises",
            "40 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of C# programming",
            "Visual Studio or Visual Studio Code installed",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 12,
        "image": "nodejs-express-course.jpg",
        "title": "Node.js and Express.js Masterclass",
        "description": "Become a Node.js and Express.js expert for server-side development.",
        "instructor": "Alex Turner",
        "original_price": 179,
        "discounted_price": 49,
        "rating": 4.6,
        "category": "Node.js",
        "students": 12000,
        "hours": 17,
        "demovideo": "nodejs-express-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/Oe421EPjeBE?si=JaSjrayc7pOvv_8w",
        "language": "English",
        "learnings": [
            "Building RESTful APIs with Node.js and Express.js",
            "Authentication and security in Node.js",
            "Real-time applications with WebSockets",
            "Testing and debugging Node.js applications",
            "Deploying Node.js and Express.js apps"
        ],
        "course_includes": [
            "17 hours on-demand video",
            "11 coding exercises",
            "28 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript",
            "A code editor like Visual Studio Code",
            "Node.js and npm installed on your computer",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 13,
        "image": "angular-advanced-course.jpg",
        "title": "Advanced Angular Development",
        "description": "Master advanced concepts in Angular and build complex applications.",
        "instructor": "Lucas Martin",
        "original_price": 239,
        "discounted_price": 69,
        "rating": 4.9,
        "category": "Angular",
        "students": 9500,
        "hours": 25,
        "demovideo": "angular-advanced-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/3qBXWUpoPHo?si=jaWO33YoH9mJ5IAj",
        "language": "English",
        "learnings": [
            "Advanced Angular components and directives",
            "RxJS and observables in Angular",
            "Angular forms and reactive programming",
            "Optimizing Angular applications for performance",
            "Real-world Angular project development"
        ],
        "course_includes": [
            "25 hours on-demand video",
            "17 coding exercises",
            "38 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Prior knowledge of Angular",
            "Familiarity with TypeScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 14,
        "image": "javascript-es6-course.jpg",
        "title": "JavaScript ES6 and Beyond",
        "description": "Master ES6 and the latest features in JavaScript for modern web development.",
        "instructor": "Elena Davis",
        "original_price": 159,
        "discounted_price": 39,
        "rating": 4.7,
        "category": "JavaScript",
        "students": 13500,
        "hours": 16,
        "demovideo": "javascript-es6-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/jS4aFq5-91M?si=LZCY-cAfgGFEfmxM",
        "language": "English",
        "learnings": [
            "Understanding ES6 features and syntax",
            "Promises, async/await, and asynchronous programming",
            "Modules and bundling with Webpack",
            "Transpiling ES6 to ES5 for browser compatibility",
            "Practical use cases of ES6 in web development"
        ],
        "course_includes": [
            "16 hours on-demand video",
            "10 coding exercises",
            "24 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 15,
        "image": "typescript-react-course.jpg",
        "title": "TypeScript for React Developers",
        "description": "Learn TypeScript and how to use it with React for scalable web applications.",
        "instructor": "Michaela Adams",
        "original_price": 179,
        "discounted_price": 49,
        "rating": 4.8,
        "category": "TypeScript",
        "students": 11000,
        "hours": 18,
        "demovideo": "typescript-react-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/30LWjhZzg50?si=h85AxzOx8ZD_-Sfy",
        "language": "English",
        "learnings": [
            "Introduction to TypeScript and its benefits",
            "TypeScript syntax and type annotations",
            "Using TypeScript with React components",
            "Type-safe React development with TypeScript",
            "Real-world TypeScript and React projects"
        ],
        "course_includes": [
            "18 hours on-demand video",
            "12 coding exercises",
            "28 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of React",
            "Familiarity with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 16,
        "image": "css-animations-course.jpg",
        "title": "CSS Animations and Transitions",
        "description": "Master CSS animations and transitions to create stunning web designs.",
        "instructor": "Olivia Green",
        "original_price": 149,
        "discounted_price": 39,
        "rating": 4.7,
        "category": "HTML/CSS",
        "students": 11500,
        "hours": 15,
        "demovideo": "css-animations-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/uDkjZ-UjgX0?si=C80Aa2TnMDtDTCjk",
        "language": "English",
        "learnings": [
            "Understanding CSS keyframes and animation properties",
            "Creating smooth transitions and effects",
            "Using CSS animations for interactive web elements",
            "Advanced CSS animations and timing functions",
            "Practical application of animations in web projects"
        ],
        "course_includes": [
            "15 hours on-demand video",
            "8 coding exercises",
            "22 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of HTML and CSS",
            "A code editor like Visual Studio Code",
            "Access to a computer with an internet connection"
        ]
    },
    {
        "id": 17,
        "image": "javascript-testing-course.jpg",
        "title": "JavaScript Testing and Debugging",
        "description": "Learn best practices for testing and debugging JavaScript applications.",
        "instructor": "Mark Johnson",
        "original_price": 169,
        "discounted_price": 49,
        "rating": 4.8,
        "category": "JavaScript",
        "students": 9000,
        "hours": 19,
        "demovideo": "javascript-testing-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/jS4aFq5-91M?si=LZCY-cAfgGFEfmxM",
        "language": "English",
        "learnings": [
            "Setting up testing environments with popular frameworks",
            "Writing unit tests and end-to-end tests",
            "Debugging JavaScript code effectively",
            "Continuous integration and test automation",
            "Testing best practices for real-world projects"
        ],
        "course_includes": [
            "19 hours on-demand video",
            "13 coding exercises",
            "26 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 18,
        "image": "react-hooks-course.jpg",
        "title": "React Hooks in Depth",
        "description": "Explore React hooks and create functional components with state and effects.",
        "instructor": "Ella Adams",
        "original_price": 189,
        "discounted_price": 59,
        "rating": 4.7,
        "category": "React",
        "students": 13000,
        "hours": 20,
        "demovideo": "react-hooks-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/u6gSSpfsoOQ?si=hUV1cc2nTWifMDrn",
        "language": "English",
        "learnings": [
            "Understanding React hooks and their advantages",
            "Using useState, useEffect, and custom hooks",
            "Building modern React applications with hooks",
            "Refactoring class components to functional components",
            "Practical applications of React hooks"
        ],
        "course_includes": [
            "20 hours on-demand video",
            "11 coding exercises",
            "28 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of React",
            "Familiarity with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 19,
        "image": "angular-material-course.jpg",
        "title": "Angular Material Design",
        "description": "Create modern and responsive web designs with Angular Material.",
        "instructor": "Nina Patel",
        "original_price": 179,
        "discounted_price": 49,
        "rating": 4.8,
        "category": "Angular",
        "students": 10000,
        "hours": 18,
        "demovideo": "angular-material-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/3qBXWUpoPHo?si=jaWO33YoH9mJ5IAj",
        "language": "English",
        "learnings": [
            "Introduction to Angular Material components",
            "Customizing and theming Angular Material",
            "Building responsive and attractive web layouts",
            "Practical usage of Angular Material in projects",
            "Creating a complete Angular Material-based website"
        ],
        "course_includes": [
            "18 hours on-demand video",
            "9 coding exercises",
            "24 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of Angular",
            "Familiarity with HTML and CSS",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 20,
        "image": "nodejs-advanced-course.jpg",
        "title": "Advanced Node.js Development",
        "description": "Master advanced Node.js concepts for building high-performance applications.",
        "instructor": "Sam Robinson",
        "original_price": 199,
        "discounted_price": 59,
        "rating": 4.7,
        "category": "Node.js",
        "students": 8500,
        "hours": 21,
        "demovideo": "nodejs-advanced-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/Oe421EPjeBE?si=JaSjrayc7pOvv_8w",
        "language": "English",
        "learnings": [
            "Node.js event loop and asynchronous patterns",
            "Building scalable and efficient REST APIs",
            "Real-time applications with WebSockets and Socket.io",
            "Performance optimization and monitoring in Node.js",
            "Practical projects using advanced Node.js features"
        ],
        "course_includes": [
            "21 hours on-demand video",
            "14 coding exercises",
            "32 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of Node.js",
            "Experience with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 21,
        "image": "react-native-course.jpg",
        "title": "React Native Mobile Development",
        "description": "Build cross-platform mobile apps with React Native and JavaScript.",
        "instructor": "Daniel Turner",
        "original_price": 199,
        "discounted_price": 59,
        "rating": 4.8,
        "category": "React",
        "students": 9500,
        "hours": 22,
        "demovideo": "react-native-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/u6gSSpfsoOQ?si=hUV1cc2nTWifMDrn",
        "language": "English",
        "learnings": [
            "Introduction to React Native and its benefits",
            "Building mobile apps with React components",
            "Navigation and routing in React Native",
            "Accessing device features and APIs",
            "Publishing mobile apps to app stores"
        ],
        "course_includes": [
            "22 hours on-demand video",
            "12 coding exercises",
            "28 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of React",
            "Familiarity with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 22,
        "image": "graphql-course.jpg",
        "title": "GraphQL Fundamentals",
        "description": "Learn the fundamentals of GraphQL for modern API development.",
        "instructor": "Liam Johnson",
        "original_price": 159,
        "discounted_price": 49,
        "rating": 4.7,
        "category": "JavaScript",
        "students": 11000,
        "hours": 17,
        "demovideo": "graphql-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/jS4aFq5-91M?si=LZCY-cAfgGFEfmxM",
        "language": "English",
        "learnings": [
            "Introduction to GraphQL and its advantages",
            "Creating and querying GraphQL schemas",
            "Building a complete GraphQL API",
            "Using GraphQL in web and mobile applications",
            "Best practices for GraphQL development"
        ],
        "course_includes": [
            "17 hours on-demand video",
            "10 coding exercises",
            "22 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 23,
        "image": "angular-testing-course.jpg",
        "title": "Angular Testing and Debugging",
        "description": "Master testing and debugging techniques for Angular applications.",
        "instructor": "Natalie Adams",
        "original_price": 169,
        "discounted_price": 49,
        "rating": 4.8,
        "category": "Angular",
        "students": 9000,
        "hours": 19,
        "demovideo": "angular-testing-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/3qBXWUpoPHo?si=jaWO33YoH9mJ5IAj",
        "language": "English",
        "learnings": [
            "Setting up testing environments for Angular",
            "Writing unit tests and end-to-end tests",
            "Debugging Angular code effectively",
            "Continuous integration and test automation",
            "Testing best practices for Angular projects"
        ],
        "course_includes": [
            "19 hours on-demand video",
            "13 coding exercises",
            "26 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of Angular",
            "Familiarity with TypeScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 24,
        "image": "html5-multimedia-course.jpg",
        "title": "HTML5 Multimedia Development",
        "description": "Explore multimedia elements in HTML5 for interactive web content.",
        "instructor": "Sophie Turner",
        "original_price": 149,
        "discounted_price": 39,
        "rating": 4.7,
        "category": "HTML/CSS",
        "students": 9500,
        "hours": 18,
        "demovideo": "html5-multimedia-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/uDkjZ-UjgX0?si=C80Aa2TnMDtDTCjk",
        "language": "English",
        "learnings": [
            "HTML5 audio and video elements",
            "Canvas for 2D graphics and animations",
            "WebGL for 3D graphics and games",
            "Interactive multimedia projects and applications",
            "Optimizing multimedia for web delivery"
        ],
        "course_includes": [
            "18 hours on-demand video",
            "11 coding exercises",
            "28 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of HTML and CSS",
            "A code editor like Visual Studio Code",
            "Access to a computer with an internet connection"
        ]
    },
    {
        "id": 25,
        "image": "express-mongodb-course.jpg",
        "title": "Building Express.js and MongoDB Apps",
        "description": "Create web applications with Express.js and MongoDB for data-driven projects.",
        "instructor": "Lucas Turner",
        "original_price": 189,
        "discounted_price": 59,
        "rating": 4.8,
        "category": "Node.js",
        "students": 10500,
        "hours": 20,
        "demovideo": "express-mongodb-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/Oe421EPjeBE?si=JaSjrayc7pOvv_8w",
        "language": "English",
        "learnings": [
            "Building RESTful APIs with Express.js",
            "MongoDB database setup and integration",
            "CRUD operations and data retrieval with Express and MongoDB",
            "Authentication and security in data-driven apps",
            "Real-world data-driven projects"
        ],
        "course_includes": [
            "20 hours on-demand video",
            "12 coding exercises",
            "30 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of Node.js",
            "Experience with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 26,
        "image": "redux-saga-course.jpg",
        "title": "Redux Saga in Depth",
        "description": "Master asynchronous actions with Redux Saga for React applications.",
        "instructor": "William Foster",
        "original_price": 179,
        "discounted_price": 59,
        "rating": 4.9,
        "category": "Redux",
        "students": 7500,
        "hours": 21,
        "demovideo": "redux-saga-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/poQXNp9ItL4?si=UjySh9AYuutL9nsl",
        "language": "English",
        "learnings": [
            "Understanding Redux Saga and its use cases",
            "Working with generators and effects in Redux Saga",
            "Handling complex async flows in Redux applications",
            "Testing and debugging Redux Saga code",
            "Real-world applications of Redux Saga"
        ],
        "course_includes": [
            "21 hours on-demand video",
            "14 coding exercises",
            "32 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Prior knowledge of Redux and React",
            "Experience with asynchronous JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 27,
        "image": "javascript-design-patterns-course.jpg",
        "title": "JavaScript Design Patterns",
        "description": "Explore common design patterns in JavaScript for clean and maintainable code.",
        "instructor": "Emily Davis",
        "original_price": 169,
        "discounted_price": 49,
        "rating": 4.7,
        "category": "JavaScript",
        "students": 9000,
        "hours": 18,
        "demovideo": "javascript-design-patterns-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/jS4aFq5-91M?si=LZCY-cAfgGFEfmxM",
        "language": "English",
        "learnings": [
            "Understanding the principles of design patterns",
            "Creational, structural, and behavioral design patterns",
            "Implementing design patterns in real-world projects",
            "Improving code quality and maintainability with patterns",
            "Best practices for design pattern usage"
        ],
        "course_includes": [
            "18 hours on-demand video",
            "12 coding exercises",
            "26 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 28,
        "image": "angular-i18n-course.jpg",
        "title": "Angular Internationalization (i18n)",
        "description": "Learn how to internationalize Angular applications for global audiences.",
        "instructor": "David Martin",
        "original_price": 159,
        "discounted_price": 49,
        "rating": 4.8,
        "category": "Angular",
        "students": 9500,
        "hours": 16,
        "demovideo": "angular-i18n-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/3qBXWUpoPHo?si=jaWO33YoH9mJ5IAj",
        "language": "English",
        "learnings": [
            "Introduction to internationalization (i18n) in web applications",
            "Configuring and implementing i18n in Angular",
            "Handling multiple languages and locales in Angular",
            "Testing and best practices for i18n in Angular",
            "Internationalization in real Angular projects"
        ],
        "course_includes": [
            "16 hours on-demand video",
            "10 coding exercises",
            "24 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of Angular",
            "Familiarity with TypeScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 29,
        "image": "html5-games-course.jpg",
        "title": "HTML5 Game Development",
        "description": "Create interactive games using HTML5, CSS3, and JavaScript.",
        "instructor": "Sophia Turner",
        "original_price": 179,
        "discounted_price": 59,
        "rating": 4.7,
        "category": "HTML/CSS",
        "students": 8500,
        "hours": 20,
        "demovideo": "html5-games-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/uDkjZ-UjgX0?si=C80Aa2TnMDtDTCjk",
        "language": "English",
        "learnings": [
            "HTML5 canvas for 2D game graphics",
            "Animation and physics in HTML5 games",
            "Implementing game logic and interactivity",
            "Creating various game types and genres",
            "Publishing games on the web"
        ],
        "course_includes": [
            "20 hours on-demand video",
            "13 coding exercises",
            "30 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of HTML and CSS",
            "Familiarity with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to a computer with an internet connection"
        ]
    },
    {
        "id": 30,
        "image": "rest-api-nodejs-course.jpg",
        "title": "Building RESTful APIs with Node.js",
        "description": "Create RESTful APIs with Node.js for modern web and mobile applications.",
        "instructor": "Lucas Johnson",
        "original_price": 189,
        "discounted_price": 59,
        "rating": 4.8,
        "category": "Node.js",
        "students": 9500,
        "hours": 21,
        "demovideo": "rest-api-nodejs-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/Oe421EPjeBE?si=JaSjrayc7pOvv_8w",
        "language": "English",
        "learnings": [
            "Introduction to RESTful architecture and APIs",
            "Setting up RESTful routes and controllers in Node.js",
            "Database integration and CRUD operations",
            "Authentication and security in RESTful APIs",
            "Building practical RESTful services"
        ],
        "course_includes": [
            "21 hours on-demand video",
            "14 coding exercises",
            "32 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of Node.js",
            "Experience with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 31,
        "image": "typescript-advanced-course.jpg",
        "title": "Advanced TypeScript Development",
        "description": "Master advanced TypeScript features for scalable web applications.",
        "instructor": "Michael Turner",
        "original_price": 179,
        "discounted_price": 59,
        "rating": 4.9,
        "category": "TypeScript",
        "students": 8000,
        "hours": 20,
        "demovideo": "typescript-advanced-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/30LWjhZzg50?si=h85AxzOx8ZD_-Sfy",
        "language": "English",
        "learnings": [
            "Advanced TypeScript types and type inference",
            "Working with generics and conditional types",
            "TypeScript decorators and metadata reflection",
            "TypeScript in complex web projects",
            "Real-world applications of advanced TypeScript"
        ],
        "course_includes": [
            "20 hours on-demand video",
            "12 coding exercises",
            "28 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of TypeScript",
            "Familiarity with JavaScript and web development",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 32,
        "image": "asp-net-core-mvc-course.jpg",
        "title": "ASP.NET Core MVC Development",
        "description": "Build web applications with ASP.NET Core MVC for the modern web.",
        "instructor": "Jennifer Martinez",
        "original_price": 189,
        "discounted_price": 59,
        "rating": 4.8,
        "category": "ASP.NET Core",
        "students": 9000,
        "hours": 22,
        "demovideo": "asp-net-core-mvc-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/BfEjDD8mWYg?si=fY5YZA2HeF_fccYq",
        "language": "English",
        "learnings": [
            "Introduction to ASP.NET Core and MVC architecture",
            "Creating controllers, views, and models in ASP.NET Core",
            "Routing and middleware in ASP.NET Core",
            "Authentication and security in web applications",
            "Building practical web projects with ASP.NET Core MVC"
        ],
        "course_includes": [
            "22 hours on-demand video",
            "15 coding exercises",
            "30 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of C# and .NET",
            "Experience with web development",
            "A code editor like Visual Studio",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 33,
        "image": "react-native-redux-course.jpg",
        "title": "React Native with Redux",
        "description": "Build cross-platform mobile apps with React Native and Redux.",
        "instructor": "Daniel Foster",
        "original_price": 199,
        "discounted_price": 69,
        "rating": 4.9,
        "category": "React",
        "students": 7500,
        "hours": 24,
        "demovideo": "react-native-redux-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/u6gSSpfsoOQ?si=hUV1cc2nTWifMDrn",
        "language": "English",
        "learnings": [
            "Introduction to React Native and Redux integration",
            "State management with Redux in mobile apps",
            "Async actions and middleware in Redux",
            "Building complete mobile applications",
            "Publishing mobile apps to app stores"
        ],
        "course_includes": [
            "24 hours on-demand video",
            "16 coding exercises",
            "36 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of React and Redux",
            "Familiarity with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 34,
        "image": "full-stack-mern-course.jpg",
        "title": "Full-Stack MERN Development",
        "description": "Become a full-stack developer with the MERN (MongoDB, Express, React, Node) stack.",
        "instructor": "Lucy Turner",
        "original_price": 229,
        "discounted_price": 79,
        "rating": 4.9,
        "category": "Node.js",
        "students": 8200,
        "hours": 26,
        "demovideo": "full-stack-mern-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/Oe421EPjeBE?si=JaSjrayc7pOvv_8w",
        "language": "English",
        "learnings": [
            "Building RESTful APIs with Node.js and Express",
            "Creating responsive frontends with React",
            "MongoDB database setup and integration",
            "Authentication and authorization in MERN apps",
            "Deploying MERN apps to the cloud"
        ],
        "course_includes": [
            "26 hours on-demand video",
            "18 coding exercises",
            "40 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript and web development",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 35,
        "image": "css-grid-course.jpg",
        "title": "Mastering CSS Grid Layout",
        "description": "Learn how to create complex, responsive layouts with CSS Grid.",
        "instructor": "Sophia Turner",
        "original_price": 139,
        "discounted_price": 49,
        "rating": 4.7,
        "category": "HTML/CSS",
        "students": 7800,
        "hours": 14,
        "demovideo": "css-grid-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/uDkjZ-UjgX0?si=C80Aa2TnMDtDTCjk",
        "language": "English",
        "learnings": [
            "Understanding CSS Grid fundamentals",
            "Creating grid layouts with grid-template-areas",
            "Media queries and responsive design with CSS Grid",
            "Practical examples of complex grid layouts",
            "Optimizing web design with CSS Grid"
        ],
        "course_includes": [
            "14 hours on-demand video",
            "9 coding exercises",
            "20 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of HTML and CSS",
            "A code editor like Visual Studio Code",
            "Access to a computer with an internet connection"
        ]
    },
    {
        "id": 36,
        "image": "react-router-course.jpg",
        "title": "React Router and Navigation",
        "description": "Master routing and navigation in React applications with React Router.",
        "instructor": "Daniel Foster",
        "original_price": 149,
        "discounted_price": 39,
        "rating": 4.8,
        "category": "React",
        "students": 9300,
        "hours": 16,
        "demovideo": "react-router-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/u6gSSpfsoOQ?si=hUV1cc2nTWifMDrn",
        "language": "English",
        "learnings": [
            "Introduction to React Router and its features",
            "Setting up routes and navigation in React",
            "Route parameters and query strings",
            "Nested routes and dynamic routing",
            "Practical usage of React Router in projects"
        ],
        "course_includes": [
            "16 hours on-demand video",
            "10 coding exercises",
            "22 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of React",
            "Familiarity with JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 37,
        "image": "rxjs-course.jpg",
        "title": "Reactive Programming with RxJS",
        "description": "Learn reactive programming with RxJS for building responsive web applications.",
        "instructor": "Liam Johnson",
        "original_price": 159,
        "discounted_price": 49,
        "rating": 4.8,
        "category": "JavaScript",
        "students": 9600,
        "hours": 18,
        "demovideo": "rxjs-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/jS4aFq5-91M?si=LZCY-cAfgGFEfmxM",
        "language": "English",
        "learnings": [
            "Introduction to reactive programming and observables",
            "Creating and transforming observables with RxJS",
            "Working with operators and combining observables",
            "Real-world applications of RxJS in web development",
            "Best practices for reactive programming"
        ],
        "course_includes": [
            "18 hours on-demand video",
            "12 coding exercises",
            "24 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 38,
        "image": "vuejs-course.jpg",
        "title": "Vue.js Frontend Development",
        "description": "Master frontend development with Vue.js for building modern web apps.",
        "instructor": "Emily Davis",
        "original_price": 169,
        "discounted_price": 59,
        "rating": 4.7,
        "category": "JavaScript",
        "students": 8400,
        "hours": 19,
        "demovideo": "vuejs-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/jS4aFq5-91M?si=LZCY-cAfgGFEfmxM",
        "language": "English",
        "learnings": [
            "Introduction to Vue.js and its core concepts",
            "Creating Vue components and managing state",
            "Routing and navigation in Vue.js apps",
            "Vue CLI and project setup",
            "Building real-world applications with Vue.js"
        ],
        "course_includes": [
            "19 hours on-demand video",
            "13 coding exercises",
            "26 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of HTML, CSS, and JavaScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 39,
        "image": "ngrx-course.jpg",
        "title": "State Management with NgRx",
        "description": "Learn state management with NgRx for Angular applications.",
        "instructor": "David Martin",
        "original_price": 159,
        "discounted_price": 49,
        "rating": 4.8,
        "category": "Angular",
        "students": 8200,
        "hours": 17,
        "demovideo": "ngrx-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/3qBXWUpoPHo?si=jaWO33YoH9mJ5IAj",
        "language": "English",
        "learnings": [
            "Understanding state management in Angular",
            "Using NgRx for centralized state management",
            "Actions, reducers, and effects in NgRx",
            "Real-world state management in Angular apps",
            "Testing and debugging NgRx code"
        ],
        "course_includes": [
            "17 hours on-demand video",
            "10 coding exercises",
            "22 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of Angular",
            "Familiarity with TypeScript",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 40,
        "image": "asp-net-core-api-course.jpg",
        "title": "Building APIs with ASP.NET Core",
        "description": "Create RESTful APIs with ASP.NET Core for modern web and mobile applications.",
        "instructor": "Jennifer Martinez",
        "original_price": 179,
        "discounted_price": 59,
        "rating": 4.8,
        "category": "ASP.NET Core",
        "students": 8800,
        "hours": 20,
        "demovideo": "asp-net-core-api-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/BfEjDD8mWYg?si=fY5YZA2HeF_fccYq",
        "language": "English",
        "learnings": [
            "Introduction to RESTful architecture and APIs",
            "Setting up RESTful routes and controllers in ASP.NET Core",
            "Database integration and CRUD operations",
            "Authentication and security in RESTful APIs",
            "Building practical RESTful services"
        ],
        "course_includes": [
            "20 hours on-demand video",
            "14 coding exercises",
            "28 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of C# and .NET",
            "Experience with web development",
            "A code editor like Visual Studio",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 41,
        "image": "next-js-course.jpg",
        "title": "Next.js - Server-side React",
        "description": "Learn Next.js for server-side rendering and building SEO-friendly React apps.",
        "instructor": "Michael Turner",
        "original_price": 169,
        "discounted_price": 59,
        "rating": 4.8,
        "category": "React",
        "students": 9200,
        "hours": 18,
        "demovideo": "next-js-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/u6gSSpfsoOQ?si=hUV1cc2nTWifMDrn",
        "language": "English",
        "learnings": [
            "Introduction to Next.js and its benefits",
            "Server-side rendering with Next.js",
            "Static site generation and data fetching",
            "Routing and navigation in Next.js apps",
            "SEO optimization for React applications"
        ],
        "course_includes": [
            "18 hours on-demand video",
            "12 coding exercises",
            "24 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of React",
            "Familiarity with JavaScript and web development",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 42,
        "image": "graphql-apollo-course.jpg",
        "title": "GraphQL with Apollo Client",
        "description": "Master GraphQL and Apollo Client for efficient data management in web apps.",
        "instructor": "Natalie Adams",
        "original_price": 169,
        "discounted_price": 59,
        "rating": 4.7,
        "category": "JavaScript",
        "students": 8000,
        "hours": 19,
        "demovideo": "graphql-apollo-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/jS4aFq5-91M?si=LZCY-cAfgGFEfmxM",
        "language": "English",
        "learnings": [
            "Understanding GraphQL and its benefits",
            "Setting up GraphQL servers and schemas",
            "Using Apollo Client for data fetching and caching",
            "Optimizing data management in web applications",
            "Real-world applications of GraphQL with Apollo"
        ],
        "course_includes": [
            "19 hours on-demand video",
            "13 coding exercises",
            "26 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of JavaScript and web development",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    },
    {
        "id": 43,
        "image": "docker-kubernetes-course.jpg",
        "title": "Docker and Kubernetes Mastery",
        "description": "Learn containerization with Docker and orchestration with Kubernetes for scalable deployments.",
        "instructor": "William Foster",
        "original_price": 179,
        "discounted_price": 69,
        "rating": 4.8,
        "category": "Node.js",
        "students": 8500,
        "hours": 20,
        "demovideo": "docker-kubernetes-demo.mp4",
        "fullvideo": "https://www.youtube.com/embed/Oe421EPjeBE?si=JaSjrayc7pOvv_8w",
        "language": "English",
        "learnings": [
            "Introduction to Docker containers and images",
            "Container orchestration with Kubernetes",
            "Creating, deploying, and managing containerized applications",
            "Scaling and load balancing with Kubernetes",
            "Real-world use cases of Docker and Kubernetes"
        ],
        "course_includes": [
            "20 hours on-demand video",
            "14 coding exercises",
            "30 articles",
            "Access on mobile and TV",
            "Certificate of completion"
        ],
        "requirements": [
            "Basic knowledge of web development and server deployment",
            "A code editor like Visual Studio Code",
            "Access to the internet for resources"
        ]
    }
]
const SingleCoursePage = () => {
    // const {id}=useParams();
    const [data,setData]=useState({});
    useEffect(()=>{
        courses.forEach((ele)=>{
            if(ele.id===1){
              setData(ele);
            }
        })
    },[])
    console.log(data);

  return (
    <>
    {
        data && <SingleCourseExt key={data.id} {...data} />
    }
    </>
  )
}

export default SingleCoursePage