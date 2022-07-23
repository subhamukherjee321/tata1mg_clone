// Login Section
      let login = document.querySelector(".login1");
      let body = document.querySelector("body");

      login.addEventListener("click", function () {
            body.classList.add("active");
      });

      let close = document.querySelector(".cross1");

      close.addEventListener("click",function(){
            body.classList.remove("active");
            
      });


// Sign Up Section    
      let signup = document.querySelector(".signup1");

      signup.addEventListener("click",function(){
            body.classList.add("active2");
      })

      let close2 = document.querySelector(".close");

      close2.addEventListener("click",function(){
            body.classList.remove("active2");
            
      });


// Cart Section
      let cart = document.querySelector(".cart");
      let cart1 = document.querySelector(".cart1");

      cart.addEventListener("mouseover",function(){
            cart1.classList.add("hover");
      })

      cart.addEventListener("mouseout",function(){
            cart1.classList.remove("hover");
      })
