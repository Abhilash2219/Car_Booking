const nodemailer = require('nodemailer');

// Create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',  // You can use other services like Outlook or your own SMTP server
  auth: {
    user: 'your-email@gmail.com',  // Replace with your email
    pass: 'your-email-password',   // Replace with your email password
  },
});

// Function to send email to customer
const sendCustomerEmail = (customerDetails) => {
  const { name, email, selectedCar, days } = customerDetails;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,  // Customer's email
    subject: 'Car Booking Confirmation',
    text: `Hello ${name},\n\nThank you for booking the ${selectedCar.model} for ${days} days.\n\nHappy Journey!\n\nBest Regards,\nCar Rental Service`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

// Function to send email to car owner
const sendOwnerEmail = (ownerEmail, customerDetails) => {
  const { name, selectedCar, days } = customerDetails;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: ownerEmail,  // Owner's email
    subject: 'Car Rented Notification',
    text: `Hello,\n\nYour car ${selectedCar.model} has been rented by ${name} for ${days} days.\n\nBest Regards,\nCar Rental Service`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports = {
  sendCustomerEmail,
  sendOwnerEmail
};
