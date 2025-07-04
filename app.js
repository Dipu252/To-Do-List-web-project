console.log("<----Welcome to Todo!----->");
let todo=[];

let req=prompt("Please Enter request!").toLowerCase()

while(true){
    if(req=="quit"){
        break;
    }
    else if(req=="add"){
        let input=prompt("What you want to add?");       
        todo.push(input);
        console.log("Your request has be added sucessfully...");
    }
    else if(req=="list"){
        for(let i = 0; i<todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
    }
    else if(req=="delete"){
        let index=prompt("Enter the index of Element.");
        todo.splice(index, 1);
        console.log("Your request has be deleted sucessfully...");
    }
    else{
        console.warn("Please Enter valid input!")
    }
    req=prompt("Please Enter request!").toLowerCase()
}
