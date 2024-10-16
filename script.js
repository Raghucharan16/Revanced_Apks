document.addEventListener("DOMContentLoaded", function () {
  const apkList = document.getElementById("apk-list");

  // List of APK files
  const apks = [
    "Youtube Premium v2.0.6",
    "Netflix Mod apk",
    "Prime Video",
    "Hotstar Premium Mod",
    "Prime Video Mod apk",
    "Filmora Premium",
    "Adobe X reader hijx sdkfjdsk",
  ];

  apks.forEach((apk) => {
    const apkBlock = document.createElement("div");
    apkBlock.className =
      "bg-gray-800 p-6 rounded-lg flex justify-between items-center shadow-lg hover:bg-gray-700 transition duration-300";

    const apkTitle = document.createElement("h3");
    apkTitle.className = "text-base md:text-lg font-semibold";
    apkTitle.textContent = apk;

    const downloadLink = document.createElement("a");
    downloadLink.href = `releases/${apk}`;
    downloadLink.className =
      "bg-indigo-500 p-3 rounded-full hover:bg-indigo-600 transition";

    // Just adding svg
    const svgIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon.setAttribute("class", "h-6 w-6 text-white");
    svgIcon.setAttribute("fill", "none");
    svgIcon.setAttribute("viewBox", "0 0 24 24");
    svgIcon.setAttribute("stroke", "currentColor");

    const svgPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    svgPath.setAttribute("stroke-linecap", "round");
    svgPath.setAttribute("stroke-linejoin", "round");
    svgPath.setAttribute("stroke-width", "2");
    svgPath.setAttribute(
      "d",
      "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
    );

    svgIcon.appendChild(svgPath);
    // svg end

    downloadLink.appendChild(svgIcon);

    apkBlock.appendChild(apkTitle);
    apkBlock.appendChild(downloadLink);

    apkList.appendChild(apkBlock);
  });
});
