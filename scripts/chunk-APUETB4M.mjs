import {
    a as tn,
    b as en,
    c as an
} from "./chunk-L3GEK3TU.mjs";
import {
    a as Ye,
    b as Qe
} from "./chunk-T7AD2RCX.mjs";
import {
    E as Pt,
    G as je,
    H as We,
    J as b,
    M as Ct,
    N as kt,
    O as Xo,
    Q as Vt,
    R as dt,
    V as Ot,
    a as Be,
    b as Jo,
    c as nt,
    f as yt,
    i as Zo,
    ia as he,
    j as bt,
    l as St,
    la as Ko,
    n as xt,
    na as qe,
    o as wt,
    oa as At,
    pa as qt,
    qa as $o,
    r as _,
    ra as Kt,
    s as pt,
    t as rt,
    u as T,
    ua as ue,
    v as _t,
    va as Rt,
    wa as Et,
    xa as $t
} from "./chunk-ISOROXNZ.mjs";
import {
    c
} from "./chunk-RIUMFBNJ.mjs";
var $e = class {
        constructor() {
            this._listeners = new Map
        }
        addEventListener(t, e) {
            var a;
            this.removeEventListener(t, e), this._listeners.get(t) || this._listeners.set(t, []), (a = this._listeners.get(t)) === null || a === void 0 || a.push(e)
        }
        dispatchEvent(t, e) {
            var a;
            (a = this._listeners.get(t)) === null || a === void 0 || a.forEach(o => o(e))
        }
        hasEventListener(t) {
            return !!this._listeners.get(t)
        }
        removeAllEventListeners(t) {
            t ? this._listeners.delete(t) : this._listeners = new Map
        }
        removeEventListener(t, e) {
            let a = this._listeners.get(t);
            if (!a) return;
            let o = a.length,
                n = a.indexOf(e);
            n < 0 || (o === 1 ? this._listeners.delete(t) : a.splice(n, 1))
        }
    },
    $ = class {
        constructor(t, e, a) {
            if (typeof t != "number" && t) {
                this.x = t.x, this.y = t.y;
                let o = t;
                this.z = o.z ? o.z : 0
            } else {
                if (t === void 0 || e === void 0) throw new Error("tsParticles - Vector3d not initialized correctly");
                this.x = t, this.y = e, this.z = a ?? 0
            }
        }
        static get origin() {
            return $.create(0, 0, 0)
        }
        get angle() {
            return Math.atan2(this.y, this.x)
        }
        set angle(t) {
            this.updateFromAngle(t, this.length)
        }
        get length() {
            return Math.sqrt(this.getLengthSq())
        }
        set length(t) {
            this.updateFromAngle(this.angle, t)
        }
        static clone(t) {
            return $.create(t.x, t.y, t.z)
        }
        static create(t, e, a) {
            return new $(t, e, a)
        }
        add(t) {
            return $.create(this.x + t.x, this.y + t.y, this.z + t.z)
        }
        addTo(t) {
            this.x += t.x, this.y += t.y, this.z += t.z
        }
        copy() {
            return $.clone(this)
        }
        distanceTo(t) {
            return this.sub(t).length
        }
        distanceToSq(t) {
            return this.sub(t).getLengthSq()
        }
        div(t) {
            return $.create(this.x / t, this.y / t, this.z / t)
        }
        divTo(t) {
            this.x /= t, this.y /= t, this.z /= t
        }
        getLengthSq() {
            return this.x ** 2 + this.y ** 2
        }
        mult(t) {
            return $.create(this.x * t, this.y * t, this.z * t)
        }
        multTo(t) {
            this.x *= t, this.y *= t, this.z *= t
        }
        rotate(t) {
            return $.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t), 0)
        }
        setTo(t) {
            this.x = t.x, this.y = t.y;
            let e = t;
            this.z = e.z ? e.z : 0
        }
        sub(t) {
            return $.create(this.x - t.x, this.y - t.y, this.z - t.z)
        }
        subFrom(t) {
            this.x -= t.x, this.y -= t.y, this.z -= t.z
        }
        updateFromAngle(t, e) {
            this.x = Math.cos(t) * e, this.y = Math.sin(t) * e
        }
    },
    I = class extends $ {
        constructor(t, e) {
            super(t, e, 0)
        }
        static get origin() {
            return I.create(0, 0)
        }
        static clone(t) {
            return I.create(t.x, t.y)
        }
        static create(t, e) {
            return new I(t, e)
        }
    },
    cr = Math.random;

function C() {
    return Y(cr(), 0, 1 - 1e-16)
}

function Y(i, t, e) {
    return Math.min(Math.max(i, t), e)
}

function Je(i, t, e, a) {
    return Math.floor((i * e + t * a) / (e + a))
}

function H(i) {
    let t = at(i),
        e = Dt(i);
    return t === e && (e = 0), C() * (t - e) + e
}

function P(i) {
    return typeof i == "number" ? i : H(i)
}

function Dt(i) {
    return typeof i == "number" ? i : i.min
}

function at(i) {
    return typeof i == "number" ? i : i.max
}

function k(i, t) {
    if (i === t || t === void 0 && typeof i == "number") return i;
    let e = Dt(i),
        a = at(i);
    return t !== void 0 ? {
        min: Math.min(e, t),
        max: Math.max(a, t)
    } : k(e, a)
}

function Tt(i) {
    let t = i.random,
        {
            enable: e,
            minimumValue: a
        } = typeof t == "boolean" ? {
            enable: t,
            minimumValue: 0
        } : t;
    return P(e ? k(i.value, a) : i.value)
}

function F(i, t) {
    let e = i.x - t.x,
        a = i.y - t.y;
    return {
        dx: e,
        dy: a,
        distance: Math.sqrt(e * e + a * a)
    }
}

function L(i, t) {
    return F(i, t).distance
}

function dr(i, t, e) {
    if (typeof i == "number") return i * Math.PI / 180;
    switch (i) {
        case "top":
            return -Math.PI / 2;
        case "top-right":
            return -Math.PI / 4;
        case "right":
            return 0;
        case "bottom-right":
            return Math.PI / 4;
        case "bottom":
            return Math.PI / 2;
        case "bottom-left":
            return 3 * Math.PI / 4;
        case "left":
            return Math.PI;
        case "top-left":
            return -3 * Math.PI / 4;
        case "inside":
            return Math.atan2(e.y - t.y, e.x - t.x);
        case "outside":
            return Math.atan2(t.y - e.y, t.x - e.x);
        case "none":
        default:
            return C() * Math.PI * 2
    }
}

function hr(i) {
    let t = I.origin;
    return t.length = 1, t.angle = i, t
}

function on(i, t, e, a) {
    return I.create(i.x * (e - a) / (e + a) + 2 * t.x * a / (e + a), i.y)
}

function _e(i, t) {
    switch (t) {
        case "ease-in-quad":
            return i ** 2;
        case "ease-out-quad":
            return 1 - (1 - i) ** 2;
        case "ease-in-out-quad":
            return i < .5 ? 2 * i ** 2 : 1 - (-2 * i + 2) ** 2 / 2;
        case "ease-in-cubic":
            return i ** 3;
        case "ease-out-cubic":
            return 1 - (1 - i) ** 3;
        case "ease-in-out-cubic":
            return i < .5 ? 4 * i ** 3 : 1 - (-2 * i + 2) ** 3 / 2;
        case "ease-in-quart":
            return i ** 4;
        case "ease-out-quart":
            return 1 - (1 - i) ** 4;
        case "ease-in-out-quart":
            return i < .5 ? 8 * i ** 4 : 1 - (-2 * i + 2) ** 4 / 2;
        case "ease-in-quint":
            return i ** 5;
        case "ease-out-quint":
            return 1 - (1 - i) ** 5;
        case "ease-in-out-quint":
            return i < .5 ? 16 * i ** 5 : 1 - (-2 * i + 2) ** 5 / 2;
        case "ease-in-expo":
            return i ? 2 ** (10 * i - 10) : 0;
        case "ease-out-expo":
            return i === 1 ? 1 : 1 - Math.pow(2, -10 * i);
        case "ease-in-out-expo":
            return i ? i === 1 ? 1 : i < .5 ? 2 ** (20 * i - 10) / 2 : (2 - 2 ** (-20 * i + 10)) / 2 : 0;
        case "ease-in-sine":
            return 1 - Math.cos(i * Math.PI / 2);
        case "ease-out-sine":
            return Math.sin(i * Math.PI / 2);
        case "ease-in-out-sine":
            return -(Math.cos(Math.PI * i) - 1) / 2;
        case "ease-in-back":
            return 2.70158 * i ** 3 - 1.70158 * i ** 2;
        case "ease-out-back":
            return 1 + 2.70158 * Math.pow(i - 1, 3) + 1.70158 * Math.pow(i - 1, 2);
        case "ease-in-out-back": {
            let a = 2.5949095;
            return i < .5 ? (2 * i) ** 2 * (2 * (a + 1) * i - a) / 2 : ((2 * i - 2) ** 2 * ((a + 1) * (2 * i - 2) + a) + 2) / 2
        }
        case "ease-in-circ":
            return 1 - Math.sqrt(1 - i ** 2);
        case "ease-out-circ":
            return Math.sqrt(1 - (i - 1) ** 2);
        case "ease-in-out-circ":
            return i < .5 ? (1 - Math.sqrt(1 - (2 * i) ** 2)) / 2 : (Math.sqrt(1 - (-2 * i + 2) ** 2) + 1) / 2;
        default:
            return i
    }
}

function ur(i) {
    var t, e;
    return ((t = i.position) === null || t === void 0 ? void 0 : t.x) !== void 0 && ((e = i.position) === null || e === void 0 ? void 0 : e.y) !== void 0 ? {
        x: i.position.x * i.size.width / 100,
        y: i.position.y * i.size.height / 100
    } : void 0
}

function ta(i) {
    var t, e, a, o;
    return {
        x: ((e = (t = i.position) === null || t === void 0 ? void 0 : t.x) !== null && e !== void 0 ? e : 100 * C()) * i.size.width / 100,
        y: ((o = (a = i.position) === null || a === void 0 ? void 0 : a.y) !== null && o !== void 0 ? o : 100 * C()) * i.size.height / 100
    }
}

function Pe(i) {
    var t, e;
    let a = {
        x: ((t = i.position) === null || t === void 0 ? void 0 : t.x) !== void 0 ? P(i.position.x) : void 0,
        y: ((e = i.position) === null || e === void 0 ? void 0 : e.y) !== void 0 ? P(i.position.y) : void 0
    };
    return ta({
        size: i.size,
        position: a
    })
}

function pr(i) {
    var t, e, a, o;
    return {
        x: (e = (t = i.position) === null || t === void 0 ? void 0 : t.x) !== null && e !== void 0 ? e : C() * i.size.width,
        y: (o = (a = i.position) === null || a === void 0 ? void 0 : a.y) !== null && o !== void 0 ? o : C() * i.size.height
    }
}

function dn(i) {
    return i.endsWith("%") ? parseFloat(i) / 100 : parseFloat(i)
}

function nn(i, t, e, a, o, n) {
    let s = {
        bounced: !1
    };
    return t.min < a.min || t.min > a.max || t.max < a.min || t.max > a.max || (i.max >= e.min && i.max <= (e.max + e.min) / 2 && o > 0 || i.min <= e.max && i.min > (e.max + e.min) / 2 && o < 0) && (s.velocity = o * -n, s.bounced = !0), s
}

function fr(i, t) {
    let e = M(t, a => i.matches(a));
    return e instanceof Array ? e.some(a => a) : e
}

function Gt() {
    return typeof c > "u" || !c || typeof c.document > "u" || !c.document
}

function mr() {
    return Gt() ? i => setTimeout(i) : i => (requestAnimationFrame || setTimeout)(i)
}

function vr() {
    return Gt() ? i => clearTimeout(i) : i => (cancelAnimationFrame || clearTimeout)(i)
}

function G(i, t) {
    return i === t || t instanceof Array && t.indexOf(i) > -1
}
async function hn(i, t) {
    try {
        await document.fonts.load(`${t??"400"} 36px '${i??"Verdana"}'`)
    } catch {}
}

function ea(i) {
    return Math.floor(C() * i.length)
}

function ht(i, t, e = !0) {
    let a = t !== void 0 && e ? t % i.length : ea(i);
    return i[a]
}

function zt(i, t, e, a, o) {
    return gr(Ut(i, a ?? 0), t, e, o)
}

function gr(i, t, e, a) {
    let o = !0;
    return a && a !== "bottom" || (o = i.top < t.height + e.x), !o || a && a !== "left" || (o = i.right > e.x), !o || a && a !== "right" || (o = i.left < t.width + e.y), !o || a && a !== "top" || (o = i.bottom > e.y), o
}

function Ut(i, t) {
    return {
        bottom: i.y + t,
        left: i.x - t,
        right: i.x + t,
        top: i.y - t
    }
}

function D(i, ...t) {
    for (let e of t) {
        if (e == null) continue;
        if (typeof e != "object") {
            i = e;
            continue
        }
        let a = Array.isArray(e);
        !a || typeof i == "object" && i && Array.isArray(i) ? a || typeof i == "object" && i && !Array.isArray(i) || (i = {}) : i = [];
        for (let o in e) {
            if (o === "__proto__") continue;
            let n = e,
                s = n[o],
                r = typeof s == "object",
                l = i;
            l[o] = r && Array.isArray(s) ? s.map(d => D(l[o], d)) : D(l[o], s)
        }
    }
    return i
}

function Qt(i, t) {
    return !!pn(t, e => e.enable && G(i, e.mode))
}

function Jt(i, t, e) {
    M(t, a => {
        let o = a.mode;
        a.enable && G(i, o) && yr(a, e)
    })
}

function yr(i, t) {
    let e = i.selectors;
    M(e, a => {
        t(a, i)
    })
}

function Ce(i, t) {
    if (t && i) return pn(i, e => fr(t, e.selectors))
}

function ae(i) {
    return {
        position: i.getPosition(),
        radius: i.getRadius(),
        mass: i.getMass(),
        velocity: i.velocity,
        factor: I.create(Tt(i.options.bounce.horizontal), Tt(i.options.bounce.vertical))
    }
}

function ke(i, t) {
    let {
        x: e,
        y: a
    } = i.velocity.sub(t.velocity), [o, n] = [i.position, t.position], {
        dx: s,
        dy: r
    } = F(n, o);
    if (e * s + a * r < 0) return;
    let l = -Math.atan2(r, s),
        d = i.mass,
        h = t.mass,
        p = i.velocity.rotate(l),
        u = t.velocity.rotate(l),
        f = on(p, u, d, h),
        m = on(u, p, d, h),
        g = f.rotate(-l),
        y = m.rotate(-l);
    i.velocity.x = g.x * i.factor.x, i.velocity.y = g.y * i.factor.y, t.velocity.x = y.x * t.factor.x, t.velocity.y = y.y * t.factor.y
}

function un(i, t) {
    let e = i.getPosition(),
        a = i.getRadius(),
        o = Ut(e, a),
        n = nn({
            min: o.left,
            max: o.right
        }, {
            min: o.top,
            max: o.bottom
        }, {
            min: t.left,
            max: t.right
        }, {
            min: t.top,
            max: t.bottom
        }, i.velocity.x, Tt(i.options.bounce.horizontal));
    n.bounced && (n.velocity !== void 0 && (i.velocity.x = n.velocity), n.position !== void 0 && (i.position.x = n.position));
    let s = nn({
        min: o.top,
        max: o.bottom
    }, {
        min: o.left,
        max: o.right
    }, {
        min: t.top,
        max: t.bottom
    }, {
        min: t.left,
        max: t.right
    }, i.velocity.y, Tt(i.options.bounce.vertical));
    s.bounced && (s.velocity !== void 0 && (i.velocity.y = s.velocity), s.position !== void 0 && (i.position.y = s.position))
}

function M(i, t) {
    return i instanceof Array ? i.map(e => t(e)) : t(i)
}

function X(i, t, e) {
    return i instanceof Array ? ht(i, t, e) : i
}

function pn(i, t) {
    return i instanceof Array ? i.find(e => t(e)) : t(i) ? i : void 0
}
var pe = "random",
    fn = "mid",
    Ve = new Map;

function mn(i, t) {
    Ve.set(i, t)
}

function Ze(i, t, e) {
    return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + 6 * (t - i) * e : e < .5 ? t : e < 2 / 3 ? i + (t - i) * (2 / 3 - e) * 6 : i
}

function vn(i) {
    for (let [, n] of Ve)
        if (i.startsWith(n.stringPrefix)) return n.parseString(i);
    let t = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
        e = i.replace(t, (n, s, r, l, d) => s + s + r + r + l + l + (d !== void 0 ? d + d : "")),
        a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
        o = a.exec(e);
    return o ? {
        a: o[4] !== void 0 ? parseInt(o[4], 16) / 255 : 1,
        b: parseInt(o[3], 16),
        g: parseInt(o[2], 16),
        r: parseInt(o[1], 16)
    } : void 0
}

function J(i, t, e = !0) {
    if (!i) return;
    let a = typeof i == "string" ? {
        value: i
    } : i;
    if (typeof a.value == "string") return gn(a.value, t, e);
    if (a.value instanceof Array) return J({
        value: ht(a.value, t, e)
    });
    for (let [, o] of Ve) {
        let n = o.handleRangeColor(a);
        if (n) return n
    }
}

function gn(i, t, e = !0) {
    if (!i) return;
    let a = typeof i == "string" ? {
        value: i
    } : i;
    if (typeof a.value == "string") return a.value === pe ? bn() : br(a.value);
    if (a.value instanceof Array) return gn({
        value: ht(a.value, t, e)
    });
    for (let [, o] of Ve) {
        let n = o.handleColor(a);
        if (n) return n
    }
}

function it(i, t, e = !0) {
    let a = J(i, t, e);
    return a ? ia(a) : void 0
}

function ia(i) {
    let t = i.r / 255,
        e = i.g / 255,
        a = i.b / 255,
        o = Math.max(t, e, a),
        n = Math.min(t, e, a),
        s = {
            h: 0,
            l: (o + n) / 2,
            s: 0
        };
    return o !== n && (s.s = s.l < .5 ? (o - n) / (o + n) : (o - n) / (2 - o - n), s.h = t === o ? (e - a) / (o - n) : s.h = e === o ? 2 + (a - t) / (o - n) : 4 + (t - e) / (o - n)), s.l *= 100, s.s *= 100, s.h *= 60, s.h < 0 && (s.h += 360), s.h >= 360 && (s.h -= 360), s
}

function yn(i) {
    var t;
    return (t = vn(i)) === null || t === void 0 ? void 0 : t.a
}

function br(i) {
    return vn(i)
}

function Yt(i) {
    let t = {
            b: 0,
            g: 0,
            r: 0
        },
        e = {
            h: i.h / 360,
            l: i.l / 100,
            s: i.s / 100
        };
    if (e.s) {
        let a = e.l < .5 ? e.l * (1 + e.s) : e.l + e.s - e.l * e.s,
            o = 2 * e.l - a;
        t.r = Ze(o, a, e.h + 1 / 3), t.g = Ze(o, a, e.h), t.b = Ze(o, a, e.h - 1 / 3)
    } else t.b = e.l, t.g = e.l, t.r = e.l;
    return t.r = Math.floor(255 * t.r), t.g = Math.floor(255 * t.g), t.b = Math.floor(255 * t.b), t
}

function Sr(i) {
    let t = Yt(i);
    return {
        a: i.a,
        b: t.b,
        g: t.g,
        r: t.r
    }
}

function bn(i) {
    let t = i ?? 0;
    return {
        b: Math.floor(H(k(t, 256))),
        g: Math.floor(H(k(t, 256))),
        r: Math.floor(H(k(t, 256)))
    }
}

function Z(i, t) {
    return `rgba(${i.r}, ${i.g}, ${i.b}, ${t??1})`
}

function mt(i, t) {
    return `hsla(${i.h}, ${i.s}%, ${i.l}%, ${t??1})`
}

function oe(i, t, e, a) {
    let o = i,
        n = t;
    return o.r === void 0 && (o = Yt(i)), n.r === void 0 && (n = Yt(t)), {
        b: Je(o.b, n.b, e, a),
        g: Je(o.g, n.g, e, a),
        r: Je(o.r, n.r, e, a)
    }
}

function ne(i, t, e) {
    var a, o;
    if (e === pe) return bn();
    if (e !== fn) return e;
    {
        let n = (a = i.getFillColor()) !== null && a !== void 0 ? a : i.getStrokeColor(),
            s = (o = t?.getFillColor()) !== null && o !== void 0 ? o : t?.getStrokeColor();
        if (n && s && t) return oe(n, s, i.getRadius(), t.getRadius());
        {
            let r = n ?? s;
            if (r) return Yt(r)
        }
    }
}

function Oe(i, t, e) {
    let a = typeof i == "string" ? i : i.value;
    return a === pe ? e ? J({
        value: a
    }) : t ? pe : fn : J({
        value: a
    })
}

function sn(i) {
    return i !== void 0 ? {
        h: i.h.value,
        s: i.s.value,
        l: i.l.value
    } : void 0
}

function Ae(i, t, e) {
    let a = {
        h: {
            enable: !1,
            value: i.h
        },
        s: {
            enable: !1,
            value: i.s
        },
        l: {
            enable: !1,
            value: i.l
        }
    };
    return t && (Xe(a.h, t.h, e), Xe(a.s, t.s, e), Xe(a.l, t.l, e)), a
}

function Xe(i, t, e) {
    i.enable = t.enable, i.enable ? (i.velocity = P(t.speed) / 100 * e, i.decay = 1 - P(t.decay), i.status = 0, t.sync || (i.velocity *= C(), i.value *= C())) : i.velocity = 0
}

function Mt(i, t, e) {
    i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.closePath()
}

function Sn(i, t, e, a) {
    i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.lineTo(a.x, a.y), i.closePath()
}

function xr(i, t, e) {
    i.save(), i.fillStyle = e ?? "rgba(0,0,0,0)", i.fillRect(0, 0, t.width, t.height), i.restore()
}

function Ke(i, t) {
    i.clearRect(0, 0, t.width, t.height)
}

function wr(i) {
    var t, e, a, o, n, s, r, l, d, h;
    let {
        container: p,
        context: u,
        particle: f,
        delta: m,
        colorStyles: g,
        backgroundMask: y,
        composite: w,
        radius: x,
        opacity: A,
        shadow: E,
        transform: R
    } = i, v = f.getPosition();
    u.save(), R.a !== void 0 || R.b !== void 0 || R.c !== void 0 || R.d !== void 0 ? u.setTransform((t = R.a) !== null && t !== void 0 ? t : 1, (e = R.b) !== null && e !== void 0 ? e : 0, (a = R.c) !== null && a !== void 0 ? a : 0, (o = R.d) !== null && o !== void 0 ? o : 1, v.x, v.y) : u.translate(v.x, v.y), u.beginPath();
    let W = f.rotation + (f.options.rotate.path ? f.velocity.angle : 0);
    W !== 0 && u.rotate(W), y && (u.globalCompositeOperation = w);
    let K = f.shadowColor;
    E.enable && K && (u.shadowBlur = E.blur, u.shadowColor = Z(K), u.shadowOffsetX = E.offset.x, u.shadowOffsetY = E.offset.y), g.fill && (u.fillStyle = g.fill);
    let Q = f.stroke;
    u.lineWidth = (n = f.strokeWidth) !== null && n !== void 0 ? n : 0, g.stroke && (u.strokeStyle = g.stroke), _r(p, u, f, x, A, m), ((s = Q?.width) !== null && s !== void 0 ? s : 0) > 0 && u.stroke(), f.close && u.closePath(), f.fill && u.fill(), u.restore(), u.save(), R.a !== void 0 || R.b !== void 0 || R.c !== void 0 || R.d !== void 0 ? u.setTransform((r = R.a) !== null && r !== void 0 ? r : 1, (l = R.b) !== null && l !== void 0 ? l : 0, (d = R.c) !== null && d !== void 0 ? d : 0, (h = R.d) !== null && h !== void 0 ? h : 1, v.x, v.y) : u.translate(v.x, v.y), f.rotation && u.rotate(f.rotation), y && (u.globalCompositeOperation = w), Pr(p, u, f, x, A, m), u.restore()
}

function _r(i, t, e, a, o, n) {
    if (!e.shape) return;
    let s = i.drawers.get(e.shape);
    s && s.draw(t, e, a, o, n, i.retina.pixelRatio)
}

function Pr(i, t, e, a, o, n) {
    if (!e.shape) return;
    let s = i.drawers.get(e.shape);
    s?.afterEffect && s.afterEffect(t, e, a, o, n, i.retina.pixelRatio)
}

function Cr(i, t, e) {
    t.draw && (i.save(), t.draw(i, e), i.restore())
}

function kr(i, t, e, a) {
    t.drawParticle && (i.save(), t.drawParticle(i, e, a), i.restore())
}

function Vr(i, t, e) {
    return {
        h: i.h,
        s: i.s,
        l: i.l + (t === "darken" ? -1 : 1) * e
    }
}
var ee = "generated",
    rn = "touchend",
    Or = "pointerdown",
    Ar = "pointerup",
    ct = "pointermove",
    Rr = "touchstart",
    Er = "touchmove",
    fe = "pointerleave",
    Tr = "pointerout",
    Gr = "touchcancel",
    Ir = "resize",
    zr = "visibilitychange";

function Mr(i, t, e) {
    var a;
    let o = t[e];
    o !== void 0 && (i[e] = ((a = i[e]) !== null && a !== void 0 ? a : 1) * o)
}
var ti = class {
    constructor(t) {
        this.container = t, this.size = {
            height: 0,
            width: 0
        }, this._context = null, this._generatedCanvas = !1, this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
    }
    clear() {
        let t = this.container.actualOptions,
            e = t.particles.move.trail;
        t.backgroundMask.enable ? this.paint() : e.enable && e.length > 0 && this._trailFillColor ? this._paintBase(Z(this._trailFillColor, 1 / e.length)) : this.draw(a => {
            Ke(a, this.size)
        })
    }
    destroy() {
        var t;
        this._generatedCanvas ? (t = this.element) === null || t === void 0 || t.remove() : this._resetOriginalStyle(), this.draw(e => {
            Ke(e, this.size)
        }), this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
    }
    draw(t) {
        if (this._context) return t(this._context)
    }
    drawParticle(t, e) {
        var a;
        if (t.spawning || t.destroyed) return;
        let o = t.getRadius();
        if (o <= 0) return;
        let n = t.getFillColor(),
            s = (a = t.getStrokeColor()) !== null && a !== void 0 ? a : n,
            [r, l] = this._getPluginParticleColors(t);
        r || (r = n), l || (l = s), (r || l) && this.draw(d => {
            var h, p, u, f, m;
            let g = this.container.actualOptions,
                y = t.options.zIndex,
                w = (1 - t.zIndexFactor) ** y.opacityRate,
                x = (u = (h = t.bubble.opacity) !== null && h !== void 0 ? h : (p = t.opacity) === null || p === void 0 ? void 0 : p.value) !== null && u !== void 0 ? u : 1,
                A = (m = (f = t.stroke) === null || f === void 0 ? void 0 : f.opacity) !== null && m !== void 0 ? m : x,
                E = x * w,
                R = A * w,
                v = {},
                W = {
                    fill: r ? mt(r, E) : void 0
                };
            W.stroke = l ? mt(l, R) : W.fill, this._applyPreDrawUpdaters(d, t, o, E, W, v), wr({
                container: this.container,
                context: d,
                particle: t,
                delta: e,
                colorStyles: W,
                backgroundMask: g.backgroundMask.enable,
                composite: g.backgroundMask.composite,
                radius: o * (1 - t.zIndexFactor) ** y.sizeRate,
                opacity: E,
                shadow: t.options.shadow,
                transform: v
            }), this._applyPostDrawUpdaters(t)
        })
    }
    drawParticlePlugin(t, e, a) {
        this.draw(o => {
            kr(o, t, e, a)
        })
    }
    drawPlugin(t, e) {
        this.draw(a => {
            Cr(a, t, e)
        })
    }
    init() {
        this.resize(), this._initStyle(), this._initCover(), this._initTrail(), this.initBackground(), this.initUpdaters(), this.initPlugins(), this.paint()
    }
    initBackground() {
        let t = this.container.actualOptions,
            e = t.background,
            a = this.element,
            o = a?.style;
        if (o) {
            if (e.color) {
                let n = J(e.color);
                o.backgroundColor = n ? Z(n, e.opacity) : ""
            } else o.backgroundColor = "";
            o.backgroundImage = e.image || "", o.backgroundPosition = e.position || "", o.backgroundRepeat = e.repeat || "", o.backgroundSize = e.size || ""
        }
    }
    initPlugins() {
        this._resizePlugins = [];
        for (let [, t] of this.container.plugins) t.resize && this._resizePlugins.push(t), (t.particleFillColor || t.particleStrokeColor) && this._colorPlugins.push(t)
    }
    initUpdaters() {
        this._preDrawUpdaters = [], this._postDrawUpdaters = [];
        for (let t of this.container.particles.updaters) t.afterDraw && this._postDrawUpdaters.push(t), (t.getColorStyles || t.getTransformValues || t.beforeDraw) && this._preDrawUpdaters.push(t)
    }
    loadCanvas(t) {
        var e;
        this._generatedCanvas && ((e = this.element) === null || e === void 0 || e.remove()), this._generatedCanvas = t.dataset && ee in t.dataset ? t.dataset[ee] === "true" : this._generatedCanvas, this.element = t, this._originalStyle = D({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, this._context = this.element.getContext("2d"), this.container.retina.init(), this.initBackground()
    }
    paint() {
        let t = this.container.actualOptions;
        this.draw(e => {
            t.backgroundMask.enable && t.backgroundMask.cover ? (Ke(e, this.size), this._paintBase(this._coverColorStyle)) : this._paintBase()
        })
    }
    resize() {
        if (!this.element) return;
        let t = this.container,
            e = t.retina.pixelRatio,
            a = t.canvas.size,
            o = {
                width: this.element.offsetWidth * e,
                height: this.element.offsetHeight * e
            };
        if (o.height === a.height && o.width === a.width && o.height === this.element.height && o.width === this.element.width) return;
        let n = Object.assign({}, a);
        this.element.width = a.width = this.element.offsetWidth * e, this.element.height = a.height = this.element.offsetHeight * e, this.container.started && (this.resizeFactor = {
            width: a.width / n.width,
            height: a.height / n.height
        })
    }
    async windowResize() {
        if (!this.element) return;
        this.resize();
        let t = this.container,
            e = t.updateActualOptions();
        t.particles.setDensity(), this._applyResizePlugins(), e && await t.refresh()
    }
    _applyPostDrawUpdaters(t) {
        var e;
        for (let a of this._postDrawUpdaters)(e = a.afterDraw) === null || e === void 0 || e.call(a, t)
    }
    _applyPreDrawUpdaters(t, e, a, o, n, s) {
        var r;
        for (let l of this._preDrawUpdaters) {
            if (l.getColorStyles) {
                let {
                    fill: d,
                    stroke: h
                } = l.getColorStyles(e, t, a, o);
                d && (n.fill = d), h && (n.stroke = h)
            }
            if (l.getTransformValues) {
                let d = l.getTransformValues(e);
                for (let h in d) Mr(s, d, h)
            }(r = l.beforeDraw) === null || r === void 0 || r.call(l, e)
        }
    }
    _applyResizePlugins() {
        var t;
        for (let e of this._resizePlugins)(t = e.resize) === null || t === void 0 || t.call(e)
    }
    _getPluginParticleColors(t) {
        let e, a;
        for (let o of this._colorPlugins)
            if (!e && o.particleFillColor && (e = it(o.particleFillColor(t))), !a && o.particleStrokeColor && (a = it(o.particleStrokeColor(t))), e && a) break;
        return [e, a]
    }
    _initCover() {
        let t = this.container.actualOptions,
            e = t.backgroundMask.cover,
            a = e.color,
            o = J(a);
        if (o) {
            let n = {
                r: o.r,
                g: o.g,
                b: o.b,
                a: e.opacity
            };
            this._coverColorStyle = Z(n, n.a)
        }
    }
    _initStyle() {
        let t = this.element,
            e = this.container.actualOptions;
        if (t) {
            e.fullScreen.enable ? (this._originalStyle = D({}, t.style), t.style.setProperty("position", "fixed", "important"), t.style.setProperty("z-index", e.fullScreen.zIndex.toString(10), "important"), t.style.setProperty("top", "0", "important"), t.style.setProperty("left", "0", "important"), t.style.setProperty("width", "100%", "important"), t.style.setProperty("height", "100%", "important")) : this._resetOriginalStyle();
            for (let a in e.style) {
                if (!a || !e.style) continue;
                let o = e.style[a];
                o && t.style.setProperty(a, o, "important")
            }
        }
    }
    _initTrail() {
        let t = this.container.actualOptions,
            e = t.particles.move.trail,
            a = J(e.fillColor);
        if (a) {
            let o = t.particles.move.trail;
            this._trailFillColor = {
                r: a.r,
                g: a.g,
                b: a.b,
                a: 1 / o.length
            }
        }
    }
    _paintBase(t) {
        this.draw(e => {
            xr(e, this.size, t)
        })
    }
    _resetOriginalStyle() {
        let t = this.element,
            e = this._originalStyle;
        t && e && (t.style.position = e.position, t.style.zIndex = e.zIndex, t.style.top = e.top, t.style.left = e.left, t.style.width = e.width, t.style.height = e.height)
    }
};

function lt(i, t, e, a, o) {
    if (a) {
        let n = {
            passive: !0
        };
        typeof o == "boolean" ? n.capture = o : o !== void 0 && (n = o), i.addEventListener(t, e, n)
    } else {
        let n = o;
        i.removeEventListener(t, e, n)
    }
}
var ei = class {
    constructor(t) {
        this.container = t, this.canPush = !0, this.mouseMoveHandler = e => this.mouseTouchMove(e), this.touchStartHandler = e => this.mouseTouchMove(e), this.touchMoveHandler = e => this.mouseTouchMove(e), this.touchEndHandler = () => this.mouseTouchFinish(), this.mouseLeaveHandler = () => this.mouseTouchFinish(), this.touchCancelHandler = () => this.mouseTouchFinish(), this.touchEndClickHandler = e => this.mouseTouchClick(e), this.mouseUpHandler = e => this.mouseTouchClick(e), this.mouseDownHandler = () => this.mouseDown(), this.visibilityChangeHandler = () => this.handleVisibilityChange(), this.themeChangeHandler = e => this.handleThemeChange(e), this.oldThemeChangeHandler = e => this.handleThemeChange(e), this.resizeHandler = () => this.handleWindowResize()
    }
    addListeners() {
        this.manageListeners(!0)
    }
    removeListeners() {
        this.manageListeners(!1)
    }
    doMouseTouchClick(t) {
        let e = this.container,
            a = e.actualOptions;
        if (this.canPush) {
            let o = e.interactivity.mouse.position;
            if (!o) return;
            e.interactivity.mouse.clickPosition = Object.assign({}, o), e.interactivity.mouse.clickTime = new Date().getTime();
            let n = a.interactivity.events.onClick;
            M(n.mode, s => this.handleClickMode(s))
        }
        t.type === "touchend" && setTimeout(() => this.mouseTouchFinish(), 500)
    }
    handleClickMode(t) {
        this.container.handleClickMode(t)
    }
    handleThemeChange(t) {
        let e = t,
            a = e.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme,
            o = this.container.options.themes.find(n => n.name === a);
        o && o.default.auto && this.container.loadTheme(a)
    }
    handleVisibilityChange() {
        let t = this.container,
            e = t.actualOptions;
        this.mouseTouchFinish(), e.pauseOnBlur && (document?.hidden ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.getAnimationStatus() ? t.play(!0) : t.draw(!0)))
    }
    handleWindowResize() {
        this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout(async () => {
            var t;
            return (t = this.container.canvas) === null || t === void 0 ? void 0 : t.windowResize()
        }, 500)
    }
    manageListeners(t) {
        var e;
        let a = this.container,
            o = a.actualOptions,
            n = o.interactivity.detectsOn,
            s = fe;
        if (n === "window") a.interactivity.element = c, s = Tr;
        else if (n === "parent" && a.canvas.element) {
            let h = a.canvas.element;
            a.interactivity.element = (e = h.parentElement) !== null && e !== void 0 ? e : h.parentNode
        } else a.interactivity.element = a.canvas.element;
        let r = !Gt() && typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)");
        r && (r.addEventListener !== void 0 ? lt(r, "change", this.themeChangeHandler, t) : r.addListener !== void 0 && (t ? r.addListener(this.oldThemeChangeHandler) : r.removeListener(this.oldThemeChangeHandler)));
        let l = a.interactivity.element;
        if (!l) return;
        let d = l;
        (o.interactivity.events.onHover.enable || o.interactivity.events.onClick.enable) && (lt(l, ct, this.mouseMoveHandler, t), lt(l, Rr, this.touchStartHandler, t), lt(l, Er, this.touchMoveHandler, t), o.interactivity.events.onClick.enable ? (lt(l, rn, this.touchEndClickHandler, t), lt(l, Ar, this.mouseUpHandler, t), lt(l, Or, this.mouseDownHandler, t)) : lt(l, rn, this.touchEndHandler, t), lt(l, s, this.mouseLeaveHandler, t), lt(l, Gr, this.touchCancelHandler, t)), a.canvas.element && (a.canvas.element.style.pointerEvents = d === a.canvas.element ? "initial" : "none"), o.interactivity.events.resize && (typeof ResizeObserver < "u" ? this.resizeObserver && !t ? (a.canvas.element && this.resizeObserver.unobserve(a.canvas.element), this.resizeObserver.disconnect(), delete this.resizeObserver) : !this.resizeObserver && t && a.canvas.element && (this.resizeObserver = new ResizeObserver(h => {
            h.find(u => u.target === a.canvas.element) && this.handleWindowResize()
        }), this.resizeObserver.observe(a.canvas.element)) : lt(c, Ir, this.resizeHandler, t)), document && lt(document, zr, this.visibilityChangeHandler, t, !1)
    }
    mouseDown() {
        let t = this.container.interactivity;
        if (t) {
            let e = t.mouse;
            e.clicking = !0, e.downPosition = e.position
        }
    }
    mouseTouchClick(t) {
        let e = this.container,
            a = e.actualOptions,
            o = e.interactivity.mouse;
        o.inside = !0;
        let n = !1,
            s = o.position;
        if (s && a.interactivity.events.onClick.enable) {
            for (let [, r] of e.plugins)
                if (r.clickPositionValid && (n = r.clickPositionValid(s), n)) break;
            n || this.doMouseTouchClick(t), o.clicking = !1
        }
    }
    mouseTouchFinish() {
        let t = this.container.interactivity;
        if (!t) return;
        let e = t.mouse;
        delete e.position, delete e.clickPosition, delete e.downPosition, t.status = fe, e.inside = !1, e.clicking = !1
    }
    mouseTouchMove(t) {
        var e, a, o, n, s, r, l;
        let d = this.container,
            h = d.actualOptions;
        if (!(!((e = d.interactivity) === null || e === void 0) && e.element)) return;
        d.interactivity.mouse.inside = !0;
        let p, u = d.canvas.element;
        if (t.type.startsWith("pointer")) {
            this.canPush = !0;
            let m = t;
            if (d.interactivity.element === c) {
                if (u) {
                    let g = u.getBoundingClientRect();
                    p = {
                        x: m.clientX - g.left,
                        y: m.clientY - g.top
                    }
                }
            } else if (h.interactivity.detectsOn === "parent") {
                let g = m.target,
                    y = m.currentTarget,
                    w = d.canvas.element;
                if (g && y && w) {
                    let x = g.getBoundingClientRect(),
                        A = y.getBoundingClientRect(),
                        E = w.getBoundingClientRect();
                    p = {
                        x: m.offsetX + 2 * x.left - (A.left + E.left),
                        y: m.offsetY + 2 * x.top - (A.top + E.top)
                    }
                } else p = {
                    x: (a = m.offsetX) !== null && a !== void 0 ? a : m.clientX,
                    y: (o = m.offsetY) !== null && o !== void 0 ? o : m.clientY
                }
            } else m.target === d.canvas.element && (p = {
                x: (n = m.offsetX) !== null && n !== void 0 ? n : m.clientX,
                y: (s = m.offsetY) !== null && s !== void 0 ? s : m.clientY
            })
        } else {
            this.canPush = t.type !== "touchmove";
            let m = t,
                g = m.touches[m.touches.length - 1],
                y = u?.getBoundingClientRect();
            p = {
                x: g.clientX - ((r = y?.left) !== null && r !== void 0 ? r : 0),
                y: g.clientY - ((l = y?.top) !== null && l !== void 0 ? l : 0)
            }
        }
        let f = d.retina.pixelRatio;
        p && (p.x *= f, p.y *= f), d.interactivity.mouse.position = p, d.interactivity.status = ct
    }
};

function Lr(i, t = 60, e = !1) {
    return {
        value: i,
        factor: e ? 60 / t : 60 * i / 1e3
    }
}
var ii = class {
        constructor(t) {
            this.container = t
        }
        async nextFrame(t) {
            var e;
            try {
                let a = this.container;
                if (!a.smooth && a.lastFrameTime !== void 0 && t < a.lastFrameTime + 1e3 / a.fpsLimit) {
                    a.draw(!1);
                    return
                }(e = a.lastFrameTime) !== null && e !== void 0 || (a.lastFrameTime = t);
                let o = Lr(t - a.lastFrameTime, a.fpsLimit, a.smooth);
                if (a.lifeTime += o.value, a.lastFrameTime = t, o.value > 1e3) {
                    a.draw(!1);
                    return
                }
                if (await a.particles.draw(o), a.duration > 0 && a.lifeTime > a.duration) {
                    a.destroy();
                    return
                }
                a.getAnimationStatus() && a.draw(!1)
            } catch (a) {
                console.error("tsParticles error in animation loop", a)
            }
        }
    },
    z = class {
        constructor() {
            this.value = ""
        }
        static create(t, e) {
            let a = new z;
            return a.load(t), e !== void 0 && (typeof e == "string" || e instanceof Array ? a.load({
                value: e
            }) : a.load(e)), a
        }
        load(t) {
            t?.value !== void 0 && (this.value = t.value)
        }
    },
    ai = class {
        constructor() {
            this.color = new z, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
        }
        load(t) {
            t && (t.color !== void 0 && (this.color = z.create(this.color, t.color)), t.image !== void 0 && (this.image = t.image), t.position !== void 0 && (this.position = t.position), t.repeat !== void 0 && (this.repeat = t.repeat), t.size !== void 0 && (this.size = t.size), t.opacity !== void 0 && (this.opacity = t.opacity))
        }
    },
    oi = class {
        constructor() {
            this.color = new z, this.color.value = "#fff", this.opacity = 1
        }
        load(t) {
            t && (t.color !== void 0 && (this.color = z.create(this.color, t.color)), t.opacity !== void 0 && (this.opacity = t.opacity))
        }
    },
    ni = class {
        constructor() {
            this.composite = "destination-out", this.cover = new oi, this.enable = !1
        }
        load(t) {
            if (t) {
                if (t.composite !== void 0 && (this.composite = t.composite), t.cover !== void 0) {
                    let e = t.cover,
                        a = typeof t.cover == "string" ? {
                            color: t.cover
                        } : t.cover;
                    this.cover.load(e.color !== void 0 ? e : {
                        color: a
                    })
                }
                t.enable !== void 0 && (this.enable = t.enable)
            }
        }
    },
    si = class {
        constructor() {
            this.enable = !0, this.zIndex = 0
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), t.zIndex !== void 0 && (this.zIndex = t.zIndex))
        }
    },
    ri = class {
        constructor() {
            this.enable = !1, this.mode = []
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), t.mode !== void 0 && (this.mode = t.mode))
        }
    },
    me = class {
        constructor() {
            this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle"
        }
        get el() {
            return this.elementId
        }
        set el(t) {
            this.elementId = t
        }
        get elementId() {
            return this.ids
        }
        set elementId(t) {
            this.ids = t
        }
        get ids() {
            return M(this.selectors, t => t.replace("#", ""))
        }
        set ids(t) {
            this.selectors = M(t, e => `#${e}`)
        }
        load(t) {
            var e, a;
            if (!t) return;
            let o = (a = (e = t.ids) !== null && e !== void 0 ? e : t.elementId) !== null && a !== void 0 ? a : t.el;
            o !== void 0 && (this.ids = o), t.selectors !== void 0 && (this.selectors = t.selectors), t.enable !== void 0 && (this.enable = t.enable), t.mode !== void 0 && (this.mode = t.mode), t.type !== void 0 && (this.type = t.type)
        }
    },
    li = class {
        constructor() {
            this.enable = !1, this.force = 2, this.smooth = 10
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), t.force !== void 0 && (this.force = t.force), t.smooth !== void 0 && (this.smooth = t.smooth))
        }
    },
    ci = class {
        constructor() {
            this.enable = !1, this.mode = [], this.parallax = new li
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), t.mode !== void 0 && (this.mode = t.mode), this.parallax.load(t.parallax))
        }
    },
    di = class {
        constructor() {
            this.onClick = new ri, this.onDiv = new me, this.onHover = new ci, this.resize = !0
        }
        get onclick() {
            return this.onClick
        }
        set onclick(t) {
            this.onClick = t
        }
        get ondiv() {
            return this.onDiv
        }
        set ondiv(t) {
            this.onDiv = t
        }
        get onhover() {
            return this.onHover
        }
        set onhover(t) {
            this.onHover = t
        }
        load(t) {
            var e, a, o;
            if (!t) return;
            this.onClick.load((e = t.onClick) !== null && e !== void 0 ? e : t.onclick);
            let n = (a = t.onDiv) !== null && a !== void 0 ? a : t.ondiv;
            n !== void 0 && (this.onDiv = M(n, s => {
                let r = new me;
                return r.load(s), r
            })), this.onHover.load((o = t.onHover) !== null && o !== void 0 ? o : t.onhover), t.resize !== void 0 && (this.resize = t.resize)
        }
    },
    hi = class {
        constructor(t, e) {
            this._engine = t, this._container = e
        }
        load(t) {
            if (t && this._container) {
                let e = this._engine.plugins.interactors.get(this._container);
                if (e)
                    for (let a of e) a.loadModeOptions && a.loadModeOptions(this, t)
            }
        }
    },
    ve = class {
        constructor(t, e) {
            this.detectsOn = "window", this.events = new di, this.modes = new hi(t, e)
        }
        get detect_on() {
            return this.detectsOn
        }
        set detect_on(t) {
            this.detectsOn = t
        }
        load(t) {
            var e;
            if (!t) return;
            let a = (e = t.detectsOn) !== null && e !== void 0 ? e : t.detect_on;
            a !== void 0 && (this.detectsOn = a), this.events.load(t.events), this.modes.load(t.modes)
        }
    },
    ui = class {
        load(t) {
            var e, a;
            t && (t.position !== void 0 && (this.position = {
                x: (e = t.position.x) !== null && e !== void 0 ? e : 50,
                y: (a = t.position.y) !== null && a !== void 0 ? a : 50
            }), t.options !== void 0 && (this.options = D({}, t.options)))
        }
    },
    pi = class {
        constructor() {
            this.factor = 4, this.value = !0
        }
        load(t) {
            t && (t.factor !== void 0 && (this.factor = t.factor), t.value !== void 0 && (this.value = t.value))
        }
    },
    fi = class {
        constructor() {
            this.disable = !1, this.reduce = new pi
        }
        load(t) {
            t && (t.disable !== void 0 && (this.disable = t.disable), this.reduce.load(t.reduce))
        }
    },
    mi = class {
        constructor() {
            this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas"
        }
        load(t) {
            t && (t.maxWidth !== void 0 && (this.maxWidth = t.maxWidth), t.mode !== void 0 && (t.mode === "screen" ? this.mode = "screen" : this.mode = "canvas"), t.options !== void 0 && (this.options = D({}, t.options)))
        }
    },
    vi = class {
        constructor() {
            this.auto = !1, this.mode = "any", this.value = !1
        }
        load(t) {
            t && (t.auto !== void 0 && (this.auto = t.auto), t.mode !== void 0 && (this.mode = t.mode), t.value !== void 0 && (this.value = t.value))
        }
    },
    gi = class {
        constructor() {
            this.name = "", this.default = new vi
        }
        load(t) {
            t && (t.name !== void 0 && (this.name = t.name), this.default.load(t.default), t.options !== void 0 && (this.options = D({}, t.options)))
        }
    },
    ie = class {
        constructor() {
            this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.decay = 0, this.sync = !0
        }
        load(t) {
            t && (t.count !== void 0 && (this.count = k(t.count)), t.enable !== void 0 && (this.enable = t.enable), t.offset !== void 0 && (this.offset = k(t.offset)), t.speed !== void 0 && (this.speed = k(t.speed)), t.decay !== void 0 && (this.decay = k(t.decay)), t.sync !== void 0 && (this.sync = t.sync))
        }
    },
    yi = class {
        constructor() {
            this.h = new ie, this.s = new ie, this.l = new ie
        }
        load(t) {
            t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l))
        }
    },
    vt = class extends z {
        constructor() {
            super(), this.animation = new yi
        }
        static create(t, e) {
            let a = new vt;
            return a.load(t), e !== void 0 && (typeof e == "string" || e instanceof Array ? a.load({
                value: e
            }) : a.load(e)), a
        }
        load(t) {
            if (super.load(t), !t) return;
            let e = t.animation;
            e !== void 0 && (e.enable !== void 0 ? this.animation.h.load(e) : this.animation.load(t.animation))
        }
    },
    bi = class {
        constructor() {
            this.enable = !0, this.retries = 0
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), t.retries !== void 0 && (this.retries = t.retries))
        }
    },
    Si = class {
        constructor() {
            this.enable = !1, this.minimumValue = 0
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), t.minimumValue !== void 0 && (this.minimumValue = t.minimumValue))
        }
    },
    tt = class {
        constructor() {
            this.random = new Si, this.value = 0
        }
        load(t) {
            t && (typeof t.random == "boolean" ? this.random.enable = t.random : this.random.load(t.random), t.value !== void 0 && (this.value = k(t.value, this.random.enable ? this.random.minimumValue : void 0)))
        }
    },
    ge = class extends tt {
        constructor() {
            super(), this.random.minimumValue = .1, this.value = 1
        }
    },
    ye = class {
        constructor() {
            this.horizontal = new ge, this.vertical = new ge
        }
        load(t) {
            t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical))
        }
    },
    xi = class {
        constructor() {
            this.bounce = new ye, this.enable = !1, this.mode = "bounce", this.overlap = new bi
        }
        load(t) {
            t && (this.bounce.load(t.bounce), t.enable !== void 0 && (this.enable = t.enable), t.mode !== void 0 && (this.mode = t.mode), this.overlap.load(t.overlap))
        }
    },
    wi = class {
        constructor() {
            this.offset = 0, this.value = 90
        }
        load(t) {
            t && (t.offset !== void 0 && (this.offset = k(t.offset)), t.value !== void 0 && (this.value = k(t.value)))
        }
    },
    _i = class {
        constructor() {
            this.distance = 200, this.enable = !1, this.rotate = {
                x: 3e3,
                y: 3e3
            }
        }
        get rotateX() {
            return this.rotate.x
        }
        set rotateX(t) {
            this.rotate.x = t
        }
        get rotateY() {
            return this.rotate.y
        }
        set rotateY(t) {
            this.rotate.y = t
        }
        load(t) {
            var e, a, o, n;
            if (!t) return;
            t.distance !== void 0 && (this.distance = k(t.distance)), t.enable !== void 0 && (this.enable = t.enable);
            let s = (a = (e = t.rotate) === null || e === void 0 ? void 0 : e.x) !== null && a !== void 0 ? a : t.rotateX;
            s !== void 0 && (this.rotate.x = s);
            let r = (n = (o = t.rotate) === null || o === void 0 ? void 0 : o.y) !== null && n !== void 0 ? n : t.rotateY;
            r !== void 0 && (this.rotate.y = r)
        }
    },
    Pi = class {
        constructor() {
            this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
        }
        load(t) {
            t && (t.acceleration !== void 0 && (this.acceleration = k(t.acceleration)), t.enable !== void 0 && (this.enable = t.enable), t.inverse !== void 0 && (this.inverse = t.inverse), t.maxSpeed !== void 0 && (this.maxSpeed = k(t.maxSpeed)))
        }
    },
    Ci = class extends tt {
        constructor() {
            super()
        }
    },
    ki = class {
        constructor() {
            this.clamp = !0, this.delay = new Ci, this.enable = !1, this.options = {}
        }
        load(t) {
            t && (t.clamp !== void 0 && (this.clamp = t.clamp), this.delay.load(t.delay), t.enable !== void 0 && (this.enable = t.enable), this.generator = t.generator, t.options && (this.options = D(this.options, t.options)))
        }
    },
    Vi = class {
        constructor() {
            this.enable = !1, this.length = 10, this.fillColor = new z, this.fillColor.value = "#000000"
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), this.fillColor = z.create(this.fillColor, t.fillColor), t.length !== void 0 && (this.length = t.length))
        }
    },
    Oi = class {
        constructor() {
            this.default = "out"
        }
        load(t) {
            var e, a, o, n;
            t && (t.default !== void 0 && (this.default = t.default), this.bottom = (e = t.bottom) !== null && e !== void 0 ? e : t.default, this.left = (a = t.left) !== null && a !== void 0 ? a : t.default, this.right = (o = t.right) !== null && o !== void 0 ? o : t.default, this.top = (n = t.top) !== null && n !== void 0 ? n : t.default)
        }
    },
    Ai = class {
        constructor() {
            this.acceleration = 0, this.enable = !1
        }
        load(t) {
            t && (t.acceleration !== void 0 && (this.acceleration = k(t.acceleration)), t.enable !== void 0 && (this.enable = t.enable), this.position = t.position ? D({}, t.position) : void 0)
        }
    },
    Ri = class {
        constructor() {
            this.angle = new wi, this.attract = new _i, this.center = {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0
            }, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new Pi, this.path = new ki, this.outModes = new Oi, this.random = !1, this.size = !1, this.speed = 2, this.spin = new Ai, this.straight = !1, this.trail = new Vi, this.vibrate = !1, this.warp = !1
        }
        get bounce() {
            return this.collisions
        }
        set bounce(t) {
            this.collisions = t
        }
        get collisions() {
            return !1
        }
        set collisions(t) {}
        get noise() {
            return this.path
        }
        set noise(t) {
            this.path = t
        }
        get outMode() {
            return this.outModes.default
        }
        set outMode(t) {
            this.outModes.default = t
        }
        get out_mode() {
            return this.outMode
        }
        set out_mode(t) {
            this.outMode = t
        }
        load(t) {
            var e, a, o, n;
            if (!t) return;
            this.angle.load(typeof t.angle == "number" ? {
                value: t.angle
            } : t.angle), this.attract.load(t.attract), this.center = D((e = this.center) !== null && e !== void 0 ? e : {}, t.center), t.decay !== void 0 && (this.decay = t.decay), t.direction !== void 0 && (this.direction = t.direction), t.distance !== void 0 && (this.distance = typeof t.distance == "number" ? {
                horizontal: t.distance,
                vertical: t.distance
            } : Object.assign({}, t.distance)), t.drift !== void 0 && (this.drift = k(t.drift)), t.enable !== void 0 && (this.enable = t.enable), this.gravity.load(t.gravity);
            let s = (o = (a = t.outModes) !== null && a !== void 0 ? a : t.outMode) !== null && o !== void 0 ? o : t.out_mode;
            s !== void 0 && (typeof s == "object" ? this.outModes.load(s) : this.outModes.load({
                default: s
            })), this.path.load((n = t.path) !== null && n !== void 0 ? n : t.noise), t.random !== void 0 && (this.random = t.random), t.size !== void 0 && (this.size = t.size), t.speed !== void 0 && (this.speed = k(t.speed)), this.spin.load(t.spin), t.straight !== void 0 && (this.straight = t.straight), this.trail.load(t.trail), t.vibrate !== void 0 && (this.vibrate = t.vibrate), t.warp !== void 0 && (this.warp = t.warp)
        }
    },
    be = class {
        constructor() {
            this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.sync = !1
        }
        load(t) {
            t && (t.count !== void 0 && (this.count = k(t.count)), t.enable !== void 0 && (this.enable = t.enable), t.speed !== void 0 && (this.speed = k(t.speed)), t.decay !== void 0 && (this.decay = k(t.decay)), t.sync !== void 0 && (this.sync = t.sync))
        }
    },
    Ei = class extends be {
        constructor() {
            super(), this.destroy = "none", this.enable = !1, this.speed = 2, this.startValue = "random", this.sync = !1
        }
        get opacity_min() {
            return this.minimumValue
        }
        set opacity_min(t) {
            this.minimumValue = t
        }
        load(t) {
            var e;
            t && (super.load(t), t.destroy !== void 0 && (this.destroy = t.destroy), t.enable !== void 0 && (this.enable = t.enable), this.minimumValue = (e = t.minimumValue) !== null && e !== void 0 ? e : t.opacity_min, t.speed !== void 0 && (this.speed = t.speed), t.startValue !== void 0 && (this.startValue = t.startValue), t.sync !== void 0 && (this.sync = t.sync))
        }
    },
    Ti = class extends tt {
        constructor() {
            super(), this.animation = new Ei, this.random.minimumValue = .1, this.value = 1
        }
        get anim() {
            return this.animation
        }
        set anim(t) {
            this.animation = t
        }
        load(t) {
            var e;
            if (!t) return;
            super.load(t);
            let a = (e = t.animation) !== null && e !== void 0 ? e : t.anim;
            a !== void 0 && (this.animation.load(a), this.value = k(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
        }
    },
    Gi = class {
        constructor() {
            this.enable = !1, this.area = 800, this.factor = 1e3
        }
        get value_area() {
            return this.area
        }
        set value_area(t) {
            this.area = t
        }
        load(t) {
            var e;
            if (!t) return;
            t.enable !== void 0 && (this.enable = t.enable);
            let a = (e = t.area) !== null && e !== void 0 ? e : t.value_area;
            a !== void 0 && (this.area = a), t.factor !== void 0 && (this.factor = t.factor)
        }
    },
    Ii = class {
        constructor() {
            this.density = new Gi, this.limit = 0, this.value = 100
        }
        get max() {
            return this.limit
        }
        set max(t) {
            this.limit = t
        }
        load(t) {
            var e;
            if (!t) return;
            this.density.load(t.density);
            let a = (e = t.limit) !== null && e !== void 0 ? e : t.max;
            a !== void 0 && (this.limit = a), t.value !== void 0 && (this.value = t.value)
        }
    },
    zi = class {
        constructor() {
            this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), t.speed !== void 0 && (this.speed = k(t.speed)), t.decay !== void 0 && (this.decay = k(t.decay)), t.sync !== void 0 && (this.sync = t.sync))
        }
    },
    Mi = class extends tt {
        constructor() {
            super(), this.animation = new zi, this.direction = "clockwise", this.path = !1, this.value = 0
        }
        load(t) {
            t && (super.load(t), t.direction !== void 0 && (this.direction = t.direction), this.animation.load(t.animation), t.path !== void 0 && (this.path = t.path))
        }
    },
    Li = class {
        constructor() {
            this.blur = 0, this.color = new z, this.enable = !1, this.offset = {
                x: 0,
                y: 0
            }, this.color.value = "#000"
        }
        load(t) {
            t && (t.blur !== void 0 && (this.blur = t.blur), this.color = z.create(this.color, t.color), t.enable !== void 0 && (this.enable = t.enable), t.offset !== void 0 && (t.offset.x !== void 0 && (this.offset.x = t.offset.x), t.offset.y !== void 0 && (this.offset.y = t.offset.y)))
        }
    },
    Se = class {
        constructor() {
            this.options = {}, this.type = "circle"
        }
        get character() {
            var t;
            return (t = this.options.character) !== null && t !== void 0 ? t : this.options.char
        }
        set character(t) {
            this.options.character = t, this.options.char = t
        }
        get custom() {
            return this.options
        }
        set custom(t) {
            this.options = t
        }
        get image() {
            var t;
            return (t = this.options.image) !== null && t !== void 0 ? t : this.options.images
        }
        set image(t) {
            this.options.image = t, this.options.images = t
        }
        get images() {
            return this.image
        }
        set images(t) {
            this.image = t
        }
        get polygon() {
            var t;
            return (t = this.options.polygon) !== null && t !== void 0 ? t : this.options.star
        }
        set polygon(t) {
            this.options.polygon = t, this.options.star = t
        }
        get stroke() {
            return []
        }
        set stroke(t) {}
        load(t) {
            var e, a, o;
            if (!t) return;
            let n = (e = t.options) !== null && e !== void 0 ? e : t.custom;
            if (n !== void 0)
                for (let s in n) {
                    let r = n[s];
                    r && (this.options[s] = D((a = this.options[s]) !== null && a !== void 0 ? a : {}, r))
                }
            this.loadShape(t.character, "character", "char", !0), this.loadShape(t.polygon, "polygon", "star", !1), this.loadShape((o = t.image) !== null && o !== void 0 ? o : t.images, "image", "images", !0), t.type !== void 0 && (this.type = t.type)
        }
        loadShape(t, e, a, o) {
            var n, s;
            if (!t) return;
            let r = t instanceof Array,
                l = r ? [] : {},
                d = r !== this.options[e] instanceof Array,
                h = r !== this.options[a] instanceof Array;
            d && (this.options[e] = l), h && o && (this.options[a] = l), this.options[e] = D((n = this.options[e]) !== null && n !== void 0 ? n : l, t), this.options[a] && !o || (this.options[a] = D((s = this.options[a]) !== null && s !== void 0 ? s : l, t))
        }
    },
    Fi = class extends be {
        constructor() {
            super(), this.destroy = "none", this.enable = !1, this.speed = 5, this.startValue = "random", this.sync = !1
        }
        get size_min() {
            return this.minimumValue
        }
        set size_min(t) {
            this.minimumValue = t
        }
        load(t) {
            var e;
            super.load(t), t && (t.destroy !== void 0 && (this.destroy = t.destroy), t.enable !== void 0 && (this.enable = t.enable), this.minimumValue = (e = t.minimumValue) !== null && e !== void 0 ? e : t.size_min, t.speed !== void 0 && (this.speed = t.speed), t.startValue !== void 0 && (this.startValue = t.startValue), t.sync !== void 0 && (this.sync = t.sync))
        }
    },
    Di = class extends tt {
        constructor() {
            super(), this.animation = new Fi, this.random.minimumValue = 1, this.value = 3
        }
        get anim() {
            return this.animation
        }
        set anim(t) {
            this.animation = t
        }
        load(t) {
            var e;
            if (super.load(t), !t) return;
            let a = (e = t.animation) !== null && e !== void 0 ? e : t.anim;
            a !== void 0 && (this.animation.load(a), this.value = k(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
        }
    },
    xe = class {
        constructor() {
            this.width = 0
        }
        load(t) {
            t && (t.color !== void 0 && (this.color = vt.create(this.color, t.color)), t.width !== void 0 && (this.width = t.width), t.opacity !== void 0 && (this.opacity = t.opacity))
        }
    },
    Ui = class extends tt {
        constructor() {
            super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
        }
        load(t) {
            super.load(t), t && (t.opacityRate !== void 0 && (this.opacityRate = t.opacityRate), t.sizeRate !== void 0 && (this.sizeRate = t.sizeRate), t.velocityRate !== void 0 && (this.velocityRate = t.velocityRate))
        }
    },
    Ni = class {
        constructor(t, e) {
            this._engine = t, this._container = e, this.bounce = new ye, this.collisions = new xi, this.color = new vt, this.color.value = "#fff", this.groups = {}, this.move = new Ri, this.number = new Ii, this.opacity = new Ti, this.reduceDuplicates = !1, this.rotate = new Mi, this.shadow = new Li, this.shape = new Se, this.size = new Di, this.stroke = new xe, this.zIndex = new Ui
        }
        load(t) {
            var e, a, o, n, s, r;
            if (!t) return;
            if (this.bounce.load(t.bounce), this.color.load(vt.create(this.color, t.color)), t.groups !== void 0)
                for (let h in t.groups) {
                    let p = t.groups[h];
                    p !== void 0 && (this.groups[h] = D((e = this.groups[h]) !== null && e !== void 0 ? e : {}, p))
                }
            this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), t.reduceDuplicates !== void 0 && (this.reduceDuplicates = t.reduceDuplicates), this.rotate.load(t.rotate), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.zIndex.load(t.zIndex);
            let l = (o = (a = t.move) === null || a === void 0 ? void 0 : a.collisions) !== null && o !== void 0 ? o : (n = t.move) === null || n === void 0 ? void 0 : n.bounce;
            l !== void 0 && (this.collisions.enable = l), this.collisions.load(t.collisions), t.interactivity !== void 0 && (this.interactivity = D({}, t.interactivity));
            let d = (s = t.stroke) !== null && s !== void 0 ? s : (r = t.shape) === null || r === void 0 ? void 0 : r.stroke;
            if (d && (this.stroke = M(d, h => {
                    let p = new xe;
                    return p.load(h), p
                })), this._container) {
                let h = this._engine.plugins.updaters.get(this._container);
                if (h)
                    for (let u of h) u.loadOptions && u.loadOptions(this, t);
                let p = this._engine.plugins.interactors.get(this._container);
                if (p)
                    for (let u of p) u.loadParticlesOptions && u.loadParticlesOptions(this, t)
            }
        }
    };

function xn(i, ...t) {
    for (let e of t) i.load(e)
}

function wn(i, t, ...e) {
    let a = new Ni(i, t);
    return xn(a, ...e), a
}
var Hi = class {
        constructor(t, e) {
            this._engine = t, this._container = e, this.autoPlay = !0, this.background = new ai, this.backgroundMask = new ni, this.fullScreen = new si, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new ve(t, e), this.manualParticles = [], this.motion = new fi, this.particles = wn(this._engine, this._container), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.smooth = !1, this.style = {}, this.themes = [], this.zLayers = 100
        }
        get backgroundMode() {
            return this.fullScreen
        }
        set backgroundMode(t) {
            this.fullScreen.load(t)
        }
        get fps_limit() {
            return this.fpsLimit
        }
        set fps_limit(t) {
            this.fpsLimit = t
        }
        get retina_detect() {
            return this.detectRetina
        }
        set retina_detect(t) {
            this.detectRetina = t
        }
        load(t) {
            var e, a, o, n, s;
            if (!t) return;
            t.preset !== void 0 && M(t.preset, p => this._importPreset(p)), t.autoPlay !== void 0 && (this.autoPlay = t.autoPlay);
            let r = (e = t.detectRetina) !== null && e !== void 0 ? e : t.retina_detect;
            r !== void 0 && (this.detectRetina = r), t.duration !== void 0 && (this.duration = t.duration);
            let l = (a = t.fpsLimit) !== null && a !== void 0 ? a : t.fps_limit;
            l !== void 0 && (this.fpsLimit = l), t.pauseOnBlur !== void 0 && (this.pauseOnBlur = t.pauseOnBlur), t.pauseOnOutsideViewport !== void 0 && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), t.zLayers !== void 0 && (this.zLayers = t.zLayers), this.background.load(t.background);
            let d = (o = t.fullScreen) !== null && o !== void 0 ? o : t.backgroundMode;
            typeof d == "boolean" ? this.fullScreen.enable = d : this.fullScreen.load(d), this.backgroundMask.load(t.backgroundMask), this.interactivity.load(t.interactivity), t.manualParticles !== void 0 && (this.manualParticles = t.manualParticles.map(p => {
                let u = new ui;
                return u.load(p), u
            })), this.motion.load(t.motion), this.particles.load(t.particles), this.style = D(this.style, t.style), this._engine.plugins.loadOptions(this, t), t.smooth !== void 0 && (this.smooth = t.smooth);
            let h = this._engine.plugins.interactors.get(this._container);
            if (h)
                for (let p of h) p.loadOptions && p.loadOptions(this, t);
            if (t.responsive !== void 0)
                for (let p of t.responsive) {
                    let u = new mi;
                    u.load(p), this.responsive.push(u)
                }
            if (this.responsive.sort((p, u) => p.maxWidth - u.maxWidth), t.themes !== void 0)
                for (let p of t.themes) {
                    let u = new gi;
                    u.load(p), this.themes.push(u)
                }
            this.defaultDarkTheme = (n = this._findDefaultTheme("dark")) === null || n === void 0 ? void 0 : n.name, this.defaultLightTheme = (s = this._findDefaultTheme("light")) === null || s === void 0 ? void 0 : s.name
        }
        setResponsive(t, e, a) {
            this.load(a);
            let o = this.responsive.find(n => n.mode === "screen" && screen ? n.maxWidth > screen.availWidth : n.maxWidth * e > t);
            return this.load(o?.options), o?.maxWidth
        }
        setTheme(t) {
            if (t) {
                let e = this.themes.find(a => a.name === t);
                e && this.load(e.options)
            } else {
                let e = typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)"),
                    a = e && e.matches,
                    o = this._findDefaultTheme(a ? "dark" : "light");
                o && this.load(o.options)
            }
        }
        _findDefaultTheme(t) {
            var e;
            return (e = this.themes.find(a => a.default.value && a.default.mode === t)) !== null && e !== void 0 ? e : this.themes.find(a => a.default.value && a.default.mode === "any")
        }
        _importPreset(t) {
            this.load(this._engine.plugins.getPreset(t))
        }
    },
    Bi = class {
        constructor(t, e) {
            this.container = e, this._engine = t, this._interactors = this._engine.plugins.getInteractors(this.container, !0), this._externalInteractors = [], this._particleInteractors = []
        }
        async externalInteract(t) {
            for (let e of this._externalInteractors) e.isEnabled() && await e.interact(t)
        }
        handleClickMode(t) {
            for (let e of this._externalInteractors) e.handleClickMode && e.handleClickMode(t)
        }
        init() {
            this._externalInteractors = [], this._particleInteractors = [];
            for (let t of this._interactors) {
                switch (t.type) {
                    case 0:
                        this._externalInteractors.push(t);
                        break;
                    case 1:
                        this._particleInteractors.push(t);
                        break
                }
                t.init()
            }
        }
        async particlesInteract(t, e) {
            for (let a of this._externalInteractors) a.clear(t, e);
            for (let a of this._particleInteractors) a.isEnabled(t) && await a.interact(t, e)
        }
        async reset(t) {
            for (let e of this._externalInteractors) e.isEnabled() && await e.reset(t);
            for (let e of this._particleInteractors) e.isEnabled(t) && await e.reset(t)
        }
    },
    ln = i => {
        (G(i.outMode, i.checkModes) || G(i.outMode, i.checkModes)) && (i.coord > i.maxCoord - 2 * i.radius ? i.setCb(-i.radius) : i.coord < 2 * i.radius && i.setCb(i.radius))
    },
    ji = class {
        constructor(t, e, a, o, n, s) {
            var r, l, d, h, p, u, f, m, g, y, w, x, A;
            this.id = e, this.container = a, this.group = s, this._engine = t, this.fill = !0, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.rotation = 0, this.misplaced = !1, this.retina = {
                maxDistance: {}
            }, this.outType = "normal", this.ignoresResizeRatio = !0;
            let E = a.retina.pixelRatio,
                R = a.actualOptions,
                v = wn(this._engine, a, R.particles),
                W = v.shape.type,
                K = v.reduceDuplicates;
            if (this.shape = X(W, this.id, K), n?.shape) {
                if (n.shape.type) {
                    let Ne = n.shape.type;
                    this.shape = X(Ne, this.id, K)
                }
                let ot = new Se;
                ot.load(n.shape), this.shape && (this.shapeData = this._loadShapeData(ot, K))
            } else this.shapeData = this._loadShapeData(v.shape, K);
            v.load(n), v.load((r = this.shapeData) === null || r === void 0 ? void 0 : r.particles), this.interactivity = new ve(t, a), this.interactivity.load(a.actualOptions.interactivity), this.interactivity.load(v.interactivity), this.fill = (d = (l = this.shapeData) === null || l === void 0 ? void 0 : l.fill) !== null && d !== void 0 ? d : this.fill, this.close = (p = (h = this.shapeData) === null || h === void 0 ? void 0 : h.close) !== null && p !== void 0 ? p : this.close, this.options = v;
            let Q = this.options.move.path;
            this.pathDelay = 1e3 * Tt(Q.delay), Q.generator && (this.pathGenerator = this._engine.plugins.getPathGenerator(Q.generator), this.pathGenerator && a.addPath(Q.generator, this.pathGenerator) && this.pathGenerator.init(a));
            let Ht = P(this.options.zIndex.value);
            a.retina.initParticle(this);
            let st = this.options.size,
                Bt = st.value,
                gt = st.animation;
            if (this.size = {
                    enable: st.animation.enable,
                    value: P(st.value) * a.retina.pixelRatio,
                    max: at(Bt) * E,
                    min: Dt(Bt) * E,
                    loops: 0,
                    maxLoops: P(st.animation.count)
                }, gt.enable) {
                switch (this.size.status = 0, this.size.decay = 1 - P(gt.decay), gt.startValue) {
                    case "min":
                        this.size.value = this.size.min, this.size.status = 0;
                        break;
                    case "random":
                        this.size.value = H(this.size) * E, this.size.status = C() >= .5 ? 0 : 1;
                        break;
                    case "max":
                    default:
                        this.size.value = this.size.max, this.size.status = 1;
                        break
                }
                this.size.velocity = ((u = this.retina.sizeAnimationSpeed) !== null && u !== void 0 ? u : a.retina.sizeAnimationSpeed) / 100 * a.retina.reduceFactor, gt.sync || (this.size.velocity *= C())
            }
            this.bubble = {
                inRange: !1
            }, this.slow = {
                inRange: !1,
                factor: 1
            }, this.position = this._calcPosition(a, o, Y(Ht, 0, a.zLayers)), this.initialPosition = this.position.copy();
            let Xt = a.canvas.size,
                ut = this.options.move.center,
                jt = ut.mode === "percent";
            switch (this.moveCenter = {
                    x: ((f = ut.x) !== null && f !== void 0 ? f : 50) * (jt ? Xt.width / 100 : 1),
                    y: ((m = ut.y) !== null && m !== void 0 ? m : 50) * (jt ? Xt.height / 100 : 1),
                    radius: (g = this.options.move.center.radius) !== null && g !== void 0 ? g : 0,
                    mode: (y = this.options.move.center.mode) !== null && y !== void 0 ? y : "percent"
                }, this.direction = dr(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
                case "inside":
                    this.outType = "inside";
                    break;
                case "outside":
                    this.outType = "outside";
                    break
            }
            this.initialVelocity = this._calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - P(this.options.move.decay), this.offset = I.origin;
            let Wt = a.particles;
            Wt.needsSort = Wt.needsSort || Wt.lastZIndex < this.position.z, Wt.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / a.zLayers, this.sides = 24;
            let q = a.drawers.get(this.shape);
            q || (q = this._engine.plugins.getShapeDrawer(this.shape), q && a.drawers.set(this.shape, q)), q?.loadShape && q?.loadShape(this);
            let de = q?.getSidesCount;
            de && (this.sides = de(this)), this.spawning = !1, this.shadowColor = J(this.options.shadow.color);
            for (let ot of a.particles.updaters)(w = ot.init) === null || w === void 0 || w.call(ot, this);
            for (let ot of a.particles.movers)(x = ot.init) === null || x === void 0 || x.call(ot, this);
            q?.particleInit && q.particleInit(a, this);
            for (let [, ot] of a.plugins)(A = ot.particleCreated) === null || A === void 0 || A.call(ot, this)
        }
        destroy(t) {
            if (!this.unbreakable && !this.destroyed) {
                this.destroyed = !0, this.bubble.inRange = !1, this.slow.inRange = !1;
                for (let [, e] of this.container.plugins) e.particleDestroyed && e.particleDestroyed(this, t);
                for (let e of this.container.particles.updaters) e.particleDestroyed && e.particleDestroyed(this, t)
            }
        }
        draw(t) {
            let e = this.container;
            for (let [, a] of e.plugins) e.canvas.drawParticlePlugin(a, this, t);
            e.canvas.drawParticle(this, t)
        }
        getFillColor() {
            var t, e;
            let a = (t = this.bubble.color) !== null && t !== void 0 ? t : sn(this.color);
            if (a && this.roll && (this.backColor || this.roll.alter)) {
                let o = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                    n = this.roll.horizontal ? Math.PI / 2 : 0;
                if (Math.floor((((e = this.roll.angle) !== null && e !== void 0 ? e : 0) + n) / (Math.PI / o)) % 2) {
                    if (this.backColor) return this.backColor;
                    if (this.roll.alter) return Vr(a, this.roll.alter.type, this.roll.alter.value)
                }
            }
            return a
        }
        getMass() {
            return this.getRadius() ** 2 * Math.PI / 2
        }
        getPosition() {
            return {
                x: this.position.x + this.offset.x,
                y: this.position.y + this.offset.y,
                z: this.position.z
            }
        }
        getRadius() {
            var t;
            return (t = this.bubble.radius) !== null && t !== void 0 ? t : this.size.value
        }
        getStrokeColor() {
            var t, e;
            return (e = (t = this.bubble.color) !== null && t !== void 0 ? t : sn(this.strokeColor)) !== null && e !== void 0 ? e : this.getFillColor()
        }
        isInsideCanvas() {
            let t = this.getRadius(),
                e = this.container.canvas.size;
            return this.position.x >= -t && this.position.y >= -t && this.position.y <= e.height + t && this.position.x <= e.width + t
        }
        isVisible() {
            return !this.destroyed && !this.spawning && this.isInsideCanvas()
        }
        reset() {
            this.opacity && (this.opacity.loops = 0), this.size.loops = 0
        }
        _calcPosition(t, e, a, o = 0) {
            var n, s, r, l;
            for (let [, y] of t.plugins) {
                let w = y.particlePosition !== void 0 ? y.particlePosition(e, this) : void 0;
                if (w !== void 0) return $.create(w.x, w.y, a)
            }
            let d = t.canvas.size,
                h = pr({
                    size: d,
                    position: e
                }),
                p = $.create(h.x, h.y, a),
                u = this.getRadius(),
                f = this.options.move.outModes,
                m = y => {
                    ln({
                        outMode: y,
                        checkModes: ["bounce", "bounce-horizontal"],
                        coord: p.x,
                        maxCoord: t.canvas.size.width,
                        setCb: w => p.x += w,
                        radius: u
                    })
                },
                g = y => {
                    ln({
                        outMode: y,
                        checkModes: ["bounce", "bounce-vertical"],
                        coord: p.y,
                        maxCoord: t.canvas.size.height,
                        setCb: w => p.y += w,
                        radius: u
                    })
                };
            return m((n = f.left) !== null && n !== void 0 ? n : f.default), m((s = f.right) !== null && s !== void 0 ? s : f.default), g((r = f.top) !== null && r !== void 0 ? r : f.default), g((l = f.bottom) !== null && l !== void 0 ? l : f.default), this._checkOverlap(p, o) ? this._calcPosition(t, void 0, a, o + 1) : p
        }
        _calculateVelocity() {
            let e = hr(this.direction).copy(),
                a = this.options.move;
            if (a.direction === "inside" || a.direction === "outside") return e;
            let o = Math.PI / 180 * P(a.angle.value),
                n = Math.PI / 180 * P(a.angle.offset),
                s = {
                    left: n - o / 2,
                    right: n + o / 2
                };
            return a.straight || (e.angle += H(k(s.left, s.right))), a.random && typeof a.speed == "number" && (e.length *= C()), e
        }
        _checkOverlap(t, e = 0) {
            let a = this.options.collisions,
                o = this.getRadius();
            if (!a.enable) return !1;
            let n = a.overlap;
            if (n.enable) return !1;
            let s = n.retries;
            if (s >= 0 && e > s) throw new Error("Particle is overlapping and can't be placed");
            let r = !1;
            for (let l of this.container.particles.array)
                if (L(t, l.position) < o + l.getRadius()) {
                    r = !0;
                    break
                } return r
        }
        _loadShapeData(t, e) {
            let a = t.options[this.shape];
            if (a) return D({}, X(a, this.id, e))
        }
    },
    Wi = class {
        constructor(t, e) {
            this.position = t, this.particle = e
        }
    },
    we = class {
        constructor(t, e) {
            this.position = {
                x: t,
                y: e
            }
        }
    },
    B = class extends we {
        constructor(t, e, a) {
            super(t, e), this.radius = a
        }
        contains(t) {
            return L(t, this.position) <= this.radius
        }
        intersects(t) {
            let e = t,
                a = t,
                o = this.position,
                n = t.position,
                s = {
                    x: Math.abs(n.x - o.x),
                    y: Math.abs(n.y - o.y)
                },
                r = this.radius;
            if (a.radius !== void 0) {
                let l = r + a.radius,
                    d = Math.sqrt(s.x ** 2 + s.y ** 2);
                return l > d
            }
            if (e.size !== void 0) {
                let l = e.size.width,
                    d = e.size.height;
                return Math.pow(s.x - l, 2) + Math.pow(s.y - d, 2) <= r ** 2 || s.x <= r + l && s.y <= r + d || s.x <= l || s.y <= d
            }
            return !1
        }
    },
    j = class extends we {
        constructor(t, e, a, o) {
            super(t, e), this.size = {
                height: o,
                width: a
            }
        }
        contains(t) {
            let e = this.size.width,
                a = this.size.height,
                o = this.position;
            return t.x >= o.x && t.x <= o.x + e && t.y >= o.y && t.y <= o.y + a
        }
        intersects(t) {
            t instanceof B && t.intersects(this);
            let e = this.size.width,
                a = this.size.height,
                o = this.position,
                n = t.position,
                s = t instanceof j ? t.size : {
                    width: 0,
                    height: 0
                },
                r = s.width,
                l = s.height;
            return n.x < o.x + e && n.x + r > o.x && n.y < o.y + a && n.y + l > o.y
        }
    },
    ft = class {
        constructor(t, e) {
            this.rectangle = t, this.capacity = e, this.points = [], this.divided = !1
        }
        insert(t) {
            var e, a, o, n, s;
            return this.rectangle.contains(t.position) ? this.points.length < this.capacity ? (this.points.push(t), !0) : (this.divided || this.subdivide(), (s = ((e = this.northEast) === null || e === void 0 ? void 0 : e.insert(t)) || ((a = this.northWest) === null || a === void 0 ? void 0 : a.insert(t)) || ((o = this.southEast) === null || o === void 0 ? void 0 : o.insert(t)) || ((n = this.southWest) === null || n === void 0 ? void 0 : n.insert(t))) !== null && s !== void 0 && s) : !1
        }
        query(t, e, a) {
            var o, n, s, r;
            let l = a ?? [];
            if (!t.intersects(this.rectangle)) return [];
            for (let d of this.points) !t.contains(d.position) && L(t.position, d.position) > d.particle.getRadius() && (!e || e(d.particle)) || l.push(d.particle);
            return this.divided && ((o = this.northEast) === null || o === void 0 || o.query(t, e, l), (n = this.northWest) === null || n === void 0 || n.query(t, e, l), (s = this.southEast) === null || s === void 0 || s.query(t, e, l), (r = this.southWest) === null || r === void 0 || r.query(t, e, l)), l
        }
        queryCircle(t, e, a) {
            return this.query(new B(t.x, t.y, e), a)
        }
        queryRectangle(t, e, a) {
            return this.query(new j(t.x, t.y, e.width, e.height), a)
        }
        subdivide() {
            let t = this.rectangle.position.x,
                e = this.rectangle.position.y,
                a = this.rectangle.size.width,
                o = this.rectangle.size.height,
                n = this.capacity;
            this.northEast = new ft(new j(t, e, a / 2, o / 2), n), this.northWest = new ft(new j(t + a / 2, e, a / 2, o / 2), n), this.southEast = new ft(new j(t, e + o / 2, a / 2, o / 2), n), this.southWest = new ft(new j(t + a / 2, e + o / 2, a / 2, o / 2), n), this.divided = !0
        }
    },
    qi = class {
        constructor(t, e) {
            this.container = e, this._engine = t, this.nextId = 0, this.array = [], this.zArray = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this.freqs = {
                links: new Map,
                triangles: new Map
            }, this.interactionManager = new Bi(this._engine, e);
            let a = this.container.canvas.size;
            this.quadTree = new ft(new j(-a.width / 4, -a.height / 4, 3 * a.width / 2, 3 * a.height / 2), 4), this.movers = this._engine.plugins.getMovers(e, !0), this.updaters = this._engine.plugins.getUpdaters(e, !0)
        }
        get count() {
            return this.array.length
        }
        addManualParticles() {
            let t = this.container,
                e = t.actualOptions;
            for (let a of e.manualParticles) this.addParticle(ur({
                size: t.canvas.size,
                position: a.position
            }), a.options)
        }
        addParticle(t, e, a, o) {
            let n = this.container,
                s = n.actualOptions,
                r = s.particles.number.limit;
            if (r > 0) {
                let l = this.count + 1 - r;
                l > 0 && this.removeQuantity(l)
            }
            return this._pushParticle(t, e, a, o)
        }
        clear() {
            this.array = [], this.zArray = []
        }
        destroy() {
            this.array = [], this.zArray = [], this.movers = [], this.updaters = []
        }
        async draw(t) {
            let e = this.container,
                a = this.container.canvas.size;
            this.quadTree = new ft(new j(-a.width / 4, -a.height / 4, 3 * a.width / 2, 3 * a.height / 2), 4), e.canvas.clear(), await this.update(t), this.needsSort && (this.zArray.sort((o, n) => n.position.z - o.position.z || o.id - n.id), this.lastZIndex = this.zArray[this.zArray.length - 1].position.z, this.needsSort = !1);
            for (let [, o] of e.plugins) e.canvas.drawPlugin(o, t);
            for (let o of this.zArray) o.draw(t)
        }
        getLinkFrequency(t, e) {
            let a = k(t.id, e.id),
                o = `${Dt(a)}_${at(a)}`,
                n = this.freqs.links.get(o);
            return n === void 0 && (n = C(), this.freqs.links.set(o, n)), n
        }
        getTriangleFrequency(t, e, a) {
            let [o, n, s] = [t.id, e.id, a.id];
            o > n && ([n, o] = [o, n]), n > s && ([s, n] = [n, s]), o > s && ([s, o] = [o, s]);
            let r = `${o}_${n}_${s}`,
                l = this.freqs.triangles.get(r);
            return l === void 0 && (l = C(), this.freqs.triangles.set(r, l)), l
        }
        handleClickMode(t) {
            this.interactionManager.handleClickMode(t)
        }
        init() {
            var t;
            let e = this.container,
                a = e.actualOptions;
            this.lastZIndex = 0, this.needsSort = !1, this.freqs.links = new Map, this.freqs.triangles = new Map;
            let o = !1;
            this.updaters = this._engine.plugins.getUpdaters(e, !0), this.interactionManager.init();
            for (let [, n] of e.plugins)
                if (n.particlesInitialization !== void 0 && (o = n.particlesInitialization()), o) break;
            this.interactionManager.init();
            for (let [, n] of e.pathGenerators) n.init(e);
            if (this.addManualParticles(), !o) {
                for (let n in a.particles.groups) {
                    let s = a.particles.groups[n];
                    for (let r = this.count, l = 0; l < ((t = s.number) === null || t === void 0 ? void 0 : t.value) && r < a.particles.number.value; r++, l++) this.addParticle(void 0, s, n)
                }
                for (let n = this.count; n < a.particles.number.value; n++) this.addParticle()
            }
        }
        push(t, e, a, o) {
            this.pushing = !0;
            for (let n = 0; n < t; n++) this.addParticle(e?.position, a, o);
            this.pushing = !1
        }
        async redraw() {
            this.clear(), this.init(), await this.draw({
                value: 0,
                factor: 0
            })
        }
        remove(t, e, a) {
            this.removeAt(this.array.indexOf(t), void 0, e, a)
        }
        removeAt(t, e = 1, a, o) {
            if (!(t >= 0 && t <= this.count)) return;
            let n = 0;
            for (let s = t; n < e && s < this.count; s++) {
                let r = this.array[s];
                if (!r || r.group !== a) continue;
                r.destroy(o), this.array.splice(s--, 1);
                let l = this.zArray.indexOf(r);
                this.zArray.splice(l, 1), n++, this._engine.dispatchEvent("particleRemoved", {
                    container: this.container,
                    data: {
                        particle: r
                    }
                })
            }
        }
        removeQuantity(t, e) {
            this.removeAt(0, t, e)
        }
        setDensity() {
            let t = this.container.actualOptions;
            for (let e in t.particles.groups) this._applyDensity(t.particles.groups[e], 0, e);
            this._applyDensity(t.particles, t.manualParticles.length)
        }
        async update(t) {
            var e, a;
            let o = this.container,
                n = [];
            for (let [, s] of o.pathGenerators) s.update();
            for (let [, s] of o.plugins)(e = s.update) === null || e === void 0 || e.call(s, t);
            for (let s of this.array) {
                let r = o.canvas.resizeFactor;
                r && !s.ignoresResizeRatio && (s.position.x *= r.width, s.position.y *= r.height), s.ignoresResizeRatio = !1, await this.interactionManager.reset(s);
                for (let [, l] of this.container.plugins) {
                    if (s.destroyed) break;
                    (a = l.particleUpdate) === null || a === void 0 || a.call(l, s, t)
                }
                for (let l of this.movers) l.isEnabled(s) && l.move(s, t);
                s.destroyed ? n.push(s) : this.quadTree.insert(new Wi(s.getPosition(), s))
            }
            for (let s of n) this.remove(s);
            await this.interactionManager.externalInteract(t);
            for (let s of o.particles.array) {
                for (let r of this.updaters) r.update(s, t);
                s.destroyed || s.spawning || await this.interactionManager.particlesInteract(s, t)
            }
            delete o.canvas.resizeFactor
        }
        _applyDensity(t, e, a) {
            var o;
            if (!(!((o = t.number.density) === null || o === void 0) && o.enable)) return;
            let n = t.number,
                s = this._initDensityFactor(n.density),
                r = n.value,
                l = n.limit > 0 ? n.limit : r,
                d = Math.min(r, l) * s + e,
                h = Math.min(this.count, this.array.filter(p => p.group === a).length);
            this.limit = n.limit * s, h < d ? this.push(Math.abs(d - h), void 0, t, a) : h > d && this.removeQuantity(h - d, a)
        }
        _initDensityFactor(t) {
            let e = this.container;
            if (!e.canvas.element || !t.enable) return 1;
            let a = e.canvas.element,
                o = e.retina.pixelRatio;
            return a.width * a.height / (t.factor * o ** 2 * t.area)
        }
        _pushParticle(t, e, a, o) {
            try {
                let n = new ji(this._engine, this.nextId, this.container, t, e, a),
                    s = !0;
                return o && (s = o(n)), s ? (this.array.push(n), this.zArray.push(n), this.nextId++, this._engine.dispatchEvent("particleAdded", {
                    container: this.container,
                    data: {
                        particle: n
                    }
                }), n) : void 0
            } catch (n) {
                console.warn(`error adding particle: ${n}`);
                return
            }
        }
    },
    Yi = class {
        constructor(t) {
            this.container = t
        }
        init() {
            let t = this.container,
                e = t.actualOptions;
            this.pixelRatio = !e.detectRetina || Gt() ? 1 : c.devicePixelRatio;
            let a = this.container.actualOptions.motion;
            if (a && (a.disable || a.reduce.value))
                if (Gt() || typeof matchMedia > "u" || !matchMedia) this.reduceFactor = 1;
                else {
                    let s = matchMedia("(prefers-reduced-motion: reduce)");
                    if (s) {
                        this._handleMotionChange(s);
                        let r = () => {
                            this._handleMotionChange(s), t.refresh().catch(() => {})
                        };
                        s.addEventListener !== void 0 ? s.addEventListener("change", r) : s.addListener !== void 0 && s.addListener(r)
                    }
                }
            else this.reduceFactor = 1;
            let o = this.pixelRatio;
            if (t.canvas.element) {
                let s = t.canvas.element;
                t.canvas.size.width = s.offsetWidth * o, t.canvas.size.height = s.offsetHeight * o
            }
            let n = e.particles;
            this.attractDistance = P(n.move.attract.distance) * o, this.sizeAnimationSpeed = P(n.size.animation.speed) * o, this.maxSpeed = P(n.move.gravity.maxSpeed) * o
        }
        initParticle(t) {
            let e = t.options,
                a = this.pixelRatio,
                o = e.move.distance,
                n = t.retina;
            n.attractDistance = P(e.move.attract.distance) * a, n.moveDrift = P(e.move.drift) * a, n.moveSpeed = P(e.move.speed) * a, n.sizeAnimationSpeed = P(e.size.animation.speed) * a;
            let s = n.maxDistance;
            s.horizontal = o.horizontal !== void 0 ? o.horizontal * a : void 0, s.vertical = o.vertical !== void 0 ? o.vertical * a : void 0, n.maxSpeed = P(e.move.gravity.maxSpeed) * a
        }
        _handleMotionChange(t) {
            let e = this.container.actualOptions;
            if (t.matches) {
                let a = e.motion;
                this.reduceFactor = a.disable ? 0 : a.reduce.value ? 1 / a.reduce.factor : 1
            } else this.reduceFactor = 1
        }
    };

function N(i) {
    return i && !i.destroyed
}

function te(i, t, ...e) {
    let a = new Hi(i, t);
    return xn(a, ...e), a
}
var Fr = "default",
    cn = {
        generate: i => {
            let t = i.velocity.copy();
            return t.angle += t.length * Math.PI / 180, t
        },
        init: () => {},
        update: () => {}
    },
    Qi = class {
        constructor(t, e, a) {
            this.id = e, this._engine = t, this.fpsLimit = 120, this.smooth = !1, this.duration = 0, this.lifeTime = 0, this._firstStart = !0, this.started = !1, this.destroyed = !1, this._paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = a, this._initialSourceOptions = a, this.retina = new Yi(this), this.canvas = new ti(this), this.particles = new qi(this._engine, this), this.frameManager = new ii(this), this.pathGenerators = new Map, this.interactivity = {
                mouse: {
                    clicking: !1,
                    inside: !1
                }
            }, this.plugins = new Map, this.drawers = new Map, this._options = te(this._engine, this), this.actualOptions = te(this._engine, this), this._eventListeners = new ei(this), typeof IntersectionObserver < "u" && IntersectionObserver && (this._intersectionObserver = new IntersectionObserver(o => this._intersectionManager(o))), this._engine.dispatchEvent("containerBuilt", {
                container: this
            })
        }
        get options() {
            return this._options
        }
        get sourceOptions() {
            return this._sourceOptions
        }
        addClickHandler(t) {
            if (!N(this)) return;
            let e = this.interactivity.element;
            if (!e) return;
            let a = (p, u, f) => {
                    if (!N(this)) return;
                    let m = this.retina.pixelRatio,
                        g = {
                            x: u.x * m,
                            y: u.y * m
                        },
                        y = this.particles.quadTree.queryCircle(g, f * m);
                    t(p, y)
                },
                o = p => {
                    if (!N(this)) return;
                    let u = p,
                        f = {
                            x: u.offsetX || u.clientX,
                            y: u.offsetY || u.clientY
                        };
                    a(p, f, 1)
                },
                n = () => {
                    N(this) && (d = !0, h = !1)
                },
                s = () => {
                    N(this) && (h = !0)
                },
                r = p => {
                    var u, f, m;
                    if (N(this)) {
                        if (d && !h) {
                            let g = p,
                                y = g.touches[g.touches.length - 1];
                            if (!y && (y = g.changedTouches[g.changedTouches.length - 1], !y)) return;
                            let w = (u = this.canvas.element) === null || u === void 0 ? void 0 : u.getBoundingClientRect(),
                                x = {
                                    x: y.clientX - ((f = w?.left) !== null && f !== void 0 ? f : 0),
                                    y: y.clientY - ((m = w?.top) !== null && m !== void 0 ? m : 0)
                                };
                            a(p, x, Math.max(y.radiusX, y.radiusY))
                        }
                        d = !1, h = !1
                    }
                },
                l = () => {
                    N(this) && (d = !1, h = !1)
                },
                d = !1,
                h = !1;
            e.addEventListener("click", o), e.addEventListener("touchstart", n), e.addEventListener("touchmove", s), e.addEventListener("touchend", r), e.addEventListener("touchcancel", l)
        }
        addPath(t, e, a = !1) {
            return !N(this) || !a && this.pathGenerators.has(t) ? !1 : (this.pathGenerators.set(t, e ?? cn), !0)
        }
        destroy() {
            if (!N(this)) return;
            this.stop(), this.particles.destroy(), this.canvas.destroy();
            for (let [, a] of this.drawers) a.destroy && a.destroy(this);
            for (let a of this.drawers.keys()) this.drawers.delete(a);
            this._engine.plugins.destroy(this), this.destroyed = !0;
            let t = this._engine.dom(),
                e = t.findIndex(a => a === this);
            e >= 0 && t.splice(e, 1), this._engine.dispatchEvent("containerDestroyed", {
                container: this
            })
        }
        draw(t) {
            if (!N(this)) return;
            let e = t;
            this._drawAnimationFrame = mr()(async a => {
                e && (this.lastFrameTime = void 0, e = !1), await this.frameManager.nextFrame(a)
            })
        }
        exportConfiguration() {
            return JSON.stringify(this.actualOptions, void 0, 2)
        }
        exportImage(t, e, a) {
            var o;
            return (o = this.canvas.element) === null || o === void 0 ? void 0 : o.toBlob(t, e ?? "image/png", a)
        }
        exportImg(t) {
            this.exportImage(t)
        }
        getAnimationStatus() {
            return !this._paused && !this.pageHidden && N(this)
        }
        handleClickMode(t) {
            if (N(this)) {
                this.particles.handleClickMode(t);
                for (let [, e] of this.plugins) e.handleClickMode && e.handleClickMode(t)
            }
        }
        async init() {
            if (!N(this)) return;
            let t = this._engine.plugins.getSupportedShapes();
            for (let a of t) {
                let o = this._engine.plugins.getShapeDrawer(a);
                o && this.drawers.set(a, o)
            }
            this._options = te(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = te(this._engine, this, this._options), this.retina.init(), this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this.duration = 1e3 * P(this.actualOptions.duration), this.lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120, this.smooth = this.actualOptions.smooth;
            let e = this._engine.plugins.getAvailablePlugins(this);
            for (let [a, o] of e) this.plugins.set(a, o);
            for (let [, a] of this.drawers) a.init && await a.init(this);
            for (let [, a] of this.plugins) a.init ? a.init(this.actualOptions) : a.initAsync !== void 0 && await a.initAsync(this.actualOptions);
            this._engine.dispatchEvent("containerInit", {
                container: this
            }), this.particles.init(), this.particles.setDensity();
            for (let [, a] of this.plugins) a.particlesSetup !== void 0 && a.particlesSetup();
            this._engine.dispatchEvent("particlesSetup", {
                container: this
            })
        }
        async loadTheme(t) {
            N(this) && (this._currentTheme = t, await this.refresh())
        }
        pause() {
            if (N(this) && (this._drawAnimationFrame !== void 0 && (vr()(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
                for (let [, t] of this.plugins) t.pause && t.pause();
                this.pageHidden || (this._paused = !0), this._engine.dispatchEvent("containerPaused", {
                    container: this
                })
            }
        }
        play(t) {
            if (!N(this)) return;
            let e = this._paused || t;
            if (!this._firstStart || this.actualOptions.autoPlay) {
                if (this._paused && (this._paused = !1), e)
                    for (let [, a] of this.plugins) a.play && a.play();
                this._engine.dispatchEvent("containerPlay", {
                    container: this
                }), this.draw(e || !1)
            } else this._firstStart = !1
        }
        async refresh() {
            if (N(this)) return this.stop(), this.start()
        }
        async reset() {
            if (N(this)) return this._options = te(this._engine, this), this.refresh()
        }
        setNoise(t, e, a) {
            N(this) && this.setPath(t, e, a)
        }
        setPath(t, e, a) {
            if (!t || !N(this)) return;
            let o = Object.assign({}, cn);
            if (typeof t == "function") o.generate = t, e && (o.init = e), a && (o.update = a);
            else {
                let n = o;
                o.generate = t.generate || n.generate, o.init = t.init || n.init, o.update = t.update || n.update
            }
            this.addPath(Fr, o, !0)
        }
        async start() {
            if (N(this) && !this.started) {
                await this.init(), this.started = !0, this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element);
                for (let [, t] of this.plugins) t.startAsync !== void 0 ? await t.startAsync() : t.start !== void 0 && t.start();
                this._engine.dispatchEvent("containerStarted", {
                    container: this
                }), this.play()
            }
        }
        stop() {
            var t;
            if (N(this) && this.started) {
                this._firstStart = !0, this.started = !1, this._eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.clear(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element);
                for (let [, e] of this.plugins)(t = e.stop) === null || t === void 0 || t.call(e);
                for (let e of this.plugins.keys()) this.plugins.delete(e);
                this._sourceOptions = this._options, this._engine.dispatchEvent("containerStopped", {
                    container: this
                })
            }
        }
        updateActualOptions() {
            this.actualOptions.responsive = [];
            let t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
            return this.actualOptions.setTheme(this._currentTheme), this.responsiveMaxWidth === t ? !1 : (this.responsiveMaxWidth = t, !0)
        }
        _intersectionManager(t) {
            if (N(this) && this.actualOptions.pauseOnOutsideViewport)
                for (let e of t) e.target === this.interactivity.element && (e.isIntersecting ? this.play : this.pause)()
        }
    };

function Dr(i) {
    console.error(`tsParticles - Error ${i} while retrieving config file`)
}
async function Ur(i, t) {
    let e = X(i, t);
    if (!e) return;
    let a = await fetch(e);
    if (a.ok) return a.json();
    Dr(a.status)
}
var Ji = class {
        constructor(t) {
            this._engine = t
        }
        load(t, e, a) {
            let o = {
                index: a,
                remote: !1
            };
            return typeof t == "string" ? o.tagId = t : o.options = t, typeof e == "number" ? o.index = e : o.options = e ?? o.options, this.loadOptions(o)
        }
        async loadJSON(t, e, a) {
            let o, n;
            return typeof e == "number" || e === void 0 ? o = t : (n = t, o = e), this.loadRemoteOptions({
                tagId: n,
                url: o,
                index: a,
                remote: !0
            })
        }
        async loadOptions(t) {
            var e, a, o;
            let n = (e = t.tagId) !== null && e !== void 0 ? e : `tsparticles${Math.floor(1e4*C())}`,
                {
                    index: s,
                    url: r,
                    remote: l
                } = t,
                d = l ? await Ur(r, s) : t.options,
                h = (a = t.element) !== null && a !== void 0 ? a : document.getElementById(n);
            h || (h = document.createElement("div"), h.id = n, (o = document.querySelector("body")) === null || o === void 0 || o.append(h));
            let p = X(d, s),
                u = this._engine.dom(),
                f = u.findIndex(y => y.id === n);
            if (f >= 0) {
                let y = this._engine.domItem(f);
                y && !y.destroyed && (y.destroy(), u.splice(f, 1))
            }
            let m;
            if (h.tagName.toLowerCase() === "canvas") m = h, m.dataset[ee] = "false";
            else {
                let y = h.getElementsByTagName("canvas");
                y.length ? (m = y[0], m.dataset[ee] = "false") : (m = document.createElement("canvas"), m.dataset[ee] = "true", h.appendChild(m))
            }
            m.style.width || (m.style.width = "100%"), m.style.height || (m.style.height = "100%");
            let g = new Qi(this._engine, n, p);
            return f >= 0 ? u.splice(f, 0, g) : u.push(g), g.canvas.loadCanvas(m), await g.start(), g
        }
        async loadRemoteOptions(t) {
            return this.loadOptions(t)
        }
        async set(t, e, a, o) {
            let n = {
                index: o,
                remote: !1
            };
            return typeof t == "string" ? n.tagId = t : n.element = t, e instanceof HTMLElement ? n.element = e : n.options = e, typeof a == "number" ? n.index = a : n.options = a ?? n.options, this.loadOptions(n)
        }
        async setJSON(t, e, a, o) {
            let n, s, r, l;
            return t instanceof HTMLElement ? (l = t, n = e, r = a) : (s = t, l = e, n = a, r = o), this.loadRemoteOptions({
                tagId: s,
                url: n,
                index: r,
                element: l,
                remote: !0
            })
        }
    },
    Zi = class {
        constructor(t) {
            this._engine = t, this.plugins = [], this.interactorsInitializers = new Map, this.moversInitializers = new Map, this.updatersInitializers = new Map, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map
        }
        addInteractor(t, e) {
            this.interactorsInitializers.set(t, e)
        }
        addParticleMover(t, e) {
            this.moversInitializers.set(t, e)
        }
        addParticleUpdater(t, e) {
            this.updatersInitializers.set(t, e)
        }
        addPathGenerator(t, e) {
            this.getPathGenerator(t) || this.pathGenerators.set(t, e)
        }
        addPlugin(t) {
            this.getPlugin(t.id) || this.plugins.push(t)
        }
        addPreset(t, e, a = !1) {
            !a && this.getPreset(t) || this.presets.set(t, e)
        }
        addShapeDrawer(t, e) {
            this.getShapeDrawer(t) || this.drawers.set(t, e)
        }
        destroy(t) {
            this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t)
        }
        getAvailablePlugins(t) {
            let e = new Map;
            for (let a of this.plugins) a.needsPlugin(t.actualOptions) && e.set(a.id, a.getPlugin(t));
            return e
        }
        getInteractors(t, e = !1) {
            let a = this.interactors.get(t);
            return (!a || e) && (a = [...this.interactorsInitializers.values()].map(o => o(t)), this.interactors.set(t, a)), a
        }
        getMovers(t, e = !1) {
            let a = this.movers.get(t);
            return (!a || e) && (a = [...this.moversInitializers.values()].map(o => o(t)), this.movers.set(t, a)), a
        }
        getPathGenerator(t) {
            return this.pathGenerators.get(t)
        }
        getPlugin(t) {
            return this.plugins.find(e => e.id === t)
        }
        getPreset(t) {
            return this.presets.get(t)
        }
        getShapeDrawer(t) {
            return this.drawers.get(t)
        }
        getSupportedShapes() {
            return this.drawers.keys()
        }
        getUpdaters(t, e = !1) {
            let a = this.updaters.get(t);
            return (!a || e) && (a = [...this.updatersInitializers.values()].map(o => o(t)), this.updaters.set(t, a)), a
        }
        loadOptions(t, e) {
            for (let a of this.plugins) a.loadOptions(t, e)
        }
        loadParticlesOptions(t, e, ...a) {
            let o = this.updaters.get(t);
            if (o)
                for (let n of o) n.loadOptions && n.loadOptions(e, ...a)
        }
    },
    Xi = class {
        constructor() {
            this._domArray = [], this._eventDispatcher = new $e, this._initialized = !1, this._loader = new Ji(this), this.plugins = new Zi(this)
        }
        addEventListener(t, e) {
            this._eventDispatcher.addEventListener(t, e)
        }
        async addInteractor(t, e) {
            this.plugins.addInteractor(t, e), await this.refresh()
        }
        async addMover(t, e) {
            this.plugins.addParticleMover(t, e), await this.refresh()
        }
        async addParticleUpdater(t, e) {
            this.plugins.addParticleUpdater(t, e), await this.refresh()
        }
        async addPathGenerator(t, e) {
            this.plugins.addPathGenerator(t, e), await this.refresh()
        }
        async addPlugin(t) {
            this.plugins.addPlugin(t), await this.refresh()
        }
        async addPreset(t, e, a = !1) {
            this.plugins.addPreset(t, e, a), await this.refresh()
        }
        async addShape(t, e, a, o, n) {
            let s;
            s = typeof e == "function" ? {
                afterEffect: o,
                destroy: n,
                draw: e,
                init: a
            } : e, this.plugins.addShapeDrawer(t, s), await this.refresh()
        }
        dispatchEvent(t, e) {
            this._eventDispatcher.dispatchEvent(t, e)
        }
        dom() {
            return this._domArray
        }
        domItem(t) {
            let e = this.dom(),
                a = e[t];
            if (a && !a.destroyed) return a;
            e.splice(t, 1)
        }
        init() {
            this._initialized || (this._initialized = !0)
        }
        async load(t, e) {
            return this._loader.load(t, e)
        }
        async loadFromArray(t, e, a) {
            return this._loader.load(t, e, a)
        }
        async loadJSON(t, e, a) {
            return this._loader.loadJSON(t, e, a)
        }
        async refresh() {
            for (let t of this.dom()) await t.refresh()
        }
        removeEventListener(t, e) {
            this._eventDispatcher.removeEventListener(t, e)
        }
        async set(t, e, a) {
            return this._loader.set(t, e, a)
        }
        async setJSON(t, e, a, o) {
            return this._loader.setJSON(t, e, a, o)
        }
        setOnClickHandler(t) {
            let e = this.dom();
            if (!e.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
            for (let a of e) a.addClickHandler(t)
        }
    },
    Ki = class {
        constructor() {
            this.stringPrefix = "hsl"
        }
        handleColor(t) {
            var e;
            let a = t.value,
                o = (e = a.hsl) !== null && e !== void 0 ? e : t.value;
            if (o.h !== void 0 && o.l !== void 0) return Yt(o)
        }
        handleRangeColor(t) {
            var e;
            let a = t.value,
                o = (e = a.hsl) !== null && e !== void 0 ? e : t.value;
            if (o.h !== void 0 && o.l !== void 0) return Yt({
                h: P(o.h),
                l: P(o.l),
                s: P(o.s)
            })
        }
        parseString(t) {
            if (!t.startsWith("hsl")) return;
            let e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
                a = e.exec(t);
            return a ? Sr({
                a: a.length > 4 ? dn(a[5]) : 1,
                h: parseInt(a[1], 10),
                l: parseInt(a[3], 10),
                s: parseInt(a[2], 10)
            }) : void 0
        }
    },
    $i = class {
        constructor() {
            this.stringPrefix = "rgb"
        }
        handleColor(t) {
            var e;
            let a = t.value,
                o = (e = a.rgb) !== null && e !== void 0 ? e : t.value;
            if (o.r !== void 0) return o
        }
        handleRangeColor(t) {
            var e;
            let a = t.value,
                o = (e = a.rgb) !== null && e !== void 0 ? e : t.value;
            if (o.r !== void 0) return {
                r: P(o.r),
                g: P(o.g),
                b: P(o.b)
            }
        }
        parseString(t) {
            if (!t.startsWith(this.stringPrefix)) return;
            let e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,
                a = e.exec(t);
            return a ? {
                a: a.length > 4 ? dn(a[5]) : 1,
                b: parseInt(a[3], 10),
                g: parseInt(a[2], 10),
                r: parseInt(a[1], 10)
            } : void 0
        }
    },
    U = class {
        constructor(t) {
            this.container = t, this.type = 0
        }
    },
    It = class {
        constructor(t) {
            this.container = t, this.type = 1
        }
    },
    Nr = new $i,
    Hr = new Ki;
mn("rgb", Nr);
mn("hsl", Hr);
var se = new Xi;
se.init();
var _n = {};
_n = function i(t, e) {
    if (t === e) return !0;
    if (t && e && typeof t == "object" && typeof e == "object") {
        if (t.constructor !== e.constructor) return !1;
        var a, o, n;
        if (Array.isArray(t)) {
            if (a = t.length, a != e.length) return !1;
            for (o = a; o-- !== 0;)
                if (!i(t[o], e[o])) return !1;
            return !0
        }
        if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
        if (n = Object.keys(t), a = n.length, a !== Object.keys(e).length) return !1;
        for (o = a; o-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(e, n[o])) return !1;
        for (o = a; o-- !== 0;) {
            var s = n[o];
            if ((s !== "_owner" || !t.$$typeof) && !i(t[s], e[s])) return !1
        }
        return !0
    }
    return t !== t && e !== e
};
var Br = _n,
    Pn = Br;
var Cn = "tsparticles",
    Nt = class extends Jo {
        constructor(t) {
            super(t), this.state = {
                init: !1,
                library: void 0
            }
        }
        destroy() {
            this.state.library && (this.state.library.destroy(), this.setState({
                library: void 0
            }))
        }
        shouldComponentUpdate(t) {
            return !Pn(t, this.props)
        }
        componentDidUpdate() {
            this.refresh()
        }
        forceUpdate() {
            this.refresh().then(() => {
                super.forceUpdate()
            })
        }
        componentDidMount() {
            (async () => (this.props.init && await this.props.init(se), this.setState({
                init: !0
            }, async () => {
                await this.loadParticles()
            })))()
        }
        componentWillUnmount() {
            this.destroy()
        }
        render() {
            let {
                width: t,
                height: e,
                className: a,
                canvasClassName: o,
                id: n
            } = this.props;
            return Be.createElement("div", {
                className: a,
                id: n
            }, Be.createElement("canvas", {
                className: o,
                style: Object.assign(Object.assign({}, this.props.style), {
                    width: t,
                    height: e
                })
            }))
        }
        async refresh() {
            this.destroy(), await this.loadParticles()
        }
        async loadParticles() {
            var t, e, a;
            if (!this.state.init) return;
            let o = async r => {
                this.props.container && (this.props.container.current = r), this.setState({
                    library: r
                }), this.props.loaded && await this.props.loaded(r)
            }, n = (e = (t = this.props.id) !== null && t !== void 0 ? t : Nt.defaultProps.id) !== null && e !== void 0 ? e : Cn, s = this.props.url ? await se.loadJSON(n, this.props.url) : await se.load(n, (a = this.props.params) !== null && a !== void 0 ? a : this.props.options);
            await o(s)
        }
    };
Nt.defaultProps = {
    width: "100%",
    height: "100%",
    options: {},
    style: {},
    url: void 0,
    id: Cn
};
var aa = class {
        constructor() {
            this.radius = 0, this.mass = 0
        }
        load(t) {
            t && (t.mass !== void 0 && (this.mass = t.mass), t.radius !== void 0 && (this.radius = t.radius))
        }
    },
    oa = class extends tt {
        constructor() {
            super(), this.density = 5, this.value = 50, this.limit = new aa
        }
        load(t) {
            t && (super.load(t), t.density !== void 0 && (this.density = t.density), typeof t.limit == "number" ? this.limit.radius = t.limit : this.limit.load(t.limit))
        }
    },
    Lt = class {
        constructor() {
            this.color = new z, this.color.value = "#000000", this.draggable = !1, this.opacity = 1, this.destroy = !0, this.orbits = !1, this.size = new oa
        }
        load(t) {
            t !== void 0 && (t.color !== void 0 && (this.color = z.create(this.color, t.color)), t.draggable !== void 0 && (this.draggable = t.draggable), this.name = t.name, t.opacity !== void 0 && (this.opacity = t.opacity), t.position !== void 0 && (this.position = {}, t.position.x !== void 0 && (this.position.x = k(t.position.x)), t.position.y !== void 0 && (this.position.y = k(t.position.y))), t.size !== void 0 && this.size.load(t.size), t.destroy !== void 0 && (this.destroy = t.destroy), t.orbits !== void 0 && (this.orbits = t.orbits))
        }
    },
    na = class {
        constructor(t, e, a, o) {
            var n, s, r;
            this.absorbers = t, this.container = e, this.initialPosition = o ? I.create(o.x, o.y) : void 0, a instanceof Lt ? this.options = a : (this.options = new Lt, this.options.load(a)), this.dragging = !1, this.name = this.options.name, this.opacity = this.options.opacity, this.size = P(this.options.size.value) * e.retina.pixelRatio, this.mass = this.size * this.options.size.density * e.retina.reduceFactor;
            let l = this.options.size.limit;
            this.limit = {
                radius: l.radius * e.retina.pixelRatio * e.retina.reduceFactor,
                mass: l.mass
            }, this.color = (n = J(this.options.color)) !== null && n !== void 0 ? n : {
                b: 0,
                g: 0,
                r: 0
            }, this.position = (r = (s = this.initialPosition) === null || s === void 0 ? void 0 : s.copy()) !== null && r !== void 0 ? r : this.calcPosition()
        }
        attract(t) {
            let e = this.container,
                a = this.options;
            if (a.draggable) {
                let d = e.interactivity.mouse;
                d.clicking && d.downPosition ? L(this.position, d.downPosition) <= this.size && (this.dragging = !0) : this.dragging = !1, this.dragging && d.position && (this.position.x = d.position.x, this.position.y = d.position.y)
            }
            let o = t.getPosition(),
                {
                    dx: n,
                    dy: s,
                    distance: r
                } = F(this.position, o),
                l = I.create(n, s);
            if (l.length = this.mass / Math.pow(r, 2) * e.retina.reduceFactor, r < this.size + t.getRadius()) {
                let d = .033 * t.getRadius() * e.retina.pixelRatio;
                this.size > t.getRadius() && r < this.size - t.getRadius() || t.absorberOrbit !== void 0 && t.absorberOrbit.length < 0 ? a.destroy ? t.destroy() : (t.needsNewPosition = !0, this.updateParticlePosition(t, l)) : (a.destroy && (t.size.value -= d), this.updateParticlePosition(t, l)), (this.limit.radius <= 0 || this.size < this.limit.radius) && (this.size += d), (this.limit.mass <= 0 || this.mass < this.limit.mass) && (this.mass += d * this.options.size.density * e.retina.reduceFactor)
            } else this.updateParticlePosition(t, l)
        }
        draw(t) {
            t.translate(this.position.x, this.position.y), t.beginPath(), t.arc(0, 0, this.size, 0, 2 * Math.PI, !1), t.closePath(), t.fillStyle = Z(this.color, this.opacity), t.fill()
        }
        resize() {
            let t = this.initialPosition;
            this.position = t && zt(t, this.container.canvas.size, I.origin) ? t : this.calcPosition()
        }
        calcPosition() {
            let t = Pe({
                size: this.container.canvas.size,
                position: this.options.position
            });
            return I.create(t.x, t.y)
        }
        updateParticlePosition(t, e) {
            var a;
            if (t.destroyed) return;
            let o = this.container,
                n = o.canvas.size;
            if (t.needsNewPosition) {
                let s = ta({
                    size: n
                });
                t.position.setTo(s), t.velocity.setTo(t.initialVelocity), t.absorberOrbit = void 0, t.needsNewPosition = !1
            }
            if (this.options.orbits) {
                if (t.absorberOrbit === void 0 && (t.absorberOrbit = I.create(0, 0), t.absorberOrbit.length = L(t.getPosition(), this.position), t.absorberOrbit.angle = C() * Math.PI * 2), t.absorberOrbit.length <= this.size && !this.options.destroy) {
                    let h = Math.min(n.width, n.height);
                    t.absorberOrbit.length = h * (.2 * C() - .1 + 1)
                }
                t.absorberOrbitDirection === void 0 && (t.absorberOrbitDirection = t.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
                let s = t.absorberOrbit.length,
                    r = t.absorberOrbit.angle,
                    l = t.absorberOrbitDirection;
                t.velocity.setTo(I.origin);
                let d = {
                    x: l === "clockwise" ? Math.cos : Math.sin,
                    y: l === "clockwise" ? Math.sin : Math.cos
                };
                t.position.x = this.position.x + s * d.x(r), t.position.y = this.position.y + s * d.y(r), t.absorberOrbit.length -= e.length, t.absorberOrbit.angle += ((a = t.retina.moveSpeed) !== null && a !== void 0 ? a : 0) * o.retina.pixelRatio / 100 * o.retina.reduceFactor
            } else {
                let s = I.origin;
                s.length = e.length, s.angle = e.angle, t.velocity.addTo(s)
            }
        }
    },
    sa = class {
        constructor(t) {
            this.container = t, this.array = [], this.absorbers = [], this.interactivityAbsorbers = [], t.getAbsorber = e => e === void 0 || typeof e == "number" ? this.array[e || 0] : this.array.find(a => a.name === e), t.addAbsorber = (e, a) => this.addAbsorber(e, a)
        }
        addAbsorber(t, e) {
            let a = new na(this, this.container, t, e);
            return this.array.push(a), a
        }
        draw(t) {
            for (let e of this.array) t.save(), e.draw(t), t.restore()
        }
        handleClickMode(t) {
            let e = this.absorbers,
                a = this.interactivityAbsorbers;
            if (t === "absorber") {
                let o = X(a),
                    n = o ?? X(e),
                    s = this.container.interactivity.mouse.clickPosition;
                this.addAbsorber(n, s)
            }
        }
        init(t) {
            var e, a;
            t && (this.absorbers = M(t.absorbers, o => {
                let n = new Lt;
                return n.load(o), n
            }), this.interactivityAbsorbers = M((a = (e = t.interactivity) === null || e === void 0 ? void 0 : e.modes) === null || a === void 0 ? void 0 : a.absorbers, o => {
                let n = new Lt;
                return n.load(o), n
            }), M(this.absorbers, o => {
                this.addAbsorber(o)
            }))
        }
        particleUpdate(t) {
            for (let e of this.array)
                if (e.attract(t), t.destroyed) break
        }
        removeAbsorber(t) {
            let e = this.array.indexOf(t);
            e >= 0 && this.array.splice(e, 1)
        }
        resize() {
            for (let t of this.array) t.resize()
        }
        stop() {
            this.array = []
        }
    },
    ra = class {
        constructor() {
            this.id = "absorbers"
        }
        getPlugin(t) {
            return new sa(t)
        }
        loadOptions(t, e) {
            var a, o;
            if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
            let n = t;
            n.absorbers = M(e?.absorbers, s => {
                let r = new Lt;
                return r.load(s), r
            }), n.interactivity.modes.absorbers = M((o = (a = e?.interactivity) === null || a === void 0 ? void 0 : a.modes) === null || o === void 0 ? void 0 : o.absorbers, s => {
                let r = new Lt;
                return r.load(s), r
            })
        }
        needsPlugin(t) {
            var e, a, o;
            if (!t) return !1;
            let n = t.absorbers;
            return n instanceof Array ? !!n.length : !!n || !(!(!((o = (a = (e = t.interactivity) === null || e === void 0 ? void 0 : e.events) === null || a === void 0 ? void 0 : a.onClick) === null || o === void 0) && o.mode) || !G("absorber", t.interactivity.events.onClick.mode))
        }
    };
async function kn(i) {
    let t = new ra;
    await i.addPlugin(t)
}
var ca = class {
        randomPosition(t, e, a) {
            let o = (p, u) => {
                    let f = C() / 4,
                        m = Math.atan(u / p * Math.tan(2 * Math.PI * f)),
                        g = C();
                    return g < .25 ? m : g < .5 ? Math.PI - m : g < .75 ? Math.PI + m : -m
                },
                n = (p, u, f) => p * u / Math.sqrt((u * Math.cos(f)) ** 2 + (p * Math.sin(f)) ** 2),
                [s, r] = [e.width / 2, e.height / 2],
                l = o(s, r),
                d = n(s, r, l),
                h = a ? d * Math.sqrt(C()) : d;
            return {
                x: t.x + h * Math.cos(l),
                y: t.y + h * Math.sin(l)
            }
        }
    },
    da = class {
        constructor() {
            this.wait = !1
        }
        load(t) {
            t !== void 0 && (t.count !== void 0 && (this.count = t.count), t.delay !== void 0 && (this.delay = t.delay), t.duration !== void 0 && (this.duration = t.duration), t.wait !== void 0 && (this.wait = t.wait))
        }
    },
    ha = class {
        constructor() {
            this.quantity = 1, this.delay = .1
        }
        load(t) {
            t !== void 0 && (t.quantity !== void 0 && (this.quantity = k(t.quantity)), t.delay !== void 0 && (this.delay = k(t.delay)))
        }
    },
    Re = class {
        constructor() {
            this.mode = "percent", this.height = 0, this.width = 0
        }
        load(t) {
            t !== void 0 && (t.mode !== void 0 && (this.mode = t.mode), t.height !== void 0 && (this.height = t.height), t.width !== void 0 && (this.width = t.width))
        }
    },
    et = class {
        constructor() {
            this.autoPlay = !0, this.fill = !0, this.life = new da, this.rate = new ha, this.shape = "square", this.startCount = 0
        }
        load(t) {
            t !== void 0 && (t.autoPlay !== void 0 && (this.autoPlay = t.autoPlay), t.size !== void 0 && (this.size === void 0 && (this.size = new Re), this.size.load(t.size)), t.direction !== void 0 && (this.direction = t.direction), this.domId = t.domId, t.fill !== void 0 && (this.fill = t.fill), this.life.load(t.life), this.name = t.name, this.particles = M(t.particles, e => D({}, e)), this.rate.load(t.rate), t.shape !== void 0 && (this.shape = t.shape), t.position !== void 0 && (this.position = {}, t.position.x !== void 0 && (this.position.x = k(t.position.x)), t.position.y !== void 0 && (this.position.y = k(t.position.y))), t.spawnColor !== void 0 && (this.spawnColor === void 0 && (this.spawnColor = new vt), this.spawnColor.load(t.spawnColor)), t.startCount !== void 0 && (this.startCount = t.startCount))
        }
    },
    ua = class {
        constructor(t, e, a, o, n) {
            var s, r, l, d, h, p, u, f;
            this.emitters = e, this.container = a, this._engine = t, this._currentDuration = 0, this._currentEmitDelay = 0, this._currentSpawnDelay = 0, this._initialPosition = n, o instanceof et ? this.options = o : (this.options = new et, this.options.load(o)), this._spawnDelay = 1e3 * ((s = this.options.life.delay) !== null && s !== void 0 ? s : 0) / this.container.retina.reduceFactor, this.position = (r = this._initialPosition) !== null && r !== void 0 ? r : this.calcPosition(), this.name = this.options.name, this._shape = (l = this._engine.emitterShapeManager) === null || l === void 0 ? void 0 : l.getShape(this.options.shape), this.fill = this.options.fill, this._firstSpawn = !this.options.life.wait, this._startParticlesAdded = !1;
            let m = D({}, this.options.particles);
            m ?? (m = {}), (d = m.move) !== null && d !== void 0 || (m.move = {}), (h = (f = m.move).direction) !== null && h !== void 0 || (f.direction = this.options.direction), this.options.spawnColor && (this.spawnColor = it(this.options.spawnColor)), this._paused = !this.options.autoPlay, this._particlesOptions = m, this.size = (p = this.options.size) !== null && p !== void 0 ? p : (() => {
                let g = new Re;
                return g.load({
                    height: 0,
                    mode: "percent",
                    width: 0
                }), g
            })(), this._lifeCount = (u = this.options.life.count) !== null && u !== void 0 ? u : -1, this._immortal = this._lifeCount <= 0, this._engine.dispatchEvent("emitterCreated", {
                container: a,
                data: {
                    emitter: this
                }
            }), this.play()
        }
        externalPause() {
            this._paused = !0, this.pause()
        }
        externalPlay() {
            this._paused = !1, this.play()
        }
        getPosition() {
            if (this.options.domId) {
                let t = this.container,
                    e = document.getElementById(this.options.domId);
                if (e) {
                    let a = e.getBoundingClientRect();
                    return {
                        x: (a.x + a.width / 2) * t.retina.pixelRatio,
                        y: (a.y + a.height / 2) * t.retina.pixelRatio
                    }
                }
            }
            return this.position
        }
        getSize() {
            let t = this.container;
            if (this.options.domId) {
                let e = document.getElementById(this.options.domId);
                if (e) {
                    let a = e.getBoundingClientRect();
                    return {
                        width: a.width * t.retina.pixelRatio,
                        height: a.height * t.retina.pixelRatio
                    }
                }
            }
            return {
                width: this.size.mode === "percent" ? t.canvas.size.width * this.size.width / 100 : this.size.width,
                height: this.size.mode === "percent" ? t.canvas.size.height * this.size.height / 100 : this.size.height
            }
        }
        pause() {
            this._paused || delete this._emitDelay
        }
        play() {
            var t;
            if (!this._paused && this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal || !this.options.life.count) && (this._firstSpawn || this._currentSpawnDelay >= ((t = this._spawnDelay) !== null && t !== void 0 ? t : 0))) {
                if (this._emitDelay === void 0) {
                    let e = P(this.options.rate.delay);
                    this._emitDelay = 1e3 * e / this.container.retina.reduceFactor
                }(this._lifeCount > 0 || this._immortal) && this.prepareToDie()
            }
        }
        resize() {
            let t = this._initialPosition;
            this.position = t && zt(t, this.container.canvas.size, I.origin) ? t : this.calcPosition()
        }
        update(t) {
            var e, a, o;
            this._paused || (this._firstSpawn && (this._firstSpawn = !1, this._currentSpawnDelay = (e = this._spawnDelay) !== null && e !== void 0 ? e : 0, this._currentEmitDelay = (a = this._emitDelay) !== null && a !== void 0 ? a : 0), this._startParticlesAdded || (this._startParticlesAdded = !0, this.emitParticles(this.options.startCount)), this._duration !== void 0 && (this._currentDuration += t.value, this._currentDuration >= this._duration && (this.pause(), this._spawnDelay !== void 0 && delete this._spawnDelay, this._immortal || this._lifeCount--, this._lifeCount > 0 || this._immortal ? (this.position = this.calcPosition(), this._spawnDelay = 1e3 * ((o = this.options.life.delay) !== null && o !== void 0 ? o : 0) / this.container.retina.reduceFactor) : this.destroy(), this._currentDuration -= this._duration, delete this._duration)), this._spawnDelay !== void 0 && (this._currentSpawnDelay += t.value, this._currentSpawnDelay >= this._spawnDelay && (this._engine.dispatchEvent("emitterPlay", {
                container: this.container
            }), this.play(), this._currentSpawnDelay -= this._currentSpawnDelay, delete this._spawnDelay)), this._emitDelay !== void 0 && (this._currentEmitDelay += t.value, this._currentEmitDelay >= this._emitDelay && (this.emit(), this._currentEmitDelay -= this._emitDelay)))
        }
        calcPosition() {
            return Pe({
                size: this.container.canvas.size,
                position: this.options.position
            })
        }
        destroy() {
            this.emitters.removeEmitter(this), this._engine.dispatchEvent("emitterDestroyed", {
                container: this.container,
                data: {
                    emitter: this
                }
            })
        }
        emit() {
            if (this._paused) return;
            let t = P(this.options.rate.quantity);
            this.emitParticles(t)
        }
        emitParticles(t) {
            var e, a, o;
            let n = this.getPosition(),
                s = this.getSize(),
                r = X(this._particlesOptions);
            for (let l = 0; l < t; l++) {
                let d = D({}, r);
                if (this.spawnColor) {
                    let p = (e = this.options.spawnColor) === null || e === void 0 ? void 0 : e.animation;
                    p && (this.spawnColor.h = this.setColorAnimation(p.h, this.spawnColor.h, 360), this.spawnColor.s = this.setColorAnimation(p.s, this.spawnColor.s, 100), this.spawnColor.l = this.setColorAnimation(p.l, this.spawnColor.l, 100)), d.color ? d.color.value = this.spawnColor : d.color = {
                        value: this.spawnColor
                    }
                }
                if (!n) return;
                let h = (o = (a = this._shape) === null || a === void 0 ? void 0 : a.randomPosition(n, s, this.fill)) !== null && o !== void 0 ? o : n;
                this.container.particles.addParticle(h, d)
            }
        }
        prepareToDie() {
            var t;
            if (this._paused) return;
            let e = (t = this.options.life) === null || t === void 0 ? void 0 : t.duration;
            this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal) && e !== void 0 && e > 0 && (this._duration = 1e3 * e)
        }
        setColorAnimation(t, e, a) {
            var o;
            let n = this.container;
            if (!t.enable) return e;
            let s = H(t.offset),
                r = P(this.options.rate.delay),
                l = 1e3 * r / n.retina.reduceFactor,
                d = P((o = t.speed) !== null && o !== void 0 ? o : 0);
            return (e + d * n.fpsLimit / l + 3.6 * s) % a
        }
    },
    pa = class {
        constructor(t, e) {
            this.container = e, this._engine = t, this.array = [], this.emitters = [], this.interactivityEmitters = {
                random: {
                    count: 1,
                    enable: !1
                },
                value: []
            }, e.getEmitter = a => a === void 0 || typeof a == "number" ? this.array[a || 0] : this.array.find(o => o.name === a), e.addEmitter = (a, o) => this.addEmitter(a, o), e.removeEmitter = a => {
                let o = e.getEmitter(a);
                o && this.removeEmitter(o)
            }, e.playEmitter = a => {
                let o = e.getEmitter(a);
                o && o.externalPlay()
            }, e.pauseEmitter = a => {
                let o = e.getEmitter(a);
                o && o.externalPause()
            }
        }
        addEmitter(t, e) {
            let a = new et;
            a.load(t);
            let o = new ua(this._engine, this, this.container, a, e);
            return this.array.push(o), o
        }
        handleClickMode(t) {
            let e = this.emitters,
                a = this.interactivityEmitters;
            if (t === "emitter") {
                let o;
                if (a && a.value instanceof Array)
                    if (a.value.length > 0 && a.random.enable) {
                        o = [];
                        let r = [];
                        for (let l = 0; l < a.random.count; l++) {
                            let d = ea(a.value);
                            r.includes(d) && r.length < a.value.length ? l-- : (r.push(d), o.push(ht(a.value, d)))
                        }
                    } else o = a.value;
                else o = a?.value;
                let n = o ?? e,
                    s = this.container.interactivity.mouse.clickPosition;
                M(n, r => {
                    this.addEmitter(r, s)
                })
            }
        }
        init(t) {
            var e, a, o, n, s, r, l, d;
            if (!t) return;
            this.emitters = M(t.emitters, p => {
                let u = new et;
                return u.load(p), u
            });
            let h = (a = (e = t.interactivity) === null || e === void 0 ? void 0 : e.modes) === null || a === void 0 ? void 0 : a.emitters;
            if (h)
                if (h instanceof Array) this.interactivityEmitters = {
                    random: {
                        count: 1,
                        enable: !0
                    },
                    value: h.map(p => {
                        let u = new et;
                        return u.load(p), u
                    })
                };
                else {
                    let p = h;
                    if (p.value !== void 0)
                        if (p.value instanceof Array) this.interactivityEmitters = {
                            random: {
                                count: (o = this.interactivityEmitters.random.count) !== null && o !== void 0 ? o : 1,
                                enable: (n = this.interactivityEmitters.random.enable) !== null && n !== void 0 && n
                            },
                            value: p.value.map(u => {
                                let f = new et;
                                return f.load(u), f
                            })
                        };
                        else {
                            let u = new et;
                            u.load(p.value), this.interactivityEmitters = {
                                random: {
                                    count: (s = this.interactivityEmitters.random.count) !== null && s !== void 0 ? s : 1,
                                    enable: (r = this.interactivityEmitters.random.enable) !== null && r !== void 0 && r
                                },
                                value: u
                            }
                        }
                    else {
                        let u = new et;
                        u.load(h), this.interactivityEmitters = {
                            random: {
                                count: (l = this.interactivityEmitters.random.count) !== null && l !== void 0 ? l : 1,
                                enable: (d = this.interactivityEmitters.random.enable) !== null && d !== void 0 && d
                            },
                            value: u
                        }
                    }
                } if (this.emitters instanceof Array)
                for (let p of this.emitters) this.addEmitter(p);
            else this.addEmitter(this.emitters)
        }
        pause() {
            for (let t of this.array) t.pause()
        }
        play() {
            for (let t of this.array) t.play()
        }
        removeEmitter(t) {
            let e = this.array.indexOf(t);
            e >= 0 && this.array.splice(e, 1)
        }
        resize() {
            for (let t of this.array) t.resize()
        }
        stop() {
            this.array = []
        }
        update(t) {
            for (let e of this.array) e.update(t)
        }
    },
    la = new Map,
    fa = class {
        constructor(t) {
            this._engine = t
        }
        addShape(t, e) {
            this.getShape(t) || la.set(t, e)
        }
        getShape(t) {
            return la.get(t)
        }
        getSupportedShapes() {
            return la.keys()
        }
    };

function Vn(i, t) {
    return i + t * (C() - .5)
}
var ma = class {
        randomPosition(t, e, a) {
            if (a) return {
                x: Vn(t.x, e.width),
                y: Vn(t.y, e.height)
            };
            {
                let o = e.width / 2,
                    n = e.height / 2,
                    s = Math.floor(4 * C()),
                    r = 2 * (C() - .5);
                switch (s) {
                    case 0:
                        return {
                            x: t.x + r * o, y: t.y - n
                        };
                    case 1:
                        return {
                            x: t.x - o, y: t.y + r * n
                        };
                    case 2:
                        return {
                            x: t.x + r * o, y: t.y + n
                        };
                    case 3:
                    default:
                        return {
                            x: t.x + o, y: t.y + r * n
                        }
                }
            }
        }
    },
    va = class {
        constructor(t) {
            this._engine = t, this.id = "emitters"
        }
        getPlugin(t) {
            return new pa(this._engine, t)
        }
        loadOptions(t, e) {
            var a, o, n, s, r, l;
            if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
            let d = t;
            d.emitters = M(e?.emitters, p => {
                let u = new et;
                return u.load(p), u
            });
            let h = (o = (a = e?.interactivity) === null || a === void 0 ? void 0 : a.modes) === null || o === void 0 ? void 0 : o.emitters;
            if (h)
                if (h instanceof Array) d.interactivity.modes.emitters = {
                    random: {
                        count: 1,
                        enable: !0
                    },
                    value: h.map(p => {
                        let u = new et;
                        return u.load(p), u
                    })
                };
                else {
                    let p = h;
                    if (p.value !== void 0)
                        if (p.value instanceof Array) d.interactivity.modes.emitters = {
                            random: {
                                count: (n = p.random.count) !== null && n !== void 0 ? n : 1,
                                enable: (s = p.random.enable) !== null && s !== void 0 && s
                            },
                            value: p.value.map(u => {
                                let f = new et;
                                return f.load(u), f
                            })
                        };
                        else {
                            let u = new et;
                            u.load(p.value), d.interactivity.modes.emitters = {
                                random: {
                                    count: (r = p.random.count) !== null && r !== void 0 ? r : 1,
                                    enable: (l = p.random.enable) !== null && l !== void 0 && l
                                },
                                value: u
                            }
                        }
                    else(d.interactivity.modes.emitters = {
                        random: {
                            count: 1,
                            enable: !1
                        },
                        value: new et
                    }).value.load(h)
                }
        }
        needsPlugin(t) {
            var e, a, o;
            if (!t) return !1;
            let n = t.emitters;
            return n instanceof Array && !!n.length || n !== void 0 || !!(!((o = (a = (e = t.interactivity) === null || e === void 0 ? void 0 : e.events) === null || a === void 0 ? void 0 : a.onClick) === null || o === void 0) && o.mode) && G("emitter", t.interactivity.events.onClick.mode)
        }
    };
async function On(i) {
    i.emitterShapeManager || (i.emitterShapeManager = new fa(i)), i.addEmitterShape || (i.addEmitterShape = (e, a) => {
        var o;
        (o = i.emitterShapeManager) === null || o === void 0 || o.addShape(e, a)
    });
    let t = new va(i);
    await i.addPlugin(t), i.addEmitterShape("circle", new ca), i.addEmitterShape("square", new ma)
}
var ga = class {
        constructor() {
            this.delay = 1, this.pauseOnStop = !1, this.quantity = 1
        }
        load(t) {
            t && (t.delay !== void 0 && (this.delay = t.delay), t.quantity !== void 0 && (this.quantity = t.quantity), t.particles !== void 0 && (this.particles = D({}, t.particles)), t.pauseOnStop !== void 0 && (this.pauseOnStop = t.pauseOnStop))
        }
    },
    ya = class extends U {
        constructor(t) {
            super(t), this._delay = 0
        }
        clear() {}
        init() {}
        async interact(t) {
            var e, a, o, n;
            if (!this.container.retina.reduceFactor) return;
            let s = this.container,
                r = s.actualOptions,
                l = r.interactivity.modes.trail;
            if (!l) return;
            let d = 1e3 * l.delay / this.container.retina.reduceFactor;
            if (this._delay < d && (this._delay += t.value), this._delay < d) return;
            let h = !0;
            l.pauseOnStop && (s.interactivity.mouse.position === this._lastPosition || ((e = s.interactivity.mouse.position) === null || e === void 0 ? void 0 : e.x) === ((a = this._lastPosition) === null || a === void 0 ? void 0 : a.x) && ((o = s.interactivity.mouse.position) === null || o === void 0 ? void 0 : o.y) === ((n = this._lastPosition) === null || n === void 0 ? void 0 : n.y)) && (h = !1), s.interactivity.mouse.position ? this._lastPosition = {
                x: s.interactivity.mouse.position.x,
                y: s.interactivity.mouse.position.y
            } : delete this._lastPosition, h && s.particles.push(l.quantity, s.interactivity.mouse, l.particles), this._delay -= d
        }
        isEnabled(t) {
            var e;
            let a = this.container,
                o = a.actualOptions,
                n = a.interactivity.mouse,
                s = ((e = t?.interactivity) !== null && e !== void 0 ? e : o.interactivity).events;
            return n.clicking && n.inside && !!n.position && G("trail", s.onClick.mode) || n.inside && !!n.position && G("trail", s.onHover.mode)
        }
        loadModeOptions(t, ...e) {
            t.trail || (t.trail = new ga);
            for (let a of e) t.trail.load(a?.trail)
        }
        reset() {}
    };
async function An(i) {
    await i.addInteractor("externalTrail", t => new ya(t))
}(function() {
    try {
        if (typeof c > "u") return;
        "SVGPathSeg" in c || (c.SVGPathSeg = function(i, t, e) {
            this.pathSegType = i, this.pathSegTypeAsLetter = t, this._owningPathSegList = e
        }, c.SVGPathSeg.prototype.classname = "SVGPathSeg", c.SVGPathSeg.PATHSEG_UNKNOWN = 0, c.SVGPathSeg.PATHSEG_CLOSEPATH = 1, c.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, c.SVGPathSeg.PATHSEG_MOVETO_REL = 3, c.SVGPathSeg.PATHSEG_LINETO_ABS = 4, c.SVGPathSeg.PATHSEG_LINETO_REL = 5, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, c.SVGPathSeg.PATHSEG_ARC_ABS = 10, c.SVGPathSeg.PATHSEG_ARC_REL = 11, c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, c.SVGPathSeg.prototype._segmentChanged = function() {
            this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
        }, c.SVGPathSegClosePath = function(i) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CLOSEPATH, "z", i)
        }, c.SVGPathSegClosePath.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegClosePath.prototype.toString = function() {
            return "[object SVGPathSegClosePath]"
        }, c.SVGPathSegClosePath.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter
        }, c.SVGPathSegClosePath.prototype.clone = function() {
            return new c.SVGPathSegClosePath(void 0)
        }, c.SVGPathSegMovetoAbs = function(i, t, e) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", i), this._x = t, this._y = e
        }, c.SVGPathSegMovetoAbs.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegMovetoAbs.prototype.toString = function() {
            return "[object SVGPathSegMovetoAbs]"
        }, c.SVGPathSegMovetoAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, c.SVGPathSegMovetoAbs.prototype.clone = function() {
            return new c.SVGPathSegMovetoAbs(void 0, this._x, this._y)
        }, Object.defineProperty(c.SVGPathSegMovetoAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegMovetoAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegMovetoRel = function(i, t, e) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_MOVETO_REL, "m", i), this._x = t, this._y = e
        }, c.SVGPathSegMovetoRel.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegMovetoRel.prototype.toString = function() {
            return "[object SVGPathSegMovetoRel]"
        }, c.SVGPathSegMovetoRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, c.SVGPathSegMovetoRel.prototype.clone = function() {
            return new c.SVGPathSegMovetoRel(void 0, this._x, this._y)
        }, Object.defineProperty(c.SVGPathSegMovetoRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegMovetoRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegLinetoAbs = function(i, t, e) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_ABS, "L", i), this._x = t, this._y = e
        }, c.SVGPathSegLinetoAbs.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegLinetoAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoAbs]"
        }, c.SVGPathSegLinetoAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, c.SVGPathSegLinetoAbs.prototype.clone = function() {
            return new c.SVGPathSegLinetoAbs(void 0, this._x, this._y)
        }, Object.defineProperty(c.SVGPathSegLinetoAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegLinetoAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegLinetoRel = function(i, t, e) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_REL, "l", i), this._x = t, this._y = e
        }, c.SVGPathSegLinetoRel.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegLinetoRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoRel]"
        }, c.SVGPathSegLinetoRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, c.SVGPathSegLinetoRel.prototype.clone = function() {
            return new c.SVGPathSegLinetoRel(void 0, this._x, this._y)
        }, Object.defineProperty(c.SVGPathSegLinetoRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegLinetoRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegCurvetoCubicAbs = function(i, t, e, a, o, n, s) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", i), this._x = t, this._y = e, this._x1 = a, this._y1 = o, this._x2 = n, this._y2 = s
        }, c.SVGPathSegCurvetoCubicAbs.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicAbs]"
        }, c.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        }, c.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
            return new c.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
        }, Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
            get: function() {
                return this._x1
            },
            set: function(i) {
                this._x1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
            get: function() {
                return this._y1
            },
            set: function(i) {
                this._y1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
            get: function() {
                return this._x2
            },
            set: function(i) {
                this._x2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
            get: function() {
                return this._y2
            },
            set: function(i) {
                this._y2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegCurvetoCubicRel = function(i, t, e, a, o, n, s) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", i), this._x = t, this._y = e, this._x1 = a, this._y1 = o, this._x2 = n, this._y2 = s
        }, c.SVGPathSegCurvetoCubicRel.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicRel]"
        }, c.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        }, c.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
            return new c.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
        }, Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, "x1", {
            get: function() {
                return this._x1
            },
            set: function(i) {
                this._x1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, "y1", {
            get: function() {
                return this._y1
            },
            set: function(i) {
                this._y1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, "x2", {
            get: function() {
                return this._x2
            },
            set: function(i) {
                this._x2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicRel.prototype, "y2", {
            get: function() {
                return this._y2
            },
            set: function(i) {
                this._y2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegCurvetoQuadraticAbs = function(i, t, e, a, o) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", i), this._x = t, this._y = e, this._x1 = a, this._y1 = o
        }, c.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticAbs]"
        }, c.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
        }, c.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
            return new c.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1)
        }, Object.defineProperty(c.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
            get: function() {
                return this._x1
            },
            set: function(i) {
                this._x1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
            get: function() {
                return this._y1
            },
            set: function(i) {
                this._y1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegCurvetoQuadraticRel = function(i, t, e, a, o) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", i), this._x = t, this._y = e, this._x1 = a, this._y1 = o
        }, c.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticRel]"
        }, c.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
        }, c.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
            return new c.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1)
        }, Object.defineProperty(c.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
            get: function() {
                return this._x1
            },
            set: function(i) {
                this._x1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
            get: function() {
                return this._y1
            },
            set: function(i) {
                this._y1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegArcAbs = function(i, t, e, a, o, n, s, r) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_ARC_ABS, "A", i), this._x = t, this._y = e, this._r1 = a, this._r2 = o, this._angle = n, this._largeArcFlag = s, this._sweepFlag = r
        }, c.SVGPathSegArcAbs.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegArcAbs.prototype.toString = function() {
            return "[object SVGPathSegArcAbs]"
        }, c.SVGPathSegArcAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
        }, c.SVGPathSegArcAbs.prototype.clone = function() {
            return new c.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
        }, Object.defineProperty(c.SVGPathSegArcAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcAbs.prototype, "r1", {
            get: function() {
                return this._r1
            },
            set: function(i) {
                this._r1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcAbs.prototype, "r2", {
            get: function() {
                return this._r2
            },
            set: function(i) {
                this._r2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcAbs.prototype, "angle", {
            get: function() {
                return this._angle
            },
            set: function(i) {
                this._angle = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcAbs.prototype, "largeArcFlag", {
            get: function() {
                return this._largeArcFlag
            },
            set: function(i) {
                this._largeArcFlag = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcAbs.prototype, "sweepFlag", {
            get: function() {
                return this._sweepFlag
            },
            set: function(i) {
                this._sweepFlag = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegArcRel = function(i, t, e, a, o, n, s, r) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_ARC_REL, "a", i), this._x = t, this._y = e, this._r1 = a, this._r2 = o, this._angle = n, this._largeArcFlag = s, this._sweepFlag = r
        }, c.SVGPathSegArcRel.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegArcRel.prototype.toString = function() {
            return "[object SVGPathSegArcRel]"
        }, c.SVGPathSegArcRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
        }, c.SVGPathSegArcRel.prototype.clone = function() {
            return new c.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
        }, Object.defineProperty(c.SVGPathSegArcRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcRel.prototype, "r1", {
            get: function() {
                return this._r1
            },
            set: function(i) {
                this._r1 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcRel.prototype, "r2", {
            get: function() {
                return this._r2
            },
            set: function(i) {
                this._r2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcRel.prototype, "angle", {
            get: function() {
                return this._angle
            },
            set: function(i) {
                this._angle = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcRel.prototype, "largeArcFlag", {
            get: function() {
                return this._largeArcFlag
            },
            set: function(i) {
                this._largeArcFlag = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegArcRel.prototype, "sweepFlag", {
            get: function() {
                return this._sweepFlag
            },
            set: function(i) {
                this._sweepFlag = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegLinetoHorizontalAbs = function(i, t) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", i), this._x = t
        }, c.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoHorizontalAbs]"
        }, c.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x
        }, c.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
            return new c.SVGPathSegLinetoHorizontalAbs(void 0, this._x)
        }, Object.defineProperty(c.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegLinetoHorizontalRel = function(i, t) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", i), this._x = t
        }, c.SVGPathSegLinetoHorizontalRel.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoHorizontalRel]"
        }, c.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x
        }, c.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
            return new c.SVGPathSegLinetoHorizontalRel(void 0, this._x)
        }, Object.defineProperty(c.SVGPathSegLinetoHorizontalRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegLinetoVerticalAbs = function(i, t) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", i), this._y = t
        }, c.SVGPathSegLinetoVerticalAbs.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoVerticalAbs]"
        }, c.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._y
        }, c.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
            return new c.SVGPathSegLinetoVerticalAbs(void 0, this._y)
        }, Object.defineProperty(c.SVGPathSegLinetoVerticalAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegLinetoVerticalRel = function(i, t) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", i), this._y = t
        }, c.SVGPathSegLinetoVerticalRel.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoVerticalRel]"
        }, c.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._y
        }, c.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
            return new c.SVGPathSegLinetoVerticalRel(void 0, this._y)
        }, Object.defineProperty(c.SVGPathSegLinetoVerticalRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegCurvetoCubicSmoothAbs = function(i, t, e, a, o) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", i), this._x = t, this._y = e, this._x2 = a, this._y2 = o
        }, c.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicSmoothAbs]"
        }, c.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        }, c.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
            return new c.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2)
        }, Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
            get: function() {
                return this._x2
            },
            set: function(i) {
                this._x2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
            get: function() {
                return this._y2
            },
            set: function(i) {
                this._y2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegCurvetoCubicSmoothRel = function(i, t, e, a, o) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", i), this._x = t, this._y = e, this._x2 = a, this._y2 = o
        }, c.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicSmoothRel]"
        }, c.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        }, c.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
            return new c.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2)
        }, Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
            get: function() {
                return this._x2
            },
            set: function(i) {
                this._x2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
            get: function() {
                return this._y2
            },
            set: function(i) {
                this._y2 = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegCurvetoQuadraticSmoothAbs = function(i, t, e) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", i), this._x = t, this._y = e
        }, c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"
        }, c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
            return new c.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y)
        }, Object.defineProperty(c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathSegCurvetoQuadraticSmoothRel = function(i, t, e) {
            c.SVGPathSeg.call(this, c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", i), this._x = t, this._y = e
        }, c.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(c.SVGPathSeg.prototype), c.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticSmoothRel]"
        }, c.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, c.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
            return new c.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y)
        }, Object.defineProperty(c.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(i) {
                this._x = i, this._segmentChanged()
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(i) {
                this._y = i, this._segmentChanged()
            },
            enumerable: !0
        }), c.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
            return new c.SVGPathSegClosePath(void 0)
        }, c.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(i, t) {
            return new c.SVGPathSegMovetoAbs(void 0, i, t)
        }, c.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(i, t) {
            return new c.SVGPathSegMovetoRel(void 0, i, t)
        }, c.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(i, t) {
            return new c.SVGPathSegLinetoAbs(void 0, i, t)
        }, c.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(i, t) {
            return new c.SVGPathSegLinetoRel(void 0, i, t)
        }, c.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(i, t, e, a, o, n) {
            return new c.SVGPathSegCurvetoCubicAbs(void 0, i, t, e, a, o, n)
        }, c.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(i, t, e, a, o, n) {
            return new c.SVGPathSegCurvetoCubicRel(void 0, i, t, e, a, o, n)
        }, c.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(i, t, e, a) {
            return new c.SVGPathSegCurvetoQuadraticAbs(void 0, i, t, e, a)
        }, c.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(i, t, e, a) {
            return new c.SVGPathSegCurvetoQuadraticRel(void 0, i, t, e, a)
        }, c.SVGPathElement.prototype.createSVGPathSegArcAbs = function(i, t, e, a, o, n, s) {
            return new c.SVGPathSegArcAbs(void 0, i, t, e, a, o, n, s)
        }, c.SVGPathElement.prototype.createSVGPathSegArcRel = function(i, t, e, a, o, n, s) {
            return new c.SVGPathSegArcRel(void 0, i, t, e, a, o, n, s)
        }, c.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(i) {
            return new c.SVGPathSegLinetoHorizontalAbs(void 0, i)
        }, c.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(i) {
            return new c.SVGPathSegLinetoHorizontalRel(void 0, i)
        }, c.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(i) {
            return new c.SVGPathSegLinetoVerticalAbs(void 0, i)
        }, c.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(i) {
            return new c.SVGPathSegLinetoVerticalRel(void 0, i)
        }, c.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(i, t, e, a) {
            return new c.SVGPathSegCurvetoCubicSmoothAbs(void 0, i, t, e, a)
        }, c.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(i, t, e, a) {
            return new c.SVGPathSegCurvetoCubicSmoothRel(void 0, i, t, e, a)
        }, c.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(i, t) {
            return new c.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, i, t)
        }, c.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(i, t) {
            return new c.SVGPathSegCurvetoQuadraticSmoothRel(void 0, i, t)
        }, "getPathSegAtLength" in c.SVGPathElement.prototype || (c.SVGPathElement.prototype.getPathSegAtLength = function(i) {
            if (i === void 0 || !isFinite(i)) throw "Invalid arguments.";
            let t = document.createElementNS("http://www.w3.org/2000/svg", "path");
            t.setAttribute("d", this.getAttribute("d"));
            let e = t.pathSegList.numberOfItems - 1;
            if (e <= 0) return 0;
            do {
                if (t.pathSegList.removeItem(e), i > t.getTotalLength()) break;
                e--
            } while (e > 0);
            return e
        })), (!("SVGPathSegList" in c) || !("appendItem" in c.SVGPathSegList.prototype)) && (c.SVGPathSegList = function(i) {
            this._pathElement = i, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = {
                attributes: !0,
                attributeFilter: ["d"]
            }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
        }, c.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(c.SVGPathSegList.prototype, "numberOfItems", {
            get: function() {
                return this._checkPathSynchronizedToList(), this._list.length
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathSegList.prototype, "length", {
            get: function() {
                return this._checkPathSynchronizedToList(), this._list.length
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathElement.prototype, "pathSegList", {
            get: function() {
                return this._pathSegList || (this._pathSegList = new c.SVGPathSegList(this)), this._pathSegList
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathElement.prototype, "normalizedPathSegList", {
            get: function() {
                return this.pathSegList
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathElement.prototype, "animatedPathSegList", {
            get: function() {
                return this.pathSegList
            },
            enumerable: !0
        }), Object.defineProperty(c.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
            get: function() {
                return this.pathSegList
            },
            enumerable: !0
        }), c.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
        }, c.SVGPathSegList.prototype._updateListFromPathMutations = function(i) {
            if (!this._pathElement) return;
            let t = !1;
            i.forEach(function(e) {
                e.attributeName == "d" && (t = !0)
            }), t && (this._list = this._parsePath(this._pathElement.getAttribute("d")))
        }, c.SVGPathSegList.prototype._writeListToPath = function() {
            this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", c.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
        }, c.SVGPathSegList.prototype.segmentChanged = function(i) {
            this._writeListToPath()
        }, c.SVGPathSegList.prototype.clear = function() {
            this._checkPathSynchronizedToList(), this._list.forEach(function(i) {
                i._owningPathSegList = null
            }), this._list = [], this._writeListToPath()
        }, c.SVGPathSegList.prototype.initialize = function(i) {
            return this._checkPathSynchronizedToList(), this._list = [i], i._owningPathSegList = this, this._writeListToPath(), i
        }, c.SVGPathSegList.prototype._checkValidIndex = function(i) {
            if (isNaN(i) || i < 0 || i >= this.numberOfItems) throw "INDEX_SIZE_ERR"
        }, c.SVGPathSegList.prototype.getItem = function(i) {
            return this._checkPathSynchronizedToList(), this._checkValidIndex(i), this._list[i]
        }, c.SVGPathSegList.prototype.insertItemBefore = function(i, t) {
            return this._checkPathSynchronizedToList(), t > this.numberOfItems && (t = this.numberOfItems), i._owningPathSegList && (i = i.clone()), this._list.splice(t, 0, i), i._owningPathSegList = this, this._writeListToPath(), i
        }, c.SVGPathSegList.prototype.replaceItem = function(i, t) {
            return this._checkPathSynchronizedToList(), i._owningPathSegList && (i = i.clone()), this._checkValidIndex(t), this._list[t] = i, i._owningPathSegList = this, this._writeListToPath(), i
        }, c.SVGPathSegList.prototype.removeItem = function(i) {
            this._checkPathSynchronizedToList(), this._checkValidIndex(i);
            let t = this._list[i];
            return this._list.splice(i, 1), this._writeListToPath(), t
        }, c.SVGPathSegList.prototype.appendItem = function(i) {
            return this._checkPathSynchronizedToList(), i._owningPathSegList && (i = i.clone()), this._list.push(i), i._owningPathSegList = this, this._writeListToPath(), i
        }, c.SVGPathSegList._pathSegArrayAsString = function(i) {
            let t = "",
                e = !0;
            return i.forEach(function(a) {
                e ? (e = !1, t += a._asPathString()) : t += " " + a._asPathString()
            }), t
        }, c.SVGPathSegList.prototype._parsePath = function(i) {
            if (!i || i.length == 0) return [];
            let t = this,
                e = function() {
                    this.pathSegList = []
                };
            e.prototype.appendSegment = function(s) {
                this.pathSegList.push(s)
            };
            let a = function(s) {
                this._string = s, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = c.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces()
            };
            a.prototype._isCurrentSpace = function() {
                let s = this._string[this._currentIndex];
                return s <= " " && (s == " " || s == `
` || s == "	" || s == "\r" || s == "\f")
            }, a.prototype._skipOptionalSpaces = function() {
                for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex++;
                return this._currentIndex < this._endIndex
            }, a.prototype._skipOptionalSpacesOrDelimiter = function() {
                return this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != "," ? !1 : (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "," && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
            }, a.prototype.hasMoreData = function() {
                return this._currentIndex < this._endIndex
            }, a.prototype.peekSegmentType = function() {
                let s = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(s)
            }, a.prototype._pathSegTypeFromChar = function(s) {
                switch (s) {
                    case "Z":
                    case "z":
                        return c.SVGPathSeg.PATHSEG_CLOSEPATH;
                    case "M":
                        return c.SVGPathSeg.PATHSEG_MOVETO_ABS;
                    case "m":
                        return c.SVGPathSeg.PATHSEG_MOVETO_REL;
                    case "L":
                        return c.SVGPathSeg.PATHSEG_LINETO_ABS;
                    case "l":
                        return c.SVGPathSeg.PATHSEG_LINETO_REL;
                    case "C":
                        return c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                    case "c":
                        return c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                    case "Q":
                        return c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                    case "q":
                        return c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                    case "A":
                        return c.SVGPathSeg.PATHSEG_ARC_ABS;
                    case "a":
                        return c.SVGPathSeg.PATHSEG_ARC_REL;
                    case "H":
                        return c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                    case "h":
                        return c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                    case "V":
                        return c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                    case "v":
                        return c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                    case "S":
                        return c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                    case "s":
                        return c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                    case "T":
                        return c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                    case "t":
                        return c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                    default:
                        return c.SVGPathSeg.PATHSEG_UNKNOWN
                }
            }, a.prototype._nextCommandHelper = function(s, r) {
                return (s == "+" || s == "-" || s == "." || s >= "0" && s <= "9") && r != c.SVGPathSeg.PATHSEG_CLOSEPATH ? r == c.SVGPathSeg.PATHSEG_MOVETO_ABS ? c.SVGPathSeg.PATHSEG_LINETO_ABS : r == c.SVGPathSeg.PATHSEG_MOVETO_REL ? c.SVGPathSeg.PATHSEG_LINETO_REL : r : c.SVGPathSeg.PATHSEG_UNKNOWN
            }, a.prototype.initialCommandIsMoveTo = function() {
                if (!this.hasMoreData()) return !0;
                let s = this.peekSegmentType();
                return s == c.SVGPathSeg.PATHSEG_MOVETO_ABS || s == c.SVGPathSeg.PATHSEG_MOVETO_REL
            }, a.prototype._parseNumber = function() {
                let s = 0,
                    r = 0,
                    l = 1,
                    d = 0,
                    h = 1,
                    p = 1,
                    u = this._currentIndex;
                if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+" ? this._currentIndex++ : this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-" && (this._currentIndex++, h = -1), this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != ".") return;
                let f = this._currentIndex;
                for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) this._currentIndex++;
                if (this._currentIndex != f) {
                    let g = this._currentIndex - 1,
                        y = 1;
                    for (; g >= f;) r += y * (this._string.charAt(g--) - "0"), y *= 10
                }
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                    if (this._currentIndex++, this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                    for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) l *= 10, d += (this._string.charAt(this._currentIndex) - "0") / l, this._currentIndex += 1
                }
                if (this._currentIndex != u && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m") {
                    if (this._currentIndex++, this._string.charAt(this._currentIndex) == "+" ? this._currentIndex++ : this._string.charAt(this._currentIndex) == "-" && (this._currentIndex++, p = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                    for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) s *= 10, s += this._string.charAt(this._currentIndex) - "0", this._currentIndex++
                }
                let m = r + d;
                if (m *= h, s && (m *= Math.pow(10, p * s)), u != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), m
            }, a.prototype._parseArcFlag = function() {
                if (this._currentIndex >= this._endIndex) return;
                let s = !1,
                    r = this._string.charAt(this._currentIndex++);
                if (r == "0") s = !1;
                else {
                    if (r != "1") return;
                    s = !0
                }
                return this._skipOptionalSpacesOrDelimiter(), s
            }, a.prototype.parseSegment = function() {
                let s = this._string[this._currentIndex],
                    r = this._pathSegTypeFromChar(s);
                if (r == c.SVGPathSeg.PATHSEG_UNKNOWN) {
                    if (this._previousCommand == c.SVGPathSeg.PATHSEG_UNKNOWN || (r = this._nextCommandHelper(s, this._previousCommand), r == c.SVGPathSeg.PATHSEG_UNKNOWN)) return null
                } else this._currentIndex++;
                this._previousCommand = r;
                let l;
                switch (r) {
                    case c.SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new c.SVGPathSegMovetoRel(t, this._parseNumber(), this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new c.SVGPathSegMovetoAbs(t, this._parseNumber(), this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_REL:
                        return new c.SVGPathSegLinetoRel(t, this._parseNumber(), this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new c.SVGPathSegLinetoAbs(t, this._parseNumber(), this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new c.SVGPathSegLinetoHorizontalRel(t, this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new c.SVGPathSegLinetoHorizontalAbs(t, this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new c.SVGPathSegLinetoVerticalRel(t, this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new c.SVGPathSegLinetoVerticalAbs(t, this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_CLOSEPATH:
                        return this._skipOptionalSpaces(), new c.SVGPathSegClosePath(t);
                    case c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        return l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new c.SVGPathSegCurvetoCubicRel(t, l.x, l.y, l.x1, l.y1, l.x2, l.y2);
                    case c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        return l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new c.SVGPathSegCurvetoCubicAbs(t, l.x, l.y, l.x1, l.y1, l.x2, l.y2);
                    case c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        return l = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new c.SVGPathSegCurvetoCubicSmoothRel(t, l.x, l.y, l.x2, l.y2);
                    case c.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        return l = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new c.SVGPathSegCurvetoCubicSmoothAbs(t, l.x, l.y, l.x2, l.y2);
                    case c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        return l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new c.SVGPathSegCurvetoQuadraticRel(t, l.x, l.y, l.x1, l.y1);
                    case c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        return l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new c.SVGPathSegCurvetoQuadraticAbs(t, l.x, l.y, l.x1, l.y1);
                    case c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new c.SVGPathSegCurvetoQuadraticSmoothRel(t, this._parseNumber(), this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new c.SVGPathSegCurvetoQuadraticSmoothAbs(t, this._parseNumber(), this._parseNumber());
                    case c.SVGPathSeg.PATHSEG_ARC_REL:
                        return l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new c.SVGPathSegArcRel(t, l.x, l.y, l.x1, l.y1, l.arcAngle, l.arcLarge, l.arcSweep);
                    case c.SVGPathSeg.PATHSEG_ARC_ABS:
                        return l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new c.SVGPathSegArcAbs(t, l.x, l.y, l.x1, l.y1, l.arcAngle, l.arcLarge, l.arcSweep);
                    default:
                        throw "Unknown path seg type."
                }
            };
            let o = new e,
                n = new a(i);
            if (!n.initialCommandIsMoveTo()) return [];
            for (; n.hasMoreData();) {
                let s = n.parseSegment();
                if (!s) return [];
                o.appendSegment(s)
            }
            return o.pathSegList
        })
    } catch (i) {
        console.warn("An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles", i)
    }
})();
var ba = class {
        constructor() {
            this.color = new z, this.width = .5, this.opacity = 1
        }
        load(t) {
            var e;
            t && (this.color = z.create(this.color, t.color), typeof this.color.value == "string" && (this.opacity = (e = yn(this.color.value)) !== null && e !== void 0 ? e : this.opacity), t.opacity !== void 0 && (this.opacity = t.opacity), t.width !== void 0 && (this.width = t.width))
        }
    },
    Sa = class {
        constructor() {
            this.enable = !1, this.stroke = new ba
        }
        get lineColor() {
            return this.stroke.color
        }
        set lineColor(t) {
            this.stroke.color = z.create(this.stroke.color, t)
        }
        get lineWidth() {
            return this.stroke.width
        }
        set lineWidth(t) {
            this.stroke.width = t
        }
        load(t) {
            var e;
            if (!t) return;
            t.enable !== void 0 && (this.enable = t.enable);
            let a = (e = t.stroke) !== null && e !== void 0 ? e : {
                color: t.lineColor,
                width: t.lineWidth
            };
            this.stroke.load(a)
        }
    },
    xa = class {
        constructor() {
            this.arrangement = "one-per-point"
        }
        load(t) {
            t && t.arrangement !== void 0 && (this.arrangement = t.arrangement)
        }
    },
    wa = class {
        constructor() {
            this.path = [], this.size = {
                height: 0,
                width: 0
            }
        }
        load(t) {
            t && (t.path !== void 0 && (this.path = t.path), t.size !== void 0 && (t.size.width !== void 0 && (this.size.width = t.size.width), t.size.height !== void 0 && (this.size.height = t.size.height)))
        }
    },
    _a = class {
        constructor() {
            this.radius = 10, this.type = "path"
        }
        load(t) {
            t && (t.radius !== void 0 && (this.radius = t.radius), t.type !== void 0 && (this.type = t.type))
        }
    },
    Te = class {
        constructor() {
            this.draw = new Sa, this.enable = !1, this.inline = new xa, this.move = new _a, this.scale = 1, this.type = "none"
        }
        get inlineArrangement() {
            return this.inline.arrangement
        }
        set inlineArrangement(t) {
            this.inline.arrangement = t
        }
        load(t) {
            t && (this.draw.load(t.draw), this.inline.load(t.inline), this.move.load(t.move), t.scale !== void 0 && (this.scale = t.scale), t.type !== void 0 && (this.type = t.type), t.enable !== void 0 ? this.enable = t.enable : this.enable = this.type !== "none", t.url !== void 0 && (this.url = t.url), t.data !== void 0 && (typeof t.data == "string" ? this.data = t.data : (this.data = new wa, this.data.load(t.data))), t.position !== void 0 && (this.position = D({}, t.position)))
        }
    };

function jr(i, t, e) {
    let a = J(e.color);
    if (a) {
        i.beginPath(), i.moveTo(t[0].x, t[0].y);
        for (let o of t) i.lineTo(o.x, o.y);
        i.closePath(), i.strokeStyle = Z(a), i.lineWidth = e.width, i.stroke()
    }
}

function Wr(i, t, e, a) {
    i.translate(a.x, a.y);
    let o = J(e.color);
    o && (i.strokeStyle = Z(o, e.opacity), i.lineWidth = e.width, i.stroke(t))
}

function qr(i, t, e) {
    var a;
    let o = [];
    for (let n of i) {
        let s = n.element.pathSegList,
            r = (a = s?.numberOfItems) !== null && a !== void 0 ? a : 0,
            l = {
                x: 0,
                y: 0
            };
        for (let d = 0; d < r; d++) {
            let h = s?.getItem(d),
                p = c.SVGPathSeg;
            switch (h?.pathSegType) {
                case p.PATHSEG_MOVETO_ABS:
                case p.PATHSEG_LINETO_ABS:
                case p.PATHSEG_CURVETO_CUBIC_ABS:
                case p.PATHSEG_CURVETO_QUADRATIC_ABS:
                case p.PATHSEG_ARC_ABS:
                case p.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                case p.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                    let u = h;
                    l.x = u.x, l.y = u.y;
                    break
                }
                case p.PATHSEG_LINETO_HORIZONTAL_ABS:
                    l.x = h.x;
                    break;
                case p.PATHSEG_LINETO_VERTICAL_ABS:
                    l.y = h.y;
                    break;
                case p.PATHSEG_LINETO_REL:
                case p.PATHSEG_MOVETO_REL:
                case p.PATHSEG_CURVETO_CUBIC_REL:
                case p.PATHSEG_CURVETO_QUADRATIC_REL:
                case p.PATHSEG_ARC_REL:
                case p.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                case p.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                    let u = h;
                    l.x += u.x, l.y += u.y;
                    break
                }
                case p.PATHSEG_LINETO_HORIZONTAL_REL:
                    l.x += h.x;
                    break;
                case p.PATHSEG_LINETO_VERTICAL_REL:
                    l.y += h.y;
                    break;
                case p.PATHSEG_UNKNOWN:
                case p.PATHSEG_CLOSEPATH:
                    continue
            }
            o.push({
                x: l.x * t + e.x,
                y: l.y * t + e.y
            })
        }
    }
    return o
}

function Yr(i, t, e) {
    let {
        dx: a,
        dy: o
    } = F(e, i), {
        dx: n,
        dy: s
    } = F(t, i), r = (a * n + o * s) / (n ** 2 + s ** 2), l = {
        x: i.x + n * r,
        y: i.x + s * r,
        isOnSegment: r >= 0 && r <= 1
    };
    return r < 0 ? (l.x = i.x, l.y = i.y) : r > 1 && (l.x = t.x, l.y = t.y), l
}

function Qr(i, t, e) {
    let {
        dx: a,
        dy: o
    } = F(i, t), n = Math.atan2(o, a), s = I.create(Math.sin(n), -Math.cos(n)), r = 2 * (e.x * s.x + e.y * s.y);
    s.multTo(r), e.subFrom(s)
}
var Ee = "No polygon data loaded.",
    Jr = "No polygon found, you need to specify SVG url in config.",
    Pa = class {
        constructor(t, e) {
            this._container = t, this._engine = e, this.dimension = {
                height: 0,
                width: 0
            }, this.path2DSupported = !!c.Path2D, this.options = new Te, this._polygonMaskMoveRadius = this.options.move.radius * t.retina.pixelRatio
        }
        clickPositionValid(t) {
            let e = this.options;
            return e.enable && e.type !== "none" && e.type !== "inline" && this.checkInsidePolygon(t)
        }
        draw(t) {
            var e;
            if (!(!((e = this.paths) === null || e === void 0) && e.length)) return;
            let a = this.options,
                o = a.draw;
            if (!a.enable || !o.enable) return;
            let n = this.raw;
            for (let s of this.paths) {
                let r = s.path2d,
                    l = this.path2DSupported;
                t && (l && r && this.offset ? Wr(t, r, o.stroke, this.offset) : n && jr(t, n, o.stroke))
            }
        }
        async initAsync(t) {
            this.options.load(t?.polygon);
            let e = this.options;
            this._polygonMaskMoveRadius = e.move.radius * this._container.retina.pixelRatio, e.enable && await this.initRawData()
        }
        particleBounce(t, e, a) {
            return this.polygonBounce(t, e, a)
        }
        particlePosition(t) {
            var e, a;
            if (this.options.enable && ((a = (e = this.raw) === null || e === void 0 ? void 0 : e.length) !== null && a !== void 0 ? a : 0) > 0) return D({}, t || this.randomPoint())
        }
        particlesInitialization() {
            let t = this.options;
            return t.enable && t.type === "inline" && (t.inline.arrangement === "one-per-point" || t.inline.arrangement === "per-point") ? (this.drawPoints(), !0) : !1
        }
        resize() {
            let t = this._container,
                e = this.options;
            e.enable && e.type !== "none" && (this.redrawTimeout && clearTimeout(this.redrawTimeout), this.redrawTimeout = c.setTimeout(async () => {
                await this.initRawData(!0), await t.particles.redraw()
            }, 250))
        }
        stop() {
            delete this.raw, delete this.paths
        }
        checkInsidePolygon(t) {
            var e, a;
            let o = this._container,
                n = this.options;
            if (!n.enable || n.type === "none" || n.type === "inline") return !0;
            if (!this.raw) throw new Error(Jr);
            let s = o.canvas.size,
                r = (e = t?.x) !== null && e !== void 0 ? e : C() * s.width,
                l = (a = t?.y) !== null && a !== void 0 ? a : C() * s.height,
                d = !1;
            for (let h = 0, p = this.raw.length - 1; h < this.raw.length; p = h++) {
                let u = this.raw[h],
                    f = this.raw[p];
                u.y > l != f.y > l && r < (f.x - u.x) * (l - u.y) / (f.y - u.y) + u.x && (d = !d)
            }
            return n.type === "inside" ? d : n.type === "outside" && !d
        }
        createPath2D() {
            var t, e;
            let a = this.options;
            if (this.path2DSupported && (!((t = this.paths) === null || t === void 0) && t.length))
                for (let o of this.paths) {
                    let n = (e = o.element) === null || e === void 0 ? void 0 : e.getAttribute("d");
                    if (n) {
                        let s = new Path2D(n),
                            r = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(),
                            l = new Path2D,
                            d = r.scale(a.scale);
                        l.addPath ? (l.addPath(s, d), o.path2d = l) : delete o.path2d
                    } else delete o.path2d;
                    !o.path2d && this.raw && (o.path2d = new Path2D, o.path2d.moveTo(this.raw[0].x, this.raw[0].y), this.raw.forEach((s, r) => {
                        var l;
                        r > 0 && ((l = o.path2d) === null || l === void 0 || l.lineTo(s.x, s.y))
                    }), o.path2d.closePath())
                }
        }
        async downloadSvgPath(t, e) {
            let a = this.options,
                o = t || a.url,
                n = e != null && e;
            if (!o || this.paths !== void 0 && !n) return this.raw;
            let s = await fetch(o);
            if (!s.ok) throw new Error("tsParticles Error - Error occurred during polygon mask download");
            return this.parseSvgPath(await s.text(), e)
        }
        drawPoints() {
            if (this.raw)
                for (let t of this.raw) this._container.particles.addParticle({
                    x: t.x,
                    y: t.y
                })
        }
        getEquidistantPointByIndex(t) {
            var e, a, o, n, s, r, l;
            let d = this._container.actualOptions,
                h = this.options;
            if (!this.raw || !this.raw.length || !(!((e = this.paths) === null || e === void 0) && e.length)) throw new Error(Ee);
            let p, u = 0,
                f = this.paths.reduce((g, y) => g + y.length, 0),
                m = f / d.particles.number.value;
            for (let g of this.paths) {
                let y = m * t - u;
                if (y <= g.length) {
                    p = g.element.getPointAtLength(y);
                    break
                }
                u += g.length
            }
            return {
                x: ((a = p?.x) !== null && a !== void 0 ? a : 0) * h.scale + ((n = (o = this.offset) === null || o === void 0 ? void 0 : o.x) !== null && n !== void 0 ? n : 0),
                y: ((s = p?.y) !== null && s !== void 0 ? s : 0) * h.scale + ((l = (r = this.offset) === null || r === void 0 ? void 0 : r.y) !== null && l !== void 0 ? l : 0)
            }
        }
        getPointByIndex(t) {
            if (!this.raw || !this.raw.length) throw new Error(Ee);
            let e = this.raw[t % this.raw.length];
            return {
                x: e.x,
                y: e.y
            }
        }
        getRandomPoint() {
            if (!this.raw || !this.raw.length) throw new Error(Ee);
            let t = ht(this.raw);
            return {
                x: t.x,
                y: t.y
            }
        }
        getRandomPointByLength() {
            var t, e, a;
            let o = this.options;
            if (!this.raw || !this.raw.length || !(!((t = this.paths) === null || t === void 0) && t.length)) throw new Error(Ee);
            let n = ht(this.paths),
                s = Math.floor(C() * n.length) + 1,
                r = n.element.getPointAtLength(s);
            return {
                x: r.x * o.scale + (((e = this.offset) === null || e === void 0 ? void 0 : e.x) || 0),
                y: r.y * o.scale + (((a = this.offset) === null || a === void 0 ? void 0 : a.y) || 0)
            }
        }
        async initRawData(t) {
            let e = this.options;
            if (e.url) this.raw = await this.downloadSvgPath(e.url, t);
            else if (e.data) {
                let a = e.data,
                    o;
                if (typeof a != "string") {
                    let n = a.path instanceof Array ? a.path.map(r => `<path d="${r}" />`).join("") : `<path d="${a.path}" />`;
                    o = `<svg xmlns="https://f65.workupload.com/download/BUpJxXT9ffr" xmlns:xlink="https://f65.workupload.com/download/BUpJxXT9ffr" width="${a.size.width}" height="${a.size.height}">${n}</svg>`
                } else o = a;
                this.raw = this.parseSvgPath(o, t)
            }
            this.createPath2D(), this._engine.dispatchEvent("polygonMaskLoaded", {
                container: this._container
            })
        }
        parseSvgPath(t, e) {
            var a, o, n;
            let s = e != null && e;
            if (this.paths !== void 0 && !s) return this.raw;
            let r = this._container,
                l = this.options,
                d = new DOMParser,
                h = d.parseFromString(t, "image/svg+xml"),
                p = h.getElementsByTagName("svg")[0],
                u = p.getElementsByTagName("path");
            u.length || (u = h.getElementsByTagName("path")), this.paths = [];
            for (let y = 0; y < u.length; y++) {
                let w = u.item(y);
                w && this.paths.push({
                    element: w,
                    length: w.getTotalLength()
                })
            }
            let f = r.retina.pixelRatio,
                m = l.scale / f;
            this.dimension.width = parseFloat((a = p.getAttribute("width")) !== null && a !== void 0 ? a : "0") * m, this.dimension.height = parseFloat((o = p.getAttribute("height")) !== null && o !== void 0 ? o : "0") * m;
            let g = (n = l.position) !== null && n !== void 0 ? n : {
                x: 50,
                y: 50
            };
            return this.offset = {
                x: r.canvas.size.width * g.x / (100 * f) - this.dimension.width / 2,
                y: r.canvas.size.height * g.y / (100 * f) - this.dimension.height / 2
            }, qr(this.paths, m, this.offset)
        }
        polygonBounce(t, e, a) {
            let o = this.options;
            if (!this.raw || !o.enable || a !== "top") return !1;
            if (o.type === "inside" || o.type === "outside") {
                let n, s, r, l = t.getPosition(),
                    d = t.getRadius();
                for (let h = 0, p = this.raw.length - 1; h < this.raw.length; p = h++) {
                    let u = this.raw[h],
                        f = this.raw[p];
                    n = Yr(u, f, l);
                    let m = F(l, n);
                    if ([s, r] = [m.dx, m.dy], m.distance < d) return Qr(u, f, t.velocity), !0
                }
                if (n && s !== void 0 && r !== void 0 && !this.checkInsidePolygon(l)) {
                    let h = {
                        x: 1,
                        y: 1
                    };
                    return t.position.x >= n.x && (h.x = -1), t.position.y >= n.y && (h.y = -1), t.position.x = n.x + 2 * d * h.x, t.position.y = n.y + 2 * d * h.y, t.velocity.mult(-1), !0
                }
            } else if (o.type === "inline" && t.initialPosition && L(t.initialPosition, t.getPosition()) > this._polygonMaskMoveRadius) return t.velocity.x = t.velocity.y / 2 - t.velocity.x, t.velocity.y = t.velocity.x / 2 - t.velocity.y, !0;
            return !1
        }
        randomPoint() {
            let t = this._container,
                e = this.options,
                a;
            if (e.type === "inline") switch (e.inline.arrangement) {
                case "random-point":
                    a = this.getRandomPoint();
                    break;
                case "random-length":
                    a = this.getRandomPointByLength();
                    break;
                case "equidistant":
                    a = this.getEquidistantPointByIndex(t.particles.count);
                    break;
                case "one-per-point":
                case "per-point":
                default:
                    a = this.getPointByIndex(t.particles.count)
            } else a = {
                x: C() * t.canvas.size.width,
                y: C() * t.canvas.size.height
            };
            return this.checkInsidePolygon(a) ? a : this.randomPoint()
        }
    },
    Ca = class {
        constructor(t) {
            this.id = "polygonMask", this._engine = t
        }
        getPlugin(t) {
            return new Pa(t, this._engine)
        }
        loadOptions(t, e) {
            if (!this.needsPlugin(e)) return;
            let a = t,
                o = a.polygon;
            o?.load === void 0 && (a.polygon = o = new Te), o.load(e?.polygon)
        }
        needsPlugin(t) {
            var e, a, o;
            return (a = (e = t?.polygon) === null || e === void 0 ? void 0 : e.enable) !== null && a !== void 0 ? a : ((o = t?.polygon) === null || o === void 0 ? void 0 : o.type) !== void 0 && t.polygon.type !== "none"
        }
    };
async function Rn(i) {
    let t = new Ca(i);
    await i.addPlugin(t)
}
var Ge = class {
        constructor() {
            this.enable = !1, this.value = 0
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), t.value !== void 0 && (this.value = k(t.value)))
        }
    },
    ka = class {
        constructor() {
            this.darken = new Ge, this.enable = !1, this.enlighten = new Ge, this.mode = "vertical", this.speed = 25
        }
        load(t) {
            t && (t.backColor !== void 0 && (this.backColor = z.create(this.backColor, t.backColor)), this.darken.load(t.darken), t.enable !== void 0 && (this.enable = t.enable), this.enlighten.load(t.enlighten), t.mode !== void 0 && (this.mode = t.mode), t.speed !== void 0 && (this.speed = k(t.speed)))
        }
    };

function Zr(i, t) {
    let e = i.options.roll;
    if (!i.roll || !e?.enable) return;
    let a = i.roll.speed * t.factor,
        o = 2 * Math.PI;
    i.roll.angle += a, i.roll.angle > o && (i.roll.angle -= o)
}
var Va = class {
    getTransformValues(t) {
        var e;
        let a = ((e = t.roll) === null || e === void 0 ? void 0 : e.enable) && t.roll,
            o = a && a.horizontal,
            n = a && a.vertical;
        return {
            a: o ? Math.cos(a.angle) : void 0,
            d: n ? Math.sin(a.angle) : void 0
        }
    }
    init(t) {
        let e = t.options.roll;
        if (e?.enable)
            if (t.roll = {
                    enable: e.enable,
                    horizontal: e.mode === "horizontal" || e.mode === "both",
                    vertical: e.mode === "vertical" || e.mode === "both",
                    angle: C() * Math.PI * 2,
                    speed: P(e.speed) / 360
                }, e.backColor) t.backColor = it(e.backColor);
            else if (e.darken.enable && e.enlighten.enable) {
            let a = C() >= .5 ? "darken" : "enlighten";
            t.roll.alter = {
                type: a,
                value: P(a === "darken" ? e.darken.value : e.enlighten.value)
            }
        } else e.darken.enable ? t.roll.alter = {
            type: "darken",
            value: P(e.darken.value)
        } : e.enlighten.enable && (t.roll.alter = {
            type: "enlighten",
            value: P(e.enlighten.value)
        });
        else t.roll = {
            enable: !1,
            horizontal: !1,
            vertical: !1,
            angle: 0,
            speed: 0
        }
    }
    isEnabled(t) {
        let e = t.options.roll;
        return !t.destroyed && !t.spawning && !!e?.enable
    }
    loadOptions(t, ...e) {
        t.roll || (t.roll = new ka);
        for (let a of e) t.roll.load(a?.roll)
    }
    update(t, e) {
        this.isEnabled(t) && Zr(t, e)
    }
};
async function En(i) {
    await i.addParticleUpdater("roll", () => new Va)
}
var Tn = i => {
    let t = (a, o) => i.load(a, o);
    t.load = (a, o, n) => {
        i.loadJSON(a, o).then(s => {
            s && n(s)
        }).catch(() => {
            n(void 0)
        })
    }, t.setOnClickHandler = a => {
        i.setOnClickHandler(a)
    };
    let e = i.dom();
    return {
        particlesJS: t,
        pJSDom: e
    }
};

function Xr(i, t) {
    var e, a;
    let o = i.rotate;
    if (!o) return;
    let n = i.options.rotate,
        s = n.animation,
        r = ((e = o.velocity) !== null && e !== void 0 ? e : 0) * t.factor,
        l = 2 * Math.PI,
        d = (a = o.decay) !== null && a !== void 0 ? a : 1;
    if (s.enable) {
        switch (o.status) {
            case 0:
                o.value += r, o.value > l && (o.value -= l);
                break;
            case 1:
            default:
                o.value -= r, o.value < 0 && (o.value += l);
                break
        }
        o.velocity && d !== 1 && (o.velocity *= d)
    }
}
var Oa = class {
    constructor(t) {
        this.container = t
    }
    init(t) {
        let e = t.options.rotate;
        t.rotate = {
            enable: e.animation.enable,
            value: P(e.value) * Math.PI / 180
        };
        let a = e.direction;
        switch (a === "random" && (a = Math.floor(2 * C()) > 0 ? "counter-clockwise" : "clockwise"), a) {
            case "counter-clockwise":
            case "counterClockwise":
                t.rotate.status = 1;
                break;
            case "clockwise":
                t.rotate.status = 0;
                break
        }
        let o = t.options.rotate.animation;
        o.enable && (t.rotate.decay = 1 - P(o.decay), t.rotate.velocity = P(o.speed) / 360 * this.container.retina.reduceFactor, o.sync || (t.rotate.velocity *= C())), t.rotation = t.rotate.value
    }
    isEnabled(t) {
        let e = t.options.rotate,
            a = e.animation;
        return !t.destroyed && !t.spawning && a.enable && !e.path
    }
    update(t, e) {
        var a, o;
        this.isEnabled(t) && (Xr(t, e), t.rotation = (o = (a = t.rotate) === null || a === void 0 ? void 0 : a.value) !== null && o !== void 0 ? o : 0)
    }
};
async function Gn(i) {
    await i.addParticleUpdater("angle", t => new Oa(t))
}

function Kr(i) {
    let t = i.initialPosition,
        {
            dx: e,
            dy: a
        } = F(t, i.position),
        o = Math.abs(e),
        n = Math.abs(a),
        s = i.retina.maxDistance.horizontal,
        r = i.retina.maxDistance.vertical;
    if (s || r) {
        if ((s && o >= s || r && n >= r) && !i.misplaced) i.misplaced = !!s && o > s || !!r && n > r, s && (i.velocity.x = i.velocity.y / 2 - i.velocity.x), r && (i.velocity.y = i.velocity.x / 2 - i.velocity.y);
        else if ((!s || o < s) && (!r || n < r) && i.misplaced) i.misplaced = !1;
        else if (i.misplaced) {
            let l = i.position,
                d = i.velocity;
            s && (l.x < t.x && d.x < 0 || l.x > t.x && d.x > 0) && (d.x *= -C()), r && (l.y < t.y && d.y < 0 || l.y > t.y && d.y > 0) && (d.y *= -C())
        }
    }
}

function $r(i, t) {
    let e = i.container;
    if (!i.spin) return;
    let a = {
        x: i.spin.direction === "clockwise" ? Math.cos : Math.sin,
        y: i.spin.direction === "clockwise" ? Math.sin : Math.cos
    };
    i.position.x = i.spin.center.x + i.spin.radius * a.x(i.spin.angle), i.position.y = i.spin.center.y + i.spin.radius * a.y(i.spin.angle), i.spin.radius += i.spin.acceleration;
    let o = Math.max(e.canvas.size.width, e.canvas.size.height);
    i.spin.radius > o / 2 ? (i.spin.radius = o / 2, i.spin.acceleration *= -1) : i.spin.radius < 0 && (i.spin.radius = 0, i.spin.acceleration *= -1), i.spin.angle += t / 100 * (1 - i.spin.radius / o)
}

function tl(i, t) {
    var e;
    let o = i.options.move.path;
    if (!o.enable) return;
    if (i.lastPathTime <= i.pathDelay) {
        i.lastPathTime += t.value;
        return
    }
    let s = (e = i.pathGenerator) === null || e === void 0 ? void 0 : e.generate(i);
    s && i.velocity.addTo(s), o.clamp && (i.velocity.x = Y(i.velocity.x, -1, 1), i.velocity.y = Y(i.velocity.y, -1, 1)), i.lastPathTime -= i.pathDelay
}

function el(i) {
    return i.slow.inRange ? i.slow.factor : 1
}
var Aa = class {
    init(t) {
        var e;
        let a = t.container,
            o = t.options,
            n = o.move.gravity,
            s = o.move.spin;
        if (t.gravity = {
                enable: n.enable,
                acceleration: P(n.acceleration),
                inverse: n.inverse
            }, s.enable) {
            let r = (e = s.position) !== null && e !== void 0 ? e : {
                    x: 50,
                    y: 50
                },
                l = {
                    x: r.x / 100 * a.canvas.size.width,
                    y: r.y / 100 * a.canvas.size.height
                },
                d = t.getPosition(),
                h = L(d, l),
                p = P(s.acceleration);
            t.retina.spinAcceleration = p * a.retina.pixelRatio, t.spin = {
                center: l,
                direction: t.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                angle: t.velocity.angle,
                radius: h,
                acceleration: t.retina.spinAcceleration
            }
        }
    }
    isEnabled(t) {
        return !t.destroyed && t.options.move.enable
    }
    move(t, e) {
        var a, o, n, s, r;
        let l = t.options,
            d = l.move;
        if (!d.enable) return;
        let h = t.container,
            p = el(t),
            u = ((a = (s = t.retina).moveSpeed) !== null && a !== void 0 ? a : s.moveSpeed = P(d.speed) * h.retina.pixelRatio) * h.retina.reduceFactor,
            f = (o = (r = t.retina).moveDrift) !== null && o !== void 0 ? o : r.moveDrift = P(t.options.move.drift) * h.retina.pixelRatio,
            m = at(l.size.value) * h.retina.pixelRatio,
            g = d.size ? t.getRadius() / m : 1,
            y = g * p * (e.factor || 1),
            w = 2,
            x = u * y / w;
        if (d.spin.enable) $r(t, x);
        else {
            tl(t, e);
            let A = t.gravity,
                E = A?.enable && A.inverse ? -1 : 1;
            A?.enable && x && (t.velocity.y += E * (A.acceleration * e.factor) / (60 * x)), f && x && (t.velocity.x += f * e.factor / (60 * x));
            let R = t.moveDecay;
            R != 1 && t.velocity.multTo(R);
            let v = t.velocity.mult(x),
                W = (n = t.retina.maxSpeed) !== null && n !== void 0 ? n : h.retina.maxSpeed;
            A?.enable && W > 0 && (!A.inverse && v.y >= 0 && v.y >= W || A.inverse && v.y <= 0 && v.y <= -W) && (v.y = E * W, x && (t.velocity.y = v.y / x));
            let K = t.options.zIndex,
                Q = (1 - t.zIndexFactor) ** K.velocityRate;
            Q != 1 && v.multTo(Q), t.position.addTo(v), d.vibrate && (t.position.x += Math.sin(t.position.x * Math.cos(t.position.y)), t.position.y += Math.cos(t.position.y * Math.sin(t.position.x)))
        }
        Kr(t)
    }
};
async function In(i) {
    i.addMover("base", () => new Aa)
}
var Ra = class {
    draw(t, e, a) {
        t.arc(0, 0, a, 0, 2 * Math.PI, !1)
    }
    getSidesCount() {
        return 12
    }
};
async function zn(i) {
    await i.addShape("circle", new Ra)
}

function Ea(i, t, e, a, o) {
    var n, s;
    let r = t;
    if (!r || !e.enable) return;
    let l = H(e.offset),
        d = ((n = t.velocity) !== null && n !== void 0 ? n : 0) * i.factor + 3.6 * l,
        h = (s = t.decay) !== null && s !== void 0 ? s : 1;
    o && r.status !== 0 ? (r.value -= d, r.value < 0 && (r.status = 0, r.value += r.value)) : (r.value += d, o && r.value > a && (r.status = 1, r.value -= r.value % a)), r.velocity && h !== 1 && (r.velocity *= h), r.value > a && (r.value %= a)
}

function il(i, t) {
    var e, a, o;
    let n = i.options.color.animation;
    ((e = i.color) === null || e === void 0 ? void 0 : e.h) !== void 0 && Ea(t, i.color.h, n.h, 360, !1), ((a = i.color) === null || a === void 0 ? void 0 : a.s) !== void 0 && Ea(t, i.color.s, n.s, 100, !0), ((o = i.color) === null || o === void 0 ? void 0 : o.l) !== void 0 && Ea(t, i.color.l, n.l, 100, !0)
}
var Ta = class {
    constructor(t) {
        this.container = t
    }
    init(t) {
        let e = it(t.options.color, t.id, t.options.reduceDuplicates);
        e && (t.color = Ae(e, t.options.color.animation, this.container.retina.reduceFactor))
    }
    isEnabled(t) {
        var e, a, o;
        let n = t.options.color.animation;
        return !t.destroyed && !t.spawning && (((e = t.color) === null || e === void 0 ? void 0 : e.h.value) !== void 0 && n.h.enable || ((a = t.color) === null || a === void 0 ? void 0 : a.s.value) !== void 0 && n.s.enable || ((o = t.color) === null || o === void 0 ? void 0 : o.l.value) !== void 0 && n.l.enable)
    }
    update(t, e) {
        il(t, e)
    }
};
async function Mn(i) {
    await i.addParticleUpdater("color", t => new Ta(t))
}
var Ga = class {
        constructor() {
            this.distance = 200, this.duration = .4, this.easing = "ease-out-quad", this.factor = 1, this.maxSpeed = 50, this.speed = 1
        }
        load(t) {
            t && (t.distance !== void 0 && (this.distance = t.distance), t.duration !== void 0 && (this.duration = t.duration), t.easing !== void 0 && (this.easing = t.easing), t.factor !== void 0 && (this.factor = t.factor), t.maxSpeed !== void 0 && (this.maxSpeed = t.maxSpeed), t.speed !== void 0 && (this.speed = t.speed))
        }
    },
    Ia = class extends U {
        constructor(t) {
            super(t), t.attract || (t.attract = {
                particles: []
            }), this.handleClickMode = e => {
                let a = this.container.actualOptions,
                    o = a.interactivity.modes.attract;
                if (o && e === "attract") {
                    t.attract || (t.attract = {
                        particles: []
                    }), t.attract.clicking = !0, t.attract.count = 0;
                    for (let n of t.attract.particles) this.isEnabled(n) && n.velocity.setTo(n.initialVelocity);
                    t.attract.particles = [], t.attract.finish = !1, setTimeout(() => {
                        t.destroyed || (t.attract || (t.attract = {
                            particles: []
                        }), t.attract.clicking = !1)
                    }, 1e3 * o.duration)
                }
            }
        }
        clear() {}
        init() {
            let t = this.container,
                e = t.actualOptions.interactivity.modes.attract;
            e && (t.retina.attractModeDistance = e.distance * t.retina.pixelRatio)
        }
        async interact() {
            let t = this.container,
                e = t.actualOptions,
                a = t.interactivity.status === ct,
                o = e.interactivity.events,
                n = o.onHover.enable,
                s = o.onHover.mode,
                r = o.onClick.enable,
                l = o.onClick.mode;
            a && n && G("attract", s) ? this.hoverAttract() : r && G("attract", l) && this.clickAttract()
        }
        isEnabled(t) {
            var e;
            let a = this.container,
                o = a.actualOptions,
                n = a.interactivity.mouse,
                s = ((e = t?.interactivity) !== null && e !== void 0 ? e : o.interactivity).events;
            if ((!n.position || !s.onHover.enable) && (!n.clickPosition || !s.onClick.enable)) return !1;
            let r = s.onHover.mode,
                l = s.onClick.mode;
            return G("attract", r) || G("attract", l)
        }
        loadModeOptions(t, ...e) {
            t.attract || (t.attract = new Ga);
            for (let a of e) t.attract.load(a?.attract)
        }
        reset() {}
        clickAttract() {
            let t = this.container;
            if (t.attract || (t.attract = {
                    particles: []
                }), t.attract.finish || (t.attract.count || (t.attract.count = 0), t.attract.count++, t.attract.count === t.particles.count && (t.attract.finish = !0)), t.attract.clicking) {
                let e = t.interactivity.mouse.clickPosition,
                    a = t.retina.attractModeDistance;
                if (!a || a < 0 || !e) return;
                this.processAttract(e, a, new B(e.x, e.y, a))
            } else t.attract.clicking === !1 && (t.attract.particles = [])
        }
        hoverAttract() {
            let t = this.container,
                e = t.interactivity.mouse.position,
                a = t.retina.attractModeDistance;
            !a || a < 0 || !e || this.processAttract(e, a, new B(e.x, e.y, a))
        }
        processAttract(t, e, a) {
            let o = this.container,
                n = o.actualOptions.interactivity.modes.attract;
            if (!n) return;
            let s = o.particles.quadTree.query(a, r => this.isEnabled(r));
            for (let r of s) {
                let {
                    dx: l,
                    dy: d,
                    distance: h
                } = F(r.position, t), p = n.speed * n.factor, u = Y(_e(1 - h / e, n.easing) * p, 0, n.maxSpeed), f = I.create(h === 0 ? p : l / h * u, h === 0 ? p : d / h * u);
                r.position.subFrom(f)
            }
        }
    };
async function Ln(i) {
    await i.addInteractor("externalAttract", t => new Ia(t))
}
var za = class {
        constructor() {
            this.distance = 200
        }
        load(t) {
            t && t.distance !== void 0 && (this.distance = t.distance)
        }
    },
    Ma = class extends U {
        constructor(t) {
            super(t)
        }
        clear() {}
        init() {
            let t = this.container,
                e = t.actualOptions.interactivity.modes.bounce;
            e && (t.retina.bounceModeDistance = e.distance * t.retina.pixelRatio)
        }
        async interact() {
            let t = this.container,
                e = t.actualOptions,
                a = e.interactivity.events,
                o = t.interactivity.status === ct,
                n = a.onHover.enable,
                s = a.onHover.mode,
                r = a.onDiv;
            o && n && G("bounce", s) ? this.processMouseBounce() : Jt("bounce", r, (l, d) => this.singleSelectorBounce(l, d))
        }
        isEnabled(t) {
            var e;
            let a = this.container,
                o = a.actualOptions,
                n = a.interactivity.mouse,
                s = ((e = t?.interactivity) !== null && e !== void 0 ? e : o.interactivity).events,
                r = s.onDiv;
            return n.position && s.onHover.enable && G("bounce", s.onHover.mode) || Qt("bounce", r)
        }
        loadModeOptions(t, ...e) {
            t.bounce || (t.bounce = new za);
            for (let a of e) t.bounce.load(a?.bounce)
        }
        reset() {}
        processBounce(t, e, a) {
            let o = this.container.particles.quadTree.query(a, n => this.isEnabled(n));
            for (let n of o) a instanceof B ? ke(ae(n), {
                position: t,
                radius: e,
                mass: e ** 2 * Math.PI / 2,
                velocity: I.origin,
                factor: I.origin
            }) : a instanceof j && un(n, Ut(t, e))
        }
        processMouseBounce() {
            let t = this.container,
                e = t.retina.pixelRatio,
                a = 10 * e,
                o = t.interactivity.mouse.position,
                n = t.retina.bounceModeDistance;
            !n || n < 0 || !o || this.processBounce(o, n, new B(o.x, o.y, n + a))
        }
        singleSelectorBounce(t, e) {
            let a = this.container,
                o = document.querySelectorAll(t);
            o.length && o.forEach(n => {
                let s = n,
                    r = a.retina.pixelRatio,
                    l = {
                        x: (s.offsetLeft + s.offsetWidth / 2) * r,
                        y: (s.offsetTop + s.offsetHeight / 2) * r
                    },
                    d = s.offsetWidth / 2 * r,
                    h = 10 * r,
                    p = e.type === "circle" ? new B(l.x, l.y, d + h) : new j(s.offsetLeft * r - h, s.offsetTop * r - h, s.offsetWidth * r + 2 * h, s.offsetHeight * r + 2 * h);
                this.processBounce(l, d, p)
            })
        }
    };
async function Fn(i) {
    await i.addInteractor("externalBounce", t => new Ma(t))
}
var Ie = class {
        constructor() {
            this.distance = 200, this.duration = .4, this.mix = !1
        }
        load(t) {
            if (t) {
                if (t.distance !== void 0 && (this.distance = t.distance), t.duration !== void 0 && (this.duration = t.duration), t.mix !== void 0 && (this.mix = t.mix), t.opacity !== void 0 && (this.opacity = t.opacity), t.color !== void 0) {
                    let e = this.color instanceof Array ? void 0 : this.color;
                    this.color = M(t.color, a => z.create(e, a))
                }
                t.size !== void 0 && (this.size = t.size)
            }
        }
    },
    La = class extends Ie {
        constructor() {
            super(), this.selectors = []
        }
        get ids() {
            return M(this.selectors, t => t.replace("#", ""))
        }
        set ids(t) {
            this.selectors = M(t, e => `#${e}`)
        }
        load(t) {
            super.load(t), t && (t.ids !== void 0 && (this.ids = t.ids), t.selectors !== void 0 && (this.selectors = t.selectors))
        }
    },
    Fa = class extends Ie {
        load(t) {
            super.load(t), t && (this.divs = M(t.divs, e => {
                let a = new La;
                return a.load(e), a
            }))
        }
    };

function Dn(i, t, e, a) {
    if (t >= e) {
        let o = i + (t - e) * a;
        return Y(o, i, t)
    }
    if (t < e) {
        let o = i - (e - t) * a;
        return Y(o, t, i)
    }
}
var Da = class extends U {
    constructor(t) {
        super(t), t.bubble || (t.bubble = {}), this.handleClickMode = e => {
            e === "bubble" && (t.bubble || (t.bubble = {}), t.bubble.clicking = !0)
        }
    }
    clear(t, e, a) {
        (!t.bubble.inRange || a) && (delete t.bubble.div, delete t.bubble.opacity, delete t.bubble.radius, delete t.bubble.color)
    }
    init() {
        let t = this.container,
            e = t.actualOptions.interactivity.modes.bubble;
        e && (t.retina.bubbleModeDistance = e.distance * t.retina.pixelRatio, e.size !== void 0 && (t.retina.bubbleModeSize = e.size * t.retina.pixelRatio))
    }
    async interact(t) {
        let e = this.container.actualOptions,
            a = e.interactivity.events,
            o = a.onHover,
            n = a.onClick,
            s = o.enable,
            r = o.mode,
            l = n.enable,
            d = n.mode,
            h = a.onDiv;
        s && G("bubble", r) ? this.hoverBubble(t) : l && G("bubble", d) ? this.clickBubble(t) : Jt("bubble", h, (p, u) => this.singleSelectorHover(t, p, u))
    }
    isEnabled(t) {
        var e;
        let a = this.container,
            o = a.actualOptions,
            n = a.interactivity.mouse,
            s = ((e = t?.interactivity) !== null && e !== void 0 ? e : o.interactivity).events,
            r = s.onDiv,
            l = Qt("bubble", r);
        if (!(l || s.onHover.enable && n.position || s.onClick.enable && n.clickPosition)) return !1;
        let d = s.onHover.mode,
            h = s.onClick.mode;
        return G("bubble", d) || G("bubble", h) || l
    }
    loadModeOptions(t, ...e) {
        t.bubble || (t.bubble = new Fa);
        for (let a of e) t.bubble.load(a?.bubble)
    }
    reset(t) {
        t.bubble.inRange = !1
    }
    clickBubble(t) {
        var e, a;
        let o = this.container,
            n = o.actualOptions,
            s = o.interactivity.mouse.clickPosition,
            r = n.interactivity.modes.bubble;
        if (!r || !s) return;
        o.bubble || (o.bubble = {});
        let l = o.retina.bubbleModeDistance;
        if (!l || l < 0) return;
        let d = o.particles.quadTree.queryCircle(s, l, h => this.isEnabled(h));
        for (let h of d) {
            if (!o.bubble.clicking) continue;
            h.bubble.inRange = !o.bubble.durationEnd;
            let p = h.getPosition(),
                u = L(p, s),
                f = (new Date().getTime() - (o.interactivity.mouse.clickTime || 0)) / 1e3;
            f > r.duration && (o.bubble.durationEnd = !0), f > 2 * r.duration && (o.bubble.clicking = !1, o.bubble.durationEnd = !1);
            let m = {
                bubbleObj: {
                    optValue: o.retina.bubbleModeSize,
                    value: h.bubble.radius
                },
                particlesObj: {
                    optValue: at(h.options.size.value) * o.retina.pixelRatio,
                    value: h.size.value
                },
                type: "size"
            };
            this.process(h, u, f, m);
            let g = {
                bubbleObj: {
                    optValue: r.opacity,
                    value: h.bubble.opacity
                },
                particlesObj: {
                    optValue: at(h.options.opacity.value),
                    value: (a = (e = h.opacity) === null || e === void 0 ? void 0 : e.value) !== null && a !== void 0 ? a : 1
                },
                type: "opacity"
            };
            this.process(h, u, f, g), o.bubble.durationEnd ? delete h.bubble.color : u <= l ? this.hoverBubbleColor(h, u) : delete h.bubble.color
        }
    }
    hoverBubble(t) {
        let e = this.container,
            a = e.interactivity.mouse.position,
            o = e.retina.bubbleModeDistance;
        if (!o || o < 0 || a === void 0) return;
        let n = e.particles.quadTree.queryCircle(a, o, s => this.isEnabled(s));
        for (let s of n) {
            s.bubble.inRange = !0;
            let r = s.getPosition(),
                l = L(r, a),
                d = 1 - l / o;
            l <= o ? d >= 0 && e.interactivity.status === ct && (this.hoverBubbleSize(s, d), this.hoverBubbleOpacity(s, d), this.hoverBubbleColor(s, d)) : this.reset(s), e.interactivity.status === fe && this.reset(s)
        }
    }
    hoverBubbleColor(t, e, a) {
        let o = this.container.actualOptions,
            n = a ?? o.interactivity.modes.bubble;
        if (n) {
            if (!t.bubble.finalColor) {
                let s = n.color;
                if (!s) return;
                let r = X(s);
                t.bubble.finalColor = it(r)
            }
            if (t.bubble.finalColor)
                if (n.mix) {
                    t.bubble.color = void 0;
                    let s = t.getFillColor();
                    t.bubble.color = s ? ia(oe(s, t.bubble.finalColor, 1 - e, e)) : t.bubble.finalColor
                } else t.bubble.color = t.bubble.finalColor
        }
    }
    hoverBubbleOpacity(t, e, a) {
        var o, n, s, r;
        let l = this.container,
            d = l.actualOptions,
            h = (o = a?.opacity) !== null && o !== void 0 ? o : (n = d.interactivity.modes.bubble) === null || n === void 0 ? void 0 : n.opacity;
        if (!h) return;
        let p = t.options.opacity.value,
            u = (r = (s = t.opacity) === null || s === void 0 ? void 0 : s.value) !== null && r !== void 0 ? r : 1,
            f = Dn(u, h, at(p), e);
        f !== void 0 && (t.bubble.opacity = f)
    }
    hoverBubbleSize(t, e, a) {
        let o = this.container,
            n = a?.size ? a.size * o.retina.pixelRatio : o.retina.bubbleModeSize;
        if (n === void 0) return;
        let s = at(t.options.size.value) * o.retina.pixelRatio,
            r = t.size.value,
            l = Dn(r, n, s, e);
        l !== void 0 && (t.bubble.radius = l)
    }
    process(t, e, a, o) {
        let n = this.container,
            s = o.bubbleObj.optValue,
            r = n.actualOptions,
            l = r.interactivity.modes.bubble;
        if (!l || s === void 0) return;
        let d = l.duration,
            h = n.retina.bubbleModeDistance,
            p = o.particlesObj.optValue,
            u = o.bubbleObj.value,
            f = o.particlesObj.value || 0,
            m = o.type;
        if (h && !(h < 0) && s !== p)
            if (n.bubble || (n.bubble = {}), n.bubble.durationEnd) u && (m === "size" && delete t.bubble.radius, m === "opacity" && delete t.bubble.opacity);
            else if (e <= h) {
            if ((u ?? f) !== s) {
                let y = f - a * (f - s) / d;
                m === "size" && (t.bubble.radius = y), m === "opacity" && (t.bubble.opacity = y)
            }
        } else m === "size" && delete t.bubble.radius, m === "opacity" && delete t.bubble.opacity
    }
    singleSelectorHover(t, e, a) {
        let o = this.container,
            n = document.querySelectorAll(e),
            s = o.actualOptions.interactivity.modes.bubble;
        s && n.length && n.forEach(r => {
            let l = r,
                d = o.retina.pixelRatio,
                h = {
                    x: (l.offsetLeft + l.offsetWidth / 2) * d,
                    y: (l.offsetTop + l.offsetHeight / 2) * d
                },
                p = l.offsetWidth / 2 * d,
                u = a.type === "circle" ? new B(h.x, h.y, p) : new j(l.offsetLeft * d, l.offsetTop * d, l.offsetWidth * d, l.offsetHeight * d),
                f = o.particles.quadTree.query(u, m => this.isEnabled(m));
            for (let m of f) {
                if (!u.contains(m.getPosition())) continue;
                m.bubble.inRange = !0;
                let g = s.divs,
                    y = Ce(g, l);
                (!m.bubble.div || m.bubble.div !== l) && (this.clear(m, t, !0), m.bubble.div = l), this.hoverBubbleSize(m, 1, y), this.hoverBubbleOpacity(m, 1, y), this.hoverBubbleColor(m, 1, y)
            }
        })
    }
};
async function Un(i) {
    await i.addInteractor("externalBubble", t => new Da(t))
}
var Ua = class {
        constructor() {
            this.opacity = .5
        }
        load(t) {
            t && t.opacity !== void 0 && (this.opacity = t.opacity)
        }
    },
    Na = class {
        constructor() {
            this.distance = 80, this.links = new Ua, this.radius = 60
        }
        get lineLinked() {
            return this.links
        }
        set lineLinked(t) {
            this.links = t
        }
        get line_linked() {
            return this.links
        }
        set line_linked(t) {
            this.links = t
        }
        load(t) {
            var e, a;
            t && (t.distance !== void 0 && (this.distance = t.distance), this.links.load((a = (e = t.links) !== null && e !== void 0 ? e : t.lineLinked) !== null && a !== void 0 ? a : t.line_linked), t.radius !== void 0 && (this.radius = t.radius))
        }
    };

function al(i, t, e, a) {
    let o = Math.floor(e.getRadius() / t.getRadius()),
        n = t.getFillColor(),
        s = e.getFillColor();
    if (!n || !s) return;
    let r = t.getPosition(),
        l = e.getPosition(),
        d = oe(n, s, t.getRadius(), e.getRadius()),
        h = i.createLinearGradient(r.x, r.y, l.x, l.y);
    return h.addColorStop(0, mt(n, a)), h.addColorStop(o > 1 ? 1 : o, Z(d, a)), h.addColorStop(1, mt(s, a)), h
}

function ol(i, t, e, a, o) {
    i.save(), Mt(i, a, o), i.lineWidth = t, i.strokeStyle = e, i.stroke(), i.restore()
}

function nl(i, t, e, a) {
    let o = i.actualOptions,
        n = o.interactivity.modes.connect;
    if (n) return al(t, e, a, n.links.opacity)
}

function sl(i, t, e) {
    i.canvas.draw(a => {
        var o;
        let n = nl(i, a, t, e);
        if (!n) return;
        let s = t.getPosition(),
            r = e.getPosition();
        ol(a, (o = t.retina.linksWidth) !== null && o !== void 0 ? o : 0, n, s, r)
    })
}
var Ha = class extends U {
    constructor(t) {
        super(t)
    }
    clear() {}
    init() {
        let t = this.container,
            e = t.actualOptions.interactivity.modes.connect;
        e && (t.retina.connectModeDistance = e.distance * t.retina.pixelRatio, t.retina.connectModeRadius = e.radius * t.retina.pixelRatio)
    }
    async interact() {
        let t = this.container;
        if (t.actualOptions.interactivity.events.onHover.enable && t.interactivity.status === "pointermove") {
            let a = t.interactivity.mouse.position;
            if (!t.retina.connectModeDistance || t.retina.connectModeDistance < 0 || !t.retina.connectModeRadius || t.retina.connectModeRadius < 0 || !a) return;
            let o = Math.abs(t.retina.connectModeRadius),
                n = t.particles.quadTree.queryCircle(a, o, r => this.isEnabled(r)),
                s = 0;
            for (let r of n) {
                let l = r.getPosition();
                for (let d of n.slice(s + 1)) {
                    let h = d.getPosition(),
                        p = Math.abs(t.retina.connectModeDistance),
                        u = Math.abs(l.x - h.x),
                        f = Math.abs(l.y - h.y);
                    u < p && f < p && sl(t, r, d)
                }++s
            }
        }
    }
    isEnabled(t) {
        var e;
        let a = this.container,
            o = a.interactivity.mouse,
            n = ((e = t?.interactivity) !== null && e !== void 0 ? e : a.actualOptions.interactivity).events;
        return !(!n.onHover.enable || !o.position) && G("connect", n.onHover.mode)
    }
    loadModeOptions(t, ...e) {
        t.connect || (t.connect = new Na);
        for (let a of e) t.connect.load(a?.connect)
    }
    reset() {}
};
async function Nn(i) {
    await i.addInteractor("externalConnect", t => new Ha(t))
}
var Ba = class {
        constructor() {
            this.blink = !1, this.consent = !1, this.opacity = 1
        }
        load(t) {
            t && (t.blink !== void 0 && (this.blink = t.blink), t.color !== void 0 && (this.color = z.create(this.color, t.color)), t.consent !== void 0 && (this.consent = t.consent), t.opacity !== void 0 && (this.opacity = t.opacity))
        }
    },
    ja = class {
        constructor() {
            this.distance = 100, this.links = new Ba
        }
        get lineLinked() {
            return this.links
        }
        set lineLinked(t) {
            this.links = t
        }
        get line_linked() {
            return this.links
        }
        set line_linked(t) {
            this.links = t
        }
        load(t) {
            var e, a;
            t && (t.distance !== void 0 && (this.distance = t.distance), this.links.load((a = (e = t.links) !== null && e !== void 0 ? e : t.lineLinked) !== null && a !== void 0 ? a : t.line_linked))
        }
    };

function rl(i, t, e, a, o, n) {
    i.save(), Mt(i, e, a), i.strokeStyle = Z(o, n), i.lineWidth = t, i.stroke(), i.restore()
}

function ll(i, t, e, a, o) {
    i.canvas.draw(n => {
        var s;
        let r = t.getPosition();
        rl(n, (s = t.retina.linksWidth) !== null && s !== void 0 ? s : 0, r, o, e, a)
    })
}
var Wa = class extends U {
    constructor(t) {
        super(t)
    }
    clear() {}
    init() {
        let t = this.container,
            e = t.actualOptions.interactivity.modes.grab;
        e && (t.retina.grabModeDistance = e.distance * t.retina.pixelRatio)
    }
    async interact() {
        var t, e;
        let a = this.container,
            o = a.actualOptions,
            n = o.interactivity;
        if (!n.modes.grab || !n.events.onHover.enable || a.interactivity.status !== ct) return;
        let s = a.interactivity.mouse.position;
        if (!s) return;
        let r = a.retina.grabModeDistance;
        if (!r || r < 0) return;
        let l = a.particles.quadTree.queryCircle(s, r, d => this.isEnabled(d));
        for (let d of l) {
            let h = d.getPosition(),
                p = L(h, s);
            if (p > r) continue;
            let u = n.modes.grab.links,
                f = u.opacity,
                m = f - p * f / r;
            if (m <= 0) continue;
            let g = (t = u.color) !== null && t !== void 0 ? t : (e = d.options.links) === null || e === void 0 ? void 0 : e.color;
            if (!a.particles.grabLineColor && g) {
                let w = n.modes.grab.links;
                a.particles.grabLineColor = Oe(g, w.blink, w.consent)
            }
            let y = ne(d, void 0, a.particles.grabLineColor);
            if (!y) return;
            ll(a, d, y, m, s)
        }
    }
    isEnabled(t) {
        var e;
        let a = this.container,
            o = a.interactivity.mouse,
            n = ((e = t?.interactivity) !== null && e !== void 0 ? e : a.actualOptions.interactivity).events;
        return n.onHover.enable && !!o.position && G("grab", n.onHover.mode)
    }
    loadModeOptions(t, ...e) {
        t.grab || (t.grab = new ja);
        for (let a of e) t.grab.load(a?.grab)
    }
    reset() {}
};
async function Hn(i) {
    await i.addInteractor("externalGrab", t => new Wa(t))
}
var qa = class extends U {
    constructor(t) {
        super(t), this.handleClickMode = e => {
            if (e !== "pause") return;
            let a = this.container;
            a.getAnimationStatus() ? a.pause() : a.play()
        }
    }
    clear() {}
    init() {}
    async interact() {}
    isEnabled() {
        return !0
    }
    reset() {}
};

function Bn(i) {
    i.addInteractor("externalPause", t => new qa(t))
}
var Ya = class {
        constructor() {
            this.default = !0, this.groups = [], this.quantity = 4
        }
        get particles_nb() {
            return this.quantity
        }
        set particles_nb(t) {
            this.quantity = t
        }
        load(t) {
            var e;
            if (!t) return;
            t.default !== void 0 && (this.default = t.default), t.groups !== void 0 && (this.groups = t.groups.map(o => o)), this.groups.length || (this.default = !0);
            let a = (e = t.quantity) !== null && e !== void 0 ? e : t.particles_nb;
            a !== void 0 && (this.quantity = a)
        }
    },
    Qa = class extends U {
        constructor(t) {
            super(t), this.handleClickMode = e => {
                if (e !== "push") return;
                let a = this.container,
                    o = a.actualOptions,
                    n = o.interactivity.modes.push;
                if (!n) return;
                let s = n.quantity;
                if (s <= 0) return;
                let r = ht([void 0, ...n.groups]),
                    l = r !== void 0 ? a.actualOptions.particles.groups[r] : void 0;
                a.particles.push(s, a.interactivity.mouse, l, r)
            }
        }
        clear() {}
        init() {}
        async interact() {}
        isEnabled() {
            return !0
        }
        loadModeOptions(t, ...e) {
            t.push || (t.push = new Ya);
            for (let a of e) t.push.load(a?.push)
        }
        reset() {}
    };
async function jn(i) {
    await i.addInteractor("externalPush", t => new Qa(t))
}
var Ja = class {
        constructor() {
            this.quantity = 2
        }
        get particles_nb() {
            return this.quantity
        }
        set particles_nb(t) {
            this.quantity = t
        }
        load(t) {
            var e;
            if (!t) return;
            let a = (e = t.quantity) !== null && e !== void 0 ? e : t.particles_nb;
            a !== void 0 && (this.quantity = a)
        }
    },
    Za = class extends U {
        constructor(t) {
            super(t), this.handleClickMode = e => {
                let a = this.container,
                    o = a.actualOptions;
                if (!o.interactivity.modes.remove || e !== "remove") return;
                let n = o.interactivity.modes.remove.quantity;
                a.particles.removeQuantity(n)
            }
        }
        clear() {}
        init() {}
        async interact() {}
        isEnabled() {
            return !0
        }
        loadModeOptions(t, ...e) {
            t.remove || (t.remove = new Ja);
            for (let a of e) t.remove.load(a?.remove)
        }
        reset() {}
    };

function Wn(i) {
    i.addInteractor("externalRemove", t => new Za(t))
}
var ze = class {
        constructor() {
            this.distance = 200, this.duration = .4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = "ease-out-quad"
        }
        load(t) {
            t && (t.distance !== void 0 && (this.distance = t.distance), t.duration !== void 0 && (this.duration = t.duration), t.easing !== void 0 && (this.easing = t.easing), t.factor !== void 0 && (this.factor = t.factor), t.speed !== void 0 && (this.speed = t.speed), t.maxSpeed !== void 0 && (this.maxSpeed = t.maxSpeed))
        }
    },
    Xa = class extends ze {
        constructor() {
            super(), this.selectors = []
        }
        get ids() {
            return M(this.selectors, t => t.replace("#", ""))
        }
        set ids(t) {
            this.selectors = M(t, e => `#${e}`)
        }
        load(t) {
            super.load(t), t && (t.ids !== void 0 && (this.ids = t.ids), t.selectors !== void 0 && (this.selectors = t.selectors))
        }
    },
    Ka = class extends ze {
        load(t) {
            super.load(t), t && (this.divs = M(t.divs, e => {
                let a = new Xa;
                return a.load(e), a
            }))
        }
    },
    $a = class extends U {
        constructor(t) {
            super(t), t.repulse || (t.repulse = {
                particles: []
            }), this.handleClickMode = e => {
                let a = this.container.actualOptions,
                    o = a.interactivity.modes.repulse;
                if (o && e === "repulse") {
                    t.repulse || (t.repulse = {
                        particles: []
                    }), t.repulse.clicking = !0, t.repulse.count = 0;
                    for (let n of t.repulse.particles) this.isEnabled(n) && n.velocity.setTo(n.initialVelocity);
                    t.repulse.particles = [], t.repulse.finish = !1, setTimeout(() => {
                        t.destroyed || (t.repulse || (t.repulse = {
                            particles: []
                        }), t.repulse.clicking = !1)
                    }, 1e3 * o.duration)
                }
            }
        }
        clear() {}
        init() {
            let t = this.container,
                e = t.actualOptions.interactivity.modes.repulse;
            e && (t.retina.repulseModeDistance = e.distance * t.retina.pixelRatio)
        }
        async interact() {
            let t = this.container,
                e = t.actualOptions,
                a = t.interactivity.status === ct,
                o = e.interactivity.events,
                n = o.onHover.enable,
                s = o.onHover.mode,
                r = o.onClick.enable,
                l = o.onClick.mode,
                d = o.onDiv;
            a && n && G("repulse", s) ? this.hoverRepulse() : r && G("repulse", l) ? this.clickRepulse() : Jt("repulse", d, (h, p) => this.singleSelectorRepulse(h, p))
        }
        isEnabled(t) {
            var e;
            let a = this.container,
                o = a.actualOptions,
                n = a.interactivity.mouse,
                s = ((e = t?.interactivity) !== null && e !== void 0 ? e : o.interactivity).events,
                r = s.onDiv,
                l = Qt("repulse", r);
            if (!(l || s.onHover.enable && n.position || s.onClick.enable && n.clickPosition)) return !1;
            let d = s.onHover.mode,
                h = s.onClick.mode;
            return G("repulse", d) || G("repulse", h) || l
        }
        loadModeOptions(t, ...e) {
            t.repulse || (t.repulse = new Ka);
            for (let a of e) t.repulse.load(a?.repulse)
        }
        reset() {}
        clickRepulse() {
            let t = this.container,
                e = t.actualOptions.interactivity.modes.repulse;
            if (e) {
                if (t.repulse || (t.repulse = {
                        particles: []
                    }), t.repulse.finish || (t.repulse.count || (t.repulse.count = 0), t.repulse.count++, t.repulse.count === t.particles.count && (t.repulse.finish = !0)), t.repulse.clicking) {
                    let a = t.retina.repulseModeDistance;
                    if (!a || a < 0) return;
                    let o = Math.pow(a / 6, 3),
                        n = t.interactivity.mouse.clickPosition;
                    if (n === void 0) return;
                    let s = new B(n.x, n.y, o),
                        r = t.particles.quadTree.query(s, l => this.isEnabled(l));
                    for (let l of r) {
                        let {
                            dx: d,
                            dy: h,
                            distance: p
                        } = F(n, l.position), u = p ** 2, f = e.speed, m = -o * f / u;
                        if (u <= o) {
                            t.repulse.particles.push(l);
                            let g = I.create(d, h);
                            g.length = m, l.velocity.setTo(g)
                        }
                    }
                } else if (t.repulse.clicking === !1) {
                    for (let a of t.repulse.particles) a.velocity.setTo(a.initialVelocity);
                    t.repulse.particles = []
                }
            }
        }
        hoverRepulse() {
            let t = this.container,
                e = t.interactivity.mouse.position,
                a = t.retina.repulseModeDistance;
            !a || a < 0 || !e || this.processRepulse(e, a, new B(e.x, e.y, a))
        }
        processRepulse(t, e, a, o) {
            var n;
            let s = this.container,
                r = s.particles.quadTree.query(a, d => this.isEnabled(d)),
                l = s.actualOptions.interactivity.modes.repulse;
            if (l)
                for (let d of r) {
                    let {
                        dx: h,
                        dy: p,
                        distance: u
                    } = F(d.position, t), f = ((n = o?.speed) !== null && n !== void 0 ? n : l.speed) * l.factor, m = Y(_e(1 - u / e, l.easing) * f, 0, l.maxSpeed), g = I.create(u === 0 ? f : h / u * m, u === 0 ? f : p / u * m);
                    d.position.addTo(g)
                }
        }
        singleSelectorRepulse(t, e) {
            let a = this.container,
                o = a.actualOptions.interactivity.modes.repulse;
            if (!o) return;
            let n = document.querySelectorAll(t);
            n.length && n.forEach(s => {
                let r = s,
                    l = a.retina.pixelRatio,
                    d = {
                        x: (r.offsetLeft + r.offsetWidth / 2) * l,
                        y: (r.offsetTop + r.offsetHeight / 2) * l
                    },
                    h = r.offsetWidth / 2 * l,
                    p = e.type === "circle" ? new B(d.x, d.y, h) : new j(r.offsetLeft * l, r.offsetTop * l, r.offsetWidth * l, r.offsetHeight * l),
                    u = o.divs,
                    f = Ce(u, r);
                this.processRepulse(d, h, p, f)
            })
        }
    };
async function qn(i) {
    await i.addInteractor("externalRepulse", t => new $a(t))
}
var to = class {
        constructor() {
            this.factor = 3, this.radius = 200
        }
        load(t) {
            t && (t.factor !== void 0 && (this.factor = t.factor), t.radius !== void 0 && (this.radius = t.radius))
        }
    },
    eo = class extends U {
        constructor(t) {
            super(t)
        }
        clear(t, e, a) {
            t.slow.inRange && !a || (t.slow.factor = 1)
        }
        init() {
            let t = this.container,
                e = t.actualOptions.interactivity.modes.slow;
            e && (t.retina.slowModeRadius = e.radius * t.retina.pixelRatio)
        }
        async interact() {}
        isEnabled(t) {
            var e;
            let a = this.container,
                o = a.interactivity.mouse,
                n = ((e = t?.interactivity) !== null && e !== void 0 ? e : a.actualOptions.interactivity).events;
            return n.onHover.enable && !!o.position && G("slow", n.onHover.mode)
        }
        loadModeOptions(t, ...e) {
            t.slow || (t.slow = new to);
            for (let a of e) t.slow.load(a?.slow)
        }
        reset(t) {
            t.slow.inRange = !1;
            let e = this.container,
                a = e.actualOptions,
                o = e.interactivity.mouse.position,
                n = e.retina.slowModeRadius,
                s = a.interactivity.modes.slow;
            if (!s || !n || n < 0 || !o) return;
            let r = t.getPosition(),
                l = L(o, r),
                d = l / n,
                h = s.factor;
            l <= n && (t.slow.inRange = !0, t.slow.factor = d / h)
        }
    };
async function Yn(i) {
    await i.addInteractor("externalSlow", t => new eo(t))
}
var cl = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;

function dl(i, t, e) {
    let {
        svgData: a
    } = i;
    if (!a) return "";
    let o = mt(t, e);
    if (a.includes("fill")) return a.replace(cl, () => o);
    let n = a.indexOf(">");
    return `${a.substring(0,n)} fill="${o}"${a.substring(n)}`
}
async function ao(i) {
    return new Promise(t => {
        i.loading = !0;
        let e = new Image;
        i.element = e, e.addEventListener("load", () => {
            i.loading = !1, t()
        }), e.addEventListener("error", () => {
            i.element = void 0, i.error = !0, i.loading = !1, console.error(`Error tsParticles - loading image: ${i.source}`), t()
        }), e.src = i.source
    })
}
async function hl(i) {
    if (i.type !== "svg") {
        await ao(i);
        return
    }
    i.loading = !0;
    let t = await fetch(i.source);
    t.ok || (console.error("Error tsParticles - Image not found"), i.error = !0), i.error || (i.svgData = await t.text()), i.loading = !1
}

function ul(i, t, e, a) {
    var o, n, s;
    let r = dl(i, e, (n = (o = a.opacity) === null || o === void 0 ? void 0 : o.value) !== null && n !== void 0 ? n : 1),
        l = {
            color: e,
            data: Object.assign(Object.assign({}, i), {
                svgData: r
            }),
            loaded: !1,
            ratio: t.width / t.height,
            replaceColor: (s = t.replaceColor) !== null && s !== void 0 ? s : t.replace_color,
            source: t.src
        };
    return new Promise(d => {
        let h = new Blob([r], {
                type: "image/svg+xml"
            }),
            p = URL || c.URL || c.webkitURL || c,
            u = p.createObjectURL(h),
            f = new Image;
        f.addEventListener("load", () => {
            l.loaded = !0, l.element = f, d(l), p.revokeObjectURL(u)
        }), f.addEventListener("error", async () => {
            p.revokeObjectURL(u);
            let m = Object.assign(Object.assign({}, i), {
                error: !1,
                loading: !0
            });
            await ao(m), l.loaded = !0, l.element = m.element, d(l)
        }), f.src = u
    })
}
var io = class {
    constructor() {
        this._images = []
    }
    addImage(t, e) {
        let a = this.getImages(t);
        a?.images.push(e)
    }
    destroy() {
        this._images = []
    }
    draw(t, e, a, o) {
        var n;
        let s = e.image,
            r = s?.element;
        if (!r) return;
        let l = (n = s?.ratio) !== null && n !== void 0 ? n : 1,
            d = {
                x: -a,
                y: -a
            };
        t.globalAlpha = o, t.drawImage(r, d.x, d.y, 2 * a, 2 * a / l), t.globalAlpha = 1
    }
    getImages(t) {
        let e = this._images.find(a => a.id === t.id);
        return e || (this._images.push({
            id: t.id,
            images: []
        }), this.getImages(t))
    }
    getSidesCount() {
        return 12
    }
    loadShape(t) {
        if (t.shape !== "image" && t.shape !== "images") return;
        let e = t.container,
            a = this.getImages(e).images,
            o = t.shapeData,
            n = a.find(s => s.source === o.src);
        n ? n.error : this.loadImageShape(e, o).then(() => {
            this.loadShape(t)
        })
    }
    particleInit(t, e) {
        var a;
        if (e.shape !== "image" && e.shape !== "images") return;
        let o = this.getImages(t).images,
            n = e.shapeData,
            s = e.getFillColor(),
            r = (a = n.replaceColor) !== null && a !== void 0 ? a : n.replace_color,
            l = o.find(d => d.source === n.src);
        l && (l.loading ? setTimeout(() => {
            this.particleInit(t, e)
        }) : (async () => {
            var d, h;
            let p;
            p = l.svgData && r && s ? await ul(l, n, s, e) : {
                color: s,
                data: l,
                element: l.element,
                loaded: !0,
                ratio: n.width / n.height,
                replaceColor: r,
                source: n.src
            }, p.ratio || (p.ratio = 1);
            let u = (d = n.fill) !== null && d !== void 0 ? d : e.fill,
                f = (h = n.close) !== null && h !== void 0 ? h : e.close,
                m = {
                    image: p,
                    fill: u,
                    close: f
                };
            e.image = m.image, e.fill = m.fill, e.close = m.close
        })())
    }
    async loadImageShape(t, e) {
        var a;
        let o = e.src;
        if (!o) throw new Error("Error tsParticles - No image.src");
        try {
            let n = {
                source: o,
                type: o.substring(o.length - 3),
                error: !1,
                loading: !0
            };
            this.addImage(t, n), await (((a = e.replaceColor) !== null && a !== void 0 ? a : e.replace_color) ? hl : ao)(n)
        } catch {
            throw new Error(`tsParticles error - ${e.src} not found`)
        }
    }
};
async function Qn(i) {
    let t = new io;
    await i.addShape("image", t), await i.addShape("images", t)
}
var oo = class extends tt {
        constructor() {
            super(), this.sync = !1
        }
        load(t) {
            t && (super.load(t), t.sync !== void 0 && (this.sync = t.sync))
        }
    },
    no = class extends tt {
        constructor() {
            super(), this.random.minimumValue = 1e-4, this.sync = !1
        }
        load(t) {
            t && (super.load(t), t.sync !== void 0 && (this.sync = t.sync))
        }
    },
    so = class {
        constructor() {
            this.count = 0, this.delay = new oo, this.duration = new no
        }
        load(t) {
            t && (t.count !== void 0 && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration))
        }
    },
    ro = class {
        constructor(t) {
            this.container = t
        }
        init(t) {
            let e = this.container,
                a = t.options,
                o = a.life;
            o && (t.life = {
                delay: e.retina.reduceFactor ? P(o.delay.value) * (o.delay.sync ? 1 : C()) / e.retina.reduceFactor * 1e3 : 0,
                delayTime: 0,
                duration: e.retina.reduceFactor ? P(o.duration.value) * (o.duration.sync ? 1 : C()) / e.retina.reduceFactor * 1e3 : 0,
                time: 0,
                count: o.count
            }, t.life.duration <= 0 && (t.life.duration = -1), t.life.count <= 0 && (t.life.count = -1), t.life && (t.spawning = t.life.delay > 0))
        }
        isEnabled(t) {
            return !t.destroyed
        }
        loadOptions(t, ...e) {
            t.life || (t.life = new so);
            for (let a of e) t.life.load(a?.life)
        }
        update(t, e) {
            if (!this.isEnabled(t) || !t.life) return;
            let a = t.life,
                o = !1;
            if (t.spawning) {
                if (a.delayTime += e.value, !(a.delayTime >= t.life.delay)) return;
                o = !0, t.spawning = !1, a.delayTime = 0, a.time = 0
            }
            if (a.duration === -1 || t.spawning || (o ? a.time = 0 : a.time += e.value, a.time < a.duration)) return;
            if (a.time = 0, t.life.count > 0 && t.life.count--, t.life.count === 0) {
                t.destroy();
                return
            }
            let n = this.container.canvas.size,
                s = k(0, n.width),
                r = k(0, n.width);
            t.position.x = H(s), t.position.y = H(r), t.spawning = !0, a.delayTime = 0, a.time = 0, t.reset();
            let l = t.options.life;
            l && (a.delay = 1e3 * P(l.delay.value), a.duration = 1e3 * P(l.duration.value))
        }
    };
async function Jn(i) {
    await i.addParticleUpdater("life", t => new ro(t))
}
var lo = class {
    draw(t, e, a) {
        t.moveTo(-a / 2, 0), t.lineTo(a / 2, 0)
    }
    getSidesCount() {
        return 1
    }
};
async function Zn(i) {
    await i.addShape("line", new lo)
}

function pl(i, t, e, a) {
    switch (i.options.opacity.animation.destroy) {
        case "max":
            t >= a && i.destroy();
            break;
        case "min":
            t <= e && i.destroy();
            break
    }
}

function fl(i, t) {
    var e, a, o, n, s, r;
    if (!i.opacity) return;
    let l = i.opacity.min,
        d = i.opacity.max,
        h = (e = i.opacity.decay) !== null && e !== void 0 ? e : 1;
    if (!(i.destroyed || !i.opacity.enable || ((a = i.opacity.maxLoops) !== null && a !== void 0 ? a : 0) > 0 && ((o = i.opacity.loops) !== null && o !== void 0 ? o : 0) > ((n = i.opacity.maxLoops) !== null && n !== void 0 ? n : 0))) {
        switch (i.opacity.status) {
            case 0:
                i.opacity.value >= d ? (i.opacity.status = 1, i.opacity.loops || (i.opacity.loops = 0), i.opacity.loops++) : i.opacity.value += ((s = i.opacity.velocity) !== null && s !== void 0 ? s : 0) * t.factor;
                break;
            case 1:
                i.opacity.value <= l ? (i.opacity.status = 0, i.opacity.loops || (i.opacity.loops = 0), i.opacity.loops++) : i.opacity.value -= ((r = i.opacity.velocity) !== null && r !== void 0 ? r : 0) * t.factor;
                break
        }
        i.opacity.velocity && i.opacity.decay !== 1 && (i.opacity.velocity *= h), pl(i, i.opacity.value, l, d), i.destroyed || (i.opacity.value = Y(i.opacity.value, l, d))
    }
}
var co = class {
    constructor(t) {
        this.container = t
    }
    init(t) {
        let e = t.options.opacity;
        t.opacity = {
            enable: e.animation.enable,
            max: at(e.value),
            min: Dt(e.value),
            value: P(e.value),
            loops: 0,
            maxLoops: P(e.animation.count)
        };
        let a = e.animation;
        if (a.enable) {
            t.opacity.decay = 1 - P(a.decay), t.opacity.status = 0;
            let o = e.value;
            switch (t.opacity.min = Dt(o), t.opacity.max = at(o), a.startValue) {
                case "min":
                    t.opacity.value = t.opacity.min, t.opacity.status = 0;
                    break;
                case "random":
                    t.opacity.value = H(t.opacity), t.opacity.status = C() >= .5 ? 0 : 1;
                    break;
                case "max":
                default:
                    t.opacity.value = t.opacity.max, t.opacity.status = 1;
                    break
            }
            t.opacity.velocity = P(a.speed) / 100 * this.container.retina.reduceFactor, a.sync || (t.opacity.velocity *= C())
        }
    }
    isEnabled(t) {
        var e, a, o, n;
        return !t.destroyed && !t.spawning && !!t.opacity && t.opacity.enable && (((e = t.opacity.maxLoops) !== null && e !== void 0 ? e : 0) <= 0 || ((a = t.opacity.maxLoops) !== null && a !== void 0 ? a : 0) > 0 && ((o = t.opacity.loops) !== null && o !== void 0 ? o : 0) < ((n = t.opacity.maxLoops) !== null && n !== void 0 ? n : 0))
    }
    update(t, e) {
        this.isEnabled(t) && fl(t, e)
    }
};
async function Xn(i) {
    await i.addParticleUpdater("opacity", t => new co(t))
}

function ml(i) {
    if (i.outMode !== "bounce" && i.outMode !== "bounce-horizontal" && i.outMode !== "bounceHorizontal" && i.outMode !== "split") return;
    i.bounds.right < 0 ? i.particle.position.x = i.size + i.offset.x : i.bounds.left > i.canvasSize.width && (i.particle.position.x = i.canvasSize.width - i.size - i.offset.x);
    let t = i.particle.velocity.x,
        e = !1;
    if (i.direction === "right" && i.bounds.right >= i.canvasSize.width && t > 0 || i.direction === "left" && i.bounds.left <= 0 && t < 0) {
        let o = Tt(i.particle.options.bounce.horizontal);
        i.particle.velocity.x *= -o, e = !0
    }
    if (!e) return;
    let a = i.offset.x + i.size;
    i.bounds.right >= i.canvasSize.width ? i.particle.position.x = i.canvasSize.width - a : i.bounds.left <= 0 && (i.particle.position.x = a), i.outMode === "split" && i.particle.destroy()
}

function vl(i) {
    if (i.outMode !== "bounce" && i.outMode !== "bounce-vertical" && i.outMode !== "bounceVertical" && i.outMode !== "split") return;
    i.bounds.bottom < 0 ? i.particle.position.y = i.size + i.offset.y : i.bounds.top > i.canvasSize.height && (i.particle.position.y = i.canvasSize.height - i.size - i.offset.y);
    let t = i.particle.velocity.y,
        e = !1;
    if (i.direction === "bottom" && i.bounds.bottom >= i.canvasSize.height && t > 0 || i.direction === "top" && i.bounds.top <= 0 && t < 0) {
        let o = Tt(i.particle.options.bounce.vertical);
        i.particle.velocity.y *= -o, e = !0
    }
    if (!e) return;
    let a = i.offset.y + i.size;
    i.bounds.bottom >= i.canvasSize.height ? i.particle.position.y = i.canvasSize.height - a : i.bounds.top <= 0 && (i.particle.position.y = a), i.outMode === "split" && i.particle.destroy()
}
var ho = class {
        constructor(t) {
            this.container = t, this.modes = ["bounce", "bounce-vertical", "bounce-horizontal", "bounceVertical", "bounceHorizontal", "split"]
        }
        update(t, e, a, o) {
            if (!this.modes.includes(o)) return;
            let n = this.container,
                s = !1;
            for (let [, u] of n.plugins)
                if (u.particleBounce !== void 0 && (s = u.particleBounce(t, a, e)), s) break;
            if (s) return;
            let r = t.getPosition(),
                l = t.offset,
                d = t.getRadius(),
                h = Ut(r, d),
                p = n.canvas.size;
            ml({
                particle: t,
                outMode: o,
                direction: e,
                bounds: h,
                canvasSize: p,
                offset: l,
                size: d
            }), vl({
                particle: t,
                outMode: o,
                direction: e,
                bounds: h,
                canvasSize: p,
                offset: l,
                size: d
            })
        }
    },
    uo = class {
        constructor(t) {
            this.container = t, this.modes = ["destroy"]
        }
        update(t, e, a, o) {
            if (!this.modes.includes(o)) return;
            let n = this.container;
            switch (t.outType) {
                case "normal":
                case "outside":
                    if (zt(t.position, n.canvas.size, I.origin, t.getRadius(), e)) return;
                    break;
                case "inside": {
                    let {
                        dx: s,
                        dy: r
                    } = F(t.position, t.moveCenter), {
                        x: l,
                        y: d
                    } = t.velocity;
                    if (l < 0 && s > t.moveCenter.radius || d < 0 && r > t.moveCenter.radius || l >= 0 && s < -t.moveCenter.radius || d >= 0 && r < -t.moveCenter.radius) return;
                    break
                }
            }
            n.particles.remove(t, void 0, !0)
        }
    },
    po = class {
        constructor(t) {
            this.container = t, this.modes = ["none"]
        }
        update(t, e, a, o) {
            if (!this.modes.includes(o) || t.options.move.distance.horizontal && (e === "left" || e === "right") || t.options.move.distance.vertical && (e === "top" || e === "bottom")) return;
            let n = t.options.move.gravity,
                s = this.container,
                r = s.canvas.size,
                l = t.getRadius();
            if (n.enable) {
                let d = t.position;
                (!n.inverse && d.y > r.height + l && e === "bottom" || n.inverse && d.y < -l && e === "top") && s.particles.remove(t)
            } else {
                if (t.velocity.y > 0 && t.position.y <= r.height + l || t.velocity.y < 0 && t.position.y >= -l || t.velocity.x > 0 && t.position.x <= r.width + l || t.velocity.x < 0 && t.position.x >= -l) return;
                zt(t.position, s.canvas.size, I.origin, l, e) || s.particles.remove(t)
            }
        }
    },
    fo = class {
        constructor(t) {
            this.container = t, this.modes = ["out"]
        }
        update(t, e, a, o) {
            if (!this.modes.includes(o)) return;
            let n = this.container;
            switch (t.outType) {
                case "inside": {
                    let {
                        x: s,
                        y: r
                    } = t.velocity, l = I.origin;
                    l.length = t.moveCenter.radius, l.angle = t.velocity.angle + Math.PI, l.addTo(I.create(t.moveCenter));
                    let {
                        dx: d,
                        dy: h
                    } = F(t.position, l);
                    if (s <= 0 && d >= 0 || r <= 0 && h >= 0 || s >= 0 && d <= 0 || r >= 0 && h <= 0) return;
                    t.position.x = Math.floor(H({
                        min: 0,
                        max: n.canvas.size.width
                    })), t.position.y = Math.floor(H({
                        min: 0,
                        max: n.canvas.size.height
                    }));
                    let {
                        dx: p,
                        dy: u
                    } = F(t.position, t.moveCenter);
                    t.direction = Math.atan2(-u, -p), t.velocity.angle = t.direction;
                    break
                }
                default:
                    if (zt(t.position, n.canvas.size, I.origin, t.getRadius(), e)) return;
                    switch (t.outType) {
                        case "outside": {
                            t.position.x = Math.floor(H({
                                min: -t.moveCenter.radius,
                                max: t.moveCenter.radius
                            })) + t.moveCenter.x, t.position.y = Math.floor(H({
                                min: -t.moveCenter.radius,
                                max: t.moveCenter.radius
                            })) + t.moveCenter.y;
                            let {
                                dx: s,
                                dy: r
                            } = F(t.position, t.moveCenter);
                            t.moveCenter.radius && (t.direction = Math.atan2(r, s), t.velocity.angle = t.direction);
                            break
                        }
                        case "normal": {
                            let s = t.options.move.warp,
                                r = n.canvas.size,
                                l = {
                                    bottom: r.height + t.getRadius() + t.offset.y,
                                    left: -t.getRadius() - t.offset.x,
                                    right: r.width + t.getRadius() + t.offset.x,
                                    top: -t.getRadius() - t.offset.y
                                },
                                d = t.getRadius(),
                                h = Ut(t.position, d);
                            e === "right" && h.left > r.width + t.offset.x ? (t.position.x = l.left, t.initialPosition.x = t.position.x, s || (t.position.y = C() * r.height, t.initialPosition.y = t.position.y)) : e === "left" && h.right < -t.offset.x && (t.position.x = l.right, t.initialPosition.x = t.position.x, s || (t.position.y = C() * r.height, t.initialPosition.y = t.position.y)), e === "bottom" && h.top > r.height + t.offset.y ? (s || (t.position.x = C() * r.width, t.initialPosition.x = t.position.x), t.position.y = l.top, t.initialPosition.y = t.position.y) : e === "top" && h.bottom < -t.offset.y && (s || (t.position.x = C() * r.width, t.initialPosition.x = t.position.x), t.position.y = l.bottom, t.initialPosition.y = t.position.y);
                            break
                        }
                    }
                    break
            }
        }
    },
    mo = class {
        constructor(t) {
            this.container = t, this.updaters = [new ho(t), new uo(t), new fo(t), new po(t)]
        }
        init() {}
        isEnabled(t) {
            return !t.destroyed && !t.spawning
        }
        update(t, e) {
            var a, o, n, s;
            let r = t.options.move.outModes;
            this.updateOutMode(t, e, (a = r.bottom) !== null && a !== void 0 ? a : r.default, "bottom"), this.updateOutMode(t, e, (o = r.left) !== null && o !== void 0 ? o : r.default, "left"), this.updateOutMode(t, e, (n = r.right) !== null && n !== void 0 ? n : r.default, "right"), this.updateOutMode(t, e, (s = r.top) !== null && s !== void 0 ? s : r.default, "top")
        }
        updateOutMode(t, e, a, o) {
            for (let n of this.updaters) n.update(t, o, e, a)
        }
    };
async function Kn(i) {
    await i.addParticleUpdater("outModes", t => new mo(t))
}
var vo = class {
    init() {}
    isEnabled(t) {
        return !Gt() && !t.destroyed && t.container.actualOptions.interactivity.events.onHover.parallax.enable
    }
    move(t) {
        let e = t.container,
            a = e.actualOptions;
        if (Gt() || !a.interactivity.events.onHover.parallax.enable) return;
        let o = a.interactivity.events.onHover.parallax.force,
            n = e.interactivity.mouse.position;
        if (!n) return;
        let s = {
                x: e.canvas.size.width / 2,
                y: e.canvas.size.height / 2
            },
            r = a.interactivity.events.onHover.parallax.smooth,
            l = t.getRadius() / o,
            d = {
                x: (n.x - s.x) * l,
                y: (n.y - s.y) * l
            };
        t.offset.x += (d.x - t.offset.x) / r, t.offset.y += (d.y - t.offset.y) / r
    }
};
async function $n(i) {
    i.addMover("parallax", () => new vo)
}
var go = class extends It {
    constructor(t) {
        super(t)
    }
    clear() {}
    init() {}
    async interact(t) {
        var e;
        let a = this.container,
            o = (e = t.retina.attractDistance) !== null && e !== void 0 ? e : a.retina.attractDistance,
            n = t.getPosition(),
            s = a.particles.quadTree.queryCircle(n, o);
        for (let r of s) {
            if (t === r || !r.options.move.attract.enable || r.destroyed || r.spawning) continue;
            let l = r.getPosition(),
                {
                    dx: d,
                    dy: h
                } = F(n, l),
                p = t.options.move.attract.rotate,
                u = d / (1e3 * p.x),
                f = h / (1e3 * p.y),
                m = r.size.value / t.size.value,
                g = 1 / m;
            t.velocity.x -= u * m, t.velocity.y -= f * m, r.velocity.x += u * g, r.velocity.y += f * g
        }
    }
    isEnabled(t) {
        return t.options.move.attract.enable
    }
    reset() {}
};
async function ts(i) {
    await i.addInteractor("particlesAttract", t => new go(t))
}

function gl(i, t, e, a) {
    if (i.getRadius() === void 0 && t.getRadius() !== void 0) i.destroy();
    else if (i.getRadius() !== void 0 && t.getRadius() === void 0) t.destroy();
    else if (i.getRadius() !== void 0 && t.getRadius() !== void 0)
        if (i.getRadius() >= t.getRadius()) {
            let o = Y(i.getRadius() / t.getRadius(), 0, t.getRadius()) * e;
            i.size.value += o, t.size.value -= o, t.getRadius() <= a && (t.size.value = 0, t.destroy())
        } else {
            let o = Y(t.getRadius() / i.getRadius(), 0, i.getRadius()) * e;
            i.size.value -= o, t.size.value += o, i.getRadius() <= a && (i.size.value = 0, i.destroy())
        }
}

function es(i, t) {
    ke(ae(i), ae(t))
}

function yl(i, t) {
    i.unbreakable || t.unbreakable || es(i, t), i.getRadius() === void 0 && t.getRadius() !== void 0 ? i.destroy() : i.getRadius() !== void 0 && t.getRadius() === void 0 ? t.destroy() : i.getRadius() !== void 0 && t.getRadius() !== void 0 && (i.getRadius() >= t.getRadius() ? t.destroy() : i.destroy())
}

function bl(i, t, e, a) {
    switch (i.options.collisions.mode) {
        case "absorb":
            gl(i, t, e, a);
            break;
        case "bounce":
            es(i, t);
            break;
        case "destroy":
            yl(i, t);
            break
    }
}
var yo = class extends It {
    constructor(t) {
        super(t)
    }
    clear() {}
    init() {}
    async interact(t) {
        let e = this.container,
            a = t.getPosition(),
            o = t.getRadius(),
            n = e.particles.quadTree.queryCircle(a, 2 * o);
        for (let s of n) {
            if (t === s || !s.options.collisions.enable || t.options.collisions.mode !== s.options.collisions.mode || s.destroyed || s.spawning) continue;
            let r = s.getPosition(),
                l = s.getRadius();
            if (Math.abs(Math.round(a.z) - Math.round(r.z)) > o + l) continue;
            let d = L(a, r),
                h = o + l;
            d > h || bl(t, s, e.fpsLimit / 1e3, e.retina.pixelRatio)
        }
    }
    isEnabled(t) {
        return t.options.collisions.enable
    }
    reset() {}
};
async function is(i) {
    await i.addInteractor("particlesCollisions", t => new yo(t))
}
var bo = class extends B {
        constructor(t, e, a, o) {
            super(t, e, a), this.canvasSize = o, this.canvasSize = Object.assign({}, o)
        }
        contains(t) {
            if (super.contains(t)) return !0;
            let e = {
                x: t.x - this.canvasSize.width,
                y: t.y
            };
            if (super.contains(e)) return !0;
            let a = {
                x: t.x - this.canvasSize.width,
                y: t.y - this.canvasSize.height
            };
            if (super.contains(a)) return !0;
            let o = {
                x: t.x,
                y: t.y - this.canvasSize.height
            };
            return super.contains(o)
        }
        intersects(t) {
            if (super.intersects(t)) return !0;
            let e = t,
                a = t,
                o = {
                    x: t.position.x - this.canvasSize.width,
                    y: t.position.y - this.canvasSize.height
                };
            if (a.radius !== void 0) {
                let n = new B(o.x, o.y, 2 * a.radius);
                return super.intersects(n)
            }
            if (e.size !== void 0) {
                let n = new j(o.x, o.y, 2 * e.size.width, 2 * e.size.height);
                return super.intersects(n)
            }
            return !1
        }
    },
    So = class {
        constructor() {
            this.blur = 5, this.color = new z, this.color.value = "#000", this.enable = !1
        }
        load(t) {
            t && (t.blur !== void 0 && (this.blur = t.blur), this.color = z.create(this.color, t.color), t.enable !== void 0 && (this.enable = t.enable))
        }
    },
    xo = class {
        constructor() {
            this.enable = !1, this.frequency = 1
        }
        load(t) {
            t && (t.color !== void 0 && (this.color = z.create(this.color, t.color)), t.enable !== void 0 && (this.enable = t.enable), t.frequency !== void 0 && (this.frequency = t.frequency), t.opacity !== void 0 && (this.opacity = t.opacity))
        }
    },
    wo = class {
        constructor() {
            this.blink = !1, this.color = new z, this.color.value = "#fff", this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new So, this.triangles = new xo, this.width = 1, this.warp = !1
        }
        load(t) {
            t && (t.id !== void 0 && (this.id = t.id), t.blink !== void 0 && (this.blink = t.blink), this.color = z.create(this.color, t.color), t.consent !== void 0 && (this.consent = t.consent), t.distance !== void 0 && (this.distance = t.distance), t.enable !== void 0 && (this.enable = t.enable), t.frequency !== void 0 && (this.frequency = t.frequency), t.opacity !== void 0 && (this.opacity = t.opacity), this.shadow.load(t.shadow), this.triangles.load(t.triangles), t.width !== void 0 && (this.width = t.width), t.warp !== void 0 && (this.warp = t.warp))
        }
    };

function Sl(i, t, e, a, o) {
    let n = L(i, t);
    if (!o || n <= e) return n;
    let s = {
        x: t.x - a.width,
        y: t.y
    };
    if (n = L(i, s), n <= e) return n;
    let r = {
        x: t.x - a.width,
        y: t.y - a.height
    };
    if (n = L(i, r), n <= e) return n;
    let l = {
        x: t.x,
        y: t.y - a.height
    };
    return n = L(i, l), n
}
var _o = class extends It {
    constructor(t) {
        super(t), this.linkContainer = t
    }
    clear() {}
    init() {
        this.linkContainer.particles.linksColors = new Map
    }
    async interact(t) {
        var e;
        if (!t.options.links) return;
        t.links = [];
        let a = t.getPosition(),
            o = this.container,
            n = o.canvas.size;
        if (a.x < 0 || a.y < 0 || a.x > n.width || a.y > n.height) return;
        let s = t.options.links,
            r = s.opacity,
            l = (e = t.retina.linksDistance) !== null && e !== void 0 ? e : 0,
            d = s.warp,
            h = d ? new bo(a.x, a.y, l, n) : new B(a.x, a.y, l),
            p = o.particles.quadTree.query(h);
        for (let u of p) {
            let f = u.options.links;
            if (t === u || !f?.enable || s.id !== f.id || u.spawning || u.destroyed || !u.links || t.links.map(w => w.destination).indexOf(u) !== -1 || u.links.map(w => w.destination).indexOf(t) !== -1) continue;
            let m = u.getPosition();
            if (m.x < 0 || m.y < 0 || m.x > n.width || m.y > n.height) continue;
            let g = Sl(a, m, l, n, d && f.warp);
            if (g > l) return;
            let y = (1 - g / l) * r;
            this.setColor(t), t.links.push({
                destination: u,
                opacity: y
            })
        }
    }
    isEnabled(t) {
        var e;
        return !!(!((e = t.options.links) === null || e === void 0) && e.enable)
    }
    loadParticlesOptions(t, ...e) {
        var a, o;
        t.links || (t.links = new wo);
        for (let n of e) t.links.load((o = (a = n?.links) !== null && a !== void 0 ? a : n?.lineLinked) !== null && o !== void 0 ? o : n?.line_linked)
    }
    reset() {}
    setColor(t) {
        if (!t.options.links) return;
        let e = this.linkContainer,
            a = t.options.links,
            o = a.id === void 0 ? e.particles.linksColor : e.particles.linksColors.get(a.id);
        if (o) return;
        let n = a.color;
        o = Oe(n, a.blink, a.consent), a.id === void 0 ? e.particles.linksColor = o : e.particles.linksColors.set(a.id, o)
    }
};
async function xl(i) {
    await i.addInteractor("particlesLinks", t => new _o(t))
}

function wl(i, t, e, a, o, n, s, r, l, d, h, p) {
    let u = !1;
    if (L(e, a) <= o) Mt(i, e, a), u = !0;
    else if (s) {
        let f, m, g = {
                x: a.x - n.width,
                y: a.y
            },
            y = F(e, g);
        if (y.distance <= o) {
            let w = e.y - y.dy / y.dx * e.x;
            f = {
                x: 0,
                y: w
            }, m = {
                x: n.width,
                y: w
            }
        } else {
            let w = {
                    x: a.x,
                    y: a.y - n.height
                },
                x = F(e, w);
            if (x.distance <= o) {
                let E = -(e.y - x.dy / x.dx * e.x) / (x.dy / x.dx);
                f = {
                    x: E,
                    y: 0
                }, m = {
                    x: E,
                    y: n.height
                }
            } else {
                let A = {
                        x: a.x - n.width,
                        y: a.y - n.height
                    },
                    E = F(e, A);
                if (E.distance <= o) {
                    let R = e.y - E.dy / E.dx * e.x;
                    f = {
                        x: -R / (E.dy / E.dx),
                        y: R
                    }, m = {
                        x: f.x + n.width,
                        y: f.y + n.height
                    }
                }
            }
        }
        f && m && (Mt(i, e, f), Mt(i, a, m), u = !0)
    }
    if (u) {
        if (i.lineWidth = t, r && (i.globalCompositeOperation = l), i.strokeStyle = Z(d, h), p.enable) {
            let f = J(p.color);
            f && (i.shadowBlur = p.blur, i.shadowColor = Z(f))
        }
        i.stroke()
    }
}

function _l(i, t, e, a, o, n, s, r) {
    Sn(i, t, e, a), o && (i.globalCompositeOperation = n), i.fillStyle = Z(s, r), i.fill()
}
var Po = class {
        constructor(t) {
            this.container = t
        }
        drawParticle(t, e) {
            var a;
            let o = this.container,
                n = e.options;
            if (!e.links || e.links.length <= 0) return;
            t.save();
            let s = e.links.filter(r => n.links && o.particles.getLinkFrequency(e, r.destination) <= n.links.frequency);
            for (let r of s) this.drawTriangles(o, n, e, r, s), r.opacity > 0 && ((a = e.retina.linksWidth) !== null && a !== void 0 ? a : 0) > 0 && this.drawLinkLine(e, r);
            t.restore()
        }
        particleCreated(t) {
            if (t.links = [], !t.options.links) return;
            let e = this.container.retina.pixelRatio;
            t.retina.linksDistance = t.options.links.distance * e, t.retina.linksWidth = t.options.links.width * e
        }
        particleDestroyed(t) {
            t.links = []
        }
        drawLinkLine(t, e) {
            let a = this.container,
                o = a.actualOptions,
                n = e.destination,
                s = t.getPosition(),
                r = n.getPosition(),
                l = e.opacity;
            a.canvas.draw(d => {
                var h, p, u;
                if (!t.options.links) return;
                let f, m = (h = t.options.twinkle) === null || h === void 0 ? void 0 : h.lines;
                if (m?.enable) {
                    let w = m.frequency,
                        x = J(m.color);
                    C() < w && x && (f = x, l = P(m.opacity))
                }
                if (!f) {
                    let w = t.options.links,
                        x = w?.id !== void 0 ? a.particles.linksColors.get(w.id) : a.particles.linksColor;
                    f = ne(t, n, x)
                }
                if (!f) return;
                let g = (p = t.retina.linksWidth) !== null && p !== void 0 ? p : 0,
                    y = (u = t.retina.linksDistance) !== null && u !== void 0 ? u : 0;
                wl(d, g, s, r, y, a.canvas.size, t.options.links.warp, o.backgroundMask.enable, o.backgroundMask.composite, f, l, t.options.links.shadow)
            })
        }
        drawLinkTriangle(t, e, a) {
            var o;
            if (!t.options.links) return;
            let n = this.container,
                s = n.actualOptions,
                r = e.destination,
                l = a.destination,
                d = t.options.links.triangles,
                h = (o = d.opacity) !== null && o !== void 0 ? o : (e.opacity + a.opacity) / 2;
            h <= 0 || n.canvas.draw(p => {
                var u;
                let f = t.getPosition(),
                    m = r.getPosition(),
                    g = l.getPosition(),
                    y = (u = t.retina.linksDistance) !== null && u !== void 0 ? u : 0;
                if (L(f, m) > y || L(g, m) > y || L(g, f) > y) return;
                let w = J(d.color);
                if (!w) {
                    let x = t.options.links,
                        A = x?.id !== void 0 ? n.particles.linksColors.get(x.id) : n.particles.linksColor;
                    w = ne(t, r, A)
                }
                w && _l(p, f, m, g, s.backgroundMask.enable, s.backgroundMask.composite, w, h)
            })
        }
        drawTriangles(t, e, a, o, n) {
            var s, r, l;
            let d = o.destination,
                h = t.particles;
            if (!(!((s = e.links) === null || s === void 0) && s.triangles.enable && (!((r = d.options.links) === null || r === void 0) && r.triangles.enable))) return;
            let p = (l = d.links) === null || l === void 0 ? void 0 : l.filter(u => {
                let f = t.particles.getLinkFrequency(d, u.destination);
                return d.options.links && f <= d.options.links.frequency && n.findIndex(m => m.destination === u.destination) >= 0
            });
            if (p?.length)
                for (let u of p) {
                    let f = u.destination;
                    h.getTriangleFrequency(a, d, f) > e.links.triangles.frequency || this.drawLinkTriangle(a, o, u)
                }
        }
    },
    Co = class {
        constructor() {
            this.id = "links"
        }
        getPlugin(t) {
            return new Po(t)
        }
        loadOptions() {}
        needsPlugin() {
            return !0
        }
    };
async function Pl(i) {
    let t = new Co;
    await i.addPlugin(t)
}
async function as(i) {
    await xl(i), await Pl(i)
}
var Me = class {
        draw(t, e, a) {
            let o = this.getCenter(e, a),
                n = this.getSidesData(e, a),
                s = n.count.numerator * n.count.denominator,
                r = n.count.numerator / n.count.denominator,
                l = 180 * (r - 2) / r,
                d = Math.PI - Math.PI * l / 180;
            if (t) {
                t.beginPath(), t.translate(o.x, o.y), t.moveTo(0, 0);
                for (let h = 0; h < s; h++) t.lineTo(n.length, 0), t.translate(n.length, 0), t.rotate(d)
            }
        }
        getSidesCount(t) {
            var e, a;
            let o = t.shapeData;
            return (a = (e = o?.sides) !== null && e !== void 0 ? e : o?.nb_sides) !== null && a !== void 0 ? a : 5
        }
    },
    ko = class extends Me {
        getCenter(t, e) {
            let a = this.getSidesCount(t);
            return {
                x: -e / (a / 3.5),
                y: -e / .76
            }
        }
        getSidesData(t, e) {
            var a, o;
            let n = t.shapeData,
                s = (o = (a = n?.sides) !== null && a !== void 0 ? a : n?.nb_sides) !== null && o !== void 0 ? o : 5;
            return {
                count: {
                    denominator: 1,
                    numerator: s
                },
                length: 2.66 * e / (s / 3)
            }
        }
    },
    Vo = class extends Me {
        getCenter(t, e) {
            return {
                x: -e,
                y: e / 1.66
            }
        }
        getSidesCount() {
            return 3
        }
        getSidesData(t, e) {
            return {
                count: {
                    denominator: 2,
                    numerator: 3
                },
                length: 2 * e
            }
        }
    };
async function Cl(i) {
    await i.addShape("polygon", new ko)
}
async function kl(i) {
    await i.addShape("triangle", new Vo)
}
async function os(i) {
    await Cl(i), await kl(i)
}

function Vl(i, t, e, a) {
    switch (i.options.size.animation.destroy) {
        case "max":
            t >= a && i.destroy();
            break;
        case "min":
            t <= e && i.destroy();
            break
    }
}

function Ol(i, t) {
    var e, a, o, n, s;
    let r = ((e = i.size.velocity) !== null && e !== void 0 ? e : 0) * t.factor,
        l = i.size.min,
        d = i.size.max,
        h = (a = i.size.decay) !== null && a !== void 0 ? a : 1;
    if (!(i.destroyed || !i.size.enable || ((o = i.size.maxLoops) !== null && o !== void 0 ? o : 0) > 0 && ((n = i.size.loops) !== null && n !== void 0 ? n : 0) > ((s = i.size.maxLoops) !== null && s !== void 0 ? s : 0))) {
        switch (i.size.status) {
            case 0:
                i.size.value >= d ? (i.size.status = 1, i.size.loops || (i.size.loops = 0), i.size.loops++) : i.size.value += r;
                break;
            case 1:
                i.size.value <= l ? (i.size.status = 0, i.size.loops || (i.size.loops = 0), i.size.loops++) : i.size.value -= r
        }
        i.size.velocity && h !== 1 && (i.size.velocity *= h), Vl(i, i.size.value, l, d), i.destroyed || (i.size.value = Y(i.size.value, l, d))
    }
}
var Oo = class {
    init() {}
    isEnabled(t) {
        var e, a, o, n;
        return !t.destroyed && !t.spawning && t.size.enable && (((e = t.size.maxLoops) !== null && e !== void 0 ? e : 0) <= 0 || ((a = t.size.maxLoops) !== null && a !== void 0 ? a : 0) > 0 && ((o = t.size.loops) !== null && o !== void 0 ? o : 0) < ((n = t.size.maxLoops) !== null && n !== void 0 ? n : 0))
    }
    update(t, e) {
        this.isEnabled(t) && Ol(t, e)
    }
};
async function ns(i) {
    await i.addParticleUpdater("size", () => new Oo)
}
var Le = Math.sqrt(2),
    Ao = class {
        draw(t, e, a) {
            t.rect(-a / Le, -a / Le, 2 * a / Le, 2 * a / Le)
        }
        getSidesCount() {
            return 4
        }
    };
async function ss(i) {
    let t = new Ao;
    await i.addShape("edge", t), await i.addShape("square", t)
}
var Ro = class {
    draw(t, e, a) {
        var o;
        let n = e.shapeData,
            s = this.getSidesCount(e),
            r = (o = n?.inset) !== null && o !== void 0 ? o : 2;
        t.moveTo(0, 0 - a);
        for (let l = 0; l < s; l++) t.rotate(Math.PI / s), t.lineTo(0, 0 - a * r), t.rotate(Math.PI / s), t.lineTo(0, 0 - a)
    }
    getSidesCount(t) {
        var e, a;
        let o = t.shapeData;
        return (a = (e = o?.sides) !== null && e !== void 0 ? e : o?.nb_sides) !== null && a !== void 0 ? a : 5
    }
};
async function rs(i) {
    await i.addShape("star", new Ro)
}

function Eo(i, t, e, a, o) {
    var n, s;
    let r = t;
    if (!r || !r.enable) return;
    let l = H(e.offset),
        d = ((n = t.velocity) !== null && n !== void 0 ? n : 0) * i.factor + 3.6 * l,
        h = (s = t.decay) !== null && s !== void 0 ? s : 1;
    o && r.status !== 0 ? (r.value -= d, r.value < 0 && (r.status = 0, r.value += r.value)) : (r.value += d, o && r.value > a && (r.status = 1, r.value -= r.value % a)), r.velocity && h !== 1 && (r.velocity *= h), r.value > a && (r.value %= a)
}

function Al(i, t) {
    var e, a, o, n, s, r, l, d, h, p;
    if (!(!((e = i.stroke) === null || e === void 0) && e.color)) return;
    let u = i.stroke.color.animation,
        f = (o = (a = i.strokeColor) === null || a === void 0 ? void 0 : a.h) !== null && o !== void 0 ? o : (n = i.color) === null || n === void 0 ? void 0 : n.h;
    f && Eo(t, f, u.h, 360, !1);
    let m = (r = (s = i.strokeColor) === null || s === void 0 ? void 0 : s.s) !== null && r !== void 0 ? r : (l = i.color) === null || l === void 0 ? void 0 : l.s;
    m && Eo(t, m, u.s, 100, !0);
    let g = (h = (d = i.strokeColor) === null || d === void 0 ? void 0 : d.l) !== null && h !== void 0 ? h : (p = i.color) === null || p === void 0 ? void 0 : p.l;
    g && Eo(t, g, u.l, 100, !0)
}
var To = class {
    constructor(t) {
        this.container = t
    }
    init(t) {
        var e, a;
        let o = this.container;
        t.stroke = X(t.options.stroke, t.id, t.options.reduceDuplicates), t.strokeWidth = t.stroke.width * o.retina.pixelRatio;
        let n = (e = it(t.stroke.color)) !== null && e !== void 0 ? e : t.getFillColor();
        n && (t.strokeColor = Ae(n, (a = t.stroke.color) === null || a === void 0 ? void 0 : a.animation, o.retina.reduceFactor))
    }
    isEnabled(t) {
        var e, a, o, n;
        let s = (e = t.stroke) === null || e === void 0 ? void 0 : e.color;
        return !t.destroyed && !t.spawning && !!s && (((a = t.strokeColor) === null || a === void 0 ? void 0 : a.h.value) !== void 0 && s.animation.h.enable || ((o = t.strokeColor) === null || o === void 0 ? void 0 : o.s.value) !== void 0 && s.animation.s.enable || ((n = t.strokeColor) === null || n === void 0 ? void 0 : n.l.value) !== void 0 && s.animation.l.enable)
    }
    update(t, e) {
        this.isEnabled(t) && Al(t, e)
    }
};
async function ls(i) {
    await i.addParticleUpdater("strokeColor", t => new To(t))
}
var Go = ["text", "character", "char"],
    Io = class {
        draw(t, e, a, o) {
            var n, s, r;
            let l = e.shapeData;
            if (l === void 0) return;
            let d = l.value;
            if (d === void 0) return;
            let h = e;
            h.text === void 0 && (h.text = X(d, e.randomIndexData));
            let p = h.text,
                u = (n = l.style) !== null && n !== void 0 ? n : "",
                f = (s = l.weight) !== null && s !== void 0 ? s : "400",
                m = 2 * Math.round(a),
                g = (r = l.font) !== null && r !== void 0 ? r : "Verdana",
                y = e.fill,
                w = p.length * a / 2;
            t.font = `${u} ${f} ${m}px "${g}"`;
            let x = {
                x: -w,
                y: a / 2
            };
            t.globalAlpha = o, y ? t.fillText(p, x.x, x.y) : t.strokeText(p, x.x, x.y), t.globalAlpha = 1
        }
        getSidesCount() {
            return 12
        }
        async init(t) {
            let e = t.actualOptions;
            if (Go.find(a => G(a, e.particles.shape.type))) {
                let a = Go.map(n => e.particles.shape.options[n]).find(n => !!n),
                    o = [];
                M(a, n => {
                    o.push(hn(n.font, n.weight))
                }), await Promise.all(o)
            }
        }
    };
async function cs(i) {
    let t = new Io;
    for (let e of Go) await i.addShape(e, t)
}
async function ds(i) {
    await In(i), await $n(i), await Ln(i), await Fn(i), await Un(i), await Nn(i), await Hn(i), await Bn(i), await jn(i), await Wn(i), await qn(i), await Yn(i), await ts(i), await is(i), await as(i), await zn(i), await Qn(i), await Zn(i), await os(i), await ss(i), await rs(i), await cs(i), await Jn(i), await Xn(i), await ns(i), await Gn(i), await Mn(i), await ls(i), await Kn(i), await Tn(i)
}
var zo = class {
        constructor() {
            this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1
        }
        load(t) {
            t && (t.enable !== void 0 && (this.enable = t.enable), t.speed !== void 0 && (this.speed = k(t.speed)), t.decay !== void 0 && (this.decay = k(t.decay)), t.sync !== void 0 && (this.sync = t.sync))
        }
    },
    Mo = class extends tt {
        constructor() {
            super(), this.animation = new zo, this.direction = "clockwise", this.enable = !1, this.value = 0
        }
        load(t) {
            super.load(t), t && (this.animation.load(t.animation), t.direction !== void 0 && (this.direction = t.direction), t.enable !== void 0 && (this.enable = t.enable))
        }
    };

function Rl(i, t) {
    var e, a;
    if (!i.tilt || !i.options.tilt) return;
    let o = i.options.tilt,
        n = o.animation,
        s = ((e = i.tilt.velocity) !== null && e !== void 0 ? e : 0) * t.factor,
        r = 2 * Math.PI,
        l = (a = i.tilt.decay) !== null && a !== void 0 ? a : 1;
    if (n.enable) {
        switch (i.tilt.status) {
            case 0:
                i.tilt.value += s, i.tilt.value > r && (i.tilt.value -= r);
                break;
            case 1:
            default:
                i.tilt.value -= s, i.tilt.value < 0 && (i.tilt.value += r);
                break
        }
        i.tilt.velocity && l !== 1 && (i.tilt.velocity *= l)
    }
}
var Lo = class {
    constructor(t) {
        this.container = t
    }
    getTransformValues(t) {
        var e;
        let a = ((e = t.tilt) === null || e === void 0 ? void 0 : e.enable) && t.tilt;
        return {
            b: a ? Math.cos(a.value) * a.cosDirection : void 0,
            c: a ? Math.sin(a.value) * a.sinDirection : void 0
        }
    }
    init(t) {
        var e;
        let a = t.options.tilt;
        if (!a) return;
        t.tilt = {
            enable: a.enable,
            value: P(a.value) * Math.PI / 180,
            sinDirection: C() >= .5 ? 1 : -1,
            cosDirection: C() >= .5 ? 1 : -1
        };
        let o = a.direction;
        switch (o === "random" && (o = Math.floor(2 * C()) > 0 ? "counter-clockwise" : "clockwise"), o) {
            case "counter-clockwise":
            case "counterClockwise":
                t.tilt.status = 1;
                break;
            case "clockwise":
                t.tilt.status = 0;
                break
        }
        let n = (e = t.options.tilt) === null || e === void 0 ? void 0 : e.animation;
        n?.enable && (t.tilt.decay = 1 - P(n.decay), t.tilt.velocity = P(n.speed) / 360 * this.container.retina.reduceFactor, n.sync || (t.tilt.velocity *= C()))
    }
    isEnabled(t) {
        var e;
        let a = (e = t.options.tilt) === null || e === void 0 ? void 0 : e.animation;
        return !t.destroyed && !t.spawning && !!a?.enable
    }
    loadOptions(t, ...e) {
        t.tilt || (t.tilt = new Mo);
        for (let a of e) t.tilt.load(a?.tilt)
    }
    update(t, e) {
        this.isEnabled(t) && Rl(t, e)
    }
};
async function hs(i) {
    await i.addParticleUpdater("tilt", t => new Lo(t))
}
var Fe = class {
        constructor() {
            this.enable = !1, this.frequency = .05, this.opacity = 1
        }
        load(t) {
            t && (t.color !== void 0 && (this.color = z.create(this.color, t.color)), t.enable !== void 0 && (this.enable = t.enable), t.frequency !== void 0 && (this.frequency = t.frequency), t.opacity !== void 0 && (this.opacity = k(t.opacity)))
        }
    },
    Fo = class {
        constructor() {
            this.lines = new Fe, this.particles = new Fe
        }
        load(t) {
            t && (this.lines.load(t.lines), this.particles.load(t.particles))
        }
    },
    Do = class {
        getColorStyles(t, e, a, o) {
            let n = t.options,
                s = n.twinkle;
            if (!s) return {};
            let r = s.particles,
                l = r.enable && C() < r.frequency,
                d = t.options.zIndex,
                h = (1 - t.zIndexFactor) ** d.opacityRate,
                p = l ? P(r.opacity) * h : o,
                u = it(r.color),
                f = u ? mt(u, p) : void 0,
                m = {},
                g = l && f;
            return m.fill = g ? f : void 0, m.stroke = g ? f : void 0, m
        }
        init() {}
        isEnabled(t) {
            let e = t.options,
                a = e.twinkle;
            return !!a && a.particles.enable
        }
        loadOptions(t, ...e) {
            t.twinkle || (t.twinkle = new Fo);
            for (let a of e) t.twinkle.load(a?.twinkle)
        }
        update() {}
    };
async function us(i) {
    await i.addParticleUpdater("twinkle", () => new Do)
}
var Uo = class {
        constructor() {
            this.angle = 50, this.move = 10
        }
        load(t) {
            t && (t.angle !== void 0 && (this.angle = k(t.angle)), t.move !== void 0 && (this.move = k(t.move)))
        }
    },
    No = class {
        constructor() {
            this.distance = 5, this.enable = !1, this.speed = new Uo
        }
        load(t) {
            if (t && (t.distance !== void 0 && (this.distance = k(t.distance)), t.enable !== void 0 && (this.enable = t.enable), t.speed !== void 0))
                if (typeof t.speed == "number") this.speed.load({
                    angle: t.speed
                });
                else {
                    let e = t.speed;
                    e.min !== void 0 ? this.speed.load({
                        angle: e
                    }) : this.speed.load(t.speed)
                }
        }
    };

function El(i, t) {
    var e;
    let a = i.options.wobble;
    if (!a?.enable || !i.wobble) return;
    let o = i.wobble.angleSpeed * t.factor,
        n = i.wobble.moveSpeed * t.factor,
        s = n * (((e = i.retina.wobbleDistance) !== null && e !== void 0 ? e : 0) * t.factor) / (1e3 / 60),
        r = 2 * Math.PI;
    i.wobble.angle += o, i.wobble.angle > r && (i.wobble.angle -= r), i.position.x += s * Math.cos(i.wobble.angle), i.position.y += s * Math.abs(Math.sin(i.wobble.angle))
}
var Ho = class {
    constructor(t) {
        this.container = t
    }
    init(t) {
        var e;
        let a = t.options.wobble;
        a?.enable ? t.wobble = {
            angle: C() * Math.PI * 2,
            angleSpeed: P(a.speed.angle) / 360,
            moveSpeed: P(a.speed.move) / 10
        } : t.wobble = {
            angle: 0,
            angleSpeed: 0,
            moveSpeed: 0
        }, t.retina.wobbleDistance = P((e = a?.distance) !== null && e !== void 0 ? e : 0) * this.container.retina.pixelRatio
    }
    isEnabled(t) {
        var e;
        return !t.destroyed && !t.spawning && !!(!((e = t.options.wobble) === null || e === void 0) && e.enable)
    }
    loadOptions(t, ...e) {
        t.wobble || (t.wobble = new No);
        for (let a of e) t.wobble.load(a?.wobble)
    }
    update(t, e) {
        this.isEnabled(t) && El(t, e)
    }
};
async function ps(i) {
    await i.addParticleUpdater("wobble", t => new Ho(t))
}
async function fs(i) {
    await ds(i), await En(i), await hs(i), await us(i), await ps(i), await An(i), await kn(i), await On(i), await Rn(i)
}

function S(i) {
    let {
        background: t,
        color: e,
        radius: a,
        number: o,
        densityOptions: n,
        sizeOptions: s,
        opacityOptions: r,
        linksOptions: l,
        modeOptions: d,
        moveOptions: h,
        shapeOptions: p,
        clickOptions: u,
        hoverOptions: f,
        rotateOptions: m,
        particlesID: g,
        fpsOptions: y,
        colors: w
    } = i, {
        densityEnable: x,
        densityArea: A,
        densityFactor: E
    } = n, {
        linksEnabled: R,
        linksColor: v,
        linksOpacity: W,
        linksDistance: K,
        linksWidth: Q
    } = l, {
        size: Ht,
        sizeType: st,
        sizeMin: Bt,
        sizeMax: gt
    } = s, {
        opacity: Xt,
        opacityType: ut,
        opacityMin: jt,
        opacityMax: Wt
    } = r, {
        connectDistance: q,
        connectRadius: de,
        connectLinksOpacity: ot,
        grabDistance: Ne,
        grabLinksOpacity: ws,
        bubbleDistance: _s,
        bubbleSize: Ps,
        bubbleDuration: Cs,
        repulseDistance: ks,
        repulseDuration: Vs,
        pushQuantity: Os,
        removeQuantity: As,
        trailQuantity: Rs,
        trailDelay: Es
    } = d, {
        moveEnabled: Ts,
        moveDirection: Gs,
        moveSpeed: Is,
        moveRandom: zs,
        moveStraight: Ms,
        moveOut: Ls,
        moveVibrate: Fs,
        moveGravityEnabled: Ds,
        moveGravityAcceleration: Us,
        moveGravityMaxSpeed: Ns,
        moveTrailEnabled: Hs,
        moveTrailAmount: Bs,
        moveSpinEnabled: js,
        moveSpinAcceleration: Ws,
        moveAttractEnabled: qs,
        moveAttractDistance: Ys
    } = h, {
        shapeType: Qs,
        characterType: Js,
        imageSource: Zs,
        imageWidth: Xs,
        imageHeight: Ks
    } = p, {
        clickEnabled: $s,
        clickModes: tr
    } = u, {
        hoverEnabled: Yo,
        hoverModes: er,
        hoverParallax: ir,
        hoverForce: Qo,
        hoverSmooth: Tc
    } = f, {
        rotateDirection: ar,
        rotateValue: or,
        rotateAnimation: nr,
        rotateSpeed: sr,
        rotateSync: Gc
    } = m, rr = Zo(async He => {
        await fs(He)
    }, []), Ft = We.current() === We.canvas, lr = w.length > 0;
    return _("div", {
        style: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: t,
            transform: "translateZ(0)",
            borderRadius: a,
            position: "relative"
        },
        children: _(Nt, {
            id: g,
            init: rr,
            style: {
                width: "100%",
                height: "100%",
                position: "absolute"
            },
            options: {
                background: {
                    color: {
                        value: "transparent"
                    }
                },
                fpsLimit: Ft ? 1 : y,
                fullScreen: !1,
                pauseOnBlur: !0,
                pauseOnOutsideViewport: !0,
                interactivity: Ft ? {} : {
                    events: {
                        resize: !0,
                        onClick: {
                            enable: Ft ? !1 : $s,
                            mode: tr
                        },
                        onHover: {
                            enable: Ft ? !1 : Yo,
                            mode: er,
                            parallax: {
                                enable: Ft ? !1 : Yo ? ir : !1,
                                force: Qo,
                                smooth: Qo
                            }
                        }
                    },
                    modes: {
                        connect: {
                            distance: q,
                            radius: de,
                            links: {
                                opacity: ot
                            }
                        },
                        grab: {
                            distance: Ne,
                            links: {
                                opacity: ws
                            }
                        },
                        bubble: {
                            distance: _s,
                            size: Ps,
                            duration: Cs
                        },
                        repulse: {
                            distance: ks,
                            duration: Vs
                        },
                        push: {
                            quantity: Os
                        },
                        remove: {
                            quantity: As
                        },
                        trail: {
                            delay: Es,
                            quantity: Rs
                        }
                    }
                },
                particles: {
                    color: {
                        value: lr ? w.map(He => Bo(He)) : Bo(e)
                    },
                    collisions: {
                        enable: !1
                    },
                    rotate: {
                        direction: ar,
                        value: or,
                        animation: !Ft && {
                            enable: nr,
                            speed: sr
                        }
                    },
                    move: {
                        direction: Gs,
                        outMode: Ls,
                        enable: Ft ? !1 : Ts,
                        random: zs,
                        speed: Is,
                        straight: Ms,
                        trail: {
                            enable: Hs,
                            length: Bs
                        },
                        spin: {
                            enable: js,
                            acceleration: Ws
                        },
                        attract: {
                            enable: qs,
                            distance: Ys
                        },
                        gravity: {
                            enable: Ds,
                            acceleration: Us,
                            maxSpeed: Ns
                        },
                        vibrate: Fs
                    },
                    links: {
                        enable: R,
                        color: Bo(v),
                        opacity: W,
                        distance: K,
                        width: Q
                    },
                    number: {
                        value: o,
                        density: {
                            enable: x,
                            area: x && A,
                            factor: x && E
                        }
                    },
                    opacity: {
                        value: ut ? Xt : {
                            min: jt,
                            max: Wt
                        }
                    },
                    shape: {
                        type: Qs,
                        character: {
                            value: Js
                        },
                        image: {
                            src: Zs,
                            width: Xs,
                            height: Ks
                        }
                    },
                    size: {
                        value: st ? Ht : {
                            min: Bt,
                            max: gt
                        }
                    }
                },
                detectRetina: !0
            }
        })
    })
}
S.defaultProps = {
    background: "#000000",
    color: "#ffffff",
    radius: 0,
    number: 100,
    densityOptions: {
        densityEnable: !1,
        densityArea: 5e3,
        densityFactor: 50
    },
    sizeOptions: {
        sizeType: !0,
        size: 1,
        sizeMin: 1,
        sizeMax: 10
    },
    opacityOptions: {
        opacityType: !0,
        opacity: 1,
        opacityMin: 0,
        opacityMax: 1
    },
    linksOptions: {
        linksEnabled: !1,
        linksColor: "#ffffff",
        linksOpacity: .2,
        linksDistance: 100,
        linksWidth: 1
    },
    modeOptions: {
        connectDistance: 100,
        connectRadius: 50,
        connectLinksOpacity: .2,
        grabDistance: 100,
        grabLinksOpacity: .2,
        bubbleDistance: 100,
        bubbleSize: 40,
        bubbleDuration: .4,
        repulseDistance: 200,
        repulseDuration: 1.2,
        pushQuantity: 4,
        removeQuantity: 4,
        trailDelay: .1,
        trailQuantity: 10
    },
    moveOptions: {
        moveEnabled: !0,
        moveDirection: "none",
        moveSpeed: 1,
        moveRandom: !1,
        moveStraight: !1,
        moveOut: "out",
        moveVibrate: !1,
        moveGravityEnabled: !1,
        moveGravityAcceleration: 1,
        moveGravityMaxSpeed: 2,
        moveTrailEnabled: !1,
        moveTrailAmount: 100,
        moveSpinEnabled: !1,
        moveSpinAcceleration: 1,
        moveAttractEnabled: !1,
        moveAttractDistance: 100
    },
    shapeOptions: {
        shapeType: "circle",
        characterType: "\u{1F60E}",
        imageWidth: 100,
        imageHeight: 100
    },
    clickOptions: {
        clickEnabled: !1,
        clickModes: "push"
    },
    hoverOptions: {
        hoverEnabled: !0,
        hoverModes: "none",
        hoverParallax: !0,
        hoverForce: 10,
        hoverSmooth: 10
    },
    rotateOptions: {
        rotateDirection: "random",
        rotateValue: 0,
        rotateAnimation: !1,
        rotateSpeed: 5,
        rotateSync: !1
    },
    particlesID: "Unique ID",
    colors: []
};
S.displayName = "Particles";
Ct(S, {
    background: {
        type: b.Color,
        defaultValue: S.defaultProps.background,
        title: "Backdrop"
    },
    color: {
        type: b.Color,
        defaultValue: S.defaultProps.color,
        title: "Color"
    },
    colors: {
        type: b.Array,
        control: {
            type: b.Color
        },
        defaultValue: S.defaultProps.colors
    },
    fpsOptions: {
        type: b.Enum,
        title: "FPS",
        options: [30, 60, 120],
        optionTitles: ["30", "60", "120"],
        defaultValue: 60,
        displaySegmentedControl: !0
    },
    number: {
        type: b.Number,
        title: "Amount",
        min: 0,
        max: 1e3,
        step: 1,
        defaultValue: S.defaultProps.number
    },
    densityOptions: {
        type: b.Object,
        title: "Density",
        controls: {
            densityEnable: {
                type: b.Boolean,
                title: "Enable",
                defaultValue: S.defaultProps.densityOptions.densityEnable
            },
            densityArea: {
                type: b.Number,
                title: "Area",
                min: 100,
                max: 1e4,
                step: 1,
                defaultValue: S.defaultProps.densityOptions.densityArea,
                hidden: i => !i.densityEnable
            },
            densityFactor: {
                type: b.Number,
                title: "Factor",
                min: 0,
                max: 100,
                step: .5,
                displayStepper: !0,
                defaultValue: S.defaultProps.densityOptions.densityFactor,
                description: "Decrease the amount property when using these, as too many particles in dense areas can cause slowdowns.",
                hidden: i => !i.densityEnable
            }
        }
    },
    sizeOptions: {
        type: b.Object,
        title: "Size",
        controls: {
            sizeType: {
                type: b.Boolean,
                title: "Type",
                enabledTitle: "Value",
                disabledTitle: "Range",
                defaultValue: S.defaultProps.sizeOptions.sizeType
            },
            size: {
                type: b.Number,
                title: "Size",
                min: 0,
                max: 1e3,
                step: .5,
                displayStepper: !0,
                defaultValue: S.defaultProps.sizeOptions.size,
                hidden: i => !i.sizeType
            },
            sizeMin: {
                type: b.Number,
                title: "Min",
                min: 0,
                max: 1e3,
                step: .5,
                displayStepper: !0,
                defaultValue: S.defaultProps.sizeOptions.sizeMin,
                hidden: i => i.sizeType
            },
            sizeMax: {
                type: b.Number,
                title: "Max",
                min: 0,
                max: 1e3,
                step: .5,
                displayStepper: !0,
                defaultValue: S.defaultProps.sizeOptions.sizeMax,
                hidden: i => i.sizeType
            }
        }
    },
    opacityOptions: {
        type: b.Object,
        title: "Opacity",
        controls: {
            opacityType: {
                type: b.Boolean,
                title: "Type",
                enabledTitle: "Value",
                disabledTitle: "Range",
                defaultValue: S.defaultProps.opacityOptions.opacityType
            },
            opacity: {
                type: b.Number,
                title: "Opacity",
                min: 0,
                max: 1,
                step: .1,
                displayStepper: !0,
                defaultValue: S.defaultProps.opacityOptions.opacity,
                hidden: i => !i.opacityType
            },
            opacityMin: {
                type: b.Number,
                title: "Min",
                min: 0,
                max: 1,
                step: .05,
                displayStepper: !0,
                defaultValue: S.defaultProps.opacityOptions.opacityMin,
                hidden: i => i.opacityType
            },
            opacityMax: {
                type: b.Number,
                title: "Max",
                min: 0,
                max: 1,
                step: .05,
                displayStepper: !0,
                defaultValue: S.defaultProps.opacityOptions.opacityMax,
                hidden: i => i.opacityType
            }
        }
    },
    linksOptions: {
        type: b.Object,
        title: "Links",
        controls: {
            linksEnabled: {
                type: b.Boolean,
                title: "Enable",
                defaultValue: S.defaultProps.linksOptions.linksEnabled
            },
            linksColor: {
                type: b.Color,
                title: "Color",
                defaultValue: S.defaultProps.linksOptions.linksColor,
                hidden: i => !i.linksEnabled
            },
            linksOpacity: {
                type: b.Number,
                title: "Opacity",
                min: 0,
                max: 1,
                step: .1,
                displayStepper: !0,
                defaultValue: S.defaultProps.linksOptions.linksOpacity,
                hidden: i => !i.linksEnabled
            },
            linksDistance: {
                type: b.Number,
                title: "Distance",
                min: 0,
                max: 500,
                step: 1,
                defaultValue: S.defaultProps.linksOptions.linksDistance,
                hidden: i => !i.linksEnabled
            },
            linksWidth: {
                type: b.Number,
                title: "Width",
                min: 0,
                max: 10,
                step: 1,
                defaultValue: S.defaultProps.linksOptions.linksWidth,
                hidden: i => !i.linksEnabled
            }
        }
    },
    modeOptions: {
        type: b.Object,
        title: "Modes",
        controls: {
            connectDistance: {
                type: b.Number,
                title: "Connect",
                min: 0,
                max: 1e3,
                step: 1,
                defaultValue: S.defaultProps.modeOptions.connectDistance
            },
            connectRadius: {
                type: b.Number,
                title: "Connect Radius",
                min: 0,
                max: 1e3,
                step: 1,
                defaultValue: S.defaultProps.modeOptions.connectRadius
            },
            connectLinksOpacity: {
                type: b.Number,
                title: "Connect Links",
                min: 0,
                max: 1,
                step: .1,
                displayStepper: !0,
                defaultValue: S.defaultProps.modeOptions.connectLinksOpacity
            },
            grabDistance: {
                type: b.Number,
                title: "Grab",
                min: 0,
                max: 1e3,
                step: 1,
                defaultValue: S.defaultProps.modeOptions.grabDistance
            },
            grabLinksOpacity: {
                type: b.Number,
                title: "Grab Links",
                min: 0,
                max: 1,
                step: .1,
                displayStepper: !0,
                defaultValue: S.defaultProps.modeOptions.grabLinksOpacity
            },
            bubbleDistance: {
                type: b.Number,
                title: "Bubble",
                min: 0,
                max: 1e3,
                step: 1,
                defaultValue: S.defaultProps.modeOptions.bubbleDistance
            },
            bubbleSize: {
                type: b.Number,
                title: "Bubble Size",
                min: 0,
                max: 1e3,
                step: 1,
                defaultValue: S.defaultProps.modeOptions.bubbleSize
            },
            bubbleDuration: {
                type: b.Number,
                title: "Bubble Duration",
                min: 0,
                max: 1,
                step: .1,
                displayStepper: !0,
                defaultValue: S.defaultProps.modeOptions.bubbleDuration
            },
            repulseDistance: {
                type: b.Number,
                title: "Repulse",
                min: 0,
                max: 1e3,
                defaultValue: S.defaultProps.modeOptions.repulseDistance
            },
            repulseDuration: {
                type: b.Number,
                title: "Repulse Duration",
                min: 0,
                max: 10,
                step: .1,
                displayStepper: !0,
                defaultValue: S.defaultProps.modeOptions.repulseDuration
            },
            pushQuantity: {
                type: b.Number,
                title: "Push",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: S.defaultProps.modeOptions.pushQuantity
            },
            removeQuantity: {
                type: b.Number,
                title: "Remove",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: S.defaultProps.modeOptions.removeQuantity
            },
            trailQuantity: {
                type: b.Number,
                title: "Trail",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: S.defaultProps.modeOptions.trailQuantity
            },
            trailDelay: {
                type: b.Number,
                title: "Trail Delay",
                min: 0,
                max: 10,
                step: .1,
                defaultValue: S.defaultProps.modeOptions.trailDelay
            }
        }
    },
    moveOptions: {
        type: b.Object,
        title: "Move",
        controls: {
            moveEnabled: {
                type: b.Boolean,
                title: "Enable",
                defaultValue: S.defaultProps.moveOptions.moveEnabled
            },
            moveDirection: {
                type: b.Enum,
                title: "Direction",
                options: ["none", "bottom", "left", "right", "top", "bottom-left", "bottom-right", "top-left", "top-right", "outside", "inside"],
                optionTitles: ["Random", "Bottom", "Left", "Right", "Top", "Bottom Left", "Bottom Right", "Top Left", "Top Right", "Outside", "Inside"],
                defaultValue: S.defaultProps.moveOptions.moveDirection,
                hidden: i => !i.moveEnabled
            },
            moveSpeed: {
                type: b.Number,
                title: "Speed",
                min: 0,
                max: 100,
                step: .1,
                defaultValue: S.defaultProps.moveOptions.moveSpeed,
                hidden: i => !i.moveEnabled
            },
            moveRandom: {
                type: b.Boolean,
                title: "Random",
                defaultValue: S.defaultProps.moveOptions.moveRandom,
                hidden: i => !i.moveEnabled
            },
            moveStraight: {
                type: b.Boolean,
                title: "Straight",
                defaultValue: S.defaultProps.moveOptions.moveStraight,
                hidden: i => !i.moveEnabled
            },
            moveOut: {
                type: b.Enum,
                title: "Out",
                options: ["none", "split", "bounce", "destroy", "out", "bounceHorizontal", "bounceVertical"],
                optionTitles: ["None", "Split", "Bounce", "Destroy", "Out", "Bounce Horizontal", "Bounce Vertical"],
                defaultValue: S.defaultProps.moveOptions.moveOut,
                hidden: i => !i.moveEnabled
            },
            moveVibrate: {
                type: b.Boolean,
                title: "Vibrate",
                defaultValue: S.defaultProps.moveOptions.moveVibrate,
                hidden: i => !i.moveEnabled
            },
            moveGravityEnabled: {
                type: b.Boolean,
                title: "Gravity",
                defaultValue: S.defaultProps.moveOptions.moveGravityEnabled,
                hidden: i => !i.moveEnabled
            },
            moveGravityAcceleration: {
                type: b.Number,
                title: "Gravity Acceleration",
                min: 0,
                max: 100,
                step: .1,
                defaultValue: S.defaultProps.moveOptions.moveGravityAcceleration,
                hidden: i => !i.moveEnabled || !i.moveGravityEnabled
            },
            moveGravityMaxSpeed: {
                type: b.Number,
                title: "Gravity Max Speed",
                min: 0,
                max: 100,
                step: .1,
                defaultValue: S.defaultProps.moveOptions.moveGravityAcceleration,
                hidden: i => !i.moveEnabled || !i.moveGravityEnabled
            },
            moveTrailEnabled: {
                type: b.Boolean,
                title: "Trail",
                defaultValue: S.defaultProps.moveOptions.moveTrailEnabled,
                hidden: i => !i.moveEnabled
            },
            moveTrailAmount: {
                type: b.Number,
                title: " ",
                min: 0,
                max: 1e3,
                step: 1,
                defaultValue: S.defaultProps.moveOptions.moveTrailAmount,
                hidden: i => !i.moveEnabled || !i.moveTrailEnabled
            },
            moveSpinEnabled: {
                type: b.Boolean,
                title: "Spin",
                defaultValue: S.defaultProps.moveOptions.moveSpinEnabled,
                hidden: i => !i.moveEnabled
            },
            moveSpinAcceleration: {
                type: b.Number,
                title: " ",
                min: 0,
                max: 1e3,
                step: 1,
                defaultValue: S.defaultProps.moveOptions.moveSpinAcceleration,
                hidden: i => !i.moveEnabled || !i.moveSpinEnabled
            },
            moveAttractEnabled: {
                type: b.Boolean,
                title: "Attract",
                defaultValue: S.defaultProps.moveOptions.moveAttractEnabled,
                hidden: i => !i.moveEnabled
            },
            moveAttractDistance: {
                type: b.Number,
                title: " ",
                min: 0,
                max: 1e3,
                step: 1,
                defaultValue: S.defaultProps.moveOptions.moveAttractDistance,
                hidden: i => !i.moveEnabled || !i.moveAttractEnabled
            }
        }
    },
    shapeOptions: {
        type: b.Object,
        title: "Shape",
        controls: {
            shapeType: {
                type: b.Enum,
                title: "Shape",
                options: ["circle", "edge", "triangle", "polygon", "star", "character", "image"],
                optionTitles: ["Circle", "Square", "Triangle", "Polygon", "Star", "Character", "Image"],
                defaultValue: S.defaultProps.shapeOptions.characterType
            },
            characterType: {
                type: b.String,
                title: "Character",
                defaultValue: S.defaultProps.shapeOptions.characterType,
                hidden: i => i.shapeType !== "character"
            },
            imageSource: {
                type: b.Image,
                title: "Image",
                hidden: i => i.shapeType !== "image"
            },
            imageWidth: {
                type: b.Number,
                title: "Width",
                min: 0,
                max: 1e3,
                defaultValue: S.defaultProps.shapeOptions.imageWidth,
                hidden: i => i.shapeType !== "image"
            },
            imageHeight: {
                type: b.Number,
                title: "Height",
                min: 0,
                max: 1e3,
                defaultValue: S.defaultProps.shapeOptions.imageWidth,
                hidden: i => i.shapeType !== "image"
            }
        }
    },
    clickOptions: {
        type: b.Object,
        title: "Click",
        controls: {
            clickEnabled: {
                type: b.Boolean,
                title: "Enable",
                defaultValue: S.defaultProps.clickOptions.clickEnabled
            },
            clickModes: {
                type: b.Enum,
                title: "Mode",
                options: ["attract", "bubble", "push", "remove", "repulse", "pause", "trail"],
                optionTitles: ["Attract", "Bubble", "Push", "Remove", "Repulse", "Pause", "Trail"],
                defaultValue: S.defaultProps.clickOptions.clickModes,
                hidden: i => !i.clickEnabled
            }
        }
    },
    hoverOptions: {
        type: b.Object,
        title: "Hover",
        controls: {
            hoverEnabled: {
                type: b.Boolean,
                title: "Enable",
                defaultValue: S.defaultProps.hoverOptions.hoverEnabled
            },
            hoverModes: {
                type: b.Enum,
                title: "Mode",
                options: ["none", "attract", "bounce", "bubble", "connect", "grab", "light", "repulse", "slow", "trail"],
                optionTitles: ["None", "Attract", "Bounce", "Bubble", "Connect", "Grab", "Light", "Repulse", "Slow", "Trail"],
                defaultValue: S.defaultProps.hoverOptions.hoverModes,
                hidden: i => !i.hoverEnabled
            },
            hoverParallax: {
                type: b.Boolean,
                title: "Parallax",
                defaultValue: S.defaultProps.hoverOptions.hoverParallax,
                hidden: i => !i.hoverEnabled
            },
            hoverForce: {
                type: b.Number,
                min: 0,
                max: 50,
                step: 1,
                displayStepper: !0,
                title: "Force",
                defaultValue: S.defaultProps.hoverOptions.hoverForce,
                hidden: i => !i.hoverParallax || !i.hoverEnabled
            },
            hoverSmooth: {
                type: b.Number,
                min: 0,
                max: 50,
                step: 1,
                displayStepper: !0,
                title: "Smooth",
                defaultValue: S.defaultProps.hoverOptions.hoverSmooth,
                hidden: i => !i.hoverParallax || !i.hoverEnabled
            }
        }
    },
    rotateOptions: {
        type: b.Object,
        title: "Rotate",
        controls: {
            rotateValue: {
                type: b.Number,
                title: "Value",
                min: -360,
                max: 360,
                step: 1,
                displayStepper: !0,
                defaultValue: S.defaultProps.rotateOptions.rotateValue
            },
            rotateDirection: {
                type: b.Enum,
                title: "Direction",
                options: ["clockwise", "counter-clockwise", "random"],
                optionTitles: ["Clockwise", "Counter Clockwise", "Random"],
                defaultValue: S.defaultProps.rotateOptions.rotateDirection
            },
            rotateAnimation: {
                type: b.Boolean,
                title: "Animate",
                defaultValue: S.defaultProps.rotateOptions.rotateAnimation
            },
            rotateSpeed: {
                type: b.Number,
                title: "Speed",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: S.defaultProps.rotateOptions.rotateSpeed,
                hidden: i => !i.rotateAnimation
            },
            rotateSync: {
                type: b.Boolean,
                title: "Sync",
                defaultValue: S.defaultProps.rotateOptions.rotateSync,
                hidden: i => !i.rotateAnimation
            }
        }
    },
    radius: {
        type: b.Number,
        min: 0,
        max: 1e3,
        step: 1,
        displayStepper: !0,
        defaultValue: S.defaultProps.radius
    },
    particlesID: {
        type: b.String,
        title: "ID",
        defaultValue: "One",
        placeholder: S.defaultProps.particlesID
    }
});
var Bo = i => je.toHexString(je(i));
qt.loadFonts(["GF;Plus Jakarta Sans-600", "GF;Plus Jakarta Sans-700", "GF;Plus Jakarta Sans-700italic", "GF;Plus Jakarta Sans-600italic"]);
var ms = [{
        explicitInter: !0,
        fonts: [{
            family: "Plus Jakarta Sans",
            source: "google",
            style: "normal",
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
            weight: "600"
        }, {
            family: "Plus Jakarta Sans",
            source: "google",
            style: "normal",
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
            weight: "700"
        }, {
            family: "Plus Jakarta Sans",
            source: "google",
            style: "italic",
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
            weight: "700"
        }, {
            family: "Plus Jakarta Sans",
            source: "google",
            style: "italic",
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ37Dh_VMq2oR82k.woff2",
            weight: "600"
        }]
    }],
    vs = ['.framer-ky9ky .framer-styles-preset-1dvk7j8:not(.rich-text-wrapper), .framer-ky9ky .framer-styles-preset-1dvk7j8.rich-text-wrapper h2 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 54px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, #f2f9fe); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-ky9ky .framer-styles-preset-1dvk7j8:not(.rich-text-wrapper), .framer-ky9ky .framer-styles-preset-1dvk7j8.rich-text-wrapper h2 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 43px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, #f2f9fe); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; --framer-text-wrap: balance; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-ky9ky .framer-styles-preset-1dvk7j8:not(.rich-text-wrapper), .framer-ky9ky .framer-styles-preset-1dvk7j8.rich-text-wrapper h2 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, #f2f9fe); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; --framer-text-wrap: balance; } }'],
    gs = "framer-ky9ky";
var Gl = ["f0XekUnFJ", "pBaYfl2fy", "F8qS9W_p7", "Ep6vBUwSh"],
    Il = "framer-hN07v",
    zl = {
        Ep6vBUwSh: "framer-v-l3bqra",
        f0XekUnFJ: "framer-v-1fdxjmg",
        F8qS9W_p7: "framer-v-17o1vl6",
        pBaYfl2fy: "framer-v-1rkya3"
    };

function ys(i, ...t) {
    let e = {};
    return t?.forEach(a => a && Object.assign(e, i[a])), e
}
var Ml = {
        delay: 0,
        duration: .7,
        ease: [0, 0, 1, 1],
        type: "tween"
    },
    Ll = {
        delay: 0,
        duration: 3,
        ease: [0, 0, 1, 1],
        type: "tween"
    },
    Fl = ({
        value: i,
        children: t
    }) => {
        let e = bt(rt),
            a = i ?? e.transition,
            o = xt(() => ({
                ...e,
                transition: a
            }), [JSON.stringify(a)]);
        return _(rt.Provider, {
            value: o,
            children: t
        })
    },
    Dl = T.create(nt),
    Ul = {
        "Card Gradient Bot-left": "Ep6vBUwSh",
        "Card Gradient Bot-right": "F8qS9W_p7",
        "Card Gradient Left": "f0XekUnFJ",
        "Card Gradient Right": "pBaYfl2fy"
    },
    Nl = ({
        height: i,
        id: t,
        width: e,
        ...a
    }) => {
        var o, n;
        return {
            ...a,
            variant: (n = (o = Ul[a.variant]) !== null && o !== void 0 ? o : a.variant) !== null && n !== void 0 ? n : "f0XekUnFJ"
        }
    },
    Hl = (i, t) => i.layoutDependency ? t.join("-") + i.layoutDependency : t.join("-"),
    Bl = yt(function(i, t) {
        let {
            activeLocale: e,
            setLocale: a
        } = Pt(), {
            style: o,
            className: n,
            layoutId: s,
            variant: r,
            ...l
        } = Nl(i), {
            baseVariant: d,
            classNames: h,
            clearLoadingGesture: p,
            gestureHandlers: u,
            gestureVariant: f,
            isLoading: m,
            setGestureState: g,
            setVariant: y,
            variants: w
        } = At({
            cycleOrder: Gl,
            defaultVariant: "f0XekUnFJ",
            variant: r,
            variantClassNames: zl
        }), x = Hl(i, w), {
            activeVariantCallback: A,
            delay: E
        } = he(d), R = A(async (...st) => {
            await E(() => y(qe), 700)
        }), v = A(async (...st) => {
            await E(() => y(qe), 3e3)
        });
        Ko(d, {
            default: R,
            pBaYfl2fy: v
        });
        let W = wt(null),
            K = St(),
            Q = [],
            Ht = Vt();
        return _(_t, {
            id: s ?? K,
            children: _(Dl, {
                animate: w,
                initial: !1,
                children: _(Fl, {
                    value: Ml,
                    ...ys({
                        pBaYfl2fy: {
                            value: Ll
                        }
                    }, d, f),
                    children: _(T.div, {
                        ...l,
                        ...u,
                        className: kt(Il, ...Q, "framer-1fdxjmg", n, h),
                        "data-framer-name": "Card Gradient Left",
                        "data-highlight": !0,
                        layoutDependency: x,
                        layoutId: "f0XekUnFJ",
                        ref: t ?? W,
                        style: {
                            borderBottomLeftRadius: 33,
                            borderBottomRightRadius: 33,
                            borderTopLeftRadius: 33,
                            borderTopRightRadius: 33,
                            ...o
                        },
                        ...ys({
                            Ep6vBUwSh: {
                                "data-framer-name": "Card Gradient Bot-left"
                            },
                            F8qS9W_p7: {
                                "data-framer-name": "Card Gradient Bot-right"
                            },
                            pBaYfl2fy: {
                                "data-framer-name": "Card Gradient Right"
                            }
                        }, d, f),
                        children: _(T.div, {
                            className: "framer-15kt1y9",
                            "data-framer-name": "Stroke",
                            layoutDependency: x,
                            layoutId: "T1boD7R5y",
                            style: {
                                background: 'radial-gradient(10% 10% at 17.599999999999998% 0%, var(--token-90cc85bd-6083-4ac2-af67-f188d4052fe6, rgb(150, 103, 244)) /* {"name":"Purple/200"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                                borderBottomLeftRadius: 40,
                                borderBottomRightRadius: 40,
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40
                            },
                            variants: {
                                Ep6vBUwSh: {
                                    background: 'radial-gradient(7.000000000000001% 45% at 7.5% 50%, var(--token-90cc85bd-6083-4ac2-af67-f188d4052fe6, rgb(150, 103, 244)) /* {"name":"Purple/200"} */ 0%, rgba(255, 255, 255, 0) 100%)'
                                },
                                F8qS9W_p7: {
                                    background: 'radial-gradient(7.000000000000001% 45% at 92.4% 50%, var(--token-90cc85bd-6083-4ac2-af67-f188d4052fe6, rgb(150, 103, 244)) /* {"name":"Purple/200"} */ 0%, rgba(255, 255, 255, 0) 100%)'
                                },
                                pBaYfl2fy: {
                                    background: 'radial-gradient(10% 10% at 81.6% 0%, var(--token-90cc85bd-6083-4ac2-af67-f188d4052fe6, rgb(150, 103, 244)) /* {"name":"Purple/200"} */ 0%, rgba(255, 255, 255, 0) 100%)'
                                }
                            }
                        })
                    })
                })
            })
        })
    }),
    jl = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-hN07v.framer-agi81t, .framer-hN07v .framer-agi81t { display: block; }", ".framer-hN07v.framer-1fdxjmg { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 597px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1018px; will-change: var(--framer-will-change-override, transform); }", ".framer-hN07v .framer-15kt1y9 { align-content: center; align-items: center; bottom: -1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: -1px; overflow: visible; padding: 0px; position: absolute; right: -1px; top: -1px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hN07v.framer-1fdxjmg, .framer-hN07v .framer-15kt1y9 { gap: 0px; } .framer-hN07v.framer-1fdxjmg > *, .framer-hN07v .framer-15kt1y9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-hN07v.framer-1fdxjmg > :first-child, .framer-hN07v .framer-15kt1y9 > :first-child { margin-left: 0px; } .framer-hN07v.framer-1fdxjmg > :last-child, .framer-hN07v .framer-15kt1y9 > :last-child { margin-right: 0px; } }", ".framer-hN07v.framer-v-1rkya3 .framer-15kt1y9 { bottom: unset; height: 599px; left: unset; order: 0; position: relative; right: unset; top: unset; width: 1020px; }", ".framer-hN07v.framer-v-17o1vl6 .framer-15kt1y9 { order: 0; }"],
    re = Ot(Bl, jl, "framer-hN07v"),
    Wo = re;
re.displayName = "Glow Stroke/Huge";
re.defaultProps = {
    height: 597,
    width: 1018
};
Ct(re, {
    variant: {
        options: ["f0XekUnFJ", "pBaYfl2fy", "F8qS9W_p7", "Ep6vBUwSh"],
        optionTitles: ["Card Gradient Left", "Card Gradient Right", "Card Gradient Bot-right", "Card Gradient Bot-left"],
        title: "Variant",
        type: b.Enum
    }
});
Rt(re, [{
    explicitInter: !0,
    fonts: []
}], {
    supportsExplicitInterCodegen: !0
});
var Wl = Et(Wo),
    ql = Et(S),
    Yl = Et(Qe),
    Ql = Xo(T.div),
    Jl = ["aoiFlpyJG", "NF13mW4nI", "Gi0alVYuV"],
    Zl = "framer-h4WYZ",
    Xl = {
        aoiFlpyJG: "framer-v-1w3s9uf",
        Gi0alVYuV: "framer-v-zwnx27",
        NF13mW4nI: "framer-v-1u3b87s"
    };

function De(i, ...t) {
    let e = {};
    return t?.forEach(a => a && Object.assign(e, i[a])), e
}
var Kl = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    $l = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30
    },
    tc = {
        damping: 40,
        delay: 0,
        mass: 1,
        stiffness: 150,
        type: "spring"
    },
    ec = ({
        value: i,
        children: t
    }) => {
        let e = bt(rt),
            a = i ?? e.transition,
            o = xt(() => ({
                ...e,
                transition: a
            }), [JSON.stringify(a)]);
        return _(rt.Provider, {
            value: o,
            children: t
        })
    },
    ic = T.create(nt),
    ac = {
        Desktop: "aoiFlpyJG",
        Mobile: "Gi0alVYuV",
        Tablet: "NF13mW4nI"
    },
    oc = ({
        height: i,
        id: t,
        width: e,
        ...a
    }) => {
        var o, n;
        return {
            ...a,
            variant: (n = (o = ac[a.variant]) !== null && o !== void 0 ? o : a.variant) !== null && n !== void 0 ? n : "aoiFlpyJG"
        }
    },
    nc = (i, t) => i.layoutDependency ? t.join("-") + i.layoutDependency : t.join("-"),
    sc = yt(function(i, t) {
        let {
            activeLocale: e,
            setLocale: a
        } = Pt(), {
            style: o,
            className: n,
            layoutId: s,
            variant: r,
            ...l
        } = oc(i), {
            baseVariant: d,
            classNames: h,
            clearLoadingGesture: p,
            gestureHandlers: u,
            gestureVariant: f,
            isLoading: m,
            setGestureState: g,
            setVariant: y,
            variants: w
        } = At({
            cycleOrder: Jl,
            defaultVariant: "aoiFlpyJG",
            variant: r,
            variantClassNames: Xl
        }), x = nc(i, w), A = wt(null), E = St(), R = [gs], v = Vt();
        return _(_t, {
            id: s ?? E,
            children: _(ic, {
                animate: w,
                initial: !1,
                children: _(ec, {
                    value: Kl,
                    children: _(T.div, {
                        ...l,
                        ...u,
                        className: kt(Zl, ...R, "framer-1w3s9uf", n, h),
                        "data-framer-name": "Desktop",
                        layoutDependency: x,
                        layoutId: "aoiFlpyJG",
                        ref: t ?? A,
                        style: {
                            borderBottomLeftRadius: 33,
                            borderBottomRightRadius: 33,
                            borderTopLeftRadius: 33,
                            borderTopRightRadius: 33,
                            ...o
                        },
                        ...De({
                            Gi0alVYuV: {
                                "data-framer-name": "Mobile"
                            },
                            NF13mW4nI: {
                                "data-framer-name": "Tablet"
                            }
                        }, d, f),
                        children: pt(Ql, {
                            __framer__animate: {
                                transition: tc
                            },
                            __framer__animateOnce: !0,
                            __framer__enter: $l,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: "framer-vnnjvr",
                            "data-border": !0,
                            "data-framer-name": "Container",
                            layoutDependency: x,
                            layoutId: "h9TYPkDRR",
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "var(--token-dac0bec6-6acb-444c-ac02-87950f2b7f18, rgb(26, 24, 34))",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                borderBottomLeftRadius: 33,
                                borderBottomRightRadius: 33,
                                borderTopLeftRadius: 33,
                                borderTopRightRadius: 33,
                                boxShadow: "0px 4px 33px 0px rgba(0, 0, 0, 0.05000000074505806)"
                            },
                            children: [_(T.div, {
                                className: "framer-1wsn881",
                                "data-framer-name": "App_Blur",
                                layoutDependency: x,
                                layoutId: "HNFLdYmSF",
                                style: {
                                    backgroundColor: "rgb(135, 89, 242)",
                                    borderBottomLeftRadius: "100%",
                                    borderBottomRightRadius: "100%",
                                    borderTopLeftRadius: "100%",
                                    borderTopRightRadius: "100%",
                                    filter: "blur(35px)",
                                    WebkitFilter: "blur(35px)"
                                },
                                variants: {
                                    Gi0alVYuV: {
                                        filter: "blur(30px)",
                                        WebkitFilter: "blur(30px)"
                                    }
                                }
                            }), pt(T.div, {
                                className: "framer-1cqr11s",
                                "data-framer-name": "Section Background",
                                layoutDependency: x,
                                layoutId: "q73RPLCV3",
                                style: {
                                    borderBottomLeftRadius: 33,
                                    borderBottomRightRadius: 33,
                                    borderTopLeftRadius: 33,
                                    borderTopRightRadius: 33
                                },
                                children: [_(dt, {
                                    height: 378.8,
                                    width: `min(${v?.width||"100vw"} - 120px, 1228px)`,
                                    y: (v?.y || 0) + 90 + (((v?.height || 559) - 180 - 378.8) / 2 + 0 + 0) + 0 + 0,
                                    ...De({
                                        Gi0alVYuV: {
                                            height: 274.8,
                                            width: `min(${v?.width||"100vw"} - 40px, 1228px)`,
                                            y: (v?.y || 0) + 45 + (((v?.height || 200) - 90 - 274.8) / 2 + 0 + 0) + 0 + 0
                                        },
                                        NF13mW4nI: {
                                            height: 288.8,
                                            width: `min(${v?.width||"100vw"} - 70px, 1228px)`,
                                            y: (v?.y || 0) + 60 + (((v?.height || 200) - 120 - 288.8) / 2 + 0 + 0) + 0 + 0
                                        }
                                    }, d, f),
                                    children: _(T.div, {
                                        className: "framer-rc76vj-container",
                                        layoutDependency: x,
                                        layoutId: "d8ajOQAD0-container",
                                        children: _(Wo, {
                                            height: "100%",
                                            id: "d8ajOQAD0",
                                            layoutId: "d8ajOQAD0",
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            variant: "f0XekUnFJ",
                                            width: "100%"
                                        })
                                    })
                                }), _(T.div, {
                                    className: "framer-31fwi8",
                                    "data-framer-name": "Color BG",
                                    layoutDependency: x,
                                    layoutId: "V_eGGCRyy",
                                    style: {
                                        backgroundColor: "var(--token-518f5c43-2a7d-48f3-9a8f-3d4fa14a1ea5, rgb(1, 1, 1))",
                                        borderBottomLeftRadius: 33,
                                        borderBottomRightRadius: 33,
                                        borderTopLeftRadius: 33,
                                        borderTopRightRadius: 33
                                    }
                                }), _($o, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: ue((v?.y || 0) + 90 + (((v?.height || 559) - 180 - 378.8) / 2 + 0 + 0) + 0 + 30),
                                        pixelHeight: 559,
                                        pixelWidth: 1227,
                                        positionX: "center",
                                        positionY: "center",
                                        sizes: `min(${v?.width||"100vw"} - 120px, 1228px)`,
                                        src: "https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png",
                                        srcSet: "https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png?scale-down-to=512 512w,https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png 1227w"
                                    },
                                    className: "framer-g7ady7",
                                    "data-framer-name": "Image App BG",
                                    layoutDependency: x,
                                    layoutId: "uMLbacU9o",
                                    style: {
                                        borderBottomLeftRadius: 33,
                                        borderBottomRightRadius: 33,
                                        borderTopLeftRadius: 33,
                                        borderTopRightRadius: 33
                                    },
                                    ...De({
                                        Gi0alVYuV: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: ue((v?.y || 0) + 45 + (((v?.height || 200) - 90 - 274.8) / 2 + 0 + 0) + 0 + 274.8 - 159),
                                                pixelHeight: 559,
                                                pixelWidth: 1227,
                                                positionX: "center",
                                                positionY: "center",
                                                sizes: `min(${v?.width||"100vw"} - 40px, 1228px)`,
                                                src: "https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png",
                                                srcSet: "https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png?scale-down-to=512 512w,https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png 1227w"
                                            }
                                        },
                                        NF13mW4nI: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: ue((v?.y || 0) + 60 + (((v?.height || 200) - 120 - 288.8) / 2 + 0 + 0) + 0 + 288.8 - 402),
                                                pixelHeight: 559,
                                                pixelWidth: 1227,
                                                positionX: "center",
                                                positionY: "center",
                                                sizes: `min(${v?.width||"100vw"} - 70px, 1228px)`,
                                                src: "https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png",
                                                srcSet: "https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png?scale-down-to=512 512w,https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Kcg8NcRDb6grRkpV3T7dENJgjuM.png 1227w"
                                            }
                                        }
                                    }, d, f)
                                }), _(dt, {
                                    children: _(T.div, {
                                        className: "framer-r098pn-container",
                                        layoutDependency: x,
                                        layoutId: "H48DCNd0n-container",
                                        children: _(S, {
                                            background: "rgba(0, 0, 0, 0)",
                                            clickOptions: {
                                                clickEnabled: !1,
                                                clickModes: "push"
                                            },
                                            color: "rgb(106, 64, 153)",
                                            colors: [],
                                            densityOptions: {
                                                densityArea: 1e4,
                                                densityEnable: !1,
                                                densityFactor: 50
                                            },
                                            fpsOptions: 60,
                                            height: "100%",
                                            hoverOptions: {
                                                hoverEnabled: !1,
                                                hoverForce: 10,
                                                hoverModes: "none",
                                                hoverParallax: !0,
                                                hoverSmooth: 10
                                            },
                                            id: "H48DCNd0n",
                                            layoutId: "H48DCNd0n",
                                            linksOptions: {
                                                linksColor: "rgb(255, 255, 255)",
                                                linksDistance: 100,
                                                linksEnabled: !1,
                                                linksOpacity: .2,
                                                linksWidth: 1
                                            },
                                            modeOptions: {
                                                bubbleDistance: 100,
                                                bubbleDuration: .4,
                                                bubbleSize: 40,
                                                connectDistance: 100,
                                                connectLinksOpacity: .2,
                                                connectRadius: 50,
                                                grabDistance: 100,
                                                grabLinksOpacity: .2,
                                                pushQuantity: 4,
                                                removeQuantity: 4,
                                                repulseDistance: 200,
                                                repulseDuration: 1.2,
                                                trailDelay: .1,
                                                trailQuantity: 10
                                            },
                                            moveOptions: {
                                                moveAttractDistance: 220,
                                                moveAttractEnabled: !1,
                                                moveDirection: "top",
                                                moveEnabled: !0,
                                                moveGravityAcceleration: 1,
                                                moveGravityEnabled: !1,
                                                moveGravityMaxSpeed: 1,
                                                moveOut: "out",
                                                moveRandom: !1,
                                                moveSpeed: 1,
                                                moveSpinAcceleration: 1,
                                                moveSpinEnabled: !1,
                                                moveStraight: !1,
                                                moveTrailAmount: 100,
                                                moveTrailEnabled: !1,
                                                moveVibrate: !1
                                            },
                                            number: 9,
                                            opacityOptions: {
                                                opacity: 1,
                                                opacityMax: 1,
                                                opacityMin: 0,
                                                opacityType: !0
                                            },
                                            particlesID: "Two",
                                            radius: 0,
                                            rotateOptions: {
                                                rotateAnimation: !1,
                                                rotateDirection: "random",
                                                rotateSpeed: 5,
                                                rotateSync: !1,
                                                rotateValue: 0
                                            },
                                            shapeOptions: {
                                                characterType: "\u{1F60E}",
                                                imageHeight: 100,
                                                imageWidth: 100,
                                                shapeType: "circle"
                                            },
                                            sizeOptions: {
                                                size: 1,
                                                sizeMax: 1.5,
                                                sizeMin: 1,
                                                sizeType: !1
                                            },
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            width: "100%"
                                        })
                                    })
                                })]
                            }), pt(T.div, {
                                className: "framer-1tysdrr",
                                "data-framer-name": "Content",
                                layoutDependency: x,
                                layoutId: "A5tP0QsSj",
                                children: [_(T.div, {
                                    className: "framer-1uh9ewa",
                                    "data-framer-name": "Heading",
                                    layoutDependency: x,
                                    layoutId: "eZLhni6Lc",
                                    children: _(Kt, {
                                        __fromCanvasComponent: !0,
                                        children: _(nt, {
                                            children: _(T.h2, {
                                                className: "framer-styles-preset-1dvk7j8",
                                                "data-styles-preset": "vh1e5yIUY",
                                                style: {
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-1of0zx5, rgb(28, 28, 28))"
                                                },
                                                children: _(T.span, {
                                                    "data-text-fill": "true",
                                                    style: {
                                                        backgroundImage: "linear-gradient(90deg, var(--token-d2bc7a45-11e0-468d-8e86-da93ff072b7c, rgb(175, 175, 175)) -7.000000000000001%, var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, rgb(242, 249, 254)) 52%)"
                                                    },
                                                    children: "Solara."
                                                })
                                            })
                                        }),
                                        className: "framer-1ums9jd",
                                        fonts: ["Inter"],
                                        layoutDependency: x,
                                        layoutId: "h5gIuWNUR",
                                        style: {
                                            "--extracted-1of0zx5": "rgb(28, 28, 28)",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline"
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), _(T.div, {
                                    className: "framer-dkuj9k",
                                    "data-framer-name": "Description",
                                    layoutDependency: x,
                                    layoutId: "pBUiX5HK5",
                                    children: _(dt, {
                                        height: 50,
                                        y: (v?.y || 0) + 90 + (((v?.height || 559) - 180 - 378.8) / 2 + 0 + 0) + 120 + 0 + 0 + 88.8 + 0 + 0,
                                        ...De({
                                            Gi0alVYuV: {
                                                y: (v?.y || 0) + 45 + (((v?.height || 200) - 90 - 274.8) / 2 + 0 + 0) + 70 + 0 + 0 + 84.8 + 0 + 0
                                            },
                                            NF13mW4nI: {
                                                y: (v?.y || 0) + 60 + (((v?.height || 200) - 120 - 288.8) / 2 + 0 + 0) + 75 + 0 + 0 + 88.8 + 0 + 0
                                            }
                                        }, d, f),
                                        children: _(T.div, {
                                            className: "framer-1jrgush-container",
                                            layoutDependency: x,
                                            layoutId: "vpTRahXt0-container",
                                            children: _(Qe, {
                                                c3NOAKqXS: "https://f84.workupload.com/download/94LJ3vBfCNz",
                                                gCmmKaF_0: "Download",
                                                height: "100%",
                                                id: "vpTRahXt0",
                                                layoutId: "vpTRahXt0",
                                                variant: "qRV74Qk0f",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                })
            })
        })
    }),
    rc = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-h4WYZ.framer-3jtikj, .framer-h4WYZ .framer-3jtikj { display: block; }", ".framer-h4WYZ.framer-1w3s9uf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 90px 60px 90px 60px; position: relative; width: 1200px; }", ".framer-h4WYZ .framer-vnnjvr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1228px; overflow: visible; padding: 120px 0px 120px 0px; position: relative; width: 100%; }", ".framer-h4WYZ .framer-1wsn881 { bottom: 15px; flex: none; height: 49px; left: 90px; position: absolute; right: 90px; }", ".framer-h4WYZ .framer-1cqr11s { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }", ".framer-h4WYZ .framer-rc76vj-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }", ".framer-h4WYZ .framer-31fwi8 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 2px; }", ".framer-h4WYZ .framer-g7ady7 { flex: none; height: 496px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 30px; will-change: var(--framer-will-change-override, transform); }", ".framer-h4WYZ .framer-r098pn-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 2px; }", ".framer-h4WYZ .framer-1tysdrr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }", ".framer-h4WYZ .framer-1uh9ewa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-h4WYZ .framer-1ums9jd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-h4WYZ .framer-dkuj9k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 454px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-h4WYZ .framer-1jrgush-container { flex: none; height: auto; position: relative; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-h4WYZ.framer-1w3s9uf, .framer-h4WYZ .framer-vnnjvr, .framer-h4WYZ .framer-1tysdrr, .framer-h4WYZ .framer-1uh9ewa, .framer-h4WYZ .framer-dkuj9k { gap: 0px; } .framer-h4WYZ.framer-1w3s9uf > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-h4WYZ.framer-1w3s9uf > :first-child, .framer-h4WYZ .framer-vnnjvr > :first-child, .framer-h4WYZ .framer-1tysdrr > :first-child, .framer-h4WYZ .framer-1uh9ewa > :first-child, .framer-h4WYZ .framer-dkuj9k > :first-child { margin-top: 0px; } .framer-h4WYZ.framer-1w3s9uf > :last-child, .framer-h4WYZ .framer-vnnjvr > :last-child, .framer-h4WYZ .framer-1tysdrr > :last-child, .framer-h4WYZ .framer-1uh9ewa > :last-child, .framer-h4WYZ .framer-dkuj9k > :last-child { margin-bottom: 0px; } .framer-h4WYZ .framer-vnnjvr > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-h4WYZ .framer-1tysdrr > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-h4WYZ .framer-1uh9ewa > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-h4WYZ .framer-dkuj9k > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }", ".framer-h4WYZ.framer-v-1u3b87s.framer-1w3s9uf { padding: 60px 35px 60px 35px; width: 810px; }", ".framer-h4WYZ.framer-v-1u3b87s .framer-vnnjvr { padding: 75px 0px 75px 0px; }", ".framer-h4WYZ.framer-v-1u3b87s .framer-g7ady7 { bottom: -3px; height: 405px; top: unset; }", ".framer-h4WYZ.framer-v-1u3b87s .framer-dkuj9k { gap: 32px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-h4WYZ.framer-v-1u3b87s .framer-dkuj9k { gap: 0px; } .framer-h4WYZ.framer-v-1u3b87s .framer-dkuj9k > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-h4WYZ.framer-v-1u3b87s .framer-dkuj9k > :first-child { margin-top: 0px; } .framer-h4WYZ.framer-v-1u3b87s .framer-dkuj9k > :last-child { margin-bottom: 0px; } }", ".framer-h4WYZ.framer-v-zwnx27.framer-1w3s9uf { padding: 45px 20px 45px 20px; width: 390px; }", ".framer-h4WYZ.framer-v-zwnx27 .framer-vnnjvr { padding: 70px 0px 70px 0px; }", ".framer-h4WYZ.framer-v-zwnx27 .framer-1wsn881 { left: 45px; right: 45px; }", ".framer-h4WYZ.framer-v-zwnx27 .framer-g7ady7 { bottom: 0px; height: 159px; top: unset; }", ".framer-h4WYZ.framer-v-zwnx27 .framer-r098pn-container { top: 3px; }", ".framer-h4WYZ.framer-v-zwnx27 .framer-1tysdrr { gap: 20px; padding: 0px 30px 0px 30px; }", ".framer-h4WYZ.framer-v-zwnx27 .framer-1uh9ewa { gap: 12px; }", ".framer-h4WYZ.framer-v-zwnx27 .framer-1ums9jd { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-h4WYZ.framer-v-zwnx27 .framer-dkuj9k { gap: 25px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-h4WYZ.framer-v-zwnx27 .framer-1tysdrr, .framer-h4WYZ.framer-v-zwnx27 .framer-1uh9ewa, .framer-h4WYZ.framer-v-zwnx27 .framer-dkuj9k { gap: 0px; } .framer-h4WYZ.framer-v-zwnx27 .framer-1tysdrr > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-h4WYZ.framer-v-zwnx27 .framer-1tysdrr > :first-child, .framer-h4WYZ.framer-v-zwnx27 .framer-1uh9ewa > :first-child, .framer-h4WYZ.framer-v-zwnx27 .framer-dkuj9k > :first-child { margin-top: 0px; } .framer-h4WYZ.framer-v-zwnx27 .framer-1tysdrr > :last-child, .framer-h4WYZ.framer-v-zwnx27 .framer-1uh9ewa > :last-child, .framer-h4WYZ.framer-v-zwnx27 .framer-dkuj9k > :last-child { margin-bottom: 0px; } .framer-h4WYZ.framer-v-zwnx27 .framer-1uh9ewa > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-h4WYZ.framer-v-zwnx27 .framer-dkuj9k > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } }", ...vs, '.framer-h4WYZ[data-border="true"]::after, .framer-h4WYZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    le = Ot(sc, rc, "framer-h4WYZ"),
    Ku = le;
le.displayName = "Call To Action/Section";
le.defaultProps = {
    height: 559,
    width: 1200
};
Ct(le, {
    variant: {
        options: ["aoiFlpyJG", "NF13mW4nI", "Gi0alVYuV"],
        optionTitles: ["Desktop", "Tablet", "Mobile"],
        title: "Variant",
        type: b.Enum
    }
});
Rt(le, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...Wl, ...ql, ...Yl, ...$t(ms)], {
    supportsExplicitInterCodegen: !0
});
qt.loadFonts(["GF;Manrope-regular", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var bs = [{
        explicitInter: !0,
        fonts: [{
            family: "Manrope",
            source: "google",
            style: "normal",
            url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_A87jxeN7B.woff2",
            weight: "400"
        }, {
            family: "Inter",
            source: "framer",
            style: "normal",
            unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
            url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "normal",
            unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
            url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "normal",
            unicodeRange: "U+1F00-1FFF",
            url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "normal",
            unicodeRange: "U+0370-03FF",
            url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "normal",
            unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
            url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "normal",
            unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
            url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "normal",
            unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
            url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
            url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
            url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+1F00-1FFF",
            url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0370-03FF",
            url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
            url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
            url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
            url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2",
            weight: "700"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
            url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2",
            weight: "400"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
            url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2",
            weight: "400"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+1F00-1FFF",
            url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2",
            weight: "400"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0370-03FF",
            url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2",
            weight: "400"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
            url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2",
            weight: "400"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
            url: "https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2",
            weight: "400"
        }, {
            family: "Inter",
            source: "framer",
            style: "italic",
            unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
            url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2",
            weight: "400"
        }]
    }],
    Ss = ['.framer-gh0pF .framer-styles-preset-9xij2g:not(.rich-text-wrapper), .framer-gh0pF .framer-styles-preset-9xij2g.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d2bc7a45-11e0-468d-8e86-da93ff072b7c, #afafaf); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-gh0pF .framer-styles-preset-9xij2g:not(.rich-text-wrapper), .framer-gh0pF .framer-styles-preset-9xij2g.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d2bc7a45-11e0-468d-8e86-da93ff072b7c, #afafaf); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-gh0pF .framer-styles-preset-9xij2g:not(.rich-text-wrapper), .framer-gh0pF .framer-styles-preset-9xij2g.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d2bc7a45-11e0-468d-8e86-da93ff072b7c, #afafaf); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'],
    xs = "framer-gh0pF";
var cc = Et(Ye),
    dc = {
        DI8aB_O6T: {
            hover: !0
        }
    },
    hc = ["DI8aB_O6T", "bnsDWh6s5"],
    uc = "framer-sc94c",
    pc = {
        bnsDWh6s5: "framer-v-12gn3ba",
        DI8aB_O6T: "framer-v-1fuva7n"
    };

function qo(i, ...t) {
    let e = {};
    return t?.forEach(a => a && Object.assign(e, i[a])), e
}
var fc = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    mc = ({
        value: i,
        children: t
    }) => {
        let e = bt(rt),
            a = i ?? e.transition,
            o = xt(() => ({
                ...e,
                transition: a
            }), [JSON.stringify(a)]);
        return _(rt.Provider, {
            value: o,
            children: t
        })
    },
    vc = T(nt),
    gc = {
        Close: "DI8aB_O6T",
        Open: "bnsDWh6s5"
    },
    yc = ({
        click: i,
        description: t,
        height: e,
        id: a,
        question: o,
        width: n,
        ...s
    }) => {
        var r, l, d, h;
        return {
            ...s,
            h8iGjYmBY: (r = o ?? s.h8iGjYmBY) !== null && r !== void 0 ? r : "Question",
            variant: (d = (l = gc[s.variant]) !== null && l !== void 0 ? l : s.variant) !== null && d !== void 0 ? d : "DI8aB_O6T",
            wQl2D9PqT: i ?? s.wQl2D9PqT,
            YgvPXMWsF: (h = t ?? s.YgvPXMWsF) !== null && h !== void 0 ? h : "Description"
        }
    },
    bc = (i, t) => i.layoutDependency ? t.join("-") + i.layoutDependency : t.join("-"),
    Sc = yt(function(i, t) {
        let {
            activeLocale: e,
            setLocale: a
        } = Pt(), {
            style: o,
            className: n,
            layoutId: s,
            variant: r,
            YgvPXMWsF: l,
            h8iGjYmBY: d,
            wQl2D9PqT: h,
            ...p
        } = yc(i), {
            baseVariant: u,
            classNames: f,
            clearLoadingGesture: m,
            gestureHandlers: g,
            gestureVariant: y,
            isLoading: w,
            setGestureState: x,
            setVariant: A,
            variants: E
        } = At({
            cycleOrder: hc,
            defaultVariant: "DI8aB_O6T",
            enabledGestures: dc,
            variant: r,
            variantClassNames: pc
        }), R = bc(i, E), {
            activeVariantCallback: v,
            delay: W
        } = he(u), K = v(async (...ut) => {
            if (x({
                    isPressed: !1
                }), h && await h(...ut) === !1) return !1;
            A("bnsDWh6s5")
        }), Q = v(async (...ut) => {
            if (x({
                    isPressed: !1
                }), h && await h(...ut) === !1) return !1;
            A("DI8aB_O6T")
        }), Ht = wt(null), st = () => u === "bnsDWh6s5", Bt = St(), gt = [an, xs], Xt = Vt();
        return _(_t, {
            id: s ?? Bt,
            children: _(vc, {
                animate: E,
                initial: !1,
                children: _(mc, {
                    value: fc,
                    children: _(T.div, {
                        ...p,
                        ...g,
                        className: kt(uc, ...gt, "framer-1fuva7n", n, f),
                        "data-border": !0,
                        "data-framer-name": "Close",
                        "data-highlight": !0,
                        layoutDependency: R,
                        layoutId: "DI8aB_O6T",
                        onTap: K,
                        ref: t ?? Ht,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "var(--token-466f412f-31e4-4f7f-a7e6-91a69b113f31, rgba(1, 1, 1, 0))",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "var(--token-466f412f-31e4-4f7f-a7e6-91a69b113f31, rgba(1, 1, 1, 0))",
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            ...o
                        },
                        variants: {
                            "DI8aB_O6T-hover": {
                                backgroundColor: "var(--token-b5d64e1c-d37d-4055-8848-8c028ccb4878, rgb(25, 22, 36))"
                            },
                            bnsDWh6s5: {
                                "--border-color": "var(--token-dac0bec6-6acb-444c-ac02-87950f2b7f18, rgb(26, 24, 34))",
                                backgroundColor: "var(--token-b5d64e1c-d37d-4055-8848-8c028ccb4878, rgb(25, 22, 36))"
                            }
                        },
                        ...qo({
                            "DI8aB_O6T-hover": {
                                "data-framer-name": void 0
                            },
                            bnsDWh6s5: {
                                "data-framer-name": "Open",
                                onTap: Q
                            }
                        }, u, y),
                        children: pt(T.div, {
                            className: "framer-ly7958",
                            "data-framer-name": "Accordion content",
                            layoutDependency: R,
                            layoutId: "g1qKCbHDF",
                            children: [pt(T.div, {
                                className: "framer-1ywcw29",
                                "data-framer-name": "Heading",
                                layoutDependency: R,
                                layoutId: "YJ0ePu68Z",
                                children: [_(Kt, {
                                    __fromCanvasComponent: !0,
                                    children: _(nt, {
                                        children: _(T.h3, {
                                            className: "framer-styles-preset-eji9qq",
                                            "data-styles-preset": "nNG7G9K0j",
                                            style: {
                                                "--framer-text-color": "var(--extracted-a0htzi, var(--token-d2bc7a45-11e0-468d-8e86-da93ff072b7c, rgb(175, 175, 175)))"
                                            },
                                            children: "Question"
                                        })
                                    }),
                                    className: "framer-ltcikd",
                                    fonts: ["Inter"],
                                    layoutDependency: R,
                                    layoutId: "Lcjx8BrRV",
                                    style: {
                                        "--extracted-a0htzi": "var(--token-d2bc7a45-11e0-468d-8e86-da93ff072b7c, rgb(175, 175, 175))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    text: d,
                                    variants: {
                                        "DI8aB_O6T-hover": {
                                            "--extracted-a0htzi": "var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, rgb(242, 249, 254))"
                                        },
                                        bnsDWh6s5: {
                                            "--extracted-a0htzi": "var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, rgb(242, 249, 254))"
                                        }
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...qo({
                                        "DI8aB_O6T-hover": {
                                            children: _(nt, {
                                                children: _(T.h3, {
                                                    className: "framer-styles-preset-eji9qq",
                                                    "data-styles-preset": "nNG7G9K0j",
                                                    style: {
                                                        "--framer-text-color": "var(--extracted-a0htzi, var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, rgb(242, 249, 254)))"
                                                    },
                                                    children: "Question"
                                                })
                                            })
                                        },
                                        bnsDWh6s5: {
                                            children: _(nt, {
                                                children: _(T.h3, {
                                                    className: "framer-styles-preset-eji9qq",
                                                    "data-styles-preset": "nNG7G9K0j",
                                                    style: {
                                                        "--framer-text-color": "var(--extracted-a0htzi, var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, rgb(242, 249, 254)))"
                                                    },
                                                    children: "Question"
                                                })
                                            })
                                        }
                                    }, u, y)
                                }), _(dt, {
                                    children: _(T.div, {
                                        className: "framer-62oit9-container",
                                        layoutDependency: R,
                                        layoutId: "p_Pc8Qide-container",
                                        style: {
                                            rotate: 0
                                        },
                                        variants: {
                                            bnsDWh6s5: {
                                                rotate: 180
                                            }
                                        },
                                        children: _(Ye, {
                                            color: "var(--token-d2bc7a45-11e0-468d-8e86-da93ff072b7c, rgb(175, 175, 175))",
                                            height: "100%",
                                            iconSearch: "Home",
                                            iconSelection: "chevron-down",
                                            id: "p_Pc8Qide",
                                            layoutId: "p_Pc8Qide",
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            width: "100%",
                                            ...qo({
                                                "DI8aB_O6T-hover": {
                                                    color: "var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, rgb(242, 249, 254))"
                                                },
                                                bnsDWh6s5: {
                                                    color: "var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, rgb(242, 249, 254))"
                                                }
                                            }, u, y)
                                        })
                                    })
                                })]
                            }), st() && _(T.div, {
                                className: "framer-q4h3wb",
                                "data-framer-name": "Description",
                                layoutDependency: R,
                                layoutId: "cgO5zLmlV",
                                children: st() && _(Kt, {
                                    __fromCanvasComponent: !0,
                                    children: _(nt, {
                                        children: _(T.p, {
                                            className: "framer-styles-preset-9xij2g",
                                            "data-styles-preset": "V9jUpl5I5",
                                            style: {
                                                "--framer-text-alignment": "left"
                                            },
                                            children: "Description"
                                        })
                                    }),
                                    className: "framer-56aqax",
                                    fonts: ["Inter"],
                                    layoutDependency: R,
                                    layoutId: "Nc1T_QTON",
                                    style: {
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    text: l,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        })
                    })
                })
            })
        })
    }),
    xc = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-sc94c.framer-9i29he, .framer-sc94c .framer-9i29he { display: block; }", ".framer-sc94c.framer-1fuva7n { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 18px 15px 24px 15px; position: relative; width: 854px; will-change: var(--framer-will-change-override, transform); }", ".framer-sc94c .framer-ly7958 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 94%; }", ".framer-sc94c .framer-1ywcw29 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-sc94c .framer-ltcikd { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-sc94c .framer-62oit9-container { flex: none; height: 24px; position: relative; width: 24px; }", ".framer-sc94c .framer-q4h3wb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 200px; overflow: visible; padding: 0px 30px 0px 0px; position: relative; width: 100%; }", ".framer-sc94c .framer-56aqax { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-sc94c.framer-1fuva7n, .framer-sc94c .framer-ly7958, .framer-sc94c .framer-1ywcw29, .framer-sc94c .framer-q4h3wb { gap: 0px; } .framer-sc94c.framer-1fuva7n > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-sc94c.framer-1fuva7n > :first-child, .framer-sc94c .framer-ly7958 > :first-child { margin-top: 0px; } .framer-sc94c.framer-1fuva7n > :last-child, .framer-sc94c .framer-ly7958 > :last-child { margin-bottom: 0px; } .framer-sc94c .framer-ly7958 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-sc94c .framer-1ywcw29 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-sc94c .framer-1ywcw29 > :first-child, .framer-sc94c .framer-q4h3wb > :first-child { margin-left: 0px; } .framer-sc94c .framer-1ywcw29 > :last-child, .framer-sc94c .framer-q4h3wb > :last-child { margin-right: 0px; } .framer-sc94c .framer-q4h3wb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ".framer-sc94c.framer-v-12gn3ba.framer-1fuva7n { padding: 35px 15px 35px 15px; }", ".framer-sc94c.framer-v-12gn3ba .framer-q4h3wb { min-height: unset; }", ...en, ...Ss, '.framer-sc94c[data-border="true"]::after, .framer-sc94c [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    ce = Ot(Sc, xc, "framer-sc94c"),
    Zt = ce;
ce.displayName = "FAQ/Accordion Item";
ce.defaultProps = {
    height: 71,
    width: 854
};
Ct(ce, {
    variant: {
        options: ["DI8aB_O6T", "bnsDWh6s5"],
        optionTitles: ["Close", "Open"],
        title: "Variant",
        type: b.Enum
    },
    YgvPXMWsF: {
        defaultValue: "Description",
        displayTextArea: !1,
        title: "Description",
        type: b.String
    },
    h8iGjYmBY: {
        defaultValue: "Question",
        displayTextArea: !1,
        title: "Question",
        type: b.String
    },
    wQl2D9PqT: {
        title: "Click",
        type: b.EventHandler
    }
});
Rt(ce, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...cc, ...$t(tn), ...$t(bs)], {
    supportsExplicitInterCodegen: !0
});
var wc = Et(Zt),
    _c = "framer-oh1N4",
    Pc = {
        K1L64Q3uz: "framer-v-mek02q"
    };
var Cc = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    kc = ({
        value: i,
        children: t
    }) => {
        let e = bt(rt),
            a = i ?? e.transition,
            o = xt(() => ({
                ...e,
                transition: a
            }), [JSON.stringify(a)]);
        return _(rt.Provider, {
            value: o,
            children: t
        })
    },
    Vc = T.create(nt),
    Oc = ({
        height: i,
        id: t,
        width: e,
        ...a
    }) => ({
        ...a
    }),
    Ac = (i, t) => i.layoutDependency ? t.join("-") + i.layoutDependency : t.join("-"),
    Rc = yt(function(i, t) {
        let {
            activeLocale: e,
            setLocale: a
        } = Pt(), {
            style: o,
            className: n,
            layoutId: s,
            variant: r,
            ...l
        } = Oc(i), {
            baseVariant: d,
            classNames: h,
            clearLoadingGesture: p,
            gestureHandlers: u,
            gestureVariant: f,
            isLoading: m,
            setGestureState: g,
            setVariant: y,
            variants: w
        } = At({
            defaultVariant: "K1L64Q3uz",
            variant: r,
            variantClassNames: Pc
        }), x = Ac(i, w), A = wt(null), E = St(), R = [], v = Vt();
        return _(_t, {
            id: s ?? E,
            children: _(Vc, {
                animate: w,
                initial: !1,
                children: _(kc, {
                    value: Cc,
                    children: pt(T.div, {
                        ...l,
                        ...u,
                        className: kt(_c, ...R, "framer-mek02q", n, h),
                        "data-framer-name": "Accordion Collapsed",
                        layoutDependency: x,
                        layoutId: "K1L64Q3uz",
                        ref: t ?? A,
                        style: {
                            ...o
                        },
                        children: [_(dt, {
                            height: 71,
                            width: v?.width || "100vw",
                            y: (v?.y || 0) + 0 + (((v?.height || 319) - 0 - 320) / 2 + 0 + 0),
                            children: _(T.div, {
                                className: "framer-sin4xp-container",
                                layoutDependency: x,
                                layoutId: "GbIYjMAUO-container",
                                children: _(Zt, {
                                    h8iGjYmBY: "What's the official discord/telegram?",
                                    height: "100%",
                                    id: "GbIYjMAUO",
                                    layoutId: "GbIYjMAUO",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "DI8aB_O6T",
                                    width: "100%",
                                    YgvPXMWsF: "The discord and telegram are not available here - and this is not a claim that we have such channels."
                                })
                            })
                        }), _(dt, {
                            height: 71,
                            width: v?.width || "100vw",
                            y: (v?.y || 0) + 0 + (((v?.height || 319) - 0 - 320) / 2 + 71 + 12),
                            children: _(T.div, {
                                className: "framer-qffyvc-container",
                                layoutDependency: x,
                                layoutId: "UUFTiEKd2-container",
                                children: _(Zt, {
                                    h8iGjYmBY: "How much sUNC / UNC?",
                                    height: "100%",
                                    id: "UUFTiEKd2",
                                    layoutId: "UUFTiEKd2",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "DI8aB_O6T",
                                    width: "100%",
                                    YgvPXMWsF: "We sit around 50 - 60% sUNC, and 66% UNC."
                                })
                            })
                        }), _(dt, {
                            height: 71,
                            width: v?.width || "100vw",
                            y: (v?.y || 0) + 0 + (((v?.height || 319) - 0 - 320) / 2 + 142 + 24),
                            children: _(T.div, {
                                className: "framer-cus4dw-container",
                                layoutDependency: x,
                                layoutId: "nCw8mln8V-container",
                                children: _(Zt, {
                                    h8iGjYmBY: "Why is this free?",
                                    height: "100%",
                                    id: "nCw8mln8V",
                                    layoutId: "nCw8mln8V",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "DI8aB_O6T",
                                    width: "100%",
                                    YgvPXMWsF: "Solara was pretty much a passion project, so money wasn't in mind. It's very easy to bring updates, and keeping Solara running does not cost any money. The only monetization at the moment is the linkvertise on the download link, which is really simple and fast, and you keep the auto updating software forever."
                                })
                            })
                        }), _(dt, {
                            height: 71,
                            width: v?.width || "100vw",
                            y: (v?.y || 0) + 0 + (((v?.height || 319) - 0 - 320) / 2 + 213 + 36),
                            children: _(T.div, {
                                className: "framer-1n4a8mv-container",
                                layoutDependency: x,
                                layoutId: "bVjOIaTIN-container",
                                children: _(Zt, {
                                    h8iGjYmBY: "How do I contact the developer?",
                                    height: "100%",
                                    id: "bVjOIaTIN",
                                    layoutId: "bVjOIaTIN",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "DI8aB_O6T",
                                    width: "100%",
                                    YgvPXMWsF: "You can contact the developer through email (contact@getsolara.dev , cmdsoftworks@proton.me) , or on Telegram (@quiving)"
                                })
                            })
                        })]
                    })
                })
            })
        })
    }),
    Ec = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-oh1N4.framer-1j9y1yl, .framer-oh1N4 .framer-1j9y1yl { display: block; }", ".framer-oh1N4.framer-mek02q { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 854px; }", ".framer-oh1N4 .framer-sin4xp-container, .framer-oh1N4 .framer-qffyvc-container, .framer-oh1N4 .framer-cus4dw-container, .framer-oh1N4 .framer-1n4a8mv-container { flex: none; height: auto; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-oh1N4.framer-mek02q { gap: 0px; } .framer-oh1N4.framer-mek02q > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-oh1N4.framer-mek02q > :first-child { margin-top: 0px; } .framer-oh1N4.framer-mek02q > :last-child { margin-bottom: 0px; } }"],
    Ue = Ot(Rc, Ec, "framer-oh1N4"),
    fp = Ue;
Ue.displayName = "FAQ/Accordion";
Ue.defaultProps = {
    height: 319,
    width: 854
};
Rt(Ue, [{
    explicitInter: !0,
    fonts: []
}, ...wc], {
    supportsExplicitInterCodegen: !0
});
qt.loadFonts(["GF;Plus Jakarta Sans-600", "GF;Plus Jakarta Sans-700", "GF;Plus Jakarta Sans-700italic", "GF;Plus Jakarta Sans-600italic"]);
var yp = [{
        explicitInter: !0,
        fonts: [{
            family: "Plus Jakarta Sans",
            source: "google",
            style: "normal",
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
            weight: "600"
        }, {
            family: "Plus Jakarta Sans",
            source: "google",
            style: "normal",
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNTxXUEKi4Rw.woff2",
            weight: "700"
        }, {
            family: "Plus Jakarta Sans",
            source: "google",
            style: "italic",
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ3CDh_VMq2oR82k.woff2",
            weight: "700"
        }, {
            family: "Plus Jakarta Sans",
            source: "google",
            style: "italic",
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIZaomQNQcsA88c7O9yZ4KMCoOg4KozySKCdSNG9OcqYQ37Dh_VMq2oR82k.woff2",
            weight: "600"
        }]
    }],
    bp = ['.framer-MfSEf .framer-styles-preset-l55hgz:not(.rich-text-wrapper), .framer-MfSEf .framer-styles-preset-l55hgz.rich-text-wrapper h1 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, #f2f9fe); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-MfSEf .framer-styles-preset-l55hgz:not(.rich-text-wrapper), .framer-MfSEf .framer-styles-preset-l55hgz.rich-text-wrapper h1 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 51px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, #f2f9fe); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; --framer-text-wrap: balance; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-MfSEf .framer-styles-preset-l55hgz:not(.rich-text-wrapper), .framer-MfSEf .framer-styles-preset-l55hgz.rich-text-wrapper h1 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-64f5bd03-6b7a-43e3-ba7b-3a0b2b8b7a5e, #f2f9fe); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: capitalize; --framer-text-wrap: balance; } }'],
    Sp = "framer-MfSEf";
export {
    S as a, ms as b, vs as c, gs as d, Wo as e, Ku as f, fp as g, yp as h, bp as i, Sp as j
};
//# sourceMappingURL=chunk-APUETB4M.mjs.map