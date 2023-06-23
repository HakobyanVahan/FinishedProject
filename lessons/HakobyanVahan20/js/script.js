
//Xndir 1
var num = 6524;
console.log((parseInt(num / 1000) + (num % 10)) % 2 == 0);

// Xndir 2
var num = 6524;
console.log((parseInt(num / 1000)) + ((parseInt(num / 10 / 10) % 10)) + (parseInt(num / 10) % 10) + (num % 10));

//Xndir 3
var num = 6524;
console.log((parseInt(num / 1000)) % 2 == 0);

// Xndir 4
var num = 6660;
console.log(num % 4 == 0 && num % 3 == 0);

// Xndir 5
var num = 6542;
console.log((num % 10) + '' + (parseInt(num / 10) % 10) + '' + ((parseInt(num / 10 / 10) % 10)) + '' + (parseInt(num / 1000)));

//SPOJ 101
var string = 'I am a string';

console.log(string);
console.log('');

//SPOJ 102

var end = 'end';
console.log(end + ' ' + end);
console.log('');

//SPOJ 103
var program = 'program',
    olymp = 'olymp';

console.log(program + ' ' + olymp + ';');
console.log('');

//SPOJ 104
console.log(program + ' + ' + olymp + ' = ' + '???');
console.log('');

//SPOJ 105
var variable = 'var',
    string = 'string';

console.log(variable);
console.log('s : ' + string + ';');

console.log('');
//SPOJ 106
var byte = 'byte',
    longint = 'longint';

console.log(longint + ';');
console.log('+' + byte + '+');

console.log('');

//SPOJ 107
var char = 'char';

console.log('*' + end + '+' + char + '*');
console.log('/' + char + '-' + end + '\\');

console.log('');

//SPOJ 108
console.log('!' + end + '---' + char + '!');
console.log('\\' + char + '+++' + end + '/');

console.log('');
//SPOJ 109
var www = 'www',
    iii = 'iii';

console.log('(s1)=' + '(' + www + ')');
console.log('[s2]=' + '[' + iii + ']');

console.log('');

//SPOJ 110
var ttt = 'ttt',
    ooo = 'ooo';

console.log('(' + ttt + ')');
console.log(ttt + ooo);
console.log('(' + ooo + ')');

console.log('');

//SPOJ 111
var aa = 'aa',
    bb = 'bb',
    cc = 'cc';

console.log(aa);
console.log(bb);
console.log(cc);

console.log('');

//SPOJ 112
console.log(string + ' ' + char + ' ' + longint);

console.log('');

//SPOJ 113
var program = 'program',
    letter = 'p',
    num = 11;

console.log(program + ' ' + letter + num);

console.log('');

//SPOJ 114
console.log('s1=' + program);
console.log('s2=' + variable);
console.log('s3=' + longint);

console.log('');

//SPOJ 115
console.log('s1 :' + string + ';');
console.log('s2 :' + longint + ';');
console.log('s3 :' + char + ';');

console.log('');

//SPOJ 116
var un = 'un',
    like = 'like',
    usual = 'usual';

console.log('+' + un + like + '+');
console.log('+' + un + usual + '+');

console.log('');

//SPOJ 117
var symbols1 = 'qqqq',
    symbols2 = 'hhh',
    symbols3 = 'nn';

console.log(symbols1 + '+' + symbols2 + '+' + symbols3 + '=' + symbols1 + symbols2 + symbols3);

console.log('');

//SPOJ 201
var num = 5;
console.log(Infinity == num / 0);

console.log('');

//SPOJ 202
var num = 4;
console.log(num % 2 === 0);

console.log('');

//SPOJ 203
var num = 5;
console.log(num % 2 != 0);

console.log('');

//SPOJ 204
var num = '80';
console.log(num - parseInt(num) == 0);

console.log('');

//SPOJ 205
var num = '80';
console.log(num - parseInt(num) !== 0);

console.log('');

//SPOJ 206
var num = 9;

console.log(num % (Math.sqrt(num)) == 0);

console.log('');

//SPOJ 207
var num = 27;
console.log(num % (Math.cbrt(num)) == 0);

console.log('');

//SPOJ 208
var firstNum = 4,
    secondNum = 2;

console.log(firstNum % secondNum == 0);

