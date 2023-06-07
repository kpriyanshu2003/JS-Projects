document.getElementById(
  "root"
).innerHTML = `<button style="margin: 20px" onclick="url();">Get page URL</button><br>
<div id="result"></div>`;
function url() {
  document.getElementById("result").innerText = document.URL;
}
