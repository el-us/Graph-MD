import './App.css';
import UserPanel from './components/user-panel';
import GraphView from './components/graph';
import './index.css';
import { useState, useEffect } from 'react';
import Lists from './components/lists';

function App() {
    const [graph, setGraph] = useState({});
    const [lists, setLists] = useState({});

    const containerClass = 'flex-1 min-h-500px bg-white m-4 p-2 shadow-lg text-center';
    const containerHeaderClass = 'font-bold';

    async function fetchLists(nodes, edges) {
        const fullResponse = await fetch('https://graphprojectmd.herokuapp.com/graph', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numberOfNodes: nodes?.length,
                edgesMatrix: edges?.map((item) => [Number(item.from), Number(item.to)])
            })
        });
        const responseJson = await fullResponse.json();
        if (responseJson?.message?.includes('Internal Server Error')) {
            setLists({});
        } else {
            setLists(responseJson);
        }
    }

    return (
        <div className="h-full bg-gray-10">
            <h1 className="h-full bg-gray-100 text-center font-bold pt-2 text-xl">
                Graph Project MD
            </h1>
            <div className="h-full p-16  pb-2 flex flex-col lg:flex-row bg-gray-100 flex-wrap">
                <div className={containerClass}>
                    <h2 className={containerHeaderClass}>Panel użytkownika:</h2>
                    <UserPanel
                        onChange={(nodes, edges) => {
                            setGraph({ nodes, edges });
                            fetchLists(nodes, edges);
                        }}
                    />
                </div>
                <div className={containerClass}>
                    <h2 className={containerHeaderClass}>Wizualizacja grafu:</h2>
                    <GraphView graph={graph} />
                </div>
                <div className={`${containerClass}`} style={{ flex: '1 1 100%' }}>
                    <h2 className={`${containerHeaderClass} mb-2`}>Macierze:</h2>
                    <div className="flex justify-between">
                        {Boolean(Object.keys(lists).length) && <Lists lists={lists}></Lists>}
                    </div>
                </div>
            </div>
            <div className="h-full bg-gray-100 text-center uppercase p-4">
                <span className="font-bold">Projekt został wykonany przez:</span>
                <span className="italic"> Jacek Chmiel, Łukasz Seremak, Mateusz Myrcik</span>
            </div>
        </div>
    );
}

export default App;
