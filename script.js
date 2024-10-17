window.onload = function() {
    const apkListElement = document.getElementById('apk-list');

    // List of APKs in the releases folder
    const apks = [
        'youtube-revanced-v19.16.39.apk',
        'youtube-revanced-extended-v7.1.apk',
        'music-revanced-extended-v7.1.apk'
    ];

    if (apks.length === 0) {
        const noApkMessage = document.createElement('p');
        noApkMessage.textContent = 'No APKs available for download at the moment.';
        noApkMessage.classList.add('text-gray-400', 'text-center');
        apkListElement.appendChild(noApkMessage);
    } else {
        apks.forEach(apk => {
            const apkCard = document.createElement('div');
            apkCard.classList.add('bg-gray-800', 'p-4', 'rounded-lg', 'shadow-lg', 'text-center');

            const apkName = document.createElement('p');
            apkName.textContent = apk;
            apkName.classList.add('text-lg', 'font-semibold', 'mb-2');

            const apkLink = document.createElement('a');
            apkLink.href = './releases/' + apk;
            apkLink.textContent = 'Download';
            apkLink.classList.add('bg-indigo-500', 'text-white', 'py-2', 'px-4', 'rounded-lg', 'hover:bg-indigo-600');
            apkLink.download = apk;

            apkCard.appendChild(apkName);
            apkCard.appendChild(apkLink);

            apkListElement.appendChild(apkCard);
        });
    }
};