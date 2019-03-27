<?php

class Database {
    private $host = 'localhost';
    private $db_name = 'oskartestdb';
    private $username = 'root';
    private $password = 'root';
    private $conn;

    public function connect() {
        $this->conn = null;

        try {
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name . ';charset=utf8',
            $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOExeption $e){
            echo 'Connection Error' . $e->getMessage();
        }

        return $this->conn;
    }
}

?>