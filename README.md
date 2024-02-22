# codingon_web_12th

코딩온 웹 12기 수업 코드 저장소

- 작성자 : 이준규
- 수업일 : 24/2/21 ~ 24/8/13
- 내 다짐 : 4.5 학점 드가자~

# 2월 21일
## 오늘 배운 내용
### git, git hub

- git이란?
    - git은 자신이 작성중인 프로젝트 또는 코드의 버전을 관리 해주는 툴이다.
    - 여러명의 개발자가 동일한 프로젝트를 진행할 때 각자의 코드를 서로 다른 버전으로 업로드하여 관리가 가능하다.
    - git은 Workspace, Staging Area, Local Repository, Remote Repository로 이루어진다. Remote Repository를 제외한 3 구역은 개발자의 로컬 구역이고 Remote Repository는 원격 구역이다.

- github이란?
    - git을 사용하며 이용하게 되는 구글 드라이브 같은 클라우드 저장고 느낌이다. 작성한 코드를 github에 업로드 하여 여러명의 개발자가 해당 코드에 접근할 수 있도록 돕는다.

- git bash 초기 설정 명령어
    - git config --global init.defaultBranch main : 기본 브렌치 메인으로 사용 (예전에는 기본 브렌치가 마스터였음)
    - git config --global core.ignorecase false : 대소문자 구분 무시
    - git clone [github repository url]: github에 생성된 저장소에서 local로 가져오는 명령어
    - git remote -v : 현재 프로젝트에 연결된 원격 저장소 url을 가져오는 명령어
    - git add . : 현재 디렉터리의 파일 스테이지에 올리기
    - git commit -m [메시지] : 스테이지의 변경 내역을 로컬 저장소에 저장
    - git push : 로컬 저장소의 변경 내역을 원격 저장소에 저장
    - git pull : 원격 저장소의 소스를 가져오기

# 2월 22일
## 오늘 배운 내용

- HTML?
    - Hypertext Markup Language로 웹 환경을 구성하는 가장 기본적인 뼈대가 되는 역할을 한다.
    - .html을 확장자로 사용한다.
    - &lt;xxx>&lt;/xxx>와 같은 형식을 태그라 하며 태그와 태그 사이에 들어가는 내용을 모두 합쳐 요소라 한다.
    - 요소와 요소는 중첩이 가능하다.

- HTML 기본 태그 몇가지
    - &lt;head>&lt;/head> : 웹 브라우저에는 표시 되지 않는 웹 페이지의 기본 정보들을 담고있는 태그
    - &lt;body>&lt;/body> : 웹 브라우저에 표시되는 태그
    - &lt;h1~h6>&lt;/h1~h6> : 머릿말 태그
    - &lt;br/> : 줄바꿈 태그
    - &lt;ul>&lt;/ul> : 번호가 없는 목록 태그
    - &lt;ol>&lt;/ol> : 번호가 있는 목록 태그
    - &lt;div>&lt;/div> : block 형태의 태그
    - &lt;span>&lt;/span> : inline 형태의 태그
    - &lt;a>&lt;/a> : 링크를 연결할 때 사용하는 태그
        - &lt;a href="url">&lt;/a> 형식으로 사용한다.
    
- input 태그
    - type 속성을 이용하여 여러가지 입력값을 받는 태그(강의 자료 참고)