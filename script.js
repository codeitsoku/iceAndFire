async function get() 
{
    try {
        var data = await fetch("https://www.anapioficeandfire.com/api/books");
        var dataObj = await data.json();

        var z = document.getElementById("cnt");
        var a = document.createElement("div");
        a.className = "row mx-lg-n5";
        var addhtml = "";

        dataObj.forEach(function (dataObj) {
            addhtml += `<div class='col col-lg-4'> \n
                <div class='card' style=" margin:10px; background-color:#fdda76 "> \n
                <h5 class='card-header' align="center" style="background-color:#db4c25; color: white">${dataObj.name}</h5> \n
                <div class='card-body'> \n
                    <center> \n
                        <p class='card-text'>ISBN: ${dataObj.isbn} <br> <br> Number of Pages: ${dataObj.numberOfPages} <br> Authors: ${dataObj.authors} 
                        <br> <br>Publisher: ${dataObj.publisher} <br> Release Date: ${dataObj.released}\n
                        </p>\n
                    </center>\n
                </div>\n
            </div >\n
        </div >`;
        });

        a.innerHTML = addhtml;
        z.appendChild(a);


    }
    catch (err) {
        console.log(err);
    }
}

get()