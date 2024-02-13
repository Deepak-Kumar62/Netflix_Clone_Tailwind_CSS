// const answers = document.querySelectorAll(".answer");
// const togglers = document.querySelectorAll(".toggler");

// for (const toggler of togglers) {
//     // Check if the current item is an element
//     if (toggler instanceof Element) {
//         toggler.addEventListener("click", () => {
//             const index = Array.from(togglers).indexOf(toggler);
//             // if (answers[index].classList.contains("max-h-0")) {
//             //     answers[index].classList.remove("max-h-0");
//             //     answers[index].classList.add(`max-h-${answers[index].scrollHeight}px`);
//             // } else {
//             //     answers[index].classList.add("max-h-0");
//             //     answers[index].classList.remove(`max-h-${answers[index].scrollHeight}px`);
//             // }

//             if(answers[index].style.maxHeight){
//                 answers[index].style.maxHeight = null;   
//             }else{
//                 answers[index].style.maxHeight = answers[index].scrollHeight + "px"; 
//             }

//             if(toggler.textContent == "+"){
//                 toggler.textContent = "×"
//             }else{
//                 toggler.textContent = "+"
//             }
            
//             // Set transition properties
//             answers[index].style.transitionProperty = "max-height"; // Only transitioning max-height property
//             answers[index].style.transitionDuration = "0.4s"; // Duration of transition

//         });
//     }
// }


const answers = document.querySelectorAll(".answer");
const togglers = document.querySelectorAll(".toggler");

for (const toggler of togglers) {

    toggler.addEventListener("click", () => {
        const index = Array.from(togglers).indexOf(toggler);

        if(answers[index].style.maxHeight){
            answers[index].style.maxHeight = null;   
        }else{
            answers[index].style.maxHeight = answers[index].scrollHeight + "px"; 
        }

        if(toggler.textContent == "+"){
            toggler.textContent = "×"
        }else{
            toggler.textContent = "+"
        }
        
        // Set transition properties
        answers[index].style.transitionProperty = "max-height"; // Only transitioning max-height property
        answers[index].style.transitionDuration = "0.4s"; // Duration of transition

    });
}
