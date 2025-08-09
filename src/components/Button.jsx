import { Button as ShadBtn } from "@/components/ui/button"
export default function Button({ startIcon, btnText }) {
  return (
    <ShadBtn variant="softdark" size="lg">
      {startIcon} <span className="inter-extraBold">{btnText}</span>
    </ShadBtn>
  )
}
