import './alert.style.css'

const ErrorAlert = ({children , type}) => {
    return (
        <div className={`alert ${type}-alert flex-row`}>
            {children}
        </div>
    )
}

export default ErrorAlert;