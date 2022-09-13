// var virtualData = [];
// var names = ['hardire', 'abramjo01', 'aubucch01', 'Hook', 'Rumpelstiltskin', 'Belle', 'Emma', 'Regina', 'Aurora', 'Elsa', 'Anna', 'Snow White', 'Prince Charming', 'Cora', 'Zelena', 'August', 'Mulan', 'Graham', 'Discord', 'Will', 'Robin Hood', 'Jiminy Cricket', 'Henry', 'Neal', 'Red', 'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Abdulkhader', 'Abdullah', 'Abdul-Majeed', 'Abdulmalik', 'Abdul-Rehman', 'Abdur', 'Abdurraheem', 'Abdur-Rahman', 'Abdur-Rehmaan', 'Abel', 'Abhinav', 'Abhisumant', 'Abid', 'Abir', 'Abraham', 'Abu', 'Abubakar', 'Ace', 'Adain', 'Adam', 'Adam-James', 'Addison', 'Addisson', 'Adegbola', 'Adegbolahan', 'Aden', 'Adenn', 'Adie', 'Adil', 'Aditya', 'Adnan', 'Adrian', 'Adrien', 'Aedan', 'Aedin', 'Aedyn', 'Aeron', 'Afonso', 'Ahmad', 'Ahmed', 'Ahmed-Aziz', 'Ahoua', 'Ahtasham', 'Aiadan', 'Aidan', 'Aiden', 'Aiden-Jack', 'Aiden-Vee'];

// function dataSource(){
//     for (var i = 0; i < 1000; i++) {
//         virtualData.push({
//             'SNo': i + 1,
//             'FIELD1': names[Math.floor(Math.random() * names.length)],
//             'FIELD2': 1967 + (i % 10), 'FIELD3': Math.floor(Math.random() * 200),
//             'FIELD4': Math.floor(Math.random() * 100), 'FIELD5': Math.floor(Math.random() * 2000), 'FIELD6': Math.floor(Math.random() * 1000), 'FIELD7': Math.floor(Math.random() * 100), 'FIELD8': Math.floor(Math.random() * 10), 'FIELD9': Math.floor(Math.random() * 10), 'FIELD10': Math.floor(Math.random() * 100), 'FIELD11': Math.floor(Math.random() * 100), 'FIELD12': Math.floor(Math.random() * 1000), 'FIELD13': Math.floor(Math.random() * 10), 'FIELD14': Math.floor(Math.random() * 10), 'FIELD15': Math.floor(Math.random() * 1000), 'FIELD16': Math.floor(Math.random() * 200), 'FIELD17': Math.floor(Math.random() * 300), 'FIELD18': Math.floor(Math.random() * 400), 'FIELD19': Math.floor(Math.random() * 500), 'FIELD20': Math.floor(Math.random() * 700), 'FIELD21': Math.floor(Math.random() * 800), 'FIELD22': Math.floor(Math.random() * 1000), 'FIELD23': Math.floor(Math.random() * 2000), 'FIELD24': Math.floor(Math.random() * 150), 'FIELD25': Math.floor(Math.random() * 1000), 'FIELD26': Math.floor(Math.random() * 100), 'FIELD27': Math.floor(Math.random() * 400), 'FIELD28': Math.floor(Math.random() * 600), 'FIELD29': Math.floor(Math.random() * 500), 'FIELD30': Math.floor(Math.random() * 300),
//         });
//     }
// }
// dataSource();;

// var hostUrl = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';
// var data = new ej.data.DataManager({
//     url: hostUrl,
//     adaptor: new ej.data.ODataAdaptor,
//     crossDomain: true
// });

