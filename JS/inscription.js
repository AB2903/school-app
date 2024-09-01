function inscription() {
    var inscription = document.querySelector(".second-form.inscription");

    
    inscription.addEventListener("submit", function(event) {
        var nom = document.getElementById("nom").value;
        var mail = document.getElementById("mail").value;
        var mdp1 = document.getElementById("pwd").value;
        var mdp2 = document.getElementById("pwd1").value;
        if ( nom === '' || mail === '' || mdp1 === '' || mdp2 === '' ) {
            alert("Remplissez d'abord tous les champs");
            event.preventDefault(); 
            return;
        } else if ( mdp1 !== mdp2 ) {
            alert("Vos mots de passes ne sont pas identiques");
            event.preventDefault();
        } else{
            alert("Le formule a été soumis avec succès");
            return;
        }

    });
    
}
inscription();