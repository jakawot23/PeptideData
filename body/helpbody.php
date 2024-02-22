<?php
    global $helpStrMain,$helpStrSearch,$helpStrBrowse,$helpStrDes1,$helpStrDes2;
?>

<p><?php echo $helpStrMain ?></p>
<br>
<button type="button" id="helpSearch" class="buttonSmall colorBackGray colorBlack buttonGlow" ><?php echo $helpStrSearch ?></button>
<button type="button" id="helpBrowse" class="buttonSmall colorBackGray colorBlack buttonGlow" ><?php echo $helpStrBrowse ?></button>
<div id="divSearch">
    <p><?php echo$helpStrDes1 ?></p>
    <img src="img/HelpSearch.png" style="width: 1000px;">
</div>
<div id="divBrowse">
    <p><?php echo $helpStrDes2 ?></p>
    <img src="img/HelpBrowse.png" style="width: 1000px;">
</div>