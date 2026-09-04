"use strict";

/* =========================================================
   SA AVIATOR ACADEMY
   South African Student Pilot Study Website
   GitHub Pages / Browser Only
========================================================= */

const APP_NAME = "SA Aviator Academy";
const STORAGE_KEY = "sa_aviator_academy_progress_v3";
const DEFAULT_QUESTIONS = 20;
const TARGET = 75;

/* =========================================================
   SUBJECTS
========================================================= */

const SUBJECTS = [
  {
    id: "airlaw",
    name: "Air Law & Regulations",
    icon: "⚖️",
    priority: "HIGH",
    description:
      "South African aviation law, pilot responsibilities, licences, documents, airspace and rules."
  },

  {
    id: "met",
    name: "Meteorology",
    icon: "🌦️",
    priority: "HIGH",
    description:
      "Atmosphere, pressure, temperature, wind, clouds, fronts, thunderstorms and aviation weather."
  },

  {
    id: "nav",
    name: "Navigation",
    icon: "🧭",
    priority: "HIGH",
    description:
      "Charts, headings, tracks, bearings, variation, deviation, dead reckoning and radio navigation."
  },

  {
    id: "fpp",
    name: "Flight Planning & Performance",
    icon: "📐",
    priority: "HIGH",
    description:
      "Mass and balance, fuel, performance, wind components, time, distance and calculations."
  },

  {
    id: "radio",
    name: "Radiotelephony / RTF",
    icon: "📻",
    priority: "HIGH",
    description:
      "ICAO alphabet, radio calls, readbacks, phraseology, distress and urgency procedures."
  },

  {
    id: "pof",
    name: "Principles of Flight",
    icon: "🪽",
    priority: "HIGH",
    description:
      "Lift, drag, thrust, weight, angle of attack, stalls, stability, flaps and aerodynamics."
  },

  {
    id: "tech",
    name: "Aircraft Technical",
    icon: "🔧",
    priority: "HIGH",
    description:
      "Engines, propellers, fuel, electrical systems, instruments and aircraft controls."
  },

  {
    id: "human",
    name: "Human Performance",
    icon: "🧠",
    priority: "MEDIUM",
    description:
      "Fatigue, hypoxia, stress, spatial disorientation, workload and pilot decision-making."
  },

  {
    id: "ops",
    name: "Operational Procedures",
    icon: "🛫",
    priority: "MEDIUM",
    description:
      "Checklists, emergencies, runway safety, FOD, wake turbulence and operational discipline."
  },

  {
    id: "commnav",
    name: "Radio & Navigation Aids",
    icon: "📡",
    priority: "MEDIUM",
    description:
      "VOR, DME, NDB, ADF, GNSS, identifiers and navigation-aid limitations."
  },

  {
    id: "aircraft",
    name: "Aircraft General Knowledge",
    icon: "✈️",
    priority: "MEDIUM",
    description:
      "Aircraft construction, systems, instruments, electrical and fuel systems."
  },

  {
    id: "maths",
    name: "Aviation Maths & Units",
    icon: "➗",
    priority: "LOWER",
    description:
      "Speed, time, distance, fuel flow, conversions and practical aviation mathematics."
  }
];

/* =========================================================
   QUESTION FACTS
========================================================= */

