import { ProposalStatus } from "~/utils/types";

const proposals = [
  {
    id: 0,
    proposal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: "2024-10-01",
    status: ProposalStatus.ACTIVE,
  },
  {
    id: 1,
    proposal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: "2024-10-01",
    status: ProposalStatus.PENDING,
  },
  {
    id: 2,
    proposal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: "2024-10-01",
    status: ProposalStatus.ACTIVE,
  },
  {
    id: 3,
    proposal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: "2024-10-01",
    status: ProposalStatus.DETECTED,
  },
  {
    id: 4,
    proposal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: "2024-10-01",
    status: ProposalStatus.PENDING,
  },
  {
    id: 5,
    proposal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: "2024-10-01",
    status: ProposalStatus.EXECUTED,
  },
  {
    id: 6,
    proposal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: "2024-10-01",
    status: ProposalStatus.CANCELLED,
  },
  {
    id: 7,
    proposal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: "2024-10-01",
    status: ProposalStatus.DETECTED,
  },
  {
    id: 8,
    proposal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startDate: "2024-10-01",
    status: ProposalStatus.EXECUTED,
  },
];

const getProposalColor = (status: ProposalStatus) => {
  switch (status) {
    case ProposalStatus.ACTIVE:
      return {
        fromClass: "from-[#514EFF]",
        toClass: "to-[#00C2FF]",
      };
    case ProposalStatus.PENDING:
      return {
        fromClass: "from-[#514EFF]",
        toClass: "to-[#00C2FF]",
      };
    case ProposalStatus.DETECTED:
      return {
        fromClass: "from-[#F24545]",
        toClass: "to-[#FF9F8A]",
      };
    case ProposalStatus.EXECUTED:
      return {
        fromClass: "from-[#52FF4F]",
        toClass: "to-[#6BFFB0]",
      };
    case ProposalStatus.CANCELLED:
      return {
        fromClass: "from-[#9C9C9C]",
        toClass: "to-[#9C9C9C]",
      };
  }
};

export { getProposalColor, proposals };
