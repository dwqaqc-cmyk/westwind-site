import React from 'react';
import { createRoot } from 'react-dom/client';
import { Camera, Zap, Wind, Building2, Grid3X3, Box, CloudLightning, ShieldCheck, Phone, Mail, Globe, MapPin } from 'lucide-react';
import './styles.css';

const coreServices = [
  { icon: Camera, title: 'Drone Thermal Imaging', text: 'Identify hotspots, electrical faults and thermal anomalies.' },
  { icon: Wind, title: 'Wind Turbine Inspection', text: 'Blade, nacelle and tower inspections with high-resolution imagery.' },
  { icon: Zap, title: 'Utility & Infrastructure Inspection', text: 'Overhead lines, substations, telecoms and infrastructure surveys.' },
  { icon: Grid3X3, title: 'Solar Farm Inspection', text: 'Thermal and visual inspections to identify underperforming assets.' },
  { icon: Building2, title: 'Roof & Building Inspection', text: 'Condition surveys, defect finding and maintenance inspections.' },
  { icon: Grid3X3, title: '2D Orthomosaic Mapping', text: 'High accuracy mapping for planning, engineering and compliance.' },
  { icon: Box, title: '3D Modelling & Mapping', text: 'Photogrammetry models, measurements and digital twins.' },
  { icon: CloudLightning, title: 'Construction & Storm Damage Inspection', text: 'Progress monitoring and rapid post-storm response.' }
];

const industries = ['Energy & Utilities', 'Renewable Energy', 'Infrastructure', 'Telecommunications', 'Construction', 'Local Authorities', 'Commercial & Industrial'];

const tiles = [
  ['Thermal Inspection', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80', 'Detect issues early, reduce downtime and improve asset reliability.'],
  ['Wind Turbine Inspection', 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=900&q=80', 'Safe, detailed inspections without costly rope access or downtime.'],
  ['Utility & Substation Surveys', 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80', 'High-resolution data for asset management, planning and compliance.'],
  ['Solar Farm Inspection', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80', 'Thermal analysis to identify underperforming panels and faults.'],
  ['3D Modelling & Mapping', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', 'Accurate models and measurements for design, planning and reporting.'],
  ['Construction Monitoring', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80', 'Track progress, verify work and reduce risk across your projects.']
];

function App() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <img src="/logo.png" alt="WestWind Survey & Thermal" className="header-logo" />
          <a className="outline-btn" href="mailto:info@westwindsurvey.co.uk">Request Quote</a>
        </div>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <div className="strap"><span />Precision Data. Powerful Insights.<span /></div>
          <h1>Drone survey, inspection & thermal imaging</h1>
          <p>WestWind Survey and Thermal is a Castle Douglas based specialist drone survey and inspection contractor providing safe, efficient and cost-effective aerial data solutions across the UK.</p>
          <div className="hero-actions">
            <a href="mailto:info@westwindsurvey.co.uk" className="primary-btn">Email Us</a>
            <a href="tel:07720323509" className="secondary-btn">Call 07720 323509</a>
          </div>
          <div className="quick-services">
            <div><Camera /> <strong>Survey & Mapping</strong></div>
            <div><Zap /> <strong>Inspection & Analysis</strong></div>
            <div><Wind /> <strong>Thermal Imaging</strong></div>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80" alt="Drone over landscape" />
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="section-title"><h2>Our Core Services</h2><span /></div>
          <div className="service-grid">
            {coreServices.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <Icon className="card-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container split-section">
        <aside className="industries">
          <h2>Industries We Support</h2>
          {industries.map((i) => <p key={i}>✦ {i}</p>)}
        </aside>
        <div className="tile-grid">
          {tiles.map(([title, src, text]) => (
            <article className="image-tile" key={title}>
              <h3>{title}</h3>
              <img src={src} alt={title} />
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="container why-grid">
          <div>
            <h2>Why Choose WestWind?</h2>
            <ul>
              <li>CAA approved operator</li>
              <li>£5 million public liability insurance</li>
              <li>Enterprise-grade equipment</li>
              <li>Fast mobilisation and flexible scheduling</li>
              <li>Health and safety focused workflow</li>
              <li>UK-wide service from Castle Douglas</li>
            </ul>
          </div>
          <div className="equipment">
            <h2>Equipment</h2>
            <h3>DJI Matrice 4TD</h3>
            <p>Enterprise drone platform with thermal, wide, zoom and laser ranging capabilities.</p>
            <div className="equipment-list"><span>Thermal Camera</span><span>High Resolution Visual</span><span>Laser Rangefinder</span><span>RTK Positioning</span></div>
          </div>
          <div className="badges">
            <div><ShieldCheck /><strong>CAA</strong><span>Approved Operator</span></div>
            <div><ShieldCheck /><strong>£5M</strong><span>Public Liability</span></div>
          </div>
        </div>
      </section>

      <section className="container contact-section">
        <div>
          <h2>Contact Us</h2>
          <p><Phone /> 07720 323509</p>
          <p><Mail /> info@westwindsurvey.co.uk</p>
          <p><Globe /> westwindsurvey.co.uk</p>
          <p><MapPin /> Castle Douglas, Dumfries & Galloway — operating UK-wide</p>
        </div>
        <img src="/logo.png" alt="WestWind Survey & Thermal" className="footer-logo" />
      </section>

      <footer>
        <div className="container footer-grid">
          <div><strong>Safe</strong><p>Reduce risk and avoid unnecessary working at height where possible.</p></div>
          <div><strong>Efficient</strong><p>Fast data capture and quick turnaround times.</p></div>
          <div><strong>Accurate</strong><p>High-resolution data for confident decision making.</p></div>
          <div><strong>Cost Effective</strong><p>Lower inspection costs with greater coverage and efficiency.</p></div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
