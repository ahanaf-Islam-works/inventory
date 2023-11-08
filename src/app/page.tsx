import Wrapper from "@/components/grids/Wrapper";
export default function Home() {
  return (
    <Wrapper col={2} center>
      <div className=" h-10 w-full bg-slate-900"></div>
      <div className=" h-10 w-full bg-pink-900 order-2 md:order-1"></div>
    </Wrapper>
  );
}
