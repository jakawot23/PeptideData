<?php
    global $footerStr,$bodyStrMain,$bodyStrSearch,$bodyStrBrowse,$bodyStrAbo,$bodyStrHelp,$bodyStrBLAST;

    require "body/menucode.php";
    $page = basename($_SERVER['PHP_SELF'], '.php');

    function bodymain($page) {
        switch ($page) {
            case "index":
                require "body/mainbody.php";
                break;
            case "search":
                require "body/searchbody.php";
                break;
            case "browse":
                require "body/browsebody.php";
                break;
            case "aboutus":
                require "body/aboutusbody.php";
                break;
            case "help":
                require "body/helpbody.php";
                break;  
        }
    }
?>

<!--Main-->
<div class="d-flex flex-column container-fluid p-0" style="min-height: 100vh!important;">
    <!--Main Column-->
    <div id="mainColumn" class="p-2 flex-fill" style="order: 2">
        <?php
            bodymain($page);
        ?>
    </div>
    <!--Header-->
    <header class="colorBackGreen d-flex" style="top: 0; left: 0; position: -webkit-sticky; position: sticky; order: 1;">
        <div class="d-flex row container-fluid flex-nowrap" >
            <!--Logo-->
            <div class="colorBackWhite d-inline-flex p-0" style="width: min-content;">
                <img src="img/900px-KU_SubLogo_Thai.png" alt="KU" class="center" style="width: 50px;height: 50px; ">
                <img src="img/TIPsDP.png" alt="TIPsDP" class="center" style="width: 100px;height: 50px; ">
            </div>
            <!--Nevbar-->
            <dev class="d-inline-flex p-0 ms-4 nevbarMedia" style="width: auto;display: none;" >
                <form method="post" class="d-inline-flex p-0">
                    <input type="submit" name="main" value="<?php echo $bodyStrMain ?>" class='center colorBackGreen colorWhite px-2' style=' <?php if($page=="index"){echo "text-decoration: underline;";} ?> text-align: center; height: 50px; width: auto; border: none;'></input>
                    <input type="submit" name="search" value="<?php echo $bodyStrSearch ?>" class='center colorBackGreen colorWhite px-2' style=' <?php if($page=="search"){echo "text-decoration: underline;";} ?> text-align: center; height: 50px; width: auto; border: none;'></input>
                    <input type="submit" name="browse" value="<?php echo $bodyStrBrowse ?>" class='center colorBackGreen colorWhite px-2' style=' <?php if($page=="browse"){echo "text-decoration: underline;";} ?> text-align: center; height: 50px; width: auto; border: none;'></input>
                    <div class='d-flex align-items-center px-2 my-0'>
                        <a href="https://pmlabstack.pythonanywhere.com/TIPred?fbclid=IwAR0bqx5zivq4HbxPdylesXzptgreIMw4PyL-eKfUqzAGuU1azBRbqLkAmj8" target="_blank" style='display: flex;align-items: center; height: 50px; width: auto; border: none; text-decoration: none;' class='colorBackGreen colorWhite '>TIPred</a>
                    </div>
                    <input type="submit" name="aboutus" value="<?php echo $bodyStrAbo ?>" class='center colorBackGreen colorWhite px-2' style=' <?php if($page=="aboutus"){echo "text-decoration: underline;";} ?> text-align: center; height: 50px; width: auto; border: none;'></input>
                    <input type="submit" name="help" value="<?php echo $bodyStrHelp ?>" class='center colorBackGreen colorWhite px-2' style=' <?php if($page=="help"){echo "text-decoration: underline;";} ?> text-align: center; height: 50px; width: auto; border: none;'></input>
                </form>
                </dev>
            <!--Menu Button Bar-->
            <div class="d-inline-flex ms-auto px-2" style="width: auto;" >
                <button class="border-0 colorBackWhite buttonMediaMain buttonGlow" type="button" data-bs-toggle="offcanvas" data-bs-target="#meun" style="width: 50px; height: 50px;">
                    <i class="bi bi-list"></i>
                </button>
                <a href="change.php?lang=TH" class="colorWhite px-1" style="height: 100%;display: flex;align-items: center;width: auto;">TH</a>
                <p style="width: auto;display: flex;align-items: center;" >/</p>
                <a href="change.php?lang=EN" class="colorWhite px-1" style="height: 100%;display: flex;align-items: center;width: auto;">EN</a>
            </div>
        </div>
    </header>
    <!--Footer-->
    <footer class="colorBackGreen mt-auto" style="bottom: 0; left: 0; order: 3;">
        <p class="colorWhite" style="height: 50px;display: flex;align-items: center;margin-left: 50px;white-space: nowrap;"><?php echo $footerStr ?></p>
    </footer>
</div>

<!--Meun Offcanvas Sidebar-->
<div class="offcanvas offcanvas-start setpm" id="meun">
    <div class="buttonMain offcanvas-header setpm center colorBackWhite">
        <button type="button" class="btn-close text-reset setpm colorBackWhite" data-bs-dismiss="offcanvas" style=" width: 100px; flex: 0 1 50px;"></button>
    </div>
    <div class="offcanvas-body setpm colorBackWhite">
        <form method="post" class="setpm" >
            <input type="submit" name="main" value="<?php echo $bodyStrMain ?>" class='buttonMain center colorBackWhite colorBlack buttonGlow' style=' <?php if($page=="index"){echo "text-decoration: underline;";} ?> text-align: center;'>
            <input type="submit" name="search" value="<?php echo $bodyStrSearch ?>" class='buttonMain center colorBackWhite colorBlack buttonGlow' style=' <?php if($page=="search"){echo "text-decoration: underline;";} ?> text-align: center;'>
            <input type="submit" name="browse" value="<?php echo $bodyStrBrowse ?>" class='buttonMain center colorBackWhite colorBlack buttonGlow' style=' <?php if($page=="browse"){echo "text-decoration: underline;";} ?> text-align: center;'>
            <div class='buttonMain d-flex align-items-center justify-content-center' style="text-align: center">
                <a href="https://pmlabstack.pythonanywhere.com/TIPred?fbclid=IwAR0bqx5zivq4HbxPdylesXzptgreIMw4PyL-eKfUqzAGuU1azBRbqLkAmj8" target="_blank" style='text-decoration: none;' class='colorBackWhite colorBlack'>TIPred</a>
            </div>
            <input type="submit" name="aboutus" value="<?php echo $bodyStrAbo ?>" class='buttonMain center colorBackWhite colorBlack buttonGlow' style=' <?php if($page=="aboutus"){echo "text-decoration: underline;";} ?> text-align: center;'>
            <input type="submit" name="help" value="<?php echo $bodyStrHelp ?>" class='buttonMain center colorBackWhite colorBlack buttonGlow' style=' <?php if($page=="help"){echo "text-decoration: underline;";} ?> text-align: center;'>
        </form>
    </div>
</div>



