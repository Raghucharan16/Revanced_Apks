window.onload = function () {
  const apkListElement = document.getElementById("apk-list");
  const microgListElement = document.getElementById("microg-list");

  // List of ReVanced APKs in the releases folder
  const apks = [
    "youtube-revanced-v19.16.39.apk",
    "youtube-revanced-extended-v7.1.apk",
    "music-revanced-extended-v7.1.apk",
  ];

  // List of microG APK in the releases folder
  const microgApk = "microG.apk"; // Assuming this is the name of your microG APK

  // Populate ReVanced APKs
  if (apks.length === 0) {
    const noApkMessage = document.createElement("p");
    noApkMessage.textContent =
      "No ReVanced APKs available for download at the moment.";
    noApkMessage.classList.add("text-gray-400", "text-center");
    apkListElement.appendChild(noApkMessage);
  } else {
    apks.forEach((apk) => {
      const apkCard = document.createElement("div");
      apkCard.classList.add(
        "bg-gray-800",
        "p-4",
        "rounded-lg",
        "shadow-lg",
        "text-center",
        "flex",
        "justify-between"
      );

      const apkName = document.createElement("p");
      apkName.textContent = apk;
      apkName.classList.add("text-lg", "font-semibold", "mb-2");

      const img = document.createElement("img");
      img.src = "./downloadicon.png";
      img.classList.add("rounded-full", "w-10", "h-10");

      const apkLink = document.createElement("a");
      apkLink.href = "./releases/" + apk;
      apkLink.append(img);
      apkLink.download = apk;

      apkCard.appendChild(apkName);
      apkCard.appendChild(apkLink);

      apkListElement.appendChild(apkCard);
    });
  }

  // Populate microG APK
  if (!microgApk) {
    const noMicrogMessage = document.createElement("p");
    noMicrogMessage.textContent = "microG APK is not available at the moment.";
    noMicrogMessage.classList.add("text-gray-400", "text-center");
    microgListElement.appendChild(noMicrogMessage);
  } else {
    const microgCard = document.createElement("div");
    microgCard.classList.add(
      "bg-gray-800",
      "p-4",
      "rounded-lg",
      "shadow-lg",
      "text-center",
      "flex",
      "justify-between"
    );

    const microgName = document.createElement("p");
    microgName.textContent = microgApk;
    microgName.classList.add("text-lg", "font-semibold", "mb-2");

    const img = document.createElement("img");
    img.src = "./downloadicon.png";
    img.classList.add("rounded-full", "w-10", "h-10");

    const microgLink = document.createElement("a");
    microgLink.href = "./releases/" + microgApk;
    microgLink.append(img);
    microgLink.download = microgApk;

    microgCard.appendChild(microgName);
    microgCard.appendChild(microgLink);

    microgListElement.appendChild(microgCard);
  }
};
