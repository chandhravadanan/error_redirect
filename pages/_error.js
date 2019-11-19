

const ErrorHandler = (props)=>{
    return (
        <div>
            Ooops! something went wrong
        </div>
    )
}

ErrorHandler.getInitialProps = ({req, res, err})=>{
    if (res && res.statusCode === 404) {
        res.writeHead(302, {
            Location: 'https://google.com'
        });
        res.end();
    } else if (err && err.statusCode === 404) {
        Router.push('https://google.com');
    }
    return {};
}

export default ErrorHandler;