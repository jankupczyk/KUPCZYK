function cookieAGR() {
    Swal.fire({
        title: 'Cookie Consent',
        text: 'We use cookies or other tracking technologies from the following partners. These are used to personalize your experience, connect with social networks, and tailor advertising to better match your interests. This may include tracking across our sites, sites operated by third parties, and multiple devices.',
        width: '44%',
        height: 100,
        position: 'center',
        showDenyButton: true,
        confirmButtonText: 'Accept',
        denyButtonText: 'Reject',
        background: 'url(public/assets/photos/webp/cookie.webp)',
    }).then((result) => {
        if (result.isConfirmed) {
            swal.fire('Cookie Choices Saved', '', 'Success')
            document.cookie = 'cookieStringData';

        } else if (result.isDenied) {
            swal.fire('Cookie Choices Saved', '', 'Success')
        }
    })
}

const cookieStringData = (function () {
    return {
        setCookie: (cname, cvalue, exdays) => {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            const expires = 'COOKIE expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + '; ' + expires;
        },
        getCookie: (cname) => {
            const name = cname + '=';
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i += 1) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1);
                if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
            }
            return '';
        },
        checkCookie: (cname) => {
            const cookie = window.CookieObj.getCookie(cname);
            if (cookie !== '') {
                return true;
            }
            return false;
        },
    };
}());
window.CookieObj = cookieStringData;
