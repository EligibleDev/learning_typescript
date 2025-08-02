// interfaces
interface monitor {
    res: number | string;
    size: number;
}

const buildMonitor = (monitor: monitor) => {
    const res = monitor.res;
    const size = monitor.size;

    return `${res}, ${size} inch Monitor `;
};

buildMonitor({ res: "1200hz", size: 19 });
// buildMonitor({res: "1200hz", size: 19, brightness:12})
// NOTE: error because this will has an extra parameter. but if we pass on a extra property inside another object it will not mind. but surely check for the ones that really needs. This is because javascripts pass by reference or something.

const monitorWithExtraBrightness = {
    res: "1400hz",
    size: 21,
    brightness: 16,
};

buildMonitor(monitorWithExtraBrightness);
// NOTE: this will not give error cuz im passing the reference not the object itself. but it will check the mandatory parameters though.
