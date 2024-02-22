const url = "https://script.google.com/macros/s/AKfycbwuFwoh5-CdqwbCY_8wyeywFro_rOR8V-8FebhwML6HQVWgpKpEf8FhyKdkPmmNl1YLrg/exec";
var numberTable = 0;
var tableArr = [];
var conarr;
var calarr;
var opaarr;
var table = $("#mytablesearch").DataTable
var filter = [];
var arrData = [];
var boo = true;
var urlfile;

function createDropDownCon(num) {
    $("#rowCon"+num+" div:eq(1)").append("<div/>");
        $("#rowCon"+num+" div:eq(1) div").attr({"style":"width:100%;margin:auto"});
        $("#rowCon"+num+" div:eq(1) div").append("<select/>");
            $("#rowCon"+num+" select").attr({"class":"m-1 border-1 text-wrap form-select container-fluid rounded-0"});
            for (var con in conarr){
                $("#rowCon"+num+" select").append("<option><p class='center p-1'>"+con+"</p></option>");
            };
};

function createDropDownCal(num) {
    $("#rowCal"+num+" div:eq(1)").append("<div/>");
        $("#rowCal"+num+" div:eq(1) div").attr({"style":"width:100%;margin:auto"});
        $("#rowCal"+num+" div:eq(1) div").append("<select/>");
            $("#rowCal"+num+" select").attr({"class":"m-1 border-1 text-wrap form-select container-fluid rounded-0"});
            for (var cal in calarr){
                $("#rowCal"+num+" select").append("<option><p class='center p-1'>"+cal+"</p></option>");
            };
};

function createDropDownOpa(num) {
    $("#rowOpa"+num+" div:eq(1)").append("<div/>");
        $("#rowOpa"+num+" div:eq(1) div").attr({"style":"width:100%;margin:auto"});
        $("#rowOpa"+num+" div:eq(1) div").append("<select/>");
            $("#rowOpa"+num+" select").attr({"class":"m-1 border-1 text-wrap form-select container-fluid rounded-0"});
            for (var opa of opaarr){
                $("#rowOpa"+num+" select").append("<option><p class='center p-1'>"+opa+"</p></option>");
            };

};

function createTableSearch() {
    const num = numberTable;
    if (num != 0) {
        $("#divsearch").append("<hr class ='m-1'>");
    }
    $("#divsearch").append("<div id='tablesearch"+num+"' class='d-flex container-fluid row m-1 center border border-0'></div>");
        $("#tablesearch"+num).append("<div/>");
        $("#tablesearch"+num).append("<div/>");
        $("#tablesearch"+num).append("<div/>");
        $("#tablesearch"+num).append("<div/>");
        $("#tablesearch"+num).append("<div/>");
            $("#tablesearch"+num+" div:eq(0)").attr({"id":"rowCon"+num,"class":"d-flex align-items-center col-lg-2 row","style":'heigth:100%'});
            $("#tablesearch"+num+" div:eq(1)").attr({"id":"rowCal"+num,"class":"d-flex flex-fill align-items-center col-lg-2 row","style":'heigth:100%'});
            $("#tablesearch"+num+" div:eq(2)").attr({"id":"rowOpa"+num,"class":"d-flex flex-fill align-items-center col-lg-2 row","style":'heigth:100%'});
            $("#tablesearch"+num+" div:eq(3)").attr({"id":"rowData"+num,"class":"d-flex flex-fill align-items-center col-lg-2 row","style":'heigth:100%'});
            $("#tablesearch"+num+" div:eq(4)").attr({"id":"rowDel"+num,"class":"d-flex align-items-center col-lg-2 row","style":'heigth:100%'});
            if (num != 0) {
            $("#rowCon"+num).append("<div/>");
            $("#rowCon"+num).append("<div/>");
                $("#rowCon"+num+" div:eq(0)").attr({"class":"col-4 p-1 container-fluid text-end align-middle","style":"heigth:100%"}).text(searchStrCon);
                $("#rowCon"+num+" div:eq(1)").attr({"class":"col-8 p-1 container-fluid"});
                 createDropDownCon(num);
            }
            $("#rowCal"+num).append("<div/>");
            $("#rowCal"+num).append("<div/>");
                $("#rowCal"+num+" div:eq(0)").attr({"class":"col-4 p-1 container-fluid text-end align-middle","style":"heigth:100%"}).text(searchStrCal);
                $("#rowCal"+num+" div:eq(1)").attr({"class":"col-8 p-1 container-fluid"});
                createDropDownCal(num);
            $("#rowOpa"+num).append("<div/>");
            $("#rowOpa"+num).append("<div/>");
                $("#rowOpa"+num+" div:eq(0)").attr({"class":"col-4 p-1 container-fluid text-end align-middle center","style":"heigth:100%"}).text(searchStrOpa);
                $("#rowOpa"+num+" div:eq(1)").attr({"class":"col-8 p-1 container-fluid"});
                createDropDownOpa(num);
            $("#rowData"+num).append("<div/>");
            $("#rowData"+num).append("<div/>");
                $("#rowData"+num+" div:eq(0)").attr({"class":"col-2 p-1 container-fluid text-end align-middle","style":"heigth:100%"}).text(searchStrData);
                $("#rowData"+num+" div:eq(1)").attr({"class":"col-10 p-1 container-fluid"});
                $("#rowData"+num+" div:eq(1)").append("<input/>")
                    $("#rowData"+num+" input").attr({"type":"text","class":"container-fluid border border-1 border-light-subtle"})
            if (num != 0) {
            $("#rowDel"+num).append("<div/>");
                $("#rowDel"+num+" div:eq(0)").attr({"class":"center container-fluid d-flex justify-content-center align-items-start","style":"width:100%"});
                $("#rowDel"+num+" div:eq(0)").append("<button/>");
                $("#rowDel"+num+" button").attr({"class":"colorBackGray colorBlack buttonGlow border border-0 px-2 my-1"});
                $("#rowDel"+num+" button").text(searchStrDel);
                $("#rowDel"+num+" button").append("<i class='bi bi-trash'></i>");
                $("#rowDel"+num+" button").click(function () {  
                    tableArr.slice(tableArr.findIndex(function (x) {
                        return x == num;
                    }),1);
                    $("#tablesearch"+num).remove();
                })
            }
    updateTable();
    tableArr.push(num);
    numberTable++;
};

