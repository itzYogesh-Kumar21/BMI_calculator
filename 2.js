let block = document.querySelector(".block");
let categories = document.querySelectorAll(".categ")
let reset = document.querySelector("#reset")

document.querySelector(".formData").addEventListener("submit" , (event)=>{
    event.preventDefault();
    let height = Number(document.querySelector("#height").value);
    let weight = Number(document.querySelector("#weight").value);

    let result = BmiCalculation(height , weight);
    block.innerText = result;

    fallUnder(result);
})

function BmiCalculation(height , weight){
    let num = (weight);
    let den = (height * height) / 10000;
    let ans = num / den;
    return ans.toPrecision(4);
}

function fallUnder(result){
    if(result < 18.6){
        categories[0].classList.add("under");
    }
    else if(result >=18.6 && result <= 24.9){
        categories[1].classList.add("normal");
    }
    else if(result > 24.9){
        categories[2].classList.add("over");
    }
}

const resetGame = ()=>{
    categories[0].classList.remove("under");
    categories[1].classList.remove("normal");
    categories[2].classList.remove("over");
    document.querySelector("#height").innerText = "";
    document.querySelector("#weight").innerText = "";
    block.innerText = "";
};

reset.addEventListener("click" , resetGame);



