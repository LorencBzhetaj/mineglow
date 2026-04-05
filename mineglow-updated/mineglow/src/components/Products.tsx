import Image from 'next/image'

const categories = [
  { label: 'Çanta me Perla',    gridClass: 'sh-1', img: '/images/cat-canta.png' },
  { label: 'Portofola',         gridClass: 'sh-2', img: '/images/cat-portofol.png' },
  { label: 'Byzylykë',          gridClass: 'sh-3', img: '/images/cat-byzylyk.png' },
  { label: 'Vathë',             gridClass: 'sh-4', img: '/images/cat-vathe.png' },
  { label: 'Aksesore Flokësh',  gridClass: 'sh-5', img: '/images/cat-floke.png' },
  { label: 'Dekorime',          gridClass: 'sh-6', img: '/images/cat-dekorime.png' },
]

export default function Products() {
  return (
    <section id="kryefaqja-produktet">
      <div className="prod-header">
        <div>
          <p className="s-label-copper">Koleksioni</p>
          <h2>
            Punime të <em>Veçanta</em><br />
            me Perla
          </h2>
        </div>
        <a href="/shop" className="btn-gold" style={{ alignSelf: 'flex-end' }}>
          Të gjitha produktet →
        </a>
      </div>

      <div className="showcase" role="list">
        {categories.map((cat) => (
          <article
            key={cat.label}
            className={`sh-item ${cat.gridClass}`}
            role="listitem"
            aria-label={cat.label}
          >
            <Image
              src={cat.img}
              alt={cat.label}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="sh-label">{cat.label}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
