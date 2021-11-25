function numberspacedelimeted() {

    var isValid = false;
    var regex = /^[0-9\s]*$/;
    isValid = regex.test(document.getElementById("numbers_only").value);
    document.getElementById("input_error").style.display = !isValid ? "block" : "none";
    
    if (isValid) {
        numbers = document.getElementById("numbers_only").value

        var num = numbers.split(' ');
        num.sort()
        num = num.join(" ").trim().split(' ');

        document.getElementById("list_numbers").innerHTML = "";

        for (let index = 0; index < num.length; index++) {
            const element = num[index];
            var list = document.createElement("LI");
            var node = document.createTextNode(num[index])
            list.appendChild(node);
            document.getElementById("list_numbers").appendChild(list);
        }
    }
}