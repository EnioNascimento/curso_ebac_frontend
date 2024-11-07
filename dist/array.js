"use strict";

var alunos = [{
  nome: "Paulo",
  nota: 5.5
}, {
  nome: "Maria",
  nota: 7.5
}, {
  nome: "Jose",
  nota: 8.3
}];
var notaMaior = alunos.filter(function (item) {
  return item.nota >= 6;
});
console.log(notaMaior);