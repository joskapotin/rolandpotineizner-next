import QuoteSvg from "../svg/quote-svg"

type QuoteProps = {
  children: React.ReactNode
}

function Quote({ children }: QuoteProps) {
  return (
    <blockquote className="mx-auto max-w-md text-center text-gray-600">
      <i className="mx-auto mb-3 block h-8 w-8 text-gray-300 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14">
        <QuoteSvg />
      </i>
      {children}
    </blockquote>
  )
}
export default Quote
