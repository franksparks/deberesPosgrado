type UserProps = {
  name: string;
  age: number;
};

export default function User({ name, age }: UserProps) {
  return (
    <div className="px-1">
      <span className="px-1">{name}</span>
      <span className="px-1">{age}</span>
    </div>
  );
}
