const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
router.get('/shiti',(req,res) => {
	var obj = req.query;
	var sql = 'select * from shiti';
	pool.query(sql,(err,result) => {
		if(err) throw result;
		//console.log(result);
		res.send(result);
		
	});
});
router.get('/mark',(req,res) => {
	var obj = req.query;
	var mark = obj.mark;
	//console.log(mark);
	var sql = 'insert into mark values (?,?)';
pool.query(sql,[null,mark],(err,result) => {
	if(err) throw err;
	//console.log(result);
	res.send('1');
});
});
module.exports = router;
