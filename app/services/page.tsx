import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import ScriptureQuote from "../components/ScriptureQuote";

const services = [
  {
    name: "Morning worship",
    day: "Sunday",
    time: "9:00 AM",
    location: "Main Sanctuary",
    description:
      "Contemporary praise, scripture teaching, and communion on the first Sunday of each month. All ages welcome.",
    tag: "Sunday" as const,
  },
  {
    name: "Family service",
    day: "Sunday",
    time: "11:00 AM",
    location: "Main Sanctuary & Hall",
    description:
      "Our flagship service with children's ministry, Sunday school, and creche running simultaneously.",
    tag: "Sunday" as const,
  },
  {
    name: "Midweek prayer",
    day: "Wednesday",
    time: "7:00 PM",
    location: "Chapel Room",
    description:
      "A smaller, quieter gathering for prayer, Bible study, and deeper community connection.",
    tag: "Wednesday" as const,
  },
  {
    name: "Youth service",
    day: "Friday",
    time: "6:30 PM",
    location: "Youth Hall",
    description:
      "A vibrant service designed for teenagers with worship, discussion, and mentorship.",
    tag: "Friday" as const,
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-10">
        <h1 className="text-3xl font-medium text-gray-900 mb-2">Weekly services</h1>
        <p className="text-gray-400 text-sm">All are welcome — come as you are</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        {services.map((s) => (
          <ServiceCard key={s.name} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        <div className="md:col-span-2 bg-gray-50 rounded-xl p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-3">Plan your visit</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            We&apos;d love to meet you. Whether it&apos;s your first time or you&apos;re returning
            after a long break, there&apos;s a place for you here. Free parking is available on-site
            and refreshments are served after every Sunday service.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Our welcome team will be at the entrance to greet you, answer any questions, and help
            you find your way around.
          </p>
          <Link
            href="/prayer"
            className="inline-block bg-[#C0501A] text-white text-sm px-5 py-2.5 rounded-lg hover:bg-[#7A2E0E] transition-colors"
          >
            Get in touch
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <ScriptureQuote
            verse="Let us not give up meeting together, as some are in the habit of doing, but encouraging one another."
            reference="Hebrews 10:25"
            variant="sidebar"
          />
          <ScriptureQuote
            verse="Worship the Lord with gladness; come before him with joyful songs."
            reference="Psalm 100:2"
            variant="sidebar"
          />
        </div>
      </div>
    </div>
  );
}
