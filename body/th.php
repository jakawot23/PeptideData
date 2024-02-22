<?php
    /* body */
    $footerStr = "© 2566 มหาวิทยาลัยเกษตรศาสตร์";
    $bodyStrMain = "หน้าหลัก";
    $bodyStrSearch = "ค้นหา";
    $bodyStrBrowse = "เรียกดู";
    $bodyStrAbo = "เกี่ยวกับเรา";
    $bodyStrHelp = "ช่วยเหลือ";
    
    /* main/index */
    $mainStrMain = "&emsp;ไทโรซิเนสเป็นเอนไซม์ที่เกี่ยวข้องกับการผลิตเมลานินในผิวหนัง ความผิดปกติของรอยดำหลายอย่างเกี่ยวข้องกับการผลิตเมลานินมากเกินไปและความไม่แน่นอนของการทำงานของไทโรซิเนส ส่งผลให้เกิดรอยสีเข้มขึ้นบนผิวหนัง ดังนั้นการค้นพบเปปไทด์ยับยั้งไทโรซิเนส (TIP) จึงมีความสำคัญอย่างยิ่งสำหรับการวิจัยขั้นพื้นฐานและการรักษาทางคลินิก
    <br>&emsp;TIPsDB เป็นฐานข้อมูลเรื่มต้นสำหรับเปปไทด์ยับยั้งไทโรซิเนสที่รวบรวมจากบทความวิจัยที่เกี่ยวข้องทั้งหมดตั้งแต่อดีตจนถึงปี 2566 โดยข้อมูลครอบคลุมเปปไทด์ทั้งหมดจากธรรมชาติหรืออาหารจากพืช สัตว์ และจุลินทรีย์ ในขณะที่ส่วนที่เหลือเป็นเปปไทด์สังเคราะห์ที่มีการดัดแปลงและรวมกัน รายละเอียดเกี่ยวกับระดับกิจกรรมการยับยั้ง ข้อมูลเชิงโครงสร้าง และคุณสมบัติทางเคมีกายภาพมีให้ในรูปแบบตารางซึ่งสามารถกรองได้อย่างง่ายดายด้วยเครื่องมือค้นหา";
    $mainStrKey = "คุณสมบัติที่สำคัญ";
    $mainLi1 = "หน้าเว็บที่มีตารางข้อมูลของ TIP และตารางข้อมูล TIP ที่สามารถค้นหา";
    $mainLi2 = "หน้าเว็บที่มีแผนภาพสถิติของ TIP";
    $mainStrDes = "นิยามศัพท์เฉพาะ";
    $mainStrH1 = "คอลัมน์ในตาราง";
    $mainStrH2 = "ความหมาย";
    $mainArrCol = ["IDs","Sequence","Name","Source","Conformation types","Modification/Conjugation","Length","IC50","Protein source","organism name","organism group","Substrate/enz",
    "Reported Year","Author(Year)","DOI","SMILES","Hydrophobicity","Steric hindrance","Sidebulk","Hydropathicity","Amphipathicity","Hydrophilicity","Net Hydrogen","Charge","pI","MW","Note"];
    $mainArrDes = ["Specific ID names in TIPsDB","peptide sequence","peptide name as reffered to the publications","source of proteins/peptides","linear, cyclic, or conjugated peptides",
    "non-modified or modified with specific compounds","number of amino acid residues","Half maximal inhibitory concentration","original protein source of that peptide","Scientific name of the organisms",
    "class or group of the organisms","The specific activities of anti-tyrosinase assays (L-dopa/mushroom TYR or L-tyrosine /mushroom TYR)","The published year of that peptides","Author names with the published year","Digital Object Identifier of the publications",
    'peptide structure in "Simplified Molecular-Input Line-Entry" formats',"calculated Hydrophobicity score from amino acid sequences","calculated Steric hindrance score from amino acid sequences","calculated Sidebulkscore from amino acid sequences",
    "calculated Hydropathicityscore from amino acid sequences","calculated Amphipathicityscore from amino acid sequences","calculated Hydrophilicityscore from amino acid sequences",
    "calculated Net Hydrogenscore from amino acid sequences","calculated Chargescore from amino acid sequences","calculated isoelectric point (pI) score from amino acid sequences",
    "calculated molecular weight from amino acid sequences","additional details on the experiment e.g. peptide modification or the indication concentration of inhibition levels "];
    $mainArrchangeButton = ["เปลี่ยนเป็นภาพสถิติวงกลม","เปลี่ยนเป็นภาพสถิติแท่ง"];

    /* Search */
    $searchStrCon = "เงื่อนไข";
    $searchStrCal = "คอลัมน์ที่ค้นหา";
    $searchStrOpa = "ตัวดำเนินการ"; 
    $searchStrData = "ข้อมูล";
    $searchStrDel = "ลบ";
    $searchButtonAdd = "เพิ่ม";
    $searchButtonSearch = "ค้นหา";
    $searchVarLike = "มีส่วนหนึ่ง";
    $searchVarEqu = "=";
    $searchVarNot = "≠";
    $searchVarLess = "<";
    $searchVarMore = ">";
    $searchVarLessEqu = "<=";
    $searchVarMoreEqu = ">=";
   
    /* Aboutus */
    $aboStrMain = "&emsp;เว็บไซต์นี้จัดทำโดย ภาควิชาวิทยาการคอมพิวเตอร์ และ ภาควิชาสัตววิทยา คณะวิทยาศาสตร์ มหาวิทยาลัยเกษตรศาสตร์";
    $aboStrName1 = "รศ.ดร.ปราโมทย์ ชำนาญปืน";
    $aboStrName2 = 'ผศ.ดร. อรวรรณ อิ่มสมบัต';
    $aboStrName3 = 'นาย จักรวุฒิ อิทธิเดชรัตน์';

    /* Help */
    $helpStrMain = "&emsp;วิธีใช้เว็บไซด์นี้ กรุณาเลือกหน้าที่ต้องการช่วยเหลือ";
    $helpStrSearch = "ค้นหา";
    $helpStrBrowse = "เรียกดู";
    $helpStrDes1 = "1. เลือก เงื่อนไข, คอลัมน์ที่ค้นหา, ตัวดำเนินการ และเขียนข้อมูล
    <br>2. คุณสามารถเพื่มตัวกรอง หรือลบตัวกรองได้.
    <br>3. หลังจากเลือกตัวกรองเสร็จแล้้ว กดปุ่ม'ค้นหา'.";
    $helpStrDes2 = "คุณสามารถใช้ช่องต้นหาที่อยู่บนซ้าย";

?>