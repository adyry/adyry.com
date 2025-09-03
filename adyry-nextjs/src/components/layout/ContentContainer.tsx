interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentContainer({ 
  children, 
  className = "" 
}: ContentContainerProps) {
  return (
    <div className={`bg-white/30 px-4 sm:p-5 rounded-b-md rounded-tr-lg mx-2.5 sm:mx-4 mb-2.5 transition-opacity duration-700 content-container ${className}`}>
      {children}
    </div>
  );
}