console.log('');

//SPOJ 209
var num = 0.1;
console.log(num > 0 && num < 1 == true);

console.log('');

//SPOJ 210
var num = 5;
console.log(num > 0 && num < 1 !== true);

console.log('');

//SPOJ 214
var num = 11;
console.log(num % 10 == 1);

console.log('');

//SPOJ 215
var num = 11;
console.log(parseInt(num % 10) == 0 || num % 10 == 0);

console.log('');

//SPOJ 221
var num = 44;
console.log((parseInt(num / 10) == (num % 10)));

console.log('');

//SPOJ 222
var num = 99;
console.log((parseInt(num / 10)) + (num % 10) > 7);

console.log('');

//SPOJ 223
var num = 30;
console.log((parseInt(num / 10)) + (num % 10) < 5);

console.log('');

//SPOJ 224
var num = 42;
console.log((parseInt(num / 10)) + (num % 10) == 6);

console.log('');

//SPOJ 225
var num = 28;
console.log(((parseInt(num / 10)) + (num % 10)) % 2 == 0);

console.log('');

//SPOJ 226
var num = 11;
console.log((parseInt(num / 10) == (num % 10)));

console.log('');

//SPOJ 227
var num = 5;
console.log(0 <= (num / 10) && (num / 10) < 1);

console.log('');

//SPOJ 228
var num = 978;
console.log(num / 10 >= 1);

console.log('');

//SPOJ 229
var num = 90;
console.log(1 <= (num / 10) && (num / 10) < 10);

console.log('');

//SPOJ 230
var num = 5;
console.log(num / 10 < 1 || num / 10 >= 10);

console.log('');

//SPOJ 231
var num = 565;
console.log(num / 111 > 0.9 && num / 111 < 10);

console.log('');

//SPOJ 232
var num = 565;
console.log(num / 111 < 0.9 || num / 111 > 10);

console.log('');

//SPOJ 233
var num = 9;
console.log(num / 10 < 10 || num / 10 < 1);

console.log('');

//SPOJ 234
var num = 9;
console.log(num < 10 || num >= 100 && num <= 999);

console.log('');

//SPOJ 235
var num = 90;
console.log(num > 10 && num < 100 || num >= 100 && num <= 999);

console.log('');

//SPOJ 236
var num = 777;
console.log((parseInt(num / 100) + '' + ((parseInt(num / 10) % 10)) + '' + (num % 10)) == (num % 10) + '' + ((parseInt(num / 10) % 10)) + '' + (parseInt(num / 100)));

console.log('');

//SPOJ 237
var num = 7887;
console.log((parseInt(num / 1000)) + '' + ((parseInt(num / 10 / 10) % 10)) + '' + (parseInt(num / 10) % 10) + '' + (num % 10) == (num % 10) + '' + (parseInt(num / 10) % 10) + '' + ((parseInt(num / 10 / 10) % 10)) + '' + (parseInt(num / 1000)));

console.log('');

//SPOJ 238
var num = 888;
console.log(((parseInt(num / 100) == ((parseInt(num / 10) % 10))) * parseInt(num / 100) == (num % 10)));

console.log('');

//SPOJ 244
var num1 = -5,
    num2 = -8,
    num3 = -5;

console.log(Infinity == num1 / 0 || Infinity == num2 / 0 || Infinity == num3 / 0);

console.log('');

//SPOJ 245
var num1 = 5,
    num2 = 7,
    num3 = 129;

console.log(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0);

console.log('');

//SPOJ 246
var num1 = 5,
    num2 = -6,
    num3 = 7;

console.log((parseInt(num1) - num1 == 0) || (parseInt(num2) - num2 == 0) || (parseInt(num3) - num3 == 0));

console.log('');

//SPOJ 247
var num1 = 5,
    num2 = -6,
    num3 = 7;

console.log((parseInt(num1) - num1 != 0) || (parseInt(num2) - num2 != 0) || (parseInt(num3) - num3 != 0));

console.log('');

//SPOJ 248
var num1 = 13,
    num2 = 15,
    num3 = 64;

console.log((num1 % Math.sqrt(num1) == 0) || (num2 % Math.sqrt(num2) == 0) || (num3 % Math.sqrt(num3) == 0));