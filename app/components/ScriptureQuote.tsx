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
      <div className="bg-[#EEEDFE] py-6 px-6 text-center">
        <p className="text-[#3C3489] italic text-lg max-w-2xl mx-auto leading-relaxed">
          &ldquo;{verse}&rdquo;
        </p>
        <span className="text-[#534AB7] text-sm font-medium mt-2 block">{reference}</span>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className="border-l-4 border-[#7F77DD] pl-4 py-2 bg-[#EEEDFE] rounded-r-lg">
        <p className="text-[#3C3489] italic text-sm leading-relaxed">&ldquo;{verse}&rdquo;</p>
        <span className="text-[#534AB7] text-xs font-medium mt-1 block">{reference}</span>
      </div>
    );
  }

  return (
    <blockquote className="border-l-2 border-[#7F77DD] pl-4">
      <p className="text-gray-600 italic text-sm leading-relaxed">&ldquo;{verse}&rdquo;</p>
      <cite className="text-[#534AB7] text-xs font-medium mt-1 block not-italic">{reference}</cite>
    </blockquote>
  );
}
