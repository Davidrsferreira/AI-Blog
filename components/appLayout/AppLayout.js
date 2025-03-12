export const AppLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-slate-500">
          <div>logo</div>
          <div>cta button</div>
          <div>tokens</div>
        </div>
        <div className="flex-1 overvlow-auto bg-gradient-to-b from-slate-500 to-cyan-800">list of posts</div>
        <div className="bg-cyan-800">user information - logout button</div>
      </div>
      <div>{children}</div>
    </div>
  );
};
