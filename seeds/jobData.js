const Job = require("../models/Job")
// Above, we import jobPosts because that is the model we will create the entries in.

const jobData = [
    {
        //job 1
        company_name:"Monash University",
        position_title:"Web Designer for leading international organization in the research sector",
        salary:"From $40 an hour",
        schedule_info:" Full-time, Temporary, Contract",
        description:"We are looking for a Web Designer to create a minimalist website that effectively communicates information about our aims, research and achievements.In this role, you will have the opportunity to express your creativity, talent and drive and design a website that stands out.",
        responsibilities:" Create wireframes, prototypes, and mockups to visualize website layouts and user interfaces.Implement best practices in user experience and user interface design to enhance website functionality and usability.Work closely with developers and content creators to ensure integration of design elements and front-end functionality.Design and develop responsive and visually appealing websites that provide a great user experience across various devices. Maximize webpage visibility Provide feedback and thoughts on the team.",
        qualifications:"Have knowledge of HTML & CSS. Knowledge of JavaScript would also be useful Ability to work independently and with others.",
        location:"REMOTE",
        user_id : 3
       
    },

    {   
        //job 2
        company_name:"SimpleCheck LLC",
        position_title:"Software Developer",
        salary:"$2,000 - $10,000 a month - Part-time, Full-time",
        schedule_info:"Choose your own hours",
        description:" We are seeking a skilled and motivated Web Developer to join our dynamic team. As a Web Developer, you will be responsible for designing, developing, and maintaining our web applications as the sole developer. You will work closely with our CTO to create high-quality, user-friendly web interfaces. The ideal candidate is passionate about technology, stays updated with the latest industry trends, and thrives in a collaborative, fast-paced environment.",
        responsibilities:" Develop and maintain web applications using our technology stack: Supabase, TypeScript, Next.js, Git, GitHub, Jest, PostgreSQL, and React.Collaborate directly with the CTO to define, design, and ship new features.Write clean, maintainable, and efficient code.Ensure the technical feasibility of UI/UX designs.Optimize applications for maximum speed and scalability.Implement automated testing using Jest to ensure code quality.Troubleshoot and debug applications.Conduct code reviews to maintain high development standards.Stay up-to-date with emerging trends and technologies in web development.",
        qualifications:"Experience with other modern web frameworks and libraries.Familiarity with CI/CD pipelines and DevOps practices.Knowledge of server-side rendering and static site generation with Next.js.Experience with responsive and mobile-first web design.Understanding of web security principles and best practices.",
        location:"REMOTE",
        user_id : 1
    },
    {
        //job 3
        company_name:"Beavercreek Marketing Location: Remote",
        position_title:"Web Developer - RESTful API Specialist",
        salary:"$50,000 - $68,000 a year - Full-time",
        schedule_info:"Monday to Friday",
        description:"We are seeking a skilled and motivated Web Developer with a strong emphasis on RESTful API implementations in PHP and Node.js. The ideal candidate will have a proven track record of implementing and maintaining robust APIs that power web applications. This role requires a deep understanding of web technologies, server-side development, and a passion for creating scalable and efficient systems.    Join our talented team of designers, developers, and content creators at Beavercreek Marketing – a well-established and growing content creation and marketing consulting firm in Central Nebraska.",
        responsibilities:" Implement and maintain RESTful APIs using PHP and Node.js   Implement secure and scalable API solutions to meet business requirements   Ensuring cross-browser and cross-device compatibility  Writing clean, efficient, and scalable code      Troubleshooting and debugging issues",
        qualifications:"Proven experience in implementing RESTful APIs in PHP and Node.js.  Strong understanding of web development technologies and principles.    Experience with database design and optimization.   Familiarity with front-end development and integration processes.   Excellent problem-solving and troubleshooting skills.    Strong communication and collaboration skills.Experience with API testing tools and frameworks.",
        location:"REMOTE",
        user_id : 5
    },
    {
        //job 4
        company_name:"Centric Learning Systems",
        position_title:"Junior PHP Web Developer (100% Remote, US)",
        salary:"$60,000 a year",
        schedule_info:"8 hour shift, (100% remote)",
        description:"We are seeking a web developer with a minimum of 2 years of experience in PHP / MySQL web development to work in a small team on our online learning platform and student information system. Developers are expected to create new product features, improve performance, and maintain LAMP server functionality. Working with APIs to connect and sync our SaaS product with other online management systems.Experience with PHP and MySQL is required, API experience is a plus. Good communication in English and customer service skills are also required.",
        responsibilities:"Work with U.S. based development team to create new product features using HTML5, CSS, JavaScript, PHP, and MySQL.Communicate project status to team, including progress or blocks.Produce project estimates during development process including hours required.Work with end users to gather requirements and document feedback.Utilize Git for version control of projects",
        qualifications:"Minimum of 2 years of PHP / MySQL web development required. Experience with HTML5, CSS, Bootstrap, and Git preferred.Excellent written and verbal communication skills in English language",
        location:"REMOTE",
        user_id:"4"
    },
    {   
        //job 5
        company_name:"Agiliko,",
        position_title:"WEB APPLICATION DEVELOPER -REMOTE - REQUIRES US CITIZENSHIP OR, GREENCARD (MIN. 2 YEARS)",
        salary:"Yearly Pay",
        schedule_info:"8 hour shift, Monday to Friday",
        description:"Agiliko is seeking a highly skilled and motivated Web Application Developer to join our dynamic team to support our favorite, long-term Federal government client. The team is responsible for managing our client’s external websites and related applications. As a Web Application Developer, you will play a crucial role designing, developing, troubleshooting, and implementing code for the website application environment. Additionally, you will work with digital designers and other members of the project team to develop website concepts, interface design, and architecture of the website and deploy high quality applications and sites.Below is a sampling of the Web Application Developer duties, responsibilities and requirements:",
        responsibilities:"Web App Development: Design, develop troubleshoot, and implement code for the website application environment, working with digital designers and other members of the team to develop website concepts, interface design, and website architecture. Deploy web-based application systems using leading industry tools and techniques. Research, test, build, and coordinate the integration of new products per production requirements and client requirements. Client Collaboration: Work closely with clients to understand their business requirements and translate them into web applications.",
        qualifications:" Bachelor's degree in Computer Science, Information Systems, or related field. Minimum of 7 years of experience in a Web Application Development role within a website design, development and management environment. Proficient in HTML5, CSS3, JavaScript, JSON, Twig, and PHP. Experience developing and consuming RESTful APIs.",
        location:"REMOTE",
        user_id:"3"
    },
    {   
        //job 6
        company_name:"Pell Software, LLC",
        position_title:"Software Engineer",
        salary:"$80,000 - $110,000 a year - Full-time",
        schedule_info:"8 hour shifts",
        description:"We are seeking a Software Engineer to become an integral part of our fully distributed development team where you can work from the comfort of your own home. You will be responsible for designing, developing and maintaining full stack software solutions for our clients primarily using the C#, .NET, SQL stack. You may also work with PHP and a variety of other technologies as the projects and your skill set allows.The Software Engineer will be responsible for collaborating with peers and interfacing directly with our clients to translate their objectives into the best technology solutions possible. This includes understanding their objectives, managing expectations, solving complex problems, communicating regularly, maintaining documentation and more. The Software Engineer will develop and maintain a range of custom solutions such as web applications, backend systems integrations, automation and reporting tools, API integrations and more.The ideal candidate has 2 - 5 years of experience with C# .NET MVC and is confident working with PHP, WordPress, Shopify and other popular software platforms. The ideal candidate can deliver reliable, sustainable and intuitive full stack solutions while exhibiting leadership skills at all phases of a project: discovery, requirements grooming, development, testing, release and maintenance.This is an excellent opportunity to get in at the early stages of an increasingly successful software engineering company, and become an integral part of a strong, growing team!",
        responsibilities:"Design, develop, test and validate full-stack software solutions for our clients primarily using the C#, ASP.NET, SQL stack Update, test, debug and maintain existing software solutions Guide junior engineers by helping to design solutions for their projects and mentor them through technical challenges Work with project managers to refine requirements documents and proposals while providing accurate and reliable estimations Collaborate with clients directly using our project management and collaboration tools to answer questions, provide support and work through the details of your projects and tasks. Lead and contribute to all phases of a project including discovery, requirements grooming, development, testing, release and maintenance. Understand client objectives and manage their expectations to translate those objectives into reliable, effective and sustainable technology solutions",
        qualifications:"2-5+ years of experience in C# .NET MVC, SQL Previous experience with PHP, Azure, Web API Integrations, Systems Automation, ETL Routines. Very strong software architecture and problem solving skills.Self-motivated, extremely detail oriented and analytical. Propensity to build intuitive solutions paying close attention to user experience details and nuance.Proficient working with version control systems such as Git.Ability to lead multiple technical projects simultaneously with limited supervision.Strong documentation and communication (written and verbal) skills. Ability to convey highly technical concepts and solutions to non-technical stakeholders.Solid understanding of database design, data automation and administration.US based programmer",
        location:"REMOTE",
        user_id:"3"
    },

]


const seedjob = () => Job.bulkCreate(jobData);
// Above, is our arrow function to bulk create the entries in job data. 

module.exports = seedjob;
// Above, we export our create function.