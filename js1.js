// JavaScript Document
var textarray = [
//  "Pohlaď protihráče, kterého si vybereš, po ruce.",
 "Pohlaď protihráče, kterého si vybereš, po tváři.",
 "Pohlaď protihráče, kterého si vybereš, po zádech.",
 "Namasíruj protihráče, kterého si vybereš.",
 "Zazpívej oblíbenou písničku.",
 "Imituj nějaké zvíře.",
 "Udělej 20 dřepů.",
 "Udělej 10 kliků.",
 "Řekni něco hezkého osobě po tvé pravici.",
 "Řekni něco hezkého osobě po tvé levici.",
 "Vyprávěj vtip.",
 "Zatanči na libovolnou písničku.",
 "Vymysli originální pozdrav s protihráčem.",
 "Obleč si oblečení naruby.",
 "Nakresli něco na papír.",
 "Vymysli krátký příběh o něčem v místnosti.",
 "Hraj pantomimu – ostatní musí uhodnout, co předvádíš.",
 "Polož někomu vtipnou otázku.",
 "Vymysli a řekni zajímavý fakt.",
 "Zkus říct větu pozpátku.",
 "Udělěj legrační obličej a udrž ho 10 sekund.",
 "Sedni si jinam, než kde právě sedíš.",
 "Zeptej se někoho na oblíbený film nebo knihu.",
 "Napodob zvuky nějakého zvířete.",
 "Vyprávěj krátký příběh z dětství.",
 "Usměj se na všechny hráče.",
];

function RndText() {
  var rannum = Math.floor(Math.random() * textarray.length);
  document.getElementById('ShowText').innerHTML = textarray[rannum];
}

onload = function() { RndText(); }
