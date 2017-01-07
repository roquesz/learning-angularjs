<?php
	include('connection.php');
	$sql = "SELECT * FROM contacts";
	$res = $mysqli->query($sql);
	$arrContacts = [];
	while ($row = $res->fetch_array(MYSQL_ASSOC)) {
		$sqlOperator = "SELECT * FROM operators WHERE id = ".$row['operator_id'];
		$resOperator = $mysqli->query($sqlOperator);
		$operator = $resOperator->fetch_assoc();
		$arrTmp = [
					'id' => $row['id'],
					'name' => utf8_encode($row['name']),
					'phone' => $row['phone'],
					'date' => $row['date'],
					'operator' => [
						'id' => $operator['id'],
						'name' => $operator['name'],
						'category' => $operator['category'],
						'price' => $operator['price'],
					]
				   ];
		array_push($arrContacts, $arrTmp);
	}
	echo json_encode($arrContacts);
?>