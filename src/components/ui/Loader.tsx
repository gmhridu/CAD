import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Loader2 className="size-5 animate-spin" />
    </div>
  );
};

export default Loader;
