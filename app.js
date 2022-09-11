// JavaScript source code

let k_cnt = 0;
let s_cnt = 0;
let city_cnt = 0;
let boss_cnt = 0;

//�����J�E���g�ϐ�
let k_upButton = document.getElementById("k_cntUp");
let k_downButton = document.getElementById("k_cntDown");
let k_up10Button = document.getElementById("k_cnt10Up");
let k_down10Button = document.getElementById("k_cnt10Down");
let k_currentCnt = document.getElementById("k_cnt");

//���S�q�J�E���g�ϐ�
let s_upButton = document.getElementById("s_cntUp");
let s_downButton = document.getElementById("s_cntDown");
let s_up10Button = document.getElementById("s_cnt10Up");
let s_down10Button = document.getElementById("s_cnt10Down");
let s_currentCnt = document.getElementById("s_cnt");

//�]�ˎs���{�X�J�E���g�ϐ�
let city_upButton = document.getElementById("city_cntUp");
let city_downButton = document.getElementById("city_cntDown");
let city_up10Button = document.getElementById("city_cnt10Up");
let city_down10Button = document.getElementById("city_cnt10Down");
let city_currentCnt = document.getElementById("city_cnt");

//�]�ˏ�{�X�J�E���g�ϐ�
let boss_upButton = document.getElementById("boss_cntUp");
let boss_downButton = document.getElementById("boss_cntDown");
let boss_up10Button = document.getElementById("boss_cnt10Up");
let boss_down10Button = document.getElementById("boss_cnt10Down");
let boss_currentCnt = document.getElementById("boss_cnt");

//�h���b�v���v�Z�p�ϐ�
let k_currendrop=document.getElementById("kiyomaro_drop");
let s_currendrop=document.getElementById("suisinsi_drop");

//localStorage.clear();

//webstarage�ɒl�����邩�m�F
//����webstarage
if(localStorage.getItem("str_k_cnt")!= null){
    //�l�������webstrage�ŃJ�E���g���ǂݍ���
    k_cnt = Number(localStorage.getItem("str_k_cnt"));
    //�y�[�W�ɕ\��
    k_currentCnt.innerHTML = k_cnt;

}else{
    //�l���Ȃ����0���Z�b�g
    Number(localStorage.setItem("str_k_cnt", 0));
}
//���S�qwebstarage
if(localStorage.getItem("str_s_cnt")!= null){
    //�l�������webstrage�ŃJ�E���g���ǂݍ���
    s_cnt = Number(localStorage.getItem("str_s_cnt"));
    //�y�[�W�ɕ\��
    s_currentCnt.innerHTML = s_cnt;
}else{
    //�l���Ȃ����0���Z�b�g
    Number(localStorage.setItem("str_s_cnt", 0));
}
//�]�ˎs���{�Xwebstarage
if(localStorage.getItem("str_city_cnt")!= null){
    //�l�������webstrage�ŃJ�E���g���ǂݍ���
    city_cnt = Number(localStorage.getItem("str_city_cnt"));
    //�y�[�W�ɕ\��
    city_currentCnt.innerHTML = city_cnt;
}else{
    //�l���Ȃ����0���Z�b�g
    Number(localStorage.setItem("str_city_cnt", 0));
}
//�]�ˏ�{�Xwebstarage
if(localStorage.getItem("str_boss_cnt")!= null){
    //�l�������webstrage�ŃJ�E���g���ǂݍ���
    boss_cnt = Number(localStorage.getItem("str_boss_cnt"));
    //�y�[�W�ɕ\��
    boss_currentCnt.innerHTML = boss_cnt;
}else{
    //�l���Ȃ����0���Z�b�g
    Number(localStorage.setItem("str_boss_cnt", 0));
}

//�h���b�v�����v�Z���ĕ\��
k_drop=(k_cnt/city_cnt)*100;
k_currendrop.innerHTML = k_drop.toFixed(2);
s_drop=(s_cnt/boss_cnt)*100;
s_currendrop.innerHTML = s_drop.toFixed(2);

//�����h���b�v���v�Z+webstarage�ۑ�
function calc_kDrop(){
    k_drop=(k_cnt/city_cnt)*100;
    k_currendrop.innerHTML = k_drop.toFixed(2);
    //localStorage��str_k_cnt�Ƃ������O��k_currentCnt�̕ϐ���ۑ�
    localStorage.setItem("str_k_cnt", k_currentCnt.innerHTML);
    //localStorage��str_city_cnt�Ƃ������O��city_currentCnt�̕ϐ���ۑ�
    localStorage.setItem("str_city_cnt", city_currentCnt.innerHTML);
}

//���S�q�h���b�v���v�Z+webstarage�ۑ�
function calc_sDrop(){
    s_drop=(s_cnt/boss_cnt)*100;
    s_currendrop.innerHTML = s_drop.toFixed(2);
    //localStorage��str_s_cnt�Ƃ������O��s_currentCnt�̕ϐ���ۑ�
    localStorage.setItem("str_s_cnt", s_currentCnt.innerHTML);
    //localStorage��str_boss_cnt�Ƃ������O��boss_currentCnt�̕ϐ���ۑ�
    localStorage.setItem("str_boss_cnt", boss_currentCnt.innerHTML);
}

/*�����J�E���g*/
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

/*���S�q�J�E���g*/
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

/*�]�ˎs���{�X�J�E���g*/
city_upButton.addEventListener("click", () => {
  city_cnt++;
  city_currentCnt.innerHTML = city_cnt;
  calc_kDrop();
});

city_downButton.addEventListener("click", () => {
  city_cnt--;
  if(city_cnt<0){
      city_cnt++;
  }else{
      city_currentCnt.innerHTML = city_cnt;
  }
  calc_kDrop();
});

city_up10Button.addEventListener("click", () => {
  city_cnt=city_cnt+10;
  city_currentCnt.innerHTML = city_cnt;
  calc_kDrop();
});

city_down10Button.addEventListener("click", () => {
  city_cnt=city_cnt-10;
  if(city_cnt<0){
      city_cnt=city_cnt+10;
  }else{
      city_currentCnt.innerHTML = city_cnt;
  }
  calc_kDrop();
});

/*�]�ˏ�{�X�J�E���g*/
boss_upButton.addEventListener("click", () => {
  boss_cnt++;
  boss_currentCnt.innerHTML = boss_cnt;
  calc_sDrop();
});

boss_downButton.addEventListener("click", () => {
  boss_cnt--;
  if(boss_cnt<0){
      boss_cnt++;
  }else{
      boss_currentCnt.innerHTML = boss_cnt;
  }
  calc_sDrop();
});

boss_up10Button.addEventListener("click", () => {
  boss_cnt=boss_cnt+10;
  boss_currentCnt.innerHTML = boss_cnt;
  calc_sDrop();
});

boss_down10Button.addEventListener("click", () => {
  boss_cnt=boss_cnt-10;
  if(boss_cnt<0){
      boss_cnt=boss_cnt+10;
  }else{
      boss_currentCnt.innerHTML = boss_cnt;
  }
  calc_sDrop();
});