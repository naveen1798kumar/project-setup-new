import { FaLaptopCode, FaPaintBrush, FaDatabase, FaChartLine } from 'react-icons/fa';
import FullStack from "./assets.js";

const courses = [
  {
    category: 'Full Stack Development Courses',
    courses: [
      {
        id: 1,
        title: 'MERN Stack Developer Course',
        description: 'Master MongoDB, Express.js, React.js, and Node.js to become a full-stack developer.',
        details: 'This comprehensive course covers full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). You will start with the fundamentals of web development, gradually progress to building interactive frontends and scalable backends, and finally, learn advanced concepts like authentication, deployment, and performance optimization.',
        icon: '🖥️',
        topics: {
          Beginner: {
            duration: "4 Weeks",
            topics: [
              "Introduction to Web Development",
              "HTML, CSS, and JavaScript Basics",
              "Introduction to Git & GitHub",
              "Getting Started with React.js",
              "Components, Props, and State in React",
              "Basic Routing with React Router",
            ]
          },
          Intermediate: {
            duration: "6 Weeks",
            topics: [
              "Advanced React (Hooks, Context API, Redux)",
              "Building Dynamic Frontend UIs",
              "Introduction to Node.js & Express.js",
              "Building REST APIs with Express",
              "Database Management with MongoDB",
              "User Authentication (JWT, OAuth)",
              "Handling File Uploads & Middleware",
            ]
          },
          Advanced: {
            duration: "6 Weeks",
            topics: [
              "Full-Stack Project Development",
              "Advanced Authentication (Role-based Access Control)",
              "Optimizing Performance & Security Best Practices",
              "Deploying Applications (Vercel, Netlify, AWS, Heroku)",
              "Server-Side Rendering (SSR) & Next.js Basics",
              "Unit Testing & Debugging in Full-Stack Applications",
              "Real-time Applications with WebSockets",
            ]
          }
        },
        image: FullStack.MernStack,
        detailedDescription: "The MERN Stack Developer Course is designed to take you from a complete beginner to an advanced developer. You'll learn how to build modern, responsive, and scalable web applications from scratch. Starting with frontend development using React, you'll progress to backend development with Node.js and Express.js, and finally integrate MongoDB for data storage. By the end of this course, you will be able to develop and deploy a fully functional full-stack application with authentication, database connectivity, and optimized performance.",
        faq: [
          {
            question: "Why should I learn MERN Stack?",
            answer: "MERN Stack is one of the most in-demand full-stack development technologies. It allows developers to build both frontend and backend using JavaScript, making development faster and more efficient. It is widely used by companies for scalable web applications."
          },
          {
            question: "Is this course suitable for beginners?",
            answer: "Yes! The course starts from the basics of web development and gradually builds up to advanced concepts. Whether you are a complete beginner or have some prior knowledge, this course will help you become a full-stack developer."
          },
          {
            question: "What projects will I build?",
            answer: "You'll build several real-world projects, including a portfolio website, a blog platform, an eCommerce site with authentication, and a real-time chat application."
          },
          {
            question: "How long does it take to complete the course?",
            answer: "The course is designed to be completed in approximately 16 weeks if followed consistently. However, the pace can be adjusted based on your availability."
          },
          {
            question: "What are the career opportunities after completing this course?",
            answer: "After completing this course, you can apply for roles such as Frontend Developer, Backend Developer, Full-Stack Developer, or Software Engineer in various startups and tech companies."
          }
        ]
      },
      {
        id: 2,
        title: 'Java Full-Stack Developer Course',
        description: 'Master Java, Spring Boot, Hibernate, and frontend technologies to become a full-stack Java developer.',
        details: 'This comprehensive course covers full-stack development using Java. You will start with core Java fundamentals, progress to backend development with Spring Boot, and frontend development with modern technologies. Finally, you will learn advanced concepts like authentication, deployment, and performance optimization.',
        icon: '☕',
        topics: {
          Beginner: {
            duration: "4 Weeks",
            topics: [
              "Introduction to Java & OOP Principles",
              "Basic Syntax, Data Types, and Loops",
              "Exception Handling and File Handling",
              "Introduction to JDBC & Database Connectivity",
              "Version Control with Git & GitHub",
              "Building Basic Java Applications",
            ]
          },
          Intermediate: {
            duration: "6 Weeks",
            topics: [
              "Advanced Java (Collections, Streams, Lambda Expressions)",
              "Introduction to Spring Framework & Spring Boot",
              "Building REST APIs with Spring Boot",
              "Database Management with Hibernate & JPA",
              "Authentication & Authorization (JWT, OAuth)",
              "Microservices Architecture & API Gateway",
            ]
          },
          Advanced: {
            duration: "6 Weeks",
            topics: [
              "Full-Stack Project Development",
              "Spring Security & Role-Based Access Control",
              "Optimizing Performance & Security Best Practices",
              "Deploying Applications (AWS, Docker, Kubernetes)",
              "Frontend Development with React & Angular",
              "Unit Testing & Debugging in Java Applications",
              "Real-time Applications with WebSockets",
            ]
          }
        },
        image: FullStack.JavaStack,
        detailedDescription: "The Java Full-Stack Developer Course is designed to take you from a beginner to an advanced developer. You'll learn how to build modern, scalable web applications from scratch. Starting with core Java, you'll move on to backend development with Spring Boot, integrate databases using Hibernate, and develop frontend applications using React or Angular. By the end of this course, you will be able to develop and deploy a fully functional full-stack application with authentication, database connectivity, and optimized performance.",
        faq: [
          {
            question: "Why should I learn Java Full-Stack?",
            answer: "Java is one of the most widely used programming languages in the world. Learning full-stack Java development opens up opportunities in enterprise software development, web applications, and microservices architecture."
          },
          {
            question: "Is this course suitable for beginners?",
            answer: "Yes! The course starts from the basics of Java and gradually builds up to advanced concepts. Whether you are a complete beginner or have some prior knowledge, this course will help you become a full-stack Java developer."
          },
          {
            question: "What projects will I build?",
            answer: "You'll build several real-world projects, including a portfolio website, an employee management system, an eCommerce platform with authentication, and a real-time chat application."
          },
          {
            question: "How long does it take to complete the course?",
            answer: "The course is designed to be completed in approximately 16 weeks if followed consistently. However, the pace can be adjusted based on your availability."
          },
          {
            question: "What are the career opportunities after completing this course?",
            answer: "After completing this course, you can apply for roles such as Java Developer, Backend Developer, Full-Stack Developer, or Software Engineer in various companies."
          }
        ]
      },
      {
        id: 3,
        title: 'Python Full Stack Developer Course',
        description: 'Become proficient in Python, Django, React, and PostgreSQL for full-stack development.',
        details: 'This comprehensive course covers full-stack development using Python. You will start with core Python fundamentals, progress to backend development with Django, and frontend development with React. Finally, you will learn advanced concepts like authentication, deployment, and performance optimization.',
        icon: '🐍',
        topics: {
          Beginner: {
            duration: "4 Weeks",
            topics: [
              "Introduction to Python & Programming Basics",
              "Data Structures, Loops, and Functions",
              "Object-Oriented Programming in Python",
              "Introduction to Django & Setting Up Projects",
              "Version Control with Git & GitHub",
              "Building Basic Web Applications with Django",
            ]
          },
          Intermediate: {
            duration: "6 Weeks",
            topics: [
              "Advanced Django (Models, Views, Templates)",
              "Building REST APIs with Django REST Framework",
              "Database Management with PostgreSQL",
              "User Authentication & Authorization (JWT, OAuth)",
              "Frontend Development with React.js",
              "State Management with Redux & Context API",
            ]
          },
          Advanced: {
            duration: "6 Weeks",
            topics: [
              "Full-Stack Project Development",
              "Optimizing Performance & Security Best Practices",
              "Deploying Applications (AWS, Heroku, Docker)",
              "Unit Testing & Debugging in Python Applications",
              "Building Real-time Applications with WebSockets",
              "Microservices Architecture with Django & FastAPI",
            ]
          }
        },
        image: FullStack.PythonStack,
        detailedDescription: "The Python Full-Stack Developer Course is designed to take you from a beginner to an advanced developer. You'll learn how to build modern, scalable web applications from scratch. Starting with core Python, you'll move on to backend development with Django, integrate databases using PostgreSQL, and develop frontend applications using React. By the end of this course, you will be able to develop and deploy a fully functional full-stack application with authentication, database connectivity, and optimized performance.",
        faq: [
          {
            question: "Why should I learn Python Full-Stack?",
            answer: "Python is one of the most versatile and widely used programming languages. Learning full-stack Python development enables you to build scalable web applications, automate tasks, and work with data science and machine learning."
          },
          {
            question: "Is this course suitable for beginners?",
            answer: "Yes! The course starts from the basics of Python and gradually builds up to advanced concepts. Whether you are a complete beginner or have some prior knowledge, this course will help you become a full-stack Python developer."
          },
          {
            question: "What projects will I build?",
            answer: "You'll build several real-world projects, including a portfolio website, a blogging platform, an eCommerce site with authentication, and a real-time chat application."
          },
          {
            question: "How long does it take to complete the course?",
            answer: "The course is designed to be completed in approximately 16 weeks if followed consistently. However, the pace can be adjusted based on your availability."
          },
          {
            question: "What are the career opportunities after completing this course?",
            answer: "After completing this course, you can apply for roles such as Python Developer, Backend Developer, Full-Stack Developer, or Software Engineer in various companies."
          }
        ]
      }
    ]
  },

  {
    category: 'Frontend Development Courses',
    courses: [
      {
        id: 4,
        title: 'React JS Developer Course',
        description: 'Learn React.js to build dynamic and scalable frontend applications.',
        details: 'This course covers JSX, components, state management, hooks, and working with APIs in React. You will also learn Redux and Context API for efficient state management.',
        detailedDescription: 'The React JS Developer Course is designed for developers who want to create high-performance, interactive web applications. This course covers the fundamentals of React, including JSX, components, props, and state. You will dive deep into hooks, useContext, and useEffect for efficient component management. Advanced topics include Redux for state management, handling API requests, and optimizing application performance. By the end of the course, you will be able to build complex single-page applications (SPAs) with real-world use cases.',
        icon: '⚛️',
        topics: [],
        image: FullStack.ReactStack
      },
      {
        id: 5,
        title: 'Fundamentals in HTML/CSS & JavaScript',
        description: 'Introduction to web development basics for students and beginners.',
        details: 'This course teaches the core building blocks of the web: HTML for structure, CSS for styling, and JavaScript for interactivity. Perfect for beginners looking to start web development.',
        detailedDescription: 'This beginner-friendly course is perfect for those who want to kickstart their web development journey. You will learn how HTML is used to structure web pages, CSS is used to style them, and JavaScript is used to make them interactive. Topics include semantic HTML, responsive design, CSS Flexbox and Grid, JavaScript fundamentals, DOM manipulation, and event handling. By the end of this course, you will be able to build static and dynamic web pages with a professional look.',
        icon: '🌐',
        topics: [],
        image: FullStack.HTML
      }
    ]
  },
  {
    category: 'Backend Development & Database Courses',
    courses: [
      {
        id: 6,
        title: 'Node.js Developer Course',
        description: 'Develop scalable server-side applications using Node.js and Express.',
        details: 'This course covers backend development with Node.js, Express.js, handling databases with MongoDB and MySQL, authentication, and building REST APIs.',
        detailedDescription: 'The Node.js Developer Course provides in-depth knowledge of server-side programming using JavaScript. You will learn how to create fast and scalable server applications with Node.js and Express.js. The course also covers database integration with MongoDB and MySQL, authentication with JWT, and building secure RESTful APIs. You will work on projects like an e-commerce API, user authentication system, and real-time chat applications.',
        icon: '🌍',
        topics: [],
        image: FullStack.NodeJS
      },
      {
        id: 7,
        title: 'MySQL Course',
        description: 'Learn MySQL for efficient database management and SQL queries.',
        details: 'Understand relational databases, write complex SQL queries, optimize databases, and integrate MySQL with backend technologies.',
        detailedDescription: 'This course is designed for those who want to master SQL and database management. You will learn about database architecture, normalization, indexing, and writing efficient SQL queries. The course covers CRUD operations, joins, subqueries, stored procedures, and database security. You will also learn how to integrate MySQL with backend frameworks like Node.js, PHP, and Python. By the end of this course, you will be able to design and manage databases efficiently for various applications.',
        icon: '💾',
        topics: [],
        image: FullStack.MySQL
      },
      {
        id: 8,
        title: 'Linux Administration Course',
        description: 'Master Linux commands, server management, and cloud deployments.',
        details: 'Learn Linux system administration, shell scripting, server setup, and cloud deployment with AWS and Docker.',
        detailedDescription: 'This Linux Administration course is ideal for those looking to understand Linux-based environments. You will learn essential Linux commands, user management, file permissions, networking, and shell scripting. The course also covers server setup, process management, and security hardening techniques. Advanced topics include cloud deployment using AWS and Docker. By the end of this course, you will have the skills to manage Linux servers and automate administrative tasks.',
        icon: '🐧',
        topics: [],
        image: FullStack.Linux
      }
    ]
  },
  {
    category: 'Software Development & Testing',
    courses: [
      {
        id: 9,
        title: 'Java Developer Course',
        description: 'Comprehensive training in Java programming, OOP concepts, and Spring Boot framework.',
        details: 'Learn Java programming, object-oriented concepts, multithreading, data structures, and backend development with Spring Boot.',
        detailedDescription: 'The Java Developer Course is designed to provide in-depth knowledge of Java programming and its real-world applications. You will start with the basics of Java, covering OOP principles, collections, and exception handling. You will then move to advanced topics like multithreading, file handling, and JDBC. The course also includes backend development using Spring Boot and Hibernate, equipping you with the skills needed to build scalable Java-based applications.',
        icon: '☕',
        topics: [],
        image: FullStack.JavaDev
      },
      {
        id: 10,
        title: 'Python Developer Course',
        description: 'Learn Python programming, Flask/Django, and automation techniques.',
        details: 'Master Python syntax, data structures, automation, web development with Django and Flask, and machine learning basics.',
        detailedDescription: 'This Python Developer Course is structured to take you from a beginner to an advanced level in Python. You will learn Python fundamentals, data structures, and object-oriented programming. The course also covers automation using Python scripts, web development with Flask and Django, and an introduction to data science and machine learning. By the end of this course, you will be proficient in Python for both web development and automation tasks.',
        icon: '🐍',
        topics: [],
        image: FullStack.Python
      },
      {
        id: 11,
        title: 'Software Testing Course',
        description: 'Master manual and automation testing with Selenium and JUnit.',
        details: 'Learn software testing fundamentals, manual testing techniques, Selenium WebDriver, JUnit, TestNG, and performance testing.',
        detailedDescription: 'The Software Testing Course is designed to help you become proficient in both manual and automated testing. You will learn how to write test cases, conduct functional testing, and use tools like Selenium WebDriver for automation. The course also covers unit testing with JUnit, performance testing, and debugging techniques. By the end of the course, you will be able to efficiently test software applications for functionality, usability, and performance.',
        icon: '🛠️',
        topics: [],
        image: FullStack.Selenium
      }
    ]
  },
  {
    category: 'Mobile App Development',
    courses: [
      {
        id: 12,
        title: 'Android Developer Course',
        description: 'Learn to build Android applications using Java and Kotlin.',
        details: 'Master Android Studio, UI design, API integration, and database management to create powerful Android apps.',
        detailedDescription: 'The Android Developer Course is perfect for those looking to build mobile applications from scratch. You will learn Android development using Java and Kotlin, covering UI/UX design principles, activity lifecycle, and API integration. The course also includes Firebase for real-time databases, push notifications, and authentication. By the end of the course, you will have hands-on experience building fully functional Android apps.',
        icon: '📱',
        topics: [],
        image: FullStack.Android
      }
    ]
  }
  
];

