function connexion() {
    var connexion = document.querySelector(".second-form");
    connexion.addEventListener("submit", function(event) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("pwd2").value;
        if (email === '' || password === '') {
            alert("Remplissez d'abord tous les champs");
            event.preventDefault(); 
            return;
        }else{
        alert("Le formulaire est soumis avec succès");
        }
    });
    connexion.addEventListener("reset", function(event){
        alert("Êtes vous sûr de vouloir annuler ?");
    });
}
connexion();