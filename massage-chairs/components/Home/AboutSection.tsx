import AboutSingleDesc from "@/design_theme_items/AboutSingleDesc";

const items = [
  {
    number: 1,
    desc: "Масажните столови обезбедуваат релаксација и намалување на стресот, што помага во подобрување на циркулацијата и намалување на мускулните болки. Редовното користење може значително да го подобри физичкото и менталното здравје..",
  },
  {
    number: 2,
    desc: "Со масажен стол во домот, можете да уживате во професионална масажа во секое време, без да го напуштате својот простор. Ова е идеално за зафатени луѓе кои сакаат лесен начин за релаксација.",
  },
  {
    number: 3,
    desc: "Персонализирани опции за масажа: Нашите масажни столови нудат различни програми и прилагодливи опции, што ви овозможува да ја изберете масажата што најмногу ви одговара.",
  },
  {
    number: 4,
    desc: "Иако масажните столови имаат почетен трошок, тие се долгорочна инвестиција во вашето здравје и благосостојба. Со масажен стол дома, ќе заштедите време и пари, имајќи постојан пристап до релаксација и третман.",
  },
];

const AboutSection = () => {
  return (
    <section className="aboutSection">
      <h3>Зошто Масажери.мк</h3>
      <div className="contentWrapper">
        {items.map(item => <AboutSingleDesc key={item.number} number={item.number} desc={item.desc}/>)}
      </div>
    </section>
  );
};

export default AboutSection;