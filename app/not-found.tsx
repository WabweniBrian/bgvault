import GoBack from "@/components/common/goback";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="min-h-screen flex-col text-center flex-center-center">
      <div className="relative h-[400px] w-full px-3 sm:w-[400px]">
        <Image src="/404.png" alt="Not Found" className="object-contain" fill />
      </div>
      <h1 className="text-6xl font-bold opacity-50">Page Not Found</h1>
      <GoBack />
    </div>
  );
};

export default NotFound;
