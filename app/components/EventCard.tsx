"use client";
import { useState } from "react";

interface EventCardProps {
  title: string;
  date: string;
  month: string;
  day: number;
  description: string;
  tag: string;
  tagColor: "purple" | "teal" | "amber";
}

const tagStyles = {
  purple: "bg-[#FEF3EC] text-[#C0501A]",
  teal: "bg-[#FDF0E6] text-[#7A2E0E]",
  amber: "bg-[#FEEDE0] text-[#A03010]",
};

const dateBg = {
  purple: "bg-[#FEF3EC]",
  teal: "bg-[#FDF0E6]",
  amber: "bg-[#FEEDE0]",
};

const dateText = {
  purple: "text-[#C0501A]",
  teal: "text-[#7A2E0E]",
  amber: "text-[#A03010]",
};

const dateSubText = {
  purple: "text-[#D4773A]",
  teal: "text-[#C0501A]",
  amber: "text-[#D4622A]",
};

export default function EventCard({
  title,
  date,
  month,
  day,
  description,
  tag,
  tagColor,
}: EventCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow flex flex-col gap-3">
      <div className={`${dateBg[tagColor]} rounded-lg py-3 text-center`}>
        <div className={`text-2xl font-medium ${dateText[tagColor]}`}>{day}</div>
        <div className={`text-xs ${dateSubText[tagColor]}`}>{month}</div>
      </div>
      <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${tagStyles[tagColor]} self-start`}>
        {tag}
      </span>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className={`text-sm text-gray-500 leading-relaxed ${!expanded ? "line-clamp-2" : ""}`}>
        {description}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-[#C0501A] hover:underline self-start"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
      <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-auto">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {date}
      </div>
    </div>
  );
}
