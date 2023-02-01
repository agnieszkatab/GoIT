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




  

function processCall(recipient) {

    const liczba = Math.random() > 0.5;

    console.log(liczba);
    console.log(!liczba);
  
    if (!liczba) {
      console.log("Abonent " + recipient + " jest niedostępny, zostaw wiadomość.");
  
    } else {
      console.log(`Łączenie z ${recipient}, proszę czekać...`);
  
    }
  }
  
  processCall("Mango");


  function processCall(recipient, onAvailable, onNotAvailable) {
    // Symuluj dostępność abonenta za pomocą liczby losowej
      const isRecipientAvailable = Math.random() > 0.5;
    
      if (!isRecipientAvailable) {
        onNotAvailable(recipient);
        return;
      }
    
      onAvailable(recipient);
    }
    
    function takeCall(name) {
      console.log(`Łączenie z ${name}, proszę czekać...`);
    // Logika odbierania połączenia
    }
    
    function activateAnsweringMachine(name) {
      console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
    // Logika aktywacji automatycznej sekretarki
    }
    
    function leaveHoloMessage(name) {
      console.log(`Abonent ${name} jest niedostępny, nagrywamy hologram.`);
    // Logika nagrywania hologramu
    }
    
    processCall("Mango", takeCall, activateAnsweringMachine);
    processCall("Poly", takeCall, leaveHoloMessage);
  


  



  