import React from 'react'
import TableCol from './TableCol'

class TableRow extends React.Component {

    addRow = () => {
        let rows = []
        console.log("Printing number of rows from TableRow")
        console.log(this.props.numberOfRows)
        console.log(this.props.numberOfColumns)
        for (let i = 0; i < this.props.numberOfRows; i++) {
            rows.push(
                <tr>
                    <TableCol
                        numberOfColumns={this.props.numberOfColumns}
                        color={this.props.color}
                    />
                </tr>)
        }
        return rows
    }

    render() {
        return (
            this.addRow()
        )
    }
}

export default TableRow