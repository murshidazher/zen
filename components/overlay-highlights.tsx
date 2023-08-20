export const OverlayHighlights = () => (
  <div className="bg-overlay absolute z-[-1] overflow-hidden">
    <div className="relative w-full max-w-lg">
      <div className="dark:opacity-15 animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-pink-300 opacity-30 mix-blend-multiply blur-xl dark:bg-pink-500"></div>
      <div className="dark:opacity-15 animate-blob animation-delay-2000 absolute -right-4 top-0 h-72  w-72 rounded-full bg-orange-300 opacity-30 mix-blend-multiply blur-xl dark:bg-orange-500"></div>
    </div>
  </div>
);
