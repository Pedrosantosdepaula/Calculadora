
function adicionarNoVisor(valor){
    document.getElementById('visor').value += valor
}

function limparVisor(){
    document.getElementById('visor').value ='';
}

function calcular(){
    const expressao = document.getElementById('visor').value

    const resultado = eval(expressao)

    if (Number.isFinite(resultado)){
        document.getElementById('visor').value = resultado.toFixed(2)
    } else{
        document.getElementById('visor').value = 'Erro';
    }
}