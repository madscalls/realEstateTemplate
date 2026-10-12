// Generated from the Nightbloom design mockup (Listing.dc.html), then hand-editable.
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';

const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`;

const PAGE_CSS = "body{margin:0}\na{color:inherit}a:hover{color:#395C6B}\n.re *{box-sizing:border-box}\n.re{font-family:'Hanken Grotesk',system-ui,sans-serif;color:var(--ink);background:#F7F5EC;overflow-x:clip}\n.wrap{max-width:1240px;margin:0 auto;padding:0 32px}\n.serif{font-family:'Fraunces',Georgia,serif;font-weight:500;letter-spacing:-.015em;line-height:1.05;margin:0}\n.eyebrow{font-weight:700;font-size:12px;letter-spacing:.18em;text-transform:uppercase;margin:0;color:#395C6B}\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 26px;border-radius:4px;font:600 16px 'Hanken Grotesk',sans-serif;text-decoration:none;border:1.5px solid #395C6B;cursor:pointer;transition:background .2s,color .2s}\n.btn-slate{background:#395C6B;color:#fff}\n.btn-slate:hover{background:#22383F;border-color:#22383F;color:#fff}\n.btn-line{background:transparent;color:#395C6B}\n.btn-line:hover{background:#395C6B;color:#fff}\n.nav a{font-weight:600;font-size:15px;text-decoration:none;padding:12px 2px}\n.nav a:hover{color:#395C6B;text-decoration:underline;text-underline-offset:6px}\n.ph{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#BCD3F2;color:#22383F;font-size:13px;font-weight:600;letter-spacing:.04em}\n.ph svg{width:40px;height:40px}\n.ph.sage{background:#D4CB92}.ph.sand{background:#E6E1C5}.ph.wis{background:#80A4ED}\n.gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:240px 240px;gap:10px;border-radius:6px;overflow:hidden}\n.gallery .big{grid-row:1/3}\n.facts{display:flex;flex-wrap:wrap;gap:0}\n.facts > div{display:flex;flex-direction:column;gap:2px;padding:0 28px;border-left:1px solid rgba(34,56,63,.18)}\n.facts > div:first-child{padding-left:0;border-left:0}\n.layout{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:56px;align-items:start}\n.feat{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}\n.feat ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px;font-size:15px;line-height:1.5}\n.slot{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n.day{min-height:64px;border-radius:4px;border:1.5px solid rgba(34,56,63,.25);background:#fff;color:var(--ink);font:600 14px 'Hanken Grotesk',sans-serif;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}\n.day small{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#395C6B}\n.day:hover{border-color:#395C6B}\n.day.on{background:#395C6B;border-color:#395C6B;color:#fff}\n.day.on small{color:#BCD3F2}\n.time{min-height:44px;border-radius:4px;border:1.5px solid rgba(34,56,63,.25);background:#fff;color:var(--ink);font:600 14px 'Hanken Grotesk',sans-serif;cursor:pointer}\n.time:hover{border-color:#395C6B}\n.time.on{background:#395C6B;border-color:#395C6B;color:#fff}\n.seg{display:grid;grid-template-columns:1fr 1fr;background:#E6E1C5;border-radius:999px;padding:4px}\n.seg button{min-height:42px;border:0;border-radius:999px;background:transparent;font:700 14px 'Hanken Grotesk',sans-serif;color:var(--ink);cursor:pointer}\n.seg button.on{background:#395C6B;color:#fff}\n.field{display:flex;flex-direction:column;gap:7px;font-weight:600;font-size:13px}\n.field input{font:500 16px 'Hanken Grotesk',sans-serif;color:var(--ink);background:#fff;border:1.5px solid rgba(34,56,63,.3);border-radius:4px;padding:12px 14px;min-height:50px;width:100%}\n.field input:focus{outline:3px solid #80A4ED;outline-offset:1px;border-color:#395C6B}\n@media (max-width:1000px){\n .layout{grid-template-columns:minmax(0,1fr)}\n .nav-links{display:none}\n}\n@media (max-width:700px){\n .wrap{padding:0 20px}\n .gallery{grid-template-columns:1fr 1fr;grid-template-rows:260px 140px 140px}\n .gallery .big{grid-row:auto;grid-column:1/-1}\n .feat{grid-template-columns:minmax(0,1fr)}\n .facts{gap:16px 0}\n .facts > div{padding:0 18px}\n}";

function renderVals(props, state, setState) {
    const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const TIMES = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];
    const start = new Date(); start.setHours(0, 0, 0, 0); start.setDate(start.getDate() + 1);
    const dates = Array.from({ length: 6 }, (_, i) => { const d = new Date(start); d.setDate(d.getDate() + i); return d; });
    const { day, time, mode } = state;
    const sel = dates[day];
    const modeLabel = mode === 'person' ? 'In-person tour' : 'Video tour';
    return {
      ink: props.ink ?? '#22383F',
      modes: [['person', 'In person'], ['video', 'Video tour']].map(([v, label]) => ({
        label, on: mode === v, cls: mode === v ? 'on' : '', pick: () => setState({ mode: v }),
      })),
      days: dates.map((d, i) => ({
        dow: i === 0 ? 'Tmrw' : DOW[d.getDay()], label: MON[d.getMonth()] + ' ' + d.getDate(),
        on: day === i, cls: 'day' + (day === i ? ' on' : ''), pick: () => setState({ day: i }),
      })),
      times: TIMES.map((t, i) => ({ label: t, on: time === i, cls: 'time' + (time === i ? ' on' : ''), pick: () => setState({ time: i }) })),
      whenShort: DOW[sel.getDay()] + ', ' + TIMES[time],
      whenLong: modeLabel + ' requested for ' + DAYS[sel.getDay()] + ', ' + MON[sel.getMonth()] + ' ' + sel.getDate() + ' at ' + TIMES[time],
      notSent: !state.sent, sent: state.sent,
      submit: (e) => { e.preventDefault(); setState({ sent: true }); },
      reset: () => setState({ sent: false }),
    };
  }

export default function Listing() {
  const props = useTheme({"ink": "#22383F"});
  const [state, setRaw] = useState({ day: 0, time: 1, mode: 'person', sent: false });
  const setState = (patch) => setRaw((s) => ({ ...s, ...patch }));
  const v = renderVals(props, state, setState);
  useEffect(() => { document.title = "Jordan Hale, Realtor \u2014 listing"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div className="re" style={{"--ink": v.ink}}>

<header style={{background: "#F7F5EC", borderBottom: "1px solid rgba(34,56,63,.12)"}}>
<div className="wrap nav" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "84px"}}>
<Link to="/" style={{display: "flex", flexDirection: "column", gap: "2px", textDecoration: "none", padding: "6px 0"}}>
<span className="serif" style={{fontSize: "26px", fontWeight: "600"}}>Jordan Hale</span>
<span style={{fontSize: "11px", fontWeight: "700", letterSpacing: ".2em", textTransform: "uppercase", color: "#395C6B"}}>Realtor® · [Brokerage name]</span>
</Link>
<nav className="nav-links" aria-label="Main" style={{display: "flex", gap: "30px", alignItems: "center"}}>
<Link to="/#listings">Listings</Link>
<Link to="/#process">Buy &amp; sell</Link>
<Link to="/#about">About</Link>
<Link to="/#neighborhoods">Neighborhoods</Link>
</nav>
<a className="btn btn-slate" href="#showing" style={{minHeight: "46px", fontSize: "15px"}}>Book a showing</a>
</div>
</header>

<main>
<div className="wrap" style={{paddingTop: "28px", paddingBottom: "clamp(72px,8vw,112px)", display: "flex", flexDirection: "column", gap: "32px"}}>
<Link to="/#listings" style={{fontWeight: "600", fontSize: "15px", padding: "8px 0", alignSelf: "flex-start"}}>← All listings</Link>

<div className="gallery" aria-label="Photos">
<img className="big" src={asset('/images/shingle-porch.jpg')} alt="Front of the home: shingled cottage with a wraparound porch" style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
<img src={asset('/images/living-room.jpg')} alt="Living room with a white sofa and tall windows" style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
<img src={asset('/images/kitchen.jpg')} alt="Kitchen with a dark island and marble counters" style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
<img src={asset('/images/bedroom.jpg')} alt="Primary bedroom with hardwood floors" style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
<div style={{position: "relative"}}><img src={asset('/images/backyard.jpg')} alt="Backyard pool with lounge chairs" style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} /><button type="button" className="btn btn-slate" style={{position: "absolute", right: "14px", bottom: "14px", minHeight: "44px", fontSize: "14px", padding: "0 16px"}}>See all [24] photos</button></div>
</div>

<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
<span style={{alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", background: "#BCD3F2"}}>For sale</span>
<h1 className="serif" style={{fontSize: "clamp(40px,4.8vw,64px)"}}>[214 Palmetto Lane]</h1>
<span style={{fontSize: "18px", color: "#395C6B"}}>[Neighborhood one], [Your City], [State] [ZIP]</span>
</div>
<span className="serif" style={{fontSize: "clamp(36px,4vw,52px)"}}>$[Price]</span>
</div>

<div className="facts" style={{padding: "22px 0", borderTop: "1px solid rgba(34,56,63,.15)", borderBottom: "1px solid rgba(34,56,63,.15)"}}>
<div><span className="serif" style={{fontSize: "28px"}}>3</span><span style={{fontSize: "14px", color: "#395C6B"}}>Bedrooms</span></div>
<div><span className="serif" style={{fontSize: "28px"}}>2</span><span style={{fontSize: "14px", color: "#395C6B"}}>Bathrooms</span></div>
<div><span className="serif" style={{fontSize: "28px"}}>1,840</span><span style={{fontSize: "14px", color: "#395C6B"}}>Square feet</span></div>
<div><span className="serif" style={{fontSize: "28px"}}>[0.22]</span><span style={{fontSize: "14px", color: "#395C6B"}}>Acre lot</span></div>
<div><span className="serif" style={{fontSize: "28px"}}>[1998]</span><span style={{fontSize: "14px", color: "#395C6B"}}>Year built</span></div>
</div>

<div className="layout">
<div style={{display: "flex", flexDirection: "column", gap: "44px"}}>
<section style={{display: "flex", flexDirection: "column", gap: "16px"}}>
<h2 className="serif" style={{fontSize: "32px"}}>About this home</h2>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.75"}}>[The listing description: what you notice when you walk in, the best room in the house, recent updates, and what the street and neighborhood are like. Three or four short paragraphs work best.]</p>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.75"}}>[A second paragraph about updates, the yard, storage, or anything a buyer will ask about first.]</p>
</section>

<section style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<h2 className="serif" style={{fontSize: "32px"}}>Features</h2>
<div className="feat">
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}><span className="eyebrow">Inside</span><ul><li>[Open kitchen with island]</li><li>[Hardwood floors]</li><li>[Primary suite with walk-in closet]</li><li>[Laundry room]</li></ul></div>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}><span className="eyebrow">Outside</span><ul><li>[Screened lanai]</li><li>[Fenced backyard]</li><li>[2-car garage]</li><li>[New roof, year]</li></ul></div>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}><span className="eyebrow">Details</span><ul><li>HOA: [$/month or none]</li><li>Taxes: [$/year]</li><li>Flood zone: [Zone]</li><li>MLS #[Number]</li></ul></div>
</div>
</section>

<section style={{display: "flex", flexDirection: "column", gap: "16px"}}>
<h2 className="serif" style={{fontSize: "32px"}}>Location</h2>
<div className="ph sand" role="img" aria-label="Map placeholder" style={{height: "320px", borderRadius: "6px"}}><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M24 44s14-12 14-24a14 14 0 0 0-28 0c0 12 14 24 14 24z"></path><circle cx="24" cy="20" r="5"></circle></svg><span>Map</span></div>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.6"}}>[Distances that matter: minutes to the beach, downtown, schools, the highway.]</p>
</section>
</div>


<aside id="showing" style={{background: "#fff", border: "1px solid rgba(34,56,63,.14)", borderRadius: "6px", padding: "28px", display: "flex", flexDirection: "column", gap: "20px"}}>
<div style={{display: "flex", gap: "14px", alignItems: "center"}}>
<img src={asset('/images/headshot.jpg')} alt="Jordan Hale" style={{width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 20%", flexShrink: "0"}} />
<div style={{display: "flex", flexDirection: "column", gap: "2px"}}>
<span className="serif" style={{fontSize: "22px"}}>Book a showing</span>
<span style={{fontSize: "14px", color: "#395C6B"}}>with Jordan Hale · [(555) 555-0123]</span>
</div>
</div>

{v.notSent && (<><form onSubmit={v.submit} style={{display: "flex", flexDirection: "column", gap: "18px"}}>
<div className="seg" role="group" aria-label="Tour type">
{v.modes.map((m, $index) => (<Fragment key={$index}><button type="button" className={m.cls} aria-pressed={m.on} onClick={m.pick}>{m.label}</button></Fragment>))}
</div>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
<span style={{fontWeight: "600", fontSize: "13px"}}>Pick a day</span>
<div className="slot" role="group" aria-label="Day">
{v.days.map((d, $index) => (<Fragment key={$index}><button type="button" className={d.cls} aria-pressed={d.on} onClick={d.pick}><small>{d.dow}</small>{d.label}</button></Fragment>))}
</div>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
<span style={{fontWeight: "600", fontSize: "13px"}}>Pick a time</span>
<div className="slot" role="group" aria-label="Time">
{v.times.map((t, $index) => (<Fragment key={$index}><button type="button" className={t.cls} aria-pressed={t.on} onClick={t.pick}>{t.label}</button></Fragment>))}
</div>
</div>
<label className="field">Name<input type="text" autoComplete="name" required /></label>
<label className="field">Email<input type="email" autoComplete="email" required /></label>
<label className="field">Phone<input type="tel" autoComplete="tel" /></label>
<button type="submit" className="btn btn-slate">Request {v.whenShort}</button>
<span style={{fontSize: "13px", lineHeight: "1.5", color: "#395C6B"}}>I'll confirm by text or email. Working with another agent? Let them know, and they can book it for you.</span>
</form></>)}
{v.sent && (<><div style={{display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start", padding: "8px 0"}}>
<span className="serif" style={{fontSize: "32px"}}>You're on the list.</span>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.6"}}>{v.whenLong}. I'll confirm the time with you shortly.</p>
<button type="button" onClick={v.reset} className="btn btn-line">Change the time</button>
</div></>)}
</aside>
</div>
</div>
</main>

<footer style={{background: "#22383F", color: "#E6E1C5", padding: "44px 0 32px"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", fontSize: "13px"}}>
<span>Jordan Hale, Realtor® · [Brokerage name] · License #[License number]</span>
<span style={{color: "rgba(230,225,197,.75)"}}>Equal Housing Opportunity. Information deemed reliable but not guaranteed. · Site by Whelk Works</span>
</div>
</footer>
</div>
    </>
  );
}
