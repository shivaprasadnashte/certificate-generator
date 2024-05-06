import fs from "fs";
import path from "path";

export async function deleteFile(fileName) {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);

  fs.unlink(path.join(__dirname, `../certificates/${fileName}.pdf`), (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error("File does not exist.");
      } else {
        throw err;
      }
    }
  });
}