const diplomaCourse = [
{
  category: 'Office & Accounting Courses',
  courses: [
    {
      id: 1,
      title: 'Office Application Course',
      description: 'Learn Microsoft Office tools including Word, Excel, and PowerPoint.',
      details: 'Get hands-on training in Microsoft Word, Excel formulas, PowerPoint presentations, and advanced Excel functions.',
      detailedDescription: 'This course provides a thorough understanding of Microsoft Office applications, equipping you with the skills needed for document creation, data analysis, and professional presentations. You will learn advanced formatting in Word, Excel formulas, functions, and data visualization techniques, along with PowerPoint presentation design. Ideal for students, professionals, and anyone looking to improve their office productivity skills.',
      icon: '📄',
      topics: [],
      image: FullStack.Office
    },
    {
      id: 2,
      title: 'Computer Accounting Course',
      description: 'Master Tally, QuickBooks, and accounting software for finance management.',
      details: 'Understand business accounting principles, GST calculations, and financial management using Tally and QuickBooks.',
      detailedDescription: 'This course is designed for individuals looking to enhance their accounting skills using modern software tools like Tally and QuickBooks. You will learn the fundamentals of financial accounting, bookkeeping, GST calculations, and business transactions. By the end of the course, you will be able to efficiently manage financial records, generate reports, and handle business transactions digitally.',
      icon: '💰',
      topics: [],
      image: FullStack.ComputerAccounting
    },
    {
      id: 3,
      title: 'Certificate in Office Applications',
      description: 'Earn a certificate by mastering essential office software tools.',
      details: 'This course covers in-depth training in Microsoft Office suite, including advanced features in Word, Excel, and PowerPoint to prepare you for professional environments.',
      detailedDescription: 'The Certificate in Office Applications course offers a structured approach to learning Microsoft Office tools. You will develop expertise in word processing, spreadsheet management, and presentation design. This certification is ideal for individuals seeking to boost their administrative skills and enhance productivity in a corporate or educational environment.',
      icon: '🎓',
      topics: [],
      image: FullStack.OfficeApplication
    },
    {
      id: 4,
      title: 'Certificate in Computer Accounts',
      description: 'Acquire essential skills in computer-based accounting.',
      details: 'This course covers the fundamentals of computerized accounting, including the use of popular accounting software, financial reporting, and bookkeeping techniques.',
      detailedDescription: 'This course is designed to provide in-depth knowledge of accounting software and financial management. You will learn to record transactions, prepare financial statements, and generate reports using software like Tally and QuickBooks. Ideal for students and professionals aiming to develop strong accounting and financial analysis skills.',
      icon: '📊',
      topics: [],
      image: FullStack.ComputerAccounting
    },
    {
      id: 5,
      title: 'Tally',
      description: 'Acquire essential skills in computer-based accounting.',
      details: 'This course covers the fundamentals of computerized accounting, including the use of popular accounting software, financial reporting, and bookkeeping techniques.',
      detailedDescription: '',
      icon: '📊',
      topics: [],
      image: FullStack.Tally
    },
  ]
},

{
  category: 'Design & Drafting Courses',
  courses: [
    {
      id: 1,
      title: 'Desktop Publishing',
      description: 'Learn the art of desktop publishing and graphic design.',
      details: 'Gain proficiency in desktop publishing software like Adobe InDesign and QuarkXPress, learn layout design, typography, and prepress processes for professional publishing.',
      detailedDescription: 'This course is tailored for aspiring designers and publishing professionals. You will learn to use industry-standard tools like Adobe InDesign and QuarkXPress to create high-quality publications, brochures, and marketing materials. The course covers key topics such as typography, color theory, layout design, and prepress techniques. By the end of this course, you will be equipped with the skills to design and format print and digital content with precision and creativity.',
      icon: '🖨️',
      topics: [],
      image: FullStack.Publications
    },
    {
      id: 2,
      title: 'Computer Aided Drafting',
      description: 'Learn the fundamentals of CAD software for precise drafting and design.',
      details: 'Gain hands-on experience with AutoCAD and other drafting software to create technical drawings, architectural designs, and engineering blueprints.',
      detailedDescription: 'This course provides comprehensive training in Computer Aided Drafting (CAD), focusing on creating accurate and detailed technical drawings. You will learn to use industry-standard software like AutoCAD for architectural, mechanical, and civil engineering designs. The curriculum covers essential drafting techniques, 2D and 3D modeling, dimensioning, and blueprint creation. By the end of the course, you will have the expertise to produce professional technical drawings used in engineering, construction, and manufacturing industries.',
      icon: '📄',
      topics: [],
      image: FullStack.Drafting
    }
  ]
},

{
  category: 'Computer & Programming Courses',
  courses: [
    {
      id: 1,
      title: 'Machine Learning Programming',
      description: 'Learn the fundamentals and implementation of machine learning techniques.',
      details: 'This course covers the core principles of machine learning, algorithms, and AI applications, with hands-on implementation using Python.',
      detailedDescription: [
        "Basics of machine learning",
        "Machine learning algorithms",
        "Focuses on the principles and techniques",
        "Implementation in Python",
        "Focusing on AI",
        "Including machine learning",
        "Robotics",
        "Computer vision"
      ],
      icon: '🤖',
      topics: [],
      image: FullStack.MachineLearn
    },
    {
      id: 2,
      title: 'Diploma in Computer Application',
      description: 'A comprehensive diploma covering various computer applications.',
      details: 'Learn about a range of computer applications including office productivity tools, database management, and basic programming to boost your computer literacy.',
      detailedDescription: [
        "Covers Microsoft Office tools, including Word, Excel, and PowerPoint",
        "Database management and introduction to SQL",
        "Basic programming concepts in Python and JavaScript",
        "Computer fundamentals and troubleshooting",
        "Practical projects to enhance digital skills"
      ],
      icon: '💻',
      topics: [],
      image: '/images/courses/diploma-computer-application.jpg'
    },
    {
      id: 3,
      title: 'Diploma in Multimedia Operation',
      description: 'Master multimedia tools for creative production.',
      details: 'This diploma course teaches you video editing, audio production, graphic design, and animation using industry-standard software to prepare you for a career in multimedia production.',
      detailedDescription: [
        "Video Editing",
        "Adobe Premiere & Flash",
        "Graphic Design and Animation",
        "Illustrator",
        "Sound Forge",
        "Digital Marketing and Content Creation",
        "Social Media Marketing",
        "Photoshop"
      ],
      icon: '🎬',
      topics: [],
      image: FullStack.Multimedia
    },
    {
      id: 4,
      title: 'Diploma in Computer Programming',
      description: 'Comprehensive training in programming languages and software development.',
      details: 'Learn core programming concepts, algorithm design, and hands-on coding in Python, Java, and C++ to develop real-world applications.',
      detailedDescription: [
        "Programming fundamentals and logic building",
        "Hands-on coding in Python, Java, and C++",
        "Data structures and algorithms",
        "Problem-solving techniques",
        "Project-based learning with real-world applications"
      ],
      icon: '👨‍💻',
      topics: [],
      image: '/images/courses/diploma-programming.jpg'
    },
    {
      id: 5,
      title: 'Diploma in Hardware Technology',
      description: 'Learn the fundamentals of computer hardware and technology.',
      details: 'This course covers computer hardware components, system assembly, troubleshooting, and maintenance techniques to prepare you for roles in IT support and hardware technology.',
      detailedDescription: [
        "Computer Fundamentals and Operating Systems",
        "Computer Assembling",
        "Software Installation",
        "Networking",
        "Virus Removal, etc."
      ],
      icon: '🖥️',
      topics: [],
      image: FullStack.HardwareTech
    }
  ]
}


]

export {courses, diplomaCourse};
