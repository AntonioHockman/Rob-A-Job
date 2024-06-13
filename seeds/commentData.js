const { Comment } = require('../models');

const commentData = [ 
    {
        "comment_title":"pay",
        "comment_text":" the starting pay was ok, but advance opportunity is amazing, very happy with my pay increases over the 2 years i've worked here!",
        "job_id":3
    },
    {
        "comment_title":"benifits",
        "comment_text":"great benifits over all, good health insurance started on day one, and 2 weeks vacation!",
        "job_id":3
    },
    {
        "comment_title":"benifts",
        "comment_text":"pto starts accruing immediately! awesome health benifits from day 1! great company to work for",
        "job_id":3
    }

]
const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;

