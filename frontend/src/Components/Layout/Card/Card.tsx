import "./Card.css"

const card = ({children}: {children: React.ReactNode}) => (
    <div className="Card">
        <div className="card-body">
            {children}
        </div>
    </div>
)

export default card