// import { signOut } from "@/auth"
import { Button } from "@/components/ui/button";
import { signoutUser } from "@/lib/actions";
 
export default function SignoutButton() {
  return (
    <form action={signoutUser}>
      <Button variant="outline" type="submit">Sign Out</Button>
    </form>
  )
}

/*
      action={async () => {
        "use server"
        await signOut()
      }}
*/
