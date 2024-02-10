import Link from 'next/link';

interface ButtonType {
  className: string;
  href: string;
  text: string;
}

const Button = ({ className, href, text }: ButtonType) => {
  return (
    <Link href={href}>
      <div className={`${className} rounded-full px-6 py-[10px]`}>{text}</div>
    </Link>
  );
};

export default Button;
