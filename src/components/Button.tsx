interface ButtonProps {
  className: string;
  children: any;
}

export default function Button({ className, children }: ButtonProps) {
  return <button className={className}>{children}</button>;
}
