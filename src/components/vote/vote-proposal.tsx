import { ProposalStatus } from "~/utils/types";
import { getProposalColor } from "./vote.helpers";
import dayjs from "dayjs";
import { cn } from "~/utils/cn";

const VoteProposal = ({
  proposal,
  startDate,
  status,
}: {
  proposal: string;
  startDate: string;
  status: ProposalStatus;
}) => {
  const { fromClass, toClass } = getProposalColor(status);

  return (
    <div
      className="grid-cols-[2fr_1fr] items-center space-y-4 rounded-2xl border border-[#2d2d2d] px-3 py-4 lg:grid lg:gap-28 lg:space-y-0 lg:px-6 lg:py-8"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #1C1C1C 100%)",
      }}
    >
      <p className="lg:text-lg">{proposal}</p>
      <div className="flex items-center space-x-4 lg:justify-end lg:space-y-0">
        {(status === ProposalStatus.ACTIVE ||
          status === ProposalStatus.PENDING) && (
          <div className="flex h-8 items-center rounded-full border border-[#2A2A2A] bg-[#131313] px-4 text-xs lg:h-12 lg:px-6 lg:text-base">
            {status === ProposalStatus.ACTIVE
              ? "Starts"
              : status === ProposalStatus.PENDING && "Ends"}{" "}
            {dayjs(startDate).fromNow()}
          </div>
        )}
        <div
          className={cn(
            fromClass,
            toClass,
            "flex rounded-full bg-gradient-to-t p-[1px] lg:h-12",
          )}
        >
          <div className="flex items-center justify-center rounded-full bg-[#131313] px-4 py-2 md:px-8 md:py-4">
            <p
              className={cn(
                fromClass,
                toClass,
                `inline-block bg-gradient-to-t bg-clip-text text-xs text-transparent lg:text-base`,
              )}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VoteProposal };
