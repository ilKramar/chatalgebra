import {Component} from "react";
import React from "react";

function randomName() {
    const adjectives = [
      "jesenji", "skriveni", "gorak", "maglovit", "tih", "prazan", "suho", "tamno",
      "ljetni", "ledeni", "delikatan", "tih", "bijel", "hladan", "proljetni", "zimski",
      "strpljiv", "sumrak", "zora", "grimizan", "nježan", "dotrajal", "plav",
      "valovit", "slomljen", "hladan", "vlažan", "padajuć", "smrznut", "zelen", "dug",
      "kasn", "zadržan", "hrabar", "mali", "jutarnji", "blatan", "star", "crven",
      "hrapav", "miran", "mali", "sjajuć", "kucajuć", "stidljiv", "lutajuć",
      "venčan", "divlji", "crn", "mlad", "svet", "usamljen", "mirisan",
      "starinski", "snježan", "ponosan", "cvjetan", "nemiran", "božanski", "poliran",
      "drevan", "ljubičast", "živahan", "bezimen"
    ];
    
    const nouns = [
      "vodopad", "rijeka", "povjetarac", "mjesec", "kiša", "vjetar", "more", "jutro",
      "snijeg", "jezero", "zalazak sunca", "bor", "sjena", "list", "zora", "sjaj",
      "šuma", "brdo", "oblak", "livada", "sunce", "čistina", "ptica", "potok",
      "leptir", "žbun", "rosa", "prašina", "polje", "vatra", "cvijet", "svjetionica",
      "pero", "trava", "magla", "planina", "noć", "ribnjak", "tamnoća",
      "snježna pahulja", "tišina", "zvuk", "nebo", "oblik", "val", "grom",
      "ljubičica", "voda", "divlji cvijet", "val", "voda", "rezonanca", "sunce",
      "drvo", "san", "trešnja", "drvo", "magla", "mraz", "glas", "papir", "žaba",
      "dim", "zvijezda"
    ];
    
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
}

export default randomName;
