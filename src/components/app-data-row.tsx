const AppDateRow = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex justify-between space-x-4">
      <p className="shrink-0 text-sm text-text-gray">{title}</p>
      <p className="text-right text-sm">{value}</p>
    </div>
  );
};

export { AppDateRow };
