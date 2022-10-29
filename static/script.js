function arraysEquals(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

pin = []

function save1(){
    if(pin.length !== 6){
        pin.push(1)
        document.getElementsByClassName("fas fa-circle")[pin.length-1].style.color = "green";
        if(pin.length == 6){
            if(arraysEquals(pin, [1,2,3,4,5,6])){
                document.cookie = "authorized=true; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None; path=/";
                location.href = "../"
            }else{
                
                for (let i = 0; i < pin.length; i++) {
                    document.getElementsByClassName("fas fa-circle")[i].style.color = "red";
                    
                }
                document.getElementsByClassName("pinpad")[0].className += " " + "shake";
                setTimeout(function(){
                    location.reload()
                }, 850);
                
            }
        }
    } 
}

function save2(){
    if(pin.length !== 6){
        pin.push(2)
        document.getElementsByClassName("fas fa-circle")[pin.length-1].style.color = "green";
        if(pin.length == 6){
            if(arraysEquals(pin, [1,2,3,4,5,6])){
                document.cookie = "authorized=true; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None; path=/";
                location.href = "../"
            }else{
                
                for (let i = 0; i < pin.length; i++) {
                    document.getElementsByClassName("fas fa-circle")[i].style.color = "red";
                    
                }
                document.getElementsByClassName("pinpad")[0].className += " " + "shake";
                setTimeout(function(){
                    location.reload()
                }, 850);
                
            }
        }
    } 
}

function save3(){
    if(pin.length !== 6){
        pin.push(3)
        document.getElementsByClassName("fas fa-circle")[pin.length-1].style.color = "green";
        if(pin.length == 6){
            if(arraysEquals(pin, [1,2,3,4,5,6])){
                document.cookie = "authorized=true; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None; path=/";
                location.href = "../"
            }else{
                
                for (let i = 0; i < pin.length; i++) {
                    document.getElementsByClassName("fas fa-circle")[i].style.color = "red";
                    
                }
                document.getElementsByClassName("pinpad")[0].className += " " + "shake";
                setTimeout(function(){
                    location.reload()
                }, 850);
                
            }
        }
    } 
}

function save4(){
    if(pin.length !== 6){
        pin.push(4)
        document.getElementsByClassName("fas fa-circle")[pin.length-1].style.color = "green";
        if(pin.length == 6){
            if(arraysEquals(pin, [1,2,3,4,5,6])){
                document.cookie = "authorized=true; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None; path=/";
                location.href = "../"
            }else{
                
                for (let i = 0; i < pin.length; i++) {
                    document.getElementsByClassName("fas fa-circle")[i].style.color = "red";
                    
                }
                document.getElementsByClassName("pinpad")[0].className += " " + "shake";
                setTimeout(function(){
                    location.reload()
                }, 850);
                
            }
        }
    } 
}

function save5(){
    if(pin.length !== 6){
        pin.push(5)
        document.getElementsByClassName("fas fa-circle")[pin.length-1].style.color = "green";
        if(pin.length == 6){
            if(arraysEquals(pin, [1,2,3,4,5,6])){
                document.cookie = "authorized=true; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None; path=/";
                location.href = "../"
            }else{
                
                for (let i = 0; i < pin.length; i++) {
                    document.getElementsByClassName("fas fa-circle")[i].style.color = "red";
                    
                }
                document.getElementsByClassName("pinpad")[0].className += " " + "shake";
                setTimeout(function(){
                    location.reload()
                }, 850);
                
            }
        }
    } 
}

function save6(){
    if(pin.length !== 6){
        pin.push(6)
        document.getElementsByClassName("fas fa-circle")[pin.length-1].style.color = "green";
        if(pin.length == 6){
            if(arraysEquals(pin, [1,2,3,4,5,6])){
                document.cookie = "authorized=true; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None; path=/";
                location.href = "../"
            }else{
                
                for (let i = 0; i < pin.length; i++) {
                    document.getElementsByClassName("fas fa-circle")[i].style.color = "red";
                    
                }
                document.getElementsByClassName("pinpad")[0].className += " " + "shake";
                setTimeout(function(){
                    location.reload()
                }, 850);
                
            }
        }
    } 
}

function save7(){
    if(pin.length !== 6){
        pin.push(7)
        document.getElementsByClassName("fas fa-circle")[pin.length-1].style.color = "green";
        if(pin.length == 6){
            if(arraysEquals(pin, [1,2,3,4,5,6])){
                document.cookie = "authorized=true; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None; path=/";
                location.href = "../"
            }else{
                
                for (let i = 0; i < pin.length; i++) {
                    document.getElementsByClassName("fas fa-circle")[i].style.color = "red";
                    
                }
                document.getElementsByClassName("pinpad")[0].className += " " + "shake";
                setTimeout(function(){
                    location.reload()
                }, 850);
                
            }
        }
    } 
}

function save8(){
    if(pin.length !== 6){
        pin.push(8)
        document.getElementsByClassName("fas fa-circle")[pin.length-1].style.color = "green";
        if(pin.length == 6){
            if(arraysEquals(pin, [1,2,3,4,5,6])){
                document.cookie = "authorized=true; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None; path=/";
                location.href = "../"
            }else{
                
                for (let i = 0; i < pin.length; i++) {
                    document.getElementsByClassName("fas fa-circle")[i].style.color = "red";
                    
                }
                document.getElementsByClassName("pinpad")[0].className += " " + "shake";
                setTimeout(function(){
                    location.reload()
                }, 850);
                
            }
        }
    } 
}

function save9(){
    if(pin.length !== 6){
        pin.push(9)
        document.getElementsByClassName("fas fa-circle")[pin.length-1].style.color = "green";
        if(pin.length == 6){
            if(arraysEquals(pin, [1,2,3,4,5,6])){
                document.cookie = "authorized=true; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None";
                location.href = "../"
            }else{
                
                for (let i = 0; i < pin.length; i++) {
                    document.getElementsByClassName("fas fa-circle")[i].style.color = "red";
                    
                }
                document.getElementsByClassName("pinpad")[0].className += " " + "shake";
                setTimeout(function(){
                    location.reload()
                }, 850);
                
            }
        }
    } 
}