const SUBJECT_FACTS = {

  airlaw: [
    ["SACAA", "The South African Civil Aviation Authority is responsible for civil aviation safety oversight in South Africa."],
    ["PPL", "PPL means Private Pilot Licence."],
    ["SPL", "SPL means Student Pilot Licence."],
    ["ATO", "ATO means Aviation Training Organisation."],
    ["CAR", "CAR means Civil Aviation Regulations."],
    ["CATS", "CATS means Civil Aviation Technical Standards."],
    ["Part 61", "Part 61 contains South African personnel licensing requirements."],
    ["Part 141", "Part 141 covers approved aviation training organisations."],
    ["ICAO", "ICAO means International Civil Aviation Organization."],
    ["AIP", "AIP means Aeronautical Information Publication."],
    ["NOTAM", "NOTAM provides time-critical aeronautical information that may affect flight operations."],
    ["FIR", "FIR means Flight Information Region."],
    ["ATC", "ATC means Air Traffic Control."],
    ["PIC", "PIC means Pilot in Command."],
    ["VFR", "VFR means Visual Flight Rules."],
    ["IFR", "IFR means Instrument Flight Rules."],
    ["airspace", "Airspace is the portion of the atmosphere used for aviation and may be subject to different rules and classifications."],
    ["right of way", "Right-of-way rules help pilots avoid collisions and establish which aircraft should give way."],
    ["licence", "A pilot licence provides legal privileges subject to its conditions and applicable regulations."],
    ["pre-flight planning", "Pre-flight planning involves considering weather, aircraft status, route, fuel, aeronautical information and operational requirements."]
  ],

  met: [
    ["METAR", "METAR is a routine aerodrome weather report."],
    ["TAF", "TAF is an aerodrome forecast."],
    ["QNH", "QNH is an altimeter setting that gives altitude above mean sea level when set correctly."],
    ["QFE", "QFE is the pressure setting associated with the aerodrome reference level."],
    ["ISA", "ISA means International Standard Atmosphere."],
    ["dew point", "Dew point is the temperature to which air must be cooled for saturation to occur under the relevant conditions."],
    ["relative humidity", "Relative humidity indicates how close air is to saturation."],
    ["cumulonimbus", "Cumulonimbus is a thunderstorm cloud associated with significant aviation hazards."],
    ["visibility", "Visibility is an important consideration for VFR operations and flight planning."],
    ["wind", "Wind is the movement of air relative to the Earth's surface."],
    ["pressure", "Atmospheric pressure generally decreases as altitude increases."],
    ["cold front", "A cold front occurs where advancing colder air displaces warmer air."],
    ["warm front", "A warm front occurs where advancing warmer air moves over retreating colder air."],
    ["fog", "Fog is a cloud at or very near the Earth's surface."],
    ["icing", "Aircraft icing can reduce aerodynamic and engine performance."],
    ["turbulence", "Turbulence is irregular atmospheric motion that may cause changes in aircraft attitude or altitude."],
    ["wind shear", "Wind shear is a change in wind speed and/or direction over a short distance."],
    ["thunderstorm", "Thunderstorms can involve turbulence, hail, lightning, icing and strong wind changes."],
    ["temperature", "Temperature affects air density and therefore aircraft performance."],
    ["lapse rate", "Temperature generally decreases with altitude through the troposphere at an average environmental lapse rate."]
  ],

  nav: [
    ["heading", "Heading is the direction in which the aircraft nose is pointing."],
    ["track", "Track is the actual path of the aircraft over the ground."],
    ["bearing", "Bearing describes the direction to or from a reference point."],
    ["magnetic variation", "Magnetic variation is the angle between true north and magnetic north."],
    ["deviation", "Compass deviation is error caused by magnetic fields associated with the aircraft."],
    ["latitude", "Latitude measures angular distance north or south of the equator."],
    ["longitude", "Longitude measures angular distance east or west of the prime meridian."],
    ["nautical mile", "One nautical mile is approximately 1.852 kilometres."],
    ["knot", "One knot is one nautical mile per hour."],
    ["DR", "Dead reckoning uses known heading, speed, time and estimated wind effects to predict position."],
    ["GPS", "GPS is part of GNSS and can provide position, track and groundspeed information."],
    ["VOR", "VOR is a radio navigation system providing bearing information relative to a station."],
    ["DME", "DME provides slant-range distance information from a suitable station."],
    ["NDB", "NDB is a non-directional radio beacon used with an ADF."],
    ["ADF", "ADF indicates relative bearing to an NDB."],
    ["true north", "True north is the direction toward the geographic North Pole."],
    ["variation", "Magnetic variation changes with location and time."],
    ["wind correction angle", "Wind correction is used to maintain the desired ground track."],
    ["groundspeed", "Groundspeed is the aircraft's speed relative to the ground."],
    ["TSD", "Time, speed and distance are linked by the relationship distance equals speed multiplied by time."]
  ],

  fpp: [
    ["mass and balance", "Mass and balance calculations help ensure the aircraft remains within approved limits."],
    ["centre of gravity", "The centre of gravity is the point through which the aircraft's weight is considered to act."],
    ["CG envelope", "The CG envelope defines permitted centre-of-gravity positions."],
    ["take-off distance", "Take-off distance is affected by factors such as mass, density altitude, wind and runway surface."],
    ["density altitude", "Higher density altitude generally reduces aircraft performance."],
    ["headwind", "A headwind generally reduces groundspeed and can reduce take-off and landing ground distance."],
    ["tailwind", "A tailwind generally increases groundspeed and can increase take-off and landing ground distance."],
    ["temperature", "Higher temperature generally reduces air density and aircraft performance."],
    ["pressure altitude", "Pressure altitude is altitude indicated when the altimeter is set to standard pressure."],
    ["fuel reserve", "Fuel planning must account for applicable requirements, planned use and prudent reserves."],
    ["climb performance", "Climb performance is affected by mass, density altitude, temperature and aircraft configuration."],
    ["Vx", "Vx is the speed for best angle of climb."],
    ["Vy", "Vy is the speed for best rate of climb."],
    ["glide ratio", "Glide ratio compares horizontal distance travelled with altitude lost."],
    ["runway slope", "Runway slope can materially affect take-off and landing performance."],
    ["surface", "Runway surface condition affects acceleration and braking."],
    ["crosswind", "Crosswind affects take-off and landing technique and controllability."],
    ["payload", "Payload is the useful load carried for the flight, subject to aircraft limitations."],
    ["arm", "Arm is the horizontal distance from the reference datum to the centre of gravity of a mass."],
    ["moment", "Moment is calculated as mass or weight multiplied by its arm, using consistent units."]
  ],

  radio: [
    ["RTF", "RTF means radiotelephony."],
    ["ATC", "ATC means Air Traffic Control."],
    ["readback", "A readback repeats important ATC information to confirm correct understanding."],
    ["ROGER", "ROGER indicates that the transmission has been received."],
    ["WILCO", "WILCO indicates that the instruction is understood and will be complied with."],
    ["SAY AGAIN", "SAY AGAIN requests that a transmission be repeated."],
    ["STANDBY", "STANDBY means wait and listen; it is not an approval or clearance."],
    ["AFFIRM", "AFFIRM means yes, true or correct."],
    ["NEGATIVE", "NEGATIVE means no, permission not granted or incorrect, as applicable."],
    ["MAYDAY", "MAYDAY is the international radiotelephony distress signal."],
    ["PAN PAN", "PAN PAN is the international radiotelephony urgency signal."],
    ["squawk", "A transponder code is commonly called a squawk."],
    ["transponder", "A transponder replies to interrogations and transmits coded information."],
    ["IDENT", "IDENT causes the transponder identification response when requested."],
    ["frequency", "A radio frequency is used to communicate with an aeronautical station."],
    ["callsign", "A callsign identifies an aircraft or aeronautical station in radio communications."],
    ["position report", "A position report provides the aircraft's position and relevant operational information."],
    ["phonetic alphabet", "The ICAO phonetic alphabet helps pilots spell letters clearly over radio."],
    ["plain language", "Clear standard phraseology reduces ambiguity in aviation communication."],
    ["frequency change", "A pilot should comply with applicable frequency-change instructions and read back important information."]
  ],

  pof: [
    ["lift", "Lift is the aerodynamic force generally acting perpendicular to the relative airflow."],
    ["weight", "Weight acts vertically downward toward the centre of gravity."],
    ["thrust", "Thrust is the propulsive force produced by the propulsion system."],
    ["drag", "Drag acts opposite to the aircraft's motion through the air."],
    ["angle of attack", "Angle of attack is the angle between the wing chord line and relative airflow."],
    ["stall", "A stall occurs when the critical angle of attack is exceeded."],
    ["camber", "Increasing aerofoil camber generally increases lift at a given angle of attack."],
    ["centre of gravity", "The centre of gravity is the point through which the aircraft's weight is considered to act."],
    ["induced drag", "Induced drag is associated with lift production and is generally greater at lower speeds."],
    ["parasite drag", "Parasite drag generally increases as airspeed increases."],
    ["ground effect", "Ground effect reduces induced drag near the surface."],
    ["density", "Air density affects aerodynamic and engine performance."],
    ["relative airflow", "Relative airflow is the airflow opposite the aircraft's flight path."],
    ["Bernoulli", "Bernoulli's principle relates pressure and velocity changes in flowing air."],
    ["Newton", "Newton's laws help explain aerodynamic forces and the reaction associated with accelerating air."],
    ["aspect ratio", "A higher aspect ratio wing generally has lower induced drag for a given lift condition."],
    ["dihedral", "Dihedral contributes to lateral stability."],
    ["stability", "Static stability describes the initial tendency after a disturbance."],
    ["longitudinal stability", "Longitudinal stability is stability about the lateral axis."],
    ["lateral stability", "Lateral stability is stability about the longitudinal axis."]
  ],

  tech: [
    ["aileron", "Ailerons primarily control roll."],
    ["elevator", "The elevator primarily controls pitch."],
    ["rudder", "The rudder primarily controls yaw."],
    ["flap", "Flaps can increase wing camber, lift and drag."],
    ["trim", "Trim reduces the control force needed to maintain a desired attitude."],
    ["pitot tube", "The pitot system senses impact or ram air pressure."],
    ["static port", "The static system senses ambient static pressure."],
    ["altimeter", "An altimeter uses static pressure to indicate altitude."],
    ["airspeed indicator", "An airspeed indicator uses pitot and static pressure."],
    ["VSI", "A vertical speed indicator shows rate of climb or descent."],
    ["magneto", "A magneto supplies ignition energy independently of the aircraft electrical system."],
    ["carburettor", "A carburettor meters fuel and mixes it with intake air in a carburetted piston engine."],
    ["fuel selector", "A fuel selector controls which fuel tank or source supplies the engine."],
    ["mixture", "The mixture control changes the fuel-to-air ratio in a piston engine."],
    ["propeller", "A propeller converts engine power into thrust."],
    ["landing gear", "Landing gear supports the aircraft on the ground and absorbs landing loads."],
    ["battery", "The battery stores electrical energy for starting and electrical loads."],
    ["alternator", "An alternator generates electrical power when the engine is running."],
    ["cowl flaps", "Cowl flaps can regulate cooling airflow through an engine cowling."],
    ["checklist", "A checklist helps pilots complete procedures consistently and systematically."]
  ],

  human: [
    ["hypoxia", "Hypoxia is inadequate oxygen available to body tissues."],
    ["hyperventilation", "Hyperventilation can reduce carbon dioxide in the blood and produce symptoms that can resemble hypoxia."],
    ["dehydration", "Dehydration can reduce physical and cognitive performance."],
    ["fatigue", "Fatigue can impair attention, judgement and reaction time."],
    ["stress", "Stress can affect concentration, decision-making and performance."],
    ["spatial disorientation", "Spatial disorientation is an incorrect perception of aircraft attitude or motion."],
    ["night vision", "Night vision is less effective and requires adaptation to darkness."],
    ["carbon monoxide", "Carbon monoxide poisoning reduces the blood's ability to carry oxygen and is a serious aviation hazard."],
    ["motion sickness", "Motion sickness can involve nausea, sweating and discomfort."],
    ["middle ear", "The middle ear must equalise pressure during changes in altitude."],
    ["sinus", "Sinus problems can make pressure equalisation painful or difficult."],
    ["alcohol", "Alcohol can impair judgement and coordination and has no place in safe flight operations."],
    ["medication", "Pilots should ensure medication is compatible with safe flight and applicable medical rules."],
    ["vision", "Adequate visual acuity is important for safe flight."],
    ["hearing", "Hearing is important for radio communication and situational awareness."],
    ["decision making", "Good aeronautical decision-making reduces avoidable risk."],
    ["workload", "High workload can reduce capacity for monitoring and decision-making."],
    ["CRM", "CRM means Crew Resource Management."],
    ["SRM", "SRM means Single-Pilot Resource Management."],
    ["situational awareness", "Situational awareness means maintaining an accurate understanding of the aircraft, environment and operational situation."]
  ],

  ops: [
    ["pre-flight inspection", "A pre-flight inspection checks the aircraft and equipment before flight."],
    ["engine start", "Engine starting should follow the aircraft checklist and approved procedure."],
    ["taxi", "Taxiing is movement of the aircraft on the ground."],
    ["brakes", "Brakes help control aircraft movement on the ground."],
    ["chocks", "Chocks prevent unintended aircraft movement while parked."],
    ["parking brake", "The parking brake can help secure the aircraft when stationary, subject to aircraft procedure."],
    ["sterile cockpit", "Sterile cockpit means avoiding non-essential conversation and tasks during critical phases."],
    ["checklist", "Checklists support consistent completion of normal and abnormal procedures."],
    ["FOD", "FOD means Foreign Object Debris or Damage and can threaten aircraft safety."],
    ["marshalling", "A marshaller can use standard visual signals to guide an aircraft on the ground."],
    ["run-up", "An engine run-up checks engine and system operation before departure as prescribed."],
    ["departure briefing", "A departure briefing reviews relevant runway, weather, terrain, procedures and threats."],
    ["arrival briefing", "An arrival briefing prepares the pilot for the planned arrival, approach and landing."],
    ["go-around", "A go-around is a decision to discontinue an approach and fly the applicable missed or overshoot procedure."],
    ["unstable approach", "An unstable approach is a reason to discontinue the approach according to applicable criteria."],
    ["NOTAM check", "Pre-flight planning should include checking applicable aeronautical information such as NOTAMs."],
    ["weather briefing", "Weather should be reviewed for departure, en-route and destination planning."],
    ["weight and balance", "The aircraft must be operated within approved weight and CG limits."],
    ["emergency briefing", "Passengers should receive appropriate safety and emergency information before flight."],
    ["runway safety", "Pilots should maintain runway awareness and follow applicable clearances and procedures."]
  ],

  commnav: [
    ["VOR", "VOR provides bearing information relative to a VOR station."],
    ["DME", "DME provides slant-range distance from a suitable station."],
    ["NDB", "An NDB is a non-directional radio beacon."],
    ["ADF", "ADF indicates relative bearing to an NDB."],
    ["GNSS", "GNSS is a satellite-based navigation system."],
    ["GPS", "GPS is a satellite navigation system that forms part of GNSS."],
    ["radial", "A VOR radial is a magnetic bearing extending from the station."],
    ["OBS", "An OBS allows selection of a course or radial on suitable VOR equipment."],
    ["TO/FROM", "The TO/FROM indication helps show whether the selected course leads toward or away from the station."],
    ["identifier", "A navigation aid identifier helps pilots confirm they are tuned to the intended facility."],
    ["slant range", "DME measures slant-range distance rather than pure horizontal ground distance."],
    ["bearing", "Bearing describes direction to or from a reference."],
    ["relative bearing", "Relative bearing is the angle between the aircraft's longitudinal axis and the line to a station."],
    ["magnetic bearing", "Magnetic bearing is a bearing measured relative to magnetic north."],
    ["course", "A course is the intended direction of travel over the ground or relative to a navigation aid."],
    ["frequency", "Navigation aids operate on published radio frequencies."],
    ["signal", "Navigation equipment depends on receiving an appropriate usable signal."],
    ["range", "Navigation aids have practical and published service-volume limitations."],
    ["interference", "Radio-frequency interference can affect navigation information."],
    ["identification", "Pilots should positively identify navigation aids before relying on them."]
  ],

  aircraft: [
    ["fuselage", "The fuselage is the main body of the aircraft."],
    ["wing", "The wing produces aerodynamic lift in flight."],
    ["empennage", "The empennage is the tail assembly of the aircraft."],
    ["horizontal stabiliser", "The horizontal stabiliser contributes to longitudinal stability."],
    ["vertical stabiliser", "The vertical stabiliser contributes to directional stability."],
    ["aileron", "The aileron is a primary flight control surface used mainly for roll."],
    ["elevator", "The elevator is a primary flight control surface used mainly for pitch."],
    ["rudder", "The rudder is a primary flight control surface used mainly for yaw."],
    ["landing gear", "Landing gear supports the aircraft on the ground."],
    ["fuel system", "The fuel system stores and delivers fuel to the engine."],
    ["electrical system", "The electrical system supplies and distributes electrical power to aircraft equipment."],
    ["pitot system", "The pitot system supplies pressure information to relevant flight instruments."],
    ["static system", "The static system supplies ambient pressure to relevant flight instruments."],
    ["engine", "The engine provides mechanical power for propulsion."],
    ["propeller", "The propeller converts engine power into thrust."],
    ["oil system", "The oil system lubricates and helps cool engine components."],
    ["cooling system", "The cooling system helps maintain engine operating temperatures."],
    ["magneto", "A magneto provides ignition energy independently of the main electrical system."],
    ["battery", "The battery stores electrical energy."],
    ["alternator", "The alternator supplies electrical power when the engine is running."]
  ],

  maths: [
    ["speed", "Speed describes distance travelled per unit of time."],
    ["distance", "Distance is the amount of ground or path travelled."],
    ["time", "Time is the duration of a flight or part of a flight."],
    ["knot", "A knot is one nautical mile per hour."],
    ["nautical mile", "A nautical mile is approximately 1.852 kilometres."],
    ["kilometre", "A kilometre is a metric unit equal to 1,000 metres."],
    ["metre", "A metre is a metric unit of length."],
    ["litre", "A litre is a unit of volume commonly used for fuel."],
    ["fuel flow", "Fuel flow is the rate at which an engine consumes fuel."],
    ["fuel required", "Fuel required can be estimated using fuel flow multiplied by time, subject to applicable planning factors."],
    ["percentage", "A percentage expresses a quantity as a proportion of 100."],
    ["conversion", "Unit conversion changes a measurement from one unit to another equivalent unit."],
    ["time-speed-distance", "Distance equals speed multiplied by time."],
    ["groundspeed", "Groundspeed is speed relative to the ground."],
    ["airspeed", "Airspeed describes aircraft speed relative to the surrounding air."],
    ["headwind", "A headwind generally reduces groundspeed for a given airspeed."],
    ["tailwind", "A tailwind generally increases groundspeed for a given airspeed."],
    ["crosswind", "A crosswind is wind acting across the runway or aircraft path."],
    ["average speed", "Average speed can be calculated from total distance divided by total time."],
    ["fuel reserve", "Fuel reserve is additional fuel retained for planning and operational requirements."]
  ]
};

