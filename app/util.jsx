import AceOfClubs from "AceOfClubs";
import AceOfSpades from "AceOfSpades";
import AceOfHearts from "AceOfHearts";
import AceOfDiamonds from "AceOfDiamonds";

import TwoOfHearts from "TwoOfHearts";
import TwoOfSpades from "TwoOfSpades";
import TwoOfDiamonds from "TwoOfDiamonds";
import TwoOfClubs from "TwoOfClubs";

import ThreeOfHearts from "ThreeOfHearts";
import ThreeOfSpades from "ThreeOfSpades";
import ThreeOfDiamonds from "ThreeOfDiamonds";
import ThreeOfClubs from "ThreeOfClubs";

import FourOfHearts from "FourOfHearts";
import FourOfSpades from "FourOfSpades";
import FourOfDiamonds from "FourOfDiamonds";
import FourOfClubs from "FourOfClubs";

import FiveOfHearts from "FiveOfHearts";
import FiveOfSpades from "FiveOfSpades";
import FiveOfDiamonds from "FiveOfDiamonds";
import FiveOfClubs from "FiveOfClubs";

import SixOfHearts from "SixOfHearts";
import SixOfSpades from "SixOfSpades";
import SixOfDiamonds from "SixOfDiamonds";
import SixOfClubs from "SixOfClubs";

import SevenOfHearts from "SevenOfHearts";
import SevenOfSpades from "SevenOfSpades";
import SevenOfDiamonds from "SevenOfDiamonds";
import SevenOfClubs from "SevenOfClubs";

import EightOfHearts from "EightOfHearts";
import EightOfSpades from "EightOfSpades";
import EightOfDiamonds from "EightOfDiamonds";
import EightOfClubs from "EightOfClubs";

import NineOfHearts from "NineOfHearts";
import NineOfSpades from "NineOfSpades";
import NineOfDiamonds from "NineOfDiamonds";
import NineOfClubs from "NineOfClubs";

import TenOfHearts from "TenOfHearts";
import TenOfSpades from "TenOfSpades";
import TenOfDiamonds from "TenOfDiamonds";
import TenOfClubs from "TenOfClubs";

import JackOfHearts from "JackOfHearts";
import JackOfSpades from "JackOfSpades";
import JackOfDiamonds from "JackOfDiamonds";
import JackOfClubs from "JackOfClubs";

import QueenOfHearts from "QueenOfHearts";
import QueenOfSpades from "QueenOfSpades";
import QueenOfDiamonds from "QueenOfDiamonds";
import QueenOfClubs from "QueenOfClubs";

import KingOfHearts from "KingOfHearts";
import KingOfSpades from "KingOfSpades";
import KingOfDiamonds from "KingOfDiamonds";
import KingOfClubs from "KingOfClubs";

function cardToUrl(t, v) {
    console.log('Type ' + t + ' with value ' + v + ' in cardToUrl');
    switch (t) {
        case 'CLUBS':
            switch (v) {
                case 'TWO':
                    return TwoOfClubs;
                case 'THREE':
                    return ThreeOfClubs;
                case 'FOUR':
                    return FourOfClubs;
                case 'FIVE':
                    return FiveOfClubs;
                case 'SIX':
                    return SixOfClubs;
                case 'SEVEN':
                    return SevenOfClubs;
                case 'EIGHT':
                    return EightOfClubs;
                case 'NINE':
                    return NineOfClubs;
                case 'TEN':
                    return TenOfClubs;
                case 'JACK':
                    return JackOfClubs;
                case 'QUEEN':
                    return QueenOfClubs;
                case 'KING':
                    return KingOfClubs;
                default:
                    alert('Couldn\'t find a card value for ' + v)
            }
            break;
        case 'SPADES':
            switch (v) {
                case 'TWO':
                    return TwoOfSpades;
                case 'THREE':
                    return ThreeOfSpades;
                case 'FOUR':
                    return FourOfSpades;
                case 'FIVE':
                    return FiveOfSpades;
                case 'SIX':
                    return SixOfSpades;
                case 'SEVEN':
                    return SevenOfSpades;
                case 'EIGHT':
                    return EightOfSpades;
                case 'NINE':
                    return NineOfSpades;
                case 'TEN':
                    return TenOfSpades;
                case 'JACK':
                    return JackOfSpades;
                case 'QUEEN':
                    return QueenOfSpades;
                case 'KING':
                    return KingOfSpades;
                default:
                    alert('Couldn\'t find a card value for ' + v)
            }
            break;
        case 'DIAMONDS':
            switch (v) {
                case 'TWO':
                    return TwoOfDiamonds;
                case 'THREE':
                    return ThreeOfDiamonds;
                case 'FOUR':
                    return FourOfDiamonds;
                case 'FIVE':
                    return FiveOfDiamonds;
                case 'SIX':
                    return SixOfDiamonds;
                case 'SEVEN':
                    return SevenOfDiamonds;
                case 'EIGHT':
                    return EightOfDiamonds;
                case 'NINE':
                    return NineOfDiamonds;
                case 'TEN':
                    return TenOfDiamonds;
                case 'JACK':
                    return JackOfDiamonds;
                case 'QUEEN':
                    return QueenOfDiamonds;
                case 'KING':
                    return KingOfDiamonds;
                default:
                    alert('Couldn\'t find a card value for ' + v)
            }
            break;
        case 'HEARTS':
            switch (v) {
                case 'TWO':
                    return TwoOfHearts;
                case 'THREE':
                    return ThreeOfHearts;
                case 'FOUR':
                    return FourOfHearts;
                case 'FIVE':
                    return FiveOfHearts;
                case 'SIX':
                    return SixOfHearts;
                case 'SEVEN':
                    return SevenOfHearts;
                case 'EIGHT':
                    return EightOfHearts;
                case 'NINE':
                    return NineOfHearts;
                case 'TEN':
                    return TenOfHearts;
                case 'JACK':
                    return JackOfHearts;
                case 'QUEEN':
                    return QueenOfHearts;
                case 'KING':
                    return KingOfHearts;
                default:
                    alert('Couldn\'t find a card value for ' + v)
            }
            break;
        default:
            alert('Couldn\'t find a card for type ' + t);
    }
}

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

module.exports.typeToUrl = typeToUrl;
module.exports.cardToUrl = cardToUrl;
