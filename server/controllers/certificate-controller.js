import Certificate from "../models/certificate-model.js";
import generatePDF from "../utils/generate-pdf.js";
import uploadToDrive from "../utils/upload.js";
import { deleteFile } from "../utils/delete-file.js";
import { sendMail } from "../utils/send-mail.js";

export async function generateCertificate(req, res) {
  const { name, course, date, email } = req.body;

  if (!name || !course || !date || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const pdfName = `${name}-${course}-${date}`;

  try {
    await generatePDF(pdfName, name, course, date);

    const url = await uploadToDrive(pdfName);

    await Certificate.create({ email, url });

    deleteFile(pdfName);

    await sendMail(email, url);

    res.status(200).json({ url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
