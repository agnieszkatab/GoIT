function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "New Heading";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}


const paczka = {
    name: "",
    ulica: "",
  };
  
  const paczka2 = {
    name: "",
    ulica: "",
  };
  
  paczka2.waga = 20
  paczka.name = "list"
  paczka2.name = "paka"





function mojaFunkcja(id){
    const element = document.getElementById("id01");
const element2 = document.getElementById("id02");

    if(id === 1){

        informacja = "Typ twojej przesyłki to: " + paczka.name;
        element.innerHTML = informacja;
    
        
        informacja = "Twoja paczka nie posiada wagi"
        element2.innerHTML = informacja;
        
    }

    else if(id === 2){
        informacja = "Typ twojej przesyłki to: " + paczka2.name;
        element.innerHTML = informacja;
    
        informacja = "Waga twojej przesyłki to: " + paczka2.waga + " kg";
        element2.innerHTML = informacja;
    }
    
   
   
  

}








  

  
  



  