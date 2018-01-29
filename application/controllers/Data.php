<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Data extends CI_Controller 
{

	public function __construct()
	{
		parent::__construct();
	}
	
	public function index()
	{
		$this->load->view('baseview/header');
		$this->load->view('data/index');
		$this->load->view('baseview/footer');
	}

	// 查看兴趣点
	public function countfavor()
	{
		$parm = $_GET['parm'];
		$types='100000|110000|120000|130000|140000|150000|160000|170000|180000|190000|200000|220000|900000|970000|010000|020000|030000|040000|050000|060000|070000|080000|090000';
		$url = "http://restapi.amap.com/v3/place/polygon?polygon=".$parm."&types=".$types."&&output=JSON&key=efa1dc4fe489422c69095d918837e613";
		$content = file_get_contents($url);
		$content = json_decode($content);
		echo $content->count;
	}
}
