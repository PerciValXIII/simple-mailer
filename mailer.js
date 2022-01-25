var nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({

    service: 'gmail',

    auth: {

        user: 'youremail@gmail.com',

        pass: '<your app password>'

    }

});



var mailOptions = {

    from: 'youremail@gmail.com',

    to: 'percival0512@gmail.com',

    subject: 'Sending Email using Node.js',

    text: 'That was easy!'

};



transporter.sendMail(mailOptions, function (error, info) {

    if (error) {

        console.log(error);
        console.log('Couldnt send')

    } else {

        console.log('Email sent: ' + info.response);

    }

});