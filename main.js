var infoproc = {
  "소프트웨어 설계":['소프트웨어 공학', '프로그래밍 언어론'],
  "소프트웨어 개발":['자료구조', '운영체제', '소프트웨어 공학', '알고리즘', '보안'],
  "데이터베이스 구축":['데이터베이스'],
  "프로그래밍 언어 활용":['프로그래밍 언어론', '운영체제', '통신', '보안'],
  "정보시스템 구축관리":['소프트웨어 공학', '데이터베이스', '통신', '보안']
};
var links = {
  '소프트웨어 공학': 'software_engineering.html',
  '프로그래밍 언어론': 'http://www.example.com/programming_languages',
  '자료구조': 'http://www.example.com/data_structures',
  '운영체제': 'http://www.example.com/operating_systems',
  '알고리즘': 'http://www.example.com/algorithms',
  '보안': 'http://www.example.com/security',
  '데이터베이스': 'http://www.example.com/database',
  '통신': 'http://www.example.com/communication'
};

var category = function(){
  var subs = document.querySelectorAll('.subject');
  for(var i = 0; i < subs.length; i++){
    var $h3 = document.createElement('h3');
    var $ul = document.createElement('ul');  
    var subname = Object.keys(infoproc)[i];   
    subs[i].appendChild($h3);
    subs[i].appendChild($ul); 
    var subsul = subs[i].querySelector('ul');
    subs[i].querySelector('h3').textContent = subname;
    var courses = infoproc[subname];
    for(let course in courses){
      var $li = document.createElement('li');
      var $a = document.createElement('a');
      $a.setAttribute('href', links[courses[course]]);
      $a.textContent = courses[course];
      $li.appendChild($a);
      subsul.appendChild($li);
    }
  }
};