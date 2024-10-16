window.onload = function() {
    // The array containing the APK filenames is defined in the GitHub Action
    var apkContainer = document.getElementById('apk-list');

    // Check if apkList exists
    if (typeof apkList === 'undefined') {
        console.error('apkList is undefined!');
        apkContainer.innerHTML = '<p>Error: No APKs available.</p>';
        return;
    }

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
