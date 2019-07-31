/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.9.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.baguetteBox = e()
}(this, function() {
    "use strict";
    function t(t, e) {
        var n = document.querySelectorAll(t)
          , o = {
            galleries: [],
            nodeList: n
        };
        D[t] = o,
        [].forEach.call(n, function(t) {
            e && e.filter && (z = e.filter);
            var n = [];
            if (n = "A" === t.tagName ? [t] : t.getElementsByTagName("a"),
            0 !== (n = [].filter.call(n, function(t) {
                if (-1 === t.className.indexOf(e && e.ignoreClass))
                    return z.test(t.href)
            })).length) {
                var i = [];
                [].forEach.call(n, function(t, n) {
                    var o = function(t) {
                        t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                        r(i, e),
                        u(n)
                    }
                      , a = {
                        eventHandler: o,
                        imageElement: t
                    };
                    x(t, "click", o),
                    i.push(a)
                }),
                o.galleries.push(i)
            }
        })
    }
    function e() {
        for (var t in D)
            D.hasOwnProperty(t) && n(t)
    }
    function n(t) {
        if (D.hasOwnProperty(t)) {
            var e = D[t].galleries;
            [].forEach.call(e, function(t) {
                [].forEach.call(t, function(t) {
                    E(t.imageElement, "click", t.eventHandler)
                }),
                X === t && (X = [])
            }),
            delete D[t]
        }
    }
    function o() {
        if (N = B("baguetteBox-overlay"))
            return A = B("baguetteBox-slider"),
            L = B("previous-button"),
            S = B("next-button"),
            void (P = B("close-button"));
        (N = T("div")).setAttribute("role", "dialog"),
        N.id = "baguetteBox-overlay",
        document.getElementsByTagName("body")[0].appendChild(N),
        (A = T("div")).id = "baguetteBox-slider",
        N.appendChild(A),
        (L = T("button")).setAttribute("type", "button"),
        L.id = "previous-button",
        L.setAttribute("aria-label", "Previous"),
        L.innerHTML = j.svg ? F : "&lt;",
        N.appendChild(L),
        (S = T("button")).setAttribute("type", "button"),
        S.id = "next-button",
        S.setAttribute("aria-label", "Next"),
        S.innerHTML = j.svg ? H : "&gt;",
        N.appendChild(S),
        (P = T("button")).setAttribute("type", "button"),
        P.id = "close-button",
        P.setAttribute("aria-label", "Close"),
        P.innerHTML = j.svg ? I : "&times;",
        N.appendChild(P),
        L.className = S.className = P.className = "baguetteBox-button",
        a()
    }
    function i(t) {
        switch (t.keyCode) {
        case 37:
            h();
            break;
        case 39:
            p();
            break;
        case 27:
            g()
        }
    }
    function a() {
        x(N, "click", W),
        x(L, "click", G),
        x(S, "click", J),
        x(P, "click", K),
        x(A, "contextmenu", _),
        x(N, "touchstart", Q),
        x(N, "touchmove", Z),
        x(N, "touchend", $),
        x(document, "focus", tt, !0)
    }
    function l() {
        E(N, "click", W),
        E(L, "click", G),
        E(S, "click", J),
        E(P, "click", K),
        E(A, "contextmenu", _),
        E(N, "touchstart", Q),
        E(N, "touchmove", Z),
        E(N, "touchend", $),
        E(document, "focus", tt, !0)
    }
    function r(t, e) {
        if (X !== t) {
            for (X = t,
            s(e); A.firstChild; )
                A.removeChild(A.firstChild);
            V.length = 0;
            for (var n, o = [], i = [], a = 0; a < t.length; a++)
                (n = T("div")).className = "full-image",
                n.id = "baguette-img-" + a,
                V.push(n),
                o.push("baguetteBox-figure-" + a),
                i.push("baguetteBox-figcaption-" + a),
                A.appendChild(V[a]);
            N.setAttribute("aria-labelledby", o.join(" ")),
            N.setAttribute("aria-describedby", i.join(" "))
        }
    }
    function s(t) {
        t || (t = {});
        for (var e in q)
            Y[e] = q[e],
            "undefined" != typeof t[e] && (Y[e] = t[e]);
        A.style.transition = A.style.webkitTransition = "fadeIn" === Y.animation ? "opacity .4s ease" : "slideIn" === Y.animation ? "" : "none",
        "auto" === Y.buttons && ("ontouchstart"in window || 1 === X.length) && (Y.buttons = !1),
        L.style.display = S.style.display = Y.buttons ? "" : "none";
        try {
            N.style.backgroundColor = Y.overlayBackgroundColor
        } catch (n) {}
    }
    function u(t) {
        Y.noScrollbars && (document.documentElement.style.overflowY = "hidden",
        document.body.style.overflowY = "scroll"),
        "block" !== N.style.display && (x(document, "keydown", i),
        R = {
            count: 0,
            startX: null,
            startY: null
        },
        m(M = t, function() {
            k(M),
            C(M)
        }),
        y(),
        N.style.display = "block",
        Y.fullScreen && d(),
        setTimeout(function() {
            N.className = "visible",
            Y.bodyClass && document.body.classList && document.body.classList.add(Y.bodyClass),
            Y.afterShow && Y.afterShow()
        }, 50),
        Y.onChange && Y.onChange(M, V.length),
        U = document.activeElement,
        c())
    }
    function c() {
        Y.buttons ? L.focus() : P.focus()
    }
    function d() {
        N.requestFullscreen ? N.requestFullscreen() : N.webkitRequestFullscreen ? N.webkitRequestFullscreen() : N.mozRequestFullScreen && N.mozRequestFullScreen()
    }
    function f() {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
    }
    function g() {
        Y.noScrollbars && (document.documentElement.style.overflowY = "auto",
        document.body.style.overflowY = "auto"),
        "none" !== N.style.display && (E(document, "keydown", i),
        N.className = "",
        setTimeout(function() {
            N.style.display = "none",
            f(),
            Y.bodyClass && document.body.classList && document.body.classList.remove(Y.bodyClass),
            Y.afterHide && Y.afterHide(),
            U && U.focus()
        }, 500))
    }
    function m(t, e) {
        var n = V[t]
          , o = X[t];
        if (void 0 !== n && void 0 !== o)
            if (n.getElementsByTagName("img")[0])
                e && e();
            else {
                var i = o.imageElement
                  , a = i.getElementsByTagName("img")[0]
                  , l = "function" == typeof Y.captions ? Y.captions.call(X, i) : i.getAttribute("data-caption") || i.title
                  , r = b(i)
                  , s = T("figure");
                if (s.id = "baguetteBox-figure-" + t,
                s.innerHTML = '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',
                Y.captions && l) {
                    var u = T("figcaption");
                    u.id = "baguetteBox-figcaption-" + t,
                    u.innerHTML = l,
                    s.appendChild(u)
                }
                n.appendChild(s);
                var c = T("img");
                c.onload = function() {
                    var n = document.querySelector("#baguette-img-" + t + " .baguetteBox-spinner");
                    s.removeChild(n),
                    !Y.async && e && e()
                }
                ,
                c.setAttribute("src", r),
                c.alt = a ? a.alt || "" : "",
                Y.titleTag && l && (c.title = l),
                s.appendChild(c),
                Y.async && e && e()
            }
    }
    function b(t) {
        var e = t.href;
        if (t.dataset) {
            var n = [];
            for (var o in t.dataset)
                "at-" !== o.substring(0, 3) || isNaN(o.substring(3)) || (n[o.replace("at-", "")] = t.dataset[o]);
            for (var i = Object.keys(n).sort(function(t, e) {
                return parseInt(t, 10) < parseInt(e, 10) ? -1 : 1
            }), a = window.innerWidth * window.devicePixelRatio, l = 0; l < i.length - 1 && i[l] < a; )
                l++;
            e = n[i[l]] || e
        }
        return e
    }
    function p() {
        var t;
        return M <= V.length - 2 ? (M++,
        y(),
        k(M),
        t = !0) : Y.animation && (A.className = "bounce-from-right",
        setTimeout(function() {
            A.className = ""
        }, 400),
        t = !1),
        Y.onChange && Y.onChange(M, V.length),
        t
    }
    function h() {
        var t;
        return M >= 1 ? (M--,
        y(),
        C(M),
        t = !0) : Y.animation && (A.className = "bounce-from-left",
        setTimeout(function() {
            A.className = ""
        }, 400),
        t = !1),
        Y.onChange && Y.onChange(M, V.length),
        t
    }
    function y() {
        var t = 100 * -M + "%";
        "fadeIn" === Y.animation ? (A.style.opacity = 0,
        setTimeout(function() {
            j.transforms ? A.style.transform = A.style.webkitTransform = "translate3d(" + t + ",0,0)" : A.style.left = t,
            A.style.opacity = 1
        }, 400)) : j.transforms ? A.style.transform = A.style.webkitTransform = "translate3d(" + t + ",0,0)" : A.style.left = t
    }
    function v() {
        var t = T("div");
        return "undefined" != typeof t.style.perspective || "undefined" != typeof t.style.webkitPerspective
    }
    function w() {
        var t = T("div");
        return t.innerHTML = "<svg/>",
        "http://www.w3.org/2000/svg" === (t.firstChild && t.firstChild.namespaceURI)
    }
    function k(t) {
        t - M >= Y.preload || m(t + 1, function() {
            k(t + 1)
        })
    }
    function C(t) {
        M - t >= Y.preload || m(t - 1, function() {
            C(t - 1)
        })
    }
    function x(t, e, n, o) {
        t.addEventListener ? t.addEventListener(e, n, o) : t.attachEvent("on" + e, function(t) {
            (t = t || window.event).target = t.target || t.srcElement,
            n(t)
        })
    }
    function E(t, e, n, o) {
        t.removeEventListener ? t.removeEventListener(e, n, o) : t.detachEvent("on" + e, n)
    }
    function B(t) {
        return document.getElementById(t)
    }
    function T(t) {
        return document.createElement(t)
    }
    var N, A, L, S, P, F = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>', H = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>', I = '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>', Y = {}, q = {
        captions: !0,
        buttons: "auto",
        fullScreen: !1,
        noScrollbars: !1,
        bodyClass: "baguetteBox-open",
        titleTag: !1,
        async: !1,
        preload: 2,
        animation: "slideIn",
        afterShow: null,
        afterHide: null,
        onChange: null,
        overlayBackgroundColor: "rgba(0,0,0,.8)"
    }, j = {}, X = [], M = 0, R = {}, O = !1, z = /.+\.(gif|jpe?g|png|webp)/i, D = {}, V = [], U = null, W = function(t) {
        -1 !== t.target.id.indexOf("baguette-img") && g()
    }, G = function(t) {
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
        h()
    }, J = function(t) {
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
        p()
    }, K = function(t) {
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
        g()
    }, Q = function(t) {
        R.count++,
        R.count > 1 && (R.multitouch = !0),
        R.startX = t.changedTouches[0].pageX,
        R.startY = t.changedTouches[0].pageY
    }, Z = function(t) {
        if (!O && !R.multitouch) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1;
            var e = t.touches[0] || t.changedTouches[0];
            e.pageX - R.startX > 40 ? (O = !0,
            h()) : e.pageX - R.startX < -40 ? (O = !0,
            p()) : R.startY - e.pageY > 100 && g()
        }
    }, $ = function() {
        R.count--,
        R.count <= 0 && (R.multitouch = !1),
        O = !1
    }, _ = function() {
        $()
    }, tt = function(t) {
        "block" === N.style.display && N.contains && !N.contains(t.target) && (t.stopPropagation(),
        c())
    };
    return [].forEach || (Array.prototype.forEach = function(t, e) {
        for (var n = 0; n < this.length; n++)
            t.call(e, this[n], n, this)
    }
    ),
    [].filter || (Array.prototype.filter = function(t, e, n, o, i) {
        for (n = this,
        o = [],
        i = 0; i < n.length; i++)
            t.call(e, n[i], i, n) && o.push(n[i]);
        return o
    }
    ),
    {
        run: function(e, i) {
            j.transforms = v(),
            j.svg = w(),
            o(),
            n(e),
            t(e, i)
        },
        showNext: p,
        showPrevious: h,
        destroy: function() {
            l(),
            e(),
            E(document, "keydown", i),
            document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),
            D = {},
            X = [],
            M = 0
        }
    }
});
