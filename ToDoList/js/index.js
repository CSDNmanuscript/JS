var KEY='TaskList';
$(function(){
	$('a[data-cmd]').click(function(){
		var $target=$(this);
		var pageId=$target.attr("data-cmd");
		$('section').hide();
		$('#'+pageId).show();
		$('a[data-cmd]').removeClass('one');
		$target.addClass('one');
		
		
	});
}); 
$(function(){
	
	$('#addTaskBtn').click(function(){
		alert('即将添加任务');
		var content=$('#content').val();
		var data=$('#datatime-local').val();
		var newTask={
			content:content,
			data:data
		}
		var taskList=localStorage.getItem(KEY);
		if(taskList){
			taskList=JSON.parse(taskList);
		}else{
			taskList=[];
		}
		taskList.push(newTask);
		taskList=JSON.stringify(taskList);
		
		localStorage.setItem(KEY,taskList);
		alert('添加成功');
		$('a[data-cmd="listTask"]').click();
		loadTask();
		
	});	
});
function loadTask(){
	var taskList=localStorage.getItem(KEY);
	if(!taskList)return;
	taskList=JSON.parse(taskList);
//	$('#listTask').html('');
	
	for(var i=0;i<taskList.length;i++){
		var task=taskList[i];
		$('#listTask').append(`
			<article>
					<div class="leftBox">
						<input type="checkbox" />
					</div>
					<div class="centerBox">
						<h3>`+task.content+`</h3>
						<time>`+task.data+`</time>
					</div>
					<div class="rightBox">
						<button>删除</button>
					</div>
					<div class="ww"></div>
				</article>
		
		`);
	}
}
$(function(){
	loadTask();
})

$('#rightBox-button').click(function(){
		
})
