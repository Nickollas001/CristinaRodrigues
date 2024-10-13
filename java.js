window.onload = function() {
    var graficoElevacaoPelvica = document.getElementById("graficoElevacaoPelvica");
    var graficoMesaFlexora = document.getElementById("graficoMesaFlexora");
    var elevacaopelvica = document.getElementById("elevacaopelvica");
    var mesaFlexora = document.getElementById("mesaflexora");

    elevacaopelvica.onclick = function() {
         graficoElevacaoPelvica.style.display = "flex";
         graficoMesaFlexora.style.display = "none";
    };
    mesaFlexora.onclick = function() {
        graficoElevacaoPelvica.style.display = "none";
        graficoMesaFlexora.style.display = "flex";
   };
};