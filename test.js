var infoproc = {
  "소프트웨어 설계":['소프트웨어 공학', '프로그래밍 언어론'],
  "소프트웨어 개발":['자료구조', '운영체제', '소프트웨어 공학', '알고리즘', '보안'],
  "데이터베이스 구축":['데이터베이스'],
  "프로그래밍 언어 활용":['프로그래밍 언어론', '운영체제', '통신', '보안'],
  "정보시스템 구축관리":['소프트웨어 공학', '데이터베이스', '통신', '보안']
};

var subs = document.querySelectorAll('.subject');

var category = function(){
  var grids = Array.from(subs);
  var $h3 = document.createElement('h3');
  var $ul = document.createElement('ul');
  for(grid in grids){
    document.querySelector('.subject').appendChild($h3);
    document.querySelector('.subject').appendChild($ul);
    subs.forEach((sub, i) => {
      var subname = Object.keys(infoproc)[i];
      sub.textContent = subname;
      var courses = infoproc[subname];
      courses.forEach((course, i) => {
        var $li = document.createElement('li');
        sub.appendChild($li);
        $li.textContent = courses[i];
      });
    });
  }
};

category();
