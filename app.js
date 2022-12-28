const left_color = document.querySelector(".color-left")
right_color = document.querySelector(".color-right")
btn = document.querySelector(".btn")
gradient_box = document.querySelector(".gradient-box")
input = document.querySelectorAll("input")
copy_box = document.querySelector(".copy-box");

const colors = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];


function generateColor(){
   let color1 = '#';
   for(i=1;i<=6;i++){
      const randomNumber = Math.abs(Math.floor(Math.random(1)*colors.length));
      color1 += colors[randomNumber];
   }
   
   let color2 = '#';
   for(i=1;i<=6;i++){
      const randomNumber = Math.abs(Math.floor(Math.random(1)*colors.length));
      color2 += colors[randomNumber];
   }
   
   return {
      color1,color2
   };
}


function makeGradient(){
   const random_colors = generateColor();
   const { color1, color2 } = random_colors;
   left_color.value = color1;
   right_color.value = color2;
   const gradient_color = `linear-gradient(to right,${color1},${color2})`;
   gradient_box.style.backgroundImage = gradient_color;
}

btn.addEventListener("click", makeGradient);


// For Copy Color
input.forEach((item)=>{
   item.addEventListener("click", (e) => {
      // alert(e.target)
      item.select();
      document.execCommand('copy');
      copy_box.style.display = 'block'
      setTimeout(function() {
         copy_box.style.display = 'none'
      }, 2000);
   });
});


makeGradient()