import { Button } from "./ui/button";

const AmountInput = ({ value }: { value: number }) => {
  return (
    <div>
      <div className="flex h-14 items-center justify-between rounded-lg border border-[#2A2A2A] bg-[#101010] px-4">
        <div className="flex items-center space-x-4">
          <p className="text-lg text-text-gray">Amount</p>
          <Button variant="outline" className="rounded-lg uppercase">
            Max
          </Button>
        </div>
        <input
          className="w-1/2 bg-transparent text-right text-2xl font-bold outline-none"
          defaultValue={value ?? 0}
          placeholder="0.00"
          type="number"
        />
      </div>
    </div>
  );
};

export { AmountInput };
