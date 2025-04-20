// import {getContact, saveContact} from '../database/Contact-data';
// import nodemailer from 'nodemailer';
//
// const router = express.Router();
//
// router.post('/save', async (req, res) => {
//     try {
//         const { email, name } = req.body;
//
//         const result = await saveContact(req.body);
//         await sendConfirmationEmail(req.body.email,req.body.name);
//         console.log(req.body.email);
//         res.send({ message: 'Contact saved!', id: result.insertedId });
//     } catch (err: any) {
//         res.status(400).send({ message: err.message });
//     }
// });
//
//
// export async function sendConfirmationEmail(toEmail: string, customerName: string) {
//     try {
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'momax3602@gmail.com',
//                 pass: 'Maxmo1234' // Make sure this is a real app password
//             }
//         });
//
//         const mailOptions = {
//             from: '"Fit Gym" <momax3602@gmail.com>',
//             to: toEmail,
//             subject: 'Thank you for contacting us!',
//             html: `<p>Hi ${customerName},</p>
//                    <p>Thank you for reaching out! We’ve successfully received your contact information.</p>
//                    <p>We'll get back to you as soon as possible.</p>
//                    <p>— Your Gym Team</p>`
//         };
//
//         const info = await transporter.sendMail(mailOptions);
//         console.log("✅ Email sent:", info.messageId);
//
//     } catch (error) {
//         console.error("❌ Error sending email:", error);
//     }
// }
//
// router.get('/get', async (req, res) => {
//     try {
//         const result = await getContact()
//         res.send(result)
//     }catch (err: any) {
//         res.status(400).send({ message: err.message });
//     }
// })
//
// router.get('', async (req, res) => {
//     try {
//         res.send("check successfully");
//         console.log("check successfully");
//
//     }catch (err: any) {
//         res.status(400).send({ message: err.message });
//     }
// })
//
// export default router;
//
//
//
//
//
//
//
//
//
