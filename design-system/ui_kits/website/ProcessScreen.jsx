/* global React */
// Cómo Funciona (Process) screen — modern refresh.
const { SectionLabel, Button, Card, BenefitCard } = window.ManosXChileDesignSystem_d24107;

function ProcessScreen({ onNav }) {
  const wrap = { maxWidth: 1280, margin: '0 auto', padding: '0 2rem' };

  const steps = [
    { number: '01', title: 'Rescate', description: 'Recolectamos plástico de las playas y costas, de la industria de la acuicultura y de uso doméstico en Chiloé y Puerto Montt.' },
    { number: '02', title: 'Clasificación', description: 'Separamos y clasificamos los plásticos según su tipo y calidad para garantizar productos de excelencia.' },
    { number: '03', title: 'Procesamiento', description: 'Limpiamos, trituramos y procesamos el material para transformarlo en materia prima de alta calidad.' },
    { number: '04', title: 'Transformación', description: 'Moldeamos y fabricamos Ecomadera y productos duraderos con estándares de calidad industrial.' },
    { number: '05', title: 'Distribución', description: 'Entregamos a clientes en Chiloé y todo Chile, cerrando el ciclo de la economía circular.' },
  ];
  const benefits = [
    { number: '01', title: 'Sostenibilidad', ring: 'green', description: '500+ toneladas de plástico rescatado y reciclado anualmente.', stats: [{ value: '100%', label: 'Reciclado' }, { value: '-60%', label: 'CO₂' }] },
    { number: '02', title: 'Durabilidad', ring: 'blue', description: 'Certificaciones ASTM y NCh. Vida útil superior a 25 años.', stats: [{ value: '25+', label: 'Años' }, { value: 'IP65', label: 'Resistencia' }] },
    { number: '03', title: 'Impacto Local', ring: 'green', description: 'Producción 100% en Chiloé. 50+ empleos locales.', stats: [{ value: '50+', label: 'Empleos' }, { value: '0km', label: 'Producción' }] },
    { number: '04', title: 'Calidad', ring: 'blue', description: 'Certificación ISO internacional y control riguroso de cada lote.', stats: [{ value: 'ISO', label: 'Certificado' }, { value: '100%', label: 'Inspeccionado' }] },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '4rem 0 3rem', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff', background: 'var(--blue-500)', padding: '0.45rem 1rem', borderRadius: 'var(--radius-full)', marginBottom: '1.5rem' }}>
          Economía circular
        </span>
        <h1 style={{ fontSize: '3.4rem', fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--ink-900)', margin: 0, lineHeight: 1 }}>Cómo Funciona</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--ink-500)', maxWidth: 620, margin: '1.5rem auto 0' }}>
          De la playa al producto terminado: cinco pasos que cierran el ciclo.
        </p>
      </section>

      {/* STEPS — connected timeline of ring cards */}
      <section style={{ padding: '3rem 0 6rem' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {steps.map((s, i) => (
              <Card key={s.number} ring={i % 2 ? 'green' : 'blue'} interactive padding="0">
                <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', alignItems: 'center', gap: '2rem' }}>
                  <div style={{ background: i % 2 ? 'var(--green-50)' : 'var(--blue-50)', borderRadius: 'var(--radius-xl) 0 0 var(--radius-xl)', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2.25rem 0' }}>
                    <span style={{ fontSize: '3.5rem', fontWeight: 900, color: i % 2 ? 'var(--green-500)' : 'var(--blue-500)', lineHeight: 1 }}>{s.number}</span>
                  </div>
                  <div style={{ padding: '1.75rem 2rem 1.75rem 0' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-900)', margin: '0 0 0.5rem' }}>{s.title}</h3>
                    <p style={{ fontSize: '1rem', color: 'var(--ink-500)', fontWeight: 500, lineHeight: 1.65, margin: 0 }}>{s.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: '6rem 0', background: 'var(--surface-1)' }}>
        <div style={wrap}>
          <SectionLabel>Beneficios</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            {benefits.map((b) => <BenefitCard key={b.number} {...b} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button size="lg" onClick={() => onNav('catalog')}>Ver Catálogo</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.MxcProcessScreen = ProcessScreen;
