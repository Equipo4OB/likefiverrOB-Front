export default function Container({ children }) {
    return (
        <div className="mx-0 md:mx-14 lg:mx-28">
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
  }
