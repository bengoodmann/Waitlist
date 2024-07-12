import { config } from "dotenv";
import nodemailer from "nodemailer";
config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

export const sendVolunteerEmail = async (volunteer) => {
  const mailOptions = {
    from: `'Rails Finance' <${EMAIL}>`,
    to: volunteer.email,
    subject: "Thank You for Volunteering!",
    html: `
   <div style="font-family: Arial, sans-serif; background-color: #fff; font-size: 14px; margin: 10px; width: 80%;">
        <div style="padding: 10px; text-align: center; border-bottom: 1px solid #ddd;">
          <h1>Thank You for Volunteering!</h1>
        </div>
        <div style="padding: 20px;">
          <p>Dear ${volunteer.name},</p>
          <p>Thank you for joining our volunteer list!</p>
          <p>We are thrilled to have you on board and appreciate your willingness to contribute your time and expertise as a ${volunteer.profession} with ${volunteer.experience} years of experience.</p>
          <p>We will reach out to you soon with more information on how you can get involved.</p>
          <p>In the meantime, feel free to reply to this email if you have any questions or suggestions.</p>
          <p>Best regards,<br>Rails Finance Team</p>
        </div>
        <div style="background-color: #f7f7f7; padding: 10px; text-align: center; border-top: 1px solid #ddd; font-size: 12px; color: #777;">
          <p>&copy; 2024 Rails Finance. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    console.info("Email sent successfully!");
  } catch (error) {
    console.error("Error occurred while sending email", error);
  }
};

export const sendWaitingUserEmail = async (waitingUser) => {
  const mailOptions = {
    from: `'Rails Finance' <${EMAIL}>`,
    to: waitingUser.email,
    subject: "Welcome to the Waiting List!",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #fff; font-size: 14px; margin: 10px; width: 80%;">
        <div style="padding: 10px; text-align: center; border-bottom: 1px solid #ddd;">
          <h1>Welcome to the Waiting List!</h1>
        </div>
        <div style="padding: 20px;">
          <p>Dear ${waitingUser.name},</p>
          <p>Thank you for joining our waiting list!</p>
          <p>We appreciate your interest and support. Your enthusiasm means a lot to us as we work to bring new and exciting features to our platform.</p>
          <p>We will keep you updated on our progress and notify you as soon as we are ready to launch.</p>
          <p>In the meantime, if you have any questions or suggestions, please feel free to reply to this email.</p>
          <p>Best regards,<br>Rails Finance Team</p>
        </div>
        <div style="background-color: #f7f7f7; padding: 10px; text-align: center; border-top: 1px solid #ddd; font-size: 12px; color: #777;">
          <p>&copy; 2024 Rails Finance. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    console.info("Email sent successfully!");
  } catch (error) {
    console.error("Error occurred while sending email", error);
  }
};

export const sendWaitNotification = async (user) => {
  const mailOptions = {
    from: `'Rails Finance' <${EMAIL}>`,
    to: "bensonsibigamisaac@gmail.com",
    subject: `New Waiting User Joined`,
    html: `
     <div style="font-family: Arial, sans-serif; background-color: #fff; font-size: 14px; margin: 10px; width: 80%;">
        <div style="padding: 10px; text-align: center; border-bottom: 1px solid #ddd;">
          <h1>New Waiting User Joined</h1>
        </div>
        <div style="padding: 20px;">
          <p>Hello Benson,</p>
          <p>Details:</p>
          <ul>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
            <li>Test: ${user.test}</li>
            <li>Pro: ${user.pro}</li>
            <li>Recommend Features: ${user.recommendFeatures}</li>
          </ul>
          <p>Please follow up with them at your earliest convenience.</p>
          <p>Best regards,<br>Your Automated Notification System</p>
        </div>
        <div style="background-color: #f7f7f7; padding: 10px; text-align: center; border-top: 1px solid #ddd; font-size: 12px; color: #777;">
          <p>&copy; 2024 Rails Finance. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    console.info("Email sent successfully!");
  } catch (error) {
    console.error("Error occurred while sending email", error);
  }
};

export const sendVolunteerNotification = async (user) => {
  const mailOptions = {
    from: `'Rails Finance' <${EMAIL}>`,
    to: "bensonsibigamisaac@gmail.com",
    subject: `New Volunteer Joined`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #fff; font-size: 14px; margin: 10px; width: 80%;">
        <div style="padding: 10px; text-align: center; border-bottom: 1px solid #ddd;">
          <h1>New Volunteer Joined</h1>
        </div>
        <div style="padding: 20px;">
          <p>Hello Benson,</p>
          <p>Details:</p>
          <ul>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
            <li>Profession: ${user.profession}</li>
            <li>Experience: ${user.experience}</li>
          </ul>
          <p>Please follow up with them at your earliest convenience.</p>
          <p>Best regards,<br>Your Automated Notification System</p>
        </div>
        <div style="background-color: #f7f7f7; padding: 10px; text-align: center; border-top: 1px solid #ddd; font-size: 12px; color: #777;">
          <p>&copy; 2024 Rails Finance. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    console.info("Email sent successfully!");
  } catch (error) {
    console.error("Error occurred while sending email", error);
  }
};
