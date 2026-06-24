/* @ds-bundle: {"format":3,"namespace":"ManosXChileDesignSystem_d24107","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"BenefitCard","sourcePath":"components/product/BenefitCard.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"Stat","sourcePath":"components/product/Stat.jsx"}],"sourceHashes":{"components/core/Button.jsx":"8b0f0b580db4","components/core/Card.jsx":"ee4d9b9ca5a0","components/core/SectionLabel.jsx":"6362a3507bb2","components/core/Tag.jsx":"4544852b80ef","components/forms/Input.jsx":"4db1743b1e80","components/forms/Select.jsx":"35b068a983d2","components/product/BenefitCard.jsx":"9e1fe65f6c12","components/product/ProductCard.jsx":"c55a7ee80c1e","components/product/Stat.jsx":"48bdec33f81a","ui_kits/website/AboutScreen.jsx":"adc360458dff","ui_kits/website/CatalogScreen.jsx":"337f84780ce4","ui_kits/website/ContactScreen.jsx":"8e8759e52bd3","ui_kits/website/HomeScreen.jsx":"3c9b58400241","ui_kits/website/ProcessScreen.jsx":"74eb425dce70","ui_kits/website/SiteChrome.jsx":"1084eaf8a50c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ManosXChileDesignSystem_d24107 = window.ManosXChileDesignSystem_d24107 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Manos x Chile action (modern refresh).
 * Beveled 14px corners, heavy Black/uppercase tracked label.
 * Ocean-blue primary, vivid-green eco variant.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  fullWidth = false,
  uppercase = true,
  children,
  style = {},
  ...rest
}) {
  const Comp = as;
  const sizes = {
    sm: {
      padding: '0.6rem 1.4rem',
      fontSize: '0.8rem'
    },
    md: {
      padding: '0.85rem 2rem',
      fontSize: '0.9rem'
    },
    lg: {
      padding: '1.05rem 2.6rem',
      fontSize: '1rem'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    fontFamily: 'var(--font-sans)',
    fontWeight: 900,
    letterSpacing: uppercase ? '0.18em' : '0.02em',
    textTransform: uppercase ? 'uppercase' : 'none',
    borderRadius: 'var(--radius-md)',
    border: '2px solid transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    lineHeight: 1.1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform var(--dur-fast) var(--ease-out), background-color var(--dur-fast) ease, color var(--dur-fast) ease, border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    ...sizes[size]
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--blue-500)',
      color: '#fff',
      borderColor: 'var(--blue-500)'
    },
    eco: {
      backgroundColor: 'var(--green-500)',
      color: '#fff',
      borderColor: 'var(--green-500)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--blue-500)',
      borderColor: 'var(--blue-500)'
    },
    'outline-green': {
      backgroundColor: 'transparent',
      color: 'var(--green-700)',
      borderColor: 'var(--green-500)'
    },
    'outline-light': {
      backgroundColor: 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.95)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--ink-900)',
      borderColor: 'transparent'
    }
  };
  const hovers = {
    primary: {
      backgroundColor: 'var(--blue-700)',
      borderColor: 'var(--blue-700)'
    },
    eco: {
      backgroundColor: 'var(--green-700)',
      borderColor: 'var(--green-700)'
    },
    outline: {
      backgroundColor: 'var(--blue-500)',
      color: '#fff'
    },
    'outline-green': {
      backgroundColor: 'var(--green-500)',
      color: '#fff',
      borderColor: 'var(--green-500)'
    },
    'outline-light': {
      backgroundColor: '#fff',
      color: 'var(--ink-900)'
    },
    ghost: {
      backgroundColor: 'var(--surface-1)'
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Comp, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...(hover ? {
        ...hovers[variant],
        transform: 'translateY(-2px)',
        boxShadow: 'var(--shadow-sm)'
      } : {}),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the brand's signature container (modern refresh).
 * Heavily beveled (24px) white surface with a 3px colored RING
 * (blue or green) plus a soft drop shadow. Interactive cards lift
 * on hover.
 */
