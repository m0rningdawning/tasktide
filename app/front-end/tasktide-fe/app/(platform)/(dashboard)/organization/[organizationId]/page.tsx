import { OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();
  return (
    <div>
      {/* <OrganizationSwitcher hidePersonal/> */}
      <p>That&apos;s the spririt</p>
    </div>
  );
}

export default OrganizationIdPage;