


할일 리스트
1. 페이지 첫 로드시에 화면에 뿌리기 (데이터가 없을 경우 "할일을 등록해 주세요)
2. 업데이트 될 때마다 화면에 다시 렌더링

* 사용자가 선택한 할일의 정보 가져오기 :
사용자가 선택한 할일의 정보와 같은 할일을 전역 상태값에서 찾는다
(유저선택할일.id === 전역상태할일.id을 filter함수로 찾기)
(id값을 index가 아닌 primary key로)

조회
1. 등록된 할일 클릭
2. 우측에 할일 디테일 컨테이너 띄우기
3. 해당 할일의 정보를 전역 상태에서 가져온 뒤 컨테이너 안에 뿌리기
4. x 버튼 클릭 시 컨테이너 닫기

추가
1. 하단 플러스 버튼 (+) 버튼 클릭
2. 우측에 할일 디테일 컨테이너 띄우기 (제목 input, 메모 input, 추가 button, x 버튼)
3. 사용자 값 입력 후 추가버튼 클릭
3-1. 빈 값 입력시에 alert("할일을 입력하세요"), 확인 누르고 3번 복귀
4. 사용자가 올바르게 입력했을 경우 alert("할일이 추가되었습니다.")
5. 입력한 사용자의 데이터를 전역 상태에 추가하기
6. 입력 컨테이너가 닫히고 새로운 List 데이터가 렌더링됨

수정
1. 할일 선택 후 우측에 할일 디테일 컨테이너 띄우기
(제목 input, 내용 input, 삭제 button, 수정 button, x 버튼)
2. 수정 버튼 클릭하면 할 일 내용 input의 disable을 풀고 입력 할 수 있게 만들고
    버튼은 취소, 수정완료로 바꾸기
2-1. 취소 버튼을 누르면 input들은 다시 disable, 버튼은 삭제, 수정으로 다시 복귀
3. 사용자 입력하기
4. 입력 후 수정완료 클릭
4-1. 사용자 입력이 빈값이라면(제목만) alert("다시 작성하세요") 
5. alert("수정완료 되었습니다.")
6. 사용자가 수정하는 해당 할 일의 정보를 전역 상태값에 업데이트하기
7. 입력 컨테이너가 닫히고 새로운 List 데이터가 렌더링됨

삭제
1. 할일 선택 후 우측에 할 일 디테일 컨테이너 띄우기
(제목 input, 내용 input, 삭제 button, 수정 button)
2. 삭제버튼 클릭하면 confirm("삭제하시겠어요?")
3-1. No : confirm 창 닫기
4. Yes : alert("삭제완료")
5. 사용자가 삭제하려는 해당 할 일을 전역 상태값에서 지우기
6. 입력 컨테이너가 닫히고 새로운 List 데이터 렌더링


필요한 경우 추가 라이브러리나 도구를 자유롭게 사용할 수 있지만, README 파일에서 선택한 이유를 정당화하세요.
=> 리덕스 툴킷 사용 ("@reduxjs/toolkit": "^2.2.1") : 전역 상태 관리 목적