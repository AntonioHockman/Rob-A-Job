const Job = require("../models/Job")
// Above, we import jobPosts because that is the model we will create the entries in.

const jobData = [
    {
        company_info:"Monash University location :remote",
        position_title:"Web Designer for leading international organization in the research sector",
        salary:"From $40 an hour",
        schedule_info:" Full-time, Temporary, Contract",
        description:"We are looking for a Web Designer to create a minimalist website that effectively communicates information about our aims, research and achievements.In this role, you will have the opportunity to express your creativity, talent and drive and design a website that stands out.",
        responsibilities:" Create wireframes, prototypes, and mockups to visualize website layouts and user interfaces.Implement best practices in user experience and user interface design to enhance website functionality and usability.Work closely with developers and content creators to ensure integration of design elements and front-end functionality.Design and develop responsive and visually appealing websites that provide a great user experience across various devices. Maximize webpage visibility Provide feedback and thoughts on the team.",
        qualifications:"Have knowledge of HTML & CSS. Knowledge of JavaScript would also be useful Ability to work independently and with others.",
        user_id : 3
       
    },

    {
        company_info:"SimpleCheck LLC Location: Remote",
        position_title:"Software Developer",
        salary:"$2,000 - $10,000 a month - Part-time, Full-time",
        schedule_info:"Choose your own hours",
        description:" We are seeking a skilled and motivated Web Developer to join our dynamic team. As a Web Developer, you will be responsible for designing, developing, and maintaining our web applications as the sole developer. You will work closely with our CTO to create high-quality, user-friendly web interfaces. The ideal candidate is passionate about technology, stays updated with the latest industry trends, and thrives in a collaborative, fast-paced environment.",
        responsibilities:" Develop and maintain web applications using our technology stack: Supabase, TypeScript, Next.js, Git, GitHub, Jest, PostgreSQL, and React.Collaborate directly with the CTO to define, design, and ship new features.Write clean, maintainable, and efficient code.Ensure the technical feasibility of UI/UX designs.Optimize applications for maximum speed and scalability.Implement automated testing using Jest to ensure code quality.Troubleshoot and debug applications.Conduct code reviews to maintain high development standards.Stay up-to-date with emerging trends and technologies in web development.",
        qualifications:"Experience with other modern web frameworks and libraries.Familiarity with CI/CD pipelines and DevOps practices.Knowledge of server-side rendering and static site generation with Next.js.Experience with responsive and mobile-first web design.Understanding of web security principles and best practices.",
        user_id : 1
    },
    {
        company_info:"Beavercreek Marketing Location: Remote",
        position_title:"Web Developer - RESTful API Specialist",
        salary:"$50,000 - $68,000 a year - Full-time",
        schedule_info:"Monday to Friday",
        description:"We are seeking a skilled and motivated Web Developer with a strong emphasis on RESTful API implementations in PHP and Node.js. The ideal candidate will have a proven track record of implementing and maintaining robust APIs that power web applications. This role requires a deep understanding of web technologies, server-side development, and a passion for creating scalable and efficient systems.    Join our talented team of designers, developers, and content creators at Beavercreek Marketing – a well-established and growing content creation and marketing consulting firm in Central Nebraska.",
        responsibilities:" Implement and maintain RESTful APIs using PHP and Node.js   Implement secure and scalable API solutions to meet business requirements   Ensuring cross-browser and cross-device compatibility  Writing clean, efficient, and scalable code      Troubleshooting and debugging issues",
        qualifications:"Proven experience in implementing RESTful APIs in PHP and Node.js.  Strong understanding of web development technologies and principles.    Experience with database design and optimization.   Familiarity with front-end development and integration processes.   Excellent problem-solving and troubleshooting skills.    Strong communication and collaboration skills.Experience with API testing tools and frameworks.",
        user_id : 5
    }
]


const seedjob = () => Job.bulkCreate(jobData);
// Above, is our arrow function to bulk create the entries in job data. 

module.exports = seedjob;
// Above, we export our create function.