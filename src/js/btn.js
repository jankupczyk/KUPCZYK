function BSsmbtn() {
    Swal.fire({
        title: '<strong>Banco Santander</strong>',
        html:
            '<ul>BRIDGE:</ul>' +
            '<li>REMEDY</li>' +
            '<li>ZABBIX</li>' +
            '<li>GrayLog</li>' +
            '<li>"Verify" policy</li>' +
            '<li>DMZ and contact with external companies</li>' +
            '<li>exKB branch links</li>' +
            '<li>Backup data verification</li>' +
            '<li>CORTEX</li>' +
            '<li>Orion</li>' +
            '<li>BMC</li>' +
            '<li>List and docket of disks and tapes</li>' +
            '<li>CMDB_INFRA enumeration</li>' +
            '<br>' +
            '<ul>IT service departament:</ul>' +
            '<li>JSON</li>' +
            '<li>cURL</li>' +
            '<li>JQ</li>',
        focusConfirm: false,
    })

}

function HTsmbtn() {
    Swal.fire({
        title: '<strong>Hardsoft-Telekom</strong>',
        html:
            '<ul>Service:</ul>' +
            '<li>Repair and diagnostics of computers</li>' +
            '<li>Server Support and Maintenance</li>' +
            '<li>Documentation of orders</li>' +
            '<li>Test and diagnostics of the network</li>',
        focusConfirm: false,
    })
}

function resumeon() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Currently there's nothing to see here!",
    })
}
