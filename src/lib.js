export default function lib ({hours, minutes, separator}) {
    const currentD = new Date();
    const currentH = currentD.getHours();
    const currentS = currentD.getSeconds();

    let currentM = currentD.getMinutes();

    if (currentM < 10) currentM = '0' + currentD.getMinutes();

    hours.innerHTML = currentH;
    minutes.innerHTML = currentM;

    separator.style.visibility = currentS % 2 ? 'visible' : 'hidden';
}
