const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="h-full flex bg-slate-100 items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
};

export default ClerkLayout;
