$(document).ready(function(){
    $("#divSearch").hide();
    $("#divBrowse").hide();
    $("#helpSearch").click(function (){
        $("#divSearch").show();
        $("#divBrowse").hide();
    })
    $("#helpBrowse").click(function (){
        $("#divBrowse").show();
        $("#divSearch").hide();
    })
});