//this file will be responsible for talking with the api

 let storesInStockholm = getStoresInCity('stockholm')
 console.log(storesInStockholm)

function getStoresInCity(city){
    fetch('https://systembevakningsagenten.se/api/json/2.1/searchStore.json?' + new URLSearchParams({
        query: city
    }), {method: "GET"})             
    .then(resp => resp.json())
    .catch(function(error) {
        console.log(error);
    })
}

 let storeInventory = getStoreInventory(934)
 console.log(storeInventory)

function getStoreInventory(storeId){
    fetch('https://systembevakningsagenten.se/api/json/1.0/inventoryForStore.json?' + new URLSearchParams({
        id: storeId
    }), {method: "GET"})             
    .then(resp => resp.json())
    .catch(function(error) {
        console.log(error);
    })
}