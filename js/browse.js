const url = "https://script.google.com/macros/s/AKfycbwuFwoh5-CdqwbCY_8wyeywFro_rOR8V-8FebhwML6HQVWgpKpEf8FhyKdkPmmNl1YLrg/exec";

async function findImg(url) {
    const file = await (await fetch(url)).json();
    await file.forEach(function(data, index) {
        var img = data['3D_Structure']
        $.ajax({
            url:'img/3DStructure/'+img+'.jpg',
            type:'HEAD',
            error: function()
            {
            },
            success: function()
            {
                img.push(img);
            }
        });
    });
} 

async function xlsxreader(url) {
    $("#mytablesearch_wrapper").hide();
    $("#mytablesearch").hide();
    const file = await (await fetch(url)).json();
    await $("#mytablesearch").dataTable({
        fixedHeader: {
            header: true,
        },
        "autoWidth": false,
        data: file,
        order: [[0, "asc"]],
        columns: [
            { data: 'IDs', },
            { data: 'Sequence', },
            { data: 'Name' , },
            { data: 'Source' , },
            { data: 'Conformation_types', title: 'Conformation types'},
            { data: 'Modification_Conjugation', title: 'Modification/Conjugation'},
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
            /*{ data: '3D_Structure', title: '3D Structure'
            , render: function(data,type) {
                /*var word = '';*/
                /*$.ajax({
                    url:'img/3DStructure/'+data+'.jpg',
                    type:'HEAD',
                    error: function()
                    {
                    },
                    success: function()
                    {
                        word = "<img src='img/3DStructure/"+data+".jpg' style='width:100px;heigth:100px'></img>"p;
                    }
                });*/
                /*$.ajax({
                    url:'img/3DStructure/'+data+'.png',
                    type:'HEAD',
                    error: function()
                    {
                    },
                    success: function()
                    {
                        return '<p>a<p>'
                        return "<img src='img/3DStructure/"+data+".png' style='width:100px;heigth:100px'></img>";
                    }
                });
                /*return "<img src='img/3DStructure/"+data+".jpg' style='width:100px;heigth:100px'></img>";
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
    await $("#mytablesearch_wrapper").show();
    await $("#mytablesearch").show();
    await $("#loading").hide();
    /*$("table img").click(function () { 
        var imgUrl = $(this).attr("src")
        $("#imgModal").attr({"src":imgUrl});
        $('#modalImg').modal('show');
    });*/
}


$(document).ready(function(){
    findImg(url);
    xlsxreader(url);
});

