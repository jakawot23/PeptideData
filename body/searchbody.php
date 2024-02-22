<?php
    global $searchStrCon,$searchStrCal,$searchStrOpa,$searchStrData,$searchStrDel,$searchButtonAdd,$searchButtonSearch,$searchVarLike,$searchVarEqu,$searchVarNot,$searchVarLess,$searchVarMore,$searchVarLessEqu,$searchVarMoreEqu;
?>

<script>
    var searchStrCon = <?php echo json_encode($searchStrCon); ?>;
    var searchStrCal = <?php echo json_encode($searchStrCal); ?>;
    var searchStrOpa = <?php echo json_encode($searchStrOpa); ?>;
    var searchStrData = <?php echo json_encode($searchStrData); ?>;
    var searchStrDel = <?php echo json_encode($searchStrDel); ?>;
    var searchVarLike = <?php echo json_encode($searchVarLike); ?>;
    var searchVarEqu = <?php echo json_encode($searchVarEqu); ?>;
    var searchVarNot = <?php echo json_encode($searchVarNot); ?>;
    var searchVarLess = <?php echo json_encode($searchVarLess); ?>;
    var searchVarMore = <?php echo json_encode($searchVarMore); ?>;
    var searchVarLessEqu = <?php echo json_encode($searchVarLessEqu); ?>;
    var searchVarMoreEqu = <?php echo json_encode($searchVarMoreEqu); ?>;
</script>

<div id="divsearch" class="container-fluid border border-2 border-dark m-1"></div>

<div id="rowbutton" class="container-fluid row justify-content-center m-1">
    <div class="d-flex col-lg-6 p-1">
        <button id="buttonadd" class="colorBackGray colorBlack buttonGlow border-0 mx-auto"><?php echo $searchButtonAdd ?>
            <i class="bi bi-plus-lg"></i>
        </button>
    </div>
    <div class="d-flex col-lg-6 p-1">
        <button id="buttonsearch" class="colorBackGray colorBlack buttonGlow border-0 mx-auto"><?php echo $searchButtonSearch ?>
            <i class="bi bi-search"></i>
        </button>
    </div>
</div>

<table id="mytablesearch" style="overflow: auto;">
    <thead>
        <tr>
            <th>IDs</th>
            <th>Sequence</th>
            <th>Name</th>
            <th>Source</th>
            <th>Conformation types</th>
            <th>Modification/Conjugation</th>
            <th>Length</th>
            <th>IC50</th>
            <th>Protein source</th>
            <th>organism name</th>
            <th>organism group</th>
            <th>Substratre/enz</th>
            <th>Reported Year</th>
            <th>Author(Year)</th>
            <th>DOI</th>
            <th>SMILES</th>
            <th>Hydrophobicity</th>
            <th>Steric hindrance</th>
            <th>Sidebulk</th>
            <th>Hydropathicity</th>
            <th>Amphipathicity</th>
            <th>Hydrophilicity</th>
            <th>Net Hydrogen</th>
            <th>Charge</th>
            <th>pI</th>
            <th>MW</th>
            <th>Note</th>
            <!--<th>3D Structure</th>-->         
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
<div>
  <p id="loading" style="text-align: center">Loading ...</p>
</div>
<div class="modal fade" id="modalImg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <img id="imgModal" src=# style="width: 100%;"></img>
            </div>
        </div> 
    </div>
</div>
