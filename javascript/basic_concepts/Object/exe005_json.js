const obj = {a:1, b:2, c:3, soma() {return a+b+c}}
console.log(
    JSON.stringify(obj) // transforma em formato textual
)

//tranformamndo um JSON em Objto
// parametros do JSON devem estar em aspas duplas
console.log(
    JSON.parse('{"a": 1, "b":{}, "c": [], "d": true, "e": "string"}')
)