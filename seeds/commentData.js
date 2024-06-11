const { Comment } = require('../models');

const commentData = [ 
    {
        "comment_title":"pay",
        "comment_text":" the starting pay was ok, but advance opportunity is amazing, very happy with my pay increases over the 2 years i've worked here!"
        "jobId":3,
    },
    {
        "comment_title":"benifits",
        "comment_text":"great benifits over all, good health insurance started on day one, and 2 weeks vacation!"
    },

]
const seedUser = () => User.bulkCreate(CommentData);

module.exports = Comment;

