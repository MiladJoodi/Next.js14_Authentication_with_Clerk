import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="flex items-center flex-col gap-10">
      <h1 className="text-4xl font-bold mt-20">Lets Sign in</h1>
      <SignIn />
    </div>
  )
}