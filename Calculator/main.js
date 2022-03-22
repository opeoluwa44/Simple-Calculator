let inputEl = document.getElementById('input-el')

function display(){
    inputEl.value += event.target.innerText

}

function Erase(){
    inputEl.value = ""
}

function Clear(){
    inputEl.value = inputEl.value.slice(0, -1)
}

function Calculate(){

    try{
        inputEl.value = eval(inputEl.value)
        
        
    }
    catch(err){
        inputEl.value = "invalid"
    }

    

}

function percent(num){
    if (inputEl.value +=num){
       inputEl.value = (inputEl.value.slice(0,-1)/100)

       }
     
     
    
}








































/*let inputEl = document.getElementById ('input-el')

function display(num){
    inputEl.value += num
    
}

function Clear(){
    inputEl.value = inputEl.value.slice(0, -1)

}

function Erase(){
    inputEl.value = ""
}

function Calculate(){
    inputEl.value = eval(inputEl.value)
}*/