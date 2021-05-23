import Table from '../table/index';
import ExtendedTable from '../extendedTable/index';

function Lists({ lists }) {
    const listClass = 'flex-1';

    return (
        <>
            {lists.adjacencyMatrix && (
                <Table title="Macierz sąsiedztwa" table={lists.adjacencyMatrix}></Table>
            )}
            {lists.incidenceList && (
                <ExtendedTable title="Lista incydencji" table={lists.incidenceList}></ExtendedTable>
            )}
            {lists.incidenceMatrix && (
                <Table title="Macierz incydencji" table={lists.incidenceMatrix}></Table>
            )}
            <div className={listClass}>
                <div className="italic mb-4">Czy graf jest spójny:</div>
                <div> Wyszukiwanie wszerz: {String(lists.isConsistent?.BreadthFirstSearch)}</div>
                <div> Wyszukiwanie wgłąb: {String(lists.isConsistent?.DepthFirstSearch)}</div>
            </div>
        </>
    );
}

export default Lists;
