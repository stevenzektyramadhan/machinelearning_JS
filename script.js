addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file");
  const img = document.getElementById("img");
  const message = document.getElementById("message");
  const modelUrl = "https://teachablemachine.withgoogle.com/models/7NIkKaPeH/";

  // setup ml5
  ml5.setBackend("webgl");
  const model = ml5.imageClassifier(modelUrl + "model.json");

  async function predict(e) {
    const file = e.target.files[0];
    img.src = URL.createObjectURL(file);
    const result = await model.classify(img);
    message.innerText = result[0].label;
  }
  fileInput.addEventListener("change", predict);
});
