// JavaScript source code

let k_cnt = 0;
let s_cnt = 0;
let t_city_cnt = 0;
let t_boss_cnt = 0;

//清麿カウント変数
let k_upButton = document.getElementById("k_cntUp");
let k_downButton = document.getElementById("k_cntDown");
let k_up10Button = document.getElementById("k_cnt10Up");
let k_down10Button = document.getElementById("k_cnt10Down");
let k_currentCnt = document.getElementById("k_cnt");

//水心子カウント変数
let s_upButton = document.getElementById("s_cntUp");
let s_downButton = document.getElementById("s_cntDown");
let s_up10Button = document.getElementById("s_cnt10Up");
let s_down10Button = document.getElementById("s_cnt10Down");
let s_currentCnt = document.getElementById("s_cnt");

//江戸市中ボスカウント変数
let t_city_upButton = document.getElementById("t_city_cntUp");
let t_city_downButton = document.getElementById("t_city_cntDown");
let t_city_up10Button = document.getElementById("t_city_cnt10Up");
let t_city_down10Button = document.getElementById("t_city_cnt10Down");
let t_city_currentCnt = document.getElementById("t_city_cnt");

//江戸城ボスカウント変数
let t_boss_upButton = document.getElementById("t_boss_cntUp");
let t_boss_downButton = document.getElementById("t_boss_cntDown");
let t_boss_up10Button = document.getElementById("t_boss_cnt10Up");
let t_boss_down10Button = document.getElementById("t_boss_cnt10Down");
let t_boss_currentCnt = document.getElementById("t_boss_cnt");

//ドロップ率計算用変数
let k_currendrop=document.getElementById("kiyomaro_drop");
let s_currendrop=document.getElementById("suisinsi_drop");

//localStorage.clear();

//webstarageに値があるか確認
//清麿webstarage
if(localStorage.getItem("str_k_cnt")!= null){
    //値があればwebstrageでカウント数読み込む
    k_cnt = Number(localStorage.getItem("str_k_cnt"));
    //ページに表示
    k_currentCnt.innerHTML = k_cnt;

}else{
    //値がなければ0をセット
    Number(localStorage.setItem("str_k_cnt", 0));
}
//水心子webstarage
if(localStorage.getItem("str_s_cnt")!= null){
    //値があればwebstrageでカウント数読み込む
    s_cnt = Number(localStorage.getItem("str_s_cnt"));
    //ページに表示
    s_currentCnt.innerHTML = s_cnt;
}else{
    //値がなければ0をセット
    Number(localStorage.setItem("str_s_cnt", 0));
}
//江戸市中ボスwebstarage
if(localStorage.getItem("str_t_city_cnt")!= null){
    //値があればwebstrageでカウント数読み込む
    t_city_cnt = Number(localStorage.getItem("str_t_city_cnt"));
    //ページに表示
    t_city_currentCnt.innerHTML = t_city_cnt;
}else{
    //値がなければ0をセット
    Number(localStorage.setItem("str_t_city_cnt", 0));
}
//江戸城ボスwebstarage
if(localStorage.getItem("str_t_boss_cnt")!= null){
    //値があればwebstrageでカウント数読み込む
    t_boss_cnt = Number(localStorage.getItem("str_t_boss_cnt"));
    //ページに表示
    t_boss_currentCnt.innerHTML = t_boss_cnt;
}else{
    //値がなければ0をセット
    Number(localStorage.setItem("str_t_boss_cnt", 0));
}

//ドロップ率を計算して表示
k_drop=(k_cnt/t_city_cnt)*100;
k_currendrop.innerHTML = k_drop.toFixed(2);
s_drop=(s_cnt/t_boss_cnt)*100;
s_currendrop.innerHTML = s_drop.toFixed(2);

//清麿ドロップ率計算+webstarage保存
function calc_kDrop(){
    k_drop=(k_cnt/t_city_cnt)*100;
    k_currendrop.innerHTML = k_drop.toFixed(2);
    //localStorageにstr_k_cntという名前でk_currentCntの変数を保存
    localStorage.setItem("str_k_cnt", k_currentCnt.innerHTML);
    //localStorageにstr_t_city_cntという名前でt_city_currentCntの変数を保存
    localStorage.setItem("str_t_city_cnt", t_city_currentCnt.innerHTML);
}

