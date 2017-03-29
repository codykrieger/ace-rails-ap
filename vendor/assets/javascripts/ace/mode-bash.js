define('ace/mode/bash_highlight_rules', ['require', 'exports', 'module' , 'ace/lib/oop', 'ace/lib/lang', 'ace/mode/text_highlight_rules', ], function(require, exports, module) {

    var oop = require("../lib/oop");
    var lang = require("../lib/lang");
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var bashHighlightRules = function() {

        var builtinFunctions = lang.arrayToMap(
            ("aclocal|aconnect|aplay|apm|apmsleep|apropos|ar|arch|arecord|as|as86|autoconf|autoheader|automake|awk|awk|basename|bash|bc|bison|bunzip2|bzcat|bzcmp|bzdiff|bzegrep|bzfgrep|bzgrep|bzip2|bzip2recover|bzless|bzmore|c++|cal|cat|cat|cc|cd-read|cdda2wav|cdparanoia|cdrdao|cdrecord|chattr|chfn|chgrp|chgrp|chmod|chmod|chown|chown|chroot|chsh|chvt|clear|cmp|co|col|comm|cp|cp|cpio|cpp|cut|date|dc|dcop|dd|dd|deallocvt|df|df|diff|diff3|dir|dir|dircolors|dircolors|directomatic|dirname|dmesg|dnsdomainname|domainname|du|du|dumpkeys|echo|ed|egrep|env|expr|false|fbset|fgconsole|fgrep|file|find|flex|flex++|fmt|free|ftp|funzip|fuser|fuser|g++|gawk|gawk|gc|gcc|gdb|getent|getkeycodes|getopt|gettext|gettextize|gimp|gimp-remote|gimptool|gmake|gocr|grep|groups|gs|gunzip|gzexe|gzip|head|hexdump|hostname|id|igawk|install|install|join|kbd_mode|kbdrate|kdialog|kfile|kill|killall|killall|last|lastb|ld|ld86|ldd|less|lex|link|ln|ln|loadkeys|loadunimap|locate|lockfile|login|logname|lp|lpr|ls|ls|lsattr|lsmod|lsmod.old|lynx|m4|make|man|mapscrn|mesg|mkdir|mkdir|mkfifo|mknod|mknod|mktemp|more|mount|msgfmt|mv|mv|namei|nano|nasm|nawk|netstat|nice|nisdomainname|nl|nm|nm86|nmap|nohup|nop|od|openvt|passwd|patch|pcregrep|pcretest|perl|perror|pgawk|pidof|pidof|ping|pr|printf|procmail|prune|ps|ps2ascii|ps2epsi|ps2frag|ps2pdf|ps2ps|psbook|psmerge|psnup|psresize|psselect|pstops|pstree|pwd|rbash|rcs|readlink|red|resizecons|rev|rm|rm|rmdir|run-parts|sash|scp|sed|sed|seq|setfont|setkeycodes|setleds|setmetamode|setserial|setterm|sh|showkey|shred|shred|size|size86|skill|sleep|slogin|snice|sort|sox|split|ssed|ssh|ssh-add|ssh-agent|ssh-keygen|ssh-keyscan|stat|stat|strings|strip|stty|su|sudo|suidperl|sum|sync|tac|tail|tar|tee|tempfile|test|touch|tr|true|umount|uname|unicode_start|unicode_stop|uniq|unlink|unlink|unzip|updatedb|updmap|uptime|users|utmpdump|uuidgen|vdir|vmstat|w|wall|wc|wc|wget|whatis|whereis|which|who|whoami|write|xargs|xhost|xmodmap|xset|yacc|yes|ypdomainname|zcat|zcmp|zdiff|zegrep|zfgrep|zforce|zgrep|zip|zless|zmore|znew|zsh|zsoelim").split("|")
        );

        var keywords = lang.arrayToMap(
            ("case|esac|declare|do|done|export|local|read|readonly|typeset|unset|if|elif|else|fi|for|function|in|select|set|then|until|while").split("|")
        );

        var buildinConstants = lang.arrayToMap(
            ("alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait").split("|")
        );

        var builtinVariables = lang.arrayToMap(
            ("\$DEBUG|\$defout|\$FILENAME|\$LOAD_PATH|\$SAFE|\$stdin|\$stdout|\$stderr|\$VERBOSE|" +
            "$!|root_url|flash|session|cookies|params|request|response|logger").split("|")
        );

        // regexp must not have capturing parentheses. Use (?:) instead.
        // regexps are ordered -> the first match is used

        this.$rules = {
            "start" : [
                {
                    token : "comment",
                    regex : "#.*$"
                }, {
                    token : "comment", // multi line comment
                    regex : "^\=begin$",
                    next : "comment"
                }, {
                    token : "string.regexp",
                    regex : "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
                }, {
                    token : "string", // single line
                    regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                }, {
                    token : "string", // single line
                    regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
                }, {
                    token : "string", // backtick string
                    regex : "[`](?:(?:\\\\.)|(?:[^'\\\\]))*?[`]"
                }, {
                    token : "text", // namespaces aren't symbols
                    regex : "::"
                }, {
                    token : "variable.instancce", // instance variable
                    regex : "@{1,2}(?:[a-zA-Z_]|\d)+"
                }, {
                    token : "variable.class", // class name
                    regex : "[A-Z](?:[a-zA-Z_]|\d)+"
                }, {
                    token : "string", // symbol
                    regex : "[:](?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?"
                }, {
                    token : "constant.numeric", // hex
                    regex : "0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_(?=[0-9a-fA-F]))*\\b"
                }, {
                    token : "constant.numeric", // float
                    regex : "[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?\\b"
                }, {
                    token : "constant.language.boolean",
                    regex : "(?:true|false)\\b"
                }, {
                    token : function(value) {
                        if (value == "self")
                            return "variable.language";
                        else if (keywords.hasOwnProperty(value))
                            return "keyword";
                        else if (buildinConstants.hasOwnProperty(value))
                            return "constant.language";
                        else if (builtinVariables.hasOwnProperty(value))
                            return "variable.language";
                        else if (builtinFunctions.hasOwnProperty(value))
                            return "support.function";
                        else if (value == "debugger")
                            return "invalid.deprecated";
                        else
                            return "identifier";
                    },
                    // TODO: Unicode escape sequences
                    // TODO: Unicode identifiers
                    regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                }, {
                    token : "keyword.operator",
                    regex : "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
                }, {
                    token : "lparen",
                    regex : "[[({]"
                }, {
                    token : "rparen",
                    regex : "[\\])}]"
                }, {
                    token : "text",
                    regex : "\\s+"
                }
            ],
            "comment" : [
                {
                    token : "comment", // closing comment
                    regex : "^\=end$",
                    next : "start"
                }, {
                    token : "comment", // comment spanning whole line
                    regex : ".+"
                }
            ]
        };
    };

    oop.inherits(bashHighlightRules, TextHighlightRules);

    exports.bashHighlightRules = bashHighlightRules;
});

