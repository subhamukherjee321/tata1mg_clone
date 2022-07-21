brandItems = [
      {
            image: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1658381968/djnpff5fedmyux0818ca.png",
            name: "Zandu",
      },
      {
            image: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1658382040/oi0ur8lo58nku2ixbqib.png",
            name: "Kapita Ayurveda",
      },
      {
            image: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1658382057/lotted7cq9q5ivj2a8ad.jpg",
            name: "Dabar"
      },
      {
            image: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1658382099/duftuwmrc1apyspyy1wc.png",
            name: "HealthVit"
      },
      {
            image: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1658382127/j7mmcwphkloncrhpplfb.png",
            name: "Optimum Nutrition"
      },
      {
            image: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1658382148/haqfpvbtgym8a6cmx3pz.png",
            name: "Baidyanath(Nagpur)"
      },
      {
            image: "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1658382166/a95m93kwh9ixcomdjejf.png",
            name: "TrueBasics"
      }
];

let container = document.createElement("div");
document.querySelector("#body").append(container);

brandItems.forEach(function(el){
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("src",el.image);

      let p = document.createElement("p");
      p.innerText = el.name;

      div.append(img,p);
      container.append(div);
})