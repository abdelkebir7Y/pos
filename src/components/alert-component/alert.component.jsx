import './alert.style.css'

const Alert = ({children , type}) => {
    return (
        <div className={`alert ${type}-alert flex-row`}>
            {children}
        </div>
    )
}

export default Alert;