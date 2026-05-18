import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'understanding-dental-implants',
    title: 'Understanding Dental Implants: A Complete Guide',
    excerpt: 'Dental implants have revolutionized modern dentistry, offering a permanent solution for missing teeth that looks, feels, and functions just like natural teeth.',
    date: 'May 10, 2026',
    readTime: '8 min read',
    category: 'Implants',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'teeth-whitening-myths',
    title: 'Top 7 Teeth Whitening Myths Debunked',
    excerpt: 'From charcoal toothpaste to lemon juice rinses, we separate fact from fiction in the world of teeth whitening treatments.',
    date: 'May 5, 2026',
    readTime: '5 min read',
    category: 'Whitening',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'childrens-dental-health',
    title: "Children's Dental Health: Starting Early Matters",
    excerpt: "Your child's first dental visit should happen by their first birthday. Learn why early dental care sets the foundation for a lifetime of healthy smiles.",
    date: 'April 28, 2026',
    readTime: '6 min read',
    category: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gum-disease-prevention',
    title: 'The Silent Threat: Preventing Gum Disease',
    excerpt: 'Gum disease affects nearly half of adults over 30. Discover the warning signs and proven prevention strategies to protect your oral health.',
    date: 'April 20, 2026',
    readTime: '7 min read',
    category: 'Gum Care',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'root-canal-explained',
    title: 'Root Canal Treatment: Nothing to Fear',
    excerpt: 'Modern root canal procedures are virtually painless. Learn what really happens during treatment and why it saves millions of teeth each year.',
    date: 'April 12, 2026',
    readTime: '6 min read',
    category: 'Root Canal',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nutrition-oral-health',
    title: 'Foods That Strengthen Your Teeth Naturally',
    excerpt: 'What you eat directly impacts your dental health. Discover the best foods for strong enamel and which snacks to avoid between meals.',
    date: 'April 5, 2026',
    readTime: '5 min read',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },
];

const styles = {
  page: {
    paddingTop: '20px',
    background: '#f8f9fa',
  },
  /* ── Featured Banner ── */
  featured: {
    position: 'relative',
    margin: '0 60px 60px',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '480px',
  },
  featuredImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  featuredOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, transparent 30%, rgba(26,27,31,0.88) 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '50px',
  },
  featuredTag: {
    display: 'inline-block',
    background: '#7cb342',
    color: '#fff',
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    padding: '5px 14px',
    borderRadius: '30px',
    marginBottom: '16px',
    width: 'fit-content',
  },
  featuredTitle: {
    fontSize: '38px',
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1.25,
    marginBottom: '14px',
    maxWidth: '680px',
  },
  featuredMeta: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    color: 'rgba(255,255,255,0.75)',
    fontSize: '13px',
    fontWeight: 500,
    marginBottom: '22px',
  },
  featuredLink: {
    display: 'inline-block',
    padding: '12px 34px',
    border: '2px solid #7cb342',
    color: '#7cb342',
    textDecoration: 'none',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    borderRadius: '4px',
    transition: 'all 0.3s',
    width: 'fit-content',
  },
  /* ── Section Header ── */
  sectionHeader: {
    maxWidth: '1200px',
    margin: '0 auto 40px',
    padding: '0 60px',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  accentLine: {
    width: '60px',
    height: '3px',
    background: '#7cb342',
    borderRadius: '2px',
  },
  /* ── Grid ── */
  grid: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 60px 100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    color: 'inherit',
  },
  cardImageWrap: {
    height: '210px',
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    display: 'block',
  },
  cardTag: {
    position: 'absolute',
    top: '14px',
    left: '14px',
    background: 'rgba(26,139,200,0.92)',
    color: '#fff',
    fontSize: '9px',
    fontWeight: 700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    padding: '4px 12px',
    borderRadius: '30px',
    backdropFilter: 'blur(4px)',
  },
  cardBody: {
    padding: '26px 26px 30px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 1.4,
    color: '#1a1a1a',
    marginBottom: '10px',
    transition: 'color 0.3s',
  },
  cardExcerpt: {
    fontSize: '14px',
    color: '#666',
    lineHeight: 1.7,
    flex: 1,
    marginBottom: '18px',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #f0f0f0',
    paddingTop: '16px',
    fontSize: '12px',
    color: '#999',
    fontWeight: 500,
  },
  readMore: {
    color: '#1a8bc8',
    fontWeight: 700,
    fontSize: '11px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
};

function Blog() {
  const featured = blogPosts[0];
  const regular = blogPosts.slice(1);

  return (
    <div style={styles.page} id="blog">
      {/* ── Featured Post Banner ── */}
      <div
        style={styles.featured}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.005)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <img src={featured.image} alt={featured.title} style={styles.featuredImg} />
        <div style={styles.featuredOverlay}>
          <span style={styles.featuredTag}>{featured.category}</span>
          <h1 style={styles.featuredTitle}>{featured.title}</h1>
          <div style={styles.featuredMeta}>
            <span><i className="far fa-calendar-alt" style={{ marginRight: 6 }}></i>{featured.date}</span>
            <span><i className="far fa-clock" style={{ marginRight: 6 }}></i>{featured.readTime}</span>
          </div>
          <Link
            to={`/blog/${featured.id}`}
            style={styles.featuredLink}
            onMouseEnter={(e) => { e.target.style.background = '#7cb342'; e.target.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#7cb342'; }}
          >
            Read Article
          </Link>
        </div>
      </div>

      {/* ── Section Header ── */}
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Latest Articles</h2>
        <div style={styles.accentLine}></div>
      </div>

      {/* ── Post Grid ── */}
      <div style={styles.grid}>
        {regular.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.08)';
              const title = e.currentTarget.querySelector('[data-title]');
              if (title) title.style.color = '#1a8bc8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
              const title = e.currentTarget.querySelector('[data-title]');
              if (title) title.style.color = '#1a1a1a';
            }}
          >
            <div style={styles.cardImageWrap}>
              <img src={post.image} alt={post.title} style={styles.cardImage} />
              <span style={styles.cardTag}>{post.category}</span>
            </div>
            <div style={styles.cardBody}>
              <h3 data-title="true" style={styles.cardTitle}>{post.title}</h3>
              <p style={styles.cardExcerpt}>{post.excerpt}</p>
              <div style={styles.cardFooter}>
                <span>{post.date} · {post.readTime}</span>
                <span style={styles.readMore}>Read →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
