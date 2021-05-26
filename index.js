var pls = document.getElementById("playerselector").value;

const placement = [[],
                   [],
                   [],];

window.setInterval(function()
{
    if(placement[0][0] == "X" && placement[0][1] == "X" && placement[0][2] == "X")
    {
         document.getElementById("data").innerHTML = "The winner is X";
    }
    else if(placement[0][0] == "O" && placement[0][1] == "O" && placement[0][2] == "O")
    {
         document.getElementById("data").innerHTML = "The winner is O";
    }
    else if(placement[1][0] == "X" && placement[1][1] == "X" && placement[1][2] == "X")
    {
         document.getElementById("data").innerHTML = "The winner is X";
    }
    else if(placement[1][0] == "O" && placement[1][1] == "O" && placement[1][2] == "O")
    {
         document.getElementById("data").innerHTML = "The winner is O";
    }
    else if(placement[2][0] == "X" && placement[2][1] == "X" && placement[2][2] == "X")
    {
         document.getElementById("data").innerHTML = "The winner is X";
    }
    else if(placement[2][0] == "O" && placement[2][1] == "O" && placement[2][2] == "O")
    {
         document.getElementById("data").innerHTML = "The winner is O";
    }
    else if(placement[0][0] == "X" && placement[1][0] == "X" && placement[2][0] == "X")
    {
         document.getElementById("data").innerHTML = "The winner is X";
    }
    else if(placement[0][0] == "O" && placement[1][0] == "O" && placement[2][0] == "O")
    {
         document.getElementById("data").innerHTML = "The winner is O";
    }
    else if(placement[0][1] == "X" && placement[1][1] == "X" && placement[2][1] == "X")
    {
         document.getElementById("data").innerHTML = "The winner is X";
    }
    else if(placement[0][1] == "O" && placement[1][1] == "O" && placement[2][1] == "O")
    {
         document.getElementById("data").innerHTML = "The winner is O";
    }
    else if(placement[0][2] == "X" && placement[1][2] == "X" && placement[2][2] == "X")
    {
         document.getElementById("data").innerHTML = "The winner is X";
    }
    else if(placement[0][2] == "O" && placement[1][2] == "O" && placement[2][2] == "O")
    {
         document.getElementById("data").innerHTML = "The winner is O";
    }
    else if(placement[0][0] == "X" && placement[1][1] == "X" && placement[2][2] == "X")
    {
         document.getElementById("data").innerHTML = "The winner is X";
    }
    else if(placement[0][0] == "O" && placement[1][1] == "O" && placement[2][2] == "O")
    {
         document.getElementById("data").innerHTML = "The winner is O";
    }
    else if(placement[0][2] == "X" && placement[1][1] == "X" && placement[2][0] == "X")
    {
         document.getElementById("data").innerHTML = "The winner is X";
    }
    else if(placement[0][2] == "O" && placement[1][1] == "O" && placement[2][0] == "O")
    {
         document.getElementById("data").innerHTML = "The winner is O";
    }
}, 500);


function divone()
{
	if(document.getElementById("playerselector").value == "X")
	{
		document.getElementById("layout").innerHTML = "X";
		placement[0][0] = "X";
	}
	else if(document.getElementById("playerselector").value == "O")
	{
		document.getElementById("layout").innerHTML = "O";
		placement[0][0] = "O";
	}
	else if(!document.getElementById("playerselector").value)
	{
		alert("No Character");
	}
	else if(document.getElementById("playerselector").value != "X" && document.getElementById("playerselector").value != "O")
	{
		alert("Invalid Character");
	}
}

function divtwo()
{
	if(document.getElementById("playerselector").value == "X")
	{
		document.getElementById("layout2").innerHTML = "X";
		placement[1][0] = "X";
	}
	else if(document.getElementById("playerselector").value == "O")
	{
		document.getElementById("layout2").innerHTML = "O";
		placement[1][0] = "O";
	}
	else if(!document.getElementById("playerselector").value)
	{
		alert("No Character");
	}
	else if(document.getElementById("playerselector").value != "X" && document.getElementById("playerselector").value != "O")
	{
		alert("Invalid Character");
	}
}

