export class DetectorPlatform {
    static getPlatform() {
        const userAgent = navigator.userAgent;
        
        for (let i in this.devices) {
            if (this.devices[i].platform.test(userAgent)) {
                return this.devices[i].device;
            }
        }

        return null;
    };

    private static devices = [
        {device: 'Android', platform: /Android/},
        {device: 'iPhone', platform: /iPhone/},
        {device: 'iPad', platform: /iPad/},
        {device: 'Symbian', platform: /Symbian/},
        {device: 'Windows Phone', platform: /Windows Phone/},
        {device: 'Tablet OS', platform: /Tablet OS/},
        {device: 'Linux', platform: /Linux/},
        {device: 'Windows', platform: /Windows NT/},
        {device: 'Macintosh', platform: /Macintosh/}
    ];
};