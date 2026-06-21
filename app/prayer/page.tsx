"use client";

import { useState } from "react";
import ScriptureQuote from "../components/ScriptureQuote";

const categories = [
  "Health & healing",
  "Family & relationships",
  "Work & finances",
  "Grief & loss",
  "Salvation of a loved one",
  "Other",
];

export default function PrayerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-6 py-24 text-center">
        <div className="w-14 h-14 bg-[#EEEDFE] rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
          🙏
        </div>
        <h1 className="text-2xl font-medium text-gray-900 mb-3">
          Your request has been received
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Thank you for trusting us with your prayer request. Our pastoral team will lift you up in
          prayer. You are not alone.
        </p>
        <ScriptureQuote
          verse="Cast all your anxiety on him because he cares for you."
          reference="1 Peter 5:7"
          variant="inline"
        />
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm text-[#534AB7] hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-10">
        <h1 className="text-3xl font-medium text-gray-900 mb-2">Prayer requests</h1>
        <p className="text-gray-400 text-sm">
          Submit a request and our prayer team will lift you up
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="bg-[#EEEDFE] rounded-xl p-5 mb-6">
            <p className="text-sm text-[#3C3489] italic leading-relaxed">
              &ldquo;Do not be anxious about anything, but in every situation, by prayer and
              petition, with thanksgiving, present your requests to God.&rdquo;
            </p>
            <span className="text-xs text-[#534AB7] font-medium mt-2 block">Philippians 4:6</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1.5">
                  Your name {anonymous && <span className="text-gray-300">(hidden)</span>}
                </label>
                <input
                  type="text"
                  disabled={anonymous}
                  placeholder={anonymous ? "Anonymous" : "First and last name"}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#534AB7] disabled:bg-gray-50 disabled:text-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1.5">
                  Email address {anonymous && <span className="text-gray-300">(hidden)</span>}
                </label>
                <input
                  type="email"
                  disabled={anonymous}
                  placeholder={anonymous ? "Anonymous" : "you@example.com"}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#534AB7] disabled:bg-gray-50 disabled:text-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1.5">Prayer category</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#534AB7] bg-white">
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1.5">Privacy preference</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#534AB7] bg-white">
                <option>Share with the congregation</option>
                <option>Keep private (pastoral team only)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1.5">Your prayer request</label>
              <textarea
                rows={5}
                required
                placeholder="Share what's on your heart..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#534AB7] resize-none"
              />
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="accent-[#534AB7]"
              />
              <span className="text-sm text-gray-500">Keep my request anonymous</span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#534AB7] text-white py-2.5 rounded-lg text-sm hover:bg-[#3C3489] transition-colors font-medium"
            >
              Submit prayer request
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Our prayer team</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Every request is prayed over by our dedicated pastoral team. Requests marked as
              private are never shared publicly.
            </p>
          </div>
          <ScriptureQuote
            verse="The prayer of a righteous person is powerful and effective."
            reference="James 5:16"
            variant="sidebar"
          />
          <ScriptureQuote
            verse="Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."
            reference="Matthew 7:7"
            variant="sidebar"
          />
        </div>
      </div>
    </div>
  );
}
