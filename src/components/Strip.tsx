const items = [
  'Çanta me Perla',
  'Portofola Artizanale',
  'Aksesore Unike',
  'Punime me Dorë',
  'Dekorime Shtëpie',
  'Dhurata të Personalizuara',
  'Shkodër · Shqipëri',
  'Art Artizanal',
]

export default function Strip() {
  // Duplicate for seamless loop
  const all = [...items, ...items]

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-inner">
        {all.map((item, i) => (
          <span key={i}>
            {item} <span className="strip-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
