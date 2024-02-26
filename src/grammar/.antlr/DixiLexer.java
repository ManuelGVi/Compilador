// Generated from c://Users//neoge//Desktop//automatas//Compilador//src//grammar//Dixy.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class DixiLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LETS=1, RUN=2, COMP=3, ASTE=4, DIA=5, RES=6, SUM=7, EQU=8, LLAVEA=9, LLAVEC=10, 
		DOT=11, ID=12, INT=13, PARA=14, PARC=15, SC=16, NL=17, WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LETS", "RUN", "COMP", "ASTE", "DIA", "RES", "SUM", "EQU", "LLAVEA", 
			"LLAVEC", "DOT", "ID", "INT", "PARA", "PARC", "SC", "NL", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'lets'", "'run'", "'comp'", "'*'", "'/'", "'-'", "'+'", "'='", 
			"'{'", "'}'", "'.'", null, null, "'('", "')'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LETS", "RUN", "COMP", "ASTE", "DIA", "RES", "SUM", "EQU", "LLAVEA", 
			"LLAVEC", "DOT", "ID", "INT", "PARA", "PARC", "SC", "NL", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public DixiLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Dixy.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0012_\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0004\u000bE\b"+
		"\u000b\u000b\u000b\f\u000bF\u0001\f\u0004\fJ\b\f\u000b\f\f\fK\u0001\r"+
		"\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0003"+
		"\u0010U\b\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0004\u0011Z\b\u0011"+
		"\u000b\u0011\f\u0011[\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d"+
		"\u000f\u001f\u0010!\u0011#\u0012\u0001\u0000\u0003\u0002\u0000AZaz\u0001"+
		"\u000009\u0003\u0000\t\n\r\r  b\u0000\u0001\u0001\u0000\u0000\u0000\u0000"+
		"\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000"+
		"\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b"+
		"\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001"+
		"\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001"+
		"\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001"+
		"\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001"+
		"\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001"+
		"\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000"+
		"\u0000\u0001%\u0001\u0000\u0000\u0000\u0003*\u0001\u0000\u0000\u0000\u0005"+
		".\u0001\u0000\u0000\u0000\u00073\u0001\u0000\u0000\u0000\t5\u0001\u0000"+
		"\u0000\u0000\u000b7\u0001\u0000\u0000\u0000\r9\u0001\u0000\u0000\u0000"+
		"\u000f;\u0001\u0000\u0000\u0000\u0011=\u0001\u0000\u0000\u0000\u0013?"+
		"\u0001\u0000\u0000\u0000\u0015A\u0001\u0000\u0000\u0000\u0017D\u0001\u0000"+
		"\u0000\u0000\u0019I\u0001\u0000\u0000\u0000\u001bM\u0001\u0000\u0000\u0000"+
		"\u001dO\u0001\u0000\u0000\u0000\u001fQ\u0001\u0000\u0000\u0000!T\u0001"+
		"\u0000\u0000\u0000#Y\u0001\u0000\u0000\u0000%&\u0005l\u0000\u0000&\'\u0005"+
		"e\u0000\u0000\'(\u0005t\u0000\u0000()\u0005s\u0000\u0000)\u0002\u0001"+
		"\u0000\u0000\u0000*+\u0005r\u0000\u0000+,\u0005u\u0000\u0000,-\u0005n"+
		"\u0000\u0000-\u0004\u0001\u0000\u0000\u0000./\u0005c\u0000\u0000/0\u0005"+
		"o\u0000\u000001\u0005m\u0000\u000012\u0005p\u0000\u00002\u0006\u0001\u0000"+
		"\u0000\u000034\u0005*\u0000\u00004\b\u0001\u0000\u0000\u000056\u0005/"+
		"\u0000\u00006\n\u0001\u0000\u0000\u000078\u0005-\u0000\u00008\f\u0001"+
		"\u0000\u0000\u00009:\u0005+\u0000\u0000:\u000e\u0001\u0000\u0000\u0000"+
		";<\u0005=\u0000\u0000<\u0010\u0001\u0000\u0000\u0000=>\u0005{\u0000\u0000"+
		">\u0012\u0001\u0000\u0000\u0000?@\u0005}\u0000\u0000@\u0014\u0001\u0000"+
		"\u0000\u0000AB\u0005.\u0000\u0000B\u0016\u0001\u0000\u0000\u0000CE\u0007"+
		"\u0000\u0000\u0000DC\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000"+
		"FD\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000G\u0018\u0001\u0000"+
		"\u0000\u0000HJ\u0007\u0001\u0000\u0000IH\u0001\u0000\u0000\u0000JK\u0001"+
		"\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000\u0000"+
		"L\u001a\u0001\u0000\u0000\u0000MN\u0005(\u0000\u0000N\u001c\u0001\u0000"+
		"\u0000\u0000OP\u0005)\u0000\u0000P\u001e\u0001\u0000\u0000\u0000QR\u0005"+
		";\u0000\u0000R \u0001\u0000\u0000\u0000SU\u0005\r\u0000\u0000TS\u0001"+
		"\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000"+
		"VW\u0005\n\u0000\u0000W\"\u0001\u0000\u0000\u0000XZ\u0007\u0002\u0000"+
		"\u0000YX\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000[Y\u0001\u0000"+
		"\u0000\u0000[\\\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0006"+
		"\u0011\u0000\u0000^$\u0001\u0000\u0000\u0000\u0005\u0000FKT[\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}