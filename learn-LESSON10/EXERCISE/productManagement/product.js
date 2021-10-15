let inputProduct = document.getElementById('inputProduct');
        let display = document.getElementById('display');
        let products = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4",
    "Apple iPhone 6S", "Xiaomi Mi 5s Plus", "Apple iPhone 8 Plus", "Fujitsu F-04E", "Oppo A71"];
        let tableProduct = '';
        let newproduct = '';
        displayProduct();

        function displayProduct() {            
            tableProduct = '<table>'            
            makeTableTh();
            for (let i = 0; i < products.length; i++) {
                makeTable(i);
            }            
            tableProduct += '</table>'
            display.innerHTML = tableProduct;
        };

        function makeTableTh() {
            products.sort();
            tableProduct += '<tr>'
            tableProduct += '<th colspan="2"> Product Name'+'</th>'
            tableProduct += '<th colspan="2">' + products.length +' products</th>'
            tableProduct += '</tr>'
        }
        function makeTable(i) {            
            tableProduct += '<tr>'
            tableProduct += '<td>' + (i + 1) + '</td>' +
                '<td>' + products[i] + '</td>' +
                '<td>' + '<button onclick="modifiedProduct(' + i + ')">Edit</button>' + '</td>' +
                '<td>' + '<button onclick="delProduct(' + i + ')">Delete</button>' + '</td>'
            tableProduct += '</tr>'
        }

        function addProduct() {
            newproduct = inputProduct.value;
            inputProduct.value = '';
            products.push(newproduct);
            displayProduct();
            alert("Add successful!")
            doneModified = '';
        }

        function modifiedProduct(order) {
            tableProduct = '<table>';
            makeTableTh();
            for (let i = 0; i < products.length; i++) {
                if (i == order) {
                    tableProduct += '<tr>'
                    tableProduct += '<td>' + (i + 1) + '</td>' +
                        '<td>' + '<input id="modified' + i + '" value= "' + products[i] + '">' + '</td>' +
                        '<td>' + '<button onclick="doneModifiedProduct(' + i + ')">Done</button>' + '</td>' +
                        '<td>' + '<button onclick="delProduct(' + i + ')">Delete</button>' + '</td>'
                    tableProduct += '</tr>'
                } else makeTable(i);
            }
            tableProduct += '</table>'
            display.innerHTML = tableProduct;
        }

        function doneModifiedProduct(order) {
            products[order] = document.getElementById('modified' + order).value;
            displayProduct();
        }

        function delProduct(order) {
            let answer = confirm("Are you sure?");
            if (answer) {
                products.splice(order, 1);
                displayProduct();
                alert("Delete successful!")
            }

        }