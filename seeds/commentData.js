const { Comment } = require('../models');

const commentData = [ 
    {
        comment_title:"pay",
        comment_text:" the starting pay was ok, but advance opportunity is amazing, very happy with my pay increases over the 2 years i've worked here!",
        job_id:3,
        user_id:1
    },
    {
        comment_title:"benifits",
        comment_text:"great benifits over all, good health insurance started on day one, and 2 weeks vacation!",
        job_id:3,
        user_id:3

    },
    {
        comment_title:"benifts",
        comment_text:"pto starts accruing immediately! awesome health benifits from day 1! great company to work for",
        job_id:3,
        user_id:1

    },
    {
        comment_title:"Love this place!",
        comment_text:"Highly recommend this place, great company, great team environment, been here 8 years!",
        job_id: 3,
        user_id:10

    },
    {
        comment_title:"PAY",
        comment_text:"does anyone know what the pay is ? Description only says yearly.",
        job_id: 5,
        user_id:7

    },
    {
        comment_title:"Dream Job",
        comment_text:"This would be my dream job! I just applied, hope to hear from you soon!",
        job_id:6 ,
        user_id:8

    },
    {
        comment_title:"Best job ever",
        comment_text:"I've worked for this company 20 years come February and couldnt be happier! Always taken care of me.",
        job_id: 4,
        user_id:8

    },
    {
        comment_title:"YOOO",
        comment_text:"I love this site, what other jobsite lets you comment on a jobpost??!!",
        job_id: 1 ,
        user_id:6

    },
    {
        comment_title:"Still hiring",
        comment_text:"Hello everyone I'm a Manager here and i just wanted to share my quick story, i started here fresh out college and got an anual raise a promtion in 3 years and in 5 i've become manager! This truly is a great company to work for and we are still looking for 3 more positions to be filled ASAP! Hope to meet one of you soon.",
        job_id: 4,
        user_id:1

    },
    {
        comment_title:"Work/life balance",
        comment_text:"Flexible hours and generous PTO",
        job_id: 4,
        user_id:6

    },
    {
        comment_title:"Pay",
        comment_text:"I had a phone interview here before but they lowballed me, i guess the salary is negotiable, which is why they only say yearly.",
        job_id: 5,
        user_id:6

    },
    {
        comment_title:"Pay",
        comment_text:"Really they low-balled you? What were you expecting though? ",
        job_id: 5,
        user_id: 12

    },
    {
        comment_title:"Help",
        comment_text:"Hey guys i been having trouble finding a job to hire me out of school any advice to land a job like this ?",
        job_id: 4,
        user_id:11

    },
    {
        comment_title:"Help",
        comment_text:"Get some experience building real websites for people, i suggest make a fiver account and see if you can build sites for small business, also maybe search online for a resume builder if you havent already.",
        job_id:4 ,
        user_id:10

    }


]
const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;

