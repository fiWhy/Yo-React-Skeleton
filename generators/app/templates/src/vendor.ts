if (process.env.envconfig.production && "serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
        console.log("Active service worker found, no need to register")
    } else {
        navigator.serviceWorker
            .register("/sw.js", {
                scope: "./"
            })
            .then(function (reg) {
                console.log("Service Worker Registered for scope:" + reg.scope);
            });
    }
}