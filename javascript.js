
function multiplication(){

let mecmec = document.getElementsByClassName("resultado");


    var input1 = document.getElementById("m1").value;
    
    var input2 = document.getElementById("m2").value;

     var calculando = input1 * input2; 

if(input1 == "" && input2 == ""){
    mecmec[0].innerHTML = ("Por favor coloque algum número")
}
else{
    mecmec[0].innerHTML = (calculando)
}
}

function subtraction(){

    let mecmec = document.getElementsByClassName("resultado1");
    
    
        var input3 = document.getElementById("m3").value;
        
        var input4 = document.getElementById("m4").value;
    
         var calculando = input3 - input4; 
    
    if(input3 == "" && input4 == ""){
        mecmec[0].innerHTML = ("Please, get number.")
    }
    else{
        mecmec[0].innerHTML = (calculando)
    }
    }

    function sum(){

        let mecmec = document.getElementsByClassName("resultado2");
        
        
            var input5 = document.getElementById("m5").value;
            
            var input6 = document.getElementById("m6").value; 
        
            var input5 = parseInt(input5);
            
            var input6 = parseInt(input6);

             var calculando = input5 + input6; 
        
        if(input5 == "" && input6 == ""){
            mecmec[0].innerHTML = ("Por favor coloque algum número")
        }
        else{
            mecmec[0].innerHTML = (calculando)
        }
        }

        function division(){

            let mecmec = document.getElementsByClassName("resultado3");
            
            
                var input7 = document.getElementById("m7").value;
                
                var input8 = document.getElementById("m8").value;
            
                 var calculando = input7 / input8; 
            
            if(input7 == "" && input8 == ""){
                mecmec[0].innerHTML = ("Por favor coloque algum número")
            }
            else{
                mecmec[0].innerHTML = (calculando)
            }
            }

            
