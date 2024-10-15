document.addEventListener('DOMContentLoaded', function () {
    const apkList = document.getElementById('apk-list');

    // List of APK files (will be automatically updated by the workflow)
    const apks = [
        'YouTube-ReVanced-v1.apk',
        'YouTube-Music-ReVanced-v1.apk'
    ];

    // Dynamically create download links
    apks.forEach(apk => {
        const apkLink = document.createElement('a');
        apkLink.href = `releases/${apk}`;
        apkLink.className = 'apk-link';
        apkLink.textContent = `Download ${apk}`;
        apkList.appendChild(apkLink);
    });
});
