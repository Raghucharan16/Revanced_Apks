<<<<<<< HEAD
window.onload = function() {
    // The array containing the APK filenames is defined in the GitHub Action
    var apkContainer = document.getElementById('apk-list');

    if (apkList.length === 0) {
        var message = document.createElement('p');
        message.textContent = 'No APKs available for download at the moment.';
        apkContainer.appendChild(message);
    } else {
        apkList.forEach(function(apk) {
            var link = document.createElement('a');
            link.href = './releases/' + apk;
            link.textContent = apk;
            link.download = apk;
            apkContainer.appendChild(link);
            apkContainer.appendChild(document.createElement('br')); // Add line break
        });
    }
};
=======
var apkList = [];
apkList.push('music-revanced-extended-v7.16.53-arm64-v8a.apk');
apkList.push('youtube-revanced-extended-v19.16.39-all.apk');
apkList.push('youtube-revanced-v19.16.39-all.apk');
>>>>>>> afd194be3a5b6e47e63d7bc10fa5e91c45dc425b
