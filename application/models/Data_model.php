<?php 
class Data_model extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
		// $this->load->database('default', true);
	}

	// score
	public function scores()
	{
		// var_dump($this->db);
		// $query = $this->db->get('score', 10);
		$r = $this->db->query("SELECT * FROM `score` LIMIT 30 ORDER BY `id` DESC");
		// return $query->result();
		return $r->result();
	}

	// get out put 
	public function getoutput($partment)
	{
		$sql = "SELECT * FROM `class_output` WHERE `partment`=".$partment." ORDER BY `id` DESC LIMIT 20 ";
		$r = $this->db->query($sql);
		return $r->result();
	}
}
