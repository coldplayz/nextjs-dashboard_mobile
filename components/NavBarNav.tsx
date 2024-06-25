import { auth } from "@/auth";
import CTALink from "./CTALink";
import { ClientRoutes } from "@/app.config";
import SignoutButton from "@/components/SignoutButton";

type Props = {
  CTALabel?: string;
  CTAHref?: string;
};

export default function NavBarNav({
  CTALabel = '',
  CTAHref = '',
}: Props) {
  return (
    <nav className="flex">
      <AuthAction
        CTAHref={CTAHref}
        CTALabel={CTALabel}
      />
    </nav>
  );
}

async function AuthAction({
  CTALabel = '',
  CTAHref = '',
}) {
  const sess = await auth();
  const isLoggedIn = !!sess?.user;

  if (isLoggedIn) {
    return (
      <SignoutButton />
    );
  }

  // Signed out
  return (
    <CTALink
      label={CTALabel || 'Sign In'}
      link={CTAHref || ClientRoutes.signin}
    />
  );
}
