import './App.css';
import UserPanel from './components/user-panel';
import GraphView from './components/graph';
import './index.css';
import { useState, useEffect } from 'react';
import Lists from './components/lists';

function App() {
    const [graph, setGraph] = useState({});
    const [lists, setLists] = useState({});

    const containerClass = 'flex-1 bg-white m-4 p-2 shadow-lg text-center';

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
        setLists(responseJson);
    }

    return (
        <div className="h-screen p-16 flex bg-gray-100">
            <div className={containerClass}>
                <UserPanel
                    onChange={(nodes, edges) => {
                        setGraph({ nodes, edges });
                        fetchLists(nodes, edges);
                    }}
                />
            </div>
            <div className={containerClass}>
                <GraphView graph={graph} />
            </div>
            <div className={containerClass}>
                {Boolean(Object.keys(lists).length) && <Lists lists={lists}></Lists>}
            </div>
        </div>
    );
}

export default App;
