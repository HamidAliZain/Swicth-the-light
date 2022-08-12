const on = () => {
  document.getElementById("onImage").style.color = "yellow";
  document.getElementById("text").style.color = "yellow";
  document.getElementById("text").innerHTML= "Switch The Light Off";
};

const off = () => {
  document.getElementById("onImage").style.color = "black";
  document.getElementById("text").style.color = "gray";
  document.getElementById("text").innerHTML= "Switch The Light On";
};
