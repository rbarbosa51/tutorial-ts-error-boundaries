import error from "./assets/error.jpeg";

interface myProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Fallback({ className, ...props }: myProps) {
  return (
    <div className={className}>
      <img src={error} alt="Error" width={400} />
      {props.children}
    </div>
  );
}
