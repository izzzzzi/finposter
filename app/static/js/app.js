!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, (function (t, e) {
    "use strict";
    var i = [], s = t.document, n = Object.getPrototypeOf, o = i.slice, r = i.concat, a = i.push, l = i.indexOf, c = {},
        h = c.toString, u = c.hasOwnProperty, d = u.toString, p = d.call(Object), f = {}, g = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, m = function (t) {
            return null != t && t === t.window
        }, v = {type: !0, src: !0, noModule: !0};

    function _(t, e, i) {
        var n, o = (e = e || s).createElement("script");
        if (o.text = t, i) for (n in v) i[n] && (o[n] = i[n]);
        e.head.appendChild(o).parentNode.removeChild(o)
    }

    function y(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[h.call(t)] || "object" : typeof t
    }

    var b = function (t, e) {
        return new b.fn.init(t, e)
    }, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(t) {
        var e = !!t && "length" in t && t.length, i = y(t);
        return !g(t) && !m(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    b.fn = b.prototype = {
        jquery: "3.3.1", constructor: b, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = b.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return b.each(this, t)
        }, map: function (t) {
            return this.pushStack(b.map(this, (function (e, i) {
                return t.call(e, i, e)
            })))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: a, sort: i.sort, splice: i.splice
    }, b.extend = b.fn.extend = function () {
        var t, e, i, s, n, o, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || g(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = r[e], r !== (s = t[e]) && (c && s && (b.isPlainObject(s) || (n = Array.isArray(s))) ? (n ? (n = !1, o = i && Array.isArray(i) ? i : []) : o = i && b.isPlainObject(i) ? i : {}, r[e] = b.extend(c, o, s)) : void 0 !== s && (r[e] = s));
        return r
    }, b.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== h.call(t) || (e = n(t)) && ("function" != typeof (i = u.call(e, "constructor") && e.constructor) || d.call(i) !== p))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, globalEval: function (t) {
            _(t)
        }, each: function (t, e) {
            var i, s = 0;
            if (x(t)) for (i = t.length; s < i && !1 !== e.call(t[s], s, t[s]); s++) ; else for (s in t) if (!1 === e.call(t[s], s, t[s])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(w, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (x(Object(t)) ? b.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : l.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, s = 0, n = t.length; s < i; s++) t[n++] = e[s];
            return t.length = n, t
        }, grep: function (t, e, i) {
            for (var s = [], n = 0, o = t.length, r = !i; n < o; n++) !e(t[n], n) !== r && s.push(t[n]);
            return s
        }, map: function (t, e, i) {
            var s, n, o = 0, a = [];
            if (x(t)) for (s = t.length; o < s; o++) null != (n = e(t[o], o, i)) && a.push(n); else for (o in t) null != (n = e(t[o], o, i)) && a.push(n);
            return r.apply([], a)
        }, guid: 1, support: f
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = i[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (t, e) {
        c["[object " + e + "]"] = e.toLowerCase()
    }));
    var k = function (t) {
        var e, i, s, n, o, r, a, l, c, h, u, d, p, f, g, m, v, _, y, b = "sizzle" + 1 * new Date, w = t.document, x = 0,
            k = 0, C = rt(), T = rt(), D = rt(), S = function (t, e) {
                return t === e && (u = !0), 0
            }, A = {}.hasOwnProperty, $ = [], I = $.pop, P = $.push, M = $.push, E = $.slice, O = function (t, e) {
                for (var i = 0, s = t.length; i < s; i++) if (t[i] === e) return i;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            z = "\\[" + N + "*(" + L + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + N + "*\\]",
            W = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            j = new RegExp(N + "+", "g"), R = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            q = new RegExp("^" + N + "*," + N + "*"), F = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            B = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"), Y = new RegExp(W),
            U = new RegExp("^" + L + "$"), K = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            }, V = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"), tt = function (t, e, i) {
                var s = "0x" + e - 65536;
                return s != s || i ? e : s < 0 ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320)
            }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function (t, e) {
                return e ? "\0" === t ? "пїЅ" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, st = function () {
                d()
            }, nt = _t((function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }), {dir: "parentNode", next: "legend"});
        try {
            M.apply($ = E.call(w.childNodes), w.childNodes), $[w.childNodes.length].nodeType
        } catch (t) {
            M = {
                apply: $.length ? function (t, e) {
                    P.apply(t, E.call(e))
                } : function (t, e) {
                    for (var i = t.length, s = 0; t[i++] = e[s++];) ;
                    t.length = i - 1
                }
            }
        }

        function ot(t, e, s, n) {
            var o, a, c, h, u, f, v, _ = e && e.ownerDocument, x = e ? e.nodeType : 9;
            if (s = s || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return s;
            if (!n && ((e ? e.ownerDocument || e : w) !== p && d(e), e = e || p, g)) {
                if (11 !== x && (u = Q.exec(t))) if (o = u[1]) {
                    if (9 === x) {
                        if (!(c = e.getElementById(o))) return s;
                        if (c.id === o) return s.push(c), s
                    } else if (_ && (c = _.getElementById(o)) && y(e, c) && c.id === o) return s.push(c), s
                } else {
                    if (u[2]) return M.apply(s, e.getElementsByTagName(t)), s;
                    if ((o = u[3]) && i.getElementsByClassName && e.getElementsByClassName) return M.apply(s, e.getElementsByClassName(o)), s
                }
                if (i.qsa && !D[t + " "] && (!m || !m.test(t))) {
                    if (1 !== x) _ = e, v = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((h = e.getAttribute("id")) ? h = h.replace(et, it) : e.setAttribute("id", h = b), a = (f = r(t)).length; a--;) f[a] = "#" + h + " " + vt(f[a]);
                        v = f.join(","), _ = Z.test(t) && gt(e.parentNode) || e
                    }
                    if (v) try {
                        return M.apply(s, _.querySelectorAll(v)), s
                    } catch (t) {
                    } finally {
                        h === b && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(R, "$1"), e, s, n)
        }

        function rt() {
            var t = [];
            return function e(i, n) {
                return t.push(i + " ") > s.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
        }

        function at(t) {
            return t[b] = !0, t
        }

        function lt(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ct(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) s.attrHandle[i[n]] = e
        }

        function ht(t, e) {
            var i = e && t, s = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (s) return s;
            if (i) for (; i = i.nextSibling;) if (i === e) return -1;
            return t ? 1 : -1
        }

        function ut(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function dt(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function pt(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && nt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ft(t) {
            return at((function (e) {
                return e = +e, at((function (i, s) {
                    for (var n, o = t([], i.length, e), r = o.length; r--;) i[n = o[r]] && (i[n] = !(s[n] = i[n]))
                }))
            }))
        }

        function gt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        for (e in i = ot.support = {}, o = ot.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, d = ot.setDocument = function (t) {
            var e, n, r = t ? t.ownerDocument || t : w;
            return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, g = !o(p), w !== p && (n = p.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", st, !1) : n.attachEvent && n.attachEvent("onunload", st)), i.attributes = lt((function (t) {
                return t.className = "i", !t.getAttribute("className")
            })), i.getElementsByTagName = lt((function (t) {
                return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
            })), i.getElementsByClassName = G.test(p.getElementsByClassName), i.getById = lt((function (t) {
                return f.appendChild(t).id = b, !p.getElementsByName || !p.getElementsByName(b).length
            })), i.getById ? (s.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, s.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (s.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, s.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                    var i, s, n, o = e.getElementById(t);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                        for (n = e.getElementsByName(t), s = 0; o = n[s++];) if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                    }
                    return []
                }
            }), s.find.TAG = i.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, s = [], n = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[n++];) 1 === i.nodeType && s.push(i);
                    return s
                }
                return o
            }, s.find.CLASS = i.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
            }, v = [], m = [], (i.qsa = G.test(p.querySelectorAll)) && (lt((function (t) {
                f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + N + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
            })), lt((function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = p.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
            }))), (i.matchesSelector = G.test(_ = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt((function (t) {
                i.disconnectedMatch = _.call(t, "*"), _.call(t, "[s!='']:x"), v.push("!=", W)
            })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(f.compareDocumentPosition), y = e || G.test(f.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, s = e && e.parentNode;
                return t === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, S = e ? function (t, e) {
                if (t === e) return u = !0, 0;
                var s = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return s || (1 & (s = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === s ? t === p || t.ownerDocument === w && y(w, t) ? -1 : e === p || e.ownerDocument === w && y(w, e) ? 1 : h ? O(h, t) - O(h, e) : 0 : 4 & s ? -1 : 1)
            } : function (t, e) {
                if (t === e) return u = !0, 0;
                var i, s = 0, n = t.parentNode, o = e.parentNode, r = [t], a = [e];
                if (!n || !o) return t === p ? -1 : e === p ? 1 : n ? -1 : o ? 1 : h ? O(h, t) - O(h, e) : 0;
                if (n === o) return ht(t, e);
                for (i = t; i = i.parentNode;) r.unshift(i);
                for (i = e; i = i.parentNode;) a.unshift(i);
                for (; r[s] === a[s];) s++;
                return s ? ht(r[s], a[s]) : r[s] === w ? -1 : a[s] === w ? 1 : 0
            }, p) : p
        }, ot.matches = function (t, e) {
            return ot(t, null, null, e)
        }, ot.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== p && d(t), e = e.replace(B, "='$1']"), i.matchesSelector && g && !D[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                var s = _.call(t, e);
                if (s || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return s
            } catch (t) {
            }
            return ot(e, p, null, [t]).length > 0
        }, ot.contains = function (t, e) {
            return (t.ownerDocument || t) !== p && d(t), y(t, e)
        }, ot.attr = function (t, e) {
            (t.ownerDocument || t) !== p && d(t);
            var n = s.attrHandle[e.toLowerCase()],
                o = n && A.call(s.attrHandle, e.toLowerCase()) ? n(t, e, !g) : void 0;
            return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
        }, ot.escape = function (t) {
            return (t + "").replace(et, it)
        }, ot.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, ot.uniqueSort = function (t) {
            var e, s = [], n = 0, o = 0;
            if (u = !i.detectDuplicates, h = !i.sortStable && t.slice(0), t.sort(S), u) {
                for (; e = t[o++];) e === t[o] && (n = s.push(o));
                for (; n--;) t.splice(s[n], 1)
            }
            return h = null, t
        }, n = ot.getText = function (t) {
            var e, i = "", s = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += n(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else for (; e = t[s++];) i += n(e);
            return i
        }, (s = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Y.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(J, tt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = C[t + " "];
                    return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && C(t, (function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    }))
                }, ATTR: function (t, e, i) {
                    return function (s) {
                        var n = ot.attr(s, t);
                        return null == n ? "!=" === e : !e || (n += "", "=" === e ? n === i : "!=" === e ? n !== i : "^=" === e ? i && 0 === n.indexOf(i) : "*=" === e ? i && n.indexOf(i) > -1 : "$=" === e ? i && n.slice(-i.length) === i : "~=" === e ? (" " + n.replace(j, " ") + " ").indexOf(i) > -1 : "|=" === e && (n === i || n.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (t, e, i, s, n) {
                    var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === s && 0 === n ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var c, h, u, d, p, f, g = o !== r ? "nextSibling" : "previousSibling", m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(), _ = !l && !a, y = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = e; d = d[g];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? m.firstChild : m.lastChild], r && _) {
                                for (y = (p = (c = (h = (u = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (y = p = 0) || f.pop();) if (1 === d.nodeType && ++y && d === e) {
                                    h[t] = [x, p, y];
                                    break
                                }
                            } else if (_ && (y = p = (c = (h = (u = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === y) for (; (d = ++p && d && d[g] || (y = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (_ && ((h = (u = d[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [x, y]), d !== e));) ;
                            return (y -= n) === s || y % s == 0 && y / s >= 0
                        }
                    }
                }, PSEUDO: function (t, e) {
                    var i, n = s.pseudos[t] || s.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                    return n[b] ? n(e) : n.length > 1 ? (i = [t, t, "", e], s.setFilters.hasOwnProperty(t.toLowerCase()) ? at((function (t, i) {
                        for (var s, o = n(t, e), r = o.length; r--;) t[s = O(t, o[r])] = !(i[s] = o[r])
                    })) : function (t) {
                        return n(t, 0, i)
                    }) : n
                }
            },
            pseudos: {
                not: at((function (t) {
                    var e = [], i = [], s = a(t.replace(R, "$1"));
                    return s[b] ? at((function (t, e, i, n) {
                        for (var o, r = s(t, null, n, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o))
                    })) : function (t, n, o) {
                        return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                    }
                })), has: at((function (t) {
                    return function (e) {
                        return ot(t, e).length > 0
                    }
                })), contains: at((function (t) {
                    return t = t.replace(J, tt), function (e) {
                        return (e.textContent || e.innerText || n(e)).indexOf(t) > -1
                    }
                })), lang: at((function (t) {
                    return U.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(), function (e) {
                        var i;
                        do {
                            if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                })), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === f
                }, focus: function (t) {
                    return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: pt(!1), disabled: pt(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !s.pseudos.empty(t)
                }, header: function (t) {
                    return X.test(t.nodeName)
                }, input: function (t) {
                    return V.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: ft((function () {
                    return [0]
                })), last: ft((function (t, e) {
                    return [e - 1]
                })), eq: ft((function (t, e, i) {
                    return [i < 0 ? i + e : i]
                })), even: ft((function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                })), odd: ft((function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                })), lt: ft((function (t, e, i) {
                    for (var s = i < 0 ? i + e : i; --s >= 0;) t.push(s);
                    return t
                })), gt: ft((function (t, e, i) {
                    for (var s = i < 0 ? i + e : i; ++s < e;) t.push(s);
                    return t
                }))
            }
        }).pseudos.nth = s.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) s.pseudos[e] = ut(e);
        for (e in {submit: !0, reset: !0}) s.pseudos[e] = dt(e);

        function mt() {
        }

        function vt(t) {
            for (var e = 0, i = t.length, s = ""; e < i; e++) s += t[e].value;
            return s
        }

        function _t(t, e, i) {
            var s = e.dir, n = e.next, o = n || s, r = i && "parentNode" === o, a = k++;
            return e.first ? function (e, i, n) {
                for (; e = e[s];) if (1 === e.nodeType || r) return t(e, i, n);
                return !1
            } : function (e, i, l) {
                var c, h, u, d = [x, a];
                if (l) {
                    for (; e = e[s];) if ((1 === e.nodeType || r) && t(e, i, l)) return !0
                } else for (; e = e[s];) if (1 === e.nodeType || r) if (h = (u = e[b] || (e[b] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), n && n === e.nodeName.toLowerCase()) e = e[s] || e; else {
                    if ((c = h[o]) && c[0] === x && c[1] === a) return d[2] = c[2];
                    if (h[o] = d, d[2] = t(e, i, l)) return !0
                }
                return !1
            }
        }

        function yt(t) {
            return t.length > 1 ? function (e, i, s) {
                for (var n = t.length; n--;) if (!t[n](e, i, s)) return !1;
                return !0
            } : t[0]
        }

        function bt(t, e, i, s, n) {
            for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++) (o = t[a]) && (i && !i(o, s, n) || (r.push(o), c && e.push(a)));
            return r
        }

        function wt(t, e, i, s, n, o) {
            return s && !s[b] && (s = wt(s)), n && !n[b] && (n = wt(n, o)), at((function (o, r, a, l) {
                var c, h, u, d = [], p = [], f = r.length, g = o || function (t, e, i) {
                        for (var s = 0, n = e.length; s < n; s++) ot(t, e[s], i);
                        return i
                    }(e || "*", a.nodeType ? [a] : a, []), m = !t || !o && e ? g : bt(g, d, t, a, l),
                    v = i ? n || (o ? t : f || s) ? [] : r : m;
                if (i && i(m, v, a, l), s) for (c = bt(v, p), s(c, [], a, l), h = c.length; h--;) (u = c[h]) && (v[p[h]] = !(m[p[h]] = u));
                if (o) {
                    if (n || t) {
                        if (n) {
                            for (c = [], h = v.length; h--;) (u = v[h]) && c.push(m[h] = u);
                            n(null, v = [], c, l)
                        }
                        for (h = v.length; h--;) (u = v[h]) && (c = n ? O(o, u) : d[h]) > -1 && (o[c] = !(r[c] = u))
                    }
                } else v = bt(v === r ? v.splice(f, v.length) : v), n ? n(null, r, v, l) : M.apply(r, v)
            }))
        }

        function xt(t) {
            for (var e, i, n, o = t.length, r = s.relative[t[0].type], a = r || s.relative[" "], l = r ? 1 : 0, h = _t((function (t) {
                return t === e
            }), a, !0), u = _t((function (t) {
                return O(e, t) > -1
            }), a, !0), d = [function (t, i, s) {
                var n = !r && (s || i !== c) || ((e = i).nodeType ? h(t, i, s) : u(t, i, s));
                return e = null, n
            }]; l < o; l++) if (i = s.relative[t[l].type]) d = [_t(yt(d), i)]; else {
                if ((i = s.filter[t[l].type].apply(null, t[l].matches))[b]) {
                    for (n = ++l; n < o && !s.relative[t[n].type]; n++) ;
                    return wt(l > 1 && yt(d), l > 1 && vt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(R, "$1"), i, l < n && xt(t.slice(l, n)), n < o && xt(t = t.slice(n)), n < o && vt(t))
                }
                d.push(i)
            }
            return yt(d)
        }

        function kt(t, e) {
            var i = e.length > 0, n = t.length > 0, o = function (o, r, a, l, h) {
                var u, f, m, v = 0, _ = "0", y = o && [], b = [], w = c, k = o || n && s.find.TAG("*", h),
                    C = x += null == w ? 1 : Math.random() || .1, T = k.length;
                for (h && (c = r === p || r || h); _ !== T && null != (u = k[_]); _++) {
                    if (n && u) {
                        for (f = 0, r || u.ownerDocument === p || (d(u), a = !g); m = t[f++];) if (m(u, r || p, a)) {
                            l.push(u);
                            break
                        }
                        h && (x = C)
                    }
                    i && ((u = !m && u) && v--, o && y.push(u))
                }
                if (v += _, i && _ !== v) {
                    for (f = 0; m = e[f++];) m(y, b, r, a);
                    if (o) {
                        if (v > 0) for (; _--;) y[_] || b[_] || (b[_] = I.call(l));
                        b = bt(b)
                    }
                    M.apply(l, b), h && !o && b.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
                }
                return h && (x = C, c = w), y
            };
            return i ? at(o) : o
        }

        return mt.prototype = s.filters = s.pseudos, s.setFilters = new mt, r = ot.tokenize = function (t, e) {
            var i, n, o, r, a, l, c, h = T[t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (a = t, l = [], c = s.preFilter; a;) {
                for (r in i && !(n = q.exec(a)) || (n && (a = a.slice(n[0].length) || a), l.push(o = [])), i = !1, (n = F.exec(a)) && (i = n.shift(), o.push({
                    value: i,
                    type: n[0].replace(R, " ")
                }), a = a.slice(i.length)), s.filter) !(n = K[r].exec(a)) || c[r] && !(n = c[r](n)) || (i = n.shift(), o.push({
                    value: i,
                    type: r,
                    matches: n
                }), a = a.slice(i.length));
                if (!i) break
            }
            return e ? a.length : a ? ot.error(t) : T(t, l).slice(0)
        }, a = ot.compile = function (t, e) {
            var i, s = [], n = [], o = D[t + " "];
            if (!o) {
                for (e || (e = r(t)), i = e.length; i--;) (o = xt(e[i]))[b] ? s.push(o) : n.push(o);
                (o = D(t, kt(n, s))).selector = t
            }
            return o
        }, l = ot.select = function (t, e, i, n) {
            var o, l, c, h, u, d = "function" == typeof t && t, p = !n && r(t = d.selector || t);
            if (i = i || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && s.relative[l[1].type]) {
                    if (!(e = (s.find.ID(c.matches[0].replace(J, tt), e) || [])[0])) return i;
                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (o = K.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !s.relative[h = c.type]);) if ((u = s.find[h]) && (n = u(c.matches[0].replace(J, tt), Z.test(l[0].type) && gt(e.parentNode) || e))) {
                    if (l.splice(o, 1), !(t = n.length && vt(l))) return M.apply(i, n), i;
                    break
                }
            }
            return (d || a(t, p))(n, e, !g, i, !e || Z.test(t) && gt(e.parentNode) || e), i
        }, i.sortStable = b.split("").sort(S).join("") === b, i.detectDuplicates = !!u, d(), i.sortDetached = lt((function (t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
        })), lt((function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        })) || ct("type|href|height|width", (function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        })), i.attributes && lt((function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        })) || ct("value", (function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        })), lt((function (t) {
            return null == t.getAttribute("disabled")
        })) || ct(H, (function (t, e, i) {
            var s;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        })), ot
    }(t);
    b.find = k, b.expr = k.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = k.uniqueSort, b.text = k.getText, b.isXMLDoc = k.isXML, b.contains = k.contains, b.escapeSelector = k.escape;
    var C = function (t, e, i) {
        for (var s = [], n = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (n && b(t).is(i)) break;
            s.push(t)
        }
        return s
    }, T = function (t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
    }, D = b.expr.match.needsContext;

    function S(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function $(t, e, i) {
        return g(e) ? b.grep(t, (function (t, s) {
            return !!e.call(t, s, t) !== i
        })) : e.nodeType ? b.grep(t, (function (t) {
            return t === e !== i
        })) : "string" != typeof e ? b.grep(t, (function (t) {
            return l.call(e, t) > -1 !== i
        })) : b.filter(e, t, i)
    }

    b.filter = function (t, e, i) {
        var s = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === s.nodeType ? b.find.matchesSelector(s, t) ? [s] : [] : b.find.matches(t, b.grep(e, (function (t) {
            return 1 === t.nodeType
        })))
    }, b.fn.extend({
        find: function (t) {
            var e, i, s = this.length, n = this;
            if ("string" != typeof t) return this.pushStack(b(t).filter((function () {
                for (e = 0; e < s; e++) if (b.contains(n[e], this)) return !0
            })));
            for (i = this.pushStack([]), e = 0; e < s; e++) b.find(t, n[e], i);
            return s > 1 ? b.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack($(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack($(this, t || [], !0))
        }, is: function (t) {
            return !!$(this, "string" == typeof t && D.test(t) ? b(t) : t || [], !1).length
        }
    });
    var I, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function (t, e, i) {
        var n, o;
        if (!t) return this;
        if (i = i || I, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : P.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof b ? e[0] : e, b.merge(this, b.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : s, !0)), A.test(n[1]) && b.isPlainObject(e)) for (n in e) g(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (o = s.getElementById(n[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== i.ready ? i.ready(t) : t(b) : b.makeArray(t, this)
    }).prototype = b.fn, I = b(s);
    var M = /^(?:parents|prev(?:Until|All))/, E = {children: !0, contents: !0, next: !0, prev: !0};

    function O(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    b.fn.extend({
        has: function (t) {
            var e = b(t, this), i = e.length;
            return this.filter((function () {
                for (var t = 0; t < i; t++) if (b.contains(this, e[t])) return !0
            }))
        }, closest: function (t, e) {
            var i, s = 0, n = this.length, o = [], r = "string" != typeof t && b(t);
            if (!D.test(t)) for (; s < n; s++) for (i = this[s]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && b.find.matchesSelector(i, t))) {
                o.push(i);
                break
            }
            return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? l.call(b(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), b.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return C(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return C(t, "parentNode", i)
        }, next: function (t) {
            return O(t, "nextSibling")
        }, prev: function (t) {
            return O(t, "previousSibling")
        }, nextAll: function (t) {
            return C(t, "nextSibling")
        }, prevAll: function (t) {
            return C(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return C(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return C(t, "previousSibling", i)
        }, siblings: function (t) {
            return T((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return T(t.firstChild)
        }, contents: function (t) {
            return S(t, "iframe") ? t.contentDocument : (S(t, "template") && (t = t.content || t), b.merge([], t.childNodes))
        }
    }, (function (t, e) {
        b.fn[t] = function (i, s) {
            var n = b.map(this, e, i);
            return "Until" !== t.slice(-5) && (s = i), s && "string" == typeof s && (n = b.filter(s, n)), this.length > 1 && (E[t] || b.uniqueSort(n), M.test(t) && n.reverse()), this.pushStack(n)
        }
    }));
    var H = /[^\x20\t\r\n\f]+/g;

    function N(t) {
        return t
    }

    function L(t) {
        throw t
    }

    function z(t, e, i, s) {
        var n;
        try {
            t && g(n = t.promise) ? n.call(t).done(e).fail(i) : t && g(n = t.then) ? n.call(t, e, i) : e.apply(void 0, [t].slice(s))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }

    b.Callbacks = function (t) {
        t = "string" == typeof t ? function (t) {
            var e = {};
            return b.each(t.match(H) || [], (function (t, i) {
                e[i] = !0
            })), e
        }(t) : b.extend({}, t);
        var e, i, s, n, o = [], r = [], a = -1, l = function () {
            for (n = n || t.once, s = e = !0; r.length; a = -1) for (i = r.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, i = !1);
            t.memory || (i = !1), e = !1, n && (o = i ? [] : "")
        }, c = {
            add: function () {
                return o && (i && !e && (a = o.length - 1, r.push(i)), function e(i) {
                    b.each(i, (function (i, s) {
                        g(s) ? t.unique && c.has(s) || o.push(s) : s && s.length && "string" !== y(s) && e(s)
                    }))
                }(arguments), i && !e && l()), this
            }, remove: function () {
                return b.each(arguments, (function (t, e) {
                    for (var i; (i = b.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= a && a--
                })), this
            }, has: function (t) {
                return t ? b.inArray(t, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return n = r = [], o = i = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return n = r = [], i || e || (o = i = ""), this
            }, locked: function () {
                return !!n
            }, fireWith: function (t, i) {
                return n || (i = [t, (i = i || []).slice ? i.slice() : i], r.push(i), e || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!s
            }
        };
        return c
    }, b.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2], ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]],
                s = "pending", n = {
                    state: function () {
                        return s
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return n.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return b.Deferred((function (e) {
                            b.each(i, (function (i, s) {
                                var n = g(t[s[4]]) && t[s[4]];
                                o[s[1]]((function () {
                                    var t = n && n.apply(this, arguments);
                                    t && g(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[s[0] + "With"](this, n ? [t] : arguments)
                                }))
                            })), t = null
                        })).promise()
                    }, then: function (e, s, n) {
                        var o = 0;

                        function r(e, i, s, n) {
                            return function () {
                                var a = this, l = arguments, c = function () {
                                    var t, c;
                                    if (!(e < o)) {
                                        if ((t = s.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        c = t && ("object" == typeof t || "function" == typeof t) && t.then, g(c) ? n ? c.call(t, r(o, i, N, n), r(o, i, L, n)) : (o++, c.call(t, r(o, i, N, n), r(o, i, L, n), r(o, i, N, i.notifyWith))) : (s !== N && (a = void 0, l = [t]), (n || i.resolveWith)(a, l))
                                    }
                                }, h = n ? c : function () {
                                    try {
                                        c()
                                    } catch (t) {
                                        b.Deferred.exceptionHook && b.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= o && (s !== L && (a = void 0, l = [t]), i.rejectWith(a, l))
                                    }
                                };
                                e ? h() : (b.Deferred.getStackHook && (h.stackTrace = b.Deferred.getStackHook()), t.setTimeout(h))
                            }
                        }

                        return b.Deferred((function (t) {
                            i[0][3].add(r(0, t, g(n) ? n : N, t.notifyWith)), i[1][3].add(r(0, t, g(e) ? e : N)), i[2][3].add(r(0, t, g(s) ? s : L))
                        })).promise()
                    }, promise: function (t) {
                        return null != t ? b.extend(t, n) : n
                    }
                }, o = {};
            return b.each(i, (function (t, e) {
                var r = e[2], a = e[5];
                n[e[1]] = r.add, a && r.add((function () {
                    s = a
                }), i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), r.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = r.fireWith
            })), n.promise(o), e && e.call(o, o), o
        }, when: function (t) {
            var e = arguments.length, i = e, s = Array(i), n = o.call(arguments), r = b.Deferred(), a = function (t) {
                return function (i) {
                    s[t] = this, n[t] = arguments.length > 1 ? o.call(arguments) : i, --e || r.resolveWith(s, n)
                }
            };
            if (e <= 1 && (z(t, r.done(a(i)).resolve, r.reject, !e), "pending" === r.state() || g(n[i] && n[i].then))) return r.then();
            for (; i--;) z(n[i], a(i), r.reject);
            return r.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && W.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, b.readyException = function (e) {
        t.setTimeout((function () {
            throw e
        }))
    };
    var j = b.Deferred();

    function R() {
        s.removeEventListener("DOMContentLoaded", R), t.removeEventListener("load", R), b.ready()
    }

    b.fn.ready = function (t) {
        return j.then(t).catch((function (t) {
            b.readyException(t)
        })), this
    }, b.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (!0 === t ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== t && --b.readyWait > 0 || j.resolveWith(s, [b]))
        }
    }), b.ready.then = j.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? t.setTimeout(b.ready) : (s.addEventListener("DOMContentLoaded", R), t.addEventListener("load", R));
    var q = function (t, e, i, s, n, o, r) {
        var a = 0, l = t.length, c = null == i;
        if ("object" === y(i)) for (a in n = !0, i) q(t, e, a, i[a], !0, o, r); else if (void 0 !== s && (n = !0, g(s) || (r = !0), c && (r ? (e.call(t, s), e = null) : (c = e, e = function (t, e, i) {
            return c.call(b(t), i)
        })), e)) for (; a < l; a++) e(t[a], i, r ? s : s.call(t[a], a, e(t[a], i)));
        return n ? t : c ? e.call(t) : l ? e(t[0], i) : o
    }, F = /^-ms-/, B = /-([a-z])/g;

    function Y(t, e) {
        return e.toUpperCase()
    }

    function U(t) {
        return t.replace(F, "ms-").replace(B, Y)
    }

    var K = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function V() {
        this.expando = b.expando + V.uid++
    }

    V.uid = 1, V.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, K(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, i) {
            var s, n = this.cache(t);
            if ("string" == typeof e) n[U(e)] = i; else for (s in e) n[U(s)] = e[s];
            return n
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, s = t[this.expando];
            if (void 0 !== s) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in s ? [e] : e.match(H) || []).length;
                    for (; i--;) delete s[e[i]]
                }
                (void 0 === e || b.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !b.isEmptyObject(e)
        }
    };
    var X = new V, G = new V, Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

    function J(t, e, i) {
        var s;
        if (void 0 === i && 1 === t.nodeType) if (s = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(s))) {
            try {
                i = function (t) {
                    return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Q.test(t) ? JSON.parse(t) : t)
                }(i)
            } catch (t) {
            }
            G.set(t, e, i)
        } else i = void 0;
        return i
    }

    b.extend({
        hasData: function (t) {
            return G.hasData(t) || X.hasData(t)
        }, data: function (t, e, i) {
            return G.access(t, e, i)
        }, removeData: function (t, e) {
            G.remove(t, e)
        }, _data: function (t, e, i) {
            return X.access(t, e, i)
        }, _removeData: function (t, e) {
            X.remove(t, e)
        }
    }), b.fn.extend({
        data: function (t, e) {
            var i, s, n, o = this[0], r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (n = G.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && 0 === (s = r[i].name).indexOf("data-") && (s = U(s.slice(5)), J(o, s, n[s]));
                    X.set(o, "hasDataAttrs", !0)
                }
                return n
            }
            return "object" == typeof t ? this.each((function () {
                G.set(this, t)
            })) : q(this, (function (e) {
                var i;
                if (o && void 0 === e) {
                    if (void 0 !== (i = G.get(o, t))) return i;
                    if (void 0 !== (i = J(o, t))) return i
                } else this.each((function () {
                    G.set(this, t, e)
                }))
            }), null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each((function () {
                G.remove(this, t)
            }))
        }
    }), b.extend({
        queue: function (t, e, i) {
            var s;
            if (t) return e = (e || "fx") + "queue", s = X.get(t, e), i && (!s || Array.isArray(i) ? s = X.access(t, e, b.makeArray(i)) : s.push(i)), s || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = b.queue(t, e), s = i.length, n = i.shift(), o = b._queueHooks(t, e);
            "inprogress" === n && (n = i.shift(), s--), n && ("fx" === e && i.unshift("inprogress"), delete o.stop, n.call(t, (function () {
                b.dequeue(t, e)
            }), o)), !s && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return X.get(t, i) || X.access(t, i, {
                empty: b.Callbacks("once memory").add((function () {
                    X.remove(t, [e + "queue", i])
                }))
            })
        }
    }), b.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? b.queue(this[0], t) : void 0 === e ? this : this.each((function () {
                var i = b.queue(this, t, e);
                b._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && b.dequeue(this, t)
            }))
        }, dequeue: function (t) {
            return this.each((function () {
                b.dequeue(this, t)
            }))
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, s = 1, n = b.Deferred(), o = this, r = this.length, a = function () {
                --s || n.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) (i = X.get(o[r], t + "queueHooks")) && i.empty && (s++, i.empty.add(a));
            return a(), n.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"], st = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && b.contains(t.ownerDocument, t) && "none" === b.css(t, "display")
        }, nt = function (t, e, i, s) {
            var n, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            for (o in n = i.apply(t, s || []), e) t.style[o] = r[o];
            return n
        };

    function ot(t, e, i, s) {
        var n, o, r = 20, a = s ? function () {
                return s.cur()
            } : function () {
                return b.css(t, e, "")
            }, l = a(), c = i && i[3] || (b.cssNumber[e] ? "" : "px"),
            h = (b.cssNumber[e] || "px" !== c && +l) && et.exec(b.css(t, e));
        if (h && h[3] !== c) {
            for (l /= 2, c = c || h[3], h = +l || 1; r--;) b.style(t, e, h + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), h /= o;
            h *= 2, b.style(t, e, h + c), i = i || []
        }
        return i && (h = +h || +l || 0, n = i[1] ? h + (i[1] + 1) * i[2] : +i[2], s && (s.unit = c, s.start = h, s.end = n)), n
    }

    var rt = {};

    function at(t) {
        var e, i = t.ownerDocument, s = t.nodeName, n = rt[s];
        return n || (e = i.body.appendChild(i.createElement(s)), n = b.css(e, "display"), e.parentNode.removeChild(e), "none" === n && (n = "block"), rt[s] = n, n)
    }

    function lt(t, e) {
        for (var i, s, n = [], o = 0, r = t.length; o < r; o++) (s = t[o]).style && (i = s.style.display, e ? ("none" === i && (n[o] = X.get(s, "display") || null, n[o] || (s.style.display = "")), "" === s.style.display && st(s) && (n[o] = at(s))) : "none" !== i && (n[o] = "none", X.set(s, "display", i)));
        for (o = 0; o < r; o++) null != n[o] && (t[o].style.display = n[o]);
        return t
    }

    b.fn.extend({
        show: function () {
            return lt(this, !0)
        }, hide: function () {
            return lt(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
                st(this) ? b(this).show() : b(this).hide()
            }))
        }
    });
    var ct = /^(?:checkbox|radio)$/i, ht = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ut = /^$|^module$|\/(?:java|ecma)script/i,
        dt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pt(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && S(t, e) ? b.merge([t], i) : i
    }

    function ft(t, e) {
        for (var i = 0, s = t.length; i < s; i++) X.set(t[i], "globalEval", !e || X.get(e[i], "globalEval"))
    }

    dt.optgroup = dt.option, dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead, dt.th = dt.td;
    var gt = /<|&#?\w+;/;

    function mt(t, e, i, s, n) {
        for (var o, r, a, l, c, h, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++) if ((o = t[p]) || 0 === o) if ("object" === y(o)) b.merge(d, o.nodeType ? [o] : o); else if (gt.test(o)) {
            for (r = r || u.appendChild(e.createElement("div")), a = (ht.exec(o) || ["", ""])[1].toLowerCase(), l = dt[a] || dt._default, r.innerHTML = l[1] + b.htmlPrefilter(o) + l[2], h = l[0]; h--;) r = r.lastChild;
            b.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
        } else d.push(e.createTextNode(o));
        for (u.textContent = "", p = 0; o = d[p++];) if (s && b.inArray(o, s) > -1) n && n.push(o); else if (c = b.contains(o.ownerDocument, o), r = pt(u.appendChild(o), "script"), c && ft(r), i) for (h = 0; o = r[h++];) ut.test(o.type || "") && i.push(o);
        return u
    }

    !function () {
        var t = s.createDocumentFragment().appendChild(s.createElement("div")), e = s.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var vt = s.documentElement, _t = /^key/, yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        bt = /^([^.]*)(?:\.(.+)|)/;

    function wt() {
        return !0
    }

    function xt() {
        return !1
    }

    function kt() {
        try {
            return s.activeElement
        } catch (t) {
        }
    }

    function Ct(t, e, i, s, n, o) {
        var r, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (s = s || i, i = void 0), e) Ct(t, a, i, s, e[a], o);
            return t
        }
        if (null == s && null == n ? (n = i, s = i = void 0) : null == n && ("string" == typeof i ? (n = s, s = void 0) : (n = s, s = i, i = void 0)), !1 === n) n = xt; else if (!n) return t;
        return 1 === o && (r = n, (n = function (t) {
            return b().off(t), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = b.guid++)), t.each((function () {
            b.event.add(this, e, n, s, i)
        }))
    }

    b.event = {
        global: {}, add: function (t, e, i, s, n) {
            var o, r, a, l, c, h, u, d, p, f, g, m = X.get(t);
            if (m) for (i.handler && (i = (o = i).handler, n = o.selector), n && b.find.matchesSelector(vt, n), i.guid || (i.guid = b.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function (e) {
                return void 0 !== b && b.event.triggered !== e.type ? b.event.dispatch.apply(t, arguments) : void 0
            }), c = (e = (e || "").match(H) || [""]).length; c--;) p = g = (a = bt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = b.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, u = b.event.special[p] || {}, h = b.extend({
                type: p,
                origType: g,
                data: s,
                handler: i,
                guid: i.guid,
                selector: n,
                needsContext: n && b.expr.match.needsContext.test(n),
                namespace: f.join(".")
            }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, s, f, r) || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), n ? d.splice(d.delegateCount++, 0, h) : d.push(h), b.event.global[p] = !0)
        }, remove: function (t, e, i, s, n) {
            var o, r, a, l, c, h, u, d, p, f, g, m = X.hasData(t) && X.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(H) || [""]).length; c--;) if (p = g = (a = bt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                    for (u = b.event.special[p] || {}, d = l[p = (s ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) h = d[o], !n && g !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || s && s !== h.selector && ("**" !== s || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                    r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || b.removeEvent(t, p, m.handle), delete l[p])
                } else for (p in l) b.event.remove(t, p + e[c], i, s, !0);
                b.isEmptyObject(l) && X.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, s, n, o, r, a = b.event.fix(t), l = new Array(arguments.length),
                c = (X.get(this, "events") || {})[a.type] || [], h = b.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                for (r = b.event.handlers.call(this, a, c), e = 0; (n = r[e++]) && !a.isPropagationStopped();) for (a.currentTarget = n.elem, i = 0; (o = n.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (s = ((b.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, l)) && !1 === (a.result = s) && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var i, s, n, o, r, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                for (o = [], r = {}, i = 0; i < l; i++) void 0 === r[n = (s = e[i]).selector + " "] && (r[n] = s.needsContext ? b(n, this).index(c) > -1 : b.find(n, this, null, [c]).length), r[n] && o.push(s);
                o.length && a.push({elem: c, handlers: o})
            }
            return c = this, l < e.length && a.push({elem: c, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(b.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: g(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[b.expando] ? t : new b.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== kt() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === kt() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return S(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, b.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, b.Event = function (t, e) {
        if (!(this instanceof b.Event)) return new b.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : xt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && b.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: xt,
        isPropagationStopped: xt,
        isImmediatePropagationStopped: xt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && _t.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, b.event.addProp), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function (t, e) {
        b.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, s = this, n = t.relatedTarget, o = t.handleObj;
                return n && (n === s || b.contains(s, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    })), b.fn.extend({
        on: function (t, e, i, s) {
            return Ct(this, t, e, i, s)
        }, one: function (t, e, i, s) {
            return Ct(this, t, e, i, s, 1)
        }, off: function (t, e, i) {
            var s, n;
            if (t && t.preventDefault && t.handleObj) return s = t.handleObj, b(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
            if ("object" == typeof t) {
                for (n in t) this.off(n, e, t[n]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = xt), this.each((function () {
                b.event.remove(this, t, i, e)
            }))
        }
    });
    var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Dt = /<script|<style|<link/i, St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function $t(t, e) {
        return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && b(t).children("tbody")[0] || t
    }

    function It(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Pt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Mt(t, e) {
        var i, s, n, o, r, a, l, c;
        if (1 === e.nodeType) {
            if (X.hasData(t) && (o = X.access(t), r = X.set(e, o), c = o.events)) for (n in delete r.handle, r.events = {}, c) for (i = 0, s = c[n].length; i < s; i++) b.event.add(e, n, c[n][i]);
            G.hasData(t) && (a = G.access(t), l = b.extend({}, a), G.set(e, l))
        }
    }

    function Et(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && ct.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function Ot(t, e, i, s) {
        e = r.apply([], e);
        var n, o, a, l, c, h, u = 0, d = t.length, p = d - 1, m = e[0], v = g(m);
        if (v || d > 1 && "string" == typeof m && !f.checkClone && St.test(m)) return t.each((function (n) {
            var o = t.eq(n);
            v && (e[0] = m.call(this, n, o.html())), Ot(o, e, i, s)
        }));
        if (d && (o = (n = mt(e, t[0].ownerDocument, !1, t, s)).firstChild, 1 === n.childNodes.length && (n = o), o || s)) {
            for (l = (a = b.map(pt(n, "script"), It)).length; u < d; u++) c = n, u !== p && (c = b.clone(c, !0, !0), l && b.merge(a, pt(c, "script"))), i.call(t[u], c, u);
            if (l) for (h = a[a.length - 1].ownerDocument, b.map(a, Pt), u = 0; u < l; u++) c = a[u], ut.test(c.type || "") && !X.access(c, "globalEval") && b.contains(h, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(c.src) : _(c.textContent.replace(At, ""), h, c))
        }
        return t
    }

    function Ht(t, e, i) {
        for (var s, n = e ? b.filter(e, t) : t, o = 0; null != (s = n[o]); o++) i || 1 !== s.nodeType || b.cleanData(pt(s)), s.parentNode && (i && b.contains(s.ownerDocument, s) && ft(pt(s, "script")), s.parentNode.removeChild(s));
        return t
    }

    b.extend({
        htmlPrefilter: function (t) {
            return t.replace(Tt, "<$1></$2>")
        }, clone: function (t, e, i) {
            var s, n, o, r, a = t.cloneNode(!0), l = b.contains(t.ownerDocument, t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || b.isXMLDoc(t))) for (r = pt(a), s = 0, n = (o = pt(t)).length; s < n; s++) Et(o[s], r[s]);
            if (e) if (i) for (o = o || pt(t), r = r || pt(a), s = 0, n = o.length; s < n; s++) Mt(o[s], r[s]); else Mt(t, a);
            return (r = pt(a, "script")).length > 0 && ft(r, !l && pt(t, "script")), a
        }, cleanData: function (t) {
            for (var e, i, s, n = b.event.special, o = 0; void 0 !== (i = t[o]); o++) if (K(i)) {
                if (e = i[X.expando]) {
                    if (e.events) for (s in e.events) n[s] ? b.event.remove(i, s) : b.removeEvent(i, s, e.handle);
                    i[X.expando] = void 0
                }
                i[G.expando] && (i[G.expando] = void 0)
            }
        }
    }), b.fn.extend({
        detach: function (t) {
            return Ht(this, t, !0)
        }, remove: function (t) {
            return Ht(this, t)
        }, text: function (t) {
            return q(this, (function (t) {
                return void 0 === t ? b.text(this) : this.empty().each((function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                }))
            }), null, t, arguments.length)
        }, append: function () {
            return Ot(this, arguments, (function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
            }))
        }, prepend: function () {
            return Ot(this, arguments, (function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = $t(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            }))
        }, before: function () {
            return Ot(this, arguments, (function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            }))
        }, after: function () {
            return Ot(this, arguments, (function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            }))
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (b.cleanData(pt(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map((function () {
                return b.clone(this, t, e)
            }))
        }, html: function (t) {
            return q(this, (function (t) {
                var e = this[0] || {}, i = 0, s = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Dt.test(t) && !dt[(ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = b.htmlPrefilter(t);
                    try {
                        for (; i < s; i++) 1 === (e = this[i] || {}).nodeType && (b.cleanData(pt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }), null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return Ot(this, arguments, (function (e) {
                var i = this.parentNode;
                b.inArray(this, t) < 0 && (b.cleanData(pt(this)), i && i.replaceChild(e, this))
            }), t)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function (t, e) {
        b.fn[t] = function (t) {
            for (var i, s = [], n = b(t), o = n.length - 1, r = 0; r <= o; r++) i = r === o ? this : this.clone(!0), b(n[r])[e](i), a.apply(s, i.get());
            return this.pushStack(s)
        }
    }));
    var Nt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"), Lt = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    }, zt = new RegExp(it.join("|"), "i");

    function Wt(t, e, i) {
        var s, n, o, r, a = t.style;
        return (i = i || Lt(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || b.contains(t.ownerDocument, t) || (r = b.style(t, e)), !f.pixelBoxStyles() && Nt.test(r) && zt.test(e) && (s = a.width, n = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = s, a.minWidth = n, a.maxWidth = o)), void 0 !== r ? r + "" : r
    }

    function jt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (h) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", vt.appendChild(c).appendChild(h);
                var e = t.getComputedStyle(h);
                n = "1%" !== e.top, l = 12 === i(e.marginLeft), h.style.right = "60%", a = 36 === i(e.right), o = 36 === i(e.width), h.style.position = "absolute", r = 36 === h.offsetWidth || "absolute", vt.removeChild(c), h = null
            }
        }

        function i(t) {
            return Math.round(parseFloat(t))
        }

        var n, o, r, a, l, c = s.createElement("div"), h = s.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === h.style.backgroundClip, b.extend(f, {
            boxSizingReliable: function () {
                return e(), o
            }, pixelBoxStyles: function () {
                return e(), a
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), l
            }, scrollboxSize: function () {
                return e(), r
            }
        }))
    }();
    var Rt = /^(none|table(?!-c[ea]).+)/, qt = /^--/,
        Ft = {position: "absolute", visibility: "hidden", display: "block"},
        Bt = {letterSpacing: "0", fontWeight: "400"}, Yt = ["Webkit", "Moz", "ms"], Ut = s.createElement("div").style;

    function Kt(t) {
        var e = b.cssProps[t];
        return e || (e = b.cssProps[t] = function (t) {
            if (t in Ut) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Yt.length; i--;) if ((t = Yt[i] + e) in Ut) return t
        }(t) || t), e
    }

    function Vt(t, e, i) {
        var s = et.exec(e);
        return s ? Math.max(0, s[2] - (i || 0)) + (s[3] || "px") : e
    }

    function Xt(t, e, i, s, n, o) {
        var r = "width" === e ? 1 : 0, a = 0, l = 0;
        if (i === (s ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === i && (l += b.css(t, i + it[r], !0, n)), s ? ("content" === i && (l -= b.css(t, "padding" + it[r], !0, n)), "margin" !== i && (l -= b.css(t, "border" + it[r] + "Width", !0, n))) : (l += b.css(t, "padding" + it[r], !0, n), "padding" !== i ? l += b.css(t, "border" + it[r] + "Width", !0, n) : a += b.css(t, "border" + it[r] + "Width", !0, n));
        return !s && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
    }

    function Gt(t, e, i) {
        var s = Lt(t), n = Wt(t, e, s), o = "border-box" === b.css(t, "boxSizing", !1, s), r = o;
        if (Nt.test(n)) {
            if (!i) return n;
            n = "auto"
        }
        return r = r && (f.boxSizingReliable() || n === t.style[e]), ("auto" === n || !parseFloat(n) && "inline" === b.css(t, "display", !1, s)) && (n = t["offset" + e[0].toUpperCase() + e.slice(1)], r = !0), (n = parseFloat(n) || 0) + Xt(t, e, i || (o ? "border" : "content"), r, s, n) + "px"
    }

    function Qt(t, e, i, s, n) {
        return new Qt.prototype.init(t, e, i, s, n)
    }

    b.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = Wt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, i, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var n, o, r, a = U(e), l = qt.test(e), c = t.style;
                if (l || (e = Kt(a)), r = b.cssHooks[e] || b.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (n = r.get(t, !1, s)) ? n : c[e];
                "string" == (o = typeof i) && (n = et.exec(i)) && n[1] && (i = ot(t, e, n), o = "number"), null != i && i == i && ("number" === o && (i += n && n[3] || (b.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, s)) || (l ? c.setProperty(e, i) : c[e] = i))
            }
        },
        css: function (t, e, i, s) {
            var n, o, r, a = U(e);
            return qt.test(e) || (e = Kt(a)), (r = b.cssHooks[e] || b.cssHooks[a]) && "get" in r && (n = r.get(t, !0, i)), void 0 === n && (n = Wt(t, e, s)), "normal" === n && e in Bt && (n = Bt[e]), "" === i || i ? (o = parseFloat(n), !0 === i || isFinite(o) ? o || 0 : n) : n
        }
    }), b.each(["height", "width"], (function (t, e) {
        b.cssHooks[e] = {
            get: function (t, i, s) {
                if (i) return !Rt.test(b.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Gt(t, e, s) : nt(t, Ft, (function () {
                    return Gt(t, e, s)
                }))
            }, set: function (t, i, s) {
                var n, o = Lt(t), r = "border-box" === b.css(t, "boxSizing", !1, o), a = s && Xt(t, e, s, r, o);
                return r && f.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Xt(t, e, "border", !1, o) - .5)), a && (n = et.exec(i)) && "px" !== (n[3] || "px") && (t.style[e] = i, i = b.css(t, e)), Vt(0, i, a)
            }
        }
    })), b.cssHooks.marginLeft = jt(f.reliableMarginLeft, (function (t, e) {
        if (e) return (parseFloat(Wt(t, "marginLeft")) || t.getBoundingClientRect().left - nt(t, {marginLeft: 0}, (function () {
            return t.getBoundingClientRect().left
        }))) + "px"
    })), b.each({margin: "", padding: "", border: "Width"}, (function (t, e) {
        b.cssHooks[t + e] = {
            expand: function (i) {
                for (var s = 0, n = {}, o = "string" == typeof i ? i.split(" ") : [i]; s < 4; s++) n[t + it[s] + e] = o[s] || o[s - 2] || o[0];
                return n
            }
        }, "margin" !== t && (b.cssHooks[t + e].set = Vt)
    })), b.fn.extend({
        css: function (t, e) {
            return q(this, (function (t, e, i) {
                var s, n, o = {}, r = 0;
                if (Array.isArray(e)) {
                    for (s = Lt(t), n = e.length; r < n; r++) o[e[r]] = b.css(t, e[r], !1, s);
                    return o
                }
                return void 0 !== i ? b.style(t, e, i) : b.css(t, e)
            }), t, e, arguments.length > 1)
        }
    }), b.Tween = Qt, Qt.prototype = {
        constructor: Qt, init: function (t, e, i, s, n, o) {
            this.elem = t, this.prop = i, this.easing = n || b.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = o || (b.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = Qt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Qt.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = Qt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = b.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Qt.propHooks._default.set(this), this
        }
    }, Qt.prototype.init.prototype = Qt.prototype, Qt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = b.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                b.fx.step[t.prop] ? b.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[b.cssProps[t.prop]] && !b.cssHooks[t.prop] ? t.elem[t.prop] = t.now : b.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Qt.propHooks.scrollTop = Qt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, b.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, b.fx = Qt.prototype.init, b.fx.step = {};
    var Zt, Jt, te = /^(?:toggle|show|hide)$/, ee = /queueHooks$/;

    function ie() {
        Jt && (!1 === s.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ie) : t.setTimeout(ie, b.fx.interval), b.fx.tick())
    }

    function se() {
        return t.setTimeout((function () {
            Zt = void 0
        })), Zt = Date.now()
    }

    function ne(t, e) {
        var i, s = 0, n = {height: t};
        for (e = e ? 1 : 0; s < 4; s += 2 - e) n["margin" + (i = it[s])] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function oe(t, e, i) {
        for (var s, n = (re.tweeners[e] || []).concat(re.tweeners["*"]), o = 0, r = n.length; o < r; o++) if (s = n[o].call(i, e, t)) return s
    }

    function re(t, e, i) {
        var s, n, o = 0, r = re.prefilters.length, a = b.Deferred().always((function () {
            delete l.elem
        })), l = function () {
            if (n) return !1;
            for (var e = Zt || se(), i = Math.max(0, c.startTime + c.duration - e), s = 1 - (i / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++) c.tweens[o].run(s);
            return a.notifyWith(t, [c, s, i]), s < 1 && r ? i : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        }, c = a.promise({
            elem: t,
            props: b.extend({}, e),
            opts: b.extend(!0, {specialEasing: {}, easing: b.easing._default}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: Zt || se(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var s = b.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(s), s
            },
            stop: function (e) {
                var i = 0, s = e ? c.tweens.length : 0;
                if (n) return this;
                for (n = !0; i < s; i++) c.tweens[i].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
            }
        }), h = c.props;
        for (function (t, e) {
            var i, s, n, o, r;
            for (i in t) if (n = e[s = U(i)], o = t[i], Array.isArray(o) && (n = o[1], o = t[i] = o[0]), i !== s && (t[s] = o, delete t[i]), (r = b.cssHooks[s]) && "expand" in r) for (i in o = r.expand(o), delete t[s], o) i in t || (t[i] = o[i], e[i] = n); else e[s] = n
        }(h, c.opts.specialEasing); o < r; o++) if (s = re.prefilters[o].call(c, t, h, c.opts)) return g(s.stop) && (b._queueHooks(c.elem, c.opts.queue).stop = s.stop.bind(s)), s;
        return b.map(h, oe, c), g(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), b.fx.timer(b.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    b.Animation = b.extend(re, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return ot(i.elem, t, et.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            g(t) ? (e = t, t = ["*"]) : t = t.match(H);
            for (var i, s = 0, n = t.length; s < n; s++) i = t[s], re.tweeners[i] = re.tweeners[i] || [], re.tweeners[i].unshift(e)
        }, prefilters: [function (t, e, i) {
            var s, n, o, r, a, l, c, h, u = "width" in e || "height" in e, d = this, p = {}, f = t.style,
                g = t.nodeType && st(t), m = X.get(t, "fxshow");
            for (s in i.queue || (null == (r = b._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
                r.unqueued || a()
            }), r.unqueued++, d.always((function () {
                d.always((function () {
                    r.unqueued--, b.queue(t, "fx").length || r.empty.fire()
                }))
            }))), e) if (n = e[s], te.test(n)) {
                if (delete e[s], o = o || "toggle" === n, n === (g ? "hide" : "show")) {
                    if ("show" !== n || !m || void 0 === m[s]) continue;
                    g = !0
                }
                p[s] = m && m[s] || b.style(t, s)
            }
            if ((l = !b.isEmptyObject(e)) || !b.isEmptyObject(p)) for (s in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = X.get(t, "display")), "none" === (h = b.css(t, "display")) && (c ? h = c : (lt([t], !0), c = t.style.display || c, h = b.css(t, "display"), lt([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === b.css(t, "float") && (l || (d.done((function () {
                f.display = c
            })), null == c && (h = f.display, c = "none" === h ? "" : h)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always((function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            }))), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(t, "fxshow", {display: c}), o && (m.hidden = !g), g && lt([t], !0), d.done((function () {
                for (s in g || lt([t]), X.remove(t, "fxshow"), p) b.style(t, s, p[s])
            }))), l = oe(g ? m[s] : 0, s, d), s in m || (m[s] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (t, e) {
            e ? re.prefilters.unshift(t) : re.prefilters.push(t)
        }
    }), b.speed = function (t, e, i) {
        var s = t && "object" == typeof t ? b.extend({}, t) : {
            complete: i || !i && e || g(t) && t,
            duration: t,
            easing: i && e || e && !g(e) && e
        };
        return b.fx.off ? s.duration = 0 : "number" != typeof s.duration && (s.duration in b.fx.speeds ? s.duration = b.fx.speeds[s.duration] : s.duration = b.fx.speeds._default), null != s.queue && !0 !== s.queue || (s.queue = "fx"), s.old = s.complete, s.complete = function () {
            g(s.old) && s.old.call(this), s.queue && b.dequeue(this, s.queue)
        }, s
    }, b.fn.extend({
        fadeTo: function (t, e, i, s) {
            return this.filter(st).css("opacity", 0).show().end().animate({opacity: e}, t, i, s)
        }, animate: function (t, e, i, s) {
            var n = b.isEmptyObject(t), o = b.speed(e, i, s), r = function () {
                var e = re(this, b.extend({}, t), o);
                (n || X.get(this, "finish")) && e.stop(!0)
            };
            return r.finish = r, n || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        }, stop: function (t, e, i) {
            var s = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each((function () {
                var e = !0, n = null != t && t + "queueHooks", o = b.timers, r = X.get(this);
                if (n) r[n] && r[n].stop && s(r[n]); else for (n in r) r[n] && r[n].stop && ee.test(n) && s(r[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
                !e && i || b.dequeue(this, t)
            }))
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each((function () {
                var e, i = X.get(this), s = i[t + "queue"], n = i[t + "queueHooks"], o = b.timers, r = s ? s.length : 0;
                for (i.finish = !0, b.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) s[e] && s[e].finish && s[e].finish.call(this);
                delete i.finish
            }))
        }
    }), b.each(["toggle", "show", "hide"], (function (t, e) {
        var i = b.fn[e];
        b.fn[e] = function (t, s, n) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ne(e, !0), t, s, n)
        }
    })), b.each({
        slideDown: ne("show"),
        slideUp: ne("hide"),
        slideToggle: ne("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, (function (t, e) {
        b.fn[t] = function (t, i, s) {
            return this.animate(e, t, i, s)
        }
    })), b.timers = [], b.fx.tick = function () {
        var t, e = 0, i = b.timers;
        for (Zt = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || b.fx.stop(), Zt = void 0
    }, b.fx.timer = function (t) {
        b.timers.push(t), b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        Jt || (Jt = !0, ie())
    }, b.fx.stop = function () {
        Jt = null
    }, b.fx.speeds = {slow: 600, fast: 200, _default: 400}, b.fn.delay = function (e, i) {
        return e = b.fx && b.fx.speeds[e] || e, i = i || "fx", this.queue(i, (function (i, s) {
            var n = t.setTimeout(i, e);
            s.stop = function () {
                t.clearTimeout(n)
            }
        }))
    }, function () {
        var t = s.createElement("input"), e = s.createElement("select").appendChild(s.createElement("option"));
        t.type = "checkbox", f.checkOn = "" !== t.value, f.optSelected = e.selected, (t = s.createElement("input")).value = "t", t.type = "radio", f.radioValue = "t" === t.value
    }();
    var ae, le = b.expr.attrHandle;
    b.fn.extend({
        attr: function (t, e) {
            return q(this, b.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each((function () {
                b.removeAttr(this, t)
            }))
        }
    }), b.extend({
        attr: function (t, e, i) {
            var s, n, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? b.prop(t, e, i) : (1 === o && b.isXMLDoc(t) || (n = b.attrHooks[e.toLowerCase()] || (b.expr.match.bool.test(e) ? ae : void 0)), void 0 !== i ? null === i ? void b.removeAttr(t, e) : n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : n && "get" in n && null !== (s = n.get(t, e)) ? s : null == (s = b.find.attr(t, e)) ? void 0 : s)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!f.radioValue && "radio" === e && S(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, s = 0, n = e && e.match(H);
            if (n && 1 === t.nodeType) for (; i = n[s++];) t.removeAttribute(i)
        }
    }), ae = {
        set: function (t, e, i) {
            return !1 === e ? b.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), (function (t, e) {
        var i = le[e] || b.find.attr;
        le[e] = function (t, e, s) {
            var n, o, r = e.toLowerCase();
            return s || (o = le[r], le[r] = n, n = null != i(t, e, s) ? r : null, le[r] = o), n
        }
    }));
    var ce = /^(?:input|select|textarea|button)$/i, he = /^(?:a|area)$/i;

    function ue(t) {
        return (t.match(H) || []).join(" ")
    }

    function de(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function pe(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || []
    }

    b.fn.extend({
        prop: function (t, e) {
            return q(this, b.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each((function () {
                delete this[b.propFix[t] || t]
            }))
        }
    }), b.extend({
        prop: function (t, e, i) {
            var s, n, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && b.isXMLDoc(t) || (e = b.propFix[e] || e, n = b.propHooks[e]), void 0 !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : t[e] = i : n && "get" in n && null !== (s = n.get(t, e)) ? s : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = b.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), f.optSelected || (b.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        b.propFix[this.toLowerCase()] = this
    })), b.fn.extend({
        addClass: function (t) {
            var e, i, s, n, o, r, a, l = 0;
            if (g(t)) return this.each((function (e) {
                b(this).addClass(t.call(this, e, de(this)))
            }));
            if ((e = pe(t)).length) for (; i = this[l++];) if (n = de(i), s = 1 === i.nodeType && " " + ue(n) + " ") {
                for (r = 0; o = e[r++];) s.indexOf(" " + o + " ") < 0 && (s += o + " ");
                n !== (a = ue(s)) && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, s, n, o, r, a, l = 0;
            if (g(t)) return this.each((function (e) {
                b(this).removeClass(t.call(this, e, de(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((e = pe(t)).length) for (; i = this[l++];) if (n = de(i), s = 1 === i.nodeType && " " + ue(n) + " ") {
                for (r = 0; o = e[r++];) for (; s.indexOf(" " + o + " ") > -1;) s = s.replace(" " + o + " ", " ");
                n !== (a = ue(s)) && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t, s = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && s ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each((function (i) {
                b(this).toggleClass(t.call(this, i, de(this), e), e)
            })) : this.each((function () {
                var e, n, o, r;
                if (s) for (n = 0, o = b(this), r = pe(t); e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== i || ((e = de(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : X.get(this, "__className__") || ""))
            }))
        }, hasClass: function (t) {
            var e, i, s = 0;
            for (e = " " + t + " "; i = this[s++];) if (1 === i.nodeType && (" " + ue(de(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var fe = /\r/g;
    b.fn.extend({
        val: function (t) {
            var e, i, s, n = this[0];
            return arguments.length ? (s = g(t), this.each((function (i) {
                var n;
                1 === this.nodeType && (null == (n = s ? t.call(this, i, b(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : Array.isArray(n) && (n = b.map(n, (function (t) {
                    return null == t ? "" : t + ""
                }))), (e = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
            }))) : n ? (e = b.valHooks[n.type] || b.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(n, "value")) ? i : "string" == typeof (i = n.value) ? i.replace(fe, "") : null == i ? "" : i : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = b.find.attr(t, "value");
                    return null != e ? e : ue(b.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, i, s, n = t.options, o = t.selectedIndex, r = "select-one" === t.type, a = r ? null : [],
                        l = r ? o + 1 : n.length;
                    for (s = o < 0 ? l : r ? o : 0; s < l; s++) if (((i = n[s]).selected || s === o) && !i.disabled && (!i.parentNode.disabled || !S(i.parentNode, "optgroup"))) {
                        if (e = b(i).val(), r) return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var i, s, n = t.options, o = b.makeArray(e), r = n.length; r--;) ((s = n[r]).selected = b.inArray(b.valHooks.option.get(s), o) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), b.each(["radio", "checkbox"], (function () {
        b.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = b.inArray(b(t).val(), e) > -1
            }
        }, f.checkOn || (b.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    })), f.focusin = "onfocusin" in t;
    var ge = /^(?:focusinfocus|focusoutblur)$/, me = function (t) {
        t.stopPropagation()
    };
    b.extend(b.event, {
        trigger: function (e, i, n, o) {
            var r, a, l, c, h, d, p, f, v = [n || s], _ = u.call(e, "type") ? e.type : e,
                y = u.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = f = l = n = n || s, 3 !== n.nodeType && 8 !== n.nodeType && !ge.test(_ + b.event.triggered) && (_.indexOf(".") > -1 && (_ = (y = _.split(".")).shift(), y.sort()), h = _.indexOf(":") < 0 && "on" + _, (e = e[b.expando] ? e : new b.Event(_, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : b.makeArray(i, [e]), p = b.event.special[_] || {}, o || !p.trigger || !1 !== p.trigger.apply(n, i))) {
                if (!o && !p.noBubble && !m(n)) {
                    for (c = p.delegateType || _, ge.test(c + _) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (n.ownerDocument || s) && v.push(l.defaultView || l.parentWindow || t)
                }
                for (r = 0; (a = v[r++]) && !e.isPropagationStopped();) f = a, e.type = r > 1 ? c : p.bindType || _, (d = (X.get(a, "events") || {})[e.type] && X.get(a, "handle")) && d.apply(a, i), (d = h && a[h]) && d.apply && K(a) && (e.result = d.apply(a, i), !1 === e.result && e.preventDefault());
                return e.type = _, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), i) || !K(n) || h && g(n[_]) && !m(n) && ((l = n[h]) && (n[h] = null), b.event.triggered = _, e.isPropagationStopped() && f.addEventListener(_, me), n[_](), e.isPropagationStopped() && f.removeEventListener(_, me), b.event.triggered = void 0, l && (n[h] = l)), e.result
            }
        }, simulate: function (t, e, i) {
            var s = b.extend(new b.Event, i, {type: t, isSimulated: !0});
            b.event.trigger(s, null, e)
        }
    }), b.fn.extend({
        trigger: function (t, e) {
            return this.each((function () {
                b.event.trigger(t, e, this)
            }))
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return b.event.trigger(t, e, i, !0)
        }
    }), f.focusin || b.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
        var i = function (t) {
            b.event.simulate(e, t.target, b.event.fix(t))
        };
        b.event.special[e] = {
            setup: function () {
                var s = this.ownerDocument || this, n = X.access(s, e);
                n || s.addEventListener(t, i, !0), X.access(s, e, (n || 0) + 1)
            }, teardown: function () {
                var s = this.ownerDocument || this, n = X.access(s, e) - 1;
                n ? X.access(s, e, n) : (s.removeEventListener(t, i, !0), X.remove(s, e))
            }
        }
    }));
    var ve = t.location, _e = Date.now(), ye = /\?/;
    b.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + e), i
    };
    var be = /\[\]$/, we = /\r?\n/g, xe = /^(?:submit|button|image|reset|file)$/i,
        ke = /^(?:input|select|textarea|keygen)/i;

    function Ce(t, e, i, s) {
        var n;
        if (Array.isArray(e)) b.each(e, (function (e, n) {
            i || be.test(t) ? s(t, n) : Ce(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, s)
        })); else if (i || "object" !== y(e)) s(t, e); else for (n in e) Ce(t + "[" + n + "]", e[n], i, s)
    }

    b.param = function (t, e) {
        var i, s = [], n = function (t, e) {
            var i = g(e) ? e() : e;
            s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(t) || t.jquery && !b.isPlainObject(t)) b.each(t, (function () {
            n(this.name, this.value)
        })); else for (i in t) Ce(i, t[i], e, n);
        return s.join("&")
    }, b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map((function () {
                var t = b.prop(this, "elements");
                return t ? b.makeArray(t) : this
            })).filter((function () {
                var t = this.type;
                return this.name && !b(this).is(":disabled") && ke.test(this.nodeName) && !xe.test(t) && (this.checked || !ct.test(t))
            })).map((function (t, e) {
                var i = b(this).val();
                return null == i ? null : Array.isArray(i) ? b.map(i, (function (t) {
                    return {name: e.name, value: t.replace(we, "\r\n")}
                })) : {name: e.name, value: i.replace(we, "\r\n")}
            })).get()
        }
    });
    var Te = /%20/g, De = /#.*$/, Se = /([?&])_=[^&]*/, Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm, $e = /^(?:GET|HEAD)$/,
        Ie = /^\/\//, Pe = {}, Me = {}, Ee = "*/".concat("*"), Oe = s.createElement("a");

    function He(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var s, n = 0, o = e.toLowerCase().match(H) || [];
            if (g(i)) for (; s = o[n++];) "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(i)) : (t[s] = t[s] || []).push(i)
        }
    }

    function Ne(t, e, i, s) {
        var n = {}, o = t === Me;

        function r(a) {
            var l;
            return n[a] = !0, b.each(t[a] || [], (function (t, a) {
                var c = a(e, i, s);
                return "string" != typeof c || o || n[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            })), l
        }

        return r(e.dataTypes[0]) || !n["*"] && r("*")
    }

    function Le(t, e) {
        var i, s, n = b.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((n[i] ? t : s || (s = {}))[i] = e[i]);
        return s && b.extend(!0, t, s), t
    }

    Oe.href = ve.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ve.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ve.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ee,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": b.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? Le(Le(t, b.ajaxSettings), e) : Le(b.ajaxSettings, t)
        },
        ajaxPrefilter: He(Pe),
        ajaxTransport: He(Me),
        ajax: function (e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var n, o, r, a, l, c, h, u, d, p, f = b.ajaxSetup({}, i), g = f.context || f,
                m = f.context && (g.nodeType || g.jquery) ? b(g) : b.event, v = b.Deferred(),
                _ = b.Callbacks("once memory"), y = f.statusCode || {}, w = {}, x = {}, k = "canceled", C = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (h) {
                            if (!a) for (a = {}; e = Ae.exec(r);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return h ? r : null
                    }, setRequestHeader: function (t, e) {
                        return null == h && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == h && (f.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (h) C.always(t[C.status]); else for (e in t) y[e] = [y[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || k;
                        return n && n.abort(e), T(0, e), this
                    }
                };
            if (v.promise(C), f.url = ((e || f.url || ve.href) + "").replace(Ie, ve.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain) {
                c = s.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Oe.protocol + "//" + Oe.host != c.protocol + "//" + c.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = b.param(f.data, f.traditional)), Ne(Pe, f, i, C), h) return C;
            for (d in (u = b.event && f.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !$e.test(f.type), o = f.url.replace(De, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Te, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (ye.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Se, "$1"), p = (ye.test(o) ? "&" : "?") + "_=" + _e++ + p), f.url = o + p), f.ifModified && (b.lastModified[o] && C.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && C.setRequestHeader("If-None-Match", b.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(g, C, f) || h)) return C.abort();
            if (k = "abort", _.add(f.complete), C.done(f.success), C.fail(f.error), n = Ne(Me, f, i, C)) {
                if (C.readyState = 1, u && m.trigger("ajaxSend", [C, f]), h) return C;
                f.async && f.timeout > 0 && (l = t.setTimeout((function () {
                    C.abort("timeout")
                }), f.timeout));
                try {
                    h = !1, n.send(w, T)
                } catch (t) {
                    if (h) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(e, i, s, a) {
                var c, d, p, w, x, k = i;
                h || (h = !0, l && t.clearTimeout(l), n = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, s && (w = function (t, e, i) {
                    for (var s, n, o, r, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (s) for (n in a) if (a[n] && a[n].test(s)) {
                        l.unshift(n);
                        break
                    }
                    if (l[0] in i) o = l[0]; else {
                        for (n in i) {
                            if (!l[0] || t.converters[n + " " + l[0]]) {
                                o = n;
                                break
                            }
                            r || (r = n)
                        }
                        o = o || r
                    }
                    if (o) return o !== l[0] && l.unshift(o), i[o]
                }(f, C, s)), w = function (t, e, i, s) {
                    var n, o, r, a, l, c = {}, h = t.dataTypes.slice();
                    if (h[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                    for (o = h.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && s && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(r = c[l + " " + o] || c["* " + o])) for (n in c) if ((a = n.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === r ? r = c[n] : !0 !== c[n] && (o = a[0], h.unshift(a[1]));
                            break
                        }
                        if (!0 !== r) if (r && t.throws) e = r(e); else try {
                            e = r(e)
                        } catch (t) {
                            return {state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o}
                        }
                    }
                    return {state: "success", data: e}
                }(f, w, C, c), c ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (b.lastModified[o] = x), (x = C.getResponseHeader("etag")) && (b.etag[o] = x)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, d = w.data, c = !(p = w.error))) : (p = k, !e && k || (k = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (i || k) + "", c ? v.resolveWith(g, [d, k, C]) : v.rejectWith(g, [C, k, p]), C.statusCode(y), y = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : p]), _.fireWith(g, [C, k]), u && (m.trigger("ajaxComplete", [C, f]), --b.active || b.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (t, e, i) {
            return b.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return b.get(t, void 0, e, "script")
        }
    }), b.each(["get", "post"], (function (t, e) {
        b[e] = function (t, i, s, n) {
            return g(i) && (n = n || s, s = i, i = void 0), b.ajax(b.extend({
                url: t,
                type: e,
                dataType: n,
                data: i,
                success: s
            }, b.isPlainObject(t) && t))
        }
    })), b._evalUrl = function (t) {
        return b.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, b.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (g(t) && (t = t.call(this[0])), e = b(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            })).append(this)), this
        }, wrapInner: function (t) {
            return g(t) ? this.each((function (e) {
                b(this).wrapInner(t.call(this, e))
            })) : this.each((function () {
                var e = b(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            }))
        }, wrap: function (t) {
            var e = g(t);
            return this.each((function (i) {
                b(this).wrapAll(e ? t.call(this, i) : t)
            }))
        }, unwrap: function (t) {
            return this.parent(t).not("body").each((function () {
                b(this).replaceWith(this.childNodes)
            })), this
        }
    }), b.expr.pseudos.hidden = function (t) {
        return !b.expr.pseudos.visible(t)
    }, b.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, b.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var ze = {0: 200, 1223: 204}, We = b.ajaxSettings.xhr();
    f.cors = !!We && "withCredentials" in We, f.ajax = We = !!We, b.ajaxTransport((function (e) {
        var i, s;
        if (f.cors || We && !e.crossDomain) return {
            send: function (n, o) {
                var r, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
                for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) a.setRequestHeader(r, n[r]);
                i = function (t) {
                    return function () {
                        i && (i = s = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(ze[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), s = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = s : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout((function () {
                        i && s()
                    }))
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            }, abort: function () {
                i && i()
            }
        }
    })), b.ajaxPrefilter((function (t) {
        t.crossDomain && (t.contents.script = !1)
    })), b.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return b.globalEval(t), t
            }
        }
    }), b.ajaxPrefilter("script", (function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    })), b.ajaxTransport("script", (function (t) {
        var e, i;
        if (t.crossDomain) return {
            send: function (n, o) {
                e = b("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                    e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                }), s.head.appendChild(e[0])
            }, abort: function () {
                i && i()
            }
        }
    }));
    var je = [], Re = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = je.pop() || b.expando + "_" + _e++;
            return this[t] = !0, t
        }
    }), b.ajaxPrefilter("json jsonp", (function (e, i, s) {
        var n, o, r,
            a = !1 !== e.jsonp && (Re.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Re, "$1" + n) : !1 !== e.jsonp && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
            return r || b.error(n + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = t[n], t[n] = function () {
            r = arguments
        }, s.always((function () {
            void 0 === o ? b(t).removeProp(n) : t[n] = o, e[n] && (e.jsonpCallback = i.jsonpCallback, je.push(n)), r && g(o) && o(r[0]), r = o = void 0
        })), "script"
    })), f.createHTMLDocument = function () {
        var t = s.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), b.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (f.createHTMLDocument ? ((n = (e = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, e.head.appendChild(n)) : e = s), r = !i && [], (o = A.exec(t)) ? [e.createElement(o[1])] : (o = mt([t], e, r), r && r.length && b(r).remove(), b.merge([], o.childNodes)));
        var n, o, r
    }, b.fn.load = function (t, e, i) {
        var s, n, o, r = this, a = t.indexOf(" ");
        return a > -1 && (s = ue(t.slice(a)), t = t.slice(0, a)), g(e) ? (i = e, e = void 0) : e && "object" == typeof e && (n = "POST"), r.length > 0 && b.ajax({
            url: t,
            type: n || "GET",
            dataType: "html",
            data: e
        }).done((function (t) {
            o = arguments, r.html(s ? b("<div>").append(b.parseHTML(t)).find(s) : t)
        })).always(i && function (t, e) {
            r.each((function () {
                i.apply(this, o || [t.responseText, e, t])
            }))
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
        b.fn[e] = function (t) {
            return this.on(e, t)
        }
    })), b.expr.pseudos.animated = function (t) {
        return b.grep(b.timers, (function (e) {
            return t === e.elem
        })).length
    }, b.offset = {
        setOffset: function (t, e, i) {
            var s, n, o, r, a, l, c = b.css(t, "position"), h = b(t), u = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = b.css(t, "top"), l = b.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (r = (s = h.position()).top, n = s.left) : (r = parseFloat(o) || 0, n = parseFloat(l) || 0), g(e) && (e = e.call(t, i, b.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + n), "using" in e ? e.using.call(t, u) : h.css(u)
        }
    }, b.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each((function (e) {
                b.offset.setOffset(this, t, e)
            }));
            var e, i, s = this[0];
            return s ? s.getClientRects().length ? (e = s.getBoundingClientRect(), i = s.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i, s = this[0], n = {top: 0, left: 0};
                if ("fixed" === b.css(s, "position")) e = s.getBoundingClientRect(); else {
                    for (e = this.offset(), i = s.ownerDocument, t = s.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === b.css(t, "position");) t = t.parentNode;
                    t && t !== s && 1 === t.nodeType && ((n = b(t).offset()).top += b.css(t, "borderTopWidth", !0), n.left += b.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - n.top - b.css(s, "marginTop", !0),
                    left: e.left - n.left - b.css(s, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map((function () {
                for (var t = this.offsetParent; t && "static" === b.css(t, "position");) t = t.offsetParent;
                return t || vt
            }))
        }
    }), b.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (t, e) {
        var i = "pageYOffset" === e;
        b.fn[t] = function (s) {
            return q(this, (function (t, s, n) {
                var o;
                if (m(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === n) return o ? o[e] : t[s];
                o ? o.scrollTo(i ? o.pageXOffset : n, i ? n : o.pageYOffset) : t[s] = n
            }), t, s, arguments.length)
        }
    })), b.each(["top", "left"], (function (t, e) {
        b.cssHooks[e] = jt(f.pixelPosition, (function (t, i) {
            if (i) return i = Wt(t, e), Nt.test(i) ? b(t).position()[e] + "px" : i
        }))
    })), b.each({Height: "height", Width: "width"}, (function (t, e) {
        b.each({padding: "inner" + t, content: e, "": "outer" + t}, (function (i, s) {
            b.fn[s] = function (n, o) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    a = i || (!0 === n || !0 === o ? "margin" : "border");
                return q(this, (function (e, i, n) {
                    var o;
                    return m(e) ? 0 === s.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? b.css(e, i, a) : b.style(e, i, n, a)
                }), e, r ? n : void 0, r)
            }
        }))
    })), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (t, e) {
        b.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    })), b.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), b.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, s) {
            return this.on(e, t, i, s)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), b.proxy = function (t, e) {
        var i, s, n;
        if ("string" == typeof e && (i = t[e], e = t, t = i), g(t)) return s = o.call(arguments, 2), (n = function () {
            return t.apply(e || this, s.concat(o.call(arguments)))
        }).guid = t.guid = t.guid || b.guid++, n
    }, b.holdReady = function (t) {
        t ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = S, b.isFunction = g, b.isWindow = m, b.camelCase = U, b.type = y, b.now = Date.now, b.isNumeric = function (t) {
        var e = b.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return b
    }));
    var qe = t.jQuery, Fe = t.$;
    return b.noConflict = function (e) {
        return t.$ === b && (t.$ = Fe), e && t.jQuery === b && (t.jQuery = qe), b
    }, e || (t.jQuery = t.$ = b), b
})), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function (t) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (i, s) {
            var n, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, n = t(i).data("slick") || {}, o.options = t.extend({}, o.defaults, s, n), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = e++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, s) {
        var n = this;
        if ("boolean" == typeof i) s = i, i = null; else if (i < 0 || i >= n.slideCount) return !1;
        n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : s ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : !0 === s ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each((function (e, i) {
            t(i).attr("data-slick-index", e)
        })), n.$slidesCache = n.$slides, n.reinit()
    }, e.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({height: e}, t.options.speed)
        }
    }, e.prototype.animateSlide = function (e, i) {
        var s = {}, n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({left: e}, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({top: e}, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), t({animStart: n.currentLeft}).animate({animStart: e}, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function (t) {
                t = Math.ceil(t), !1 === n.options.vertical ? (s[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(s))
            },
            complete: function () {
                i && i.call()
            }
        })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? s[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(s), i && setTimeout((function () {
            n.disableTransition(), i.call()
        }), n.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e
    }, e.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each((function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        }))
    }, e.prototype.applyTransition = function (t) {
        var e = this, i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var t = this, e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, i, s = this;
        if (!0 === s.options.dots) {
            for (s.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(s.options.dotsClass), e = 0; e <= s.getDotCount(); e += 1) i.append(t("<li />").append(s.options.customPaging.call(this, s, e)));
            s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each((function (e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        })), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var t, e, i, s, n, o, r, a = this;
        if (s = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(o.length / r), t = 0; t < n; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var h = t * r + (e * a.options.slidesPerRow + i);
                        o.get(h) && c.appendChild(o.get(h))
                    }
                    l.appendChild(c)
                }
                s.appendChild(l)
            }
            a.$slider.empty().append(s), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, i) {
        var s, n, o, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? o = c : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (s in n = null, r.breakpoints) r.breakpoints.hasOwnProperty(s) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[s] && (n = r.breakpoints[s]) : o > r.breakpoints[s] && (n = r.breakpoints[s]));
            null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = n), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, e.prototype.changeSlide = function (e, i) {
        var s, n, o = this, r = t(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), s = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case"previous":
                n = 0 === s ? o.options.slidesToScroll : o.options.slidesToShow - s, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, i);
                break;
            case"next":
                n = 0 === s ? o.options.slidesToScroll : s, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, i);
                break;
            case"index":
                var a = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(a), !1, i), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1]; else for (var s in e) {
            if (t < e[s]) {
                t = i;
                break
            }
            i = e[s]
        }
        return t
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function () {
            t(this).attr("style", t(this).data("originalStyling"))
        })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function (t) {
        var e = this, i = {};
        i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout((function () {
            i.disableTransition(t), e.call()
        }), i.options.speed))
    }, e.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function (i) {
            i.stopImmediatePropagation();
            var s = t(this);
            setTimeout((function () {
                e.options.pauseOnFocus && (e.focussed = s.is(":focus"), e.autoPlay())
            }), 0)
        }))
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var t = this, e = 0, i = 0, s = 0;
        if (!0 === t.options.infinite) if (t.slideCount <= t.options.slidesToShow) ++s; else for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) s = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return s - 1
    }, e.prototype.getLeft = function (t) {
        var e, i, s, n, o = this, r = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, n = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? n = -1.5 : 1 === o.options.slidesToShow && (n = -2)), r = i * o.options.slidesToShow * n), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, !0 === o.options.variableWidth && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === o.options.centerMode && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (o.$list.width() - s.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, e.prototype.getNavigableIndexes = function () {
        var t, e = this, i = 0, s = 0, n = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, s = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) n.push(i), i = s + e.options.slidesToScroll, s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, i, s = this;
        return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each((function (n, o) {
            if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * s.swipeLeft) return e = o, !1
        })), Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
        this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
    }, e.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, i = Math.ceil(e.slideCount / e.options.slidesToShow),
            s = e.getNavigableIndexes().filter((function (t) {
                return t >= 0 && t < e.slideCount
            }));
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function (i) {
            var n = s.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }), -1 !== n && t(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + n})
        })), e.$dots.attr("role", "tablist").find("li").each((function (n) {
            var o = s[n];
            t(this).attr({role: "presentation"}), t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + n,
                "aria-controls": "slick-slide" + e.instanceUid + o,
                "aria-label": n + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        })).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var n = e.currentSlide, o = n + e.options.slidesToShow; n < o; n++) e.$slides.eq(n).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, e.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            t("img[data-lazy]", e).each((function () {
                var e = t(this), i = t(this).attr("data-lazy"), s = t(this).attr("data-srcset"),
                    n = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    e.animate({opacity: 0}, 100, (function () {
                        s && (e.attr("srcset", s), n && e.attr("sizes", n)), e.attr("src", i).animate({opacity: 1}, 200, (function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        })), o.$slider.trigger("lazyLoaded", [o, e, i])
                    }))
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i])
                }, r.src = i
            }))
        }

        var i, s, n, o = this;
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (s = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (s = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (s = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(s + o.options.slidesToShow), !0 === o.options.fade && (s > 0 && s--, n <= o.slideCount && n++)), i = o.$slider.find(".slick-slide").slice(s, n), "anticipated" === o.options.lazyLoad) for (var r = s - 1, a = n, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) r < 0 && (r = o.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
        e(i), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i, s, n, o, r, a = this, l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), s = i.attr("data-lazy"), n = i.attr("data-srcset"), o = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            n && (i.attr("srcset", n), o && i.attr("sizes", o)), i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, s]), a.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout((function () {
                a.progressiveLazyLoad(e + 1)
            }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, s]), a.progressiveLazyLoad())
        }, r.src = s) : a.$slider.trigger("allImagesLoaded", [a])
    }, e.prototype.refresh = function (e) {
        var i, s, n = this;
        s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, {currentSlide: i}), n.init(), e || n.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, i, s, n = this, o = n.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
            for (e in n.respondTo = n.options.respondTo || "window", o) if (s = n.breakpoints.length - 1, o.hasOwnProperty(e)) {
                for (i = o[e].breakpoint; s >= 0;) n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1), s--;
                n.breakpoints.push(i), n.breakpointSettings[i] = o[e].settings
            }
            n.breakpoints.sort((function (t, e) {
                return n.options.mobileFirst ? t - e : e - t
            }))
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout((function () {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }), 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
        var s = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : s.slideCount - 1 : !0 === e ? --t : t, s.slideCount < 1 || t < 0 || t > s.slideCount - 1) return !1;
        s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.setCSS = function (t) {
        var e, i, s = this, n = {};
        !0 === s.options.rtl && (t = -t), e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px", n[s.positionProp] = t, !1 === s.transformsEnabled ? s.$slideTrack.css(n) : (n = {}, !1 === s.cssTransitions ? (n[s.animType] = "translate(" + e + ", " + i + ")", s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + e + ", " + i + ", 0px)", s.$slideTrack.css(n)))
    }, e.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, i = this;
        i.$slides.each((function (s, n) {
            e = i.slideWidth * s * -1, !0 === i.options.rtl ? t(n).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(n).css({position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
        })), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, i, s, n, o, r = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (s = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[s] = n; else if ("multiple" === o) t.each(s, (function (t, e) {
            r.options[t] = e
        })); else if ("responsive" === o) for (i in n) if ("array" !== t.type(r.options.responsive)) r.options.responsive = [n[i]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === n[i].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(n[i])
        }
        a && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function () {
        var t = this, e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, e.prototype.setSlideClasses = function (t) {
        var e, i, s, n, o = this;
        if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode) {
            var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = o.options.slidesToShow + t, i.slice(s - e + 1 + r, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = o.slideCount % o.options.slidesToShow, s = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(s - (o.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, i, s, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
            for (s = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - s; e -= 1) i = e - 1, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < s + n.slideCount; e += 1) i = e, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each((function () {
                t(this).attr("id", "")
            }))
        }
    }, e.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t
    }, e.prototype.selectHandler = function (e) {
        var i = this, s = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            n = parseInt(s.attr("data-slick-index"));
        n || (n = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n)
    }, e.prototype.slideHandler = function (t, e, i) {
        var s, n, o, r, a, l = null, c = this;
        if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t)) if (!1 === e && c.asNavFor(t), s = t, l = c.getLeft(s), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (s = c.currentSlide, !0 !== i ? c.animateSlide(r, (function () {
            c.postSlide(s)
        })) : c.postSlide(s)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (s = c.currentSlide, !0 !== i ? c.animateSlide(r, (function () {
            c.postSlide(s)
        })) : c.postSlide(s)); else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), n = s < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + s : s >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : s - c.slideCount : s, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), o = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(n, (function () {
                c.postSlide(n)
            }))) : c.postSlide(n), void c.animateHeight();
            !0 !== i ? c.animateSlide(l, (function () {
                c.postSlide(n)
            })) : c.postSlide(n)
        }
    }, e.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var t, e, i, s, n = this;
        return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(e, t), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 || s <= 360 && s >= 315 ? !1 === n.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (t) {
        var e, i, s = this;
        if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1, !1;
        if (s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), void 0 === s.touchObject.curX) return !1;
        if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (i = s.swipeDirection()) {
                case"left":
                case"down":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
            }
            "vertical" != i && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
        } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
    }, e.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case"start":
                e.swipeStart(t);
                break;
            case"move":
                e.swipeMove(t);
                break;
            case"end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function (t) {
        var e, i, s, n, o, r, a = this;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), s = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (s = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + s * n : a.swipeLeft = e + s * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = e + s * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, e.prototype.swipeStart = function (t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function () {
        var t, i, s = this, n = arguments[0], o = Array.prototype.slice.call(arguments, 1), r = s.length;
        for (t = 0; t < r; t++) if ("object" == typeof n || void 0 === n ? s[t].slick = new e(s[t], n) : i = s[t].slick[n].apply(s[t].slick, o), void 0 !== i) return i;
        return s
    }
})), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function (e, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i
    } : t(jQuery)
}((function (t) {
    var e = function () {
        if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
        var i;
        return function () {
            var t, i, s;
            e && e.requirejs || (e ? i = e : e = {}, function (e) {
                var n, o, r, a, l = {}, c = {}, h = {}, u = {}, d = Object.prototype.hasOwnProperty, p = [].slice,
                    f = /\.js$/;

                function g(t, e) {
                    return d.call(t, e)
                }

                function m(t, e) {
                    var i, s, n, o, r, a, l, c, u, d, p, g = e && e.split("/"), m = h.map, v = m && m["*"] || {};
                    if (t) {
                        for (r = (t = t.split("/")).length - 1, h.nodeIdCompat && f.test(t[r]) && (t[r] = t[r].replace(f, "")), "." === t[0].charAt(0) && g && (t = g.slice(0, g.length - 1).concat(t)), u = 0; u < t.length; u++) if ("." === (p = t[u])) t.splice(u, 1), u -= 1; else if (".." === p) {
                            if (0 === u || 1 === u && ".." === t[2] || ".." === t[u - 1]) continue;
                            u > 0 && (t.splice(u - 1, 2), u -= 2)
                        }
                        t = t.join("/")
                    }
                    if ((g || v) && m) {
                        for (u = (i = t.split("/")).length; u > 0; u -= 1) {
                            if (s = i.slice(0, u).join("/"), g) for (d = g.length; d > 0; d -= 1) if ((n = m[g.slice(0, d).join("/")]) && (n = n[s])) {
                                o = n, a = u;
                                break
                            }
                            if (o) break;
                            !l && v && v[s] && (l = v[s], c = u)
                        }
                        !o && l && (o = l, a = c), o && (i.splice(0, a, o), t = i.join("/"))
                    }
                    return t
                }

                function v(t, e) {
                    return function () {
                        var i = p.call(arguments, 0);
                        return "string" != typeof i[0] && 1 === i.length && i.push(null), o.apply(void 0, i.concat([t, e]))
                    }
                }

                function _(t) {
                    return function (e) {
                        l[t] = e
                    }
                }

                function y(t) {
                    if (g(c, t)) {
                        var e = c[t];
                        delete c[t], u[t] = !0, n.apply(void 0, e)
                    }
                    if (!g(l, t) && !g(u, t)) throw new Error("No " + t);
                    return l[t]
                }

                function b(t) {
                    var e, i = t ? t.indexOf("!") : -1;
                    return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
                }

                function w(t) {
                    return t ? b(t) : []
                }

                function x(t) {
                    return function () {
                        return h && h.config && h.config[t] || {}
                    }
                }

                r = function (t, e) {
                    var i, s, n = b(t), o = n[0], r = e[1];
                    return t = n[1], o && (i = y(o = m(o, r))), o ? t = i && i.normalize ? i.normalize(t, (s = r, function (t) {
                        return m(t, s)
                    })) : m(t, r) : (o = (n = b(t = m(t, r)))[0], t = n[1], o && (i = y(o))), {
                        f: o ? o + "!" + t : t,
                        n: t,
                        pr: o,
                        p: i
                    }
                }, a = {
                    require: function (t) {
                        return v(t)
                    }, exports: function (t) {
                        var e = l[t];
                        return void 0 !== e ? e : l[t] = {}
                    }, module: function (t) {
                        return {id: t, uri: "", exports: l[t], config: x(t)}
                    }
                }, n = function (t, e, i, s) {
                    var n, o, h, d, p, f, m, b = [], x = typeof i;
                    if (f = w(s = s || t), "undefined" === x || "function" === x) {
                        for (e = !e.length && i.length ? ["require", "exports", "module"] : e, p = 0; p < e.length; p += 1) if ("require" === (o = (d = r(e[p], f)).f)) b[p] = a.require(t); else if ("exports" === o) b[p] = a.exports(t), m = !0; else if ("module" === o) n = b[p] = a.module(t); else if (g(l, o) || g(c, o) || g(u, o)) b[p] = y(o); else {
                            if (!d.p) throw new Error(t + " missing " + o);
                            d.p.load(d.n, v(s, !0), _(o), {}), b[p] = l[o]
                        }
                        h = i ? i.apply(l[t], b) : void 0, t && (n && void 0 !== n.exports && n.exports !== l[t] ? l[t] = n.exports : void 0 === h && m || (l[t] = h))
                    } else t && (l[t] = i)
                }, t = i = o = function (t, e, i, s, l) {
                    if ("string" == typeof t) return a[t] ? a[t](e) : y(r(t, w(e)).f);
                    if (!t.splice) {
                        if ((h = t).deps && o(h.deps, h.callback), !e) return;
                        e.splice ? (t = e, e = i, i = null) : t = void 0
                    }
                    return e = e || function () {
                    }, "function" == typeof i && (i = s, s = l), s ? n(void 0, t, e, i) : setTimeout((function () {
                        n(void 0, t, e, i)
                    }), 4), o
                }, o.config = function (t) {
                    return o(t)
                }, t._defined = l, (s = function (t, e, i) {
                    if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                    e.splice || (i = e, e = []), g(l, t) || g(c, t) || (c[t] = [t, e, i])
                }).amd = {jQuery: !0}
            }(), e.requirejs = t, e.require = i, e.define = s)
        }(), e.define("almond", (function () {
        })), e.define("jquery", [], (function () {
            var e = t || $;
            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
        })), e.define("select2/utils", ["jquery"], (function (t) {
            var e = {};

            function i(t) {
                var e = t.prototype, i = [];
                for (var s in e) {
                    "function" == typeof e[s] && ("constructor" !== s && i.push(s))
                }
                return i
            }

            e.Extend = function (t, e) {
                var i = {}.hasOwnProperty;

                function s() {
                    this.constructor = t
                }

                for (var n in e) i.call(e, n) && (t[n] = e[n]);
                return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
            }, e.Decorate = function (t, e) {
                var s = i(e), n = i(t);

                function o() {
                    var i = Array.prototype.unshift, s = e.prototype.constructor.length, n = t.prototype.constructor;
                    s > 0 && (i.call(arguments, t.prototype.constructor), n = e.prototype.constructor), n.apply(this, arguments)
                }

                e.displayName = t.displayName, o.prototype = new function () {
                    this.constructor = o
                };
                for (var r = 0; r < n.length; r++) {
                    var a = n[r];
                    o.prototype[a] = t.prototype[a]
                }
                for (var l = function (t) {
                    var i = function () {
                    };
                    t in o.prototype && (i = o.prototype[t]);
                    var s = e.prototype[t];
                    return function () {
                        var t = Array.prototype.unshift;
                        return t.call(arguments, i), s.apply(this, arguments)
                    }
                }, c = 0; c < s.length; c++) {
                    var h = s[c];
                    o.prototype[h] = l(h)
                }
                return o
            };
            var s = function () {
                this.listeners = {}
            };
            s.prototype.on = function (t, e) {
                this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
            }, s.prototype.trigger = function (t) {
                var e = Array.prototype.slice, i = e.call(arguments, 1);
                this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), i[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, s.prototype.invoke = function (t, e) {
                for (var i = 0, s = t.length; i < s; i++) t[i].apply(this, e)
            }, e.Observable = s, e.generateChars = function (t) {
                for (var e = "", i = 0; i < t; i++) {
                    e += Math.floor(36 * Math.random()).toString(36)
                }
                return e
            }, e.bind = function (t, e) {
                return function () {
                    t.apply(e, arguments)
                }
            }, e._convertData = function (t) {
                for (var e in t) {
                    var i = e.split("-"), s = t;
                    if (1 !== i.length) {
                        for (var n = 0; n < i.length; n++) {
                            var o = i[n];
                            (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in s || (s[o] = {}), n == i.length - 1 && (s[o] = t[e]), s = s[o]
                        }
                        delete t[e]
                    }
                }
                return t
            }, e.hasScroll = function (e, i) {
                var s = t(i), n = i.style.overflowX, o = i.style.overflowY;
                return (n !== o || "hidden" !== o && "visible" !== o) && ("scroll" === n || "scroll" === o || (s.innerHeight() < i.scrollHeight || s.innerWidth() < i.scrollWidth))
            }, e.escapeMarkup = function (t) {
                var e = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, (function (t) {
                    return e[t]
                }))
            }, e.__cache = {};
            var n = 0;
            return e.GetUniqueElementId = function (t) {
                var i = t.getAttribute("data-select2-id");
                return null != i || (i = t.id ? "select2-data-" + t.id : "select2-data-" + (++n).toString() + "-" + e.generateChars(4), t.setAttribute("data-select2-id", i)), i
            }, e.StoreData = function (t, i, s) {
                var n = e.GetUniqueElementId(t);
                e.__cache[n] || (e.__cache[n] = {}), e.__cache[n][i] = s
            }, e.GetData = function (i, s) {
                var n = e.GetUniqueElementId(i);
                return s ? e.__cache[n] && null != e.__cache[n][s] ? e.__cache[n][s] : t(i).data(s) : e.__cache[n]
            }, e.RemoveData = function (t) {
                var i = e.GetUniqueElementId(t);
                null != e.__cache[i] && delete e.__cache[i], t.removeAttribute("data-select2-id")
            }, e.copyNonInternalCssClasses = function (t, e) {
                var i = t.getAttribute("class").trim().split(/\s+/);
                i = i.filter((function (t) {
                    return 0 === t.indexOf("select2-")
                }));
                var s = e.getAttribute("class").trim().split(/\s+/);
                s = s.filter((function (t) {
                    return 0 !== t.indexOf("select2-")
                }));
                var n = i.concat(s);
                t.setAttribute("class", n.join(" "))
            }, e
        })), e.define("select2/results", ["jquery", "./utils"], (function (t, e) {
            function i(t, e, s) {
                this.$element = t, this.data = s, this.options = e, i.__super__.constructor.call(this)
            }

            return e.Extend(i, e.Observable), i.prototype.render = function () {
                var e = t('<ul class="select2-results__options" role="listbox"></ul>');
                return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
            }, i.prototype.clear = function () {
                this.$results.empty()
            }, i.prototype.displayMessage = function (e) {
                var i = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var s = t('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                    n = this.options.get("translations").get(e.message);
                s.append(i(n(e.args))), s[0].className += " select2-results__message", this.$results.append(s)
            }, i.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, i.prototype.append = function (t) {
                this.hideLoading();
                var e = [];
                if (null != t.results && 0 !== t.results.length) {
                    t.results = this.sort(t.results);
                    for (var i = 0; i < t.results.length; i++) {
                        var s = t.results[i], n = this.option(s);
                        e.push(n)
                    }
                    this.$results.append(e)
                } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"})
            }, i.prototype.position = function (t, e) {
                e.find(".select2-results").append(t)
            }, i.prototype.sort = function (t) {
                return this.options.get("sorter")(t)
            }, i.prototype.highlightFirstItem = function () {
                var t = this.$results.find(".select2-results__option--selectable"),
                    e = t.filter(".select2-results__option--selected");
                e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
            }, i.prototype.setClasses = function () {
                var i = this;
                this.data.current((function (s) {
                    var n = s.map((function (t) {
                        return t.id.toString()
                    }));
                    i.$results.find(".select2-results__option--selectable").each((function () {
                        var i = t(this), s = e.GetData(this, "data"), o = "" + s.id;
                        null != s.element && s.element.selected || null == s.element && n.indexOf(o) > -1 ? (this.classList.add("select2-results__option--selected"), i.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"), i.attr("aria-selected", "false"))
                    }))
                }))
            }, i.prototype.showLoading = function (t) {
                this.hideLoading();
                var e = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(t)},
                    i = this.option(e);
                i.className += " loading-results", this.$results.prepend(i)
            }, i.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, i.prototype.option = function (i) {
                var s = document.createElement("li");
                s.classList.add("select2-results__option"), s.classList.add("select2-results__option--selectable");
                var n = {role: "option"},
                    o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                for (var r in (null != i.element && o.call(i.element, ":disabled") || null == i.element && i.disabled) && (n["aria-disabled"] = "true", s.classList.remove("select2-results__option--selectable"), s.classList.add("select2-results__option--disabled")), null == i.id && s.classList.remove("select2-results__option--selectable"), null != i._resultId && (s.id = i._resultId), i.title && (s.title = i.title), i.children && (n.role = "group", n["aria-label"] = i.text, s.classList.remove("select2-results__option--selectable"), s.classList.add("select2-results__option--group")), n) {
                    var a = n[r];
                    s.setAttribute(r, a)
                }
                if (i.children) {
                    var l = t(s), c = document.createElement("strong");
                    c.className = "select2-results__group", this.template(i, c);
                    for (var h = [], u = 0; u < i.children.length; u++) {
                        var d = i.children[u], p = this.option(d);
                        h.push(p)
                    }
                    var f = t("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                    f.append(h), l.append(c), l.append(f)
                } else this.template(i, s);
                return e.StoreData(s, "data", i), s
            }, i.prototype.bind = function (i, s) {
                var n = this, o = i.id + "-results";
                this.$results.attr("id", o), i.on("results:all", (function (t) {
                    n.clear(), n.append(t.data), i.isOpen() && (n.setClasses(), n.highlightFirstItem())
                })), i.on("results:append", (function (t) {
                    n.append(t.data), i.isOpen() && n.setClasses()
                })), i.on("query", (function (t) {
                    n.hideMessages(), n.showLoading(t)
                })), i.on("select", (function () {
                    i.isOpen() && (n.setClasses(), n.options.get("scrollAfterSelect") && n.highlightFirstItem())
                })), i.on("unselect", (function () {
                    i.isOpen() && (n.setClasses(), n.options.get("scrollAfterSelect") && n.highlightFirstItem())
                })), i.on("open", (function () {
                    n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible()
                })), i.on("close", (function () {
                    n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant")
                })), i.on("results:toggle", (function () {
                    var t = n.getHighlightedResults();
                    0 !== t.length && t.trigger("mouseup")
                })), i.on("results:select", (function () {
                    var t = n.getHighlightedResults();
                    if (0 !== t.length) {
                        var i = e.GetData(t[0], "data");
                        t.hasClass("select2-results__option--selected") ? n.trigger("close", {}) : n.trigger("select", {data: i})
                    }
                })), i.on("results:previous", (function () {
                    var t = n.getHighlightedResults(), e = n.$results.find(".select2-results__option--selectable"),
                        i = e.index(t);
                    if (!(i <= 0)) {
                        var s = i - 1;
                        0 === t.length && (s = 0);
                        var o = e.eq(s);
                        o.trigger("mouseenter");
                        var r = n.$results.offset().top, a = o.offset().top, l = n.$results.scrollTop() + (a - r);
                        0 === s ? n.$results.scrollTop(0) : a - r < 0 && n.$results.scrollTop(l)
                    }
                })), i.on("results:next", (function () {
                    var t = n.getHighlightedResults(), e = n.$results.find(".select2-results__option--selectable"),
                        i = e.index(t) + 1;
                    if (!(i >= e.length)) {
                        var s = e.eq(i);
                        s.trigger("mouseenter");
                        var o = n.$results.offset().top + n.$results.outerHeight(!1),
                            r = s.offset().top + s.outerHeight(!1), a = n.$results.scrollTop() + r - o;
                        0 === i ? n.$results.scrollTop(0) : r > o && n.$results.scrollTop(a)
                    }
                })), i.on("results:focus", (function (t) {
                    t.element[0].classList.add("select2-results__option--highlighted"), t.element[0].setAttribute("aria-selected", "true")
                })), i.on("results:message", (function (t) {
                    n.displayMessage(t)
                })), t.fn.mousewheel && this.$results.on("mousewheel", (function (t) {
                    var e = n.$results.scrollTop(), i = n.$results.get(0).scrollHeight - e + t.deltaY,
                        s = t.deltaY > 0 && e - t.deltaY <= 0, o = t.deltaY < 0 && i <= n.$results.height();
                    s ? (n.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : o && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), t.preventDefault(), t.stopPropagation())
                })), this.$results.on("mouseup", ".select2-results__option--selectable", (function (i) {
                    var s = t(this), o = e.GetData(this, "data");
                    s.hasClass("select2-results__option--selected") ? n.options.get("multiple") ? n.trigger("unselect", {
                        originalEvent: i,
                        data: o
                    }) : n.trigger("close", {}) : n.trigger("select", {originalEvent: i, data: o})
                })), this.$results.on("mouseenter", ".select2-results__option--selectable", (function (i) {
                    var s = e.GetData(this, "data");
                    n.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), n.trigger("results:focus", {
                        data: s,
                        element: t(this)
                    })
                }))
            }, i.prototype.getHighlightedResults = function () {
                return this.$results.find(".select2-results__option--highlighted")
            }, i.prototype.destroy = function () {
                this.$results.remove()
            }, i.prototype.ensureHighlightVisible = function () {
                var t = this.getHighlightedResults();
                if (0 !== t.length) {
                    var e = this.$results.find(".select2-results__option--selectable").index(t),
                        i = this.$results.offset().top, s = t.offset().top, n = this.$results.scrollTop() + (s - i),
                        o = s - i;
                    n -= 2 * t.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(n)
                }
            }, i.prototype.template = function (e, i) {
                var s = this.options.get("templateResult"), n = this.options.get("escapeMarkup"), o = s(e, i);
                null == o ? i.style.display = "none" : "string" == typeof o ? i.innerHTML = n(o) : t(i).append(o)
            }, i
        })), e.define("select2/keys", [], (function () {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        })), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function (t, e, i) {
            function s(t, e) {
                this.$element = t, this.options = e, s.__super__.constructor.call(this)
            }

            return e.Extend(s, e.Observable), s.prototype.render = function () {
                var i = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != e.GetData(this.$element[0], "old-tabindex") ? this._tabindex = e.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), i.attr("title", this.$element.attr("title")), i.attr("tabindex", this._tabindex), i.attr("aria-disabled", "false"), this.$selection = i, i
            }, s.prototype.bind = function (t, e) {
                var s = this, n = t.id + "-results";
                this.container = t, this.$selection.on("focus", (function (t) {
                    s.trigger("focus", t)
                })), this.$selection.on("blur", (function (t) {
                    s._handleBlur(t)
                })), this.$selection.on("keydown", (function (t) {
                    s.trigger("keypress", t), t.which === i.SPACE && t.preventDefault()
                })), t.on("results:focus", (function (t) {
                    s.$selection.attr("aria-activedescendant", t.data._resultId)
                })), t.on("selection:update", (function (t) {
                    s.update(t.data)
                })), t.on("open", (function () {
                    s.$selection.attr("aria-expanded", "true"), s.$selection.attr("aria-owns", n), s._attachCloseHandler(t)
                })), t.on("close", (function () {
                    s.$selection.attr("aria-expanded", "false"), s.$selection.removeAttr("aria-activedescendant"), s.$selection.removeAttr("aria-owns"), s.$selection.trigger("focus"), s._detachCloseHandler(t)
                })), t.on("enable", (function () {
                    s.$selection.attr("tabindex", s._tabindex), s.$selection.attr("aria-disabled", "false")
                })), t.on("disable", (function () {
                    s.$selection.attr("tabindex", "-1"), s.$selection.attr("aria-disabled", "true")
                }))
            }, s.prototype._handleBlur = function (e) {
                var i = this;
                window.setTimeout((function () {
                    document.activeElement == i.$selection[0] || t.contains(i.$selection[0], document.activeElement) || i.trigger("blur", e)
                }), 1)
            }, s.prototype._attachCloseHandler = function (i) {
                t(document.body).on("mousedown.select2." + i.id, (function (i) {
                    var s = t(i.target).closest(".select2");
                    t(".select2.select2-container--open").each((function () {
                        this != s[0] && e.GetData(this, "element").select2("close")
                    }))
                }))
            }, s.prototype._detachCloseHandler = function (e) {
                t(document.body).off("mousedown.select2." + e.id)
            }, s.prototype.position = function (t, e) {
                e.find(".selection").append(t)
            }, s.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, s.prototype.update = function (t) {
                throw new Error("The `update` method must be defined in child classes.")
            }, s.prototype.isEnabled = function () {
                return !this.isDisabled()
            }, s.prototype.isDisabled = function () {
                return this.options.get("disabled")
            }, s
        })), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function (t, e, i, s) {
            function n() {
                n.__super__.constructor.apply(this, arguments)
            }

            return i.Extend(n, e), n.prototype.render = function () {
                var t = n.__super__.render.call(this);
                return t[0].classList.add("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
            }, n.prototype.bind = function (t, e) {
                var i = this;
                n.__super__.bind.apply(this, arguments);
                var s = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", s).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", s), this.$selection.on("mousedown", (function (t) {
                    1 === t.which && i.trigger("toggle", {originalEvent: t})
                })), this.$selection.on("focus", (function (t) {
                })), this.$selection.on("blur", (function (t) {
                })), t.on("focus", (function (e) {
                    t.isOpen() || i.$selection.trigger("focus")
                }))
            }, n.prototype.clear = function () {
                var t = this.$selection.find(".select2-selection__rendered");
                t.empty(), t.removeAttr("title")
            }, n.prototype.display = function (t, e) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(t, e))
            }, n.prototype.selectionContainer = function () {
                return t("<span></span>")
            }, n.prototype.update = function (t) {
                if (0 !== t.length) {
                    var e = t[0], i = this.$selection.find(".select2-selection__rendered"), s = this.display(e, i);
                    i.empty().append(s);
                    var n = e.title || e.text;
                    n ? i.attr("title", n) : i.removeAttr("title")
                } else this.clear()
            }, n
        })), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function (t, e, i) {
            function s(t, e) {
                s.__super__.constructor.apply(this, arguments)
            }

            return i.Extend(s, e), s.prototype.render = function () {
                var t = s.__super__.render.call(this);
                return t[0].classList.add("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
            }, s.prototype.bind = function (e, n) {
                var o = this;
                s.__super__.bind.apply(this, arguments);
                var r = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", r), this.$selection.on("click", (function (t) {
                    o.trigger("toggle", {originalEvent: t})
                })), this.$selection.on("click", ".select2-selection__choice__remove", (function (e) {
                    if (!o.isDisabled()) {
                        var s = t(this).parent(), n = i.GetData(s[0], "data");
                        o.trigger("unselect", {originalEvent: e, data: n})
                    }
                })), this.$selection.on("keydown", ".select2-selection__choice__remove", (function (t) {
                    o.isDisabled() || t.stopPropagation()
                }))
            }, s.prototype.clear = function () {
                var t = this.$selection.find(".select2-selection__rendered");
                t.empty(), t.removeAttr("title")
            }, s.prototype.display = function (t, e) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(t, e))
            }, s.prototype.selectionContainer = function () {
                return t('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')
            }, s.prototype.update = function (t) {
                if (this.clear(), 0 !== t.length) {
                    for (var e = [], s = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", n = 0; n < t.length; n++) {
                        var o = t[n], r = this.selectionContainer(), a = this.display(o, r),
                            l = s + i.generateChars(4) + "-";
                        o.id ? l += o.id : l += i.generateChars(4), r.find(".select2-selection__choice__display").append(a).attr("id", l);
                        var c = o.title || o.text;
                        c && r.attr("title", c);
                        var h = this.options.get("translations").get("removeItem"),
                            u = r.find(".select2-selection__choice__remove");
                        u.attr("title", h()), u.attr("aria-label", h()), u.attr("aria-describedby", l), i.StoreData(r[0], "data", o), e.push(r)
                    }
                    this.$selection.find(".select2-selection__rendered").append(e)
                }
            }, s
        })), e.define("select2/selection/placeholder", [], (function () {
            function t(t, e, i) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i)
            }

            return t.prototype.normalizePlaceholder = function (t, e) {
                return "string" == typeof e && (e = {id: "", text: e}), e
            }, t.prototype.createPlaceholder = function (t, e) {
                var i = this.selectionContainer();
                return i.html(this.display(e)), i[0].classList.add("select2-selection__placeholder"), i[0].classList.remove("select2-selection__choice"), i
            }, t.prototype.update = function (t, e) {
                var i = 1 == e.length && e[0].id != this.placeholder.id;
                if (e.length > 1 || i) return t.call(this, e);
                this.clear();
                var s = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(s)
            }, t
        })), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function (t, e, i) {
            function s() {
            }

            return s.prototype.bind = function (t, e, i) {
                var s = this;
                t.call(this, e, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function (t) {
                    s._handleClear(t)
                })), e.on("keypress", (function (t) {
                    s._handleKeyboardClear(t, e)
                }))
            }, s.prototype._handleClear = function (t, e) {
                if (!this.isDisabled()) {
                    var s = this.$selection.find(".select2-selection__clear");
                    if (0 !== s.length) {
                        e.stopPropagation();
                        var n = i.GetData(s[0], "data"), o = this.$element.val();
                        this.$element.val(this.placeholder.id);
                        var r = {data: n};
                        if (this.trigger("clear", r), r.prevented) this.$element.val(o); else {
                            for (var a = 0; a < n.length; a++) if (r = {data: n[a]}, this.trigger("unselect", r), r.prevented) return void this.$element.val(o);
                            this.$element.trigger("input").trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }
            }, s.prototype._handleKeyboardClear = function (t, i, s) {
                s.isOpen() || i.which != e.DELETE && i.which != e.BACKSPACE || this._handleClear(i)
            }, s.prototype.update = function (e, s) {
                if (e.call(this, s), this.$selection.find(".select2-selection__clear").remove(), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === s.length)) {
                    var n = this.$selection.find(".select2-selection__rendered").attr("id"),
                        o = this.options.get("translations").get("removeAllItems"),
                        r = t('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
                    r.attr("title", o()), r.attr("aria-label", o()), r.attr("aria-describedby", n), i.StoreData(r[0], "data", s), this.$selection.prepend(r)
                }
            }, s
        })), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function (t, e, i) {
            function s(t, e, i) {
                t.call(this, e, i)
            }

            return s.prototype.render = function (e) {
                var i = t('<span class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                this.$searchContainer = i, this.$search = i.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete"));
                var s = e.call(this);
                return this._transferTabIndex(), s.append(this.$searchContainer), s
            }, s.prototype.bind = function (t, s, n) {
                var o = this, r = s.id + "-results", a = s.id + "-container";
                t.call(this, s, n), o.$search.attr("aria-describedby", a), s.on("open", (function () {
                    o.$search.attr("aria-controls", r), o.$search.trigger("focus")
                })), s.on("close", (function () {
                    o.$search.val(""), o.resizeSearch(), o.$search.removeAttr("aria-controls"), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus")
                })), s.on("enable", (function () {
                    o.$search.prop("disabled", !1), o._transferTabIndex()
                })), s.on("disable", (function () {
                    o.$search.prop("disabled", !0)
                })), s.on("focus", (function (t) {
                    o.$search.trigger("focus")
                })), s.on("results:focus", (function (t) {
                    t.data._resultId ? o.$search.attr("aria-activedescendant", t.data._resultId) : o.$search.removeAttr("aria-activedescendant")
                })), this.$selection.on("focusin", ".select2-search--inline", (function (t) {
                    o.trigger("focus", t)
                })), this.$selection.on("focusout", ".select2-search--inline", (function (t) {
                    o._handleBlur(t)
                })), this.$selection.on("keydown", ".select2-search--inline", (function (t) {
                    if (t.stopPropagation(), o.trigger("keypress", t), o._keyUpPrevented = t.isDefaultPrevented(), t.which === i.BACKSPACE && "" === o.$search.val()) {
                        var s = o.$selection.find(".select2-selection__choice").last();
                        if (s.length > 0) {
                            var n = e.GetData(s[0], "data");
                            o.searchRemoveChoice(n), t.preventDefault()
                        }
                    }
                })), this.$selection.on("click", ".select2-search--inline", (function (t) {
                    o.$search.val() && t.stopPropagation()
                }));
                var l = document.documentMode, c = l && l <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", (function (t) {
                    c ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search")
                })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function (t) {
                    if (c && "input" === t.type) o.$selection.off("input.search input.searchcheck"); else {
                        var e = t.which;
                        e != i.SHIFT && e != i.CTRL && e != i.ALT && e != i.TAB && o.handleSearch(t)
                    }
                }))
            }, s.prototype._transferTabIndex = function (t) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, s.prototype.createPlaceholder = function (t, e) {
                this.$search.attr("placeholder", e.text)
            }, s.prototype.update = function (t, e) {
                var i = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), t.call(this, e), this.resizeSearch(), i && this.$search.trigger("focus")
            }, s.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, s.prototype.searchRemoveChoice = function (t, e) {
                this.trigger("unselect", {data: e}), this.$search.val(e.text), this.handleSearch()
            }, s.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var t = "100%";
                "" === this.$search.attr("placeholder") && (t = .75 * (this.$search.val().length + 1) + "em");
                this.$search.css("width", t)
            }, s
        })), e.define("select2/selection/selectionCss", ["../utils"], (function (t) {
            function e() {
            }

            return e.prototype.render = function (e) {
                var i = e.call(this), s = this.options.get("selectionCssClass") || "";
                return -1 !== s.indexOf(":all:") && (s = s.replace(":all:", ""), t.copyNonInternalCssClasses(i[0], this.$element[0])), i.addClass(s), i
            }, e
        })), e.define("select2/selection/eventRelay", ["jquery"], (function (t) {
            function e() {
            }

            return e.prototype.bind = function (e, i, s) {
                var n = this,
                    o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                    r = ["opening", "closing", "selecting", "unselecting", "clearing"];
                e.call(this, i, s), i.on("*", (function (e, i) {
                    if (-1 !== o.indexOf(e)) {
                        i = i || {};
                        var s = t.Event("select2:" + e, {params: i});
                        n.$element.trigger(s), -1 !== r.indexOf(e) && (i.prevented = s.isDefaultPrevented())
                    }
                }))
            }, e
        })), e.define("select2/translation", ["jquery", "require"], (function (t, e) {
            function i(t) {
                this.dict = t || {}
            }

            return i.prototype.all = function () {
                return this.dict
            }, i.prototype.get = function (t) {
                return this.dict[t]
            }, i.prototype.extend = function (e) {
                this.dict = t.extend({}, e.all(), this.dict)
            }, i._cache = {}, i.loadPath = function (t) {
                if (!(t in i._cache)) {
                    var s = e(t);
                    i._cache[t] = s
                }
                return new i(i._cache[t])
            }, i
        })), e.define("select2/diacritics", [], (function () {
            return {
                "в’¶": "A",
                "пјЎ": "A",
                "ГЂ": "A",
                "ГЃ": "A",
                "Г‚": "A",
                "бє¦": "A",
                "бє¤": "A",
                "бєЄ": "A",
                "бєЁ": "A",
                "Гѓ": "A",
                "ДЂ": "A",
                "Д‚": "A",
                "бє°": "A",
                "бє®": "A",
                "бєґ": "A",
                "бєІ": "A",
                "И¦": "A",
                "З ": "A",
                "Г„": "A",
                "Зћ": "A",
                "бєў": "A",
                "Г…": "A",
                "Зє": "A",
                "ЗЌ": "A",
                "ИЂ": "A",
                "И‚": "A",
                "бє ": "A",
                "бє¬": "A",
                "бє¶": "A",
                "бёЂ": "A",
                "Д„": "A",
                "Иє": "A",
                "в±Ї": "A",
                "књІ": "AA",
                "Г†": "AE",
                "Зј": "AE",
                "Зў": "AE",
                "књґ": "AO",
                "књ¶": "AU",
                "књё": "AV",
                "књє": "AV",
                "књј": "AY",
                "в’·": "B",
                "пјў": "B",
                "бё‚": "B",
                "бё„": "B",
                "бё†": "B",
                "Йѓ": "B",
                "Ж‚": "B",
                "ЖЃ": "B",
                "в’ё": "C",
                "пјЈ": "C",
                "Д†": "C",
                "Д€": "C",
                "ДЉ": "C",
                "ДЊ": "C",
                "Г‡": "C",
                "бё€": "C",
                "Ж‡": "C",
                "И»": "C",
                "књѕ": "C",
                "в’№": "D",
                "пј¤": "D",
                "бёЉ": "D",
                "ДЋ": "D",
                "бёЊ": "D",
                "бёђ": "D",
                "бё’": "D",
                "бёЋ": "D",
                "Дђ": "D",
                "Ж‹": "D",
                "ЖЉ": "D",
                "Ж‰": "D",
                "кќ№": "D",
                "З±": "DZ",
                "З„": "DZ",
                "ЗІ": "Dz",
                "З…": "Dz",
                "в’є": "E",
                "пјҐ": "E",
                "Г€": "E",
                "Г‰": "E",
                "ГЉ": "E",
                "б»Ђ": "E",
                "бєѕ": "E",
                "б»„": "E",
                "б»‚": "E",
                "бєј": "E",
                "Д’": "E",
                "бё”": "E",
                "бё–": "E",
                "Д”": "E",
                "Д–": "E",
                "Г‹": "E",
                "бєє": "E",
                "Дљ": "E",
                "И„": "E",
                "И†": "E",
                "бєё": "E",
                "б»†": "E",
                "ИЁ": "E",
                "бёњ": "E",
                "Д": "E",
                "бё": "E",
                "бёљ": "E",
                "Жђ": "E",
                "ЖЋ": "E",
                "в’»": "F",
                "пј¦": "F",
                "бёћ": "F",
                "Ж‘": "F",
                "кќ»": "F",
                "в’ј": "G",
                "пј§": "G",
                "Зґ": "G",
                "Дњ": "G",
                "бё ": "G",
                "Дћ": "G",
                "Д ": "G",
                "З¦": "G",
                "Дў": "G",
                "З¤": "G",
                "Ж“": "G",
                "кћ ": "G",
                "кќЅ": "G",
                "кќѕ": "G",
                "в’Ѕ": "H",
                "пјЁ": "H",
                "Д¤": "H",
                "бёў": "H",
                "бё¦": "H",
                "Ић": "H",
                "бё¤": "H",
                "бёЁ": "H",
                "бёЄ": "H",
                "Д¦": "H",
                "в±§": "H",
                "в±µ": "H",
                "кћЌ": "H",
                "в’ѕ": "I",
                "пј©": "I",
                "ГЊ": "I",
                "ГЌ": "I",
                "ГЋ": "I",
                "ДЁ": "I",
                "ДЄ": "I",
                "Д¬": "I",
                "Д°": "I",
                "ГЏ": "I",
                "бё®": "I",
                "б»€": "I",
                "ЗЏ": "I",
                "И€": "I",
                "ИЉ": "I",
                "б»Љ": "I",
                "Д®": "I",
                "бё¬": "I",
                "Ж—": "I",
                "в’ї": "J",
                "пјЄ": "J",
                "Дґ": "J",
                "Й€": "J",
                "в“Ђ": "K",
                "пј«": "K",
                "бё°": "K",
                "ЗЁ": "K",
                "бёІ": "K",
                "Д¶": "K",
                "бёґ": "K",
                "Ж": "K",
                "в±©": "K",
                "кќЂ": "K",
                "кќ‚": "K",
                "кќ„": "K",
                "кћў": "K",
                "в“Ѓ": "L",
                "пј¬": "L",
                "Дї": "L",
                "Д№": "L",
                "ДЅ": "L",
                "бё¶": "L",
                "бёё": "L",
                "Д»": "L",
                "бёј": "L",
                "бёє": "L",
                "ЕЃ": "L",
                "ИЅ": "L",
                "в±ў": "L",
                "в± ": "L",
                "кќ€": "L",
                "кќ†": "L",
                "кћЂ": "L",
                "З‡": "LJ",
                "З€": "Lj",
                "в“‚": "M",
                "пј": "M",
                "бёѕ": "M",
                "б№Ђ": "M",
                "б№‚": "M",
                "в±®": "M",
                "Жњ": "M",
                "в“ѓ": "N",
                "пј®": "N",
                "Зё": "N",
                "Еѓ": "N",
                "Г‘": "N",
                "б№„": "N",
                "Е‡": "N",
                "б№†": "N",
                "Е…": "N",
                "б№Љ": "N",
                "б№€": "N",
                "И ": "N",
                "Жќ": "N",
                "кћђ": "N",
                "кћ¤": "N",
                "ЗЉ": "NJ",
                "З‹": "Nj",
                "в“„": "O",
                "пјЇ": "O",
                "Г’": "O",
                "Г“": "O",
                "Г”": "O",
                "б»’": "O",
                "б»ђ": "O",
                "б»–": "O",
                "б»”": "O",
                "Г•": "O",
                "б№Њ": "O",
                "И¬": "O",
                "б№Ћ": "O",
                "ЕЊ": "O",
                "б№ђ": "O",
                "б№’": "O",
                "ЕЋ": "O",
                "И®": "O",
                "И°": "O",
                "Г–": "O",
                "ИЄ": "O",
                "б»Ћ": "O",
                "Еђ": "O",
                "З‘": "O",
                "ИЊ": "O",
                "ИЋ": "O",
                "Ж ": "O",
                "б»њ": "O",
                "б»љ": "O",
                "б» ": "O",
                "б»ћ": "O",
                "б»ў": "O",
                "б»Њ": "O",
                "б»": "O",
                "ЗЄ": "O",
                "З¬": "O",
                "Г": "O",
                "Зѕ": "O",
                "Ж†": "O",
                "Жџ": "O",
                "кќЉ": "O",
                "кќЊ": "O",
                "Е’": "OE",
                "Жў": "OI",
                "кќЋ": "OO",
                "Иў": "OU",
                "в“…": "P",
                "пј°": "P",
                "б№”": "P",
                "б№–": "P",
                "Ж¤": "P",
                "в±Ј": "P",
                "кќђ": "P",
                "кќ’": "P",
                "кќ”": "P",
                "в“†": "Q",
                "пј±": "Q",
                "кќ–": "Q",
                "кќ": "Q",
                "ЙЉ": "Q",
                "в“‡": "R",
                "пјІ": "R",
                "Е”": "R",
                "б№": "R",
                "Е": "R",
                "Иђ": "R",
                "И’": "R",
                "б№љ": "R",
                "б№њ": "R",
                "Е–": "R",
                "б№ћ": "R",
                "ЙЊ": "R",
                "в±¤": "R",
                "кќљ": "R",
                "кћ¦": "R",
                "кћ‚": "R",
                "в“€": "S",
                "пјі": "S",
                "бєћ": "S",
                "Ељ": "S",
                "б№¤": "S",
                "Ењ": "S",
                "б№ ": "S",
                "Е ": "S",
                "б№¦": "S",
                "б№ў": "S",
                "б№Ё": "S",
                "И": "S",
                "Ећ": "S",
                "в±ѕ": "S",
                "кћЁ": "S",
                "кћ„": "S",
                "в“‰": "T",
                "пјґ": "T",
                "б№Є": "T",
                "Е¤": "T",
                "б№¬": "T",
                "Иљ": "T",
                "Еў": "T",
                "б№°": "T",
                "б№®": "T",
                "Е¦": "T",
                "Ж¬": "T",
                "Ж®": "T",
                "Иѕ": "T",
                "кћ†": "T",
                "књЁ": "TZ",
                "в“Љ": "U",
                "пјµ": "U",
                "Г™": "U",
                "Гљ": "U",
                "Г›": "U",
                "ЕЁ": "U",
                "б№ё": "U",
                "ЕЄ": "U",
                "б№є": "U",
                "Е¬": "U",
                "Гњ": "U",
                "З›": "U",
                "З—": "U",
                "З•": "U",
                "З™": "U",
                "б»¦": "U",
                "Е®": "U",
                "Е°": "U",
                "З“": "U",
                "И”": "U",
                "И–": "U",
                "ЖЇ": "U",
                "б»Є": "U",
                "б»Ё": "U",
                "б»®": "U",
                "б»¬": "U",
                "б»°": "U",
                "б»¤": "U",
                "б№І": "U",
                "ЕІ": "U",
                "б№¶": "U",
                "б№ґ": "U",
                "Й„": "U",
                "в“‹": "V",
                "пј¶": "V",
                "б№ј": "V",
                "б№ѕ": "V",
                "ЖІ": "V",
                "кќћ": "V",
                "Й…": "V",
                "кќ ": "VY",
                "в“Њ": "W",
                "пј·": "W",
                "бєЂ": "W",
                "бє‚": "W",
                "Еґ": "W",
                "бє†": "W",
                "бє„": "W",
                "бє€": "W",
                "в±І": "W",
                "в“Ќ": "X",
                "пјё": "X",
                "бєЉ": "X",
                "бєЊ": "X",
                "в“Ћ": "Y",
                "пј№": "Y",
                "б»І": "Y",
                "Гќ": "Y",
                "Е¶": "Y",
                "б»ё": "Y",
                "ИІ": "Y",
                "бєЋ": "Y",
                "Её": "Y",
                "б»¶": "Y",
                "б»ґ": "Y",
                "Жі": "Y",
                "ЙЋ": "Y",
                "б»ѕ": "Y",
                "в“Џ": "Z",
                "пјє": "Z",
                "Е№": "Z",
                "бєђ": "Z",
                "Е»": "Z",
                "ЕЅ": "Z",
                "бє’": "Z",
                "бє”": "Z",
                "Жµ": "Z",
                "И¤": "Z",
                "в±ї": "Z",
                "в±«": "Z",
                "кќў": "Z",
                "в“ђ": "a",
                "пЅЃ": "a",
                "бєљ": "a",
                "Г ": "a",
                "ГЎ": "a",
                "Гў": "a",
                "бє§": "a",
                "бєҐ": "a",
                "бє«": "a",
                "бє©": "a",
                "ГЈ": "a",
                "ДЃ": "a",
                "Дѓ": "a",
                "бє±": "a",
                "бєЇ": "a",
                "бєµ": "a",
                "бєі": "a",
                "И§": "a",
                "ЗЎ": "a",
                "Г¤": "a",
                "Зџ": "a",
                "бєЈ": "a",
                "ГҐ": "a",
                "З»": "a",
                "ЗЋ": "a",
                "ИЃ": "a",
                "Иѓ": "a",
                "бєЎ": "a",
                "бє": "a",
                "бє·": "a",
                "бёЃ": "a",
                "Д…": "a",
                "в±Ґ": "a",
                "Йђ": "a",
                "књі": "aa",
                "Г¦": "ae",
                "ЗЅ": "ae",
                "ЗЈ": "ae",
                "књµ": "ao",
                "књ·": "au",
                "књ№": "av",
                "књ»": "av",
                "књЅ": "ay",
                "в“‘": "b",
                "пЅ‚": "b",
                "бёѓ": "b",
                "бё…": "b",
                "бё‡": "b",
                "ЖЂ": "b",
                "Жѓ": "b",
                "Й“": "b",
                "в“’": "c",
                "пЅѓ": "c",
                "Д‡": "c",
                "Д‰": "c",
                "Д‹": "c",
                "ДЌ": "c",
                "Г§": "c",
                "бё‰": "c",
                "Ж€": "c",
                "Иј": "c",
                "књї": "c",
                "в†„": "c",
                "в““": "d",
                "пЅ„": "d",
                "бё‹": "d",
                "ДЏ": "d",
                "бёЌ": "d",
                "бё‘": "d",
                "бё“": "d",
                "бёЏ": "d",
                "Д‘": "d",
                "ЖЊ": "d",
                "Й–": "d",
                "Й—": "d",
                "кќє": "d",
                "Зі": "dz",
                "З†": "dz",
                "в“”": "e",
                "пЅ…": "e",
                "ГЁ": "e",
                "Г©": "e",
                "ГЄ": "e",
                "б»Ѓ": "e",
                "бєї": "e",
                "б»…": "e",
                "б»ѓ": "e",
                "бєЅ": "e",
                "Д“": "e",
                "бё•": "e",
                "бё—": "e",
                "Д•": "e",
                "Д—": "e",
                "Г«": "e",
                "бє»": "e",
                "Д›": "e",
                "И…": "e",
                "И‡": "e",
                "бє№": "e",
                "б»‡": "e",
                "И©": "e",
                "бёќ": "e",
                "Д™": "e",
                "бё™": "e",
                "бё›": "e",
                "Й‡": "e",
                "Й›": "e",
                "Зќ": "e",
                "в“•": "f",
                "пЅ†": "f",
                "бёџ": "f",
                "Ж’": "f",
                "кќј": "f",
                "в“–": "g",
                "пЅ‡": "g",
                "Зµ": "g",
                "Дќ": "g",
                "бёЎ": "g",
                "Дџ": "g",
                "ДЎ": "g",
                "З§": "g",
                "ДЈ": "g",
                "ЗҐ": "g",
                "Й ": "g",
                "кћЎ": "g",
                "бµ№": "g",
                "кќї": "g",
                "в“—": "h",
                "пЅ€": "h",
                "ДҐ": "h",
                "бёЈ": "h",
                "бё§": "h",
                "Иџ": "h",
                "бёҐ": "h",
                "бё©": "h",
                "бё«": "h",
                "бє–": "h",
                "Д§": "h",
                "в±Ё": "h",
                "в±¶": "h",
                "ЙҐ": "h",
                "Ж•": "hv",
                "в“": "i",
                "пЅ‰": "i",
                "Г¬": "i",
                "Г": "i",
                "Г®": "i",
                "Д©": "i",
                "Д«": "i",
                "Д": "i",
                "ГЇ": "i",
                "бёЇ": "i",
                "б»‰": "i",
                "Зђ": "i",
                "И‰": "i",
                "И‹": "i",
                "б»‹": "i",
                "ДЇ": "i",
                "бё": "i",
                "ЙЁ": "i",
                "Д±": "i",
                "в“™": "j",
                "пЅЉ": "j",
                "Дµ": "j",
                "З°": "j",
                "Й‰": "j",
                "в“љ": "k",
                "пЅ‹": "k",
                "бё±": "k",
                "З©": "k",
                "бёі": "k",
                "Д·": "k",
                "бёµ": "k",
                "Ж™": "k",
                "в±Є": "k",
                "кќЃ": "k",
                "кќѓ": "k",
                "кќ…": "k",
                "кћЈ": "k",
                "в“›": "l",
                "пЅЊ": "l",
                "ЕЂ": "l",
                "Дє": "l",
                "Дѕ": "l",
                "бё·": "l",
                "бё№": "l",
                "Дј": "l",
                "бёЅ": "l",
                "бё»": "l",
                "Еї": "l",
                "Е‚": "l",
                "Жљ": "l",
                "Й«": "l",
                "в±Ў": "l",
                "кќ‰": "l",
                "кћЃ": "l",
                "кќ‡": "l",
                "З‰": "lj",
                "в“њ": "m",
                "пЅЌ": "m",
                "бёї": "m",
                "б№Ѓ": "m",
                "б№ѓ": "m",
                "Й±": "m",
                "ЙЇ": "m",
                "в“ќ": "n",
                "пЅЋ": "n",
                "З№": "n",
                "Е„": "n",
                "Г±": "n",
                "б№…": "n",
                "Е€": "n",
                "б№‡": "n",
                "Е†": "n",
                "б№‹": "n",
                "б№‰": "n",
                "Жћ": "n",
                "ЙІ": "n",
                "Е‰": "n",
                "кћ‘": "n",
                "кћҐ": "n",
                "ЗЊ": "nj",
                "в“ћ": "o",
                "пЅЏ": "o",
                "ГІ": "o",
                "Гі": "o",
                "Гґ": "o",
                "б»“": "o",
                "б»‘": "o",
                "б»—": "o",
                "б»•": "o",
                "Гµ": "o",
                "б№Ќ": "o",
                "И": "o",
                "б№Џ": "o",
                "ЕЌ": "o",
                "б№‘": "o",
                "б№“": "o",
                "ЕЏ": "o",
                "ИЇ": "o",
                "И±": "o",
                "Г¶": "o",
                "И«": "o",
                "б»Џ": "o",
                "Е‘": "o",
                "З’": "o",
                "ИЌ": "o",
                "ИЏ": "o",
                "ЖЎ": "o",
                "б»ќ": "o",
                "б»›": "o",
                "б»Ў": "o",
                "б»џ": "o",
                "б»Ј": "o",
                "б»Ќ": "o",
                "б»™": "o",
                "З«": "o",
                "З": "o",
                "Гё": "o",
                "Зї": "o",
                "Й”": "o",
                "кќ‹": "o",
                "кќЌ": "o",
                "Йµ": "o",
                "Е“": "oe",
                "ЖЈ": "oi",
                "ИЈ": "ou",
                "кќЏ": "oo",
                "в“џ": "p",
                "пЅђ": "p",
                "б№•": "p",
                "б№—": "p",
                "ЖҐ": "p",
                "бµЅ": "p",
                "кќ‘": "p",
                "кќ“": "p",
                "кќ•": "p",
                "в“ ": "q",
                "пЅ‘": "q",
                "Й‹": "q",
                "кќ—": "q",
                "кќ™": "q",
                "в“Ў": "r",
                "пЅ’": "r",
                "Е•": "r",
                "б№™": "r",
                "Е™": "r",
                "И‘": "r",
                "И“": "r",
                "б№›": "r",
                "б№ќ": "r",
                "Е—": "r",
                "б№џ": "r",
                "ЙЌ": "r",
                "ЙЅ": "r",
                "кќ›": "r",
                "кћ§": "r",
                "кћѓ": "r",
                "в“ў": "s",
                "пЅ“": "s",
                "Гџ": "s",
                "Е›": "s",
                "б№Ґ": "s",
                "Еќ": "s",
                "б№Ў": "s",
                "ЕЎ": "s",
                "б№§": "s",
                "б№Ј": "s",
                "б№©": "s",
                "И™": "s",
                "Еџ": "s",
                "Иї": "s",
                "кћ©": "s",
                "кћ…": "s",
                "бє›": "s",
                "в“Ј": "t",
                "пЅ”": "t",
                "б№«": "t",
                "бє—": "t",
                "ЕҐ": "t",
                "б№": "t",
                "И›": "t",
                "ЕЈ": "t",
                "б№±": "t",
                "б№Ї": "t",
                "Е§": "t",
                "Ж": "t",
                "К€": "t",
                "в±¦": "t",
                "кћ‡": "t",
                "књ©": "tz",
                "в“¤": "u",
                "пЅ•": "u",
                "Г№": "u",
                "Гє": "u",
                "Г»": "u",
                "Е©": "u",
                "б№№": "u",
                "Е«": "u",
                "б№»": "u",
                "Е": "u",
                "Гј": "u",
                "Зњ": "u",
                "З": "u",
                "З–": "u",
                "Зљ": "u",
                "б»§": "u",
                "ЕЇ": "u",
                "Е±": "u",
                "З”": "u",
                "И•": "u",
                "И—": "u",
                "Ж°": "u",
                "б»«": "u",
                "б»©": "u",
                "б»Ї": "u",
                "б»": "u",
                "б»±": "u",
                "б»Ґ": "u",
                "б№і": "u",
                "Еі": "u",
                "б№·": "u",
                "б№µ": "u",
                "К‰": "u",
                "в“Ґ": "v",
                "пЅ–": "v",
                "б№Ѕ": "v",
                "б№ї": "v",
                "К‹": "v",
                "кќџ": "v",
                "КЊ": "v",
                "кќЎ": "vy",
                "в“¦": "w",
                "пЅ—": "w",
                "бєЃ": "w",
                "бєѓ": "w",
                "Еµ": "w",
                "бє‡": "w",
                "бє…": "w",
                "бє": "w",
                "бє‰": "w",
                "в±і": "w",
                "в“§": "x",
                "пЅ": "x",
                "бє‹": "x",
                "бєЌ": "x",
                "в“Ё": "y",
                "пЅ™": "y",
                "б»і": "y",
                "ГЅ": "y",
                "Е·": "y",
                "б»№": "y",
                "Иі": "y",
                "бєЏ": "y",
                "Гї": "y",
                "б»·": "y",
                "бє™": "y",
                "б»µ": "y",
                "Жґ": "y",
                "ЙЏ": "y",
                "б»ї": "y",
                "в“©": "z",
                "пЅљ": "z",
                "Еє": "z",
                "бє‘": "z",
                "Еј": "z",
                "Еѕ": "z",
                "бє“": "z",
                "бє•": "z",
                "Ж¶": "z",
                "ИҐ": "z",
                "ЙЂ": "z",
                "в±¬": "z",
                "кќЈ": "z",
                "О†": "О‘",
                "О€": "О•",
                "О‰": "О—",
                "ОЉ": "О™",
                "ОЄ": "О™",
                "ОЊ": "Оџ",
                "ОЋ": "ОҐ",
                "О«": "ОҐ",
                "ОЏ": "О©",
                "О¬": "О±",
                "О": "Оµ",
                "О®": "О·",
                "ОЇ": "О№",
                "ПЉ": "О№",
                "Ођ": "О№",
                "ПЊ": "Ої",
                "ПЌ": "П…",
                "П‹": "П…",
                "О°": "П…",
                "ПЋ": "П‰",
                "П‚": "Пѓ",
                "вЂ™": "'"
            }
        })), e.define("select2/data/base", ["../utils"], (function (t) {
            function e(t, i) {
                e.__super__.constructor.call(this)
            }

            return t.Extend(e, t.Observable), e.prototype.current = function (t) {
                throw new Error("The `current` method must be defined in child classes.")
            }, e.prototype.query = function (t, e) {
                throw new Error("The `query` method must be defined in child classes.")
            }, e.prototype.bind = function (t, e) {
            }, e.prototype.destroy = function () {
            }, e.prototype.generateResultId = function (e, i) {
                var s = e.id + "-result-";
                return s += t.generateChars(4), null != i.id ? s += "-" + i.id.toString() : s += "-" + t.generateChars(4), s
            }, e
        })), e.define("select2/data/select", ["./base", "../utils", "jquery"], (function (t, e, i) {
            function s(t, e) {
                this.$element = t, this.options = e, s.__super__.constructor.call(this)
            }

            return e.Extend(s, t), s.prototype.current = function (t) {
                var e = this;
                t(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), (function (t) {
                    return e.item(i(t))
                })))
            }, s.prototype.select = function (t) {
                var e = this;
                if (t.selected = !0, null != t.element && "option" === t.element.tagName.toLowerCase()) return t.element.selected = !0, void this.$element.trigger("input").trigger("change");
                if (this.$element.prop("multiple")) this.current((function (i) {
                    var s = [];
                    (t = [t]).push.apply(t, i);
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n].id;
                        -1 === s.indexOf(o) && s.push(o)
                    }
                    e.$element.val(s), e.$element.trigger("input").trigger("change")
                })); else {
                    var i = t.id;
                    this.$element.val(i), this.$element.trigger("input").trigger("change")
                }
            }, s.prototype.unselect = function (t) {
                var e = this;
                if (this.$element.prop("multiple")) {
                    if (t.selected = !1, null != t.element && "option" === t.element.tagName.toLowerCase()) return t.element.selected = !1, void this.$element.trigger("input").trigger("change");
                    this.current((function (i) {
                        for (var s = [], n = 0; n < i.length; n++) {
                            var o = i[n].id;
                            o !== t.id && -1 === s.indexOf(o) && s.push(o)
                        }
                        e.$element.val(s), e.$element.trigger("input").trigger("change")
                    }))
                }
            }, s.prototype.bind = function (t, e) {
                var i = this;
                this.container = t, t.on("select", (function (t) {
                    i.select(t.data)
                })), t.on("unselect", (function (t) {
                    i.unselect(t.data)
                }))
            }, s.prototype.destroy = function () {
                this.$element.find("*").each((function () {
                    e.RemoveData(this)
                }))
            }, s.prototype.query = function (t, e) {
                var s = [], n = this;
                this.$element.children().each((function () {
                    if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
                        var e = i(this), o = n.item(e), r = n.matches(t, o);
                        null !== r && s.push(r)
                    }
                })), e({results: s})
            }, s.prototype.addOptions = function (t) {
                this.$element.append(t)
            }, s.prototype.option = function (t) {
                var s;
                t.children ? (s = document.createElement("optgroup")).label = t.text : void 0 !== (s = document.createElement("option")).textContent ? s.textContent = t.text : s.innerText = t.text, void 0 !== t.id && (s.value = t.id), t.disabled && (s.disabled = !0), t.selected && (s.selected = !0), t.title && (s.title = t.title);
                var n = this._normalizeItem(t);
                return n.element = s, e.StoreData(s, "data", n), i(s)
            }, s.prototype.item = function (t) {
                var s = {};
                if (null != (s = e.GetData(t[0], "data"))) return s;
                var n = t[0];
                if ("option" === n.tagName.toLowerCase()) s = {
                    id: t.val(),
                    text: t.text(),
                    disabled: t.prop("disabled"),
                    selected: t.prop("selected"),
                    title: t.prop("title")
                }; else if ("optgroup" === n.tagName.toLowerCase()) {
                    s = {text: t.prop("label"), children: [], title: t.prop("title")};
                    for (var o = t.children("option"), r = [], a = 0; a < o.length; a++) {
                        var l = i(o[a]), c = this.item(l);
                        r.push(c)
                    }
                    s.children = r
                }
                return (s = this._normalizeItem(s)).element = t[0], e.StoreData(t[0], "data", s), s
            }, s.prototype._normalizeItem = function (t) {
                t !== Object(t) && (t = {id: t, text: t});
                return null != (t = i.extend({}, {text: ""}, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), i.extend({}, {
                    selected: !1,
                    disabled: !1
                }, t)
            }, s.prototype.matches = function (t, e) {
                return this.options.get("matcher")(t, e)
            }, s
        })), e.define("select2/data/array", ["./select", "../utils", "jquery"], (function (t, e, i) {
            function s(t, e) {
                this._dataToConvert = e.get("data") || [], s.__super__.constructor.call(this, t, e)
            }

            return e.Extend(s, t), s.prototype.bind = function (t, e) {
                s.__super__.bind.call(this, t, e), this.addOptions(this.convertToOptions(this._dataToConvert))
            }, s.prototype.select = function (t) {
                var e = this.$element.find("option").filter((function (e, i) {
                    return i.value == t.id.toString()
                }));
                0 === e.length && (e = this.option(t), this.addOptions(e)), s.__super__.select.call(this, t)
            }, s.prototype.convertToOptions = function (t) {
                var e = this, s = this.$element.find("option"), n = s.map((function () {
                    return e.item(i(this)).id
                })).get(), o = [];

                function r(t) {
                    return function () {
                        return i(this).val() == t.id
                    }
                }

                for (var a = 0; a < t.length; a++) {
                    var l = this._normalizeItem(t[a]);
                    if (n.indexOf(l.id) >= 0) {
                        var c = s.filter(r(l)), h = this.item(c), u = i.extend(!0, {}, l, h), d = this.option(u);
                        c.replaceWith(d)
                    } else {
                        var p = this.option(l);
                        if (l.children) {
                            var f = this.convertToOptions(l.children);
                            p.append(f)
                        }
                        o.push(p)
                    }
                }
                return o
            }, s
        })), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function (t, e, i) {
            function s(t, e) {
                this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), s.__super__.constructor.call(this, t, e)
            }

            return e.Extend(s, t), s.prototype._applyDefaults = function (t) {
                var e = {
                    data: function (t) {
                        return i.extend({}, t, {q: t.term})
                    }, transport: function (t, e, s) {
                        var n = i.ajax(t);
                        return n.then(e), n.fail(s), n
                    }
                };
                return i.extend({}, e, t, !0)
            }, s.prototype.processResults = function (t) {
                return t
            }, s.prototype.query = function (t, e) {
                var s = this;
                null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var n = i.extend({type: "GET"}, this.ajaxOptions);

                function o() {
                    var i = n.transport(n, (function (i) {
                        var n = s.processResults(i, t);
                        s.options.get("debug") && window.console && console.error && (n && n.results && Array.isArray(n.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(n)
                    }), (function () {
                        (!("status" in i) || 0 !== i.status && "0" !== i.status) && s.trigger("results:message", {message: "errorLoading"})
                    }));
                    s._request = i
                }

                "function" == typeof n.url && (n.url = n.url.call(this.$element, t)), "function" == typeof n.data && (n.data = n.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay)) : o()
            }, s
        })), e.define("select2/data/tags", ["jquery"], (function (t) {
            function e(t, e, i) {
                var s = i.get("tags"), n = i.get("createTag");
                void 0 !== n && (this.createTag = n);
                var o = i.get("insertTag");
                if (void 0 !== o && (this.insertTag = o), t.call(this, e, i), Array.isArray(s)) for (var r = 0; r < s.length; r++) {
                    var a = s[r], l = this._normalizeItem(a), c = this.option(l);
                    this.$element.append(c)
                }
            }

            return e.prototype.query = function (t, e, i) {
                var s = this;
                this._removeOldTags(), null != e.term && null == e.page ? t.call(this, e, (function t(n, o) {
                    for (var r = n.results, a = 0; a < r.length; a++) {
                        var l = r[a], c = null != l.children && !t({results: l.children}, !0);
                        if ((l.text || "").toUpperCase() === (e.term || "").toUpperCase() || c) return !o && (n.data = r, void i(n))
                    }
                    if (o) return !0;
                    var h = s.createTag(e);
                    if (null != h) {
                        var u = s.option(h);
                        u.attr("data-select2-tag", !0), s.addOptions([u]), s.insertTag(r, h)
                    }
                    n.results = r, i(n)
                })) : t.call(this, e, i)
            }, e.prototype.createTag = function (t, e) {
                if (null == e.term) return null;
                var i = e.term.trim();
                return "" === i ? null : {id: i, text: i}
            }, e.prototype.insertTag = function (t, e, i) {
                e.unshift(i)
            }, e.prototype._removeOldTags = function (e) {
                this.$element.find("option[data-select2-tag]").each((function () {
                    this.selected || t(this).remove()
                }))
            }, e
        })), e.define("select2/data/tokenizer", ["jquery"], (function (t) {
            function e(t, e, i) {
                var s = i.get("tokenizer");
                void 0 !== s && (this.tokenizer = s), t.call(this, e, i)
            }

            return e.prototype.bind = function (t, e, i) {
                t.call(this, e, i), this.$search = e.dropdown.$search || e.selection.$search || i.find(".select2-search__field")
            }, e.prototype.query = function (e, i, s) {
                var n = this;
                i.term = i.term || "";
                var o = this.tokenizer(i, this.options, (function (e) {
                    var i = n._normalizeItem(e);
                    if (!n.$element.find("option").filter((function () {
                        return t(this).val() === i.id
                    })).length) {
                        var s = n.option(i);
                        s.attr("data-select2-tag", !0), n._removeOldTags(), n.addOptions([s])
                    }
                    !function (t) {
                        n.trigger("select", {data: t})
                    }(i)
                }));
                o.term !== i.term && (this.$search.length && (this.$search.val(o.term), this.$search.trigger("focus")), i.term = o.term), e.call(this, i, s)
            }, e.prototype.tokenizer = function (e, i, s, n) {
                for (var o = s.get("tokenSeparators") || [], r = i.term, a = 0, l = this.createTag || function (t) {
                    return {id: t.term, text: t.term}
                }; a < r.length;) {
                    var c = r[a];
                    if (-1 !== o.indexOf(c)) {
                        var h = r.substr(0, a), u = l(t.extend({}, i, {term: h}));
                        null != u ? (n(u), r = r.substr(a + 1) || "", a = 0) : a++
                    } else a++
                }
                return {term: r}
            }, e
        })), e.define("select2/data/minimumInputLength", [], (function () {
            function t(t, e, i) {
                this.minimumInputLength = i.get("minimumInputLength"), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                e.term = e.term || "", e.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: e.term, params: e}
                }) : t.call(this, e, i)
            }, t
        })), e.define("select2/data/maximumInputLength", [], (function () {
            function t(t, e, i) {
                this.maximumInputLength = i.get("maximumInputLength"), t.call(this, e, i)
            }

            return t.prototype.query = function (t, e, i) {
                e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: e.term, params: e}
                }) : t.call(this, e, i)
            }, t
        })), e.define("select2/data/maximumSelectionLength", [], (function () {
            function t(t, e, i) {
                this.maximumSelectionLength = i.get("maximumSelectionLength"), t.call(this, e, i)
            }

            return t.prototype.bind = function (t, e, i) {
                var s = this;
                t.call(this, e, i), e.on("select", (function () {
                    s._checkIfMaximumSelected()
                }))
            }, t.prototype.query = function (t, e, i) {
                var s = this;
                this._checkIfMaximumSelected((function () {
                    t.call(s, e, i)
                }))
            }, t.prototype._checkIfMaximumSelected = function (t, e) {
                var i = this;
                this.current((function (t) {
                    var s = null != t ? t.length : 0;
                    i.maximumSelectionLength > 0 && s >= i.maximumSelectionLength ? i.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: i.maximumSelectionLength}
                    }) : e && e()
                }))
            }, t
        })), e.define("select2/dropdown", ["jquery", "./utils"], (function (t, e) {
            function i(t, e) {
                this.$element = t, this.options = e, i.__super__.constructor.call(this)
            }

            return e.Extend(i, e.Observable), i.prototype.render = function () {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
            }, i.prototype.bind = function () {
            }, i.prototype.position = function (t, e) {
            }, i.prototype.destroy = function () {
                this.$dropdown.remove()
            }, i
        })), e.define("select2/dropdown/search", ["jquery"], (function (t) {
            function e() {
            }

            return e.prototype.render = function (e) {
                var i = e.call(this),
                    s = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                return this.$searchContainer = s, this.$search = s.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete")), i.prepend(s), i
            }, e.prototype.bind = function (e, i, s) {
                var n = this, o = i.id + "-results";
                e.call(this, i, s), this.$search.on("keydown", (function (t) {
                    n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented()
                })), this.$search.on("input", (function (e) {
                    t(this).off("keyup")
                })), this.$search.on("keyup input", (function (t) {
                    n.handleSearch(t)
                })), i.on("open", (function () {
                    n.$search.attr("tabindex", 0), n.$search.attr("aria-controls", o), n.$search.trigger("focus"), window.setTimeout((function () {
                        n.$search.trigger("focus")
                    }), 0)
                })), i.on("close", (function () {
                    n.$search.attr("tabindex", -1), n.$search.removeAttr("aria-controls"), n.$search.removeAttr("aria-activedescendant"), n.$search.val(""), n.$search.trigger("blur")
                })), i.on("focus", (function () {
                    i.isOpen() || n.$search.trigger("focus")
                })), i.on("results:all", (function (t) {
                    null != t.query.term && "" !== t.query.term || (n.showSearch(t) ? n.$searchContainer[0].classList.remove("select2-search--hide") : n.$searchContainer[0].classList.add("select2-search--hide"))
                })), i.on("results:focus", (function (t) {
                    t.data._resultId ? n.$search.attr("aria-activedescendant", t.data._resultId) : n.$search.removeAttr("aria-activedescendant")
                }))
            }, e.prototype.handleSearch = function (t) {
                if (!this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e})
                }
                this._keyUpPrevented = !1
            }, e.prototype.showSearch = function (t, e) {
                return !0
            }, e
        })), e.define("select2/dropdown/hidePlaceholder", [], (function () {
            function t(t, e, i, s) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i, s)
            }

            return t.prototype.append = function (t, e) {
                e.results = this.removePlaceholder(e.results), t.call(this, e)
            }, t.prototype.normalizePlaceholder = function (t, e) {
                return "string" == typeof e && (e = {id: "", text: e}), e
            }, t.prototype.removePlaceholder = function (t, e) {
                for (var i = e.slice(0), s = e.length - 1; s >= 0; s--) {
                    var n = e[s];
                    this.placeholder.id === n.id && i.splice(s, 1)
                }
                return i
            }, t
        })), e.define("select2/dropdown/infiniteScroll", ["jquery"], (function (t) {
            function e(t, e, i, s) {
                this.lastParams = {}, t.call(this, e, i, s), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return e.prototype.append = function (t, e) {
                this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
            }, e.prototype.bind = function (t, e, i) {
                var s = this;
                t.call(this, e, i), e.on("query", (function (t) {
                    s.lastParams = t, s.loading = !0
                })), e.on("query:append", (function (t) {
                    s.lastParams = t, s.loading = !0
                })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
            }, e.prototype.loadMoreIfNeeded = function () {
                var e = t.contains(document.documentElement, this.$loadingMore[0]);
                !this.loading && e && (this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore())
            }, e.prototype.loadMore = function () {
                this.loading = !0;
                var e = t.extend({}, {page: 1}, this.lastParams);
                e.page++, this.trigger("query:append", e)
            }, e.prototype.showLoadingMore = function (t, e) {
                return e.pagination && e.pagination.more
            }, e.prototype.createLoadingMore = function () {
                var e = t('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                    i = this.options.get("translations").get("loadingMore");
                return e.html(i(this.lastParams)), e
            }, e
        })), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function (t, e) {
            function i(e, i, s) {
                this.$dropdownParent = t(s.get("dropdownParent") || document.body), e.call(this, i, s)
            }

            return i.prototype.bind = function (t, e, i) {
                var s = this;
                t.call(this, e, i), e.on("open", (function () {
                    s._showDropdown(), s._attachPositioningHandler(e), s._bindContainerResultHandlers(e)
                })), e.on("close", (function () {
                    s._hideDropdown(), s._detachPositioningHandler(e)
                })), this.$dropdownContainer.on("mousedown", (function (t) {
                    t.stopPropagation()
                }))
            }, i.prototype.destroy = function (t) {
                t.call(this), this.$dropdownContainer.remove()
            }, i.prototype.position = function (t, e, i) {
                e.attr("class", i.attr("class")), e[0].classList.remove("select2"), e[0].classList.add("select2-container--open"), e.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = i
            }, i.prototype.render = function (e) {
                var i = t("<span></span>"), s = e.call(this);
                return i.append(s), this.$dropdownContainer = i, i
            }, i.prototype._hideDropdown = function (t) {
                this.$dropdownContainer.detach()
            }, i.prototype._bindContainerResultHandlers = function (t, e) {
                if (!this._containerResultsHandlersBound) {
                    var i = this;
                    e.on("results:all", (function () {
                        i._positionDropdown(), i._resizeDropdown()
                    })), e.on("results:append", (function () {
                        i._positionDropdown(), i._resizeDropdown()
                    })), e.on("results:message", (function () {
                        i._positionDropdown(), i._resizeDropdown()
                    })), e.on("select", (function () {
                        i._positionDropdown(), i._resizeDropdown()
                    })), e.on("unselect", (function () {
                        i._positionDropdown(), i._resizeDropdown()
                    })), this._containerResultsHandlersBound = !0
                }
            }, i.prototype._attachPositioningHandler = function (i, s) {
                var n = this, o = "scroll.select2." + s.id, r = "resize.select2." + s.id,
                    a = "orientationchange.select2." + s.id, l = this.$container.parents().filter(e.hasScroll);
                l.each((function () {
                    e.StoreData(this, "select2-scroll-position", {x: t(this).scrollLeft(), y: t(this).scrollTop()})
                })), l.on(o, (function (i) {
                    var s = e.GetData(this, "select2-scroll-position");
                    t(this).scrollTop(s.y)
                })), t(window).on(o + " " + r + " " + a, (function (t) {
                    n._positionDropdown(), n._resizeDropdown()
                }))
            }, i.prototype._detachPositioningHandler = function (i, s) {
                var n = "scroll.select2." + s.id, o = "resize.select2." + s.id, r = "orientationchange.select2." + s.id;
                this.$container.parents().filter(e.hasScroll).off(n), t(window).off(n + " " + o + " " + r)
            }, i.prototype._positionDropdown = function () {
                var e = t(window), i = this.$dropdown[0].classList.contains("select2-dropdown--above"),
                    s = this.$dropdown[0].classList.contains("select2-dropdown--below"), n = null,
                    o = this.$container.offset();
                o.bottom = o.top + this.$container.outerHeight(!1);
                var r = {height: this.$container.outerHeight(!1)};
                r.top = o.top, r.bottom = o.top + r.height;
                var a = this.$dropdown.outerHeight(!1), l = e.scrollTop(), c = e.scrollTop() + e.height(),
                    h = l < o.top - a, u = c > o.bottom + a, d = {left: o.left, top: r.bottom},
                    p = this.$dropdownParent;
                "static" === p.css("position") && (p = p.offsetParent());
                var f = {top: 0, left: 0};
                (t.contains(document.body, p[0]) || p[0].isConnected) && (f = p.offset()), d.top -= f.top, d.left -= f.left, i || s || (n = "below"), u || !h || i ? !h && u && i && (n = "below") : n = "above", ("above" == n || i && "below" !== n) && (d.top = r.top - f.top - a), null != n && (this.$dropdown[0].classList.remove("select2-dropdown--below"), this.$dropdown[0].classList.remove("select2-dropdown--above"), this.$dropdown[0].classList.add("select2-dropdown--" + n), this.$container[0].classList.remove("select2-container--below"), this.$container[0].classList.remove("select2-container--above"), this.$container[0].classList.add("select2-container--" + n)), this.$dropdownContainer.css(d)
            }, i.prototype._resizeDropdown = function () {
                var t = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
            }, i.prototype._showDropdown = function (t) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, i
        })), e.define("select2/dropdown/minimumResultsForSearch", [], (function () {
            function t(t, e, i, s) {
                this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, i, s)
            }

            return t.prototype.showSearch = function (t, e) {
                return !(function t(e) {
                    for (var i = 0, s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.children ? i += t(n.children) : i++
                    }
                    return i
                }(e.data.results) < this.minimumResultsForSearch) && t.call(this, e)
            }, t
        })), e.define("select2/dropdown/selectOnClose", ["../utils"], (function (t) {
            function e() {
            }

            return e.prototype.bind = function (t, e, i) {
                var s = this;
                t.call(this, e, i), e.on("close", (function (t) {
                    s._handleSelectOnClose(t)
                }))
            }, e.prototype._handleSelectOnClose = function (e, i) {
                if (i && null != i.originalSelect2Event) {
                    var s = i.originalSelect2Event;
                    if ("select" === s._type || "unselect" === s._type) return
                }
                var n = this.getHighlightedResults();
                if (!(n.length < 1)) {
                    var o = t.GetData(n[0], "data");
                    null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {data: o})
                }
            }, e
        })), e.define("select2/dropdown/closeOnSelect", [], (function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                var s = this;
                t.call(this, e, i), e.on("select", (function (t) {
                    s._selectTriggered(t)
                })), e.on("unselect", (function (t) {
                    s._selectTriggered(t)
                }))
            }, t.prototype._selectTriggered = function (t, e) {
                var i = e.originalEvent;
                i && (i.ctrlKey || i.metaKey) || this.trigger("close", {originalEvent: i, originalSelect2Event: e})
            }, t
        })), e.define("select2/dropdown/dropdownCss", ["../utils"], (function (t) {
            function e() {
            }

            return e.prototype.render = function (e) {
                var i = e.call(this), s = this.options.get("dropdownCssClass") || "";
                return -1 !== s.indexOf(":all:") && (s = s.replace(":all:", ""), t.copyNonInternalCssClasses(i[0], this.$element[0])), i.addClass(s), i
            }, e
        })), e.define("select2/i18n/en", [], (function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (t) {
                    var e = t.input.length - t.maximum, i = "Please delete " + e + " character";
                    return 1 != e && (i += "s"), i
                }, inputTooShort: function (t) {
                    return "Please enter " + (t.minimum - t.input.length) + " or more characters"
                }, loadingMore: function () {
                    return "Loading more resultsвЂ¦"
                }, maximumSelected: function (t) {
                    var e = "You can only select " + t.maximum + " item";
                    return 1 != t.maximum && (e += "s"), e
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "SearchingвЂ¦"
                }, removeAllItems: function () {
                    return "Remove all items"
                }, removeItem: function () {
                    return "Remove item"
                }
            }
        })), e.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./i18n/en"], (function (t, e, i, s, n, o, r, a, l, c, h, u, d, p, f, g, m, v, _, y, b, w, x, k, C, T, D, S, A, $) {
            function I() {
                this.reset()
            }

            return I.prototype.apply = function (h) {
                if (null == (h = t.extend(!0, {}, this.defaults, h)).dataAdapter && (null != h.ajax ? h.dataAdapter = f : null != h.data ? h.dataAdapter = p : h.dataAdapter = d, h.minimumInputLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, v)), h.maximumInputLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, _)), h.maximumSelectionLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, y)), h.tags && (h.dataAdapter = c.Decorate(h.dataAdapter, g)), null == h.tokenSeparators && null == h.tokenizer || (h.dataAdapter = c.Decorate(h.dataAdapter, m))), null == h.resultsAdapter && (h.resultsAdapter = e, null != h.ajax && (h.resultsAdapter = c.Decorate(h.resultsAdapter, k)), null != h.placeholder && (h.resultsAdapter = c.Decorate(h.resultsAdapter, x)), h.selectOnClose && (h.resultsAdapter = c.Decorate(h.resultsAdapter, D))), null == h.dropdownAdapter) {
                    if (h.multiple) h.dropdownAdapter = b; else {
                        var u = c.Decorate(b, w);
                        h.dropdownAdapter = u
                    }
                    0 !== h.minimumResultsForSearch && (h.dropdownAdapter = c.Decorate(h.dropdownAdapter, T)), h.closeOnSelect && (h.dropdownAdapter = c.Decorate(h.dropdownAdapter, S)), null != h.dropdownCssClass && (h.dropdownAdapter = c.Decorate(h.dropdownAdapter, A)), h.dropdownAdapter = c.Decorate(h.dropdownAdapter, C)
                }
                null == h.selectionAdapter && (h.multiple ? h.selectionAdapter = s : h.selectionAdapter = i, null != h.placeholder && (h.selectionAdapter = c.Decorate(h.selectionAdapter, n)), h.allowClear && (h.selectionAdapter = c.Decorate(h.selectionAdapter, o)), h.multiple && (h.selectionAdapter = c.Decorate(h.selectionAdapter, r)), null != h.selectionCssClass && (h.selectionAdapter = c.Decorate(h.selectionAdapter, a)), h.selectionAdapter = c.Decorate(h.selectionAdapter, l)), h.language = this._resolveLanguage(h.language), h.language.push("en");
                for (var $ = [], I = 0; I < h.language.length; I++) {
                    var P = h.language[I];
                    -1 === $.indexOf(P) && $.push(P)
                }
                return h.language = $, h.translations = this._processTranslations(h.language, h.debug), h
            }, I.prototype.reset = function () {
                function e(t) {
                    return t.replace(/[^\u0000-\u007E]/g, (function (t) {
                        return u[t] || t
                    }))
                }

                this.defaults = {
                    amdLanguageBase: "./i18n/",
                    autocomplete: "off",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: {},
                    matcher: function i(s, n) {
                        if (null == s.term || "" === s.term.trim()) return n;
                        if (n.children && n.children.length > 0) {
                            for (var o = t.extend(!0, {}, n), r = n.children.length - 1; r >= 0; r--) {
                                null == i(s, n.children[r]) && o.children.splice(r, 1)
                            }
                            return o.children.length > 0 ? o : i(s, o)
                        }
                        var a = e(n.text).toUpperCase(), l = e(s.term).toUpperCase();
                        return a.indexOf(l) > -1 ? n : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function (t) {
                        return t
                    },
                    templateResult: function (t) {
                        return t.text
                    },
                    templateSelection: function (t) {
                        return t.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, I.prototype.applyFromElement = function (t, e) {
                var i = t.language, s = this.defaults.language, n = e.prop("lang"),
                    o = e.closest("[lang]").prop("lang"),
                    r = Array.prototype.concat.call(this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(s), this._resolveLanguage(o));
                return t.language = r, t
            }, I.prototype._resolveLanguage = function (e) {
                if (!e) return [];
                if (t.isEmptyObject(e)) return [];
                if (t.isPlainObject(e)) return [e];
                var i;
                i = Array.isArray(e) ? e : [e];
                for (var s = [], n = 0; n < i.length; n++) if (s.push(i[n]), "string" == typeof i[n] && i[n].indexOf("-") > 0) {
                    var o = i[n].split("-")[0];
                    s.push(o)
                }
                return s
            }, I.prototype._processTranslations = function (e, i) {
                for (var s = new h, n = 0; n < e.length; n++) {
                    var o = new h, r = e[n];
                    if ("string" == typeof r) try {
                        o = h.loadPath(r)
                    } catch (t) {
                        try {
                            r = this.defaults.amdLanguageBase + r, o = h.loadPath(r)
                        } catch (t) {
                            i && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.')
                        }
                    } else o = t.isPlainObject(r) ? new h(r) : r;
                    s.extend(o)
                }
                return s
            }, I.prototype.set = function (e, i) {
                var s = {};
                s[t.camelCase(e)] = i;
                var n = c._convertData(s);
                t.extend(!0, this.defaults, n)
            }, new I
        })), e.define("select2/options", ["jquery", "./defaults", "./utils"], (function (t, e, i) {
            function s(t, i) {
                this.options = t, null != i && this.fromElement(i), null != i && (this.options = e.applyFromElement(this.options, i)), this.options = e.apply(this.options)
            }

            return s.prototype.fromElement = function (e) {
                var s = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.autocomplete && e.prop("autocomplete") && (this.options.autocomplete = e.prop("autocomplete")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                var n = {};

                function o(t, e) {
                    return e.toUpperCase()
                }

                for (var r = 0; r < e[0].attributes.length; r++) {
                    var a = e[0].attributes[r].name;
                    if ("data-" == a.substr(0, "data-".length)) {
                        var l = a.substring("data-".length), c = i.GetData(e[0], l);
                        n[l.replace(/-([a-z])/g, o)] = c
                    }
                }
                t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (n = t.extend(!0, {}, e[0].dataset, n));
                var h = t.extend(!0, {}, i.GetData(e[0]), n);
                for (var u in h = i._convertData(h)) s.indexOf(u) > -1 || (t.isPlainObject(this.options[u]) ? t.extend(this.options[u], h[u]) : this.options[u] = h[u]);
                return this
            }, s.prototype.get = function (t) {
                return this.options[t]
            }, s.prototype.set = function (t, e) {
                this.options[t] = e
            }, s
        })), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function (t, e, i, s) {
            var n = function (t, s) {
                null != i.GetData(t[0], "select2") && i.GetData(t[0], "select2").destroy(), this.$element = t, this.id = this._generateId(t), s = s || {}, this.options = new e(s, t), n.__super__.constructor.call(this);
                var o = t.attr("tabindex") || 0;
                i.StoreData(t[0], "old-tabindex", o), t.attr("tabindex", "-1");
                var r = this.options.get("dataAdapter");
                this.dataAdapter = new r(t, this.options);
                var a = this.render();
                this._placeContainer(a);
                var l = this.options.get("selectionAdapter");
                this.selection = new l(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                var c = this.options.get("dropdownAdapter");
                this.dropdown = new c(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                var h = this.options.get("resultsAdapter");
                this.results = new h(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function (t) {
                    u.trigger("selection:update", {data: t})
                })), t[0].classList.add("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), i.StoreData(t[0], "select2", this), t.data("select2", this)
            };
            return i.Extend(n, i.Observable), n.prototype._generateId = function (t) {
                return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }, n.prototype._placeContainer = function (t) {
                t.insertAfter(this.$element);
                var e = this._resolveWidth(this.$element, this.options.get("width"));
                null != e && t.css("width", e)
            }, n.prototype._resolveWidth = function (t, e) {
                var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == e) {
                    var s = this._resolveWidth(t, "style");
                    return null != s ? s : this._resolveWidth(t, "element")
                }
                if ("element" == e) {
                    var n = t.outerWidth(!1);
                    return n <= 0 ? "auto" : n + "px"
                }
                if ("style" == e) {
                    var o = t.attr("style");
                    if ("string" != typeof o) return null;
                    for (var r = o.split(";"), a = 0, l = r.length; a < l; a += 1) {
                        var c = r[a].replace(/\s/g, "").match(i);
                        if (null !== c && c.length >= 1) return c[1]
                    }
                    return null
                }
                return "computedstyle" == e ? window.getComputedStyle(t[0]).width : e
            }, n.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, n.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", (function () {
                    t.dataAdapter.current((function (e) {
                        t.trigger("selection:update", {data: e})
                    }))
                })), this.$element.on("focus.select2", (function (e) {
                    t.trigger("focus", e)
                })), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), this._observer = new window.MutationObserver((function (e) {
                    t._syncA(), t._syncS(e)
                })), this._observer.observe(this.$element[0], {attributes: !0, childList: !0, subtree: !1})
            }, n.prototype._registerDataEvents = function () {
                var t = this;
                this.dataAdapter.on("*", (function (e, i) {
                    t.trigger(e, i)
                }))
            }, n.prototype._registerSelectionEvents = function () {
                var t = this, e = ["toggle", "focus"];
                this.selection.on("toggle", (function () {
                    t.toggleDropdown()
                })), this.selection.on("focus", (function (e) {
                    t.focus(e)
                })), this.selection.on("*", (function (i, s) {
                    -1 === e.indexOf(i) && t.trigger(i, s)
                }))
            }, n.prototype._registerDropdownEvents = function () {
                var t = this;
                this.dropdown.on("*", (function (e, i) {
                    t.trigger(e, i)
                }))
            }, n.prototype._registerResultsEvents = function () {
                var t = this;
                this.results.on("*", (function (e, i) {
                    t.trigger(e, i)
                }))
            }, n.prototype._registerEvents = function () {
                var t = this;
                this.on("open", (function () {
                    t.$container[0].classList.add("select2-container--open")
                })), this.on("close", (function () {
                    t.$container[0].classList.remove("select2-container--open")
                })), this.on("enable", (function () {
                    t.$container[0].classList.remove("select2-container--disabled")
                })), this.on("disable", (function () {
                    t.$container[0].classList.add("select2-container--disabled")
                })), this.on("blur", (function () {
                    t.$container[0].classList.remove("select2-container--focus")
                })), this.on("query", (function (e) {
                    t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, (function (i) {
                        t.trigger("results:all", {data: i, query: e})
                    }))
                })), this.on("query:append", (function (e) {
                    this.dataAdapter.query(e, (function (i) {
                        t.trigger("results:append", {data: i, query: e})
                    }))
                })), this.on("keypress", (function (e) {
                    var i = e.which;
                    t.isOpen() ? i === s.ESC || i === s.TAB || i === s.UP && e.altKey ? (t.close(e), e.preventDefault()) : i === s.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : i === s.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : i === s.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : i === s.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (i === s.ENTER || i === s.SPACE || i === s.DOWN && e.altKey) && (t.open(), e.preventDefault())
                }))
            }, n.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, n.prototype._isChangeMutation = function (t) {
                var e = this;
                if (t.addedNodes && t.addedNodes.length > 0) for (var i = 0; i < t.addedNodes.length; i++) {
                    if (t.addedNodes[i].selected) return !0
                } else {
                    if (t.removedNodes && t.removedNodes.length > 0) return !0;
                    if (Array.isArray(t)) return t.some((function (t) {
                        return e._isChangeMutation(t)
                    }))
                }
                return !1
            }, n.prototype._syncSubtree = function (t) {
                var e = this._isChangeMutation(t), i = this;
                e && this.dataAdapter.current((function (t) {
                    i.trigger("selection:update", {data: t})
                }))
            }, n.prototype.trigger = function (t, e) {
                var i = n.__super__.trigger, s = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                };
                if (void 0 === e && (e = {}), t in s) {
                    var o = s[t], r = {prevented: !1, name: t, args: e};
                    if (i.call(this, o, r), r.prevented) return void (e.prevented = !0)
                }
                i.call(this, t, e)
            }, n.prototype.toggleDropdown = function () {
                this.isDisabled() || (this.isOpen() ? this.close() : this.open())
            }, n.prototype.open = function () {
                this.isOpen() || this.isDisabled() || this.trigger("query", {})
            }, n.prototype.close = function (t) {
                this.isOpen() && this.trigger("close", {originalEvent: t})
            }, n.prototype.isEnabled = function () {
                return !this.isDisabled()
            }, n.prototype.isDisabled = function () {
                return this.options.get("disabled")
            }, n.prototype.isOpen = function () {
                return this.$container[0].classList.contains("select2-container--open")
            }, n.prototype.hasFocus = function () {
                return this.$container[0].classList.contains("select2-container--focus")
            }, n.prototype.focus = function (t) {
                this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), this.trigger("focus", {}))
            }, n.prototype.enable = function (t) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]);
                var e = !t[0];
                this.$element.prop("disabled", e)
            }, n.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var t = [];
                return this.dataAdapter.current((function (e) {
                    t = e
                })), t
            }, n.prototype.val = function (t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                var e = t[0];
                Array.isArray(e) && (e = e.map((function (t) {
                    return t.toString()
                }))), this.$element.val(e).trigger("input").trigger("change")
            }, n.prototype.destroy = function () {
                this.$container.remove(), this._observer.disconnect(), this._observer = null, this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", i.GetData(this.$element[0], "old-tabindex")), this.$element[0].classList.remove("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), i.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, n.prototype.render = function () {
                var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container[0].classList.add("select2-container--" + this.options.get("theme")), i.StoreData(e[0], "element", this.$element), e
            }, n
        })), e.define("select2/dropdown/attachContainer", [], (function () {
            function t(t, e, i) {
                t.call(this, e, i)
            }

            return t.prototype.position = function (t, e, i) {
                i.find(".dropdown-wrapper").append(e), e[0].classList.add("select2-dropdown--below"), i[0].classList.add("select2-container--below")
            }, t
        })), e.define("select2/dropdown/stopPropagation", [], (function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                t.call(this, e, i);
                this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function (t) {
                    t.stopPropagation()
                }))
            }, t
        })), e.define("select2/selection/stopPropagation", [], (function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, i) {
                t.call(this, e, i);
                this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function (t) {
                    t.stopPropagation()
                }))
            }, t
        })), i = function (t) {
            var e, i, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                n = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                o = Array.prototype.slice;
            if (t.event.fixHooks) for (var r = s.length; r;) t.event.fixHooks[s[--r]] = t.event.mouseHooks;
            var a = t.event.special.mousewheel = {
                version: "3.1.12", setup: function () {
                    if (this.addEventListener) for (var e = n.length; e;) this.addEventListener(n[--e], l, !1); else this.onmousewheel = l;
                    t.data(this, "mousewheel-line-height", a.getLineHeight(this)), t.data(this, "mousewheel-page-height", a.getPageHeight(this))
                }, teardown: function () {
                    if (this.removeEventListener) for (var e = n.length; e;) this.removeEventListener(n[--e], l, !1); else this.onmousewheel = null;
                    t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
                }, getLineHeight: function (e) {
                    var i = t(e), s = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                    return s.length || (s = t("body")), parseInt(s.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
                }, getPageHeight: function (e) {
                    return t(e).height()
                }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
            };

            function l(s) {
                var n = s || window.event, r = o.call(arguments, 1), l = 0, u = 0, d = 0, p = 0, f = 0, g = 0;
                if ((s = t.event.fix(n)).type = "mousewheel", "detail" in n && (d = -1 * n.detail), "wheelDelta" in n && (d = n.wheelDelta), "wheelDeltaY" in n && (d = n.wheelDeltaY), "wheelDeltaX" in n && (u = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (u = -1 * d, d = 0), l = 0 === d ? u : d, "deltaY" in n && (l = d = -1 * n.deltaY), "deltaX" in n && (u = n.deltaX, 0 === d && (l = -1 * u)), 0 !== d || 0 !== u) {
                    if (1 === n.deltaMode) {
                        var m = t.data(this, "mousewheel-line-height");
                        l *= m, d *= m, u *= m
                    } else if (2 === n.deltaMode) {
                        var v = t.data(this, "mousewheel-page-height");
                        l *= v, d *= v, u *= v
                    }
                    if (p = Math.max(Math.abs(d), Math.abs(u)), (!i || p < i) && (i = p, h(n, p) && (i /= 40)), h(n, p) && (l /= 40, u /= 40, d /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / i), u = Math[u >= 1 ? "floor" : "ceil"](u / i), d = Math[d >= 1 ? "floor" : "ceil"](d / i), a.settings.normalizeOffset && this.getBoundingClientRect) {
                        var _ = this.getBoundingClientRect();
                        f = s.clientX - _.left, g = s.clientY - _.top
                    }
                    return s.deltaX = u, s.deltaY = d, s.deltaFactor = i, s.offsetX = f, s.offsetY = g, s.deltaMode = 0, r.unshift(s, l, u, d), e && clearTimeout(e), e = setTimeout(c, 200), (t.event.dispatch || t.event.handle).apply(this, r)
                }
            }

            function c() {
                i = null
            }

            function h(t, e) {
                return a.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
            }

            t.fn.extend({
                mousewheel: function (t) {
                    return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                }, unmousewheel: function (t) {
                    return this.unbind("mousewheel", t)
                }
            })
        }, "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], i) : "object" == typeof exports ? module.exports = i : i(t), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function (t, e, i, s, n) {
            if (null == t.fn.select2) {
                var o = ["open", "close", "destroy"];
                t.fn.select2 = function (e) {
                    if ("object" == typeof (e = e || {})) return this.each((function () {
                        var s = t.extend(!0, {}, e);
                        new i(t(this), s)
                    })), this;
                    if ("string" == typeof e) {
                        var s, r = Array.prototype.slice.call(arguments, 1);
                        return this.each((function () {
                            var t = n.GetData(this, "select2");
                            null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), s = t[e].apply(t, r)
                        })), o.indexOf(e) > -1 ? this : s
                    }
                    throw new Error("Invalid arguments for Select2: " + e)
                }
            }
            return null == t.fn.select2.defaults && (t.fn.select2.defaults = s), i
        })), {define: e.define, require: e.require}
    }(), i = e.require("jquery.select2");
    return t.fn.select2.amd = e, i
})), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}((function (t) {
    function e() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = i(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function i(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, (function () {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        })).on("mouseover", i, s)
    }

    function s() {
        t.datepicker._isDisabledDatepicker(d.inline ? d.dpDiv.parent()[0] : d.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }

    function n(e, i) {
        for (var s in t.extend(e, i), i) null == i[s] && (e[s] = i[s]);
        return e
    }

    function o(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }

    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var r = 0, a = Array.prototype.slice;
    t.cleanData = function (e) {
        return function (i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) try {
                (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove")
            } catch (t) {
            }
            e(i)
        }
    }(t.cleanData), t.widget = function (e, i, s) {
        var n, o, r, a = {}, l = e.split(".")[0], c = l + "-" + (e = e.split(".")[1]);
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][c.toLowerCase()] = function (e) {
            return !!t.data(e, c)
        }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new o(t, e)
        }, t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), (r = new i).options = t.widget.extend({}, r.options), t.each(s, (function (e, s) {
            return t.isFunction(s) ? void (a[e] = function () {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }

                function n(t) {
                    return i.prototype[e].apply(this, t)
                }

                return function () {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }()) : void (a[e] = s)
        })), o.prototype = t.widget.extend(r, {widgetEventPrefix: n && r.widgetEventPrefix || e}, a, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: c
        }), n ? (t.each(n._childConstructors, (function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        })), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function (e) {
        for (var i, s, n = a.call(arguments, 1), o = 0, r = n.length; r > o; o++) for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
        return e
    }, t.widget.bridge = function (e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function (n) {
            var o = "string" == typeof n, r = a.call(arguments, 1), l = this;
            return o ? this.length || "instance" !== n ? this.each((function () {
                var i, o = t.data(this, s);
                return "instance" === n ? (l = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, r)) !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'")
            })) : l = void 0 : (r.length && (n = t.widget.extend.apply(null, [n].concat(r))), this.each((function () {
                var e = t.data(this, s);
                e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
            }))), l
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {classes: {}, disabled: !1, create: null},
        _createWidget: function (e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function () {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, (function (t, i) {
                e._removeClass(i, t)
            })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (e, i) {
            var s, n, o, r = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (r = {}, s = e.split("."), e = s.shift(), s.length) {
                for (n = r[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                n[e] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                r[e] = i
            }
            return this._setOptions(r), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function (e) {
            var i, s, n;
            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function (t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _classes: function (e) {
            function i(i, o) {
                var r, a;
                for (a = 0; i.length > a; a++) r = n.classesElementLookup[i[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), n.classesElementLookup[i[a]] = r, s.push(i[a]), o && e.classes[i[a]] && s.push(e.classes[i[a]])
            }

            var s = [], n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {remove: "_untrackClassesElement"}), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function (e) {
            var i = this;
            t.each(i.classesElementLookup, (function (s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            }))
        },
        _removeClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function (t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t,
                o = {extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s};
            return o.element.toggleClass(this._classes(o), s), this
        },
        _on: function (e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, (function (s, r) {
                function a() {
                    return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                }

                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/), c = l[1] + o.eventNamespace, h = l[2];
                h ? n.on(c, h, a) : i.on(c, a)
            }))
        },
        _off: function (e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function (t, e) {
            var i = this;
            return setTimeout((function () {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }), e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                }, focusout: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, s) {
            var n, o, r = this.options[e];
            if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
        }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, (function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = {effect: n});
            var r, a = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
            "number" == typeof (n = n || {}) && (n = {duration: n}), r = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), r && t.effects && t.effects.effect[a] ? s[e](n) : a !== e && s[a] ? s[a](n.duration, n.easing, o) : s.queue((function (i) {
                t(this)[e](), o && o.call(s[0]), i()
            }))
        }
    })), t.widget, function () {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
        }

        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }

        function s(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {top: 0, left: 0}
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {top: e.scrollTop(), left: e.scrollLeft()}
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: i.pageY, left: i.pageX}
            } : {width: e.outerWidth(), height: e.outerHeight(), offset: e.offset()}
        }

        var n, o = Math.max, r = Math.abs, a = /left|center|right/, l = /top|center|bottom/,
            c = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, u = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function () {
                if (void 0 !== n) return n;
                var e, i,
                    s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = s.children()[0];
                return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), e === (i = o.offsetWidth) && (i = s[0].clientWidth), s.remove(), n = e - i
            }, getScrollInfo: function (e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            }, getWithinInfo: function (e) {
                var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: !s && !n ? t(e).offset() : {left: 0, top: 0},
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        }, t.fn.position = function (n) {
            if (!n || !n.of) return d.apply(this, arguments);
            n = t.extend({}, n);
            var u, p, f, g, m, v, _ = t(n.of), y = t.position.getWithinInfo(n.within), b = t.position.getScrollInfo(y),
                w = (n.collision || "flip").split(" "), x = {};
            return v = s(_), _[0].preventDefault && (n.at = "left top"), p = v.width, f = v.height, g = v.offset, m = t.extend({}, g), t.each(["my", "at"], (function () {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = c.exec(i[0]), e = c.exec(i[1]), x[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
            })), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(x.at, p, f), m.left += u[0], m.top += u[1], this.each((function () {
                var s, a, l = t(this), c = l.outerWidth(), h = l.outerHeight(), d = i(this, "marginLeft"),
                    v = i(this, "marginTop"), k = c + d + i(this, "marginRight") + b.width,
                    C = h + v + i(this, "marginBottom") + b.height, T = t.extend({}, m),
                    D = e(x.my, l.outerWidth(), l.outerHeight());
                "right" === n.my[0] ? T.left -= c : "center" === n.my[0] && (T.left -= c / 2), "bottom" === n.my[1] ? T.top -= h : "center" === n.my[1] && (T.top -= h / 2), T.left += D[0], T.top += D[1], s = {
                    marginLeft: d,
                    marginTop: v
                }, t.each(["left", "top"], (function (e, i) {
                    t.ui.position[w[e]] && t.ui.position[w[e]][i](T, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: c,
                        elemHeight: h,
                        collisionPosition: s,
                        collisionWidth: k,
                        collisionHeight: C,
                        offset: [u[0] + D[0], u[1] + D[1]],
                        my: n.my,
                        at: n.at,
                        within: y,
                        elem: l
                    })
                })), n.using && (a = function (t) {
                    var e = g.left - T.left, i = e + p - c, s = g.top - T.top, a = s + f - h, u = {
                        target: {element: _, left: g.left, top: g.top, width: p, height: f},
                        element: {element: l, left: T.left, top: T.top, width: c, height: h},
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    c > p && p > r(e + i) && (u.horizontal = "center"), h > f && f > r(s + a) && (u.vertical = "middle"), u.important = o(r(e), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, t, u)
                }), l.offset(t.extend(T, {using: a}))
            }))
        }, t.ui.position = {
            fit: {
                left: function (t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, r = s.width,
                        a = t.left - e.collisionPosition.marginLeft, l = n - a, c = a + e.collisionWidth - r - n;
                    e.collisionWidth > r ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - r - n, t.left += l - i) : t.left = c > 0 && 0 >= l ? n : l > c ? n + r - e.collisionWidth : n : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = o(t.left - a, t.left)
                }, top: function (t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, r = e.within.height,
                        a = t.top - e.collisionPosition.marginTop, l = n - a, c = a + e.collisionHeight - r - n;
                    e.collisionHeight > r ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - r - n, t.top += l - i) : t.top = c > 0 && 0 >= l ? n : l > c ? n + r - e.collisionHeight : n : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = o(t.top - a, t.top)
                }
            }, flip: {
                left: function (t, e) {
                    var i, s, n = e.within, o = n.offset.left + n.scrollLeft, a = n.width,
                        l = n.isWindow ? n.scrollLeft : n.offset.left, c = t.left - e.collisionPosition.marginLeft,
                        h = c - l, u = c + e.collisionWidth - a - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > h ? (0 > (i = t.left + d + p + f + e.collisionWidth - a - o) || r(h) > i) && (t.left += d + p + f) : u > 0 && (((s = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > r(s)) && (t.left += d + p + f))
                }, top: function (t, e) {
                    var i, s, n = e.within, o = n.offset.top + n.scrollTop, a = n.height,
                        l = n.isWindow ? n.scrollTop : n.offset.top, c = t.top - e.collisionPosition.marginTop,
                        h = c - l, u = c + e.collisionHeight - a - l,
                        d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        f = -2 * e.offset[1];
                    0 > h ? (0 > (s = t.top + d + p + f + e.collisionHeight - a - o) || r(h) > s) && (t.top += d + p + f) : u > 0 && (((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || u > r(i)) && (t.top += d + p + f))
                }
            }, flipfit: {
                left: function () {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(), t.ui.position, t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo((function (e) {
            return function (i) {
                return !!t.data(i, e)
            }
        })) : function (e, i, s) {
            return !!t.data(e, s[3])
        }
    }), t.fn.extend({
        disableSelection: function () {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.on(t + ".ui-disableSelection", (function (t) {
                    t.preventDefault()
                }))
            }
        }(), enableSelection: function () {
            return this.off(".ui-disableSelection")
        }
    });
    var l = "ui-effects-", c = "ui-effects-style", h = "ui-effects-animated", u = t;
    t.effects = {effect: {}}, function (t, e) {
        function i(t, e, i) {
            var s = h[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function s(i) {
            var s = l(), n = s._rgba = [];
            return i = i.toLowerCase(), p(a, (function (t, o) {
                var r, a = o.re.exec(i), l = a && o.parse(a), h = o.space || "rgba";
                return l ? (r = s[h](l), s[c[h].cache] = r[c[h].cache], n = s._rgba = r._rgba, !1) : e
            })), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
        }

        function n(t, e, i) {
            return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var o, r = /^([\-+])=\s*(\d+\.?\d*)/, a = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }], l = t.Color = function (e, i, s, n) {
                return new t.Color.fn.parse(e, i, s, n)
            }, c = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, h = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, u = l.support = {},
            d = t("<p>")[0], p = t.each;
        d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(c, (function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        })), l.fn = t.extend(l.prototype, {
            parse: function (n, r, a, h) {
                if (n === e) return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = t(n).css(r), r = e);
                var u = this, d = t.type(n), f = this._rgba = [];
                return r !== e && (n = [n, r, a, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (p(c.rgba.props, (function (t, e) {
                    f[e.idx] = i(n[e.idx], e)
                })), this) : "object" === d ? (p(c, n instanceof l ? function (t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                } : function (e, s) {
                    var o = s.cache;
                    p(s.props, (function (t, e) {
                        if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t]) return;
                            u[o] = s.to(u._rgba)
                        }
                        u[o][e.idx] = i(n[t], e, !0)
                    })), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                }), this) : e
            }, is: function (t) {
                var i = l(t), s = !0, n = this;
                return p(c, (function (t, o) {
                    var r, a = i[o.cache];
                    return a && (r = n[o.cache] || o.to && o.to(n._rgba) || [], p(o.props, (function (t, i) {
                        return null != a[i.idx] ? s = a[i.idx] === r[i.idx] : e
                    }))), s
                })), s
            }, _space: function () {
                var t = [], e = this;
                return p(c, (function (i, s) {
                    e[s.cache] && t.push(i)
                })), t.pop()
            }, transition: function (t, e) {
                var s = l(t), n = s._space(), o = c[n], r = 0 === this.alpha() ? l("transparent") : this,
                    a = r[o.cache] || o.to(r._rgba), u = a.slice();
                return s = s[o.cache], p(o.props, (function (t, n) {
                    var o = n.idx, r = a[o], l = s[o], c = h[n.type] || {};
                    null !== l && (null === r ? u[o] = l : (c.mod && (l - r > c.mod / 2 ? r += c.mod : r - l > c.mod / 2 && (r -= c.mod)), u[o] = i((l - r) * e + r, n)))
                })), this[n](u)
            }, blend: function (e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), n = l(e)._rgba;
                return l(t.map(i, (function (t, e) {
                    return (1 - s) * n[e] + s * t
                })))
            }, toRgbaString: function () {
                var e = "rgba(", i = t.map(this._rgba, (function (t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                }));
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            }, toHslaString: function () {
                var e = "hsla(", i = t.map(this.hsla(), (function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                }));
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            }, toHexString: function (e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, (function (t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                })).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, r = t[3], a = Math.max(s, n, o),
                l = Math.min(s, n, o), c = a - l, h = a + l, u = .5 * h;
            return e = l === a ? 0 : s === a ? 60 * (n - o) / c + 360 : n === a ? 60 * (o - s) / c + 120 : 60 * (s - n) / c + 240, i = 0 === c ? 0 : .5 >= u ? c / h : c / (2 - h), [Math.round(e) % 360, i, u, null == r ? 1 : r]
        }, c.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], o = t[3], r = .5 >= s ? s * (1 + i) : s + i - s * i, a = 2 * s - r;
            return [Math.round(255 * n(a, r, e + 1 / 3)), Math.round(255 * n(a, r, e)), Math.round(255 * n(a, r, e - 1 / 3)), o]
        }, p(c, (function (s, n) {
            var o = n.props, a = n.cache, c = n.to, h = n.from;
            l.fn[s] = function (s) {
                if (c && !this[a] && (this[a] = c(this._rgba)), s === e) return this[a].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice();
                return p(o, (function (t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                })), h ? ((n = l(h(d)))[a] = d, n) : l(d)
            }, p(o, (function (e, i) {
                l.fn[e] || (l.fn[e] = function (n) {
                    var o, a = t.type(n), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, c = this[l](),
                        h = c[i.idx];
                    return "undefined" === a ? h : ("function" === a && (n = n.call(this, h), a = t.type(n)), null == n && i.empty ? this : ("string" === a && ((o = r.exec(n)) && (n = h + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[i.idx] = n, this[l](c)))
                })
            }))
        })), l.hook = function (e) {
            var i = e.split(" ");
            p(i, (function (e, i) {
                t.cssHooks[i] = {
                    set: function (e, n) {
                        var o, r, a = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                            if (n = l(o || n), !u.rgba && 1 !== n._rgba[3]) {
                                for (r = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && r && r.style;) try {
                                    a = t.css(r, "backgroundColor"), r = r.parentNode
                                } catch (t) {
                                }
                                n = n.blend(a && "transparent" !== a ? a : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (t) {
                        }
                    }
                }, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            }))
        }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
            expand: function (t) {
                var e = {};
                return p(["Top", "Right", "Bottom", "Left"], (function (i, s) {
                    e["border" + s + "Color"] = t
                })), e
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(u), function () {
        function e(e) {
            var i, s,
                n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                o = {};
            if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) "string" == typeof n[i = n[s]] && (o[t.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
            return o
        }

        function i(e, i) {
            var s, o, r = {};
            for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (r[s] = o));
            return r
        }

        var s = ["add", "remove", "toggle"], n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], (function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (u.style(t.elem, i, t.end), t.setAttr = !0)
            }
        })), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function (n, o, r, a) {
            var l = t.speed(o, r, a);
            return this.queue((function () {
                var o, r = t(this), a = r.attr("class") || "", c = l.children ? r.find("*").addBack() : r;
                c = c.map((function () {
                    return {el: t(this), start: e(this)}
                })), (o = function () {
                    t.each(s, (function (t, e) {
                        n[e] && r[e + "Class"](n[e])
                    }))
                })(), c = c.map((function () {
                    return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                })), r.attr("class", a), c = c.map((function () {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {
                        queue: !1, complete: function () {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                })), t.when.apply(t, c.get()).done((function () {
                    o(), t.each(arguments, (function () {
                        var e = this.el;
                        t.each(this.diff, (function (t) {
                            e.css(t, "")
                        }))
                    })), l.complete.call(r[0])
                }))
            }))
        }, t.fn.extend({
            addClass: function (e) {
                return function (i, s, n, o) {
                    return s ? t.effects.animateClass.call(this, {add: i}, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.addClass), removeClass: function (e) {
                return function (i, s, n, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.removeClass), toggleClass: function (e) {
                return function (i, s, n, o, r) {
                    return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {add: i} : {remove: i}, n, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: i}, s, n, o)
                }
            }(t.fn.toggleClass), switchClass: function (e, i, s, n, o) {
                return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, o)
            }
        })
    }(), function () {
        function e(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }

        function i(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
        }

        function s(t, e) {
            var i = e.outerWidth(), s = e.outerHeight(),
                n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
            return {
                top: parseFloat(n[1]) || 0,
                right: "auto" === n[2] ? i : parseFloat(n[2]),
                bottom: "auto" === n[3] ? s : parseFloat(n[3]),
                left: parseFloat(n[4]) || 0
            }
        }

        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
            return function (i) {
                return !!t(i).data(h) || e(i)
            }
        }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
            save: function (t, e) {
                for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(l + e[i], t[0].style[e[i]])
            }, restore: function (t, e) {
                for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(l + e[s]), t.css(e[s], i))
            }, setMode: function (t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float")},
                    s = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), n = {width: e.width(), height: e.height()}, o = document.activeElement;
                try {
                    o.id
                } catch (t) {
                    o = document.body
                }
                return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], (function (t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                })), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show()
            }, removeWrapper: function (e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
            }
        }), t.extend(t.effects, {
            version: "1.12.1", define: function (e, i, s) {
                return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
            }, scaledDimensions: function (t, e, i) {
                if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                var s = "horizontal" !== i ? (e || 100) / 100 : 1, n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * n,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * n,
                    outerWidth: t.outerWidth() * s
                }
            }, clipToBox: function (t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                }
            }, unshift: function (t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
            }, saveStyle: function (t) {
                t.data(c, t[0].style.cssText)
            }, restoreStyle: function (t) {
                t[0].style.cssText = t.data(c) || "", t.removeData(c)
            }, mode: function (t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
            }, getBaseline: function (t, e) {
                var i, s;
                switch (t[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {x: s, y: i}
            }, createPlaceholder: function (e) {
                var i, s = e.css("position"), n = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    float: e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(l + "placeholder", i)), e.css({
                    position: s,
                    left: n.left,
                    top: n.top
                }), i
            }, removePlaceholder: function (t) {
                var e = l + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e))
            }, cleanUp: function (e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
            }, setTransition: function (e, i, s, n) {
                return n = n || {}, t.each(i, (function (t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                })), n
            }
        }), t.fn.extend({
            effect: function () {
                function i(e) {
                    function i() {
                        t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e()
                    }

                    var r = t(this);
                    s.mode = u.shift(), !1 === t.uiBackCompat || o ? "none" === s.mode ? (r[c](), i()) : n.call(r[0], s, (function () {
                        r.removeData(h), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), i()
                    })) : (r.is(":hidden") ? "hide" === c : "show" === c) ? (r[c](), i()) : n.call(r[0], s, i)
                }

                var s = e.apply(this, arguments), n = t.effects.effect[s.effect], o = n.mode, r = s.queue,
                    a = r || "fx", l = s.complete, c = s.mode, u = [], d = function (e) {
                        var i = t(this), s = t.effects.mode(i, c) || o;
                        i.data(h, !0), u.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                    };
                return t.fx.off || !n ? c ? this[c](s.duration, l) : this.each((function () {
                    l && l.call(this)
                })) : !1 === r ? this.each(d).each(i) : this.queue(a, d).queue(a, i)
            }, show: function (t) {
                return function (s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "show", this.effect.call(this, n)
                }
            }(t.fn.show), hide: function (t) {
                return function (s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "hide", this.effect.call(this, n)
                }
            }(t.fn.hide), toggle: function (t) {
                return function (s) {
                    if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "toggle", this.effect.call(this, n)
                }
            }(t.fn.toggle), cssUnit: function (e) {
                var i = this.css(e), s = [];
                return t.each(["em", "px", "%", "pt"], (function (t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                })), s
            }, cssClip: function (t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
            }, transfer: function (e, i) {
                var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), r = t("body"),
                    a = o ? r.scrollTop() : 0, l = o ? r.scrollLeft() : 0, c = n.offset(),
                    h = {top: c.top - a, left: c.left - l, height: n.innerHeight(), width: n.innerWidth()},
                    u = s.offset(),
                    d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                        top: u.top - a,
                        left: u.left - l,
                        height: s.innerHeight(),
                        width: s.innerWidth(),
                        position: o ? "fixed" : "absolute"
                    }).animate(h, e.duration, e.easing, (function () {
                        d.remove(), t.isFunction(i) && i()
                    }))
            }
        }), t.fx.step.clip = function (e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            })
        }
    }(), function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], (function (t, i) {
            e[i] = function (e) {
                return Math.pow(e, t + 2)
            }
        })), t.extend(e, {
            Sine: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, Circ: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, Elastic: function (t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            }, Back: function (t) {
                return t * t * (3 * t - 2)
            }, Bounce: function (t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), t.each(e, (function (e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function (t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        }))
    }();
    t.effects;
    t.effects.define("blind", "hide", (function (e, i) {
        var s = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            }, n = t(this), o = e.direction || "up", r = n.cssClip(), a = {clip: t.extend({}, r)},
            l = t.effects.createPlaceholder(n);
        a.clip[s[o][0]] = a.clip[s[o][1]], "show" === e.mode && (n.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), n.animate(a, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    })), t.effects.define("bounce", (function (e, i) {
        var s, n, o, r = t(this), a = e.mode, l = "hide" === a, c = "show" === a, h = e.direction || "up",
            u = e.distance, d = e.times || 5, p = 2 * d + (c || l ? 1 : 0), f = e.duration / p, g = e.easing,
            m = "up" === h || "down" === h ? "top" : "left", v = "up" === h || "left" === h, _ = 0,
            y = r.queue().length;
        for (t.effects.createPlaceholder(r), o = r.css(m), u || (u = r["top" === m ? "outerHeight" : "outerWidth"]() / 3), c && ((n = {opacity: 1})[m] = o, r.css("opacity", 0).css(m, v ? 2 * -u : 2 * u).animate(n, f, g)), l && (u /= Math.pow(2, d - 1)), (n = {})[m] = o; d > _; _++) (s = {})[m] = (v ? "-=" : "+=") + u, r.animate(s, f, g).animate(n, f, g), u = l ? 2 * u : u / 2;
        l && ((s = {opacity: 0})[m] = (v ? "-=" : "+=") + u, r.animate(s, f, g)), r.queue(i), t.effects.unshift(r, y, p + 1)
    })), t.effects.define("clip", "hide", (function (e, i) {
        var s, n = {}, o = t(this), r = e.direction || "vertical", a = "both" === r, l = a || "horizontal" === r,
            c = a || "vertical" === r;
        s = o.cssClip(), n.clip = {
            top: c ? (s.bottom - s.top) / 2 : s.top,
            right: l ? (s.right - s.left) / 2 : s.right,
            bottom: c ? (s.bottom - s.top) / 2 : s.bottom,
            left: l ? (s.right - s.left) / 2 : s.left
        }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    })), t.effects.define("drop", "hide", (function (e, i) {
        var s, n = t(this), o = "show" === e.mode, r = e.direction || "left",
            a = "up" === r || "down" === r ? "top" : "left", l = "up" === r || "left" === r ? "-=" : "+=",
            c = "+=" === l ? "-=" : "+=", h = {opacity: 0};
        t.effects.createPlaceholder(n), s = e.distance || n["top" === a ? "outerHeight" : "outerWidth"](!0) / 2, h[a] = l + s, o && (n.css(h), h[a] = c + s, h.opacity = 1), n.animate(h, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    })), t.effects.define("explode", "hide", (function (e, i) {
        function s() {
            v.push(this), v.length === h * u && (d.css({visibility: "visible"}), t(v).remove(), i())
        }

        var n, o, r, a, l, c, h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, u = h, d = t(this),
            p = "show" === e.mode, f = d.show().css("visibility", "hidden").offset(), g = Math.ceil(d.outerWidth() / u),
            m = Math.ceil(d.outerHeight() / h), v = [];
        for (n = 0; h > n; n++) for (a = f.top + n * m, c = n - (h - 1) / 2, o = 0; u > o; o++) r = f.left + o * g, l = o - (u - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -o * g,
            top: -n * m
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: g,
            height: m,
            left: r + (p ? l * g : 0),
            top: a + (p ? c * m : 0),
            opacity: p ? 0 : 1
        }).animate({
            left: r + (p ? 0 : l * g),
            top: a + (p ? 0 : c * m),
            opacity: p ? 1 : 0
        }, e.duration || 500, e.easing, s)
    })), t.effects.define("fade", "toggle", (function (e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({opacity: s ? 1 : 0}, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    })), t.effects.define("fold", "hide", (function (e, i) {
        var s = t(this), n = e.mode, o = "show" === n, r = "hide" === n, a = e.size || 15, l = /([0-9]+)%/.exec(a),
            c = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"], h = e.duration / 2,
            u = t.effects.createPlaceholder(s), d = s.cssClip(), p = {clip: t.extend({}, d)},
            f = {clip: t.extend({}, d)}, g = [d[c[0]], d[c[1]]], m = s.queue().length;
        l && (a = parseInt(l[1], 10) / 100 * g[r ? 0 : 1]), p.clip[c[0]] = a, f.clip[c[0]] = a, f.clip[c[1]] = 0, o && (s.cssClip(f.clip), u && u.css(t.effects.clipToBox(f)), f.clip = d), s.queue((function (i) {
            u && u.animate(t.effects.clipToBox(p), h, e.easing).animate(t.effects.clipToBox(f), h, e.easing), i()
        })).animate(p, h, e.easing).animate(f, h, e.easing).queue(i), t.effects.unshift(s, m, 4)
    })), t.effects.define("highlight", "show", (function (e, i) {
        var s = t(this), n = {backgroundColor: s.css("backgroundColor")};
        "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(n, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
    })), t.effects.define("size", (function (e, i) {
        var s, n, o, r = t(this), a = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = e.mode, u = "effect" !== h,
            d = e.scale || "both", p = e.origin || ["middle", "center"], f = r.css("position"), g = r.position(),
            m = t.effects.scaledDimensions(r), v = e.from || m, _ = e.to || t.effects.scaledDimensions(r, 0);
        t.effects.createPlaceholder(r), "show" === h && (o = v, v = _, _ = o), n = {
            from: {
                y: v.height / m.height,
                x: v.width / m.width
            }, to: {y: _.height / m.height, x: _.width / m.width}
        }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (v = t.effects.setTransition(r, l, n.from.y, v), _ = t.effects.setTransition(r, l, n.to.y, _)), n.from.x !== n.to.x && (v = t.effects.setTransition(r, c, n.from.x, v), _ = t.effects.setTransition(r, c, n.to.x, _))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (v = t.effects.setTransition(r, a, n.from.y, v), _ = t.effects.setTransition(r, a, n.to.y, _)), p && (s = t.effects.getBaseline(p, m), v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left, _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left), r.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(a), c = c.concat(["marginLeft", "marginRight"]), r.find("*[width]").each((function () {
            var i = t(this), s = t.effects.scaledDimensions(i), o = {
                height: s.height * n.from.y,
                width: s.width * n.from.x,
                outerHeight: s.outerHeight * n.from.y,
                outerWidth: s.outerWidth * n.from.x
            }, r = {
                height: s.height * n.to.y,
                width: s.width * n.to.x,
                outerHeight: s.height * n.to.y,
                outerWidth: s.width * n.to.x
            };
            n.from.y !== n.to.y && (o = t.effects.setTransition(i, l, n.from.y, o), r = t.effects.setTransition(i, l, n.to.y, r)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, c, n.from.x, o), r = t.effects.setTransition(i, c, n.to.x, r)), u && t.effects.saveStyle(i), i.css(o), i.animate(r, e.duration, e.easing, (function () {
                u && t.effects.restoreStyle(i)
            }))
        }))), r.animate(_, {
            queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                var e = r.offset();
                0 === _.opacity && r.css("opacity", v.opacity), u || (r.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(r)), i()
            }
        })
    })), t.effects.define("scale", (function (e, i) {
        var s = t(this), n = e.mode,
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) || "effect" !== n ? 0 : 100),
            r = t.extend(!0, {
                from: t.effects.scaledDimensions(s),
                to: t.effects.scaledDimensions(s, o, e.direction || "both"),
                origin: e.origin || ["middle", "center"]
            }, e);
        e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i)
    })), t.effects.define("puff", "hide", (function (e, i) {
        var s = t.extend(!0, {}, e, {fade: !0, percent: parseInt(e.percent, 10) || 150});
        t.effects.effect.scale.call(this, s, i)
    })), t.effects.define("pulsate", "show", (function (e, i) {
        var s = t(this), n = e.mode, o = "show" === n, r = o || "hide" === n, a = 2 * (e.times || 5) + (r ? 1 : 0),
            l = e.duration / a, c = 0, h = 1, u = s.queue().length;
        for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); a > h; h++) s.animate({opacity: c}, l, e.easing), c = 1 - c;
        s.animate({opacity: c}, l, e.easing), s.queue(i), t.effects.unshift(s, u, a + 1)
    })), t.effects.define("shake", (function (e, i) {
        var s = 1, n = t(this), o = e.direction || "left", r = e.distance || 20, a = e.times || 3, l = 2 * a + 1,
            c = Math.round(e.duration / l), h = "up" === o || "down" === o ? "top" : "left",
            u = "up" === o || "left" === o, d = {}, p = {}, f = {}, g = n.queue().length;
        for (t.effects.createPlaceholder(n), d[h] = (u ? "-=" : "+=") + r, p[h] = (u ? "+=" : "-=") + 2 * r, f[h] = (u ? "-=" : "+=") + 2 * r, n.animate(d, c, e.easing); a > s; s++) n.animate(p, c, e.easing).animate(f, c, e.easing);
        n.animate(p, c, e.easing).animate(d, c / 2, e.easing).queue(i), t.effects.unshift(n, g, l + 1)
    })), t.effects.define("slide", "show", (function (e, i) {
        var s, n, o = t(this),
            r = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]},
            a = e.mode, l = e.direction || "left", c = "up" === l || "down" === l ? "top" : "left",
            h = "up" === l || "left" === l, u = e.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0), d = {};
        t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[c], d[c] = (h ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[r[l][1]] = d.clip[r[l][0]], "show" === a && (o.cssClip(d.clip), o.css(c, d[c]), d.clip = s, d[c] = n), o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    })), !1 !== t.uiBackCompat && t.effects.define("transfer", (function (e, i) {
        t(this).transfer(e, i)
    })), t.ui.focusable = function (e, i) {
        var s, n, o, r, a, l = e.nodeName.toLowerCase();
        return "area" === l ? (n = (s = e.parentNode).name, !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + n + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !e.disabled) && ((a = t(e).closest("fieldset")[0]) && (r = !a.disabled)) : r = "a" === l && e.href || i, r && t(e).is(":visible") && function (t) {
            for (var e = t.css("visibility"); "inherit" === e;) e = (t = t.parent()).css("visibility");
            return "hidden" !== e
        }(t(e)))
    }, t.extend(t.expr[":"], {
        focusable: function (e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"))
        }
    }), t.ui.focusable, t.fn.form = function () {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
    }, t.ui.formResetMixin = {
        _formResetHandler: function () {
            var e = t(this);
            setTimeout((function () {
                var i = e.data("ui-form-reset-instances");
                t.each(i, (function () {
                    this.refresh()
                }))
            }))
        }, _bindFormResetHandler: function () {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
            }
        }, _unbindFormResetHandler: function () {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], (function (e, i) {
        function s(e, i, s, o) {
            return t.each(n, (function () {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            })), i
        }

        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], o = i.toLowerCase(), r = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function (e) {
            return void 0 === e ? r["inner" + i].call(this) : this.each((function () {
                t(this).css(o, s(this, e) + "px")
            }))
        }, t.fn["outer" + i] = function (e, n) {
            return "number" != typeof e ? r["outer" + i].call(this, e) : this.each((function () {
                t(this).css(o, s(this, e, !0, n) + "px")
            }))
        }
    })), t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.escapeSelector = function () {
        var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function (e) {
            return e.replace(t, "\\$1")
        }
    }(), t.fn.labels = function () {
        var e, i, s, n, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (s = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
    }, t.fn.scrollParent = function (e) {
        var i = this.css("position"), s = "absolute" === i, n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents().filter((function () {
                var e = t(this);
                return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            })).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }, t.extend(t.expr[":"], {
        tabbable: function (e) {
            var i = t.attr(e, "tabindex"), s = null != i;
            return (!s || i >= 0) && t.ui.focusable(e, s)
        }
    }), t.fn.extend({
        uniqueId: function () {
            var t = 0;
            return function () {
                return this.each((function () {
                    this.id || (this.id = "ui-id-" + ++t)
                }))
            }
        }(), removeUniqueId: function () {
            return this.each((function () {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            }))
        }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function () {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {header: this.active, panel: this.active.length ? this.active.next() : t()}
        },
        _createIcons: function () {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void ("icons" === t && (this._destroyIcons(), e && this._createIcons())))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function (e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function (e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
        },
        refresh: function () {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function () {
            var e, i = this.options, s = i.heightStyle, n = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each((function () {
                var e = t(this), i = e.uniqueId().attr("id"), s = e.next(), n = s.uniqueId().attr("id");
                e.attr("aria-controls", n), s.attr("aria-labelledby", i)
            })).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each((function () {
                var i = t(this), s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            })), this.headers.each((function () {
                e -= t(this).outerHeight(!0)
            })), this.headers.next().each((function () {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            })).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each((function () {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
            })).height(e))
        },
        _activate: function (e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function (e) {
            var i = {keydown: "_keydown"};
            e && t.each(e.split(" "), (function (t, e) {
                i[e] = "_eventHandler"
            })), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (e) {
            var i, s, n = this.options, o = this.active, r = t(e.currentTarget), a = r[0] === o[0],
                l = a && n.collapsible, c = l ? t() : r.next(), h = o.next(),
                u = {oldHeader: o, oldPanel: h, newHeader: l ? t() : r, newPanel: c};
            e.preventDefault(), a && !n.collapsible || !1 === this._trigger("beforeActivate", e, u) || (n.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = r.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
        },
        _toggle: function (e) {
            var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({"aria-hidden": "true"}), s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter((function () {
                return 0 === parseInt(t(this).attr("tabIndex"), 10)
            })).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function (t, e, i) {
            var s, n, o, r = this, a = 0, l = t.css("box-sizing"), c = t.length && (!e.length || t.index() < e.index()),
                h = this.options.animate || {}, u = c && h.down || h, d = function () {
                    r._toggleComplete(i)
                };
            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || h.easing, o = o || u.duration || h.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function (t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(this.showProps, {
                duration: o, easing: n, complete: d, step: function (t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - a), a = 0)
                }
            })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
        },
        _toggleComplete: function (t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.ui.safeActiveElement = function (t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e
    }, t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-caret-1-e"},
            items: "> *",
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function (t) {
                    t.preventDefault()
                }, "click .ui-menu-item": function (e) {
                    var i = t(e.target), s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"), s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
                    }
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                }, blur: function (e) {
                    this._delay((function () {
                        !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                    }))
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each((function () {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            }))
        },
        _keydown: function (e) {
            var i, s, n, o, r = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    r = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay((function () {
                        delete this.previousFilter
                    }), 1e3)) : delete this.previousFilter
            }
            r && e.preventDefault()
        },
        _activate: function (t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var e, i, s, n, o = this, r = this.options.icons.submenu, a = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = a.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each((function () {
                var e = t(this), i = e.prev(), s = t("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
            })), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function () {
                var e = t(this);
                o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
            })), n = (s = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(s, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function (t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay((function () {
                this._close()
            }), this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        },
        _scrollIntoView: function (e) {
            var i, s, n, o, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + a > r && this.activeMenu.scrollTop(o + n - r + a))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null)
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay((function () {
                this._close(), this._open(t)
            }), this.delay))
        },
        _open: function (e) {
            var i = t.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay((function () {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
            }), this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function (e) {
            return !t(e.target).closest(".ui-menu").length
        },
        _isDivider: function (t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay((function () {
                this.focus(t, e)
            })))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
        },
        nextPage: function (e) {
            var i, s, n;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each((function () {
                return 0 > (i = t(this)).offset().top - s - n
            })), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function (e) {
            var i, s, n;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each((function () {
                return (i = t(this)).offset().top - s + n > 0
            })), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function (e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function () {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
            }))
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, r = "input" === n;
            this.isMultiLine = o || !r && this._isContentEditable(this.element), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (n) {
                    if (this.element.prop("readOnly")) return e = !0, s = !0, void (i = !0);
                    e = !1, s = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", n);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", n);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", n);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", n);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                }, keypress: function (s) {
                    if (e) return e = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                }, input: function (t) {
                    return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function (e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay((function () {
                        delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    }))
                }, menufocus: function (e, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", (function () {
                        t(e.target).trigger(e.originalEvent)
                    }))) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {item: n}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), void ((s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion))))
                }, menuselect: function (e, i) {
                    var s = i.item.data("ui-autocomplete-item"), n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay((function () {
                        this.previous = n, this.selectedItem = s
                    }))), !1 !== this._trigger("select", e, {item: s}) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
                }
            }), this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function (e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
        },
        _closeOnClickOutside: function (t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _initSource: function () {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i, data: e, dataType: "json", success: function (t) {
                        n(t)
                    }, error: function () {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (t) {
            clearTimeout(this.searching), this.searching = this._delay((function () {
                var e = this.term === this._value(), i = this.menu.element.is(":visible"),
                    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
            }), this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function (t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
        },
        _response: function () {
            var e = ++this.requestIndex;
            return t.proxy((function (t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }), this)
        },
        __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function (t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
        },
        _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, (function (e) {
                return "string" == typeof e ? {label: e, value: e} : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            }))
        },
        _suggest: function (e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {mousedown: "_closeOnClickOutside"})
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (e, i) {
            var s = this;
            t.each(i, (function (t, i) {
                s._renderItemData(e, i)
            }))
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function (t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, (function (t) {
                return s.test(t.label || t.value || t)
            }))
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    }), t.ui.autocomplete;
    var d, p = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function () {
            this._enhance()
        },
        _enhance: function () {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function () {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function () {
            var e = this, i = [];
            t.each(this.options.items, (function (s, n) {
                var o, r = {};
                return n ? "controlgroupLabel" === s ? ((o = e.element.find(n)).each((function () {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                })), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void (i = i.concat(o.get()))) : void (t.fn[s] && (r = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {classes: {}}, e.element.find(n).each((function () {
                    var n = t(this), o = n[s]("instance"), a = t.widget.extend({}, r);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), n[s](a);
                        var l = n[s]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || n[s]("instance")), i.push(l[0])
                    }
                })))) : void 0
            })), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function (e) {
            this.childWidgets.each((function () {
                var i = t(this).data("ui-controlgroup-data");
                i && i[e] && i[e]()
            }))
        },
        _updateCornerClass: function (t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function (t, e) {
            var i = "vertical" === this.options.direction, s = {classes: {}};
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], s
        },
        _spinnerOptions: function (t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
        },
        _buttonOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function (t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""},
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"}
                }[t]
            }
        },
        _resolveClassesValues: function (e, i) {
            var s = {};
            return t.each(e, (function (n) {
                var o = i.options.classes[n] || "";
                o = t.trim(o.replace(p, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
            })), s
        },
        _setOption: function (t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
        },
        refresh: function () {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], (function (t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
                } else i._updateCornerClass(e[s](), s)
            })), this._callChildMethod("refresh"))
        }
    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}
        },
        _getCreateOptions: function () {
            var e, i, s = this, n = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each((function () {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
            })), this.originalLabel && (n.label = this.originalLabel), null != (e = this.element[0].disabled) && (n.disabled = e), n
        },
        _create: function () {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function () {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function () {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function () {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function () {
            this._updateIcon(this.element[0].checked)
        },
        widget: function () {
            return this.label
        },
        _getRadioGroup: function () {
            var e = this.element[0].name, i = "input[name='" + t.ui.escapeSelector(e) + "']";
            return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter((function () {
                return 0 === t(this).form().length
            }))).not(this.element) : t([])
        },
        _toggleClasses: function () {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each((function () {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            }))
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function (t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e)) : void this.refresh()) : void 0
        },
        _updateIcon: function (e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function () {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function () {
            var t = this.element[0].checked, e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e})
        }
    }]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {"ui-button": "ui-corner-all"},
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function () {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
        },
        _create: function () {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function (e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function () {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function () {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function (e, i) {
            var s = "iconPosition" !== e, n = s ? this.options.iconPosition : i, o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
        },
        _destroy: function () {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function (t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function (t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function (t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function (t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip()
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
        options: {
            text: !0,
            icons: {primary: null, secondary: null}
        }, _create: function () {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        }, _setOption: function (t, e) {
            return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
        }
    }), t.fn.button = function (e) {
        return function () {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: !1}) : this.checkboxradio.apply(this, arguments))
        }
    }(t.fn.button), t.fn.buttonset = function () {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments))
    }), t.ui.button, t.extend(t.ui, {datepicker: {version: "1.12.1"}}), t.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return n(this._defaults, t || {}), this
        },
        _attachDatepicker: function (e, i) {
            var s, n, o;
            n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
        },
        _newInst: function (e, s) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: s,
                dpDiv: s ? i(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function (e, i) {
            var s, n, o, r = this._get(i, "appendText"), a = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (s = this._get(i, "showOn")) || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)), e[a ? "before" : "after"](i.trigger), i.trigger.on("click", (function () {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            })))
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20), r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function (t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
                    return s
                }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function (e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (e, i, s, o, r) {
            var a, l, c, h, u, d = this._dialogInst;
            return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", d)), n(d.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + h, c / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
        },
        _destroyDatepicker: function (e) {
            var i, s = t(e), n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), d === n && (d = null))
        },
        _enableDatepicker: function (e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each((function () {
                this.disabled = !1
            })).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, (function (t) {
                return t === e ? null : t
            })))
        },
        _disableDatepicker: function (e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each((function () {
                this.disabled = !0
            })).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, (function (t) {
                return t === e ? null : t
            })), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return t.data(e, "datepicker")
            } catch (t) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, i, s) {
            var o, r, a, l, c = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : c ? "all" === i ? t.extend({}, c.settings) : this._get(c, i) : null : (o = i || {}, "string" == typeof i && ((o = {})[i] = s), void (c && (this._curInst === c && this._hideDatepicker(), r = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, o), null !== a && void 0 !== o.dateFormat && void 0 === o.minDate && (c.settings.minDate = this._formatDate(c, a)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), c), this._autoSize(c), this._setDate(c, r), this._updateAlternate(c), this._updateDatepicker(c))))
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function (e) {
            var i, s, n, o = t.datepicker._getInst(e.target), r = !0, a = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var i, s, n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function (e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try {
                t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
            } catch (t) {
            }
            return !0
        },
        _showDatepicker: function (e) {
            var i, s, o, r, a, l, c;
            ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (o = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (n(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each((function () {
                return !(r |= "fixed" === t(this).css("position"))
            })), a = {
                left: t.datepicker._pos[0],
                top: t.datepicker._pos[1]
            }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, r), i.dpDiv.css({
                position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                display: "none",
                left: a.left + "px",
                top: a.top + "px"
            }), i.inline || (l = t.datepicker._get(i, "showAnim"), c = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function (t) {
                for (var e, i; t.length && t[0] !== document;) {
                    if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    t = t.parent()
                }
                return 0
            }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), c) : i.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i)))
        },
        _updateDatepicker: function (e) {
            this.maxRows = 4, d = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e), o = n[1], r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && s.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", 17 * o + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout((function () {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }), 0))
        },
        _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function (e, i, s) {
            var n = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), r = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                c = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + a) : 0), i
        },
        _findPos: function (e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
            return [(i = t(e).offset()).left, i.top]
        },
        _hideDatepicker: function (e) {
            var i, s, n, o, r = this._curInst;
            !r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), n = function () {
                t.datepicker._tidyDialog(r)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), s, n) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, (o = this._get(r, "onClose")) && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if (t.datepicker._curInst) {
                var i = t(e.target), s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (e, i, s) {
            var n = t(e), o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
        },
        _gotoToday: function (e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function (e, i, s) {
            var n = t(e), o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
        },
        _selectDay: function (e, i, s, n) {
            var o, r = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || ((o = this._getInst(r[0])).selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function (e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function (e, i) {
            var s, n = t(e), o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function (t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function (e, i, s) {
            if (null == e || null == i) throw"Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
            var n, o, r, a, l = 0, c = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                h = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, v = -1, _ = -1, y = !1,
                b = function (t) {
                    var i = e.length > n + 1 && e.charAt(n + 1) === t;
                    return i && n++, i
                }, w = function (t) {
                    var e = b(t), s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = RegExp("^\\d{" + ("y" === t ? s : 1) + "," + s + "}"), o = i.substring(l).match(n);
                    if (!o) throw"Missing number at position " + l;
                    return l += o[0].length, parseInt(o[0], 10)
                }, x = function (e, s, n) {
                    var o = -1, r = t.map(b(e) ? n : s, (function (t, e) {
                        return [[e, t]]
                    })).sort((function (t, e) {
                        return -(t[1].length - e[1].length)
                    }));
                    if (t.each(r, (function (t, e) {
                        var s = e[1];
                        return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], l += s.length, !1) : void 0
                    })), -1 !== o) return o + 1;
                    throw"Unknown name at position " + l
                }, k = function () {
                    if (i.charAt(l) !== e.charAt(n)) throw"Unexpected literal at position " + l;
                    l++
                };
            for (n = 0; e.length > n; n++) if (y) "'" !== e.charAt(n) || b("'") ? k() : y = !1; else switch (e.charAt(n)) {
                case"d":
                    v = w("d");
                    break;
                case"D":
                    x("D", u, d);
                    break;
                case"o":
                    _ = w("o");
                    break;
                case"m":
                    m = w("m");
                    break;
                case"M":
                    m = x("M", p, f);
                    break;
                case"y":
                    g = w("y");
                    break;
                case"@":
                    g = (a = new Date(w("@"))).getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                    break;
                case"!":
                    g = (a = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                    break;
                case"'":
                    b("'") ? k() : y = !0;
                    break;
                default:
                    k()
            }
            if (i.length > l && (r = i.substr(l), !/^\s+/.test(r))) throw"Extra/unparsed characters found in date: " + r;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (h >= g ? 0 : -100)), _ > -1) for (m = 1, v = _; !((o = this._getDaysInMonth(g, m - 1)) >= v);) m++, v -= o;
            if ((a = this._daylightSavingAdjust(new Date(g, m - 1, v))).getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw"Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames, l = function (e) {
                    var i = t.length > s + 1 && t.charAt(s + 1) === e;
                    return i && s++, i
                }, c = function (t, e, i) {
                    var s = "" + e;
                    if (l(t)) for (; i > s.length;) s = "0" + s;
                    return s
                }, h = function (t, e, i, s) {
                    return l(t) ? s[e] : i[e]
                }, u = "", d = !1;
            if (e) for (s = 0; t.length > s; s++) if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1; else switch (t.charAt(s)) {
                case"d":
                    u += c("d", e.getDate(), 2);
                    break;
                case"D":
                    u += h("D", e.getDay(), n, o);
                    break;
                case"o":
                    u += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    u += c("m", e.getMonth() + 1, 2);
                    break;
                case"M":
                    u += h("M", e.getMonth(), r, a);
                    break;
                case"y":
                    u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                    break;
                case"@":
                    u += e.getTime();
                    break;
                case"!":
                    u += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    l("'") ? u += "'" : d = !0;
                    break;
                default:
                    u += t.charAt(s)
            }
            return u
        },
        _possibleChars: function (t) {
            var e, i = "", s = !1, n = function (i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++, s
            };
            for (e = 0; t.length > e; e++) if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    i += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    n("'") ? i += "'" : s = !0;
                    break;
                default:
                    i += t.charAt(e)
            }
            return i
        },
        _get: function (t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t), o = n, r = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, r) || n
                } catch (t) {
                    s = e ? "" : s
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (e, i, s) {
            var n = null == i || "" === i ? s : "string" == typeof i ? function (i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (t) {
                }
                for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), r = s.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l;) {
                    switch (l[2] || "d") {
                        case"d":
                        case"D":
                            r += parseInt(l[1], 10);
                            break;
                        case"w":
                        case"W":
                            r += 7 * parseInt(l[1], 10);
                            break;
                        case"m":
                        case"M":
                            o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(n, o));
                            break;
                        case"y":
                        case"Y":
                            n += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(n, o))
                    }
                    l = a.exec(i)
                }
                return new Date(n, o, r)
            }(i) : "number" == typeof i ? isNaN(i) ? s : function (t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }(i) : new Date(i.getTime());
            return (n = n && "Invalid Date" == "" + n ? s : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var s = !e, n = t.selectedMonth, o = t.selectedYear,
                r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _attachHandlers: function (e) {
            var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map((function () {
                var e = {
                    prev: function () {
                        t.datepicker._adjustDate(s, -i, "M")
                    }, next: function () {
                        t.datepicker._adjustDate(s, +i, "M")
                    }, hide: function () {
                        t.datepicker._hideDatepicker()
                    }, today: function () {
                        t.datepicker._gotoToday(s)
                    }, selectDay: function () {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1
                    }, selectYear: function () {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            }))
        },
        _generateHTML: function (t) {
            var e, i, s, n, o, r, a, l, c, h, u, d, p, f, g, m, v, _, y, b, w, x, k, C, T, D, S, A, $, I, P, M, E, O, H,
                N, L, z, W, j = new Date,
                R = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())),
                q = this._get(t, "isRTL"), F = this._get(t, "showButtonPanel"), B = this._get(t, "hideIfNoPrevNext"),
                Y = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t),
                K = this._get(t, "showCurrentAtPos"), V = this._get(t, "stepMonths"), X = 1 !== U[0] || 1 !== U[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(t, "min"), Z = this._getMinMaxDate(t, "max"), J = t.drawMonth - K,
                tt = t.drawYear;
            if (0 > J && (J += 12, tt--), Z) for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - U[0] * U[1] + 1, Z.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) 0 > --J && (J = 11, tt--);
            for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - V, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Y ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, J + V, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? G : R, r = Y ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = F ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (q ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (q ? "" : l) + "</div>" : "", h = parseInt(this._get(t, "firstDay"), 10), h = isNaN(h) ? 0 : h, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), b = "", x = 0; U[0] > x; x++) {
                for (k = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (T = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), D = " ui-corner-all", S = "", X) {
                        if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                S += " ui-datepicker-group-first", D = " ui-corner-" + (q ? "right" : "left");
                                break;
                            case U[1] - 1:
                                S += " ui-datepicker-group-last", D = " ui-corner-" + (q ? "left" : "right");
                                break;
                            default:
                                S += " ui-datepicker-group-middle", D = ""
                        }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === x ? q ? o : s : "") + (/all|right/.test(D) && 0 === x ? q ? s : o : "") + this._generateMonthYearHeader(t, J, tt, Q, Z, x > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", A = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) A += "<th scope='col'" + ((w + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[$ = (w + h) % 7] + "'>" + p[$] + "</span></th>";
                    for (S += A + "</tr></thead><tbody>", I = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(tt, J) - h + 7) % 7, M = Math.ceil((P + I) / 7), E = X && this.maxRows > M ? this.maxRows : M, this.maxRows = E, O = this._daylightSavingAdjust(new Date(tt, J, 1 - P)), H = 0; E > H; H++) {
                        for (S += "<tr>", N = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(O) + "</td>" : "", w = 0; 7 > w; w++) L = m ? m.apply(t.input ? t.input[0] : null, [O]) : [!0, ""], W = (z = O.getMonth() !== J) && !_ || !L[0] || Q && Q > O || Z && O > Z, N += "<td class='" + ((w + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + (O.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || y.getTime() === O.getTime() && y.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + L[1] + (O.getTime() === G.getTime() ? " " + this._currentClass : "") + (O.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === R.getTime() ? " ui-state-highlight" : "") + (O.getTime() === G.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                        S += N + "</tr>"
                    }
                    ++J > 11 && (J = 0, tt++), k += S += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                b += k
            }
            return b += c, t._keyEvent = !1, b
        },
        _generateMonthYearHeader: function (t, e, i, s, n, o, r, a) {
            var l, c, h, u, d, p, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"),
                _ = this._get(t, "showMonthAfterYear"), y = "<div class='ui-datepicker-title'>", b = "";
            if (o || !m) b += "<span class='ui-datepicker-month'>" + r[e] + "</span>"; else {
                for (l = s && s.getFullYear() === i, c = n && n.getFullYear() === i, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++) (!l || h >= s.getMonth()) && (!c || n.getMonth() >= h) && (b += "<option value='" + h + "'" + (h === e ? " selected='selected'" : "") + ">" + a[h] + "</option>");
                b += "</select>"
            }
            if (_ || (y += b + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function (t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? d : e
                })(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
            }
            return y += this._get(t, "yearSuffix"), _ && (y += (!o && m && v ? "" : "&#xa0;") + b), y + "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0), n = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function (t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), r = null, a = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (a += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each((function () {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        })) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new e, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var f = !1;
    t(document).on("mouseup", (function () {
        f = !1
    })), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0},
        _mouseInit: function () {
            var e = this;
            this.element.on("mousedown." + this.widgetName, (function (t) {
                return e._mouseDown(t)
            })).on("click." + this.widgetName, (function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            })), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (e) {
            if (!f) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this, s = 1 === e.which,
                    n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function () {
                    i.mouseDelayMet = !0
                }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), f = !0, !0))
            }
        },
        _mouseMove: function (e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function (e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, f = !1, e.preventDefault()
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    }), t.ui.plugin = {
        add: function (e, i, s) {
            var n, o = t.ui[e].prototype;
            for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
        }, call: function (t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    }, t.ui.safeBlur = function (e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function (e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
        },
        _blockFrames: function (e) {
            this.iframeBlocks = this.document.find(e).map((function () {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            }))
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function (e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter((function () {
                return "fixed" === t(this).css("position")
            })).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _refreshOffsets: function (t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}
        },
        _mouseDrag: function (e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function (e) {
            var i = this, s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function () {
                !1 !== i._trigger("stop", e) && i._clear()
            })) : !1 !== this._trigger("stop", e) && this._clear(), !1
        },
        _mouseUp: function (e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {target: this.element[0]})) : this._clear(), this
        },
        _getHandle: function (e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function (e) {
            var i = this.options, s = t.isFunction(i.helper),
                n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function (t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function () {
            var e = this.offsetParent.offset(), i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {top: 0, left: 0};
            var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var e, i, s, n = this.options, o = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? void (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void (this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), void ((s = (i = t(n.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void (this.containment = null)
        },
        _convertPositionTo: function (t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (t, e) {
            var i, s, n, o, r = this.options, a = this._isRootNode(this.scrollParent[0]), l = t.pageX, c = t.pageY;
            return a && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), r.grid && (n = r.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, c = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - r.grid[1] : n + r.grid[1] : n, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (c = this.originalPageY)), {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function (e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i, s) {
            var n = t.extend({}, i, {item: s.element});
            s.sortables = [], t(s.options.connectToSortable).each((function () {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
            }))
        }, stop: function (e, i, s) {
            var n = t.extend({}, i, {item: s.element});
            s.cancelHelperRemoval = !1, t.each(s.sortables, (function () {
                var t = this;
                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
            }))
        }, drag: function (e, i, s) {
            t.each(s.sortables, (function () {
                var n = !1, o = this;
                o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, (function () {
                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
                }))), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
                    return i.helper[0]
                }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, (function () {
                    this.refreshPositions()
                })), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, (function () {
                    this.refreshPositions()
                })))
            }))
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function (e, i, s) {
            var n = t("body"), o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
        }, stop: function (e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i, s) {
            var n = t(i.helper), o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
        }, stop: function (e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        }, drag: function (e, i, s) {
            var n = s.options, o = !1, r = s.scrollParentNotHidden[0], a = s.document[0];
            r !== a && "HTML" !== r.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + r.offsetHeight - e.pageY < n.scrollSensitivity ? r.scrollTop = o = r.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (r.scrollTop = o = r.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + r.offsetWidth - e.pageX < n.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(a).scrollTop() < n.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < n.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(a).scrollLeft() < n.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < n.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function (e, i, s) {
            var n = s.options;
            s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each((function () {
                var e = t(this), i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            }))
        }, drag: function (e, i, s) {
            var n, o, r, a, l, c, h, u, d, p, f = s.options, g = f.snapTolerance, m = i.offset.left,
                v = m + s.helperProportions.width, _ = i.offset.top, y = _ + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--) c = (l = s.snapElements[d].left - s.margins.left) + s.snapElements[d].width, u = (h = s.snapElements[d].top - s.margins.top) + s.snapElements[d].height, l - g > v || m > c + g || h - g > y || _ > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[d].item})), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(h - y), o = g >= Math.abs(u - _), r = g >= Math.abs(l - v), a = g >= Math.abs(c - m), n && (i.position.top = s._convertPositionTo("relative", {
                top: h - s.helperProportions.height,
                left: 0
            }).top), o && (i.position.top = s._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: c
            }).left)), p = n || o || r || a, "outer" !== f.snapMode && (n = g >= Math.abs(h - _), o = g >= Math.abs(u - y), r = g >= Math.abs(l - m), a = g >= Math.abs(c - v), n && (i.position.top = s._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top), o && (i.position.top = s._convertPositionTo("relative", {
                top: u - s.helperProportions.height,
                left: 0
            }).top), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: c - s.helperProportions.width
            }).left)), !s.snapElements[d].snapping && (n || o || r || a || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[d].item})), s.snapElements[d].snapping = n || o || r || a || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function (e, i, s) {
            var n, o = s.options, r = t.makeArray(t(o.stack)).sort((function (e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            }));
            r.length && (n = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each((function (e) {
                t(this).css("zIndex", n + e)
            })), this.css("zIndex", n + r.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i, s) {
            var n = t(i.helper), o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
        }, stop: function (e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"},
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (t) {
            return parseFloat(t) || 0
        },
        _isNumber: function (t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function (e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1;
            return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        },
        _create: function () {
            var e, i = this.options, s = this;
            this._addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", (function () {
                i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
            })).on("mouseleave", (function () {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var e, i = function (e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _setOption: function (t, e) {
            switch (this._super(t, e), t) {
                case"handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function () {
            var e, i, s, n, o, r = this.options, a = this;
            if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) n = "ui-resizable-" + (e = t.trim(s[i])), o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({zIndex: r.zIndex}), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function (e) {
                var i, s, n, o;
                for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {mousedown: a._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", (function () {
                a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se")
            })), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function () {
            this._handles.remove()
        },
        _mouseCapture: function (e) {
            var i, s, n = !1;
            for (i in this.handles) ((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (e) {
            var i, s, n, o = this.options, r = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {width: r.width(), height: r.height()}, this.originalSize = this._helper ? {
                width: r.outerWidth(),
                height: r.outerHeight()
            } : {width: r.width(), height: r.height()}, this.sizeDiff = {
                width: r.outerWidth() - r.width(),
                height: r.outerHeight() - r.height()
            }, this.originalPosition = {left: i, top: s}, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function (e) {
            var i, s, n = this.originalMousePosition, o = this.axis, r = e.pageX - n.left || 0,
                a = e.pageY - n.top || 0, l = this._change[o];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function (e) {
            this.resizing = !1;
            var i, s, n, o, r, a, l, c = this.options, h = this;
            return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : h.sizeDiff.height, o = s ? 0 : h.sizeDiff.width, r = {
                width: h.helper.width() - o,
                height: h.helper.height() - n
            }, a = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null, l = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null, c.animate || this.element.css(t.extend(r, {
                top: l,
                left: a
            })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !c.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {width: this.size.width, height: this.size.height}
        },
        _applyChanges: function () {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function (t) {
            var e, i, s, n, o, r = this.options;
            o = {
                minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position, i = this.size, s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                a = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height, c = /sw|nw|w/.test(i), h = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), r && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && c && (t.left = a - e.minWidth), s && c && (t.left = a - e.maxWidth), r && h && (t.top = l - e.minHeight), n && h && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function (t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
            return {height: i[0] + i[2], width: i[1] + i[3]}
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            })
        },
        _renderProxy: function () {
            var e = this.element, i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {width: this.originalSize.width + e}
            }, w: function (t, e) {
                var i = this.originalSize;
                return {left: this.originalPosition.left + e, width: i.width - e}
            }, n: function (t, e, i) {
                var s = this.originalSize;
                return {top: this.originalPosition.top + i, height: s.height - i}
            }, s: function (t, e, i) {
                return {height: this.originalSize.height + i}
            }, se: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            }, sw: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }, ne: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            }, nw: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function (e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = t(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements,
                o = n.length && /textarea/i.test(n[0].nodeName),
                r = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, a = o ? 0 : i.sizeDiff.width,
                l = {width: i.size.width - a, height: i.size.height - r},
                c = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, h && c ? {top: h, left: c} : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function () {
            var e, i, s, n, o, r, a, l = t(this).resizable("instance"), c = l.options, h = l.element, u = c.containment,
                d = u instanceof t ? u.get(0) : /parent/.test(u) ? h.parent().get(0) : u;
            d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {left: 0, top: 0}, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each((function (t, s) {
                i[t] = l._num(e.css("padding" + s))
            })), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, s = l.containerOffset, n = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : n, l.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: r,
                height: a
            }))
        }, resize: function (e) {
            var i, s, n, o, r = t(this).resizable("instance"), a = r.options, l = r.containerOffset, c = r.position,
                h = r._aspectRatio || e.shiftKey, u = {top: 0, left: 0}, d = r.containerElement, p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), c.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), h && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), c.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), h && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), n = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), n && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - u.left : r.offset.left - l.left)), s = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - u.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, h && (r.size.height = r.size.width / r.aspectRatio, p = !1)), s + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - s, h && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
        }, stop: function () {
            var e = t(this).resizable("instance"), i = e.options, s = e.containerOffset, n = e.containerPosition,
                o = e.containerElement, r = t(e.helper), a = r.offset(), l = r.outerWidth() - e.sizeDiff.width,
                c = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: a.left - n.left - s.left,
                width: l,
                height: c
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: a.left - n.left - s.left,
                width: l,
                height: c
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var e = t(this).resizable("instance").options;
            t(e.alsoResize).each((function () {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                })
            }))
        }, resize: function (e, i) {
            var s = t(this).resizable("instance"), n = s.options, o = s.originalSize, r = s.originalPosition, a = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - r.top || 0,
                left: s.position.left - r.left || 0
            };
            t(n.alsoResize).each((function () {
                var e = t(this), s = t(this).data("ui-resizable-alsoresize"), n = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, (function (t, e) {
                    var i = (s[e] || 0) + (a[e] || 0);
                    i && i >= 0 && (n[e] = i || null)
                })), e.css(n)
            }))
        }, stop: function () {
            t(this).removeData("ui-resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var e = t(this).resizable("instance"), i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        }, resize: function () {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width})
        }, stop: function () {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var e, i = t(this).resizable("instance"), s = i.options, n = i.size, o = i.originalSize,
                r = i.originalPosition, a = i.axis, l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                c = l[0] || 1, h = l[1] || 1, u = Math.round((n.width - o.width) / c) * c,
                d = Math.round((n.height - o.height) / h) * h, p = o.width + u, f = o.height + d,
                g = s.maxWidth && p > s.maxWidth, m = s.maxHeight && f > s.maxHeight, v = s.minWidth && s.minWidth > p,
                _ = s.minHeight && s.minHeight > f;
            s.grid = l, v && (p += c), _ && (f += h), g && (p -= c), m && (f -= h), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - u) : ((0 >= f - h || 0 >= p - c) && (e = i._getPaddingPlusBorderDimensions(this)), f - h > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = h - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - c > 0 ? (i.size.width = p, i.position.left = r.left - u) : (p = c - e.width, i.size.width = p, i.position.left = r.left + o.width - p))
        }
    }), t.ui.resizable, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {"ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all"},
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function () {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function (e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, (function () {
                i._trigger("close", e)
            })))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (e, i) {
            var s = !1, n = this.uiDialog.siblings(".ui-front:visible").map((function () {
                return +t(this).css("z-index")
            })).get(), o = Math.max.apply(null, n);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
        },
        open: function () {
            var e = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, (function () {
                e._focusTabbable(), e._trigger("focus")
            })), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function () {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function (e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }

            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function (e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay((function () {
                            n.trigger("focus")
                        })), e.preventDefault()) : (this._delay((function () {
                            s.trigger("focus")
                        })), e.preventDefault())
                    }
                }, mousedown: function (t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function (e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function (t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({"aria-labelledby": e.attr("id")})
        },
        _title: function (t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function () {
            var e = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, (function (i, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = t.extend({type: "button"}, s), n = s.click, o = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text
                }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", (function () {
                    n.apply(e.element[0], arguments)
                }))
            })), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function () {
            function e(t) {
                return {position: t.position, offset: t.offset}
            }

            var i = this, s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (s, n) {
                    i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
                },
                drag: function (t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function (n, o) {
                    var r = o.offset.left - i.document.scrollLeft(), a = o.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
                }
            })
        },
        _makeResizable: function () {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }

            var i = this, s = this.options, n = s.resizable, o = this.uiDialog.css("position"),
                r = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function (s, n) {
                    i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
                },
                resize: function (t, s) {
                    i._trigger("resize", t, e(s))
                },
                stop: function (n, o) {
                    var r = i.uiDialog.offset(), a = r.left - i.document.scrollLeft(),
                        l = r.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var e = this._trackingInstances(), i = t.inArray(this, e);
            -1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function () {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function (e) {
            var i = this, s = !1, n = {};
            t.each(e, (function (t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
            })), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function (e, i) {
            var s, n, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: t("<a>").text("" + this.options.closeText).html()}), "draggable" === e && ((s = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((n = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map((function () {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            }))
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var e = !0;
                this._delay((function () {
                    e = !1
                })), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
        options: {dialogClass: ""},
        _createWrapper: function () {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function (t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
        }
    }), t.ui.dialog, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var e, i = this.options, s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
                return t.is(s)
            }, this.proportions = function () {
                return arguments.length ? void (e = arguments[0]) : e || (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                })
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function (e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
        },
        _splice: function (t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function () {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function (e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }; else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function (e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function (e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function (e, i) {
            var s = i || t.ui.ddmanager.current, n = !1;
            return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function () {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && g(s, t.extend(i, {offset: i.element.offset()}), i.options.tolerance, e) ? (n = !0, !1) : void 0
            })), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element)))
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function () {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function () {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function () {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function () {
            this._removeClass("ui-droppable-active")
        }
    });
    var g = t.ui.intersect = function () {
        function t(t, e, i) {
            return t >= e && e + i > t
        }

        return function (e, i, s, n) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                r = (e.positionAbs || e.position.absolute).top + e.margins.top, a = o + e.helperProportions.width,
                l = r + e.helperProportions.height, c = i.offset.left, h = i.offset.top, u = c + i.proportions().width,
                d = h + i.proportions().height;
            switch (s) {
                case"fit":
                    return o >= c && u >= a && r >= h && d >= l;
                case"intersect":
                    return o + e.helperProportions.width / 2 > c && u > a - e.helperProportions.width / 2 && r + e.helperProportions.height / 2 > h && d > l - e.helperProportions.height / 2;
                case"pointer":
                    return t(n.pageY, h, i.proportions().height) && t(n.pageX, c, i.proportions().width);
                case"touch":
                    return (r >= h && d >= r || l >= h && d >= l || h > r && l > d) && (o >= c && u >= o || a >= c && u >= a || c > o && a > u);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null, droppables: {default: []}, prepareOffsets: function (e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], r = i ? i.type : null,
                a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t:for (s = 0; o.length > s; s++) if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                for (n = 0; a.length > n; n++) if (a[n] === o[s].element[0]) {
                    o[s].proportions().height = 0;
                    continue t
                }
                o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === r && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
                    width: o[s].element[0].offsetWidth,
                    height: o[s].element[0].offsetHeight
                }))
            }
        }, drop: function (e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), (function () {
                this.options && (!this.options.disabled && this.visible && g(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            })), s
        }, dragStart: function (e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", (function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }))
        }, drag: function (e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], (function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, r = g(e, this, this.options.tolerance, i),
                        a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                    a && (this.options.greedy && (n = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter((function () {
                        return t(this).droppable("instance").options.scope === n
                    }))).length && ((s = t(o[0]).droppable("instance")).greedyChild = "isover" === a)), s && "isover" === a && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), s && "isout" === a && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            }))
        }, dragStop: function (e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
        options: {hoverClass: !1, activeClass: !1},
        _addActiveClass: function () {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function () {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }), t.ui.droppable, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            }, max: 100, value: 0, change: null, complete: null
        },
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
        },
        value: function (t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
        },
        _constrainedValue: function (t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function (t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function (t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var e = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each((function () {
                    var i = t(this), s = i.offset(),
                        n = {left: s.left - e.elementPos.left, top: s.top - e.elementPos.top};
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: n.left,
                        top: n.top,
                        right: n.left + i.outerWidth(),
                        bottom: n.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                }))
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function () {
            this.selectees.removeData("selectable-item"), this._mouseDestroy()
        },
        _mouseStart: function (e) {
            var i = this, s = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each((function () {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {unselecting: s.element}))
            })), t(e.target).parents().addBack().each((function () {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {selecting: n.element}) : i._trigger("unselecting", e, {unselecting: n.element}), !1) : void 0
            })))
        },
        _mouseDrag: function (e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, n = this.options, o = this.opos[0], r = this.opos[1], a = e.pageX, l = e.pageY;
                return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({
                    left: o,
                    top: r,
                    width: a - o,
                    height: l - r
                }), this.selectees.each((function () {
                    var i = t.data(this, "selectable-item"), c = !1, h = {};
                    i && i.element !== s.element[0] && (h.left = i.left + s.elementPos.left, h.right = i.right + s.elementPos.left, h.top = i.top + s.elementPos.top, h.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? c = !(h.left > a || o > h.right || h.top > l || r > h.bottom) : "fit" === n.tolerance && (c = h.left > o && a > h.right && h.top > r && l > h.bottom), c ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {unselecting: i.element})))))
                })), !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each((function () {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {unselected: s.element})
            })), t(".ui-selecting", this.element[0]).each((function () {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {selected: s.element})
            })), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"},
            disabled: null,
            icons: {button: "ui-icon-triangle-1-s"},
            position: {my: "left top", at: "left bottom", collision: "none"},
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function () {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function () {
            var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function (t) {
                    this.button.focus(), t.preventDefault()
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", (function () {
                i._rendered || i._refreshMenu()
            }))
        },
        _drawMenu: function () {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {"ui-menu": "ui-corner-bottom"},
                role: "listbox",
                select: function (t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                },
                focus: function (t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {item: s}), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                return !1
            }, this.menuInstance._isDivider = function () {
                return !1
            }
        },
        refresh: function () {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function () {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function (t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
        },
        _position: function () {
            this.menuWrap.position(t.extend({of: this.button}, this.options.position))
        },
        close: function (t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
        },
        widget: function () {
            return this.button
        },
        menuWidget: function () {
            return this.menu
        },
        _renderButtonItem: function (e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
        },
        _renderMenu: function (e, i) {
            var s = this, n = "";
            t.each(i, (function (i, o) {
                var r;
                o.optgroup !== n && (r = t("<li>", {text: o.optgroup}), s._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
            }))
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function (e, i) {
            var s = t("<li>"), n = t("<div>", {title: i.element.attr("title")});
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
        },
        _setText: function (t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function (t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function () {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function (t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function () {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function (e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
            }
        },
        _buttonEvents: {
            mousedown: function () {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
            }, click: function (t) {
                this._setSelection(), this._toggle(t)
            }, keydown: function (e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function (t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function (t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e)
        },
        _setAria: function (t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function () {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
        },
        _resizeMenu: function () {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function () {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t
        },
        _parseOptions: function (e) {
            var i = this, s = [];
            e.each((function (e, n) {
                s.push(i._parseOption(t(n), e))
            })), this.items = s
        },
        _parseOption: function (t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
        }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle"), o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push("<span tabindex='0'></span>");
            this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each((function (e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            }))
        },
        _createRange: function () {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, s, n, o, r, a, l, c = this, h = this.options;
            return !h.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each((function (e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === h.min)) && (n = i, o = t(this), r = e)
            })), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), a = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - a.left - o.width() / 2,
                top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _uiHash: function (t, e, i) {
            var s = {handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value()};
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
        },
        _hasMultipleValues: function () {
            return this.options.values && this.options.values.length
        },
        _start: function (t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function (t, e, i) {
            var s, n = this.value(), o = this.values();
            this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function (t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function (t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function (e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var s, n = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case"orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case"step":
                case"min":
                case"max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function () {
            var t = this.options.value;
            return this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function () {
            var t = this.options.max, e = this._valueMin(), i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshRange: function (t) {
            "vertical" === t && this.range.css({width: "", left: ""}), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function () {
            var e, i, s, n, o, r = this.options.range, a = this.options, l = this, c = !this._animateOff && a.animate,
                h = {};
            this._hasMultipleValues() ? this.handles.each((function (s) {
                i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, h["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](h, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[c ? "animate" : "css"]({left: i + "%"}, a.animate), 1 === s && l.range[c ? "animate" : "css"]({width: i - e + "%"}, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === s && l.range.stop(1, 1)[c ? "animate" : "css"]({bottom: i + "%"}, a.animate), 1 === s && l.range[c ? "animate" : "css"]({height: i - e + "%"}, {
                    queue: !1,
                    duration: a.animate
                }))), e = i
            })) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](h, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({width: i + "%"}, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({width: 100 - i + "%"}, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({height: i + "%"}, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({height: 100 - i + "%"}, a.animate))
        },
        _handleEvents: {
            keydown: function (e) {
                var i, s, n, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                }
                switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + n);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - n)
                }
                this._slide(e, o, s)
            }, keyup: function (e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function (t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function () {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, (function () {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            }))
        },
        _destroy: function () {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (e, i) {
            var s = null, n = !1, o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each((function () {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
            })), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each((function () {
                this === e.target && (n = !0)
            })), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function (e, i, s) {
            var n, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            var i, s, n, o, r = this.options, a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (n = (s = this.items[i]).item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                break
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this, n = this.placeholder.offset(), o = this.options.axis, r = {};
                    o && "x" !== o || (r.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, (function () {
                        s._clear(e)
                    }))
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {target: null})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each((function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            })), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each((function () {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            })), s
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top,
                n = s + this.helperProportions.height, o = t.left, r = o + t.width, a = t.top, l = a + t.height,
                c = this.offset.click.top, h = this.offset.click.left,
                u = "x" === this.options.axis || s + c > a && l > s + c,
                d = "y" === this.options.axis || e + h > o && r > e + h, p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > a && l > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (t) {
            var e, i,
                s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(s && n) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function (t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            function i() {
                a.push(this)
            }

            var s, n, o, r, a = [], l = [], c = this._connectWith();
            if (c && e) for (s = c.length - 1; s >= 0; s--) for (n = (o = t(c[s], this.document[0])).length - 1; n >= 0; n--) (r = t.data(o[n], this.widgetFullName)) && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = l.length - 1; s >= 0; s--) l[s][0].each(i);
            return t(a)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, (function (t) {
                for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;
                return !0
            }))
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, r, a, l, c, h = this.items,
                u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]],
                d = this._connectWith();
            if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (s = (n = t(d[i], this.document[0])).length - 1; s >= 0; s--) (o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {item: this.currentItem}) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--) for (r = u[i][1], s = 0, c = (a = u[i][0]).length; c > s; s++) (l = t(a[s])).data(this.widgetName + "-item", r), h.push({
                item: l,
                instance: r,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (e) {
            var i, s, n, o;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--) (s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (e) {
            var i, s = (e = e || this).options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function () {
                    var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                }, update: function (t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function (e, i) {
            var s = this;
            e.children().each((function () {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
            }))
        },
        _contactContainers: function (e) {
            var i, s, n, o, r, a, l, c, h, u, d = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                d = this.containers[i], p = i
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
                for (n = 1e4, o = null, r = (h = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", a = h ? "width" : "height", u = h ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[r], c = !1, e[u] - l > this.items[s][a] / 2 && (c = !0), n > Math.abs(e[u] - l) && (n = Math.abs(e[u] - l), o = this.items[s], this.direction = c ? "up" : "down"));
                if (!o && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
            }
        },
        _createHelper: function (e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function (e) {
            var i, s, n = this.options, o = e.pageX, r = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / n.grid[1]) * n.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay((function () {
                n === this.counter && this.refreshPositions(!s)
            }))
        },
        _clear: function (t, e) {
            function i(t, e, i) {
                return function (s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }

            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push((function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            })), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push((function (t) {
                this._trigger("update", t, this._uiHash())
            })), this !== this.currentContainer && (e || (n.push((function (t) {
                this._trigger("remove", t, this._uiHash())
            })), n.push(function (t) {
                return function (e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), n.push(function (t) {
                return function (e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (s = 0; n.length > s; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var e = this._super(), i = this.element;
            return t.each(["min", "max", "step"], (function (t, s) {
                var n = i.attr(s);
                null != n && n.length && (e[s] = n)
            })), e
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)))
            }, mousewheel: function (t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay((function () {
                        this.spinning && this._stop(t)
                    }), 100), t.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (e) {
                function i() {
                    this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = s, this._delay((function () {
                        this.previous = s
                    })))
                }

                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay((function () {
                    delete this.cancelBlur, i.call(this)
                })), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function () {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function (e) {
            var i = this.options, s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _start: function (t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay((function () {
                this._repeat(40, e, i)
            }), t), this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {value: i}) || (this._value(i), this.counter++)
        },
        _increment: function (e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e, i, s = this.options;
            return i = t - (e = null !== s.min ? s.min : 0), t = e + (i = Math.round(i / s.step) * s.step), t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            var i, s, n;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), void this._super(t, e))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: o((function (t) {
            this._super(t)
        })),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function () {
            var t = this.value();
            return null !== t && t === this._adjustValue(t)
        },
        _value: function (t, e) {
            var i;
            "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function () {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: o((function (t) {
            this._stepUp(t)
        })),
        _stepUp: function (t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: o((function (t) {
            this._stepDown(t)
        })),
        _stepDown: function (t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: o((function (t) {
            this._stepUp((t || 1) * this.options.page)
        })),
        pageDown: o((function (t) {
            this._stepDown((t || 1) * this.options.page)
        })),
        value: function (t) {
            return arguments.length ? void o(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        }, _uiSpinnerHtml: function () {
            return "<span>"
        }, _buttonHtml: function () {
            return "<a></a><a></a>"
        }
    }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function () {
            var t = /#.*$/;
            return function (e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i)
                } catch (t) {
                }
                try {
                    s = decodeURIComponent(s)
                } catch (t) {
                }
                return e.hash.length > 1 && i === s
            }
        }(),
        _create: function () {
            var e = this, i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), (function (t) {
                return e.tabs.index(t)
            })))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var e = this.options.active, i = this.options.collapsible, s = location.hash.substring(1);
            return null === e && (s && this.tabs.each((function (i, n) {
                return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
            })), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
        },
        _tabKeydown: function (e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), s = this.tabs.index(i), n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay((function () {
                    this.option("active", s)
                }), this.delay))
            }
        },
        _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function (e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (e, i) {
            for (var s = this.tabs.length - 1; -1 !== t.inArray((e > s && (e = 0), 0 > e && (e = s), e), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void ("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), (function (t) {
                return i.index(t)
            })), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function () {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var e = this, i = this.tabs, s = this.anchors, n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", (function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            })).on("focus" + this.eventNamespace, ".ui-tabs-anchor", (function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            })), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map((function () {
                return t("a", this)[0]
            })).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each((function (i, s) {
                var n, o, r, a = t(s).uniqueId().attr("id"), l = t(s).closest("li"), c = l.attr("aria-controls");
                e._isLocal(s) ? (r = (n = s.hash).substring(1), o = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (r = l.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(n)).length || (o = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                    "aria-controls": r,
                    "aria-labelledby": a
                }), o.attr("aria-labelledby", a)
            })), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function (e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function (e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function (e) {
            var i = {};
            e && t.each(e.split(" "), (function (t, e) {
                i[e] = "_eventHandler"
            })), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each((function () {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            })), this.element.children().not(this.panels).each((function () {
                i -= t(this).outerHeight(!0)
            })), this.panels.each((function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            })).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each((function () {
                i = Math.max(i, t(this).height("").height())
            })).height(i))
        },
        _eventHandler: function (e) {
            var i = this.options, s = this.active, n = t(e.currentTarget).closest("li"), o = n[0] === s[0],
                r = o && i.collapsible, a = r ? t() : this._getPanelForTab(n),
                l = s.length ? this._getPanelForTab(s) : t(),
                c = {oldTab: s, oldPanel: l, newTab: r ? t() : n, newPanel: a};
            e.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, c) || (i.active = !r && this.tabs.index(n), this.active = o ? t() : n, this.xhr && this.xhr.abort(), l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(n), e), this._toggle(e, c))
        },
        _toggle: function (e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, s) : (r.show(), s())
            }

            var o = this, r = i.newPanel, a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, (function () {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
            })) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), n()), a.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter((function () {
                return 0 === t(this).attr("tabIndex")
            })).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function (e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return !1 === e ? t() : this.tabs.eq(e)
        },
        _getIndex: function (e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each((function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            })), this.tabs.each((function () {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            })), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, (function (t) {
                return t !== e ? t : null
            })) : t.map(this.tabs, (function (t, i) {
                return i !== e ? i : null
            }))), this._setOptionDisabled(i))
        },
        disable: function (e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0; else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function (e, i) {
            e = this._getIndex(e);
            var s = this, n = this.tabs.eq(e), o = n.find(".ui-tabs-anchor"), r = this._getPanelForTab(n),
                a = {tab: n, panel: r}, l = function (t, e) {
                    "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done((function (t, e, n) {
                setTimeout((function () {
                    r.html(t), s._trigger("load", i, a), l(n, e)
                }), 1)
            })).fail((function (t, e) {
                setTimeout((function () {
                    l(t, e)
                }), 1)
            }))))
        },
        _ajaxSettings: function (e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""), beforeSend: function (e, o) {
                    return n._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: o}, s))
                }
            }
        },
        _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1", options: {
            classes: {"ui-tooltip": "ui-corner-all ui-widget-shadow"},
            content: function () {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            track: !1,
            close: null,
            open: null
        }, _addDescribedBy: function (e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        }, _removeDescribedBy: function (e) {
            var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s);
            -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        }, _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
        }, _setOption: function (e, i) {
            var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, (function (t, e) {
                s._updateContent(e.element)
            }))
        }, _setOptionDisabled: function (t) {
            this[t ? "_disable" : "_enable"]()
        }, _disable: function () {
            var e = this;
            t.each(this.tooltips, (function (i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0], e.close(n, !0)
            })), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter((function () {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
            })))
        }, _enable: function () {
            this.disabledTitles.each((function () {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })), this.disabledTitles = t([])
        }, open: function (e) {
            var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each((function () {
                var e, s = t(this);
                s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            })), this._registerCloseHandlers(e, s), this._updateContent(s, e))
        }, _updateContent: function (t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : void ((i = s.call(t[0], (function (i) {
                n._delay((function () {
                    t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                }))
            }))) && this._open(e, t, i))
        }, _open: function (e, i, s) {
            function n(t) {
                c.of = t, r.is(":hidden") || r.position(c)
            }

            var o, r, a, l, c = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(s);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), r = o.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), (l = t("<div>").html(r.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {mousemove: n}), n(e)) : r.position(t.extend({of: i}, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval((function () {
                    r.is(":visible") && (n(c.of), clearInterval(a))
                }), t.fx.interval)), this._trigger("open", e, {tooltip: r})
            }
        }, _registerCloseHandlers: function (e, i) {
            var s = {
                keyup: function (e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function () {
                this._removeTooltip(this._find(i).tooltip)
            }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
        }, close: function (e) {
            var i, s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
            return o ? (i = o.tooltip, void (o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, (function () {
                s._removeTooltip(t(this))
            })), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, (function (e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            })), o.closing = !0, this._trigger("close", e, {tooltip: i}), o.hiding || (o.closing = !1)))) : void n.removeData("ui-tooltip-open")
        }, _tooltip: function (e) {
            var i = t("<div>").attr("role", "tooltip"), s = t("<div>").appendTo(i), n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
                element: e,
                tooltip: i
            }
        }, _find: function (t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        }, _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        }, _appendTo: function (t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e
        }, _destroy: function () {
            var e = this;
            t.each(this.tooltips, (function (i, s) {
                var n = t.Event("blur"), o = s.element;
                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
            })), this.liveRegion.remove()
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {tooltipClass: null},
        _tooltip: function () {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
        }
    }), t.ui.tooltip
})), $(document).ready((function () {
    if ($(".best-offer-s").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !1,
        responsive: [{breakpoint: 1024, settings: {slidesToShow: 3}}]
    }), $(".comments-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow__prev"><i class="icon-angle-left"></i></div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next"><i class="icon-angle-right"></i></div>',
        responsive: [{breakpoint: 992, settings: {slidesToShow: 1, arrows: !1, dots: !0}}]
    }).on("setPosition", (function (t, e) {
        e.$slides.css("height", e.$slideTrack.height() + "px")
    })), $(".partners-slider").slick({
        variableWidth: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<div class="slider-arrow slider-arrow__prev"><i class="icon-angle-left"></i></div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next"><i class="icon-angle-right"></i></div>',
        responsive: [{breakpoint: 992, settings: {arrows: !1, dots: !0}}]
    }), $(".partners-slider-n").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow__prev"><i class="icon-angle-left"></i></div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next"><i class="icon-angle-right"></i></div>',
        responsive: [{breakpoint: 1280, settings: {slidesToShow: 5}}, {
            breakpoint: 992,
            settings: {arrows: !1, dots: !0, slidesToShow: 4}
        }, {breakpoint: 768, settings: {arrows: !1, dots: !0, slidesToShow: 3}}, {
            breakpoint: 568,
            settings: {arrows: !1, dots: !0, slidesToShow: 2}
        }]
    }), $(".expert-opinions-s").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !1,
        dots: !1,
        responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, dots: !0}}]
    }), $(".select-styler").select2(), $(".comment-rating__list-item").click((function () {
        var t = "comment-rating__list-item--active";
        $(this).addClass(t).nextAll(".comment-rating__list-item").removeClass(t), $(this).prevAll(".comment-rating__list-item").addClass(t)
    })), $("#filter-amount").slider({
        range: "min", value: 0, min: 1, max: 5e4, slide: function (t, e) {
            $("#filter-amount").siblings(".filter__input").val(e.value + " грн")
        }
    }), $("#filter-amount").siblings(".filter__input").keyup((function () {
        var t = $(this).val();
        $("#filter-amount").slider("value", t)
    })), $("#filter-time").slider({
        range: "min", value: 0, min: 1, max: 90, slide: function (t, e) {
            $("#filter-time").siblings(".filter__input").val(e.value)
        }
    }), $("#filter-time").siblings(".filter__input").keyup((function () {
        var t = $(this).val();
        $("#filter-time").slider("value", t)
    })), $(".subscription").length) {
        var t = $(".subscription"), e = $(".container-a__aside").height(), i = t.offset();

        function s() {
            var s = $(window).scrollTop();
            s >= i.top - 100 && s < 57 + e ? (t.addClass("subscription--fixed"), t.css({
                top: 15,
                left: i.left
            })) : (t.removeClass("subscription--fixed"), t.css({top: "auto", left: "auto"}))
        }

        $(window).scroll((function () {
            s()
        })), $(window).resize((function () {
            s()
        }))
    }
    $(".header__search-btn").click((function () {
        $("#overlay").fadeToggle(), $(".search-cont").toggleClass("search-cont--active")
    })), $(".search-cont__close,#overlay").click((function (t) {
        t.preventDefault(), $("#overlay").fadeOut(), $(".search-cont").removeClass("search-cont--active")
    })), window.innerWidth > 1024 ? ($(".header-menu__link").mouseenter((function () {
        var t = $(this).data("drop");
        $(".menu-drop").removeClass("menu-drop--active"), $(".header-menu__link").removeClass("header-menu__link--active"), $(this).addClass("header-menu__link--active"), $(t).addClass("menu-drop--active")
    })), $(document).on("mouseleave", ".header__cont", (function () {
        $(".menu-drop").removeClass("menu-drop--active"), $(".header-menu__link").removeClass("header-menu__link--active")
    }))) : ($(".btn-menu").click((function (t) {
        t.preventDefault(), $(this).toggleClass("btn-menu--active"), $(".header__cont").toggleClass("header__cont--active"), $("body").addClass("no-scroll")
    })), $(".header__menu-close").click((function (t) {
        t.preventDefault(), $(".btn-menu").removeClass("btn-menu--active"), $(".header__cont").removeClass("header__cont--active"), $("body").removeClass("no-scroll")
    })), $(".header-menu__link").click((function (t) {
        t.preventDefault();
        var e = $(this).data("drop");
        $(".menu-drop").removeClass("menu-drop--active"), $(".header-menu__link").removeClass("header-menu__link--active"), $(this).addClass("header-menu__link--active"), $(e).addClass("menu-drop--active")
    })), $(".menu-drop__back").click((function (t) {
        t.preventDefault(), $(".menu-drop").removeClass("menu-drop--active"), $(".header-menu__link").removeClass("header-menu__link--active")
    }))), window.innerWidth <= 568 && $(".footer__item-header").click((function () {
        $(this).toggleClass("footer__item-header--active").siblings(".footer__list").slideToggle()
    })), window.innerWidth <= 1024 && $(".loans-slider").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !0,
        arrows: !1
    }), $(".cards-best__list").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        arrows: !1,
        responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, dots: !0}}]
    }), $(".news-lg").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !1,
        responsive: [{breakpoint: 660, settings: {slidesToShow: 1, dots: !0}}]
    }), $(".site-map__item-header").click((function () {
        var t = ".site-map__item-cont";
        $(this).toggleClass("site-map__item-header--active").siblings(t).slideToggle(), $(".site-map__item-header").not($(this)).removeClass("site-map__item-header--active").siblings(t).slideUp()
    }))
}));