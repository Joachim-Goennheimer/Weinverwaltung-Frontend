

$(document).ready(() => {
    loadWineIntoTable();
    $('#wineTable').DataTable({
        "scrollY":        "350px",
        "scrollCollapse": true,
        "paging":         false
    });
  })
  
function loadWineIntoTable() {

    // $.get(apiServerAddress + "/wine", (data) => {

    var currentWine = {

        "id": "12345",
        "amount": 10,
        "name": "Guter Roter",
        "year": 2018,
        "origin": "Germany",
        "region": "Baden",
        "sellingPrice": 10.50,
        "storageLocation": "R125"

    }

// later forEachloop over Array
        for(let i = 0; i < 10; i++) {

            $("#wineTableBody").append(
                createWineTableEntry(currentWine)
            )
        }



    // })
    
    




}


function createWineTableEntry(wineObject) {

    let tableEntryHTML = '<tr>'
                            +'<td>'+ wineObject.name +'</td>'
                            +'<td>'+ wineObject.region +'</td>'
                            +'<td>'+ wineObject.year +'</td>'
                            +'<td>'+ wineObject.amount +'</td>'
                            +'<td data-toggle="modal" data-target="#wineDetailsModalCenter" onclick="loadDetailsIntoModal('+ wineObject.id+ ')"><i class="fas fa-info"></i></td>'
                            +'<td data-toggle="modal" data-target="#addToPurchaseListModal" onclick="loadDetailsIntoPurchaseListModal('+ wineObject.id +')"><i class="far fa-plus-square"></i></td>'
                        '</tr>';


    return tableEntryHTML;


}

function loadDetailsIntoModal(wineId) {

//         $.get(apiServerAddress + "/wine{id}", (data) => {

// }


var currentWine = {

    "id": "12345",
    "amount": 10,
    "name": "Guter Roter",
    "year": 2018,
    "origin": "Germany",
    "region": "Baden",
    "buyingPrice": 5.10,
    "sellingPrice": 10.50,
    "storageLocation": "R125",
    "picture": Blob

}

  
    $('#wineDetailsModalLongTitle').text(currentWine.name);
    $('#wineNameInput').val(currentWine.name);
    $('#wineRegionInput').val(currentWine.region);
    $('#wineYearInput').val(currentWine.year);
    $('#wineAmountInput').val(currentWine.amount);
    $('#wineBuyingPriceInput').val(currentWine.buyingPrice);
    $('#wineSellingPriceInput').val(currentWine.sellingPrice);
    $('#wineStorageLocationInput').val(currentWine.storageLocation);

}

function loadDetailsIntoPurchaseListModal(wineId) {

    var currentWine = {

        "id": "12345",
        "amount": 10,
        "name": "Guter Roter",
        "year": 2018,
        "origin": "Germany",
        "region": "Baden",
        "buyingPrice": 5.10,
        "sellingPrice": 10.50,
        "storageLocation": "R125",
        "picture": Blob
    
    }
    
      
        $('#wineNameField').text(currentWine.name);
        $('#wineAmountPurchaseList').val(1);
        $('#customerSelected').text($('#dropdown-1').text());
        // $('#wineRegionInput').val(currentWine.region);
        // $('#wineYearInput').val(currentWine.year);
        // $('#wineAmountInput').val(currentWine.amount);
        // $('#wineBuyingPriceInput').val(currentWine.buyingPrice);
        // $('#wineSellingPriceInput').val(currentWine.sellingPrice);
        // $('#wineStorageLocationInput').val(currentWine.storageLocation);

}

function updateCustomerSelected() {
    let newCustomerId = event.target.id;
    let newCustomerName = $('#' + newCustomerId).text();

    $('#customerSelected').text(newCustomerName);

}
