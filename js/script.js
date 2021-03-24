//Entry values
const frontWeight = document.querySelector("input[name='frontWeight']");
const reboundStiffMin = document.querySelector("input[name='reboundStiffMin']");
const reboundStiffMax = document.querySelector("input[name='reboundStiffMax']");
const springsMin = document.querySelector("input[name='springsMin']");
const springsMax = document.querySelector("input[name='springsMax']");
const antirollBarMin = document.querySelector("input[name='antirollBarMin']");
const antirollBarMax = document.querySelector("input[name='antirollBarMax']");
//Result elements
const reboundStiffFront = document.querySelector("span#reboundStiffFront");
const reboundStiffRear = document.querySelector("span#reboundStiffRear");
const bumpStiffFront = document.querySelector("span#bumpStiffFront");
const bumpStiffRear = document.querySelector("span#bumpStiffRear");
const springsFront = document.querySelector("span#springsFront");
const springsRear = document.querySelector("span#springsRear");
const antirollBarFront = document.querySelector("span#antirollBarFront");
const antirollBarRear = document.querySelector("span#antirollBarRear");

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

function carInfoCheck() {
   const aeroInput = document.querySelector("input[name='aero']");
   const drivetrain = document.querySelector("select[name='drivetrain']");
   const aeroTab = document.querySelector("span.aero");
   const diffFwdTab = document.querySelector("span.fwd");
   const diffRwdTab = document.querySelector("span.rwd");
   const diffAwdTab = document.querySelector("span.awd");
   if (aeroInput.checked == false) aeroTab.innerHTML = "";
   else {
      aeroTab.innerHTML =
         "<h2>Aero</h2><h3>Downforce</h3><p>Front: <span>75% cornering</span></p><p>Rear: <span>MAX cornering</span></p><span class='separator'></span>";
   }
   if (drivetrain.value == "fwd") {
      diffFwdTab.innerHTML =
         "<h3>Front</h3><p>Acceleration: <span>25% -> 50% <span>(too high value causes understeer)</span></span></p><p>Deceleration: <span>0%</span></p>";
      diffRwdTab.innerHTML = "";
      diffAwdTab.innerHTML = "";
   } else if (drivetrain.value == "rwd") {
      diffFwdTab.innerHTML = "";
      diffRwdTab.innerHTML =
         "<h3>Rear</h3><p>Acceleration: <span>40% -> 50% <span>(too high value causes oversteer)</span></span></p><p>Deceleration: <span>0%</span></p>";
      diffAwdTab.innerHTML = "";
   } else {
      diffFwdTab.innerHTML =
         "<h3>Front</h3><p>Acceleration: <span>25% -> 50% <span>(too high value causes understeer)</span></span></p><p>Deceleration: <span>0%</span></p>";
      diffRwdTab.innerHTML =
         "<h3>Rear</h3><p>Acceleration: <span>40% -> 50% <span>(too high value causes oversteer)</span></span></p><p>Deceleration: <span>0%</span></p>";
      diffAwdTab.innerHTML = "<h3>Center</h3><p>Balance: <span>70% -> 90%</span></p>";
   }
}

function showValues() {
   reboundStiffFront.textContent = formula(
      parseInt(reboundStiffMax.value),
      parseInt(reboundStiffMin.value),
      parseInt(frontWeight.value)
   ).toFixed(1);
   reboundStiffRear.textContent = formula(
      parseInt(reboundStiffMax.value),
      parseInt(reboundStiffMin.value),
      100 - parseInt(frontWeight.value)
   ).toFixed(1);
   bumpStiffFront.textContent = (
      formula(parseInt(reboundStiffMax.value), parseInt(reboundStiffMin.value), parseInt(frontWeight.value)) * 0.6
   ).toFixed(1);
   bumpStiffRear.textContent = (
      formula(parseInt(reboundStiffMax.value), parseInt(reboundStiffMin.value), 100 - parseInt(frontWeight.value)) * 0.6
   ).toFixed(1);
   springsFront.textContent = formula(
      parseInt(springsMax.value),
      parseInt(springsMin.value),
      parseInt(frontWeight.value)
   ).toFixed(1);
   springsRear.textContent = formula(
      parseInt(springsMax.value),
      parseInt(springsMin.value),
      100 - parseInt(frontWeight.value)
   ).toFixed(1);
   antirollBarFront.textContent = formula(
      parseInt(antirollBarMax.value),
      parseInt(antirollBarMin.value),
      parseInt(frontWeight.value)
   ).toFixed(2);
   antirollBarRear.textContent = formula(
      parseInt(antirollBarMax.value),
      parseInt(antirollBarMin.value),
      100 - parseInt(frontWeight.value)
   ).toFixed(2);
}

function emptyCheck(input) {
   if (parseInt(input.value) == 0 || input.value == "") return true;
   else return false;
}

document.querySelector("button").addEventListener("click", function () {
   if (
      emptyCheck(frontWeight) == true ||
      emptyCheck(reboundStiffMin) == true ||
      emptyCheck(reboundStiffMax) == true ||
      emptyCheck(springsMin) == true ||
      emptyCheck(springsMax) == true ||
      emptyCheck(antirollBarMin) == true ||
      emptyCheck(antirollBarMax) == true
   )
      alert("Values are empty or 0, FIX THE VALUES!");
   else {
      showValues();
      carInfoCheck();
      asideFadeIn();
   }
});
