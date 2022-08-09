const h1=document.querySelector('h1');
const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2')
;const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');
btn.addEventListener('click',sumarInputValues)
//add event sirve para escuchar cunado un evento se preente y ejecutar una funcion 


form.addEventListener('submit', sumarInputValues);
function sumarInputValues()

{
    console.log({event});
   
    event.preventDefault();
    //sirve para quitar las congifuraciones por defecto de los objetos 

    
    const sumaInputs=input1.value+input2.value;
    pResult.innerText="Resultado:" + sumaInputs;
}