async function urlreader(url) {
    $("#mytablesearch_wrapper").hide();
    $("#mytablesearch").hide();
    $("#loading").show();
    urlfile = await (await fetch(url)).json();
    createTable(urlfile);
}

function createFilter(){
    filter = [];
    let cal;
    for (num of tableArr) {
        var smallfilter = [];
        if (num != 0) {
            smallfilter.push($("#rowCon"+num+" select option:selected").text());
        } else {
            smallfilter.push("And");
        }
        cal = ($("#rowCal"+num+" select option:selected").text());
        smallfilter.push(calarr[cal]);
        opa = ($("#rowOpa"+num+" select option:selected").text());;
        smallfilter.push(opa);
        smallfilter.push($("#rowData"+num+" input").val());
        
        filter.push(smallfilter);
    };
    // should get [[con,callum,opator,data][and,1,like,"abc"]]
}

function createTable(urlfile) {
    table = $("#mytablesearch").DataTable({
        fixedHeader: {
            header: true,
        },
        "autoWidth": false,
        data: urlfile,
        order: [[0, "asc"]],
        columns: [
            { data: 'IDs', },
            { data: 'Sequence', },
            { data: 'Name' , },
            { data: 'Source' , },
            { data: 'Conformation_types', title: 'Conformation types'},
            { data: 'Modification_Conjugation' , title: 'Modification/Conjugation'},
            { data: 'Length' },
            { data: 'IC50', },
            { data: 'Protein_source', title: 'Protein source'},
            { data: 'organism_name', title: 'Organism name'},
            { data: 'organism_group', title: 'Organism group'},
            { data: 'Substratre/enz' },
            { data: 'Reported_Year', title: 'Reported Year'},
            { data: 'Author(Year)' },
            { data: 'DOI', },
            { data: 'SMILES', },
            { data: 'Hydrophobicity' },
            { data: 'Steric_hindrance', title: 'Steric hindrance'},
            { data: 'Sidebulk' },
            { data: 'Hydropathicity' },
            { data: 'Amphipathicity' },
            { data: 'Hydrophilicity' },
            { data: 'Net_Hydrogen', title: 'Net Hydrogen'},
            { data: 'Charge' },
            { data: 'pI' },
            { data: 'MW' },
            { data: 'Note' },
            /*{ data: '3DStructure' 
            , render: function(data,type) {
                if (data != "") {
                    return "<img src='img/3DStructure/"+data+"'data-toggle='modal' data-target='#modalImg' style='width:100px;heigth:100px'></img>";
                    }
                }
            },*/
        ],
        columnDefs: [
            {
               targets: '_all',
               defaultContent: ''
            }
        ],
        className : 'compact',
        "bAutoWidth": false,
        "responsive": true,
        "pageLength": 5,
        "lengthMenu": [ [5, 10, 25, 50, -1], [5, 10, 25, 50, "All"] ]
    });
    $("#mytablesearch_filter").hide();
    $("#loading").hide();
    $("#mytablesearch").show();
    $("#mytablesearch_wrapper").show();
    if ($("#mytablesearch_paginate span a").length == 0) {
        $("#mytablesearch_paginate").hide();
    }
    $("table img").click(function () { 
        var imgUrl = $(this).attr("src")
        $("#imgModal").attr({"src":imgUrl});
        $('#modalImg').modal('show');
    });
}