// var grid = new ej.grids.Grid({
//     dataSource: data,
//     allowPaging: true,
//     allowPaging: true,
//     toolbar: ['Add', 'Edit', 'Delete'],
//     editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
//     columns: [
//         // { field: 'OrderID', headerText: "Order 'ID", width: 130, textAlign: 'Right',  },
//         // { field: 'CustomerID', headerText: 'Customer ID', width: 170 },
//         { field: 'ShipName', headerText: 'Ship Name', width: 150, textAlign: 'Center' },
//     ],
//     pageSettings: { pageCount: 3 }
    // dataSource: virtualData,
    // enableVirtualization: true,
    // enableColumnVirtualization: true,
    // height: 300,
    // width: 700,
    // allowFiltering: true,
    // filterSettings: {
    //     type: 'Excel',
    // },
    // editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Normal' },
    // toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    // columns: [
    // { field: 'SNo', headerText: 'S.No', width: 120, isPrimaryKey: true, validationRules: { required: true } },
    // { field: 'FIELD1', headerText: 'Player Name', width: 140, editType: 'dropdownedit', validationRules: { required: true } },
    // { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
    // { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
    // { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' },
    // { field: 'FIELD5', headerText: 'LGID', width: 120, textAlign: 'Right' },
    // { field: 'FIELD6', headerText: 'GP', width: 120, textAlign: 'Right' },
    // { field: 'FIELD7', headerText: 'GS', width: 120, textAlign: 'Right' },
    // { field: 'FIELD8', headerText: 'Minutes', width: 120, textAlign: 'Right' },
    // { field: 'FIELD9', headerText: 'Points', width: 120, textAlign: 'Right' },
    // { field: 'FIELD10', headerText: 'oRebounds', width: 130, textAlign: 'Right' },
    // { field: 'FIELD11', headerText: 'dRebounds', width: 130, textAlign: 'Right' },
    // { field: 'FIELD12', headerText: 'Rebounds', width: 120, textAlign: 'Right' },
    // { field: 'FIELD13', headerText: 'Assists', width: 120, textAlign: 'Right' },
    // { field: 'FIELD14', headerText: 'Steals', width: 120, textAlign: 'Right' },
    // { field: 'FIELD15', headerText: 'Blocks', width: 120, textAlign: 'Right' },
    // { field: 'FIELD16', headerText: 'Turnovers', width: 130, textAlign: 'Right' },
    // { field: 'FIELD17', headerText: 'PF', width: 130, textAlign: 'Right' },
    // { field: 'FIELD18', headerText: 'fgAttempted', width: 150, textAlign: 'Right' },
    // { field: 'FIELD19', headerText: 'fgMade', width: 120, textAlign: 'Right' },
    // { field: 'FIELD20', headerText: 'ftAttempted', width: 150, textAlign: 'Right' },
    // { field: 'FIELD21', headerText: 'ftMade', width: 120, textAlign: 'Right' },
    // { field: 'FIELD22', headerText: 'ThreeAttempted', width: 150, textAlign: 'Right' },
    // { field: 'FIELD23', headerText: 'ThreeMade', width: 130, textAlign: 'Right' },
    // { field: 'FIELD24', headerText: 'PostGP', width: 120, textAlign: 'Right' },
    // { field: 'FIELD25', headerText: 'PostGS', width: 120, textAlign: 'Right' },
    // { field: 'FIELD26', headerText: 'PostMinutes', width: 120, textAlign: 'Right' },
    // { field: 'FIELD27', headerText: 'PostPoints', width: 130, textAlign: 'Right' },
    // { field: 'FIELD28', headerText: 'PostoRebounds', width: 130, textAlign: 'Right' },
    // { field: 'FIELD29', headerText: 'PostdRebounds', width: 130, textAlign: 'Right' },
    // { field: 'FIELD30', headerText: 'PostRebounds', width: 130, textAlign: 'Right', editType: 'numericedit', validationRules: { required: true } }]
// });

// grid.appendTo('#Grid');

var grid = new ej.grids.Grid({
    dataSource: window.hierarchyOrderdata,
    rowRenderingMode: 'Vertical',
    enableAdaptiveUI: true,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    pageSettings: { pageCount: 3 },
    height: '100%',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, width: 180, validationRules: { required: true, number: true } },
        { field: 'Freight', headerText: 'Freight', width: 180, format: 'C2', editType: 'numericedit', validationRules: { required: true } },
        //{ field: 'CustomerName', headerText: 'Name', width: 180, validationRules: { required: true } },
        { field: 'ShipCity', headerText: 'Ship City', width: 180 },
    ],
    aggregates: [{
        columns: [{
            type: 'Sum',
            field: 'Freight',
            format: 'C2',
            footerTemplate: 'Sum: ${Sum}'
        }]
    }],
    load: function() {
        if (!ej.base.Browser.isDevice) {
            grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
        }
    }
});
if (ej.base.Browser.isDevice) {
    grid.appendTo('#adaptivedevice');
    document.getElementsByClassName('e-mobile-layout')[0].style.display = 'none';
} else {
    grid.appendTo('#adaptivebrowser');
}

// enable/disable vertical row direction
var directionChange = new ej.buttons.CheckBox({
    change: function(e) {
        if (e.checked) {
            grid.rowRenderingMode = 'Horizontal';
        } else {
            grid.rowRenderingMode = 'Vertical';
        }
    }
}); 
