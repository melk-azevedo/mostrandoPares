function contar() {
    let inc = document.getElementById("txti")
        fim = document.querySelector("input#txtf")
        passo = document.querySelector("input#txtp")
        res = document.getElementById("res")

    if (inc.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossivel contar!"
        window.alert(['ERRO Faltam dados!'])
    } else {
        res.innerHTML = `Contando`
        let i = Number(inc.value)
            f = Number(fim.value)
            p = Number(passo.value)

        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }

        if (i <= f) {
            // Contagem crescente
            let c = i
            res.innerHTML += ` até ${f} de ${p} em ${p} marcando os pares! <br>`
            while (c <= f) {
                if (c % 2 == 0) {
                    res.innerHTML += `<mark><strong> ${c} </strong></mark>&#x1F449;`
                } else {
                    // res.innerHTML += `${c} \u{1F449}`
                }
                    c += p
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            let c = i
            res.innerHTML += ` do ${i} até ${f} de ${p} em ${p} marcando os pares! <br>`
            while (c >= f) {
                if (c % 2 == 0) {
                    res.innerHTML += `<mark><strong> ${c} </strong></mark>&#x1F449;`
                } else {
                    // res.innerHTML += `${c} \u{1F449}`
                }
                c -= p
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}