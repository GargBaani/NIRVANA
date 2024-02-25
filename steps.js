document.addEventListener("DOMContentLoaded", function() {
  const steps = document.querySelectorAll(".step-wizard-item");
  const nextBtn = document.getElementById("nextBtn");
  const stepscontainerDiv = document.getElementById("stepscontainer");
  const stepsDiv = document.getElementById("steps");
  const backgroundColors = ["#21d4fd", "#b721ff", "#21d4fd", "#b721ff"]; 


  stepscontainerDiv.innerHTML = "<p>Hey there! If you're feeling a bit low, just remember that life has its ups and downs, but the best moments are yet to come</p>";
  stepscontainerDiv.style.backgroundImage = "url(Meditation-amico.png)"; 
 
 
  


  nextBtn.addEventListener("click", function() {
      const currentItem = document.querySelector(".current-item");
      const nextItem = currentItem.nextElementSibling;

      if (nextItem !== null) {
         
          currentItem.classList.remove("current-item");
          
          
          nextItem.classList.add("current-item");

          
          const loader = document.querySelector(".progress-count");
          loader.style.background = getComputedStyle(nextItem).backgroundColor;

        
          switch(Array.from(steps).indexOf(nextItem)) {
              case 2:
                
                  stepscontainerDiv.innerHTML = `
                  <div id="medbox">
    <div class="input">
      <label style="color: azure;">Select Meditation Time</label>
      <select class="breath-input" style="color: black;">
        <option value="3" style="color: black;">5 mins</option>
        <option value="5" style="color: black;">10 mins</option>
        <option value="7" style="color: black;">20mins</option>
      </select>
    </div>
    <div class="circle-wrap">
      <div class="circle-outline"></div>
      <div class="circle-progress"></div>
    </div>
    <p class="breaths" style="color:azure;">Breaths remaining: <span class="breaths-text">3</span></p>
    <p class="instructions" style="color: azure;">Are you ready to start breathing?</p>
    <button class="start" style="color: black;">Begin</button>
    <script src="steps.js"></script>
    </div>` 
                 
                  break;
              case 3:
                  stepscontainerDiv.innerHTML = `
                  <div id="om">
        <div id="omcontainer">
            <img src="">
        </div>
    </div>
                  `
                  break;
              case 4:
                  stepscontainerDiv.innerHTML = "<p>Take a moment to breathe, relax, and let go of any worries</p>"; 
                  stepscontainerDiv.style.backgroundImage = "url('image_processing20200715-32323-idopze.gif')"; // Corrected this line
                  break;
              case 5:
                  stepscontainerDiv.innerHTML = "<p>Take a moment to breathe, relax, and let go of any worries</p>"; 
                  stepscontainerDiv.style.backgroundImage = "url('image_processing20200715-32323-idopze.gif')"; // Corrected this line
                  break;
              
                    case 6:
                      stepscontainerDiv.innerHTML = "<p>Let the positivity flow through you, and keep shining bright!</p>"; 
                      stepscontainerDiv.style.backgroundImage = "url('b30b5710615b20de24486e48c467040f.gif')";
                      nextBtn.innerHTML = "<a href='timer.html' style='color: white;'></a>";
                      nextBtn.addEventListener("click", function() {
                          window.location.href = "timer.html";
                      });
                      break;
                  

                
              default:
                  break;
          }
      }
  });
});
