import { ReactNode } from "react"

interface Props {
  children: ReactNode
  customClass: string
}

function Section (props: Props) {
  const { children, customClass } = props
  return (
    <section className={`grid grid-cols-12 w-full min-h-screen ${customClass}`}>
      {children}
    </section>
  )
}

export default Section
