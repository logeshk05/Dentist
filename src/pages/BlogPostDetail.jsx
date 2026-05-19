import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const postDatabase = {
  'understanding-dental-implants': {
    title: 'Understanding Dental Implants: A Complete Guide',
    category: 'Implants',
    date: 'May 10, 2026',
    readTime: '8 min read',
    author: 'Dr. Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80',
    content: [
      { type: 'paragraph', text: 'Dental implants have become the gold standard for replacing missing teeth, offering a permanent solution that closely mimics the look, feel, and function of natural teeth. Unlike removable dentures or fixed bridges, implants are surgically placed into the jawbone, where they fuse with the bone through a process called osseointegration.' },
      { type: 'heading', text: 'What Are Dental Implants?' },
      { type: 'paragraph', text: 'A dental implant is a small titanium post that serves as an artificial tooth root. Once placed in the jawbone, it provides a stable foundation for a custom-made crown, bridge, or denture. The titanium material is biocompatible, meaning your body accepts it naturally without adverse reactions.' },
      { type: 'paragraph', text: 'The implant system consists of three main components: the implant post (placed in the jawbone), the abutment (a connector piece), and the prosthetic crown (the visible tooth). Together, these components create a restoration that is virtually indistinguishable from a natural tooth.' },
      { type: 'heading', text: 'The Implant Procedure: Step by Step' },
      { type: 'paragraph', text: 'The journey to dental implants begins with a comprehensive consultation, including 3D imaging and a thorough examination of your oral health. Your dentist will assess bone density, gum health, and overall suitability for the procedure.' },
      { type: 'paragraph', text: 'During the surgical phase, the implant post is precisely placed into the jawbone under local anesthesia. Most patients report that the discomfort is comparable to a routine tooth extraction. A healing period of three to six months follows, during which the implant integrates with the surrounding bone tissue.' },
      { type: 'heading', text: 'Benefits of Choosing Implants' },
      { type: 'paragraph', text: 'Dental implants offer numerous advantages over traditional tooth replacement options. They prevent bone loss that naturally occurs when teeth are missing, maintain facial structure, and allow you to eat, speak, and smile with complete confidence. With proper care, dental implants can last a lifetime.' },
      { type: 'paragraph', text: 'Additionally, implants do not require altering adjacent healthy teeth—a common necessity with traditional bridges. This preservation of natural tooth structure contributes to better long-term oral health outcomes.' },
      { type: 'heading', text: 'Aftercare and Maintenance' },
      { type: 'paragraph', text: 'Caring for dental implants is straightforward and mirrors the routine for natural teeth: brush twice daily, floss regularly, and maintain regular dental check-ups. Your dentist may recommend specific cleaning tools designed for implant maintenance, such as interdental brushes or water flossers.' },
    ],
  },
  'teeth-whitening-myths': {
    title: 'Top 7 Teeth Whitening Myths Debunked',
    category: 'Whitening',
    date: 'May 5, 2026',
    readTime: '5 min read',
    author: 'Dr. James Chen',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    content: [
      { type: 'paragraph', text: 'In the age of social media and instant beauty trends, teeth whitening has become one of the most popular cosmetic dental procedures worldwide. However, with popularity comes misinformation. Let us separate fact from fiction to help you make informed decisions about brightening your smile.' },
      { type: 'heading', text: 'Myth 1: Whitening Damages Your Enamel' },
      { type: 'paragraph', text: 'When performed correctly under professional supervision, teeth whitening does not damage enamel. Professional whitening agents use carefully formulated concentrations of hydrogen peroxide or carbamide peroxide that penetrate the enamel to break down stain compounds without compromising tooth structure.' },
      { type: 'heading', text: 'Myth 2: Charcoal Toothpaste Is the Best Whitener' },
      { type: 'paragraph', text: 'Despite viral social media trends, activated charcoal toothpaste can actually harm your teeth. The abrasive particles can wear down enamel over time, making teeth more susceptible to staining and sensitivity. The American Dental Association has not approved any charcoal toothpaste products for whitening.' },
      { type: 'heading', text: 'Myth 3: Results Last Forever' },
      { type: 'paragraph', text: 'Whitening results are not permanent. Depending on your diet, habits, and oral hygiene routine, results typically last between six months and two years. Regular touch-up treatments and avoiding stain-causing foods and beverages can help extend your results significantly.' },
      { type: 'heading', text: 'Professional vs. At-Home Treatments' },
      { type: 'paragraph', text: 'Professional in-office whitening delivers the most dramatic and consistent results in the shortest time frame. While at-home kits can be effective for minor staining, they use lower concentrations and require longer treatment periods. Consulting your dentist ensures you choose the safest and most effective option for your specific needs.' },
    ],
  },
  'childrens-dental-health': {
    title: "Children's Dental Health: Starting Early Matters",
    category: 'Pediatrics',
    date: 'April 28, 2026',
    readTime: '6 min read',
    author: 'Dr. Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1600&q=80',
    content: [
      { type: 'paragraph', text: "Establishing good oral health habits early in life is one of the most impactful investments you can make in your child's overall well-being. The health of primary (baby) teeth directly influences the development and alignment of permanent teeth, making pediatric dental care essential from the very first tooth." },
      { type: 'heading', text: 'When Should the First Visit Happen?' },
      { type: 'paragraph', text: "The American Academy of Pediatric Dentistry recommends scheduling your child's first dental visit by their first birthday or within six months of their first tooth erupting. This early visit allows the dentist to assess development, identify potential issues, and educate parents on proper infant oral care techniques." },
      { type: 'heading', text: 'Building Healthy Habits at Home' },
      { type: 'paragraph', text: "Before teeth appear, gently wipe your baby's gums with a soft, damp cloth after feedings. Once the first tooth emerges, begin brushing with a rice-grain-sized smear of fluoride toothpaste twice daily. As your child grows, make brushing a fun, consistent part of their daily routine." },
      { type: 'paragraph', text: "Limiting sugary snacks and drinks between meals is equally important. Frequent sugar exposure creates an acidic environment that accelerates tooth decay. Encourage water as the primary beverage and offer healthy snacks like cheese, vegetables, and fresh fruits." },
      { type: 'heading', text: 'Common Childhood Dental Issues' },
      { type: 'paragraph', text: "Early childhood caries (cavities), thumb-sucking habits, and malocclusion (misaligned bite) are among the most common pediatric dental concerns. Regular dental visits allow your dentist to monitor these issues and intervene early when necessary, often preventing more complex treatments later." },
    ],
  },
  'gum-disease-prevention': {
    title: 'The Silent Threat: Preventing Gum Disease',
    category: 'Gum Care',
    date: 'April 20, 2026',
    readTime: '7 min read',
    author: 'Dr. Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=80',
    content: [
      { type: 'paragraph', text: 'Periodontal disease, commonly known as gum disease, is one of the most prevalent chronic conditions in adults worldwide. Often progressing silently with few obvious symptoms in its early stages, gum disease can lead to tooth loss, bone deterioration, and has been linked to systemic health conditions including heart disease and diabetes.' },
      { type: 'heading', text: 'Recognizing the Early Warning Signs' },
      { type: 'paragraph', text: 'Gingivitis, the earliest stage of gum disease, manifests as red, swollen gums that bleed easily during brushing or flossing. You may also notice persistent bad breath, receding gum lines, or increased tooth sensitivity. These symptoms should never be ignored, as gingivitis is fully reversible with proper treatment.' },
      { type: 'heading', text: 'Prevention Strategies That Work' },
      { type: 'paragraph', text: 'Consistent oral hygiene is your strongest defense. Brush for two full minutes twice daily using a soft-bristled toothbrush, and floss at least once a day to remove plaque from areas your toothbrush cannot reach. An antimicrobial mouth rinse can provide additional protection against bacterial buildup.' },
      { type: 'paragraph', text: 'Professional dental cleanings every six months are essential for removing hardened tartar (calculus) that cannot be eliminated through home care alone. Your dental hygienist can also identify early signs of gum disease before they progress to more serious stages.' },
      { type: 'heading', text: 'The Connection to Overall Health' },
      { type: 'paragraph', text: 'Research continues to reveal strong connections between periodontal health and systemic conditions. The bacteria associated with gum disease can enter the bloodstream, potentially contributing to cardiovascular disease, respiratory infections, and complications in managing diabetes. Maintaining healthy gums is truly an investment in your entire body.' },
    ],
  },
  'root-canal-explained': {
    title: 'Root Canal Treatment: Nothing to Fear',
    category: 'Root Canal',
    date: 'April 12, 2026',
    readTime: '6 min read',
    author: 'Dr. James Chen',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1600&q=80',
    content: [
      { type: 'paragraph', text: 'Few dental procedures carry as much undeserved anxiety as root canal treatment. Modern endodontic techniques have transformed this procedure into a comfortable, efficient experience that relieves pain rather than causing it. Understanding what actually happens during a root canal can help dispel common fears.' },
      { type: 'heading', text: 'When Is a Root Canal Necessary?' },
      { type: 'paragraph', text: 'A root canal becomes necessary when the pulp—the soft tissue inside the tooth containing nerves and blood vessels—becomes infected or inflamed. This can result from deep decay, repeated dental procedures on the same tooth, cracks, or traumatic injury. Common symptoms include severe toothache, prolonged sensitivity to hot or cold, darkening of the tooth, and swelling in nearby gums.' },
      { type: 'heading', text: 'The Modern Procedure' },
      { type: 'paragraph', text: 'Thanks to advanced anesthesia techniques and precision instruments, most patients report that a root canal feels no different from getting a standard filling. The procedure involves removing the infected pulp, cleaning and shaping the root canals, then sealing them with a biocompatible material. A crown is typically placed afterward to protect and restore the tooth.' },
      { type: 'heading', text: 'Recovery and Success Rates' },
      { type: 'paragraph', text: 'Most patients return to normal activities the very next day. Mild soreness may persist for a few days and responds well to over-the-counter pain medication. Root canal treatments have a success rate exceeding 95%, and treated teeth can last a lifetime with proper care and regular dental check-ups.' },
    ],
  },
  'nutrition-oral-health': {
    title: 'Foods That Strengthen Your Teeth Naturally',
    category: 'Nutrition',
    date: 'April 5, 2026',
    readTime: '5 min read',
    author: 'Dr. Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=80',
    content: [
      { type: 'paragraph', text: 'Your diet plays a pivotal role in maintaining strong, healthy teeth. While brushing and flossing remove harmful bacteria and plaque, the foods you consume can either strengthen or weaken your dental defenses. Understanding the relationship between nutrition and oral health empowers you to make choices that protect your smile from the inside out.' },
      { type: 'heading', text: 'Calcium-Rich Foods for Strong Enamel' },
      { type: 'paragraph', text: 'Calcium is the primary mineral in tooth enamel, making dairy products like cheese, yogurt, and milk excellent choices for dental health. Cheese is particularly beneficial because it raises the pH level in your mouth, reducing acid erosion, while also providing casein—a protein that strengthens enamel surfaces.' },
      { type: 'heading', text: 'Crunchy Fruits and Vegetables' },
      { type: 'paragraph', text: 'Raw, fibrous produce like apples, carrots, and celery act as natural toothbrushes. The chewing action stimulates saliva production—your mouth\'s natural defense against cavities—while the fibrous texture helps scrub away food particles and surface stains from tooth surfaces.' },
      { type: 'heading', text: 'Foods to Limit or Avoid' },
      { type: 'paragraph', text: 'Sugary candies, acidic beverages, and starchy processed snacks create the ideal environment for cavity-causing bacteria. Particularly harmful are sticky sweets that cling to teeth and acidic drinks like soda and citrus juices that erode enamel over time. When you do indulge, rinsing with water afterward can help minimize damage.' },
      { type: 'heading', text: 'Hydration: The Overlooked Hero' },
      { type: 'paragraph', text: 'Water, especially fluoridated tap water, is the best beverage choice for your teeth. Staying well-hydrated ensures adequate saliva production, which naturally washes away food debris, neutralizes harmful acids, and delivers essential minerals to tooth surfaces throughout the day.' },
    ],
  },
};

