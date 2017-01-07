<?php
	include('connection.php');
	$sql = "SELECT * FROM contacts";
	$res = $mysqli->query($sql);
	$arrContacts = [];
	while ($row = $res->fetch_array(MYSQL_ASSOC)) {
		$sqlOperator = "SELECT * FROM operators WHERE id = ".$row['operator_id'];
		$resOperator = $mysqli->query($sqlOperator);
		$operator = $resOperator->fetch_assoc();
		$row['name'] = utf8_encode($row['name']);
		$row['operator'] = $operator;
		$arrContacts[] = $row;
	}
	echo json_encode($arrContacts);
?>