export default function Container({ children, className = "" }) {
    return (
      <div className={`px-6 md:px-16 lg:px-24 xl:px-32 py-16 ${className}`}>
        {children}
      </div>
    );
  }
  