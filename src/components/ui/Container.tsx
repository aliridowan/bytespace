type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-4 sm:px-6 xl:px-0 ${className}`}>
      {children}
    </div>
  );
}
