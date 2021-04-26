import React from 'react';

const componentClass = 'user-panel'

function UserPanel () {
    const tableDimensions = {
        xLength: 4,
        yLength: 4
    }

    const getTable = ({ xLength, yLength }) => {
        const tableValues = []

        for (let x = 0; x < xLength; x++) {
            const column = []
            for (let y = 0; y < yLength; y++) {
                column[0]
            }
        }


    }

    return (
        <div className={componentClass}>
            <p>Macierz polaczen: </p>
            <div className={`${componentClass}__dropdown`}></div>
            <table className={`${componentClass}__table`}>
            </table>
            <p>Typ  przerzutnikow: </p>
            <div className={`${componentClass}__dropdown`}></div>
            <div className={`${componentClass}__button`}>Wykonaj obliczenia</div>
            <div className={`${componentClass}__button`}>Rysuj graf</div>
        </div>
    )
}

export default UserPanel