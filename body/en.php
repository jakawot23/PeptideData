<?php
    /* body */
    $footerStr = "© 2023 Kasetsart University";
    $bodyStrMain = "Main";
    $bodyStrSearch = "Search";
    $bodyStrBrowse = "Browse";
    $bodyStrAbo = "About us";
    $bodyStrHelp = "Help";

    /* main/index */
    $mainStrMain = "&emsp;Tyrosinase is an enzyme involved in melanin production in the skin. Several hyperpigmentation disorders involve the overproduction of melanin and instability of tyrosinase activity resulting in darker, discolored patches on the skin.
    <br>&emsp;Therefore, discovering tyrosinase inhibitory peptides (TIPs) is of great significance for basic research and clinical treatments. The TIPsDB is the first database for tyrosinase inhibitory peptides collected from all relevent research articles from the past until 2023. Mainly, the database covers all natural or food-derived peptides from plants, animals, and microbes while the rest are synthetic peptides with some modification and conjugations. The informative details regarding the inhibition activity levels, structural info, and physicochemical properties are given in table form which can be easily filtered by the providing search tool.";
    $mainStrKey = "Key Feature";
    $mainLi1 = "Webpage with datatable of TIP and datatable with search tools.";
    $mainLi2 = "Webpage with charts of TIP.";
    $mainStrDes = "Description";
    $mainStrH1 = "Columns in Field";
    $mainStrH2 = "Description";
    $mainArrCol = ["IDs","Sequence","Name","Source","Conformation types","Modification/Conjugation","Length","IC50","Protein source","organism name","organism group","Substrate/enz",
    "Reported Year","Author(Year)","DOI","SMILES","Hydrophobicity","Steric hindrance","Sidebulk","Hydropathicity","Amphipathicity","Hydrophilicity","Net Hydrogen","Charge","pI","MW","Note"];
    $mainArrDes = ["Specific ID names in TIPsDB","peptide sequence","peptide name as reffered to the publications","source of proteins/peptides","linear, cyclic, or conjugated peptides",
    "non-modified or modified with specific compounds","number of amino acid residues","Half maximal inhibitory concentration","original protein source of that peptide","Scientific name of the organisms",
    "class or group of the organisms","The specific activities of anti-tyrosinase assays (L-dopa/mushroom TYR or L-tyrosine /mushroom TYR)","The published year of that peptides","Author names with the published year","Digital Object Identifier of the publications",
    'peptide structure in "Simplified Molecular-Input Line-Entry" formats',"calculated Hydrophobicity score from amino acid sequences","calculated Steric hindrance score from amino acid sequences","calculated Sidebulkscore from amino acid sequences",
    "calculated Hydropathicityscore from amino acid sequences","calculated Amphipathicityscore from amino acid sequences","calculated Hydrophilicityscore from amino acid sequences",
    "calculated Net Hydrogenscore from amino acid sequences","calculated Chargescore from amino acid sequences","calculated isoelectric point (pI) score from amino acid sequences",
    "calculated molecular weight from amino acid sequences","additional details on the experiment e.g. peptide modification or the indication concentration of inhibition levels "];
    $mainArrchangeButton = ["Change to pie charts","Change to bar charts"];

    /* Search */
    $searchStrCon = "Condition";
    $searchStrCal = "Field Column";
    $searchStrOpa = "Operator"; 
    $searchStrData = "Data";
    $searchStrDel = "Delete";
    $searchButtonAdd = "Add";
    $searchButtonSearch = "Search";
    $searchVarLike = "Like";
    $searchVarEqu = "=";
    $searchVarNot = "≠";
    $searchVarLess = "<";
    $searchVarMore = ">";
    $searchVarLessEqu = "<=";
    $searchVarMoreEqu = ">=";
   
    /* Aboutus */
    $aboStrMain = "&emsp;This website is created by Department of Computer Science and Department of Zoology, Faculty of Science, Kasetsart University";
    $aboStrName1 = "Assoc.Prof.Dr. Pramote Chumnanpuen";
    $aboStrName2 = 'Asst.Prof.Dr. Aurawan Imsombut';
    $aboStrName3 = 'Mr. Jakawut Ittidechrat';

    /* Help */
    $helpStrMain = "&emsp;How to use this website. Please Chose page that need help. ";
    $helpStrSearch = "Search";
    $helpStrBrowse = "Browse";
    $helpStrDes1 = "1. Chose Condition, Field Column, Operator and witre Data.
    <br>2. You can add more filters or delete filters.
    <br>3. After complete chose filters, click 'Search'.";
    $helpStrDes2 = "You can search on top right";
?>