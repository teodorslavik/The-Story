<?php

$soubor=fopen("pernikova_chaloupka.db", "r");
$title = "pernikova chaloupka"; 

echo ("<html>" .
       "<head>" .   
       "<title>$title</title>" .
       "</head>" .
       "<body>");

//$prom1 = 1;
$prom1 = $_GET["prom1"];
if($prom1 == null) {
$prom1 = 33;
}
//echo ("$prom1");

while (!feof ($soubor)&&$pole[0]!=$prom1) {
$text = fgets($soubor, 1000);
$pole=explode(";",$text);

}

echo ("<h1>$pole[1]</h1>");
echo ("<br />");
echo ("<img src=\"$pole[2]\">");
echo ("<br />");
echo ("<b>$pole[3]</b>");
echo ("<br />");
/*
echo ("<br />" .
       "<p><a href=\"index.php?prom1=$pole[4]\">$pole[5]</a></p>" .
       "<p><a href=\"index.php?prom1=$pole[6]\">$pole[7]</a></p>" .
       "<p><a href=\"index.php?prom1=$pole[8]\">$pole[9]</a></p>" .
       "<p><a href=\"index.php?prom1=$pole[10]\">$pole[11]</a></p>");
*/
$index_pole = 4;
while ($pole[$index_pole] != null) {
$index_pole_text = $index_pole + 1;
echo ("<p><a href=\"index.php?prom1=$pole[$index_pole]\">$pole[$index_pole_text]</a></p>"); 
$index_pole = $index_pole + 2;
}

echo ("</body>" .
       "</html>");

fclose($soubor);
?>
