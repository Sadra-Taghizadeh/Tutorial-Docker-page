document.querySelectorAll(".dev__clipborad-box-copy").forEach((copyButton) => {
  copyButton.addEventListener("click", function () {
    // انتخاب جعبه متن کپی شونده
    const codeText = this.previousElementSibling.innerText;

    // ساختن یک عنصر متنی برای انتخاب و کپی متن
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = codeText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    // نمایش پیغام "Copied!" و تغییر حالت
    this.querySelector(".dev__clipborad-box-notice-copy").style.display =
      "none";
    this.querySelector(".dev__clipborad-box-notice-copied").style.display =
      "block";

    // بعد از 2 ثانیه، دوباره پیغام "Copy URL" نمایش داده شود
    setTimeout(() => {
      this.querySelector(".dev__clipborad-box-notice-copy").style.display =
        "block";
      this.querySelector(".dev__clipborad-box-notice-copied").style.display =
        "none";
    }, 2000);
  });
});

function copyToClipboard(text, elementId) {
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = text;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  const notice = document.getElementById(elementId);
  notice.innerText = "Copied!";
  setTimeout(() => {
    notice.innerText = "Copy URL";
  }, 2000); // نمایش پیام "Copied!" به مدت 2 ثانیه
}
