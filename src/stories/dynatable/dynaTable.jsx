import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import TableFilter from 'tablefilter';


import './dynaTable.css'
export default class DynaTable extends Component {
    state = {
        currentFilter: "",
        prevFilter: "",
        orderAsc: true,
        sortedData: [],
    }


    sortTable = (array, sortKey = true) => {
        const sortBy = (p, orderAsc) => {
            return array.slice(0).sort(function (a, b) {
                if (orderAsc)
                    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
                else
                    return (a[p] < b[p]) ? 1 : (a[p] > b[p]) ? -1 : 0;
            });
        }
        console.log(sortKey, this.state.orderAsc)
        return sortBy(sortKey, this.state.orderAsc)
    }

    handleSort = (e) => {
        const filter = e.target;
        console.log(filter.dataset.filterValue)

        if (!filter.dataset.filterValue) return false;
        this.setState({ currentFilter: filter.dataset.filterValue }, () => {

            this.toggleOrder();
            this.init();
        })

    }
    toggleOrder = () => {
        if (this.state.currentFilter === this.state.prevFilter) {
            this.setState({ orderAsc: !this.state.orderAsc })
        } else {
            this.setState({ orderAsc: true });
        }
    }


    constructor(props) {
        super(props)
        this.state.sortedData = [...props.data.map((data, index) => {
            return props.transFormFunc(data, index);
        })];

    }


   async componentDidMount() {
      this.init();
        // if (this.props.allowFilter) {
        //     var tf = new TableFilter(this.props.id || 'table');
        //     tf.init();
        // }
    }

    init() {
        let newTableData = this.sortTable(this.props.data, this.state.currentFilter);
        this.setState({
            sortedData: newTableData,
            prevFilter: this.state.currentFilter
        });
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
        className: PropTypes.string,
        sortable: PropTypes.bool,
        allowFilter: PropTypes.bool,
        id: PropTypes.string,
        editable: PropTypes.bool,
        onTableEditFinish: PropTypes.func,
        rowTemplate: PropTypes.func,
        transFormFunc: PropTypes.func
    }

    static defaultProps = {
        sortable: false,
        allowFilter: false,
        id: 'table',
        className: 'table',
        editable: false,
        transFormFunc: (data, index) => data
    }

    GetTableHeader(prop) {
        return <thead>
            {this.props.sortable && <tr>
                {Object.keys(prop).map((k, i) => <th onClick={this.handleSort} className={(k === this.state.currentFilter) ? "active" : ""} data-filter-value={k} key={k + "_" + i}> {k} </th>)}
                </tr>}
            {!this.props.sortable && <tr>
                {Object.keys(prop).map((k, i) => <th key={k + "_" + i}> {k} </th>)}
            </tr>}
        </thead>
    }

    HandleEdit = (rowIndex, col, value) => {
        const newArr = [...this.state.sortedData]
        let row = newArr[rowIndex];
        row[col] = value;
        this.setState({ sortedData: newArr });
        if(this.props.onTableEditFinish != null){
            this.props.onTableEditFinish(newArr)
        }
    }

    GetRows(data = []) {
        if (this.props.editable) {
            return <tbody>
                {this.state.sortedData.map((rec, rind) => {
                    return <tr key={"row" + rind}>
                        {Object.entries(rec).map(([K, v], i) => <td key={"val_" + rind + "_" + i}>
                            <input type="text" onChange={(e) => {
                                this.HandleEdit(rind, K, e.target.value)
                            }} value={v} />
                        </td>)} </tr>
                })}
            </tbody>
        }

        return <tbody>
            {this.state.sortedData.map((rec, rind) => {
                return this.props.rowTemplate == null ?
                    <tr key={"row" + rind}>
                        {Object.values(rec).map((v, i) => <td key={"val_" + rind + "_" + i}> {v} </td>)} </tr>
                    : this.props.rowTemplate(rec, rind)
            })}
        </tbody>
    }

    render() {
        return (
            <table id={this.props.id || 'table'} className={this.props.className || 'table'}>
                {this.GetTableHeader(this.props.data[0] || {})}
                {this.GetRows(this.props.data)}
            </table>
        )
    }
}
