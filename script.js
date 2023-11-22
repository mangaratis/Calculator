let string =  "";
let buttons = document.querySelectorAll('button');
console.log("J");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{
        try {
            if(e.target.innerHTML == "="){
                string = eval(string);
                document.querySelector('input').value = string;
            } else if(e.target.innerHTML == "AC"){
                string = "";
                document.querySelector('input').value = string;
            } else if(e.target.innerHTML == "DEL"){
                string = string.slice(0,string.length - 1);
                document.querySelector('input').value = string;
            } else{
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
            }
            
        } catch (error) {
            alert("Invalid");
        }
        
    })
})