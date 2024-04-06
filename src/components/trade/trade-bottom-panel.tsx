const TradeBottomPanel = () => {
  return (
    <div className="col-span-2 space-y-4 border-t border-[#2A2A2A] p-4">
      <div className="w-full">
        <ul className="flex space-x-6">
          <li className="text-sm font-bold text-white">Trades (0)</li>
          <li className="text-sm text-text-gray">Orders (23)</li>
          <li className="text-sm text-text-gray">History</li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-sm text-text-gray">No history to show for now</p>
      </div>
    </div>
  );
};

export { TradeBottomPanel };
