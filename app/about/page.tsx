import ScriptureQuote from "../components/ScriptureQuote";

const leadership = [
  {
    initials: "DO",
    name: "Pastor David Osei",
    role: "Senior Pastor",
    bio: "David has served Rydalvale Church Assembly for over 15 years, leading with vision, compassion, and a deep love for Scripture.",
    color: "bg-[#FEF3EC] text-[#C0501A]",
  },
  {
    initials: "MA",
    name: "Rev. Mary Asante",
    role: "Associate Pastor",
    bio: "Mary oversees congregational care, discipleship programmes, and women's ministry across the church.",
    color: "bg-[#FDF3E8] text-[#8B3A0E]",
  },
  {
    initials: "JK",
    name: "James Kofi",
    role: "Worship Director",
    bio: "James leads our music and creative arts ministry, curating worship experiences that draw people closer to God.",
    color: "bg-[#FDF0E6] text-[#7A2E0E]",
  },
  {
    initials: "RP",
    name: "Elder Ruth Peters",
    role: "Head of Pastoral Care",
    bio: "Ruth coordinates prayer support, hospital visitation, and grief counselling for the congregation.",
    color: "bg-[#FEEDE0] text-[#A03010]",
  },
];

const values = [
  { title: "Faith", description: "We trust God completely and live by the truth of his Word." },
  { title: "Hospitality", description: "Every person who walks through our doors is welcomed like family." },
  { title: "Integrity", description: "We do what we say and say what we mean — in private and in public." },
  { title: "Generosity", description: "We give our time, resources, and love freely to God and neighbour." },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-10">
        <h1 className="text-3xl font-medium text-gray-900 mb-2">About Rydalvale Church Assembly</h1>
        <p className="text-gray-400 text-sm">Our story, mission, and the people who lead</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
        <div className="md:col-span-2">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Our story</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Rydalvale Church Assembly was founded in 1999 with a vision to build a diverse,
            faith-filled community where every person is known, loved, and equipped to live out
            their calling. What began as a small gathering in a community hall has grown — over 27
            years — into a thriving church family serving thousands across our region.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            We are an evangelical Pentecostal church rooted in the authority of Scripture and the
            power of the Holy Spirit. We believe the church is most effective when it is grounded in
            worship, deepened through discipleship, and expressed in sacrificial service to our
            community.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Today RCA runs weekly services, youth and children&apos;s programmes, community outreach
            initiatives, and a growing prayer ministry — all united by the belief that God is still
            at work in Rydalvale.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ScriptureQuote
            verse="A new command I give you: love one another. As I have loved you, so you must love one another."
            reference="John 13:34"
            variant="sidebar"
          />
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500 leading-relaxed">
            <p className="font-medium text-gray-900 mb-1">Founded</p>
            <p>1999 · Rydalvale Road</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-base font-medium text-gray-900 mb-2">Our mission</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            To worship God wholeheartedly, grow disciples deeply, and serve the world sacrificially.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-base font-medium text-gray-900 mb-2">Our vision</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            A church where every person encounters the living God and finds their place in his story.
          </p>
        </div>
        <div className="bg-[#FEF3EC] rounded-xl p-6 md:col-span-2">
          <h3 className="text-base font-medium text-[#7A2E0E] mb-3">Our beliefs</h3>
          <p className="text-sm text-[#C0501A] leading-relaxed">
            We believe in one God, eternally existent in three persons — Father, Son, and Holy
            Spirit. We believe in the full inspiration and authority of Scripture, the redemptive
            work of Jesus Christ, salvation by grace through faith, the baptism and gifts of the
            Holy Spirit, the resurrection of the dead, and the return of Christ.
          </p>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-xl font-medium text-gray-900 mb-2">Our values</h2>
        <p className="text-sm text-gray-400 mb-6">What shapes everything we do</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white border border-gray-100 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 mb-1.5">{v.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium text-gray-900 mb-2">Leadership</h2>
        <p className="text-sm text-gray-400 mb-6">Servant leaders committed to the church and community</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {leadership.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center gap-3"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm ${p.color}`}
              >
                {p.initials}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-sm">{p.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{p.role}</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
