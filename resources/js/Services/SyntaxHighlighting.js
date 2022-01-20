import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github-dark.css';

import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import html from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

hljs.registerLanguage('php', php);
hljs.registerLanguage('xml', html);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('yaml', yaml);


export function highlight(selector = null) {
    if (!selector) {
        hljs.highlightAll();
        return;
    }

    document.querySelectorAll(selector + ' pre code').forEach( highlightElement )
}

export function highlightElement(element) {
    hljs.highlightElement(element);
}
