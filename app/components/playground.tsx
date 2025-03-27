import React from "react";
import ReactDOMServer from "react-dom/server";
import toast from "react-hot-toast";

type PlaygroundProps = {
  children: React.ReactElement;
  setPreview: (preview: React.ReactNode) => void;
};

const Playground: React.FC<PlaygroundProps> = ({ children, setPreview }) => {
  const copyCode = () => {
    const code = ReactDOMServer.renderToString(children);

    navigator.clipboard.writeText(code);
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
        <div className="absolute left-4 top-4 z-10 cursor-pointer">
          <div className="flex flex-row gap-4">
            <div
              className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
              onClick={() => {
                setPreview(children);
              }}
            >
              preview
            </div>
            <div
              className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
              onClick={copyCode}
            >
              copy code
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Playground;
