import puppeteer from "puppeteer";
import template from "../templates/certificate-template.js";

export default async function generatePDF(pdfName, name, course, date) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setContent(template(name, course, date));

  await page.pdf({ path: `./certificates/${pdfName}.pdf`, format: "A4" });

  await browser.close();
}
