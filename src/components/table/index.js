function Table({ table, title }) {
    return (
        <>
            <div className="font-bold">{title}:</div>
            <div className="border-2 border-gray-400 m-4">
                {table.map((item) => (
                    <div className="flex  border-gray-300">
                        {item.map((col, index) => (
                            <div key={index} className="flex-1 p-1 border border-gray-300">
                                {col}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Table;
