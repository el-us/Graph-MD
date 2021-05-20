function Lists({ lists }) {
    console.log(lists);
    return (
        <>
            adjacencyMatrix
            <div>
                {lists.adjacencyMatrix &&
                    lists.adjacencyMatrix.map((item) => (
                        <div>
                            {item.map((col) => (
                                <span>{col}</span>
                            ))}
                        </div>
                    ))}
            </div>
            incidenceList
            <div>
                {lists.incidenceList &&
                    lists.incidenceList.map((item) => (
                        <div>
                            {item.map((col) => (
                                <span>{col}</span>
                            ))}
                        </div>
                    ))}
            </div>
            incidenceMatrix
            <div>
                {lists.incidenceMatrix &&
                    lists.incidenceMatrix.map((item) => (
                        <div>
                            {item.map((col) => (
                                <span>{col}</span>
                            ))}
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Lists;
