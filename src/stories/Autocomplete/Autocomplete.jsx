import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Autocomplete.css";

export default class AutoComplete extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        value: '',
        isLoading : false,
        records : props.records || []
      }

      this.inp = React.createRef();
  }

  
  static propTypes = {
    records: PropTypes.array.isRequired,
    keyprop: PropTypes.string,
    textprop: PropTypes.string,
    keepopen: PropTypes.bool,
    mincharAjax: PropTypes.number,
    url: PropTypes.string,
    texttemplate: PropTypes.string,
    template: PropTypes.string,
    inputClass: PropTypes.string,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    records: [],
    keyprop: 'key',
    textprop: 'name',
    keepopen: false,
    mincharAjax: 3,
    url: null,
    inputClass: '',
    texttemplate: null,
    template: null,
    onSelect: (e) => {},
    inputClass: 'textbox'
  };


  autocomplete(inp, rec) {
    debugger;
    let arr = rec != null ? rec : this.state.records;
    const that = this;
    /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    const template = (rec, _tempStr) => {
      let _template = _tempStr;

      //Get Child
      const gc = (key, item) => {
        debugger;
        let retItem = item;
        const keys = key.split(".");
        for (const _key of keys) {
          const split = _key.split(".");
          const newKey = split.length > 1 ? split[1] : split[0];
          retItem = retItem[newKey];
        }

        return retItem;
      };
      const re = /{(.*?)}/g;

      const tkeys = _template.match(re);

      tkeys.forEach((k) => {
        k = k.replace("{", "").replace("}", "");
        if (k.indexOf(".") === -1)
          _template = _template.replace(`{${k}}`, rec[k]);
        else _template = _template.replace(`{${k}}`, gc(k, rec));
      });

      return _template;
    };
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", async function (e) {
        var a,
        b,
        i,
        val = this.value;
        that.setState({value :val})
      
      /*close any already open lists of autocompleted values*/
      if (that.props.url != null && that.props.mincharAjax <= val.length) {
        if (that.isLoading === true) return;
        let records = await fetch(that.props.url.replace("=q", `=${val}`));
        records = await records.json()
        debugger;
        that.isLoading = false;
        arr = records;
      }
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      if (arr.length === 0) arr = that.props.records;
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (
          arr[i][that.props.textprop].substr(0, val.length).toUpperCase() ==
          val.toUpperCase()
        ) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML =
            that.props.template != null
              ? template(arr[i], that.props.template)
              : "<strong>" +
                arr[i][that.props.textprop].substr(0, val.length) +
                "</strong>";
          if (that.props.template == null) {
            b.innerHTML += arr[i][that.props.textprop].substr(val.length);
          }
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML +=
            "<input type='hidden' value='" + arr[i][that.props.keyprop] + "'>";
          b.innerHTML +=
            "<input type='hidden' value='" +
            (that.props.texttemplate != null
              ? template(arr[i], that.props.texttemplate)
              : arr[i][that.props.textprop]) +
            "'>";
            console.warn(b)
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[1].value;
            that.setState({value : inp.value})
            inp.dataset.key = this.getElementsByTagName("input")[0].value;
            that.props.onSelect({
                key: inp.dataset.key,
                value: inp.value,
              })
            /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) {
        //up
        /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
      var x = document.querySelectorAll(".autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
      if (that.props.keepopen === "false") closeAllLists(e.target);
    });
  }



  render() {
    return <div className="autocomplete">
        <input
          id="myInput"
          className={this.props.inputClass}
          type="text"
          ref={this.inp}
          value={this.state.value}
          autocomplete="off"
          placeholder={this.props.placeholder}
        />
      </div>;
  }

  setAutoComplete(records) {
 
    if (records) {
      this.autocomplete(this.inp.current, records);
    } else {
      this.autocomplete(
        this.inp.current,
        this.props.records
      );
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setAutoComplete();
    }, 200);
  }


  componentDidReceiedProps(attribute, oldValue, attrValue) {
    if (attribute === "records") {
      console.log(attrValue);
      this.setAutoComplete(attrValue);
     
    }
  }

  
}

