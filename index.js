const NUMBER = document.getElementsByClassName("number")
let operation = document.getElementById("numberOp")
document.getElementById("restar").addEventListener('click',()=>{
    operation.value = null
})

for (const iterator of NUMBER) {
    iterator.addEventListener('click',(ele)=>{
        if(!ele.target.matches(".action")){

            UpdateCalculator(ele.target.value)
        }
    })
}
//actualizar calculadora con los valors
function UpdateCalculator(value){    
    operation.style.fontSize = '15px';
    operation.value +=  value
}
//eliminar elementos de la calculadora
document.getElementById("delete").addEventListener('click',()=>{
    let valTemp =operation.value    
    if (valTemp.length > 0){
        operation.value = null
        operation.value = valTemp.substring(0,valTemp.length-1)
        
    }
    
})
