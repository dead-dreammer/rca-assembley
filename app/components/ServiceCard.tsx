interface ServiceCardProps {
  name: string;
  day: string;
  time: string;
  location: string;
  description: string;
  tag?: "Sunday" | "Wednesday" | "Friday" | string;
}

const tagColors: Record<string, string> = {
  Sunday: "bg-[#EEEDFE] text-[#534AB7]",
  Wednesday: "bg-[#E1F5EE] text-[#0F6E56]",
  Friday: "bg-[#FAEEDA] text-[#854F0B]",
};

export default function ServiceCard({
  name,
  day,
  time,
  location,
  description,
  tag,
}: ServiceCardProps) {
  const tagClass = tag ? (tagColors[tag] ?? "bg-gray-100 text-gray-600") : "";

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow">
      {tag && (
        <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${tagClass} inline-block mb-3`}>
          {tag}
        </span>
      )}
      <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">{description}</p>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {day} · {time}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>
      </div>
    </div>
  );
}
