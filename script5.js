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
  


  



  