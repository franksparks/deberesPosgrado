import RedBox from "@/components/RedBox";
import User from "@/components/User";

export default function Home() {
  return (
    <main>
      <h1>React components</h1>
      <User name="James Bond" age={27} />
      <RedBox>This is the interior of the red box component.</RedBox>
    </main>
  );
}
