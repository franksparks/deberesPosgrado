type RedBoxProps = {
  children: React.ReactNode;
};

export default function RedBox({ children }: RedBoxProps) {
  return (
    <div className="px-1 redbox">
      <span className="px-1">{children}</span>
    </div>
  );
}
