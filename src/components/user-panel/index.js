import React, { useState } from 'react';

function UserPanel({ onChange }) {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);

    const listElementClass = 'inline-block mr-1';

    const isMaxNodes = nodes.length > 5;

    function addNode() {
        const nodeIndex = nodes.length;
        if (nodeIndex > 5) {
            return;
        }
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
        if (!edges.some((item) => item.id === `${from}-${to}`)) {
            setEdges([...edges, { from, to, id: `${from}-${to}` }]);
        }
    }

    function resetState() {
        setFrom(0);
        setTo(0);
        setEdges([]);
        setNodes([]);
        onChange([], []);
    }

    return (
        <div className="p-2">
            <div className="mt-4 p-2 border-2 border-gray-400 rounded-md">
                <div>
                    <p>
                        Dostępne Wierzchołki
                        {isMaxNodes ? (
                            <div className="ml-1 text-yellow-500 font-bold">
                                Osiągnięto maksymalną ilość wierzchołków!
                            </div>
                        ) : null}
                    </p>
                    <ul className="h-8 flex justify-center content-center">
                        {nodes.map((node) => (
                            <li className={listElementClass} key={node.id}>
                                [{node.label}]
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => addNode()}
                        type="button"
                        disabled={nodes.length > 5}
                        className={`mt-6 rounded-md py-1 px-4 text-white font-bold bg-gray-400 ${
                            nodes.length > 5 ? 'cursor-not-allowed' : null
                        }`}>
                        Dodaj wierzchołek
                    </button>
                </div>
            </div>
            <div className="mt-4 p-2 border-2 border-gray-400 rounded-md">
                <div>Dostępne krawędzie</div>
                <ul>
                    {edges.map(({ from, to }, index) => (
                        <li className={listElementClass} key={index}>
                            [{from} => {to}]
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col justify-center mt-2">
                    <label for="from">Wybierz numer wierzchołka początku krawędzi:</label>
                    <select
                        onChange={(event) => {
                            setFrom(Number(event.target.value));
                        }}
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
                    <label htmlFor="to">Wybierz numer wierzchołka końca krawędzi: </label>
                    <select
                        onChange={(event) => {
                            setTo(Number(event.target.value));
                        }}
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
                    onClick={() => {
                        addEdges();
                    }}
                    className="mt-6 rounded-md py-1 px-4 text-white font-bold bg-gray-400">
                    Dodaj krawędź
                </button>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={() => {
                        onChange(nodes, edges);
                    }}
                    className="mt-6 rounded-md py-1 px-4 text-white font-bold bg-gray-400">
                    Rysuj graf
                </button>
                <button
                    onClick={() => {
                        resetState();
                    }}
                    className="mt-6 rounded-md py-1 px-4 text-gray-400 font-bold border-2 border-gray-400 mx-2">
                    Reset
                </button>
            </div>
        </div>
    );
}

export default UserPanel;
