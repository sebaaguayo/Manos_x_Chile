Signature catalog tile — beveled 24px white card with a 3px colored ring + drop shadow, rounded 22px photo, bold uppercase tracked name, COTIZAR button. Hover lifts + zooms image.

```jsx
<ProductCard
  image="assets/product_tabla_15.jpg"
  name="Tabla 15,5 cm × 5,6 cm × 290 cm"
  ring="blue"
  tag="Materia Prima"
  note="*descuento según cantidad"
  onCta={() => openQuote()}
/>
```

`ring` ("blue" | "green") sets both the halo and the CTA color. Drop into a `repeat(auto-fill, minmax(300px,1fr))` grid.
