<?php
    global $mainStrMain,$mainStrKey,$mainLi1,$mainLi2,$mainStrDes,$mainStrH1,$mainStrH2,$mainArrCol,$mainArrDes,$mainArrchangeButton;
?>
<script>
    var mainArrchangeButton = <?php echo json_encode($mainArrchangeButton); ?>;
</script>
<p><?php echo $mainStrMain ?></p>
<br>
<!-- chart -->
<div class="container-fluid">
    <div class="row container-fluid justify-content-center">
        <div class="d-flex col-lg-6">
            <canvas id="chartPlaceSou" style="height: 500px"></canvas>
        </div>
        <div class="d-flex col-lg-6">
            <canvas id="chartPlaceCon" style="height: 500px"></canvas>
        </div>
        <div class="d-flex col-lg-6" >
            <canvas id="chartPlaceMod" style="height: 500px"></canvas>
        </div>
        <div class="d-flex col-lg-6">
            <canvas id="createChartLen" style="height: 500px"></canvas>
        </div>
        <div class="d-flex col-lg-6">
            <canvas id="chartPlacePro" style="height: 500px"></canvas>
        </div>
        <div class="d-flex col-lg-6">
            <canvas id="chartPlaceOrgN" style="height: 500px"></canvas>
        </div>
        <div class="d-flex col-lg-6">
            <canvas id="chartPlaceOrgG" style="height: 500px"></canvas>
        </div>
        <br>
        <div class="d-flex col-lg-12">
            <button id="buttonChange" type="button" class="colorBackGray colorBlack buttonGlow border-0 mx-auto" ><?php echo $mainArrchangeButton[0] ?></button>
        </div>
    </div>
</div>
<br>
<!-- decs -->
<p><b><?php echo $mainStrKey ?></b></p>
<ol>
    <li><?php echo $mainLi1 ?></li>
    <li><?php echo $mainLi2 ?></li>
</ol>
<br>
<!-- table -->
<p><b><?php echo $mainStrDes ;?></b></p>
<table style="width:100%;">
    <thead>
    <tr>
        <th class="px-1" style="width:20%;" ><?php echo $mainStrH1 ?></th>
        <th class="px-1" style="width:80%;" ><?php echo $mainStrH2 ?></th>
    </tr>
    </thead>
    <tbody>
    <?php 
        for ($x = 0;$x < count($mainArrCol);$x++)
        {
            echo"<tr><td class='px-1' >$mainArrCol[$x]</td><td class='px-1' >$mainArrDes[$x]</td></tr>";
        }
    ?>
    </tbody>
</table>


 