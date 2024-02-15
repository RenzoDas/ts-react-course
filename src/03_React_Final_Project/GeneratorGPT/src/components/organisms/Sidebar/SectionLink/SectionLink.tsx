import { Button } from "@components/atoms/Button/Button"
import { DynamicRoutePaths } from "@models/routes/type"

const SectionLink = ({
  label,
  labelMobile,
  isOpen,
  isActive,
  linkTo,
}: {
  label: string
  labelMobile: string
  isOpen: boolean
  isActive: boolean
  linkTo: DynamicRoutePaths
}) => {
  return (
    <li>
      <Button
        variant={isActive ? "b-primary-sm" : "b-transparent-dark-sm"}
        label={isOpen ? label : labelMobile}
        fontWeight="font-bold"
        square={!isOpen}
        full={isOpen}
        linkTo={linkTo}
        isLink
        onClick={() => console.log(`Changed route to: ${linkTo}`)}
      />
    </li>
  )
}

export default SectionLink
