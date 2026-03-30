export const Card = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);
