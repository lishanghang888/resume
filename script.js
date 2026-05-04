// 暗黑模式切换
const darkBtn = document.getElementById('darkBtn');
darkBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    this.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// 工具按钮点击
document.querySelectorAll('.use-btn').forEach(btn=>{
    btn.addEventListener('click',function(){
        let name = this.parentElement.querySelector('h3').innerText;
        alert(`即将进入【${name}】工具页面，后续可自行加跳转链接`);
    });
});

// 会员开通按钮
document.querySelectorAll('.pay-btn').forEach(btn=>{
    btn.addEventListener('click',function(){
        alert('请扫码支付，支付后人工开通会员权限');
    });
});

// 搜索功能
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        let key = this.value.trim();
        if(key){
            alert(`正在搜索：${key}，后台可对接搜索接口`);
        }
    }
});