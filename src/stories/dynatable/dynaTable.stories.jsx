import React from "react";
import DynaTable from "./dynaTable";


var SFDCData = `[{"actualoxygen":"0.00","actualTarAA":"0.00","actualTarDG":"0.00","actualTarNeb":"0.00","actualTarPI":"0.00","actualTarTherapy":"0.00","actualTarVent":"0.00","bccommitTarPI":80,"bccommitTarTherapy":80,"bcprob":"60","bestcaseopp":"0065500000Jka3RAAR","commitoxygen":"80","commitTarAA":"80","commitTarDG":"2025","commitTarNeb":"80","commitTarPI":"80","commitTarTherapy":"80","commitTarVent":"80","QuotaAA":80,"QuotaDG":2025,"QuotaNeb":80,"QuotaOxygen":80,"QuotaPI":80,"QuotaTherapy":80,"QuotaVent":80,"wraccountid":"00155000012HvdBAAS","wraccountname":"AnuForecast Test","wrcurrency":"USD","wroppclosedate":"2021-11-30","wroppmonth":"Nov","wroppname":"SRC_4889","wrparentoppid":"0065500000Jka0NAAR","pipelineprob":""},{"actualoxygen":"0.00","actualTarAA":"0.00","actualTarDG":"0.00","actualTarNeb":"0.00","actualTarPI":"0.00","actualTarTherapy":"0.00","actualTarVent":"0.00","bccommitTarPI":80,"bccommitTarTherapy":1933,"bcprob":"60","bestcaseopp":"0065500000Jka3VAAR","commitoxygen":"1933","commitTarAA":"1933","commitTarDG":"1933","commitTarNeb":"1933","commitTarPI":"765","commitTarTherapy":"765","commitTarVent":"1933","QuotaAA":1933,"QuotaDG":1933,"QuotaNeb":1933,"QuotaOxygen":1933,"QuotaPI":765,"QuotaTherapy":765,"QuotaVent":1933,"wraccountid":"001d000001Mh8mmAAB","wraccountname":"#UCB BIOSCIENCES INC","wrcurrency":"USD","wroppclosedate":"2021-11-30","wroppmonth":"Nov","wroppname":"SRC_4235","wrparentoppid":"0065500000Jka1kAAB","pipelineprob":""},{"actualoxygen":"0.00","actualTarAA":"0.00","actualTarDG":"0.00","actualTarNeb":"0.00","actualTarPI":"0.00","actualTarTherapy":"0.00","actualTarVent":"0.00","bccommitTarPI":115,"bccommitTarTherapy":115,"bcprob":"60","bestcaseopp":"0065500000Jka3ZAAR","commitoxygen":"6771","commitTarAA":"115","commitTarDG":"115","commitTarNeb":"115","commitTarPI":"6771","commitTarTherapy":"6771","commitTarVent":"115","QuotaAA":115,"QuotaDG":115,"QuotaNeb":115,"QuotaOxygen":6771,"QuotaPI":6771,"QuotaTherapy":6771,"QuotaVent":115,"wraccountid":"0015500001Hd8pDAAR","wraccountname":"May Test Account 0001","wrcurrency":"USD","wroppclosedate":"2021-11-30","wroppmonth":"Nov","wroppname":"SRC_8846","wrparentoppid":"0065500000Jka0dAAB","pipelineprob":""},{"actualoxygen":"0.00","actualTarAA":"0.00","actualTarDG":"0.00","actualTarNeb":"0.00","actualTarPI":"0.00","actualTarTherapy":"0.00","actualTarVent":"0.00","bccommitTarPI":16504,"bccommitTarTherapy":1555501,"bcprob":"60","bestcaseopp":"0065500000Jka3WAAR","commitoxygen":"17501","commitTarAA":"23334","commitTarDG":"1555501","commitTarNeb":"176501","commitTarPI":"26509","commitTarTherapy":"501","commitTarVent":"13556","QuotaAA":23334,"QuotaDG":1555501,"QuotaNeb":176501,"QuotaOxygen":17501,"QuotaPI":26509,"QuotaTherapy":501,"QuotaVent":13556,"wraccountid":"0015500001FIXotAAH","wraccountname":"Rohit Anand Account","wrcurrency":"USD","wroppclosedate":"2021-11-30","wroppmonth":"Nov","wroppname":"SRC_4253","wrparentoppid":"0065500000JkZycAAF","pipelineprob":""},{"actualoxygen":"0.00","actualTarAA":"0.00","actualTarDG":"0.00","actualTarNeb":"0.00","actualTarPI":"0.00","actualTarTherapy":"0.00","actualTarVent":"0.00","bccommitTarPI":26825,"bccommitTarTherapy":7252245,"bcprob":"60","bestcaseopp":"0065500000Jka3SAAR","commitoxygen":"7252245","commitTarAA":"7252245","commitTarDG":"7252245","commitTarNeb":"7252245","commitTarPI":"376663","commitTarTherapy":"376663","commitTarVent":"7252245","QuotaAA":7252245,"QuotaDG":7252245,"QuotaNeb":7252245,"QuotaOxygen":7252245,"QuotaPI":376663,"QuotaTherapy":376663,"QuotaVent":7252245,"wraccountid":"0015500001Hd8aVAAR","wraccountname":"Rohit Test Account 0001","wrcurrency":"USD","wroppclosedate":"2021-11-30","wroppmonth":"Nov","wroppname":"SRC_88","wrparentoppid":"0065500000Jka27AAB","pipelineprob":""},{"actualoxygen":"0.00","actualTarAA":"0.00","actualTarDG":"0.00","actualTarNeb":"0.00","actualTarPI":"0.00","actualTarTherapy":"0.00","actualTarVent":"0.00","bccommitTarPI":1555501,"bccommitTarTherapy":16504,"bcprob":"60","bestcaseopp":"0065500000Jka3YAAR","commitoxygen":"226710","commitTarAA":"45504","commitTarDG":"16504","commitTarNeb":"125022","commitTarPI":"226710","commitTarTherapy":"28510","commitTarVent":"176555","QuotaAA":45504,"QuotaDG":16504,"QuotaNeb":125022,"QuotaOxygen":226710,"QuotaPI":226710,"QuotaTherapy":28510,"QuotaVent":176555,"wraccountid":"0015500001FK8m0AAD","wraccountname":"Anu test act","wraccountsoldto":"1234567890","wrcurrency":"USD","wroppclosedate":"2021-11-30","wroppmonth":"Nov","wroppname":"SRC_3422","wrparentoppid":"0065500000JkZyxAAF","pipelineprob":""},{"actualoxygen":"0.00","actualTarAA":"0.00","actualTarDG":"0.00","actualTarNeb":"0.00","actualTarPI":"0.00","actualTarTherapy":"0.00","actualTarVent":"0.00","bccommitTarPI":1,"bccommitTarTherapy":80,"bcprob":"60","bestcaseopp":"0065500000Jka3TAAR","commitoxygen":"276609","commitTarAA":"226710","commitTarDG":"80","commitTarNeb":"276609","commitTarPI":"30511","commitTarTherapy":"1209","commitTarVent":"15456","QuotaAA":226710,"QuotaDG":80,"QuotaNeb":276609,"QuotaOxygen":276609,"QuotaPI":30511,"QuotaTherapy":1209,"QuotaVent":15456,"wraccountid":"0015500001Hd8mXAAR","wraccountname":"January Test Account 0001","wrcurrency":"USD","wroppclosedate":"2021-11-30","wroppmonth":"Nov","wroppname":"SRC_9551","wrparentoppid":"0065500000JkZzZAAV","pipelineprob":""},{"actualoxygen":"0.00","actualTarAA":"0.00","actualTarDG":"0.00","actualTarNeb":"0.00","actualTarPI":"0.00","actualTarTherapy":"0.00","actualTarVent":"0.00","bccommitTarPI":16504,"bccommitTarTherapy":1,"bcprob":"60","bestcaseopp":"0065500000Jka3XAAR","commitoxygen":"150511","commitTarAA":"2305","commitTarDG":"1","commitTarNeb":"17620","commitTarPI":"864489","commitTarTherapy":"1040214","commitTarVent":"14503","QuotaAA":2305,"QuotaDG":1,"QuotaNeb":17620,"QuotaOxygen":150511,"QuotaPI":864489,"QuotaTherapy":1040214,"QuotaVent":14503,"wraccountid":"0015500001Hd8pDAAR","wraccountname":"May Test Account 0001","wrcurrency":"USD","wroppclosedate":"2021-11-30","wroppmonth":"Nov","wroppname":"SRC_6813","wrparentoppid":"0065500000JkZyGAAV","pipelineprob":""},{"actualoxygen":"0.00","actualTarAA":"0.00","actualTarDG":"0.00","actualTarNeb":"0.00","actualTarPI":"0.00","actualTarTherapy":"0.00","actualTarVent":"0.00","bccommitTarPI":7252245,"bccommitTarTherapy":26825,"bcprob":"60","bestcaseopp":"0065500000Jka3UAAR","commitoxygen":"10","commitTarAA":"26825","commitTarDG":"26825","commitTarNeb":"26825","commitTarPI":"10","commitTarTherapy":"10","commitTarVent":"26825","QuotaAA":26825,"QuotaDG":26825,"QuotaNeb":26825,"QuotaOxygen":10,"QuotaPI":10,"QuotaTherapy":10,"QuotaVent":26825,"wraccountid":"0015500001GasOUAAZ","wraccountname":"Influencer Demo Account","wrcurrency":"USD","wroppclosedate":"2021-11-30","wroppmonth":"Nov","wroppname":"SRC_8851","wrparentoppid":"0065500000Jka1JAAR","pipelineprob":""}]`
SFDCData = JSON.parse(SFDCData);

