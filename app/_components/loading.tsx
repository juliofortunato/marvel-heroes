import { LoaderCircleIcon } from "lucide-react";

interface LoadingProps {
  variant?: "light" | "dark";
  fullHeight?: boolean;
}

const Loading = ({ variant = "dark", fullHeight = false }: LoadingProps) => {
  return (
    <div
      className={`flex w-full items-center justify-center pb-20 pt-20 ${fullHeight && "min-h-screen"}`}
    >
      <LoaderCircleIcon
        size={48}
        className={`animate-spin ${variant === "dark" ? "text-gray-900" : "text-white"}`}
      />
    </div>
  );
};

export default Loading;
