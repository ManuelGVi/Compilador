grammar Dixy;

main:LETS RUN LLAVEA content? LLAVEC;

content: declara+;

declara:
    COMP ID (EQU expr)? SC
;
expr: 
 expr operation=(ASTE|DIA) expr      #MulDiv
| expr operation=(SUM|RES) expr   #Addsub
| INT #int
| PARA expr PARC #parens
| ID  #id
;

//PALABRAS RESERVADAS
LETS:'lets';
RUN:'run';
COMP:'comp';
//MATEMATICOS
ASTE:'*';
DIA:'/';
RES:'-';
SUM:'+';
EQU: '=';
//SIMBOLOS DE TEXTO Y CARACTERES
LLAVEA:'{';
LLAVEC:'}';
DOT:'.';
ID:[a-zA-Z]+;
INT:[0-9]+;
PARA:'(';
PARC:')';
SC:';';
//NL: '\r'? '\n';
WS:[ \t\r\n]+ -> skip;