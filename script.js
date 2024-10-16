window.onload = function() {
    var apkContainer = document.getElementById('apk-list');
    apkList.forEach(function(apk) {
        var link = document.createElement('a');
        link.href = './releases/' + apk;
        link.textContent = apk;
        apkContainer.appendChild(link);
        apkContainer.appendChild(document.createElement('br')); // Add line break
    });
};
