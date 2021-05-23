function ExtendedTable({ table, title }) {
    table = table.map((item, index) => (item.length === 0 ? [index, '-'] : [index, ...item]));
    const listClass = 'flex-1';

    return (
        <div className={listClass}>
            <div className="italic">{title}:</div>
            <div className="border-2 border-gray-400 m-4">
                {table.map((item, index) => {
                    return (
                        <div key={index} className="flex  border-gray-300">
                            {item.map((col, index) => (
                                <div
                                    key={index}
                                    className="flex-1 p-1 border border-gray-300"
                                    style={index === 0 ? { flex: '0 0 40px' } : {}}>
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

export default ExtendedTable;
