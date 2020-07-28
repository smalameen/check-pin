// Random Pin generator

function pinShowFunction(){
    const pinValue = Math.floor((1000+ Math.random() * 9000).toFixed(4));
   
    document.getElementById("pinShow").value = pinValue;
    matchTheNumbers();
}


// clicking on numbers

function insertTheNumber(number){ 
   const numbers = document.getElementById("user-output");
   switch (number){
    case 1:
        numbers.value += "1";
        break;
    }
    switch (number){
        case 2:
            numbers.value += "2";
            break;
        }
        switch (number){
            case 3:
                numbers.value += "3";
                break;
            }
            switch (number){
                case 4:
                    numbers.value += "4";
                    break;
                }switch (number){
                    case 5:
                        numbers.value += "5";
                        break;
                    }switch (number){
                        case 6:
                            numbers.value += "6";
                            break;
                        }switch (number){
                            case 7:
                                numbers.value += "7";
                                break;
                            }
                            switch (number){
                                case 8:
                                    numbers.value += "8";
                                    break;
                                }
                                    switch (number){
                                        case 9:
                                            numbers.value += "9";
                                            break;
                                        }  
                                        switch (number){
                                            case 0:
                                                numbers.value += "0";
                                                break;
                                            }  
                                            switch (number){ 
                                                case "<" :
                                                    numbers.value += "<";
                                                    break;
                                                }
                                                switch (number){ 
                                                    case "C":
                                                        numbers.value += "C";
                                                        break;
                                                    }         
                                            matchTheNumbers();
                                           
                                            
}


// Matching check for the numbers

function matchTheNumbers(){
    document.getElementById("submit-button").addEventListener("click",function(){
        const outPut = document.getElementById("user-output").value;
       const randomPin = document.getElementById("pinShow").value;
    if(outPut === randomPin){
        const notifyArea = document.getElementById("match-notification");
        notifyArea.style.display = "block";
    }else {
        const notifyAreaTwo = document.getElementById("do-not-Match-notification");
        notifyAreaTwo.style.display = "block";
        
    }
    })
    
}

// Delete the one item area

function deleteOneItem(){
      let deleteOne = document.getElementById("user-output");
      let deleteOneValue =  deleteOne.value;
      if(deleteOneValue.length > 0){
        deleteOneValue = deleteOneValue.substring(0, deleteOneValue.length-1);
        deleteOne.value = deleteOneValue;
        const notifyArea = document.getElementById("match-notification");
      notifyArea.style.display = "none";
      const notifyAreaTwo = document.getElementById("do-not-Match-notification");
     notifyAreaTwo.style.display = "none";
      }
}


// The Clear all Button


function clearAll(){
    let deleteOne = document.getElementById("user-output");
    let deleteOneValue =  deleteOne.value;
    if(deleteOneValue.length > 0){
      deleteOneValue = deleteOneValue.substring(0, deleteOneValue.length- deleteOneValue.length);
      deleteOne.value = deleteOneValue;
      const notifyArea = document.getElementById("match-notification");
      notifyArea.style.display = "none";
      const notifyAreaTwo = document.getElementById("do-not-Match-notification");
     notifyAreaTwo.style.display = "none";
      
    }
}


