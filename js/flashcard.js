function Flashcard(ques, ans) {
    this.question = ques;
    this.answer = ans;
}; let n1 = 0, n2 = 0, n3 = 0, n4 = 0, b1 = 0, c1 = 0, count = 0;
Flashcard.prototype.addFlash = function () {
    let division, editButton, delButton, heading, heading1, liink, mainColumn, head1Column, headColumn, linkColumn,
        division1, buttonColumn, buttonColumn1, mainContainer;
    mainContainer = $(".container");
    division = $('<div class="row   thirdRow" ></div>'); //first row, inside container
    division1 = $('<div class="row fourthRow"  ></div>');//second row,inside container
    mainColumn = $('<div class="col-12 col-md-8"></div>'); //inside first row
    mainColumnRow = $('<div class="row  "></div>'); // inside mainColumn
    headColumn = $('<div class="col-12"></div>'); // inside mainColumnRow
    head1Column = $('<div class="col-12"></div>'); // inside mainColumnRow
    linkColumn = $('<div class="col-12"></div>'); // inside mainColumnRow
    heading = $('<p></p>'); //inside headColumn
    liink = $('<button class="link btn btn-dark" onclick="compare(this.id)" >Show/Hide</button>'); //inside linkColumn
    heading1 = $('<p class="change"></p>'); //inside head1Column
    buttonColumn = $('<div class="col-6 mr-auto "></div>');
    buttonColumn1 = $('<div class="col-6  ml-auto"></div>');
    editButton = $('<button class="btn btn-info " onclick="compare1(this.id)" > Edit</button>'); //inside buttonColumn
    delButton = $('<button class="btn btn-info " onclick="compare2(this.id)"   >Delete</button>'); //inside buttonColumn1
    mainContainer.append(division).append(division1);
    division.append(mainColumn);
    mainColumn.append(mainColumnRow);
    mainColumnRow.append(headColumn).append(linkColumn).append(head1Column);
    headColumn.append(heading);
    head1Column.append(heading1);
    linkColumn.append(liink);
    division1.append(buttonColumn);
    division1.append(buttonColumn1);
    buttonColumn.append(editButton);
    buttonColumn1.append(delButton);
    return (heading.html(this.question), heading1.html(this.answer));

};
$(".second").css("display", "none");
$("#addQuestion").click(function () {
    $(".second").css("display", "");
});
$("#icon").click(function () {
    $(".second").css("display", "none");
});
$("#save").click(function () {
    if (($("#inputQuestion") && $("#inputAnswer")).val() === "") { alert("Text area shouldn't be empty.."); }
    else {

        console.log(  $(".link").length);
        count++;
        if (count == 1) {
            n1 = 2, b1 = 3, c1 = 4;
        }
        n2++; n3++, n4++;
        let add = new Flashcard($("#inputQuestion").val(), $("#inputAnswer").val());
        add.addFlash();
        $(".change").css("display", "none");
        $("button").eq(n1).attr("id", "show" + n2); $("button").eq(b1).attr("id", "edit" + n3);
        $("button").eq(c1).attr("id", "delete" + n4);
        n1 = n1 + 3;
        b1 = b1 + 3;
        c1 = c1 + 3;
        $("#inputQuestion").val(""); $("#inputAnswer").val("");
    }
});

function compare(item) {
    $("#" + item).parent().next().children().toggle();
}
function compare1(item1) {
    $("#inputQuestion").val($("#" + item1).parent().parent().prev().children().children().children().first().children().html());
    $("#" + item1).parent().parent().prev().remove();
    $("#" + item1).parent().parent().remove();
    n1 = n1 - 3; b1 = b1 - 3, c1 = c1 - 3;
}
function compare2(item2) {
    $("#" + item2).parent().parent().prev().remove();
    $("#" + item2).parent().parent().remove();
     n1 = n1 - 3; b1 = b1 - 3, c1 = c1 - 3;
    if($(".link").length==0){
    n1 = 0, b1 = 0, c1 = 0, n2 = 0, n3 = 0, n4 = 0,count=0;}
}







