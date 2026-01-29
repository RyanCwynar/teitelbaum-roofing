export default function Home() {
  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io">Learn More</a>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">🏠 Teitelbaum's Roofing</a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="tel:5618522664" className="nav-cta">📞 (561) 852-2664</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">30+ Years of Excellence</div>
          <h1>Boca Raton's Trusted<br />Roofing Experts</h1>
          <p>Family-owned since 1991. Professional tile and shingle roof installations with hurricane-rated protection up to 160 MPH.</p>
          <div className="hero-buttons">
            <a href="tel:5618522664" className="btn-primary">Get Free Estimate</a>
            <a href="#services" className="btn-secondary">View Services</a>
          </div>
          <div className="hero-trust">
            <span>✓ Licensed & Insured</span>
            <span>✓ State Certified</span>
            <span>✓ Free Inspections</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Roofing Services</h2>
          <p className="section-subtitle">Quality craftsmanship that protects your home for decades</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Shingle Roofs</h3>
              <p>Premium shingle installations in a wide range of colors and styles. From 3-tab to architectural shingles, we ensure lasting beauty and protection.</p>
              <ul>
                <li>✓ Multiple style options</li>
                <li>✓ Wind resistant up to 160 MPH</li>
                <li>✓ Long-lasting durability</li>
              </ul>
            </div>

            <div className="service-card featured">
              <div className="service-badge">Most Popular</div>
              <div className="service-icon">🏛️</div>
              <h3>Tile Roofs</h3>
              <p>Beautiful and durable tile roofing that adds character to your home's exterior while providing superior protection from Florida weather.</p>
              <ul>
                <li>✓ Classic South Florida style</li>
                <li>✓ Exceptional longevity</li>
                <li>✓ Hurricane resistant</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Roof Repairs</h3>
              <p>From minor leaks to major storm damage, our experienced team provides lasting solutions to keep your roof in top shape.</p>
              <ul>
                <li>✓ Fast response times</li>
                <li>✓ Thorough inspections</li>
                <li>✓ Insurance claim assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Family-Owned Excellence Since 1991</h2>
              <p>For over 30 years, Teitelbaum's Roofing Inc. has been Boca Raton's trusted roofing partner. As a family-owned and operated business, we treat every home as if it were our own.</p>
              <p>Our commitment to honesty, integrity, and quality craftsmanship has made us the go-to choice for homeowners throughout Palm Beach County.</p>
              
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Roofs Installed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">160</div>
                  <div className="stat-label">MPH Wind Rating</div>
                </div>
              </div>
            </div>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🛡️</span>
                <div>
                  <h4>State Certified</h4>
                  <p>Licensed, bonded, and insured contractors</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <div>
                  <h4>Fast Turnaround</h4>
                  <p>Quick response and efficient project completion</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">💯</span>
                <div>
                  <h4>Quality Materials</h4>
                  <p>Only premium roofing products that last</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🤝</span>
                <div>
                  <h4>Personal Touch</h4>
                  <p>Direct communication with owners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <p className="section-subtitle">Trusted by homeowners across Boca Raton and Palm Beach County</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Steven and his team were fantastic! They replaced our entire tile roof in just 3 days. Professional, clean, and the roof looks amazing."</p>
              <div className="testimonial-author">
                <strong>Jennifer M.</strong>
                <span>Boca Raton</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"After Hurricane season, they were the only contractor who showed up when they said they would. Fixed our leak quickly and at a fair price."</p>
              <div className="testimonial-author">
                <strong>Michael R.</strong>
                <span>Delray Beach</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Family-owned really makes a difference. They treated our home like it was their own. Highly recommend for any roofing needs!"</p>
              <div className="testimonial-author">
                <strong>Patricia L.</strong>
                <span>Boynton Beach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="areas">
        <div className="container">
          <h2>Serving South Florida</h2>
          <div className="areas-list">
            <span>Boca Raton</span>
            <span>Delray Beach</span>
            <span>Boynton Beach</span>
            <span>Deerfield Beach</span>
            <span>Pompano Beach</span>
            <span>Coral Springs</span>
            <span>Parkland</span>
            <span>Wellington</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>Ready for a Free Roof Inspection?</h2>
          <p>Let our experts assess your roof and provide a no-obligation estimate. Protecting Boca Raton homes for over 30 years.</p>
          <div className="cta-buttons">
            <a href="tel:5618522664" className="btn-primary btn-large">📞 Call (561) 852-2664</a>
          </div>
          <div className="cta-hours">
            <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>🏠 Teitelbaum's Roofing Inc.</h4>
              <p>Family-owned roofing contractor serving Boca Raton and Palm Beach County since 1991.</p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>Shingle Roof Installation</li>
                <li>Tile Roof Installation</li>
                <li>Roof Repairs</li>
                <li>Free Inspections</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>📞 (561) 852-2664</li>
                <li>📍 Boca Raton, FL 33433</li>
                <li>🕐 Mon-Fri: 9AM - 5PM</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Teitelbaum's Roofing Inc. | Licensed, Bonded & Insured | State Certified Contractors</p>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          var params = new URLSearchParams(window.location.search);
          var ref = params.get('ref');
          if (ref) {
            var img = new Image();
            img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
          }
        })();
      `}} />
    </>
  );
}