function isNumberColumn(x) {
    var fil = filter[x][1];
    //numbercolumn is 'Length':6, 'Reported Year':12, 'Hydrophobicity':16, 'Steric hindrance':17, 'Sidebulk':18, 'Hydropathicity':19, 'Amphipathicity':20, 'Hydrophilicity':21, 'Net Hydrogen':22, 'Charge':23, 'pI':24, 'MW':25
    return (fil == 6) || (fil == 12) || (fil == 16) || (fil == 17) || (fil == 18) || (fil == 19) || (fil == 20) || (fil == 21) || (fil == 22) || (fil == 23) || (fil == 24) || (fil == 25);
}

function popAndFilter() {
    $.fn.DataTable.ext.search.pop();
    $.fn.DataTable.ext.search.push(function( settings, searchData, index, rowData, counter ) {
        function filterCon(searchData,x) {
            if (x == 0) {
                    boo = filterOpa(searchData,x);
                    return boo;
                } else {
                switch (filter[x][0]) {
                    //calarr
                    case "And" :
                        boo = boo && filterOpa(searchData,x);
                        break;
                    case "Or" :
                        boo = boo || filterOpa(searchData,x);
                        break;
                    case "Not" :
                        boo = boo  && (!filterOpa(searchData,x));
                        break;
                }
            }
        }
        function filterOpa(searchData,x) {
            var data = searchData[parseInt(filter[x][1])];
            var fil = filter[x][3];
            if (filter[x][3] == "") {
                return true;
            }
            function dataToInt(x) {
                return isNumberColumn(x) ? parseInt(data) : data.toString();
            }
            function filterToInt(x) {
                return isNumberColumn(x) ? parseInt(fil) : fil.toString();
            }
            switch (filter[x][2]) {
                case searchVarLike :
                    return data.toString().includes(fil.toString());
                case searchVarEqu :
                    return dataToInt(x) == filterToInt(x);
                case searchVarMore :
                    return dataToInt(x) > filterToInt(x);
                case searchVarLess :
                    return dataToInt(x) < filterToInt(x);
                case searchVarMoreEqu :
                    return dataToInt(x) >= filterToInt(x);
                case searchVarLessEqu :
                    return dataToInt(x) <= filterToInt(x);
                case searchVarNot :
                    return dataToInt(x) != filterToInt(x);
                
            };
        };
        
        for (var x = 0;x < filter.length;x++) {
            filterCon(searchData,x);
        }
        return boo;

    });
    table.draw();
    }

function updateTable(){
    if ($("[id^=tablesearch]").length <= 1) {
        $("[id^=rowCon]").hide();
        $("[id^=rowDel]").hide();
    } else {
        $("[id^=rowCon]").show();
        $("[id^=rowDel]").show();
    }
};

$(document).ready(function(){
    conarr = {"And":"And","Or":"Or","Not":"Not"};
    calarr = {'Sequence':1,'Name':2, 'Source':3, 'Conformation types':4, 'Modification/Conjugation':5, 'Length':6, 'Protein source':8, 'Organism name':9, 'Organism group':10, 'Substratre/enz':11, 'Reported Year':12, 'Author(Year)':13, 'Hydrophobicity':16, 'Steric hindrance':17, 'Sidebulk':18, 'Hydropathicity':19, 'Amphipathicity':20, 'Hydrophilicity':21, 'Net Hydrogen':22, 'Charge':23, 'pI':24, 'MW':25};
    opaarr = [searchVarLike,searchVarEqu,searchVarNot,searchVarLess,searchVarMore,searchVarLessEqu,searchVarMoreEqu];
    

    createTableSearch();
    urlreader(url);
    $("#buttonadd").click(function (){
        createTableSearch();
    });
    $("#buttonsearch").click(function (){
        table.destroy();
        urlreader(url);
        createFilter();
        popAndFilter();
    });
});

