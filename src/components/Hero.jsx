function Hero() {
  const handleDiscover = (e) => {
    e.preventDefault();
    const target = document.querySelector('#services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">Only One Kind of Treatment</p>
        <h1 className="hero-title">YOUR NEW<br />SMILE</h1>
        <a href="#services" className="btn-outline" onClick={handleDiscover}>Discover</a>
      </div>
    </section>
  );
}

export default Hero;
