(function () {
    var aa = '" style="background-image:url(', ba = "-disabled", ca = "-document.getElementById('",
        da = "/translate_a/t", ea = "/translate_suggestion?client=", fa = '</button></div></div></td></tr><tr id="',
        ha = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
        ia = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
        ja = "Component already rendered", f = "DIV", ka = "Edge", la = "Google Website Translator",
        ma = "IFRAME", oa = "INPUT", pa = "INTERNAL_SERVER_ERROR", qa = "OPTION", ra = "Opera", sa = "POST",
        ta = "SCRIPT", ua = "SPAN", va = "TEXTAREA", wa = "TITLE", xa = "Unable to set parent component",
        ya = "[goog.net.IframeIo] Unable to send, already active.", za = "about:blank", Aa = "about:invalid#zSoyz",
        Ba = "absolute", Ca = "action", Da = "activedescendant", Ea = "activity-form-container", Fa = "alt-edited",
        Ga = "array", Ha = "auto", Ia = "backgroundImage", Ja = "backgroundPosition", Ka = "blur", La = "border-box",
        Ma = "button", Na = "cancelled", Oa = "change", Pa = "character",
        Qa = "checked", Ra = "chg_tgt_lang", Sa = "click", Ta = "clk_no_ap_site", Ua = "complete", Va = "container",
        Wa = "contextmenu", Xa = "dblclick", Ya = "deactivate", Za = "direction", $a = "finish",
        ab = "finishSourceLang", bb = "finishTargetLang", cb = "focus", db = "focusin", eb = "focusout", p = "function",
        fb = "goog-float-bottom", gb = "goog-float-top", hb = "goog-inline-block ", ib = "goog-menuheader",
        jb = "goog-menuseparator", kb = "goog-option", lb = "goog-option-selected", mb = "goog-te-menu-value",
        nb = "goog-te-menu2-item-selected", ob = "goog-te-spinner-animation-show",
        pb = "goog-te-spinner-pos-show", qb = "hidden", rb = "hide", sb = "horizontal",
        tb = "https://translate.google.com", ub = "https://www.google.com/images/cleardot.gif",
        vb = "javascript:void(0)", wb = "keydown", xb = "keypress", yb = "keyup", zb = "load", Ab = "mousedown",
        Bb = "mousemove", Cb = "mouseout", Db = "mouseover", Eb = "mouseup", Fb = "move_offscreen", q = "none",
        Gb = "number", Hb = "object", Ib = "opacity 1s linear", Jb = "paddingLeft", Kb = "paddingRight",
        Lb = "position", Mb = "progressSection", Nb = "promptSourceLang", Ob = "promptTargetLang", Pb = "ready",
        Qb = "readystatechange",
        Rb = "rtl", Sb = "selected", Tb = "skiptranslate", Ub = "status-message", Vb = "string", Wb = "submitted",
        Xb = "targetLanguage", Yb = "textarea-placeholder-input", Zb = "toggle_display", $b = "trans-target-empty",
        ac = "trans-target-highlight", bc = "transition", cc = "translate", dc = "vertical", ec = "visible",
        fc = "withCredentials";

    function gc() {
        return function () {
        }
    }

    function hc(a) {
        return function (b) {
            this[a] = b
        }
    }

    function r(a) {
        return function () {
            return this[a]
        }
    }

    function u(a) {
        return function () {
            return a
        }
    }

    var v, ic = typeof Object.create == p ? Object.create : function (a) {
        function b() {
        }

        b.prototype = a;
        return new b
    }, jc;
    if (typeof Object.setPrototypeOf == p) jc = Object.setPrototypeOf; else {
        var kc;
        a:{
            var lc = {Ih: !0}, mc = {};
            try {
                mc.__proto__ = lc;
                kc = mc.Ih;
                break a
            } catch (a) {
            }
            kc = !1
        }
        jc = kc ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var nc = jc;

    function oc(a, b) {
        a.prototype = ic(b.prototype);
        a.prototype.constructor = a;
        if (nc) nc(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.m = b.prototype
    }

    var pc = pc || {}, w = this;

    function x(a) {
        return void 0 !== a
    }

    function z(a) {
        return typeof a == Vb
    }

    function qc(a) {
        return typeof a == Gb
    }

    var rc = /^[\w+/_-]+[=]{0,2}$/, sc = null;

    function A() {
    }

    function tc(a) {
        a.We = void 0;
        a.Y = function () {
            return a.We ? a.We : a.We = new a
        }
    }

    function B(a) {
        var b = typeof a;
        if (b == Hb) if (a) {
            if (a instanceof Array) return Ga;
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return Hb;
            if ("[object Array]" == c || typeof a.length == Gb && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return Ga;
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return p
        } else return "null";
        else if (b == p && "undefined" == typeof a.call) return Hb;
        return b
    }

    function C(a) {
        return B(a) == Ga
    }

    function uc(a) {
        var b = B(a);
        return b == Ga || b == Hb && typeof a.length == Gb
    }

    function vc(a) {
        return B(a) == p
    }

    function wc(a) {
        var b = typeof a;
        return b == Hb && null != a || b == p
    }

    function xc(a) {
        return a[yc] || (a[yc] = ++zc)
    }

    var yc = "closure_uid_" + (1E9 * Math.random() >>> 0), zc = 0;

    function Ac(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Bc(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function D(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? D = Ac : D = Bc;
        return D.apply(null, arguments)
    }

    function Cc(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }

    var Dc = Date.now || function () {
        return +new Date
    };

    function Ec(a, b) {
        a = a.split(".");
        var c = w;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && x(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    }

    function E(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.m = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Qn = function (a, c, g) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };

    function Fc(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Fc); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }

    E(Fc, Error);
    Fc.prototype.name = "CustomError";
    var Gc, Hc = {jl: 1, hk: 2, Ah: 3, vk: 4, nl: 5, ml: 6, Lm: 7, zk: 8, Ok: 9, Qk: 10, Pk: 11, qm: 12};

    function Ic(a) {
        return a[a.length - 1]
    }

    var Jc = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if (z(a)) return z(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, Kc = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = z(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
    }, Lc = Array.prototype.filter ? function (a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function (a, b) {
        for (var c =
            a.length, d = [], e = 0, g = z(a) ? a.split("") : a, h = 0; h < c; h++) if (h in g) {
            var k = g[h];
            b.call(void 0, k, h, a) && (d[e++] = k)
        }
        return d
    }, Mc = Array.prototype.map ? function (a, b) {
        return Array.prototype.map.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = Array(c), e = z(a) ? a.split("") : a, g = 0; g < c; g++) g in e && (d[g] = b.call(void 0, e[g], g, a));
        return d
    }, Nc = Array.prototype.some ? function (a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e],
            e, a)) return !0;
        return !1
    }, Oc = Array.prototype.every ? function (a, b) {
        return Array.prototype.every.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    };

    function Pc(a, b) {
        a:{
            for (var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
            b = -1
        }
        return 0 > b ? null : z(a) ? a.charAt(b) : a[b]
    }

    function Qc(a, b) {
        return 0 <= Jc(a, b)
    }

    function Rc(a, b) {
        b = Jc(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Sc(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Tc(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Uc(a, b, c, d) {
        Array.prototype.splice.apply(a, Vc(arguments, 1))
    }

    function Vc(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };

    function Wc(a) {
        return a.replace(/\xa0|[ \t]+/g, " ")
    }

    function Xc(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }

    var Yc = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function Zc(a) {
        return a.replace(/^[\s\xa0]+/, "")
    }

    function $c(a) {
        return a.replace(/[\s\xa0]+$/, "")
    }

    function ad(a) {
        return encodeURIComponent(String(a))
    }

    function bd(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }

    function cd(a) {
        if (!dd.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(ed, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(fd, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(gd, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(hd, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(id, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(jd, "&#0;"));
        return a
    }

    var ed = /&/g, fd = /</g, gd = />/g, hd = /"/g, id = /'/g, jd = /\x00/g, dd = /[\x00&<>"']/;

    function kd(a) {
        return -1 != a.indexOf("&") ? "document" in w ? ld(a) : md(a) : a
    }

    function ld(a) {
        var b = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'};
        var c = w.document.createElement("div");
        return a.replace(nd, function (a, e) {
            var d = b[a];
            if (d) return d;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (d = String.fromCharCode(e)));
            d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = d
        })
    }

    function md(a) {
        return a.replace(/&([^;]+);/g, function (a, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
            }
        })
    }

    var nd = /&([^;\s<&]+);?/g;

    function od(a, b) {
        var c = 0;
        a = Yc(String(a)).split(".");
        b = Yc(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var g = a[e] || "", h = b[e] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length) break;
                c = pd(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || pd(0 == g[2].length, 0 == h[2].length) || pd(g[2], h[2]);
                g = g[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }

    function pd(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function qd(a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        })
    }

    function rd(a) {
        var b = z(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
            return b + e.toUpperCase()
        })
    };var sd;
    a:{
        var td = w.navigator;
        if (td) {
            var ud = td.userAgent;
            if (ud) {
                sd = ud;
                break a
            }
        }
        sd = ""
    }

    function F(a) {
        return -1 != sd.indexOf(a)
    }

    function vd(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function wd(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function xd(a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function yd(a) {
        var b = [], c = 0, d;
        for (d in a) b[c++] = d;
        return b
    }

    function zd(a, b) {
        return null !== a && b in a
    }

    function Ad() {
        var a = Bd, b;
        for (b in a) return !1;
        return !0
    }

    function Cd(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }

    function Dd(a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    }

    var Ed = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Fd(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < Ed.length; g++) c = Ed[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function Gd(a) {
        var b = arguments.length;
        if (1 == b && C(arguments[0])) return Gd.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };

    function Hd() {
        return F("Trident") || F("MSIE")
    }

    function Id() {
        return (F("Chrome") || F("CriOS")) && !F(ka)
    }

    function Jd() {
        function a(a) {
            a = Pc(a, d);
            return c[a] || ""
        }

        var b = sd;
        if (!Hd()) {
            b = vd(b);
            var c = {};
            Kc(b, function (a) {
                c[a[0]] = a[1]
            });
            var d = Cc(zd, c);
            F(ra) ? a(["Version", ra]) : F(ka) ? a([ka]) : Id() && a(["Chrome", "CriOS"])
        }
    };

    function Kd() {
        return F("iPhone") && !F("iPod") && !F("iPad")
    }

    function Ld() {
        return Kd() || F("iPad") || F("iPod")
    };

    function Md(a) {
        Md[" "](a);
        return a
    }

    Md[" "] = A;

    function Nd(a, b) {
        try {
            return Md(a[b]), !0
        } catch (c) {
        }
        return !1
    }

    function Od(a, b) {
        var c = Pd;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };var Qd = F(ra), G = Hd(), Rd = F(ka), Sd = Rd || G,
        H = F("Gecko") && !(-1 != sd.toLowerCase().indexOf("webkit") && !F(ka)) && !(F("Trident") || F("MSIE")) && !F(ka),
        I = -1 != sd.toLowerCase().indexOf("webkit") && !F(ka), Td = I && F("Mobile"), Ud = F("Macintosh"),
        Vd = F("Windows"), Wd = F("Android"), Xd = Kd(), Yd = F("iPad"), Zd = F("iPod"), $d = Ld();

    function ae() {
        var a = w.document;
        return a ? a.documentMode : void 0
    }

    var be;
    a:{
        var ce = "", de = function () {
            var a = sd;
            if (H) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Rd) return /Edge\/([\d\.]+)/.exec(a);
            if (G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (I) return /WebKit\/(\S+)/.exec(a);
            if (Qd) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        de && (ce = de ? de[1] : "");
        if (G) {
            var ee = ae();
            if (null != ee && ee > parseFloat(ce)) {
                be = String(ee);
                break a
            }
        }
        be = ce
    }
    var fe = be, Pd = {};

    function J(a) {
        return Od(a, function () {
            return 0 <= od(fe, a)
        })
    }

    function ge(a) {
        return Number(he) >= a
    }

    var ie;
    var je = w.document;
    ie = je && G ? ae() || ("CSS1Compat" == je.compatMode ? parseInt(fe, 10) : 5) : void 0;
    var he = ie;
    var ke = F("Firefox"), le = Kd() || F("iPod"), me = F("iPad"),
        ne = F("Android") && !(Id() || F("Firefox") || F(ra) || F("Silk")), oe = Id(),
        pe = F("Safari") && !(Id() || F("Coast") || F(ra) || F(ka) || F("Silk") || F("Android")) && !Ld();
    var qe = null, re = null, se = H || I && !pe || Qd || !pe && !G && typeof w.atob == p;

    function te(a) {
        if (se) return w.atob(a);
        var b = "";
        ue(a, function (a) {
            b += String.fromCharCode(a)
        });
        return b
    }

    function ue(a, b) {
        function c(b) {
            for (; d < a.length;) {
                var c = a.charAt(d++), e = re[c];
                if (null != e) return e;
                if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
            }
            return b
        }

        ve();
        for (var d = 0; ;) {
            var e = c(-1), g = c(0), h = c(64), k = c(64);
            if (64 === k && -1 === e) break;
            b(e << 2 | g >> 4);
            64 != h && (b(g << 4 & 240 | h >> 2), 64 != k && b(h << 6 & 192 | k))
        }
    }

    function ve() {
        if (!qe) {
            qe = {};
            re = {};
            for (var a = 0; 65 > a; a++) qe[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), re[qe[a]] = a, 62 <= a && (re["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
        }
    };

    function we() {
    }

    var xe = typeof Uint8Array == p;

    function ye(a, b, c) {
        a.b = null;
        b || (b = []);
        a.l = void 0;
        a.f = -1;
        a.a = b;
        a:{
            if (b = a.a.length) {
                --b;
                var d = a.a[b];
                if (d && typeof d == Hb && !C(d) && !(xe && d instanceof Uint8Array)) {
                    a.g = b - a.f;
                    a.c = d;
                    break a
                }
            }
            a.g = Number.MAX_VALUE
        }
        a.h = {};
        if (c) for (b = 0; b < c.length; b++) d = c[b], d < a.g ? (d += a.f, a.a[d] = a.a[d] || ze) : (Ae(a), a.c[d] = a.c[d] || ze)
    }

    var ze = [];

    function Ae(a) {
        var b = a.g + a.f;
        a.a[b] || (a.c = a.a[b] = {})
    }

    function Be(a, b) {
        if (b < a.g) {
            b += a.f;
            var c = a.a[b];
            return c === ze ? a.a[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === ze ? a.c[b] = [] : c
    }

    function Ce(a, b) {
        if (b < a.g) {
            b += a.f;
            var c = a.a[b];
            return c === ze ? a.a[b] = [] : c
        }
        c = a.c[b];
        return c === ze ? a.c[b] = [] : c
    }

    function De(a, b, c) {
        b < a.g ? a.a[b + a.f] = c : (Ae(a), a.c[b] = c)
    }

    function Ee(a, b, c) {
        a.b || (a.b = {});
        var d = c ? c.Db() : c;
        a.b[b] = c;
        De(a, b, d)
    }

    function Fe(a, b, c) {
        a.b || (a.b = {});
        if (!a.b[b]) {
            for (var d = Ce(a, b), e = [], g = 0; g < d.length; g++) e[g] = new c(d[g]);
            a.b[b] = e
        }
        (d = a.b[b]) || (d = a.b[b] = []);
        c = new c;
        a = Ce(a, b);
        d.push(c);
        a.push(c.Db());
        return c
    }

    function Ge(a) {
        if (a.b) for (var b in a.b) {
            var c = a.b[b];
            if (C(c)) for (var d = 0; d < c.length; d++) c[d] && c[d].Db(); else c && c.Db()
        }
    }

    we.prototype.Db = function () {
        Ge(this);
        return this.a
    };
    we.prototype.toString = function () {
        Ge(this);
        return this.a.toString()
    };

    function He(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return z(a) && a.match(/\S+/g) || []
    }

    function Ie(a, b) {
        return a.classList ? a.classList.contains(b) : Qc(He(a), b)
    }

    function K(a, b) {
        a.classList ? a.classList.add(b) : Ie(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function Je(a, b) {
        if (a.classList) Kc(b, function (b) {
            K(a, b)
        }); else {
            var c = {};
            Kc(He(a), function (a) {
                c[a] = !0
            });
            Kc(b, function (a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    }

    function Ke(a, b) {
        a.classList ? a.classList.remove(b) : Ie(a, b) && (a.className = Lc(He(a), function (a) {
            return a != b
        }).join(" "))
    }

    function Le(a, b) {
        a.classList ? Kc(b, function (b) {
            Ke(a, b)
        }) : a.className = Lc(He(a), function (a) {
            return !Qc(b, a)
        }).join(" ")
    };var Me = !G || ge(9), Ne = !H && !G || G && ge(9) || H && J("1.9.1"), Oe = G && !J("9"), Pe = G || Qd || I,
        Qe = G && !ge(9);
    var Re = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Se() {
        this.a = Te
    }

    Se.prototype.nb = !0;
    Se.prototype.Ra = u("");
    Se.prototype.toString = function () {
        return "Const{}"
    };

    function Ue(a) {
        return a instanceof Se && a.constructor === Se && a.a === Te ? "" : "type_error:Const"
    }

    var Te = {};
    var Ve = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

    function We() {
        this.a = "";
        this.b = Xe
    }

    We.prototype.nb = !0;
    We.prototype.Ra = r("a");
    We.prototype.Te = !0;
    We.prototype.Ub = u(1);

    function Ye(a) {
        if (a instanceof We && a.constructor === We && a.b === Xe) return a.a;
        B(a);
        return "type_error:TrustedResourceUrl"
    }

    var Xe = {};

    function Ze(a) {
        var b = new We;
        b.a = a;
        return b
    };

    function $e() {
        this.a = "";
        this.b = af
    }

    $e.prototype.nb = !0;
    $e.prototype.Ra = r("a");
    $e.prototype.Te = !0;
    $e.prototype.Ub = u(1);

    function bf(a) {
        if (a instanceof $e && a.constructor === $e && a.b === af) return a.a;
        B(a);
        return "type_error:SafeUrl"
    }

    var cf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function df(a) {
        if (a instanceof $e) return a;
        a = a.nb ? a.Ra() : String(a);
        cf.test(a) || (a = "about:invalid#zClosurez");
        return ef(a)
    }

    var af = {};

    function ef(a) {
        var b = new $e;
        b.a = a;
        return b
    }

    ef(za);

    function ff() {
        this.a = "";
        this.b = gf
    }

    ff.prototype.nb = !0;
    var gf = {};
    ff.prototype.Ra = r("a");

    function hf(a) {
        if (a instanceof ff && a.constructor === ff && a.b === gf) return a.a;
        B(a);
        return "type_error:SafeStyle"
    }

    function jf(a) {
        var b = new ff;
        b.a = a;
        return b
    }

    var kf = jf("");

    function lf(a) {
        if (a instanceof $e) a = 'url("' + bf(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'; else if (a instanceof Se) a = Ue(a); else {
            a = String(a);
            var b = a.replace(mf, "$1").replace(nf, "url");
            if (b = of.test(b)) {
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                }
                b = b && c
            }
            a = b ? pf(a) : "zClosurez"
        }
        return a
    }

    var of = /^[-,."'%_!# a-zA-Z0-9]+$/,
        nf = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        mf = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;

    function pf(a) {
        return a.replace(nf, function (a, c, d, e) {
            var b = "";
            d = d.replace(/^(['"])(.*)\1$/, function (a, c, d) {
                b = c;
                return d
            });
            a = df(d).Ra();
            return c + b + a + b + e
        })
    };

    function qf() {
        this.a = "";
        this.b = rf
    }

    qf.prototype.nb = !0;
    var rf = {};
    qf.prototype.Ra = r("a");

    function sf(a) {
        if (a instanceof qf && a.constructor === qf && a.b === rf) return a.a;
        B(a);
        return "type_error:SafeStyleSheet"
    }

    function tf(a) {
        var b = new qf;
        b.a = a;
        return b
    }

    tf("");

    function uf() {
        this.a = "";
        this.c = vf;
        this.b = null
    }

    uf.prototype.Te = !0;
    uf.prototype.Ub = r("b");
    uf.prototype.nb = !0;
    uf.prototype.Ra = r("a");

    function wf(a) {
        if (a instanceof uf && a.constructor === uf && a.c === vf) return a.a;
        B(a);
        return "type_error:SafeHtml"
    }

    var xf = /^[a-zA-Z0-9-]+$/,
        yf = {action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0}, zf = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function Af(a, b) {
        var c = String(a);
        if (!xf.test(c)) throw Error("Invalid tag name <" + c + ">.");
        if (c.toUpperCase() in zf) throw Error("Tag name <" + c + "> is not allowed for SafeHtml.");
        a = String(a);
        c = null;
        var d = "<" + a, e = "";
        if (b) for (n in b) {
            if (!xf.test(n)) throw Error('Invalid attribute name "' + n + '".');
            var g = b[n];
            if (null != g) {
                var h = a;
                var k = n;
                var l = g;
                if (l instanceof Se) l = Ue(l); else if ("style" == k.toLowerCase()) {
                    g = void 0;
                    h = l;
                    if (!wc(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                        typeof h + " given: " + h);
                    if (!(h instanceof ff)) {
                        l = "";
                        for (g in h) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(g)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + g);
                            var m = h[g];
                            null != m && (m = C(m) ? Mc(m, lf).join(" ") : lf(m), l += g + ":" + m + ";")
                        }
                        h = l ? jf(l) : kf
                    }
                    l = hf(h)
                } else {
                    if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
                    if (k.toLowerCase() in yf) if (l instanceof We) l = Ye(l); else if (l instanceof $e) l = bf(l); else if (z(l)) l = df(l).Ra(); else throw Error('Attribute "' + k + '" on tag "' + h +
                        '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
                }
                l.nb && (l = l.Ra());
                k = k + '="' + cd(String(l)) + '"';
                e += " " + k
            }
        }
        var n = d + e;
        d = void 0;
        null != d ? C(d) || (d = [d]) : d = [];
        !0 === Re[a.toLowerCase()] ? n += ">" : (c = Bf(d), n += ">" + wf(c) + "</" + a + ">", c = c.Ub());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        return Cf(n, c)
    }

    function Bf(a) {
        function b(a) {
            if (C(a)) Kc(a, b); else {
                if (a instanceof uf) var e = a; else e = null, a.Te && (e = a.Ub()), a = cd(a.nb ? a.Ra() : String(a)), e = Cf(a, e);
                d += wf(e);
                e = e.Ub();
                0 == c ? c = e : 0 != e && c != e && (c = null)
            }
        }

        var c = 0, d = "";
        Kc(arguments, b);
        return Cf(d, c)
    }

    var vf = {};

    function Cf(a, b) {
        var c = new uf;
        c.a = a;
        c.b = b;
        return c
    }

    Cf("<!DOCTYPE html>", 0);
    Cf("", 0);
    var Df = Cf("<br>", 0);

    function Ef(a, b) {
        a.src = Ye(b);
        if (null === sc) {
            a:{
                b = w.document;
                if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && rc.test(b)) break a;
                b = null
            }
            sc = b || ""
        }
        (b = sc) && a.setAttribute("nonce", b)
    };

    function L(a, b) {
        this.x = x(a) ? a : 0;
        this.y = x(b) ? b : 0
    }

    function Ff(a) {
        return new L(a.x, a.y)
    }

    function Gf(a, b) {
        return new L(a.x - b.x, a.y - b.y)
    }

    L.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    L.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    L.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    L.prototype.translate = function (a, b) {
        a instanceof L ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), qc(b) && (this.y += b));
        return this
    };

    function Hf(a, b) {
        this.width = a;
        this.height = b
    }

    Hf.prototype.aspectRatio = function () {
        return this.width / this.height
    };
    Hf.prototype.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Hf.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Hf.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function If(a) {
        return a ? new Jf(N(a)) : Gc || (Gc = new Jf)
    }

    function Kf(a, b) {
        return z(b) ? a.getElementById(b) : b
    }

    function Lf(a, b) {
        return (b || document).getElementsByTagName(String(a))
    }

    function Mf() {
        var a = document;
        return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : Nf(document, "*", Fa, void 0)
    }

    function Of(a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0]; else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Nf(c, "*", a, b)[0] || null
        }
        return a || null
    }

    function Nf(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (g = e = 0; h = a[g]; g++) b = h.className, typeof b.split == p && Qc(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }

    function Pf(a, b) {
        wd(b, function (b, d) {
            b && b.nb && (b = b.Ra());
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Qf.hasOwnProperty(d) ? a.setAttribute(Qf[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }

    var Qf = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Rf(a) {
        a = a.document;
        a = Sf(a) ? a.documentElement : a.body;
        return new Hf(a.clientWidth, a.clientHeight)
    }

    function Tf(a) {
        var b = Uf(a);
        a = a.parentWindow || a.defaultView;
        return G && J("10") && a.pageYOffset != b.scrollTop ? new L(b.scrollLeft, b.scrollTop) : new L(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Uf(a) {
        return a.scrollingElement ? a.scrollingElement : !I && Sf(a) ? a.documentElement : a.body || a.documentElement
    }

    function Vf(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Wf(a, b, c) {
        return Xf(document, arguments)
    }

    function Xf(a, b) {
        var c = String(b[0]), d = b[1];
        if (!Me && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', cd(d.name), '"');
            if (d.type) {
                c.push(' type="', cd(d.type), '"');
                var e = {};
                Fd(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (z(d) ? c.className = d : C(d) ? c.className = d.join(" ") : Pf(c, d));
        2 < b.length && Yf(a, c, b, 2);
        return c
    }

    function Yf(a, b, c, d) {
        function e(c) {
            c && b.appendChild(z(c) ? a.createTextNode(c) : c)
        }

        for (; d < c.length; d++) {
            var g = c[d];
            !uc(g) || wc(g) && 0 < g.nodeType ? e(g) : Kc(Zf(g) ? Tc(g) : g, e)
        }
    }

    function $f() {
        var a = Af("WBR"), b = document, c = b.createElement(f);
        G ? (a = Bf(Df, a), c.innerHTML = wf(a), c.removeChild(c.firstChild)) : c.innerHTML = wf(a);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild); else {
            for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
            c = b
        }
        return c
    }

    function Sf(a) {
        return "CSS1Compat" == a.compatMode
    }

    function ag(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case oa:
            case ma:
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case ta:
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    }

    function bg(a, b) {
        Yf(N(a), a, arguments, 1)
    }

    function cg(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function dg(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }

    function eg(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }

    function fg(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function gg(a) {
        return Ne && void 0 != a.children ? a.children : Lc(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    }

    function hg(a) {
        return x(a.firstElementChild) ? a.firstElementChild : ig(a.firstChild, !0)
    }

    function ig(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    }

    function jg(a) {
        return wc(a) && 1 == a.nodeType
    }

    function kg(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function lg(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (G && !ge(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType, d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode, g = b.parentNode;
            return e == g ? mg(a, b) : !c && kg(e, b) ? -1 * ng(a, b) : !d && kg(g, a) ? ng(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
        }
        d = N(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(w.Range.START_TO_END, a)
    }

    function ng(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (; b.parentNode != c;) b = b.parentNode;
        return mg(b, a)
    }

    function mg(a, b) {
        for (; b = b.previousSibling;) if (b == a) return -1;
        return 1
    }

    function og(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [], e = Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], h = arguments[b]; h;) g.unshift(h), h = h.parentNode;
            d.push(g);
            e = Math.min(e, g.length)
        }
        g = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var k = 1; k < c; k++) if (h != d[k][b]) return g;
            g = h
        }
        return g
    }

    function N(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function pg(a) {
        return a.contentDocument || a.contentWindow.document
    }

    function qg(a) {
        try {
            return a.contentWindow || (a.contentDocument ? Vf(a.contentDocument) : null)
        } catch (b) {
        }
        return null
    }

    function rg(a, b) {
        if ("textContent" in a) a.textContent = b; else if (3 == a.nodeType) a.data = String(b); else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else cg(a), a.appendChild(N(a).createTextNode(String(b)))
    }

    var sg = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, tg = {IMG: " ", BR: "\n"};

    function ug(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }

    function vg(a) {
        return G && !J("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    }

    function wg(a) {
        a = a.tabIndex;
        return qc(a) && 0 <= a && 32768 > a
    }

    function xg(a) {
        if (Oe && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
            var b = [];
            yg(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Oe || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function zg(a) {
        var b = [];
        yg(a, b, !1);
        return b.join("")
    }

    function yg(a, b, c) {
        if (!(a.nodeName in sg)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in tg) b.push(tg[a.nodeName]); else for (a = a.firstChild; a;) yg(a, b, c), a = a.nextSibling
    }

    function Zf(a) {
        if (a && typeof a.length == Gb) {
            if (wc(a)) return typeof a.item == p || typeof a.item == Vb;
            if (vc(a)) return typeof a.item == p
        }
        return !1
    }

    function Jf(a) {
        this.a = a || w.document || document
    }

    v = Jf.prototype;
    v.j = function (a) {
        return Kf(this.a, a)
    };
    v.D = function (a, b, c) {
        return Xf(this.a, arguments)
    };

    function Ag(a, b) {
        return a.a.createElement(String(b))
    }

    function Bg(a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    }

    v.appendChild = function (a, b) {
        a.appendChild(b)
    };
    v.Tc = cg;
    v.ci = gg;
    v.dg = hg;
    v.contains = kg;
    v.eb = rg;
    v.fg = xg;

    function Cg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }

    v = Cg.prototype;
    v.contains = function (a) {
        return this && a ? a instanceof Cg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    v.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    v.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    v.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    v.translate = function (a, b) {
        a instanceof L ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, qc(b) && (this.top += b, this.bottom += b));
        return this
    };

    function Dg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    v = Dg.prototype;
    v.contains = function (a) {
        return a instanceof L ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    v.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    v.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    v.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    v.translate = function (a, b) {
        a instanceof L ? (this.left += a.x, this.top += a.y) : (this.left += a, qc(b) && (this.top += b));
        return this
    };

    function O(a, b, c) {
        if (z(b)) (b = Eg(a, b)) && (a.style[b] = c); else for (var d in b) {
            c = a;
            var e = b[d], g = Eg(c, d);
            g && (c.style[g] = e)
        }
    }

    var Fg = {};

    function Eg(a, b) {
        var c = Fg[b];
        if (!c) {
            var d = qd(b);
            c = d;
            void 0 === a.style[d] && (d = (I ? "Webkit" : H ? "Moz" : G ? "ms" : Qd ? "O" : null) + rd(d), void 0 !== a.style[d] && (c = d));
            Fg[b] = c
        }
        return c
    }

    function Gg(a, b) {
        var c = N(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Hg(a, b) {
        return Gg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Ig(a, b, c) {
        if (b instanceof L) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = Jg(d);
        a.style.top = Jg(b)
    }

    function Kg(a) {
        a = a ? N(a) : document;
        return !G || ge(9) || Sf(If(a).a) ? a.documentElement : a.body
    }

    function Lg(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
        G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Mg(a) {
        if (G && !ge(8)) return a.offsetParent;
        var b = N(a), c = Hg(a, Lb), d = "fixed" == c || c == Ba;
        for (a = a.parentNode; a && a != b; a = a.parentNode) if (11 == a.nodeType && a.host && (a = a.host), c = Hg(a, Lb), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Ba || "relative" == c)) return a;
        return null
    }

    function Ng(a) {
        for (var b = new Cg(0, Infinity, Infinity, 0), c = If(a), d = c.a.body, e = c.a.documentElement, g = Uf(c.a); a = Mg(a);) if (!(G && 0 == a.clientWidth || I && 0 == a.clientHeight && a == d) && a != d && a != e && Hg(a, "overflow") != ec) {
            var h = Og(a), k = new L(a.clientLeft, a.clientTop);
            h.x += k.x;
            h.y += k.y;
            b.top = Math.max(b.top, h.y);
            b.right = Math.min(b.right, h.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
            b.left = Math.max(b.left, h.x)
        }
        d = g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, g);
        c = Rf(Bg(c) ||
            window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }

    function Og(a) {
        var b = N(a), c = new L(0, 0), d = Kg(b);
        if (a == d) return c;
        a = Lg(a);
        b = Tf(If(b).a);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Pg(a, b) {
        var c = new L(0, 0), d = Vf(N(a));
        if (!Nd(d, "parent")) return c;
        do {
            if (d == b) var e = Og(a); else e = Lg(a), e = new L(e.left, e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }

    function Jg(a) {
        typeof a == Gb && (a += "px");
        return a
    }

    function Qg(a) {
        var b = Rg;
        if (Hg(a, "display") != q) return b(a);
        var c = a.style, d = c.display, e = c.visibility, g = c.position;
        c.visibility = qb;
        c.position = Ba;
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = e;
        return a
    }

    function Rg(a) {
        var b = a.offsetWidth, c = a.offsetHeight, d = I && !b && !c;
        return x(b) && !d || !a.getBoundingClientRect ? new Hf(b, c) : (a = Lg(a), new Hf(a.right - a.left, a.bottom - a.top))
    }

    function P(a, b) {
        a.style.display = b ? "" : q
    }

    function Sg(a, b) {
        b = If(b);
        var c = b.a;
        if (G && c.createStyleSheet) b = c.createStyleSheet(), Tg(b, a); else {
            c = Nf(b.a, "HEAD", void 0, void 0)[0];
            if (!c) {
                var d = Nf(b.a, "BODY", void 0, void 0)[0];
                c = b.D("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.D("STYLE");
            Tg(d, a);
            b.appendChild(c, d)
        }
    }

    function Tg(a, b) {
        b = sf(b);
        G && x(a.cssText) ? a.cssText = b : a.innerHTML = b
    }

    function Ug(a) {
        return Rb == Hg(a, Za)
    }

    var Vg = H ? "MozUserSelect" : I || Rd ? "WebkitUserSelect" : null;

    function Wg(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (Vg) {
            if (b = b ? q : "", a.style && (a.style[Vg] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[Vg] = b)
            }
        } else if (G || Qd) if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    }

    function Xg(a) {
        return new Hf(a.offsetWidth, a.offsetHeight)
    }

    function Yg(a, b) {
        var c = Sf(If(N(a)).a);
        if (!G || J("10") || c && J("8")) Zg(a, b, "content-box"); else {
            var d = a.style;
            c ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (c = $g(a), a = ah(a), d.pixelWidth = b.width + a.left + c.left + c.right + a.right, d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
        }
    }

    function Zg(a, b, c) {
        a = a.style;
        H ? a.MozBoxSizing = c : I ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px"
    }

    function bh(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c], g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = g;
        return +b
    }

    function ch(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? bh(a, b, "left", "pixelLeft") : 0
    }

    function $g(a) {
        if (G) {
            var b = ch(a, Jb), c = ch(a, Kb), d = ch(a, "paddingTop");
            a = ch(a, "paddingBottom");
            return new Cg(d, c, a, b)
        }
        b = Gg(a, Jb);
        c = Gg(a, Kb);
        d = Gg(a, "paddingTop");
        a = Gg(a, "paddingBottom");
        return new Cg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    }

    var dh = {thin: 2, medium: 4, thick: 6};

    function eh(a, b) {
        if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == q) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in dh ? dh[b] : bh(a, b, "left", "pixelLeft")
    }

    function ah(a) {
        if (G && !ge(9)) {
            var b = eh(a, "borderLeft"), c = eh(a, "borderRight"), d = eh(a, "borderTop");
            a = eh(a, "borderBottom");
            return new Cg(d, c, a, b)
        }
        b = Gg(a, "borderLeftWidth");
        c = Gg(a, "borderRightWidth");
        d = Gg(a, "borderTopWidth");
        a = Gg(a, "borderBottomWidth");
        return new Cg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };var fh;
    Gd(["A", "AREA", "BUTTON", "HEAD", oa, "LINK", "MENU", "META", "OPTGROUP", qa, "PROGRESS", "STYLE", "SELECT", "SOURCE", va, wa, "TRACK"]);

    function gh(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }

    function hh(a, b, c) {
        C(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (fh || (fh = {
            atomic: !1,
            autocomplete: q,
            dropeffect: q,
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: dc,
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: q,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = fh, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };

    function R() {
        this.rb = this.rb;
        this.wa = this.wa
    }

    R.prototype.rb = !1;
    R.prototype.M = function () {
        this.rb || (this.rb = !0, this.F())
    };

    function ih(a, b) {
        a.rb ? x(void 0) ? b.call(void 0) : b() : (a.wa || (a.wa = []), a.wa.push(x(void 0) ? D(b, void 0) : b))
    }

    R.prototype.F = function () {
        if (this.wa) for (; this.wa.length;) this.wa.shift()()
    };

    function jh(a) {
        a && typeof a.M == p && a.M()
    };var kh = !G || ge(9), lh = !G || ge(9), mh = G && !J("9"), nh = function () {
        if (!w.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0
            }
        });
        w.addEventListener("test", A, b);
        w.removeEventListener("test", A, b);
        return a
    }();

    function oh(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.c = !1;
        this.Xg = !0
    }

    oh.prototype.stopPropagation = function () {
        this.c = !0
    };
    oh.prototype.b = function () {
        this.Xg = !1
    };

    function ph(a) {
        return I ? "webkit" + a : Qd ? "o" + a.toLowerCase() : a.toLowerCase()
    }

    var qh = {
        xk: Sa,
        Sm: "rightclick",
        Jk: Xa,
        qc: Ab,
        rc: Eb,
        Zl: Db,
        Yl: Cb,
        Xl: Bb,
        Vl: "mouseenter",
        Wl: "mouseleave",
        pc: "mousecancel",
        Xm: "selectionchange",
        Ym: "selectstart",
        Nn: "wheel",
        Gl: xb,
        Fl: wb,
        Hl: yb,
        qk: Ka,
        vl: cb,
        Kk: Ya,
        wl: db,
        xl: eb,
        wk: Oa,
        Pm: "reset",
        Wm: "select",
        on: "submit",
        Dl: "input",
        Mm: "propertychange",
        dl: "dragstart",
        Zk: "drag",
        al: "dragenter",
        cl: "dragover",
        bl: "dragleave",
        gl: "drop",
        $k: "dragend",
        xn: "touchstart",
        wn: "touchmove",
        vn: "touchend",
        un: "touchcancel",
        pk: "beforeunload",
        Ek: "consolemessage",
        Fk: Wa,
        Lk: "devicechange",
        Mk: "devicemotion",
        Nk: "deviceorientation",
        Tk: "DOMContentLoaded",
        ol: "error",
        Bl: "help",
        Il: zb,
        Ql: "losecapture",
        tm: "orientationchange",
        Om: Qb,
        Qm: "resize",
        Tm: "scroll",
        Dn: "unload",
        tk: "canplay",
        uk: "canplaythrough",
        il: "durationchange",
        kl: "emptied",
        ll: "ended",
        Ll: "loadeddata",
        Ml: "loadedmetadata",
        zm: "pause",
        Am: "play",
        Bm: "playing",
        Nm: "ratechange",
        Um: "seeked",
        Vm: "seeking",
        ln: "stalled",
        pn: "suspend",
        rn: "timeupdate",
        Ln: "volumechange",
        Mn: "waiting",
        hn: "sourceopen",
        gn: "sourceended",
        fn: "sourceclosed",
        Yj: "abort",
        Fn: "update",
        In: "updatestart",
        Gn: "updateend",
        Al: "hashchange",
        vm: "pagehide",
        wm: "pageshow",
        Km: "popstate",
        Hk: "copy",
        ym: "paste",
        Ik: "cut",
        ik: "beforecopy",
        jk: "beforecut",
        mk: "beforepaste",
        sm: "online",
        rm: "offline",
        Tl: "message",
        Dk: "connect",
        El: "install",
        Zj: "activate",
        ul: "fetch",
        yl: "foreignfetch",
        Ul: "messageerror",
        mn: "statechange",
        Hn: "updatefound",
        Gk: "controllerchange",
        fk: ph("AnimationStart"),
        dk: ph("AnimationEnd"),
        ek: ph("AnimationIteration"),
        yn: ph("TransitionEnd"),
        Dm: "pointerdown",
        Jm: "pointerup",
        Cm: "pointercancel",
        Gm: "pointermove",
        Im: "pointerover",
        Hm: "pointerout",
        Em: "pointerenter",
        Fm: "pointerleave",
        zl: "gotpointercapture",
        Rl: "lostpointercapture",
        $l: "MSGestureChange",
        am: "MSGestureEnd",
        bm: "MSGestureHold",
        cm: "MSGestureStart",
        dm: "MSGestureTap",
        em: "MSGotPointerCapture",
        fm: "MSInertiaStart",
        gm: "MSLostPointerCapture",
        hm: "MSPointerCancel",
        im: "MSPointerDown",
        jm: "MSPointerEnter",
        km: "MSPointerHover",
        lm: "MSPointerLeave",
        mm: "MSPointerMove",
        nm: "MSPointerOut",
        om: "MSPointerOver",
        pm: "MSPointerUp",
        Ah: "text",
        qn: G ? "textinput" : "textInput",
        Bk: "compositionstart",
        Ck: "compositionupdate",
        Ak: "compositionend",
        kk: "beforeinput",
        pl: "exit",
        Jl: "loadabort",
        Kl: "loadcommit",
        Nl: "loadredirect",
        Ol: "loadstart",
        Pl: "loadstop",
        Rm: "responsive",
        dn: "sizechanged",
        En: "unresponsive",
        Kn: "visibilitychange",
        nn: "storage",
        Yk: "DOMSubtreeModified",
        Uk: "DOMNodeInserted",
        Wk: "DOMNodeRemoved",
        Xk: "DOMNodeRemovedFromDocument",
        Vk: "DOMNodeInsertedIntoDocument",
        Rk: "DOMAttrModified",
        Sk: "DOMCharacterDataModified",
        nk: "beforeprint",
        $j: "afterprint",
        lk: "beforeinstallprompt",
        gk: "appinstalled"
    };

    function rh(a, b) {
        oh.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.f = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.a = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ? H && (Nd(b, "nodeName") || (b = null)) : c == Db ? b = a.fromElement :
                c == Cb && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey =
                a.metaKey;
            this.f = Ud ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = z(a.pointerType) ? a.pointerType : sh[a.pointerType] || "";
            this.a = a;
            a.defaultPrevented && this.b()
        }
    }

    E(rh, oh);
    var th = [1, 4, 2], sh = {2: "touch", 3: "pen", 4: "mouse"};

    function uh(a) {
        return kh ? 0 == a.a.button : a.type == Sa ? !0 : !!(a.a.button & th[0])
    }

    rh.prototype.stopPropagation = function () {
        rh.m.stopPropagation.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    rh.prototype.b = function () {
        rh.m.b.call(this);
        var a = this.a;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, mh) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var vh = "closure_listenable_" + (1E6 * Math.random() | 0);

    function wh(a) {
        return !(!a || !a[vh])
    }

    var xh = 0;

    function yh(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Kd = e;
        this.key = ++xh;
        this.mc = this.gd = !1
    }

    function zh(a) {
        a.mc = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.Kd = null
    };

    function Ah(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }

    Ah.prototype.add = function (a, b, c, d, e) {
        var g = a.toString();
        a = this.a[g];
        a || (a = this.a[g] = [], this.b++);
        var h = Bh(a, b, d, e);
        -1 < h ? (b = a[h], c || (b.gd = !1)) : (b = new yh(b, this.src, g, !!d, e), b.gd = c, a.push(b));
        return b
    };
    Ah.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = Bh(e, b, c, d);
        return -1 < b ? (zh(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };

    function Ch(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = Rc(a.a[c], b);
        d && (zh(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    }

    function Dh(a, b) {
        b = b && b.toString();
        var c = 0, d;
        for (d in a.a) if (!b || d == b) {
            for (var e = a.a[d], g = 0; g < e.length; g++) ++c, zh(e[g]);
            delete a.a[d];
            a.b--
        }
        return c
    }

    Ah.prototype.Gc = function (a, b, c, d) {
        a = this.a[a.toString()];
        var e = -1;
        a && (e = Bh(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    Ah.prototype.hasListener = function (a, b) {
        var c = x(a), d = c ? a.toString() : "", e = x(b);
        return xd(this.a, function (a) {
            for (var g = 0; g < a.length; ++g) if (!(c && a[g].type != d || e && a[g].capture != b)) return !0;
            return !1
        })
    };

    function Bh(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.mc && g.listener == b && g.capture == !!c && g.Kd == d) return e
        }
        return -1
    };var Eh = "closure_lm_" + (1E6 * Math.random() | 0), Fh = {}, Gh = 0;

    function S(a, b, c, d, e) {
        if (d && d.once) return Hh(a, b, c, d, e);
        if (C(b)) {
            for (var g = 0; g < b.length; g++) S(a, b[g], c, d, e);
            return null
        }
        c = Ih(c);
        return wh(a) ? a.w(b, c, wc(d) ? !!d.capture : !!d, e) : Jh(a, b, c, !1, d, e)
    }

    function Jh(a, b, c, d, e, g) {
        if (!b) throw Error("Invalid event type");
        var h = wc(e) ? !!e.capture : !!e, k = Kh(a);
        k || (a[Eh] = k = new Ah(a));
        c = k.add(b, c, d, h, g);
        if (c.a) return c;
        d = Lh();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) nh || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e); else if (a.attachEvent) a.attachEvent(Mh(b.toString()), d); else if (a.addListener && a.removeListener) a.addListener(d); else throw Error("addEventListener and attachEvent are unavailable.");
        Gh++;
        return c
    }

    function Lh() {
        var a = Nh, b = lh ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
        return b
    }

    function Hh(a, b, c, d, e) {
        if (C(b)) {
            for (var g = 0; g < b.length; g++) Hh(a, b[g], c, d, e);
            return null
        }
        c = Ih(c);
        return wh(a) ? a.yb(b, c, wc(d) ? !!d.capture : !!d, e) : Jh(a, b, c, !0, d, e)
    }

    function Oh(a, b, c, d, e) {
        if (C(b)) for (var g = 0; g < b.length; g++) Oh(a, b[g], c, d, e); else d = wc(d) ? !!d.capture : !!d, c = Ih(c), wh(a) ? a.ca(b, c, d, e) : a && (a = Kh(a)) && (b = a.Gc(b, c, d, e)) && Ph(b)
    }

    function Ph(a) {
        if (qc(a) || !a || a.mc) return !1;
        var b = a.src;
        if (wh(b)) return Ch(b.Ka, a);
        var c = a.type, d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Mh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Gh--;
        (c = Kh(b)) ? (Ch(c, a), 0 == c.b && (c.src = null, b[Eh] = null)) : zh(a);
        return !0
    }

    function Qh(a, b) {
        if (!a) return 0;
        if (wh(a)) return a.Ka ? Dh(a.Ka, b) : 0;
        a = Kh(a);
        if (!a) return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a) if (!b || d == b) for (var e = a.a[d].concat(), g = 0; g < e.length; ++g) Ph(e[g]) && ++c;
        return c
    }

    function Mh(a) {
        return a in Fh ? Fh[a] : Fh[a] = "on" + a
    }

    function Rh(a, b, c, d) {
        var e = !0;
        if (a = Kh(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var g = b[a];
            g && g.capture == c && !g.mc && (g = Sh(g, d), e = e && !1 !== g)
        }
        return e
    }

    function Sh(a, b) {
        var c = a.listener, d = a.Kd || a.src;
        a.gd && Ph(a);
        return c.call(d, b)
    }

    function Nh(a, b) {
        if (a.mc) return !0;
        if (!lh) {
            if (!b) a:{
                b = ["window", "event"];
                for (var c = w, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
                    b = null;
                    break a
                }
                b = c
            }
            d = b;
            b = new rh(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a:{
                    var e = !1;
                    if (0 == d.keyCode) try {
                        d.keyCode = -1;
                        break a
                    } catch (h) {
                        e = !0
                    }
                    if (e || void 0 == d.returnValue) d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode) d.push(e);
                a = a.type;
                for (e = d.length - 1; !b.c && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var g = Rh(d[e], a, !0, b);
                    c = c && g
                }
                for (e = 0; !b.c && e < d.length; e++) b.currentTarget =
                    d[e], g = Rh(d[e], a, !1, b), c = c && g
            }
            return c
        }
        return Sh(a, new rh(b, this))
    }

    function Kh(a) {
        a = a[Eh];
        return a instanceof Ah ? a : null
    }

    var Th = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Ih(a) {
        if (vc(a)) return a;
        a[Th] || (a[Th] = function (b) {
            return a.handleEvent(b)
        });
        return a[Th]
    };

    function Uh(a) {
        R.call(this);
        this.b = a;
        this.a = {}
    }

    E(Uh, R);
    var Vh = [];
    v = Uh.prototype;
    v.w = function (a, b, c, d) {
        return Wh(this, a, b, c, d)
    };

    function Xh(a, b, c, d) {
        Wh(a, b, Sa, c, !1, d)
    }

    function Wh(a, b, c, d, e, g) {
        C(c) || (c && (Vh[0] = c.toString()), c = Vh);
        for (var h = 0; h < c.length; h++) {
            var k = S(b, c[h], d || a.handleEvent, e || !1, g || a.b || a);
            if (!k) break;
            a.a[k.key] = k
        }
        return a
    }

    v.yb = function (a, b, c, d) {
        return Yh(this, a, b, c, d)
    };

    function Yh(a, b, c, d, e, g) {
        if (C(c)) for (var h = 0; h < c.length; h++) Yh(a, b, c[h], d, e, g); else {
            b = Hh(b, c, d || a.handleEvent, e, g || a.b || a);
            if (!b) return a;
            a.a[b.key] = b
        }
        return a
    }

    v.ca = function (a, b, c, d, e) {
        if (C(b)) for (var g = 0; g < b.length; g++) this.ca(a, b[g], c, d, e); else c = c || this.handleEvent, d = wc(d) ? !!d.capture : !!d, e = e || this.b || this, c = Ih(c), d = !!d, b = wh(a) ? a.Gc(b, c, d, e) : a ? (a = Kh(a)) ? a.Gc(b, c, d, e) : null : null, b && (Ph(b), delete this.a[b.key]);
        return this
    };

    function Zh(a) {
        wd(a.a, function (a, c) {
            this.a.hasOwnProperty(c) && Ph(a)
        }, a);
        a.a = {}
    }

    v.F = function () {
        Uh.m.F.call(this);
        Zh(this)
    };
    v.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function $h() {
        R.call(this);
        this.Ka = new Ah(this);
        this.Kh = this;
        this.pf = null
    }

    E($h, R);
    $h.prototype[vh] = !0;
    v = $h.prototype;
    v.pd = r("pf");
    v.wf = hc("pf");
    v.addEventListener = function (a, b, c, d) {
        S(this, a, b, c, d)
    };
    v.removeEventListener = function (a, b, c, d) {
        Oh(this, a, b, c, d)
    };
    v.dispatchEvent = function (a) {
        var b = this.pd();
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.pd()) c.push(b), ++d
        }
        b = this.Kh;
        d = a.type || a;
        if (z(a)) a = new oh(a, b); else if (a instanceof oh) a.target = a.target || b; else {
            var e = a;
            a = new oh(d, b);
            Fd(a, e)
        }
        e = !0;
        if (c) for (var g = c.length - 1; !a.c && 0 <= g; g--) {
            var h = a.currentTarget = c[g];
            e = ai(h, d, !0, a) && e
        }
        a.c || (h = a.currentTarget = b, e = ai(h, d, !0, a) && e, a.c || (e = ai(h, d, !1, a) && e));
        if (c) for (g = 0; !a.c && g < c.length; g++) h = a.currentTarget = c[g], e = ai(h, d, !1, a) && e;
        return e
    };
    v.F = function () {
        $h.m.F.call(this);
        this.Ka && Dh(this.Ka, void 0);
        this.pf = null
    };
    v.w = function (a, b, c, d) {
        return this.Ka.add(String(a), b, !1, c, d)
    };
    v.yb = function (a, b, c, d) {
        return this.Ka.add(String(a), b, !0, c, d)
    };
    v.ca = function (a, b, c, d) {
        return this.Ka.remove(String(a), b, c, d)
    };

    function ai(a, b, c, d) {
        b = a.Ka.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.mc && h.capture == c) {
                var k = h.listener, l = h.Kd || h.src;
                h.gd && Ch(a.Ka, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Xg
    }

    v.Gc = function (a, b, c, d) {
        return this.Ka.Gc(String(a), b, c, d)
    };
    v.hasListener = function (a, b) {
        return this.Ka.hasListener(x(a) ? String(a) : void 0, b)
    };

    function bi() {
    }

    tc(bi);
    bi.prototype.a = 0;

    function T(a) {
        $h.call(this);
        this.b = a || If();
        this.ia = ci;
        this.ka = null;
        this.V = !1;
        this.A = null;
        this.I = void 0;
        this.G = this.s = this.B = this.pa = null;
        this.fb = !1
    }

    E(T, $h);
    T.prototype.qb = bi.Y();
    var ci = null;

    function di(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : Ya;
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? cb : Ka;
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }

    function ei(a) {
        return a.ka || (a.ka = ":" + (a.qb.a++).toString(36))
    }

    function fi(a, b) {
        if (a.B && a.B.G) {
            var c = a.B.G, d = a.ka;
            d in c && delete c[d];
            Cd(a.B.G, b, a)
        }
        a.ka = b
    }

    v = T.prototype;
    v.j = r("A");

    function gi(a, b) {
        return a.A ? Of(b, a.A || a.b.a) : null
    }

    function U(a) {
        a.I || (a.I = new Uh(a));
        return a.I
    }

    function hi(a, b) {
        if (a == b) throw Error(xa);
        if (b && a.B && a.ka && ii(a.B, a.ka) && a.B != b) throw Error(xa);
        a.B = b;
        T.m.wf.call(a, b)
    }

    v.tb = r("B");
    v.wf = function (a) {
        if (this.B && this.B != a) throw Error("Method not supported");
        T.m.wf.call(this, a)
    };
    v.D = function () {
        this.A = Ag(this.b, f)
    };
    v.ga = function (a) {
        ji(this, a)
    };

    function ji(a, b, c) {
        if (a.V) throw Error(ja);
        a.A || a.D();
        b ? b.insertBefore(a.A, c || null) : a.b.a.body.appendChild(a.A);
        a.B && !a.B.V || a.P()
    }

    function ki(a, b) {
        if (a.V) throw Error(ja);
        if (b && a.Ee(b)) {
            a.fb = !0;
            var c = N(b);
            a.b && a.b.a == c || (a.b = If(b));
            a.T(b);
            a.P()
        } else throw Error("Invalid element to decorate");
    }

    v.Ee = u(!0);
    v.T = hc("A");
    v.P = function () {
        this.V = !0;
        li(this, function (a) {
            !a.V && a.j() && a.P()
        })
    };
    v.$ = function () {
        li(this, function (a) {
            a.V && a.$()
        });
        this.I && Zh(this.I);
        this.V = !1
    };
    v.F = function () {
        this.V && this.$();
        this.I && (this.I.M(), delete this.I);
        li(this, function (a) {
            a.M()
        });
        !this.fb && this.A && fg(this.A);
        this.B = this.pa = this.A = this.G = this.s = null;
        T.m.F.call(this)
    };

    function V(a, b) {
        return ei(a) + "." + b
    }

    v.sc = function (a, b, c) {
        if (a.V && (c || !this.V)) throw Error(ja);
        if (0 > b || b > mi(this)) throw Error("Child component index out of bounds");
        this.G && this.s || (this.G = {}, this.s = []);
        if (a.tb() == this) {
            var d = ei(a);
            this.G[d] = a;
            Rc(this.s, a)
        } else Cd(this.G, ei(a), a);
        hi(a, this);
        Uc(this.s, b, 0, a);
        a.V && this.V && a.tb() == this ? (c = this.wd(), b = c.childNodes[b] || null, b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.A || this.D(), b = ni(this, b + 1), ji(a, this.wd(), b ? b.A : null)) : this.V && !a.V && a.A && a.A.parentNode && 1 == a.A.parentNode.nodeType && a.P()
    };
    v.wd = r("A");

    function oi(a) {
        null == a.ia && (a.ia = Ug(a.V ? a.A : a.b.a.body));
        return a.ia
    }

    function mi(a) {
        return a.s ? a.s.length : 0
    }

    function ii(a, b) {
        a.G && b ? (a = a.G, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    }

    function ni(a, b) {
        return a.s ? a.s[b] || null : null
    }

    function li(a, b, c) {
        a.s && Kc(a.s, b, c)
    }

    function pi(a, b) {
        return a.s && b ? Jc(a.s, b) : -1
    }

    v.removeChild = function (a, b) {
        if (a) {
            var c = z(a) ? a : ei(a);
            a = ii(this, c);
            if (c && a) {
                var d = this.G;
                c in d && delete d[c];
                Rc(this.s, a);
                b && (a.$(), a.A && fg(a.A));
                hi(a, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    v.Tc = function (a) {
        for (var b = []; this.s && 0 != this.s.length;) b.push(this.removeChild(ni(this, 0), a));
        return b
    };

    function qi() {
    }

    var ri;
    tc(qi);
    var si = {
        button: "pressed",
        checkbox: Qa,
        menuitem: Sb,
        menuitemcheckbox: Qa,
        menuitemradio: Qa,
        radio: Qa,
        tab: Sb,
        treeitem: Sb
    };
    v = qi.prototype;
    v.Yb = gc();
    v.D = function (a) {
        return a.b.D(f, ti(this, a).join(" "), a.da())
    };
    v.wb = function (a) {
        return a
    };

    function ui(a, b, c) {
        if (a = a.j ? a.j() : a) {
            var d = [b];
            G && !J("7") && (d = vi(He(a), b), d.push(b));
            (c ? Je : Le)(a, d)
        }
    }

    v.zd = u(!0);
    v.Na = function (a, b) {
        b.id && fi(a, b.id);
        var c = this.wb(b);
        c && c.firstChild ? wi(a, c.firstChild.nextSibling ? Tc(c.childNodes) : c.firstChild) : a.Jb = null;
        var d = 0, e = this.ea(), g = this.ea(), h = !1, k = !1, l = !1, m = Tc(He(b));
        Kc(m, function (a) {
            h || a != e ? k || a != g ? d |= this.rd(a) : k = !0 : (h = !0, g == e && (k = !0));
            1 == this.rd(a) && vg(c) && wg(c) && ug(c, !1)
        }, this);
        a.W = d;
        h || (m.push(e), g == e && (k = !0));
        k || m.push(g);
        (a = a.xe) && m.push.apply(m, a);
        if (G && !J("7")) {
            var n = vi(m);
            0 < n.length && (m.push.apply(m, n), l = !0)
        }
        if (!h || !k || a || l) b.className = m.join(" ");
        return b
    };
    v.ig = function (a) {
        oi(a) && this.Je(a.j(), !0);
        a.isEnabled() && this.Zb(a, a.N())
    };

    function xi(a, b, c) {
        if (a = c || a.Yb()) c = b.getAttribute("role") || null, a != c && gh(b, a)
    }

    function yi(a, b, c) {
        b.N() || hh(c, qb, !b.N());
        b.isEnabled() || a.Va(c, 1, !b.isEnabled());
        b.ba & 8 && a.Va(c, 8, !!(b.W & 8));
        b.ba & 16 && a.Va(c, 16, !!(b.W & 16));
        b.ba & 64 && a.Va(c, 64, !!(b.W & 64))
    }

    v.Ad = function (a, b) {
        Wg(a, !b, !G && !Qd)
    };
    v.Je = function (a, b) {
        ui(a, this.ea() + "-rtl", b)
    };
    v.Ie = function (a) {
        var b;
        return a.ba & 32 && (b = a.j()) ? vg(b) && wg(b) : !1
    };
    v.Zb = function (a, b) {
        var c;
        if (a.ba & 32 && (c = a.j())) {
            if (!b && a.W & 32) {
                try {
                    c.blur()
                } catch (d) {
                }
                a.W & 32 && a.jg(null)
            }
            (vg(c) && wg(c)) != b && ug(c, b)
        }
    };
    v.L = function (a, b) {
        P(a, b);
        a && hh(a, qb, !b)
    };
    v.Lc = function (a, b, c) {
        var d = a.j();
        if (d) {
            var e = this.Fc(b);
            e && ui(a, e, c);
            this.Va(d, b, c)
        }
    };
    v.Va = function (a, b, c) {
        ri || (ri = {1: "disabled", 8: Sb, 16: Qa, 64: "expanded"});
        b = ri[b];
        var d = a.getAttribute("role") || null;
        d && (d = si[d] || b, b = b == Qa || b == Sb ? d : b);
        b && hh(a, b, c)
    };
    v.Kc = function (a, b) {
        var c = this.wb(a);
        c && (cg(c), b && (z(b) ? rg(c, b) : (a = function (a) {
            if (a) {
                var b = N(c);
                c.appendChild(z(a) ? b.createTextNode(a) : a)
            }
        }, C(b) ? Kc(b, a) : !uc(b) || "nodeType" in b ? a(b) : Kc(Tc(b), a))))
    };
    v.ea = u("goog-control");

    function ti(a, b) {
        var c = a.ea(), d = [c], e = a.ea();
        e != c && d.push(e);
        c = b.W;
        for (e = []; c;) {
            var g = c & -c;
            e.push(a.Fc(g));
            c &= ~g
        }
        d.push.apply(d, e);
        (a = b.xe) && d.push.apply(d, a);
        G && !J("7") && d.push.apply(d, vi(d));
        return d
    }

    function vi(a, b) {
        var c = [];
        b && (a = Sc(a, [b]));
        Kc([], function (d) {
            !Oc(d, Cc(Qc, a)) || b && !Qc(d, b) || c.push(d.join("_"))
        });
        return c
    }

    v.Fc = function (a) {
        this.a || zi(this);
        return this.a[a]
    };
    v.rd = function (a) {
        if (!this.c) {
            this.a || zi(this);
            var b = this.a, c = {}, d;
            for (d in b) c[b[d]] = d;
            this.c = c
        }
        a = parseInt(this.c[a], 10);
        return isNaN(a) ? 0 : a
    };

    function zi(a) {
        var b = a.ea();
        b.replace(/\xa0|\s/g, " ");
        a.a = {
            1: b + ba,
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };

    function Ai() {
    }

    E(Ai, qi);
    tc(Ai);
    v = Ai.prototype;
    v.Yb = u(Ma);
    v.Va = function (a, b, c) {
        switch (b) {
            case 8:
            case 16:
                hh(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                Ai.m.Va.call(this, a, b, c)
        }
    };
    v.D = function (a) {
        var b = Ai.m.D.call(this, a), c = a.l;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.Ba()) && this.za(b, c);
        a.ba & 16 && this.Va(b, 16, !!(a.W & 16));
        return b
    };
    v.Na = function (a, b) {
        b = Ai.m.Na.call(this, a, b);
        var c = this.Ba(b);
        a.g = c;
        a.l = b.title;
        a.ba & 16 && this.Va(b, 16, !!(a.W & 16));
        return b
    };
    v.Ba = A;
    v.za = A;
    v.ea = u("goog-button");

    function Di(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !H;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    }

    function Ei(a, b, c, d, e, g) {
        if (I && !J("525")) return !0;
        if (Ud && e) return Fi(a);
        if (e && !d) return !1;
        if (!H) {
            qc(b) && (b = Gi(b));
            var h = 17 == b || 18 == b || Ud && 91 == b;
            if ((!c || Ud) && h || Ud && 16 == b && (d || g)) return !1
        }
        if ((I || Rd) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (G && d && b == a) return !1;
        switch (a) {
            case 13:
                return H ? g || e ? !1 : !(c && d) : !0;
            case 27:
                return !(I || Rd || H)
        }
        return H && (d || e || g) ? !1 : Fi(a)
    }

    function Fi(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (I || Rd) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }

    function Gi(a) {
        if (H) a = Hi(a); else if (Ud && I) switch (a) {
            case 93:
                a = 91
        }
        return a
    }

    function Hi(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };

    function Ii(a, b) {
        $h.call(this);
        a && Ji(this, a, b)
    }

    E(Ii, $h);
    v = Ii.prototype;
    v.A = null;
    v.Pd = null;
    v.Ye = null;
    v.Qd = null;
    v.Fa = -1;
    v.xb = -1;
    v.le = !1;
    var Ki = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, Li = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, Mi = !I || J("525"), Ni = Ud && H;
    v = Ii.prototype;
    v.xi = function (a) {
        if (I || Rd) if (17 == this.Fa && !a.ctrlKey || 18 == this.Fa && !a.altKey || Ud && 91 == this.Fa && !a.metaKey) this.xb = this.Fa = -1;
        -1 == this.Fa && (a.ctrlKey && 17 != a.keyCode ? this.Fa = 17 : a.altKey && 18 != a.keyCode ? this.Fa = 18 : a.metaKey && 91 != a.keyCode && (this.Fa = 91));
        Mi && !Ei(a.keyCode, this.Fa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.xb = Gi(a.keyCode), Ni && (this.le = a.altKey))
    };
    v.yi = function (a) {
        this.xb = this.Fa = -1;
        this.le = a.altKey
    };
    v.handleEvent = function (a) {
        var b = a.a, c = b.altKey;
        if (G && a.type == xb) {
            var d = this.xb;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else (I || Rd) && a.type == xb ? (d = this.xb, e = 0 <= b.charCode && 63232 > b.charCode && Fi(d) ? b.charCode : 0) : Qd && !I ? (d = this.xb, e = Fi(d) ? b.keyCode : 0) : (d = b.keyCode || this.xb, e = b.charCode || 0, Ni && a.type == xb && (c = this.le), Ud && 63 == e && 224 == d && (d = 191));
        var g = d = Gi(d);
        d ? 63232 <= d && d in Ki ? g = Ki[d] : 25 == d && a.shiftKey && (g = 9) : b.keyIdentifier && b.keyIdentifier in Li && (g = Li[b.keyIdentifier]);
        H && Mi && a.type == xb && !Ei(g, this.Fa, a.shiftKey,
            a.ctrlKey, c, a.metaKey) || (a = g == this.Fa, this.Fa = g, b = new Oi(g, e, a, b), b.altKey = c, this.dispatchEvent(b))
    };
    v.j = r("A");

    function Ji(a, b, c) {
        a.Qd && Pi(a);
        a.A = b;
        a.Pd = S(a.A, xb, a, c);
        a.Ye = S(a.A, wb, a.xi, c, a);
        a.Qd = S(a.A, yb, a.yi, c, a)
    }

    function Pi(a) {
        a.Pd && (Ph(a.Pd), Ph(a.Ye), Ph(a.Qd), a.Pd = null, a.Ye = null, a.Qd = null);
        a.A = null;
        a.Fa = -1;
        a.xb = -1
    }

    v.F = function () {
        Ii.m.F.call(this);
        Pi(this)
    };

    function Oi(a, b, c, d) {
        rh.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c
    }

    E(Oi, rh);

    function Qi(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!vc(b)) throw Error("Invalid decorator function " + b);
        Ri[a] = b
    }

    var Si = {}, Ri = {};

    function W(a, b, c) {
        T.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = xc(b);
                if (d = Si[d]) break;
                b = b.m ? b.m.constructor : null
            }
            b = d ? vc(d.Y) ? d.Y() : new d : null
        }
        this.a = b;
        this.Jb = x(a) ? a : null
    }

    E(W, T);
    v = W.prototype;
    v.Jb = null;
    v.W = 0;
    v.ba = 39;
    v.gb = 255;
    v.Xc = 0;
    v.ha = !0;
    v.xe = null;
    v.Qe = !0;
    v.cd = !1;

    function Ti(a, b) {
        a.V && b != a.Qe && Ui(a, b);
        a.Qe = b
    }

    v.D = function () {
        var a = this.a.D(this);
        this.A = a;
        xi(this.a, a, this.Hc());
        this.cd || this.a.Ad(a, !1);
        this.N() || this.a.L(a, !1)
    };
    v.Hc = u(null);
    v.wd = function () {
        return this.a.wb(this.j())
    };
    v.Ee = function (a) {
        return this.a.zd(a)
    };
    v.T = function (a) {
        this.A = a = this.a.Na(this, a);
        xi(this.a, a, this.Hc());
        this.cd || this.a.Ad(a, !1);
        this.ha = a.style.display != q
    };
    v.P = function () {
        W.m.P.call(this);
        yi(this.a, this, this.A);
        this.a.ig(this);
        if (this.ba & -2 && (this.Qe && Ui(this, !0), this.ba & 32)) {
            var a = this.j();
            if (a) {
                var b = this.f || (this.f = new Ii);
                Ji(b, a);
                U(this).w(b, "key", this.Ga).w(a, cb, this.gi).w(a, Ka, this.jg)
            }
        }
    };

    function Ui(a, b) {
        var c = U(a), d = a.j();
        b ? (c.w(d, qh.qc, a.Nc).w(d, [qh.rc, qh.pc], a.bc).w(d, Db, a.Ke).w(d, Cb, a.Re), a.Pc != A && c.w(d, Wa, a.Pc), G && (J(9) || c.w(d, Xa, a.ng), a.h || (a.h = new Vi(a), ih(a, Cc(jh, a.h))))) : (c.ca(d, qh.qc, a.Nc).ca(d, [qh.rc, qh.pc], a.bc).ca(d, Db, a.Ke).ca(d, Cb, a.Re), a.Pc != A && c.ca(d, Wa, a.Pc), G && (J(9) || c.ca(d, Xa, a.ng), jh(a.h), a.h = null))
    }

    v.$ = function () {
        W.m.$.call(this);
        this.f && Pi(this.f);
        this.N() && this.isEnabled() && this.a.Zb(this, !1)
    };
    v.F = function () {
        W.m.F.call(this);
        this.f && (this.f.M(), delete this.f);
        delete this.a;
        this.h = this.xe = this.Jb = null
    };
    v.da = r("Jb");
    v.Kb = function (a) {
        this.a.Kc(this.j(), a);
        this.Jb = a
    };

    function wi(a, b) {
        a.Jb = b
    }

    v.ab = function () {
        var a = this.da();
        if (!a) return "";
        a = z(a) ? a : C(a) ? Mc(a, zg).join("") : xg(a);
        return Xc(a)
    };
    v.ah = function (a) {
        this.Kb(a)
    };
    v.N = r("ha");
    v.L = function (a, b) {
        return b || this.ha != a && this.dispatchEvent(a ? "show" : rb) ? ((b = this.j()) && this.a.L(b, a), this.isEnabled() && this.a.Zb(this, a), this.ha = a, !0) : !1
    };
    v.isEnabled = function () {
        return !(this.W & 1)
    };
    v.ma = function (a) {
        var b = this.tb();
        b && typeof b.isEnabled == p && !b.isEnabled() || !Wi(this, 1, !a) || (a || (Xi(this, !1), Yi(this, !1)), this.N() && this.a.Zb(this, a), Zi(this, 1, !a, !0))
    };

    function Yi(a, b) {
        Wi(a, 2, b) && Zi(a, 2, b)
    }

    v.dc = function () {
        return !!(this.W & 4)
    };

    function Xi(a, b) {
        Wi(a, 4, b) && Zi(a, 4, b)
    }

    function $i(a, b) {
        Wi(a, 64, b) && Zi(a, 64, b)
    }

    function Zi(a, b, c, d) {
        d || 1 != b ? a.ba & b && c != !!(a.W & b) && (a.a.Lc(a, b, c), a.W = c ? a.W | b : a.W & ~b) : a.ma(!c)
    }

    v.sa = function (a, b) {
        if (this.V && this.W & a && !b) throw Error(ja);
        !b && this.W & a && Zi(this, a, !1);
        this.ba = b ? this.ba | a : this.ba & ~a
    };

    function aj(a, b) {
        return !!(a.gb & b) && !!(a.ba & b)
    }

    function Wi(a, b, c) {
        return !!(a.ba & b) && !!(a.W & b) != c && (!(a.Xc & b) || a.dispatchEvent(di(b, c))) && !a.rb
    }

    v.Ke = function (a) {
        (!a.relatedTarget || !kg(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && aj(this, 2) && Yi(this, !0)
    };
    v.Re = function (a) {
        a.relatedTarget && kg(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (aj(this, 4) && Xi(this, !1), aj(this, 2) && Yi(this, !1))
    };
    v.Pc = A;
    v.Nc = function (a) {
        this.isEnabled() && (aj(this, 2) && Yi(this, !0), !uh(a) || I && Ud && a.ctrlKey || (aj(this, 4) && Xi(this, !0), this.a && this.a.Ie(this) && this.j().focus()));
        this.cd || !uh(a) || I && Ud && a.ctrlKey || a.b()
    };
    v.bc = function (a) {
        this.isEnabled() && (aj(this, 2) && Yi(this, !0), this.dc() && this.kc(a) && aj(this, 4) && Xi(this, !1))
    };
    v.ng = function (a) {
        this.isEnabled() && this.kc(a)
    };
    v.kc = function (a) {
        if (aj(this, 16)) {
            var b = !(this.W & 16);
            Wi(this, 16, b) && Zi(this, 16, b)
        }
        aj(this, 8) && Wi(this, 8, !0) && Zi(this, 8, !0);
        aj(this, 64) && $i(this, !(this.W & 64));
        b = new oh(Ca, this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.f = a.f);
        return this.dispatchEvent(b)
    };
    v.gi = function () {
        aj(this, 32) && Wi(this, 32, !0) && Zi(this, 32, !0)
    };
    v.jg = function () {
        aj(this, 4) && Xi(this, !1);
        aj(this, 32) && Wi(this, 32, !1) && Zi(this, 32, !1)
    };
    v.Ga = function (a) {
        return this.N() && this.isEnabled() && this.Mc(a) ? (a.b(), a.stopPropagation(), !0) : !1
    };
    v.Mc = function (a) {
        return 13 == a.keyCode && this.kc(a)
    };
    if (!vc(W)) throw Error("Invalid component class " + W);
    if (!vc(qi)) throw Error("Invalid renderer class " + qi);
    var bj = xc(W);
    Si[bj] = qi;
    Qi("goog-control", function () {
        return new W(null)
    });

    function Vi(a) {
        R.call(this);
        this.b = a;
        this.a = !1;
        this.c = new Uh(this);
        ih(this, Cc(jh, this.c));
        a = this.b.A;
        this.c.w(a, Ab, this.g).w(a, Eb, this.h).w(a, Sa, this.f)
    }

    E(Vi, R);
    var cj = !G || ge(9);
    Vi.prototype.g = function () {
        this.a = !1
    };
    Vi.prototype.h = function () {
        this.a = !0
    };

    function dj(a, b) {
        if (!cj) return a.button = 0, a.type = b, a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    }

    Vi.prototype.f = function (a) {
        if (this.a) this.a = !1; else {
            var b = a.a, c = b.button, d = b.type, e = dj(b, Ab);
            this.b.Nc(new rh(e, a.currentTarget));
            e = dj(b, Eb);
            this.b.bc(new rh(e, a.currentTarget));
            cj || (b.button = c, b.type = d)
        }
    };
    Vi.prototype.F = function () {
        this.b = null;
        Vi.m.F.call(this)
    };

    function ej() {
    }

    E(ej, Ai);
    tc(ej);
    v = ej.prototype;
    v.Yb = gc();
    v.D = function (a) {
        Ti(a, !1);
        a.gb &= -256;
        a.sa(32, !1);
        return a.b.D("BUTTON", {
            "class": ti(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.l || "",
            value: a.Ba() || ""
        }, a.ab() || "")
    };
    v.zd = function (a) {
        return "BUTTON" == a.tagName || a.tagName == oa && (a.type == Ma || "submit" == a.type || "reset" == a.type)
    };
    v.Na = function (a, b) {
        Ti(a, !1);
        a.gb &= -256;
        a.sa(32, !1);
        if (b.disabled) {
            var c = this.Fc(1);
            K(b, c)
        }
        return ej.m.Na.call(this, a, b)
    };
    v.ig = function (a) {
        U(a).w(a.j(), Sa, a.kc)
    };
    v.Ad = A;
    v.Je = A;
    v.Ie = function (a) {
        return a.isEnabled()
    };
    v.Zb = A;
    v.Lc = function (a, b, c) {
        ej.m.Lc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    };
    v.Ba = function (a) {
        return a.value
    };
    v.za = function (a, b) {
        a && (a.value = b)
    };
    v.Va = A;

    function fj(a, b, c) {
        W.call(this, a, b || ej.Y(), c)
    }

    E(fj, W);
    v = fj.prototype;
    v.Ba = r("g");
    v.za = function (a) {
        this.g = a;
        this.a.za(this.j(), a)
    };
    v.F = function () {
        fj.m.F.call(this);
        delete this.g;
        delete this.l
    };
    v.P = function () {
        fj.m.P.call(this);
        if (this.ba & 32) {
            var a = this.j();
            a && U(this).w(a, yb, this.Mc)
        }
    };
    v.Mc = function (a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && a.type == yb ? this.kc(a) : 32 == a.keyCode
    };
    Qi("goog-button", function () {
        return new fj(null)
    });

    function gj() {
    }

    E(gj, Ai);
    tc(gj);
    v = gj.prototype;
    v.D = function (a) {
        var b = ti(this, a);
        b = a.b.D(f, hb + b.join(" "), hj(this, a.da(), a.b));
        a = a.l;
        b && (a ? b.title = a : b.removeAttribute("title"));
        return b
    };
    v.Yb = u(Ma);
    v.wb = function (a) {
        return a && a.firstChild && a.firstChild.firstChild
    };

    function hj(a, b, c) {
        return c.D(f, hb + (a.ea() + "-outer-box"), c.D(f, hb + (a.ea() + "-inner-box"), b))
    }

    v.zd = function (a) {
        return a.tagName == f
    };
    v.Na = function (a, b) {
        ij(b, !0);
        ij(b, !1);
        a:{
            var c = a.b.dg(b);
            var d = this.ea() + "-outer-box";
            if (c && Ie(c, d) && (c = a.b.dg(c), d = this.ea() + "-inner-box", c && Ie(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(hj(this, b.childNodes, a.b));
        Je(b, ["goog-inline-block", this.ea()]);
        return gj.m.Na.call(this, a, b)
    };
    v.ea = u("goog-custom-button");

    function ij(a, b) {
        if (a) for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == Yc(e)) a.removeChild(c); else {
                    c.nodeValue = b ? Zc(e) : $c(e);
                    break
                }
            } else break;
            c = d
        }
    };

    function jj(a, b, c) {
        fj.call(this, a, b || gj.Y(), c);
        this.sa(16, !0)
    }

    E(jj, fj);
    Qi("goog-toggle-button", function () {
        return new jj(null)
    });

    function kj(a) {
        lj();
        return Cf(a, null)
    }

    var lj = A;
    var mj = "StopIteration" in w ? w.StopIteration : {message: "StopIteration", stack: ""};

    function nj() {
    }

    nj.prototype.next = function () {
        throw mj;
    };
    nj.prototype.Ja = function () {
        return this
    };

    function oj(a) {
        if (a instanceof nj) return a;
        if (typeof a.Ja == p) return a.Ja(!1);
        if (uc(a)) {
            var b = 0, c = new nj;
            c.next = function () {
                for (; ;) {
                    if (b >= a.length) throw mj;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function pj(a, b, c) {
        a = oj(a);
        try {
            for (; b.call(c, a.next(), void 0, a);) ;
        } catch (d) {
            if (d !== mj) throw d;
        }
    };

    function qj(a, b) {
        this.b = {};
        this.a = [];
        this.f = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) if (a instanceof qj) for (c = a.Qa(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d])); else for (d in a) this.set(d, a[d])
    }

    v = qj.prototype;
    v.Ea = function () {
        rj(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    v.Qa = function () {
        rj(this);
        return this.a.concat()
    };

    function sj(a, b) {
        return tj(a.b, b)
    }

    function uj(a) {
        a.b = {};
        a.a.length = 0;
        a.c = 0;
        a.f = 0
    }

    v.remove = function (a) {
        return tj(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && rj(this), !0) : !1
    };

    function rj(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                tj(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], tj(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }

    v.get = function (a, b) {
        return tj(this.b, a) ? this.b[a] : b
    };
    v.set = function (a, b) {
        tj(this.b, a) || (this.c++, this.a.push(a), this.f++);
        this.b[a] = b
    };
    v.forEach = function (a, b) {
        for (var c = this.Qa(), d = 0; d < c.length; d++) {
            var e = c[d], g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    v.Ja = function (a) {
        rj(this);
        var b = 0, c = this.f, d = this, e = new nj;
        e.next = function () {
            if (c != d.f) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw mj;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };

    function tj(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function vj(a) {
        if (a.Ea && typeof a.Ea == p) return a.Ea();
        if (z(a)) return a.split("");
        if (uc(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    }

    function wj(a, b, c) {
        if (a.forEach && typeof a.forEach == p) a.forEach(b, c); else if (uc(a) || z(a)) Kc(a, b, c); else {
            if (a.Qa && typeof a.Qa == p) var d = a.Qa(); else if (a.Ea && typeof a.Ea == p) d = void 0; else if (uc(a) || z(a)) {
                d = [];
                for (var e = a.length, g = 0; g < e; g++) d.push(g)
            } else d = yd(a);
            e = vj(a);
            g = e.length;
            for (var h = 0; h < g; h++) b.call(c, e[h], d && d[h], a)
        }
    };var xj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function yj(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="), e = null;
                if (0 <= d) {
                    var g = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else g = a[c];
                b(g, e ? bd(e) : "")
            }
        }
    };

    function zj(a) {
        this.f = this.s = this.c = "";
        this.l = null;
        this.g = this.h = "";
        this.b = !1;
        if (a instanceof zj) {
            this.b = x(void 0) ? void 0 : a.b;
            Aj(this, a.c);
            this.s = a.s;
            this.f = a.f;
            Bj(this, a.l);
            this.h = a.h;
            var b = a.a;
            var c = new Cj;
            c.c = b.c;
            b.a && (c.a = new qj(b.a), c.b = b.b);
            Dj(this, c);
            this.g = a.g
        } else a && (b = String(a).match(xj)) ? (this.b = !1, Aj(this, b[1] || "", !0), this.s = Ej(b[2] || ""), this.f = Ej(b[3] || "", !0), Bj(this, b[4]), this.h = Ej(b[5] || "", !0), Dj(this, b[6] || "", !0), this.g = Ej(b[7] || "")) : (this.b = !1, this.a = new Cj(null, this.b))
    }

    zj.prototype.toString = function () {
        var a = [], b = this.c;
        b && a.push(Fj(b, Gj, !0), ":");
        var c = this.f;
        if (c || "file" == b) a.push("//"), (b = this.s) && a.push(Fj(b, Gj, !0), "@"), a.push(ad(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
        if (c = this.h) this.f && "/" != c.charAt(0) && a.push("/"), a.push(Fj(c, "/" == c.charAt(0) ? Hj : Ij, !0));
        (c = this.a.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", Fj(c, Jj));
        return a.join("")
    };

    function Aj(a, b, c) {
        a.c = c ? Ej(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    }

    function Bj(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.l = b
        } else a.l = null
    }

    function Dj(a, b, c) {
        b instanceof Cj ? (a.a = b, Kj(a.a, a.b)) : (c || (b = Fj(b, Lj)), a.a = new Cj(b, a.b))
    }

    function Ej(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function Fj(a, b, c) {
        return z(a) ? (a = encodeURI(a).replace(b, Mj), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function Mj(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }

    var Gj = /[#\/\?@]/g, Ij = /[#\?:]/g, Hj = /[#\?]/g, Lj = /[#\?@]/g, Jj = /#/g;

    function Cj(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.f = !!b
    }

    function Nj(a) {
        a.a || (a.a = new qj, a.b = 0, a.c && yj(a.c, function (b, c) {
            a.add(bd(b), c)
        }))
    }

    v = Cj.prototype;
    v.add = function (a, b) {
        Nj(this);
        this.c = null;
        a = Oj(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = this.b + 1;
        return this
    };
    v.remove = function (a) {
        Nj(this);
        a = Oj(this, a);
        return sj(this.a, a) ? (this.c = null, this.b = this.b - this.a.get(a).length, this.a.remove(a)) : !1
    };

    function Pj(a, b) {
        Nj(a);
        b = Oj(a, b);
        return sj(a.a, b)
    }

    v.forEach = function (a, b) {
        Nj(this);
        this.a.forEach(function (c, d) {
            Kc(c, function (c) {
                a.call(b, c, d, this)
            }, this)
        }, this)
    };
    v.Qa = function () {
        Nj(this);
        for (var a = this.a.Ea(), b = this.a.Qa(), c = [], d = 0; d < b.length; d++) for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
        return c
    };
    v.Ea = function (a) {
        Nj(this);
        var b = [];
        if (z(a)) Pj(this, a) && (b = Sc(b, this.a.get(Oj(this, a)))); else {
            a = this.a.Ea();
            for (var c = 0; c < a.length; c++) b = Sc(b, a[c])
        }
        return b
    };
    v.set = function (a, b) {
        Nj(this);
        this.c = null;
        a = Oj(this, a);
        Pj(this, a) && (this.b = this.b - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = this.b + 1;
        return this
    };
    v.get = function (a, b) {
        if (!a) return b;
        a = this.Ea(a);
        return 0 < a.length ? String(a[0]) : b
    };

    function Qj(a, b, c) {
        a.remove(b);
        0 < c.length && (a.c = null, a.a.set(Oj(a, b), Tc(c)), a.b = a.b + c.length)
    }

    v.toString = function () {
        if (this.c) return this.c;
        if (!this.a) return "";
        for (var a = [], b = this.a.Qa(), c = 0; c < b.length; c++) {
            var d = b[c], e = ad(d);
            d = this.Ea(d);
            for (var g = 0; g < d.length; g++) {
                var h = e;
                "" !== d[g] && (h += "=" + ad(d[g]));
                a.push(h)
            }
        }
        return this.c = a.join("&")
    };

    function Oj(a, b) {
        b = String(b);
        a.f && (b = b.toLowerCase());
        return b
    }

    function Kj(a, b) {
        b && !a.f && (Nj(a), a.c = null, a.a.forEach(function (a, b) {
            var c = b.toLowerCase();
            b != c && (this.remove(b), Qj(this, c, a))
        }, a));
        a.f = b
    }

    v.eg = function (a) {
        for (var b = 0; b < arguments.length; b++) wj(arguments[b], function (a, b) {
            this.add(b, a)
        }, this)
    };
    var Rj = {}, Sj = {}, Tj = {}, Uj = {}, Vj = {};

    function Wj() {
        throw Error("Do not instantiate directly");
    }

    Wj.prototype.qe = null;
    Wj.prototype.da = r("a");
    Wj.prototype.toString = r("a");

    function Xj() {
        Wj.call(this)
    }

    E(Xj, Wj);
    Xj.prototype.zc = Rj;

    function Yj() {
        Wj.call(this)
    }

    E(Yj, Wj);
    Yj.prototype.zc = Uj;
    Yj.prototype.qe = 1;

    function Zj(a, b) {
        b = a(b || ak, void 0, void 0);
        a = Ag(If(), f);
        b = bk(b);
        a.innerHTML = b;
        1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
        return a
    }

    function bk(a) {
        if (!wc(a)) return String(a);
        if (a instanceof Wj) {
            if (a.zc === Rj) return a.da();
            if (a.zc === Vj) return cd(a.da())
        }
        return "zSoyz"
    }

    var ak = {};

    function ck(a, b) {
        return null != a && a.zc === b
    }

    function dk(a) {
        if (null != a) switch (a.qe) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function ek(a) {
        return null != a && a.zc === Rj ? a : a instanceof uf ? fk(wf(a), a.Ub()) : fk(cd(String(String(a))), dk(a))
    }

    var fk = function (a) {
        function b(a) {
            this.a = a
        }

        b.prototype = a.prototype;
        return function (a, d) {
            a = new b(String(a));
            void 0 !== d && (a.qe = d);
            return a
        }
    }(Xj), gk = function (a) {
        function b(a) {
            this.a = a
        }

        b.prototype = a.prototype;
        return function (a) {
            return new b(String(a))
        }
    }(Yj);

    function hk(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function X(a) {
        return ck(a, Rj) ? String(String(a.da()).replace(ik, "").replace(jk, "&lt;")).replace(kk, lk) : cd(String(a))
    }

    function mk(a) {
        ck(a, Sj) || ck(a, Tj) ? a = nk(a) : a instanceof $e ? a = nk(bf(a)) : a instanceof We ? a = nk(Ye(a)) : (a = String(a), a = ok.test(a) ? a.replace(pk, qk) : Aa);
        return a
    }

    function rk(a) {
        ck(a, Sj) || ck(a, Tj) ? a = nk(a) : a instanceof $e ? a = nk(bf(a)) : a instanceof We ? a = nk(Ye(a)) : (a = String(a), a = sk.test(a) ? a.replace(pk, qk) : Aa);
        return a
    }

    function tk(a) {
        ck(a, Uj) ? a = hk(a.da()) : null == a ? a = "" : a instanceof ff ? a = hk(hf(a)) : a instanceof qf ? a = hk(sf(a)) : (a = String(a), a = uk.test(a) ? a : "zSoyz");
        return a
    }

    var vk = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function lk(a) {
        return vk[a]
    }

    var wk = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\x0B": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };

    function xk(a) {
        return wk[a]
    }

    var yk = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function qk(a) {
        return yk[a]
    }

    var kk = /[\x00\x22\x27\x3c\x3e]/g, zk = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
        pk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        uk = /^(?!-*(?:expression|(?:moz-)?binding))(?!\s+)(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|\s+)*$/i,
        ok = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        sk = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function nk(a) {
        return String(a).replace(pk, qk)
    }

    var ik = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, jk = /</g;

    function Ak(a, b) {
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null
    }

    Ak.prototype.get = function () {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.c();
        return a
    };

    function Bk(a, b) {
        a.f(b);
        100 > a.b && (a.b++, b.next = a.a, a.a = b)
    };

    function Ck(a) {
        w.setTimeout(function () {
            throw a;
        }, 0)
    }

    var Dk;

    function Ek() {
        var a = w.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !F("Presto") && (a = function () {
            var a = document.createElement(ma);
            a.style.display = q;
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow;
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
            a = D(function (a) {
                    if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                },
                this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !Hd()) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (x(c.next)) {
                    c = c.next;
                    var a = c.Tf;
                    c.Tf = null;
                    a()
                }
            };
            return function (a) {
                d.next = {Tf: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement(ta) ? function (a) {
            var b = document.createElement(ta);
            b.onreadystatechange = function () {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function (a) {
            w.setTimeout(a, 0)
        }
    };

    function Fk() {
        this.b = this.a = null
    }

    var Hk = new Ak(function () {
        return new Gk
    }, function (a) {
        a.reset()
    });
    Fk.prototype.add = function (a, b) {
        var c = Hk.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c
    };
    Fk.prototype.remove = function () {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a
    };

    function Gk() {
        this.next = this.b = this.a = null
    }

    Gk.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    Gk.prototype.reset = function () {
        this.next = this.b = this.a = null
    };

    function Ik(a, b) {
        Jk || Kk();
        Lk || (Jk(), Lk = !0);
        Mk.add(a, b)
    }

    var Jk;

    function Kk() {
        if (w.Promise && w.Promise.resolve) {
            var a = w.Promise.resolve(void 0);
            Jk = function () {
                a.then(Nk)
            }
        } else Jk = function () {
            var a = Nk;
            !vc(w.setImmediate) || w.Window && w.Window.prototype && !F(ka) && w.Window.prototype.setImmediate == w.setImmediate ? (Dk || (Dk = Ek()), Dk(a)) : w.setImmediate(a)
        }
    }

    var Lk = !1, Mk = new Fk;

    function Nk() {
        for (var a; a = Mk.remove();) {
            try {
                a.a.call(a.b)
            } catch (b) {
                Ck(b)
            }
            Bk(Hk, a)
        }
        Lk = !1
    };

    function Ok(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }

    function Pk(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function Qk(a, b) {
        this.a = 0;
        this.l = void 0;
        this.f = this.b = this.c = null;
        this.g = this.h = !1;
        if (a != A) try {
            var c = this;
            a.call(b, function (a) {
                Rk(c, 2, a)
            }, function (a) {
                Rk(c, 3, a)
            })
        } catch (d) {
            Rk(this, 3, d)
        }
    }

    function Sk() {
        this.next = this.c = this.b = this.f = this.a = null;
        this.g = !1
    }

    Sk.prototype.reset = function () {
        this.c = this.b = this.f = this.a = null;
        this.g = !1
    };
    var Tk = new Ak(function () {
        return new Sk
    }, function (a) {
        a.reset()
    });

    function Uk(a, b, c) {
        var d = Tk.get();
        d.f = a;
        d.b = b;
        d.c = c;
        return d
    }

    function Vk(a) {
        if (a instanceof Qk) return a;
        var b = new Qk(A);
        Rk(b, 2, a);
        return b
    }

    function Wk() {
        var a = Xk[5];
        return new Qk(function (b, c) {
            c(a)
        })
    }

    Qk.prototype.then = function (a, b, c) {
        return Yk(this, vc(a) ? a : null, vc(b) ? b : null, c)
    };
    Ok(Qk);
    Qk.prototype.cancel = function (a) {
        0 == this.a && Ik(function () {
            var b = new Zk(a);
            $k(this, b)
        }, this)
    };

    function $k(a, b) {
        if (0 == a.a) if (a.c) {
            var c = a.c;
            if (c.b) {
                for (var d = 0, e = null, g = null, h = c.b; h && (h.g || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) e || (g = h);
                e && (0 == c.a && 1 == d ? $k(c, b) : (g ? (d = g, d.next == c.f && (c.f = d), d.next = d.next.next) : al(c), bl(c, e, 3, b)))
            }
            a.c = null
        } else Rk(a, 3, b)
    }

    function cl(a, b) {
        a.b || 2 != a.a && 3 != a.a || dl(a);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }

    function Yk(a, b, c, d) {
        var e = Uk(null, null, null);
        e.a = new Qk(function (a, h) {
            e.f = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (m) {
                    h(m)
                }
            } : a;
            e.b = c ? function (b) {
                try {
                    var e = c.call(d, b);
                    !x(e) && b instanceof Zk ? h(b) : a(e)
                } catch (m) {
                    h(m)
                }
            } : h
        });
        e.a.c = a;
        cl(a, e);
        return e.a
    }

    Qk.prototype.o = function (a) {
        this.a = 0;
        Rk(this, 2, a)
    };
    Qk.prototype.B = function (a) {
        this.a = 0;
        Rk(this, 3, a)
    };

    function Rk(a, b, c) {
        if (0 == a.a) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            a:{
                var d = c, e = a.o, g = a.B;
                if (d instanceof Qk) {
                    cl(d, Uk(e || A, g || null, a));
                    var h = !0
                } else if (Pk(d)) d.then(e, g, a), h = !0; else {
                    if (wc(d)) try {
                        var k = d.then;
                        if (vc(k)) {
                            el(d, k, e, g, a);
                            h = !0;
                            break a
                        }
                    } catch (l) {
                        g.call(a, l);
                        h = !0;
                        break a
                    }
                    h = !1
                }
            }
            h || (a.l = c, a.a = b, a.c = null, dl(a), 3 != b || c instanceof Zk || fl(a, c))
        }
    }

    function el(a, b, c, d, e) {
        function g(a) {
            k || (k = !0, d.call(e, a))
        }

        function h(a) {
            k || (k = !0, c.call(e, a))
        }

        var k = !1;
        try {
            b.call(a, h, g)
        } catch (l) {
            g(l)
        }
    }

    function dl(a) {
        a.h || (a.h = !0, Ik(a.s, a))
    }

    function al(a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.f = null);
        return b
    }

    Qk.prototype.s = function () {
        for (var a; a = al(this);) bl(this, a, this.a, this.l);
        this.h = !1
    };

    function bl(a, b, c, d) {
        if (3 == c && b.b && !b.g) for (; a && a.g; a = a.c) a.g = !1;
        if (b.a) b.a.c = null, gl(b, c, d); else try {
            b.g ? b.f.call(b.c) : gl(b, c, d)
        } catch (e) {
            hl.call(null, e)
        }
        Bk(Tk, b)
    }

    function gl(a, b, c) {
        2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
    }

    function fl(a, b) {
        a.g = !0;
        Ik(function () {
            a.g && hl.call(null, b)
        })
    }

    var hl = Ck;

    function Zk(a) {
        Fc.call(this, a)
    }

    E(Zk, Fc);
    Zk.prototype.name = "cancel";

    function il(a, b, c) {
        if (vc(a)) c && (a = D(a, c)); else if (a && typeof a.handleEvent == p) a = D(a.handleEvent, a); else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : w.setTimeout(a, b || 0)
    }

    function jl(a) {
        w.clearTimeout(a)
    };

    function kl(a, b, c) {
        R.call(this);
        this.b = a;
        this.f = b || 0;
        this.c = c;
        this.a = D(this.ei, this)
    }

    E(kl, R);
    v = kl.prototype;
    v.ka = 0;
    v.F = function () {
        kl.m.F.call(this);
        this.stop();
        delete this.b;
        delete this.c
    };
    v.start = function (a) {
        this.stop();
        this.ka = il(this.a, x(a) ? a : this.f)
    };
    v.stop = function () {
        this.dc() && jl(this.ka);
        this.ka = 0
    };
    v.dc = function () {
        return 0 != this.ka
    };
    v.ei = function () {
        this.ka = 0;
        this.b && this.b.call(this.c)
    };
    var ll = function () {
        if (Vd) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(sd)) ? a[1] : "0"
        }
        return Ud ? (a = /10[_.][0-9_.]+/, (a = a.exec(sd)) ? a[0].replace(/_/g, ".") : "10") : Wd ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(sd)) ? a[1] : "") : Xd || Yd || Zd ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(sd)) ? a[1].replace(/_/g, ".") : "") : ""
    }();

    function ml(a) {
        return (a = a.exec(sd)) ? a[1] : ""
    }

    var nl = function () {
        if (ke) return ml(/Firefox\/([0-9.]+)/);
        if (G || Rd || Qd) return fe;
        if (oe) return Ld() ? ml(/CriOS\/([0-9.]+)/) : ml(/Chrome\/([0-9.]+)/);
        if (pe && !Ld()) return ml(/Version\/([0-9.]+)/);
        if (le || me) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(sd);
            if (a) return a[1] + "." + a[2]
        } else if (ne) return (a = ml(/Android\s+([0-9.]+)/)) ? a : ml(/Version\/([0-9.]+)/);
        return ""
    }();

    function ol(a, b, c, d, e, g, h, k, l) {
        var m = pl(c);
        var n = Og(a);
        var t = Qg(a);
        n = new Dg(n.x, n.y, t.width, t.height);
        if (t = Ng(a)) {
            var y = new Dg(t.left, t.top, t.right - t.left, t.bottom - t.top);
            t = Math.max(n.left, y.left);
            var M = Math.min(n.left + n.width, y.left + y.width);
            if (t <= M) {
                var Q = Math.max(n.top, y.top);
                y = Math.min(n.top + n.height, y.top + y.height);
                Q <= y && (n.left = t, n.top = Q, n.width = M - t, n.height = y - Q)
            }
        }
        t = If(a);
        Q = If(c);
        t.a != Q.a && (M = t.a.body, Q = Pg(M, Bg(Q)), Q = Gf(Q, Og(M)), !G || ge(9) || Sf(t.a) || (Q = Gf(Q, Tf(t.a))), n.left += Q.x, n.top += Q.y);
        a = ql(a, b);
        b = n.left;
        a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
        b = new L(b, n.top + (a & 1 ? n.height : 0));
        b = Gf(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
        if (h) if (l) var na = l; else if (na = Ng(c)) na.top -= m.y, na.right -= m.x, na.bottom -= m.y, na.left -= m.x;
        return rl(b, c, d, g, na, h, k)
    }

    function pl(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Hg(a, Lb)) {
                var c = Og(a);
                if (!b) {
                    b = Ug(a);
                    var d;
                    if (d = b) {
                        d = pe && 0 <= od(nl, 10);
                        var e;
                        if (e = $d) e = 0 <= od(ll, 10);
                        d = H || d || e
                    }
                    b = d ? -a.scrollLeft : !b || Sd && J("8") || Hg(a, "overflowX") == ec ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = Gf(c, new L(b, a.scrollTop))
                }
            }
        }
        return c || new L
    }

    function rl(a, b, c, d, e, g, h) {
        a = Ff(a);
        var k = ql(b, c);
        c = Qg(b);
        h = h ? new Hf(h.width, h.height) : new Hf(c.width, c.height);
        a = Ff(a);
        h = new Hf(h.width, h.height);
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (g) {
            if (e) {
                d = a;
                k = h;
                l = 0;
                65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2);
                132 == (g & 132) && (d.y < e.top || d.y >= e.bottom) && (g &= -5);
                d.x < e.left && g & 1 && (d.x = e.left, l |= 1);
                if (g & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left, l |= 4);
                    d.x + k.width > e.right &&
                    (k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
                }
                d.x + k.width > e.right && g & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                g & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && g & 4 && (d.y = e.top, l |= 2);
                g & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                d.y + k.height > e.bottom && g & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                g & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height >
                e.bottom ? 128 : 0));
                e = l
            } else e = 256;
            l = e
        }
        g = new Dg(0, 0, 0, 0);
        g.left = a.x;
        g.top = a.y;
        g.width = h.width;
        g.height = h.height;
        e = l;
        if (e & 496) return e;
        Ig(b, new L(g.left, g.top));
        h = new Hf(g.width, g.height);
        c == h || c && h && c.width == h.width && c.height == h.height || (c = h, a = Sf(If(N(b)).a), !G || J("10") || a && J("8") ? Zg(b, c, La) : (h = b.style, a ? (a = $g(b), b = ah(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
        return e
    }

    function ql(a, b) {
        return (b & 8 && Ug(a) ? b ^ 4 : b) & -9
    };

    function sl() {
    }

    sl.prototype.b = gc();

    function tl() {
    }

    tl.prototype.a = null;

    function ul(a) {
        var b;
        (b = a.a) || (b = {}, vl(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };var wl;

    function xl() {
    }

    E(xl, tl);

    function yl(a) {
        return (a = vl(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function vl(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }

    wl = new xl;

    function zl(a) {
        $h.call(this);
        this.headers = new qj;
        this.he = a || null;
        this.na = !1;
        this.ge = this.O = null;
        this.ob = "";
        this.Ha = 0;
        this.Nb = this.Ue = this.Md = this.ve = !1;
        this.de = 0;
        this.ce = null;
        this.Wg = "";
        this.Ff = this.ph = !1
    }

    E(zl, $h);
    zl.prototype.ua = null;
    var Al = /^https?$/i, Bl = [sa, "PUT"], Cl = [];

    function Dl(a, b, c, d, e) {
        var g = new zl;
        Cl.push(g);
        b && g.w(Ua, b);
        g.yb(Pb, g.Oh);
        e && (g.de = Math.max(0, e));
        g.send(a, c, d, void 0)
    }

    v = zl.prototype;
    v.Oh = function () {
        this.M();
        Rc(Cl, this)
    };
    v.send = function (a, b, c, d) {
        if (this.O) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.ob + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.ob = a;
        this.Ha = 0;
        this.ve = !1;
        this.na = !0;
        this.O = this.he ? yl(this.he) : yl(wl);
        this.ge = this.he ? ul(this.he) : ul(wl);
        this.O.onreadystatechange = D(this.Og, this);
        try {
            this.Ue = !0, this.O.open(b, String(a), !0), this.Ue = !1
        } catch (g) {
            this.ld(5, g);
            return
        }
        a = c || "";
        var e = new qj(this.headers);
        d && wj(d, function (a, b) {
            e.set(b, a)
        });
        d = Pc(e.Qa(), El);
        c = w.FormData && a instanceof
            w.FormData;
        !Qc(Bl, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (a, b) {
            this.O.setRequestHeader(b, a)
        }, this);
        this.Wg && (this.O.responseType = this.Wg);
        fc in this.O && this.O.withCredentials !== this.ph && (this.O.withCredentials = this.ph);
        try {
            Gl(this), 0 < this.de && ((this.Ff = Hl(this.O)) ? (this.O.timeout = this.de, this.O.ontimeout = D(this.Cb, this)) : this.ce = il(this.Cb, this.de, this)), this.Md = !0, this.O.send(a), this.Md = !1
        } catch (g) {
            this.ld(5, g)
        }
    };

    function Hl(a) {
        return G && J(9) && qc(a.timeout) && x(a.ontimeout)
    }

    function El(a) {
        return "content-type" == a.toLowerCase()
    }

    v.Cb = function () {
        "undefined" != typeof pc && this.O && (this.Ha = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    v.ld = function (a) {
        this.na = !1;
        this.O && (this.Nb = !0, this.O.abort(), this.Nb = !1);
        this.Ha = a;
        Il(this);
        Jl(this)
    };

    function Il(a) {
        a.ve || (a.ve = !0, a.dispatchEvent(Ua), a.dispatchEvent("error"))
    }

    v.abort = function (a) {
        this.O && this.na && (this.na = !1, this.Nb = !0, this.O.abort(), this.Nb = !1, this.Ha = a || 7, this.dispatchEvent(Ua), this.dispatchEvent("abort"), Jl(this))
    };
    v.F = function () {
        this.O && (this.na && (this.na = !1, this.Nb = !0, this.O.abort(), this.Nb = !1), Jl(this, !0));
        zl.m.F.call(this)
    };
    v.Og = function () {
        this.rb || (this.Ue || this.Md || this.Nb ? Kl(this) : this.mj())
    };
    v.mj = function () {
        Kl(this)
    };

    function Kl(a) {
        if (a.na && "undefined" != typeof pc && (!a.ge[1] || 4 != (a.O ? a.O.readyState : 0) || 2 != a.Wb())) if (a.Md && 4 == (a.O ? a.O.readyState : 0)) il(a.Og, 0, a); else if (a.dispatchEvent(Qb), a.Od()) {
            a.na = !1;
            try {
                a.Sc() ? (a.dispatchEvent(Ua), a.dispatchEvent("success")) : (a.Ha = 6, Il(a))
            } finally {
                Jl(a)
            }
        }
    }

    function Jl(a, b) {
        if (a.O) {
            Gl(a);
            var c = a.O, d = a.ge[0] ? A : null;
            a.O = null;
            a.ge = null;
            b || a.dispatchEvent(Pb);
            try {
                c.onreadystatechange = d
            } catch (e) {
            }
        }
    }

    function Gl(a) {
        a.O && a.Ff && (a.O.ontimeout = null);
        a.ce && (jl(a.ce), a.ce = null)
    }

    v.dc = function () {
        return !!this.O
    };
    v.Od = function () {
        return 4 == (this.O ? this.O.readyState : 0)
    };
    v.Sc = function () {
        var a = this.Wb();
        a:switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var b = !0;
                break a;
            default:
                b = !1
        }
        if (!b) {
            if (a = 0 === a) a = String(this.ob).match(xj)[1] || null, !a && w.self && w.self.location && (a = w.self.location.protocol, a = a.substr(0, a.length - 1)), a = !Al.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    };
    v.Wb = function () {
        try {
            return 2 < (this.O ? this.O.readyState : 0) ? this.O.status : -1
        } catch (a) {
            return -1
        }
    };
    v.Ce = function () {
        return String(this.ob)
    };
    v.Ib = function () {
        try {
            return this.O ? this.O.responseText : ""
        } catch (a) {
            return ""
        }
    };
    v.getResponseHeader = function (a) {
        if (this.O && this.Od()) return a = this.O.getResponseHeader(a), null === a ? void 0 : a
    };
    v.getAllResponseHeaders = function () {
        return this.O && this.Od() ? this.O.getAllResponseHeaders() || "" : ""
    };
    v.Be = r("Ha");
    var Ll = !1;

    function Ml(a) {
        if (a = a.match(/[\d]+/g)) a.length = 3
    }

    (function () {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (Ll = !0, a.description)) {
                Ml(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                Ll = !0;
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Ll = !(!a || !a.enabledPlugin))) {
            Ml(a.enabledPlugin.description);
            return
        }
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            Ll = !0;
            Ml(b.GetVariable("$version"));
            return
        } catch (c) {
        }
        try {
            b =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            Ll = !0;
            return
        } catch (c) {
        }
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Ll = !0, Ml(b.GetVariable("$version"))
        } catch (c) {
        }
    })();

    function Nl() {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.B = 1;
        this.g = {};
        this.f = null;
        this.s = "";
        S(window, "beforeunload", this.o, !1, this)
    }

    tc(Nl);

    function Ol(a, b, c) {
        if (null == b) return "1";
        switch (B(b)) {
            case Vb:
                return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), ad(a);
            case Gb:
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case Ga:
                var d = [], e;
                for (e in b) d.push(Ol(a, b[e], c));
                return d.join(",");
            case Hb:
                d = [];
                for (e in b) d.push(Pl(a, e, b[e], c));
                return d.join(",");
            default:
                return ""
        }
    }

    function Pl(a, b, c, d) {
        return [ad(b), Ol(a, c, d || "smtalt" == b)].join("=")
    }

    Nl.prototype.log = function (a, b) {
        this.b.push([a, b]);
        this.c || (this.c = !0, il(this.h, 0, this))
    };
    Nl.prototype.h = function () {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            Ql(this, b[0], b[1])
        }
        this.b = [];
        this.c = !1
    };

    function Ql(a, b, c) {
        Rl(a, a.s + "/gen204?" + (a.f ? ["client=", a.f, "&"].join("") : "") + Pl(a, b, c))
    }

    function Rl(a, b) {
        var c = new Image, d = a.B++;
        a.g[d] = c;
        c.onload = c.onerror = function () {
            delete Nl.Y().g[d]
        };
        c.src = b;
        c = null
    }

    function Sl(a, b) {
        var c = 0, d = null;
        b in a.a && (d = a.a[b], c = d[0], d = d[1]);
        if (B(1) == Hb) {
            B(d) != Hb && (d = {});
            for (var e in 1) d[e] = Tl(e in d ? d[e] : null, 1[e])
        } else d = Tl(d, 1);
        a.a[b] = [c, d];
        jl(a.a[b][0]);
        c = il(D(a.l, a, b), 2E3);
        a.a[b][0] = c
    }

    Nl.prototype.l = function (a) {
        Ql(this, a, this.a[a][1]);
        a in this.a && (jl(this.a[a][0]), delete this.a[a])
    };

    function Tl(a, b) {
        null != b || (b = 1);
        isNaN(a) && (a = parseInt(a, 10));
        isNaN(b) && (b = parseInt(b, 10));
        return a + b
    }

    Nl.prototype.o = function () {
        this.h();
        for (var a in this.a) 0 != this.a[a] && this.l(a)
    };

    function Ul() {
    }

    tc(Ul);

    function Vl(a) {
        ye(this, a, Wl)
    }

    E(Vl, we);
    var Wl = [3, 4];

    function Xl(a) {
        ye(this, a, Yl)
    }

    E(Xl, we);
    var Yl = [3];

    function Zl(a) {
        ye(this, a, $l)
    }

    E(Zl, we);
    var $l = [2];

    function am(a) {
        ye(this, a, bm)
    }

    E(am, we);
    var bm = [26];
    am.prototype.Vb = function () {
        return Be(this, 16)
    };
    am.prototype.Qb = function (a) {
        De(this, 16, a)
    };
    am.prototype.ya = function () {
        return Be(this, 1)
    };
    am.prototype.ta = function (a) {
        De(this, 1, a)
    };

    function cm(a) {
        ye(this, a, null)
    }

    E(cm, we);

    function dm() {
        this.c = this.a = "";
        Ul.Y()
    }

    tc(dm);
    dm.prototype.Qb = hc("a");
    dm.prototype.ta = hc("c");
    dm.prototype.store = function (a) {
        De(a, 65, 0);
        a.Qb(this.a);
        De(a, 14, "");
        a.ta(this.c);
        De(a, 50, "");
        De(a, 52, "");
        De(a, 32, 0)
    };

    function em() {
        this.b = dm.Y()
    }

    E(em, R);
    tc(em);
    em.prototype.a = function () {
        fm(this, 25)
    };

    function fm(a, b) {
        var c = new am;
        a.b.store(c);
        De(c, 31, b);
        return c
    };

    function gm() {
        this.a = []
    }

    gm.prototype.add = function (a) {
        this.a.push(a)
    };

    function hm() {
        this.a = []
    }

    E(hm, gm);
    tc(hm);
    hm.prototype.add = function (a) {
        if (a) for (; a();) ;
    };

    function im(a) {
        this.a = [];
        this.b = .5;
        jm(this, a);
        this.f = 0;
        this.c = !0;
        this.g = D(this.h, this)
    }

    E(im, gm);

    function jm(a, b) {
        1 < b ? a.b = 1 : .001 > b ? a.b = .001 : b && (a.b = b)
    }

    im.prototype.add = function (a) {
        im.m.add.call(this, a);
        this.c && km(this)
    };

    function km(a) {
        a.c = !1;
        window.setTimeout(a.g, Math.min(a.f, 5E3))
    }

    im.prototype.h = function () {
        var a = (new Date).getTime();
        do {
            this.a.length && (this.a[0] && this.a[0]() || this.a.shift());
            var b = !!this.a.length;
            var c = 95 * this.b + 5;
            var d = (new Date).getTime() - a
        } while (b && d < c);
        this.f = Math.ceil(d * (1 / this.b - 1)) + 1;
        b ? km(this) : this.c = !0
    };

    function lm(a, b) {
        this.o = a || null;
        this.C = b || hm.Y();
        this.l = this.h = this.G = null;
        this.f = this.c = !1;
        this.g = null;
        this.a = [];
        this.b = 0
    }

    function mm() {
    }

    function nm() {
    }

    function om(a, b) {
        a.c || (a.G = b)
    }

    function pm(a, b, c) {
        a.h = c ? D(b, c) : b
    }

    function qm(a, b, c) {
        a.l = c ? D(b, c) : b
    }

    function rm(a, b) {
        a.c || (a.c = !0, a.B = b, a.b++, a.g = a.G, a.s())
    }

    lm.prototype.stop = function () {
        this.b++;
        this.c = !1;
        this.a = []
    };

    function sm(a) {
        if (!a.c) return null;
        for (var b = !1, c = 0; c < a.a.length; ++c) if (a.a[c].target === a) {
            a.a[c].ready = !1;
            a.a[c].nh = a.b + 1;
            b = !0;
            break
        }
        b || a.a.push({target: a, ready: !1, nh: a.b + 1});
        return D(a.s, a, a, a.b + 1)
    }

    function tm(a) {
        if (!a.c) return !0;
        for (var b = 0; b < a.a.length; ++b) if (a.a[b].target === a && a.a[b].nh == a.b) return a.a[b].ready;
        return !0
    }

    lm.prototype.s = function (a, b) {
        if (this.c) {
            if (a) for (var c = 0; c < this.a.length; ++c) if (this.a[c].target === a) {
                this.a[c].ready = !0;
                break
            }
            this.f || this.C.add(D(this.I, this, b || this.b))
        }
    };
    lm.prototype.I = function (a) {
        if (this.b != a) return !1;
        a = this.g;
        if (a == nm) return this.stop(), this.h && this.h.call(this.o, this, this.B), !1;
        this.f = !0;
        try {
            var b = a.call(this.o, this, this.B);
            if (!b) throw Error();
        } catch (c) {
            this.stop();
            a = c;
            if (this.l) this.l.call(this.o, a, this, this.B); else throw a;
            return !1
        } finally {
            this.f = !1
        }
        b != mm && (this.g = b, this.b++, this.s());
        return !1
    };

    function um() {
        $h.call(this);
        this.a = 0;
        this.endTime = this.b = null
    }

    E(um, $h);
    um.prototype.c = function () {
        this.Pa("begin")
    };
    um.prototype.f = function () {
        this.Pa("end")
    };
    um.prototype.zb = function () {
        this.Pa("stop")
    };
    um.prototype.Pa = function (a) {
        this.dispatchEvent(a)
    };

    function vm(a, b) {
        C(b) || (b = [b]);
        b = Mc(b, function (a) {
            return z(a) ? a : a.Un + " " + a.duration + "s " + a.timing + " " + a.delay + "s"
        });
        O(a, bc, b.join(","))
    }

    var wm = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    }(function () {
        if (G) return J("10.0");
        var a = document.createElement(f), b = I ? "-webkit" : H ? "-moz" : G ? "-ms" : Qd ? "-o" : null,
            c = {transition: Ib};
        b && (c[b + "-transition"] = Ib);
        b = Af("div", {style: c});
        a.innerHTML = wf(b);
        a = a.firstChild;
        b = a.style[qd(bc)];
        return "" != ("undefined" !== typeof b ? b : a.style[Eg(a, bc)] || "")
    });

    function xm(a, b, c, d, e) {
        um.call(this);
        this.A = a;
        this.l = b;
        this.s = c;
        this.g = d;
        this.o = C(e) ? e : [e]
    }

    E(xm, um);
    v = xm.prototype;
    v.play = function () {
        if (1 == this.a) return !1;
        this.c();
        this.Pa("play");
        this.b = Dc();
        this.a = 1;
        if (wm()) return O(this.A, this.s), this.h = il(this.sj, void 0, this), !0;
        this.Cf(!1);
        return !1
    };
    v.sj = function () {
        Qg(this.A);
        vm(this.A, this.o);
        O(this.A, this.g);
        this.h = il(D(this.Cf, this, !1), 1E3 * this.l)
    };
    v.stop = function () {
        1 == this.a && this.Cf(!0)
    };
    v.Cf = function (a) {
        O(this.A, bc, "");
        jl(this.h);
        O(this.A, this.g);
        this.endTime = Dc();
        this.a = 0;
        a ? this.zb() : this.Pa($a);
        this.f()
    };
    v.F = function () {
        this.stop();
        xm.m.F.call(this)
    };

    function ym(a, b) {
        $h.call(this);
        this.h = new Uh(this);
        this.$b(a || null);
        b && (this.oc = b)
    }

    E(ym, $h);
    v = ym.prototype;
    v.A = null;
    v.uc = !0;
    v.Rf = null;
    v.fc = !1;
    v.$e = -1;
    v.oc = Zb;
    v.j = r("A");
    v.$b = function (a) {
        zm(this);
        this.A = a
    };
    v.Vc = function (a) {
        zm(this);
        this.uc = a
    };

    function zm(a) {
        if (a.fc) throw Error("Can not change this state of the popup while showing.");
    }

    v.N = r("fc");
    v.L = function (a) {
        this.xa && this.xa.stop();
        this.pa && this.pa.stop();
        if (a) {
            if (!this.fc && this.Le()) {
                if (!this.A) throw Error("Caller must call setElement before trying to show the popup");
                this.kb();
                a = N(this.A);
                if (this.uc) if (this.h.w(a, Ab, this.kf, !0), G) {
                    try {
                        var b = a.activeElement
                    } catch (d) {
                    }
                    for (; b && b.nodeName == ma;) {
                        try {
                            var c = pg(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.h.w(a, Ab, this.kf, !0);
                    this.h.w(a, Ya, this.Ng)
                } else this.h.w(a, Ka, this.Ng);
                this.oc == Zb ? (this.A.style.visibility = ec, P(this.A, !0)) : this.oc == Fb &&
                    this.kb();
                this.fc = !0;
                this.$e = Dc();
                this.xa ? (Hh(this.xa, "end", this.Pg, !1, this), this.xa.play()) : this.Pg()
            }
        } else Am(this)
    };
    v.kb = A;

    function Am(a, b) {
        a.fc && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.h && Zh(a.h), a.fc = !1, Dc(), a.pa ? (Hh(a.pa, "end", Cc(a.Uf, b), !1, a), a.pa.play()) : a.Uf(b))
    }

    v.Uf = function (a) {
        this.oc == Zb ? this.Pi() : this.oc == Fb && (this.A.style.top = "-10000px");
        this.lf(a)
    };
    v.Pi = function () {
        this.A.style.visibility = qb;
        P(this.A, !1)
    };
    v.Le = function () {
        return this.dispatchEvent("beforeshow")
    };
    v.Pg = function () {
        this.dispatchEvent("show")
    };
    v.lf = function (a) {
        this.dispatchEvent({type: rb, target: a})
    };
    v.kf = function (a) {
        a = a.target;
        kg(this.A, a) || Bm(this, a) || 150 > Dc() - this.$e || Am(this, a)
    };
    v.Ng = function (a) {
        var b = N(this.A);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || kg(this.A, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > Dc() - this.$e || Am(this)
    };

    function Bm(a, b) {
        return Nc(a.Rf || [], function (a) {
            return b === a || kg(a, b)
        })
    }

    v.F = function () {
        ym.m.F.call(this);
        this.h.M();
        jh(this.xa);
        jh(this.pa);
        delete this.A;
        delete this.h;
        delete this.Rf
    };

    function Cm(a, b) {
        this.s = b || void 0;
        ym.call(this, a)
    }

    E(Cm, ym);
    Cm.prototype.kb = function () {
        if (this.s) {
            var a = !this.N() && this.oc != Fb, b = this.j();
            a && (b.style.visibility = qb, P(b, !0));
            this.s.b(b, 8, this.df);
            a && P(b, !1)
        }
    };

    function Dm(a, b) {
        Cm.call(this, a);
        this.c = b;
        this.a = 0;
        this.b = null;
        this.f = 0;
        this.L(!0);
        this.L(!1);
        K(this.j(), "round-trip-popup");
        K(this.c, "round-trip-content")
    }

    E(Dm, Cm);
    Dm.prototype.o = function () {
        jl(this.f);
        1 == this.a ? Hh(this.b, $a, D(this.o, this)) : 0 == this.a && (this.f = il(D(this.l, this, -1), 200))
    };
    Dm.prototype.l = function (a) {
        if (this.a != a && (0 != this.a || !(this.N() && 1 == a || !this.N() && -1 == a))) {
            var b = this.N();
            this.L(!0);
            var c = -Math.ceil(Qg(this.c).width);
            Ug(this.j()) && (c = -c);
            var d = 1 == a ? c : 0;
            c = 1 == a ? 0 : c;
            this.L(b);
            if (wm()) {
                b = .2;
                if (0 != this.a) {
                    var e = parseInt(Gg(this.c, "left"), 10);
                    this.g();
                    b *= (c - e) / (c - d);
                    d = e
                }
                this.a = a;
                this.b = new xm(this.c, b, {left: d + "px"}, {left: c + "px"}, "left " + b + "s");
                this.b.play();
                Hh(this.b, $a, D(this.g, this));
                -1 == a ? Hh(this.b, $a, D(this.L, this, !1)) : this.L(!0)
            } else O(this.c, "left", c + "px"), this.L(1 ==
            a ? !0 : !1)
        }
    };
    Dm.prototype.g = function () {
        0 != this.a && (this.b.stop(), il(D(Qh, this, this.b)), this.a = 0, this.b = null)
    };

    function Em(a, b) {
        if (null == a || null == b) return null == a == (null == b);
        if (a.constructor != Array && a.constructor != Object) throw Error("Invalid object type passed into jsproto.areObjectsEqual()");
        if (a === b) return !0;
        if (a.constructor != b.constructor) return !1;
        for (var c in a) if (!(c in b && Fm(a[c], b[c]))) return !1;
        for (var d in b) if (!(d in a)) return !1;
        return !0
    }

    function Fm(a, b) {
        if (a === b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b)) return !0;
        if (a instanceof Object && b instanceof Object) {
            if (!Em(a, b)) return !1
        } else return !1;
        return !0
    };

    function Gm(a) {
        this.data = a || []
    }

    function Hm(a, b, c) {
        a = a.data[b];
        return null != a ? a : c
    }

    function Im(a, b) {
        return !!Hm(a, b, void 0)
    }

    function Jm(a, b) {
        return Hm(a, b, 0)
    }

    function Km(a, b) {
        return Hm(a, b, "")
    }

    function Lm(a, b, c) {
        a = a.data;
        a[b] || (a[b] = []);
        return a[b][c]
    }

    function Y(a, b) {
        return a.data[b] ? a.data[b].length : 0
    }

    Gm.prototype.Db = r("data");
    Gm.prototype.Kj = function (a) {
        var b = this.data;
        this.data = a.data;
        a.data = b
    };

    function Mm(a) {
        this.data = a || []
    }

    E(Mm, Gm);

    function Nm(a) {
        this.data = a || []
    }

    E(Nm, Gm);

    function Om(a) {
        this.data = a || []
    }

    E(Om, Gm);

    function Pm(a) {
        this.data = a || []
    }

    E(Pm, Gm);

    function Qm(a) {
        this.data = a || []
    }

    E(Qm, Gm);

    function Rm(a, b) {
        return new Nm(Lm(a, 2, b))
    }

    function Sm(a, b) {
        return new Mm(Lm(a, 5, b))
    };

    function Tm() {
        this.A = null;
        this.a = Wf(f, "gt-hl-layer", document.createTextNode(""));
        this.b = null;
        this.A && (dg(this.a, this.A), Um(this))
    }

    function Vm(a, b, c, d, e) {
        var g = d || "gt-hl-text";
        d = a.A && (a.A.value || xg(a.A));
        Um(a);
        cg(a.a);
        if (b != c || e) {
            if (0 < b) {
                var h = d.substring(0, b);
                Wm(a.a, h, 0, e)
            }
            b < c && (h = d.substring(b, c), g = Wf(ua, g), Wm(g, h, b, e), a.a.appendChild(g));
            c < d.length && (h = d.substring(c), Wm(a.a, h, c, e))
        }
    }

    function Um(a) {
        var b = a.A;
        var c = N(b), d = G && b.currentStyle;
        d && Sf(If(c).a) && d.width != Ha && d.height != Ha && !d.boxSizing ? (c = bh(b, d.width, "width", "pixelWidth"), b = bh(b, d.height, "height", "pixelHeight"), b = new Hf(c, b)) : (d = Xg(b), c = $g(b), b = ah(b), b = new Hf(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
        Yg(a.a, b);
        c = Og(a.A);
        b = a.a;
        d = c.x;
        c = c.y;
        var e = Og(b);
        d instanceof L && (c = d.y, d = d.x);
        Ig(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
        b = $g(a.A);
        O(a.a, Jb, b.left + "px");
        O(a.a, Kb, b.right +
            "px");
        a.a.dir = a.A.dir
    }

    function Wm(a, b, c, d) {
        d = d || [];
        for (var e = 0, g; g = d[e]; e++) if (!(0 > g.Dc - c)) {
            if (g.Dc - c >= b.length) break;
            if (0 < g.Dc - c) {
                var h = b.substring(0, g.Dc - c);
                Xm(a, h)
            }
            var k = g.className || "gt-hl-text";
            h = b.substring(g.Dc - c, g.Df - c);
            k = Wf(ua, k);
            Xm(k, h);
            a.appendChild(k);
            b = b.substring(g.Df - c);
            c = g.Df
        }
        b && Xm(a, b)
    }

    function Xm(a, b) {
        b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
        for (var c = 0, d = b.length; c < d; c++) {
            if (0 < c) {
                var e = Wf("BR");
                a.appendChild(e)
            }
            a.appendChild(document.createTextNode(String(b[c])))
        }
    };

    function Ym(a, b, c, d, e) {
        this.g = !!b;
        this.node = null;
        this.c = 0;
        this.B = !1;
        this.I = !c;
        a && Zm(this, a, d);
        this.f = void 0 != e ? e : this.c || 0;
        this.g && (this.f *= -1)
    }

    E(Ym, nj);

    function Zm(a, b, c, d) {
        if (a.node = b) a.c = qc(c) ? c : 1 != a.node.nodeType ? 0 : a.g ? -1 : 1;
        qc(d) && (a.f = d)
    }

    Ym.prototype.h = function () {
        var a = this.g ? -1 : 1;
        this.c == a && (this.c = -1 * a, this.f += this.c * (this.g ? -1 : 1))
    };
    Ym.prototype.next = function () {
        if (this.B) {
            if (!this.node || this.I && 0 == this.f) throw mj;
            var a = this.node;
            var b = this.g ? -1 : 1;
            if (this.c == b) {
                var c = this.g ? a.lastChild : a.firstChild;
                c ? Zm(this, c) : Zm(this, a, -1 * b)
            } else (c = this.g ? a.previousSibling : a.nextSibling) ? Zm(this, c) : Zm(this, a.parentNode, -1 * b);
            this.f += this.c * (this.g ? -1 : 1)
        } else this.B = !0;
        a = this.node;
        if (!this.node) throw mj;
        return a
    };
    Ym.prototype.splice = function (a) {
        var b = this.node, c = this.g ? 1 : -1;
        this.c == c && (this.c = -1 * c, this.f += this.c * (this.g ? -1 : 1));
        this.g = !this.g;
        Ym.prototype.next.call(this);
        this.g = !this.g;
        c = uc(arguments[0]) ? arguments[0] : arguments;
        for (var d = c.length - 1; 0 <= d; d--) eg(c[d], b);
        fg(b)
    };

    function $m() {
    }

    function an(a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null
                } else if (!c.length || c.item(0).document != a) return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    }

    function bn(a) {
        for (var b = [], c = 0, d = a.Ic(); c < d; c++) b.push(a.Xb(c));
        return b
    }

    function cn(a) {
        return a.Xe() ? a.La() : a.bb()
    }

    $m.prototype.Xe = u(!1);

    function dn(a, b) {
        Ym.call(this, a, b, !0)
    }

    E(dn, Ym);

    function en(a, b, c, d, e) {
        this.b = this.a = null;
        this.G = this.C = 0;
        this.l = !!e;
        if (a) {
            this.a = a;
            this.C = b;
            this.b = c;
            this.G = d;
            if (1 == a.nodeType && "BR" != a.tagName) if (a = a.childNodes, b = a[b]) this.a = b, this.C = 0; else {
                a.length && (this.a = Ic(a));
                var g = !0
            }
            1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.G = 0 : this.b = c)
        }
        Ym.call(this, this.l ? this.b : this.a, this.l, !0);
        if (g) try {
            this.next()
        } catch (h) {
            if (h != mj) throw h;
        }
    }

    E(en, dn);
    en.prototype.o = r("a");
    en.prototype.s = function () {
        return this.B && (this.node != (this.l ? this.a : this.b) ? !1 : this.l ? this.C ? -1 != this.c : 1 == this.c : !this.G || 1 != this.c)
    };
    en.prototype.next = function () {
        if (this.s()) throw mj;
        return en.m.next.call(this)
    };
    en.prototype.h = function () {
        en.m.h.apply(this);
        if (kg(this.node, this.l ? this.a : this.b)) throw mj;
    };

    function fn() {
    }

    function gn(a, b) {
        b = b.Ec();
        try {
            return 0 <= a.$a(b, 0, 0) && 0 >= a.$a(b, 1, 1)
        } catch (c) {
            if (!G) throw c;
            return !1
        }
    }

    fn.prototype.Ja = function () {
        return new en(this.Sa(), this.jb(), this.ib(), this.sb())
    };

    function hn(a) {
        this.a = a
    }

    E(hn, fn);

    function jn(a) {
        var b = N(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length); else if (kn(a)) {
            for (var c, d = a; (c = d.firstChild) && kn(c);) d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && kn(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = Jc(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    }

    function ln(a, b, c, d) {
        var e = N(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    }

    v = hn.prototype;
    v.Ec = r("a");
    v.De = function () {
        return this.a.commonAncestorContainer
    };
    v.Sa = function () {
        return this.a.startContainer
    };
    v.jb = function () {
        return this.a.startOffset
    };
    v.ib = function () {
        return this.a.endContainer
    };
    v.sb = function () {
        return this.a.endOffset
    };
    v.$a = function (a, b, c) {
        return this.a.compareBoundaryPoints(1 == c ? 1 == b ? w.Range.START_TO_START : w.Range.START_TO_END : 1 == b ? w.Range.END_TO_START : w.Range.END_TO_END, a)
    };
    v.Ta = function () {
        return this.a.collapsed
    };
    v.gg = function () {
        return this.a.toString()
    };
    v.select = function (a) {
        var b = Vf(N(this.Sa()));
        this.Uc(b.getSelection(), a)
    };
    v.Uc = function (a) {
        a.removeAllRanges();
        a.addRange(this.a)
    };

    function mn(a) {
        this.a = a
    }

    E(mn, hn);
    mn.prototype.Uc = function (a, b) {
        !b || this.Ta() ? mn.m.Uc.call(this, a, b) : (a.collapse(this.ib(), this.sb()), a.extend(this.Sa(), this.jb()))
    };

    function nn(a) {
        this.b = this.a = this.h = null;
        this.g = this.f = -1;
        this.c = a
    }

    E(nn, fn);

    function on(a) {
        var b = N(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a), kn(a) && !a.childNodes.length && b.collapse(!1); else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var e = d.nodeType;
                if (3 == e) c += d.length; else if (1 == e) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move(Pa, c);
            b.moveEnd(Pa, a.length)
        }
        return b
    }

    v = nn.prototype;
    v.Ec = r("c");
    v.De = function () {
        if (!this.h) {
            var a = this.c.text, b = this.c.duplicate(), c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd(Pa, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.Ta() && 0 < b) return this.h = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == pn(c.firstChild) && kn(c.firstChild);) c = c.firstChild;
            0 == a.length && (c = qn(this, c));
            this.h = c
        }
        return this.h
    };

    function qn(a, b) {
        for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
            var g = c[d];
            if (kn(g)) {
                var h = on(g), k = h.htmlText != g.outerHTML;
                if (a.Ta() && k ? 0 <= a.$a(h, 1, 1) && 0 >= a.$a(h, 1, 0) : a.c.inRange(h)) return qn(a, g)
            }
        }
        return b
    }

    v.Sa = function () {
        this.a || (this.a = rn(this, 1), this.Ta() && (this.b = this.a));
        return this.a
    };
    v.jb = function () {
        0 > this.f && (this.f = sn(this, 1), this.Ta() && (this.g = this.f));
        return this.f
    };
    v.ib = function () {
        if (this.Ta()) return this.Sa();
        this.b || (this.b = rn(this, 0));
        return this.b
    };
    v.sb = function () {
        if (this.Ta()) return this.jb();
        0 > this.g && (this.g = sn(this, 0), this.Ta() && (this.f = this.g));
        return this.g
    };
    v.$a = function (a, b, c) {
        return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    };

    function rn(a, b, c) {
        c = c || a.De();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
            var h = d ? e : g - e - 1, k = c.childNodes[h];
            try {
                var l = tn(k)
            } catch (n) {
                continue
            }
            var m = l.Ec();
            if (a.Ta()) if (!kn(k)) {
                if (0 == a.$a(m, 1, 1)) {
                    a.f = a.g = h;
                    break
                }
            } else {
                if (gn(l, a)) return rn(a, b, k)
            } else {
                if (gn(a, l)) {
                    if (!kn(k)) {
                        d ? a.f = h : a.g = h + 1;
                        break
                    }
                    return rn(a, b, k)
                }
                if (0 > a.$a(m, 1, 0) && 0 < a.$a(m, 0, 1)) return rn(a, b, k)
            }
        }
        return c
    }

    function sn(a, b) {
        var c = 1 == b, d = c ? a.Sa() : a.ib();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e = d.length, g = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += g) {
                var k = d[h];
                if (!kn(k) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), tn(k).Ec())) return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        a = a.c.duplicate();
        b = on(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    }

    function pn(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    }

    v.Ta = function () {
        return 0 == this.c.compareEndPoints("StartToEnd", this.c)
    };
    v.gg = function () {
        return this.c.text
    };
    v.select = function () {
        this.c.select()
    };

    function un(a) {
        this.a = a
    }

    E(un, hn);
    un.prototype.Uc = function (a) {
        a.collapse(this.Sa(), this.jb());
        this.ib() == this.Sa() && this.sb() == this.jb() || a.extend(this.ib(), this.sb());
        0 == a.rangeCount && a.addRange(this.a)
    };

    function vn(a) {
        this.a = a
    }

    E(vn, hn);
    vn.prototype.$a = function (a, b, c) {
        return J("528") ? vn.m.$a.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? w.Range.START_TO_START : w.Range.END_TO_START : 1 == b ? w.Range.START_TO_END : w.Range.END_TO_END, a)
    };
    vn.prototype.Uc = function (a, b) {
        b ? a.setBaseAndExtent(this.ib(), this.sb(), this.Sa(), this.jb()) : a.setBaseAndExtent(this.Sa(), this.jb(), this.ib(), this.sb())
    };

    function wn(a) {
        return Qe ? new nn(a, N(a.parentElement())) : I ? new vn(a) : H ? new mn(a) : Qd ? new un(a) : new hn(a)
    }

    function tn(a) {
        if (G && !ge(9)) {
            var b = new nn(on(a), N(a));
            if (kn(a)) {
                for (var c, d = a; (c = d.firstChild) && kn(c);) d = c;
                b.a = d;
                b.f = 0;
                for (d = a; (c = d.lastChild) && kn(c);) d = c;
                b.b = d;
                b.g = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.h = a
            } else b.a = b.b = b.h = a.parentNode, b.f = Jc(b.h.childNodes, a), b.g = b.f + 1;
            a = b
        } else a = I ? new vn(jn(a)) : H ? new mn(jn(a)) : Qd ? new un(jn(a)) : new hn(jn(a));
        return a
    }

    function kn(a) {
        return ag(a) || 3 == a.nodeType
    };

    function xn() {
        this.c = this.b = this.g = this.a = this.h = null;
        this.f = !1
    }

    E(xn, $m);

    function yn(a, b) {
        var c = new xn;
        c.h = a;
        c.f = !!b;
        return c
    }

    v = xn.prototype;
    v.ze = function () {
        return zn(this).Ec()
    };
    v.Ic = u(1);
    v.Xb = function () {
        return this
    };

    function zn(a) {
        var b;
        if (!(b = a.h)) {
            b = a.La();
            var c = a.Ma(), d = a.bb(), e = a.cb();
            if (G && !ge(9)) {
                var g = b, h = c, k = d, l = e, m = !1;
                1 == g.nodeType && (h = g.childNodes[h], m = !h, g = h || g.lastChild || g, h = 0);
                var n = on(g);
                h && n.move(Pa, h);
                g == k && h == l ? n.collapse(!0) : (m && n.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), g = on(k), g.collapse(!m), l && g.moveEnd(Pa, l), n.setEndPoint("EndToEnd", g));
                l = new nn(n, N(b));
                l.a = b;
                l.f = c;
                l.b = d;
                l.g = e;
                b = l
            } else b = I ? new vn(ln(b, c, d, e)) : H ? new mn(ln(b, c, d, e)) : Qd ? new un(ln(b,
                c, d, e)) : new hn(ln(b, c, d, e));
            b = a.h = b
        }
        return b
    }

    v.td = function () {
        return zn(this).De()
    };
    v.La = function () {
        return this.a || (this.a = zn(this).Sa())
    };
    v.Ma = function () {
        return null != this.g ? this.g : this.g = zn(this).jb()
    };
    v.bb = function () {
        return this.b || (this.b = zn(this).ib())
    };
    v.cb = function () {
        return null != this.c ? this.c : this.c = zn(this).sb()
    };
    v.Xe = r("f");
    v.vd = function () {
        return zn(this).Ta()
    };
    v.ud = function () {
        return zn(this).gg()
    };
    v.Ja = function () {
        return new en(this.La(), this.Ma(), this.bb(), this.cb())
    };
    v.select = function () {
        zn(this).select(this.f)
    };

    function An() {
    }

    E(An, $m);

    function Bn() {
        this.c = this.b = this.a = null
    }

    E(Bn, An);
    v = Bn.prototype;
    v.ze = function () {
        return this.a || document.body.createControlRange()
    };
    v.Ic = function () {
        return this.a ? this.a.length : 0
    };
    v.Xb = function (a) {
        a = this.a.item(a);
        return yn(tn(a), void 0)
    };
    v.td = function () {
        return og.apply(null, Cn(this))
    };
    v.La = function () {
        return Dn(this)[0]
    };
    v.Ma = u(0);
    v.bb = function () {
        var a = Dn(this), b = Ic(a);
        return Pc(a, function (a) {
            return kg(a, b)
        })
    };
    v.cb = function () {
        return this.bb().childNodes.length
    };

    function Cn(a) {
        if (!a.b && (a.b = [], a.a)) for (var b = 0; b < a.a.length; b++) a.b.push(a.a.item(b));
        return a.b
    }

    function Dn(a) {
        a.c || (a.c = Cn(a).concat(), a.c.sort(function (a, c) {
            return a.sourceIndex - c.sourceIndex
        }));
        return a.c
    }

    v.vd = function () {
        return !this.a || !this.a.length
    };
    v.ud = u("");
    v.Ja = function () {
        return new En(this)
    };
    v.select = function () {
        this.a && this.a.select()
    };

    function En(a) {
        this.l = this.b = this.a = null;
        a && (this.l = Dn(a), this.a = this.l.shift(), this.b = Ic(this.l) || this.a);
        Ym.call(this, this.a, !1, !0)
    }

    E(En, dn);
    En.prototype.o = r("a");
    En.prototype.s = function () {
        return !this.f && !this.l.length
    };
    En.prototype.next = function () {
        if (this.s()) throw mj;
        if (!this.f) {
            var a = this.l.shift();
            Zm(this, a, 1, 1);
            return a
        }
        return En.m.next.call(this)
    };

    function Fn() {
        this.ua = null;
        this.a = [];
        this.f = [];
        this.c = this.b = null
    }

    E(Fn, An);
    v = Fn.prototype;
    v.ze = function () {
        return this.a[0]
    };
    v.Ic = function () {
        return this.a.length
    };
    v.Xb = function (a) {
        this.f[a] || (this.f[a] = yn(wn(this.a[a]), void 0));
        return this.f[a]
    };
    v.td = function () {
        if (!this.c) {
            for (var a = [], b = 0, c = this.Ic(); b < c; b++) a.push(this.Xb(b).td());
            this.c = og.apply(null, a)
        }
        return this.c
    };

    function Gn(a) {
        a.b || (a.b = bn(a), a.b.sort(function (a, c) {
            var b = a.La();
            a = a.Ma();
            var e = c.La();
            c = c.Ma();
            return b == e && a == c ? 0 : Hn(b, a, e, c) ? 1 : -1
        }));
        return a.b
    }

    v.La = function () {
        return Gn(this)[0].La()
    };
    v.Ma = function () {
        return Gn(this)[0].Ma()
    };
    v.bb = function () {
        return Ic(Gn(this)).bb()
    };
    v.cb = function () {
        return Ic(Gn(this)).cb()
    };
    v.vd = function () {
        return 0 == this.a.length || 1 == this.a.length && this.Xb(0).vd()
    };
    v.ud = function () {
        return Mc(bn(this), function (a) {
            return a.ud()
        }).join("")
    };
    v.Ja = function () {
        return new In(this)
    };
    v.select = function () {
        var a = an(Vf(N(G ? this.td() : this.La())));
        a.removeAllRanges();
        for (var b = 0, c = this.Ic(); b < c; b++) a.addRange(this.Xb(b).ze())
    };

    function In(a) {
        this.a = null;
        this.b = 0;
        a && (this.a = Mc(Gn(a), function (a) {
            return oj(a)
        }));
        Ym.call(this, a ? this.o() : null, !1, !0)
    }

    E(In, dn);
    In.prototype.o = function () {
        return this.a[0].o()
    };
    In.prototype.s = function () {
        return this.a[this.b].s()
    };
    In.prototype.next = function () {
        try {
            var a = this.a[this.b], b = a.next();
            Zm(this, a.node, a.c, a.f);
            return b
        } catch (c) {
            if (c !== mj || this.a.length - 1 == this.b) throw c;
            this.b++;
            return this.next()
        }
    };

    function Jn() {
        var a = an(window);
        return a && Kn(a)
    }

    function Kn(a) {
        var b = !1;
        if (a.createRange) try {
            var c = a.createRange()
        } catch (e) {
            return null
        } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new Fn;
                c = 0;
                for (var d = a.rangeCount; c < d; c++) b.a.push(a.getRangeAt(c));
                return b
            }
            c = a.getRangeAt(0);
            b = Hn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        (a = c) && a.addElement ? (b = new Bn, b.a = a, a = b) : a = yn(wn(a), b);
        return a
    }

    function Hn(a, b, c, d) {
        if (a == c) return d < b;
        var e;
        if (1 == a.nodeType && b) if (e = a.childNodes[b]) a = e, b = 0; else if (kg(a, c)) return !0;
        if (1 == c.nodeType && d) if (e = c.childNodes[d]) c = e, d = 0; else if (kg(c, a)) return !1;
        return 0 < (lg(a, c) || b - d)
    };

    function Ln() {
        var a = Jn();
        return null != a && !a.vd() && 0 < a.ud().length
    };

    function Mn() {
        this.b = []
    }

    E(Mn, qi);
    tc(Mn);

    function Nn(a, b) {
        var c = a.b[b];
        if (!c) {
            switch (b) {
                case 0:
                    c = a.ea() + "-highlight";
                    break;
                case 1:
                    c = a.ea() + "-checkbox";
                    break;
                case 2:
                    c = a.ea() + "-content"
            }
            a.b[b] = c
        }
        return c
    }

    v = Mn.prototype;
    v.Yb = u("menuitem");
    v.D = function (a) {
        var b = a.b.D(f, ti(this, a).join(" "), On(this, a.da(), a.b));
        Pn(this, a, b, !!(a.ba & 8) || !!(a.ba & 16));
        return b
    };
    v.wb = function (a) {
        return a && a.firstChild
    };
    v.Na = function (a, b) {
        var c = hg(b), d = Nn(this, 2);
        c && Ie(c, d) || b.appendChild(On(this, b.childNodes, a.b));
        Ie(b, kb) && (a.sa(16, !0), a && b && Pn(this, a, b, !0));
        return Mn.m.Na.call(this, a, b)
    };
    v.Kc = function (a, b) {
        var c = this.wb(a), d = Qn(this, a) ? c.firstChild : null;
        Mn.m.Kc.call(this, a, b);
        d && !Qn(this, a) && c.insertBefore(d, c.firstChild || null)
    };

    function On(a, b, c) {
        a = Nn(a, 2);
        return c.D(f, a, b)
    }

    function Qn(a, b) {
        return (b = a.wb(b)) ? (b = b.firstChild, a = Nn(a, 1), !!b && jg(b) && Ie(b, a)) : !1
    }

    function Pn(a, b, c, d) {
        xi(a, c, b.Hc());
        yi(a, b, c);
        d != Qn(a, c) && (d ? K(c, kb) : Ke(c, kb), c = a.wb(c), d ? (a = Nn(a, 1), c.insertBefore(b.b.D(f, a), c.firstChild || null)) : c.removeChild(c.firstChild))
    }

    v.Fc = function (a) {
        switch (a) {
            case 2:
                return Nn(this, 0);
            case 16:
            case 8:
                return lb;
            default:
                return Mn.m.Fc.call(this, a)
        }
    };
    v.rd = function (a) {
        var b = Nn(this, 0);
        switch (a) {
            case lb:
                return 16;
            case b:
                return 2;
            default:
                return Mn.m.rd.call(this, a)
        }
    };
    v.ea = u("goog-menuitem");

    function Rn(a, b, c, d) {
        W.call(this, a, d || Mn.Y(), c);
        this.za(b)
    }

    E(Rn, W);
    v = Rn.prototype;
    v.Ba = function () {
        var a = this.pa;
        return null != a ? a : this.ab()
    };
    v.za = hc("pa");
    v.sa = function (a, b) {
        Rn.m.sa.call(this, a, b);
        switch (a) {
            case 8:
                this.W & 16 && !b && Wi(this, 16, !1) && Zi(this, 16, !1);
                (a = this.j()) && this && a && Pn(this.a, this, a, b);
                break;
            case 16:
                (a = this.j()) && this && a && Pn(this.a, this, a, b)
        }
    };
    v.ab = function () {
        var a = this.da();
        return C(a) ? (a = Mc(a, function (a) {
            return jg(a) && (Ie(a, "goog-menuitem-accel") || Ie(a, "goog-menuitem-mnemonic-separator")) ? "" : zg(a)
        }).join(""), Xc(a)) : Rn.m.ab.call(this)
    };
    v.bc = function (a) {
        var b = this.tb();
        if (b) {
            var c = b.J;
            b.J = null;
            if (b = c && qc(a.clientX)) b = new L(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b) return
        }
        Rn.m.bc.call(this, a)
    };
    v.Mc = function (a) {
        return a.keyCode == this.Lg && this.kc(a) ? !0 : Rn.m.Mc.call(this, a)
    };
    v.di = r("Lg");
    Qi("goog-menuitem", function () {
        return new Rn(null)
    });
    Rn.prototype.Hc = function () {
        return this.ba & 16 ? "menuitemcheckbox" : this.ba & 8 ? "menuitemradio" : Rn.m.Hc.call(this)
    };
    Rn.prototype.tb = function () {
        return W.prototype.tb.call(this)
    };
    Rn.prototype.pd = function () {
        return W.prototype.pd.call(this)
    };

    function Sn(a) {
        this.a = a
    }

    tc(Sn);

    function Tn(a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    }

    v = Sn.prototype;
    v.D = function (a) {
        return a.b.D(f, Un(this, a).join(" "))
    };
    v.Fe = function (a) {
        return a.tagName == f
    };

    function Vn(a, b, c) {
        c.id && fi(b, c.id);
        var d = a.xd(), e = !1, g = He(c);
        g && Kc(g, function (a) {
            a == d ? e = !0 : a && (a == d + ba ? b.ma(!1) : a == d + "-horizontal" ? Wn(b, sb) : a == d + "-vertical" && Wn(b, dc))
        }, a);
        e || K(c, d);
        Xn(a, b, c);
        return c
    }

    function Xn(a, b, c) {
        if (c) for (var d = c.firstChild, e; d && d.parentNode == c;) {
            e = d.nextSibling;
            if (1 == d.nodeType) {
                var g = a.Ae(d);
                g && (g.A = d, b.isEnabled() || g.ma(!1), b.sc(g, mi(b), void 0), ki(g, d))
            } else d.nodeValue && "" != Yc(d.nodeValue) || c.removeChild(d);
            d = e
        }
    }

    v.Ae = function (a) {
        a:{
            a = He(a);
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                if (d = d in Ri ? Ri[d]() : null) {
                    a = d;
                    break a
                }
            }
            a = null
        }
        return a
    };
    v.Ge = function (a) {
        a = a.j();
        Wg(a, !0, H);
        G && (a.hideFocus = !0);
        var b = this.a;
        b && gh(a, b)
    };
    v.xd = u("goog-container");

    function Un(a, b) {
        a = a.xd();
        var c = [a, b.Pb == sb ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + ba);
        return c
    };

    function Yn() {
    }

    E(Yn, qi);
    tc(Yn);
    Yn.prototype.D = function (a) {
        return a.b.D(f, this.ea())
    };
    Yn.prototype.Na = function (a, b) {
        b.id && fi(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.D(a);
            dg(b, c);
            fg(c)
        } else K(b, this.ea());
        return b
    };
    Yn.prototype.Kc = gc();
    Yn.prototype.ea = u(jb);

    function Zn(a, b) {
        W.call(this, null, a || Yn.Y(), b);
        this.sa(1, !1);
        this.sa(2, !1);
        this.sa(4, !1);
        this.sa(32, !1);
        this.W = 1
    }

    E(Zn, W);
    Zn.prototype.P = function () {
        Zn.m.P.call(this);
        gh(this.j(), "separator")
    };
    Qi(jb, function () {
        return new Zn
    });

    function $n(a) {
        this.a = a || "menu"
    }

    E($n, Sn);
    tc($n);
    v = $n.prototype;
    v.Fe = function (a) {
        return "UL" == a.tagName || $n.m.Fe.call(this, a)
    };
    v.Ae = function (a) {
        return "HR" == a.tagName ? new Zn : $n.m.Ae.call(this, a)
    };
    v.yc = function (a, b) {
        return kg(a.j(), b)
    };
    v.xd = u("goog-menu");
    v.Ge = function (a) {
        $n.m.Ge.call(this, a);
        hh(a.j(), "haspopup", "true")
    };

    function ao(a, b, c) {
        this.c = a;
        this.f = b;
        this.s = c
    }

    E(ao, sl);
    ao.prototype.b = function (a, b, c) {
        ol(this.c, this.f, a, b, void 0, c, this.s)
    };

    function bo(a, b, c, d) {
        ao.call(this, a, b);
        this.l = c ? 5 : 0;
        this.g = d || void 0
    }

    E(bo, ao);
    bo.prototype.h = hc("l");
    bo.prototype.b = function (a, b, c) {
        var d = ol(this.c, this.f, a, b, null, c, 10, void 0, this.g);
        if (d & 496) {
            var e = co(d, this.f);
            b = co(d, b);
            d = ol(this.c, e, a, b, null, c, 10, void 0, this.g);
            d & 496 && (e = co(d, e), b = co(d, b), ol(this.c, e, a, b, null, c, this.l, void 0, this.g))
        }
    };

    function co(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    };

    function eo(a, b) {
        this.a = a instanceof L ? a : new L(a, b)
    }

    E(eo, sl);
    eo.prototype.b = function (a, b, c) {
        var d = N(a);
        var e = d.body;
        d = d.documentElement;
        d = new L(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
        e = this.a.x + d.x;
        d = this.a.y + d.y;
        var g = pl(a);
        e -= g.x;
        d -= g.y;
        rl(new L(e, d), a, b, c, null, null, void 0)
    };

    function fo(a, b) {
        eo.call(this, a, b)
    }

    E(fo, eo);
    fo.prototype.c = 0;
    fo.prototype.h = hc("c");
    fo.prototype.b = function (a, b, c) {
        var d = Kg(a);
        d = Ng(d);
        var e = Uf(If(a).a);
        e = new L(this.a.x + e.scrollLeft, this.a.y + e.scrollTop);
        var g = b, h = rl(e, a, g, c, d, 10, void 0);
        if (0 != (h & 496)) {
            if (h & 16 || h & 32) g ^= 4;
            if (h & 64 || h & 128) g ^= 1;
            h = rl(e, a, g, c, d, 10, void 0);
            0 != (h & 496) && rl(e, a, b, c, d, this.c, void 0)
        }
    };

    function go(a, b, c) {
        T.call(this, c);
        this.vb = b || Sn.Y();
        this.Pb = a || dc
    }

    E(go, T);
    v = go.prototype;
    v.gc = null;
    v.Jc = null;
    v.vb = null;
    v.Pb = null;
    v.ha = !0;
    v.ub = !0;
    v.Gb = !0;
    v.ja = -1;
    v.oa = null;
    v.hc = !1;
    v.hb = null;

    function ho(a) {
        return a.gc || a.j()
    }

    function io(a, b) {
        if (a.Gb) {
            var c = ho(a), d = a.V;
            a.gc = b;
            var e = ho(a);
            d && (a.gc = c, jo(a, !1), a.gc = b, Ji(ko(a), e), jo(a, !0))
        } else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    }

    function ko(a) {
        return a.Jc || (a.Jc = new Ii(ho(a)))
    }

    v.D = function () {
        this.A = this.vb.D(this)
    };
    v.wd = function () {
        return this.j()
    };
    v.Ee = function (a) {
        return this.vb.Fe(a)
    };
    v.T = function (a) {
        this.A = Vn(this.vb, this, a);
        a.style.display == q && (this.ha = !1)
    };
    v.P = function () {
        go.m.P.call(this);
        li(this, function (a) {
            a.V && lo(this, a)
        }, this);
        var a = this.j();
        this.vb.Ge(this);
        this.L(this.ha, !0);
        U(this).w(this, "enter", this.Oe).w(this, "highlight", this.Qc).w(this, "unhighlight", this.Se).w(this, "open", this.Bi).w(this, "close", this.oi).w(a, qh.qc, this.fi).w(N(a), [qh.rc, qh.pc], this.ri).w(a, [qh.qc, qh.rc, qh.pc, Db, Cb, Wa], this.mi);
        this.Gb && jo(this, !0)
    };

    function jo(a, b) {
        var c = U(a), d = ho(a);
        b ? c.w(d, cb, a.hg).w(d, Ka, a.yd).w(ko(a), "key", a.Ga) : c.ca(d, cb, a.hg).ca(d, Ka, a.yd).ca(ko(a), "key", a.Ga)
    }

    v.$ = function () {
        this.Ab(-1);
        this.oa && $i(this.oa, !1);
        this.hc = !1;
        go.m.$.call(this)
    };
    v.F = function () {
        go.m.F.call(this);
        this.Jc && (this.Jc.M(), this.Jc = null);
        this.vb = this.oa = this.hb = this.gc = null
    };
    v.Oe = u(!0);
    v.Qc = function (a) {
        var b = pi(this, a.target);
        if (-1 < b && b != this.ja) {
            var c = mo(this);
            c && Yi(c, !1);
            this.ja = b;
            c = mo(this);
            this.hc && Xi(c, !0);
            this.oa && c != this.oa && (c.ba & 64 ? $i(c, !0) : $i(this.oa, !1))
        }
        b = this.j();
        null != a.target.j() && hh(b, Da, a.target.j().id)
    };
    v.Se = function (a) {
        a.target == mo(this) && (this.ja = -1);
        this.j().removeAttribute("aria-activedescendant")
    };
    v.Bi = function (a) {
        (a = a.target) && a != this.oa && a.tb() == this && (this.oa && $i(this.oa, !1), this.oa = a)
    };
    v.oi = function (a) {
        a.target == this.oa && (this.oa = null);
        var b = this.j(), c = a.target.j();
        b && a.target.W & 2 && c && (a = "", c && (a = c.id), hh(b, Da, a))
    };
    v.fi = function (a) {
        this.ub && (this.hc = !0);
        var b = ho(this);
        b && vg(b) && wg(b) ? b.focus() : a.b()
    };
    v.ri = function () {
        this.hc = !1
    };
    v.mi = function (a) {
        a:{
            var b = a.target;
            if (this.hb) for (var c = this.j(); b && b !== c;) {
                var d = b.id;
                if (d in this.hb) {
                    b = this.hb[d];
                    break a
                }
                b = b.parentNode
            }
            b = null
        }
        if (b) switch (a.type) {
            case qh.qc:
                b.Nc(a);
                break;
            case qh.rc:
            case qh.pc:
                b.bc(a);
                break;
            case Db:
                b.Ke(a);
                break;
            case Cb:
                b.Re(a);
                break;
            case Wa:
                b.Pc(a)
        }
    };
    v.hg = gc();
    v.yd = function () {
        this.Ab(-1);
        this.hc = !1;
        this.oa && $i(this.oa, !1)
    };
    v.Ga = function (a) {
        return this.isEnabled() && this.N() && (0 != mi(this) || this.gc) && this.He(a) ? (a.b(), a.stopPropagation(), !0) : !1
    };
    v.He = function (a) {
        var b = mo(this);
        if (b && typeof b.Ga == p && b.Ga(a) || this.oa && this.oa != b && typeof this.oa.Ga == p && this.oa.Ga(a)) return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
        switch (a.keyCode) {
            case 27:
                if (this.Gb) ho(this).blur(); else return !1;
                break;
            case 36:
                no(this);
                break;
            case 35:
                oo(this);
                break;
            case 38:
                if (this.Pb == dc) po(this); else return !1;
                break;
            case 37:
                if (this.Pb == sb) oi(this) ? qo(this) : po(this); else return !1;
                break;
            case 40:
                if (this.Pb == dc) qo(this); else return !1;
                break;
            case 39:
                if (this.Pb == sb) oi(this) ?
                    po(this) : qo(this); else return !1;
                break;
            default:
                return !1
        }
        return !0
    };

    function lo(a, b) {
        var c = b.j();
        c = c.id || (c.id = ei(b));
        a.hb || (a.hb = {});
        a.hb[c] = b
    }

    v.sc = function (a, b, c) {
        a.Xc |= 2;
        a.Xc |= 64;
        a.sa(32, !1);
        Ti(a, !1);
        var d = a.tb() == this ? pi(this, a) : -1;
        go.m.sc.call(this, a, b, c);
        a.V && this.V && lo(this, a);
        a = d;
        -1 == a && (a = mi(this));
        a == this.ja ? this.ja = Math.min(mi(this) - 1, b) : a > this.ja && b <= this.ja ? this.ja++ : a < this.ja && b > this.ja && this.ja--
    };
    v.removeChild = function (a, b) {
        if (a = z(a) ? ii(this, a) : a) {
            var c = pi(this, a);
            -1 != c && (c == this.ja ? (Yi(a, !1), this.ja = -1) : c < this.ja && this.ja--);
            var d = a.j();
            d && d.id && this.hb && (c = this.hb, d = d.id, d in c && delete c[d])
        }
        a = go.m.removeChild.call(this, a, b);
        Ti(a, !0);
        return a
    };

    function Wn(a, b) {
        if (a.j()) throw Error(ja);
        a.Pb = b
    }

    v.N = r("ha");
    v.L = function (a, b) {
        if (b || this.ha != a && this.dispatchEvent(a ? "show" : rb)) {
            this.ha = a;
            var c = this.j();
            c && (P(c, a), this.Gb && Tn(ho(this), this.ub && this.ha), b || this.dispatchEvent(this.ha ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    };
    v.isEnabled = r("ub");
    v.ma = function (a) {
        this.ub != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.ub = !0, li(this, function (a) {
            a.oh ? delete a.oh : a.ma(!0)
        })) : (li(this, function (a) {
            a.isEnabled() ? a.ma(!1) : a.oh = !0
        }), this.hc = this.ub = !1), this.Gb && Tn(ho(this), a && this.ha))
    };

    function ro(a, b) {
        b != a.Gb && a.V && jo(a, b);
        a.Gb = b;
        a.ub && a.ha && Tn(ho(a), b)
    }

    v.Ab = function (a) {
        (a = ni(this, a)) ? Yi(a, !0) : -1 < this.ja && Yi(mo(this), !1)
    };

    function mo(a) {
        return ni(a, a.ja)
    }

    function no(a) {
        so(a, function (a, c) {
            return (a + 1) % c
        }, mi(a) - 1)
    }

    function oo(a) {
        so(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, 0)
    }

    function qo(a) {
        so(a, function (a, c) {
            return (a + 1) % c
        }, a.ja)
    }

    function po(a) {
        so(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.ja)
    }

    function so(a, b, c) {
        c = 0 > c ? pi(a, a.oa) : c;
        var d = mi(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var g = ni(a, c);
            if (g && a.Sf(g)) {
                a.Ab(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    }

    v.Sf = function (a) {
        return a.N() && a.isEnabled() && !!(a.ba & 2)
    };

    function to() {
    }

    E(to, qi);
    tc(to);
    to.prototype.ea = u(ib);

    function uo(a, b, c) {
        W.call(this, a, c || to.Y(), b);
        this.sa(1, !1);
        this.sa(2, !1);
        this.sa(4, !1);
        this.sa(32, !1);
        this.W = 1
    }

    E(uo, W);
    Qi(ib, function () {
        return new uo(null)
    });
    Qi(jb, function () {
        return new Zn
    });

    function vo(a, b) {
        go.call(this, dc, b || $n.Y(), a);
        ro(this, !1)
    }

    E(vo, go);
    v = vo.prototype;
    v.je = !0;
    v.yc = function (a) {
        if (this.vb.yc(this, a)) return !0;
        for (var b = 0, c = mi(this); b < c; b++) {
            var d = ni(this, b);
            if (typeof d.yc == p && d.yc(a)) return !0
        }
        return !1
    };
    v.L = function (a, b, c) {
        (b = vo.m.L.call(this, a, b)) && a && this.V && this.je && ho(this).focus();
        a && c && qc(c.clientX) ? this.J = new L(c.clientX, c.clientY) : this.J = null;
        return b
    };
    v.Oe = function (a) {
        this.je && ho(this).focus();
        return vo.m.Oe.call(this, a)
    };
    v.Sf = function (a) {
        return a.isEnabled() && a.N() && !!(a.ba & 2)
    };
    v.T = function (a) {
        for (var b = this.vb, c = Nf(this.b.a, f, b.xd() + "-content", a), d = c.length, e = 0; e < d; e++) Xn(b, this, c[e]);
        vo.m.T.call(this, a)
    };
    v.He = function (a) {
        var b = vo.m.He.call(this, a);
        b || li(this, function (c) {
            !b && c.di && c.Lg == a.keyCode && (this.isEnabled() && this.Ab(pi(this, c)), b = c.Ga(a))
        }, this);
        return b
    };
    v.Ab = function (a) {
        vo.m.Ab.call(this, a);
        var b = ni(this, a);
        if (b) {
            a = this.j() || Uf(document);
            var c = b.j();
            b = a || Uf(document);
            var d = Og(c), e = Og(b), g = ah(b);
            if (b == Uf(document)) {
                var h = d.x - b.scrollLeft;
                d = d.y - b.scrollTop;
                G && !ge(10) && (h += g.left, d += g.top)
            } else h = d.x - e.x - g.left, d = d.y - e.y - g.top;
            c = Rg(c);
            g = b.clientHeight - c.height;
            e = b.scrollLeft;
            var k = b.scrollTop;
            e += Math.min(h, Math.max(h - (b.clientWidth - c.width), 0));
            k += Math.min(d, Math.max(d - g, 0));
            b = new L(e, k);
            a.scrollLeft = b.x;
            a.scrollTop = b.y
        }
    };

    function wo(a, b) {
        vo.call(this, a, b);
        this.je = !0;
        ro(this, !0);
        this.L(!1, !0);
        this.a = new qj
    }

    E(wo, vo);
    v = wo.prototype;
    v.mh = !1;
    v.Dg = 0;
    v.Da = null;
    v.T = function (a) {
        wo.m.T.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && xo(this, this.b.j(a), 1)
    };
    v.P = function () {
        wo.m.P.call(this);
        this.a.forEach(this.dd, this);
        var a = U(this);
        a.w(this, Ca, this.hf);
        a.w(this.b.a, Ab, this.kj, !0)
    };

    function xo(a, b, c, d, e, g) {
        b && sj(a.a, xc(b)) || (c = a.re(b, c, d, e, g), a.V && a.dd(c), b = Cc(a.lj, b), a.j() && U(a).w(a.j(), wb, b))
    }

    v.lj = function (a, b) {
        if (27 == b.keyCode) a.focus(); else if (a = ni(this, this.ja)) {
            a = a.j();
            var c = new rh(b.a, a);
            c.target = a;
            if (32 == b.keyCode || 13 == b.keyCode) wh(a) ? ai(a, wb, !1, c) : Rh(a, wb, !1, c);
            32 == b.keyCode && this.lb()
        }
    };
    v.re = function (a, b, c, d, e) {
        if (!a) return null;
        b = {A: a, gh: b, gj: c, Cc: d ? Wa : Ab, df: e};
        this.a.set(xc(a), b);
        return b
    };
    v.dd = function (a) {
        U(this).w(a.A, a.Cc, this.Vd);
        a.Cc != Wa && U(this).w(a.A, wb, this.oj)
    };
    v.kd = function () {
        if (this.V) for (var a = this.a.Qa(), b = 0; b < a.length; b++) this.te(this.a.get(a[b]));
        uj(this.a)
    };
    v.te = function (a) {
        U(this).ca(a.A, a.Cc, this.Vd)
    };
    v.Bd = function (a, b, c) {
        b = x(a.gh) ? new bo(a.A, a.gh, !0) : new fo(b, c);
        b.h && b.h(5);
        var d = a.gj;
        c = a.df;
        var e = a.A;
        a = this.N();
        var g;
        (g = this.N()) || (g = 150 > Dc() - this.Dg);
        g && this.mh ? this.lb() : (this.Da = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.j().style.visibility = qb), P(this.j(), !0), b.b(this.j(), d, c), a || (this.j().style.visibility = ec), this.Ab(-1), this.L(!0)))
    };
    v.lb = function () {
        this.N() && (this.L(!1), this.N() || (this.Dg = Dc(), this.Da = null))
    };
    v.hf = function () {
        this.lb()
    };
    v.Vd = function (a) {
        yo(this, a)
    };
    v.oj = function (a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || yo(this, a);
        40 == a.keyCode && no(this)
    };

    function yo(a, b) {
        for (var c = a.a.Qa(), d = 0; d < c.length; d++) {
            var e = a.a.get(c[d]);
            if (e.A == b.currentTarget) {
                a.Bd(e, b.clientX, b.clientY);
                b.b();
                b.stopPropagation();
                break
            }
        }
    }

    v.kj = function (a) {
        this.N() && !this.yc(a.target) && this.lb()
    };
    v.yd = function (a) {
        wo.m.yd.call(this, a);
        this.lb()
    };
    v.F = function () {
        wo.m.F.call(this);
        this.a && (uj(this.a), delete this.a)
    };

    function zo(a) {
        $h.call(this);
        this.A = a;
        a = G ? eb : Ka;
        this.a = S(this.A, G ? db : cb, this, !G);
        this.b = S(this.A, a, this, !G)
    }

    E(zo, $h);
    zo.prototype.handleEvent = function (a) {
        var b = new rh(a.a);
        b.type = a.type == db || a.type == cb ? db : eb;
        this.dispatchEvent(b)
    };
    zo.prototype.F = function () {
        zo.m.F.call(this);
        Ph(this.a);
        Ph(this.b);
        delete this.A
    };

    function Ao(a, b) {
        this.a = a instanceof L ? a : new L(a, b)
    }

    E(Ao, sl);
    Ao.prototype.b = function (a, b, c) {
        ol(Kg(a), 0, a, b, this.a, c, null, void 0)
    };

    function Bo() {
        this.a = new qj
    }

    function Co(a) {
        var b = typeof a;
        return b == Hb && a || b == p ? "o" + xc(a) : b.substr(0, 1) + a
    }

    v = Bo.prototype;
    v.add = function (a) {
        this.a.set(Co(a), a)
    };
    v.remove = function (a) {
        return this.a.remove(Co(a))
    };
    v.contains = function (a) {
        return sj(this.a, Co(a))
    };
    v.Ea = function () {
        return this.a.Ea()
    };
    v.Ja = function () {
        return this.a.Ja(!1)
    };

    function Do(a, b, c) {
        this.ia = c || (a ? If(Kf(document, a)) : If());
        Cm.call(this, this.ia.D(f, {style: "position:absolute;display:none;"}));
        this.Eb = new L(1, 1);
        this.B = new Bo;
        this.G = null;
        a && Eo(this, a);
        null != b && this.Oa(b)
    }

    E(Do, Cm);
    var Fo = [];
    v = Do.prototype;
    v.Aa = null;
    v.className = "goog-tooltip";
    v.eh = 500;
    v.Ag = 0;

    function Eo(a, b) {
        b = Kf(document, b);
        a.B.add(b);
        S(b, Db, a.Me, !1, a);
        S(b, Cb, a.ac, !1, a);
        S(b, Bb, a.rg, !1, a);
        S(b, cb, a.kg, !1, a);
        S(b, Ka, a.ac, !1, a)
    }

    function Go(a, b) {
        if (b) b = Kf(document, b), Ho(a, b), a.B.remove(b); else {
            for (var c = a.B.Ea(), d = 0; b = c[d]; d++) Ho(a, b);
            uj(a.B.a)
        }
    }

    function Ho(a, b) {
        Oh(b, Db, a.Me, !1, a);
        Oh(b, Cb, a.ac, !1, a);
        Oh(b, Bb, a.rg, !1, a);
        Oh(b, cb, a.kg, !1, a);
        Oh(b, Ka, a.ac, !1, a)
    }

    v.Oa = function (a) {
        rg(this.j(), a)
    };
    v.$b = function (a) {
        var b = this.j();
        b && fg(b);
        Do.m.$b.call(this, a);
        a ? (b = this.ia.a.body, b.insertBefore(a, b.lastChild), jh(this.G), this.G = new zo(this.j()), ih(this, Cc(jh, this.G)), S(this.G, db, this.Tb, void 0, this), S(this.G, eb, this.Zd, void 0, this)) : (jh(this.G), this.G = null)
    };
    v.Oc = function () {
        return xg(this.j())
    };

    function Io(a) {
        return a.K ? a.N() ? 4 : 1 : a.fa ? 3 : a.N() ? 2 : 0
    }

    v.Le = function () {
        if (!ym.prototype.Le.call(this)) return !1;
        if (this.b) for (var a, b = 0; a = Fo[b]; b++) kg(a.j(), this.b) || a.L(!1);
        Qc(Fo, this) || Fo.push(this);
        a = this.j();
        a.className = this.className;
        this.Tb();
        S(a, Db, this.Jd, !1, this);
        S(a, Cb, this.Id, !1, this);
        Jo(this);
        return !0
    };
    v.lf = function () {
        Rc(Fo, this);
        for (var a = this.j(), b, c = 0; b = Fo[c]; c++) b.b && kg(a, b.b) && b.L(!1);
        this.bd && this.bd.Zd();
        Oh(a, Db, this.Jd, !1, this);
        Oh(a, Cb, this.Id, !1, this);
        this.b = void 0;
        0 == Io(this) && (this.Ia = !1);
        ym.prototype.lf.call(this)
    };
    v.ff = function (a, b) {
        this.b == a && this.B.contains(this.b) && (this.Ia || !this.Of ? (this.L(!1), this.N() || (this.b = a, this.s = b || new Ko(Ff(this.Eb)), this.N() && this.kb(), this.L(!0))) : this.b = void 0);
        this.K = void 0
    };
    v.fj = function (a) {
        this.fa = void 0;
        if (a == this.b) {
            a = this.ia;
            var b = a.a;
            try {
                var c = b && b.activeElement;
                var d = c && c.nodeName ? c : null
            } catch (e) {
                d = null
            }
            d = d && this.j() && a.contains(this.j(), d);
            null != this.Aa && (this.Aa == this.j() || this.B.contains(this.Aa)) || d || this.ad && this.ad.Aa || this.L(!1)
        }
    };

    function Lo(a, b) {
        var c = Tf(a.ia.a);
        a.Eb.x = b.clientX + c.x;
        a.Eb.y = b.clientY + c.y
    }

    v.Me = function (a) {
        var b = Mo(this, a.target);
        this.Aa = b;
        this.Tb();
        b != this.b && (this.b = b, No(this, b), Oo(this), Lo(this, a))
    };

    function Mo(a, b) {
        try {
            for (; b && !a.B.contains(b);) b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    }

    v.rg = function (a) {
        Lo(this, a);
        this.Ia = !0
    };
    v.kg = function (a) {
        this.Aa = a = Mo(this, a.target);
        this.Ia = !0;
        if (this.b != a) {
            this.b = a;
            var b = new Po(this.Aa);
            this.Tb();
            No(this, a, b);
            Oo(this)
        }
    };

    function Oo(a) {
        if (a.b) for (var b, c = 0; b = Fo[c]; c++) kg(b.j(), a.b) && (b.ad = a, a.bd = b)
    }

    v.ac = function (a) {
        var b = Mo(this, a.target), c = Mo(this, a.relatedTarget);
        b != c && (b == this.Aa && (this.Aa = null), Jo(this), this.Ia = !1, !this.N() || a.relatedTarget && kg(this.j(), a.relatedTarget) ? this.b = void 0 : this.Zd())
    };
    v.Jd = function () {
        var a = this.j();
        this.Aa != a && (this.Tb(), this.Aa = a)
    };
    v.Id = function (a) {
        var b = this.j();
        this.Aa != b || a.relatedTarget && kg(b, a.relatedTarget) || (this.Aa = null, this.Zd())
    };

    function No(a, b, c) {
        a.K || (a.K = il(D(a.ff, a, b, c), a.eh))
    }

    function Jo(a) {
        a.K && (jl(a.K), a.K = void 0)
    }

    v.Zd = function () {
        2 == Io(this) && (this.fa = il(D(this.fj, this, this.b), this.Ag))
    };
    v.Tb = function () {
        this.fa && (jl(this.fa), this.fa = void 0)
    };
    v.F = function () {
        this.L(!1);
        Jo(this);
        Go(this);
        this.j() && fg(this.j());
        this.Aa = null;
        delete this.ia;
        Do.m.F.call(this)
    };

    function Ko(a, b) {
        Ao.call(this, a, b)
    }

    E(Ko, Ao);
    Ko.prototype.b = function (a, b, c) {
        b = Kg(a);
        b = Ng(b);
        c = c ? new Cg(c.top + 10, c.right, c.bottom, c.left + 10) : new Cg(10, 0, 0, 10);
        rl(this.a, a, 8, c, b, 9) & 496 && rl(this.a, a, 8, c, b, 5)
    };

    function Po(a) {
        ao.call(this, a, 5)
    }

    E(Po, ao);
    Po.prototype.b = function (a, b, c) {
        var d = new L(10, 0);
        ol(this.c, this.f, a, b, d, c, 9) & 496 && ol(this.c, 4, a, 1, d, c, 5)
    };

    function Qo(a, b, c) {
        wo.call(this, b, c);
        this.h = new qj;
        this.f = a || 5;
        this.l = null;
        this.o = !1;
        this.g = Array(this.f);
        this.H = Array(this.f);
        this.C = Nl.Y();
        this.ua = em.Y();
        this.K = null;
        this.mh = !0
    }

    E(Qo, wo);
    var Ro = "";
    v = Qo.prototype;
    v.D = function () {
        Qo.m.D.call(this);
        for (var a = 0; a < this.f; ++a) {
            var b = new Rn("");
            this.sc(b, mi(this), !0)
        }
    };
    v.ga = function (a) {
        Qo.m.ga.call(this, a);
        K(this.j(), "alt-menu")
    };
    v.yf = function (a) {
        a = this.h.get(xc(a));
        for (var b = 0; b < Y(a, 2) && b < this.f; ++b) {
            var c = ni(this, b);
            c.Kb(Km(Rm(a, b), 0));
            c.za(b);
            c.L(!0, !0)
        }
        for (; b < this.f; ++b) ni(this, b).L(!1)
    };

    function So(a, b, c) {
        a.h.set(xc(b), c);
        xo(a, b, 9, 8, !1, new Cg(-2, 1, -2, 1))
    }

    v.kd = function () {
        Qo.m.kd.call(this);
        uj(this.h)
    };
    v.L = function (a, b) {
        var c = this.Da;
        this.K = c;
        a && null != c ? (To(this, c), Sl(this.C, "altshow"), fm(this.ua, 207)) : null != this.l && Vm(this.l, 0, 0);
        null != c && (a ? this.se(c) : this.oe(c));
        b = Qo.m.L.call(this, a, b);
        a && null != this.j() && Wg(this.j(), !1);
        return b
    };
    v.ab = function () {
        if (null != this.K) {
            var a = xg(this.K);
            if (null != a) return a
        }
        return ""
    };
    v.lb = function () {
        Qo.m.lb.call(this);
        if (this.o) for (var a = 0; a < this.g.length; a++) {
            var b = this.g[a];
            jl(b.f);
            b.g();
            b.l(-1);
            b.g();
            b.L(!1)
        }
    };
    v.se = function (a) {
        K(a, "trans-target");
        a.title = ""
    };
    v.oe = function (a) {
        Ke(a, "trans-target");
        a.title = Ro
    };
    v.Ga = function (a) {
        if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
        var b = Qo.m.Ga.call(this, a);
        if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
            var c = Ug(this.Da.parentNode.parentNode), d = null;
            if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
            if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
            if (this.ke(d) && (c = this.Da, (c = d ? x(c.nextElementSibling) ? c.nextElementSibling : ig(c.nextSibling, !0) : x(c.previousElementSibling) ? c.previousElementSibling : ig(c.previousSibling, !1)) && c != this.Da)) return this.lb(), this.dh(d),
                this.Bd(c ? this.a.get(xc(c)) : null, 0, 0), Uo(this), a.b(), a.stopPropagation(), !0
        }
        return b
    };
    v.Bd = function (a, b, c) {
        Ug((a.A || this.Da).parentNode.parentNode) ? O(this.j(), Za, Rb) : O(this.j(), Za, "");
        if (this.o) for (var d = 0; d < this.g.length; d++) Vo(this, d), rg(this.g[d].c, "...");
        this.yf(a.A);
        Qo.m.Bd.call(this, a, b, c)
    };

    function Wo(a, b, c) {
        !a.o || b >= a.f || "" == c || (rg(a.g[b].c, c), Vo(a, b))
    }

    function Vo(a, b) {
        ol(ni(a, b).j(), 12, a.g[b].j(), 8, new L(1, 0))
    }

    v.Qc = function (a) {
        Qo.m.Qc.call(this, a);
        var b = this.Da;
        null != b && (Sl(this.C, "altmenuhl"), fm(this.ua, 209), To(this, b), a = this.qd(a.target), -1 != a && a != this.f && (jl(this.H[a]), this.H[a] = il(this.dj, 300, this), this.o && (b = this.g[a], Ug(this.Da.parentNode.parentNode) ? (K(b.j(), Rb), O(b.j(), Za, Rb)) : (Ke(b.j(), Rb), O(b.j(), Za, "")), Vo(this, a), jl(b.f), 0 == b.a ? b.f = il(D(b.l, b, 1), 300) : b.l(1))))
    };
    v.dj = function () {
        Sl(this.C, "altmenuhold");
        fm(this.ua, 208)
    };
    v.Se = function (a) {
        Qo.m.Se.call(this, a);
        a = this.qd(a.target);
        -1 != a && a != this.f && (jl(this.H[a]), this.o && this.g[a].o())
    };
    v.qd = function (a) {
        return pi(this, a)
    };
    v.ke = u(!0);
    v.dh = gc();
    v.re = function (a, b, c, d, e) {
        (a = Qo.m.re.call(this, a, b, c, d, e)) && a.Cc == Ab && (a.Cc = Sa);
        return a
    };
    v.dd = function (a) {
        Qo.m.dd.call(this, a);
        U(this).w(a.A, Db, this.wg);
        U(this).w(a.A, Cb, this.Gd);
        U(this).w(a.A, Wa, this.ug);
        U(this).w(a.A, Bb, this.vg)
    };
    v.te = function (a) {
        Qo.m.te.call(this, a);
        U(this).ca(a.A, Db, this.wg);
        U(this).ca(a.A, Cb, this.Gd);
        U(this).ca(a.A, Wa, this.ug);
        U(this).ca(a.A, Bb, this.vg)
    };

    function To(a, b) {
        if (null != a.l && (b = a.h.get(xc(b))) && (a = a.l, a.b)) for (var c = a.A && (a.A.value || xg(a.A)), d = -1, e = -1, g = !1, h = 0; h < Y(a.b, 5); h++) {
            var k = Sm(a.b, h);
            if (0 != Y(k, 2) && (0 == Jm(k, 5) && (g = c.indexOf(Km(k, 4), e + 1), 0 <= g ? (d = g, e = d + Km(k, 4).length, g = !0) : g = !1), Sm(a.b, h).Db() == b.Db())) {
                if (g) {
                    c = [];
                    for (e = 0; e < Y(b, 3); ++e) c.push({
                        Dc: d + Jm(new Om(Lm(b, 3, e)), 0),
                        Df: d + Jm(new Om(Lm(b, 3, e)), 1)
                    });
                    Vm(a, 0, 0, void 0, c)
                } else d = c.indexOf(Km(b, 0)), 0 <= d && Vm(a, d, d + Km(b, 0).length);
                break
            }
        }
    }

    function Xo(a, b) {
        b ? pj(a.a.Ja(!1), function (a) {
            "" == this.b.fg(a.A) && (K(a.A, $b), this.b.eb(a.A, "_"));
            return !0
        }, a) : pj(a.a.Ja(!1), function (a) {
            Ie(a.A, $b) && (Ke(a.A, $b), this.b.eb(a.A, ""));
            return !0
        }, a)
    }

    v.wg = function (a) {
        Ln() || (K(a.target, ac), To(this, a.target), Xo(this, !0), Sl(this.C, "althighlight"), fm(this.ua, 206))
    };
    v.Gd = function (a) {
        Ke(a.target, ac);
        null == this.l || this.N() || Vm(this.l, 0, 0);
        Xo(this, !1)
    };
    v.vg = function (a) {
        Ln() && this.Gd(a)
    };
    v.ug = function (a) {
        Ln() || (this.Gd(a), yn(tn(a.target), void 0).select())
    };

    function Uo(a) {
        pj(a.a.Ja(!1), function (a) {
            Ke(a.A, ac);
            return !0
        }, a)
    }

    v.hf = function (a) {
        a && a.currentTarget && a.currentTarget.Da && (a.g = a.currentTarget.Da);
        Qo.m.hf.call(this, a)
    };
    v.Vd = function (a) {
        Ln() ? Uo(this) : this.ub && Qo.m.Vd.call(this, a)
    };

    function Yo(a, b, c) {
        this.R = this.c = null;
        Qo.call(this, a, b, c)
    }

    E(Yo, Qo);
    v = Yo.prototype;
    v.dh = hc("c");
    v.L = function (a, b) {
        b = Yo.m.L.call(this, a, b);
        this.c = null;
        a ? this.R = this.ab() : null != this.R && this.R != this.ab() && this.dispatchEvent(new oh(Ca, this));
        return b
    };
    v.se = function (a) {
        Yo.m.se.call(this, a);
        K(a, "trans-edit");
        a.contentEditable = !0;
        io(this, a);
        ho(this).focus();
        ug(ho(this), !0);
        U(this).w(a, wb, this.og);
        U(this).w(a, Cb, this.Hd);
        U(this).w(a, Db, this.Hd);
        if (null != this.c) {
            a = yn(tn(a), void 0);
            var b = this.c ? a.Ma() : a.cb(), c = cn(a);
            a = c;
            var d = b, e = new xn;
            e.f = Hn(a, d, c, b);
            if (jg(a) && !ag(a)) {
                var g = a.parentNode;
                d = Jc(g.childNodes, a);
                a = g
            }
            jg(c) && !ag(c) && (g = c.parentNode, b = Jc(g.childNodes, c), c = g);
            e.f ? (e.a = c, e.g = b, e.b = a, e.c = d) : (e.a = a, e.g = d, e.b = c, e.c = b);
            e.select()
        }
    };
    v.oe = function (a) {
        Yo.m.oe.call(this, a);
        Ke(a, "trans-edit");
        a.contentEditable = !1;
        ho(this) && ug(ho(this), !1);
        U(this).ca(a, wb, this.og);
        U(this).ca(a, Cb, this.Hd);
        U(this).ca(a, Db, this.Hd)
    };
    v.Hd = function () {
        var a = Jn();
        null == a || a.La() == a.bb() && a.Ma() == a.cb() || this.L(a.La() == a.bb())
    };
    v.og = function (a) {
        for (var b = 0; b < this.f; ++b) ni(this, b).L(!1);
        if (13 == a.keyCode || 3 == a.keyCode) return null === mo(this) ? (this.lb(), a.stopPropagation(), a.b(), !0) : !1;
        null === mo(this) || !Di(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Da.focus(), this.Ab(pi(this, null)));
        return !1
    };
    v.ke = function (a) {
        var b = Jn();
        if (b.La() == b.bb() && b.Ma() == b.cb()) {
            var c = b.Xe() ? b.Ma() : b.cb();
            b = yn(tn(cn(b)), void 0);
            if (!a && c == b.Ma() || a && c == b.cb()) return !0
        }
        return !1
    };

    function Zo(a, b, c) {
        Qo.call(this, a, b, c);
        this.c = null
    }

    E(Zo, Qo);
    v = Zo.prototype;
    v.ga = function (a) {
        Zo.m.ga.call(this, a);
        this.c = new $o("");
        this.sc(this.c, mi(this), !0)
    };
    v.yf = function (a) {
        Zo.m.yf.call(this, a);
        this.c.j().firstChild.value = this.b.fg(a)
    };
    v.L = function (a, b) {
        b = Zo.m.L.call(this, a, b);
        a && null != this.j() && (ho(this) == this.c.j().firstChild || ho(this) == this.c.j().firstChild.nextSibling) && Yi(this.c, !0);
        return b
    };
    v.Qc = function (a) {
        Zo.m.Qc.call(this, a);
        a.target == this.c ? io(this, this.c.j().firstChild) : io(this, this.j());
        ho(this).focus();
        ho(this).tabIndex = 0
    };
    v.qd = function (a) {
        return a == this.c ? -1 : Zo.m.qd.call(this, a)
    };
    v.Ga = function (a) {
        return 9 == a.keyCode ? (this.c.W & 2 ? (ho(this) == this.c.j().firstChild ? io(this, this.c.j().firstChild.nextSibling) : io(this, this.c.j().firstChild), ho(this).focus(), ho(this).tabIndex = 0) : Yi(this.c, !0), a.b(), a.stopPropagation(), !0) : Zo.m.Ga.call(this, a)
    };
    v.ke = function () {
        return null === mo(this) || !(mo(this) instanceof $o)
    };

    function $o(a, b, c) {
        W.call(this, a, c || ap.Y(), b);
        this.sa(4, !1)
    }

    E($o, W);
    $o.prototype.Nc = function (a) {
        a.target == this.j().firstChild.nextSibling && this.dispatchEvent(Ca)
    };
    $o.prototype.P = function () {
        $o.m.P.call(this);
        U(this).w(this.j().firstChild, wb, function (a) {
            32 == a.keyCode && a.stopPropagation()
        })
    };
    $o.prototype.ab = function () {
        return this.j().firstChild.value
    };

    function ap() {
    }

    E(ap, qi);
    tc(ap);
    var bp = "";
    ap.prototype.D = function (a) {
        var b = a.b.D(oa, {value: a.da(), id: "alt-input-text", type: "text"}),
            c = a.b.D(oa, {value: bp, id: "alt-input-submit", "class": "", type: Ma});
        return a.b.D(f, {id: "alt-input"}, b, c)
    };

    function cp() {
    }

    E(cp, qi);
    tc(cp);
    v = cp.prototype;
    v.Yb = gc();
    v.Na = function (a, b) {
        Ti(a, !1);
        a.gb &= -256;
        a.sa(32, !1);
        cp.m.Na.call(this, a, b);
        a.Kb(b.value);
        return b
    };
    v.D = function (a) {
        Ti(a, !1);
        a.gb &= -256;
        a.sa(32, !1);
        return a.b.D(va, {"class": ti(this, a).join(" "), disabled: !a.isEnabled()}, a.da() || "")
    };
    v.zd = function (a) {
        return a.tagName == va
    };
    v.Je = A;
    v.Ie = function (a) {
        return a.isEnabled()
    };
    v.Zb = A;
    v.Lc = function (a, b, c) {
        cp.m.Lc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    };
    v.Va = A;
    v.Kc = function (a, b) {
        a && (a.value = b)
    };
    v.ea = u("goog-textarea");

    function dp(a, b, c) {
        W.call(this, a, b || cp.Y(), c);
        Ti(this, !1);
        this.cd = !0;
        (b = this.j()) && this.a.Ad(b, !0);
        this.cc = "" != a;
        a || (this.Jb = "")
    }

    E(dp, W);
    var ep = !(G && !ge(11));
    v = dp.prototype;
    v.ec = !1;
    v.Ld = !1;
    v.cc = !1;
    v.mb = 0;
    v.Hg = 0;
    v.gf = 0;
    v.zg = !1;
    v.Td = !1;
    v.vf = !1;
    v.uf = !1;
    v.lc = "";

    function fp(a) {
        return a.c.top + a.c.bottom + a.o.top + a.o.bottom
    }

    function gp(a) {
        var b = a.gf, c = a.j();
        b && c && a.Td && (b -= fp(a));
        return b
    }

    function hp(a) {
        a.gf = 50;
        ip(a)
    }

    function jp(a) {
        a.Hg = 50;
        ip(a)
    }

    v.za = function (a) {
        this.Kb(String(a))
    };
    v.Ba = function () {
        return this.j().value != this.lc || kp(this) || this.cc ? this.j().value : ""
    };
    v.Kb = function (a) {
        dp.m.Kb.call(this, a);
        this.cc = "" != a;
        ip(this)
    };
    v.ma = function (a) {
        dp.m.ma.call(this, a);
        this.j().disabled = !a
    };

    function ip(a) {
        a.j() && a.Cd()
    }

    function kp(a) {
        return "placeholder" in a.j()
    }

    function lp(a) {
        a.lc && (kp(a) ? a.j().placeholder = a.lc : !a.j() || a.cc || a.Ld || (K(a.j(), Yb), a.j().value = a.lc))
    }

    v.P = function () {
        dp.m.P.call(this);
        var a = this.j();
        O(a, {overflowY: qb, overflowX: Ha, boxSizing: La, MsBoxSizing: La, WebkitBoxSizing: La, MozBoxSizing: La});
        this.c = $g(a);
        this.o = ah(a);
        U(this).w(a, "scroll", this.Cd).w(a, cb, this.Cd).w(a, yb, this.Cd).w(a, Eb, this.hj).w(a, Ka, this.Mh);
        lp(this);
        ip(this)
    };

    function mp(a) {
        if (!a.zg) {
            var b = a.j().cloneNode(!1);
            O(b, {
                position: Ba,
                height: Ha,
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: qb
            });
            a.b.a.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.vf = d > c;
            b.style.borderWidth = "10px";
            a.uf = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Td = !0);
            fg(b);
            a.zg = !0
        }
        b = a.j();
        isNaN(a.c.top) && (a.c = $g(b), a.o = ah(b));
        c = a.j().scrollHeight;
        var e = a.j();
        d = e.offsetHeight - e.clientHeight;
        if (!a.vf) {
            var g = a.c;
            d -= g.top + g.bottom
        }
        a.uf || (e = ah(e), d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Td ? c -= fp(a) : (a.vf || (d = a.c, c += d.top + d.bottom), a.uf || (a = ah(b), c += a.top + a.bottom));
        return c
    }

    function np(a, b) {
        a.mb != b && (a.mb = b, a.j().style.height = b + "px")
    }

    function op(a) {
        var b = a.j();
        b.style.height = Ha;
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.mb = 0
    }

    v.Mh = function () {
        kp(this) || (this.Ld = !1, "" == this.j().value && (this.cc = !1, lp(this)))
    };
    v.Cd = function (a) {
        if (!this.ec) {
            var b = this.j();
            !kp(this) && a && a.type == cb && (b.value == this.lc && this.lc && !this.Ld && (Ke(b, Yb), b.value = ""), this.Ld = !0, this.cc = "" != b.value);
            var c = !1;
            this.ec = !0;
            a = this.mb;
            if (b.scrollHeight) {
                var d = !1, e = !1, g = mp(this), h = b.offsetHeight, k = gp(this);
                var l = this.Hg;
                var m = this.j();
                l && m && this.Td && (l -= fp(this));
                k && g < k ? (np(this, k), d = !0) : l && g > l ? (np(this, l), b.style.overflowY = "", e = !0) : h != g ? np(this, g) : this.mb || (this.mb = g);
                d || e || !ep || (c = !0)
            } else op(this);
            this.ec = !1;
            c && (b = this.j(), this.ec || (this.ec =
                !0, (e = b.scrollHeight) ? (g = mp(this), c = gp(this), c && g <= c || (d = this.c, b.style.paddingBottom = d.bottom + 1 + "px", mp(this) == g && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = mp(this) - e, e >= c ? np(this, e) : np(this, c)), b.style.paddingBottom = d.bottom + "px")) : op(this), this.ec = !1));
            a != this.mb && this.dispatchEvent("resize")
        }
    };
    v.hj = function () {
        var a = this.j(), b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
        b != this.mb && (this.mb = this.gf = b)
    };

    function pp(a) {
        return function () {
            return a
        }
    }

    function qp(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    }

    function rp(a, b) {
        var c = b.split(".");
        b = Number(c[0]) || 0;
        for (var d = [], e = 0, g = 0; g < a.length; g++) {
            var h = a.charCodeAt(g);
            128 > h ? d[e++] = h : (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++g) & 1023), d[e++] = h >> 18 | 240, d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224, d[e++] = h >> 6 & 63 | 128), d[e++] = h & 63 | 128)
        }
        a = b;
        for (e = 0; e < d.length; e++) a += d[e], a = qp(a, "+-a^+6");
        a = qp(a, "+-3^+b+-f");
        a ^= Number(c[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        c = a % 1E6;
        return c.toString() +
            "." + (c ^ b)
    }

    var sp = null;

    function tp() {
        var a = pp(String.fromCharCode(116)), b = pp(String.fromCharCode(107));
        a = [a(), a()];
        a[1] = b();
        return a.join("")
    };

    function up() {
        this.a = 0;
        this.ua = em.Y()
    }

    function vp(a) {
        a = a.Ea("q").join("");
        if (null !== sp) var b = sp; else {
            var c = pp(String.fromCharCode(84));
            b = pp(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            b = (sp = window[c.join(b())] || "") || ""
        }
        return "&" + tp() + "=" + rp(a, b)
    }

    function wp(a, b, c, d, e) {
        c = c.toString();
        c += vp(d);
        d = d.toString();
        var g = sa;
        b += "?" + c;
        2E3 > b.length + d.length && (g = "GET", b += "&" + d, d = "");
        ++a.a;
        Dl(b, function (b) {
            --a.a;
            e(b)
        }, g, d, void 0)
    }

    up.prototype.b = function (a, b, c) {
        c = c.target;
        !c.Sc() || "[" != c.Ib()[0] && "{" != c.Ib()[0] ? (xp(this, c), b && b(c.Wb())) : (b = yp(c, "handleSingleResult_"), C(b) && (b = new Qm(b)), a(b))
    };
    up.prototype.c = function (a, b, c) {
        c = c.target;
        if (c.Sc()) {
            c = yp(c, "handleTextResult_");
            var d = [];
            if (a) d.push(C(c) ? c[0] : c); else if (C(c)) for (a = 0; a < c.length; ++a) d.push(C(c[a]) ? c[a][0] : c[a]);
            b(d)
        } else xp(this, c), b(null, c.Be())
    };

    function yp(a, b) {
        var c = a.Ib();
        a = {"class": "trans.common.TranslationAPI", func: b, url: a.Ce()};
        try {
            var d = JSON.parse(c)
        } catch (e) {
            throw d = Nl.Y(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e;
        }
        return d
    }

    var zp = {},
        Ap = (zp[1] = 15, zp[2] = 16, zp[3] = 17, zp[4] = 18, zp[5] = 19, zp[6] = 20, zp[7] = 21, zp[8] = 22, zp[9] = 23, zp);

    function xp(a, b) {
        var c = b.Be();
        c = c in Ap ? Ap[c] : 0;
        a = fm(a.ua, 148);
        var d = new cm;
        De(d, 1, 156);
        c && De(d, 5, c);
        Ee(a, 63, d);
        c = Nl.Y();
        a = b.Ce();
        b = b.Ib();
        c.log("invalidResponse", {q: a.substring(0, 500), ql: a.length, r: b.substring(0, 500), rl: b.length})
    };

    function Bp(a, b) {
        this.a = [];
        this.b = b;
        for (var c = !0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d] | 0;
            c && e == b || (this.a[d] = e, c = !1)
        }
    }

    var Cp = {};

    function Dp(a) {
        if (-128 <= a && 128 > a) {
            var b = Cp[a];
            if (b) return b
        }
        b = new Bp([a | 0], 0 > a ? -1 : 0);
        -128 <= a && 128 > a && (Cp[a] = b);
        return b
    }

    function Ep(a) {
        if (isNaN(a) || !isFinite(a)) return Fp;
        if (0 > a) return Gp(Ep(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
        return new Bp(b, 0)
    }

    var Fp = Dp(0), Hp = Dp(1), Ip = Dp(16777216);

    function Jp(a) {
        if (-1 == a.b) return -Jp(Gp(a));
        for (var b = 0, c = 1, d = 0; d < a.a.length; d++) {
            var e = Kp(a, d);
            b += (0 <= e ? e : 4294967296 + e) * c;
            c *= 4294967296
        }
        return b
    }

    v = Bp.prototype;
    v.toString = function (a) {
        a = a || 10;
        if (2 > a || 36 < a) throw Error("radix out of range: " + a);
        if (Lp(this)) return "0";
        if (-1 == this.b) return "-" + Gp(this).toString(a);
        for (var b = Ep(Math.pow(a, 6)), c = this, d = ""; ;) {
            var e = Mp(c, b);
            c = Np(c, Op(e, b));
            var g = ((0 < c.a.length ? c.a[0] : c.b) >>> 0).toString(a);
            c = e;
            if (Lp(c)) return g + d;
            for (; 6 > g.length;) g = "0" + g;
            d = "" + g + d
        }
    };

    function Kp(a, b) {
        return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b
    }

    function Lp(a) {
        if (0 != a.b) return !1;
        for (var b = 0; b < a.a.length; b++) if (0 != a.a[b]) return !1;
        return !0
    }

    function Pp(a, b) {
        a = Np(a, b);
        return -1 == a.b ? -1 : Lp(a) ? 0 : 1
    }

    function Gp(a) {
        for (var b = a.a.length, c = [], d = 0; d < b; d++) c[d] = ~a.a[d];
        return (new Bp(c, ~a.b)).add(Hp)
    }

    v.add = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0, e = 0; e <= b; e++) {
            var g = d + (Kp(this, e) & 65535) + (Kp(a, e) & 65535),
                h = (g >>> 16) + (Kp(this, e) >>> 16) + (Kp(a, e) >>> 16);
            d = h >>> 16;
            g &= 65535;
            h &= 65535;
            c[e] = h << 16 | g
        }
        return new Bp(c, c[c.length - 1] & -2147483648 ? -1 : 0)
    };

    function Np(a, b) {
        return a.add(Gp(b))
    }

    function Op(a, b) {
        if (Lp(a) || Lp(b)) return Fp;
        if (-1 == a.b) return -1 == b.b ? Op(Gp(a), Gp(b)) : Gp(Op(Gp(a), b));
        if (-1 == b.b) return Gp(Op(a, Gp(b)));
        if (0 > Pp(a, Ip) && 0 > Pp(b, Ip)) return Ep(Jp(a) * Jp(b));
        for (var c = a.a.length + b.a.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
        for (e = 0; e < a.a.length; e++) for (var g = 0; g < b.a.length; g++) {
            var h = Kp(a, e) >>> 16, k = Kp(a, e) & 65535, l = Kp(b, g) >>> 16, m = Kp(b, g) & 65535;
            d[2 * e + 2 * g] += k * m;
            Qp(d, 2 * e + 2 * g);
            d[2 * e + 2 * g + 1] += h * m;
            Qp(d, 2 * e + 2 * g + 1);
            d[2 * e + 2 * g + 1] += k * l;
            Qp(d, 2 * e + 2 * g + 1);
            d[2 * e + 2 * g + 2] += h * l;
            Qp(d, 2 * e + 2 * g + 2)
        }
        for (e = 0; e <
        c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++) d[e] = 0;
        return new Bp(d, 0)
    }

    function Qp(a, b) {
        for (; (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
    }

    function Mp(a, b) {
        if (Lp(b)) throw Error("division by zero");
        if (Lp(a)) return Fp;
        if (-1 == a.b) return -1 == b.b ? Mp(Gp(a), Gp(b)) : Gp(Mp(Gp(a), b));
        if (-1 == b.b) return Gp(Mp(a, Gp(b)));
        if (30 < a.a.length) {
            if (-1 == a.b || -1 == b.b) throw Error("slowDivide_ only works with positive integers.");
            for (var c = Hp; 0 >= Pp(b, a);) c = Rp(c, 1), b = Rp(b, 1);
            var d = Sp(c, 1), e = Sp(b, 1);
            b = Sp(b, 2);
            for (c = Sp(c, 2); !Lp(b);) {
                var g = e.add(b);
                0 >= Pp(g, a) && (d = d.add(c), e = g);
                b = Sp(b, 1);
                c = Sp(c, 1)
            }
            return d
        }
        for (c = Fp; 0 <= Pp(a, b);) {
            d = Math.max(1, Math.floor(Jp(a) / Jp(b)));
            e = Math.ceil(Math.log(d) / Math.LN2);
            e = 48 >= e ? 1 : Math.pow(2, e - 48);
            g = Ep(d);
            for (var h = Op(g, b); -1 == h.b || 0 < Pp(h, a);) d -= e, g = Ep(d), h = Op(g, b);
            Lp(g) && (g = Hp);
            c = c.add(g);
            a = Np(a, h)
        }
        return c
    }

    v.and = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = Kp(this, d) & Kp(a, d);
        return new Bp(c, this.b & a.b)
    };
    v.or = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = Kp(this, d) | Kp(a, d);
        return new Bp(c, this.b | a.b)
    };
    v.xor = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = Kp(this, d) ^ Kp(a, d);
        return new Bp(c, this.b ^ a.b)
    };

    function Rp(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length + c + (0 < b ? 1 : 0), e = [], g = 0; g < d; g++) e[g] = 0 < b ? Kp(a, g - c) << b | Kp(a, g - c - 1) >>> 32 - b : Kp(a, g - c);
        return new Bp(e, a.b)
    }

    function Sp(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length - c, e = [], g = 0; g < d; g++) e[g] = 0 < b ? Kp(a, g + c) >>> b | Kp(a, g + c + 1) << 32 - b : Kp(a, g + c);
        return new Bp(e, a.b)
    };Np(Rp(Hp, 32), Hp);
    Dp(65535);
    Np(Rp(Hp, 128), Hp);
    var Tp = G || I || Qd || Rd || !1;
    oe && 0 <= od(nl, "4") || pe && J("533") || H && J("2.0") || G && J("10") || Qd && Jd();

    function Up(a, b, c, d, e, g, h, k, l) {
        T.call(this, a);
        this.g = h || null;
        null != this.g && this.g.h(D(this.si, this));
        this.l = null;
        this.a = Ha;
        this.xa = this.c = "";
        this.Ya = new up;
        this.Eb = !!b && Tp && !G;
        this.J = null != e ? e : 0;
        this.f = null;
        this.Eb ? this.f = new Yo : this.f = new Zo;
        l && this.f.ma(!1);
        if (0 < this.J) for (a = this.f, a.o = !0, b = 0; b < a.f; b++) h = Wf(f, "goog-menu", ""), e = Wf(f, null, h), h = new Dm(e, h), a.g[b] = h, document.body.appendChild(e);
        this.f.ga(c);
        this.h = k || null;
        this.Ia = null != d ? d : -1;
        this.K = Nl.Y();
        this.C = new qj;
        this.H = null;
        this.Xa = "t";
        this.R =
            this.X = null;
        this.o = g || null;
        this.fa = !1;
        null != this.o && (this.o.c(D(this.Dj, this)), this.o.a(D(this.ni, this)));
        this.qa = null;
        this.ua = em.Y()
    }

    E(Up, T);

    function Vp(a, b) {
        a.qa = b;
        a.f.l = b
    }

    function Wp(a) {
        a.H = tb;
        a.f.C.s = a.H || ""
    }

    function Xp(a) {
        var b = Yp;
        a.K.f = b;
        a.Xa = b
    }

    function Zp(a, b) {
        null != a.o && a.o.f();
        b && (a.l = new Qm(b), a.R = null);
        $p(a) && (a.g.b(), null != a.h && a.h.a(!1));
        if (a.l) {
            b = 0 != Mf().length;
            a.b.Tc(a.j());
            a.f.kd();
            a.qa && (a.qa.b = a.l);
            for (var c = "", d = 0, e = 0; e < Y(a.l, 5); e++) aq(a.l, e) && (c += " "), c += bq(a.l, e), d += Y(Sm(a.l, e), 2);
            if (0 != d) {
                c = [];
                d = !1;
                e = a.l;
                for (var g = "", h = 0; h < Y(e, 5); h++) {
                    var k = Sm(e, h);
                    null != k.data[4] && 0 < Km(k, 4).length ? g = Km(k, 4) : (new Mm(k.Db())).data[4] = g
                }
                for (e = 0; e < Y(a.l, 5); e++) {
                    g = Sm(a.l, e);
                    h = Rm(g, 0);
                    aq(a.l, e) ? a.b.appendChild(a.j(), a.b.a.createTextNode(" ")) :
                        ("km" == a.c || "lo" == a.c) && a.b.appendChild(a.j(), I ? $f() : Qd ? document.createTextNode("&shy;") : G ? document.createTextNode("&#8203;") : $f());
                    null != g.data[4] && 0 < Km(g, 4).length && 0 == Jm(g, 5) && c.push(Km(g, 4));
                    var l;
                    k = bq(a.l, e);
                    /^[\s\xa0]*$/.test(k) ? 0 == k.length || (l = cq(k)) : (l = a.b.D(ua, null, k), h = Jm(h, 1), 0 <= a.Ia && h < a.Ia && K(l, "alt-low-conf"), sj(a.C, a.a + "." + a.c + "." + Km(g, 0)) && (h = a.C.get(a.a + "." + a.c + "." + Km(g, 0)), h != dq(g, 0) && (a.b.eb(l, h), K(l, Fa), d = !0, eq(a, !0))), l.title = Ro, So(a.f, l, g));
                    l && a.b.appendChild(a.j(), l)
                }
                if (null !=
                    a.g) {
                    l = a.a + "." + a.c;
                    for (e = 0; e < c.length; ++e) l += "." + c[e];
                    sj(a.C, l) && (fq(a, !1), d = !0, gq(a, a.C.get(l)), null != a.h && a.h.a(!1), eq(a, !0))
                }
                d || (eq(a, !1), fq(a, !1));
                (d || b) && a.dispatchEvent(Ca)
            }
        } else eq(a, !1), fq(a, !1)
    }

    function cq(a) {
        a = cd(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
        var b = document.createDocumentFragment(), c = 0;
        Kc(a, function (a) {
            0 != c && b.appendChild(Wf("BR"));
            c++;
            "" != a && b.appendChild(document.createTextNode(String(kd(a))))
        });
        return b
    }

    function hq(a, b) {
        if ($p(a)) return a.g.a();
        var c = [];
        if (a.j() && a.j().childNodes) for (var d = 0; d < a.j().childNodes.length; ++d) {
            var e = a.j().childNodes[d];
            c[d] = b && "BR" == e.tagName ? "\n" : xg(e)
        }
        return c.join("")
    }

    function iq(a, b, c, d) {
        for (a = 0; a < Y(b, 5); a++) {
            var e = Sm(b, a), g = e && e;
            if (Em(c.data, e ? g.data : null)) {
                c = b;
                b = a;
                e = -1;
                a = Y(c, 5);
                for (g = b; 0 <= g; g--) if (0 == Jm(Sm(c, g), 5)) {
                    e = g;
                    break
                }
                for (g = b + 1; g <= Y(c, 5); g++) if (0 == Jm(Sm(c, g), 5)) {
                    a = g;
                    break
                }
                if (null != d && d) b = jq(c, e, a); else if (d = c, c = e, d) {
                    e = b + 1;
                    g = b;
                    for (b = bq(d, b).length; 64 > b && (e != a || g != c);) e < a && (b += bq(d, e++).length + 1), 64 > b && g > c && (b += bq(d, --g).length + 1);
                    b = jq(d, g, e)
                } else b = "";
                return b
            }
        }
        return ""
    }

    function jq(a, b, c) {
        var d = [];
        d.push(bq(a, b));
        for (b += 1; b < c; b++) aq(a, b) && d.push(" "), d.push(bq(a, b));
        return d.join("")
    }

    function aq(a, b) {
        if (0 == b) return !1;
        var c = Sm(a, b), d = Sm(a, b - 1);
        if (c = Im(Rm(c, 0), 2) && !Im(Rm(d, 0), 3)) a = bq(a, b - 1), b = a.length - 1, c = !(0 <= b && a.indexOf("\n", b) == b);
        return c
    }

    v = Up.prototype;
    v.Vb = r("a");
    v.ya = r("c");
    v.D = function () {
        this.T(Ag(this.b, "span"))
    };
    v.T = function (a) {
        Up.m.T.call(this, a);
        Zp(this)
    };
    v.P = function () {
        Up.m.P.call(this);
        U(this).w(this.f, Ca, this.Ei);
        null != this.h && null != this.h.b && (U(this).w(this.h.b, Sa, this.Ii), Xh(U(this), this.h.b, this.ua.a, this.ua));
        U(this).w(this.f, "show", this.Di);
        this.j() && U(this).w(this.j(), wb, function (a) {
            32 == a.keyCode && a.stopPropagation()
        }, !0)
    };
    v.F = function () {
        Up.m.F.call(this);
        this.f.M()
    };
    v.si = function () {
        this.o.ma(this.g.c());
        eq(this, this.g.c())
    };
    v.Ei = function (a) {
        if (a.type != rb || a.target == this.f) if (null == a.target && null != this.g) this.K.log("editpopupclk"), fm(this.ua, 233), null != this.h && this.h.a(!0), this.g.l(hq(this)), this.fa = this.o.j().style.display != q, this.o.reset(), null != this.h ? this.o.ma(this.h.b.style.display != q) : this.o.ma(!1), eq(this, !1); else {
            var b = a.g;
            null == b && null != a.currentTarget && (b = a.currentTarget.Da);
            var c = a.target.ab();
            if (null != b && null != a.target) {
                var d = b, e = this.f.h.get(xc(d));
                this.b.eb(d, c);
                c == dq(e, 0) ? (Ke(d, Fa), 0 == Mf().length && (eq(this,
                    !1), fq(this, !1))) : (K(d, Fa), eq(this, !0), fq(this, !0));
                null != this.C && this.C.set(this.a + "." + this.c + "." + Km(e, 0), c);
                e = this.f.h.get(xc(b));
                null != this.C && this.C.set(this.a + "." + this.c + "." + Km(e, 0), c);
                d = dq(e, 0);
                b = pi(this.f, a.target);
                d = {
                    sl: this.a,
                    tl: this.c,
                    utrans: c,
                    gtrans: d,
                    index: b,
                    ophrase: Km(e, 0),
                    osentence: Km(e, 4),
                    tsentence: iq(this, this.l, e)
                };
                0 < Y(e, 2) && (d.confidence = Jm(Rm(e, 0), 1));
                if (a.target instanceof $o || -1 == b) d.manual = 1, fm(this.ua, 240); else {
                    a = fm(this.ua, 239);
                    e = new Zl;
                    var g = Fe(Fe(e, 2, Xl), 3, Vl);
                    De(g, 1, b);
                    Ee(a, 27, e)
                }
                for (var h in d) z(d[h]) && 64 < d[h].length && (d.tr = 1, d[h] = d[h].substr(0, 64));
                this.K.log("usealt", d, this.H);
                h = new oh("usealt");
                h.text = c;
                this.dispatchEvent(h);
                this.dispatchEvent(Ca)
            }
        }
    };

    function gq(a, b) {
        if (a.j()) {
            null == a.X && (a.R = Tc(a.b.ci(a.j())));
            a.X = b;
            var c;
            if (c = a.j().childNodes && 0 < a.j().childNodes.length) c = (c = a.j().childNodes[0]) ? sj(a.f.a, xc(c)) : !1;
            c ? (a.b.Tc(a.j()), a.f.kd(), b = a.b.D(ua, Fa, a.X), a.b.appendChild(a.j(), b), So(a.f, b, new Mm)) : a.j().innerHTML = cd(b).replace(/(\r\n|\r|\n)/g, "<br>")
        }
    }

    v.Ii = function () {
        null != this.g && $p(this) ? this.g.g() : kq(this);
        this.K.log("clkundo", void 0, this.H)
    };
    v.ni = function () {
        $p(this) && (this.g.c() && (gq(this, this.g.a()), this.fa = !0), this.g.b(), null != this.h && this.h.a(!1), this.g.c() && eq(this, !0), this.o.ma(!0), P(this.o.j(), this.fa), this.dispatchEvent(Ca));
        fm(this.ua, 215);
        this.K.log("clkcancel", void 0, this.H)
    };
    v.Di = function () {
        var a = this.f.h.get(xc(this.f.Da));
        if (a) {
            if (0 < this.J) {
                var b = new Cj("source=baf");
                if (1 == this.J) {
                    for (var c = [], d = 0, e = Y(a, 2); d < e; d++) c.push(dq(a, d));
                    d = this.Ya;
                    var g = this.c, h = this.a, k = Kf(document, "hl").value, l = D(this.Ej, this);
                    e = new Cj;
                    var m = new Cj;
                    e.set("client", "mt");
                    e.set("sl", g);
                    e.set("tl", h);
                    e.set("hl", k);
                    e.set("v", "1.0");
                    b && e.eg(b);
                    (b = !C(c) || C(c) && 1 == c.length) ? m.set("q", c) : Qj(m, "q", c);
                    b = D(d.c, d, b, l);
                    wp(d, da, e, m, b)
                } else for (d = 0, e = Y(a, 2); d < e; d++) {
                    h = dq(a, d);
                    c = this.Ya;
                    m = this.c;
                    l = this.a;
                    g = Kf(document, "hl").value;
                    k = D(this.Fj, this, d);
                    var n = b, t = new Cj, y = new Cj;
                    t.set("client", "mt");
                    t.set("sl", m);
                    t.set("tl", l);
                    t.set("hl", g);
                    Qj(t, "dt", ["at", "t"]);
                    n && t.eg(n);
                    y.set("q", h);
                    wp(c, "/translate_a/single", t, y, D(c.b, c, k, void 0))
                }
            }
            b = new oh(Sa);
            b.text = this.f.ab();
            b.h = Y(this.l, 5);
            this.dispatchEvent(b);
            b = {};
            b.confidence = Jm(Rm(a, 0), 1);
            this.a && this.c && this.xa && (b.segments = Y(this.l, 5), b.sl = this.a, b.tl = this.c, b.hl = this.xa);
            fm(this.ua, 238);
            this.K.log("phrsclk", b, this.H)
        }
    };
    v.Fj = function (a, b) {
        if (1 == this.J || 1 < Y(b, 5)) {
            var c = Km(new Pm(Lm(b, 0, 0)), 0);
            var d = 1;
            for (var e = Y(b, 0); d < e; d++) c += " " + Km(new Pm(Lm(b, 0, d)), 0);
            d = c
        } else if (1 == Y(b, 5)) {
            c = [];
            b = Sm(b, 0);
            d = 0;
            for (e = Math.min(this.J, Y(b, 2)); d < e; d++) c.push(dq(b, d));
            d = c.join(", ")
        } else d = "...";
        Wo(this.f, a, d)
    };
    v.Ej = function (a) {
        for (var b = 0; b < a.length; b++) Wo(this.f, b, a[b])
    };

    function kq(a) {
        $p(a) && (null != a.h && a.h.a(!1), a.g.b());
        uj(a.C);
        a.X = null;
        Zp(a);
        a.dispatchEvent(Ca)
    }

    function eq(a, b) {
        null != a.h && null != a.h.b && P(a.h.b, b)
    }

    function fq(a, b) {
        null != a.o && (b && a.o.reset(), P(a.o.j(), b))
    }

    v.Dj = function () {
        var a = [], b;
        null != this.R ? b = this.R : b = gg(this.j());
        for (var c = {segment: []}, d = null, e = 0, g = 0; g < b.length; g++) {
            var h = Sm(this.l, g);
            if (null != h) {
                var k = xg(b[g]);
                a:{
                    var l = k;
                    var m = h;
                    if (0 == Y(m, 2)) l = 0; else {
                        for (var n = 0; n < Y(m, 2); ++n) if (l == dq(m, n)) {
                            l = n;
                            break a
                        }
                        l = -1
                    }
                }
                m = Yc(Km(h, 4));
                n = iq(this, this.l, h, !0);
                if (0 != m.length) {
                    if (0 == a.length || m != a[a.length - 1]) a.push(m), d = lq(this, a.length - 1), e = 0, d = {
                        source: m,
                        original_target: n,
                        segment_source: d,
                        phrase_correction: []
                    }, c.segment.push(d);
                    if (0 != l) for (m = dq(h, 0).length,
                                         l = {
                                             alternative_index: l,
                                             edited_phrase: k,
                                             source_span: [],
                                             target_span: [{start: e, end: e + m}]
                                         }, d.phrase_correction.push(l), m = 0; m < Y(h, 3); ++m) n = new Om(Lm(h, 3, m)), l.source_span.push({
                        start: Jm(n, 0),
                        end: Jm(n, 1)
                    });
                    e += k.length;
                    Im(Rm(h, 0), 2) && e++
                }
            }
        }
        if ($p(this)) {
            this.dispatchEvent(Ca);
            this.g.b();
            null != this.h && this.h.a(!1);
            eq(this, !0);
            this.g.a() != hq(this) && gq(this, this.g.a());
            b = this.a + "." + this.c;
            for (g = 0; g < a.length; ++g) b += "." + a[g];
            a = this.g.a();
            this.C.set(b, a);
            c.contains_full_edit = !0
        }
        c.edited_target = hq(this, !0);
        a = new Cj;
        a.set("ue", JSON.stringify(c));
        a.set("sl", this.a);
        a.set("tl", this.c);
        Dl(ea + this.Xa, void 0, sa, a.toString(), 1E4)
    };

    function lq(a, b) {
        if (b < Y(a.l, 0)) switch (Hm(new Pm(Lm(a.l, 0, b)), 4, 0)) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
        }
        return 0
    }

    function $p(a) {
        return null != a.g && a.g.f()
    }

    function bq(a, b) {
        a = Sm(a, b);
        return 0 == Y(a, 2) ? Km(a, 0) : dq(a, 0)
    }

    function dq(a, b) {
        return Km(Rm(a, b), 0)
    };var mq = window.google && google.translate && google.translate._const;
    mq || (mq = {
        _cac: "",
        _cam: "",
        _cest: new Date,
        _cjlc: "",
        _cl: "",
        _cuc: "",
        _cnad: !1,
        _cnal: {},
        On: "",
        _pah: "",
        _pas: "",
        _pbi: "",
        _pci: "",
        _phf: "",
        _pli: "",
        _plla: "",
        _pmi: "",
        _ps: "",
        _pta: "",
        _puh: ""
    });
    var nq = window.google && window.google.translate && window.google.translate.v || "", oq = mq._cl || "en",
        pq = mq._cuc, qq = mq._cnad, rq = mq._cest, sq = mq._cnal || {}, tq = "lib" == mq._cam ? 1 : 0,
        uq = (mq._cac || "te") + (1 == tq ? "_lib" : ""), vq = function () {
            function a(a) {
                return function () {
                    return a
                }
            }

            var b = a(String.fromCharCode(116)), c = a(String.fromCharCode(107));
            b = [b(), b()];
            b[1] = c();
            return mq["_c" + b.join(c())] || ""
        }(), wq = mq._pah || "", xq = mq._pas || "https://", yq = mq._pbi || "", zq = mq._pci || "", Aq = mq._plla || "",
        Bq = mq._pli || "", Cq = mq._ps || "", Dq = mq._puh ||
        "", Eq = "//" + Dq + ea + uq,
        Fq = "https://www.google.com/support/translate" + ("en" == oq ? "" : "#googtrans/en/" + oq);

    function Gq(a) {
        for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
        return b
    }

    function Hq(a) {
        this.b = a ? [a] : [];
        this.a = [0];
        this.c = !1
    }

    Hq.prototype.register = function (a) {
        if (this.c) return a || A;
        this.a.push(0);
        var b = this.a.length - 1;
        return D(function () {
            this.a[b]++;
            a && a.apply(null, arguments);
            Iq(this)
        }, this)
    };
    Hq.prototype.delay = function (a) {
        return this.c ? a : D(function () {
            if (this.c) a.apply(null, arguments); else {
                var b = arguments;
                this.b.push(function () {
                    a.apply(null, b)
                })
            }
        }, this)
    };
    Hq.prototype.finish = function () {
        this.a[0] = 1;
        Iq(this)
    };

    function Iq(a) {
        for (var b = 0; b < a.a.length; ++b) if (0 == a.a[b]) return;
        a.c = !0;
        for (b = 0; b < a.b.length; ++b) {
            var c = a.b[b];
            a.b[b] = null;
            c.call()
        }
        a.b = [];
        a.a = []
    }

    function Jq(a) {
        this.c = a;
        this.b = this.a = !1
    }

    function Kq(a, b) {
        return D(function () {
            b && b.apply(null, arguments);
            this.b ? this.a || (this.c.call(), this.a = !0) : this.a = !0
        }, a)
    }

    Jq.prototype.finish = function () {
        this.b || (this.b = !0, this.a && this.c.call())
    };

    function Lq(a, b, c) {
        this.a = b;
        this.h = a;
        this.l = c || 0;
        this.b = this.c = !1
    }

    function Mq(a) {
        a.c || a.g()
    }

    Lq.prototype.g = function () {
        (this.c = (this.b = !!this.h.call()) || 0 >= --this.l) ? (this.a.call(null, this.b), this.f = 0) : this.f = window.setTimeout(D(this.g, this), 30)
    };
    Lq.prototype.cancel = function () {
        this.f && window.clearTimeout(this.f);
        this.c = !0;
        this.a.call(null, this.b)
    };

    function Nq(a, b) {
        return function () {
            a.dispatchEvent(b)
        }
    }

    function Oq(a) {
        a = Yc(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a) return "zh-CN";
        if ("zh-tw" == a) return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a
    }

    function Pq(a) {
        var b = [], c;
        for (c in a) if (a[c] !== Object.prototype[c]) {
            var d = ad(c);
            if (B(a[c]) == Ga) for (var e = 0; e < a[c].length; ++e) b.push(d + "=" + ad(a[c][e])); else b.push(d + "=" + ad(a[c]))
        }
        return b.join("&")
    }

    function Qq(a, b) {
        b = b || {};
        b.nca = a;
        b.client = uq;
        nq && (b.logld = "v" + nq);
        var c = new Image;
        c.src = "//" + Dq + "/gen204?" + Pq(b);
        c.onload = function () {
            c.onload = null
        }
    }

    function Rq(a, b) {
        if ((G || Qd) && window.location.hostname != document.domain) {
            Sq = Sq ? Sq + 1 : 1;
            var c = "f" + Sq + "_" + Dc().toString(36);
            window[c] = function () {
                window[c] = void 0;
                a.src = vb;
                b && window.setTimeout(function () {
                    b()
                }, 0)
            };
            a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
        } else b && b()
    }

    var Sq;

    function Tq() {
        var a = {};
        try {
            for (var b in Object.prototype) {
                var c = Object.prototype[b];
                delete Object.prototype[b];
                a[b] = c
            }
        } catch (d) {
            return {}
        }
        return a
    }

    function Uq(a) {
        for (var b in a) Object.prototype[b] = a[b]
    }

    function Vq(a) {
        for (var b in a) if (a[b] !== Object.prototype[b]) return !1;
        return !0
    }

    function Wq(a, b) {
        return a != Ha && "zh-CN" != a && a == b
    };var Xq, Yq, Zq;
    (function () {
        function a(a, c, g) {
            var d = Array.prototype.slice.call(arguments);
            d.splice(0, 2);
            d = "l" + a.toString(16) + "i" + c.toString(16) + (d.length ? "-" + d.join("_") : "");
            b ? b.push(d) : Qq(d)
        }

        var b = null, c = null;
        Xq = function (b, c, g) {
            for (var d in g) g[d] !== Object.prototype[d] && (c[d] = vc(g[d]) ? g[d] : Cc(a, b, Number(g[d])))
        };
        Yq = function () {
            b && Zq();
            b = [];
            c = S(window, "unload", function () {
                Zq()
            })
        };
        Zq = function () {
            c && (Ph(c), c = null);
            b && b.length && Qq(b.join(""));
            b = null
        }
    })();

    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function $q(a, b) {
        this.g = [];
        this.C = a;
        this.G = b || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.o = this.I = this.l = !1;
        this.h = 0;
        this.b = null;
        this.s = 0
    }

    $q.prototype.cancel = function (a) {
        if (this.a) this.c instanceof $q && this.c.cancel(); else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.s--, 0 >= b.s && b.cancel())
            }
            this.C ? this.C.call(this.G, this) : this.o = !0;
            this.a || (a = new ar(this), br(this), cr(this, !1, a))
        }
    };
    $q.prototype.B = function (a, b) {
        this.l = !1;
        cr(this, a, b)
    };

    function cr(a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        dr(a)
    }

    function br(a) {
        if (a.a) {
            if (!a.o) throw new er(a);
            a.o = !1
        }
    }

    function fr(a, b, c, d) {
        a.g.push([b, c, d]);
        a.a && dr(a)
    }

    $q.prototype.then = function (a, b, c) {
        var d, e, g = new Qk(function (a, b) {
            d = a;
            e = b
        });
        fr(this, d, function (a) {
            a instanceof ar ? g.cancel() : e(a)
        });
        return g.then(a, b, c)
    };
    Ok($q);

    function gr(a) {
        return Nc(a.g, function (a) {
            return vc(a[1])
        })
    }

    function dr(a) {
        if (a.h && a.a && gr(a)) {
            var b = a.h, c = hr[b];
            c && (w.clearTimeout(c.ka), delete hr[b]);
            a.h = 0
        }
        a.b && (a.b.s--, delete a.b);
        b = a.c;
        for (var d = c = !1; a.g.length && !a.l;) {
            var e = a.g.shift(), g = e[0], h = e[1];
            e = e[2];
            if (g = a.f ? h : g) try {
                var k = g.call(e || a.G, b);
                x(k) && (a.f = a.f && (k == b || k instanceof Error), a.c = b = k);
                if (Pk(b) || typeof w.Promise === p && b instanceof w.Promise) d = !0, a.l = !0
            } catch (l) {
                b = l, a.f = !0, gr(a) || (c = !0)
            }
        }
        a.c = b;
        d && (k = D(a.B, a, !0), d = D(a.B, a, !1), b instanceof $q ? (fr(b, k, d), b.I = !0) : b.then(k, d));
        c && (b = new ir(b), hr[b.ka] =
            b, a.h = b.ka)
    }

    function er() {
        Fc.call(this)
    }

    E(er, Fc);
    er.prototype.message = "Deferred has already fired";
    er.prototype.name = "AlreadyCalledError";

    function ar() {
        Fc.call(this)
    }

    E(ar, Fc);
    ar.prototype.message = "Deferred was canceled";
    ar.prototype.name = "CanceledError";

    function ir(a) {
        this.ka = w.setTimeout(D(this.a, this), 0);
        this.ld = a
    }

    ir.prototype.a = function () {
        delete hr[this.ka];
        throw this.ld;
    };
    var hr = {};

    function jr(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = Ye(a), e = document.createElement(ta), g = {Zg: e, Cb: void 0}, h = new $q(kr, g), k = null,
            l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (k = window.setTimeout(function () {
            lr(e, !0);
            var a = new mr(1, "Timeout reached for loading script " + d);
            br(h);
            cr(h, !1, a)
        }, l), g.Cb = k);
        e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && e.readyState != Ua || (lr(e, c.Ph || !1, k), br(h), cr(h, !0, null))
        };
        e.onerror = function () {
            lr(e, !0, k);
            var a = new mr(0, "Error while loading script " +
                d);
            br(h);
            cr(h, !1, a)
        };
        g = c.attributes || {};
        Fd(g, {type: "text/javascript", charset: "UTF-8"});
        Pf(e, g);
        Ef(e, a);
        nr(b).appendChild(e);
        return h
    }

    function nr(a) {
        var b = Lf("HEAD", a);
        return b && 0 != b.length ? b[0] : a.documentElement
    }

    function kr() {
        if (this && this.Zg) {
            var a = this.Zg;
            a && a.tagName == ta && lr(a, !0, this.Cb)
        }
    }

    function lr(a, b, c) {
        null != c && w.clearTimeout(c);
        a.onload = A;
        a.onerror = A;
        a.onreadystatechange = A;
        b && window.setTimeout(function () {
            fg(a)
        }, 0)
    }

    function mr(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Fc.call(this, c);
        this.code = a
    }

    E(mr, Fc);

    function or(a, b) {
        this.b = a;
        this.a = b ? b : "callback";
        this.Cb = 5E3
    }

    var pr = 0;
    or.prototype.send = function (a, b, c, d) {
        a = a ? Dd(a) : {};
        d = d || "_" + (pr++).toString(36) + Dc().toString(36);
        var e = "_callbacks___" + d;
        b && (w[e] = qr(d, b), a[this.a] = e);
        b = {timeout: this.Cb, Ph: !0};
        e = Ye(this.b);
        if (/#/.test(e)) throw Error("Found a hash in url (" + e + "), appending not supported.");
        var g = /\?/.test(e) ? "&" : "?";
        for (l in a) for (var h = C(a[l]) ? a[l] : [a[l]], k = 0; k < h.length; k++) null != h[k] && (e += g + encodeURIComponent(l) + "=" + encodeURIComponent(String(h[k])), g = "&");
        var l = Ze(e);
        l = jr(l, b);
        fr(l, null, rr(d, a, c), void 0);
        return {
            ka: d,
            Vf: l
        }
    };
    or.prototype.cancel = function (a) {
        a && (a.Vf && a.Vf.cancel(), a.ka && sr(a.ka, !1))
    };

    function rr(a, b, c) {
        return function () {
            sr(a, !1);
            c && c(b)
        }
    }

    function qr(a, b) {
        return function (c) {
            sr(a, !0);
            b.apply(void 0, arguments)
        }
    }

    function sr(a, b) {
        a = "_callbacks___" + a;
        if (w[a]) if (b) try {
            delete w[a]
        } catch (c) {
            w[a] = void 0
        } else w[a] = A
    };

    function tr(a, b) {
        R.call(this);
        this.b = new zj(a);
        if (b) for (var c in b) b[c] !== Object.prototype[c] && this.b.a.set(c, b[c])
    }

    E(tr, R);
    tr.prototype.f = u(!0);
    tr.prototype.Ua = function () {
        return this.f()
    };
    tr.prototype.send = u(null);
    tr.prototype.cancel = gc();

    function ur(a, b, c, d) {
        tr.call(this, a, b);
        this.c = null == d || !!d;
        a = this.b.toString();
        lj();
        a = Ze(a);
        this.a = new or(a, c)
    }

    E(ur, tr);
    ur.prototype.f = r("c");
    ur.prototype.send = function (a, b) {
        this.a.Cb = -1;
        return this.a.send(a, b)
    };
    ur.prototype.cancel = function (a) {
        this.a.cancel(a)
    };

    function vr(a, b) {
        tr.call(this, a, b);
        this.c = {};
        this.a = this.g = 0;
        window.XMLHttpRequest && fc in new XMLHttpRequest && (this.a = 1);
        !this.a && window.XDomainRequest && "file:" != window.location.protocol && (this.a = 2, this.b.a.set("u", window.location.href))
    }

    E(vr, tr);
    Xq(17170, vr.prototype, {Gg: 1, Fg: 2});
    vr.prototype.f = function () {
        return !!this.a
    };
    vr.prototype.send = function (a, b) {
        var c = Tq(), d = ++this.g, e = {}, g = {};
        "q" in a && (g.q = a.q, delete a.q);
        a.mode = this.a;
        1 == this.a ? (e.pb = new zl, S(e.pb, Ua, D(function () {
            e.vc || (e.pb.Sc() ? b(e.pb.Ib()) : (this.Fg(), b(null, e.pb.Ib() || null)), wr(this, d))
        }, this)), S(e.pb, "timeout", D(function () {
            e.vc || (this.Gg(), wr(this, d))
        }, this)), e.pb.send(this.b.toString() + "&" + Pq(a), sa, Pq(g), {"Content-Type": "application/x-www-form-urlencoded"})) : (e.Wa = new XDomainRequest, e.Wa.timeout = 2E4, e.Wa.onload = D(function () {
            e.vc || (b(e.Wa.responseText),
                wr(this, d))
        }, this), e.Wa.onerror = D(function () {
            e.vc || (this.Fg(), b(null), wr(this, d))
        }, this), e.Wa.ontimeout = D(function () {
            e.vc || (this.Gg(), b(null), wr(this, d))
        }, this), e.Wa.open(sa, this.b.toString() + "&" + Pq(a)), e.Wa.send(Pq(g)));
        this.c[d] = e;
        Uq(c);
        return d
    };
    vr.prototype.cancel = function (a) {
        var b = this.c[a];
        b && (b.vc = !0, b.Wa && b.Wa.abort(), wr(this, a))
    };

    function wr(a, b) {
        var c = a.c[b];
        c && (c.pb ? (c.pb.M(), c.pb = null) : c.Wa && (c.Wa = null), delete a.c[b])
    }

    vr.prototype.F = function () {
        vr.m.F.call(this);
        for (var a in this.c) this.cancel(a)
    };
    var Xk = {
        0: "NO_ERROR",
        1: "UNKNOWN_ERROR",
        2: "JWT_TOKEN_CANNOT_PARSE",
        3: "JWT_TOKEN_MISS_PARAM",
        4: "JWT_TOKEN_INVALID_ISS",
        5: "JWT_TOKEN_INVALID",
        6: pa,
        7: "OUT_OF_QUOTA",
        8: pa
    };

    function xr() {
    }

    xr.prototype.b = gc();

    function yr(a) {
        a = a.split(".");
        if (3 !== a.length) return !1;
        a = JSON.parse(te(a[1]));
        return null == a || !a.exp || 1E3 * a.exp < Dc() ? !1 : !0
    }

    function zr(a) {
        this.a = a
    }

    oc(zr, xr);
    zr.prototype.b = function () {
        return yr(this.a) ? Vk(this.a) : Wk()
    };

    function Ar(a) {
        this.a = null;
        this.c = a
    }

    oc(Ar, xr);
    Ar.prototype.b = function () {
        if (null != this.a && yr(this.a)) return Vk(this.a);
        this.a = null;
        return new Qk(function (a, b) {
            var c = this;
            this.c(function (d) {
                c.a = d;
                yr(c.a) ? a(d) : b(Xk[5])
            }, b)
        }, this)
    };

    function Br(a, b, c, d, e) {
        R.call(this);
        var g;
        b ? g = {client: b} : g = {anno: 3, client: uq, format: "html", v: "1.0"};
        c && (g.sp = c);
        g.key = a;
        nq && (g.logld = "v" + nq);
        this.s = d || null;
        this.Sb = e || null;
        this.a = null;
        this.l = !0;
        this.b = {hd: D(this.I, this), Jg: 300};
        this.f = new ur(xq + Aq, {client: uq}, "cb");
        this.h = g;
        a = [{
            ra: new vr(xq + wq + da, g),
            hd: D(this.C, this),
            ef: 30720,
            Kg: 4294967295,
            Ig: -1,
            $g: 0,
            ue: !1
        }, {
            ra: new ur(xq + wq + da, g, "cb", G && 7 >= fe),
            hd: D(this.G, this),
            ef: 1900,
            Kg: 4294967295,
            Ig: -1,
            $g: 3,
            ue: !0
        }];
        this.o = new Cr(a);
        this.c = !1;
        for (b = 0; b < a.length; ++b) this.c =
            this.c || a[b].ra.f();
        this.c || this.Wi()
    }

    E(Br, R);
    Xq(7361, Br.prototype, {
        Vi: function () {
            Qq("te_afbr")
        }, Wi: function () {
            Qq("te_au")
        }
    });

    function Dr(a, b) {
        if (!a.l) return b;
        if (B(b) != Ga) a = [[b, 200]]; else if (2 == b.length && B(b[0]) != Ga && B(b[1]) != Ga) a = [[b[0], 200, b[1]], [b[1], 200, b[1]]]; else {
            a = [];
            for (var c = 0; c < b.length; ++c) B(b[c]) != Ga ? a[c] = [b[c], 200] : a[c] = [b[c][0], 200, b[c][1]]
        }
        return a
    }

    Br.prototype.C = function (a) {
        var b = this;
        return function (c) {
            if (c) try {
                var d = c.indexOf("\x00");
                0 <= d && (c = c.substr(0, d));
                var e = eval("(" + c + ")")
            } catch (g) {
                e = null, b.Vi()
            }
            e ? a(Dr(b, e), 200) : a([], 500)
        }
    };
    Br.prototype.G = function (a) {
        var b = this;
        return function (c) {
            c ? a(Dr(b, c), 200) : a([], 500)
        }
    };
    Br.prototype.I = function (a) {
        return function (b) {
            if (b) try {
                var c = eval("(" + b + ")")
            } catch (d) {
                c = null
            }
            a(c && c[1] || void 0)
        }
    };

    function Cr(a) {
        this.b = a
    }

    Cr.prototype.start = function (a) {
        this.a = a;
        this.c = 0;
        Er(this)
    };

    function Er(a) {
        if (a.c >= a.b.length) a.a(null); else {
            var b = a.b[a.c++];
            b.tj ? Mq(new Lq(D(b.ra.Ua, b.ra), D(function (a) {
                a ? this.a(b) : Er(this)
            }, a), b.tj)) : b.ra.Ua() ? a.a(b) : Er(a)
        }
    }

    Br.prototype.g = function (a) {
        this.B || (this.B = !0, this.o.start(D(function (b) {
            b && (this.a = b, this.b.ra = b.ra);
            a()
        }, this)))
    };
    Br.prototype.Ua = function () {
        return null !== this.a && null !== this.a.ra && this.a.ra.Ua()
    };
    Br.prototype.translate = function (a, b, c, d, e, g, h, k) {
        var l = this, m = this.a.hd(a), n = {q: b, sl: c, tl: d};
        this.h.sp && 0 == this.h.sp.indexOf("nmt") || (n.sp = "nmt");
        n.tc = e;
        g && (n.ctt = 1);
        h && (n.dom = 1);
        k && (n.sr = 1);
        n[tp()] = rp(b.join(""), vq);
        return this.s ? this.s.b().then(function (a) {
            null != a && (n.jwtt = a, n.rurl = location.hostname);
            return l.a.ra.send(n, D(Fr(m), l))
        }, function (a) {
            a && l.Sb && l.Sb(a)
        }) : this.a.ra.send(n, m)
    };

    function Fr(a) {
        return function (b, c) {
            if (c && this.Sb) {
                try {
                    var d = JSON.parse(c).error_code
                } catch (e) {
                    d = null
                }
                c = Xk[1];
                this.Sb(null != d ? Xk[d] || c : c)
            }
            a(b)
        }
    }

    function Gr(a, b) {
        b instanceof Qk ? b.then(function (b) {
            a.a.ra.cancel(b)
        }) : a.a.ra.cancel(b)
    }

    Br.prototype.F = function () {
        Br.m.F.call(this);
        this.a && (this.a.ra.M(), this.a.ra = null);
        this.b.ra = null;
        this.f.M();
        this.f = null
    };
    var Hr = Gq(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", oa, "NOBR", "LABEL", "Q", "S", "SMALL", ua, "STRIKE", "STRONG", "SUB", "SUP", va, "TT", "U", "VAR"]),
        Ir = Gq(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", oa, va, wa]),
        Jr = Gq(["BR", "CODE", "IMG", "KBD", "MAP", "OBJECT", "PARAM", ta, "STYLE", "WBR", "svg"]),
        Kr = Gq(["submit", Ma]);

    function Lr(a, b) {
        this.a = new Ym(a, !1, b, 3 == a.nodeType ? 0 : 1, 1);
        this.c = G ? [] : null;
        for (this.b = []; a = a.parentNode;) Mr(this, a, !0);
        this.b.push(!1);
        this.b.reverse();
        for (a = 1; a < this.b.length; ++a) null == this.b[a] && (this.b[a] = this.b[a - 1]);
        this.f = !1
    }

    Xq(52754, Lr.prototype, {bj: 1});

    function Mr(a, b, c) {
        var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
        "pre" == d || !d && "PRE" == b.tagName ? a.b.push(!0) : d && "pre" != d ? a.b.push(!1) : c ? a.b.push(null) : a.b.push(a.b[a.b.length - 1])
    }

    Lr.prototype.node = function () {
        return this.a.node
    };
    Lr.prototype.next = function () {
        try {
            this.c && 0 < this.c.length && -1 == this.a.c && this.c.length--, -1 == this.a.c && this.b.length--, this.c && 0 < this.c.length && 1 != this.a.c && !this.a.node.nextSibling ? Zm(this.a, this.c[this.c.length - 1], -1, this.a.f - 1) : (this.a.next(), this.c && 1 == this.a.c && this.c.push(this.a.node)), 1 == this.a.c && this.a.B && Mr(this, this.a.node)
        } catch (a) {
            a != mj && this.bj(a), this.f = !0
        }
    };

    function Nr() {
        return "[msg_undefined]"
    }

    var Z = {};
    (function () {
        function a(a) {
            return function () {
                return a
            }
        }

        Z = {
            Nf: a(0),
            If: a(1),
            Jf: a(2),
            xm: a(3),
            Bh: a(4),
            Kf: a(5),
            rh: a(45),
            sh: a(6),
            vh: a(7),
            Zc: a(8),
            Ch: a(9),
            An: a(10),
            Gh: a(11),
            wh: a(12),
            kn: a(13),
            yh: a(14),
            jn: a(15),
            xh: a(16),
            Cn: a(17),
            Dh: a(18),
            ck: a(19),
            um: a(20),
            qh: a(21),
            zh: a(22),
            bn: a(23),
            an: a(24),
            Zm: a(25),
            Bn: a(26),
            zn: a(27),
            $m: a(28),
            th: a(29),
            Eh: a(30),
            bk: a(32),
            ak: a(33),
            Fh: a(34),
            fl: a(35),
            yk: a(36),
            el: a(37),
            Mf: a(38),
            Sl: a(39),
            Hf: a(40),
            uh: a(41),
            Lf: a(46)
        }
    })();

    function Or(a) {
        return ia + X(a.va) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + X(a.dir) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + X(a.id) + '" class="goog-te-menu"></div></body>'
    }

    function Pr(a) {
        return ia + X(a.va) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + X(a.dir) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + X(mk(a.ej)) + '" class="goog-logo-link" target="_blank"><img src="' + X(rk(a.cf)) + '" alt="Google ' + X(Z.Zc) + '"></a></td>' + (a.nc ? '<td width=1><img src="' + X(rk(a.wc)) + '" width="9" height="15" title="' + X(a.nc) + '" alt="' + X(a.nc) + aa + X(rk(a.Rc)) + ');background-position:-56px 0px;margin:0 4px"></td>' :
            "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + X(a.yj) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + ek(a.xj) + ha + X(a.Rh) + '"><b>' + ek(Z.Nf) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.jj) + '"></button></div></div></td></tr><tr id="' + X(a.wj) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' +
            ek(Z.Ch) + '&nbsp;<span dir="ltr">(<b id="' + X(a.vj) + '"></b>%)</span>&nbsp;<img src="' + X(rk(a.Ui)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.Nh) + '">' + ek(Z.If) + fa + X(a.bi) + '" style="display:none"><td><span class="goog-te-banner-content">' + ek(a.ai) + ha + X(a.Aj) + '">' + ek(Z.wh) + fa + X(a.Yh) + '" style="display:none" valign=middle><td><span id="' + X(a.Uh) + '" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' +
            X(a.Qh) + '" class="goog-close-link" href="javascript:void(0)" title="' + X(Z.Jf) + '"><img src="' + X(rk(a.wc)) + '" width="15" height="15" alt="' + X(Z.Jf) + aa + X(rk(a.Rc)) + ');background-position:-28px 0px"></a></td></tr></table></body>'
    }

    function Qr(a) {
        return '<span id="' + X(a.id) + '"></span>'
    }

    function Rr(a) {
        return ek(a.Ug) + '<div id="' + X(a.id) + '"></div>' + ek(a.Tg)
    }

    function Sr() {
        var a = G && !J("7.0");
        return '<span style="white-space:nowrap"><a class="goog-logo-link" href="' + X(mk(tb)) + '" target="_blank">' + (a ? "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png".replace(zk, xk) + "',sizingMethod='scale');\"></span>" : '<img src="' + X(rk("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png")) +
            '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + X(Z.Zc) + '">') + ek(Z.Zc) + "</a></span>"
    }

    function Tr(a) {
        return ia + X(a.va) + '"></head><body class="goog-te-ftab ' + X(a.md) + '" scroll="no" style="overflow:hidden" dir="' + X(a.dir) + '"><a id="' + X(a.Vj) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + X(rk(a.wc)) + aa + X(rk(a.Rc)) + ');background-position:-65px 0px"><span>' + ek(Z.Nf) + "</span></a></body>"
    }

    function Ur(a) {
        var b = a.cf;
        return '<div id="goog-gt-tt" class="skiptranslate" dir="' + X(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + X(rk(b)) + '" width="20" height="20" alt="Google ' + X(Z.Zc) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + ek(Z.uh) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>'
    }

    function Vr(a) {
        var b = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + X(mk(a.Jh)) + '" method="' + X(a.method) + '"><div class="form-buttons" style="text-align:';
        var c = a.dir;
        c = vc(c) && vc(Rb) ? c.type !== "rtl".type ? !1 : c.toString() === "rtl".toString() : c == Rb;
        b = b + (c ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + X(Z.zh) + '"><input class="activity-cancel" type="button" value="' + X(Z.If) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
        a = a.$h;
        c = a.length;
        for (var d = 0; d < c; d++) b += '<input type="hidden" name="' + X(a[d]) + '"/>';
        return b + "</div></form></div>"
    }

    function Wr() {
        return fk('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
    }

    function Xr(a) {
        return '<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + ek(a.Ni) + '</div><div class="activity-form-container"></div></div>'
    }

    function Yr() {
        return fk('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
    };

    function Zr(a) {
        T.call(this);
        a = a || {};
        this.id = a.id || ei(this);
        this.af = a.af || "";
        this.Rd = a.Rd || null;
        this.Sd = a.Sd || null;
        this.fd = a.fd || !1;
        this.className = a.className || null;
        this.c = null
    }

    E(Zr, T);
    Zr.prototype.jc = hc("c");
    Zr.prototype.Rb = function () {
        if (!this.V) throw Error("Activity must be rendered before it can be resumed.");
        if (!this.c) throw Error("Activity must have a tooltip instance to be resumed");
    };
    Zr.prototype.zb = gc();
    Zr.prototype.M = function () {
        this.rb || (Zr.m.M.call(this), delete this.Sd)
    };

    function $r() {
        $h.call(this);
        this.c = "closure_frame" + as++;
        this.b = [];
        bs[this.c] = this
    }

    var cs;
    E($r, $h);
    var bs = {}, as = 0;

    function ds(a, b) {
        var c = If(a);
        wj(b, function (b, e) {
            C(b) || (b = [b]);
            Kc(b, function (b) {
                b = c.D(oa, {type: qb, name: e, value: b});
                a.appendChild(b)
            })
        })
    }

    v = $r.prototype;
    v.ua = null;
    v.Z = null;
    v.la = null;
    v.Mb = null;
    v.ij = 0;
    v.na = !1;
    v.xc = !1;
    v.$d = !1;
    v.ob = null;
    v.Ze = null;
    v.Ha = 0;
    v.Lb = null;
    v.send = function (a, b, c, d) {
        if (this.na) throw Error(ya);
        this.ob = a = new zj(a);
        b = b ? b.toUpperCase() : "GET";
        c && (c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Dc()).toString(36), a.a.set("zx", c));
        cs || (cs = Wf("FORM"), cs.acceptCharset = "utf-8", c = cs.style, c.position = Ba, c.visibility = qb, c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = qb, document.body.appendChild(cs));
        this.Z = cs;
        "GET" == b && ds(this.Z, a.a);
        d && ds(this.Z, d);
        this.Z.action = a.toString();
        this.Z.method =
            b;
        es(this);
        fs(this)
    };

    function gs(a, b) {
        if (a.na) throw Error(ya);
        var c = new zj(b.action);
        a.ob = c;
        a.Z = b;
        a.Z.action = c.toString();
        es(a)
    }

    v.abort = function (a) {
        this.na && (Qh(hs(this)), this.$d = this.na = this.xc = !1, this.Ha = a || 7, this.dispatchEvent("abort"), is(this))
    };
    v.F = function () {
        this.na && this.abort();
        $r.m.F.call(this);
        this.la && js(this);
        fs(this);
        delete this.f;
        this.ob = this.Ze = this.Z = null;
        this.Ha = 0;
        delete bs[this.c]
    };
    v.Od = r("xc");
    v.Sc = r("$d");
    v.dc = r("na");
    v.Ib = r("Ze");
    v.Ce = r("ob");
    v.Be = r("Ha");

    function es(a) {
        a.na = !0;
        a.xc = !1;
        a.Ha = 0;
        a.Mb = a.c + "_" + (a.ij++).toString(36);
        a.la = If(a.Z).D(ma, {name: a.Mb, id: a.Mb});
        G && 7 > Number(fe) && (a.la.src = 'javascript:""');
        var b = a.la.style;
        b.visibility = qb;
        b.width = b.height = "10px";
        b.display = q;
        I ? b.marginTop = b.marginLeft = "-10px" : (b.position = Ba, b.top = b.left = "-10px");
        if (G && !J("11")) {
            a.Z.target = a.Mb || "";
            If(a.Z).a.body.appendChild(a.la);
            S(a.la, Qb, a.mf, !1, a);
            try {
                a.a = !1, a.Z.submit()
            } catch (y) {
                Oh(a.la, Qb, a.mf, !1, a), ks(a, 1)
            }
        } else {
            If(a.Z).a.body.appendChild(a.la);
            b = a.Mb + "_inner";
            var c = pg(a.la);
            if (document.baseURI) {
                var d = cd(b);
                d = '<head><base href="' + cd(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>';
                d = Cf(d, null)
            } else d = cd(b), d = Cf('<body><iframe id="' + d + '" name="' + d + '"></iframe>', null);
            Qd && !I ? c.documentElement.innerHTML = wf(d) : c.write(wf(d));
            S(c.getElementById(b), zb, a.Ud, !1, a);
            var e = Lf(va, a.Z);
            d = 0;
            for (var g = e.length; d < g; d++) {
                var h = e[d].value;
                zg(e[d]) != h && (rg(e[d], h), e[d].value = h)
            }
            e = c.importNode(a.Z, !0);
            e.target = b;
            e.action = a.Z.action;
            c.body.appendChild(e);
            h = Lf("SELECT", a.Z);
            var k = Lf("SELECT", e);
            d = 0;
            for (g = h.length; d < g; d++) for (var l = Lf(qa, h[d]), m = Lf(qa, k[d]), n = 0, t = l.length; n < t; n++) m[n].selected = l[n].selected;
            h = Lf(oa, a.Z);
            k = Lf(oa, e);
            d = 0;
            for (g = h.length; d < g; d++) if ("file" == h[d].type && h[d].value != k[d].value) {
                a.Z.target = b;
                e = a.Z;
                break
            }
            try {
                a.a = !1, e.submit(), c.close(), H && il(a.kh, 250, a)
            } catch (y) {
                Oh(c.getElementById(b), zb, a.Ud, !1, a), c.close(), ks(a, 2)
            }
        }
    }

    v.mf = function () {
        if (this.la.readyState == Ua) {
            Oh(this.la, Qb, this.mf, !1, this);
            try {
                var a = pg(this.la);
                if (G && a.location == za && !navigator.onLine) {
                    ks(this, 9);
                    return
                }
            } catch (b) {
                ks(this, 1);
                return
            }
            ls(this, a)
        }
    };
    v.Ud = function () {
        if (!Qd || I || (this.la ? pg(hs(this)) : null).location != za) {
            Oh(hs(this), zb, this.Ud, !1, this);
            try {
                ls(this, this.la ? pg(hs(this)) : null)
            } catch (a) {
                ks(this, 1)
            }
        }
    };

    function ls(a, b) {
        a.xc = !0;
        a.na = !1;
        try {
            var c = b.body;
            a.Ze = c.textContent || c.innerText
        } catch (e) {
            var d = 1
        }
        d || typeof a.f != p || (b = a.f(b)) && (d = 4);
        d ? ks(a, d) : (a.$d = !0, a.Ha = 0, a.dispatchEvent(Ua), a.dispatchEvent("success"), is(a))
    }

    function ks(a, b) {
        a.a || (a.$d = !1, a.na = !1, a.xc = !0, a.Ha = b, a.dispatchEvent(Ua), a.dispatchEvent("error"), is(a), a.a = !0)
    }

    function is(a) {
        js(a);
        fs(a);
        a.Z = null;
        a.dispatchEvent(Pb)
    }

    function js(a) {
        var b = a.la;
        b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.b.push(b));
        a.Lb && (jl(a.Lb), a.Lb = null);
        H || Qd && !I ? a.Lb = il(a.Xf, 2E3, a) : a.Xf();
        a.la = null;
        a.Mb = null
    }

    v.Xf = function () {
        this.Lb && (jl(this.Lb), this.Lb = null);
        for (; 0 != this.b.length;) {
            var a = this.b.pop();
            fg(a)
        }
    };

    function fs(a) {
        a.Z && a.Z == cs && cg(a.Z)
    }

    function hs(a) {
        return a.la ? G && !J("11") ? a.la : pg(a.la).getElementById(a.Mb + "_inner") : null
    }

    v.kh = function () {
        if (this.na) {
            var a = this.la ? pg(hs(this)) : null;
            a && !Nd(a, "documentUri") ? (Oh(hs(this), zb, this.Ud, !1, this), navigator.onLine ? ks(this, 3) : ks(this, 9)) : il(this.kh, 250, this)
        }
    };

    function ms(a, b) {
        T.call(this);
        this.l = a || "";
        this.c = null;
        this.h = [];
        this.a = null;
        this.o = b || "GET";
        this.f = this.g = null
    }

    E(ms, T);
    v = ms.prototype;
    v.D = function () {
        var a = {Jh: this.l, method: this.o, $h: this.h, dir: Ve.test(oq) ? Rb : "ltr"};
        this.T(Zj(Vr, a))
    };
    v.T = function (a) {
        this.A = a;
        this.a = gi(this, "activity-form");
        a = gi(this, "activity-submit");
        this.f = new fj("");
        ki(this.f, a);
        a = gi(this, "activity-cancel");
        this.c = new fj("");
        ki(this.c, a)
    };
    v.P = function () {
        var a = U(this);
        a.w(this.f, Ca, D(this.Jj, this));
        a.w(this.c, Ca, D(this.dispatchEvent, this, Na))
    };
    v.Jj = function () {
        var a = !0;
        this.g && (a = this.g());
        a && (a = new $r, S(a, "success", function () {
            this.dispatchEvent("successful")
        }), S(a, "error", function () {
            this.dispatchEvent("failed")
        }), gs(a, this.a));
        this.dispatchEvent(Wb)
    };

    function ns(a, b) {
        for (var c in b) a.a[c] && (a.a[c].value = b[c])
    }

    function os(a, b) {
        return a.a[b] ? a.a[b].value : ""
    }

    v.F = function () {
        this.f = this.a = this.c = null;
        ms.m.F.call(this)
    };

    function ps(a, b) {
        a.g = b
    };

    function qs(a, b) {
        Zr.call(this, a);
        this.f = null;
        this.o = b || {};
        this.h = new Tm;
        this.l = this.a = null;
        this.g = new Br((a || {}).Za || "", Yp);
        this.g.l = !1
    }

    E(qs, Zr);
    var Yp = uq.replace("_", "-") + "-alt";
    v = qs.prototype;
    v.jc = function (a) {
        qs.m.jc.call(this, a);
        this.g.g(D(this.Rb, this))
    };
    v.Rb = function () {
        qs.m.Rb.call(this);
        var a = this.c.J, b = this.c.o;
        if (a && b) {
            rg(this.l, a);
            var c = this.h;
            c.A = b;
            dg(c.a, c.A);
            Um(c);
            P(this.h.a, !0);
            b = this.c.Vb();
            c = this.c.ya();
            if (this.g.Ua() && b && c) {
                var d = this.c.Oc(), e = D(this.nj, this);
                this.g && this.g.translate(e, {rj: [d], Sn: !0, Vn: !1}.rj, b, c, 0, !1);
                ns(this.a, {gtrans: a, text: this.c.Oc(), hl: oq, langpair: b + "|" + c});
                ns(this.a, this.o);
                ns(this.a, {client: Yp})
            }
            this.dispatchEvent(Pb)
        }
    };
    v.D = function () {
        this.T(Zj(Xr, {Ni: Z.Hf}))
    };
    v.T = function (a) {
        this.A = a;
        this.l = gi(this, "alt-translated-text");
        var b = gi(this, Ea);
        this.a = new ms(Eq, sa);
        this.a.h = yd(this.o);
        ps(this.a, D(function () {
            ns(this.a, {utrans: hq(this.f)});
            return os(this.a, "utrans") != os(this.a, "gtrans")
        }, this));
        this.a.ga(b);
        bp = Z.Fh;
        Ro = Z.Hf;
        this.f = new Up(void 0, !0, a);
        Vp(this.f, this.h);
        Wp(this.f);
        Xp(this.f);
        ki(this.f, this.l)
    };
    v.P = function () {
        qs.m.P.call(this);
        var a = U(this);
        a.w(this.a, Na, D(function () {
            kq(this.f);
            this.dispatchEvent(Na)
        }, this));
        a.w(this.a, Wb, D(function () {
            var a = hq(this.f);
            this.c.J = a && Yc(a);
            this.dispatchEvent(Wb);
            rg(this.c.Wb().j(), Z.Mf)
        }, this))
    };
    v.nj = function (a) {
        a && Zp(this.f, a)
    };
    v.zb = function () {
        P(this.h.a, !1)
    };
    v.F = function () {
        this.f && this.f.M();
        this.l = this.h = this.f = null;
        this.g && this.g.M();
        this.g = null;
        this.a && this.a.M();
        this.a = null;
        qs.m.F.call(this)
    };

    function rs(a, b) {
        Zr.call(this, a);
        this.h = !1;
        this.g = b || {};
        this.f = null
    }

    E(rs, Zr);
    v = rs.prototype;
    v.jc = function (a) {
        rs.m.jc.call(this, a);
        U(this).w(this.f.j(), wb, D(this.c.Vc, this.c, !1));
        this.h = this.c.uc;
        this.Rb()
    };
    v.Rb = function () {
        rs.m.Rb.call(this);
        this.f.Kb(this.c.J);
        var a = this.c.Vb(), b = this.c.ya();
        a && b && (ns(this.a, {
            gtrans: this.c.J,
            text: this.c.Oc(),
            hl: oq,
            langpair: a + "|" + b
        }), ns(this.a, this.g));
        this.dispatchEvent(Pb);
        this.f.j().focus()
    };
    v.zb = function () {
        this.c.Vc(this.h)
    };
    v.D = function () {
        this.T(Zj(Wr))
    };
    v.T = function (a) {
        this.A = a;
        a = gi(this, "contribute-original-text");
        this.f = new dp("");
        ki(this.f, a);
        jp(this.f);
        hp(this.f);
        a = gi(this, Ea);
        this.a = new ms(Eq, sa);
        this.a.h = yd(this.g);
        ps(this.a, D(function () {
            ns(this.a, {utrans: Yc(this.f.Ba())});
            return os(this.a, "utrans") != os(this.a, "gtrans")
        }, this));
        this.a.ga(a)
    };
    v.P = function () {
        rs.m.P.call(this);
        var a = U(this);
        a.w(this.a, Na, D(function () {
            this.dispatchEvent(Na)
        }, this));
        a.w(this.a, Wb, D(function () {
            var a = this.f.Ba();
            this.c.J = a && Yc(a);
            this.dispatchEvent(Wb);
            rg(this.c.Wb().j(), Z.Mf)
        }, this))
    };
    v.F = function () {
        this.f && this.f.M();
        this.f = null;
        this.a && this.a.M();
        this.a = null;
        rs.m.F.call(this)
    };

    function ss(a) {
        $h.call(this);
        this.h = a;
        this.g = {};
        this.c = new Uh(this);
        this.f = null
    }

    E(ss, $h);
    ss.prototype.ih = gc();
    ss.prototype.jh = gc();
    ss.prototype.F = function () {
        this.c.M();
        this.c = null
    };

    function ts(a, b, c) {
        if (b = a.h.c[b]) {
            c = c || "undefined" == typeof c;
            for (var d = 0; d < b.Ca.length; ++d) b.Ca[d] && a.Bg(b.Ca[d], c)
        }
    }

    ss.prototype.Bg = function (a, b) {
        O(a, "backgroundColor", b ? "#E6ECF9" : "");
        O(a, "color", b ? "#000" : "")
    };
    var Bd = {}, us = null;

    function vs(a) {
        a = xc(a);
        delete Bd[a];
        Ad() && us && us.stop()
    }

    function ws() {
        us || (us = new kl(function () {
            xs()
        }, 20));
        var a = us;
        a.dc() || a.start()
    }

    function xs() {
        var a = Dc();
        wd(Bd, function (b) {
            ys(b, a)
        });
        Ad() || ws()
    };

    function zs(a, b, c, d) {
        um.call(this);
        if (!C(a) || !C(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.g = a;
        this.B = b;
        this.duration = c;
        this.o = d;
        this.coords = [];
        this.progress = 0
    }

    E(zs, um);
    v = zs.prototype;
    v.play = function (a) {
        if (a || 0 == this.a) this.progress = 0, this.coords = this.g; else if (1 == this.a) return !1;
        vs(this);
        this.b = a = Dc();
        -1 == this.a && (this.b -= this.duration * this.progress);
        this.endTime = this.b + this.duration;
        this.progress || this.c();
        this.Pa("play");
        -1 == this.a && this.Pa("resume");
        this.a = 1;
        var b = xc(this);
        b in Bd || (Bd[b] = this);
        ws();
        ys(this, a);
        return !0
    };
    v.stop = function (a) {
        vs(this);
        this.a = 0;
        a && (this.progress = 1);
        As(this, this.progress);
        this.zb();
        this.f()
    };
    v.xf = function (a) {
        this.progress = a;
        1 == this.a && (this.b = Dc() - this.duration * this.progress, this.endTime = this.b + this.duration)
    };
    v.F = function () {
        0 == this.a || this.stop(!1);
        this.Pa("destroy");
        zs.m.F.call(this)
    };

    function ys(a, b) {
        b < a.b && (a.endTime = b + a.endTime - a.b, a.b = b);
        a.progress = (b - a.b) / (a.endTime - a.b);
        1 < a.progress && (a.progress = 1);
        As(a, a.progress);
        1 == a.progress ? (a.a = 0, vs(a), a.Pa($a), a.f()) : 1 == a.a && a.jf()
    }

    function As(a, b) {
        vc(a.o) && (b = a.o(b));
        a.coords = Array(a.g.length);
        for (var c = 0; c < a.g.length; c++) a.coords[c] = (a.B[c] - a.g[c]) * b + a.g[c]
    }

    v.jf = function () {
        this.Pa("animate")
    };
    v.Pa = function (a) {
        this.dispatchEvent(new Bs(a, this))
    };

    function Bs(a, b) {
        oh.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.duration = b.duration;
        this.progress = b.progress
    }

    E(Bs, oh);

    function Cs(a, b, c, d, e) {
        zs.call(this, b, c, d, e);
        this.h = a
    }

    E(Cs, zs);
    Cs.prototype.s = A;
    Cs.prototype.jf = function () {
        this.s();
        Cs.m.jf.call(this)
    };
    Cs.prototype.f = function () {
        this.s();
        Cs.m.f.call(this)
    };
    Cs.prototype.c = function () {
        this.s();
        Cs.m.c.call(this)
    };

    function Ds(a, b, c, d, e) {
        qc(b) && (b = [b]);
        qc(c) && (c = [c]);
        Cs.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.l = -1
    }

    E(Ds, Cs);
    var Es = 1 / 1024;
    Ds.prototype.s = function () {
        var a = this.coords[0];
        if (Math.abs(a - this.l) >= Es) {
            var b = this.h.style;
            "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
            this.l = a
        }
    };
    Ds.prototype.c = function () {
        this.l = -1;
        Ds.m.c.call(this)
    };
    Ds.prototype.f = function () {
        this.l = -1;
        Ds.m.f.call(this)
    };

    function Fs(a, b, c) {
        Ds.call(this, a, 1, 0, b, c)
    }

    E(Fs, Ds);
    Fs.prototype.c = function () {
        this.h.style.display = "";
        Fs.m.c.call(this)
    };
    Fs.prototype.f = function () {
        this.h.style.display = q;
        Fs.m.f.call(this)
    };

    function Gs(a, b, c) {
        Ds.call(this, a, 0, 1, b, c)
    }

    E(Gs, Ds);
    Gs.prototype.c = function () {
        this.h.style.display = "";
        Gs.m.c.call(this)
    };

    function Hs() {
        T.call(this);
        this.a = null
    }

    E(Hs, T);
    v = Hs.prototype;
    v.D = function () {
        this.T(this.b.D(f, {"class": Ub}))
    };
    v.T = function (a) {
        this.A = a;
        a.style.display = q
    };

    function Is(a) {
        var b = c;
        var c = D(function () {
            rg(this.j(), "");
            b && b()
        }, a);
        c = D(a.Oi, a, 750, c);
        Js(a, c)
    }

    function Ks(a) {
        a.a && (a.a.stop(!0), a.a = null);
        rg(a.j(), "");
        a.L(!1)
    }

    function Js(a, b) {
        a.a = new Gs(a.j(), 750);
        U(a).yb(a.a, "begin", D(function () {
            this.j().style.display = "block"
        }, a));
        U(a).yb(a.a, $a, D(function () {
            this.a = null;
            window.setTimeout(b, 2E3)
        }, a));
        a.a.play()
    }

    v.Oi = function (a, b) {
        this.N() && (this.a = new Fs(this.j(), a), U(this).yb(this.a, $a, D(function () {
            b && b()
        }, this)), this.a.play())
    };
    v.L = function (a) {
        this.j().style.display = a ? "block" : q;
        this.j().style.opacity = a ? "1" : "0"
    };
    v.N = function () {
        return this.j().style.display !== q && "0" !== this.j().style.opacity
    };

    function Ls() {
        Do.call(this);
        this.R = {};
        this.fb = {};
        this.I = null;
        this.$c = !1;
        this.qb = this.f = this.H = null;
        this.X = {};
        this.l = new Uh(this);
        this.o = this.c = this.g = this.Xa = this.a = this.J = this.qa = null;
        this.C = !0;
        this.Ya = []
    }

    E(Ls, Do);
    v = Ls.prototype;
    v.ga = function () {
        this.C = !1;
        var a = Ve.test(oq) ? Rb : "ltr";
        this.$b(Zj(Ur, {
            cf: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
            wc: ub,
            Rc: zq,
            dir: a
        }));
        this.className += " skiptranslate";
        this.j() && this.I && this.Xa && this.g.j() && this.H && this.o && (this.l.w(window, "resize", D(this.kb, this)), this.l.w(this, rb, D(this.pj, this)), this.Ya.length && (this.ie.apply(this, this.Ya), this.Ya = []))
    };
    v.ie = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
            var d = arguments[c];
            if (d) if (this.I || d.Sd) {
                var e = d;
                var g = Wf(ua, {"class": e.className || "activity-link"});
                rg(g, e.af || "");
                e = g;
                b.push(e);
                bg(d.Sd || this.I, e);
                d.jc && d.zb && (g = D(this.hi, this, d), this.l.w(e, Sa, g), d.Rd && this.l.w(this.H, d.Rd, g));
                d.id = d.id || ei(d);
                this.R[d.id] && this.Vg(d);
                this.R[d.id] = d;
                this.fb[d.id] = e
            } else this.Ya.push(d)
        }
        return b
    };
    v.Vg = function (a) {
        for (var b = 0; b < arguments.length; ++b) {
            var c = z(arguments[b]) || arguments[b] instanceof String ? arguments[b] : arguments[b].id, d = this.R[c],
                e = this.fb[c];
            d && e && (this.f && this.f.id === c && this.pe(), this.l.ca(d, [Wb, Na]), d.M(), this.X[c] && delete this.X[c], delete this.R[c], delete this.fb[c], fg(e))
        }
    };
    v.hi = function (a) {
        if (this.H) {
            a != this.f && this.f && (Ks(this.g), this.f.zb.call(this.f), this.f.j() && (this.f.j().style.display = q), Ms(this, !1), this.f = null);
            Ms(this, !0);
            Ks(this.g);
            this.f = a;
            if (this.X[a.id]) {
                var b = this.X[a.id];
                var c = a.Rb
            } else a.ga(), b = a.j(), c = a.jc, this.l.w(a, [Wb, Na], D(this.pe, this)), a.fd && (this.X[a.id] = b);
            bg(this.H, b);
            c.call(a, this);
            a = new Gs(b, 100);
            this.l.yb(a, $a, D(this.kb, this, !0, !0));
            a.play()
        }
    };
    v.pe = function () {
        if (this.f) if (Ks(this.g), this.f.zb.call(this.f), this.f.j()) {
            var a = new Fs(this.f.j(), 100);
            this.l.yb(a, $a, D(function () {
                fg(this.f.j());
                this.f = null;
                Ms(this, !1);
                xg(this.g.j()) && (Is(this.g), this.kb(!0, !0))
            }, this));
            a.play()
        } else Ms(this, !1), this.f = null
    };
    v.ff = function (a, b) {
        this.qb = a;
        Ls.m.ff.call(this, a, b);
        this.j().style.display = "block"
    };
    v.Me = function (a) {
        if (!this.C) {
            var b = Mo(this, a.target);
            this.Aa = b;
            this.Tb();
            b != this.b ? (this.b = b, No(this, b), Oo(this), Lo(this, a)) : No(this, b)
        }
    };
    v.pj = function () {
        Ks(this.g);
        this.$c && this.pe()
    };
    v.F = function () {
        for (var a in this.R) this.Vg(a);
        this.l && this.l.M();
        this.l = null;
        this.g && this.g.M();
        this.o = this.Xa = this.qb = this.H = this.I = this.g = null;
        Ls.m.F.call(this)
    };

    function Ms(a, b) {
        a.$c = b;
        a.C = b;
        if (a.C) {
            var c = a.j();
            a.qa = new L(c.offsetLeft, c.offsetTop)
        } else a.qa && (null != (a.s || null) && ((a.s || null).a = a.qa), Ig(a.j(), a.qa), a.qa = null);
        a.I.style.display = b ? q : "inline-block";
        a.Xa.style.display = b ? "inline-block" : q
    }

    v.Vc = function (a) {
        this.N() ? (this.uc = a, (this.uc ? this.h.w : this.h.ca).call(this.h, N(this.j()), Ab, this.kf, !0)) : Ls.m.Vc.call(this, a)
    };
    v.$b = function (a) {
        Ls.m.$b.call(this, a);
        if (a) {
            this.I = Of("activity-links", a);
            var b = Of(Ub, a);
            b && (this.g = new Hs, ki(this.g, b));
            this.Xa = Of("started-activity-container", a);
            this.H = Of("activity-root", a);
            this.o = Of("original-text", a)
        }
    };
    v.kb = function (a, b) {
        var c = Og(document.body).y;
        if (this.s) {
            (this.s || null).a.y += c;
            Ls.m.kb.call(this);
            var d = parseInt(this.j().style.left, 10);
            a = parseInt(this.j().style.top, 10) - (a ? 0 : c);
            b && (b = this.df || {}, a -= b.top || 10, d -= b.left || 10);
            a -= c;
            (this.s || null).a.y = a;
            (this.s || null).a.x = d;
            Ig(this.j(), new L(d, a))
        }
    };
    v.Qb = hc("a");
    v.ta = hc("c");
    v.Oa = function (a) {
        a = a ? Yc(a) : "";
        this.o ? rg(this.o, a) : Ls.m.Oa.call(this, a)
    };
    v.Vb = r("a");
    v.Wb = r("g");
    v.ya = r("c");
    v.Oc = function () {
        return this.o ? xg(this.o) : Ls.m.Oc.call(this)
    };
    v.ac = function (a) {
        this.C || Ls.m.ac.call(this, a)
    };
    v.Jd = function (a) {
        this.C || Ls.m.Jd.call(this, a)
    };
    v.Id = function (a) {
        this.C || Ls.m.Id.call(this, a)
    };
    var Ns = {
        set: function (a, b) {
            a.className = b
        }, get: function (a) {
            a = a.className;
            return z(a) && a.match(/\S+/g) || []
        }, add: function (a, b) {
            var c = Ns.get(a), d = Vc(arguments, 1), e = c.length + d.length;
            Ns.Pf(c, d);
            Ns.set(a, c.join(" "));
            return c.length == e
        }, remove: function (a, b) {
            var c = Ns.get(a), d = Vc(arguments, 1), e = Ns.cg(c, d);
            Ns.set(a, e.join(" "));
            return e.length == c.length - d.length
        }, Pf: function (a, b) {
            for (var c = 0; c < b.length; c++) Qc(a, b[c]) || a.push(b[c])
        }, cg: function (a, b) {
            return Lc(a, function (a) {
                return !Qc(b, a)
            })
        }, Kj: function (a, b,
                         c) {
            for (var d = Ns.get(a), e = !1, g = 0; g < d.length; g++) d[g] == b && (Uc(d, g--, 1), e = !0);
            e && (d.push(c), Ns.set(a, d.join(" ")));
            return e
        }, Pn: function (a, b, c) {
            var d = Ns.get(a);
            z(b) ? Rc(d, b) : C(b) && (d = Ns.cg(d, b));
            z(c) && !Qc(d, c) ? d.push(c) : C(c) && Ns.Pf(d, c);
            Ns.set(a, d.join(" "))
        }, has: function (a, b) {
            return Qc(Ns.get(a), b)
        }, enable: function (a, b, c) {
            c ? Ns.add(a, b) : Ns.remove(a, b)
        }, toggle: function (a, b) {
            var c = !Ns.has(a, b);
            Ns.enable(a, b, c);
            return c
        }
    };

    function Os(a, b) {
        ss.call(this, a);
        b = b || {};
        this.a = {Za: b.Za || "", Hb: b.Hb || 1};
        this.b = null
    }

    E(Os, ss);
    v = Os.prototype;
    v.ih = function (a, b) {
        b && (b.a = a, Eo(this.b, b))
    };
    v.jh = function (a) {
        a && Go(this.b, a)
    };
    v.Sj = function () {
        var a = this.b.qb;
        if (a && void 0 !== a.a) {
            var b = a.a;
            a = this.h.c[b];
            ts(this, this.f, !1);
            this.f = b;
            ts(this, b);
            this.b.Qb(a.Ij);
            this.b.ta(a.Tj);
            b = a.U;
            this.b.J = b && Yc(b);
            this.b.Oa(a.text)
        }
    };
    v.Rj = function () {
        ts(this, this.f, !1)
    };
    v.Qg = function () {
        this.h.c[this.f].Zh.dispatchEvent("updating")
    };
    v.F = function () {
        this.b.M();
        this.b = null;
        Os.m.F.call(this)
    };
    v.Bg = function (a, b) {
        Ns[b ? "add" : "remove"](a, "goog-text-highlight")
    };
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var Ps = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

    function Qs(a) {
        this.h = a;
        this.c = this.a = this.f = this.b = -1;
        this.g = !1;
        this.s = 0;
        this.o = "";
        this.B = 0
    }

    Qs.prototype.start = function () {
        if (!this.g) {
            this.g = !0;
            var a = [], b;
            var c = 62;
            for (b = 0; 15 > b; b++) a[b] = Ps[0 | Math.random() * c];
            this.o = a.join("");
            this.s = 0;
            this.c = this.a = this.f = this.b = -1;
            this.B = Dc();
            il(this.l, 1E4, this)
        }
    };
    Qs.prototype.stop = function () {
        this.g && (this.g = !1, Rs(this))
    };
    Qs.prototype.l = function () {
        this.g && (Rs(this), il(this.l, 1E3, this))
    };

    function Rs(a) {
        var b = a.h.f, c = a.h.h, d = a.h.c, e = a.h.g;
        if (a.b != b || a.f != c || a.a != d || a.c != e) {
            var g = {};
            g.ct = b;
            g.cv = c;
            g.cts = d;
            g.cvs = e;
            g.sid = a.o;
            g.seq = a.s++;
            g.tat = Dc() - a.B;
            if (0 <= a.b || 0 <= a.f || 0 <= a.a || 0 <= a.c) g.pt = a.b, g.pv = a.f, g.pts = a.a, g.pvs = a.c;
            Qq("te_v", g);
            a.b = b;
            a.f = c;
            a.a = d;
            a.c = e
        }
    };

    function Ss() {
        this.g = this.c = this.h = this.f = 0;
        this.a = [];
        this.b = null != w.IntersectionObserver ? new IntersectionObserver(D(this.l, this)) : null
    }

    Xq(36546, Ss.prototype, {Eg: 1});
    var Ts = "_gt_" + Math.random().toString(36).substr(2);
    Ss.prototype.reset = function () {
        this.g = this.c = this.h = this.f = 0;
        this.a = []
    };
    Ss.prototype.l = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (0 < c.intersectionRatio && null != c.target[Ts]) {
                this.h += xg(c.target).length;
                var d = c.target[Ts];
                this.g += this.a[d];
                this.a[d] = 0;
                c.target[Ts] = void 0
            }
        }
    };

    function Us(a, b) {
        R.call(this);
        a = a || {};
        this.a = Dd(a);
        this.a.Hb = a.Hb;
        this.a.Af = !!a.Af;
        this.a.Sh = parseInt(a.Sh, 10) || 300;
        this.a.uj = a.uj;
        this.a.Yc = a.Yc || !1;
        this.h = 0;
        this.c = {};
        this.l = new Uh(this);
        this.f = new Os(this, this.a);
        b && (this.f.g = b || {});
        a = this.f;
        a.b = new Ls({Hj: a.a.Hj});
        a.b.Ag = 300;
        a.b.eh = 1E3;
        a.b.Vc(!0);
        a.c.w(a.b, "show", D(a.Sj, a));
        a.c.w(a.b, rb, D(a.Rj, a));
        b = new qs({Za: a.a.Za, id: "alternate", af: Z.qh, fd: !0}, a.g);
        a.b.ie(b);
        a.c.w(b, Wb, D(a.Qg, a));
        a.a.Hb && (b = new rs({id: "contribute", Rd: Xa, fd: !0}, a.g), a.b.ie(b),
            a.c.w(b, Wb, D(a.Qg, a)));
        a.b.ga();
        this.g = this.b = null;
        this.a.Yc && null != w.IntersectionObserver && (this.b = new Ss, this.g = new Qs(this.b))
    }

    E(Us, R);

    function Vs(a, b, c, d, e, g) {
        d = a.c[++a.h] = {id: a.h.toString(), Zh: g, text: c, Wn: e || c, U: d, Ij: a.s, Tj: a.o, Ca: b};
        for (e = 0; e < b.length; ++e) b[e] && a.f.ih(d.id, b[e]);
        if (a.b) for (e = a.b, g = c.length, e.c += g, c = e.a.length, e.a.push(g), g = 0; g < b.length; ++g) {
            var h = e, k = b[g];
            jg(k) ? (k[Ts] = c, h.f += xg(k).length, h.b && h.b.observe(k)) : h.Eg(k.nodeType)
        }
        a.g && a.g.start();
        return d.id
    }

    function Ws(a) {
        a.g && a.g.stop();
        for (var b in a.c) {
            var c = a, d = b, e = c.c[d];
            if (e) {
                if (c.b) for (var g = c.b, h = e.Ca, k = 0; k < h.length; ++k) {
                    var l = g, m = h[k];
                    jg(m) ? (m[Ts] = void 0, l.b && l.b.unobserve(m)) : l.Eg(m.nodeType)
                }
                for (g = 0; g < e.Ca.length; ++g) e.Ca[g] && c.f.jh(e.Ca[g]);
                delete c.c[d]
            }
        }
        a.b && a.b.reset()
    }

    Us.prototype.F = function () {
        Ws(this);
        this.l.M();
        this.l = null;
        this.f.M();
        this.f = null
    };

    function Xs(a) {
        for (var b = 0; b < a.length; ++b) if (a[b] && a[b].node) return a[b].node;
        return null
    }

    function Ys(a) {
        var b = Xs(a);
        if (!b) return null;
        var c = [], d = [], e = [];
        b = new Lr(b, !0);
        var g = a[a.length - 1].node, h = 0, k = !1;
        do {
            b.next();
            var l = b.node();
            if (!l) break;
            var m = b.a.c, n = b.a.f;
            for (1 == m && --n; h < a.length && !a[h].node;) ++h;
            l == a[h].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !Zs($s(l))) ? (m = at(l), d.push({
                node: m,
                Oa: gc()
            }), e[d.length - 1] = n, dg(m, l), l == a[h].node && (c[h++] = d.length - 1, k = !0)) : k = !1
        } while (l != g);
        return {Gf: e, qj: c, Qi: d}
    }

    function Zs(a) {
        return null != a && Jr[a.tagName]
    }

    function $s(a) {
        if (null == a) return null;
        for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == Yc(xg(a));) a = a.previousSibling;
        return a
    }

    function bt(a, b, c, d, e, g) {
        $h.call(this);
        this.a = [];
        for (var h = 0; h < a.length; ++h) this.a.push("nodeType" in a[h] ? ct(a[h]) : a[h]), dt(a[h].node);
        this.f = b;
        this.G = d || 0;
        this.J = e || 0;
        this.l = c;
        this.s = g || null;
        this.C = this.B = this.I = !1;
        this.c = [];
        this.h = [];
        this.b = [];
        this.K = [];
        new Uh(this);
        this.g = this.H = !1
    }

    var ct;
    E(bt, $h);

    function et() {
        this.b = {};
        this.a = {}
    }

    et.prototype.has = function (a, b) {
        return null != this.b[a] || null != this.a[a] || b && (a in this.b || a in this.a)
    };
    et.prototype.write = function (a, b) {
        this.a[a] = b
    };
    et.prototype.remove = function (a) {
        delete this.a[a];
        delete this.b[a]
    };
    var ft = "_gt_" + Math.random().toString(36).substr(2), gt = "_gtn_" + Math.random().toString(36).substr(2);

    function ht(a) {
        if (!a) return !1;
        if (3 != a.nodeType || !G) return ft in a && !!a[ft];
        if (!a.parentNode) return !0;
        if (!(gt in a.parentNode)) return !1;
        var b = a.parentNode[gt];
        if (!b || !b[a.nodeValue]) return !1;
        b = b[a.nodeValue];
        for (var c = 0; c < b.length; ++c) if (b[c] == a) return !0;
        return !1
    }

    (function () {
        function a(a) {
            document.title = a
        }

        var b = {};
        ct = function (c, d) {
            if (c.tagName == wa) return {node: c, Oa: a, fe: !0, Cg: !0, Ef: !0};
            if (3 == c.nodeType) return {
                node: c, Oa: function (a, b) {
                    rg(b, a)
                }
            };
            d || (d = "value");
            b[d] || (b[d] = function (a, b) {
                b.setAttribute && b.setAttribute(d, a);
                z(a) && (b[d] = a)
            });
            c = {node: c, Oa: b[d], fe: !0};
            "value" != d && (c.Ef = !0);
            return c
        }
    })();

    function it(a, b) {
        if (!a) return "";
        if (a.tagName == wa) return String(document.title);
        3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
        return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : z(a[b]) ? String(a[b]) : ""
    }

    bt.prototype.da = r("f");

    function jt(a, b, c, d) {
        d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : xg(d);
        d = {S: c, U: kd(d)};
        a.push(d);
        b[c] ? b[c].end = d : b[c] = {start: d, end: d};
        return d
    }

    function kt(a, b, c) {
        b = {Rg: b, nf: c, aa: []};
        a.b.push(b);
        return b
    }

    function lt(a) {
        if (!a.g && a.I && !a.B && !a.C) {
            a.B = !0;
            var b;
            if (b = mt(a.a)) {
                b = a.a;
                var c = a.b;
                if (1 == b.length && b[0] && b[0].Ef) {
                    for (var d = [], e = 0; e < c.length; ++e) for (var g = 0; g < c[e].aa.length; ++g) d.push(c[e].aa[g].U);
                    b[0].Oa(d.join(" "), b[0].node);
                    b = !0
                } else b = !1;
                b = !b
            }
            if (b && (b = Ys(a.a))) {
                a.h = b.qj;
                a.c = b.Qi;
                d = a.a;
                e = a.h;
                g = a.c;
                var h = b.Gf;
                c = [];
                for (var k = 0; k < d.length; ++k) if (c[k] = [], d[k].node && x(e[k])) for (var l = 0; l < g.length; ++l) if (!(h[l] > h[e[k]])) {
                    if (h[l] == h[e[k]]) {
                        if (g[l].node.parentNode != g[e[k]].node.parentNode) continue
                    } else {
                        for (var m =
                            h[e[k]] - h[l], n = g[e[k]].node.parentNode; m-- && n && n != g[l].node.parentNode;) n = n.parentNode;
                        if (n != g[l].node.parentNode) continue
                    }
                    c[k].push(l)
                }
                d = a.a;
                e = a.b;
                g = -1;
                for (h = e.length - 1; 0 <= h; --h) for (k = e[h], l = k.aa.length - 1; 0 <= l; --l) if (m = k.aa[l], !(0 > m.S) && d[m.S] && d[m.S].node) if (0 > g) m.Nd = Gq(c[m.S]), g = c[m.S][c[m.S].length - 1]; else for (n = c[m.S].length - 1; 0 <= n; --n) if (c[m.S][n] <= g) {
                    m.Nd = Gq(c[m.S].slice(0, n + 1));
                    g = c[m.S][n];
                    break
                }
                for (c = e = 0; c < a.b.length; ++c) {
                    d = a.b[c];
                    g = a.a;
                    h = d;
                    k = b.Gf;
                    l = a.h;
                    m = "";
                    for (n = 0; n < h.aa.length; ++n) {
                        var t =
                            h.aa[n];
                        m += t.U;
                        if (0 > t.S) {
                            var y = -1, M = -1, Q = l[h.aa[n - 1].S];
                            x(Q) && (y = k[Q]);
                            n < h.aa.length - 1 && (Q = l[h.aa[n + 1].S], x(Q) && (M = k[Q]));
                            if (0 <= y || 0 <= M) a:if (M = (0 > y || M < y) && n < h.aa.length - 1, y = h.aa[M ? n + 1 : n - 1], !(y.S >= g.length) && null != g[y.S].node) {
                                Q = t.U;
                                t.U = "";
                                if (/^ +$/.test(Q) && (t = M ? y.U.charCodeAt(0) : y.U.charCodeAt(y.U.length - 1), 3584 <= t && 3711 >= t || 12288 <= t && 12351 >= t || 12352 <= t && 12543 >= t || 12784 <= t && 12799 >= t || 19968 <= t && 40959 >= t || 65280 <= t && 65519 >= t)) break a;
                                y.U = M ? Q + y.U : y.U + Q
                            }
                        }
                    }
                    g = m;
                    h = a.a;
                    k = d;
                    l = a.c;
                    m = b.Gf;
                    n = a.h;
                    t = [];
                    for (y = 0; y <
                    k.aa.length && !(e >= l.length); ++y) if (M = k.aa[y], M.Nd && !(0 > M.S) && h[M.S].node && M.U) if (e == n[M.S] || e in M.Nd && (!(e + 1 in M.Nd) || e + 1 != n[M.S])) {
                        if (l[e] && l[e].node) {
                            Q = at(l[e].node);
                            t.push(Q);
                            for (var na = l[e].node, zu = m[n[M.S]] - m[e], Fl = Q, Bi = h[M.S].node.parentNode, Ci = Fl; Bi && zu--;) Ci = Bi.cloneNode(!1), Ci.appendChild(Fl), Bi = Bi.parentNode, Fl = Ci;
                            na.appendChild(Ci);
                            na = h[M.S].node;
                            h[M.S].fe ? h[M.S].Cg || Q.appendChild(na) : (na = h[M.S].node.cloneNode(!1), na.id && (na.id = ""), Q.appendChild(na));
                            h[M.S].Oa(M.U, na)
                        }
                    } else ++e, --y;
                    h =
                        t;
                    t = a.a;
                    k = a.l;
                    if (d.Rg) k = d.Rg; else {
                        l = t.length;
                        m = -1;
                        for (n = 0; n < d.aa.length; ++n) y = d.aa[n].S, 0 <= y && t[y] && t[y].node && (m = Math.max(m, y), l = Math.min(l, y));
                        t = "";
                        for (n = l; n <= m; ++n) k[n] && (t += k[n]);
                        k = t
                    }
                    if (a.s) 3 != a.s.a.Hb && a.K.push(Vs(a.s, h, k, g, d.nf, a)); else for (d = 0; d < h.length; ++d) h[d].title = k
                }
                b = a.a;
                for (c = 0; c < b.length; ++c) b[c].node && !b[c].fe && fg(b[c].node);
                b = a.a;
                c = a.c;
                a = a.h;
                for (e = d = 0; e < c.length; ++e) if (g = c[e].node) {
                    for (; d < b.length && e > a[d];) d++;
                    (d >= b.length || e != a[d]) && !g.firstChild && (fg(g), c[e].node = null)
                }
            }
        }
    }

    bt.prototype.restore = function () {
        if (this.B) if (this.B = !1, this.s && Ws(this.s), this.K = [], mt(this.c), 1 == this.a.length && this.a[0].Ef) this.a[0].Oa(this.l[0], this.a[0].node); else {
            for (var a = 0, b = 0; b < this.c.length; ++b) {
                var c = this.c[b].node;
                if (c) {
                    for (; a < this.a.length && b > this.h[a];) {
                        var d = a++;
                        this.a[d].node && (nt(this.a[d].node), this.a[d].node = null)
                    }
                    if (a < this.a.length && b == this.h[a] && this.a[a].node) {
                        this.a[a].Cg || (cg(c), c.appendChild(this.a[a].node));
                        this.a[a].Oa(this.l[a], this.a[a].node);
                        a++;
                        d = c;
                        var e = d.parentNode;
                        if (e && 11 != e.nodeType) if (d.removeNode) d.removeNode(!1); else {
                            for (; c = d.firstChild;) e.insertBefore(c, d);
                            fg(d)
                        }
                    } else fg(c)
                }
            }
            this.c = []
        }
    };
    bt.prototype.F = function () {
        bt.m.F.call(this);
        this.restore();
        for (var a = 0; a < this.a.length; ++a) this.a[a].node && nt(this.a[a].node);
        this.a = null
    };

    function dt(a) {
        if (a) if (3 == a.nodeType && G) {
            gt in a.parentNode && a.parentNode[gt] || (a.parentNode[gt] = {});
            var b = a.parentNode[gt];
            b[a.nodeValue] || (b[a.nodeValue] = []);
            b = b[a.nodeValue];
            for (var c = 0; c < b.length; ++c) if (b[c] == a) return;
            b.push(a)
        } else a[ft] = 1
    }

    function nt(a) {
        if (!a || 3 == a.nodeType && G) {
            var b = a.parentNode;
            if (b && gt in b) {
                var c = b[gt];
                if (c && a && c[a.nodeValue]) {
                    var d = c[a.nodeValue];
                    if (d) for (var e = 0; e < d.length; ++e) if (d[e] == a) {
                        d.splice(e, 1);
                        break
                    }
                    0 == d.length && delete c[a.nodeValue]
                }
                if (c && Vq(c)) try {
                    delete b[gt]
                } catch (g) {
                    b[gt] = ""
                }
            }
        } else if (ft in a) try {
            delete a[ft]
        } catch (g) {
            a[ft] = ""
        }
    }

    function mt(a) {
        for (var b = 0; b < a.length; ++b) try {
            a[b].node && !a[b].node.parentNode && (a[b].node = null)
        } catch (c) {
            a[b].node = null
        }
        for (b = a.length - 1; 0 <= b && !a[b].node; --b) ;
        a.length = b + 1;
        return a.length
    }

    function at(a) {
        a = a.ownerDocument ? a.ownerDocument.createElement("font") : document.createElement("font");
        dt(a);
        a.style.verticalAlign = "inherit";
        return a
    }

    function ot(a) {
        for (var b, c = a.firstChild; c; c = b) b = c.nextSibling, 3 != c.nodeType && (c == a.firstChild ? dg(c, a) : eg(c, a), ot(c))
    };

    function pt(a, b, c, d, e) {
        b = b || {};
        this.wa = e || [];
        this.h = [];
        this.o = [];
        qt(this, a || document.documentElement, !x(b.Yg) || !!b.Yg);
        this.l = c || bt;
        this.C = b.Ti;
        this.c = this.a = this.g = this.Bc = null;
        this.s = !!b.Xj;
        this.H = !!b.Wj;
        this.I = this.s ? 27 : 13;
        this.G = !0;
        this.B = [];
        this.f = new lm(this, d)
    }

    Xq(5762, pt.prototype, {aj: 1});

    function rt(a, b, c, d) {
        a.f.c || (b = {
            lh: b,
            fh: c,
            Ca: [],
            Sg: [],
            Fb: [],
            be: 0,
            size: 0,
            continuous: !0
        }, a.Bc = null, om(a.f, a.b), pm(a.f, d), qm(a.f, D(function (a) {
            this.aj(a);
            d()
        }, a)), rm(a.f, b))
    }

    function st(a, b) {
        return 0 < a.Ca.length ? new b(a.Ca, a.Fb.join(""), a.Sg, a.be, a.size) : null
    }

    function tt(a, b) {
        if (!a.c) return a.Bc = st(b, a.l), !0;
        if (!b.continuous && 0 < b.Ca.length) return a.Bc = st(b, a.l), !0;
        b.continuous = a.c.Mg;
        a:{
            var c = a.c;
            var d = a.I;
            if (b.size > b.fh || b.be > b.lh) c = !1; else {
                var e = c.size, g = c.text.length;
                if (0 != b.Ca.length && (e += 1 == b.Ca.length ? b.size + d + d : b.size + d, g += b.be, e > b.fh || g > b.lh)) {
                    c = !1;
                    break a
                }
                b.size = e;
                b.be = g;
                b.Ca.push(c.node);
                b.Sg.push(c.text);
                d = b.Ca.length - 1;
                0 == d ? b.Fb.push(c.we) : (1 == d && (b.Fb[0] = "<a i=0>" + b.Fb[0] + "</a>"), b.Fb.push("<a i=" + d + ">"), b.Fb.push(c.we), b.Fb.push("</a>"));
                c = !0
            }
        }
        if (c) return a.c = null, !1;
        a.Bc = st(b, a.l);
        return !0
    }

    function ut(a, b, c) {
        var d = it(b, c);
        d && Yc(Wc(d)) && a.B.push({node: b, Lh: c, text: d})
    }

    pt.prototype.b = function (a, b) {
        if (this.c && tt(this, b)) return nm;
        if (!this.a) {
            this.G = !!this.h.length;
            if (!this.h.length && (a = this.B.shift())) return this.c = {
                Mg: !1,
                node: ct(a.node, a.Lh),
                text: a.text,
                we: cd(a.text),
                size: this.s ? ad(a.text).length : a.text.length
            }, b.continuous = !1, tt(this, b), nm;
            a = this.h.shift() || this.o.shift();
            if (!a) return this.c = null, tt(this, b), nm;
            this.g = [a.Uj];
            this.a = new Lr(a.root)
        }
        this.a.next();
        if (this.a.f) return this.a = null, b.continuous = !1, this.b;
        a = this.a.node();
        var c = this.a.a.c;
        if (-1 == c) {
            vt(this);
            if (!a || 3 != a.nodeType && !Hr[a.tagName]) b.continuous = !1;
            return this.b
        }
        var d = !ht(a) && (a.nodeType == Hc && wt(this) || !Ie(a, "notranslate") && (Ie(a, cc) || wt(this)));
        this.g.push(d);
        c = 1 == c;
        if (((d = !!a && (3 == a.nodeType && z(a.nodeValue) || a.tagName == wa && z(a.value) || a.tagName == va && Ie(a, cc) || a.tagName == oa && (Kr[a.type] || Ie(a, cc)))) || c) && this.G && !xt(a)) return qt(this, a, wt(this), !0), this.a.a.h(), vt(this), this.b;
        if (c && wt(this)) {
            this.H && ut(this, a, "title");
            ut(this, a, "alt");
            var e = this.a;
            if (e.b[e.b.length - 1]) for (e = a.firstChild; e;) {
                if (3 ==
                    e.nodeType) {
                    var g = e.nodeValue.split("\n");
                    if (2 < g.length || 2 == g.length && "" != Yc(g[0]) && "" != Yc(g[1])) {
                        e.nodeValue = g[0];
                        for (var h = 1; h < g.length; ++h) {
                            var k = N(a).createElement("font");
                            this.wa.push(k);
                            eg(k, e);
                            e = k;
                            eg(N(a).createTextNode("\n" + g[h]), e);
                            e = e.nextSibling
                        }
                    }
                }
                e = e.nextSibling
            }
        }
        if (d) {
            this.a.a.h();
            if (wt(this)) {
                var l = it(a);
                if (Yc(Wc(l)) && (this.c = {
                    Mg: !0,
                    node: ct(a),
                    text: l,
                    we: cd(l),
                    size: this.s ? ad(l).length : l.length
                }, tt(this, b))) return vt(this), nm
            }
            vt(this);
            return this.b
        }
        if (c) {
            if (yt(a) || !a.firstChild && a.tagName !=
                ma) return b.continuous = b.continuous && !!Jr[a.tagName], this.a.a.h(), vt(this), this.b;
            if (a.tagName == ma) {
                try {
                    if (!(l = !a.src.match(/https?:\/\//))) {
                        var m = a.src.match(xj)[3] || null;
                        l = (m ? decodeURI(m) : m) == window.location.hostname
                    }
                    if (l) {
                        var n = pg(a).documentElement;
                        n && qt(this, n, wt(this))
                    }
                } catch (t) {
                }
                b.continuous = !1;
                this.a.a.h();
                vt(this);
                return this.b
            }
            wt(this) && a && (3 == a.nodeType || Hr[a.tagName]) ? this.C && "A" == a.tagName && a.href && this.C(a) : b.continuous = !1;
            return this.b
        }
        this.a.a.h();
        vt(this);
        return this.b
    };

    function yt(a) {
        return ht(a) || 3 != a.nodeType && (!a.tagName || Ir[a.tagName] || Jr[a.tagName] || Ie(a, Tb) || "gts-order" == a.id)
    }

    function xt(a) {
        if (3 == a.nodeType) return !0;
        if (1 != a.nodeType) return !1;
        if (!a.offsetWidth || !a.offsetHeight) {
            var b = N(a), c = null;
            b.defaultView && b.defaultView.getComputedStyle ? c = b.defaultView.getComputedStyle(a, null) : c = a.currentStyle;
            return c && c.display != q && c.visibility != qb
        }
        return !0
    }

    function qt(a, b, c, d) {
        (d ? a.o : a.h).push({root: b, Uj: !x(c) || c})
    }

    function wt(a) {
        return a.g[a.g.length - 1]
    }

    function vt(a) {
        a.g.pop()
    };

    function zt() {
        R.call(this);
        this.a = []
    }

    E(zt, R);
    zt.prototype.restore = function () {
        il(this.b, 0, this)
    };
    zt.prototype.b = function () {
        for (var a = 0; a < this.a.length; ++a) fg(this.a[a]);
        this.a = []
    };
    zt.prototype.F = function () {
        zt.m.F.call(this);
        this.restore()
    };

    function At(a) {
        var b = new Bo;
        wj(a, function (a) {
            if (jg(a)) b.add(a); else {
                a:{
                    var c;
                    if (Pe && !(G && J("9") && !J("10") && w.SVGElement && a instanceof w.SVGElement) && (c = a.parentElement)) {
                        a = c;
                        break a
                    }
                    c = a.parentNode;
                    a = jg(c) ? c : null
                }
                null != a && b.add(a)
            }
        });
        return b
    };

    function Bt(a) {
        this.b = !0;
        this.f = a;
        this.c = !1;
        this.a = []
    }

    Bt.prototype.da = function () {
        return this.a.join("")
    };

    function Ct(a, b) {
        this.g = a;
        this.f = !0;
        this.c = b;
        this.a = null;
        this.b = 0
    }

    function Dt(a, b) {
        return a.f ? (b(D(a.h, a), a.g, a.c ? "en" : ""), !0) : !1
    }

    Ct.prototype.h = function (a, b, c) {
        this.a = b;
        this.b = c;
        a()
    };

    function Et(a, b) {
        this.f = a;
        this.o = !!b;
        this.b = this.s = 0;
        this.g = this.c = -1;
        this.h = this.l = this.a = 0
    }

    var Ft = Gq(". , ; : \\? !".split(" ")),
        Gt = Gq([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

    function Ht(a, b, c) {
        a.o && (b -= 9);
        for (var d = "", e = 0, g = a.s; g < a.f.length; ++g) {
            var h = a.f.charAt(g), k = h.charCodeAt(0);
            e++;
            a.a += a.o ? 127 >= k ? 32 >= k || Gt[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
            k = a.a >= b;
            Ft[h] ? (a.g = g, a.l = a.a, k = k || e > c) : " " == h && (a.c = g, a.h = a.a, k = k || e > c);
            if (k) return 0 <= a.g ? (d = a.f.substring(a.b, a.g + 1), a.a -= a.l, a.b = a.g + 1, a.g >= a.c ? (a.c = -1, a.h = 0) : a.h -= a.l, a.g = -1, a.l = 0) : 0 <= a.c ? (d = a.f.substring(a.b, a.c + 1), a.a -= a.h, a.b = a.c + 1, a.c = -1, a.h = 0) : (d = a.f.substring(a.b, g + 1), a.a = 0, a.b = g + 1, a.g = a.c =
                -1, a.h = a.l = 0), a.s = g + 1, d
        }
        a.b < a.f.length && (d = a.f.substring(a.b), a.b = a.f.length);
        return d
    };

    function It(a, b, c, d, e, g) {
        this.l = d || A;
        this.X = g || A;
        this.K = !!e;
        this.c = a.a.Kg;
        this.f = 0;
        this.G = A;
        this.C = c;
        this.o = this.b = this.g = 0;
        this.a = null;
        this.I = 0;
        this.pa = !1;
        this.ia = a.a.Ig;
        this.J = [];
        this.H = 0;
        this.h = (this.R = a.a.ue) ? a.a.ef - (new zj(a.a.ra.b)).toString().length : a.a.ef;
        this.xa = this.K ? 1 : 6;
        this.Ia = a.a.$g;
        this.wa = b;
        this.s = [];
        this.fa = a
    }

    function Jt(a, b) {
        var c = 0;
        a.G = D(function () {
            ++c == this.s.length && b()
        }, a)
    }

    function Kt(a, b, c) {
        if (0 == a.b && (a.b = b ? 860 : a.h, !c || c <= a.h)) {
            a.g = a.b;
            return
        }
        do b = a.b, a.b < a.h && (a.b *= a.xa, a.b > a.h && (a.b = a.h)); while (b != a.b && c && a.b < c);
        a.g = a.b
    }

    function Lt(a, b) {
        var c = null != b, d = !c && !a.pa;
        (d || c) && a.l(100, d, b)
    }

    function Mt(a) {
        return a.R ? a.a.J : a.a.da().length
    }

    function Nt(a, b, c, d, e) {
        return new pt(a.wa.shift(), {Xj: a.R, Ti: b, Yg: !0, Wj: !!c}, function () {
            var a = Array.prototype.slice.call(arguments);
            return new bt(a.shift(), a.shift(), a.shift(), a.shift(), a.shift(), c, d)
        }, a.C, e)
    }

    function Ot(a, b, c) {
        if (0 < a.ia && Pt(b) >= a.ia) return !0;
        if (Mt(a) > a.b) {
            if (0 < Pt(b)) return !0;
            Kt(a, c, Mt(a));
            for (var d = a.a.da(), e = new Et(d, a.R), g; g = Ht(e, a.b, a.c);) if (b.g.push(new Ct([g], !1)), a.f += g.length, a.c -= g.length, 0 >= a.c) {
                b.B = d.substring(e.b);
                break
            } else Kt(a, c);
            Qt(b, a.a, !0);
            a.a = null;
            return !0
        }
        if (Mt(a) > a.g) return !0;
        Qt(b, a.a, !0);
        a.g -= Mt(a) + a.Ia;
        a.f += a.a.G;
        a.c -= a.a.G;
        a.a = null;
        return !1
    };

    function Rt(a, b) {
        R.call(this);
        this.f = b;
        this.b = {rootMargin: a};
        this.a = new IntersectionObserver(D(this.c, this), this.b)
    }

    E(Rt, R);
    Rt.prototype.F = function () {
        Rt.m.F.call(this);
        this.a = null
    };
    Rt.prototype.c = function (a) {
        for (var b = 0; b < a.length; b++) if (0 < a[b].intersectionRatio) {
            this.f();
            break
        }
    };

    function St() {
        T.call(this)
    }

    E(St, T);
    St.prototype.D = function () {
        this.T(Zj(Yr))
    };
    St.prototype.T = hc("A");

    function Tt(a) {
        Ke(a.j(), pb);
        Ke(a.j().firstChild, ob)
    };

    function Ut() {
        this.a = new St;
        this.a.D();
        this.a.ga();
        this.b = 0
    }

    Ut.prototype.reset = function () {
        this.b = 0;
        Tt(this.a)
    };

    function Vt(a, b, c, d, e, g, h, k) {
        this.g = a;
        this.b = b;
        this.s = [];
        this.B = null;
        this.f = c;
        this.a = d;
        this.c = e;
        this.wa = g;
        this.H = h;
        this.o = this.h = null;
        this.l = k || null;
        this.I = this.C = !1;
        this.G = {}
    }

    function Wt(a) {
        for (var b = new Bo, c = 0; c < a.length; c++) {
            for (var d = a[c], e = new Bo, g = 0; g < d.a.length; g++) {
                var h = d.a[g].node;
                null != h && e.add(h)
            }
            d = b;
            e = vj(e);
            g = e.length;
            for (h = 0; h < g; h++) d.add(e[h])
        }
        return b
    }

    v = Vt.prototype;
    v.Yc = function (a) {
        a = this.h = new Rt("200px", D(this.Fi, this, a));
        var b = At(Wt([].concat(this.b, this.s)));
        wj(b, D(a.a.observe, a.a));
        a = this.o = new Rt("0px", D(this.Ji, this));
        b = At(Wt([].concat(this.b, this.s)));
        wj(b, D(a.a.observe, a.a))
    };
    v.Fi = function (a) {
        this.h && (this.h.a.disconnect(), this.h = null);
        a()
    };
    v.Ji = function () {
        this.C = !0;
        Xt(this);
        if (!this.I && this.l) {
            var a = this.l;
            0 == a.b++ && (a = a.a, K(a.j(), pb), K(a.j().firstChild, ob))
        }
    };

    function Xt(a) {
        a.o && (a.o.a.disconnect(), a.o = null)
    }

    v.hh = function () {
        if (this.C && !this.I && this.l) {
            var a = this.l;
            0 == --a.b && Tt(a.a)
        }
        this.h && (this.h.a.disconnect(), this.h = null);
        Xt(this)
    };

    function Qt(a, b, c) {
        c ? (a.b.push(b), a.G[b.da()] = !0) : a.s.push(b)
    }

    function Pt(a) {
        return a.b.length + a.s.length
    }

    function Yt(a) {
        if (0 == a.g.length) {
            for (var b = [], c = 0; c < a.b.length; ++c) b.push(a.b[c].da());
            a.g.push(new Ct(b, !1))
        }
    }

    v.translate = function (a) {
        function b() {
            d++;
            d == c && e()
        }

        Yt(this);
        for (var c = 0, d = 0, e = A, g = this.f, h = this.a, k = this.c, l = this.wa, m = this.H, n = 0; n < this.g.length; ++n) Dt(this.g[n], function (a, c, d) {
            a = g.fa.translate(Cc(a, b), c, d || h, k, ++g.H, l, m, g.K);
            g.J.push(a);
            return a
        }) && c++;
        0 != c && (e = sm(a));
        return c
    };

    function Zt(a, b) {
        R.call(this);
        this.b = [];
        this.f = [];
        this.a = a;
        this.c = b
    }

    E(Zt, R);
    Zt.prototype.g = function (a) {
        var b = Yc(a.href);
        0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.f.push(a.href), this.b.push(a), a.href = b + "#googtrans/" + this.a + "/" + this.c)
    };
    Zt.prototype.F = function () {
        Zt.m.F.call(this);
        this.restore()
    };
    Zt.prototype.restore = function () {
        if (this.b.length) {
            for (var a = 0; a < this.b.length; ++a) this.b[a].href = this.f[a];
            this.b = [];
            this.f = []
        }
    };

    function $t(a, b) {
        R.call(this);
        this.b = a;
        this.a = Ve.test(b) ? "translated-rtl" : "translated-ltr";
        a = [].concat(this.b);
        for (b = 0; b < a.length; ++b) jg(a[b]) && K(a[b], this.a)
    }

    E($t, R);
    $t.prototype.F = function () {
        $t.m.F.call(this);
        this.restore()
    };
    $t.prototype.restore = function () {
        for (var a = [].concat(this.b), b = 0; b < a.length; ++b) jg(a[b]) && Ke(a[b], this.a)
    };

    function au(a, b, c, d, e, g, h, k, l, m) {
        R.call(this);
        this.B = a;
        this.Hh = b;
        this.fa = c || null;
        this.xa = m || null;
        this.C = null;
        this.qb = !!d;
        this.$c = e || "transparent";
        this.Eb = !!g;
        this.o = [];
        this.fb = this.G = this.b = !1;
        this.l = k || new et;
        this.Of = !k;
        this.qa = h || hm.Y();
        this.Ia = new zt;
        this.X = this.R = this.I = !1;
        this.Xa = this.f = .5;
        this.Ya = .01;
        this.s = new im(this.f);
        this.J = (this.h = this.pa = !!l) ? new MutationObserver(D(this.Ai, this)) : null;
        this.c = this.a = null;
        S(window, Ka, this.xg, !0, this);
        S(window, cb, this.yg, !0, this)
    }

    E(au, R);
    Xq(3046, au.prototype, {Xi: 1, Zi: 2, Yi: 3, $i: 4});
    v = au.prototype;
    v.Vh = function (a) {
        this.Xi.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    v.Zf = function (a) {
        this.Yi.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    v.Wh = function (a) {
        this.Zi.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    v.Xh = function (a) {
        this.$i.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    };
    v.translate = function (a, b, c, d, e) {
        if (d || a != this.a || b != this.c) bu(this), this.Of && (this.l = new et); else if (this.b) return;
        this.g = c;
        this.ad = e;
        this.h = this.pa && !0;
        this.J && this.J.observe(document.body, {attributes: !0, childList: !0, characterData: !0, subtree: !0});
        this.b = !0;
        this.a = a;
        this.c = b;
        this.qb && (this.C = new Zt(a, b));
        this.X = this.a == Ha;
        this.fa && (c = this.fa, a && (c.s = a), b && (c.o = b));
        this.ia = new $t(this.B, this.c);
        this.H = cu(this);
        (a = this.B instanceof Node ? this.B : null) && du(a, this.c)
    };

    function cu(a) {
        var b = new lm(a, a.qa);
        om(b, a.tg);
        qm(b, D(a.Vh, a));
        rm(b, new It(a.Hh, [].concat(a.B), a.qa, a.g, a.h, a.ad));
        return b
    }

    v.restore = function () {
        bu(this);
        this.Ia.restore();
        var a = this.B instanceof Node ? this.B : null;
        a && du(a, this.a)
    };
    v.F = function () {
        au.m.F.call(this);
        this.restore();
        Oh(window, Ka, this.xg, !0, this);
        Oh(window, cb, this.yg, !0, this)
    };

    function eu(a, b, c, d) {
        var e = Vq(a.l.b), g = new lm(a, b.C);
        b.s.push(g);
        pm(g, b.G);
        Kt(b, e);
        om(g, d || a.pg);
        b = c || new Vt([], [], b, a.a, a.c, a.fb, a.G, a.xa);
        qm(g, a.Gi, a);
        a.h && pm(g, b.hh, b);
        rm(g, b)
    }

    v.Gi = function (a, b, c) {
        c.hh();
        this.G ? this.Xh(a) : this.Wh(a);
        c.f.G()
    };
    v.yg = function () {
        this.I = !1;
        this.K = 0;
        jm(this.s, this.f)
    };
    v.xg = function (a) {
        a.target == window && (this.I = !0, this.K = 0, jm(this.s, .01))
    };
    v.Ai = function (a) {
        if (this.b && this.h) {
            for (var b = 0; b < a.length; b++) if (a[b].target && a[b].target.className && (0 <= a[b].target.className.indexOf(cc) || 0 == a[b].target.className.indexOf("goog-"))) return;
            this.qa.add(D(this.zj, this))
        }
    };
    v.zj = function () {
        this.G = !0;
        this.H.stop();
        this.H = cu(this);
        return !1
    };
    v.tg = function (a, b) {
        Jt(b, sm(a));
        eu(this, b);
        return this.Li
    };
    v.Li = function (a, b) {
        if (!this.b) return nm;
        if (!tm(a)) return mm;
        if (!this.h) for (a = 0; a < this.o.length; ++a) {
            var c = D(this.Qf, this, b, this.o[a]);
            b.C.add(c)
        }
        return this.Ki
    };
    v.mg = function (a, b) {
        if (this.K && !this.I) {
            a = (new Date).getTime() - this.K;
            var c = this.f;
            900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
            this.f = c;
            this.R ? this.Ya = .01 : this.Xa = this.f
        }
        this.G = this.b = !0;
        this.K = (new Date).getTime();
        this.bd != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.bd = a, a = !0) : a = !1;
        a ? (this.R = !1, this.f = this.Xa, this.I || jm(this.s, this.f), a = [].concat(this.B), c = this.s, b.l = A, b.wa = a, b.a = null, b.H = 0, b.s = [], b.G = A, b.C = c, a = new lm(this, this.s),
            om(a, this.tg), qm(a, D(this.Zf, this)), rm(a, b), this.H = a) : (this.R = !0, this.f = this.Ya, this.I || jm(this.s, this.f), a = new lm(this, this.s), om(a, this.mg), qm(a, D(this.Zf, this)), rm(a, b), this.H = a);
        return nm
    };
    v.Ki = function (a, b) {
        if (!this.b) return nm;
        this.G = this.b = !1;
        this.X ? Lt(b, !0) : (Lt(b), b.X(b.f));
        if (this.Eb) return this.mg;
        for (a = 0; a < b.s.length; ++a) b.s[a].stop();
        for (a = 0; a < b.J.length; ++a) Gr(b.fa, b.J[a]);
        return nm
    };

    function fu(a, b, c) {
        a:{
            var d = a.qb ? D(a.C.g, a.C) : A, e = a.fa, g = a.$c, h = a.Ia.a;
            b = sm(b);
            if (!c.B) {
                if (0 == c.wa.length) {
                    0 == c.f && 0 == c.H && c.l(0, !0);
                    c = !1;
                    break a
                }
                c.B = Nt(c, d, e, g, h)
            }
            c.qa = !0;
            rt(c.B, c.c, c.b, b);
            c = !0
        }
        return c ? a.pg : a.Fd
    }

    v.pg = function (a, b) {
        if (!this.b) return nm;
        var c = b.f;
        if (null == c.a) {
            if (!c.qa) return fu(this, a, b.f);
            if (!tm(a)) return mm;
            c.qa = !1;
            c.a = c.B.Bc || null;
            var d = c.a ? c.a : c.B = null;
            if (!d) return fu(this, a, b.f);
            this.o.push(d);
            var e = d.da();
            if (this.l.has(e, !this.h) || null != b.G[e] && b.G[e]) return e = c.a.G, c.f += e, c.c -= e, c.a = null, this.h && Qt(b, d, !1), fu(this, a, b.f);
            this.l.a[d.da()] = null
        }
        0 < Pt(b) && jm(this.s, .5);
        return Ot(c, b, Vq(this.l.b)) ? this.Fd : fu(this, a, b.f)
    };
    v.Fd = function (a, b) {
        if (!this.b || 0 == Pt(b)) return nm;
        eu(this, b.f);
        return this.h ? (b.Yc(sm(a)), this.Mi) : 0 == b.translate(a) ? nm : this.sg
    };
    v.Mi = function (a, b) {
        return this.b ? tm(a) ? 0 == b.translate(a) ? nm : this.sg : mm : nm
    };
    v.Qf = function (a, b) {
        b.g && this.l.remove(b.f);
        if (!this.b) return !1;
        if (this.l.has(b.da(), !1)) {
            var c = this.l;
            if (c.has(b.f, !1)) {
                var d = b.f, e = c.a[d];
                e || (e = c.b[d], c.a[d] = e);
                b.b = e;
                b.I = !0
            } else c.remove(b.f), b.g = !0;
            lt(b)
        } else if (c = this.l, b.g) c.remove(b.f); else if (b.o) {
            d = b.o.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
            b.I = !0;
            delete b.o;
            b.o = null;
            b.b = [];
            e = document.createElement("div");
            P(e, !1);
            e.innerHTML = 0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>";
            document.body.appendChild(e);
            d = [];
            var g;
            for (g = e.firstChild; g; g = g.nextSibling) if ("I" ==
                g.tagName) var h = kt(b, xg(g), g.innerHTML); else if ("B" == g.tagName) {
                h || (h = kt(b, "", ""));
                if (1 == b.a.length) jt(h.aa, d, 0, g); else {
                    var k = d;
                    var l = g;
                    var m = b.a;
                    h = h.aa;
                    for (var n = [], t, y = l.firstChild; y; y = t) t = y.nextSibling, ot(y);
                    for (t = l.firstChild; t; t = t.nextSibling) t.attributes && t.attributes.i ? (l = parseInt(t.attributes.i.nodeValue, 10), !isNaN(l) && 0 <= l && l < m.length && (m[l].fe && n[l] ? n[l].U += t.firstChild && 3 == t.firstChild.nodeType ? t.firstChild.nodeValue : xg(t) : n[l] = jt(h, k, l, t))) : 3 == t.nodeType && h.push({
                        S: -1,
                        U: kd(t.nodeValue)
                    });
                    null != h && 0 < h.length && -1 == h[0].S && (1 == h.length ? h[0].S = 0 : (h[1].U = h[0].U + h[1].U, h.shift()))
                }
                h = void 0
            }
            g = b.b;
            for (k = 0; k < g.length - 1; ++k) m = g[k], h = $c(m.aa[m.aa.length - 1].U), h = h.charCodeAt(h.length - 1), 12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.aa[m.aa.length - 1].U += " ");
            fg(e);
            for (e = 0; e < b.a.length; ++e) e < d.length && e < b.l.length && null != d[e] && (g = b.l[e], k = d[e].start, null != k && (m = g.substring(0, g.length - Zc(g).length), " " == m && (m = ""), m && (k.U = m + Zc(k.U))), k = d[e].end, null != k && (g = g.substring($c(g).length), " " == g && (g = ""), g &&
            (k.U = $c(k.U) + g)));
            1 != b.b.length || b.b[0].nf || (b.b[0].nf = b.f);
            c.write(b.f, b.b);
            lt(b)
        }
        b.H || (this.X = !1);
        c = b.g ? !0 : void 0;
        a.I += b.G;
        null != c && (a.pa = !0);
        b = Math.min(Math.floor(100 * a.I / a.f), 100);
        if (a.o != b || c) a.o = b, a.K ? (a.l(a.o, !0, c), a.X(a.I)) : a.l(a.o, !1, c);
        return !1
    };
    v.sg = function (a, b) {
        if (!this.b) return nm;
        if (!tm(a)) return mm;
        if (1 < Pt(b)) {
            a = b.g[0];
            var c = b.b;
            if (a.c || 0 == c.length || null == a.a || 0 == a.a.length) a = null; else {
                for (var d = [], e = [], g = 0; g < a.a.length && g < c.length; ++g) {
                    var h = a.a[g];
                    h && h[0] && 200 == h[1] || (e.push(c[g]), d.push(a.g[g]))
                }
                a = 0 < e.length ? {Bj: new Ct(d, !0), Cj: e} : null
            }
            a = a ? new Vt([a.Bj], a.Cj, b.f, b.a, b.c, b.wa, b.H, b.l) : null;
            null != a && eu(this, b.f, a, this.Fd)
        } else {
            a = !1;
            for (c = 0; c < b.g.length; ++c) d = b.g[c], d.c || 200 == d.b && d.a && d.a[0] ? d = d.f = !1 : (d.c = !0, d = d.f = !0), a = d || a;
            if (a) return this.Fd
        }
        d =
            this.a;
        a = this.c;
        if (1 < b.b.length) if (c = b.g[0], e = d == Ha, d = b.b, 200 == c.b) for (g = 0; g < c.a.length && g < d.length; ++g) if ((h = c.a[g]) && 200 == h[1]) {
            var k = h[2], l = d[g], m = l, n = null != k && k == a;
            m.o = h[0];
            x(n) && (m.C = n);
            l.H = e && null == k
        } else d[g].g = !0; else for (a = 0; a < d.length; ++a) d[a].g = !0; else {
            c = new Bt(d == Ha);
            for (d = 0; d < b.g.length; ++d) h = b.g[d], e = a, g = c, 200 == h.b && h.a && h.a[0] ? (h = h.a[0], g.a.push(h[0]), h = h[2], g.b = g.b && null != h && h == e, null != h && (g.f = !1)) : 500 != h.b && (g.c = !0);
            null != b.B && (c.a.push(b.B), b.B = null);
            if (a = b.b[0]) d = c.b, a.o = c.da(),
            x(d) && (a.C = d), a.H = c.f, a.g = c.c
        }
        if (this.h) {
            a = D(this.Qf, this);
            for (c = 0; c < b.b.length; c++) a(b.f, b.b[c]);
            for (c = 0; c < b.s.length; c++) a(b.f, b.s[c]);
            Xt(b);
            b.I = !0;
            b.C && b.l && (b = b.l, 0 == --b.b && Tt(b.a))
        }
        return nm
    };

    function bu(a) {
        a.J && a.J.disconnect();
        a.xa && a.xa.reset();
        a.b && (a.H.stop(), a.b = !1, a.G = !1);
        if (a.o.length) {
            for (var b = 0; b < a.o.length; ++b) a.o[b].M();
            a.o = []
        }
        null != a.C && (a.C.restore(), a.C = null);
        null != a.ia && (a.ia.restore(), a.ia = null)
    }

    function du(a, b) {
        a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
        a.getAttribute("lang") && a.setAttribute("lang", b)
    };

    function gu(a, b, c, d, e, g, h, k, l, m) {
        R.call(this);
        this.I = b || null;
        this.K = !!c;
        this.C = d || "transparent";
        this.g = g || "";
        b = h || {fetchStart: 0, Tn: 0};
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.G = a && b ? b - a : 0;
        this.J = Dc() - rq;
        this.l = !1;
        this.b = new Br(e || "", void 0, g, l, m);
        this.H = new im(1);
        this.s = new et;
        this.f = null;
        this.h = !0;
        this.o = null != w.IntersectionObserver;
        this.B = k || null;
        new Uh(this);
        e = new Hq;
        g = new Jq(D(this.b.g, this.b, e.register()));
        this.sd = Kq(g, e.delay(D(this.sd, this)));
        this.od = Kq(g, e.delay(D(this.od, this)));
        this.ee = Kq(g,
            e.delay(D(this.ee, this)));
        this.restore = Kq(g, e.delay(D(this.restore, this)));
        g.finish();
        e.finish()
    }

    E(gu, R);
    Xq(14097, gu.prototype, {
        bf: function () {
            Qq(this.b.c ? "te_afas" : "te_afau")
        }
    });
    v = gu.prototype;
    v.Ua = function () {
        return this.b.c
    };
    v.sd = function (a, b) {
        if (this.b.Ua()) {
            var c = this.b, d = {alpha: !0};
            b && (d.hl = b);
            c.f.send(d, a)
        } else this.bf(), a(null)
    };
    v.od = function (a) {
        var b = document.documentElement.lang;
        if (b) a(b); else if (this.b.Ua()) {
            var c = new Ym(document.body, !1, !1, 1, 1);
            b = [];
            try {
                for (var d = 0, e = this.b.b.Jg; b.length + d < e;) {
                    var g = c.next();
                    if (1 == c.c && yt(g)) c.h(); else if (3 == g.nodeType) {
                        var h = Yc(Wc(g.nodeValue));
                        h && (b.push(h), d += h.length)
                    }
                }
            } catch (k) {
                if (k != mj) throw k;
            }
            e = this.b;
            b = b.join(" ");
            a = e.b.hd(a);
            e.b.ra.send({q: b.substring(0, e.b.Jg), sl: Ha, tl: "en"}, a)
        } else this.bf(), a(null, !0)
    };
    v.ee = function (a, b, c, d, e) {
        var g = Dc();
        Yq();
        if (!a || Wq(a, b)) a = Ha;
        if (e || a != this.a || b != this.c) this.s = new et;
        this.a = a;
        this.c = b;
        this.b.Ua() ? (d = d || document.documentElement, this.f && this.f.M(), this.B.reset(), this.f = new au(d, this.b, this.I, this.K, this.C, !0, this.H, this.s, this.o, this.B), this.f.fb = this.l, this.h = !0, this.f.translate(a, b, c, e, D(this.cj, this, g, a, b))) : (this.bf(), c(0, !1, !0))
    };
    v.Lj = function () {
        return !!this.f && this.f.b
    };
    v.bh = hc("l");
    v.restore = function () {
        Yq();
        this.b.Ua() && this.f && this.f.restore()
    };
    v.F = function () {
        Zq();
        gu.m.F.call(this);
        this.b.M();
        this.f = this.b = null;
        this.s = new et
    };
    v.cj = function (a, b, c, d) {
        this.h && (this.h = !1, b = {
            sl: b,
            tl: c,
            textlen: d
        }, this.l && (b.ctt = "1"), "" != this.g && (b.sp = this.g), 0 != this.g.indexOf("nmt") && (b.sp = "" != this.g ? "nmt," + this.g : "nmt"), b.ttt = Dc() - a, b.ttl = this.J, this.G && (b.ttf = this.G), this.o && (b.sr = 1), Qq("te_time", b))
    };

    function hu(a) {
        T.call(this, a);
        this.l = new Uh(this)
    }

    E(hu, T);
    v = hu.prototype;
    v.D = function () {
        var a = Ag(this.b, "select");
        a.className = "goog-te-combo";
        a.setAttribute("aria-label", Z.Lf);
        this.T(a)
    };
    v.P = function () {
        hu.m.P.call(this);
        this.Yf()
    };
    v.Yf = function () {
        S(this.j(), Oa, Nq(this, Oa));
        this.dispatchEvent(zb)
    };
    v.$ = function () {
        hu.m.$.call(this);
        this.l.M();
        this.l = null
    };

    function iu(a, b) {
        a.j().parentNode != b && (a.j().parentNode.removeChild(a.j()), b.appendChild(a.j()))
    }

    v.Wc = function (a) {
        this.b.Tc(this.j());
        for (var b in a) if (a[b] !== Object.prototype[b]) {
            var c = this.b.D(qa, {value: b});
            this.b.eb(c, a[b]);
            this.j().appendChild(c)
        }
        this.j().selectedIndex = 0
    };
    v.Ba = function () {
        return this.j().value
    };
    v.za = function (a) {
        if (this.j().value != a) for (var b = 0, c; c = this.j().options.item(b); ++b) if (c.value == a) {
            this.j().selectedIndex = b;
            break
        }
    };
    v.ae = function (a) {
        if ("undefined" == B(a)) return this.j().options.item(this.j().selectedIndex).text;
        for (var b = 0, c; c = this.j().options.item(b); ++b) if (c.value == a) return c.text
    };
    v.ma = function (a) {
        this.j().disabled = !a
    };

    function ju(a) {
        hu.call(this, a)
    }

    E(ju, hu);
    ju.prototype.Bb = function (a) {
        this.Wc.call(this, a)
    };

    function ku(a, b) {
        hu.call(this, b);
        this.a = a && Dd(a) || {};
        this.a.tf = this.a.tf || 11;
        this.a.Yd = 0 != this.a.Yd;
        this.a.va || (this.a.va = Cq)
    }

    E(ku, hu);
    v = ku.prototype;
    v.jd = function () {
        throw Error("Not implemented.");
    };
    v.D = function () {
        this.jd();
        this.o = this.j();
        this.f = Wf(ma, {frameBorder: 0, "class": "goog-te-menu-frame skiptranslate", title: Z.Lf});
        this.f.style.visibility = ec;
        P(this.f, !1);
        document.body.appendChild(this.f)
    };
    v.Yf = function () {
        var a = {dir: Ve.test(oq) ? Rb : "ltr", va: this.a.va, id: V(this, "menuBody")};
        this.l.w(this.f, zb, this.Qj);
        Rq(this.f, D(function () {
            var b = pg(this.f);
            b.write(Or(a));
            b.close()
        }, this))
    };
    v.Qj = function () {
        this.c = new Jf(pg(this.f));
        this.K = this.c.j(V(this, "menuBody"));
        this.l.w(this.o, Sa, this.Pe);
        G ? this.l.w(this.f, Ka, this.Ed) : this.l.w(qg(this.f), Ka, this.Ed);
        this.dispatchEvent(zb)
    };
    v.$ = function () {
        ku.m.$.call(this);
        fg(this.f);
        this.o = this.R = this.h = this.K = this.c = this.f = null
    };
    v.qg = function (a) {
        this.g != a.currentTarget.value && (this.za(a.currentTarget.value), this.dispatchEvent(Oa));
        this.Ed()
    };
    v.Pe = function () {
        lu(this);
        qg(this.f).focus();
        this.X = !0
    };
    v.Ed = function () {
        this.X && (this.X = !1, lu(this, !1), Vf(N(this.o)).focus())
    };
    v.qf = gc();
    v.rf = gc();

    function lu(a, b) {
        if ("undefined" == typeof b || b) {
            a.rf();
            b = Pg(a.o, window);
            var c = b.y + a.o.offsetHeight, d = b.y - a.C.height, e = b.x, g = b.x + a.o.offsetWidth - a.C.width;
            if (G && !J("7.0")) {
                var h = document.body;
                c -= h.offsetTop;
                d -= h.offsetTop;
                e -= h.offsetLeft;
                g -= h.offsetLeft
            } else h = Tf(document), c -= h.y, d -= h.y, e -= h.x, g -= h.x;
            h = Rf(window);
            b.y = b.y <= h.height - a.C.height ? c : d;
            b.y > h.height - a.C.height && (b.y = h.height - a.C.height);
            0 > b.y && (b.y = 0);
            Ve.test(oq) ? b.x = 0 <= g ? g : e : b.x = e <= h.width - a.C.width ? e : g;
            b.x > h.width - a.C.width && (b.x = h.width -
                a.C.width);
            0 > b.x && (b.x = 0);
            Ig(a.f, b);
            P(a.f, !0);
            mu(a)
        } else a.qf(), P(a.f, !1)
    }

    v.Ba = r("g");
    v.Wc = function (a) {
        this.c.Tc(this.K);
        P(this.f, !0);
        this.fa = a;
        this.h = [];
        for (var b in a) if (a[b] !== Object.prototype[b]) if ("---" == a[b]) {
            var c = {link: this.c.D(f, {className: "goog-te-menu2-separator", value: b}), Ri: !0};
            this.h.push(c)
        } else {
            c = {link: this.c.D("A", {className: nb, href: vb, value: b})};
            this.h.push(c);
            var d = this.c.D(f, {style: "white-space:nowrap"});
            this.c.appendChild(c.link, d);
            this.a.Yd && this.c.appendChild(d, this.c.D(ua, {className: "indicator"}, "\u203a"));
            this.c.appendChild(d, this.c.D(ua, {className: "text"},
                a[b]));
            this.l.w(c.link, Sa, this.qg)
        }
        a = this.h.length - 1;
        a = Math.round((a - a % this.a.tf) / this.a.tf) + 1;
        this.R = this.c.D("TABLE", {cellspacing: 0, cellpadding: 0, border: 0});
        c = this.c.D("TBODY");
        b = this.c.D("TR", {valign: "top"});
        this.K.className = "goog-te-menu2";
        this.c.appendChild(this.K, this.R);
        this.c.appendChild(this.R, c);
        this.c.appendChild(c, b);
        for (d = c = 0; c < a; ++c) {
            var e = this.c.D("TD");
            this.c.appendChild(b, e);
            for (var g = 0; 11 > g && d < this.h.length; ++g, ++d) this.c.appendChild(e, this.h[d].link);
            c != a - 1 && (e = this.c.D("TD", {"class": "goog-te-menu2-colpad"},
                "\u00a0"), this.c.appendChild(b, e))
        }
        this.g = null;
        this.za(this.h[0].link.value);
        mu(this);
        P(this.f, !1)
    };
    v.ae = function (a) {
        a = "undefined" == B(a) ? this.g : a;
        return this.fa[a]
    };
    v.sf = gc();
    v.za = function (a) {
        if (this.g != a) {
            this.ae(a) && (this.g = a, this.sf());
            for (var b = 0; b < this.h.length; ++b) {
                var c = this.h[b];
                c.Ri || (c.link.className = c.link.value == a && this.a.Yd ? nb : "goog-te-menu2-item")
            }
        }
    };

    function mu(a) {
        Yg(a.K, Xg(a.R));
        Yg(a.f, Xg(a.K));
        a.C = Xg(a.f)
    }

    function nu(a, b) {
        ku.call(this, a, b)
    }

    E(nu, ku);
    v = nu.prototype;
    v.jd = function () {
        var a = this.b.D("a", {"aria-haspopup": "true"});
        a.className = mb;
        a.href = vb;
        this.H = this.b.D(ua);
        a.appendChild(this.H);
        this.J = this.b.D("IMG", {
            src: ub,
            alt: "",
            style: "background-image:url(" + zq + ");background-position:-14px 0px;border:none",
            width: 14,
            height: 14
        });
        a.appendChild(this.J);
        this.T(a)
    };
    v.qf = function () {
        O(this.J, Ja, "-14px 0px")
    };
    v.rf = function () {
        O(this.J, Ja, "0px 0px")
    };
    v.$ = function () {
        nu.m.$.call(this);
        this.J = this.H = null
    };
    v.sf = function () {
        this.b.eb(this.H, this.ae(this.g) || "")
    };
    v.Bb = function (a) {
        this.Wc.call(this, a)
    };

    function ou(a, b) {
        ku.call(this, a, b)
    }

    E(ou, ku);
    v = ou.prototype;
    v.jd = function () {
        var a = this.b.D("a", {"aria-haspopup": "true"});
        a.className = mb;
        a.href = vb;
        this.H = this.b.D(ua);
        a.appendChild(this.H);
        a.appendChild(this.b.D("IMG", {src: ub, alt: "", width: 1, height: 1}));
        a.appendChild(this.b.D(ua, {style: "border-left:1px solid #bbb"}, "\u200b"));
        a.appendChild(this.b.D("IMG", {src: ub, alt: "", width: 1, height: 1}));
        this.J = this.b.D("span", {style: "color:#767676", "aria-hidden": "true"}, "\u25bc");
        a.appendChild(this.J);
        this.T(a)
    };
    v.qf = function () {
        O(this.J, "color", "#9b9b9b")
    };
    v.rf = function () {
        O(this.J, "color", "#d5d5d5")
    };
    v.$ = function () {
        ou.m.$.call(this);
        this.J = this.H = null
    };
    v.sf = function () {
        this.b.eb(this.H, this.ae(this.g) || "")
    };
    v.Bb = function (a) {
        this.Wc.call(this, a)
    };

    function pu(a, b) {
        ku.call(this, a, b);
        this.a.Yd = !1
    }

    E(pu, ku);
    pu.prototype.jd = function () {
        var a = Ag(this.b, "div");
        a.className = "goog-te-button";
        var b = this.b.D(f, {style: "background: url(" + yq + ") repeat-x 0 -39px"});
        a.appendChild(b);
        this.H = Ag(this.b, Ma);
        b.appendChild(this.H);
        this.T(a)
    };
    pu.prototype.ah = function (a) {
        cg(this.H);
        this.H.appendChild(this.b.a.createTextNode(String(a + "\u00a0\u25bc")))
    };
    pu.prototype.$ = function () {
        pu.m.$.call(this);
        this.H = null
    };
    pu.prototype.qg = function (a) {
        this.za(a.currentTarget.value);
        this.dispatchEvent(Oa);
        this.Ed()
    };

    function qu(a, b) {
        T.call(this, b);
        this.a = a && Dd(a) || {};
        this.c = new Uh(this)
    }

    E(qu, T);
    var ru = {Jn: 0, Cl: 1, cn: 2};
    v = qu.prototype;
    v.D = function () {
        var a = Ag(this.b, "div");
        K(a, Tb);
        K(a, "goog-te-gadget");
        a.dir = Ve.test(oq) ? Rb : "ltr";
        P(a, !1);
        if (2 == this.a.Ob) a.innerHTML = Rr({id: V(this, Xb), Ug: "", Tg: ""}); else {
            var b = Z.vh(Sr() || "");
            a.innerHTML = Rr({id: V(this, Xb), Ug: "", Tg: kj(1 == this.a.Ob ? "&nbsp;&nbsp;" + b : b)})
        }
        this.T(a)
    };
    v.P = function () {
        qu.m.P.call(this);
        this.f = 2 == this.a.Ob ? new ou(null, this.b) : new ju(this.b);
        this.c.w(this.f, Oa, Nq(this, Ra));
        this.c.w(this.f, zb, this.Oj);
        var a = this.b.j(V(this, Xb));
        if (2 == this.a.Ob) {
            var b = this.b.D("IMG", {src: ub, "class": "goog-te-gadget-icon", alt: ""});
            b.style.backgroundImage = "url(" + zq + ")";
            b.style.backgroundPosition = "-65px 0px";
            var c = this.b.D(ua, {style: "vertical-align: middle"});
            a.appendChild(b);
            a.appendChild(c);
            this.f.ga(c);
            a.style.whiteSpace = "nowrap";
            a.className = "goog-te-gadget-simple"
        } else this.f.ga(a),
        1 == this.a.Ob && (a.style.display = "inline")
    };
    v.Oj = function () {
        if (2 == this.a.Ob) {
            var a = this.f, b = this.b.j(V(this, Xb));
            a.l.ca(a.o, Sa, a.Pe);
            a.o = b;
            a.l.w(a.o, Sa, a.Pe)
        }
        this.dispatchEvent(zb)
    };
    v.$ = function () {
        qu.m.$.call(this);
        this.c.M();
        this.c = null;
        this.f.M();
        this.f = null
    };
    v.ya = function () {
        return this.f.Ba()
    };
    v.ta = function (a) {
        "" == a ? this.H && this.f.Bb(this.H) : this.C && this.f.Bb(this.C);
        this.f.za(a)
    };
    v.L = function (a) {
        P(this.j(), a)
    };
    v.ma = function (a) {
        this.f.ma(a)
    };
    v.zf = function (a, b) {
        this.H = a;
        this.C = b
    };

    function su() {
        If()
    }

    su.prototype.ga = function (a) {
        a({}, void 0, {});
        this.a()
    };

    function tu(a, b) {
        b = b || {};
        var c = b.top, d = b.left, e = b.bottom, g = b.right, h = b.id;
        b = gk("." + tk(b.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (c || 0 == c ? "top:" + tk(c) + "px; _top:expression((" + tk(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (d || 0 == d ? "left:" + tk(d) + "px; _left:expression((" + tk(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (e || 0 == e ? "bottom:" + tk(e) + "px; _top:expression((-" +
            tk(e) + ca + String(h).replace(zk, xk) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (g || 0 == g ? "right:" + tk(g) + "px; _left:expression((-" + tk(g) + ca + String(h).replace(zk, xk) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}");
        a.a();
        return tf(b.toString())
    }

    su.prototype.a = A;

    function uu(a, b) {
        T.call(this, b);
        this.a = a && Dd(a) || {};
        this.a.va || (this.a.va = Cq);
        this.c = new Uh(this)
    }

    E(uu, T);
    var vu = {sn: 1, tn: 2, sk: 3, rk: 4};
    v = uu.prototype;
    v.D = function () {
        var a = Ag(this.b, "div");
        this.ha = !1;
        P(a, !1);
        var b = V(this, Va);
        a.innerHTML = '<iframe id="' + X(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>';
        this.T(a)
    };
    v.P = function () {
        uu.m.P.call(this);
        var a = {dir: Ve.test(oq) ? Rb : "ltr", va: this.a.va, Vj: V(this, cc), wc: ub, Rc: zq};
        this.j().id = V(this, "floatContainer");
        var b = {id: this.j().id, className: "goog-te-ftab-float"};
        this.j().className += " goog-te-ftab-float";
        switch (this.a.nd) {
            case 2:
                a.md = gb;
                b.top = 0;
                b.right = 20;
                break;
            case 3:
                a.md = fb;
                b.bottom = 0;
                b.right = 20;
                break;
            case 4:
                a.md = fb;
                b.bottom = 0;
                b.left = 20;
                break;
            default:
                a.md = gb, b.top = 0, b.left = 20
        }
        Sg(tu(new su, b), this.j());
        this.l = this.b.j(V(this, Va));
        this.c.w(this.l, zb, this.Pj);
        Rq(this.l,
            D(function () {
                var b = pg(this.l);
                b.write(Tr(a));
                b.close()
            }, this))
    };
    v.Pj = function () {
        this.f = (new Jf(pg(this.l))).j(V(this, cc));
        this.c.w(this.f, Sa, Nq(this, "clk_trans"));
        P(this.j(), !0);
        var a = Xg(this.f);
        P(this.j(), !1);
        Yg(this.l, a);
        Yg(this.j(), a);
        this.dispatchEvent(zb)
    };
    v.$ = function () {
        uu.m.$.call(this);
        this.c.M();
        this.c = null;
        fg(this.l);
        this.f = this.l = null
    };
    v.N = r("ha");
    v.L = function (a) {
        this.ha = a;
        P(this.j(), a)
    };

    function wu(a, b) {
        T.call(this, b);
        this.h = new Uh(this);
        this.a = a && Dd(a) || {};
        this.a.va || (this.a.va = Cq);
        this.a.Bf = !1;
        O(this.b.a.body, Lb, "relative");
        ne || O(this.b.a.body, "minHeight", "100%");
        O(this.b.a.documentElement, "height", "100%");
        O(this.b.a.body, "top", "0px");
        G && (window._bannerquirkfixleft = -parseInt("0" + this.b.a.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.b.a.body.topMargin, 10) - 40)
    }

    E(wu, T);
    v = wu.prototype;
    v.ga = function () {
        var a = this.b.a.body.firstChild;
        ji(this, a.parentNode, a)
    };
    v.D = function () {
        var a = Ag(this.b, "div");
        this.ha = !1;
        P(a, !1);
        K(a, Tb);
        var b = V(this, Va);
        a.innerHTML = '<iframe id="' + X(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>';
        this.T(a)
    };
    v.P = function () {
        wu.m.P.call(this);
        var a = {
            dir: Ve.test(oq) ? Rb : "ltr",
            va: this.a.va,
            wc: ub,
            ej: tb,
            cf: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png",
            Rc: zq,
            yj: V(this, "promptSection"),
            Rh: V(this, "confirm"),
            wj: V(this, Mb),
            vj: V(this, "progressValue"),
            Ui: Bq,
            Nh: V(this, "cancel"),
            bi: V(this, "finishSection"),
            Aj: V(this, "restore"),
            Yh: V(this, "errorSection"),
            Uh: V(this, "errorContent"),
            Qh: V(this, "close"),
            Rn: zq,
            jj: V(this, "noAutoPopup")
        }, b = [];
        this.a.Bf && b.push(Qr({id: V(this, Nb)}));
        b.push(Qr({
            id: V(this,
                Ob)
        }));
        a.xj = kj(Z.Gh.apply(null, b));
        b = [];
        this.a.Bf && b.push(Qr({id: V(this, ab)}));
        b.push(Qr({id: V(this, bb)}));
        a.ai = kj(Z.Bh.apply(null, b));
        this.a.nc && (a.nc = this.a.nc);
        this.l = this.b.j(V(this, Va));
        this.h.w(this.l, zb, this.Mj);
        Rq(this.l, D(function () {
            var b = pg(this.l);
            b.write(Pr(a));
            b.close()
        }, this))
    };
    v.Mj = function () {
        this.c = new Jf(pg(this.l));
        xu(this, Z.Kf);
        if (this.a.va == Cq) {
            var a = "url(" + yq + ")";
            O(this.c.a.body, Ia, a);
            for (var b = this.c.a.getElementsByTagName(Ma), c = 0; c < b.length; ++c) {
                var d = b[c].parentNode;
                O(d, Ia, a);
                O(d, "backgroundRepeat", "repeat-x");
                O(d, Ja, "0 -39px")
            }
        }
        this.a.Bf && (this.g = new nu(this.a, this.c));
        this.f = new nu(this.a, this.c);
        this.o = new pu(this.a, this.c);
        this.h.w(this.c.j(V(this, "confirm")), Sa, Nq(this, "clk_confirm"));
        this.h.w(this.c.j(V(this, "cancel")), Sa, Nq(this, "clk_cancel"));
        this.h.w(this.c.j(V(this,
            "restore")), Sa, Nq(this, "clk_restore"));
        this.h.w(this.c.j(V(this, "close")), Sa, Nq(this, "clk_close"));
        this.K = this.c.j(V(this, "noAutoPopup"));
        this.h.w(this.K, Sa, Nq(this, "clk_no_ap"));
        this.g && this.h.w(this.g, Oa, Nq(this, "chg_src_lang"));
        this.h.w(this.f, Oa, Nq(this, Ra));
        this.h.w(this.o, Oa, this.Ci);
        a = new Hq(D(this.Nj, this));
        this.g && this.h.w(this.g, zb, a.register());
        this.h.w(this.f, zb, a.register());
        this.h.w(this.o, zb, a.register());
        a.finish();
        this.g && this.g.ga(this.c.j(V(this, Nb)));
        this.f.ga(this.c.j(V(this,
            Ob)));
        this.o.ga(this.c.j("options"))
    };
    v.Nj = function () {
        this.o.ah(Z.th);
        this.o.Wc({turn_off_site: Z.Eh, s1: "---", learn_more: Z.sh});
        this.dispatchEvent(zb)
    };
    v.Ci = function () {
        switch (this.o.Ba()) {
            case "learn_more":
                window.open(Fq, "_blank");
                break;
            case "turn_off_site":
                this.dispatchEvent(Ta)
        }
    };
    v.$ = function () {
        this.L(!1);
        wu.m.$.call(this);
        this.h.M();
        this.h = null;
        this.g && (this.g.M(), this.g = null);
        this.f.M();
        this.f = null;
        this.o.M();
        this.o = null;
        fg(this.l);
        this.Ac = this.c = null
    };
    v.Vb = function () {
        return this.g ? this.g.Ba() : ""
    };
    v.ya = function () {
        return this.f.Ba()
    };
    v.Qb = function (a) {
        this.g && this.g.za(a);
        this.J && this.J[a] && this.c.eb(this.K, Z.Dh(this.J[a]))
    };
    v.ta = function (a) {
        this.f.za(a)
    };

    function yu(a, b, c, d) {
        if (a.Ac != b) {
            a.Ac = b;
            if (0 == b) {
                a.g && iu(a.g, a.c.j(V(a, Nb)));
                if (a.H) {
                    var e = a.ya();
                    a.f.Bb(a.H);
                    a.ta(e)
                }
                iu(a.f, a.c.j(V(a, Ob)))
            } else 2 == b && (a.g && iu(a.g, a.c.j(V(a, ab))), a.C && (e = a.ya(), a.f.Bb(a.C), a.ta(e)), iu(a.f, a.c.j(V(a, bb))));
            e = {};
            e[-1] = a.c.j(V(a, "errorSection"));
            e[0] = a.c.j(V(a, "promptSection"));
            e[1] = a.c.j(V(a, Mb));
            e[2] = a.c.j(V(a, "finishSection"));
            for (var g in e) e[g] !== Object.prototype[g] && P(e[g], g == b)
        }
        c && a.L(!0);
        a.K.parentNode.parentNode.style.display = d ? "block" : q
    }

    v.N = r("ha");
    v.L = function (a) {
        if (this.ha != a) {
            this.ha = a;
            if (G) var b = parseInt("0" + this.b.a.body.leftMargin, 10),
                c = parseInt("0" + this.b.a.body.topMargin, 10);
            var d = "BackCompat" == this.b.a.compatMode;
            a ? (O(this.b.a.body, "top", "40px"), P(this.j(), !0), G && (J("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.b.a.body.topMargin = c + 40)) : d ? (this.b.a.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) : (O(this.b.a.body, "top",
                "0px"), P(this.j(), !1), d && 40 <= c && (this.b.a.body.topMargin = c - 40))
        }
    };
    v.xf = function (a) {
        this.c.eb(this.c.j(V(this, "progressValue")), a)
    };

    function xu(a, b) {
        a.c.eb(a.c.j(V(a, "errorContent")), b)
    }

    v.zf = function (a, b) {
        this.H = a;
        this.C = b;
        this.f.Bb(a)
    };

    function Au(a, b) {
        R.call(this);
        B(a) == Vb && (b = a, a = {});
        B(b) == Vb && (b = Kf(document, String(b)));
        this.ia = b;
        this.h = new Uh(this);
        this.Sb = this.X = void 0;
        a = Object(a);
        this.g = Ha;
        !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
            b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
        this.a = {
            me: b,
            ag: !1,
            ne: null,
            ed: null,
            Ve: [],
            $f: [],
            Th: !1,
            ic: !1,
            Za: "",
            bg: !1,
            ye: "",
            Ob: 0,
            Wf: !1
        };
        this.pa = {va: Cq, nc: "https://" == xq ? Z.yh : null};
        this.R = {va: Cq, nd: null};
        a && ("autoDisplay" in a && (this.a.me = this.a.me && !!a.autoDisplay), "multilanguagePage" in a && (this.a.ic = !!a.multilanguagePage), "gaTrack" in a && (this.a.bg = !!a.gaTrack), "layout" in a && (this.a.Ob = a.layout), a.pageLanguage && (this.a.Wd = Oq(a.pageLanguage)), a.includedLanguages && (this.a.Ve = a.includedLanguages.split(",")),
        a.excludedLanguages && (this.a.$f = a.excludedLanguages.split(",")), this.a.Wd && (this.g = this.a.Wd), a.key && (this.a.Za = a.key), a.gaId && (this.a.ye = a.gaId), this.R.nd = Number(a.floatPosition) || this.R.nd, "disableAutoTranslation" in a && (this.a.Wf = !!a.disableAutoTranslation), a.jwtToken && (this.X = new zr(a.jwtToken)), a.jwtTokenProvider && (this.X = new Ar(a.jwtTokenProvider)), a.translateErrorHandler && (this.Sb = a.translateErrorHandler));
        !this.a.Wf && Bu(this) && (this.a.ag = !0);
        this.s = {};
        if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) &&
            a[2]) for (this.s = {}, a = bd(a[2]).split("|"), b = 0; b < a.length; ++b) {
            var c = a[b].split("=");
            c[0] && (this.s[c[0]] = c[1])
        }
        this.xa = new Us({Za: this.a.Za, Hb: 1, Af: !0, Xn: Eq}, {client: uq, u: window.location.href});
        this.B = new gu(void 0, this.xa, void 0, void 0, this.a.Za, void 0, void 0, new Ut, this.X, this.Sb);
        this.G = !1;
        this.h.w(window, "unload", this.M);
        this.I = new Hq(D(this.wi, this));
        this.C = new Hq(D(this.zi, this));
        this.K = new Jq(D(this.Si, this));
        this.b = new wu(this.pa);
        this.B.sd(this.I.register(D(this.vi, this)), oq);
        this.ia ? (this.f =
            new qu(this.a), this.h.w(this.f, zb, this.I.register()), this.h.w(this.f, Ra, Kq(this.K, this.C.delay(D(this.ui, this)))), this.f.ga(this.ia)) : this.R.nd && (this.l = new uu(this.R), this.h.w(this.l, zb, this.I.register()), this.h.w(this.l, "clk_trans", Kq(this.K, this.C.delay(D(this.ti, this)))), this.l.ga());
        !this.a.Wd && this.a.Th && this.B.od(this.I.register(D(this.pi, this)));
        this.I.finish()
    }

    E(Au, R);

    function Bu(a) {
        function b(a, b) {
            if (a = bd(a).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                if (a[3]) return b.a.ne = a[2], b.a.ed = a[3], !0;
                if (a[6]) return b.a.ne = a[5], b.a.ed = a[6], !0
            }
            return !1
        }

        var c = {
            url: function () {
                var a = window.location.href.match(/#.*googtrans(.*)/);
                return a && a[1]
            }, cookie: function () {
                var a = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                return a && a[2]
            }
        }, d;
        for (d in c) if (c[d] !== Object.prototype[d]) {
            var e = c[d]();
            if (e && b(e, a)) return d
        }
        return ""
    }

    function Cu(a, b) {
        for (var c = window.location.hostname.split("."); 2 < c.length;) c.shift();
        c = ";domain=" + c.join(".");
        null != b ? a = a + "=" + b : (b = new Date, b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
        a += ";path=/";
        document.cookie = a;
        try {
            document.cookie = a + c
        } catch (d) {
        }
    }

    function Du(a, b) {
        var c = null;
        x(b) && (c = x(a) ? "/" + a + "/" + b : "/" + b);
        Cu("googtrans", c)
    }

    v = Au.prototype;
    v.vi = function (a) {
        this.c = Oq(oq);
        this.H = a || {};
        this.o = {};
        this.J = {};
        a = !this.a.Ve.length;
        var b = Gq(this.a.Ve), c = Gq(this.a.$f);
        this.o[oq] = "";
        this.J[oq] = "";
        for (var d in this.H.tl) this.H.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.J[d] = this.H.tl[d], d == this.a.Wd && !this.a.ic) || (this.o[d] = this.H.tl[d]);
        this.o[oq] || delete this.o[oq];
        this.J[oq] || delete this.J[oq];
        this.fa = Dd(this.H.sl)
    };
    v.pi = function (a) {
        a && (this.g = Oq(a))
    };
    v.wi = function () {
        delete this.I;
        if (this.H) {
            this.g = this.g || this.a.ne;
            this.c = this.a.ed || this.c;
            var a = this.a.ag || this.a.me && this.g != this.c && !(this.g in sq) && "1" != this.s.os && "1" != this.s["o" + this.g];
            "zh-TW" == this.g && (this.g = "zh-CN");
            this.fa[this.g] || (a = !1, this.g = Ha);
            if (!this.o[this.c]) if (a = !1, this.o.en) this.c = "en"; else for (var b in this.o) if (this.o[b] !== Object.prototype[b]) {
                this.c = b;
                break
            }
            if (this.f) {
                var c = this.o, d = {"": Z.xh};
                for (b in c) c[b] !== Object.prototype[b] && (d[b] = c[b]);
                this.f.zf(d, this.J);
                this.f.ta("")
            }
            !qq &&
            a ? this.a.ed ? Kq(this.K, this.C.delay(D(this.Xd, this, !0, !0))).call() : (this.G = !0, Kq(this.K, this.C.delay(D(this.Xd, this))).call(), Qq("te_ap", {sl: this.g})) : (this.l && this.l.L(!0), this.f && this.f.L(!0));
            window.google.translate.TranslateService && this.ma(!1);
            this.K.finish()
        }
    };
    v.zi = function () {
        var a = this.b, b = this.fa;
        a.g && a.g.Bb(b);
        a.J = b;
        this.b.zf(this.o, this.J);
        this.b.Qb(this.g);
        this.b.ta(this.c);
        this.h.w(this.b, "clk_confirm", this.ji);
        this.h.w(this.b, "clk_cancel", this.ii);
        this.h.w(this.b, "clk_restore", this.Ne);
        this.h.w(this.b, "clk_close", this.Dd);
        this.h.w(this.b, "clk_no_ap", this.ki);
        this.h.w(this.b, Ta, this.li);
        this.h.w(this.b, "chg_src_lang", this.lg);
        this.h.w(this.b, Ra, this.lg);
        this.f && this.f.L(!0)
    };
    v.Si = function () {
        this.h.w(this.b, zb, this.C.register());
        this.b.ga();
        this.C.finish()
    };
    v.F = function () {
        this.B.restore();
        Au.m.F.call(this);
        this.B.M();
        this.h.M();
        this.h = null;
        this.b && this.b.M();
        this.b = null;
        this.l && this.l.M();
        this.l = null;
        this.f && this.f.M();
        this.ia = this.f = null
    };
    v.ji = function () {
        !this.b.N() || !this.a.ic && Wq(this.g, this.b.ya()) || (this.G && Qq("te_apt", {sl: this.g}), Eu(this, !1), this.f && this.f.ta(this.b.ya()))
    };
    v.ii = function () {
        this.b.N() && (Fu(this), yu(this.b, 0), this.f && this.f.ta(""))
    };
    v.Ne = function () {
        this.b.N() && (Fu(this), yu(this.b, 0));
        this.f && this.f.ta("")
    };
    v.Dd = function () {
        this.b.N() && (this.G && (this.G = !1, Qq("te_apc", {sl: this.g})), Fu(this), this.b.L(!1), this.f && this.f.ta(""), this.l && this.l.L(!0))
    };
    v.ki = function () {
        this.b.N() && (this.s["o" + this.g] = "1", Qq("te_apr", {sl: this.g}), this.G = !1, this.Dd())
    };
    v.li = function () {
        if (this.b.N()) {
            this.G = !1;
            this.s.os = "1";
            var a = null;
            if (this.s) {
                a = [];
                for (var b in this.s) this.s[b] !== Object.prototype[b] && a.push(b + "=" + this.s[b]);
                a = a.join("|")
            }
            Cu("googtransopt", a);
            this.Dd()
        }
    };
    v.lg = function () {
        this.b.N() && (!this.a.ic && Wq(this.g, this.b.ya()) ? this.Ne() : (this.g = this.b.Vb() || this.g, this.c = this.b.ya(), 2 == this.b.Ac && (this.f && this.f.ta(this.b.ya()), Eu(this))))
    };
    v.Xd = function (a, b) {
        this.b.N() || (this.l && this.l.L(!1), a ? Eu(this, b) : yu(this.b, 0, !0, this.G))
    };
    v.Gj = function (a, b) {
        Kq(this.K, this.C.delay(D(this.Xd, this, a, b))).call()
    };
    v.ti = function () {
        this.Xd(2 == this.b.Ac)
    };
    v.ui = function () {
        this.f.ya() ? !this.a.ic && Wq(this.g, this.b.ya()) ? this.Ne() : (this.c = this.f.ya(), this.b.ta(this.c), Eu(this)) : this.f.ta(this.c)
    };

    function Eu(a, b) {
        if (window.google.translate.TranslateService) try {
            window.google.translate.TranslateService.getInstance().restore()
        } catch (c) {
        }
        Du(a.g, a.c);
        a.G = !1;
        !b && a.g in sq && Qq("te_ape", {sl: a.g});
        a.b.xf(0);
        yu(a.b, 1, !0);
        a.B.bh(!!b);
        window.setTimeout(D(a.B.ee, a.B, a.a.ic ? Ha : a.g, a.c, D(a.Hi, a), void 0, void 0), 0);
        if (a.a.bg && window._gaq && window._gat) try {
            a.a.ye ? window._gat._getTracker(a.a.ye)._trackEvent(la, "Translate", a.c) : window._gat._getTrackerByName()._trackEvent(la, "Translate", a.c)
        } catch (c) {
        }
    }

    v.Hi = function (a, b, c) {
        B(this.qa) == p && this.qa();
        this.b.N() && 1 == this.b.Ac && (c ? (Fu(this), yu(this.b, -1, !0), 2 == c ? xu(this.b, Z.rh) : xu(this.b, Z.Kf)) : (this.b.xf(a), b && (this.f && this.f.ta(this.c), this.b.Qb(this.g), yu(this.b, 2))))
    };

    function Fu(a) {
        Du();
        window.setTimeout(D(a.B.restore, a.B, null), 0)
    }

    v.ma = function (a) {
        a || this.Dd();
        this.f && this.f.ma(a);
        this.l && this.l.L(a)
    };

    function Gu(a) {
        if (a && (a = String(a), a = a.split("."), a.length)) {
            for (var b = window, c = 0; c < a.length; ++c) {
                var d = a[c];
                if (!(d && d in b)) return;
                b = b[d]
            }
            return b
        }
    };var Hu = Gu("google.translate.m");
    if (Hu) for (var Iu in Z) if (Z[Iu] !== Object.prototype[Z[Iu]] && Z[Iu]) {
        var Ju = Z[Iu]();
        Z[Iu] = Hu[Ju] ? Hu[Ju] : Nr
    }
    if (1 == tq) {
        var Ku = null, Lu = function (a) {
            if (!Ku) {
                var b, c, d;
                a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), (a = (a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1] ? a[1] : null) && (c = a));
                a = 0;
                if ("te_lib" == uq || Td) a = 3;
                Ku = new gu(void 0, new Us({Za: b, Hb: a, Af: !0, Yc: "tvis" == c}), void 0, void 0, b, c, d, new Ut);
                Ku.constructor = A;
                Ku.isAvailable = Ku.Ua;
                Ku.getSupportedLanguages = Ku.sd;
                Ku.getPageLanguage = Ku.od;
                Ku.setClickThrough = Ku.bh;
                Ku.translatePage = Ku.ee;
                Ku.restore = Ku.restore;
                Ku.isTranslating = Ku.Lj
            }
            return Ku
        };
        Lu.getInstance = function () {
            return Ku
        };
        Ec("google.translate.TranslateService", Lu);
        Qq("te_li")
    } else {
        var Mu = null, Nu = function (a, b) {
            Mu || (Mu = new Au(a, b), Mu.constructor = A);
            return Mu
        };
        Nu.getInstance = function () {
            return Mu
        };
        Ec("google.translate.TranslateElement", Nu);
        Au.prototype.dispose = Au.prototype.M;
        Au.prototype.showBanner = Au.prototype.Gj;
        Au.prototype.setEnabled = Au.prototype.ma;
        Ec("google.translate.TranslateElement.FloatPosition", vu);
        vu.TOP_LEFT = 1;
        vu.TOP_RIGHT =
            2;
        vu.BOTTOM_RIGHT = 3;
        vu.BOTTOM_LEFT = 4;
        Ec("google.translate.TranslateElement.InlineLayout", ru);
        ru.VERTICAL = 0;
        ru.HORIZONTAL = 1;
        ru.SIMPLE = 2
    }
    (function () {
        for (var a in Object.prototype) {
            wd = function (a, b, c) {
                for (var d in a) a[d] !== Object.prototype[d] && b.call(c, a[d], d, a)
            };
            break
        }
        var b = Dc(), c = Gu(pq);
        c && B(c) == p && (1 == tq ? c() : function e() {
            var a = document.readyState;
            "undefined" == B(a) || a == Ua || "interactive" == a || 2E4 <= Dc() - b ? c() : window.setTimeout(e, 500)
        }())
    })();
}).call(window)