//水心子ドロップ率計算+webstarage保存
function calc_sDrop(){
    s_drop=(s_cnt/t_boss_cnt)*100;
    s_currendrop.innerHTML = s_drop.toFixed(2);
    //localStorageにstr_s_cntという名前でs_currentCntの変数を保存
    localStorage.setItem("str_s_cnt", s_currentCnt.innerHTML);
    //localStorageにstr_t_boss_cntという名前でt_boss_currentCntの変数を保存
    localStorage.setItem("str_t_boss_cnt", t_boss_currentCnt.innerHTML);
}

/*清麿カウント*/
k_upButton.addEventListener("click", () => {
  k_cnt++;
  k_currentCnt.innerHTML = k_cnt;
  calc_kDrop();
});

k_downButton.addEventListener("click", () => {
  k_cnt--;
  if(k_cnt<0){
      k_cnt++;
  }else{
      k_currentCnt.innerHTML = k_cnt;
  }
  calc_kDrop();
});

k_up10Button.addEventListener("click", () => {
  k_cnt=k_cnt+10;
  k_currentCnt.innerHTML = k_cnt;
  calc_kDrop();
});

k_down10Button.addEventListener("click", () => {
  k_cnt=k_cnt-10;
  if(k_cnt<0){
      k_cnt=k_cnt+10;
  }else{
      k_currentCnt.innerHTML = k_cnt;
  }
  calc_kDrop();
});

/*水心子カウント*/
s_upButton.addEventListener("click", () => {
  s_cnt++;
  s_currentCnt.innerHTML = s_cnt;
  calc_sDrop();
});

s_downButton.addEventListener("click", () => {
  s_cnt--;
  if(s_cnt<0){
      s_cnt++;
  }else{
      s_currentCnt.innerHTML = s_cnt;
  }
  calc_sDrop();
});

s_up10Button.addEventListener("click", () => {
  s_cnt=s_cnt+10;
  s_currentCnt.innerHTML = s_cnt;
  calc_sDrop();
});

s_down10Button.addEventListener("click", () => {
  s_cnt=s_cnt-10;
  if(s_cnt<0){
      s_cnt=s_cnt+10;
  }else{
      s_currentCnt.innerHTML = s_cnt;
  }
  calc_sDrop();
});

/*江戸市中ボスカウント*/
t_city_upButton.addEventListener("click", () => {
  t_city_cnt++;
  t_city_currentCnt.innerHTML = t_city_cnt;
  calc_kDrop();
});

t_city_downButton.addEventListener("click", () => {
  t_city_cnt--;
  if(t_city_cnt<0){
      t_city_cnt++;
  }else{
      t_city_currentCnt.innerHTML = t_city_cnt;
  }
  calc_kDrop();
});

t_city_up10Button.addEventListener("click", () => {
  t_city_cnt=t_city_cnt+10;
  t_city_currentCnt.innerHTML = t_city_cnt;
  calc_kDrop();
});

t_city_down10Button.addEventListener("click", () => {
  t_city_cnt=t_city_cnt-10;
  if(t_city_cnt<0){
      t_city_cnt=t_city_cnt+10;
  }else{
      t_city_currentCnt.innerHTML = t_city_cnt;
  }
  calc_kDrop();
});

/*江戸城ボスカウント*/
t_boss_upButton.addEventListener("click", () => {
  t_boss_cnt++;
  t_boss_currentCnt.innerHTML = t_boss_cnt;
  calc_sDrop();
});

t_boss_downButton.addEventListener("click", () => {
  t_boss_cnt--;
  if(t_boss_cnt<0){
      t_boss_cnt++;
  }else{
      t_boss_currentCnt.innerHTML = t_boss_cnt;
  }
  calc_sDrop();
});

t_boss_up10Button.addEventListener("click", () => {
  t_boss_cnt=t_boss_cnt+10;
  t_boss_currentCnt.innerHTML = t_boss_cnt;
  calc_sDrop();
});

t_boss_down10Button.addEventListener("click", () => {
  t_boss_cnt=t_boss_cnt-10;
  if(t_boss_cnt<0){
      t_boss_cnt=t_boss_cnt+10;
  }else{
      t_boss_currentCnt.innerHTML = t_boss_cnt;
  }
  calc_sDrop();
});
