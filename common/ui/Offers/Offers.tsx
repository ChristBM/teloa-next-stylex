import stylex from "@stylexjs/stylex";
import { OffersProps } from "./Interfaces";
import PlanCard from "./PlanCard/PlanCard";
import { gap } from "@/styles/tokens.stylex";

export default function Offers({ data }: OffersProps) {
  return (
    <ul className={stylex(s.ul)}>

      {data.map((d, i) => (
        <PlanCard
          key={`card-${i}`}
          {...d}
        />
      ))}
    </ul>
  )
}

const s = stylex.create({
  ul: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: gap.sm,
  }
})
