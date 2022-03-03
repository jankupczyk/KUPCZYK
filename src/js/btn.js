function BSsmbtn() {
    Swal.fire({
        title: '<strong>Banco Santander</strong>',
        backdrop: `rgba(0, 0, 0, 1);`,
        imageUrl: 'public/assets/photos/webp/santander.webp',
        imageWidth: 90,
        imageHeight: 90,
        imageAlt: 'Banco Santander',
        html:
            '<span class="w-ctegory" style="color: crimson;">IT Services, Monitoring ◦Internship</span>' +
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
            '<li>Telephone service support (ATM)</li>' +
            '<br>' +
            '<ul>IT service departament:</ul>' +
            '<li>JSON</li>' +
            '<li>cURL</li>' +
            '<li>JQ</li>' +
            '<br>' +
            '<span class="w-date" style="color: crimson; font-size: .8rem;">March 2020 - April 2020 ◂ 2 months</span>',
        focusConfirm: false,
    })

}

function HTsmbtn() {
    Swal.fire({
        title: '<strong>Hardsoft-Telekom</strong>',
        backdrop: `
        rgba(0, 0, 0, 1);
      `,
        imageUrl: 'public/assets/photos/webp/hardsoft.webp',
        imageWidth: 90,
        imageHeight: 90,
        imageAlt: 'Hardsoft-Telekom',
        html:
            '<span class="w-ctegory" style="color: crimson;">Apprentice ◦Internship</span>' +
            '<ul>Service:</ul>' +
            '<li>Repair and diagnostics of computers</li>' +
            '<li>Server Support and Maintenance</li>' +
            '<li>Documentation of orders</li>' +
            '<li>Test and diagnostics of the network</li>' +
            '<br>' +
            '<span class="w-date" style="color: crimson; font-size: .8rem;">May 2019 - June 2019 ◂ 2 months</span>',
        focusConfirm: false,
    })
}

function cvon() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The file will be downloaded to your computer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Select CV language',
                '<select name="lang" id="cvform" class="Select-button"> <option value="pl" class="Polish" onclick="downloadPL()">Polish  🇵🇱</option> <option value="en" class="English" onclick="downloadGB()">English  🇬🇧</option> </select>'
            )
        }
        else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                '',
                'error'
            )
        }
    })
}

