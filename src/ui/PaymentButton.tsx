type PaymentButtonProps = {
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

export default function PaymentButton({
  className = "",
  onClick,
  children

}: PaymentButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