function Card({
  interactive = false,
  ring = 'none',
  // 'blue' | 'green' | 'none'
  fill = 'white',
  padding = '1.75rem',
  radius = 'var(--radius-xl)',
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const fills = {
    white: 'var(--paper)',
    soft: 'var(--surface-1)'
  };
  const rings = {
    blue: 'var(--ring-card-blue)',
    green: 'var(--ring-card-green)',
    none: 'none'
  };
  const borders = {
    blue: 'none',
    green: 'none',
    none: '1.5px solid var(--line)'
  };
  const base = {
    background: fills[fill] || fill,
    border: borders[ring],
    borderRadius: radius,
    padding,
    boxShadow: rings[ring],
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) ease'
  };
  const hoverStyle = interactive && hover ? {
    transform: 'translateY(-6px)',
    boxShadow: ring === 'none' ? 'var(--shadow-card-hover)' : `${rings[ring]}, var(--shadow-card-hover)`
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...hoverStyle,
      ...style
    },
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — bold uppercase tracked eyebrow above section headings.
 * Modern refresh: heavier and wider-tracked, accent-colored.
 */
function SectionLabel({
  children,
  as = 'span',
  color = 'green',
  style = {},
  ...rest
}) {
  const Comp = as;
  const colors = {
    green: 'var(--green-500)',
    blue: 'var(--blue-500)',
    muted: 'var(--ink-400)',
    dark: 'var(--ink-900)'
  };
  return /*#__PURE__*/React.createElement(Comp, _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: colors[color] || color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — pill chip (modern refresh). Rounded, bold, uppercase tracked.
 * Used for categories / certifications (ASTM, NCh) and eco claims.
 */
function Tag({
  variant = 'default',
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    padding: '0.4rem 0.85rem',
    borderRadius: 'var(--radius-full)',
    lineHeight: 1.2,
    whiteSpace: 'nowrap'
  };
  const variants = {
    default: {
      background: 'var(--surface-1)',
      color: 'var(--ink-500)',
      border: '1.5px solid var(--line)'
    },
    green: {
      background: 'var(--green-100)',
      color: 'var(--green-900)',
      border: '1.5px solid transparent'
    },
    blue: {
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      border: '1.5px solid transparent'
    },
    'solid-green': {
      background: 'var(--green-500)',
      color: '#fff',
      border: '1.5px solid var(--green-500)'
    },
    'solid-blue': {
      background: 'var(--blue-500)',
      color: '#fff',
      border: '1.5px solid var(--blue-500)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--blue-500)',
      border: '1.5px solid var(--blue-500)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — boxed beveled field (modern refresh). Rounded 14px box with a
 * 1.5px border that turns ocean-blue on focus. `underline` keeps the old
 * minimal bottom-rule style.
 */
function Input({
  as = 'input',
  underline = false,
  style = {},
  ...rest
}) {
  const Comp = as;
  const [focus, setFocus] = React.useState(false);
  const boxed = {
    width: '100%',
    padding: '0.95rem 1.1rem',
    border: `1.5px solid ${focus ? 'var(--blue-500)' : 'var(--line)'}`,
    background: 'var(--paper)',
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? '0 0 0 3px var(--blue-100)' : 'none'
  };
  const line = {
    width: '100%',
    padding: '0.85rem 0',
    border: 'none',
    borderBottom: `2px solid ${focus ? 'var(--blue-500)' : 'var(--line)'}`,
    background: 'transparent',
    borderRadius: 0
  };
  return /*#__PURE__*/React.createElement(Comp, _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1rem',
      fontWeight: 500,
      color: 'var(--ink-900)',
      outline: 'none',
      transition: 'border-color var(--dur-base) ease, box-shadow var(--dur-base) ease',
      ...(underline ? line : boxed),
      ...style
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — beveled boxed dropdown (modern refresh) with a chevron.
 */
function Select({
  underline = false,
  children,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const boxed = {
    border: `1.5px solid ${focus ? 'var(--blue-500)' : 'var(--line)'}`,
    padding: '0.95rem 2.4rem 0.95rem 1.1rem',
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? '0 0 0 3px var(--blue-100)' : 'none'
  };
  const line = {
    borderBottom: `2px solid ${focus ? 'var(--blue-500)' : 'var(--line)'}`,
    padding: '0.85rem 1.6rem 0.85rem 0',
    borderRadius: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: '1rem',
      fontWeight: 500,
      color: 'var(--ink-900)',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-base) ease, box-shadow var(--dur-base) ease',
      ...(underline ? line : boxed),
      ...style
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: underline ? '0.25rem' : '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--blue-500)',
      fontSize: '0.7rem'
    }
  }, "\u25BC"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/product/BenefitCard.jsx
try { (() => {
/**
 * BenefitCard — numbered value card (modern refresh). Big vivid index number,
 * bold uppercase title, body, and a 2-up stat footer. Sits on the signature
 * ring-card surface.
 */
function BenefitCard({
  number,
  title,
  description,
  stats = [],
  ring = 'green',
  accent,
  style = {}
}) {
  const accentColor = accent || (ring === 'blue' ? 'var(--blue-500)' : 'var(--green-500)');
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    ring: ring,
    padding: "1.75rem",
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '320px',
      ...style
    }
  }, number && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2.5rem',
      fontWeight: 900,
      color: accentColor,
      lineHeight: 1,
      marginBottom: '1rem',
      letterSpacing: '0.02em'
    }
  }, number), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      lineHeight: 1.25,
      margin: '0 0 0.85rem'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: 'var(--ink-500)',
      fontWeight: 500,
      margin: 0,
      flexGrow: 1
    }
  }, description), stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.25rem',
      marginTop: '1.5rem',
      paddingTop: '1.5rem',
      borderTop: '1.5px solid var(--line-soft)'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.6rem',
      fontWeight: 900,
      color: accentColor,
      lineHeight: 1
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--ink-400)',
      fontWeight: 700
    }
  }, s.label)))));
}
Object.assign(__ds_scope, { BenefitCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/BenefitCard.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
/**
 * ProductCard — catalog tile (modern refresh, matches the Figma).
 * Beveled 24px white card with a 3px colored ring + drop shadow, a rounded
 * 22px product photo, the bold uppercase tracked product name, and a
 * COTIZAR action. Hover lifts the card and zooms the image.
 */
function ProductCard({
  image,
  name,
  note,
  tag,
  ring = 'blue',
  // 'blue' | 'green'
  ctaLabel = 'Cotizar',
  ctaVariant,
  // defaults to match ring
  onCta,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const ringShadow = ring === 'green' ? 'var(--ring-card-green)' : 'var(--ring-card-blue)';
  const btnVariant = ctaVariant || (ring === 'green' ? 'eco' : 'primary');
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--paper)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: hover ? `${ringShadow}, var(--shadow-card-hover)` : ringShadow,
      padding: '0.9rem 0.9rem 1.25rem',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) ease',
      transform: hover ? 'translateY(-6px)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: '64%',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-2)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '0.85rem',
      left: '0.85rem',
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      background: ring === 'green' ? 'var(--green-500)' : 'var(--blue-500)',
      color: '#fff',
      padding: '0.35rem 0.7rem',
      borderRadius: 'var(--radius-full)'
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.1rem 0.5rem 0',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      lineHeight: 1.4,
      margin: 0,
      whiteSpace: 'pre-line'
    }
  }, name), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--ink-500)',
      fontStyle: 'italic',
      fontWeight: 500,
      margin: '0.6rem 0 0'
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: btnVariant,
    fullWidth: true,
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/product/Stat.jsx
try { (() => {
/**
 * Stat — big bold vivid number over an uppercase tracked label (modern refresh).
 */
function Stat({
  value,
  label,
  color = 'green',
  align = 'left',
  size = 'md',
  style = {}
}) {
  const sizes = {
    sm: '2rem',
    md: '3rem',
    lg: '4rem'
  };
  const colors = {
    green: 'var(--green-500)',
    blue: 'var(--blue-500)',
    dark: 'var(--ink-900)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: sizes[size],
      fontWeight: 900,
      color: colors[color] || color,
      lineHeight: 1,
      letterSpacing: '0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--ink-400)',
      fontWeight: 700
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
/* global React */
// Nosotros (About) screen — modern refresh.
const {
  SectionLabel,
  Button,
  Tag,
  Stat,
  Card
} = window.ManosXChileDesignSystem_d24107;
function AboutScreen({
  onNav
}) {
  const wrap = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 2rem'
  };
  const narrow = {
    maxWidth: 860,
    margin: '0 auto',
    padding: '0 2rem'
  };
  const values = [{
    t: 'Sostenibilidad',
    d: 'Transformamos residuos en recursos para frenar el colapso de los vertederos de Chiloé y reducir la huella de carbono de sacar la basura de la isla.',
    ring: 'green'
  }, {
    t: 'Calidad',
    d: 'Productos duraderos que cumplen con los más altos estándares industriales, certificados ASTM y NCh.',
    ring: 'blue'
  }, {
    t: 'Comunidad',
    d: 'Generamos empleo local y fortalecemos el desarrollo de Chiloé, manteniendo los recursos y el trabajo en la región.',
    ring: 'green'
  }, {
    t: 'Innovación',
    d: 'Aplicamos tecnología y procesos innovadores en el reciclaje y la transformación de plásticos.',
    ring: 'blue'
  }];
  const impact = [{
    v: '10+',
    l: 'Ton recicladas / mes',
    c: 'blue'
  }, {
    v: '15+',
    l: 'Empleos locales',
    c: 'green'
  }, {
    v: '100%',
    l: 'Compromiso con Chiloé',
    c: 'blue'
  }];
  const facilities = ['facility_1.jpg', 'facility_2.jpg', 'facility_3.jpg', 'facility_4.png'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '2.5rem 2rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      position: 'relative',
      height: '58vh',
      minHeight: 440,
      maxHeight: 620,
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--ring-card-green)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/chiloe_landscape.jpg",
    alt: "Paisaje de Chilo\xE9",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: '#fff',
      maxWidth: 800,
      padding: '0 2rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: '0.72rem',
      fontWeight: 800,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--green-500)',
      padding: '0.45rem 1rem',
      borderRadius: 'var(--radius-full)',
      marginBottom: '1.5rem'
    }
  }, "Desde Chilo\xE9"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3.4rem',
      fontWeight: 900,
      lineHeight: 1.04,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      margin: '0 0 1.25rem'
    }
  }, "Nosotros"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
      opacity: 0.95,
      margin: 0
    }
  }, "Transformando los residuos de nuestras playas en un futuro sostenible."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '6rem 0 5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: narrow
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Nuestra misi\xF3n"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '2.3rem',
      fontWeight: 900,
      lineHeight: 1.12,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '1rem 0 2rem'
    }
  }, "Rescatamos el pl\xE1stico antes de que llegue al mar")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.15rem',
      lineHeight: 1.75,
      color: 'var(--ink-500)',
      fontWeight: 500,
      margin: '0 0 1.5rem',
      textAlign: 'center'
    }
  }, "En Manos x Chile recuperamos residuos pl\xE1sticos de las playas, la industria de la acuicultura y el uso dom\xE9stico, y los transformamos en productos sostenibles de alta calidad."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      lineHeight: 1.75,
      color: 'var(--ink-500)',
      fontWeight: 500,
      margin: 0,
      textAlign: 'center'
    }
  }, "Operamos desde Ruta W-450 Camino Piruquina, en Chilo\xE9, y Puerto Montt, contribuyendo activamente a la econom\xEDa circular y al desarrollo local de nuestra regi\xF3n."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '6rem 0',
      background: 'var(--surface-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "blue"
  }, "Nuestros valores"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.5rem',
      marginTop: '2.5rem'
    }
  }, values.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.t,
    ring: v.ring,
    interactive: true,
    padding: "2rem"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.15rem',
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '0 0 0.75rem'
    }
  }, v.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      color: 'var(--ink-500)',
      fontWeight: 500,
      lineHeight: 1.65,
      margin: 0
    }
  }, v.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '6.5rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Nuestro impacto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '3rem'
    }
  }, impact.map(s => /*#__PURE__*/React.createElement(Stat, {
    key: s.l,
    value: s.v,
    label: s.l,
    color: s.c,
    size: "lg",
    align: "center"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 7rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "blue"
  }, "Nuestras instalaciones"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.5rem',
      marginTop: '2.5rem'
    }
  }, facilities.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: i % 2 ? 'var(--ring-card-green)' : 'var(--ring-card-blue)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/${f}`,
    alt: "Instalaci\xF3n Manos x Chile",
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      objectFit: 'cover',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "eco",
    size: "lg",
    onClick: () => onNav('catalog')
  }, "Ver Productos")))));
}
window.MxcAboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CatalogScreen.jsx
try { (() => {
/* global React */
// Catalog screen with product grid + quote (cotizar) flow (modern refresh).
const {
  ProductCard,
  SectionLabel,
  Button,
  Input,
  Select,
  Tag
} = window.ManosXChileDesignSystem_d24107;
const RAW = [{
  name: 'Tabla 15,5 cm × 5,6 cm × 290 cm',
  image: 'product_tabla_15.jpg'
}, {
  name: 'Estacón redondo 9,5 cm × 240 cm',
  image: 'product_estacon_redondo.jpg'
}, {
  name: 'Estacón cuadrado 8,8 × 8,8 × 200 cm',
  image: 'product_estacon_cuadrado.jpg'
}];
const FINISHED = [{
  name: 'Mesa de picnic 200 × 76 cm',
  image: 'product_picnic.jpg'
}, {
  name: 'Banca 134 × 70 × 45 cm',
  image: 'product_bench.jpg'
}, {
  name: 'Pallet 120 × 100 × 16 cm',
  image: 'product_pallet.jpg'
}, {
  name: 'Jardinera 80 × 32 × 25 cm',
  image: 'product_jardinera.jpg'
}, {
  name: 'Macetero 20 × 20 × 24 cm',
  image: 'product_masetero.jpg'
}];
function QuoteModal({
  product,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(39,38,38,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--paper)',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      maxWidth: 480,
      width: '100%',
      boxShadow: 'var(--shadow-modal)'
    }
  }, !sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "blue"
  }, "Cotizar"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 800,
      letterSpacing: '0.02em',
      margin: '0.75rem 0 0.4rem',
      color: 'var(--ink-900)',
      textTransform: 'uppercase'
    }
  }, product.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-500)',
      fontWeight: 500,
      margin: '0 0 1.75rem',
      fontSize: '0.95rem'
    }
  }, "Te contactamos con una cotizaci\xF3n a medida."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email",
    type: "email"
  }), /*#__PURE__*/React.createElement(Select, {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Cantidad estimada"), /*#__PURE__*/React.createElement("option", null, "1 \u2013 10 unidades"), /*#__PURE__*/React.createElement("option", null, "10 \u2013 50 unidades"), /*#__PURE__*/React.createElement("option", null, "50+ unidades")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setSent(true),
    style: {
      marginTop: '0.5rem'
    }
  }, "Enviar solicitud"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '1rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--green-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      margin: '0 auto 1.5rem'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 800,
      margin: '0 0 0.5rem',
      color: 'var(--ink-900)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "\xA1Gracias!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-500)',
      fontWeight: 500,
      margin: '0 0 2rem'
    }
  }, "Uno de nuestros agentes te contactar\xE1 pronto."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose
  }, "Cerrar"))));
}
function CatalogScreen() {
  const [quote, setQuote] = React.useState(null);
  const wrap = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 2rem'
  };
  const Grid = ({
    items,
    tag,
    ring
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
      gap: '2rem'
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    image: `../../assets/${p.image}`,
    name: p.name,
    note: "*descuento seg\xFAn cantidad",
    tag: tag,
    ring: ring,
    onCta: () => setQuote(p)
  })));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '4rem 0 3rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: '0.72rem',
      fontWeight: 800,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--blue-500)',
      padding: '0.45rem 1rem',
      borderRadius: 'var(--radius-full)',
      marginBottom: '1.5rem'
    }
  }, "Pl\xE1stico rescatado \xB7 100% reciclado"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3.5rem',
      fontWeight: 900,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: 0,
      lineHeight: 1
    }
  }, "Productos")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingBottom: '7rem'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: '5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--blue-500)',
      margin: 0
    }
  }, "Materias Primas"), /*#__PURE__*/React.createElement(Tag, {
    variant: "blue"
  }, "ASTM \xB7 NCh")), /*#__PURE__*/React.createElement(Grid, {
    items: RAW,
    tag: "Materia Prima",
    ring: "blue"
  })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--green-500)',
      margin: 0
    }
  }, "Productos Terminados"), /*#__PURE__*/React.createElement(Tag, {
    variant: "green"
  }, "Listo para instalar")), /*#__PURE__*/React.createElement(Grid, {
    items: FINISHED,
    tag: "Terminado",
    ring: "green"
  }))), quote && /*#__PURE__*/React.createElement(QuoteModal, {
    product: quote,
    onClose: () => setQuote(null)
  }));
}
window.MxcCatalogScreen = CatalogScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CatalogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
/* global React */
// Contacto (Contact) screen — modern refresh.
const {
  SectionLabel,
  Button,
  Input,
  Select,
  Card
} = window.ManosXChileDesignSystem_d24107;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const wrap = {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '0 2rem'
  };
  const options = [{
    t: 'WhatsApp',
    v: '+56 9 9939 3549',
    cta: 'Abrir WhatsApp',
    ring: 'green'
  }, {
    t: 'Email',
    v: 'Jmtoro@manosxchile.cl',
    cta: 'Enviar Email',
    ring: 'blue'
  }, {
    t: 'Ubicación',
    v: 'Ruta W-450 Camino Piruquina\nChiloé, Región Los Lagos',
    cta: 'Ver en Maps',
    ring: 'green'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '4rem 0 3rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: '0.72rem',
      fontWeight: 800,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--green-500)',
      padding: '0.45rem 1rem',
      borderRadius: 'var(--radius-full)',
      marginBottom: '1.5rem'
    }
  }, "Hablemos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3.4rem',
      fontWeight: 900,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: 0,
      lineHeight: 1
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 500,
      color: 'var(--ink-500)',
      maxWidth: 560,
      margin: '1.5rem auto 0'
    }
  }, "\xBFTienes un proyecto en mente? Escr\xEDbenos y te cotizamos a medida.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingBottom: '7rem'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      marginBottom: '5rem'
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.t,
    ring: o.ring,
    interactive: true,
    padding: "2.25rem 2rem",
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.1rem',
      fontWeight: 800,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '0 0 0.75rem'
    }
  }, o.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      color: 'var(--ink-500)',
      fontWeight: 500,
      lineHeight: 1.6,
      margin: '0 0 1.75rem',
      whiteSpace: 'pre-line',
      flexGrow: 1
    }
  }, o.v), /*#__PURE__*/React.createElement(Button, {
    variant: o.ring === 'green' ? 'eco' : 'primary',
    size: "sm",
    fullWidth: true,
    onClick: e => e.preventDefault()
  }, o.cta)))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Card, {
    ring: "blue",
    padding: "3rem",
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, !sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Escr\xEDbenos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.9rem',
      fontWeight: 900,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '0.75rem 0 0'
    }
  }, "Cu\xE9ntanos tu proyecto")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Nombre",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email",
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Tel\xE9fono",
    type: "tel"
  }), /*#__PURE__*/React.createElement(Select, {
    defaultValue: "",
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Motivo"), /*#__PURE__*/React.createElement("option", null, "Cotizaci\xF3n"), /*#__PURE__*/React.createElement("option", null, "Consulta general"), /*#__PURE__*/React.createElement("option", null, "Proyecto personalizado"), /*#__PURE__*/React.createElement("option", null, "Grandes vol\xFAmenes"))), /*#__PURE__*/React.createElement(Input, {
    as: "textarea",
    rows: 4,
    placeholder: "Mensaje",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true,
    size: "lg",
    style: {
      marginTop: '0.5rem'
    }
  }, "Revisar y enviar"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '2rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--green-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      margin: '0 auto 1.5rem'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 800,
      margin: '0 0 0.5rem',
      color: 'var(--ink-900)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "\xA1Gracias por tu mensaje!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-500)',
      fontWeight: 500,
      margin: '0 0 2rem'
    }
  }, "Uno de nuestros agentes te contactar\xE1 pronto."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Enviar otro"))))));
}
window.MxcContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Home screen for the Manos x Chile marketing site (modern refresh).
const {
  Button,
  SectionLabel,
  BenefitCard,
  Tag,
  Stat,
  Card
} = window.ManosXChileDesignSystem_d24107;
function HomeScreen({
  onNav
}) {
  const benefits = [{
    number: '01',
    title: 'Rescatado de playas',
    ring: 'blue',
    description: 'Recuperamos plástico de las costas y la industria acuícola de la Patagonia antes de que llegue al mar.',
    stats: [{
      value: '500+',
      label: 'Ton / año'
    }, {
      value: '100%',
      label: 'Reciclado'
    }]
  }, {
    number: '02',
    title: 'Durabilidad',
    ring: 'green',
    description: 'Certificaciones ASTM y NCh. Vida útil superior a 25 años, resistencia IP65.',
    stats: [{
      value: '25+',
      label: 'Años'
    }, {
      value: 'IP65',
      label: 'Resistencia'
    }]
  }, {
    number: '03',
    title: 'Impacto Local',
    ring: 'blue',
    description: 'Producción 100% en Chiloé. 50+ empleos locales y economía regional.',
    stats: [{
      value: '50+',
      label: 'Empleos'
    }, {
      value: '0km',
      label: 'Producción'
    }]
  }, {
    number: '04',
    title: 'Calidad',
    ring: 'green',
    description: 'Certificación ISO internacional y control riguroso de cada lote.',
    stats: [{
      value: 'ISO',
      label: 'Certificado'
    }, {
      value: '-60%',
      label: 'CO₂'
    }]
  }];
  const steps = [{
    number: '01',
    title: 'Rescate',
    desc: 'Recolectamos plástico de playas, costas y la industria acuícola.'
  }, {
    number: '02',
    title: 'Transformación',
    desc: 'Lavado, molienda y extrusión de alta tecnología.'
  }, {
    number: '03',
    title: 'Ecomadera',
    desc: 'Tablas y mobiliario duraderos con una segunda vida.'
  }];
  const wrap = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 2rem'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '2.5rem 2rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      position: 'relative',
      height: '70vh',
      minHeight: 520,
      maxHeight: 720,
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--ring-card-blue)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero_banner.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: '#fff',
      maxWidth: 880,
      padding: '0 2rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: '0.72rem',
      fontWeight: 800,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--green-500)',
      padding: '0.45rem 1rem',
      borderRadius: 'var(--radius-full)',
      marginBottom: '1.75rem'
    }
  }, "Rescatado de playas \xB7 100% reciclado"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3.6rem',
      fontWeight: 900,
      lineHeight: 1.04,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      margin: '0 0 1.5rem'
    }
  }, "De la costa", /*#__PURE__*/React.createElement("br", null), "a tu proyecto"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.3rem',
      fontWeight: 500,
      lineHeight: 1.5,
      opacity: 0.95,
      margin: '0 auto 2.5rem',
      maxWidth: 640
    }
  }, "Transformamos el pl\xE1stico que rescatamos de las playas de la Patagonia en Ecomadera de larga duraci\xF3n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "eco",
    onClick: () => onNav('catalog')
  }, "Ver Cat\xE1logo"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline-light",
    onClick: () => onNav('catalog')
  }, "Cotizar Proyecto")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '4rem 0 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      gap: '3rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "500+",
    label: "Toneladas rescatadas / a\xF1o",
    color: "blue"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "25+",
    label: "A\xF1os de vida \xFAtil"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "50+",
    label: "Empleos en Chilo\xE9",
    color: "blue"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "-60%",
    label: "Huella de CO\u2082"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '5rem 0 7rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--ring-card-green)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/factory_workers.jpg",
    alt: "Taller en Chilo\xE9",
    style: {
      width: '100%',
      height: 420,
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Nosotros"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '2.4rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '1rem 0 1.5rem'
    }
  }, "Le damos una segunda vida al pl\xE1stico del mar"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.1rem',
      lineHeight: 1.65,
      color: 'var(--ink-500)',
      fontWeight: 500,
      margin: '0 0 1.5rem'
    }
  }, "Manos x Chile nace en Chilo\xE9 con una misi\xF3n clara: evitar que los residuos pl\xE1sticos de nuestras playas y de la industria acu\xEDcola terminen en el oc\xE9ano. Los rescatamos, los reciclamos y los transformamos en Ecomadera de alta calidad."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "blue"
  }, "Rescatado de playas"), /*#__PURE__*/React.createElement(Tag, {
    variant: "green"
  }, "100% reciclado"), /*#__PURE__*/React.createElement(Tag, {
    variant: "green"
  }, "Hecho en Chilo\xE9")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav('catalog')
  }, "Conoce el proceso")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '6rem 0',
      background: 'var(--surface-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '0.5rem',
      display: 'block'
    }
  }, "Por qu\xE9 Ecomadera"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '2rem',
      fontWeight: 900,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '0 0 3rem'
    }
  }, "Beneficios"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem'
    }
  }, benefits.map(b => /*#__PURE__*/React.createElement(BenefitCard, _extends({
    key: b.number
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '7rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "blue"
  }, "Productos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '2rem',
      fontWeight: 900,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '0.75rem 0 0'
    }
  }, "Cat\xE1logo")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => onNav('catalog')
  }, "Ver todo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem'
    }
  }, [{
    img: 'product_tabla_15.jpg',
    t: 'Materias Primas',
    d: 'Tablas y estacones para construcción.',
    ring: 'blue'
  }, {
    img: 'product_picnic.jpg',
    t: 'Mobiliario',
    d: 'Bancas, mesas y soluciones urbanas.',
    ring: 'green'
  }].map(c => /*#__PURE__*/React.createElement("a", {
    key: c.t,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('catalog');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    ring: c.ring,
    interactive: true,
    padding: "0.9rem",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/${c.img}`,
    alt: c.t,
    style: {
      width: '100%',
      height: 360,
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0.5rem 0.5rem'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.15rem',
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '0 0 0.4rem'
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      color: 'var(--ink-500)',
      fontWeight: 500,
      margin: 0
    }
  }, c.d)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 7rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Proceso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      marginTop: '2.5rem'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.number,
    ring: i === 1 ? 'green' : 'blue',
    padding: "2rem"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '2.75rem',
      fontWeight: 900,
      color: i === 1 ? 'var(--green-500)' : 'var(--blue-500)',
      lineHeight: 1,
      display: 'block',
      marginBottom: '1.25rem'
    }
  }, s.number), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.1rem',
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '0 0 0.6rem'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      color: 'var(--ink-500)',
      fontWeight: 500,
      margin: 0,
      lineHeight: 1.6
    }
  }, s.desc)))))));
}
window.MxcHomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProcessScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Cómo Funciona (Process) screen — modern refresh.
const {
  SectionLabel,
  Button,
  Card,
  BenefitCard
} = window.ManosXChileDesignSystem_d24107;
function ProcessScreen({
  onNav
}) {
  const wrap = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 2rem'
  };
  const steps = [{
    number: '01',
    title: 'Rescate',
    description: 'Recolectamos plástico de las playas y costas, de la industria de la acuicultura y de uso doméstico en Chiloé y Puerto Montt.'
  }, {
    number: '02',
    title: 'Clasificación',
    description: 'Separamos y clasificamos los plásticos según su tipo y calidad para garantizar productos de excelencia.'
  }, {
    number: '03',
    title: 'Procesamiento',
    description: 'Limpiamos, trituramos y procesamos el material para transformarlo en materia prima de alta calidad.'
  }, {
    number: '04',
    title: 'Transformación',
    description: 'Moldeamos y fabricamos Ecomadera y productos duraderos con estándares de calidad industrial.'
  }, {
    number: '05',
    title: 'Distribución',
    description: 'Entregamos a clientes en Chiloé y todo Chile, cerrando el ciclo de la economía circular.'
  }];
  const benefits = [{
    number: '01',
    title: 'Sostenibilidad',
    ring: 'green',
    description: '500+ toneladas de plástico rescatado y reciclado anualmente.',
    stats: [{
      value: '100%',
      label: 'Reciclado'
    }, {
      value: '-60%',
      label: 'CO₂'
    }]
  }, {
    number: '02',
    title: 'Durabilidad',
    ring: 'blue',
    description: 'Certificaciones ASTM y NCh. Vida útil superior a 25 años.',
    stats: [{
      value: '25+',
      label: 'Años'
    }, {
      value: 'IP65',
      label: 'Resistencia'
    }]
  }, {
    number: '03',
    title: 'Impacto Local',
    ring: 'green',
    description: 'Producción 100% en Chiloé. 50+ empleos locales.',
    stats: [{
      value: '50+',
      label: 'Empleos'
    }, {
      value: '0km',
      label: 'Producción'
    }]
  }, {
    number: '04',
    title: 'Calidad',
    ring: 'blue',
    description: 'Certificación ISO internacional y control riguroso de cada lote.',
    stats: [{
      value: 'ISO',
      label: 'Certificado'
    }, {
      value: '100%',
      label: 'Inspeccionado'
    }]
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '4rem 0 3rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: '0.72rem',
      fontWeight: 800,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--blue-500)',
      padding: '0.45rem 1rem',
      borderRadius: 'var(--radius-full)',
      marginBottom: '1.5rem'
    }
  }, "Econom\xEDa circular"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3.4rem',
      fontWeight: 900,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: 0,
      lineHeight: 1
    }
  }, "C\xF3mo Funciona"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 500,
      color: 'var(--ink-500)',
      maxWidth: 620,
      margin: '1.5rem auto 0'
    }
  }, "De la playa al producto terminado: cinco pasos que cierran el ciclo.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '3rem 0 6rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.number,
    ring: i % 2 ? 'green' : 'blue',
    interactive: true,
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      alignItems: 'center',
      gap: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: i % 2 ? 'var(--green-50)' : 'var(--blue-50)',
      borderRadius: 'var(--radius-xl) 0 0 var(--radius-xl)',
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2.25rem 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '3.5rem',
      fontWeight: 900,
      color: i % 2 ? 'var(--green-500)' : 'var(--blue-500)',
      lineHeight: 1
    }
  }, s.number)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.75rem 2rem 1.75rem 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.3rem',
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      margin: '0 0 0.5rem'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'var(--ink-500)',
      fontWeight: 500,
      lineHeight: 1.65,
      margin: 0
    }
  }, s.description)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '6rem 0',
      background: 'var(--surface-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Beneficios"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem',
      marginTop: '2.5rem'
    }
  }, benefits.map(b => /*#__PURE__*/React.createElement(BenefitCard, _extends({
    key: b.number
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNav('catalog')
  }, "Ver Cat\xE1logo")))));
}
window.MxcProcessScreen = ProcessScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProcessScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* global React */
// Navbar + Footer for the Manos x Chile marketing site (modern refresh).
const {
  Button
} = window.ManosXChileDesignSystem_d24107;
function Navbar({
  active,
  onNav
}) {
  const links = [{
    key: 'proceso',
    label: 'Cómo Funciona'
  }, {
    key: 'catalog',
    label: 'Productos'
  }, {
    key: 'nosotros',
    label: 'Nosotros'
  }, {
    key: 'contacto',
    label: 'Contacto'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: 84,
      background: 'rgba(255,254,254,0.9)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1.5px solid var(--line)',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      width: '100%',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Manos x Chile",
    style: {
      height: 42
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2.25rem'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.key,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l.key);
    },
    style: {
      fontSize: '0.78rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active === l.key ? 'var(--blue-500)' : 'var(--ink-900)',
      whiteSpace: 'nowrap'
    }
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav('contacto')
  }, "Cotizar"))));
}
function Footer() {
  const groups = [{
    h: 'Navegación',
    items: ['Proceso', 'Catálogo', 'Nosotros']
  }, {
    h: 'Contacto',
    items: ['Jmtoro@manosxchile.cl', '+56 9 9939 3549']
  }, {
    h: 'Social',
    items: ['Instagram', 'Facebook', 'LinkedIn']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      padding: '5rem 0 2.5rem',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: '4rem',
      marginBottom: '4rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Manos x Chile",
    style: {
      height: 36,
      marginBottom: '1.5rem',
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.7)',
      fontWeight: 500,
      margin: 0
    }
  }, "Pl\xE1stico rescatado de las playas de la Patagonia,", /*#__PURE__*/React.createElement("br", null), "con una segunda vida. Desde Chilo\xE9 para el mundo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem'
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--green-500)',
      marginBottom: '1.5rem',
      fontWeight: 800,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, g.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.85rem'
    }
  }, g.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: '0.9rem',
      color: 'rgba(255,255,255,0.75)',
      textDecoration: 'none',
      fontWeight: 500
    }
  }, it)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '2rem',
      borderTop: '1.5px solid rgba(255,255,255,0.12)',
      fontSize: '0.78rem',
      color: 'rgba(255,255,255,0.5)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Manos x Chile. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", null, "Desarrollado por El Faro, desde Puerto Varas"))));
}
Object.assign(window, {
  MxcNavbar: Navbar,
  MxcFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.BenefitCard = __ds_scope.BenefitCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Stat = __ds_scope.Stat;

})();
