export const parseDate = (dateTime) => {

    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const hour = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');

    const res = `${year}/${month}/${day}  ${hour}:${min}`;

    return res;
};

export const diffInHours = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    let diff = 0;
    diff = diff + ( end.getFullYear() - start.getFullYear() ) * 8760;
    diff = diff + ( end.getMonth() - start.getMonth() ) * 730.001;
    diff = diff + ( end.getDate() - start.getDate() ) * 24;
    diff = diff + ( end.getHours() - start.getHours() ) * 1;
    diff = diff + ( end.getMinutes() - start.getMinutes() ) * 1/60;
    return diff;
}