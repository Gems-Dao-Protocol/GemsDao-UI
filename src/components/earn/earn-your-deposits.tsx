import { Button } from "../ui/button";

const EarnYourDeposits = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold">Your desposits</h3>
      <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-[#2A2A2A] p-6">
        <p className="text-lg text-text-gray">
          In order to use the lending platform please connect your wallet
        </p>
        <Button className="text-black" size="lg" variant="solana">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export { EarnYourDeposits };
