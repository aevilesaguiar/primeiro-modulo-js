let listaNomes=["Marcos","Fulano", "Cicrano", "João", "José"];

module.exports = function mostraArray(a){
    
    listaNomes.push(a);
    return listaNomes;
}
