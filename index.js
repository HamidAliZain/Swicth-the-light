const on = () => {
  document.getElementById("onImage").style.color = "yellow";
  document.getElementById("text").style.color = "yellow";
  document.getElementById("text").innerHTML= "Switch The Light Off";
};

const off = () => {
  document.getElementById("onImage").style.color = "gray    ";
  document.getElementById("text").style.color = "gray";
  document.getElementById("text").innerHTML= "Switch The Light On";
};
