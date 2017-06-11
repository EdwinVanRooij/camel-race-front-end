import AceOfClubs from "AceOfClubs";
import AceOfSpades from "AceOfSpades";
import AceOfHearts from "AceOfHearts";
import AceOfDiamonds from "AceOfDiamonds";

function typeToUrl(type) {
    switch (type) {
        case 'CLUBS':
            return AceOfClubs;
        case 'DIAMONDS':
            return AceOfDiamonds;
        case 'HEARTS':
            return AceOfHearts;
        case 'SPADES':
            return AceOfSpades;
        default:
            alert('Could not determine card type for ' + type);
    }
}


module.exports = typeToUrl;
