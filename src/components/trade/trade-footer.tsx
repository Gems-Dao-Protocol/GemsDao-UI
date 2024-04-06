const TradeFooter = () => {
  return (
    <div className="flex h-10 items-center space-x-6 border-t border-[#2A2A2A] px-4">
      <p className="flex items-center gap-x-2 text-sm text-text-gray">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="6" fill="#3CD963" />
        </svg>
        Operational
      </p>
      <p className="text-sm text-text-gray">Server name (15ms)</p>
    </div>
  );
};

export { TradeFooter };
