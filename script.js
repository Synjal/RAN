function ShowInfo(id){
  var x = document.getElementById(id);

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function ShowAllInfo(){
  const idCV = ['info', 'coord', 'exp', 'educ', 'comp', 'hobby']
  
  if (document.getElementById("zoomCV").textContent === "Tout réduire") {
    for(i = 0;i < idCV.length; i++){
      x = document.getElementById(idCV[i]);
        x.style.display = "none";
        document.getElementById("zoomCV").textContent = "Tout agrandir"
    } 
  }
  else {
    for(i = 0;i < idCV.length; i++){
      x = document.getElementById(idCV[i]);
        x.style.display = "block";
        document.getElementById("zoomCV").textContent = "Tout réduire"
    }  
  }
}
