btnAll = document.querySelector('#btnall');
btnPano = document.querySelector('#btnpanoramas');
btnPort = document.querySelector('#btnportraits');
btnMacro = document.querySelector('#btnmacro');
btnJourn = document.querySelector('#btnjournal');


btnAll.addEventListener('click', function(){
  filterSelection('all');
});

btnPano.addEventListener('click', function(){
  filterSelection('panoramas');
});

btnPort.addEventListener('click', function(){
  filterSelection('portraits');
});

btnMacro.addEventListener('click', function(){
  filterSelection('macro');
});

btnJourn.addEventListener('click', function(){
  filterSelection('journal');
});

filterSelection("all") // Execute the function and show all columns
            function filterSelection(c) {
              var x, i;
              x = document.getElementsByClassName("column");
              if (c == "all") c = "";
              // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
              for (i = 0; i < x.length; i++) {
                w3RemoveClass(x[i], "show");
                if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
              }
            }
            
            // Show filtered elements
            function w3AddClass(element, name) {
              var i, arr1, arr2;
              arr1 = element.className.split(" ");
              arr2 = name.split(" ");
              for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                  element.className += " " + arr2[i];
                }
              }
            }
            
            // Hide elements that are not selected
            function w3RemoveClass(element, name) {
              var i, arr1, arr2;
              arr1 = element.className.split(" ");
              arr2 = name.split(" ");
              for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                  arr1.splice(arr1.indexOf(arr2[i]), 1); 
                }
              }
              element.className = arr1.join(" ");
            }
            
            // Add active class to the current button (highlight it)
            var btnContainer = document.getElementById("myBtnContainer");
            var btns = btnContainer.getElementsByClassName("btn");
            for (var i = 0; i < btns.length; i++) {
              btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("btnactive");
                current[0].className = current[0].className.replace(" btnactive", "");
                this.className += " btnactive";
              });
            }
          
            