define('ace/mode/bash', ['require', 'exports', 'module' , 'ace/lib/oop', 'ace/mode/text', 'ace/tokenizer', 'ace/mode/matching_brace_outdent', 'ace/mode/bash_highlight_rules', 'ace/range', ], function(require, exports, module) {

    var oop = require("../lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var Tokenizer = require("ace/tokenizer").Tokenizer;
    var bashHighlightRules = require("ace/mode/bash_highlight_rules").bashHighlightRules;
    var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;
    var Range = require("ace/range").Range;

    var Mode = function() {
        this.$tokenizer = new Tokenizer(new bashHighlightRules().getRules());
        this.$outdent = new MatchingBraceOutdent();
    };
    oop.inherits(Mode, TextMode);

    (function() {

        this.toggleCommentLines = function(state, doc, startRow, endRow) {
            var outdent = true;
            var outentedRows = [];
            var re = /^(\s*)#/;

            for (var i=startRow; i<= endRow; i++) {
                if (!re.test(doc.getLine(i))) {
                    outdent = false;
                    break;
                }
            }

            if (outdent) {
                var deleteRange = new Range(0, 0, 0, 0);
                for (var i=startRow; i<= endRow; i++)
                {
                    var line = doc.getLine(i);
                    var m = line.match(re);
                    deleteRange.start.row = i;
                    deleteRange.end.row = i;
                    deleteRange.end.column = m[0].length;
                    doc.replace(deleteRange, m[1]);
                }
            }
            else {
                doc.indentRows(startRow, endRow, "#");
            }
        };

        this.getNextLineIndent = function(state, line, tab) {
            var indent = this.$getIndent(line);

            var tokenizedLine = this.$tokenizer.getLineTokens(line, state);
            var tokens = tokenizedLine.tokens;
            var endState = tokenizedLine.state;

            if (tokens.length && tokens[tokens.length-1].type == "comment") {
                return indent;
            }

            if (state == "start") {
                var match = line.match(/^.*[\{\(\[]\s*$/);
                if (match) {
                    indent += tab;
                }
            }

            return indent;
        };

        this.checkOutdent = function(state, line, input) {
            return this.$outdent.checkOutdent(line, input);
        };

        this.autoOutdent = function(state, doc, row) {
            this.$outdent.autoOutdent(doc, row);
        };

    }).call(Mode.prototype);

    exports.Mode = Mode;

});

define('ace/mode/matching_brace_outdent', ['require', 'exports', 'module' , 'ace/range'], function(require, exports, module) {
    "use strict";

    var Range = require("../range").Range;

    var MatchingBraceOutdent = function() {};

    (function() {

        this.checkOutdent = function(line, input) {
            if (! /^\s+$/.test(line))
                return false;

            return /^\s*\}/.test(input);
        };

        this.autoOutdent = function(doc, row) {
            var line = doc.getLine(row);
            var match = line.match(/^(\s*\})/);

            if (!match) return 0;

            var column = match[1].length;
            var openBracePos = doc.findMatchingBracket({row: row, column: column});

            if (!openBracePos || openBracePos.row == row) return 0;

            var indent = this.$getIndent(doc.getLine(openBracePos.row));
            doc.replace(new Range(row, 0, row, column-1), indent);
        };

        this.$getIndent = function(line) {
            var match = line.match(/^(\s+)/);
            if (match) {
                return match[1];
            }

            return "";
        };

    }).call(MatchingBraceOutdent.prototype);

    exports.MatchingBraceOutdent = MatchingBraceOutdent;
});