import Link from "next/link";
import ScriptureQuote from "./components/ScriptureQuote";
import ServiceCard from "./components/ServiceCard";
import EventCard from "./components/EventCard";

const stats = [
  { label: "Weekly services", value: "3" },
  { label: "Years in community", value: "27" },
  { label: "Active ministries", value: "8" },
  { label: "Prayer requests answered", value: "1,200+" },
];

const upcomingServices = [
  {
    name: "Morning worship",
    day: "Sunday",
    time: "9:00 AM",
    location: "Main Sanctuary",
    description: "Contemporary praise and teaching from scripture for all ages.",
    tag: "Sunday" as const,
  },
  {
    name: "Family service",
    day: "Sunday",
    time: "11:00 AM",
    location: "Main Sanctuary",
    description: "A welcoming service with children's ministry running alongside.",
    tag: "Sunday" as const,
  },
  {
    name: "Midweek prayer",
    day: "Wednesday",
    time: "7:00 PM",
    location: "Chapel Room",
    description: "Intimate gathering focused on prayer, worship, and the Word.",
    tag: "Wednesday" as const,
  },
];

const upcomingEvents = [
  {
    title: "Summer outreach day",
    date: "12 Jul 2026",
    month: "July 2026",
    day: 12,
    description:
      "A day of serving our neighbourhood with free meals, music, and fellowship. Volunteers of all ages welcome.",
    tag: "Community",
    tagColor: "amber" as const,
  },
  {
    title: "Youth camp registration",
    date: "25 Jul 2026",
    month: "July 2026",
    day: 25,
    description:
      "A 3-day faith retreat for young people ages 13–18 at Clearwater Camp. Limited spots — register early.",
    tag: "Youth",
    tagColor: "teal" as const,
  },
  {
    title: "Night of praise",
    date: "2 Aug 2026",
    month: "August 2026",
    day: 2,
    description:
      "An evening of extended worship with guest musicians from across the region. Doors open at 6:00 PM.",
    tag: "Worship",
    tagColor: "purple" as const,
  },
];

export default function Home() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-[#FEF3EC] text-[#C0501A] text-xs font-medium px-3 py-1 rounded-full mb-5">
          Welcome to RCA
        </span>
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-5">
          Where faith, community,
          <br />
          and hope meet
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed mb-8">
          Rydalvale Church Assembly is your spiritual home — a place to worship, grow, and belong
          together in Christ.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/services"
            className="bg-[#C0501A] text-white px-6 py-2.5 rounded-lg text-sm hover:bg-[#7A2E0E] transition-colors"
          >
            View services
          </Link>
          <Link
            href="/about"
            className="border border-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
          >
            Learn more about us
          </Link>
        </div>
      </section>

      <ScriptureQuote
        verse="For where two or three gather in my name, there am I with them."
        reference="Matthew 18:20"
        variant="banner"
      />

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">{s.label}</p>
              <p className="text-2xl font-medium text-gray-900">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-900 mb-1">Upcoming services</h2>
          <p className="text-sm text-gray-400">Join us for worship this week</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {upcomingServices.map((s) => (
            <ServiceCard key={s.name} {...s} />
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-1">What&apos;s coming up</h2>
            <p className="text-sm text-gray-400">Events and community gatherings</p>
          </div>
          <Link href="/events" className="text-sm text-[#C0501A] hover:underline">
            All events →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingEvents.map((e) => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </section>

      <section className="bg-[#C0501A] text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-medium mb-3">Need prayer?</h2>
        <p className="text-[#E8946A] max-w-md mx-auto mb-6 text-sm leading-relaxed">
          Our pastoral team is here for you. Submit a prayer request and we will lift you up in
          prayer — privately or with the congregation.
        </p>
        <Link
          href="/prayer"
          className="inline-block bg-white text-[#C0501A] font-medium px-6 py-2.5 rounded-lg text-sm hover:bg-[#FEF3EC] transition-colors"
        >
          Submit a prayer request
        </Link>
      </section>
    </div>
  );
}
