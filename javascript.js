
function multiplication(){
    
   
    
    

let mecmec = document.getElementsByClassName("resultado");


    var input1 = document.getElementById("m1").value;
    
    var input2 = document.getElementById("m2").value;

    
     var calculando = input1 * input2; 

   
     
        mecmec[0].innerHTML = (calculando)
        if(input1 == 0 && input2 == 0){
            mecmec[0].innerHTML = ("Please, put a number.")
        } 
}

function subtraction(){
    let mecmec = document.getElementsByClassName("resultado1");
    
    var input3 = document.getElementById("m3").value;
    
    var input4 = document.getElementById("m4").value;

  

    var calculando = input3 - input4; 
   
         

    if(input3 == "" && input4 == ""){
        mecmec[0].innerHTML = ("Please, put a number.")
    }

        else{mecmec[0].innerHTML = (calculando)}

}
        
    
    
    function sum(){

        let mecmec = document.getElementsByClassName("resultado2");
        
        let input5 = document.getElementById("m5").value;
        
        let input6 = document.getElementById("m6").value; 

        mecmec[0].innerHTML = (calculando)
        if(input5 == 0 && input6 == 0){
            mecmec[0].innerHTML = ("Please, put a number.")
        } 
        
        const num5 = parseInt(input5);
        
        const num6 = parseInt(input6);

             var calculando = num5 + num6; 
             typeof num5, typeof num6;
            
             mecmec[0].innerHTML = (calculando) 
            
        }
        function division(){

            let mecmec = document.getElementsByClassName("resultado3");
            
            
                var input7 = document.getElementById("m7").value;
                
                var input8 = document.getElementById("m8").value;
            
                 var calculando = input7 / input8; 
            
            if(input7 == "" && input8 == ""){
                mecmec[0].innerHTML = ("Please, put a number.")
            }
            else{
                mecmec[0].innerHTML = (calculando)
            }
            }

            
