function allowDrop(e) {
    e.preventDefault(); // 드래그 오버를 허락한다.
}
function dragStartHandler(e) {
    e.dataTransfer.effectAllowed = 'move'; // 데이터가 변하는 효과를 허락한다 'move' 를
    e.dataTransfer.setData("Text", e.target.id); // 변한 데이터를 "Text"로 정하고 e.target.id 타겟의 아이디를 세팅한다.
}
function handleDrop(e) {
    e.preventDefault();
    let src = e.dataTransfer.getData("Text"); // 변한 데이터를 가져온다.
    e.target.appendChild(document.getElementById(src)); // 타겟에 변한 데이터를 추가한다.
}