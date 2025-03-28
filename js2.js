document.addEventListener("DOMContentLoaded", function () {
    var textarray = [
        "Dej si panáka rumu!",
        "Dej si panáka vodky!",
        "Dej si panáka pálenky!",
        "Kopni do sebe dva panáky vodky!",
        "Kopni do sebe dva panáky rumu!",
        "Kopni do sebe dva panáky pálenky!",
        "Dej si panáka tequily!",
        "Vypij půllitr piva!",
        "Dopíj sklenici!",
        "Plivni si do skleničky a pak to vypij!",
        "Plivni někomu do skleničky!",
        "Podávej komukoliv tequilu ze svého těla!",
        "Slej všechny sklenice, které jsou na stole, a potom to vypij!",
        "Dej si vodu!",
        "Napij se něčeho sladkého!"
    ];

    function RndText() {
        var rannum = Math.floor(Math.random() * textarray.length);
        document.getElementById('ShowText').textContent = textarray[rannum];
    }

    RndText(); // Zavoláme funkci po načtení stránky
});