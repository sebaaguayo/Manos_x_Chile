/* global React */
// Navbar + Footer for the Manos x Chile marketing site (modern refresh).
const { Button } = window.ManosXChileDesignSystem_d24107;

function Navbar({ active, onNav }) {
  const links = [
    { key: 'proceso', label: 'Cómo Funciona' },
    { key: 'catalog', label: 'Productos' },
    { key: 'nosotros', label: 'Nosotros' },
    { key: 'contacto', label: 'Contacto' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100, height: 84, background: 'rgba(255,254,254,0.9)',
      backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1.5px solid var(--line)', display: 'flex', alignItems: 'center',
    }}>
      <div style={{ maxWidth: 1280, width: '100%', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ display: 'flex' }}>
          <img src="../../assets/logo.png" alt="Manos x Chile" style={{ height: 42 }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
          {links.map((l) => (
            <a key={l.key} href="#" onClick={(e) => { e.preventDefault(); onNav(l.key); }}
              style={{
                fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                color: active === l.key ? 'var(--blue-500)' : 'var(--ink-900)', whiteSpace: 'nowrap',
              }}>
              {l.label}
            </a>
          ))}
          <Button size="sm" onClick={() => onNav('contacto')}>Cotizar</Button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const groups = [
    { h: 'Navegación', items: ['Proceso', 'Catálogo', 'Nosotros'] },
    { h: 'Contacto', items: ['Jmtoro@manosxchile.cl', '+56 9 9939 3549'] },
    { h: 'Social', items: ['Instagram', 'Facebook', 'LinkedIn'] },
  ];
  return (
    <footer style={{ background: 'var(--ink-900)', padding: '5rem 0 2.5rem', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <img src="../../assets/logo.png" alt="Manos x Chile" style={{ height: 36, marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', fontWeight: 500, margin: 0 }}>
              Plástico rescatado de las playas de la Patagonia,<br />con una segunda vida. Desde Chiloé para el mundo.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {groups.map((g) => (
              <div key={g.h}>
                <h4 style={{ fontSize: '0.72rem', color: 'var(--green-500)', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{g.h}</h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {g.items.map((it) => (
                    <li key={it}><a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontWeight: 500 }}>{it}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div style={{ paddingTop: '2rem', borderTop: '1.5px solid rgba(255,255,255,0.12)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontWeight: 500 }}>
          <span>© {new Date().getFullYear()} Manos x Chile. Todos los derechos reservados.</span>
          <span>Desarrollado por El Faro, desde Puerto Varas</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { MxcNavbar: Navbar, MxcFooter: Footer });
