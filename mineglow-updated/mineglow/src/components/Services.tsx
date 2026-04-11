const services = [
  {
    num: '01',
    title: 'Çanta me Perla të Punuara me Dorë',
    desc: 'Çdo çantë është krijim unik — materialet zgjidhen me kujdes dhe çdo perël vendoset me dashuri artizanale. Nga çantat e vogla deri tek ato të mëdha.',
  },
  {
    num: '02',
    title: 'Portofola & Aksesore Artizanale',
    desc: 'Portofola elegante dhe aksesore praktike të punuara me perla. Ideal si dhurata për persona të dashur ose si aksesor personal unik.',
  },
  {
    num: '03',
    title: 'Dekorime Shtëpie me Perla',
    desc: 'Sende dekorative unike për shtëpinë — perde me perla, korniza të dekoruara dhe objekte të tjera artizanale që sjellin elegancë në çdo hapësirë.',
  },
  {
    num: '04',
    title: 'Punime të Personalizuara',
    desc: 'Krijoni diçka krejtësisht unike — çanta, aksesore ose dekorime me ngjyrat dhe modelin tuaj të preferuar. Dhurata ideale për raste të veçanta.',
  },
  {
    num: '05',
    title: 'Bizhuteri & Vathë me Perla',
    desc: 'Byzylykë, vathë, gjerdanë dhe byzylykë të punuara me perla natyrale dhe artificiale. Çdo copë është art në vetvete.',
  },
]

export default function Services() {
  return (
    <section id="sherbimet">
      <div className="svc-layout">
        <div className="svc-sidebar">
          <p className="s-label-copper">Çfarë ofrojmë</p>
          <h2>
            Artin e <em>Punimeve</em><br />
            Artizanale
          </h2>
          <p>
            Çdo produkt Mine Glow është i punuar me dorë në Shkodër.
            Perlatat zgjidhen me kujdes, modelet janë unike dhe çdo detaj
            pasqyron traditën artizanale shqiptare.
          </p>
        </div>

        <div className="svc-list" role="list">
          {services.map((s) => (
            <div key={s.num} className="svc-row" role="listitem">
              <span className="svc-num">{s.num}</span>
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="svc-arrow" aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
