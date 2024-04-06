const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mx-auto max-w-5xl space-y-4 text-center">
      <h2 className="text-[32px] font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export { PageHeader };
