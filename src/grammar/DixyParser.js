// Generated from ./src/grammar/Dixy.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DixyVisitor from './DixyVisitor.js';

const serializedATN = [4,1,17,50,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
1,0,1,0,3,0,13,8,0,1,0,1,0,1,1,4,1,18,8,1,11,1,12,1,19,1,2,1,2,1,2,1,2,3,
2,26,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,37,8,3,1,3,1,3,1,3,1,3,
1,3,1,3,5,3,45,8,3,10,3,12,3,48,9,3,1,3,0,1,6,4,0,2,4,6,0,2,1,0,4,5,1,0,
6,7,52,0,8,1,0,0,0,2,17,1,0,0,0,4,21,1,0,0,0,6,36,1,0,0,0,8,9,5,1,0,0,9,
10,5,2,0,0,10,12,5,9,0,0,11,13,3,2,1,0,12,11,1,0,0,0,12,13,1,0,0,0,13,14,
1,0,0,0,14,15,5,10,0,0,15,1,1,0,0,0,16,18,3,4,2,0,17,16,1,0,0,0,18,19,1,
0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,3,1,0,0,0,21,22,5,3,0,0,22,25,5,12,
0,0,23,24,5,8,0,0,24,26,3,6,3,0,25,23,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,
0,27,28,5,16,0,0,28,5,1,0,0,0,29,30,6,3,-1,0,30,37,5,13,0,0,31,32,5,14,0,
0,32,33,3,6,3,0,33,34,5,15,0,0,34,37,1,0,0,0,35,37,5,12,0,0,36,29,1,0,0,
0,36,31,1,0,0,0,36,35,1,0,0,0,37,46,1,0,0,0,38,39,10,5,0,0,39,40,7,0,0,0,
40,45,3,6,3,6,41,42,10,4,0,0,42,43,7,1,0,0,43,45,3,6,3,5,44,38,1,0,0,0,44,
41,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,7,1,0,0,0,48,46,
1,0,0,0,6,12,19,25,36,44,46];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DixyParser extends antlr4.Parser {

    static grammarFileName = "Dixy.g4";
    static literalNames = [ null, "'lets'", "'run'", "'comp'", "'*'", "'/'", 
                            "'-'", "'+'", "'='", "'{'", "'}'", "'.'", null, 
                            null, "'('", "')'", "';'" ];
    static symbolicNames = [ null, "LETS", "RUN", "COMP", "ASTE", "DIA", 
                             "RES", "SUM", "EQU", "LLAVEA", "LLAVEC", "DOT", 
                             "ID", "INT", "PARA", "PARC", "SC", "WS" ];
    static ruleNames = [ "main", "content", "declara", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DixyParser.ruleNames;
        this.literalNames = DixyParser.literalNames;
        this.symbolicNames = DixyParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	main() {
	    let localctx = new MainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DixyParser.RULE_main);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.match(DixyParser.LETS);
	        this.state = 9;
	        this.match(DixyParser.RUN);
	        this.state = 10;
	        this.match(DixyParser.LLAVEA);
	        this.state = 12;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 11;
	            this.content();
	        }

	        this.state = 14;
	        this.match(DixyParser.LLAVEC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DixyParser.RULE_content);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.declara();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declara() {
	    let localctx = new DeclaraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DixyParser.RULE_declara);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(DixyParser.COMP);
	        this.state = 22;
	        this.match(DixyParser.ID);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 23;
	            this.match(DixyParser.EQU);
	            this.state = 24;
	            this.expr(0);
	        }

	        this.state = 27;
	        this.match(DixyParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, DixyParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 30;
	            this.match(DixyParser.INT);
	            break;
	        case 14:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 31;
	            this.match(DixyParser.PARA);
	            this.state = 32;
	            this.expr(0);
	            this.state = 33;
	            this.match(DixyParser.PARC);
	            break;
	        case 12:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 35;
	            this.match(DixyParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 46;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 44;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DixyParser.RULE_expr);
	                    this.state = 38;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 39;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===4 || _la===5)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 40;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new AddsubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DixyParser.RULE_expr);
	                    this.state = 41;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 42;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===6 || _la===7)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 43;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 48;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

DixyParser.EOF = antlr4.Token.EOF;
DixyParser.LETS = 1;
DixyParser.RUN = 2;
DixyParser.COMP = 3;
DixyParser.ASTE = 4;
DixyParser.DIA = 5;
DixyParser.RES = 6;
DixyParser.SUM = 7;
DixyParser.EQU = 8;
DixyParser.LLAVEA = 9;
DixyParser.LLAVEC = 10;
DixyParser.DOT = 11;
DixyParser.ID = 12;
DixyParser.INT = 13;
DixyParser.PARA = 14;
DixyParser.PARC = 15;
DixyParser.SC = 16;
DixyParser.WS = 17;

DixyParser.RULE_main = 0;
DixyParser.RULE_content = 1;
DixyParser.RULE_declara = 2;
DixyParser.RULE_expr = 3;

class MainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DixyParser.RULE_main;
    }

	LETS() {
	    return this.getToken(DixyParser.LETS, 0);
	};

	RUN() {
	    return this.getToken(DixyParser.RUN, 0);
	};

	LLAVEA() {
	    return this.getToken(DixyParser.LLAVEA, 0);
	};

	LLAVEC() {
	    return this.getToken(DixyParser.LLAVEC, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DixyVisitor ) {
	        return visitor.visitMain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DixyParser.RULE_content;
    }

	declara = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaraContext);
	    } else {
	        return this.getTypedRuleContext(DeclaraContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DixyVisitor ) {
	        return visitor.visitContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DixyParser.RULE_declara;
    }

	COMP() {
	    return this.getToken(DixyParser.COMP, 0);
	};

	ID() {
	    return this.getToken(DixyParser.ID, 0);
	};

	SC() {
	    return this.getToken(DixyParser.SC, 0);
	};

	EQU() {
	    return this.getToken(DixyParser.EQU, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DixyVisitor ) {
	        return visitor.visitDeclara(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DixyParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PARA() {
	    return this.getToken(DixyParser.PARA, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARC() {
	    return this.getToken(DixyParser.PARC, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DixyVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DixyParser.ParensContext = ParensContext;

class AddsubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	SUM() {
	    return this.getToken(DixyParser.SUM, 0);
	};

	RES() {
	    return this.getToken(DixyParser.RES, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DixyVisitor ) {
	        return visitor.visitAddsub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DixyParser.AddsubContext = AddsubContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ASTE() {
	    return this.getToken(DixyParser.ASTE, 0);
	};

	DIA() {
	    return this.getToken(DixyParser.DIA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DixyVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DixyParser.MulDivContext = MulDivContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(DixyParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DixyVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DixyParser.IdContext = IdContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(DixyParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DixyVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DixyParser.IntContext = IntContext;


DixyParser.MainContext = MainContext; 
DixyParser.ContentContext = ContentContext; 
DixyParser.DeclaraContext = DeclaraContext; 
DixyParser.ExprContext = ExprContext; 
