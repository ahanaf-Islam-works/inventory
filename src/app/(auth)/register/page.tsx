import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Wrapper from "@/components/grids/Wrapper";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import RegisterForm from "@/components/forms/Register";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user.role;
  // if (!session || role !== "ADMIN") {
  //   return (
  //     <Wrapper fullScreen singleContent>
  //       <Alert variant="destructive" className="-mt-5">
  //         <DragHandleHorizontalIcon className="w-8 h-8" />
  //         <AlertTitle>You can not register a new personel</AlertTitle>
  //         <AlertDescription>
  //           Please contact your supervisor to register a new personel
  //         </AlertDescription>
  //       </Alert>
  //     </Wrapper>
  //   );
  // }

  return (
    <Wrapper fullScreen singleContent>
      <RegisterForm />
    </Wrapper>
  );
};

export default Page;
