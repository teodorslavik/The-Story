<?php 
	function getIndex($namos, $contentsDecoded){

		for ($i=0; $i < sizeof($contentsDecoded); $i++) { 
			if ($contentsDecoded[$i]["name"] == $namos){
				$databaseIndex = $i;
			}
		}
		return $databaseIndex;
	}

	function read_and_delete_first_line($filename) {
	  $file = file($filename);
	  $output = $file[0];
	  unset($file[0]);
	  file_put_contents($filename, $file);
	  return $output;
	}

	function handleCurrentGrid($var) {
		echo("current gridSize: ");
		if ($_POST["gridSizeForm"] ==  null){
			echo($var);
		}else {
			echo($_POST["gridSizeForm"]);
		}
	}
	function deleteRecord($index, $contentsDecoded, $databaseIndex){
		$src = "/Users/tedy/support_tv_view/mein-app/src/data.js";
		$NewField = ["0"];
		$c = 0; 
		$x = 0;
		while($x < sizeof($contentsDecoded[$databaseIndex]["urls"])){
			if($x == $index){
				$x = $x + 1;
			}else {
				$NewField[$c] =  $contentsDecoded[$databaseIndex]["urls"][$x];
				$x = $x + 1;
				$c = $c + 1;
			}
		}
		return $NewField;
	}
	function buildTable($contentsDecoded, $databaseIndex){
		echo("<table class='table'>");
		echo("<tr>");
		echo("<td> INDEX </td>");
		echo("<td> URL </td>");
		echo("</tr>");

		for ($i=0; $i < sizeof($contentsDecoded[$databaseIndex]["urls"]); $i++) {
			echo("<tr>");
			echo("<td>".($i + 1)."</td>");
			echo("<td>".$contentsDecoded[$databaseIndex]["urls"][$i]."</td>");
			echo("</tr>");
		}
			echo("</table>");
	}


if(!isset($_POST['number'])) {
  echo($_POST['number']);
}

$databaseIndex = 0;

$src = "/Users/tedy/support_tv_view/mein-app/public/data.js";
$login = true;
$name = "Jan";
read_and_delete_first_line($src);
$contents = file_get_contents($src);
$contentsDecoded = json_decode($contents, true);
$databaseIndex = getIndex($name, $contentsDecoded);
setcookie("boom", json_encode($contentsDecoded[$databaseIndex]), time() + 5000, "/");
?>

<html>
<head>
<link rel="stylesheet" href="./styles.css" media="screen">
<?php
if ($login == false){
	echo("To proceed to SOvA, please login to GITLab");
	echo("<br>");
	echo("<br>");
	echo("<br>");
	echo("<form method='post'>
			<input type='submit' name='submitus' value='login'>
		</form>");

}
/*if(isset($_POST['submitus'])){
$client = new Gitlab\Client();
$client->setUrl('https://repo.jacon.cz/');
$client->authenticate('glpat-Hr9sGJQAi3vxqsbn8yoo', Gitlab\Client::AUTH_HTTP_TOKEN);

}*/
if($login == true) {
	handleCurrentGrid($contentsDecoded[$databaseIndex]["gridSize"]);
	if(isset($_COOKIE["testCOOKIE"])) {
	  echo "Cookie named testCOOKIE is set!";
	  echo "</br>";
	}

	echo("	<form method='post'>
	New gridSize: <input type='number' min='1' name='gridSizeForm'> <br>
	<input type='submit'>
	</form>");
	if ($_POST["gridSizeForm"] != null and $_POST["gridSizeForm"] != ""){
		$contentsDecoded[$databaseIndex]["gridSize"] = $_POST["gridSizeForm"];
		 echo "<meta http-equiv='refresh' content='0'>";
	}
	echo("<br>");
	$maxVar = sizeof($contentsDecoded[$databaseIndex]["urls"]);
	echo("<form method='post'>
	Write which index to delete: <input type='number' name='deleteIndex'> <br>
	<input type='submit'>
	</form>");
	echo("</br>");
	echo("</br>");
	echo("<form method='post'>
	To add new screen, insert URL here: <input type='text' name='addURL'> <br>
	<input type='submit'>
	</form>");
	if ($_POST["deleteIndex"] != null and $_POST["deleteIndex"] != ""){
		$maxVar = sizeof($contentsDecoded[$databaseIndex]["urls"]);
		$contentsDecoded[$databaseIndex]["urls"] = deleteRecord($_POST["deleteIndex"] - 1, $contentsDecoded, $databaseIndex);	
		buildTable($contentsDecoded, $databaseIndex);
		echo "<meta http-equiv='refresh' content='0'>";
	}else if ($_POST["addURL"] != null and $_POST["addURL"] != "") {
		$maxVar = sizeof($contentsDecoded[$databaseIndex]["urls"]);
		$size = sizeof($contentsDecoded[$databaseIndex]["urls"]);
		$contentsDecoded[$databaseIndex]["urls"][] = $_POST["addURL"];
		buildTable($contentsDecoded, $databaseIndex);
		 echo "<meta http-equiv='refresh' content='0'>";
	}else {
		echo("<br>");
		echo("<br>");
		buildTable($contentsDecoded, $databaseIndex);
		echo("</br>");
		echo("</br>");
	}

	$json = json_encode($contentsDecoded);
	file_put_contents($src, $json);
	$file_data = "export const userData =\n";
	$file_data .= file_get_contents($src);
	file_put_contents($src, $file_data);
	echo("<a href='../build/index.html'>back to view</a>");
}
?>
</head>
</html>