const s = {
  page: { paddingTop: '20px', background: '#fff' },
  backBar: {
    maxWidth: '800px', margin: '0 auto 30px', padding: '0 60px',
  },
  backLink: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    color: '#1a8bc8', textDecoration: 'none', fontSize: '13px',
    fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase',
    transition: 'color 0.3s',
  },
  heroWrap: {
    maxWidth: '1000px', margin: '0 auto 50px', padding: '0 60px',
  },
  heroImage: {
    width: '100%', height: '460px', objectFit: 'cover',
    borderRadius: '16px', display: 'block',
    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
  },
  article: {
    maxWidth: '760px', margin: '0 auto', padding: '0 60px 100px',
  },
  metaRow: {
    display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center',
    marginBottom: '24px',
  },
  tag: {
    background: '#7cb342', color: '#fff', fontSize: '10px', fontWeight: 700,
    letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px',
    borderRadius: '30px',
  },
  metaText: { fontSize: '13px', color: '#999', fontWeight: 500 },
  title: {
    fontSize: '42px', fontWeight: 700, lineHeight: 1.2,
    color: '#1a1a1a', marginBottom: '14px',
  },
  accentLine: {
    width: '60px', height: '3px', background: '#7cb342',
    borderRadius: '2px', marginBottom: '40px',
  },
  authorBar: {
    display: 'flex', alignItems: 'center', gap: '14px',
    padding: '20px 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee',
    marginBottom: '40px',
  },
  authorAvatar: {
    width: '44px', height: '44px', borderRadius: '50%',
    background: 'linear-gradient(135deg, #1a8bc8, #7cb342)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#fff', fontSize: '16px', fontWeight: 700,
  },
  authorName: { fontSize: '15px', fontWeight: 600, color: '#1a1a1a' },
  authorRole: { fontSize: '12px', color: '#999' },
  heading: {
    fontSize: '24px', fontWeight: 700, color: '#1a1a1a',
    marginTop: '40px', marginBottom: '16px', lineHeight: 1.3,
  },
  paragraph: {
    fontSize: '16px', lineHeight: 1.9, color: '#444',
    marginBottom: '20px',
  },
  notFound: {
    textAlign: 'center', paddingTop: '180px', paddingBottom: '100px',
  },
  notFoundTitle: {
    fontSize: '48px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px',
  },
  notFoundText: { fontSize: '16px', color: '#666', marginBottom: '30px' },
};

