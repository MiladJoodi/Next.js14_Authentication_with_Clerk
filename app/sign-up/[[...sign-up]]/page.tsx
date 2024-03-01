import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex items-center flex-col gap-6">
      <h1 className="text-4xl font-bold mt-20">Lets Sign up</h1>
      <SignUp />
    </div>
  )
}

