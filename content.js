var elements = document.getElementsByTagName('div');


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3 && node.nodeName != 'script' && node.nodeName != 'style') {
            var text = node.textContent;
            var replacedText = text.replace(/\d+/g, '42');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}