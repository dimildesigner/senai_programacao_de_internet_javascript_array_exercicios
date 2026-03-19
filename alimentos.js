console.log("-- Lista de alimentos --");

let alimentos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];
console.log(alimentos);
console.log("\n");
console.log("-------------\n");

console.log("-- Alimentos para a receita --");
alimentos.splice(3, 2);
alimentos.splice(0, 1);
console.log(alimentos);
console.log("\n");
console.log("-------------\n");