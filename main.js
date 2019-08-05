function main() {
    
    console.log("Starting Fizz");
    
    for (let i=1; i <101; i++){ 
        const myDiv = document.createElement("div");
        myDiv.innerText = +i;                                               //this adds numbers 
        myDiv.id = "div"+i;                                                 //this adds id to div
        buttons.appendChild(myDiv); 
            if (i % 15 === 0 ){
                myDiv.setAttribute("class", "FizzBuzz");                    //adds FizzBuzz class
                myDiv.innerText="FizzBuzz " +i;                             //add FizzBuzz to button
            }
            else if (i % 3 === 0) {
                myDiv.setAttribute("class", "Fizz");                        //adds Fizz class
                myDiv.innerText="Fizz " + i;                                //adds Fizz to button
            }

            else if (i % 5 === 0){
                myDiv.setAttribute("class", "Buzz");                        //adds Buzz class
                myDiv.innerText="Buzz " + i;                                //adds Buzz to button
            }

            else if (i % 3 !== 0 && i % 5 !== 0){                   
                myDiv.setAttribute("class", "othernumber");                 //adds Other class
                myDiv.innerText=i;
            }
    }
}
main();

    