let inss = 0
let fgts = 0

function getEll(el){
    return document.querySelector(el)
}

function calcular(){
    let salBruto = getEll("#salario").value

    if(salBruto<=1412.00){
        inss = salBruto * 0.075
        getEll("#inss").innerText = `R$ ${inss.toFixed(2)}`
    }else if(salBruto >= 1412.01 && salBruto <= 2666.68){

        inss = 105.90 + (salBruto - 1412) * 0.09

        getEll("#inss").innerText = `R$ ${inss.toFixed(2)}`

    }else if(salBruto >= 2666.69 && salBruto <= 4000.03){
        inss = 105.90 + 112.92 + (salBruto - 2666.68) * 0.12

        getEll("#inss").innerText = `R$ ${inss.toFixed(2)}`

    }else if(salBruto > 4000.04){
        inss = 105.90 + 112.92 + 160.00 + (salBruto - 4000.03) * 0.14

        getEll("#inss").innerText = `R$ ${inss.toFixed(2)}`
    }
    fgts = salBruto * 0.08
    getEll("#fgts").innerText = fgts.toFixed(2)
    
    getEll("#liquido").innerText = `R$ ${(salBruto - inss).toFixed(2)}`
}
