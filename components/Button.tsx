import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary',
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = "px-8 py-3.5 text-sm font-light tracking-wide transition-all inline-block text-center";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border border-black text-black hover:bg-black hover:text-white"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
