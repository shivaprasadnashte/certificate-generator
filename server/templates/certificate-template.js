export default function template(name, course, date) {
  const templateHtml = `<img
      src="https://utfs.io/f/1b04b356-5422-42fe-84a4-abb286f3239d-andgsf.47.19.jpeg"
      style="width: 900px; height: 600px; position: relative"
      alt="hello world"
    />
    <div
      style="
        position: absolute;
        font-size: 2rem;
        font-weight: 700;
        top: 12rem;
        left: calc(25rem);
        color: #f59e0b;
      "
    >
      ${name}
    </div>
    <div
      style="
        position: absolute;
        top: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        left: calc(17.3125rem);
        font-weight: bold;
        font-size: 20px;
      "
    >
      <span>For successfully completing the ${course}</span>
      <span> course on ${date}.</span>
    </div>`;
  return templateHtml;
}