/* =========================================================
   ICAO PHONETIC ALPHABET
========================================================= */

const PHONETIC = {
  A: "Alfa",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliett",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "X-ray",
  Y: "Yankee",
  Z: "Zulu"
};

/* =========================================================
   STATE
========================================================= */

function defaultState() {
  return {
    answered: 0,
    correct: 0,

    attempts: 0,

    scores: {},

    mistakes: [],

    mastered: {},

    questionStats: {},

    tests: [],

    settings: {
      questionsPerQuiz: DEFAULT_QUESTIONS
    }
  };
}

let state;

try {
  state =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) ||
    defaultState();
} catch (error) {
  state = defaultState();
}

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );
}

/* =========================================================
   HELPERS
========================================================= */

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  [...document.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[character])
  );
}

function shuffle(array) {
  return [...array].sort(
    () => Math.random() - 0.5
  );
}

function slug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}

/* =========================================================
   QUESTION BANK
========================================================= */

function createQuestionBank(subjectId, facts) {

  const questions = [];

  facts.forEach((fact, index) => {

    const term = fact[0];
    const definition = fact[1];

    const otherFacts = facts.filter(
      (_, i) => i !== index
    );

    const wrongDefinitions = shuffle(
      otherFacts
    )
      .slice(0, 3)
      .map(item => item[1]);

    const wrongTerms = shuffle(
      otherFacts
    )
      .slice(0, 3)
      .map(item => item[0]);

    /* Definition question */

    questions.push({
      id: `${subjectId}-${index}-definition`,

      subject: subjectId,

      question:
        `What does "${term}" mean or describe?`,

      options: shuffle([
        definition,
        ...wrongDefinitions
      ]),

      answer: definition,

      explanation: definition
    });

    /* Term question */

    questions.push({
      id: `${subjectId}-${index}-term`,

      subject: subjectId,

      question:
        `Which term best matches this description?\n\n${definition}`,

      options: shuffle([
        term,
        ...wrongTerms
      ]),

      answer: term,

      explanation:
        `The correct term is ${term}. ${definition}`
    });

    /* True / False */

    questions.push({
      id: `${subjectId}-${index}-true`,

      subject: subjectId,

      question:
        `True or False:\n\n${definition}`,

      options: [
        "True",
        "False"
      ],

      answer: "True",

      explanation:
        `True. ${definition}`
    });

    /* Association */

    const other1 =
      facts[(index + 1) % facts.length];

    const other2 =
      facts[(index + 2) % facts.length];

    const other3 =
      facts[(index + 3) % facts.length];

    questions.push({
      id: `${subjectId}-${index}-association`,

      subject: subjectId,

      question:
        `Which statement is associated with "${term}"?`,

      options: shuffle([
        definition,
        other1[1],
        other2[1],
        other3[1]
      ]),

      answer: definition,

      explanation:
        `${term}: ${definition}`
    });

    /* Recall */

    questions.push({
      id: `${subjectId}-${index}-recall`,

      subject: subjectId,

      question:
        `A student pilot should remember which fact about "${term}"?`,

      options: shuffle([
        definition,
        ...wrongDefinitions
      ]),

      answer: definition,

      explanation:
        `Remember: ${term} — ${definition}`
    });
  });

  return questions;
}

