import { type ProposalT } from "~/utils/types";
import { VoteProposal } from "./vote-proposal";
import { Button } from "../ui/button";

const VoteProposalsTable = ({ proposals }: { proposals: ProposalT[] }) => {
  return (
    <div className="space-y-4">
      <VoteProposalsTableHeader />
      <div className="space-y-6">
        {proposals.map((proposal) => (
          <VoteProposal
            key={proposal.id}
            proposal={proposal.proposal}
            startDate={proposal.startDate}
            status={proposal.status}
          />
        ))}
      </div>
    </div>
  );
};

const VoteProposalsTableHeader = () => {
  return (
    <div className="items-center justify-between space-y-2 md:flex md:space-y-0">
      <h3 className="text-2xl font-bold">Proposals</h3>
      <Button className="text-black" size="lg" variant="solana">
        Connect Wallet to Submit a Proposal
      </Button>
    </div>
  );
};

export { VoteProposalsTable };
