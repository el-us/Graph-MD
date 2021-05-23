function Table({ table, title }) {
    const listClass = 'flex-1';

    return (
        <div className={listClass}>
            <div className="italic">{title}:</div>
            <div className="border-2 border-gray-400 m-4">
                {table.map((item, index) => {
                    if (item.length === 0) {
                        item[0] = '-';
                    }
                    return (
                        <div key={index} className="flex  border-gray-300">
                            {item.map((col, index) => (
                                <div key={index} className="flex-1 p-1 border border-gray-300">
                                    {col}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Table;
