import MouseRevealEffect from "@/components/mouse-reveal-effect";

export default function Home() {
  return (
    <MouseRevealEffect>
      <header className="col-span-full">
        <h1>header stuff</h1>
        <div className="size-5 bg-red-500" />
        <p>subtitle</p>
      </header>
      <main className="col-span-full grid grid-cols-subgrid">
        <div className="col-start-2 col-span-2">main A</div>
        <div className="col-span-2">main B</div>
        <div>main C</div>
      </main>
    </MouseRevealEffect>
  );
}
