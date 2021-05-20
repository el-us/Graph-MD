import React, { useState } from 'react';

function UserPanel({ onChange }) {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    let from = '';
    let to = '';

    function addNode() {
        const nodeIndex = nodes.length;
        const newNodes = [
            ...nodes,
            {
                id: nodeIndex,
                label: `${nodeIndex}`,
                title: nodeIndex
            }
        ];
        setNodes(newNodes);
    }

    function addEdges() {
        // setEdgeCords({ ...edgeCords, id: `${edgeCords.from}-${edgeCords.to}` });

        if (from === '' && to === '') {
            return;
        }
        if (!edges.some((item) => item.id === `${from}-${to}`)) {
            setEdges([...edges, { from, to, id: `${from}-${to}` }]);
        }
    }

    return (
        <div className="p-2">
            <p>Stworz graf</p>
            <div className="mt-4 p-2 border-2 border-gray-400 rounded-md">
                <p>Wierzcholki:</p>
                <div>
                    <p>Dostepne Wierzcholki</p>
                    <ul>
                        {nodes.map((node) => (
                            <li key={node.id}>{node.label}</li>
                        ))}
                    </ul>
                    <button
                        onClick={() => addNode()}
                        className="mt-6 rounded-md py-1 px-4 text-white font-bold bg-gray-400">
                        Dodaj Wierzcholki
                    </button>
                </div>
            </div>
            <div className="mt-4 p-2 border-2 border-gray-400 rounded-md">
                <p>Krawedzie:</p>
                <div>Dostepne Krawedzie</div>
                <ul>
                    {edges.map(({ from, to }, index) => (
                        <li key={index}>
                            {from} => {to}
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col justify-center mt-2">
                    <label for="from">Wybierz numer wierzcholka poczatku krawedzi: </label>
                    <select
                        onChange={
                            (event) => {
                                from = Number(event.target.value);
                            }
                            // setEdgeCords({ ...edgeCords, from: event.target.value })
                        }
                        name="from"
                        id="from">
                        {nodes.map((node) => (
                            <option key={node.id} value={node.title}>
                                {node.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col justify-center mt-2">
                    <label htmlFor="to">Wybierz numer wierzcholka konca krawedzi: </label>
                    <select
                        // onChange={(event) => setEdgeCords({ ...edgeCords, to: event.target.value })}
                        onChange={
                            (event) => {
                                to = Number(event.target.value);
                            }
                            // setEdgeCords({ ...edgeCords, from: event.target.value })
                        }
                        name="to"
                        id="to">
                        {nodes.map((node) => (
                            <option key={node.id} value={node.title}>
                                {node.title}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={() => addEdges()}
                    className="mt-6 rounded-md py-1 px-4 text-white font-bold bg-gray-400">
                    Dodaj krawedz
                </button>
            </div>
            <button
                onClick={() => {
                    onChange(nodes, edges);
                    // setTimeout(() => {
                    //     onChange({}, {});
                    // }, 0);
                }}
                className="mt-6 rounded-md py-1 px-4 text-white font-bold bg-gray-400">
                Rysuj graf
            </button>
        </div>
    );
}

export default UserPanel;
