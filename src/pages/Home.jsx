// Generated from the Nightbloom design mockup (Main.dc.html), then hand-editable.
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';

const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`;

const PAGE_CSS = "body{margin:0}\na{color:inherit}a:hover{color:#395C6B}\n.re *{box-sizing:border-box}\n.re{font-family:'Hanken Grotesk',system-ui,sans-serif;color:var(--ink);background:#F7F5EC;overflow-x:clip}\n.wrap{max-width:1240px;margin:0 auto;padding:0 32px}\n.serif{font-family:'Fraunces',Georgia,serif;font-weight:500;letter-spacing:-.015em;line-height:1.05;margin:0}\n.eyebrow{font-weight:700;font-size:12px;letter-spacing:.18em;text-transform:uppercase;margin:0;color:#395C6B}\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 26px;border-radius:4px;font:600 16px 'Hanken Grotesk',sans-serif;text-decoration:none;border:1.5px solid #395C6B;cursor:pointer;transition:background .2s,color .2s}\n.btn-slate{background:#395C6B;color:#fff}\n.btn-slate:hover{background:#22383F;border-color:#22383F;color:#fff}\n.btn-line{background:transparent;color:#395C6B}\n.btn-line:hover{background:#395C6B;color:#fff}\n.nav a{font-weight:600;font-size:15px;text-decoration:none;padding:12px 2px}\n.nav a:hover{color:#395C6B;text-decoration:underline;text-underline-offset:6px}\n.ph{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#BCD3F2;color:#22383F;font-size:13px;font-weight:600;letter-spacing:.04em}\n.ph svg{width:44px;height:44px}\n.ph.sage{background:#D4CB92}.ph.sand{background:#E6E1C5}.ph.wis{background:#80A4ED}\n.hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:64px;align-items:center}\n.blueprint{background-color:#22383F;background-image:linear-gradient(rgba(188,211,242,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(188,211,242,.07) 1px,transparent 1px);background-size:28px 28px}\n.plan{display:grid;grid-template-columns:1.3fr 1fr 1fr;grid-template-rows:170px 150px 150px;grid-template-areas:\"liv liv kit\" \"liv liv stu\" \"por bed gar\";border:4px solid #BCD3F2;background:rgba(34,56,63,.6)}\n.room{position:relative;display:flex;flex-direction:column;justify-content:flex-end;gap:4px;padding:16px;text-decoration:none;color:#E6E1C5;border:2px solid #BCD3F2;margin:-1px;transition:background .25s}\n.room:hover,.room:focus-visible{background:rgba(188,211,242,.14);color:#fff;outline:none}\n.room:focus-visible{box-shadow:inset 0 0 0 3px #D4CB92}\n.r-liv{grid-area:liv}.r-kit{grid-area:kit}.r-stu{grid-area:stu}.r-por{grid-area:por;background:rgba(212,203,146,.12)}.r-bed{grid-area:bed}.r-gar{grid-area:gar;border-style:dashed}\n.dim{position:absolute;top:12px;left:14px;font:600 11px ui-monospace,'SF Mono',Menlo,monospace;letter-spacing:.08em;color:#80A4ED;text-transform:uppercase}\n.rname{font-family:'Fraunces',Georgia,serif;font-size:24px;line-height:1.1}\n.r-liv .rname{font-size:34px}\n.rgo{font-size:14px;font-weight:600;color:#D4CB92;opacity:.85;transition:opacity .2s,transform .2s}\n.room:hover .rgo,.room:focus-visible .rgo{opacity:1;transform:translateX(4px)}\n.door{position:absolute;right:14px;bottom:14px;width:34px;height:34px;fill:none;stroke:#80A4ED;stroke-width:1.5;stroke-dasharray:3 3}\n.titleblock{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:6px 16px;border:2px solid #BCD3F2;border-top:0;padding:10px 14px;font:500 12px ui-monospace,'SF Mono',Menlo,monospace;letter-spacing:.06em;color:#BCD3F2;text-transform:uppercase}\n.titleblock b{color:#F7F5EC;font-weight:700}\n.compass{display:inline-flex;align-items:center;gap:4px;color:#D4CB92}\n.plan.plan{display:block;border:0;background:none}\n.fp{width:100%;height:auto;display:block;overflow:visible}\n.fp .wall{fill:none;stroke:#F7F5EC;stroke-width:9;stroke-linejoin:miter}\n.fp .wall-in path{fill:none;stroke:#BCD3F2;stroke-width:4;stroke-linecap:square}\n.fp .win path{fill:none;stroke:#22383F;stroke-width:5}\n.fp .win{filter:none}\n.fp .door path{fill:none;stroke:#80A4ED;stroke-width:1.4;stroke-dasharray:3 3}\n.fp .fx rect,.fp .fx path{fill:none;stroke:rgba(188,211,242,.55);stroke-width:1.4}\n.fp .dimline path{fill:none;stroke:#80A4ED;stroke-width:1.2}\n.fp text{font-family:'Hanken Grotesk',sans-serif}\n.fp .dimline text,.fp .rd,.fp .lvl{font:600 11px ui-monospace,'SF Mono',Menlo,monospace;letter-spacing:.06em;fill:#80A4ED}\n.fp .lvl{text-transform:uppercase;fill:#D4CB92}\n.fp .rn{font:500 21px 'Fraunces',Georgia,serif;fill:#F7F5EC}\n.fp .rn.big{font-size:28px}\n.fp .rg{font-size:12px;font-weight:700;fill:#D4CB92;opacity:.8;transition:opacity .2s}\n.fp .lbl text{font:600 12px 'Hanken Grotesk',sans-serif;letter-spacing:.12em;text-transform:uppercase;fill:rgba(230,225,197,.6)}\n.fp .lbl .rd{font-size:10px;fill:rgba(128,164,237,.7);letter-spacing:.04em;text-transform:none}\n.fp .rm rect{fill:rgba(188,211,242,0);transition:fill .25s}\n.fp .rm.porch rect{fill:rgba(212,203,146,.08);stroke:#D4CB92;stroke-width:1.6;stroke-dasharray:6 5}\n.fp .rm:hover rect,.fp .rm:focus-visible rect{fill:rgba(188,211,242,.16)}\n.fp .rm:hover .rg,.fp .rm:focus-visible .rg{opacity:1}\n.fp .rm:focus{outline:none}\n.fp .rm:focus-visible rect{stroke:#D4CB92;stroke-width:3}\n.titleblock{border:2px solid #BCD3F2}\n.agent{display:flex;align-items:center;gap:16px}\n.agent img{width:76px;height:76px;border-radius:50%;object-fit:cover;object-position:50% 20%;border:3px solid #D4CB92;flex-shrink:0}\n@media (max-width:640px){.fp .rg{font-size:14px}.fp .rn{font-size:24px}}\n@media (prefers-reduced-motion:reduce){.fp .rm rect,.fp .rg{transition:none}}\n.search{display:grid;grid-template-columns:repeat(3,minmax(0,1fr)) auto;gap:12px;align-items:end;background:#fff;border:1px solid rgba(34,56,63,.14);border-radius:6px;padding:18px}\n.field{display:flex;flex-direction:column;gap:7px;font-weight:600;font-size:13px}\n.field input,.field select,.field textarea{font:500 16px 'Hanken Grotesk',sans-serif;color:var(--ink);background:#fff;border:1.5px solid rgba(34,56,63,.3);border-radius:4px;padding:12px 14px;min-height:50px;width:100%}\n.field input:focus,.field select:focus,.field textarea:focus{outline:3px solid #80A4ED;outline-offset:1px;border-color:#395C6B}\n.facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0}\n.facts > div{padding:28px 32px;border-left:1px solid rgba(255,255,255,.25)}\n.facts > div:first-child{border-left:0}\n.pills{display:flex;flex-wrap:wrap;gap:8px}\n.pill{min-height:44px;padding:0 18px;border-radius:999px;border:1.5px solid rgba(34,56,63,.3);background:transparent;color:var(--ink);font:600 15px 'Hanken Grotesk',sans-serif;cursor:pointer}\n.pill:hover{border-color:#395C6B}\n.pill.on{background:#395C6B;border-color:#395C6B;color:#fff}\n.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}\n.card{display:flex;flex-direction:column;background:#fff;border-radius:6px;overflow:hidden;text-decoration:none;border:1px solid rgba(34,56,63,.1);transition:transform .2s,box-shadow .2s}\n.card:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(34,56,63,.12);color:inherit}\n.status{position:absolute;top:14px;left:14px;padding:6px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:#fff;color:#22383F}\n.status.st-pending{background:#D4CB92}.status.st-sold{background:#22383F;color:#fff}\n.specs{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:14px;color:#395C6B;font-weight:600}\n.tabs{display:inline-flex;background:#E6E1C5;border-radius:999px;padding:5px}\n.tab{min-height:44px;padding:0 24px;border-radius:999px;border:0;background:transparent;font:700 15px 'Hanken Grotesk',sans-serif;color:var(--ink);cursor:pointer}\n.tab.on{background:#395C6B;color:#fff}\n.steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px}\n.step{border-top:2px solid #395C6B;padding-top:18px;display:flex;flex-direction:column;gap:10px}\n.about{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:72px;align-items:center}\n.hoods{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}\n.quotes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}\n.split{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:64px;align-items:start}\n.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}\n.full{grid-column:1/-1}\n@media (max-width:1000px){\n .hero,.about,.split{grid-template-columns:minmax(0,1fr)}\n .cards{grid-template-columns:repeat(2,minmax(0,1fr))}\n .steps,.hoods{grid-template-columns:repeat(2,minmax(0,1fr))}\n .search{grid-template-columns:repeat(3,minmax(0,1fr))}\n .search .btn{grid-column:1/-1}\n .nav-links{display:none}\n}\n@media (max-width:640px){\n .wrap{padding:0 20px}\n .cards,.steps,.hoods,.quotes,.facts,.form-grid,.search{grid-template-columns:minmax(0,1fr)}\n .facts > div{border-left:0;border-top:1px solid rgba(255,255,255,.25);padding:20px 0}\n .facts > div:first-child{border-top:0}\n}";

function renderVals(props, state, setState) {
    const LISTINGS = [
      { status: 'For sale', price: '$[Price]', address: '[214 Palmetto Lane]', area: '[Neighborhood one]', beds: 3, baths: 2, sqft: '1,840', img: asset('/images/shingle-porch.jpg'), pos: '50% 55%', alt: 'Shingled cottage with a wraparound porch' },
      { status: 'For sale', price: '$[Price]', address: '[88 Harbor View Dr]', area: '[Neighborhood two]', beds: 4, baths: 3, sqft: '2,610', img: asset('/images/villa-wood-pool.jpg'), pos: '50% 50%', alt: 'Modern two-story home with a pool and lawn' },
      { status: 'Pending', price: '$[Price]', address: '[1503 Oak Street]', area: '[Neighborhood one]', beds: 3, baths: 2, sqft: '1,960', img: asset('/images/two-story-white.jpg'), pos: '50% 55%', alt: 'Two-story white house with a double garage' },
      { status: 'For sale', price: '$[Price]', address: '[47 Gulf Breeze Ct]', area: '[Neighborhood three]', beds: 3, baths: 2.5, sqft: '2,050', img: asset('/images/townhouses.jpg'), pos: '50% 60%', alt: 'Three-story townhouse with wood cladding' },
      { status: 'Sold', price: '$[Price]', address: '[920 Mangrove Way]', area: '[Neighborhood two]', beds: 5, baths: 4, sqft: '3,400', img: asset('/images/symmetric-villa.jpg'), pos: '50% 45%', alt: 'Symmetrical modern villa behind a pool' },
      { status: 'Sold', price: '$[Price]', address: '[3 Sandpiper Row]', area: '[Neighborhood three]', beds: 2, baths: 2, sqft: '1,280', img: asset('/images/white-minimal.jpg'), pos: '50% 50%', alt: 'Minimal white stucco house with a lawn' },
    ];
    const STEPS = {
      buy: [
        { title: 'Talk it through', text: 'A quick call about what you want, where, and your budget. I\'ll connect you with a lender if you need one.' },
        { title: 'Tour homes', text: 'I send listings the day they hit, and we see the good ones together, in person or on video.' },
        { title: 'Make a strong offer', text: 'We look at the comps together, so you know the right price before you sign anything.' },
        { title: 'Close with confidence', text: 'Inspection, appraisal, paperwork: I keep everyone on schedule until the keys are yours.' },
      ],
      sell: [
        { title: 'Price it right', text: 'A walkthrough and a pricing plan built on what\'s actually selling near you.' },
        { title: 'Get it ready', text: 'Simple fixes that pay off, plus my list of trusted cleaners, stagers and handymen.' },
        { title: 'Market it well', text: 'Professional photos, the MLS, social media and open houses that bring in real buyers.' },
        { title: 'Negotiate to close', text: 'I compare every offer with you and handle the back-and-forth through closing day.' },
      ],
    };
    const { filter, tab, intent } = state;
    const count = (s) => LISTINGS.filter((l) => s === 'all' || l.status === s).length;
    const stCls = { 'For sale': 'status', Pending: 'status st-pending', Sold: 'status st-sold' };
    return {
      ink: props.ink ?? '#22383F',
      search: (e) => e.preventDefault(),
      filters: [['all', 'All'], ['For sale', 'For sale'], ['Pending', 'Pending'], ['Sold', 'Sold']].map(([v, label]) => ({
        label, count: count(v), on: filter === v, cls: 'pill' + (filter === v ? ' on' : ''),
        pick: () => setState({ filter: v }),
      })),
      shown: LISTINGS.filter((l) => filter === 'all' || l.status === filter).map((l) => ({ ...l, stCls: stCls[l.status] })),
      tabs: [['buy', 'Buying'], ['sell', 'Selling']].map(([v, label]) => ({
        label, on: tab === v, cls: 'tab' + (tab === v ? ' on' : ''), pick: () => setState({ tab: v }),
      })),
      steps: STEPS[tab].map((s, i) => ({ ...s, n: '0' + (i + 1) })),
      hoods: [
        { name: '[Neighborhood one]', text: '[What it\'s like to live here: walkability, schools, the coffee shop everyone goes to.]', img: asset('/images/aerial-terracotta.jpg'), alt: 'Aerial view of terracotta roofs and pools' },
        { name: '[Neighborhood two]', text: '[Who it suits: young families, retirees, people who want to be on the water.]', img: asset('/images/aerial-green.jpg'), alt: 'Aerial view of homes with green lawns' },
        { name: '[Neighborhood three]', text: '[Typical homes and price range, in a sentence.]', img: asset('/images/aerial-grid.jpg'), alt: 'Aerial view of a gridded neighborhood street' },
        { name: '[Neighborhood four]', text: '[One thing locals love that visitors don\'t know about.]', img: asset('/images/dusk-stone.jpg'), alt: 'Stone and glass home lit up at dusk' },
      ],
      intents: ['Buy', 'Sell', 'Buy and sell', 'Just curious'].map((v) => ({
        label: v, on: intent === v, cls: 'pill' + (intent === v ? ' on' : ''), pick: () => setState({ intent: v }),
      })),
      selling: intent === 'Sell' || intent === 'Buy and sell',
      notSent: !state.sent, sent: state.sent,
      submit: (e) => { e.preventDefault(); setState({ sent: true }); },
      reset: () => setState({ sent: false }),
    };
  }

export default function Home() {
  const props = useTheme({"ink": "#22383F"});
  const [state, setRaw] = useState({ filter: 'all', tab: 'buy', intent: 'Buy', sent: false });
  const setState = (patch) => setRaw((s) => ({ ...s, ...patch }));
  const v = renderVals(props, state, setState);
  useEffect(() => { document.title = "Jordan Hale, Realtor \u2014 home"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div className="re" style={{"--ink": v.ink}}>


<header style={{background: "#F7F5EC", borderBottom: "1px solid rgba(34,56,63,.12)"}}>
<div className="wrap nav" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "84px"}}>
<a href="#top" style={{display: "flex", flexDirection: "column", gap: "2px", textDecoration: "none", padding: "6px 0"}}>
<span className="serif" style={{fontSize: "26px", fontWeight: "600"}}>Jordan Hale</span>
<span style={{fontSize: "11px", fontWeight: "700", letterSpacing: ".2em", textTransform: "uppercase", color: "#395C6B"}}>Realtor® · [Brokerage name]</span>
</a>
<nav className="nav-links" aria-label="Main" style={{display: "flex", gap: "30px", alignItems: "center"}}>
<a href="#listings">Listings</a>
<a href="#process">Buy &amp; sell</a>
<a href="#about">About</a>
<a href="#neighborhoods">Neighborhoods</a>
</nav>
<a className="btn btn-slate" href="#contact" style={{minHeight: "46px", fontSize: "15px"}}>Let's talk</a>
</div>
</header>




<main id="top">

<section className="blueprint" style={{color: "#E6E1C5", padding: "clamp(56px,7vw,96px) 0 clamp(48px,6vw,80px)"}}>
<div className="wrap hero">
<div style={{display: "flex", flexDirection: "column", gap: "26px"}}>
<div className="agent">
<img src={asset('/images/headshot.jpg')} alt="Jordan Hale" />
<div style={{display: "flex", flexDirection: "column", gap: "4px"}}>
<span className="serif" style={{fontSize: "22px", color: "#F7F5EC"}}>Jordan Hale</span>
<span className="eyebrow" style={{color: "#80A4ED"}}>Real estate in [Your City] &amp; [County]</span>
</div>
</div>
<h1 className="serif" style={{fontSize: "clamp(48px,6vw,88px)", color: "#F7F5EC"}}>Every home starts as a floor plan. <em style={{color: "#D4CB92", fontWeight: "400"}}>Yours starts here.</em></h1>
<p style={{margin: "0", fontSize: "20px", lineHeight: "1.6", maxWidth: "32rem", color: "#BCD3F2"}}>Buying your first place, upsizing, or selling the one you raised your family in. Walk through the plan, or come straight in the front door.</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "14px"}}>
<a className="btn" href="#listings" style={{background: "#D4CB92", borderColor: "#D4CB92", color: "#22383F"}}>See the listings</a>
<a className="btn" href="#contact" style={{background: "transparent", borderColor: "#BCD3F2", color: "#F7F5EC"}}>Let's talk</a>
</div>
</div>

<div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
<nav className="plan" aria-label="Floor plan of this site">
<svg className="fp" viewBox="-24 -44 768 590" role="presentation">

<g className="dimline"><path d="M0 -24H700M0 -32v16M700 -32v16"></path><text x="350" y="-30" textAnchor="middle">70'-0"</text>
<path d="M724 110V480M716 110h16M716 480h16"></path><text x="736" y="300" transform="rotate(90 736 300)" textAnchor="middle">37'-0"</text></g>


<a href="#neighborhoods" className="rm porch"><rect x="350" y="30" width="210" height="90"></rect>
<text className="rn" x="455" y="66" textAnchor="middle">Back porch</text><text className="rd" x="455" y="84" textAnchor="middle">21'-0" × 9'-0"</text><text className="rg" x="455" y="104" textAnchor="middle">Neighborhoods →</text></a>
<a href="#contact" className="rm porch"><rect x="350" y="450" width="210" height="62"></rect>
<text className="rn" x="420" y="478" textAnchor="middle">Front porch</text><text className="rg" x="420" y="498" textAnchor="middle">Come on in →</text></a>


<a href="#reviews" className="rm"><rect x="200" y="30" width="150" height="170"></rect>
<text className="rn" x="275" y="104" textAnchor="middle">Primary</text><text className="rn" x="275" y="126" textAnchor="middle">bedroom</text><text className="rd" x="275" y="144" textAnchor="middle">14'-0" × 16'-0"</text><text className="rg" x="275" y="168" textAnchor="middle">Rest easy: reviews →</text></a>
<a href="#process" className="rm"><rect x="350" y="120" width="90" height="210"></rect>
<text className="rn" x="420" y="206" textAnchor="middle" transform="rotate(-90 420 206)">Kitchen</text><text className="rg" x="395" y="314" textAnchor="middle">How it works →</text></a>
<a href="#listings" className="rm"><rect x="440" y="120" width="120" height="210"></rect>
<text className="rn big" x="500" y="208" textAnchor="middle">Living</text><text className="rd" x="500" y="228" textAnchor="middle">13'-2" × 15'-0"</text><text className="rg" x="500" y="252" textAnchor="middle">Homes for sale →</text></a>
<a href="#about" className="rm"><rect x="560" y="110" width="140" height="150"></rect>
<text className="rn" x="630" y="176" textAnchor="middle">Study</text><text className="rd" x="630" y="194" textAnchor="middle">11'-0" × 12'-0"</text><text className="rg" x="630" y="218" textAnchor="middle">About Jordan →</text></a>


<g className="lbl">
<text x="100" y="316" textAnchor="middle">Garage</text><text className="rd" x="100" y="334" textAnchor="middle">20'-6" × 20'-5"</text>
<text x="245" y="246" textAnchor="middle">Bath</text><text x="320" y="246" textAnchor="middle">WIC</text>
<text x="275" y="326" textAnchor="middle">Mud room</text>
<text x="415" y="390" textAnchor="middle">Dining</text><text className="rd" x="415" y="408" textAnchor="middle">12'-0" × 11'-6"</text>
<text x="630" y="300" textAnchor="middle">Bath</text>
<text x="630" y="406" textAnchor="middle">Bedroom</text><text className="rd" x="630" y="424" textAnchor="middle">11'-0" × 12'-0"</text>
</g>


<g className="fx">
<rect x="380" y="170" width="22" height="100" rx="2"></rect>
<path d="M352 128h0M356 125v180"></path>
<rect x="388" y="356" width="56" height="34" rx="4"></rect>
<path d="M500 330v40h60"></path><path d="M510 330v40M520 330v40M530 330v40M540 330v40M550 330v40"></path>
<rect x="30" y="232" width="62" height="118" rx="10"></rect>
<rect x="108" y="232" width="62" height="118" rx="10"></rect>
</g>


<g className="wall-in">
<path d="M200 200H262M300 200H350"></path>
<path d="M200 280H350M290 200V280"></path>
<path d="M350 120V150M350 190V360"></path>
<path d="M560 120V150M560 200V450"></path>
<path d="M560 260H610M650 260H700M560 330H600M640 330H700"></path>
<path d="M200 200V250M200 290V360"></path>
</g>


<path className="wall" d="M200 30H350V120H560V110H700V480H560V450H350V360H200V440H180V460H20V440H0V200H200Z"></path>

<g className="win">
<path d="M240 30h70M600 110h60M700 160v60M700 380v60M600 480h60M40 460h120M0 260v80M378 450h40"></path>
</g>


<g className="door">
<path d="M262 200a38 38 0 0 1 38 -38M262 200V162"></path>
<path d="M350 150a40 40 0 0 1 40 40M350 150h0"></path>
<path d="M490 450a40 40 0 0 1 40 -40M490 450V410"></path>
<path d="M200 250a40 40 0 0 1 40 40M200 250h0"></path>
<path d="M610 260a40 40 0 0 0 40 40"></path>
</g>
<text className="lvl" x="0" y="530">Main level</text>
</svg>
</nav>
<div className="titleblock">
<span><b>Sheet A-1</b> · Jordan Hale, Realtor®</span>
<span>[Brokerage name] · Lic. #[License number]</span>
<span className="compass" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 2l4 10-4-2-4 2z" fill="#D4CB92"></path><path d="M12 22l-4-10 4 2 4-2z" fill="none" stroke="#BCD3F2" strokeWidth="1.2"></path></svg>N</span>
</div>
</div>
</div>
</section>


<section style={{background: "#E6E1C5", padding: "28px 0"}}>
<div className="wrap">
<form className="search" onSubmit={v.search} aria-label="Search listings">
<label className="field">Area<select><option>Anywhere</option><option>[Neighborhood one]</option><option>[Neighborhood two]</option><option>[Neighborhood three]</option></select></label>
<label className="field">Beds<select><option>Any</option><option>2+</option><option>3+</option><option>4+</option></select></label>
<label className="field">Price<select><option>Any</option><option>Under $[400k]</option><option>$[400k] – $[700k]</option><option>$[700k]+</option></select></label>
<a className="btn btn-slate" href="#listings">Search homes</a>
</form>
</div>
</section>


<section style={{background: "#395C6B", color: "#fff"}}>
<div className="wrap facts">
<div><span className="serif" style={{fontSize: "40px", display: "block"}}>[XX]</span><span style={{fontSize: "15px", color: "#BCD3F2"}}>homes sold in [year]</span></div>
<div><span className="serif" style={{fontSize: "40px", display: "block"}}>[X] years</span><span style={{fontSize: "15px", color: "#BCD3F2"}}>selling in [Your City]</span></div>
<div><span className="serif" style={{fontSize: "40px", display: "block"}}>[X.X] / 5</span><span style={{fontSize: "15px", color: "#BCD3F2"}}>from [XX] client reviews on [Zillow / Google]</span></div>
</div>
</section>


<section id="listings" style={{padding: "clamp(72px,8vw,120px) 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "36px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<p className="eyebrow">Listings</p>
<h2 className="serif" style={{fontSize: "clamp(38px,4.4vw,60px)"}}>Homes I'm representing.</h2>
</div>
<div className="pills" role="group" aria-label="Filter listings">
{v.filters.map((f, $index) => (<Fragment key={$index}><button type="button" className={f.cls} aria-pressed={f.on} onClick={f.pick}>{f.label} <span style={{opacity: ".7"}}>{f.count}</span></button></Fragment>))}
</div>
</div>
<div className="cards">
{v.shown.map((l, $index) => (<Fragment key={$index}><Link to="/listing" className="card">
<div style={{position: "relative"}}>
<img src={l.img} alt={l.alt} style={{width: "100%", height: "240px", objectFit: "cover", objectPosition: l.pos, display: "block"}} />
<span className={l.stCls}>{l.status}</span>
</div>
<div style={{padding: "22px", display: "flex", flexDirection: "column", gap: "8px"}}>
<span className="serif" style={{fontSize: "28px"}}>{l.price}</span>
<span style={{fontWeight: "600", fontSize: "16px"}}>{l.address}</span>
<span style={{fontSize: "14px", color: "#395C6B"}}>{l.area}</span>
<div className="specs" style={{paddingTop: "10px", borderTop: "1px solid rgba(34,56,63,.12)", marginTop: "6px"}}><span>{l.beds} bd</span><span>{l.baths} ba</span><span>{l.sqft} sq ft</span></div>
</div>
</Link></Fragment>))}
</div>
<p style={{margin: "0", fontSize: "15px", color: "#395C6B"}}>Looking for something that isn't here? I can set you up with a search that emails you new listings the day they hit the market. <a href="#contact" style={{fontWeight: "700", padding: "8px 0"}}>Ask me →</a></p>
</div>
</section>


<section id="process" style={{background: "#fff", padding: "clamp(72px,8vw,120px) 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<p className="eyebrow">How it works</p>
<h2 className="serif" style={{fontSize: "clamp(38px,4.4vw,60px)"}}>No surprises, start to keys.</h2>
</div>
<div className="tabs" role="group" aria-label="Buying or selling">
{v.tabs.map((t, $index) => (<Fragment key={$index}><button type="button" className={t.cls} aria-pressed={t.on} onClick={t.pick}>{t.label}</button></Fragment>))}
</div>
</div>
<div className="steps">
{v.steps.map((s, $index) => (<Fragment key={$index}><div className="step">
<span className="serif" style={{fontSize: "18px", color: "#395C6B"}}>{s.n}</span>
<span className="serif" style={{fontSize: "26px"}}>{s.title}</span>
<span style={{fontSize: "16px", lineHeight: "1.6"}}>{s.text}</span>
</div></Fragment>))}
</div>
</div>
</section>


<section id="about" style={{padding: "clamp(72px,8vw,120px) 0"}}>
<div className="wrap about">
<img src={asset('/images/headshot.jpg')} alt="Jordan Hale, Realtor" style={{width: "100%", height: "560px", objectFit: "cover", objectPosition: "50% 25%", borderRadius: "6px", display: "block"}} />
<div style={{display: "flex", flexDirection: "column", gap: "22px"}}>
<p className="eyebrow">About Jordan</p>
<h2 className="serif" style={{fontSize: "clamp(38px,4.4vw,60px)"}}>[A line about who you are and why you do this.]</h2>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.7"}}>[Two or three short paragraphs in your own words: how long you've lived here, how you got into real estate, what kind of clients you love working with.]</p>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.7"}}>[What you do differently: how you price, how you market a home, how you keep buyers from overpaying.]</p>
<ul style={{margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "16px", fontWeight: "600"}}>
<li style={{display: "flex", gap: "12px", alignItems: "center"}}><span style={{width: "8px", height: "8px", background: "#80A4ED", borderRadius: "50%"}}></span>[Designations, e.g. ABR®, SRS]</li>
<li style={{display: "flex", gap: "12px", alignItems: "center"}}><span style={{width: "8px", height: "8px", background: "#80A4ED", borderRadius: "50%"}}></span>[Board or MLS membership]</li>
<li style={{display: "flex", gap: "12px", alignItems: "center"}}><span style={{width: "8px", height: "8px", background: "#80A4ED", borderRadius: "50%"}}></span>[Languages spoken]</li>
</ul>
<div style={{display: "flex", flexWrap: "wrap", gap: "14px", paddingTop: "6px"}}>
<a className="btn btn-slate" href="#contact">Set up a call</a>
<a className="btn btn-line" href="tel:+15555550123">[(555) 555-0123]</a>
</div>
</div>
</div>
</section>


<section id="neighborhoods" style={{background: "#BCD3F2", padding: "clamp(72px,8vw,120px) 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<p className="eyebrow">Neighborhoods</p>
<h2 className="serif" style={{fontSize: "clamp(38px,4.4vw,60px)"}}>Where I know every street.</h2>
</div>
<div className="hoods">
{v.hoods.map((h, $index) => (<Fragment key={$index}><article style={{background: "#F7F5EC", borderRadius: "6px", overflow: "hidden", display: "flex", flexDirection: "column"}}>
<img src={h.img} alt={h.alt} style={{width: "100%", height: "180px", objectFit: "cover", display: "block"}} />
<div style={{padding: "20px", display: "flex", flexDirection: "column", gap: "8px"}}>
<span className="serif" style={{fontSize: "24px"}}>{h.name}</span>
<span style={{fontSize: "15px", lineHeight: "1.6"}}>{h.text}</span>
</div>
</article></Fragment>))}
</div>
</div>
</section>


<section id="reviews" style={{padding: "clamp(72px,8vw,120px) 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<p className="eyebrow">Client reviews</p>
<h2 className="serif" style={{fontSize: "clamp(38px,4.4vw,60px)"}}>In their words.</h2>
</div>
<div className="quotes">
<figure style={{margin: "0", background: "#E6E1C5", borderRadius: "6px", padding: "36px", display: "flex", flexDirection: "column", gap: "20px"}}>
<svg viewBox="0 0 40 30" width="40" height="30" aria-hidden="true"><path d="M0 30V17C0 7 6 1 16 0v6c-5 1-8 5-8 10h8v14zM24 30V17c0-10 6-16 16-17v6c-5 1-8 5-8 10h8v14z" fill="#395C6B"></path></svg>
<blockquote className="serif" style={{margin: "0", fontSize: "24px", lineHeight: "1.35", fontWeight: "400"}}>[Paste a real client review here, word for word, with their permission.]</blockquote>
<figcaption style={{fontWeight: "600", fontSize: "15px"}}>[Client name] · bought in [Neighborhood]</figcaption>
</figure>
<figure style={{margin: "0", background: "#E6E1C5", borderRadius: "6px", padding: "36px", display: "flex", flexDirection: "column", gap: "20px"}}>
<svg viewBox="0 0 40 30" width="40" height="30" aria-hidden="true"><path d="M0 30V17C0 7 6 1 16 0v6c-5 1-8 5-8 10h8v14zM24 30V17c0-10 6-16 16-17v6c-5 1-8 5-8 10h8v14z" fill="#395C6B"></path></svg>
<blockquote className="serif" style={{margin: "0", fontSize: "24px", lineHeight: "1.35", fontWeight: "400"}}>[Paste a second real review here, ideally from a seller.]</blockquote>
<figcaption style={{fontWeight: "600", fontSize: "15px"}}>[Client name] · sold in [Neighborhood]</figcaption>
</figure>
</div>
<a href="#" style={{fontWeight: "700", fontSize: "15px", padding: "8px 0", alignSelf: "flex-start"}}>Read all reviews on [Zillow / Google] ↗</a>
</div>
</section>


<section id="contact" style={{background: "#395C6B", color: "#fff", padding: "clamp(72px,8vw,120px) 0"}}>
<div className="wrap split">
<div style={{display: "flex", flexDirection: "column", gap: "22px"}}>
<p className="eyebrow" style={{color: "#BCD3F2"}}>Let's talk</p>
<h2 className="serif" style={{fontSize: "clamp(38px,4.4vw,60px)"}}>Thinking about a move? Start here.</h2>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#E6E1C5"}}>No pressure and no obligation. Tell me a little about what you're planning and I'll get back to you within [one business day].</p>
<div style={{display: "flex", flexDirection: "column", gap: "8px", fontSize: "17px", paddingTop: "8px"}}>
<a href="tel:+15555550123" style={{fontWeight: "600", padding: "6px 0"}}>[(555) 555-0123]</a>
<a href="mailto:jordan@example.com" style={{fontWeight: "600", padding: "6px 0"}}>[jordan@yourdomain.com]</a>
<span style={{color: "#BCD3F2"}}>[Brokerage name] · [Office address]</span>
</div>
<img src={asset('/images/key-model-house.jpg')} alt="A key on a house-shaped keyring beside a small model house" style={{width: "100%", maxWidth: "440px", height: "260px", objectFit: "cover", borderRadius: "6px", marginTop: "12px", display: "block"}} />
</div>

<div style={{background: "#F7F5EC", color: "var(--ink)", borderRadius: "6px", padding: "clamp(24px,3vw,40px)"}}>
{v.notSent && (<><form onSubmit={v.submit} className="form-grid">
<div className="full" style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<span style={{fontWeight: "600", fontSize: "13px"}}>I'm looking to</span>
<div className="pills" role="group" aria-label="I'm looking to">
{v.intents.map((i, $index) => (<Fragment key={$index}><button type="button" className={i.cls} aria-pressed={i.on} onClick={i.pick}>{i.label}</button></Fragment>))}
</div>
</div>
<label className="field">Name<input type="text" autoComplete="name" required="" /></label>
<label className="field">Email<input type="email" autoComplete="email" required="" /></label>
<label className="field">Phone<input type="tel" autoComplete="tel" /></label>
<label className="field">Timeline<select><option>As soon as possible</option><option>In the next 3 months</option><option>3 to 6 months</option><option>Just exploring</option></select></label>
{v.selling && (<><label className="field full">Address of the home you're selling<input type="text" autoComplete="street-address" placeholder="Street, city" /></label></>)}
<label className="field full">Anything else I should know?<textarea rows="4" placeholder="Neighborhoods, must-haves, questions"></textarea></label>
<div className="full" style={{display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between"}}>
<button type="submit" className="btn btn-slate">Send</button>
<span style={{fontSize: "13px", color: "#395C6B"}}>I'll never share your information.</span>
</div>
</form></>)}
{v.sent && (<><div style={{display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", padding: "24px 0"}}>
<span className="serif" style={{fontSize: "40px"}}>Thank you.</span>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.6"}}>I'll be in touch within [one business day]. If it's urgent, call or text me at [(555) 555-0123].</p>
<button type="button" onClick={v.reset} className="btn btn-line">Send another</button>
</div></>)}
</div>
</div>
</section>
</main><footer style={{background: "#22383F", color: "#E6E1C5", padding: "56px 0 36px"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
<span className="serif" style={{fontSize: "30px", color: "#fff"}}>Jordan Hale</span>
<span style={{fontSize: "14px"}}>Realtor® · [Brokerage name] · [Office address]</span>
<span style={{fontSize: "14px"}}>License #[License number]</span>
</div>
<nav aria-label="Footer" style={{display: "flex", flexWrap: "wrap", gap: "4px 28px", alignContent: "flex-start"}}>
<a href="#listings" style={{padding: "10px 0", fontWeight: "600"}}>Listings</a>
<a href="#process" style={{padding: "10px 0", fontWeight: "600"}}>Buy &amp; sell</a>
<a href="#about" style={{padding: "10px 0", fontWeight: "600"}}>About</a>
<a href="#contact" style={{padding: "10px 0", fontWeight: "600"}}>Contact</a>
</nav>
</div>
<div style={{borderTop: "1px solid rgba(230,225,197,.2)", paddingTop: "20px", fontSize: "13px", color: "rgba(230,225,197,.75)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px"}}>
<span>Equal Housing Opportunity. Information deemed reliable but not guaranteed.</span>
<span>© [Year] Jordan Hale · Site by Whelk Works</span>
</div>
</div>
</footer>
</div>
    </>
  );
}
