import fs from "fs";
import { google } from "googleapis";

const uploadToDrive = async (fileName) => {
  let url = undefined;
  const auth = new google.auth.GoogleAuth({
    keyFile: "./api.json",
    scopes: "https://www.googleapis.com/auth/drive.file",
  });

  const drive = google.drive({
    version: "v3",
    auth,
  });

  const fileMetadata = {
    parents: ["1Jqh5wWbnxp7O5CSo4wIp9CLhhCyRpHK4"],
    name: fileName,
    viewersCanCopyContent: true, // Allow viewers to copy content
  };

  const media = {
    mimeType: "application/pdf",
    body: fs.createReadStream(`certificates/${fileName}.pdf`),
  };

  try {
    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });

    url = `https://drive.google.com/file/d/${response.data.id}/view`;
    console.log("File uploaded successfully. View it at:", url);
  } catch (error) {
    console.error("Error uploading file:", error.message);
  }

  return url;
};

export default uploadToDrive;
