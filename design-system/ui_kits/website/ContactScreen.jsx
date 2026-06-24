/* global React */
// Contacto (Contact) screen — modern refresh.
const { SectionLabel, Button, Input, Select, Card } = window.ManosXChileDesignSystem_d24107;

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const wrap = { maxWidth: 1080, margin: '0 auto', padding: '0 2rem' };

  const options = [
    { t: 'WhatsApp', v: '+56 9 9939 3549', cta: 'Abrir WhatsApp', ring: 'green' },
    { t: 'Email', v: 'Jmtoro@manosxchile.cl', cta: 'Enviar Email', ring: 'blue' },
    { t: 'Ubicación', v: 'Ruta W-450 Camino Piruquina\nChiloé, Región Los Lagos', cta: 'Ver en Maps', ring: 'green' },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '4rem 0 3rem', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff', background: 'var(--green-500)', padding: '0.45rem 1rem', borderRadius: 'var(--radius-full)', marginBottom: '1.5rem' }}>
          Hablemos
        </span>
        <h1 style={{ fontSize: '3.4rem', fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--ink-900)', margin: 0, lineHeight: 1 }}>Contacto</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--ink-500)', maxWidth: 560, margin: '1.5rem auto 0' }}>
          ¿Tienes un proyecto en mente? Escríbenos y te cotizamos a medida.
        </p>
      </section>

      <div style={{ ...wrap, paddingBottom: '7rem' }}>
        {/* OPTIONS */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '5rem' }}>
          {options.map((o) => (
            <Card key={o.t} ring={o.ring} interactive padding="2.25rem 2rem" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-900)', margin: '0 0 0.75rem' }}>{o.t}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-500)', fontWeight: 500, lineHeight: 1.6, margin: '0 0 1.75rem', whiteSpace: 'pre-line', flexGrow: 1 }}>{o.v}</p>
              <Button variant={o.ring === 'green' ? 'eco' : 'primary'} size="sm" fullWidth onClick={(e) => e.preventDefault()}>{o.cta}</Button>
            </Card>
          ))}
        </section>

        {/* FORM */}
        <section>
          <Card ring="blue" padding="3rem" style={{ maxWidth: 720, margin: '0 auto' }}>
            {!sent ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <SectionLabel>Escríbenos</SectionLabel>
                  <h2 style={{ fontSize: '1.9rem', fontWeight: 900, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--ink-900)', margin: '0.75rem 0 0' }}>Cuéntanos tu proyecto</h2>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <Input placeholder="Nombre" required />
                    <Input placeholder="Email" type="email" required />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <Input placeholder="Teléfono" type="tel" />
                    <Select defaultValue="" required>
                      <option value="" disabled>Motivo</option>
                      <option>Cotización</option>
                      <option>Consulta general</option>
                      <option>Proyecto personalizado</option>
                      <option>Grandes volúmenes</option>
                    </Select>
                  </div>
                  <Input as="textarea" rows={4} placeholder="Mensaje" required />
                  <Button type="submit" fullWidth size="lg" style={{ marginTop: '0.5rem' }}>Revisar y enviar</Button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--green-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.5rem' }}>✓</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem', color: 'var(--ink-900)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>¡Gracias por tu mensaje!</h3>
                <p style={{ color: 'var(--ink-500)', fontWeight: 500, margin: '0 0 2rem' }}>Uno de nuestros agentes te contactará pronto.</p>
                <Button variant="outline" onClick={() => setSent(false)}>Enviar otro</Button>
              </div>
            )}
          </Card>
        </section>
      </div>
    </div>
  );
}

window.MxcContactScreen = ContactScreen;
