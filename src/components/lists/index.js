import Table from '../table/index';

function Lists({ lists }) {
    return (
        <>
            {lists.adjacencyMatrix && (
                <Table title="Macierz sasiedztwa" table={lists.adjacencyMatrix}></Table>
            )}
            {lists.incidenceList && (
                <Table title="Lista incydencji" table={lists.incidenceList}></Table>
            )}
            {lists.incidenceMatrix && (
                <Table title="Macierz incydencji" table={lists.incidenceMatrix}></Table>
            )}
            <div> Czy jest ...: {String(lists.isConsistent.BreadthFirstSearch)}</div>
            <div> Czy jest ...: {String(lists.isConsistent.DepthFirstSearch)}</div>
        </>
    );
}

export default Lists;
