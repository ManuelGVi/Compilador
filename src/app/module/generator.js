/**
 * GrammarName es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */
import antlr4 from "antlr4";
import DixyLexer from "../../grammar/DixyLexer.js";
import DixyParser from "../../grammar/DixyParser.js";
import CustomVisitor from "../helper/CustomVisitor.js";

export const analizar = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new DixyLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new DixyParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.main();
  const customVisitor = new CustomVisitor();

  return customVisitor.visitMain(tree);
};
