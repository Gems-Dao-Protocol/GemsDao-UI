import { AppLayout } from "~/components/app-layout";
import { PageHeader } from "~/components/page-header";
import { VoteProposalsTable } from "~/components/vote/vote-proposals-table";
import { proposals } from "~/components/vote/vote.helpers";

export default function Vote() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl space-y-16 py-6 md:py-12">
        <PageHeader
          title="Vote"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Phasellus egestas tellus rutrum tellus pellentesque eu. Enim neque volutpat ac tincidunt vitae semper."
        />
        <VoteProposalsTable proposals={proposals} />
      </div>
    </AppLayout>
  );
}