const data = [
  {
    id: "A",
    fname: "Tony",
    lname: "Stark",
    superName: "IronMan",
    age: 30,
    gender: "M",
    powers: ["inteligence", "money"],
  },
  {
    id: "B",
    fname: "Natasha",
    lname: "Romonov",
    superName: "Black widow",
    age: 23,
    gender: "F",
    powers: ["inteligence", "slow ageing"],
  },
  {
    id: "C",
    fname: "Clint",
    lname: "Barton",
    superName: "HawkEye",
    age: 35,
    gender: "M",
    powers: ["inteligence", "slow ageing", "Archary"],
  },
  {
    id: "E",
    fname: "Thor",
    lname: "Asgardian",
    superName: "Thor",
    age: 100,
    gender: "M",
    powers: ["Lighting", "Super strength", "Hammer"],
  },
];

export default {
  title: "Advanced/Dynamic Table",
  component: DynaTable,
};

export const Basic = () => <DynaTable id="simpleTable" data={data} />;
export const Sortable = () => <DynaTable data={data} sortable={true} />;
//export const SFDCSortable = () => <DynaTable data={SFDCData} sortable={true} />;

export const Selectable = () => (
  <DynaTable
    data={data}
    sortable={true}
    onRowSelected={(row, index) => {
      console.log(row, index);
    }}
  />
);

export const Ediable = () => (
  <DynaTable
    data={data}
    editable={true}
    onTableEditFinish={(arr) => {
      console.log(arr);
    }}
  />
);

export const rowTemplate = () => (
  <DynaTable
    data={data}
    rowTemplate={(rec, index) => (
      <tr>
        <td colspan="7"> {JSON.stringify(rec, "", 4)} </td>
      </tr>
    )}
  />
);


export const headerTemplate = () => (
  <DynaTable
    data={data}
    headerTemplate={(prop, sortable) => (
      <tr>
        <td colspan="7" style={{textAlign: "center" , backgroundColor: 'red' , color: 'white' , fontSize: '20px'}}> <b> {Object.keys(prop).join("--|--")} </b> </td>
      </tr>
    )}
  />
);

// export const Filter = () => <DynaTable data={data} allowFilter={true} />
// export const SortAndFilter = () => <DynaTable data={data} sortable={true} allowFilter={true} />
