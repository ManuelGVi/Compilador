// Generated from ./src/grammar/Dixy.g4 by ANTLR 4.13.1
// jshint ignore: start
import DixyVisitor from '../../grammar/DixyVisitor';
import DixyLexer from "../../grammar/DixyLexer.js";
import DixyParser from "../../grammar/DixyParser.js";
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by DixyParser.

export default class CustomVisitor extends DixyVisitor {
    constructor() {
        super();
        this.memoria = new Map(); // Mapa de memoria para almacenar variables
    }
    isValidIdentifier(name) {
        return /[a-zA-Z]+/.test(name);
      }
	// Visit a parse tree produced by DixyParser#main.
	visitMain(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DixyParser#content.
	visitContent(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DixyParser#declara.
	visitDeclara(ctx) {
        const variableName = ctx.ID().getText();
          // Verificar si el nombre del identificador es válido
       /* if (/[a-zA-Z]+/.test(variableName)) {
            throw new Error(`El nombre del identificador '${variableName}' no es válido en línea ${ctx.start.line}`);
        }*/
        let value = 0; // Valor predeterminado si no hay asignación
        const lastToken = ctx.stop;
        // Verificar si el identificador ya está definido
        if (this.memoria.has(variableName)) {
            throw new Error(`El identificador '${variableName}' ya está definido en línea ${ctx.start.line}`);
        }
      
        // Verifica si hay una expresión de asignación después del '='
        if (ctx.EQU()) {
          // Si hay una expresión después del '=', evalúala y asigna el resultado
          if (!ctx.expr()) {
            throw new Error(`Se esperaba una expresión después del signo igual en línea ${ctx.start.line}`);
          }
          value = this.visit(ctx.expr());
        }
        if (!ctx.SC()) {
            throw new Error(`Falta ';' al final de la línea ${ctx.start.line}`);
        }
        // Verifica si hay un punto y coma al final de la declaración
        // Almacena el valor en memoria
        this.memoria.set(variableName, value);
        console.log(`Valor de ${variableName}: ${value}`);
        return value;
	}
    
	// Visit a parse tree produced by DixyParser#parens.
	visitParens(ctx) {
        return this.visit(ctx.expr());
	}


	// Visit a parse tree produced by DixyParser#Addsub.
	visitAddsub(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        let leftValue;
        let rightValue;
    // Si alguno de los operandos es un ID, obtenemos su valor
    if (isNaN(left)) {
        if (!this.memoria.has(left)) {
            throw new Error(`La variable '${left}' no está definida en línea ${ctx.start.line}`);
        }
        leftValue = this.memoria.get(left);
    } else {
        leftValue = left;
    }
    if (isNaN(right)) {
        if (!this.memoria.has(right)) {
            throw new Error(`La variable '${right}' no está definida en línea ${ctx.start.line}`);
        }
        rightValue = this.memoria.get(right);
    } else {
        rightValue = right;
    }

    if (ctx.operation.type === DixyParser.SUM) {
        const result = leftValue + rightValue;
        return result;
    } else if (ctx.operation.type === DixyParser.RES) {
        const result = leftValue - rightValue;
        return result;
    }
	}


	// Visit a parse tree produced by DixyParser#MulDiv.
	visitMulDiv(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        let leftValue;
        let rightValue;
    
    // Si alguno de los operandos es un ID, obtenemos su valor
    if (isNaN(left)) {
        if (!this.memoria.has(left)) {
            throw new Error(`La variable '${left}' no está definida en línea ${ctx.start.line}`);
        }
        leftValue = this.memoria.get(left);
        console.log(`Valor de '${left}': ${leftValue}`);
    } else {
        leftValue = left;
    }
    if (isNaN(right)) {
        if (!this.memoria.has(right)) {
            throw new Error(`La variable '${right}' no está definida en línea ${ctx.start.line}`);
        }
        rightValue = this.memoria.get(right);
    } else {
        rightValue = right;
    }

    if (ctx.operation.type === DixyParser.ASTE) {
        const result = leftValue * rightValue;
        return result;
    } else if (ctx.operation.type === DixyParser.DIA) {
        if (rightValue === 0) {
            throw new Error(`División por cero en línea ${ctx.start.line}`);
        }
        const result = leftValue / rightValue;
        return result;
    }
	}


	// Visit a parse tree produced by DixyParser#id.
	visitId(ctx) {
        const variableName = ctx.getText();
        if (!this.memoria.has(variableName)) {
          throw new Error(`El identificador '${variableName}' no está definido en línea ${ctx.start.line}`);
        }
        return this.memoria.get(variableName);
	}


	// Visit a parse tree produced by DixyParser#int.
	visitInt(ctx) {
        return parseInt(ctx.getText());
	}
}