import './Error.scss'
function Error() {

    return (
        <>
            <div className='page404'>
                <h3>Sorry, this page isn't available</h3>
                <p>The link you followed may be broken, or the page may have been removed.</p>
                <div className='back'>
                    <a href='/'>Back</a>
                </div>

            </div>
        </>
    )
}

export default Error;