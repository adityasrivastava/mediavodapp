'use strict'

angular.module('mediavodapp.shared').provider('$indexDb',[function(){

    var indexedDB;
    var IDBTransaction;
    var IDBKeyRange;

    var db;
    var dbName;
    var transaction;
    var indexedDBSupported = false;

    var onError = function (event) {
        console.log("Error opening DB : "+event);
    }

    var onSuccess = function (event) {
        console.log("Success opening DB");
        db = event.target.result;
    }

    var onupgradeneeded = function(event){
        console.log("Upgrading...");
        var db_ = event.target.result;

        if(!db_.objectStoreNames.contains("studentEvents")) {
            db_.createObjectStore("studentEvents", {keyPath : "id", autoIncrement : true});
        }

        if(!db_.objectStoreNames.contains("mocktestEvents")) {
            db_.createObjectStore("mocktestEvents", {keyPath : "id", autoIncrement : true});
        }
    };

    var transactionOnComplete = function(event) {
            console.log("Success");
    };

    var transactionOnError = function(event) {
            console.log("Error");
    };


    return {

        setDbName : function(databaseName) {
            dbName = databaseName;
        },

        $get : function() {

            return {

                 getIndexedDbSupported : function () {
                    return indexedDBSupported;
                 },

                 validateDbCompatibility : function(){
                        if (!indexedDB) {
                           console.log("Your browser doesn't support a stable version of IndexedDB.");
                        }else{
                           console.log("Your browser supports a stable version of IndexedDB.");
                           indexedDBSupported = true;
                        }
                 },

                 initIDB : function () {
                     indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                     IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
                     IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

                     var openRequest = indexedDB.open(dbName, 1);

                     openRequest.onsuccess = onSuccess;
                     openRequest.onerror = onError;
                     openRequest.onupgradeneeded = onupgradeneeded;
                 },

                 getIDBInstance : function() {
                    return indexedDB;
                 },

                 getDB : function () {
                    return db;
                 },

                 getTransaction : function (tableName) {
                     if(db) {
                         transaction = db.transaction([tableName],"readwrite");
                         transaction.oncomplete = transactionOnComplete;
                         transaction.onerror = transactionOnError;
                     }
                    return transaction;
                 }
            };
        }
    };

}]);