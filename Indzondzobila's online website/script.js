const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, accoount) => {
    host: 'smtp.ethereal.email';
    port: 587;
    secure: false;
    auth: {
       user: accoount.user; 
       pass: accoount.user;
    }

    let mailOption = {
        from: '"Foo Fedo" <foofedo@gmail.com ', // sender email address
        to: 'him@gmail.com, her@gmail.com', // list of recievers
        subject: 'Hello', // subject line
        text: 'Hello World', // plain text
        html:  '<br>Hello World?</br>'
    
    };
    
    transporter.sendMail(mailOptions, (error, info) =>{
        if (error){
            return console.log(error);
        }
        console.log('Message sent: %s ', info.messageId);
    
        console.log('Preview URL: %s', nodemailer.getTestMessageURL(info))
    });
});


