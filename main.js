let suckIt = `<div style="position: fixed;top: 50%;z-index: 999;right: 10%;padding: 1em;background: rgba(233,233,233,.6);border: 1px solid #aaa;">
<textarea placeholder="评价内容" id="fuckMe" style="padding: 10px;height: 60px;width: 200px;margin: 10px;">Good Job Bro.</textarea>
<p style="text-align: center;">
<input type="text"  id="times" placeholder="份数，1 ~ 20" style="width: 100px;padding: .4em;margin: 0 1em;background: #fff;border: 1px solid #999;float: left;" value="1">
<input type="submit" value="Fuck It Now" onclick="fuckIt();" style="border: 1px solid #aaa;padding: 5px;color: #999;cursor: pointer;">
</p>
</div>`;
document.body.insertAdjacentHTML("afterbegin", suckIt);

function fuckIt() {
    let judge = document.getElementById('fuckMe').value || 'Good Job';
    let times = document.getElementById('times').value || '1';
    if (times > 0 && times < 21) {
        let fuck = setInterval(() => {
            document.querySelectorAll('.s').forEach(e => {
                e.children[e.children.length - 1].children[0].checked = true
            });
            document.querySelectorAll('.j-textarea').forEach(e => {
                e.value = judge
            });
            document.querySelector('.j-submitbtn').click();
            times--;
            setTimeout(() => {
                if (times !== 0) {
                    console.log(`还剩${times}份`);
                    document.getElementsByClassName('j-gotonext')[0].click();
                } else {
                    console.log(`已完成`);
                    document.getElementsByClassName('j-backbtn')[0].click();
                    window.clearInterval(fuck);
                    return false;
                }
            }, 666);
        }, 2333);
    } else {
        alert("次数错误，范围1 ~ 20");
        return false;
    }
}