const BANK = {};

for (const subject of SUBJECTS) {

  BANK[subject.id] =
    createQuestionBank(
      subject.id,
      SUBJECT_FACTS[subject.id]
    );
}

/* =========================================================
   APPLICATION STATE
========================================================= */

let currentPage = "dashboard";

let currentQuiz = null;

/* =========================================================
   INITIAL APP
========================================================= */

function init() {

  renderShell();

  showPage("dashboard");
}

function renderShell() {

  const app = $("#app");

  app.innerHTML = `

    <aside class="sidebar" id="sidebar">

      <div class="brand">

        <div class="wing">✈</div>

        <div>
          <b>SKYWise</b>
          <small>PILOT ACADEMY</small>
        </div>

      </div>

      <nav>

        <button
          class="nav active"
          data-page="dashboard">
          ⌂ Dashboard
        </button>

        <button
          class="nav"
          data-page="subjects">
          ▦ Ground School
        </button>

        <button
          class="nav"
          data-page="quiz">
          ✓ Quiz Centre
        </button>

        <button
          class="nav"
          data-page="mistakes">
          ⚠ Mistake Bank
        </button>

        <button
          class="nav"
          data-page="alphabet">
          A–Z Phonetic Alphabet
        </button>

        <button
          class="nav"
          data-page="tools">
          ◈ Aviation Tools
        </button>

        <button
          class="nav"
          data-page="progress">
          ◒ Progress
        </button>

      </nav>

      <div class="side-note">

        <b>South Africa Focus</b>

        <br><br>

        This website is a study companion
        for student pilots.

        <br><br>

        Always verify current SACAA
        publications, AIP, NOTAMs,
        aircraft documentation and
        instructor guidance.

      </div>

    </aside>

    <main class="main">

      <header>

        <button
          id="mobileMenu">
          ☰
        </button>

        <div>

          <span class="eyebrow">
            FLIGHT TRAINING • SOUTH AFRICA
          </span>

          <h1 id="pageTitle">
            Dashboard
          </h1>

        </div>

        <div class="pilot-badge">
          STUDENT PILOT
        </div>

      </header>

      <section id="page"></section>

    </main>
  `;

  $$(".nav").forEach(button => {

    button.addEventListener(
      "click",
      () => {
        showPage(
          button.dataset.page
        );
      }
    );

  });

  $("#mobileMenu").addEventListener(
    "click",
    () => {

      $("#sidebar")
        .classList
        .toggle("open");

    }
  );
}

