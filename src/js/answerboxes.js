const rows = document.querySelectorAll('.answRow');

export default function updateAnswer(notation){
    let answRow = []
    rows.forEach(row => {
        row.querySelectorAll('.square').forEach(box => {
            answRow.push(box)
        });  
    });
    for(let i = 0; i<5; i++){
        if(answRow[i].innerHTML === ""){
            answRow[i].innerHTML = notation;
            i = 5;
        }
    }
}