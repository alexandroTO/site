import LeftBar from "@/components/LeftBar";

export default function Base({ children }: any) {
  return (
    <>
      <LeftBar />
      {children}
    </>
  );
}
