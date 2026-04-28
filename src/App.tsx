import { useState } from 'react';
import {
  actionLinks,
  awarenessIdeas,
  campaign,
  emailScript,
  faqs,
  impactCards,
  phoneScript,
  quickActions,
  supportCards,
} from './data/siteContent';
import './styles/index.css';

type CopyButtonProps = {
  text: string;
  label: string;
};

function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      alert('Copy failed. Select the text and copy it manually.');
    }
  }

  return (
    <button className="gf-btn gf-btn-dark" onClick={copyText} type="button">
      {copied ? 'Copied!' : label}
    </button>
  );
}

function App() {
  function sharePage() {
    const shareData = {
      title: campaign.name,
      text: campaign.subheadline,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => undefined);
      return;
    }

    navigator.clipboard.writeText(window.location.href).catch(() => undefined);
    alert('Page link copied.');
  }

  return (
    <main id="top" className="site-shell">
      <div className="ticker" aria-label="Campaign highlights">
        <span>Protect small businesses</span>
        <span>Regulate hemp responsibly</span>
        <span>No blanket ban</span>
        <span>Call lawmakers before November</span>
        <span>Protect adults and kids</span>
      </div>

      <header className="nav">
        <a className="brand" href="#top" aria-label="Good Feels Action home">
          <span className="brand-good">good</span>
          <span className="brand-feels">feels</span>
          <span className="brand-action">action</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#problem">Issue</a>
          <a href="#rules">Rules</a>
          <a href="#action">Act Now</a>
          <a href="#scripts">Scripts</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="shop-style-cta" href={campaign.petitionUrl}>Sign Now</a>
      </header>

      <section className="hero section-pad">
        <div className="blob blob-one" />
        <div className="blob blob-two" />
        <div className="blob blob-three" />

        <div className="hero-copy">
          <p className="eyebrow">{campaign.eyebrow}</p>
          <h1>
            <span>{campaign.headlineLineOne}</span>
            <span>{campaign.headlineLineTwo}</span>
          </h1>
          <p className="hero-subhead">{campaign.subheadline}</p>
          <div className="button-row">
            <a className="gf-btn gf-btn-yellow" href={campaign.petitionUrl}>{campaign.primaryCta}</a>
            <a className="gf-btn gf-btn-outline" href="tel:2022243121">{campaign.secondaryCta}</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Campaign sticker">
          <div className="campaign-pack">
            <div className="pack-cap" />
            <div className="pack-label">
              <p>No Blanket Ban</p>
              <h2>Regulate Hemp</h2>
              <span>Protect small business</span>
            </div>
          </div>
          <div className="hero-sticker sticker-one">60 sec action</div>
          <div className="hero-sticker sticker-two">Call today</div>
        </aside>
      </section>

      <section className="quick-action-strip" aria-label="Fast actions">
        <p>Take 60 seconds:</p>
        <div>
          {quickActions.map((action) => (
            <a key={action.label} href={action.href}>{action.label}</a>
          ))}
        </div>
      </section>

      <section id="problem" className="white-section section-pad split-section">
        <div className="image-card graphic-card" aria-hidden="true">
          <div className="can-row">
            <div className="can can-orange">NO</div>
            <div className="can can-green">BAN</div>
            <div className="can can-purple">HEMP</div>
          </div>
        </div>
        <div>
          <p className="eyebrow dark">The issue</p>
          <h2>A ban won’t fix bad actors</h2>
          <p>
            Bad actors should be held accountable. Products should be tested, labeled, age-gated, and child-safe. But a broad ban could punish responsible companies, remove legal options for adults, and push consumers toward less transparent markets.
          </p>
          <p>
            This is bigger than one brand. It is about adults having legal choices, small businesses staying open, and lawmakers choosing smart rules over blanket bans.
          </p>
          <a className="gf-btn gf-btn-dark" href="#scripts">Get the Call Script</a>
        </div>
      </section>

      <section id="rules" className="yellow-section section-pad">
        <div className="section-heading centered">
          <p className="eyebrow dark">What we want</p>
          <h2>Regulate it. Don’t erase it.</h2>
          <p>We support rules that actually protect people.</p>
        </div>
        <div className="pill-grid">
          {supportCards.map((item) => (
            <div className="info-pill" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="white-section section-pad impact-section">
        <div className="section-heading centered compact">
          <p className="eyebrow dark">Who gets hurt</p>
          <h2>Don’t punish good actors</h2>
          <p>A blanket ban does not just hit “big cannabis.” It can hit real local businesses and adults who want legal low-dose options.</p>
        </div>
        <div className="impact-grid">
          {impactCards.map((card, index) => (
            <article className={`impact-card impact-${index + 1}`} key={card.title}>
              <div className="impact-number">{index + 1}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="action" className="blue-section section-pad">
        <div className="section-heading centered light">
          <p className="eyebrow">Take action</p>
          <h2>Do these four things today</h2>
          <p>One petition. One call. One email. One share. Make it easy for lawmakers to see organized opposition.</p>
        </div>
        <div className="action-grid">
          {actionLinks.map((link) => (
            <a className="link-card" href={link.href} key={link.title} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <span>{link.cta}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="scripts" className="white-section section-pad scripts-section">
        <div className="section-heading centered compact">
          <p className="eyebrow dark">Scripts</p>
          <h2>Copy paste and call</h2>
          <p>Call Congress: <strong>{campaign.capitolSwitchboard}</strong>. Keep it short, calm, and local.</p>
        </div>
        <div className="script-grid">
          <article className="script-box">
            <div className="script-topline">
              <h3>Phone Script</h3>
              <CopyButton text={phoneScript} label="Copy Call Script" />
            </div>
            <pre>{phoneScript}</pre>
            <div className="script-actions">
              <a href="tel:2022243121">Call Congress</a>
              <a href="https://www.senate.gov/senators/senators-contact.htm" target="_blank" rel="noreferrer">Senate Contacts</a>
            </div>
          </article>

          <article className="script-box">
            <div className="script-topline">
              <h3>Email Script</h3>
              <CopyButton text={emailScript} label="Copy Email" />
            </div>
            <pre>{emailScript}</pre>
            <div className="script-actions">
              <a href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noreferrer">Find House Rep</a>
              <a href="https://malegislature.gov/Search/FindMyLegislator" target="_blank" rel="noreferrer">Find MA Reps</a>
            </div>
          </article>
        </div>
      </section>

      <section id="spread" className="yellow-section section-pad">
        <div className="section-heading centered compact">
          <p className="eyebrow dark">Spread awareness</p>
          <h2>Turn the page into a campaign</h2>
        </div>
        <div className="awareness-grid">
          {awarenessIdeas.map((idea) => (
            <div className="awareness-card" key={idea}>{idea}</div>
          ))}
        </div>
        <div className="centered-button">
          <button className="gf-btn gf-btn-dark" onClick={sharePage} type="button">Share This Page</button>
        </div>
      </section>

      <section id="faq" className="white-section section-pad faq-section">
        <div className="section-heading centered compact">
          <p className="eyebrow dark">FAQ</p>
          <h2>Quick answers</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta section-pad">
        <p className="eyebrow">November action center</p>
        <h2>Tell lawmakers: no blanket hemp ban</h2>
        <div className="button-row centered-row">
          <a className="gf-btn gf-btn-yellow" href={campaign.petitionUrl}>Sign the Petition</a>
          <a className="gf-btn gf-btn-outline-light" href="tel:2022243121">Call Congress</a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-good">good</span>
          <span className="brand-feels">feels</span>
          <span className="brand-action">action</span>
        </a>
        <div className="footer-columns">
          <div>
            <h4>Take Action</h4>
            <a href={campaign.petitionUrl}>Sign Petition</a>
            <a href="tel:2022243121">Call Congress</a>
            <a href="#scripts">Copy Scripts</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="https://www.senate.gov/senators/senators-contact.htm" target="_blank" rel="noreferrer">Senate Contacts</a>
            <a href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noreferrer">House Finder</a>
            <a href="https://malegislature.gov/Search/FindMyLegislator" target="_blank" rel="noreferrer">MA Legislators</a>
          </div>
          <div>
            <h4>Message</h4>
            <a href="#rules">Regulate It</a>
            <a href="#problem">Don’t Ban It</a>
            <a href="#spread">Share Toolkit</a>
          </div>
        </div>
        <p className="disclaimer">This site is for public education and civic advocacy. It is not legal advice. Add formal campaign, funding, or compliance language before public launch if required.</p>
      </footer>

      <div className="mobile-cta">
        <a href="tel:2022243121">Call Congress</a>
        <a href="#scripts">Copy Script</a>
      </div>
    </main>
  );
}

export default App;
