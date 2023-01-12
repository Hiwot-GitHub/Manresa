
  let i, current = 0;
  let images = [];
  let menu = "./Images/menu.png";


  var time = 3000;

        images[0] = "./Images/Avocadosalad.jpg";
        images[1] = "./Images/Pasta.jpg";
        images[2] = "./Images/Teramisu.jpg";
        images[3] = "./Images/Wine.jpg";

        function changeImage(){
            document.slide.src = images[i];
            current = i;

            if (i < images.length - 1){
            i++;
        }
        else {
            i = 0;
        }
        setTimeout("changeImage()", time);
        }

     

        function reset(){
            for (i = 0; i < images.length; i++){
                document.slide.src = null;
            }
        }

        function prev(){
            if (current === 0){
                current = images.length;
            }
            document.slide.src = images[current - 1];
            current--;
        }

        function next(){
            if (current === images.length - 1){
                current = -1;
            }
            document.slide.src = images[current + 1];
            current++;
        }

       
        function goToLocation(){
                const mydiv = document.getElementById('location');
                return mydiv.scrollIntoView({behavior:"smooth"});
           
        }

        function goToMenu(){
            const mydiv = document.getElementById('menu');
            return mydiv.scrollIntoView({behavior:"smooth"});
       
    }

    function hideNav(x){
        if(x.matches){
           document.getElementById("nav").innerHTML = menu;
        }
       
    }

    x = window.matchMedia("(max-w-4xl)");


        window.onload = changeImage;
        hideNav(x);
        x.addListener(hideNav);

    
