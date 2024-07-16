import { Novatrix } from "uvcanvas";

export default function Home() {
  return (
    <div>
      <h1 className="absolute right-1/2 top-1/2 translate-x-1/2 translate-y-1/2 text-7xl font-semibold">
        Hello GSAP<sup>(01)</sup>
      </h1>
      <div className="h-dvh">
        <Novatrix />
      </div>
    </div>
  );
}
