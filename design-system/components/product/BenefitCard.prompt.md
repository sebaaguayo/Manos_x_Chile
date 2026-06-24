Numbered value card — big vivid index number, bold uppercase title, body, optional 2-up stat footer, on the signature ring-card surface.

```jsx
<BenefitCard
  number="01"
  title="Rescatado de playas"
  description="Recuperamos plástico de las costas de la Patagonia."
  ring="blue"
  stats={[{ value: '500+', label: 'Ton / año' }, { value: '100%', label: 'Reciclado' }]}
/>
```

`ring` ("green" | "blue") sets the halo + accent. Lay out in a `repeat(4, 1fr)` grid.
