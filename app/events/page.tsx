import EventCard from "../components/EventCard";
import ScriptureQuote from "../components/ScriptureQuote";

const upcomingEvents = [
  {
    title: "Summer outreach day",
    date: "12 Jul 2026",
    month: "July 2026",
    day: 12,
    description:
      "Serving our neighbourhood with free meals, activities, and live music. All are welcome — volunteers especially so. Come and be the hands and feet of Christ.",
    tag: "Community",
    tagColor: "amber" as const,
  },
  {
    title: "Youth camp",
    date: "25 Jul 2026",
    month: "July 2026",
    day: 25,
    description:
      "A 3-day faith retreat at Clearwater Camp for ages 13–18. Activities, worship, and teaching in a beautiful outdoor setting. Registration closes 10 July.",
    tag: "Youth",
    tagColor: "teal" as const,
  },
  {
    title: "Night of praise",
    date: "2 Aug 2026",
    month: "August 2026",
    day: 2,
    description:
      "An evening of extended worship with guest musicians from across the region. Doors open at 6:00 PM, worship begins at 7:00 PM.",
    tag: "Worship",
    tagColor: "purple" as const,
  },
  {
    title: "Annual church conference",
    date: "16 Aug 2026",
    month: "August 2026",
    day: 16,
    description:
      "A full-day vision gathering for all church members. Hear from leadership about the year ahead, share a meal together, and celebrate what God has done.",
    tag: "Conference",
    tagColor: "amber" as const,
  },
];

const pastEvents = [
  {
    title: "Easter celebration 2026",
    date: "5 Apr 2026",
    month: "April 2026",
    day: 5,
    description: "A joyful sunrise service followed by a community breakfast and afternoon worship.",
    tag: "Worship",
    tagColor: "purple" as const,
  },
  {
    title: "Good Friday prayer vigil",
    date: "3 Apr 2026",
    month: "April 2026",
    day: 3,
    description: "An evening of solemn reflection, scripture reading, and intercessory prayer.",
    tag: "Prayer",
    tagColor: "teal" as const,
  },
];

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-10">
        <h1 className="text-3xl font-medium text-gray-900 mb-2">Upcoming events</h1>
        <p className="text-gray-400 text-sm">Stay connected with what&apos;s happening at RCA</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {upcomingEvents.map((e) => (
              <EventCard key={e.title} {...e} />
            ))}
          </div>

          <h2 className="text-lg font-medium text-gray-900 mb-4">Past events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pastEvents.map((e) => (
              <div key={e.title} className="opacity-60">
                <EventCard {...e} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <ScriptureQuote
            verse="This is the day the Lord has made; we will rejoice and be glad in it."
            reference="Psalm 118:24"
            variant="sidebar"
          />
          <div className="bg-[#EEEDFE] rounded-xl p-4">
            <h3 className="text-sm font-medium text-[#3C3489] mb-2">Stay updated</h3>
            <p className="text-xs text-[#534AB7] leading-relaxed mb-3">
              Sign up to receive event announcements directly in your inbox.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full text-xs border border-[#AFA9EC] rounded-lg px-3 py-2 mb-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#534AB7]"
            />
            <button className="w-full bg-[#534AB7] text-white text-xs py-2 rounded-lg hover:bg-[#3C3489] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
