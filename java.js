window.onload = function() {
    var graficoElevacaoPelvica = document.getElementById("graficoElevacaoPelvica");
    var graficoMesaFlexora = document.getElementById("graficoMesaFlexora");
    var elevacaopelvica = document.getElementById("elevacaopelvica");
    var mesaFlexora = document.getElementById("mesaflexora");


    mesaFlexora.onclick = function() {
        graficoElevacaoPelvica.style.display = "none";
        graficoMesaFlexora.style.display = "flex";
   };
   elevacaopelvica.addEventListener('click',()=>{
     graficoElevacaoPelvica.style.display = "flex";
     graficoMesaFlexora.style.display = "none";
   })
};
