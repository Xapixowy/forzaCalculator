function formula(max, min, weight) {
   weight = weight / 100;
   const result = (max - min) * weight + min;
   return result;
}

function asideFadeIn() {
   const aside = document.querySelector("aside");
   if (aside.classList.contains("opened") == false);
   aside.classList.add("opened");
}

function showValues() {
   //Entry values
   const frontWeight = parseInt(document.querySelector("input[name='frontWeight']").value);
   const reboundStiffMin = parseInt(document.querySelector("input[name='reboundStiffMin']").value);
   const reboundStiffMax = parseInt(document.querySelector("input[name='reboundStiffMax']").value);
   const springsMin = parseInt(document.querySelector("input[name='springsMin']").value);
   const springsMax = parseInt(document.querySelector("input[name='springsMax']").value);
   const antirollBarMin = parseInt(document.querySelector("input[name='antirollBarMin']").value);
   const antirollBarMax = parseInt(document.querySelector("input[name='antirollBarMax']").value);
   //Result elements
   const reboundStiffFront = document.querySelector("span#reboundStiffFront");
   const reboundStiffRear = document.querySelector("span#reboundStiffRear");
   const bumpStiffFront = document.querySelector("span#bumpStiffFront");
   const bumpStiffRear = document.querySelector("span#bumpStiffRear");
   const springsFront = document.querySelector("span#springsFront");
   const springsRear = document.querySelector("span#springsRear");
   const antirollBarFront = document.querySelector("span#antirollBarFront");
   const antirollBarRear = document.querySelector("span#antirollBarRear");

   reboundStiffFront.textContent = formula(reboundStiffMax, reboundStiffMin, frontWeight);
   reboundStiffRear.textContent = formula(reboundStiffMax, reboundStiffMin, 100 - frontWeight);
   bumpStiffFront.textContent = formula(reboundStiffMax, reboundStiffMin, frontWeight) * 0.6;
   bumpStiffRear.textContent = formula(reboundStiffMax, reboundStiffMin, 100 - frontWeight) * 0.6;
   springsFront.textContent = formula(springsMax, springsMin, frontWeight);
   springsRear.textContent = formula(springsMax, springsMin, 100 - frontWeight);
   antirollBarFront.textContent = formula(antirollBarMax, antirollBarMin, frontWeight);
   antirollBarRear.textContent = formula(antirollBarMax, antirollBarMin, 100 - frontWeight);
}

document.querySelector("button").addEventListener("click", function () {
   showValues();
   asideFadeIn();
});
