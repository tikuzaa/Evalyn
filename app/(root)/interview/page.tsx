import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <div className="container mx-auto px-4 py-8 space-y-16 w-7xl">
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name!} userId={user?.id} type="generate"
      />
    </div>
  );
};

export default Page;