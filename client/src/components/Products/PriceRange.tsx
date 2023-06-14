import * as Slider from "@radix-ui/react-slider";

export default function PriceRange({
  highestPrice,
  lowestPrice,
  range,
  setRange,
}: {
  highestPrice: number;
  lowestPrice: number;
  range: { highestPrice: number; lowestPrice: number };
  setRange: any;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 text-light">
        <p className="text-light">Your Range:</p>
        <p className="font-bold text-light">
          ${range.lowestPrice}-${range.highestPrice}
        </p>
      </div>
      <Slider.Root
        min={lowestPrice}
        max={highestPrice}
        defaultValue={[lowestPrice, highestPrice]}
        minStepsBetweenThumbs={1}
        onValueChange={(value) => {
          setRange({
            lowestPrice: value[0],
            highestPrice: value[1],
          });
        }}
        className="relative flex items-center select-none touch-none h-5"
      >
        <Slider.Track className="bg-light relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-secondary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-4 h-4 bg-secondary shadow-[0_1px_4px]  rounded-[10px]" aria-label="Volume" />
        <Slider.Thumb className="block w-4 h-4 bg-secondary shadow-[0_1px_4px]  rounded-[10px]" aria-label="Volume" />
      </Slider.Root>
    </div>
  );
}
