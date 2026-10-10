/* =====================================================================
   APEX DESK CHECKLIST — CONTENT FILE
   ---------------------------------------------------------------------
   Edit this file to change what agents see. You do not need to touch
   index.html to add/remove a checklist item, a site, or a shift.

   Rules for editing:
   - Every item needs a unique "id" (short, no spaces). Never reuse an
     old id for a different item — saved shifts are keyed by id.
   - "ref" is optional. It links the item to a Training Hub page.
     Use paths relative to the hub root, e.g. "sop-library.html#packages".
   - Keep text short. Agents read this standing at the desk.
   - After editing, also bump VERSION in sw.js so phones pick it up.
   ===================================================================== */

window.APEX_DESK = {

  version: "1.0",

  sites: [
    "The Benjamin Seaport",
    "VIA Seaport",
    "Ora Seaport",
    "Avalon North Station",
    "AVA North Point"
  ],

  // start/end are 24-hour clock hours. Overnight shifts can end < start.
  shifts: [
    { key: "am",  label: "7 AM – 3 PM",  start: 7,  end: 15 },
    { key: "pm",  label: "3 PM – 11 PM", start: 15, end: 23 },
    { key: "ovn", label: "11 PM – 7 AM", start: 23, end: 7  }
  ],

  sections: [
    {
      key: "start",
      tab: "Open",
      title: "Start of Shift",
      blurb: "Before you take the desk. Know what you're walking into.",
      items: [
        { id: "s_clockin",  text: "Clock in on Connecteam",
          sub: "On time. Late? Tell your Lead now." },
        { id: "s_look",     text: "Uniform, name badge, desk presentation",
          sub: "Desk clear, phone and screen clean, you look ready." },
        { id: "s_passon",   text: "Read the last pass-on — all three sections",
          sub: "Concierge · Maintenance · Leasing. Ask the outgoing agent anything unclear.",
          ref: "sop-library.html#shift-log" },
        { id: "s_open",     text: "Pick up every open item from the pass-on",
          sub: "Follow-ups, pending maintenance, resident requests." },
        { id: "s_pkg",      text: "Package room matches the pass-on count",
          sub: "Off by more than a few? Note it in your first entry.",
          ref: "sop-library.html#packages" },
        { id: "s_fridge",   text: "Check the fridge",
          sub: "Every perishable: unit + time received. Add them to the Fridge Board.",
          ref: "sop-library.html#packages" },
        { id: "s_secure",   text: "High-value storage and staged RTS checked",
          sub: "High-value never on the general shelf." },
        { id: "s_systems",  text: "Desk systems up",
          sub: "Phone · computer · package system · email · Connecteam." },
        { id: "s_keys",     text: "Keys, fobs and access cards accounted for" },
        { id: "s_today",    text: "Review today's schedule",
          sub: "Guest list · vendor / PTE access · move-ins & move-outs · amenity bookings." },
        { id: "s_inbox",    text: "Check the inbox for property management notes" },
        { id: "s_first",    text: "First shift-log entry written",
          sub: "Time-stamped. Desk taken, building status, package count." ,
          ref: "shift-log-mastery.html" }
      ]
    },
    {
      key: "during",
      tab: "On Shift",
      title: "During Shift",
      blurb: "Track the minimums. Every-time standards are below.",
      items: [
        { id: "d_mid_pkg",    text: "Mid-shift package room check",
          sub: "Shelves organized, nothing sitting unlogged." },
        { id: "d_mid_fridge", text: "Mid-shift fridge check",
          sub: "Anything near its 24h / 48h window? Act on it now.",
          ref: "sop-library.html#packages" },
        { id: "d_mid_inbox",  text: "Mid-shift inbox and voicemail check" },
        { id: "d_maint",      text: "Every maintenance issue has a service request #",
          sub: "Logged with who you notified." }
      ]
    },
    {
      key: "end",
      tab: "Close",
      title: "End of Shift",
      blurb: "Leave the desk so the next agent never has to guess.",
      items: [
        { id: "e_count",    text: "Final package count taken",
          sub: "Enter it in the pass-on builder below." },
        { id: "e_fridge",   text: "Fridge reviewed",
          sub: "Food past 24h disposed and documented. Groceries at 48h escalated to Lead.",
          ref: "sop-library.html#packages" },
        { id: "e_rts",      text: "RTS staged for carrier pickup and listed" },
        { id: "e_incident", text: "Incident reports filed in Connecteam",
          sub: "For anything that happened this shift. When in doubt, file.",
          ref: "sop-library.html#incidents" },
        { id: "e_review",   text: "Log reviewed before sending",
          sub: "E.D.O. on every entry · third person · no gaps · no N/A if anything happened.",
          ref: "shift-log-mastery.html" },
        { id: "e_passon",   text: "Pass-on complete — all three sections",
          ref: "sop-library.html#shift-log" },
        { id: "e_send",     text: "Signed off and sent to the PASS ON LOG group",
          sub: "Subject: Site — Date — Shift — Name." },
        { id: "e_handoff",  text: "Verbal handoff to the incoming agent",
          sub: "Walk them through anything open." },
        { id: "e_clockout", text: "Clock out on Connecteam" }
      ]
    }
  ],

  // Shown on the On Shift tab. Reference only — not checkboxes.
  standards: [
    { title: "Every package",
      body: "Receive → Label → Log → Store → Notify. Log in the system <b>and</b> on the intake sheet before it moves.",
      ref: "sop-library.html#packages" },
    { title: "Every pickup",
      body: "System lookup every time — never a verbal check alone. Read the label against the record before handover. No photo ID needed.",
      ref: "sop-library.html#packages" },
    { title: "Food delivery",
      body: "Call the resident first. No answer: refrigerate. Dispose at 24 hrs from delivery, documented.",
      ref: "sop-library.html#packages" },
    { title: "Groceries",
      body: "Refrigerate, daily outreach. 48 hrs — escalate to your Lead before disposal.",
      ref: "sop-library.html#packages" },
    { title: "Noise complaint",
      body: "Document it. Call the on-call supervisor. Follow up within 15 minutes. Never knock on a door alone." },
    { title: "Incident",
      body: "E.D.O. in the log + Connecteam incident report before shift end. Safety, legal or police: phone the Regional Manager first.",
      ref: "sop-library.html#incidents" },
    { title: "Emergency",
      body: "Call first. Document everything. Support within your role. Life or safety at risk: 911, then your supervisor.",
      ref: "sop-library.html#emergency" }
  ],

  // One shows on the Open tab each day. Pulled from the SOP Refresher drills.
  tips: [
    "Log it before it moves. The system entry is step three, not the last step.",
    "Food delivery is 24 hours. Groceries are 48 hours. Agents mix these up — don't.",
    "A quiet hour still gets an entry: lobby status, desk coverage, cameras.",
    "'Tour completed' is not a log entry. Route, time, what you saw.",
    "If someone didn't work your shift, they should still understand exactly what happened.",
    "Every Outcome closes with: action, who you notified, status, next step.",
    "Corrections are additions, never deletions.",
    "Denying a vendor without access isn't a conflict. It's protocol — log every step.",
    "Never guess with someone else's property. Hold it. Call your Lead.",
    "Every shift is marketing. Management reads your log.",
    "Third person, facts only. 'Concierge greeted resident…' — never 'I told them…'.",
    "A laptop on the general shelf is a prohibited practice. High-value goes to secure storage."
  ],

  // Training Hub links on the Reference tab. Paths relative to hub root.
  hub: [
    { name: "SOP Library",           desc: "Shift log, packages, incidents, emergencies", href: "sop-library.html" },
    { name: "Shift Log Mastery",     desc: "Self-paced series + Witness Test",           href: "shift-log-mastery.html" },
    { name: "SOP Refreshers",        desc: "Scenario drills with Apex answers",          href: "sop-refreshers.html" },
    { name: "Policy Hub",            desc: "Handbook policies, quick answers",           href: "policy-hub.html" },
    { name: "De-Escalation Recert",  desc: "A.C.T. and difficult residents",             href: "de-escalation-recert.html" }
  ],

  callOut: "Can't make a shift? Call your Lead with 2–4 hours' notice minimum."
};