/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(page) {

  currentPage = page;

  const titles = {

    dashboard:
      "Dashboard",

    subjects:
      "Ground School",

    quiz:
      "Quiz Centre",

    mistakes:
      "Mistake Bank",

    alphabet:
      "ICAO Phonetic Alphabet",

    tools:
      "Aviation Tools",

    progress:
      "Progress"
  };

  $("#pageTitle").textContent =
    titles[page] || "Dashboard";

  $$(".nav").forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.page === page
    );

  });

  $("#sidebar")
    ?.classList
    .remove("open");

  if (page === "dashboard") {
    renderDashboard();
  }

  else if (page === "subjects") {
    renderSubjects();
  }

  else if (page === "quiz") {
    renderQuizCentre();
  }

  else if (page === "mistakes") {
    renderMistakes();
  }

  else if (page === "alphabet") {
    renderAlphabet();
  }

  else if (page === "tools") {
    renderTools();
  }

  else if (page === "progress") {
    renderProgress();
  }

}

/* =========================================================
   STATISTICS
========================================================= */

function accuracy() {

  if (!state.answered) {
    return 0;
  }

  return Math.round(
    state.correct /
    state.answered *
    100
  );
}

function totalQuestionCount() {

  return Object.values(BANK)
    .reduce(
      (total, questions) =>
        total + questions.length,
      0
    );
}

function masteredCount() {

  return Object.values(
    state.questionStats
  )
    .filter(stat =>
      stat.correct >= 2 &&
      stat.correct > stat.wrong
    )
    .length;
}

/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

  const page = $("#page");

  const total =
    totalQuestionCount();

  const acc =
    accuracy();

  page.innerHTML = `

    <section class="hero">

      <div>

        <span class="eyebrow">
          WELCOME ABOARD
        </span>

        <h2>
          Build your aviation knowledge,
          one flight at a time.
        </h2>

        <p>
          Study South African pilot
          ground-school subjects,
          practise questions,
          review mistakes and
          track your progress.
        </p>

        <button
          class="primary"
          onclick="showPage('quiz')">
          Start Practice →
        </button>

      </div>

      <div class="hero-plane">
        ✈
      </div>

    </section>

    <div class="stats">

      <div>

        <span>QUESTION BANK</span>

        <b>${total}</b>

        <small>
          Practice questions
        </small>

      </div>

      <div>

        <span>OVERALL ACCURACY</span>

        <b>${acc}%</b>

        <small>
          ${state.answered}
          answered
        </small>

      </div>

      <div>

        <span>MASTERED</span>

        <b>
          ${masteredCount()}
        </b>

        <small>
          questions
        </small>

      </div>

      <div>

        <span>QUIZZES</span>

        <b>
          ${state.attempts}
        </b>

        <small>
          completed
        </small>

      </div>

    </div>

    <h3>
      Ground School
    </h3>

    <div class="grid">

      ${SUBJECTS
        .map(subjectCard)
        .join("")}

    </div>

    <div class="notice">

      <b>Important:</b>

      This is an educational study
      companion. It is not an official
      SACAA examination simulator.

    </div>
  `;
}

function subjectCard(subject) {

  const score =
    state.scores[subject.id] ||
    {
      correct: 0,
      total: 0
    };

  const percent =
    score.total
      ? Math.round(
          score.correct /
          score.total *
          100
        )
      : 0;

  const questions =
    BANK[subject.id].length;

  return `

    <div
      class="card"
      onclick="startQuiz('${subject.id}')">

      <div class="card-icon">
        ${subject.icon}
      </div>

      <h4>
        ${escapeHTML(subject.name)}
      </h4>

      <p>
        ${escapeHTML(
          subject.description
        )}
      </p>

      <p>
        ${questions} questions
        • ${percent}% accuracy
      </p>

      <div class="bar">

        <i
          style="width:${percent}%">
        </i>

      </div>

      <button>
        Study subject →
      </button>

    </div>
  `;
}

/* =========================================================
   SUBJECTS
========================================================= */

function renderSubjects() {

  $("#page").innerHTML = `

    <div class="panel">

      <h2>
        Ground School
      </h2>

      <p class="lead">

        Choose a subject to practise.
        Each subject contains multiple
        question styles generated from
        the study material.

      </p>

    </div>

    <div class="grid">

      ${SUBJECTS
        .map(subjectCard)
        .join("")}

    </div>
  `;
}

/* =========================================================
   QUIZ CENTRE
========================================================= */

function renderQuizCentre() {

  $("#page").innerHTML = `

    <div class="panel">

      <h2>
        Quiz Centre
      </h2>

      <p class="lead">

        Choose a subject or create
        a mixed practice quiz.

      </p>

      <label>

        Questions per quiz

        <select id="questionCount">

          <option value="10">
            10
          </option>

          <option value="20" selected>
            20
          </option>

          <option value="30">
            30
          </option>

          <option value="50">
            50
          </option>

        </select>

      </label>

    </div>

    <div class="quiz-actions">

      ${SUBJECTS
        .map(subject => `

          <button
            class="choice"
            onclick="startQuiz('${subject.id}')">

            ${subject.icon}
            ${escapeHTML(subject.name)}

            <span>
              ${BANK[subject.id].length} Q
            </span>

          </button>

        `)
        .join("")}

      <button
        class="choice"
        onclick="startQuiz('MIXED')">

        ✈ Mixed Practice

        <span>
          All subjects
        </span>

      </button>

    </div>
  `;
}

/* =========================================================
   START QUIZ
========================================================= */

function startQuiz(subjectId) {

  const countInput =
    $("#questionCount");

  const count =
    Number(
      countInput?.value ||
      state.settings.questionsPerQuiz ||
      DEFAULT_QUESTIONS
    );

  state.settings.questionsPerQuiz =
    count;

  save();

  let pool;

  if (subjectId === "MIXED") {

    pool =
      Object.values(BANK)
        .flat();

  } else {

    pool =
      BANK[subjectId];

  }

  if (!pool || !pool.length) {

    alert(
      "No questions are available for this subject."
    );

    return;
  }

  const questions =
    chooseQuestions(
      pool,
      Math.min(
        count,
        pool.length
      )
    );

  currentQuiz = {

    subject: subjectId,

    questions,

    index: 0,

    score: 0,

    answered: false
  };

  renderQuestion();
}

