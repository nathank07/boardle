const rows = document.querySelectorAll('.answRow');

export default function updateAnswer(notation, answer){
    let answRows = []
    rows.forEach(row => {
        let answRow = [];
        let empty = false;
        row.querySelectorAll('.square').forEach(box => {
            if(box.innerHTML === ""){
                empty = true;
            }
            answRow.push(box);
        });
        if(empty){
            answRows.push(answRow)
        }
    });
    for(let i = 0; i<5; i++){
        if(answRows[0][i].innerHTML === ""){
            answRows[0][i].innerHTML = notation;
            i = 5;
        }
    }
}