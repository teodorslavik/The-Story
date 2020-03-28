<?php
session_start();
header("Content-Type: text/html; charset=ISO-8859-2");
$soubor=fopen("pernikova_chaloupka.db.csv", "r");
$title = mb_convert_encoding("Příběh", "ISO-8859-2");

echo ("<html>" .
       "<head>" .
       "<title>$title</title>" .
       "</head>" .
       "<body>");

if (array_key_exists('set-prom1', $_GET)) {
$_SESSION["prom1"] = $_GET['set-prom1'];
header('location: http://teo.jacon.cz/index.php');
exit;
} elseif (!array_key_exists('prom1', $_SESSION)) {
$_SESSION["prom1"] = 9901;
}

echo ("hello world");
/*
$prom1 = $_GET["prom1"];
if($prom1 == null) {
$prom1 = 9901;
}
*/

while (!feof ($soubor)&&$pole[0]!=$prom1) {
$text = fgets($soubor, 50000);
$pole = explode(";",$text);

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
       "<p><a href=\"index.p$$hp?prom1=$pole[6]\">$pole[7]</a></p>" .
       "<p><a href=\"index.php?prom1=$pole[8]\">$pole[9]</a></p>" .
       "<p><a href=\"index.php?prom1=$pole[10]\">$pole[11]</a></p>");
*/
$index_pole = 4;
while ($pole[$index_pole] != null) {
$index_pole_text = $index_pole + 1;
echo ("<p><a href=\"index.php?set-prom1=$pole[$index_pole]\">$pole[$index_pole_text]</a></p>"); 
$index_pole = $index_pole + 2;
}

echo ("</body>" .
       "</html>");

fclose($soubor);
?>
