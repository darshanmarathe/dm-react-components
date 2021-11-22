import React, { Component } from "react";
import PropTypes from "prop-types";
//import TableFilter from 'tablefilter';

import "./dynaTable.css";
export default class DynaTable extends Component {
  state = {
    currentFilter: "",
    prevFilter: "",
    orderAsc: true,
    sortedData: [],
  };

  sortTable = (array, sortKey = true) => {
    const sortBy = (p, orderAsc) => {
      return array.slice(0).sort(function (a, b) {
        if (orderAsc) return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
        else return a[p] < b[p] ? 1 : a[p] > b[p] ? -1 : 0;
      });
    };
    return sortBy(sortKey, this.state.orderAsc);
  };

  handleSort = (e) => {
    const filter = e.target;

    if (!filter.dataset.filterValue) return false;
    this.setState({ currentFilter: filter.dataset.filterValue }, () => {
      this.toggleOrder(e);
      this.init();
    });
  };
  toggleOrder = (e) => {
    if (this.state.currentFilter === this.state.prevFilter) {
      this.setState({ orderAsc: !this.state.orderAsc });
      document.querySelectorAll(".up").forEach((e) => e.classList.remove("up"));
      document
        .querySelectorAll(".down")
        .forEach((e) => e.classList.remove("down"));
      e.target.classList.add("up");
    } else {
      this.setState({ orderAsc: true });
      document.querySelectorAll(".up").forEach((e) => e.classList.remove("up"));
      document
        .querySelectorAll(".down")
        .forEach((e) => e.classList.remove("down"));
      e.target.classList.add("down");
    }
  };

  constructor(props) {
    super(props);
    this.state.sortedData = [
      ...props.data.map((data, index) => {
        return props.transFormFunc(data, index);
      }),
    ];
    if (this.props.editable && this.props.onTableEditFinish === null) {
      throw new Error('need the "onTableEditFinish event"');
    }
    this.state.selectable =
      this.props.onRowSelected === null ? "" : "selectable";
  }

  async componentDidMount() {
    this.init();
    // if (this.props.allowFilter) {
    //     var tf = new TableFilter(this.props.id || 'table');
    //     tf.init();
    // }
  }

  init() {
    let newTableData = this.sortTable(
      this.props.data,
      this.state.currentFilter
    );
    this.setState({
      sortedData: newTableData,
      prevFilter: this.state.currentFilter,
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
    transFormFunc: PropTypes.func,
    onRowSelected: PropTypes.func,
  };

  static defaultProps = {
    sortable: false,
    allowFilter: false,
    id: "table",
    className: "table",
    editable: false,
    transFormFunc: (data, index) => data,
    onRowSelected: null,
    onTableEditFinish: null,
  };

  GetTableHeader(prop) {
    return (
      <thead>
        {this.props.sortable && (
          <tr>
            {Object.keys(prop).map((k, i) => (
              <th
                onClick={this.handleSort}
                className={k === this.state.currentFilter ? "active" : ""}
                data-filter-value={k}
                key={k + "_" + i}
              >
                {" "}
                {k}{" "}
              </th>
            ))}
          </tr>
        )}
        {!this.props.sortable && (
          <tr>
            {Object.keys(prop).map((k, i) => (
              <th key={k + "_" + i}> {k} </th>
            ))}
          </tr>
        )}
      </thead>
    );
  }

  RowSelected = (e, rec, rind) => {
    if (this.props.onRowSelected === null) return;
    document
      .querySelectorAll(".hilight")
      .forEach((e) => e.classList.remove("hilight"));
    e.target.parentNode.classList.add("hilight");
    this.props.onRowSelected(rec, rind);
  };
  HandleEdit = (rowIndex, col, value) => {
    const newArr = [...this.state.sortedData];
    let row = newArr[rowIndex];
    row[col] = value;
    this.setState({ sortedData: newArr });
    if (this.props.onTableEditFinish != null) {
      this.props.onTableEditFinish(newArr);
    }
  };

  GetRows(data = []) {
    if (this.props.editable) {
      return (
        <tbody>
          {this.state.sortedData.map((rec, rind) => {
            return (
              <tr
                key={"row" + rind}
                className={this.state.selectable}
                onClick={(e) => this.RowSelected(e, rec, rind)}
              >
                {Object.entries(rec).map(([K, v], i) => (
                  <td key={"val_" + rind + "_" + i}>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.HandleEdit(rind, K, e.target.value);
                      }}
                      value={v}
                    />
                  </td>
                ))}{" "}
              </tr>
            );
          })}
        </tbody>
      );
    }

    return (
      <tbody>
        {this.state.sortedData.map((rec, rind) => {
          return this.props.rowTemplate == null ? (
            <tr
              key={"row" + rind}
              className={this.state.selectable}
              onClick={(e) => this.RowSelected(e, rec, rind)}
            >
              {Object.values(rec).map((v, i) => (
                <td key={"val_" + rind + "_" + i}> {v} </td>
              ))}{" "}
            </tr>
          ) : (
            this.props.rowTemplate(rec, rind)
          );
        })}
      </tbody>
    );
  }

  render() {
    return (
      <table
        id={this.props.id || "table"}
        className={this.props.className || "table"}
      >
        {this.GetTableHeader(this.props.data[0] || {})}
        {this.GetRows(this.props.data)}
      </table>
    );
  }
}
