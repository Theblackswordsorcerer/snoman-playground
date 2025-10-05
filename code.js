
const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const runBtn = document.getElementById("run-btn");
const outputIframe = document.getElementById("output");


runBtn.addEventListener("click", () => {
    
    const htmlCode = htmlEditor.value;
    const cssCode = `<style>${cssEditor.value}</style>`;
    const jsCode = `<script>${jsEditor.value}<\/script>`;

    
    const iframeDoc = outputIframe.contentDocument || outputIframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(htmlCode + cssCode + jsCode);
    iframeDoc.close();
});