function BlogPostDetail() {
  const { id } = useParams();
  const post = postDatabase[id];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!post) {
    return (
      <div style={{ ...s.page, ...s.notFound }}>
        <h1 style={s.notFoundTitle}>Post Not Found</h1>
        <p style={s.notFoundText}>The article you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/blog"
          style={{ ...s.backLink, justifyContent: 'center' }}
          onMouseEnter={(e) => { e.target.style.color = '#7cb342'; }}
          onMouseLeave={(e) => { e.target.style.color = '#1a8bc8'; }}
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const initials = post.author.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <div style={s.page}>
      {/* Back link */}
      <div style={s.backBar}>
        <Link
          to="/blog"
          style={s.backLink}
          onMouseEnter={(e) => { e.target.style.color = '#7cb342'; }}
          onMouseLeave={(e) => { e.target.style.color = '#1a8bc8'; }}
        >
          <i className="fas fa-arrow-left"></i> Back to Blog
        </Link>
      </div>

      {/* Hero cover image */}
      <div style={s.heroWrap}>
        <img src={post.image} alt={post.title} style={s.heroImage} />
      </div>

      {/* Article body */}
      <article style={s.article}>
        {/* Meta */}
        <div style={s.metaRow}>
          <span style={s.tag}>{post.category}</span>
          <span style={s.metaText}>
            <i className="far fa-calendar-alt" style={{ marginRight: 6 }}></i>{post.date}
          </span>
          <span style={s.metaText}>
            <i className="far fa-clock" style={{ marginRight: 6 }}></i>{post.readTime}
          </span>
        </div>

        <h1 style={s.title}>{post.title}</h1>
        <div style={s.accentLine}></div>

        {/* Author bar */}
        <div style={s.authorBar}>
          <div style={s.authorAvatar}>{initials}</div>
          <div>
            <div style={s.authorName}>{post.author}</div>
            <div style={s.authorRole}>Dental Specialist</div>
          </div>
        </div>

        {/* Content blocks */}
        {post.content.map((block, i) => {
          if (block.type === 'heading') {
            return <h2 key={i} style={s.heading}>{block.text}</h2>;
          }
          return <p key={i} style={s.paragraph}>{block.text}</p>;
        })}
      </article>
    </div>
  );
}

export default BlogPostDetail;
