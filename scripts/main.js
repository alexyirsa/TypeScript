import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Prácticas escenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingeniería de Software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("Principios de diseño y arquitectura", 30, 75, true, 2020)];
export var ap = new Aprendiz("Alexander", "Yirsa", "avatar.png", 44, NivelEducativo.POSTGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadsisticasTable = document.getElementById("estadisticas");
var curasosTable = document.getElementById("cursos");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel Educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td><td>".concat(numeroCertificados, "</td>");
    estadsisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(aprendiz) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td>").concat(curso.calificacion, "</td>\n        <td>").concat(curso.certificado, "</td>\n        <td>").concat(curso.anio, "</td>");
        cursosTbody.appendChild(trElement);
    }
    curasosTable.appendChild(cursosTbody);
}