function divthree()
{
	if(document.getElementById("playerselector").value == "X")
	{
		document.getElementById("layout3").innerHTML = "X";
		placement[2][0] = "X";
	}
	else if(document.getElementById("playerselector").value == "O")
	{
		document.getElementById("layout3").innerHTML = "O";
		placement[2][0] = "O";
	}
	else if(!document.getElementById("playerselector").value)
	{
		alert("No Character");
	}
	else if(document.getElementById("playerselector").value != "X" && document.getElementById("playerselector").value != "O")
	{
		alert("Invalid Character");
	}
}

function middivone()
{
	if(document.getElementById("playerselector").value == "X")
	{
		document.getElementById("midlayout").innerHTML = "X";
		placement[0][1] = "X";
	}
	else if(document.getElementById("playerselector").value == "O")
	{
		document.getElementById("midlayout").innerHTML = "O";
		placement[0][1] = "O";
	}
	else if(!document.getElementById("playerselector").value)
	{
		alert("No Character");
	}
	else if(document.getElementById("playerselector").value != "X" && document.getElementById("playerselector").value != "O")
	{
		alert("Invalid Character");
	}
}

function middivtwo()
{
	if(document.getElementById("playerselector").value == "X")
	{
		document.getElementById("midlayout2").innerHTML = "X";
		placement[1][1] = "X";
	}
	else if(document.getElementById("playerselector").value == "O")
	{
		document.getElementById("midlayout2").innerHTML = "O";
		placement[1][1] = "O";
	}
	else if(!document.getElementById("playerselector").value)
	{
		alert("No Character");
	}
	else if(document.getElementById("playerselector").value != "X" && document.getElementById("playerselector").value != "O")
	{
		alert("Invalid Character");
	}
}

function middivthree()
{
	if(document.getElementById("playerselector").value == "X")
	{
		document.getElementById("midlayout3").innerHTML = "X";
		placement[2][1] = "X";
	}
	else if(document.getElementById("playerselector").value == "O")
	{
		document.getElementById("midlayout3").innerHTML = "O";
		placement[2][1] = "O";
	}
	else if(!document.getElementById("playerselector").value)
	{
		alert("No Character");
	}
	else if(document.getElementById("playerselector").value != "X" && document.getElementById("playerselector").value != "O")
	{
		alert("Invalid Character");
	}
}

function rdivone()
{
	if(document.getElementById("playerselector").value == "X")
	{
		document.getElementById("rlayout").innerHTML = "X";
		placement[0][2] = "X";
	}
	else if(document.getElementById("playerselector").value == "O")
	{
		document.getElementById("rlayout").innerHTML = "O";
		placement[0][2] = "O";
	}
	else if(!document.getElementById("playerselector").value)
	{
		alert("No Character");
	}
	else if(document.getElementById("playerselector").value != "X" && document.getElementById("playerselector").value != "O")
	{
		alert("Invalid Character");
	}
}

function rdivtwo()
{
	if(document.getElementById("playerselector").value == "X")
	{
		document.getElementById("rlayout2").innerHTML = "X";
		placement[1][2] = "X";
	}
	else if(document.getElementById("playerselector").value == "O")
	{
		document.getElementById("rlayout2").innerHTML = "O";
		placement[1][2] = "O";
	}
	else if(!document.getElementById("playerselector").value)
	{
		alert("No Character");
	}
	else if(document.getElementById("playerselector").value != "X" && document.getElementById("playerselector").value != "O")
	{
		alert("Invalid Character");
	}
}

function rdivthree()
{
	if(document.getElementById("playerselector").value == "X")
	{
		document.getElementById("rlayout3").innerHTML = "X";
		placement[2][2] = "X";
	}
	else if(document.getElementById("playerselector").value == "O")
	{
		document.getElementById("rlayout3").innerHTML = "O";
		placement[2][2] = "O";
	}
	else if(!document.getElementById("playerselector").value)
	{
		alert("No Character");
	}
	else if(document.getElementById("playerselector").value != "X" && document.getElementById("playerselector").value != "O")
	{
		alert("Invalid Character");
	}
}