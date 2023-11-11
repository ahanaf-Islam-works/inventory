import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const Page: FC<pageProps> = ({ params }) => {
  return <div>page</div>;
};

export default Page;
