import AnimatedButton from "./animatedButton";
import CenterButton from "./centerButton";

export default function CallToAction({ id }: { id: string }) {
  return (
    <div id={id} className="pb-14">
      <CenterButton name="Let’s Talk" />
      <div className="flex items-center justify-center text-center px-6">
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let’s talk about <br />
            <span className="text-violet-500">your next big move</span>
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            Hop on a call with us to see how our <br />
            services can accelerate your growth.
          </p>
          <div className="flex flex-col items-center gap-2">
            <AnimatedButton text="Schedule a quick call" />
            <span className="text-sm text-gray-300">
              It’s <span className="font-semibold text-white">Free</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
