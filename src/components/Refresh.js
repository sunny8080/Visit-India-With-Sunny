const Refresh = ({ refreshTours }) => {
    return (
        <div className='refresh'>
            <h2>No Tours Left</h2>
            <button className="btnRefresh" onClick={refreshTours}>Refresh</button>
        </div>
    );
}

export default Refresh;