<?php
	include('connection.php');
	$sql = "SELECT * FROM operators";
	$res = $mysqli->query($sql);
	$operatorsArr = [];
	while ($row = $res->fetch_assoc()) {
		$operatorsArr[] = $row;
	}
	echo json_encode($operatorsArr);
?>