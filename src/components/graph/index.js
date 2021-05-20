import Graph from 'react-graph-vis';

export default function GraphView({ graph, onChange }) {
    // console.log(graph);

    const options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: '#000000'
        },
        height: '500px'
    };

    const events = {
        select: function (event) {
            var { nodes, edges } = event;
        }
    };

    if (!Object.keys(graph).length) {
        return null;
    }

    return (
        <>
            <Graph
                key={Math.random()}
                graph={graph}
                options={options}
                events={events}
                getNetwork={(network) => {
                    //  if you want access to vis.js network api you can set the state in a parent component using this property
                }}
            />
        </>
    );
}
