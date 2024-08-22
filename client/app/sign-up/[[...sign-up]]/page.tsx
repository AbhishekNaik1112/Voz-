import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-black">
      <div className="w-full max-w-md p-6 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <SignUp afterSignOutUrl={"/"} forceRedirectUrl={"/home-page"} />
      </div>
    </div>
  );
}