/* =========================================================
   ADAPTIVE QUESTION SELECTION
========================================================= */

function chooseQuestions(
  pool,
  count
) {

  const weighted = [];

  pool.forEach(question => {

    const stats =
      state.questionStats[
        question.id
      ] || {
        correct: 0,
        wrong: 0
      };

    let weight = 1;

    if (stats.wrong > stats.correct) {
      weight += 4;
    }

    if (stats.wrong >= 2) {
      weight += 3;
    }

    if (
      stats.correct >= 2 &&
      stats.correct > stats.wrong
    ) {
      weight = 0.5;
    }

    for (
      let i = 0;
      i < Math.ceil(weight);
      i++
    ) {
      weighted.push(question);
    }
  });

  return shuffle(weighted)
    .filter(
      (question, index, array) =>
        array.findIndex(
          q => q.id === question.id
        ) === index
    )
    .slice(0, count);
}

/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

  if (!currentQuiz) {
    showPage("quiz");
    return;
  }

  const question =
    currentQuiz.questions[
      currentQuiz.index
    ];

  const total =
    currentQuiz.questions.length;

  const progress =
    Math.round(
      currentQuiz.index /
      total *
      100
    );

  $("#page").innerHTML = `

    <div class="quiz-head">

      <span>
        ${
          currentQuiz.subject === "MIXED"
            ? "Mixed Practice"
            : escapeHTML(
                getSubjectName(
                  currentQuiz.subject
                )
              )
        }
      </span>

      <b>
        Question
        ${currentQuiz.index + 1}
        /
        ${total}
      </b>

    </div>

    <div class="quiz-progress">

      <i
        style="width:${progress}%">
      </i>

    </div>

    <div class="question">

      <span class="qnum">
        QUESTION
        ${currentQuiz.index + 1}
      </span>

      <h2>
        ${escapeHTML(
          question.question
        ).replace(
          /\n/g,
          "<br>"
        )}
      </h2>

      <div class="answers">

        ${shuffle(
          question.options
        )
          .map(option => `

            <button
              class="answer"
              data-answer="${escapeHTML(option)}">

              ${escapeHTML(option)}

            </button>

          `)
          .join("")}

      </div>

    </div>

    <div id="feedback"></div>
  `;

  $$(".answer").forEach(button => {

    button.addEventListener(
      "click",
      () => {

        answerQuestion(
          button.dataset.answer
        );

      }
    );

  });
}

/* =========================================================
   ANSWER QUESTION
========================================================= */

function answerQuestion(answer) {

  if (
    !currentQuiz ||
    currentQuiz.answered
  ) {
    return;
  }

  currentQuiz.answered = true;

  const question =
    currentQuiz.questions[
      currentQuiz.index
    ];

  const correct =
    answer === question.answer;

  const buttons =
    $$(".answer");

  buttons.forEach(button => {

    button.disabled = true;

    if (
      button.dataset.answer ===
      question.answer
    ) {
      button.classList.add(
        "correct"
      );
    }

    if (
      button.dataset.answer ===
      answer &&
      !correct
    ) {
      button.classList.add(
        "wrong"
      );
    }

  });

  updateStatistics(
    question,
    correct
  );

  if (correct) {

    currentQuiz.score++;

  } else {

    addMistake(question);

  }

  save();

  const feedback =
    $("#feedback");

  feedback.innerHTML = `

    <div
      class="feedback
      ${correct ? "good" : "bad"}">

      <b>
        ${
          correct
            ? "✓ Correct!"
            : "✕ Not quite."
        }
      </b>

      <p>

        ${escapeHTML(
          question.explanation
        )}

      </p>

      <button
        class="primary"
        id="nextQuestion">

        ${
          currentQuiz.index + 1 ===
          currentQuiz.questions.length
            ? "See Results"
            : "Next Question →"
        }

      </button>

    </div>
  `;

  $("#nextQuestion")
    .addEventListener(
      "click",
      nextQuestion
    );
}

/* =========================================================
   STATISTICS UPDATE
========================================================= */

function updateStatistics(
  question,
  correct
) {

  state.answered++;

  if (correct) {
    state.correct++;
  }

  if (
    !state.questionStats[
      question.id
    ]
  ) {

    state.questionStats[
      question.id
    ] = {
      correct: 0,
      wrong: 0
    };

  }

  const stats =
    state.questionStats[
      question.id
    ];

  if (correct) {
    stats.correct++;
  } else {
    stats.wrong++;
  }

  const subject =
    question.subject;

  if (
    !state.scores[subject]
  ) {

    state.scores[subject] = {
      correct: 0,
      total: 0
    };

  }

  state.scores[
    subject
  ].total++;

  if (correct) {

    state.scores[
      subject
    ].correct++;

  }

  if (
    stats.correct >= 2 &&
    stats.correct > stats.wrong
  ) {

    state.mastered[
      question.id
    ] = true;

  } else {

    delete state.mastered[
      question.id
    ];

  }
}

/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

  if (!currentQuiz) {
    return;
  }

  currentQuiz.index++;

  currentQuiz.answered = false;

  if (
    currentQuiz.index >=
    currentQuiz.questions.length
  ) {

    finishQuiz();

  } else {

    renderQuestion();

  }
}

/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

  const total =
    currentQuiz.questions.length;

  const score =
    currentQuiz.score;

  const percentage =
    Math.round(
      score /
      total *
      100
    );

  state.attempts++;

  state.tests.push({

    date:
      new Date().toISOString(),

    subject:
      currentQuiz.subject,

    score,

    total,

    percentage

  });

  save();

  $("#page").innerHTML = `

    <div class="result">

      <div class="score-ring">

        <b>
          ${percentage}%
        </b>

        <small>
          ${score}/${total}
        </small>

      </div>

      <h2>

        ${
          percentage >= TARGET
            ? "Excellent work, future pilot! ✈️"
            : "Keep training! 💪"
        }

      </h2>

      <p>

        ${
          percentage >= TARGET
            ? "You reached the website study target."
            : "Review your mistakes and try again."
        }

      </p>

      <br>

      <button
        class="primary"
        onclick="startQuiz('${currentQuiz.subject}')">

        Retake Quiz

      </button>

      <button
        class="secondary"
        onclick="showPage('mistakes')">

        Mistake Bank

      </button>

      <button
        class="secondary"
        onclick="showPage('dashboard')">

        Dashboard

      </button>

    </div>
  `;

  currentQuiz = null;
}

/* =========================================================
   MISTAKE BANK
========================================================= */

