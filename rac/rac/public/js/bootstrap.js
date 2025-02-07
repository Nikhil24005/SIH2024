/*!
 * Bootstrap v (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery)
}(this, function(t, p) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e),
            n && i(t, n),
            t
    }

    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                }))),
                e.forEach(function(t) {
                    var e, n, i;
                    e = o,
                        i = r[n = t],
                        n in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                })
        }
        return o
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var e = "transitionend";

    function n(t) {
        var e = this,
            n = !1;
        return p(this).one(m.TRANSITION_END, function() {
                n = !0
            }),
            setTimeout(function() {
                n || m.triggerTransitionEnd(e)
            }, t),
            this
    }
    var m = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()),
                document.getElementById(t);)
            ;
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            return e && document.querySelector(e) ? e : null
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = p(t).css("transition-duration"),
                n = p(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? (e = e.split(",")[0],
                n = n.split(",")[0],
                1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            p(t).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot ? t : t.parentNode ? m.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    p.fn.emulateTransitionEnd = n,
        p.event.special[m.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function(t) {
                if (p(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        };
    var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = p.fn[o],
        h = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        },
        u = "alert",
        f = "fade",
        d = "show",
        g = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                },
                t.dispose = function() {
                    p.removeData(this._element, r),
                        this._element = null
                },
                t._getRootElement = function(t) {
                    var e = m.getSelectorFromElement(t),
                        n = !1;
                    return e && (n = document.querySelector(e)),
                        n || (n = p(t).closest("." + u)[0]),
                        n
                },
                t._triggerCloseEvent = function(t) {
                    var e = p.Event(h.CLOSE);
                    return p(t).trigger(e),
                        e
                },
                t._removeElement = function(e) {
                    var n = this;
                    if (p(e).removeClass(d),
                        p(e).hasClass(f)) {
                        var t = m.getTransitionDurationFromElement(e);
                        p(e).one(m.TRANSITION_END, function(t) {
                            return n._destroyElement(e, t)
                        }).emulateTransitionEnd(t)
                    } else
                        this._destroyElement(e)
                },
                t._destroyElement = function(t) {
                    p(t).detach().trigger(h.CLOSED).remove()
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = p(this),
                            e = t.data(r);
                        e || (e = new i(this),
                                t.data(r, e)),
                            "close" === n && e[n](this)
                    })
                },
                i._handleDismiss = function(e) {
                    return function(t) {
                        t && t.preventDefault(),
                            e.close(this)
                    }
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }]),
                i
        }();
    p(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)),
        p.fn[o] = g._jQueryInterface,
        p.fn[o].Constructor = g,
        p.fn[o].noConflict = function() {
            return p.fn[o] = c,
                g._jQueryInterface
        };
    var _ = "button",
        v = "bs.button",
        y = "." + v,
        E = ".data-api",
        b = p.fn[_],
        w = "active",
        T = "btn",
        C = "focus",
        S = '[data-toggle^="button"]',
        D = '[data-toggle="buttons"]',
        I = 'input:not([type="hidden"])',
        A = ".active",
        O = ".btn",
        N = {
            CLICK_DATA_API: "click" + y + E,
            FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E
        },
        k = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                    var t = !0,
                        e = !0,
                        n = p(this._element).closest(D)[0];
                    if (n) {
                        var i = this._element.querySelector(I);
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains(w))
                                    t = !1;
                                else {
                                    var o = n.querySelector(A);
                                    o && p(o).removeClass(w)
                                }
                            if (t) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                                    return;
                                i.checked = !this._element.classList.contains(w),
                                    p(i).trigger("change")
                            }
                            i.focus(),
                                e = !1
                        }
                    }
                    e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)),
                        t && p(this._element).toggleClass(w)
                },
                t.dispose = function() {
                    p.removeData(this._element, v),
                        this._element = null
                },
                n._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = p(this).data(v);
                        t || (t = new n(this),
                                p(this).data(v, t)),
                            "toggle" === e && t[e]()
                    })
                },
                s(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }]),
                n
        }();
    p(document).on(N.CLICK_DATA_API, S, function(t) {
            t.preventDefault();
            var e = t.target;
            p(e).hasClass(T) || (e = p(e).closest(O)),
                k._jQueryInterface.call(p(e), "toggle")
        }).on(N.FOCUS_BLUR_DATA_API, S, function(t) {
            var e = p(t.target).closest(O)[0];
            p(e).toggleClass(C, /^focus(in)?$/.test(t.type))
        }),
        p.fn[_] = k._jQueryInterface,
        p.fn[_].Constructor = k,
        p.fn[_].noConflict = function() {
            return p.fn[_] = b,
                k._jQueryInterface
        };
    var L = "carousel",
        P = "bs.carousel",
        x = "." + P,
        H = ".data-api",
        j = p.fn[L],
        R = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        F = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        M = "next",
        W = "prev",
        U = "left",
        B = "right",
        q = {
            SLIDE: "slide" + x,
            SLID: "slid" + x,
            KEYDOWN: "keydown" + x,
            MOUSEENTER: "mouseenter" + x,
            MOUSELEAVE: "mouseleave" + x,
            TOUCHSTART: "touchstart" + x,
            TOUCHMOVE: "touchmove" + x,
            TOUCHEND: "touchend" + x,
            POINTERDOWN: "pointerdown" + x,
            POINTERUP: "pointerup" + x,
            DRAG_START: "dragstart" + x,
            LOAD_DATA_API: "load" + x + H,
            CLICK_DATA_API: "click" + x + H
        },
        K = "carousel",
        Q = "active",
        Y = "slide",
        V = "carousel-item-right",
        X = "carousel-item-left",
        z = "carousel-item-next",
        G = "carousel-item-prev",
        J = "pointer-event",
        Z = ".active",
        $ = ".active.carousel-item",
        tt = ".carousel-item",
        et = ".carousel-item img",
        nt = ".carousel-item-next, .carousel-item-prev",
        it = ".carousel-indicators",
        ot = "[data-slide], [data-slide-to]",
        rt = '[data-ride="carousel"]',
        st = {
            TOUCH: "touch",
            PEN: "pen"
        },
        at = function() {
            function r(t, e) {
                this._items = null,
                    this._interval = null,
                    this._activeElement = null,
                    this._isPaused = !1,
                    this._isSliding = !1,
                    this.touchTimeout = null,
                    this.touchStartX = 0,
                    this.touchDeltaX = 0,
                    this._config = this._getConfig(e),
                    this._element = t,
                    this._indicatorsElement = this._element.querySelector(it),
                    this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints,
                    this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                    this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function() {
                    this._isSliding || this._slide(M)
                },
                t.nextWhenVisible = function() {
                    !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
                },
                t.prev = function() {
                    this._isSliding || this._slide(W)
                },
                t.pause = function(t) {
                    t || (this._isPaused = !0),
                        this._element.querySelector(nt) && (m.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                },
                t.cycle = function(t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval),
                            this._interval = null),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                },
                t.to = function(t) {
                    var e = this;
                    this._activeElement = this._element.querySelector($);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            p(this._element).one(q.SLID, function() {
                                return e.to(t)
                            });
                        else {
                            if (n === t)
                                return this.pause(),
                                    void this.cycle();
                            var i = n < t ? M : W;
                            this._slide(i, this._items[t])
                        }
                },
                t.dispose = function() {
                    p(this._element).off(x),
                        p.removeData(this._element, P),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                },
                t._getConfig = function(t) {
                    return t = l({}, R, t),
                        m.typeCheckConfig(L, t, F),
                        t
                },
                t._handleSwipe = function() {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        0 < e && this.prev(),
                            e < 0 && this.next()
                    }
                },
                t._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && p(this._element).on(q.KEYDOWN, function(t) {
                            return e._keydown(t)
                        }),
                        "hover" === this._config.pause && p(this._element).on(q.MOUSEENTER, function(t) {
                            return e.pause(t)
                        }).on(q.MOUSELEAVE, function(t) {
                            return e.cycle(t)
                        }),
                        this._addTouchEventListeners()
                },
                t._addTouchEventListeners = function() {
                    var n = this;
                    if (this._touchSupported) {
                        var e = function(t) {
                                n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                            },
                            i = function(t) {
                                n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                                    n._handleSwipe(),
                                    "hover" === n._config.pause && (n.pause(),
                                        n.touchTimeout && clearTimeout(n.touchTimeout),
                                        n.touchTimeout = setTimeout(function(t) {
                                            return n.cycle(t)
                                        }, 500 + n._config.interval))
                            };
                        p(this._element.querySelectorAll(et)).on(q.DRAG_START, function(t) {
                                return t.preventDefault()
                            }),
                            this._pointerEvent ? (p(this._element).on(q.POINTERDOWN, function(t) {
                                    return e(t)
                                }),
                                p(this._element).on(q.POINTERUP, function(t) {
                                    return i(t)
                                }),
                                this._element.classList.add(J)) : (p(this._element).on(q.TOUCHSTART, function(t) {
                                    return e(t)
                                }),
                                p(this._element).on(q.TOUCHMOVE, function(t) {
                                    var e;
                                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                                }),
                                p(this._element).on(q.TOUCHEND, function(t) {
                                    return i(t)
                                }))
                    }
                },
                t._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(),
                                    this.prev();
                                break;
                            case 39:
                                t.preventDefault(),
                                    this.next()
                        }
                },
                t._getItemIndex = function(t) {
                    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [],
                        this._items.indexOf(t)
                },
                t._getItemByDirection = function(t, e) {
                    var n = t === M,
                        i = t === W,
                        o = this._getItemIndex(e),
                        r = this._items.length - 1;
                    if ((i && 0 === o || n && o === r) && !this._config.wrap)
                        return e;
                    var s = (o + (t === W ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                },
                t._triggerSlideEvent = function(t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(this._element.querySelector($)),
                        o = p.Event(q.SLIDE, {
                            relatedTarget: t,
                            direction: e,
                            from: i,
                            to: n
                        });
                    return p(this._element).trigger(o),
                        o
                },
                t._setActiveIndicatorElement = function(t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                        p(e).removeClass(Q);
                        var n = this._indicatorsElement.children[this._getItemIndex(t)];
                        n && p(n).addClass(Q)
                    }
                },
                t._slide = function(t, e) {
                    var n, i, o, r = this,
                        s = this._element.querySelector($),
                        a = this._getItemIndex(s),
                        l = e || s && this._getItemByDirection(t, s),
                        c = this._getItemIndex(l),
                        h = Boolean(this._interval);
                    if (o = t === M ? (n = X,
                            i = z,
                            U) : (n = V,
                            i = G,
                            B),
                        l && p(l).hasClass(Q))
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                        this._isSliding = !0,
                            h && this.pause(),
                            this._setActiveIndicatorElement(l);
                        var u = p.Event(q.SLID, {
                            relatedTarget: l,
                            direction: o,
                            from: a,
                            to: c
                        });
                        if (p(this._element).hasClass(Y)) {
                            p(l).addClass(i),
                                m.reflow(l),
                                p(s).addClass(n),
                                p(l).addClass(n);
                            var f = parseInt(l.getAttribute("data-interval"), 10);
                            this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                                f) : this._config.defaultInterval || this._config.interval;
                            var d = m.getTransitionDurationFromElement(s);
                            p(s).one(m.TRANSITION_END, function() {
                                p(l).removeClass(n + " " + i).addClass(Q),
                                    p(s).removeClass(Q + " " + i + " " + n),
                                    r._isSliding = !1,
                                    setTimeout(function() {
                                        return p(r._element).trigger(u)
                                    }, 0)
                            }).emulateTransitionEnd(d)
                        } else
                            p(s).removeClass(Q),
                            p(l).addClass(Q),
                            this._isSliding = !1,
                            p(this._element).trigger(u);
                        h && this.cycle()
                    }
                },
                r._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = p(this).data(P),
                            e = l({}, R, p(this).data());
                        "object" == typeof i && (e = l({}, e, i));
                        var n = "string" == typeof i ? i : e.slide;
                        if (t || (t = new r(this, e),
                                p(this).data(P, t)),
                            "number" == typeof i)
                            t.to(i);
                        else if ("string" == typeof n) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        } else
                            e.interval && (t.pause(),
                                t.cycle())
                    })
                },
                r._dataApiClickHandler = function(t) {
                    var e = m.getSelectorFromElement(this);
                    if (e) {
                        var n = p(e)[0];
                        if (n && p(n).hasClass(K)) {
                            var i = l({}, p(n).data(), p(this).data()),
                                o = this.getAttribute("data-slide-to");
                            o && (i.interval = !1),
                                r._jQueryInterface.call(p(n), i),
                                o && p(n).data(P).to(o),
                                t.preventDefault()
                        }
                    }
                },
                s(r, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return R
                    }
                }]),
                r
        }();
    p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler),
        p(window).on(q.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
                var i = p(t[e]);
                at._jQueryInterface.call(i, i.data())
            }
        }),
        p.fn[L] = at._jQueryInterface,
        p.fn[L].Constructor = at,
        p.fn[L].noConflict = function() {
            return p.fn[L] = j,
                at._jQueryInterface
        };
    var lt = "collapse",
        ct = "bs.collapse",
        ht = "." + ct,
        ut = p.fn[lt],
        ft = {
            toggle: !0,
            parent: ""
        },
        dt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        pt = {
            SHOW: "show" + ht,
            SHOWN: "shown" + ht,
            HIDE: "hide" + ht,
            HIDDEN: "hidden" + ht,
            CLICK_DATA_API: "click" + ht + ".data-api"
        },
        mt = "show",
        gt = "collapse",
        _t = "collapsing",
        vt = "collapsed",
        yt = "width",
        Et = "height",
        bt = ".show, .collapsing",
        wt = '[data-toggle="collapse"]',
        Tt = function() {
            function a(e, t) {
                this._isTransitioning = !1,
                    this._element = e,
                    this._config = this._getConfig(t),
                    this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(wt)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = m.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s,
                        this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                    this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                    this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                    p(this._element).hasClass(mt) ? this.hide() : this.show()
                },
                t.show = function() {
                    var t, e, n = this;
                    if (!this._isTransitioning && !p(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(bt)).filter(function(t) {
                            return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(gt)
                        })).length && (t = null), !(t && (e = p(t).not(this._selector).data(ct)) && e._isTransitioning))) {
                        var i = p.Event(pt.SHOW);
                        if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                            t && (a._jQueryInterface.call(p(t).not(this._selector), "hide"),
                                e || p(t).data(ct, null));
                            var o = this._getDimension();
                            p(this._element).removeClass(gt).addClass(_t),
                                this._element.style[o] = 0,
                                this._triggerArray.length && p(this._triggerArray).removeClass(vt).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                                s = m.getTransitionDurationFromElement(this._element);
                            p(this._element).one(m.TRANSITION_END, function() {
                                    p(n._element).removeClass(_t).addClass(gt).addClass(mt),
                                        n._element.style[o] = "",
                                        n.setTransitioning(!1),
                                        p(n._element).trigger(pt.SHOWN)
                                }).emulateTransitionEnd(s),
                                this._element.style[o] = this._element[r] + "px"
                        }
                    }
                },
                t.hide = function() {
                    var t = this;
                    if (!this._isTransitioning && p(this._element).hasClass(mt)) {
                        var e = p.Event(pt.HIDE);
                        if (p(this._element).trigger(e), !e.isDefaultPrevented()) {
                            var n = this._getDimension();
                            this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                                m.reflow(this._element),
                                p(this._element).addClass(_t).removeClass(gt).removeClass(mt);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var o = 0; o < i; o++) {
                                    var r = this._triggerArray[o],
                                        s = m.getSelectorFromElement(r);
                                    if (null !== s)
                                        p([].slice.call(document.querySelectorAll(s))).hasClass(mt) || p(r).addClass(vt).attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var a = m.getTransitionDurationFromElement(this._element);
                            p(this._element).one(m.TRANSITION_END, function() {
                                t.setTransitioning(!1),
                                    p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN)
                            }).emulateTransitionEnd(a)
                        }
                    }
                },
                t.setTransitioning = function(t) {
                    this._isTransitioning = t
                },
                t.dispose = function() {
                    p.removeData(this._element, ct),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                },
                t._getConfig = function(t) {
                    return (t = l({}, ft, t)).toggle = Boolean(t.toggle),
                        m.typeCheckConfig(lt, t, dt),
                        t
                },
                t._getDimension = function() {
                    return p(this._element).hasClass(yt) ? yt : Et
                },
                t._getParent = function() {
                    var t, n = this;
                    m.isElement(this._config.parent) ? (t = this._config.parent,
                        "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                    var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        i = [].slice.call(t.querySelectorAll(e));
                    return p(i).each(function(t, e) {
                            n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                        }),
                        t
                },
                t._addAriaAndCollapsedClass = function(t, e) {
                    var n = p(t).hasClass(mt);
                    e.length && p(e).toggleClass(vt, !n).attr("aria-expanded", n)
                },
                a._getTargetFromElement = function(t) {
                    var e = m.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null
                },
                a._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = p(this),
                            e = t.data(ct),
                            n = l({}, ft, t.data(), "object" == typeof i && i ? i : {});
                        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                            e || (e = new a(this, n),
                                t.data(ct, e)),
                            "string" == typeof i) {
                            if ("undefined" == typeof e[i])
                                throw new TypeError('No method named "' + i + '"');
                            e[i]()
                        }
                    })
                },
                s(a, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ft
                    }
                }]),
                a
        }();
    p(document).on(pt.CLICK_DATA_API, wt, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = p(this),
                e = m.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(e));
            p(i).each(function() {
                var t = p(this),
                    e = t.data(ct) ? "toggle" : n.data();
                Tt._jQueryInterface.call(t, e)
            })
        }),
        p.fn[lt] = Tt._jQueryInterface,
        p.fn[lt].Constructor = Tt,
        p.fn[lt].noConflict = function() {
            return p.fn[lt] = ut,
                Tt._jQueryInterface
        };
    for (var Ct = "undefined" != typeof window && "undefined" != typeof document, St = ["Edge", "Trident", "Firefox"], Dt = 0, It = 0; It < St.length; It += 1)
        if (Ct && 0 <= navigator.userAgent.indexOf(St[It])) {
            Dt = 1;
            break
        }
    var At = Ct && window.Promise ? function(t) {
            var e = !1;
            return function() {
                e || (e = !0,
                    window.Promise.resolve().then(function() {
                        e = !1,
                            t()
                    }))
            }
        } :
        function(t) {
            var e = !1;
            return function() {
                e || (e = !0,
                    setTimeout(function() {
                        e = !1,
                            t()
                    }, Dt))
            }
        };

    function Ot(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function Nt(t, e) {
        if (1 !== t.nodeType)
            return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function kt(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function Lt(t) {
        if (!t)
            return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = Nt(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : Lt(kt(t))
    }
    var Pt = Ct && !(!window.MSInputMethodContext || !document.documentMode),
        xt = Ct && /MSIE 10/.test(navigator.userAgent);

    function Ht(t) {
        return 11 === t ? Pt : 10 === t ? xt : Pt || xt
    }

    function jt(t) {
        if (!t)
            return document.documentElement;
        for (var e = Ht(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;)
            n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Nt(n, "position") ? jt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function Rt(t) {
        return null !== t.parentNode ? Rt(t.parentNode) : t
    }

    function Ft(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0),
            r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(o))
            return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && jt(s.firstElementChild) !== s ? jt(l) : l;
        var c = Rt(t);
        return c.host ? Ft(c.host, e) : Ft(t, Rt(e).host)
    }

    function Mt(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" !== n && "HTML" !== n)
            return t[e];
        var i = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || i)[e]
    }

    function Wt(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function Ut(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Ht(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function Bt(t) {
        var e = t.body,
            n = t.documentElement,
            i = Ht(10) && getComputedStyle(n);
        return {
            height: Ut("Height", e, n, i),
            width: Ut("Width", e, n, i)
        }
    }
    var qt = function() {
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                }
            }
            return function(t, e, n) {
                return e && i(t.prototype, e),
                    n && i(t, n),
                    t
            }
        }(),
        Kt = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
        },
        Qt = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

    function Yt(t) {
        return Qt({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function Vt(t) {
        var e = {};
        try {
            if (Ht(10)) {
                e = t.getBoundingClientRect();
                var n = Mt(t, "top"),
                    i = Mt(t, "left");
                e.top += n,
                    e.left += i,
                    e.bottom += n,
                    e.right += i
            } else
                e = t.getBoundingClientRect()
        } catch (t) {}
        var o = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            r = "HTML" === t.nodeName ? Bt(t.ownerDocument) : {},
            s = r.width || t.clientWidth || o.right - o.left,
            a = r.height || t.clientHeight || o.bottom - o.top,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a;
        if (l || c) {
            var h = Nt(t);
            l -= Wt(h, "x"),
                c -= Wt(h, "y"),
                o.width -= l,
                o.height -= c
        }
        return Yt(o)
    }

    function Xt(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Ht(10),
            o = "HTML" === e.nodeName,
            r = Vt(t),
            s = Vt(e),
            a = Lt(t),
            l = Nt(e),
            c = parseFloat(l.borderTopWidth, 10),
            h = parseFloat(l.borderLeftWidth, 10);
        n && o && (s.top = Math.max(s.top, 0),
            s.left = Math.max(s.left, 0));
        var u = Yt({
            top: r.top - s.top - c,
            left: r.left - s.left - h,
            width: r.width,
            height: r.height
        });
        if (u.marginTop = 0,
            u.marginLeft = 0, !i && o) {
            var f = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            u.top -= c - f,
                u.bottom -= c - f,
                u.left -= h - d,
                u.right -= h - d,
                u.marginTop = f,
                u.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = function(t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    i = Mt(e, "top"),
                    o = Mt(e, "left"),
                    r = n ? -1 : 1;
                return t.top += i * r,
                    t.bottom += i * r,
                    t.left += o * r,
                    t.right += o * r,
                    t
            }(u, e)),
            u
    }

    function zt(t) {
        if (!t || !t.parentElement || Ht())
            return document.documentElement;
        for (var e = t.parentElement; e && "none" === Nt(e, "transform");)
            e = e.parentElement;
        return e || document.documentElement
    }

    function Gt(t, e, n, i) {
        var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            r = {
                top: 0,
                left: 0
            },
            s = o ? zt(t) : Ft(t, e);
        if ("viewport" === i)
            r = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    n = t.ownerDocument.documentElement,
                    i = Xt(t, n),
                    o = Math.max(n.clientWidth, window.innerWidth || 0),
                    r = Math.max(n.clientHeight, window.innerHeight || 0),
                    s = e ? 0 : Mt(n),
                    a = e ? 0 : Mt(n, "left");
                return Yt({
                    top: s - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: o,
                    height: r
                })
            }(s, o);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = Lt(kt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = Xt(a, s, o);
            if ("HTML" !== a.nodeName || function t(e) {
                    var n = e.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === Nt(e, "position") || t(kt(e)))
                }(s))
                r = l;
            else {
                var c = Bt(t.ownerDocument),
                    h = c.height,
                    u = c.width;
                r.top += l.top - l.marginTop,
                    r.bottom = h + l.top,
                    r.left += l.left - l.marginLeft,
                    r.right = u + l.left
            }
        }
        var f = "number" == typeof(n = n || 0);
        return r.left += f ? n : n.left || 0,
            r.top += f ? n : n.top || 0,
            r.right -= f ? n : n.right || 0,
            r.bottom -= f ? n : n.bottom || 0,
            r
    }

    function Jt(t, e, i, n, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))
            return t;
        var s = Gt(i, n, r, o),
            a = {
                top: {
                    width: s.width,
                    height: e.top - s.top
                },
                right: {
                    width: s.right - e.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - e.bottom
                },
                left: {
                    width: e.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(t) {
                return Qt({
                    key: t
                }, a[t], {
                    area: (e = a[t],
                        e.width * e.height)
                });
                var e
            }).sort(function(t, e) {
                return e.area - t.area
            }),
            c = l.filter(function(t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            }),
            h = 0 < c.length ? c[0].key : l[0].key,
            u = t.split("-")[1];
        return h + (u ? "-" + u : "")
    }

    function Zt(t, e, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return Xt(n, i ? zt(e) : Ft(e, n), i)
    }

    function $t(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function te(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }

    function ee(t, e, n) {
        n = n.split("-")[0];
        var i = $t(t),
            o = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2,
            o[a] = n === a ? e[a] - i[c] : e[te(a)],
            o
    }

    function ne(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function ie(t, n, e) {
        return (void 0 === e ? t : t.slice(0, function(t, e, n) {
                if (Array.prototype.findIndex)
                    return t.findIndex(function(t) {
                        return t[e] === n
                    });
                var i = ne(t, function(t) {
                    return t[e] === n
                });
                return t.indexOf(i)
            }(t, "name", e))).forEach(function(t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var e = t.function || t.fn;
                t.enabled && Ot(e) && (n.offsets.popper = Yt(n.offsets.popper),
                    n.offsets.reference = Yt(n.offsets.reference),
                    n = e(n, t))
            }),
            n
    }

    function oe(t, n) {
        return t.some(function(t) {
            var e = t.name;
            return t.enabled && e === n
        })
    }

    function re(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i],
                r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r])
                return r
        }
        return null
    }

    function se(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function ae(t, e, n, i) {
        n.updateBound = i,
            se(t).addEventListener("resize", n.updateBound, {
                passive: !0
            });
        var o = Lt(t);
        return function t(e, n, i, o) {
                var r = "BODY" === e.nodeName,
                    s = r ? e.ownerDocument.defaultView : e;
                s.addEventListener(n, i, {
                        passive: !0
                    }),
                    r || t(Lt(s.parentNode), n, i, o),
                    o.push(s)
            }(o, "scroll", n.updateBound, n.scrollParents),
            n.scrollElement = o,
            n.eventsEnabled = !0,
            n
    }

    function le() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = (t = this.reference,
                e = this.state,
                se(t).removeEventListener("resize", e.updateBound),
                e.scrollParents.forEach(function(t) {
                    t.removeEventListener("scroll", e.updateBound)
                }),
                e.updateBound = null,
                e.scrollParents = [],
                e.scrollElement = null,
                e.eventsEnabled = !1,
                e))
    }

    function ce(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function he(n, i) {
        Object.keys(i).forEach(function(t) {
            var e = ""; -
            1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ce(i[t]) && (e = "px"),
                n.style[t] = i[t] + e
        })
    }
    var ue = Ct && /Firefox/i.test(navigator.userAgent);

    function fe(t, e, n) {
        var i = ne(t, function(t) {
                return t.name === e
            }),
            o = !!i && t.some(function(t) {
                return t.name === n && t.enabled && t.order < i.order
            });
        if (!o) {
            var r = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        pe = de.slice(3);

    function me(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = pe.indexOf(t),
            i = pe.slice(n + 1).concat(pe.slice(0, n));
        return e ? i.reverse() : i
    }
    var ge = "flip",
        _e = "clockwise",
        ve = "counterclockwise";

    function ye(t, o, r, e) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(e),
            n = t.split(/(\+|\-)/).map(function(t) {
                return t.trim()
            }),
            i = n.indexOf(ne(n, function(t) {
                return -1 !== t.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(t, e) {
                var n = (1 === e ? !a : a) ? "height" : "width",
                    i = !1;
                return t.reduce(function(t, e) {
                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                        i = !0,
                        t) : i ? (t[t.length - 1] += e,
                        i = !1,
                        t) : t.concat(e)
                }, []).map(function(t) {
                    return function(t, e, n, i) {
                        var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                            r = +o[1],
                            s = o[2];
                        if (!r)
                            return t;
                        if (0 !== s.indexOf("%"))
                            return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return Yt(a)[e] / 100 * r
                    }(t, n, o, r)
                })
            })).forEach(function(n, i) {
                n.forEach(function(t, e) {
                    ce(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1))
                })
            }),
            s
    }
    var Ee = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var o = t.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                h = {
                                    start: Kt({}, l, r[l]),
                                    end: Kt({}, l, r[l] + r[c] - s[c])
                                };
                            t.offsets.popper = Qt({}, s, h[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = ce(+n) ? [+n, 0] : ye(n, r, s, a),
                            "left" === a ? (r.top += l[0],
                                r.left -= l[1]) : "right" === a ? (r.top += l[0],
                                r.left += l[1]) : "top" === a ? (r.left += l[0],
                                r.top -= l[1]) : "bottom" === a && (r.left += l[0],
                                r.top += l[1]),
                            t.popper = r,
                            t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, i) {
                        var e = i.boundariesElement || jt(t.instance.popper);
                        t.instance.reference === e && (e = jt(e));
                        var n = re("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[n];
                        o.top = "",
                            o.left = "",
                            o[n] = "";
                        var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
                        o.top = r,
                            o.left = s,
                            o[n] = a,
                            i.boundaries = l;
                        var c = i.priority,
                            h = t.offsets.popper,
                            u = {
                                primary: function(t) {
                                    var e = h[t];
                                    return h[t] < l[t] && !i.escapeWithReference && (e = Math.max(h[t], l[t])),
                                        Kt({}, t, e)
                                },
                                secondary: function(t) {
                                    var e = "right" === t ? "left" : "top",
                                        n = h[e];
                                    return h[t] > l[t] && !i.escapeWithReference && (n = Math.min(h[e], l[t] - ("right" === t ? h.width : h.height))),
                                        Kt({}, e, n)
                                }
                            };
                        return c.forEach(function(t) {
                                var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                h = Qt({}, h, u[e](t))
                            }),
                            t.offsets.popper = h,
                            t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
                            n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
                            t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!fe(t.instance.modifiers, "arrow", "keepTogether"))
                            return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i)))
                                return t
                        } else if (!t.instance.popper.contains(i))
                            return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                                t;
                        var o = t.placement.split("-")[0],
                            r = t.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            c = l ? "height" : "width",
                            h = l ? "Top" : "Left",
                            u = h.toLowerCase(),
                            f = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = $t(i)[c];
                        a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)),
                            a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]),
                            t.offsets.popper = Yt(t.offsets.popper);
                        var m = a[u] + a[c] / 2 - p / 2,
                            g = Nt(t.instance.popper),
                            _ = parseFloat(g["margin" + h], 10),
                            v = parseFloat(g["border" + h + "Width"], 10),
                            y = m - t.offsets.popper[u] - _ - v;
                        return y = Math.max(Math.min(s[c] - p, y), 0),
                            t.arrowElement = i,
                            t.offsets.arrow = (Kt(n = {}, u, Math.round(y)),
                                Kt(n, f, ""),
                                n),
                            t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(p, m) {
                        if (oe(p.instance.modifiers, "inner"))
                            return p;
                        if (p.flipped && p.placement === p.originalPlacement)
                            return p;
                        var g = Gt(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
                            _ = p.placement.split("-")[0],
                            v = te(_),
                            y = p.placement.split("-")[1] || "",
                            E = [];
                        switch (m.behavior) {
                            case ge:
                                E = [_, v];
                                break;
                            case _e:
                                E = me(_);
                                break;
                            case ve:
                                E = me(_, !0);
                                break;
                            default:
                                E = m.behavior
                        }
                        return E.forEach(function(t, e) {
                                if (_ !== t || E.length === e + 1)
                                    return p;
                                _ = p.placement.split("-")[0],
                                    v = te(_);
                                var n, i = p.offsets.popper,
                                    o = p.offsets.reference,
                                    r = Math.floor,
                                    s = "left" === _ && r(i.right) > r(o.left) || "right" === _ && r(i.left) < r(o.right) || "top" === _ && r(i.bottom) > r(o.top) || "bottom" === _ && r(i.top) < r(o.bottom),
                                    a = r(i.left) < r(g.left),
                                    l = r(i.right) > r(g.right),
                                    c = r(i.top) < r(g.top),
                                    h = r(i.bottom) > r(g.bottom),
                                    u = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && h,
                                    f = -1 !== ["top", "bottom"].indexOf(_),
                                    d = !!m.flipVariations && (f && "start" === y && a || f && "end" === y && l || !f && "start" === y && c || !f && "end" === y && h);
                                (s || u || d) && (p.flipped = !0,
                                    (s || u) && (_ = E[e + 1]),
                                    d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n),
                                    p.placement = _ + (y ? "-" + y : ""),
                                    p.offsets.popper = Qt({}, p.offsets.popper, ee(p.instance.popper, p.offsets.reference, p.placement)),
                                    p = ie(p.instance.modifiers, p, "flip"))
                            }),
                            p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0),
                            t.placement = te(e),
                            t.offsets.popper = Yt(o),
                            t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!fe(t.instance.modifiers, "hide", "preventOverflow"))
                            return t;
                        var e = t.offsets.reference,
                            n = ne(t.instance.modifiers, function(t) {
                                return "preventOverflow" === t.name
                            }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide)
                                return t;
                            t.hide = !0,
                                t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide)
                                return t;
                            t.hide = !1,
                                t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = ne(t.instance.modifiers, function(t) {
                                return "applyStyle" === t.name
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, a, l, c, h, u, f, d, p, m, g, _, v = void 0 !== r ? r : e.gpuAcceleration,
                            y = jt(t.instance.popper),
                            E = Vt(y),
                            b = {
                                position: o.position
                            },
                            w = (s = t,
                                a = window.devicePixelRatio < 2 || !ue,
                                l = s.offsets,
                                c = l.popper,
                                h = l.reference,
                                u = -1 !== ["left", "right"].indexOf(s.placement),
                                f = -1 !== s.placement.indexOf("-"),
                                d = h.width % 2 == c.width % 2,
                                p = h.width % 2 == 1 && c.width % 2 == 1,
                                m = function(t) {
                                    return t
                                },
                                g = a ? u || f || d ? Math.round : Math.floor : m,
                                _ = a ? Math.round : m, {
                                    left: g(p && !f && a ? c.left - 1 : c.left),
                                    top: _(c.top),
                                    bottom: _(c.bottom),
                                    right: g(c.right)
                                }),
                            T = "bottom" === n ? "top" : "bottom",
                            C = "right" === i ? "left" : "right",
                            S = re("transform"),
                            D = void 0,
                            I = void 0;
                        if (I = "bottom" === T ? "HTML" === y.nodeName ? -y.clientHeight + w.bottom : -E.height + w.bottom : w.top,
                            D = "right" === C ? "HTML" === y.nodeName ? -y.clientWidth + w.right : -E.width + w.right : w.left,
                            v && S)
                            b[S] = "translate3d(" + D + "px, " + I + "px, 0)",
                            b[T] = 0,
                            b[C] = 0,
                            b.willChange = "transform";
                        else {
                            var A = "bottom" === T ? -1 : 1,
                                O = "right" === C ? -1 : 1;
                            b[T] = I * A,
                                b[C] = D * O,
                                b.willChange = T + ", " + C
                        }
                        var N = {
                            "x-placement": t.placement
                        };
                        return t.attributes = Qt({}, N, t.attributes),
                            t.styles = Qt({}, b, t.styles),
                            t.arrowStyles = Qt({}, t.offsets.arrow, t.arrowStyles),
                            t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, n;
                        return he(t.instance.popper, t.styles),
                            e = t.instance.popper,
                            n = t.attributes,
                            Object.keys(n).forEach(function(t) {
                                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                            }),
                            t.arrowElement && Object.keys(t.arrowStyles).length && he(t.arrowElement, t.arrowStyles),
                            t
                    },
                    onLoad: function(t, e, n, i, o) {
                        var r = Zt(o, e, t, n.positionFixed),
                            s = Jt(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s),
                            he(e, {
                                position: n.positionFixed ? "fixed" : "absolute"
                            }),
                            n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        be = function() {
            function r(t, e) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                this.scheduleUpdate = function() {
                        return requestAnimationFrame(n.update)
                    },
                    this.update = At(this.update.bind(this)),
                    this.options = Qt({}, r.Defaults, i),
                    this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    },
                    this.reference = t && t.jquery ? t[0] : t,
                    this.popper = e && e.jquery ? e[0] : e,
                    this.options.modifiers = {},
                    Object.keys(Qt({}, r.Defaults.modifiers, i.modifiers)).forEach(function(t) {
                        n.options.modifiers[t] = Qt({}, r.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                    }),
                    this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                        return Qt({
                            name: t
                        }, n.options.modifiers[t])
                    }).sort(function(t, e) {
                        return t.order - e.order
                    }),
                    this.modifiers.forEach(function(t) {
                        t.enabled && Ot(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                    }),
                    this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(),
                    this.state.eventsEnabled = o
            }
            return qt(r, [{
                    key: "update",
                    value: function() {
                        return function() {
                                if (!this.state.isDestroyed) {
                                    var t = {
                                        instance: this,
                                        styles: {},
                                        arrowStyles: {},
                                        attributes: {},
                                        flipped: !1,
                                        offsets: {}
                                    };
                                    t.offsets.reference = Zt(this.state, this.popper, this.reference, this.options.positionFixed),
                                        t.placement = Jt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                                        t.originalPlacement = t.placement,
                                        t.positionFixed = this.options.positionFixed,
                                        t.offsets.popper = ee(this.popper, t.offsets.reference, t.placement),
                                        t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                                        t = ie(this.modifiers, t),
                                        this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
                                            this.options.onCreate(t))
                                }
                            }
                            .call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return function() {
                                return this.state.isDestroyed = !0,
                                    oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                                        this.popper.style.position = "",
                                        this.popper.style.top = "",
                                        this.popper.style.left = "",
                                        this.popper.style.right = "",
                                        this.popper.style.bottom = "",
                                        this.popper.style.willChange = "",
                                        this.popper.style[re("transform")] = ""),
                                    this.disableEventListeners(),
                                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                    this
                            }
                            .call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return function() {
                                this.state.eventsEnabled || (this.state = ae(this.reference, this.options, this.state, this.scheduleUpdate))
                            }
                            .call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return le.call(this)
                    }
                }]),
                r
        }();
    be.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
        be.placements = de,
        be.Defaults = Ee;
    var we = "dropdown",
        Te = "bs.dropdown",
        Ce = "." + Te,
        Se = ".data-api",
        De = p.fn[we],
        Ie = new RegExp("38|40|27"),
        Ae = {
            HIDE: "hide" + Ce,
            HIDDEN: "hidden" + Ce,
            SHOW: "show" + Ce,
            SHOWN: "shown" + Ce,
            CLICK: "click" + Ce,
            CLICK_DATA_API: "click" + Ce + Se,
            KEYDOWN_DATA_API: "keydown" + Ce + Se,
            KEYUP_DATA_API: "keyup" + Ce + Se
        },
        Oe = "disabled",
        Ne = "show",
        ke = "dropup",
        Le = "dropright",
        Pe = "dropleft",
        xe = "dropdown-menu-right",
        He = "position-static",
        je = '[data-toggle="dropdown"]',
        Re = ".dropdown form",
        Fe = ".dropdown-menu",
        Me = ".navbar-nav",
        We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Ue = "top-start",
        Be = "top-end",
        qe = "bottom-start",
        Ke = "bottom-end",
        Qe = "right-start",
        Ye = "left-start",
        Ve = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        Xe = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        ze = function() {
            function c(t, e) {
                this._element = t,
                    this._popper = null,
                    this._config = this._getConfig(e),
                    this._menu = this._getMenuElement(),
                    this._inNavbar = this._detectNavbar(),
                    this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function() {
                    if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
                        var t = c._getParentFromElement(this._element),
                            e = p(this._menu).hasClass(Ne);
                        if (c._clearMenus(), !e) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = p.Event(Ae.SHOW, n);
                            if (p(t).trigger(i), !i.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if ("undefined" == typeof be)
                                        throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                    var o = this._element;
                                    "parent" === this._config.reference ? o = t : m.isElement(this._config.reference) && (o = this._config.reference,
                                            "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && p(t).addClass(He),
                                        this._popper = new be(o, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === p(t).closest(Me).length && p(document.body).children().on("mouseover", null, p.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    p(this._menu).toggleClass(Ne),
                                    p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n))
                            }
                        }
                    }
                },
                t.show = function() {
                    if (!(this._element.disabled || p(this._element).hasClass(Oe) || p(this._menu).hasClass(Ne))) {
                        var t = {
                                relatedTarget: this._element
                            },
                            e = p.Event(Ae.SHOW, t),
                            n = c._getParentFromElement(this._element);
                        p(n).trigger(e),
                            e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne),
                                p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t)))
                    }
                },
                t.hide = function() {
                    if (!this._element.disabled && !p(this._element).hasClass(Oe) && p(this._menu).hasClass(Ne)) {
                        var t = {
                                relatedTarget: this._element
                            },
                            e = p.Event(Ae.HIDE, t),
                            n = c._getParentFromElement(this._element);
                        p(n).trigger(e),
                            e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne),
                                p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t)))
                    }
                },
                t.dispose = function() {
                    p.removeData(this._element, Te),
                        p(this._element).off(Ce),
                        this._element = null,
                        (this._menu = null) !== this._popper && (this._popper.destroy(),
                            this._popper = null)
                },
                t.update = function() {
                    this._inNavbar = this._detectNavbar(),
                        null !== this._popper && this._popper.scheduleUpdate()
                },
                t._addEventListeners = function() {
                    var e = this;
                    p(this._element).on(Ae.CLICK, function(t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            e.toggle()
                    })
                },
                t._getConfig = function(t) {
                    return t = l({}, this.constructor.Default, p(this._element).data(), t),
                        m.typeCheckConfig(we, t, this.constructor.DefaultType),
                        t
                },
                t._getMenuElement = function() {
                    if (!this._menu) {
                        var t = c._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(Fe))
                    }
                    return this._menu
                },
                t._getPlacement = function() {
                    var t = p(this._element.parentNode),
                        e = qe;
                    return t.hasClass(ke) ? (e = Ue,
                            p(this._menu).hasClass(xe) && (e = Be)) : t.hasClass(Le) ? e = Qe : t.hasClass(Pe) ? e = Ye : p(this._menu).hasClass(xe) && (e = Ke),
                        e
                },
                t._detectNavbar = function() {
                    return 0 < p(this._element).closest(".navbar").length
                },
                t._getPopperConfig = function() {
                    var e = this,
                        t = {};
                    "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}),
                                t
                        } :
                        t.offset = this._config.offset;
                    var n = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: t,
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (n.modifiers.applyStyle = {
                            enabled: !1
                        }),
                        n
                },
                c._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = p(this).data(Te);
                        if (t || (t = new c(this, "object" == typeof e ? e : null),
                                p(this).data(Te, t)),
                            "string" == typeof e) {
                            if ("undefined" == typeof t[e])
                                throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                },
                c._clearMenus = function(t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var e = [].slice.call(document.querySelectorAll(je)), n = 0, i = e.length; n < i; n++) {
                            var o = c._getParentFromElement(e[n]),
                                r = p(e[n]).data(Te),
                                s = {
                                    relatedTarget: e[n]
                                };
                            if (t && "click" === t.type && (s.clickEvent = t),
                                r) {
                                var a = r._menu;
                                if (p(o).hasClass(Ne) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && p.contains(o, t.target))) {
                                    var l = p.Event(Ae.HIDE, s);
                                    p(o).trigger(l),
                                        l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                                            e[n].setAttribute("aria-expanded", "false"),
                                            p(a).removeClass(Ne),
                                            p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s)))
                                }
                            }
                        }
                },
                c._getParentFromElement = function(t) {
                    var e, n = m.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)),
                        e || t.parentNode
                },
                c._dataApiKeydownHandler = function(t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || p(t.target).closest(Fe).length)) : Ie.test(t.which)) && (t.preventDefault(),
                            t.stopPropagation(), !this.disabled && !p(this).hasClass(Oe))) {
                        var e = c._getParentFromElement(this),
                            n = p(e).hasClass(Ne);
                        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                            var i = [].slice.call(e.querySelectorAll(We));
                            if (0 !== i.length) {
                                var o = i.indexOf(t.target);
                                38 === t.which && 0 < o && o--,
                                    40 === t.which && o < i.length - 1 && o++,
                                    o < 0 && (o = 0),
                                    i[o].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var r = e.querySelector(je);
                                p(r).trigger("focus")
                            }
                            p(this).trigger("click")
                        }
                    }
                },
                s(c, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ve
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Xe
                    }
                }]),
                c
        }();
    p(document).on(Ae.KEYDOWN_DATA_API, je, ze._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, Fe, ze._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, ze._clearMenus).on(Ae.CLICK_DATA_API, je, function(t) {
            t.preventDefault(),
                t.stopPropagation(),
                ze._jQueryInterface.call(p(this), "toggle")
        }).on(Ae.CLICK_DATA_API, Re, function(t) {
            t.stopPropagation()
        }),
        p.fn[we] = ze._jQueryInterface,
        p.fn[we].Constructor = ze,
        p.fn[we].noConflict = function() {
            return p.fn[we] = De,
                ze._jQueryInterface
        };
    var Ge = "modal",
        Je = "bs.modal",
        Ze = "." + Je,
        $e = p.fn[Ge],
        tn = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        en = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        nn = {
            HIDE: "hide" + Ze,
            HIDDEN: "hidden" + Ze,
            SHOW: "show" + Ze,
            SHOWN: "shown" + Ze,
            FOCUSIN: "focusin" + Ze,
            RESIZE: "resize" + Ze,
            CLICK_DISMISS: "click.dismiss" + Ze,
            KEYDOWN_DISMISS: "keydown.dismiss" + Ze,
            MOUSEUP_DISMISS: "mouseup.dismiss" + Ze,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ze,
            CLICK_DATA_API: "click" + Ze + ".data-api"
        },
        on = "modal-scrollbar-measure",
        rn = "modal-backdrop",
        sn = "modal-open",
        an = "fade",
        ln = "show",
        cn = ".modal-dialog",
        hn = '[data-toggle="modal"]',
        un = '[data-dismiss="modal"]',
        fn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        dn = ".sticky-top",
        pn = function() {
            function o(t, e) {
                this._config = this._getConfig(e),
                    this._element = t,
                    this._dialog = t.querySelector(cn),
                    this._backdrop = null,
                    this._isShown = !1,
                    this._isBodyOverflowing = !1,
                    this._ignoreBackdropClick = !1,
                    this._isTransitioning = !1,
                    this._scrollbarWidth = 0
            }
            var t = o.prototype;
            return t.toggle = function(t) {
                    return this._isShown ? this.hide() : this.show(t)
                },
                t.show = function(t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        p(this._element).hasClass(an) && (this._isTransitioning = !0);
                        var n = p.Event(nn.SHOW, {
                            relatedTarget: t
                        });
                        p(this._element).trigger(n),
                            this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                p(this._element).on(nn.CLICK_DISMISS, un, function(t) {
                                    return e.hide(t)
                                }),
                                p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function() {
                                    p(e._element).one(nn.MOUSEUP_DISMISS, function(t) {
                                        p(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                                    })
                                }),
                                this._showBackdrop(function() {
                                    return e._showElement(t)
                                }))
                    }
                },
                t.hide = function(t) {
                    var e = this;
                    if (t && t.preventDefault(),
                        this._isShown && !this._isTransitioning) {
                        var n = p.Event(nn.HIDE);
                        if (p(this._element).trigger(n),
                            this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = p(this._element).hasClass(an);
                            if (i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                p(document).off(nn.FOCUSIN),
                                p(this._element).removeClass(ln),
                                p(this._element).off(nn.CLICK_DISMISS),
                                p(this._dialog).off(nn.MOUSEDOWN_DISMISS),
                                i) {
                                var o = m.getTransitionDurationFromElement(this._element);
                                p(this._element).one(m.TRANSITION_END, function(t) {
                                    return e._hideModal(t)
                                }).emulateTransitionEnd(o)
                            } else
                                this._hideModal()
                        }
                    }
                },
                t.dispose = function() {
                    [window, this._element, this._dialog].forEach(function(t) {
                            return p(t).off(Ze)
                        }),
                        p(document).off(nn.FOCUSIN),
                        p.removeData(this._element, Je),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._isTransitioning = null,
                        this._scrollbarWidth = null
                },
                t.handleUpdate = function() {
                    this._adjustDialog()
                },
                t._getConfig = function(t) {
                    return t = l({}, tn, t),
                        m.typeCheckConfig(Ge, t, en),
                        t
                },
                t._showElement = function(t) {
                    var e = this,
                        n = p(this._element).hasClass(an);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.scrollTop = 0,
                        n && m.reflow(this._element),
                        p(this._element).addClass(ln),
                        this._config.focus && this._enforceFocus();
                    var i = p.Event(nn.SHOWN, {
                            relatedTarget: t
                        }),
                        o = function() {
                            e._config.focus && e._element.focus(),
                                e._isTransitioning = !1,
                                p(e._element).trigger(i)
                        };
                    if (n) {
                        var r = m.getTransitionDurationFromElement(this._dialog);
                        p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else
                        o()
                },
                t._enforceFocus = function() {
                    var e = this;
                    p(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function(t) {
                        document !== t.target && e._element !== t.target && 0 === p(e._element).has(t.target).length && e._element.focus()
                    })
                },
                t._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? p(this._element).on(nn.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && (t.preventDefault(),
                            e.hide())
                    }) : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS)
                },
                t._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? p(window).on(nn.RESIZE, function(t) {
                        return e.handleUpdate(t)
                    }) : p(window).off(nn.RESIZE)
                },
                t._hideModal = function() {
                    var t = this;
                    this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._isTransitioning = !1,
                        this._showBackdrop(function() {
                            p(document.body).removeClass(sn),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                p(t._element).trigger(nn.HIDDEN)
                        })
                },
                t._removeBackdrop = function() {
                    this._backdrop && (p(this._backdrop).remove(),
                        this._backdrop = null)
                },
                t._showBackdrop = function(t) {
                    var e = this,
                        n = p(this._element).hasClass(an) ? an : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"),
                            this._backdrop.className = rn,
                            n && this._backdrop.classList.add(n),
                            p(this._backdrop).appendTo(document.body),
                            p(this._element).on(nn.CLICK_DISMISS, function(t) {
                                e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                            }),
                            n && m.reflow(this._backdrop),
                            p(this._backdrop).addClass(ln), !t)
                            return;
                        if (!n)
                            return void t();
                        var i = m.getTransitionDurationFromElement(this._backdrop);
                        p(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        p(this._backdrop).removeClass(ln);
                        var o = function() {
                            e._removeBackdrop(),
                                t && t()
                        };
                        if (p(this._element).hasClass(an)) {
                            var r = m.getTransitionDurationFromElement(this._backdrop);
                            p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                        } else
                            o()
                    } else
                        t && t()
                },
                t._adjustDialog = function() {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                },
                t._resetAdjustments = function() {
                    this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                },
                t._checkScrollbar = function() {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                },
                t._setScrollbar = function() {
                    var o = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(fn)),
                            e = [].slice.call(document.querySelectorAll(dn));
                        p(t).each(function(t, e) {
                                var n = e.style.paddingRight,
                                    i = p(e).css("padding-right");
                                p(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                            }),
                            p(e).each(function(t, e) {
                                var n = e.style.marginRight,
                                    i = p(e).css("margin-right");
                                p(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                            });
                        var n = document.body.style.paddingRight,
                            i = p(document.body).css("padding-right");
                        p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                    p(document.body).addClass(sn)
                },
                t._resetScrollbar = function() {
                    var t = [].slice.call(document.querySelectorAll(fn));
                    p(t).each(function(t, e) {
                        var n = p(e).data("padding-right");
                        p(e).removeData("padding-right"),
                            e.style.paddingRight = n || ""
                    });
                    var e = [].slice.call(document.querySelectorAll("" + dn));
                    p(e).each(function(t, e) {
                        var n = p(e).data("margin-right");
                        "undefined" != typeof n && p(e).css("margin-right", n).removeData("margin-right")
                    });
                    var n = p(document.body).data("padding-right");
                    p(document.body).removeData("padding-right"),
                        document.body.style.paddingRight = n || ""
                },
                t._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    t.className = on,
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t),
                        e
                },
                o._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var t = p(this).data(Je),
                            e = l({}, tn, p(this).data(), "object" == typeof n && n ? n : {});
                        if (t || (t = new o(this, e),
                                p(this).data(Je, t)),
                            "string" == typeof n) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n](i)
                        } else
                            e.show && t.show(i)
                    })
                },
                s(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return tn
                    }
                }]),
                o
        }();
    p(document).on(nn.CLICK_DATA_API, hn, function(t) {
            var e, n = this,
                i = m.getSelectorFromElement(this);
            i && (e = document.querySelector(i));
            var o = p(e).data(Je) ? "toggle" : l({}, p(e).data(), p(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var r = p(e).one(nn.SHOW, function(t) {
                t.isDefaultPrevented() || r.one(nn.HIDDEN, function() {
                    p(n).is(":visible") && n.focus()
                })
            });
            pn._jQueryInterface.call(p(e), o, this)
        }),
        p.fn[Ge] = pn._jQueryInterface,
        p.fn[Ge].Constructor = pn,
        p.fn[Ge].noConflict = function() {
            return p.fn[Ge] = $e,
                pn._jQueryInterface
        };
    var mn = "tooltip",
        gn = "bs.tooltip",
        _n = "." + gn,
        vn = p.fn[mn],
        yn = "bs-tooltip",
        En = new RegExp("(^|\\s)" + yn + "\\S+", "g"),
        bn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        },
        wn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Tn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        },
        Cn = "show",
        Sn = "out",
        Dn = {
            HIDE: "hide" + _n,
            HIDDEN: "hidden" + _n,
            SHOW: "show" + _n,
            SHOWN: "shown" + _n,
            INSERTED: "inserted" + _n,
            CLICK: "click" + _n,
            FOCUSIN: "focusin" + _n,
            FOCUSOUT: "focusout" + _n,
            MOUSEENTER: "mouseenter" + _n,
            MOUSELEAVE: "mouseleave" + _n
        },
        In = "fade",
        An = "show",
        On = ".tooltip-inner",
        Nn = ".arrow",
        kn = "hover",
        Ln = "focus",
        Pn = "click",
        xn = "manual",
        Hn = function() {
            function i(t, e) {
                if ("undefined" == typeof be)
                    throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0,
                    this._timeout = 0,
                    this._hoverState = "",
                    this._activeTrigger = {},
                    this._popper = null,
                    this.element = t,
                    this.config = this._getConfig(e),
                    this.tip = null,
                    this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                    this._isEnabled = !0
                },
                t.disable = function() {
                    this._isEnabled = !1
                },
                t.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                },
                t.toggle = function(t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = p(t.currentTarget).data(e);
                            n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                                    p(t.currentTarget).data(e, n)),
                                n._activeTrigger.click = !n._activeTrigger.click,
                                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (p(this.getTipElement()).hasClass(An))
                                return void this._leave(null, this);
                            this._enter(null, this)
                        }
                },
                t.dispose = function() {
                    clearTimeout(this._timeout),
                        p.removeData(this.element, this.constructor.DATA_KEY),
                        p(this.element).off(this.constructor.EVENT_KEY),
                        p(this.element).closest(".modal").off("hide.bs.modal"),
                        this.tip && p(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                },
                t.show = function() {
                    var e = this;
                    if ("none" === p(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var t = p.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        p(this.element).trigger(t);
                        var n = m.findShadowRoot(this.element),
                            i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i)
                            return;
                        var o = this.getTipElement(),
                            r = m.getUID(this.constructor.NAME);
                        o.setAttribute("id", r),
                            this.element.setAttribute("aria-describedby", r),
                            this.setContent(),
                            this.config.animation && p(o).addClass(In);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                            a = this._getAttachment(s);
                        this.addAttachmentClass(a);
                        var l = this._getContainer();
                        p(o).data(this.constructor.DATA_KEY, this),
                            p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l),
                            p(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new be(this.element, o, {
                                placement: a,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: Nn
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function(t) {
                                    return e._handlePopperPlacementChange(t)
                                }
                            }),
                            p(o).addClass(An),
                            "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                        var c = function() {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            e._hoverState = null,
                                p(e.element).trigger(e.constructor.Event.SHOWN),
                                t === Sn && e._leave(null, e)
                        };
                        if (p(this.tip).hasClass(In)) {
                            var h = m.getTransitionDurationFromElement(this.tip);
                            p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h)
                        } else
                            c()
                    }
                },
                t.hide = function(t) {
                    var e = this,
                        n = this.getTipElement(),
                        i = p.Event(this.constructor.Event.HIDE),
                        o = function() {
                            e._hoverState !== Cn && n.parentNode && n.parentNode.removeChild(n),
                                e._cleanTipClass(),
                                e.element.removeAttribute("aria-describedby"),
                                p(e.element).trigger(e.constructor.Event.HIDDEN),
                                null !== e._popper && e._popper.destroy(),
                                t && t()
                        };
                    if (p(this.element).trigger(i), !i.isDefaultPrevented()) {
                        if (p(n).removeClass(An),
                            "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                            this._activeTrigger[Pn] = !1,
                            this._activeTrigger[Ln] = !1,
                            this._activeTrigger[kn] = !1,
                            p(this.tip).hasClass(In)) {
                            var r = m.getTransitionDurationFromElement(n);
                            p(n).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                        } else
                            o();
                        this._hoverState = ""
                    }
                },
                t.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                },
                t.isWithContent = function() {
                    return Boolean(this.getTitle())
                },
                t.addAttachmentClass = function(t) {
                    p(this.getTipElement()).addClass(yn + "-" + t)
                },
                t.getTipElement = function() {
                    return this.tip = this.tip || p(this.config.template)[0],
                        this.tip
                },
                t.setContent = function() {
                    var t = this.getTipElement();
                    this.setElementContent(p(t.querySelectorAll(On)), this.getTitle()),
                        p(t).removeClass(In + " " + An)
                },
                t.setElementContent = function(t, e) {
                    var n = this.config.html;
                    "object" == typeof e && (e.nodeType || e.jquery) ? n ? p(e).parent().is(t) || t.empty().append(e) : t.text(p(e).text()) : t[n ? "html" : "text"](e)
                },
                t.getTitle = function() {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                        t
                },
                t._getContainer = function() {
                    return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
                },
                t._getAttachment = function(t) {
                    return wn[t.toUpperCase()]
                },
                t._setListeners = function() {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function(t) {
                            if ("click" === t)
                                p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                                    return i.toggle(t)
                                });
                            else if (t !== xn) {
                                var e = t === kn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                    n = t === kn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                                p(i.element).on(e, i.config.selector, function(t) {
                                    return i._enter(t)
                                }).on(n, i.config.selector, function(t) {
                                    return i._leave(t)
                                })
                            }
                        }),
                        p(this.element).closest(".modal").on("hide.bs.modal", function() {
                            i.element && i.hide()
                        }),
                        this.config.selector ? this.config = l({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                },
                t._fixTitle = function() {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""))
                },
                t._enter = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                        p(t.currentTarget).data(n, e)),
                    t && (e._activeTrigger["focusin" === t.type ? Ln : kn] = !0),
                        p(e.getTipElement()).hasClass(An) || e._hoverState === Cn ? e._hoverState = Cn : (clearTimeout(e._timeout),
                            e._hoverState = Cn,
                            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                                e._hoverState === Cn && e.show()
                            }, e.config.delay.show) : e.show())
                },
                t._leave = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                        p(t.currentTarget).data(n, e)),
                    t && (e._activeTrigger["focusout" === t.type ? Ln : kn] = !1),
                        e._isWithActiveTrigger() || (clearTimeout(e._timeout),
                            e._hoverState = Sn,
                            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                                e._hoverState === Sn && e.hide()
                            }, e.config.delay.hide) : e.hide())
                },
                t._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t])
                            return !0;
                    return !1
                },
                t._getConfig = function(t) {
                    return "number" == typeof(t = l({}, this.constructor.Default, p(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        m.typeCheckConfig(mn, t, this.constructor.DefaultType),
                        t
                },
                t._getDelegateConfig = function() {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                },
                t._cleanTipClass = function() {
                    var t = p(this.getTipElement()),
                        e = t.attr("class").match(En);
                    null !== e && e.length && t.removeClass(e.join(""))
                },
                t._handlePopperPlacementChange = function(t) {
                    var e = t.instance;
                    this.tip = e.popper,
                        this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(t.placement))
                },
                t._fixTransition = function() {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") && (p(t).removeClass(In),
                        this.config.animation = !1,
                        this.hide(),
                        this.show(),
                        this.config.animation = e)
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = p(this).data(gn),
                            e = "object" == typeof n && n;
                        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e),
                                    p(this).data(gn, t)),
                                "string" == typeof n)) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Tn
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return mn
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return gn
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Dn
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return _n
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return bn
                    }
                }]),
                i
        }();
    p.fn[mn] = Hn._jQueryInterface,
        p.fn[mn].Constructor = Hn,
        p.fn[mn].noConflict = function() {
            return p.fn[mn] = vn,
                Hn._jQueryInterface
        };
    var jn = "popover",
        Rn = "bs.popover",
        Fn = "." + Rn,
        Mn = p.fn[jn],
        Wn = "bs-popover",
        Un = new RegExp("(^|\\s)" + Wn + "\\S+", "g"),
        Bn = l({}, Hn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        qn = l({}, Hn.DefaultType, {
            content: "(string|element|function)"
        }),
        Kn = "fade",
        Qn = "show",
        Yn = ".popover-header",
        Vn = ".popover-body",
        Xn = {
            HIDE: "hide" + Fn,
            HIDDEN: "hidden" + Fn,
            SHOW: "show" + Fn,
            SHOWN: "shown" + Fn,
            INSERTED: "inserted" + Fn,
            CLICK: "click" + Fn,
            FOCUSIN: "focusin" + Fn,
            FOCUSOUT: "focusout" + Fn,
            MOUSEENTER: "mouseenter" + Fn,
            MOUSELEAVE: "mouseleave" + Fn
        },
        zn = function(t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t,
                (e = i).prototype = Object.create(n.prototype),
                (e.prototype.constructor = e).__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                },
                o.addAttachmentClass = function(t) {
                    p(this.getTipElement()).addClass(Wn + "-" + t)
                },
                o.getTipElement = function() {
                    return this.tip = this.tip || p(this.config.template)[0],
                        this.tip
                },
                o.setContent = function() {
                    var t = p(this.getTipElement());
                    this.setElementContent(t.find(Yn), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)),
                        this.setElementContent(t.find(Vn), e),
                        t.removeClass(Kn + " " + Qn)
                },
                o._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                },
                o._cleanTipClass = function() {
                    var t = p(this.getTipElement()),
                        e = t.attr("class").match(Un);
                    null !== e && 0 < e.length && t.removeClass(e.join(""))
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = p(this).data(Rn),
                            e = "object" == typeof n ? n : null;
                        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e),
                                    p(this).data(Rn, t)),
                                "string" == typeof n)) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Bn
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return jn
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return Rn
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Xn
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return Fn
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return qn
                    }
                }]),
                i
        }(Hn);
    p.fn[jn] = zn._jQueryInterface,
        p.fn[jn].Constructor = zn,
        p.fn[jn].noConflict = function() {
            return p.fn[jn] = Mn,
                zn._jQueryInterface
        };
    var Gn = "scrollspy",
        Jn = "bs.scrollspy",
        Zn = "." + Jn,
        $n = p.fn[Gn],
        ti = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ei = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        ni = {
            ACTIVATE: "activate" + Zn,
            SCROLL: "scroll" + Zn,
            LOAD_DATA_API: "load" + Zn + ".data-api"
        },
        ii = "dropdown-item",
        oi = "active",
        ri = '[data-spy="scroll"]',
        si = ".nav, .list-group",
        ai = ".nav-link",
        li = ".nav-item",
        ci = ".list-group-item",
        hi = ".dropdown",
        ui = ".dropdown-item",
        fi = ".dropdown-toggle",
        di = "offset",
        pi = "position",
        mi = function() {
            function n(t, e) {
                var n = this;
                this._element = t,
                    this._scrollElement = "BODY" === t.tagName ? window : t,
                    this._config = this._getConfig(e),
                    this._selector = this._config.target + " " + ai + "," + this._config.target + " " + ci + "," + this._config.target + " " + ui,
                    this._offsets = [],
                    this._targets = [],
                    this._activeTarget = null,
                    this._scrollHeight = 0,
                    p(this._scrollElement).on(ni.SCROLL, function(t) {
                        return n._process(t)
                    }),
                    this.refresh(),
                    this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? di : pi,
                        o = "auto" === this._config.method ? t : this._config.method,
                        r = o === pi ? this._getScrollTop() : 0;
                    this._offsets = [],
                        this._targets = [],
                        this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                            var e, n = m.getSelectorFromElement(t);
                            if (n && (e = document.querySelector(n)),
                                e) {
                                var i = e.getBoundingClientRect();
                                if (i.width || i.height)
                                    return [p(e)[o]().top + r, n]
                            }
                            return null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(t) {
                            e._offsets.push(t[0]),
                                e._targets.push(t[1])
                        })
                },
                t.dispose = function() {
                    p.removeData(this._element, Jn),
                        p(this._scrollElement).off(Zn),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                },
                t._getConfig = function(t) {
                    if ("string" != typeof(t = l({}, ti, "object" == typeof t && t ? t : {})).target) {
                        var e = p(t.target).attr("id");
                        e || (e = m.getUID(Gn),
                                p(t.target).attr("id", e)),
                            t.target = "#" + e
                    }
                    return m.typeCheckConfig(Gn, t, ei),
                        t
                },
                t._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                },
                t._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                },
                t._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                },
                t._process = function() {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(),
                        n <= t) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                            return this._activeTarget = null,
                                void this._clear();
                        for (var o = this._offsets.length; o--;) {
                            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                        }
                    }
                },
                t._activate = function(e) {
                    this._activeTarget = e,
                        this._clear();
                    var t = this._selector.split(",").map(function(t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        }),
                        n = p([].slice.call(document.querySelectorAll(t.join(","))));
                    n.hasClass(ii) ? (n.closest(hi).find(fi).addClass(oi),
                            n.addClass(oi)) : (n.addClass(oi),
                            n.parents(si).prev(ai + ", " + ci).addClass(oi),
                            n.parents(si).prev(li).children(ai).addClass(oi)),
                        p(this._scrollElement).trigger(ni.ACTIVATE, {
                            relatedTarget: e
                        })
                },
                t._clear = function() {
                    [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                        return t.classList.contains(oi)
                    }).forEach(function(t) {
                        return t.classList.remove(oi)
                    })
                },
                n._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = p(this).data(Jn);
                        if (t || (t = new n(this, "object" == typeof e && e),
                                p(this).data(Jn, t)),
                            "string" == typeof e) {
                            if ("undefined" == typeof t[e])
                                throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                },
                s(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ti
                    }
                }]),
                n
        }();
    p(window).on(ni.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(ri)), e = t.length; e--;) {
                var n = p(t[e]);
                mi._jQueryInterface.call(n, n.data())
            }
        }),
        p.fn[Gn] = mi._jQueryInterface,
        p.fn[Gn].Constructor = mi,
        p.fn[Gn].noConflict = function() {
            return p.fn[Gn] = $n,
                mi._jQueryInterface
        };
    var gi = "bs.tab",
        _i = "." + gi,
        vi = p.fn.tab,
        yi = {
            HIDE: "hide" + _i,
            HIDDEN: "hidden" + _i,
            SHOW: "show" + _i,
            SHOWN: "shown" + _i,
            CLICK_DATA_API: "click" + _i + ".data-api"
        },
        Ei = "dropdown-menu",
        bi = "active",
        wi = "disabled",
        Ti = "fade",
        Ci = "show",
        Si = ".dropdown",
        Di = ".nav, .list-group",
        Ii = ".active",
        Ai = "> li > .active",
        Oi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Ni = ".dropdown-toggle",
        ki = "> .dropdown-menu .active",
        Li = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                    var n = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(bi) || p(this._element).hasClass(wi))) {
                        var t, i, e = p(this._element).closest(Di)[0],
                            o = m.getSelectorFromElement(this._element);
                        if (e) {
                            var r = "UL" === e.nodeName || "OL" === e.nodeName ? Ai : Ii;
                            i = (i = p.makeArray(p(e).find(r)))[i.length - 1]
                        }
                        var s = p.Event(yi.HIDE, {
                                relatedTarget: this._element
                            }),
                            a = p.Event(yi.SHOW, {
                                relatedTarget: i
                            });
                        if (i && p(i).trigger(s),
                            p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            o && (t = document.querySelector(o)),
                                this._activate(this._element, e);
                            var l = function() {
                                var t = p.Event(yi.HIDDEN, {
                                        relatedTarget: n._element
                                    }),
                                    e = p.Event(yi.SHOWN, {
                                        relatedTarget: i
                                    });
                                p(i).trigger(t),
                                    p(n._element).trigger(e)
                            };
                            t ? this._activate(t, t.parentNode, l) : l()
                        }
                    }
                },
                t.dispose = function() {
                    p.removeData(this._element, gi),
                        this._element = null
                },
                t._activate = function(t, e, n) {
                    var i = this,
                        o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? p(e).children(Ii) : p(e).find(Ai))[0],
                        r = n && o && p(o).hasClass(Ti),
                        s = function() {
                            return i._transitionComplete(t, o, n)
                        };
                    if (o && r) {
                        var a = m.getTransitionDurationFromElement(o);
                        p(o).removeClass(Ci).one(m.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else
                        s()
                },
                t._transitionComplete = function(t, e, n) {
                    if (e) {
                        p(e).removeClass(bi);
                        var i = p(e.parentNode).find(ki)[0];
                        i && p(i).removeClass(bi),
                            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                    }
                    if (p(t).addClass(bi),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                        m.reflow(t),
                        p(t).addClass(Ci),
                        t.parentNode && p(t.parentNode).hasClass(Ei)) {
                        var o = p(t).closest(Si)[0];
                        if (o) {
                            var r = [].slice.call(o.querySelectorAll(Ni));
                            p(r).addClass(bi)
                        }
                        t.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = p(this),
                            e = t.data(gi);
                        if (e || (e = new i(this),
                                t.data(gi, e)),
                            "string" == typeof n) {
                            if ("undefined" == typeof e[n])
                                throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }]),
                i
        }();
    p(document).on(yi.CLICK_DATA_API, Oi, function(t) {
            t.preventDefault(),
                Li._jQueryInterface.call(p(this), "show")
        }),
        p.fn.tab = Li._jQueryInterface,
        p.fn.tab.Constructor = Li,
        p.fn.tab.noConflict = function() {
            return p.fn.tab = vi,
                Li._jQueryInterface
        };
    var Pi = "toast",
        xi = "bs.toast",
        Hi = "." + xi,
        ji = p.fn[Pi],
        Ri = {
            CLICK_DISMISS: "click.dismiss" + Hi,
            HIDE: "hide" + Hi,
            HIDDEN: "hidden" + Hi,
            SHOW: "show" + Hi,
            SHOWN: "shown" + Hi
        },
        Fi = "fade",
        Mi = "hide",
        Wi = "show",
        Ui = "showing",
        Bi = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        qi = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Ki = '[data-dismiss="toast"]',
        Qi = function() {
            function i(t, e) {
                this._element = t,
                    this._config = this._getConfig(e),
                    this._timeout = null,
                    this._setListeners()
            }
            var t = i.prototype;
            return t.show = function() {
                    var t = this;
                    p(this._element).trigger(Ri.SHOW),
                        this._config.animation && this._element.classList.add(Fi);
                    var e = function() {
                        t._element.classList.remove(Ui),
                            t._element.classList.add(Wi),
                            p(t._element).trigger(Ri.SHOWN),
                            t._config.autohide && t.hide()
                    };
                    if (this._element.classList.remove(Mi),
                        this._element.classList.add(Ui),
                        this._config.animation) {
                        var n = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
                    } else
                        e()
                },
                t.hide = function(t) {
                    var e = this;
                    this._element.classList.contains(Wi) && (p(this._element).trigger(Ri.HIDE),
                        t ? this._close() : this._timeout = setTimeout(function() {
                            e._close()
                        }, this._config.delay))
                },
                t.dispose = function() {
                    clearTimeout(this._timeout),
                        this._timeout = null,
                        this._element.classList.contains(Wi) && this._element.classList.remove(Wi),
                        p(this._element).off(Ri.CLICK_DISMISS),
                        p.removeData(this._element, xi),
                        this._element = null,
                        this._config = null
                },
                t._getConfig = function(t) {
                    return t = l({}, qi, p(this._element).data(), "object" == typeof t && t ? t : {}),
                        m.typeCheckConfig(Pi, t, this.constructor.DefaultType),
                        t
                },
                t._setListeners = function() {
                    var t = this;
                    p(this._element).on(Ri.CLICK_DISMISS, Ki, function() {
                        return t.hide(!0)
                    })
                },
                t._close = function() {
                    var t = this,
                        e = function() {
                            t._element.classList.add(Mi),
                                p(t._element).trigger(Ri.HIDDEN)
                        };
                    if (this._element.classList.remove(Wi),
                        this._config.animation) {
                        var n = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
                    } else
                        e()
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = p(this),
                            e = t.data(xi);
                        if (e || (e = new i(this, "object" == typeof n && n),
                                t.data(xi, e)),
                            "string" == typeof n) {
                            if ("undefined" == typeof e[n])
                                throw new TypeError('No method named "' + n + '"');
                            e[n](this)
                        }
                    })
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return ""
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Bi
                    }
                }]),
                i
        }();
    p.fn[Pi] = Qi._jQueryInterface,
        p.fn[Pi].Constructor = Qi,
        p.fn[Pi].noConflict = function() {
            return p.fn[Pi] = ji,
                Qi._jQueryInterface
        },
        function() {
            if ("undefined" == typeof p)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = p.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(),
        t.Util = m,
        t.Alert = g,
        t.Button = k,
        t.Carousel = at,
        t.Collapse = Tt,
        t.Dropdown = ze,
        t.Modal = pn,
        t.Popover = zn,
        t.Scrollspy = mi,
        t.Tab = Li,
        t.Toast = Qi,
        t.Tooltip = Hn,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
});
//# sourceMappingURL=bootstrap.bundle.min.js.map