interface ButtonTypes {
  children?: React.ReactNode
  className?: string
}
export const ButtonOutline = ({ children, className }: ButtonTypes) => {
  return (
    <button
      className={`${className} border border-sys-light-outline px-6 py-[10px] transition duration-[400ms] hover:bg-[#6750A414]`}
    >
      {children}
    </button>
  )
}