function addMistake(question) {

  state.mistakes =
    state.mistakes.filter(
      mistake =>
        mistake.id !== question.id
    );

  state.mistakes.unshift({

    id:
      question.id,

    subject:
      question.subject,

    question:
      question.question,

    answer:
      question.answer,

    explanation:
      question.explanation,

    date:
      new Date().toISOString()

  });

  if (
    state.mistakes.length > 100
  ) {

    state.mistakes =
      state.mistakes.slice(
        0,
        100
      );

  }
}

function renderMistakes() {

  if (
    !state.mistakes.length
  ) {

    $("#page").innerHTML = `

      <div class="empty">

        <h2>
          No mistakes yet 🎉
        </h2>

        <p>
          Take a quiz and any incorrect
          answers will appear here.
        </p>

        <button
          class="primary"
          onclick="showPage('quiz')">

          Start a Quiz

        </button>

      </div>
    `;

    return;
  }

  $("#page").innerHTML = `

    <div class="panel">

      <h2>
        Mistake Bank
      </h2>

      <p class="lead">

        These questions are saved so
        you can focus on the areas
        that need more practice.

      </p>

      <button
        class="danger"
        onclick="clearMistakes()">

        Clear Mistake Bank

      </button>

    </div>

    <div class="mistake-list">

      ${state.mistakes
        .map(
          (mistake, index) => `

            <article>

              <span>
                ${escapeHTML(
                  getSubjectName(
                    mistake.subject
                  )
                )}
              </span>

              <h3>
                ${escapeHTML(
                  mistake.question
                )}
              </h3>

              <p>

                <b>
                  Correct answer:
                </b>

                ${escapeHTML(
                  mistake.answer
                )}

              </p>

              <p>

                ${escapeHTML(
                  mistake.explanation
                )}

              </p>

              <button
                class="secondary"
                onclick="retryMistake(${index})">

                Practise this →

              </button>

            </article>
          `
        )
        .join("")}

    </div>
  `;
}

function retryMistake(index) {

  const mistake =
    state.mistakes[index];

  if (!mistake) {
    return;
  }

  const question =
    Object.values(BANK)
      .flat()
      .find(
        q => q.id === mistake.id
      );

  if (!question) {
    return;
  }

  currentQuiz = {

    subject:
      mistake.subject,

    questions:
      [question],

    index: 0,

    score: 0,

    answered: false
  };

  renderQuestion();
}

function clearMistakes() {

  if (
    !confirm(
      "Clear your entire Mistake Bank?"
    )
  ) {
    return;
  }

  state.mistakes = [];

  save();

  renderMistakes();
}

/* =========================================================
   PHONETIC ALPHABET
========================================================= */

function renderAlphabet() {

  const letters =
    Object.entries(
      PHONETIC
    );

  $("#page").innerHTML = `

    <div class="panel">

      <h2>
        ICAO Phonetic Alphabet
      </h2>

      <p class="lead">

        Use this alphabet when spelling
        names, registrations, callsigns
        and other information over radio.

      </p>

    </div>

    <div class="alpha-grid">

      ${letters
        .map(
          ([letter, word]) => `

            <div class="alpha">

              <b>
                ${letter}
              </b>

              <span>
                ${word}
              </span>

              <button
                onclick="speakWord('${word}')">

                🔊

              </button>

            </div>
          `
        )
        .join("")}

    </div>

    <div class="panel">

      <h2>
        Radio Spelling Drill
      </h2>

      <p>

        Enter a registration,
        callsign or name.

      </p>

      <input
        id="spellInput"
        placeholder="Example: ZS-ABC">

      <button
        class="primary"
        onclick="spellIt()">

        Show Phonetic Spelling

      </button>

      <div
        id="spellOutput"
        class="spellout">
      </div>

    </div>
  `;
}

function spellIt() {

  const value =
    $("#spellInput")
      .value
      .toUpperCase()
      .trim();

  if (!value) {

    $("#spellOutput")
      .textContent =
      "Enter something to spell.";

    return;
  }

  const output =
    [...value]
      .map(character => {

        if (
          PHONETIC[
            character
          ]
        ) {

          return PHONETIC[
            character
          ];

        }

        if (character === " ") {
          return "SPACE";
        }

        if (character === "-") {
          return "DASH";
        }

        return character;

      })
      .join(" • ");

  $("#spellOutput")
    .textContent =
    output;
}

function speakWord(word) {

  if (
    !("speechSynthesis" in window)
  ) {
    return;
  }

  speechSynthesis.cancel();

  const speech =
    new SpeechSynthesisUtterance(
      word
    );

  speechSynthesis.speak(
    speech
  );
}

/* =========================================================
   AVIATION TOOLS
========================================================= */

function renderTools() {

  $("#page").innerHTML = `

    <div class="tools">

      <div class="panel">

        <h2>
          METAR Quick Decoder
        </h2>

        <p>

          Enter a basic METAR to
          identify common groups.

        </p>

        <input
          id="metarInput"
          value="FAOR 041100Z 18010KT 9999 SCT025 24/12 Q1018">

        <button
          class="primary"
          onclick="decodeMetar()">

          Decode

        </button>

        <div id="metarOutput"></div>

      </div>

      <div class="panel">

        <h2>
          Time • Speed • Distance
        </h2>

        <input
          id="distanceInput"
          type="number"
          placeholder="Distance (NM)">

        <input
          id="speedInput"
          type="number"
          placeholder="Speed (kt)">

        <button
          class="primary"
          onclick="calculateTSD()">

          Calculate Time

        </button>

        <div id="tsdOutput"></div>

      </div>

      <div class="panel">

        <h2>
          Fuel Calculator
        </h2>

        <input
          id="fuelFlowInput"
          type="number"
          step="0.1"
          placeholder="Fuel flow (L/hour)">

        <input
          id="flightTimeInput"
          type="number"
          step="0.1"
          placeholder="Flight time (hours)">

        <button
          class="primary"
          onclick="calculateFuel()">

          Calculate Fuel

        </button>

        <div id="fuelOutput"></div>

      </div>

      <div class="panel">

        <h2>
          Speed Conversion
        </h2>

        <input
          id="knotsInput"
          type="number"
          placeholder="Speed in knots">

        <button
          class="primary"
          onclick="convertKnots()">

          Convert

        </button>

        <div id="knotsOutput"></div>

      </div>

    </div>
  `;
}

/* =========================================================
   METAR DECODER
========================================================= */

