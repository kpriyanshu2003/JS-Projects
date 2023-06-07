const root = document.getElementById("root");
root.innerHTML = `<form style="border: 1px solid grey; padding: 20px;">
    <span>1st Number: </span>
    <input type="text" placeholder="Enter 1st number" id="a"><br>
    <span>2nd Number: </span>
    <input type="text" placeholder="Enter 2nd number" id="b"><br><br>
    <button onclick="mul()" type="button">Multiply</button>&emsp;
    <button onclick="div()" type="button">Divide</button><br><br>
    <div id="result"></div>
</form>`;

function mul() {
  let uno = document.getElementById("a").value;
  let dos = document.getElementById("b").value;
  let tres = uno * dos;
  document.getElementById("result").innerText = `The result is ${tres}`;
}
function div() {
  let uno = document.getElementById("a").value;
  let dos = document.getElementById("b").value;
  let tres = uno / dos;
  document.getElementById("result").innerText = `The result is ${tres}`;
}
