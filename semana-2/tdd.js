/* ----------------------- TTD Test Driven Development ---------------------- */

// const suma = (n1, n2) => {

//     if (!n1 || !n2) return 0

//     if (typeof n1 !== "number" || typeof n2 !== "number") return null

//     return n1 + n2
// }


const suma = (...args) => {
    if (args.length === 0) return 0
    if (args.some(numero => typeof numero !== "number")) return null
    return args.reduce((acc, curr) => acc + curr, 0)
}



let testOk = 0;
let testTotal = 0;
let resultado = []

/* --- • La función debe devolver null si algún parámetro no es numérico. --- */
const test1 = () => {
    testTotal++;
    console.log("Test 1:  La función debe devolver null si algún parámetro no es numérico")
    const test = suma("2", 3)
    if (test === null) {
        resultado.push("Test 1: OK")
        console.log("Test 1: Ok")
        testOk++;
    } else {
        console.log("Test 1: FAIL")
        resultado.push("Test 1: FAIL")
    }
}


/* ------- • La función debe devolver 0 si no se pasó ningún parámetro ------ */
const test2 = () => {
    testTotal++;
    console.log("Test 2: La función debe devolver 0 si no se pasó ningún parámetro")
    const test = suma()
    if (test === 0) {
        resultado.push("Test 2: OK")
        testOk++
    } else {
        resultado.push("Test 2: FAIL")
    }
}


/* --------- • La función debe poder realizar la suma correctamente. -------- */

const test3 = () => {
    testTotal++;
    console.log("Test 3: La función debe poder realizar la suma correctamente")
    const test = suma(2, 13)
    if (test === 15) {
        resultado.push("Test 3: OK")
        testOk++
    } else {
        resultado.push("Test 3: FAIL")
    }
}


/* --------- • La función debe poder hacer la suma con cualquier cantidad de números. -------- */

const test4 = () => {
    testTotal++;
    console.log("Test 4: La función debe poder hacer la suma con cualquier cantidad de números.")
    const test = suma(2, 13, 5, 10, 20, 30)
    if (test === 80) {
        resultado.push("Test 4: OK")
        testOk++
    } else {
        resultado.push("Test 4: FAIL")
    }
}



test1();
test2();
test3();
test4();


console.table({
    "Tests OK": testOk,
    "Tests Total": testTotal,
    "Tests Fallidos": testTotal - testOk
})

console.table({ "Resultados": resultado })