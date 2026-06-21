interface ScriptureQuoteProps {
  verse: string;
  reference: string;
  variant?: "banner" | "inline" | "sidebar";
}

export default function ScriptureQuote({
  verse,
  reference,
  variant = "inline",
}: ScriptureQuoteProps) {
  if (variant === "banner") {
    return (
      <div className="bg-[#FEF3EC] py-6 px-6 text-center">
        <p className="text-[#7A2E0E] italic text-lg max-w-2xl mx-auto leading-relaxed">
          &ldquo;{verse}&rdquo;
        </p>
        <span className="text-[#C0501A] text-sm font-medium mt-2 block">{reference}</span>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className="border-l-4 border-[#D4773A] pl-4 py-2 bg-[#FEF3EC] rounded-r-lg">
        <p className="text-[#7A2E0E] italic text-sm leading-relaxed">&ldquo;{verse}&rdquo;</p>
        <span className="text-[#C0501A] text-xs font-medium mt-1 block">{reference}</span>
      </div>
    );
  }

  return (
    <blockquote className="border-l-2 border-[#D4773A] pl-4">
      <p className="text-gray-600 italic text-sm leading-relaxed">&ldquo;{verse}&rdquo;</p>
      <cite className="text-[#C0501A] text-xs font-medium mt-1 block not-italic">{reference}</cite>
    </blockquote>
  );
}
