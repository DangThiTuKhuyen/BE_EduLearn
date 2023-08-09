"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPassString = void 0;
const numberString = '0123456789';
const capitalizeString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
function randomPassString(length) {
    const { floor, random } = Math;
    const allChars = [numberString, capitalizeString, lowercaseString];
    const allCharString = allChars.join('');
    return [
        ...allChars.map((type) => type[floor(random() * type.length)]),
        ...Array(length - allChars.length)
            .fill(0)
            .map(() => allCharString[floor(random() * allCharString.length)]),
    ]
        .sort(() => 0.5 - random())
        .join('');
}
exports.randomPassString = randomPassString;
//# sourceMappingURL=function.js.map