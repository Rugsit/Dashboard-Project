import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function AreaGraph({
  precise,
  fill,
  fillSecond,
  stroke,
  strokeSecond,
  data,
  id,
  idSecond,
  dataKey,
  dataKeySecond,
}: {
  precise: boolean;
  fill: string;
  fillSecond?: string;
  stroke: string;
  strokeSecond?: string;
  data: object[];
  id: string;
  idSecond?: string;
  dataKey: string;
  dataKeySecond?: string;
}) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} width={400} height={300}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={fill} stopOpacity={0.8} />
              <stop offset="95%" stopColor={fill} stopOpacity={0} />
            </linearGradient>
            {precise ? (
              <linearGradient id={idSecond} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={fillSecond} stopOpacity={0.8} />
                <stop offset="95%" stopColor={fillSecond} stopOpacity={0} />
              </linearGradient>
            ) : (
              <></>
            )}
          </defs>
          {precise ? <XAxis dataKey={"month"} /> : ""}
          {precise ? <YAxis tickFormatter={(value) => `$${value}K`} /> : ""}
          {precise ? (
            <CartesianGrid strokeWidth={"3 3"} vertical={false} />
          ) : (
            ""
          )}

          {precise ? <Tooltip /> : ""}
          {precise ? <Legend /> : ""}
          <Area
            dataKey={dataKey}
            fill={`url(#${id})`}
            stroke={stroke}
            strokeWidth={3}
            type="monotone"
          />
          {precise ? (
            <Area
              dataKey={dataKeySecond ?? ""}
              fill={`url(#${idSecond})`}
              stroke={strokeSecond}
              strokeWidth={3}
              type="monotone"
            />
          ) : (
            ""
          )}
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
