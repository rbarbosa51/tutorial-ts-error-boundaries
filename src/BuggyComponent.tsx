import success from "./assets/success.jpeg";

interface myProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  throwError?: boolean;
}
export default function BuggyComponent({
  className,
  throwError,
  ...props
}: myProps) {
  if (throwError) {
    throw new Error("Ohh No there was an error!");
  }
  return (
    <div className={className}>
      <h2 className="text-4xl text-sky-400/80">Success!!</h2>
      <img src={success} alt="Success" width={400} />
      <div className="p-4 indent-8">{props.children}</div>
    </div>
  );
}
