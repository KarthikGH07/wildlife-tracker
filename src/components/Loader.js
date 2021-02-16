import spinner from './spinner.gif';

const Loader = () => {
    return (
        <div className="Loader">
            <img src={spinner} alt='spinner.gif'/>
            <h1> Fetching Data</h1>
        </div>
    )
}

export default Loader
