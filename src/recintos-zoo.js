class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        const animaisAceitos = [ "LEAO", "LEOPARDO", "CROCODILO", "MACACO", "GAZELA", "HIPOPOTAMO"]
        let recintosViaveis = {
            recintosViaveis: []
        }

        const animalEspaco = [
            ["LEAO", 3],
            ["LEOPARDO", 2],
            ["CROCODILO", 3],
            ["MACACO", 1],
            ["GAZELA", 2],
            ["HIPOPOTAMO",  4]
        ]


        const bioma = [
            {"bioma": "savana", "tamanhoTotal": 10, "ocupando": [{"animal":"MACACO","quantidade": 3}] },
            {"bioma": "floresta", "tamanhoTotal": 5, "ocupando":[] },
            {"bioma": "savana e rio", "tamanhoTotal": 7, "ocupando":[{"animal":"GAZELA","quantidade": 2}] }, //1 animal com valor 2 espaço
            {"bioma": "rio", "tamanhoTotal": 8, "ocupando": []},
            {"bioma": "savana", "tamanhoTotal": 9, "ocupando": [{"animal":"LEAO","quantidade": 3}]} //1 leao com valor 3 de espaço
        ]

        
    
        if (!animaisAceitos.includes(animal)) {
            return {erro: "Animal inválido"}
        }

        if (animal === "LEAO") {
            const leaoEspaco = 3
            let cont = 0

            for (let i= 0; i < bioma.length; i++) {
                cont += 1
            const tamanhoBioma = bioma[i].tamanhoTotal

                if (
                    bioma[i].bioma === 'savana' &&
                    (bioma[i].ocupando.length === 0 ||
                    bioma[i].ocupando[0].animal === 'LEAO'
                    )
                ) {
                    if (bioma[i].ocupando.length === 0) {
                        const tamanhoLivre = tamanhoBioma - (bioma[i].ocupando[0].quantidade)
                        if (quantidade > 0 && (quantidade * leaoEspaco) <= tamanhoLivre) {
                            recintosViaveis.recintosViaveis.push(`Recinto ${cont} (Espaco livre: ${tamanhoBioma - (leaoEspaco * quantidade)} total: ${tamanhoBioma})`)
                            cont+=1
                        } else return {erro: 'Quantidade inválida'}
                    } else if (bioma[i].ocupando[0].animal === 'LEAO') {
                        const tamanhoLivre = tamanhoBioma - (bioma[i].ocupando[0].quantidade)
                        if (quantidade > 0 && (quantidade * leaoEspaco) <= tamanhoLivre) {
                            recintosViaveis.recintosViaveis.push(`Recinto ${cont} (Espaco livre: ${tamanhoLivre - (leaoEspaco * quantidade)}) total: ${tamanhoBioma}`)
                            cont+=1
                        } else return {erro: 'Quantidade inválida'}
                    }
                }
            }
                return recintosViaveis
            
        } else if (animal === 'LEOPARDO') {
            
            const leopardoEspaco = 2
            let cont = 0

            for (let i = 0; i < bioma.length; i++) {
                cont += 1
            const tamanhoBioma = bioma[i].tamanhoTotal
            const tamanhoLivre = tamanhoBioma - (bioma[i].ocupando[0].quantidade * animalEspaco[3][1])

            if (
                bioma[i].bioma === 'savana' &&
                (bioma[i].ocupando.length === 0 ||
                bioma[i].ocupando[0].animal === 'LEOPARDO'
                )
            ) {
                if (bioma[i].ocupando.length === 0) {
                    if ((quantidade * leopardoEspaco) <= tamanhoLivre) {
                        recintosViaveis.push(`Recinto ${cont} (espaco livre: ${tamanhoBioma - (leopardoEspaco * quantidade)} total: ${tamanhoBioma})`)
                        cont+=1
                    }
                } else if (bioma[i].ocupando[0].animal === 'LEOPARDO') {
                    if ((tamanhoLivre / quantidade) >= leopardoEspaco) {
                        recintosViaveis.push(`Recinto ${cont} (espaco livre: ${tamanhoLivre - (leopardoEspaco * quantidade)}) total: ${tamanhoBioma}`)
                        cont+=1
                    } else {return 'Quantidade inválida'}
                }        
            } else {
                return 'Não há recinto viável'
            }

        }
    } else if (animal === "CROCODILO") {
        
        const crocodiloEspaco = 3
        let cont = 0

        for (let i = 0; i < bioma.length; i++) {
            cont+= 1
        const tamanhoBioma = bioma[i].tamanhoTotal
        if (
            bioma[i].bioma === 'rio' &&
            (bioma[i].ocupando.length === 0 ||
            bioma[i].ocupando[i].animal === 'CROCODILO'
            )
        ) {
            if (bioma[i].ocupando.length === 0) {
                const tamanhoLivre = tamanhoBioma
                if ((quantidade * crocodiloEspaco) <= tamanhoLivre) {
                recintosViaveis.recintosViaveis.push(`Recinto ${cont} (espaço livre: ${tamanhoLivre - (crocodiloEspaco * quantidade)} total: ${tamanhoBioma})`)
                cont+=1
                } else return {erro: 'Quantidade inválida'}
            } else if (bioma[i].ocupando[i].animal === 'CROCODILO') {
                const tamanhoLivre = tamanhoBioma
                if ((tamanhoLivre / quantidade) >= crocodiloEspaco) {
                    recintosViaveis.recintosViaveis.push(`Recinto ${cont} (espaço livre: ${tamanhoLivre - (crocodiloEspaco * quantidade)} total: ${tamanhoBioma}) `)
                    cont+=1
                } else return {erro: 'Quantidade inválida'}
                }
            }
        }
        return recintosViaveis
    } else if (animal === 'MACACO') {
        const gazelaEspaco = 2
        const hipopotamoEspaco = 4
        const macacoEspaco = 1
        let cont = 1

        for (let i= 0; i < bioma.length; i++) {
            
        if (
            bioma[i].bioma === 'savana' ||
            bioma[i].bioma === 'floresta' ||
            bioma[i].bioma === 'savana e rio'            
        ) {
            
            const tamanhoBioma = bioma[i].tamanhoTotal
            if (bioma[i].ocupando.length === 0) {
                if (quantidade <= 1) {
                    return {erro: 'Quantidade inválida'}
                } else if (quantidade <= tamanhoBioma){
                    recintosViaveis.recintosViaveis.push(`Recinto ${cont} (espaço livre: ${tamanhoBioma - (quantidade * macacoEspaco)} total: ${tamanhoBioma})`)
                    cont += 1
                }

            } else if (bioma[i].ocupando[0].animal === 'MACACO'){
                const tamanhoBioma = bioma[i].tamanhoTotal
                const tamanhoLivre = tamanhoBioma - (bioma[i].ocupando[0].quantidade * macacoEspaco)

                if (quantidade === 0) {
                    return {erro: 'Quantidade inválida'}
                }else if (quantidade <= tamanhoLivre){
                    recintosViaveis.recintosViaveis.push(`Recinto ${cont} (espaço livre: ${tamanhoLivre - (quantidade * macacoEspaco)} total: ${tamanhoBioma})`)
                    cont += 1
                } else return {erro: 'Não há recinto viável'}
            } else if (bioma[i].ocupando[0].animal === 'GAZELA' || bioma[i].ocupando[0].animal === 'HIPOPOTAMO') {
                const tamanhoLivre = tamanhoBioma - (bioma[i].ocupando[0].quantidade)
                bioma[i].ocupando[0].animal === 'GAZELA'? recintosViaveis.recintosViaveis.push(`Recinto ${cont} (espaço livre: ${(tamanhoLivre + 1) - (quantidade * gazelaEspaco)} total: ${tamanhoBioma})`) : recintosViaveis.recintosViaveis.push(`Recinto ${cont} (espaço livre: ${(tamanhoLivre + 1) - (quantidade * hipopotamoEspaco)} total: ${tamanhoBioma})`)
                cont += 1
            }
        }
        }
        return recintosViaveis

    } else if (animal === 'GAZELA') {
        
        const gazelaEspaco = 2
        let cont = 0

        for (let i=0; i < bioma.length; i++) {
                cont += 1
            const tamanhoBioma = bioma[i].tamanhoTotal
            

            if (
                bioma[i].bioma === 'savana' &&
                (
                    bioma[i].ocupando.length === 0 ||
                    (
                    bioma[i].ocupando[0].animal !== "LEAO" &&
                    bioma[i].ocupando[0].animal !== "LEOPARDO" &&
                    bioma[i].ocupando[0].animal !== "CROCODILO"
                    )
                )
            ) {
                const tamanhoLivre = tamanhoBioma - (bioma[i].ocupando[0].quantidade)
                if (quantidade > 0 && (quantidade * gazelaEspaco) < tamanhoLivre) {
                    recintosViaveis.recintosViaveis.push(`Recinto ${cont} (Espaco livre: ${tamanhoLivre - (quantidade * gazelaEspaco)} total: ${tamanhoBioma})`)
                    cont += 1
                } else  {return "Quantidade inválida"}   
            }
        }
        if (recintosViaveis.length === 0) {return 'Não há recinto viável'}
        else return recintosViaveis

    } else if (animal === 'HIPOPOTAMO') {
        
        const hipopotamoEspaco = 4
        let cont = 0

        for (let i = 0; i < bioma.length; i++) {
            cont += 1
        if (
            bioma[i].bioma === 'rio' ||
            bioma[i].bioma === 'savana e rio'
        ) {
            const tamanhoBioma = bioma[i].tamanhoTotal
            if (bioma[i].bioma === 'rio' && bioma[i].ocupando.length === 0) {
                if (quantidade > 0 && quantidade <= tamanhoBioma && (quantidade * hipopotamoEspaco) <= tamanhoBioma) {
                    recintosViaveis.recintosViaveis.push(`Recinto ${cont} (Espaco livre: ${tamanhoBioma - (quantidade * hipopotamoEspaco)} total: ${tamanhoBioma})`)
                    cont += 1
                } else {return 'Quantidade inválida'}
            } else if (bioma[i].bioma === 'savana e rio') {
                const tamanhoBioma = bioma[i].tamanhoTotal
                const tamanhoLivre = tamanhoBioma - bioma[i].ocupando[0].quantidade
                if (quantidade > 0 &&  (quantidade * hipopotamoEspaco) < tamanhoLivre){
                    recintosViaveis.recintosViaveis.push(`Recinto ${cont} (Espaco livre: ${tamanhoLivre - (quantidade * hipopotamoEspaco)} total: ${tamanhoBioma})`)
                    cont += 1
                } else return 'Quantidade inválida'
            }

        }
        }
        return recintosViaveis
        

    }

}
}
const macaco = new RecintosZoo().analisaRecintos('MACACO', 2)
console.log(macaco)




const leao = new RecintosZoo().analisaRecintos('LEAO', 2)
console.log(leao)

const leopardo = new RecintosZoo().analisaRecintos("LEOPARDO", 2)
console.log(leopardo)


const gazela = new RecintosZoo().analisaRecintos('GAZELA', 3)
console.log(gazela)

const hipopotamo = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 1)
console.log(hipopotamo)




export { RecintosZoo as RecintosZoo};
