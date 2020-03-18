

$(document).ready(() => {
    loadCustomersIntoTable();
    $('#customerTable').DataTable({
        "scrollY":        "350px",
        "scrollCollapse": true,
        "paging":         false
    });
  })
  
function loadCustomersIntoTable() {

    // $.get(apiServerAddress + "/customer", (data) => {

    var currentCustomer = {

        "id": "12345",
        "name": "Maier",
        "vorname": "Marvin",
        "email": "marvin.maier@gmx.de",
        "telefon": "028392839",

    }

// later forEachloop over Array
        for(let i = 0; i < 10; i++) {

            $("#customerTableBody").append(
                createCustomerTableEntry(currentCustomer)
            )
        }



    // })
    
    




}


function createCustomerTableEntry(customerObject) {

    let tableEntryHTML = '<tr>'
                            +'<td>'+ customerObject.id +'</td>'
                            +'<td>'+ customerObject.name +'</td>'
                            +'<td>'+ customerObject.vorname +'</td>'
                            +'<td>'+ customerObject.email +'</td>'
                            +'<td>'+ customerObject.telefon +'</td>'
                            +'<td data-toggle="modal" data-target="#customerDetailsModalCenter" onclick="loadDetailsIntoModal('+ customerObject.id+ ')"><i class="fas fa-info"></i></td>'
                        '</tr>';


    return tableEntryHTML;


}

function loadDetailsIntoModal(customerId) {

//         $.get(apiServerAddress + "/customer{id}", (data) => {

// }


var currentCustomer = {

    "id": "12345",
    "name": "Maier",
    "vorname": "Marvin",
    "email": "marvin.maier@gmx.de",
    "telefon": "028392839",
    "straße": "Bergstraße 5",
    "plz": "71123",
    "ort": "Shire"


}

  
    $('#customerNameInput').val(currentCustomer.name);
    $('#customerVornameInput').val(currentCustomer.vorname);
    $('#customerEmailInput').val(currentCustomer.email);
    $('#customerTelefonInput').val(currentCustomer.telefon);
    $('#customerStraßeInput').val(currentCustomer.straße);
    $('#customerPLZInput').val(currentCustomer.plz);
    $('#customerOrtInput').val(currentCustomer.ort);

}

function loadAddToPurchaseListPopUp() {

}