function decodeMetar() {

  const input =
    $("#metarInput")
      .value
      .trim();

  if (!input) {

    $("#metarOutput")
      .innerHTML =
      "<p>Please enter a METAR.</p>";

    return;
  }

  const groups =
    input.split(/\s+/);

  const output = [];

  groups.forEach(group => {

    /* Wind */

    if (
      /^\d{3}\d{2,3}KT$/.test(
        group
      )
    ) {

      const direction =
        group.slice(0, 3);

      const speed =
        group
          .slice(3)
          .replace(
            "KT",
            ""
          );

      output.push(
        `Wind: ${direction}° at ${speed} kt`
      );

      return;
    }

    /* Visibility */

    if (
      /^\d{4}$/.test(group)
    ) {

      output.push(
        `Visibility: ${group} m`
      );

      return;
    }

    /* Clouds */

    if (
      /^(FEW|SCT|BKN|OVC)\d{3}$/
        .test(group)
    ) {

      const coverage = {

        FEW:
          "Few",

        SCT:
          "Scattered",

        BKN:
          "Broken",

        OVC:
          "Overcast"

      }[
        group.slice(0, 3)
      ];

      const height =
        Number(
          group.slice(3)
        ) * 100;

      output.push(
        `Cloud: ${coverage} at approximately ${height} ft`
      );

      return;
    }

    /* Temperature */

    if (
      /^\d{2}\/\d{2}$/.test(
        group
      )
    ) {

      const values =
        group.split("/");

      output.push(
        `Temperature: ${values[0]}°C • Dew point: ${values[1]}°C`
      );

      return;
    }

    /* QNH */

    if (
      /^Q\d{4}$/.test(
        group
      )
    ) {

      output.push(
        `QNH: ${group.slice(1)} hPa`
      );

      return;
    }

    /* Z time */

    if (
      /^\d{6}Z$/.test(
        group
      )
    ) {

      output.push(
        `Observation time: ${group}`
      );

      return;
    }

  });

  $("#metarOutput")
    .innerHTML =
    output.length
      ? output
          .map(
            item =>
              `<p>• ${escapeHTML(item)}</p>`
          )
          .join("")
      : "<p>No basic METAR groups recognised.</p>";
}

/* =========================================================
   TIME SPEED DISTANCE
========================================================= */

function calculateTSD() {

  const distance =
    Number(
      $("#distanceInput")
        .value
    );

  const speed =
    Number(
      $("#speedInput")
        .value
    );

  if (
    distance <= 0 ||
    speed <= 0
  ) {

    $("#tsdOutput")
      .innerHTML =
      "<p>Enter positive distance and speed.</p>";

    return;
  }

  const hours =
    distance /
    speed;

  const minutes =
    hours * 60;

  $("#tsdOutput")
    .innerHTML = `

      <h3>
        ${minutes.toFixed(1)}
        minutes
      </h3>

      <p>
        Approximately
        ${hours.toFixed(2)}
        hours.
      </p>
    `;
}

/* =========================================================
   FUEL
========================================================= */

function calculateFuel() {

  const flow =
    Number(
      $("#fuelFlowInput")
        .value
    );

  const time =
    Number(
      $("#flightTimeInput")
        .value
    );

  if (
    flow <= 0 ||
    time <= 0
  ) {

    $("#fuelOutput")
      .innerHTML =
      "<p>Enter positive values.</p>";

    return;
  }

  const fuel =
    flow * time;

  $("#fuelOutput")
    .innerHTML = `

      <h3>
        ${fuel.toFixed(1)} L
      </h3>

      <p>
        Estimated fuel used
        before adding applicable
        reserves and allowances.
      </p>

    `;
}

/* =========================================================
   KNOTS TO KM/H
========================================================= */

function convertKnots() {

  const knots =
    Number(
      $("#knotsInput")
        .value
    );

  if (knots < 0) {

    $("#knotsOutput")
      .innerHTML =
      "<p>Enter a valid speed.</p>";

    return;
  }

  const kmh =
    knots * 1.852;

  $("#knotsOutput")
    .innerHTML = `

      <h3>
        ${kmh.toFixed(1)}
        km/h
      </h3>

      <p>
        ${knots.toFixed(1)}
        kt
        =
        ${kmh.toFixed(1)}
        km/h
      </p>

    `;
}

/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

  const rows =
    SUBJECTS
      .map(subject => {

        const score =
          state.scores[
            subject.id
          ] || {
            correct: 0,
            total: 0
          };

        const percent =
          score.total
            ? Math.round(
                score.correct /
                score.total *
                100
              )
            : 0;

        return `

          <div class="prog-row">

            <div>

              <b>
                ${escapeHTML(
                  subject.name
                )}
              </b>

              <span>
                ${score.total}
                answered
                •
                ${percent}%
              </span>

            </div>

            <div class="bar">

              <i
                style="width:${percent}%">
              </i>

            </div>

          </div>
        `;

      })
      .join("");

  $("#page").innerHTML = `

    <div class="panel">

      <h2>
        Your Training Record
      </h2>

      <p class="lead">

        Your progress is saved
        locally in this browser.

      </p>

      <div class="stats">

        <div>

          <span>
            QUESTIONS ANSWERED
          </span>

          <b>
            ${state.answered}
          </b>

        </div>

        <div>

          <span>
            CORRECT
          </span>

          <b>
            ${state.correct}
          </b>

        </div>

        <div>

          <span>
            ACCURACY
          </span>

          <b>
            ${accuracy()}%
          </b>

        </div>

        <div>

          <span>
            MASTERED
          </span>

          <b>
            ${masteredCount()}
          </b>

        </div>

      </div>

    </div>

    <div class="panel">

      <h2>
        Subject Performance
      </h2>

      ${rows}

    </div>

    <div class="panel">

      <h2>
        Test History
      </h2>

      ${
        state.tests.length
          ? state.tests
              .slice()
              .reverse()
              .slice(0, 20)
              .map(test => `

                <p>

                  <b>
                    ${escapeHTML(
                      getSubjectName(
                        test.subject
                      )
                    )}
                  </b>

                  —
                  ${test.percentage}%

                  (${test.score}/${test.total})

                  <small>
                    ${new Date(
                      test.date
                    ).toLocaleString()}
                  </small>

                </p>

              `)
              .join("")
          : "<p>No completed quizzes yet.</p>"
      }

    </div>

    <div class="panel">

      <h2>
        Reset Progress
      </h2>

      <p>
        This permanently removes
        your saved scores, mistakes
        and quiz history from this
        browser.
      </p>

      <button
        class="danger"
        onclick="resetProgress()">

        Reset All Progress

      </button>

    </div>
  `;
}

/* =========================================================
   RESET
========================================================= */

function resetProgress() {

  if (
    !confirm(
      "Reset ALL SA Aviator Academy progress?"
    )
  ) {
    return;
  }

  localStorage.removeItem(
    STORAGE_KEY
  );

  state =
    defaultState();

  currentQuiz = null;

  showPage("dashboard");
}

/* =========================================================
   SUBJECT NAME
========================================================= */

function getSubjectName(
  subjectId
) {

  if (
    subjectId === "MIXED"
  ) {

    return "Mixed Practice";

  }

  const subject =
    SUBJECTS.find(
      item =>
        item.id === subjectId
    );

  return subject
    ? subject.name
    : subjectId;
}

/* =========================================================
   START
========================================================= */

init();
