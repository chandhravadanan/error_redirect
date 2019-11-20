
const InternalError = (props)=>{
    // some exception occured
    throw new Error('MyError')
    return (
        <div>
            This is landing page
        </div>
    )
}

export default InternalError;