import PropTypes from 'prop-types';

function NavBar({index, setIndex, total}) {
    const handleClickPrevious = () => {
        setIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    }

    const handleClickNext = () => {
        setIndex(prevIndex => prevIndex + 1 < total ? prevIndex + 1 : prevIndex);
    };

    return (
        <nav>
            <div className="button-div">
                {index > 0 && (
                    <button onClick={handleClickPrevious} className="pokemon-button-list">Previous</button>
                )}

                {index < total - 1 && (
                    <button onClick={handleClickNext} className="pokemon-button-list">
                        Next
                    </button>
                )}
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    index: PropTypes.number.isRequired,
    setIndex: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
};

export default NavBar;
