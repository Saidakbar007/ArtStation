/**
 * Настоящий дуотон через SVG feColorMatrix + feComponentTransfer:
 * изображение сперва обесцвечивается (усреднение каналов), затем
 * каждый канал перекладывается по таблице от цвета теней к цвету
 * светов — в отличие от плоского CSS-фильтра (sepia/hue-rotate),
 * это сохраняет исходный тональный контраст фото между тенями и
 * светами. Подключается через `filter: url(#hero-duotone)` в CSS.
 *
 * Тени: #0A0A0A → rgb(10,10,10)/255 ≈ 0.039 на каждый канал
 * Света: #FFD400 → rgb(255,212,0)/255 = 1 / 0.831 / 0
 */
export function DuotoneFilter() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <filter id="hero-duotone" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0    0    0    1 0"
        />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0.039 1" />
          <feFuncG type="table" tableValues="0.039 0.831" />
          <feFuncB type="table" tableValues="0.039 0" />
        </feComponentTransfer>
      </filter>
    </svg>
  )
}
