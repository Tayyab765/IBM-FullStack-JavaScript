import { ResponsivePieCanvas } from "@nivo/pie";

const data = [
  {
    id: "make",
    label: "make",
    value: 268,
    color: "hsl(185, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 394,
    color: "hsl(72, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 38,
    color: "hsl(178, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 8,
    color: "hsl(157, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 251,
    color: "hsl(110, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 296,
    color: "hsl(32, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 153,
    color: "hsl(171, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 451,
    color: "hsl(297, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 55,
    color: "hsl(189, 70%, 50%)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 436,
    color: "hsl(190, 70%, 50%)",
  },
  {
    id: "hack",
    label: "hack",
    value: 164,
    color: "hsl(199, 70%, 50%)",
  },
  {
    id: "css",
    label: "css",
    value: 45,
    color: "hsl(108, 70%, 50%)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 334,
    color: "hsl(341, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 376,
    color: "hsl(292, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 303,
    color: "hsl(177, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 347,
    color: "hsl(161, 70%, 50%)",
  },
  {
    id: "elixir",
    label: "elixir",
    value: 139,
    color: "hsl(21, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 121,
    color: "hsl(285, 70%, 50%)",
  },
];

const MyPieCanvas = ({ data /* see data tab */ }) => (
  <div className="h-[500px] w-full">
    <ResponsivePieCanvas
      data={data}
      margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "paired" }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#333333"
      legends={[
        {
          anchor: "right",
          direction: "column",
          translateX: 140,
          itemsSpacing: 2,
          itemWidth: 60,
          itemHeight: 16,
        },
      ]}
    />
  </div>
);

function App() {
  return <MyPieCanvas data={data} />;
}

export default App;
